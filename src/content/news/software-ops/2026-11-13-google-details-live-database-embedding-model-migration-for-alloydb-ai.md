---
title_en: "Google details live-database embedding model migration for AlloyDB AI"
title_zh: "Google 發布 AlloyDB AI 嵌入模型不停機熱遷移指引"
summary_en: "Google has published guidance for upgrading vector embedding models in AlloyDB AI without taking production databases offline, addressing a persistent operational problem for teams running semantic search workloads on live systems."
summary_zh: "Google 發布了在 AlloyDB AI 中升級向量嵌入模型的操作指引，透過分階段流程確保查詢流量在整個遷移過程中持續運作，全程無需讓正式環境資料庫停機。這份指引針對向量搜尋團隊在模型世代交替時長期面臨的停機遷移難題，提供了一條文件完整、經過驗證的不停機升級路徑。"
body_en: |
  Google has published guidance for upgrading vector embedding models in AlloyDB AI without taking production databases offline, using a staged process that keeps query traffic flowing throughout the transition.

  The approach targets a common pain point in vector search operations. Vector embeddings — numerical representations of text or other data used to power semantic search — cannot be compared across models. When an operator wants to swap one embedding model for another, the standard path requires re-embedding all stored data, rebuilding indexes, and updating query logic before any live traffic can use the new model. AlloyDB AI, Google's PostgreSQL-compatible managed database service, now has a documented path that runs all of those steps concurrently with normal database operations.

  ## Migration mechanics

  According to Google's guidance, the process begins by adding a new vector column to the production table, sized to match the output dimensions of the replacement model. In the worked example, a table of product reviews moves from text-embedding-005, which produces 768-dimensional vectors, to gemini-embedding-001, which produces 3,072-dimensional vectors — a fourfold increase in vector width.

  Once the column exists, auto-embeddings are enabled on it. AlloyDB AI then backfills the new vectors in the background while the database continues serving reads and writes against the existing embedding column. Google said the system can generate embeddings at up to 3,000 per second and tracks row-level changes as inserts and updates arrive.

  ## Two modes for keeping vectors current

  AlloyDB AI supports two refresh modes during and after backfill. In transactional mode, the database updates embeddings as soon as source data changes, keeping vectors tightly aligned with underlying records. The trade-off is added write latency, because model inference runs inside each write transaction.

  In manual mode, the database marks changed rows and allows operators to refresh stale embeddings later in scheduled batches. This reduces pressure on write throughput and is the mode used in Google's migration example.

  Operators can also tune the degree of parallelism during backfill. Google outlined the trade-off with benchmark figures from a 10,000-row table: reducing max_parallel_requests from 400 to 20 cut the longest wait time experienced by concurrent writers from 5.1 seconds to 0.39 seconds, while extending total backfill time from 5.2 seconds to 7.6 seconds. Teams with write-latency-sensitive workloads can therefore throttle backfill aggressiveness at the cost of a longer migration window.

  A progress view in the database shows job state, rows processed, and estimated time remaining.

  ## Quality validation before cutover

  Google recommends that teams validate new vectors against fresh model invocations and check for missing embeddings before switching live traffic. The company cautioned that retrieval patterns can change substantially between models.

  In Google's internal tests, the top-10 nearest-neighbour results returned by text-embedding-005 and gemini-embedding-001 for the same queries overlapped by only 31 percent. Teams relying on assumed ranking behaviour, threshold-based filtering, or model-specific evaluation pipelines may need to revisit those assumptions before routing production traffic to the replacement model.

  ## Index construction

  The migration also requires building a new vector index on the replacement column. AlloyDB AI creates this index concurrently, so writes are not blocked during construction. Google uses its ScaNN (Scalable Nearest Neighbor) index format, an approximate nearest-neighbor search structure, rather than the HNSW (Hierarchical Navigable Small World) format common in open-source PostgreSQL extensions.

  Google said ScaNN index builds in AlloyDB AI were up to ten times faster than HNSW builds on open-source PostgreSQL. On a 100,000-row table, a 3,072-dimensional ScaNN index was built in approximately 50 seconds; an HNSW index using the halfvec data type took between seven and thirteen minutes on the same data.

  ## Cutover patterns

  For the final switch from old to new embeddings, Google described two options.

  The first uses an atomic column rename combined with a query function, allowing applications to cut over without code changes when the live embedding column is swapped. This supports blue-green deployment — where traffic shifts entirely from one configuration to another — but does not support per-query canary testing. It is also incompatible with transactional auto-embeddings because managed database triggers reference fixed column names.

  The second uses PostgreSQL session variables and a set-returning function. This allows operators to direct a configurable percentage of database sessions to the new model and revert quickly by changing a session parameter, making it suitable for gradual canary rollouts.

  ## Write latency during migration

  Transactional mode carries a material write-latency cost when both models are active simultaneously. Google's figures for single-row update operations showed a median write latency of approximately 37.5 milliseconds with text-embedding-005 alone. During migration, with both models active under transactional mode, that figure rose to roughly 191.0 milliseconds. After full cutover to gemini-embedding-001 alone, median write latency settled at approximately 172.0 milliseconds.

  ## Storage overhead

  Storage consumption increases substantially during migration because old and new vector columns coexist. Google's tests measured text-embedding-005 at approximately 4.5 kilobytes per row and gemini-embedding-001 at approximately 13.3 kilobytes per row, reflecting the larger 3,072-dimensional output.

  For a table with 10 million rows, Google estimated the new vector column would require approximately 133 gigabytes of storage and the new ScaNN index a further 6 gigabytes, before additional headroom for write-ahead logging and page updates.

  ## Post-cutover cleanup

  After traffic has moved to the new model, operators can remove the old embedding configuration, drop the legacy index, and clear the retired vector column in batches. Google's guidance recommends nulling out old vectors before vacuuming and dropping the column, allowing PostgreSQL's TOAST storage mechanism — which handles large column values stored outside the main table — to reclaim space incrementally. In 100,000-row tests, that sequence reclaimed 381 megabytes of TOAST space, which Google said would be available for reuse in future model upgrades.

  The guidance addresses a gap that has complicated production vector search deployments as embedding model generations turn over. Teams that have built semantic search, recommendation, or retrieval-augmented generation pipelines on AlloyDB AI now have a documented, operationally tested path for model upgrades that does not require a maintenance window. The 31 percent result overlap between the two tested models underscores that the technical migration and the validation of retrieval quality are separate problems, each requiring attention before cutover.
body_zh: |
  Google 發布了在 AlloyDB AI 中升級向量嵌入模型的完整操作指引，以分階段流程讓查詢流量在整個遷移過程中持續運作，全程無需讓正式環境資料庫停機。

  這套做法針對的是向量搜尋作業中一個常見的痛點。向量嵌入（vector embedding）是將文字或其他資料轉換為數值表示的技術，用於驅動語意搜尋，而不同模型產生的向量無法互相比較。當營運人員希望將某個嵌入模型換成另一個時，標準做法需要重新對所有儲存資料進行嵌入運算、重建索引，並在任何線上流量切換至新模型之前完成查詢邏輯的更新。AlloyDB AI 是 Google 旗下相容 PostgreSQL 的託管資料庫服務，現在已有一套文件化的流程，可在正常資料庫作業同步進行的情況下完成上述所有步驟。

  ## 遷移機制

  根據 Google 的指引，整個流程從在正式環境資料表中新增一個向量欄位開始，欄位大小須符合替換模型的輸出維度。以實際範例來看，一張產品評論資料表從 text-embedding-005（輸出 768 維向量）遷移至 gemini-embedding-001（輸出 3,072 維向量），向量寬度增加了四倍。

  欄位建立後，即可在該欄位啟用自動嵌入功能。AlloyDB AI 會在背景對新向量進行回填（backfill），同時資料庫繼續以既有嵌入欄位提供讀寫服務。Google 表示，系統每秒最多可產生 3,000 筆嵌入，並會隨著新插入或更新的資料列持續追蹤變更。

  ## 保持向量同步的兩種模式

  AlloyDB AI 在回填期間及回填完成後支援兩種更新模式。在交易模式（transactional mode）下，資料庫會在來源資料一經變更時立即更新嵌入，確保向量與底層記錄緊密同步。代價是寫入延遲增加，因為模型推論會在每次寫入交易中執行。

  在手動模式（manual mode）下，資料庫會標記已變更的資料列，讓營運人員稍後以排程批次方式重新整理過期的嵌入。這能降低對寫入吞吐量的壓力，也是 Google 遷移範例中所採用的模式。

  營運人員還可以調整回填期間的平行度。Google 以一張一萬筆資料列的資料表提供了基準測試數據：將 max_parallel_requests 從 400 降至 20，可將並行寫入者所經歷的最長等待時間從 5.1 秒縮短至 0.39 秒，但總回填時間則從 5.2 秒延長至 7.6 秒。對寫入延遲敏感的工作負載，可以犧牲較長的遷移時間來換取較低的回填強度。

  資料庫中的進度檢視頁面會顯示作業狀態、已處理的資料列數，以及預估剩餘時間。

  ## 切換前的品質驗證

  Google 建議團隊在切換線上流量前，先以最新的模型呼叫驗證新向量，並確認是否有遺漏的嵌入。Google 警告，不同模型的檢索結果可能存在顯著差異。

  在 Google 的內部測試中，text-embedding-005 與 gemini-embedding-001 針對相同查詢所回傳的前 10 筆最近鄰（nearest-neighbour）結果，重疊率僅有 31%。依賴特定排名行為、門檻式過濾，或模型專屬評估管線的團隊，在將正式流量切換至替換模型前，可能需要重新審視這些假設。

  ## 索引建構

  遷移過程也需要在替換欄位上建立新的向量索引。AlloyDB AI 以並行方式建立此索引，因此索引建構期間不會阻擋寫入作業。Google 採用的是 ScaNN（Scalable Nearest Neighbor，可擴展最近鄰搜尋）索引格式，這是一種近似最近鄰搜尋結構，有別於開源 PostgreSQL 擴充套件中常見的 HNSW（Hierarchical Navigable Small World，分層可導航小世界）格式。

  Google 表示，AlloyDB AI 的 ScaNN 索引建構速度比開源 PostgreSQL 上的 HNSW 建構快了最多十倍。在一張十萬筆資料列的資料表上，3,072 維的 ScaNN 索引約在 50 秒內完成建構；而使用 halfvec 資料型別的 HNSW 索引，在相同資料集上則需要七到十三分鐘。

  ## 切換方案

  在最終從舊嵌入切換至新嵌入的部分，Google 描述了兩種方案。

  第一種方案採用原子性欄位重新命名搭配查詢函式，讓應用程式在線上嵌入欄位完成置換後無需修改程式碼即可切換。這種做法支援藍綠部署（blue-green deployment）——流量從一個配置整批切換至另一個——但不支援逐查詢的金絲雀測試（canary testing）。此外，由於託管資料庫觸發器參照的是固定欄位名稱，這種方案也與交易式自動嵌入不相容。

  第二種方案使用 PostgreSQL 工作階段變數（session variable）搭配集合回傳函式（set-returning function）。這讓營運人員可以將可設定比例的資料庫工作階段導向新模型，並透過變更工作階段參數快速回滾，非常適合漸進式金絲雀發布。

  ## 遷移期間的寫入延遲

  在兩個模型同時啟用的情況下，交易模式會帶來顯著的寫入延遲成本。Google 針對單筆資料列更新作業的測試數據顯示：僅使用 text-embedding-005 時，寫入延遲中位數約為 37.5 毫秒；遷移期間兩個模型在交易模式下同時啟用時，這個數字攀升至約 191.0 毫秒；完全切換至 gemini-embedding-001 後，寫入延遲中位數則穩定在約 172.0 毫秒。

  ## 儲存空間開銷

  遷移期間由於新舊向量欄位並存，儲存空間消耗將大幅增加。Google 的測試測得 text-embedding-005 每筆資料列約佔 4.5 KB，gemini-embedding-001 則約為 13.3 KB，反映了較大的 3,072 維輸出。

  以一張一千萬筆資料列的資料表為例，Google 估計新向量欄位約需 133 GB 的儲存空間，新 ScaNN 索引則需額外 6 GB，尚不計預寫日誌（write-ahead logging）與頁面更新所需的額外空間。

  ## 切換後的清理工作

  流量切換至新模型後，營運人員可以移除舊嵌入設定、捨棄舊索引，並以批次方式清除已退役的向量欄位。Google 的指引建議在執行 VACUUM 並捨棄欄位前，先將舊向量設為 NULL，讓 PostgreSQL 的 TOAST 儲存機制——用於處理儲存在主資料表之外的大型欄位值——能夠以漸進方式回收空間。在十萬筆資料列的測試中，這套流程回收了 381 MB 的 TOAST 空間，Google 表示這些空間將可供未來的模型升級再利用。

  這套指引填補了長期困擾正式環境向量搜尋部署的一個缺口——尤其是在嵌入模型世代快速更迭的當下。已在 AlloyDB AI 上建立語意搜尋、推薦系統，或檢索增強生成（RAG）管線的團隊，現在擁有一條文件完整、經過實際驗證的模型升級路徑，不再需要排定維護停機時間。兩個受測模型之間僅 31% 的結果重疊率也清楚說明，技術層面的遷移與檢索品質的驗證是兩個截然不同的問題，在切換前都需要各自審慎處理。
date: "2026-11-13"
source_published: "2026-11-12T17:30:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google outlines no-downtime AlloyDB AI embedding upgrade (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/google-outlines-no-downtime-alloydb-ai-embedding-upgrade"
    title: "Google outlines no-downtime AlloyDB AI embedding upgrade"
    trust: 3
    type: primary
    published_at: "2026-11-12T17:30:00.000Z"
  - url: "https://datacenternews.asia/story/google-outlines-no-downtime-alloydb-ai-embedding-upgrade"
    title: "Google outlines no-downtime AlloyDB AI embedding upgrade"
    trust: 3
    type: corroborating
    published_at: "2026-11-12T17:30:00.000Z"
---
