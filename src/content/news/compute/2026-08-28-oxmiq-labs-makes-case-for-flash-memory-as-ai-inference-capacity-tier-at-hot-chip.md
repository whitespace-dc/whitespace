---
title_en: "Oxmiq Labs Makes Case for Flash Memory as AI Inference Capacity Tier at Hot Chips 2026"
title_zh: "Oxmiq Labs 在 Hot Chips 2026 力推快閃記憶體進軍 AI 推論容量層"
summary_en: "Oxmiq Labs presented high-bandwidth flash memory at Hot Chips 2026, arguing it can deliver 8 to 16 times the capacity of high-bandwidth DRAM at equivalent cost, but only for a narrow class of inference workloads where bandwidth demand stays low."
summary_zh: "Oxmiq Labs 於 Hot Chips 2026 大會上發表高頻寬快閃（HBF）記憶體技術，主張其容量可達高頻寬記憶體（HBM）的 8 至 16 倍且成本相當；但公司坦承，該技術僅在頻寬需求偏低的特定推論工作負載中具備競爭優勢。"
body_en: |
  Oxmiq Labs presented high-bandwidth flash (HBF) memory at Hot Chips 2026, arguing it can deliver 8 to 16 times the capacity of high-bandwidth memory (HBM) — the DRAM-based stacked memory standard in AI accelerators — at the same cost, while acknowledging the technology wins only in a narrow band of inference workloads.

  The company was candid about the limits of that claim in a way that distinguished its presentation from promotions of the same technology by major NAND flash vendors, according to coverage of the event.

  ## Hardware specifications

  Oxmiq defined HBF across three performance grades. Key figures across the range:

  - Maximum user bandwidth: 0.384 TB/s (low grade) to 3.072 TB/s (high grade)
  - UCIe interconnect rate: 8 GT/s to 32 GT/s (UCIe, Universal Chiplet Interconnect Express, is the die-to-die link standard)
  - Maximum capacity: 512 GiB on a 16-high stack

  For comparison, the company modeled an HBM-only baseline system at 22 TB/s peak bandwidth and 288 GB capacity. An all-HBF configuration at the same cost envelope drops peak bandwidth to 12.8 TB/s while raising capacity to 4 TB. A mixed configuration — two HBF stacks and six HBM stacks — sits between the two on both axes.

  ## Where the economics break down

  Oxmiq framed the memory landscape using two axes it labeled alpha (bandwidth) and beta (cost), positioning HBF as a distinct capacity point rather than a less expensive substitute for HBM. The company's central argument is that cheaper dollars per gigabyte does not translate to cheaper dollars per token served, the metric that matters for inference operators.

  To illustrate, Oxmiq ran simulations at the rack level across a 72-GPU rack using a decode-centric 1-trillion-parameter Kimi-K2 model in FP4 precision, with a workload of 1 million input tokens and 1,000 output tokens. The simulation found that, for the same rack cost, HBF provides roughly 14 times the capacity of HBM but approximately 0.6 times the bandwidth.

  The company then mapped that trade-off against batch size. HBM retained its cost-per-token advantage at rack scale. HBF fit best where capacity per server was the primary constraint, not throughput.

  ## Workload fit: where HBF wins and where it does not

  Oxmiq examined three inference scenarios to define the technology's practical range.

  In the first scenario — an all-HBF system serving a short 256-by-256 token context — HBF won on cost per token at low batch sizes. The company noted, however, that this configuration left roughly 85 percent of capacity unused, a result it described as "dead capacity."

  In the second scenario — a long-context workload at 1 million input tokens and 1,000 output tokens — HBF held a cost advantage only while bandwidth demand remained below a threshold. Once bandwidth demand rose, HBM became the better option.

  In the third scenario — a mixed HBM-plus-HBF system where HBM acts as a hot-expert cache for a mixture-of-experts (MoE) model — expert popularity flattened across mixed queries, meaning the cache paid off only at low batch sizes or when similar queries were grouped together.

  Oxmiq's overall conclusion was that HBF wins where bandwidth demand is low: specifically MoE models at small batch sizes and long-context workloads with sparse key-value (KV) cache access.

  ## Why MoE models are the primary target

  Mixture-of-experts models route each input token through a small subset of specialized sub-networks called experts, rather than the full model, reducing active compute per token. Oxmiq argued this architecture creates what it called a small-batch capacity sub-phase, during which the full model must reside in memory but bandwidth demand stays low enough for flash to compete.

  Using Kimi-K3 as a reference model, Oxmiq noted that roughly 93 percent of the model's bytes — approximately 1.45 TB — consist of MoE expert weights. The company argued this makes the expert weight pool and the KV cache the natural placement targets for HBF, while HBM handles attention weights and frequently accessed hot data.

  Oxmiq also pointed to expert parallelism as a secondary benefit. Lower-cost flash capacity would allow two nodes to hold expert weights locally rather than sharding them across eight GPUs and incurring all-to-all network traffic at every transformer layer, the company said.

  For sparse-attention model variants — the company cited DeepSeek Sparse Attention and Compressed Sparse Attention as examples — Oxmiq said the fit with HBF's low-bandwidth capacity zone was direct, though it noted the opportunity was conditional on that specific model style.

  ## Software constraints and the missing stack

  Oxmiq outlined the operating constraints that shape HBF's software requirements. Access occurs in 64 KB chunks to achieve maximum bandwidth. Data retention runs approximately 24 hours at 85 degrees Celsius under power, and the host processor manages the memory lifecycle. Because HBF is optimized for reads and constrained on writes, determining which data to place where becomes a software problem, not a hardware one.

  Oxmiq surveyed the existing inference engine ecosystem — including production serving engines such as vLLM and SGLang, and vendor-optimized stacks such as TensorRT-LLM and AWS Neuron — and identified vLLM as its production default and primary integration target.

  The company proposed a vLLM plugin that would use HBF in place of host CPU pinned memory for the KV cache and MoE expert pools. In the proposed configuration, a GPU equipped with four HBM stacks and four HBF stacks would reach 2.2 TB of total capacity at approximately 17.4 TB/s peak bandwidth — a substantial increase over current CPU-offload paths.

  An HBF allocator and placement policy do not yet exist in production form. Oxmiq identified that software layer as the missing piece before HBF becomes practical in inference deployments.
body_zh: |
  Oxmiq Labs 於 Hot Chips 2026 大會上展示高頻寬快閃（HBF）記憶體，主張其容量可達高頻寬記憶體（HBM）的 8 至 16 倍——HBM 為 AI 加速器中主流的 DRAM 堆疊記憶體標準——且成本相當，同時坦承這項技術僅在特定推論工作負載的狹窄範圍內勝出。

  根據現場報導，相較於主要 NAND 快閃廠商對同類技術的宣傳，Oxmiq 在這場發表中對技術局限的說明格外坦率，令其表現獨樹一幟。

  ## 硬體規格

  Oxmiq 將 HBF 分為三個效能等級，各等級主要規格如下：

  - 最高使用者頻寬：低階 0.384 TB/s 至高階 3.072 TB/s
  - UCIe 互連速率：8 GT/s 至 32 GT/s（UCIe 即通用小晶片互連快速標準，為晶片對晶片的連接規範）
  - 最高容量：16 層堆疊可達 512 GiB

  相比之下，Oxmiq 以全 HBM 作為基準系統，峰值頻寬為 22 TB/s、容量為 288 GB。在相同成本條件下，若改為全 HBF 配置，峰值頻寬降至 12.8 TB/s，但容量提升至 4 TB。混合配置——兩個 HBF 堆疊搭配六個 HBM 堆疊——則在頻寬與容量兩項指標上，均介於兩者之間。

  ## 經濟效益的臨界點

  Oxmiq 以兩個維度建構記憶體版圖框架，分別標記為 alpha（頻寬）與 beta（成本），將 HBF 定位為獨特的容量層，而非 HBM 的低價替代品。公司的核心論點在於：每 GB 成本較低，並不等同於每個 token 的服務成本更低——而單位 token 成本，才是推論業者真正在意的指標。

  為說明此點，Oxmiq 針對一個 72 GPU 的機架，以解碼為核心的一兆參數 Kimi-K2 模型進行機架層級模擬，精度為 FP4，工作負載設定為 100 萬個輸入 token、1,000 個輸出 token。模擬結果顯示，在相同機架成本下，HBF 的容量約為 HBM 的 14 倍，但頻寬僅約為 HBM 的 0.6 倍。

  Oxmiq 進一步將此取捨對應至批次大小。在機架規模下，HBM 的每 token 成本優勢依然存在；HBF 則最適合每台伺服器的容量限制優先於吞吐量的情境。

  ## 工作負載適配：HBF 的勝算與盲點

  Oxmiq 檢視了三種推論情境，藉此定義 HBF 的實際適用範圍。

  第一種情境：全 HBF 系統服務短上下文（256 × 256 token）——在低批次大小下，HBF 以單位 token 成本取勝。然而，Oxmiq 同時指出，此配置約有 85% 的容量未被使用，公司將此現象形容為「死容量」。

  第二種情境：長上下文工作負載（100 萬個輸入 token、1,000 個輸出 token）——HBF 的成本優勢僅在頻寬需求低於某一門檻時成立，一旦頻寬需求上升，HBM 便成為更佳選擇。

  第三種情境：HBM 加 HBF 的混合系統，其中 HBM 作為混合專家（MoE）模型的熱門專家快取——在混合查詢下，各專家的受歡迎程度趨於平均，快取效益僅在低批次大小，或同質查詢集中的情況下才能體現。

  Oxmiq 的整體結論是：HBF 的優勢在於頻寬需求偏低的場景，具體而言，包括小批次的 MoE 模型，以及稀疏鍵值（KV）快取存取的長上下文工作負載。

  ## MoE 模型為何是首要目標

  混合專家（Mixture-of-Experts，MoE）模型會將每個輸入 token 路由至一小部分稱為「專家」的特化子網路，而非通過完整模型，藉此降低每個 token 的主動運算量。Oxmiq 主張，這種架構創造出其所謂的「小批次容量子階段」——在此階段，完整模型須常駐於記憶體，但頻寬需求低到足以讓快閃記憶體具備競爭力。

  以 Kimi-K3 作為參考模型，Oxmiq 指出，該模型約 93% 的位元組——大約 1.45 TB——由 MoE 專家權重構成。因此，公司認為專家權重池與 KV 快取是 HBF 的天然放置目標，而 HBM 則負責處理注意力權重及頻繁存取的熱點資料。

  Oxmiq 亦提出專家並行作為次要優勢。較低成本的快閃容量可讓兩個節點在本地保有完整的專家權重，而無須將其分散至八個 GPU、並在每個 Transformer 層產生全對全（all-to-all）網路流量。

  對於稀疏注意力模型變體——公司以 DeepSeek Sparse Attention 與 Compressed Sparse Attention 為例——Oxmiq 表示，此類模型與 HBF 低頻寬容量區間的契合相當直接，但同時說明，這一機會取決於特定的模型設計風格。

  ## 軟體需求與缺失的技術堆疊

  Oxmiq 說明了影響 HBF 軟體需求的操作限制：存取採用 64 KB 的資料區塊以達到最大頻寬；在供電情況下，資料於攝氏 85 度環境中的留存時間約為 24 小時；記憶體生命週期由主機處理器管理。由於 HBF 針對讀取進行最佳化，且在寫入上受到限制，決定哪些資料應放置於何處，因此成了一道軟體問題，而非硬體問題。

  Oxmiq 對現有推論引擎生態系統進行了全面調查，涵蓋 vLLM、SGLang 等生產部署引擎，以及 TensorRT-LLM、AWS Neuron 等廠商最佳化堆疊，並將 vLLM 認定為生產環境的預設選項與首要整合目標。

  公司提出一個 vLLM 插件方案，以 HBF 取代主機 CPU 固定記憶體，用於 KV 快取與 MoE 專家池。在此配置下，配備四個 HBM 堆疊與四個 HBF 堆疊的 GPU，總容量可達 2.2 TB，峰值頻寬約為 17.4 TB/s，遠超目前的 CPU 卸載路徑。

  然而，HBF 的分配器與資料放置策略目前尚無生產可用的實作。Oxmiq 指出，這正是 HBF 在推論部署中得以實用化之前，有待補齊的關鍵缺口。
date: "2026-08-28"
source_published: "2026-08-27T16:13:39.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AWS", "Gigabyte"]
trust:
  score: 3
  reasoning: "Single source: Oxmiq Labs HBF in AI Compute at Hot Chips 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/oxmiq-labs-hbf-in-ai-compute-at-hot-chips-2026/"
    title: "Oxmiq Labs HBF in AI Compute at Hot Chips 2026"
    trust: 3
    type: primary
    published_at: "2026-08-27T16:13:39.000Z"
---
