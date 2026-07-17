---
title_en: "NVIDIA adds Jetson Thor T3000 and T2000 modules for edge AI and robotics"
title_zh: "輝達推出 Jetson Thor T3000 與 T2000 模組，擴展邊緣 AI 版圖"
summary_en: "NVIDIA has introduced the Jetson T3000 and T2000 modules, extending its Thor-based line for robots and edge AI systems to cover performance from 70 TOPS to 2,000 teraflops, with commercial availability scheduled for the first quarter of 2027."
summary_zh: "輝達（NVIDIA）發表 Jetson Thor 新成員 T3000 與 T2000 模組，鎖定機器人、視覺 AI 代理及工業邊緣應用，使 Jetson 產品線效能版圖從 70 TOPS 延伸至 2,000 teraflops，兩款模組均預計於 2027 年第一季正式商業上市。"
body_en: |
  NVIDIA has added two modules to its Jetson Thor line — the T3000 and T2000 — aimed at developers building robots, visual AI agents, and industrial systems that run artificial intelligence workloads locally rather than in the cloud, with both modules scheduled for commercial availability in the first quarter of 2027.

  The additions extend the Jetson portfolio's stated performance range, which now spans from 70 TOPS (tera-operations per second, a measure of AI processing throughput) to 2,000 teraflops (trillion floating-point operations per second).

  ## T3000 and T2000 specifications

  The Jetson T3000 is the higher-performing of the two new modules. NVIDIA said it delivers 865 FP4 teraflops — FP4 refers to a low-precision numerical format used in AI inference that allows more compute operations per watt — while occupying roughly half the space and drawing half the power of the existing T5000. The module integrates a Blackwell-architecture GPU, an eight-core Neoverse Arm central processing unit, 32 gigabytes of LPDDR5X memory, 273 gigabytes per second of memory bandwidth, and 25-gigabit Ethernet connectivity, according to NVIDIA.

  An industrial variant, the IGX T3000, adds functional safety certification and runs NVIDIA's Halos for Robotics safety system, intended for robots operating in proximity to humans.

  The Jetson T2000 is positioned as a lower entry point in the Thor family. NVIDIA said it offers 400 FP4 teraflops and 16GB of memory, targeting developers working on autonomous mobile robots, industrial manipulators, and visual AI agents.

  NVIDIA said the T3000 is designed for multimodal inference workloads — tasks that combine different input types such as text, images, and sensor data — including large language models, vision language models, vision language action models, and world foundation models. The company said the module can match T5000 inference performance in those workloads at a smaller footprint.

  ## Software tools for memory optimization

  Alongside the hardware, NVIDIA released what it calls Jetson agent skills, a set of software tools designed to automate memory optimization, system configuration, and deployment tasks across the Jetson portfolio. The tools support both Jetson Thor and the previous Jetson Orin generation.

  NVIDIA said the software can reduce optimization time from weeks to days and allow customers to deploy on lower-memory hardware configurations without degrading performance — relevant as memory costs remain elevated and edge deployments typically face tight hardware constraints.

  The company cited several companies as early users. UBTech, Agile Robots, and Connect Tech each reduced memory consumption by as much as 15 gigabytes, enabling a shift from the Jetson AGX Orin 64GB module to the 32GB version. Retail analytics firm SandStar cut memory usage by up to 4GB, allowing deployment on the Jetson Orin NX 8GB module instead of the 16GB model. Traffic management firm NoTraffic reduced memory usage by 30% on the Jetson TX2 NX, creating headroom for additional AI functions on the same hardware. Companion robot maker GROOVE X is using Jetson's mix of AI accelerators to redistribute workloads and reduce memory requirements, NVIDIA said.

  NVIDIA presented these examples as evidence that software-driven optimization can lower system costs comparably to hardware changes.

  ## Cosmos 3 Edge foundation model

  NVIDIA also expanded its Cosmos model family with Cosmos 3 Edge, a 4-billion-parameter world foundation model — a large AI model trained to understand and reason about physical environments — compatible with Thor platforms. The model is intended for embodied AI systems that need to analyze their surroundings, reason in real time, and generate actions on the device rather than offloading computation to cloud servers.

  Developers can adapt Cosmos 3 Edge for specific robots and sensors in approximately one day using NVIDIA's open Cosmos framework, the company said. After customization, the model runs on Jetson Thor for vision analysis and robot policy execution on-device.

  The launch is part of what NVIDIA described as a broader effort to tie hardware sales to a software stack for robotics, simulation, and model deployment, which also includes Isaac for robotics simulation and perception, and models such as Nemotron and Isaac GR00T.

  ## Industry adoption and partners

  NVIDIA said Jetson AGX Thor is already in use by robotics groups including 1X, Agile Robots, Amazon Robotics, Boston Dynamics, FANUC, Hitachi, and Techman Robot — a list spanning both humanoid robot developers and industrial automation suppliers.

  A broader group of hardware partners is already offering Thor-based systems: ADLINK, Advantech, AAEON, Aetina, Auvidea, AVerMedia, Connect Tech, ForeCR, JWIPC, NEXCOM Robotic Solutions, Realtimes, Seeed Studio, Twowin, TZTEK, and YUAN. Software partners Antmicro, Neurealm, REBOTNIX, and RidgeRun are to provide emulation and migration support for customers moving to the new modules.

  ## Developer access before general availability

  Developers can begin work ahead of module availability using the existing Jetson AGX Thor developer kit to emulate T3000 and T2000 performance. NVIDIA said this is possible because the modules share the same chip architecture and software stack across the entire Thor family. T3000 emulation mode is to become available later this month with the JetPack 7.2.1 software release; T2000 emulation support will arrive in a subsequent release.

  The Jetson T3000 and T2000 modules are scheduled to reach commercial availability in the first quarter of 2027.
body_zh: |
  輝達（NVIDIA）在旗下 Jetson Thor 產品線新增了 T3000 與 T2000 兩款模組，鎖定正在開發機器人、視覺 AI 代理及工業系統的開發者——這類應用的人工智慧運算工作負載於本地端執行，而非仰賴雲端。兩款模組均預計於 2027 年第一季正式商業出貨。

  此次新增的模組進一步拓展了 Jetson 產品組合的效能範疇，整個系列目前涵蓋的效能從 70 TOPS（每秒兆次運算，為衡量 AI 處理吞吐量的指標）延伸至 2,000 teraflops（每秒兆次浮點運算）。

  ## T3000 與 T2000 規格

  Jetson T3000 是兩款新模組中效能較高的一款。輝達表示，T3000 可提供 865 FP4 teraflops 的運算效能——FP4 是一種用於 AI 推論的低精度數值格式，能在每瓦功耗下執行更多運算——體積與功耗均約為現有 T5000 的一半。輝達指出，該模組整合了 Blackwell 架構 GPU、八核心 Neoverse Arm 中央處理器、32GB LPDDR5X 記憶體、每秒 273GB 的記憶體頻寬，以及 25Gbps 乙太網路連線能力。

  工業版本 IGX T3000 則額外具備功能安全認證，並搭載輝達的 Halos for Robotics 安全系統，專為在人類附近運作的機器人所設計。

  Jetson T2000 定位為 Thor 家族的較低入門款。輝達表示，T2000 提供 400 FP4 teraflops 的效能與 16GB 記憶體，主要鎖定正在開發自主移動機器人、工業機械手臂以及視覺 AI 代理的開發者。

  輝達表示，T3000 專為多模態推論工作負載而設計——即結合文字、影像與感測器資料等不同輸入類型的任務——支援大型語言模型、視覺語言模型、視覺語言動作模型以及世界基礎模型。輝達指出，T3000 能以更小的體積，在上述工作負載中達到與 T5000 相當的推論效能。

  ## 記憶體最佳化軟體工具

  輝達同步推出所稱的「Jetson agent skills」，這是一套旨在自動化記憶體最佳化、系統設定及整個 Jetson 產品線部署作業的軟體工具組，同時支援 Jetson Thor 及上一代的 Jetson Orin。

  輝達表示，這套軟體能將最佳化所需時間從數週縮短至數天，並讓客戶在不犧牲效能的情況下，部署於記憶體容量較低的硬體配置——在記憶體成本仍居高不下、且邊緣部署通常面臨嚴苛硬體限制的環境下，這項特性格外切合實際需求。

  輝達引述了數家早期採用者的案例。UBTech、Agile Robots 及 Connect Tech 各自將記憶體消耗削減了多達 15GB，得以從 Jetson AGX Orin 64GB 模組轉換至 32GB 版本。零售分析業者 SandStar 將記憶體使用量削減最多 4GB，從而能改以 Jetson Orin NX 8GB 模組取代原本的 16GB 款式部署。交通管理業者 NoTraffic 在 Jetson TX2 NX 上將記憶體使用量降低了 30%，為同一硬體上額外的 AI 功能騰出空間。陪伴機器人製造商 GROOVE X 則正利用 Jetson 多元 AI 加速器的組合，重新分配工作負載並降低記憶體需求。

  輝達以上述案例為據，說明軟體驅動的最佳化足以達到與硬體升級相近的系統成本降低效果。

  ## Cosmos 3 Edge 基礎模型

  輝達同時擴充了 Cosmos 模型家族，推出 Cosmos 3 Edge——一款擁有 40 億參數的世界基礎模型（此類大型 AI 模型經過訓練後能夠理解並推理物理環境）——並與 Thor 平台相容。這款模型專為具身 AI 系統而設計，此類系統需要分析周遭環境、即時進行推理，並在裝置端生成動作，而非將運算卸載至雲端伺服器。

  輝達表示，開發者可利用輝達的開放式 Cosmos 框架，在約一天內將 Cosmos 3 Edge 針對特定機器人及感測器進行客製化調整。完成客製化後，該模型即可在 Jetson Thor 上執行，於裝置端負責視覺分析與機器人策略執行。

  此次發表是輝達所描述的更宏觀布局的一部分，目標是將硬體銷售與機器人、模擬及模型部署的軟體堆疊緊密結合，相關產品還涵蓋用於機器人模擬與感知的 Isaac，以及 Nemotron 和 Isaac GR00T 等模型。

  ## 產業採用與合作夥伴

  輝達表示，Jetson AGX Thor 已獲多個機器人團隊採用，包括 1X、Agile Robots、Amazon Robotics、Boston Dynamics、發那科（FANUC）、日立（Hitachi）及達明機器人（Techman Robot）——名單同時涵蓋人形機器人開發商與工業自動化供應商。

  規模更廣的硬體合作夥伴群亦已陸續推出以 Thor 為基礎的系統：凌華科技（ADLINK）、研華科技（Advantech）、AAEON、Aetina、Auvidea、圓剛科技（AVerMedia）、Connect Tech、ForeCR、JWIPC、磐儀科技（NEXCOM Robotic Solutions）、Realtimes、Seeed Studio、Twowin、TZTEK 及圓展科技（YUAN）。軟體合作夥伴 Antmicro、Neurealm、REBOTNIX 及 RidgeRun 則將為轉移至新模組的客戶提供模擬與遷移支援。

  ## 正式上市前的開發者體驗管道

  在模組正式上市前，開發者可利用現有的 Jetson AGX Thor 開發者套件，提前模擬體驗 T3000 與 T2000 的效能。輝達表示，這項安排之所以可行，是因為整個 Thor 家族的所有模組均共用相同的晶片架構與軟體堆疊。T3000 的模擬模式預計於本月稍晚隨 JetPack 7.2.1 軟體版本推出；T2000 的模擬支援則將在後續版本中提供。

  Jetson T3000 與 T2000 模組預計於 2027 年第一季正式商業上市。
date: "2026-07-18"
source_published: "2026-07-17T15:30:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA expands Jetson Thor lineup with T3000 and T2000 AI (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-expands-jetson-thor-lineup-with-t3000-and-t2000-ai"
    title: "NVIDIA expands Jetson Thor lineup with T3000 and T2000 AI"
    trust: 3
    type: primary
    published_at: "2026-07-17T15:30:00.000Z"
---
