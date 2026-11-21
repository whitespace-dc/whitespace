---
title_en: "JEDEC Previews DDR6 Standard With 2.35x Bandwidth Gain, 96-Bit Bus, and Narrower DIMMs"
title_zh: "JEDEC 預覽 DDR6 規格：頻寬提升 2.35 倍、96 位元匯流排、模組縮窄 44%"
summary_en: "JEDEC has released a preview of its in-development DDR6 memory specification, disclosing plans for a 2.35x bandwidth increase over DDR5 achieved by combining faster per-pin data rates with a wider 96-bit memory bus, alongside a 44% reduction in module width aimed at fitting more memory into dense server configurations."
summary_zh: "JEDEC 本週發布 DDR6 動態隨機存取記憶體規格預覽，揭示較 DDR5 提升 2.35 倍頻寬的計畫，透過更快的每引腳傳輸速率結合全新 96 位元記憶體匯流排雙管齊下，同時將標準模組寬度縮減 44%，以因應資料中心高密度部署需求。"
body_en: |
  JEDEC, the industry consortium responsible for developing memory standards, released a preview this week of its in-development DDR6 dynamic random-access memory (DRAM) specification, disclosing plans for a 2.35x bandwidth increase over current DDR5 modules and a significant physical redesign that would shrink the standard module width by 44%.

  The preview is the first official disclosure of what the next generation of mainstream server memory will look like. DDR5 has been in production for more than six years, and while DDR6 development has been known about within the industry, the consortium had not previously confirmed its specifics.

  ## Bandwidth: two simultaneous changes

  DDR6's bandwidth gains come from two compounding changes. The first is a faster per-pin data rate: the specification is planned to start at 12.8 gigatransfers per second (GT/sec) and reach at least 14.4 GT/sec, against DDR5's current maximum of 9.2 GT/sec — a 57% increase at the top end.

  The second change is more fundamental. JEDEC is planning to widen the data bus on individual memory modules from 64 bits to 96 bits, adding 32 additional data lines (called DQ lines). A 64-bit module width has been a constant across DRAM generations going back nearly three decades to the earliest single-data-rate SDRAM.

  Widening the bus alone delivers 50% more bandwidth at identical clock speeds compared with a DDR5 module. Combined with the higher data rate, a DDR6-14400 module — running at the top specified speed on the wider bus — would deliver 172.8 gigabytes per second (GB/sec). A DDR5-9200 module delivers 73.6 GB/sec, making the DDR6-14400 figure 2.35 times greater. The source notes that current server platforms top out at DDR5-8000 in practice, making the real-world gap at deployment wider still.

  ## Smaller modules, higher density

  Widening the data bus while reducing the module's physical size required JEDEC to redesign the form factor. The consortium is introducing a 74mm-wide module for DDR6, compared to the 133mm width standard across DDR4 and DDR5 — a 44% reduction. For scale, the new module is described as only slightly wider than a DDR5 SO-DIMM, the compact form factor currently used in laptops.

  The motivation is data center density. High-channel-count server configurations — such as 16-channel DDR5 platforms — consume a large amount of motherboard space that cannot be meaningfully reduced while module widths remain at 133mm. A smaller footprint allows more memory slots to be physically placed in a given area, the consortium stated.

  JEDEC says it is working on multiple DDR6 form factors, potentially including registered DIMMs (RDIMMs, enterprise-grade modules with an on-board register that buffers signals between the memory controller and the DRAM chips), unbuffered DIMMs (UDIMMs), and compression-attached memory modules (CAMMs, a form factor introduced mid-generation for DDR5). The preview does not confirm whether the existing 133mm module width will also be retained as an option.

  Notably, the announcement makes no mention of SO-DIMMs, the small-outline modules currently used in laptops. The source suggests the laptop form factor may give way to CAMMs or soldered memory in the DDR6 generation.

  ## Internal architecture

  Delivering data across a wider, faster bus requires several changes inside the specification. DDR6 will employ a pseudo-channel architecture that subdivides individual memory channels — a technique analogous in concept to the sub-channel architecture DDR5 uses to manage bandwidth. The preview does not specify exactly how the two compare.

  The number of memory banks per bank group is being doubled, from 8 under DDR5 to a provisionally stated 16 under DDR6. More banks allow memory operations to be interleaved more densely, reducing idle time caused by banks completing internal refresh cycles before they can service new read or write requests.

  Maximum die density — the storage capacity of a single DRAM chip — doubles from 64 gigabits (Gbit) under DDR5 to 128 Gbit under DDR6. The specification also includes unspecified optimizations for die stacking, which layers multiple chips vertically within a single package to increase capacity per module. Three-dimensional stacked, or 3DS, DIMMs exist today but remain relatively uncommon, according to the source.

  ## Power and reliability

  The consortium is targeting what the announcement describes as significantly improved performance-per-watt compared with DDR5. DDR6 will switch from VDDQ-terminated input/output signaling — where signal lines are pulled toward the memory supply voltage — to VSS termination, where lines are pulled toward ground. The specification will also include low-power operating modes for data center deployment, though the preview does not detail them.

  On reliability, DDR6 will support multiple error-correcting code (ECC) implementations, the preview states. DDR5 mandates a single ECC scheme at the module level for transmission integrity, plus on-die ECC to correct errors in individual memory cells. The source notes that memory infrastructure vendors have recently proposed layering additional software-defined ECC on top of these mechanisms; the multi-implementation approach in DDR6 may leave room for configurations that trade some storage capacity for higher reliability headroom.

  ## Data center implications

  JEDEC framed the DDR6 preview explicitly around data center requirements. The three central changes — more bandwidth per module, a smaller module footprint, and higher per-module capacity from larger die densities — align with the three constraints data center operators commonly cite: memory bandwidth limits on AI and high-performance computing workloads, board space in high-channel-count server designs, and total addressable memory per server node.

  The DDR6 specification remains under development. The release is a preview of current plans, not a finalized standard. JEDEC has not announced a completion timeline for the specification or a date when compliant hardware is expected to reach the market.
body_zh: |
  JEDEC（記憶體標準產業聯盟）本週發布了旗下正在開發中的 DDR6 動態隨機存取記憶體（DRAM）規格預覽，揭示較現行 DDR5 模組提升 2.35 倍頻寬的計畫，並宣告將進行大幅縮減標準模組寬度 44% 的全新實體設計方向。

  此次預覽是下一代主流伺服器記憶體規格首度正式公開揭露。DDR5 已量產超過六年，業界雖早已知悉 DDR6 的開發進程，但 JEDEC 此前從未正式確認其規格細節。

  ## 頻寬：兩項同步改變

  DDR6 的頻寬提升來自兩項相互疊加的改變。第一項是更快的每引腳資料傳輸速率：規格計畫從每秒 12.8 十億次傳輸（GT/sec）起步，並至少達到 14.4 GT/sec，相較於 DDR5 目前最高的 9.2 GT/sec，高速端提升幅度達 57%。

  第二項改變更為根本。JEDEC 計畫將單一記憶體模組的資料匯流排寬度從 64 位元擴展至 96 位元，新增 32 條資料線（稱為 DQ 線）。64 位元的模組寬度自近三十年前最早的單倍資料速率 SDRAM 問世以來，歷經數代 DRAM 皆維持不變。

  單就擴寬匯流排而言，在相同時脈速度下便可較 DDR5 模組多出 50% 的頻寬。結合更高的資料傳輸速率，一條以最高規格速度運行於更寬匯流排上的 DDR6-14400 模組，每秒可傳輸 172.8 GB（GB/sec）。DDR5-9200 模組的傳輸速率為 73.6 GB/sec，換算下來 DDR6-14400 的數值是後者的 2.35 倍。報導指出，目前伺服器平台實際部署上最高僅支援 DDR5-8000，因此在真實環境中兩者之間的差距將更為顯著。

  ## 更小模組、更高密度

  在擴寬資料匯流排的同時縮減模組實體尺寸，要求 JEDEC 重新設計外形規格。JEDEC 為 DDR6 導入了寬度 74mm 的模組，相較於 DDR4 與 DDR5 通用的 133mm 標準寬度縮減了 44%。就比例而言，新模組被描述為僅略寬於 DDR5 SO-DIMM——也就是目前筆記型電腦所採用的緊湊外形規格。

  推動這一設計的動機在於資料中心密度。高通道數伺服器配置——例如 16 通道 DDR5 平台——佔用大量主機板空間，而只要模組寬度維持在 133mm，就無法有效縮減。JEDEC 表示，更小的佔用面積能讓同樣區域內實體安裝更多記憶體插槽。

  JEDEC 表示正在研發多種 DDR6 外形規格，可能包括：具備板載緩衝晶片、在記憶體控制器與 DRAM 晶片之間緩衝訊號的企業級模組 RDIMM（registered DIMM）、無緩衝模組 UDIMM，以及在 DDR5 世代中途引入的壓縮附接記憶體模組 CAMM。此次預覽並未確認是否同時保留 133mm 寬度模組作為選項。

  值得注意的是，本次公告完全未提及 SO-DIMM——亦即目前筆記型電腦所使用的小型模組。報導分析，在 DDR6 世代，筆電的記憶體外形規格可能讓位於 CAMM 或焊接式記憶體。

  ## 內部架構

  在更寬、更快的匯流排上傳輸資料，需要規格內部進行多項調整。DDR6 將採用偽通道（pseudo-channel）架構，將單一記憶體通道再細分——其概念類似於 DDR5 用來管理頻寬的子通道（sub-channel）架構。預覽文件並未具體說明兩者之間的差異。

  每個記憶體庫群組（bank group）的記憶體庫（bank）數量將從 DDR5 的 8 個增加一倍，暫定達到 DDR6 的 16 個。更多的記憶體庫可讓記憶體操作更密集地交錯執行，減少因記憶體庫在完成內部更新週期前無法服務新讀寫請求而造成的閒置時間。

  單一 DRAM 晶片的最大晶粒密度（die density，即儲存容量）從 DDR5 的 64 Gbit 倍增至 DDR6 的 128 Gbit。規格中亦包含針對晶粒堆疊（die stacking）技術的未具體說明之最佳化——晶粒堆疊可在單一封裝內垂直疊加多顆晶片，以提升每個模組的容量。報導指出，三維堆疊（3DS）DIMM 目前雖已存在，但仍相對罕見。

  ## 功耗與可靠性

  JEDEC 的目標是相較於 DDR5 大幅改善每瓦效能。DDR6 將從 VDDQ 終端輸出入（I/O）訊號方式——訊號線被拉向記憶體供電電壓——切換至 VSS 終端，改由訊號線拉向接地端。規格中亦將包含適用於資料中心部署的低功耗運作模式，但預覽文件未透露詳細內容。

  在可靠性方面，預覽說明 DDR6 將支援多種錯誤更正碼（ECC）實作方案。DDR5 在模組層級強制採用單一 ECC 機制以確保傳輸完整性，並以晶粒內 ECC 修正個別記憶體單元的錯誤。報導指出，記憶體基礎設施廠商近期已提出在上述機制之上再疊加軟體定義 ECC 的方案；DDR6 採取多實作方案的設計，或許為部分配置保留空間——以犧牲一定儲存容量換取更高的可靠性餘裕。

  ## 資料中心的影響

  JEDEC 在此次 DDR6 預覽中明確以資料中心需求為核心訴求。三項核心改變——每模組更高頻寬、更小模組佔用面積，以及更大晶粒密度帶來的更高單模組容量——恰好對應資料中心業者最常提及的三項瓶頸：AI 與高效能運算工作負載的記憶體頻寬限制、高通道數伺服器設計中的主機板空間不足，以及每個伺服器節點的可定址記憶體總量上限。

  DDR6 規格目前仍在開發階段。本次發布為現行計畫之預覽，並非最終確定的標準。JEDEC 尚未宣布規格完成時程，也未說明符合規格的硬體預計何時進入市場。
date: "2026-11-22"
source_published: "2026-11-20T23:40:12.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: JEDEC Previews DDR6 Memory Standard: 2.35x More Bandwidth, 44% Narrower DIMMs (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/jedec-previews-ddr6-memory-standard-2-35x-more-bandwidth-44-narrower-dimms/"
    title: "JEDEC Previews DDR6 Memory Standard: 2.35x More Bandwidth, 44% Narrower DIMMs"
    trust: 3
    type: primary
    published_at: "2026-11-20T23:40:12.000Z"
---
