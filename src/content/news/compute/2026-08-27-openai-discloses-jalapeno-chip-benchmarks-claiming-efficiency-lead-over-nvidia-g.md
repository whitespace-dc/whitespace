---
title_en: "OpenAI Discloses Jalapeño Chip Benchmarks Claiming Efficiency Lead Over Nvidia GB200, GB300"
title_zh: "OpenAI公開Jalapeño晶片效能測試，宣稱每瓦效率超越輝達GB200與GB300"
summary_en: "OpenAI presented performance benchmarks for Jalapeño, its first custom inference chip, at Hot Chips 2026 on August 26, claiming 1.5x to 1.9x higher throughput per watt than Nvidia's GB200 and GB300 at roughly half the package power draw. The company said it plans to deploy the chip in its own infrastructure by year-end 2026, with a second generation already in deep development."
summary_zh: "OpenAI於2026年8月26日在Hot Chips 2026大會上發表首款自研推論晶片Jalapeño的效能數據，宣稱在封裝功耗約為一半的條件下，每瓦吞吐量較輝達GB200與GB300高出1.5至1.9倍。該公司表示計畫於2026年底前將Jalapeño部署至自家基礎設施，第二代產品亦已進入深度開發階段。"
body_en: |
  OpenAI disclosed performance benchmarks for Jalapeño, its first custom inference ASIC (application-specific integrated circuit), at Hot Chips 2026 on August 26, claiming the chip outperforms Nvidia's GB200 and GB300 accelerators on throughput per watt at roughly half the package power draw. The company said it plans to deploy Jalapeño in its own computing infrastructure by the end of 2026.

  ## Benchmark results

  Jalapeño was built with Broadcom and presented at the conference by OpenAI engineers Richard Ho, Ravi Narayanaswami, and Chris Leary, who described an approximately nine-month path from initial RTL (register-transfer level) design to tapeout, the stage at which a chip design is sent to a foundry for fabrication.

  OpenAI measured Jalapeño using InferenceX, a public, power-normalized benchmark from research firm SemiAnalysis that covers the complete inference pipeline from user request to completed response. Results normalize to each chip's package thermal design power (TDP), the maximum rated heat output: Jalapeño at 700 watts versus Nvidia's GB200 at 1,200 watts and the GB300 and AMD MI355X at 1,400 watts each. OpenAI said it measured against the July 2026 Pareto frontier across other accelerators.

  OpenAI tested three models: GPT-OSS at 120 billion parameters, DeepSeek R1 at 670 billion parameters, and Kimi K2.5 at one trillion parameters. None of the three were co-designed for Jalapeño, the company said, and all were brought to performance on the chip between when first silicon returned from fabrication and the Hot Chips presentation.

  On GPT-OSS 120B, benchmarked against the GB200, Jalapeño showed approximately 1.9 times higher peak mixed-token throughput per kilowatt and about 1.7 times lower end-to-end latency at matched operating points. OpenAI claimed 53.7 times more throughput at the previous best token-between-token (TBT) latency, the interval between successive tokens in a generated response.

  On DeepSeek R1 670B, benchmarked against the GB300, Jalapeño showed approximately 1.7 times higher peak mixed-token throughput per kilowatt and 3.6 times lower end-to-end latency, with full-request response time falling from 5.99 seconds to 1.65 seconds. OpenAI claimed 104.3 times more throughput at the previous best TBT latency.

  On Kimi K2.5 at one trillion parameters, also benchmarked against the GB300, Jalapeño showed approximately 1.5 times higher peak mixed-token throughput per kilowatt and 3.4 times lower end-to-end latency, with response time falling from 5.31 seconds to 1.56 seconds. OpenAI claimed 56.1 times more throughput at the previous best TBT latency.

  ## Benchmark methodology

  A key methodological distinction shapes all comparisons. Jalapeño runs in single-token prediction mode in these benchmarks, while the Nvidia baselines use multi-token prediction (MTP), a speculative-decoding technique in which seven small draft-model passes are batched with one large-model pass to produce up to eight output tokens per expensive large-model forward pass, reducing the number of such large-model passes by up to eight times. OpenAI said applying MTP to Jalapeño would yield a further 3x to 5x latency improvement at equal efficiency, but did not present benchmarks with MTP enabled on Jalapeño.

  OpenAI also ran a separate comparison pairing single-token Jalapeño against the multi-token GB300 on DeepSeek R1, giving the Nvidia chip its speculative-decode advantage. Even in that configuration, Jalapeño claimed approximately 1.5 times higher peak mixed-token throughput per kilowatt and 2.2 times lower end-to-end latency at matched operating points, a margin narrower than the plain single-versus-single comparison but still positive, the company said.

  OpenAI also said Jalapeño achieves sub-millisecond token-to-token latency on frontier models at economical throughputs.

  ## Architecture

  OpenAI designed Jalapeño around two primary metrics: time to last token, the total time a user waits for a complete response, and tokens per joule, which measures inference energy efficiency.

  The company chose a single balanced chip over a heterogeneous fleet of specialized accelerators. A single inference request traverses three hardware regimes with different bottlenecks, OpenAI said: a compute-bound prefill phase, in which the chip processes the user's input; a small draft-model phase running at ultra-low batch size for latency-sensitive speculation; and a memory-bandwidth-bound speculative-verify decode phase with bursty MoE (mixture-of-experts, a model architecture that routes computation through specialized subnetworks) communication. Because the ratio among those phases shifts with workload mix, specialized fleets leave idle accelerators drawing baseline power from their packaging, high-bandwidth memory, I/O, and network components, the company argued.

  Jalapeño addresses this by keeping the KV cache (key-value cache, a data structure that stores intermediate attention computations to avoid recomputing them) local on each chip rather than moving it across a network at each phase boundary. Unused processing units are power-gated rather than left drawing idle power.

  The chip uses HBM4 (fourth-generation high-bandwidth memory). Across a 128-chip deployment, Jalapeño aggregates more than one petabyte per second of memory bandwidth. OpenAI acknowledged that the real system operates well below the theoretical token-rate ceiling that figure implies, citing long-latency memory paths, contended unified memory subsystems, and global memory fences as factors that reduce utilization. The architecture addresses this by pairing each core slice with a dedicated HBM slice to provide a fast local memory view, the company said.

  ## AI-assisted optimization

  OpenAI said its team used Codex and GPT-Astra to optimize kernels for the three benchmark models, completing the work in approximately two months. AI-generated implementations of GPT-OSS attention and MoE compute blocks ran 1.5 to 1.8 times faster than the existing human-expert versions, the company said.

  ## Development timeline and roadmap

  OpenAI traced the chip's development from an architecture concept formed in late 2024, through an RTL freeze in 2025 and a tapeout in late 2025, to Codex running on Jalapeño in early 2026 and ChatGPT on the chip shortly after.

  The benchmarks mark the first public disclosure of Jalapeño's performance characteristics and represent a direct claim by a major AI lab that its purpose-built inference silicon can outpace the leading merchant accelerators on efficiency, a metric that directly affects the cost and power draw of large-scale AI deployment.

  OpenAI said it plans to begin first-generation Jalapeño deployments in its own infrastructure by the end of 2026, and said it will continue using Nvidia and other partners' accelerators for AI model training and inference alongside the new chip. A second-generation Jalapeño is in deep development and a third generation is already in planning, the company said.
body_zh: |
  OpenAI於2026年8月26日在Hot Chips 2026大會上公開首款自研推論專用ASIC（特殊應用積體電路）Jalapeño的效能數據，宣稱該晶片在封裝功耗約為一半的條件下，每瓦吞吐量均超越輝達GB200與GB300加速器。該公司表示，計畫於2026年底前將Jalapeño部署至自家運算基礎設施。

  ## 效能測試結果

  Jalapeño由OpenAI與博通（Broadcom）合作開發，在大會上由OpenAI工程師Richard Ho、Ravi Narayanaswami及Chris Leary聯合發表。三人描述了從RTL（暫存器傳輸層）初始設計到tapeout（即晶片設計定稿、送交晶圓廠製造的階段）約九個月的研發歷程。

  OpenAI採用InferenceX對Jalapeño進行測試。InferenceX是研究機構SemiAnalysis推出的公開、功耗標準化基準測試，涵蓋從使用者請求到完整回應的完整推論流程。測試結果以各晶片的封裝熱設計功耗（TDP，即最大額定散熱量）進行標準化：Jalapeño為700瓦，輝達GB200為1,200瓦，GB300與AMD MI355X各為1,400瓦。OpenAI表示，測試基準線為2026年7月其他加速器的Pareto前緣數據。

  OpenAI測試了三款模型：參數量1,200億的GPT-OSS、參數量6,700億的DeepSeek R1，以及參數量達1兆的Kimi K2.5。該公司表示，三款模型均非針對Jalapeño協同設計，且均在首批晶片從晶圓廠回片後、至Hot Chips大會發表期間，完成在此晶片上的效能調校。

  在1,200億參數的GPT-OSS測試中（以GB200為比較基準），Jalapeño的每千瓦峰值混合token吞吐量約為GB200的1.9倍，在相同操作點下端對端延遲約降低1.7倍。OpenAI宣稱，在前一最佳token間延遲（TBT，即生成回應時連續token之間的間隔時間）條件下，吞吐量提升達53.7倍。

  在6,700億參數的DeepSeek R1測試中（以GB300為比較基準），Jalapeño的每千瓦峰值混合token吞吐量約為GB300的1.7倍，端對端延遲約降低3.6倍，完整請求回應時間從5.99秒縮短至1.65秒。OpenAI宣稱在前一最佳TBT延遲條件下，吞吐量提升達104.3倍。

  在參數量達1兆的Kimi K2.5測試中（同樣以GB300為比較基準），Jalapeño的每千瓦峰值混合token吞吐量約為GB300的1.5倍，端對端延遲約降低3.4倍，回應時間從5.31秒縮短至1.56秒。OpenAI宣稱在前一最佳TBT延遲條件下，吞吐量提升達56.1倍。

  ## 測試方法論

  所有比較結果均受一項關鍵方法論差異所影響。在上述基準測試中，Jalapeño採用單token預測模式運行，而輝達的基準測試則使用多token預測（MTP）——一種推測性解碼技術，將七次小型草稿模型的推論與一次大型模型推論批次處理，每次大型模型前向傳遞最多可產出八個輸出token，最多可將大型模型前向傳遞次數減少八倍。OpenAI表示，若對Jalapeño啟用MTP，可在相同效率下進一步將延遲降低3至5倍，但此次未提供Jalapeño啟用MTP的測試數據。

  OpenAI另行進行了一組對比測試，將單token模式的Jalapeño與採用多token預測的GB300在DeepSeek R1上進行比較，讓輝達晶片保有其推測性解碼優勢。即便如此，Jalapeño仍宣稱在相同操作點下每千瓦峰值混合token吞吐量約高出1.5倍、端對端延遲約低2.2倍——雖然差距比純單token對單token的比較更小，但仍維持正向領先，OpenAI表示。

  OpenAI亦指出，Jalapeño在具經濟效益的吞吐量條件下，對前沿模型可達到毫秒以下的token間延遲。

  ## 架構設計

  OpenAI以兩項核心指標為中心設計Jalapeño：「最後token時間」（即使用者等待完整回應的總時間）及「每焦耳token數」（衡量推論能源效率的指標）。

  OpenAI選擇採用單一均衡晶片，而非由多種專用加速器組成的異質機群。該公司表示，單次推論請求會歷經三個瓶頸各異的硬體階段：受計算能力限制的預填充（prefill）階段（晶片在此處理使用者輸入）；以超低批次大小運行、對延遲敏感的小型草稿模型推測階段；以及受記憶體頻寬限制、帶有突發性MoE（混合專家，一種將計算路由至專門子網路的模型架構）通訊的推測驗證解碼階段。由於各階段的比例會隨工作負載組合而改變，專用機群會使閒置加速器持續從封裝、高頻寬記憶體、I/O及網路元件中汲取待機功耗，OpenAI如此主張。

  Jalapeño的解決方式是將KV快取（鍵值快取，一種儲存中間注意力計算結果以避免重複運算的資料結構）保留在各晶片本機，而非在每次階段切換時透過網路傳輸。未使用的處理單元則以電源閘控方式關閉，而非保持空轉消耗功耗。

  該晶片採用HBM4（第四代高頻寬記憶體）。在128晶片的部署規模下，Jalapeño匯集的記憶體頻寬總計超過每秒一拍位元組（petabyte）。OpenAI坦承，實際系統的運行效能遠低於上述數字所隱含的理論token速率上限，並指出長延遲記憶體路徑、競爭性統一記憶體子系統及全域記憶體屏障（memory fence）均為降低使用率的因素。針對此問題，該架構為每個核心切片配置專屬的HBM切片，以提供快速的本機記憶體存取視圖，OpenAI表示。

  ## AI輔助優化

  OpenAI表示，其團隊使用Codex與GPT-Astra對三款基準測試模型的核心運算程式進行優化，約耗時兩個月完成。AI生成的GPT-OSS注意力機制與MoE計算模組實作，運行速度比現有人類專家版本快1.5至1.8倍，OpenAI指出。

  ## 開發時程與未來規劃

  OpenAI梳理了這款晶片的完整開發歷程：架構概念於2024年底成形，RTL凍結於2025年完成，tapeout於2025年底進行，2026年初Codex於Jalapeño上投入運行，其後不久ChatGPT亦在此晶片上正式運行。

  此次效能數據是Jalapeño效能特性的首次公開披露，也代表一家主要AI實驗室首次直接宣稱其自研推論晶片在效率指標上能夠超越領先的商業加速器——而效率直接影響大規模AI部署的成本與功耗。

  OpenAI表示，計畫於2026年底前開始在自家基礎設施部署第一代Jalapeño，同時將繼續使用輝達及其他合作夥伴的加速器進行AI模型訓練與推論。該公司亦表示，第二代Jalapeño正處於深度開發階段，第三代亦已進入規劃。
date: "2026-08-27"
source_published: "2026-08-26T00:45:45.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Broadcom", "Nvidia"]
trust:
  score: 4
  reasoning: "Synthesized from 2 sources; lead OpenAI Jalapeno Custom AI ASIC at Hot Chips 2026 (trust 4/5) plus 1 corroborating."
sources:
  - url: "https://www.servethehome.com/openai-jalapeno-asic-at-hot-chips-2026/"
    title: "OpenAI Jalapeno Custom AI ASIC at Hot Chips 2026"
    trust: 4
    type: primary
    published_at: "2026-08-26T00:45:45.000Z"
  - url: "https://www.ithome.com.tw/news/178457"
    title: "OpenAI自研推論晶片Jalapeño首批實測出爐，挑戰Nvidia GB200與GB300"
    trust: 3
    type: corroborating
    published_at: "2026-08-26T07:08:11.000Z"
---
