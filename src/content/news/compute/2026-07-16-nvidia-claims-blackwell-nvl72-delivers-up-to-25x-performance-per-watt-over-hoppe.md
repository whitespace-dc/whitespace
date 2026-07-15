---
title_en: "NVIDIA claims Blackwell NVL72 delivers up to 25x performance per watt over Hopper"
title_zh: "輝達：Blackwell NVL72每瓦效能最高達Hopper世代25倍"
summary_en: "NVIDIA said its GB300 NVL72 rack-scale system delivers up to 25 times the performance per watt of Hopper-generation hardware on select frontier AI models, attributing the gains to a 72-GPU rack-scale architecture and software advances. The company cited production deployments by Anthropic, OpenAI, CoreWeave, Perplexity, and Fireworks AI."
summary_zh: "輝達宣稱，其GB300 NVL72機架規模系統在特定前沿AI模型上，每瓦效能最高可達Hopper世代硬體的25倍，歸功於72顆GPU的機架規模架構與軟體持續調校。Anthropic、OpenAI、CoreWeave、Perplexity及Fireworks AI均已正式部署該系統。"
body_en: |
  NVIDIA said its GB300 NVL72 rack-scale system delivers up to 25 times the performance per watt of its previous Hopper generation on select frontier AI models, attributing the gains to a shift from eight-GPU clusters to a 72-GPU rack-scale architecture and continuous software tuning.

  The figures are framed around inference of frontier models under fixed power budgets, a constraint that NVIDIA said is increasingly shaping data centre buying decisions as electricity access becomes a potential ceiling on AI scaling.

  ## Efficiency figures

  NVIDIA's headline comparisons pit the GB300 NVL72 against Hopper-generation systems on three models:

  - Up to 25 times performance per watt on DeepSeek V4 Pro
  - Up to 20 times on GLM5.1
  - Up to 10 times on Kimi K2.6

  The company said the architecture shift driving those gains is the move from an eight-GPU domain in Hopper systems to a 72-GPU rack-scale domain in the Blackwell NVL72, linked by NVLink Switch interconnects that NVIDIA said are built specifically for AI inference rather than adapted from general networking equipment.

  ## Software as an efficiency variable

  NVIDIA highlighted software as a fast-moving and material efficiency lever independent of hardware. On DeepSeek V4, it said performance per watt improved by up to five times within a single month through software advances alone.

  The company's current inference software stack spans Dynamo, TensorRT-LLM, SGLang, and vLLM, with support for techniques including NVFP4 quantisation, disaggregated serving, expert parallelism, KV-aware routing, and KV cache offloading.

  To reflect the trade-off between low-latency and high-throughput inference, which operators adjust depending on demand, NVIDIA said it presents Pareto curves for each model rather than a single benchmark point. It also cited simulation tools intended to help customers identify operating configurations before committing live GPU capacity.

  ## Power outside the compute layer

  NVIDIA addressed data centre power use beyond the processors themselves. The company said cooling losses and rack-level inefficiencies mean that only around 60% of electricity drawn from the grid typically reaches AI processing hardware.

  NVIDIA said its DSX MaxLPS software is designed to narrow that gap by shifting power between GPUs and racks in real time, while supporting warm-water liquid cooling and power steering. It said that approach can allow operators to run up to 40% more GPUs within the same power budget.

  ## Production deployments

  NVIDIA said its efficiency claims are grounded in production deployments rather than synthetic benchmarks. Anthropic and OpenAI use Blackwell NVL72 systems for inference workloads, the company said.

  Among cloud and inference providers, CoreWeave has deployed Kimi K2.6 on GB300 NVL72, using NVFP4 quantisation and speculative decoding to lift inference performance, according to NVIDIA. Perplexity is running Qwen3 235B and a post-trained model, Qwen3.5-397B-A17B, on GB200 NVL72 for its AI agent platform. Fireworks AI is deploying GLM 5.2 on Blackwell systems for customers including Cursor and Factory AI, the company said.

  NVIDIA also said that large rack-scale systems introduce failure modes not present in smaller single-node installations, making operational reliability a central issue for what it described as AI factories.

  ## Mixture-of-experts and the case for rack scale

  NVIDIA tied its architectural argument to the rise of mixture-of-experts, or MoE, model designs, in which a model spreads workloads across specialist parts rather than engaging the entire model for each input. The company said MoE architectures favour larger GPU domains connected by high-speed scale-up interconnects, positioning rack-scale systems as better suited to serving these models than smaller clusters built around fewer processors.

  ## Industry significance

  The emphasis on performance per watt, rather than raw throughput, reflects a broadening concern across the AI industry over energy constraints. As companies deploy agentic AI systems that generate higher token volumes over longer sessions, the operating cost per token has grown in importance. NVIDIA argued that access to electricity, rather than access to chips alone, may become the main constraint on scaling inference.

  NVIDIA framed its next platform, Vera Rubin, as an extension of the same rack-scale, energy-efficiency focus. It said Vera Rubin will include the sixth generation of NVLink Switch, designed for AI-specific workloads and featuring SHARP, which performs in-network computing inside the switch rather than on the GPU.
body_zh: |
  輝達（NVIDIA）表示，其GB300 NVL72機架規模系統在特定前沿AI模型上，每瓦效能最高可達上一代Hopper架構的25倍，並將此一效能躍升歸因於從8顆GPU叢集升級至72顆GPU機架規模架構，以及持續不斷的軟體調校。

  前述數據以固定電力預算下的前沿模型推論為評估框架。輝達表示，隨著電力取得逐漸成為AI規模擴張的潛在瓶頸，此一限制條件對資料中心採購決策的影響日益加深。

  ## 效能數據

  輝達公布的主要比較數據，是以GB300 NVL72對比Hopper世代系統，評估三款模型的表現：

  - DeepSeek V4 Pro：每瓦效能最高達25倍
  - GLM5.1：最高達20倍
  - Kimi K2.6：最高達10倍

  輝達表示，驅動上述效能提升的架構變革，在於從Hopper系統的8顆GPU域升級至Blackwell NVL72的72顆GPU機架規模域，透過NVLink Switch互連技術緊密串聯。輝達強調，此互連方案係專為AI推論設計，並非改自通用網路設備。

  ## 軟體：效能提升的關鍵變數

  輝達特別指出，軟體是獨立於硬體之外、演進迅速且影響顯著的效能調節器。以DeepSeek V4為例，該公司表示，單憑軟體精進，在短短一個月內每瓦效能便提升了最高5倍。

  目前輝達的推論軟體堆疊涵蓋Dynamo、TensorRT-LLM、SGLang與vLLM，並支援NVFP4量化、分離式服務（disaggregated serving）、專家平行處理（expert parallelism）、KV感知路由（KV-aware routing）及KV快取卸載（KV cache offloading）等多項技術。

  為反映低延遲推論與高吞吐量推論之間的取捨關係——運算服務商會依需求靈活調整——輝達表示，其針對每款模型提供帕雷托曲線（Pareto curve），而非單一基準數字。輝達亦提及模擬工具，旨在協助客戶於實際佔用GPU資源之前，事先找出最適運行配置。

  ## 運算層以外的電力議題

  輝達進一步探討資料中心在處理器本身以外的電力耗損問題。該公司表示，冷卻損耗與機架層級的低效，導致從電網汲取的電力中，通常僅約60%能實際用於AI運算硬體。

  輝達表示，其DSX MaxLPS軟體旨在縮小這段差距，可即時在GPU與機架之間動態調配電力，同時支援溫水液冷與電力導向（power steering）功能。輝達指出，此方案可讓運算服務商在相同電力預算內，多運行最多40%的GPU。

  ## 正式部署案例

  輝達表示，其效能主張奠基於實際正式部署，而非合成基準測試。Anthropic與OpenAI均已採用Blackwell NVL72系統處理推論工作負載。

  在雲端與推論服務商方面，根據輝達說法，CoreWeave已在GB300 NVL72上部署Kimi K2.6，並運用NVFP4量化與推測解碼（speculative decoding）提升推論效能。Perplexity則在GB200 NVL72上運行Qwen3 235B及後訓練模型Qwen3.5-397B-A17B，用於其AI代理平台。Fireworks AI則在Blackwell系統上，為包含Cursor與Factory AI在內的客戶部署GLM 5.2。

  輝達亦指出，大型機架規模系統存在小型單節點安裝所不會出現的故障模式，使運行可靠性成為其所稱「AI工廠」的核心課題。

  ## 混合專家架構與機架規模的必要性

  輝達將其架構論述與混合專家（Mixture-of-Experts，MoE）模型設計的崛起相互連結。MoE架構讓模型將工作負載分散至各專精子模組，而非每次輸入都動用整個模型。輝達表示，MoE架構有利於透過高速橫向擴展互連技術串接的大型GPU域，使機架規模系統在服務此類模型時，比由少量處理器構成的小型叢集更具優勢。

  ## 產業意義

  強調每瓦效能而非原始吞吐量，反映出AI產業對能源限制日趨普遍的隱憂。隨著企業部署的AI代理系統在更長工作期間內產生更大量的Token，每個Token的營運成本愈發受到重視。輝達主張，電力取得——而非單純的晶片取得——或許將成為推論規模擴張的主要制約因素。

  輝達將下一代平台Vera Rubin定位為同一機架規模、節能路線的延伸。該公司表示，Vera Rubin將搭載第六代NVLink Switch，專為AI特定工作負載設計，並具備SHARP功能——此功能可在交換器內部直接執行網路內運算（in-network computing），毋須仰賴GPU處理。
date: "2026-07-16"
source_published: "2026-07-15T16:15:00.000Z"
category: "compute"
secondary_categories: ["cooling"]
region: []
vendor: ["CoreWeave", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA touts Blackwell's AI efficiency gains in racks (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-touts-blackwell-s-ai-efficiency-gains-in-racks"
    title: "NVIDIA touts Blackwell's AI efficiency gains in racks"
    trust: 3
    type: primary
    published_at: "2026-07-15T16:15:00.000Z"
---
