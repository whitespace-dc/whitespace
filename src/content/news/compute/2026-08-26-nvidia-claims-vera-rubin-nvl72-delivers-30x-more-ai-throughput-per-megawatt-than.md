---
title_en: "NVIDIA claims Vera Rubin NVL72 delivers 30x more AI throughput per megawatt than GB300"
title_zh: "輝達：Vera Rubin NVL72每百萬瓦AI吞吐量勝GB300達30倍"
summary_en: "NVIDIA said its Vera Rubin NVL72 system delivers up to 30 times higher throughput per megawatt and 35 times lower cost per million tokens than its GB300 NVL72 predecessor on agentic AI workloads, while separately announcing that Groq 3 LPX racks have entered full production and will deploy on the Nebius neocloud platform later this year."
summary_zh: "輝達表示，其Vera Rubin NVL72系統在代理式AI工作負載上，依據SemiAnalysis AgentX基準測試，每百萬瓦吞吐量最高可達前代GB300 NVL72的30倍，每百萬詞元（token）成本最多降低35倍；同時宣布Groq 3 LPX機架已進入全面量產，並將於今年在Nebius新雲端平台上與Vera CPU及Rubin GPU一同部署。"
body_en: |
  NVIDIA said its Vera Rubin NVL72 system delivers up to 30 times higher throughput per megawatt than its predecessor GB300 NVL72 on agentic AI workloads, and up to 35 times lower cost per million tokens, based on the SemiAnalysis AgentX benchmark. The company also said Groq 3 LPX racks — built on technology from its $20 billion acquisition of Groq's assets in December 2025 — have entered full production and will be deployed this year on the Nebius neocloud platform alongside Vera CPUs and Rubin GPUs.

  Both announcements address a shift in AI computing demand from conventional chatbot applications toward software agents — programs that autonomously handle complex, multi-step tasks. Citing data from API marketplace OpenRouter, NVIDIA said agentic workloads generate 15 times more tokens than a standard chat request, because agents query databases, search documents, call external tools, and spawn sub-agents before producing an answer. A token is the basic unit of text that AI models process; higher token volumes per session translate directly into higher compute and energy consumption.

  ## Why agentic workloads change infrastructure economics

  In an agentic workflow, each step adds to the context window — the body of prior data the model holds in memory as it works through a task. That growth increases computational load with every step, making throughput per megawatt and cost per token the primary economic variables for operators sizing systems for sustained use, NVIDIA said. Single-request inference benchmarks are less useful for gauging performance under these conditions, particularly where input and output lengths vary widely across sessions spanning hundreds of thousands of tokens.

  NVIDIA said the SemiAnalysis AgentX benchmark used to generate the figures captures recorded agentic coding sessions, preserving context growth, tool calls, and sub-agent spawning in the test sequence. The early results remain pending review by SemiAnalysis, the company said, and do not yet account for the Vera CPU's contribution to tool-calling tasks.

  ## Vera Rubin performance figures

  NVIDIA said Vera Rubin NVL72 delivered its largest gains on the DeepSeek V4 Pro model and that the platform extends its performance lead across what it described as the full Pareto curve — improving simultaneously on both throughput and cost efficiency rather than trading one for the other.

  For generational context: NVIDIA said its GB300 NVL72 had already delivered up to 15 times better throughput per megawatt than systems based on the prior Hopper architecture on the DeepSeek V4 Pro model. The Blackwell platform — which encompasses GB300 — has also produced strong AgentX results across models including Kimi K3, MiniMax M3, GLM5.3, Qwen3.5, and DeepSeek V4 Pro, NVIDIA said.

  ## Inference techniques behind the gains

  NVIDIA attributed the Vera Rubin throughput figures to a set of inference techniques designed for long-running agentic sessions:

  - **Disaggregated serving**: separates initial processing of long input contexts (prefill) from response generation (decode), allowing each stage to run at optimized speed.
  - **Rate matching**: aligns throughput between the prefill and decode stages to prevent bottlenecks.
  - **Large-scale expert parallelism**: improves efficiency on mixture-of-experts (MoE) models, which activate only a subset of parameters per request.
  - **Distributed key-value (KV) caching**: spreads the memory cache that stores processed context across the full GPU domain rather than a single chip.
  - **Cache offloading**: moves less-active context to host memory and storage tiers to free GPU memory for active sessions.
  - **Context-aware routing**: directs incoming requests to GPUs that already hold the relevant context cache, reducing recomputation.
  - **Fused CUDA kernels**: combine computation and inter-GPU communication in a single GPU pass.

  At the hardware level, Rubin GPUs use fifth-generation Tensor Cores, a third-generation Transformer Engine, and NVFP4 — a 4-bit floating-point quantization format — to reduce memory footprint and increase throughput, NVIDIA said.

  NVIDIA's sixth-generation NVLink interconnect, which links the 72 GPUs within the NVL72 rack into a single high-bandwidth domain, provides 10 times higher packet rates and three times lower latency than Ethernet alternatives, the company said. That NVL72 scale-up domain is central to both the Vera Rubin and prior Grace Blackwell designs.

  ## Power management

  NVIDIA said its DSX MaxLPS power management technology can provision up to 40% more GPUs within the same megawatt budget by dynamically managing power across the GPU, rack, and workload levels. The claim addresses operators facing grid capacity constraints, which limit the ability to expand AI infrastructure even where physical space is available.

  NVIDIA framed the economic logic explicitly: throughput per megawatt determines how much agentic work a fixed power allocation can complete, affecting revenue, while cost per token affects profit margins. The company said those gains would allow operators of power-constrained facilities to complete more agentic work within the same energy budget.

  ## Groq 3 LPX rack

  NVIDIA said the Groq 3 LPX rack has entered full production, marking the commercial deployment of technology from its acquisition of Groq's assets — the largest acquisition in NVIDIA's history at $20 billion, completed in December 2025. Dion Harris, a senior director at NVIDIA, told reporters the Groq racks would be deployed on the Nebius neocloud platform alongside Vera CPUs and Rubin GPUs, with availability expected later this year.

  The Groq architecture integrates 500 megabytes (MB) of high-speed static RAM (SRAM) directly on-chip to reduce memory bottlenecks, a design approach intended to minimize the delay between receiving a query and returning a result. Groq chips are manufactured by Samsung; TSMC produces NVIDIA's GPU line.

  NVIDIA positioned the Groq platform around low-latency inference — speed of response — which it said is critical for agentic applications, particularly AI coding assistants. Harris said the capability enables cloud providers to offer premium-priced token services. "For companies providing token services, this allows them to provide premium services to users and customers with extremely high demand for this type of need," he said.

  ## What it means for AI infrastructure operators

  The announcements collectively position throughput per megawatt as NVIDIA's central procurement argument at a moment when agentic workloads are displacing simpler chat applications as the primary driver of AI compute demand. Cloud providers, model developers, and large enterprises facing rising electricity costs and constrained grid capacity are the direct audience for both the efficiency claims and the DSX power management figures.

  The full Vera Rubin platform, which NVIDIA said is in full production and scaling across its partner ecosystem, includes the Vera CPU, NVLink 6 Switch, BlueField-4 DPU (data processing unit), Spectrum-6 SPX, and ConnectX-9 SuperNIC. The Groq 3 LPX rack is scheduled to go live on Nebius later in 2026.
body_zh: |
  輝達（NVIDIA）表示，其Vera Rubin NVL72系統在代理式AI工作負載上，依據SemiAnalysis AgentX基準測試，每百萬瓦吞吐量最高可達前代GB300 NVL72的30倍，每百萬詞元（token）成本最多降低35倍。此外，輝達另行宣布，基於其2025年12月以200億美元收購Groq資產所開發的Groq 3 LPX機架，已進入全面量產，並將於今年在Nebius新雲端（neocloud）平台上與Vera CPU及Rubin GPU一同部署。

  上述兩項公告，均回應了AI運算需求從傳統聊天機器人應用轉向軟體代理程式的趨勢——代理程式能自主處理複雜的多步驟任務。輝達引用API市集OpenRouter的數據指出，代理式工作負載所產生的詞元量，是標準聊天請求的15倍，原因在於代理程式在給出最終答案之前，須先查詢資料庫、搜尋文件、呼叫外部工具，並衍生出子代理程式。詞元是AI模型處理文本的基本單位；每次作業的詞元量愈高，所需的運算資源與能源消耗也愈大。

  ## 代理式工作負載重塑基礎設施經濟學

  在代理式工作流程中，每個步驟都會擴充情境視窗——也就是模型在處理任務時，記憶體中保存的歷史資料總量。隨著情境視窗持續增長，每一步所需的運算負荷也隨之提高，使得每百萬瓦吞吐量與每詞元成本，成為業者在規劃系統以應對持續性使用時的核心經濟變數，輝達表示。輝達指出，單一請求的推論基準測試，較難準確反映這類場景下的效能，尤其是在輸入與輸出長度差異懸殊、單次作業橫跨數十萬詞元的情況下。

  輝達表示，用來產生上述數據的SemiAnalysis AgentX基準測試，收錄了真實的代理式程式開發作業記錄，在測試序列中完整保留了情境視窗增長、工具呼叫及子代理衍生等行為。輝達指出，上述初步結果仍待SemiAnalysis審查，且尚未將Vera CPU在工具呼叫任務中的貢獻納入計算。

  ## Vera Rubin效能數據

  輝達表示，Vera Rubin NVL72在DeepSeek V4 Pro模型上取得最顯著的效能提升，且該平台在其所描述的完整柏拉圖曲線（Pareto curve）上全面領先——同步提升吞吐量與成本效率，而非在兩者之間取捨。

  就世代比較而言：輝達指出，GB300 NVL72在DeepSeek V4 Pro模型上，每百萬瓦吞吐量已比採用前代Hopper架構的系統提升最多15倍。涵蓋GB300在內的Blackwell平台，在Kimi K3、MiniMax M3、GLM5.3、Qwen3.5及DeepSeek V4 Pro等多個模型的AgentX測試中，也均呈現亮眼成績。

  ## 推論技術帶來的效能提升

  輝達將Vera Rubin的吞吐量數據歸功於一系列專為長時間代理式作業設計的推論技術：

  - **分離式服務（Disaggregated serving）**：將長輸入情境的初始處理（預填充，prefill）與回應生成（解碼，decode）分離，讓每個階段均能以最佳化速度運行。
  - **速率匹配（Rate matching）**：對齊預填充與解碼兩個階段之間的吞吐量，防止瓶頸產生。
  - **大規模專家平行處理（Large-scale expert parallelism）**：提升混合專家模型（MoE）的效率——此類模型每次請求僅啟動部分參數。
  - **分散式鍵值快取（Distributed KV caching）**：將儲存已處理情境的記憶體快取，分散至整個GPU域，而非集中於單一晶片。
  - **快取卸載（Cache offloading）**：將較不活躍的情境移至主機記憶體與儲存層，釋放GPU記憶體供活躍作業使用。
  - **情境感知路由（Context-aware routing）**：將新進請求導向已持有相關情境快取的GPU，減少重複運算。
  - **融合CUDA核心（Fused CUDA kernels）**：在單次GPU處理中，同時完成運算與GPU間通訊。

  在硬體層面，Rubin GPU採用第五代Tensor Core、第三代Transformer Engine，以及NVFP4——一種4位元浮點量化格式——以縮小記憶體佔用量並提升吞吐量。

  輝達第六代NVLink互連技術將NVL72機架內的72顆GPU串聯為單一高頻寬域，其封包傳輸速率比乙太網路替代方案高出10倍，延遲則低3倍。這個NVL72擴展域，是Vera Rubin與前代Grace Blackwell設計的核心架構。

  ## 電源管理

  輝達表示，其DSX MaxLPS電源管理技術，透過在GPU、機架與工作負載三個層級動態調配電力，可在相同百萬瓦預算內多部署最多40%的GPU。這項主張，正是針對面臨電網容量限制的業者——即便實體空間充裕，電力限制仍制約了AI基礎設施的擴張能力。

  輝達明確闡述其中的經濟邏輯：每百萬瓦吞吐量決定了固定電力配額所能完成的代理式工作量，直接影響營收；每詞元成本則牽動利潤率。輝達表示，上述效能提升，將使受電力限制的資料中心業者，能在相同能源預算內完成更多代理式工作。

  ## Groq 3 LPX機架

  輝達表示，Groq 3 LPX機架已進入全面量產，標誌著以200億美元收購Groq資產所開發技術的商業部署——此次收購完成於2025年12月，是輝達有史以來規模最大的收購案。輝達資深總監Dion Harris向媒體表示，Groq機架將與Vera CPU及Rubin GPU一同部署於Nebius新雲端平台，預計於今年稍晚上線。

  Groq架構在晶片上直接整合500 MB的高速靜態隨機存取記憶體（SRAM），以降低記憶體瓶頸，此設計旨在將接收查詢到回傳結果之間的延遲壓至最低。Groq晶片由三星製造；輝達的GPU產品線則由台積電生產。

  輝達將Groq平台定位於低延遲推論——即回應速度——並表示這對代理式應用至關重要，尤其是AI程式開發助理。Harris表示，這項能力可讓雲端服務供應商提供高附加價值的詞元服務。「對於提供詞元服務的企業而言，這使他們能夠向對此類需求有極高要求的用戶與客戶，提供頂級服務。」他說。

  ## 對AI基礎設施業者的意義

  上述公告，在代理式工作負載逐步取代簡單聊天應用、成為AI運算需求主要驅動力的當下，共同將每百萬瓦吞吐量確立為輝達的核心採購論據。面對電費持續攀升、電網容量受限的雲端業者、模型開發商及大型企業，正是上述效率主張與DSX電源管理數據的主要受眾。

  輝達表示，Vera Rubin完整平台目前已進入全面量產，並在其合作夥伴生態系中持續擴展，完整配備包括Vera CPU、NVLink 6 Switch、BlueField-4 DPU（資料處理器）、Spectrum-6 SPX及ConnectX-9 SuperNIC。Groq 3 LPX機架預計於2026年稍晚在Nebius平台正式上線。
date: "2026-08-26"
source_published: "2026-08-25T15:00:00.000Z"
category: "compute"
secondary_categories: ["power", "market"]
region: []
vendor: ["Groq", "Nebius", "Nvidia", "TSMC"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead NVIDIA says Vera Rubin boosts AI throughput per megawatt (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenternews.asia/story/nvidia-says-vera-rubin-boosts-ai-throughput-per-megawatt"
    title: "NVIDIA says Vera Rubin boosts AI throughput per megawatt"
    trust: 3
    type: primary
    published_at: "2026-08-25T15:00:00.000Z"
  - url: "https://www.ctee.com.tw/news/20260825700806-430704"
    title: "輝達Groq 3 LPX機架進入量產！200億美元史上最大併購案導入商業化"
    trust: 3
    type: corroborating
    published_at: "2026-08-25T00:00:00.000Z"
---
