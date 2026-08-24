---
title_en: "d-Matrix Reveals Raptor 3D-DRAM Accelerator Targeting 100 TB/s for LLM Inference at Hot Chips 2026"
title_zh: "d-Matrix於Hot Chips 2026發表Raptor 3D-DRAM加速器，鎖定100 TB/s頻寬加速LLM推論"
summary_en: "d-Matrix presented its Raptor accelerator at Hot Chips 2026, disclosing a chip that stacks a TSMC N4 logic die directly on top of a DRAM die to target roughly 100 terabytes per second of memory bandwidth for large language model inference. The company said a 72-card rack configuration with 32 GB per card can host a frontier model such as Kimi K3 at one-million-token context."
summary_zh: "d-Matrix在Hot Chips 2026發表Raptor加速器，採用台積電N4製程邏輯晶片直接疊合於DRAM晶片之上，目標提供約100 TB/s記憶體頻寬，專為大型語言模型推論設計。該公司表示，72張卡的機架配置、每卡32 GB，可在單一機架內承載Kimi K3等前沿模型於百萬Token的上下文情境。"
body_en: |
  d-Matrix presented its Raptor accelerator at Hot Chips 2026, disclosing a chip that stacks a TSMC N4 logic die directly on top of a DRAM die to target roughly 100 terabytes per second (TB/s) of memory bandwidth for large language model (LLM) inference. The company said that figure is approximately five times the practical bandwidth ceiling it attributes to current High Bandwidth Memory generation 4 (HBM4) packages — including those used in the NVIDIA Vera Rubin and AMD Instinct MI455 — which it puts at around 20 TB/s.

  ## The memory problem: capacity versus bandwidth

  d-Matrix framed the Raptor design around a two-sided squeeze: frontier model weights are growing while the key-value (KV) cache — the memory that stores attention state during inference, which scales with context length multiplied by the number of simultaneous users — expands rapidly. The company cited a scenario in which 64 concurrent users each running a one-million-token context would require roughly 935 gigabytes (GB) of KV cache alone, with model weights adding to that figure.

  Existing memory technologies address only one side of the problem, d-Matrix argued. Static random-access memory (SRAM), the fastest on-chip memory type, reaches around 300 TB/s bandwidth at approximately one nanosecond (ns) latency in d-Matrix's own Corsair accelerator card pair, but that pair holds only about 4 GB total. A 6T SRAM cell is roughly ten times larger than a DRAM cell, and leakage power runs to tens of watts at GB scale, making SRAM practical for small draft models in speculative decoding but not for full frontier-model weights. The company cited NVIDIA's reported use of Groq as an example of SRAM's role in that narrower application.

  HBM solves the capacity problem but not the bandwidth one, the company said. Pin speed and input/output (I/O) width per base die improve slowly, and package area limits the number of HBM stacks to roughly 8 to 16 per package. Reaching 100 TB/s through HBM at 2.4 picojoules per bit (pJ/bit) would consume approximately 1.92 kilowatts (kW) before any network fabric traffic is counted, a level that current packages lack both the area and the power budget to support.

  ## Where 3D-DRAM sits on the energy ladder

  Three-dimensional DRAM occupies a middle position between the two extremes, d-Matrix said. On-die SRAM costs roughly 50 femtojoules (fJ) per bit to access, while 2.5D HBM4 systems run 2.5 to 5 pJ per bit when chip-level energy is included. Vertical 3D I/O interconnects come in at approximately 0.3 to 0.4 pJ per bit (about ten times lower than HBM) because the signal travels a millimeter-scale vertical path through the stack rather than a centimeter-scale route across an interposer. Fewer stacked layers than HBM also produces a larger die footprint, which d-Matrix said improves manufacturing yield.

  ## Raptor chip architecture

  The Raptor implementation places a TSMC N4 process logic die on top of a 3D DRAM die using 36-micrometer face-to-face stacking, which d-Matrix described as proven, low-cost, high-volume, and high-yield. The single-layer logic-on-top stack operates at a power density of no more than 0.5 watts per square millimeter (W/mm²), which the company said allows liquid cooling to keep the DRAM junction below 100 degrees Celsius (°C).

  Each Raptor card holds 32 GB. With weights stored at 4-bit precision and a KV cache at 8-bit precision, a 72-card rack configuration can host a frontier model such as Kimi K3 at one-million-token context within a single rack, d-Matrix said. Disaggregation and multi-rack configurations extend capacity beyond that.

  ## How LLM inference workloads use memory

  d-Matrix described LLM inference as comprising two phases with distinct bottlenecks. The prefill phase, which processes all prompt tokens in parallel, is compute-throughput-bound. The decode phase, which generates one output token at a time, is memory-bandwidth-bound and dominates wall-clock runtime. Mixture-of-experts (MoE) architectures stay memory-bound even at modest batch sizes, the company noted; attention can shift to compute-bound under high grouped-query attention (GQA) ratios or speculative decoding. Because decode accounts for the majority of inference wall-clock time, improving decode memory bandwidth translates directly into overall inference throughput, d-Matrix argued.

  ## Bank-to-channel mapping

  Stacking compute on DRAM exposes integration problems across bank mapping, I/O power, and thermal reliability that d-Matrix said are entangled: a solution to any one constrains the design space of the other two.

  Each tensor engine requires a 128-byte (128B) flit per memory access. With 32-byte columns and 32-byte banks, four banks per channel are needed to deliver one full flit. The Raptor die has 840 banks — 768 after reserving 72 as spares — spread across 256 channels, yielding only three banks per channel. A three-bank access returns 96 bytes, so filling a 128B flit requires two accesses and fetches 192 bytes, wasting approximately 33 percent of bandwidth. Column staggering could pack flits but would need a 192-byte shifting buffer and would complicate timing and verification, d-Matrix said.

  The company's solution, called stream blocking, shares one partial 32-byte access across three flits: four accesses totaling 384 bytes supply three flits of 128 bytes each, matching bytes in to bytes out and eliminating overfetch without a shifting network.

  ## I/O power

  Moving 100 TB/s at 0.37 pJ/bit costs 296 watts for I/O alone, d-Matrix said. Conventional Data Bus Inversion (DBI) — a technique that cuts switching power by inverting the data bus when doing so reduces the number of toggling bits — could reduce that figure by 20 percent. HBM's multi-cycle bursts give its physical-layer (PHY) circuitry visibility into the full burst before deciding whether to invert, but d-Matrix's single-cycle 256-bit 3D-DRAM link has no burst and no spare pin for a sideband inversion signal.

  The company's solution, called stream flipping, compares each outgoing flit to the previous one and inverts when doing so cuts toggle count, carrying a single metadata bit per flit alongside error-correction code (ECC). The overhead amounts to 0.8 percent with no PHY change, d-Matrix said.

  ## Thermal reliability and fault tolerance

  At a junction temperature of 105°C, DRAM retention time — the interval before a cell loses its charge and requires a refresh cycle — drops from 32 milliseconds at 85°C to 4 milliseconds, requiring refresh eight times more frequently. With 840 banks, even a 1 percent fault rate risks losing entire memory channels, and discarding bonded die stacks after testing is uneconomical. Higher temperature also drives higher soft-error rates, meaning ECC and scrub must keep pace with the faster refresh demand.

  d-Matrix's solution interleaves ECC and Reed-Solomon code bits into the last columns of each subarray. Because the design reads far fewer rows per refresh interval than the naive 8x increase would suggest, the additional refresh cost amounts to approximately 1.37 percent of bandwidth, holding total throughput near 100 TB/s with under 1.4 percent total loss, the company said.

  Fault tolerance relies on bank chaining. Two physical multiplexer levels allow the first level to skip one faulty bank and the second to skip a second fault anywhere on the die, so the chiplet's 72 spare banks can absorb faults at any location. All channels remain uniform in width, with negligible routing cost, d-Matrix said.

  ## Position in the inference accelerator market

  The Raptor disclosure puts a specific chip architecture and a detailed set of engineering tradeoffs behind a proposition that has been broadly discussed in the inference accelerator market: that memory bandwidth, not arithmetic throughput, is the binding constraint during the decode phase of LLM serving. d-Matrix's stated targets — roughly 100 TB/s at approximately 0.37 pJ/bit, with a 72-card rack sized to host a frontier model at one-million-token context using 32 GB per card — set concrete figures against which competing HBM4-based designs can be measured.

  The company said disaggregation and multi-rack configurations extend the platform for workloads requiring capacity above what a single Raptor rack provides.
body_zh: |
  d-Matrix在Hot Chips 2026發表Raptor加速器，揭露一款將台積電N4製程邏輯晶片直接疊合於DRAM晶片之上的處理器，目標提供約100 TB/s的記憶體頻寬，專為大型語言模型（LLM）推論工作負載設計。該公司表示，這項數據約為目前第四代高頻寬記憶體（HBM4）封裝實際頻寬上限的五倍——包括輝達Vera Rubin與AMD Instinct MI455所採用的HBM4，其實際頻寬上限約落在20 TB/s。

  ## 記憶體困境：容量與頻寬的雙重夾擊

  d-Matrix將Raptor的設計定位建立在兩面夾擊的困境之上：前沿模型的權重規模持續擴大，而鍵值快取（KV cache）——在推論過程中儲存注意力狀態的記憶體，其規模隨上下文長度乘以同時服務的使用者數量而急速膨脹——亦快速成長。該公司舉例說明：64名用戶同時使用百萬Token上下文時，光是KV cache就需要約935 GB的容量，再加上模型權重，需求更為龐大。

  d-Matrix指出，現有記憶體技術只能解決問題的其中一面。靜態隨機存取記憶體（SRAM）是晶片上最快的記憶體類型，在d-Matrix自家的Corsair加速器卡組合中可達到約300 TB/s頻寬、約1奈秒（ns）延遲，但整組卡的總容量僅約4 GB。6T SRAM單元的面積約為DRAM單元的十倍，在GB規模下漏電功耗高達數十瓦，因此SRAM僅適合用於推測式解碼（speculative decoding）中的小型草稿模型，無法承載完整的前沿模型權重。該公司以輝達據報使用Groq為例，說明SRAM在此類較窄應用場景中的定位。

  HBM解決了容量問題，但頻寬問題依然懸而未決。每個基礎晶片的引腳速度與輸入輸出（I/O）位元寬度改善緩慢，且封裝面積限制每個封裝最多只能疊放約8至16個HBM堆疊。若要透過HBM以每位元2.4皮焦耳（pJ/bit）的能耗達到100 TB/s，在不計入網路交換流量的情況下，耗電量約達1.92千瓦（kW），已超出現有封裝在面積和功耗預算上所能支撐的極限。

  ## 3D-DRAM在能耗階梯上的位置

  d-Matrix表示，三維DRAM在兩個極端之間占據中間位置。晶片上SRAM每位元存取耗能約50飛焦耳（fJ），2.5D HBM4系統含晶片層級能耗在內約為2.5至5 pJ/bit。垂直3D I/O互連的能耗約為0.3至0.4 pJ/bit（約為HBM的十分之一），原因在於訊號透過堆疊結構走毫米級的垂直路徑，而非跨越中介層（interposer）的公分級路線。此外，堆疊層數少於HBM也使晶片面積更大，d-Matrix表示這有助於提升製造良率。

  ## Raptor晶片架構

  Raptor採用台積電N4製程邏輯晶片，以36微米面對面（face-to-face）堆疊方式置於3D DRAM晶片之上，d-Matrix形容這是一種經過驗證、低成本、高產量且高良率的堆疊方式。單層邏輯晶片在上的堆疊結構，功率密度不超過每平方毫米0.5瓦（W/mm²），該公司表示液冷系統可將DRAM接面溫度維持在攝氏100度以下。

  每張Raptor卡搭載32 GB記憶體。以4位元精度儲存模型權重、8位元精度儲存KV cache為前提，72張卡的機架配置即可在單一機架內，讓Kimi K3等前沿模型以百萬Token上下文運行。若需更大容量，則可透過解聚合（disaggregation）及多機架配置進一步擴充。

  ## LLM推論工作負載的記憶體使用方式

  d-Matrix說明，LLM推論包含兩個瓶頸截然不同的階段。預填（prefill）階段並行處理所有提示Token，瓶頸在於運算吞吐量；解碼（decode）階段每次只生成一個輸出Token，瓶頸在於記憶體頻寬，且這個階段主導了整體實際運算時間。該公司指出，混合專家（MoE）架構即便在適中的批次大小下仍受記憶體頻寬限制；注意力機制則在高分組查詢注意力（GQA）比例或推測式解碼情境下，才可能轉為運算瓶頸。由於解碼占據推論實際運算時間的大部分，提升解碼階段的記憶體頻寬可直接轉化為整體推論吞吐量的提升，d-Matrix如此主張。

  ## 記憶體組到通道的映射

  將運算晶片堆疊於DRAM之上，會引發記憶體組映射、I/O功耗與熱可靠性三方面相互交纏的整合問題——d-Matrix表示，解決任何一項都會限縮其他兩項的設計空間。

  每個張量引擎每次記憶體存取需要一個128位元組（128B）的傳輸單元（flit）。以32位元組的列與32位元組的組計算，每個通道需要四個記憶體組才能完整傳遞一個flit。然而Raptor晶片共有840個記憶體組——保留72個作為備援後剩768個——分布於256個通道，平均每個通道僅有三個記憶體組。三組存取只能返回96位元組，填滿128B的flit需要兩次存取，實際讀取192位元組，導致約33%的頻寬浪費。列交錯（column staggering）雖可打包flit，但需要192位元組的移位緩衝區，並會增加時序驗證的複雜度，d-Matrix表示。

  該公司的解決方案稱為「串流封鎖」（stream blocking）：將一次32位元組的不完整存取共享給三個flit使用，四次存取共讀取384位元組，恰好提供三個128位元組的flit，使輸入位元組數與輸出位元組數完全吻合，在無需移位網路的情況下消除多餘讀取。

  ## I/O功耗

  d-Matrix表示，以每位元0.37 pJ的能耗傳輸100 TB/s，光是I/O就消耗296瓦。傳統的資料匯流排反轉（DBI）技術——透過在反轉資料匯流排可減少切換位元數時執行反轉，以降低切換功耗——可將這個數字壓低約20%。HBM的多週期突發傳輸使其實體層（PHY）電路在決定是否反轉前，能夠預先看到完整的突發資料；然而d-Matrix的單週期256位元3D-DRAM鏈路沒有突發機制，也沒有多餘的引腳用於旁帶（sideband）反轉訊號。

  該公司的解決方案稱為「串流翻轉」（stream flipping）：將每個待傳出的flit與前一個flit比較，當翻轉可減少切換次數時便執行翻轉，並在每個flit中攜帶一個元資料位元，與錯誤更正碼（ECC）並行傳輸。d-Matrix表示，這項做法在無需改動PHY的前提下，額外開銷僅為0.8%。

  ## 熱可靠性與故障容忍

  當DRAM接面溫度達到攝氏105度時，記憶體單元的保留時間——即單元在失去電荷並需要刷新週期之前可維持資料的時間間隔——從攝氏85度時的32毫秒驟降至4毫秒，需要以八倍頻率執行刷新操作。在840個記憶體組的規模下，即便僅有1%的故障率，也可能導致整個記憶體通道失效；而在測試後丟棄已鍵合的晶片堆疊在經濟上亦不可行。溫度升高也會提升軟錯誤率，意味著ECC和資料清理必須跟上加快的刷新需求。

  d-Matrix的解決方案將ECC與里德-所羅門碼（Reed-Solomon code）位元交錯嵌入每個子陣列的最後幾列。由於設計在每個刷新週期內實際讀取的列數，遠少於單純8倍增加所預期的數量，額外的刷新開銷約為頻寬的1.37%，使總吞吐量維持在接近100 TB/s的水準，總損耗低於1.4%，d-Matrix表示。

  故障容忍依賴記憶體組鏈接（bank chaining）機制。兩層實體多工器使第一層得以跳過一個故障記憶體組，第二層得以跳過晶片上任意位置的第二個故障，因此72個備援記憶體組可吸收任何位置的故障。所有通道保持相同位元寬度，路由成本可忽略不計，d-Matrix表示。

  ## 在推論加速器市場的定位

  Raptor的揭露，為推論加速器市場中廣受討論的一項論點——即在LLM服務的解碼階段，記憶體頻寬而非算術吞吐量才是關鍵瓶頸——提供了具體的晶片架構與詳盡的工程取捨依據。d-Matrix所揭示的目標——約100 TB/s、約0.37 pJ/bit，以72張卡的機架配置、每卡32 GB，在百萬Token上下文情境下承載前沿模型——為競爭對手基於HBM4的設計提供了可供衡量的具體基準。

  該公司表示，針對容量需求超過單一Raptor機架所能提供的工作負載，解聚合與多機架配置可進一步擴充平台規模。
date: "2026-08-25"
source_published: "2026-08-23T22:14:59.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Groq", "Nvidia", "TSMC"]
trust:
  score: 4
  reasoning: "Single source: d-Matrix Raptor 3D-DRAM Accelerator for Generative Inference at Hot Chips 2026 (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/d-matrix-raptor-3d-dram-accelerator-for-generative-inference-at-hot-chips-2026/"
    title: "d-Matrix Raptor 3D-DRAM Accelerator for Generative Inference at Hot Chips 2026"
    trust: 4
    type: primary
    published_at: "2026-08-23T22:14:59.000Z"
---
