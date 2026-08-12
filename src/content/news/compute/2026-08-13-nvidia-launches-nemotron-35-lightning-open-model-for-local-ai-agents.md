---
title_en: "NVIDIA launches Nemotron 3.5 Lightning open model for local AI agents"
title_zh: "輝達推出 Nemotron 3.5 Lightning 開放模型，專攻本地端 AI 代理"
summary_en: "NVIDIA has released Nemotron 3.5 Lightning, a 30-billion-parameter mixture-of-experts open-weight model built for running AI agents on local hardware, paired with routing software and clustering tools spanning consumer GPUs to compact workstation systems."
summary_zh: "輝達發布 Nemotron 3.5 Lightning，這是一款擁有 300 億參數的混合專家開放權重模型，專為在本地硬體上執行 AI 代理而設計，並搭配路由軟體與叢集工具，支援從消費級顯示卡到緊湊型工作站的各類系統。"
body_en: |
  NVIDIA has released Nemotron 3.5 Lightning, a 30-billion-parameter mixture-of-experts (MoE) model with open weights, targeting developers who want to run AI agents on local hardware rather than routing all inference to remote cloud services.

  The model runs on a range of NVIDIA hardware including RTX-equipped PCs, DGX Spark compact compute appliances, Jetson edge devices and workstations. Partners including Acer, ASUS, Dell, Exxact, GIGABYTE, HP, Lenovo, MSI and Supermicro are supporting Blackwell-based systems capable of running the software, NVIDIA said.

  ## What Nemotron 3.5 Lightning does

  Nemotron 3.5 Lightning uses a mixture-of-experts architecture, in which only a subset of the model's parameters are active during any given inference step, reducing compute requirements compared with a dense model of equivalent parameter count. NVIDIA said the model is intended for "always-on" agents that handle repeated or specialised tasks locally without depending solely on cloud infrastructure. Open weights allow developers to fine-tune the model for specific use cases while keeping data on the device.

  The model is available in NVFP4 and GGUF formats — two quantisation schemes that compress model weights to reduce memory footprint — and is supported by inference runtimes vLLM, Ollama, llama.cpp and LM Studio. Unsloth is providing additional support through its Unsloth Studio product.

  ## Routing and cost management

  Alongside the model, NVIDIA introduced NeMo Switchyard, an open-source library for routing agent workflows across multiple models. The software directs each stage of a task to a different model based on speed, accuracy and cost requirements, rather than sending every request to a single high-capability model.

  NVIDIA said internal benchmarks showed that routing workloads with Switchyard reduced benchmark completion cost to approximately one-third of the cost of using Opus 4.8 alone, while maintaining frontier-level task completion rates. The company framed this as a response to growing enterprise concern over token costs when every workload is sent to a top-tier model.

  ## Broader model additions

  The release package extends well beyond Nemotron 3.5 Lightning. NVIDIA listed several other models now available or newly supported on its hardware:

  - **Cosmos 3 Edge**: a 4-billion-parameter world model for robotics and vision applications
  - **MiniMax-H3**: a 33-billion-parameter model capable of generating video and stereo audio
  - **Poolside AI's Laguna S 2.1**: a model focused on coding tasks
  - **Meta's Muse Glimmer**: a 30-billion-parameter open-weight model for coding and local agent tasks, designed to run on a single GeForce RTX 5090 while handling long context windows and multistep workflows

  NVIDIA also noted refreshed support for DeepSeek-V4-Flash and Thinking Machines Lab's Inkling-Small, describing both as large models configured to run with reduced active parameter counts using optimised checkpoints or community-built formats on systems such as DGX Spark and DGX Station.

  ## Agent tooling

  Developer tooling for building local agents now includes NemoClaw, which NVIDIA said can be used to construct agents around local models. NeMo Automodel enables fine-tuning of some models while keeping data on the device.

  Unsloth Desktop is also launching as a fully open-source desktop application covering local model inference, training, diffusion workloads, agent integrations, web research and code execution, combining those functions in a single application, according to NVIDIA.

  ## Clustering desktop systems

  A notable part of the announcement concerns NVIDIA Sync, updated software that allows multiple DGX Spark systems to be networked together into a single logical resource. The application, available for Windows and macOS, automatically detects connected units, provides remote access and can launch applications across one or more DGX Spark machines.

  A Cluster Assistant within Sync configures two or more units as a high-speed cluster using ConnectX-7 ports, a high-bandwidth interconnect designed for low-latency server communication. NVIDIA said the clustering capability allows developers to run larger models such as GLM 5.2 and DeepSeek V4 Flash when a single device lacks sufficient memory or throughput.

  NVIDIA also disclosed two additional DGX Spark software updates: a native ARM64 Linux build of Google Chrome and a Sync Resource Monitor for system-level usage tracking.

  ## Video and media generation

  NVIDIA highlighted performance figures for third-party video generation tools optimised for its hardware. LTX 2.5, an open-world video generation model from LTX, has been optimised for RTX GPUs, DGX Spark and DGX Station, delivering up to 20% faster performance and 40% memory savings on an RTX 6000 PRO GPU, NVIDIA said.

  Alibaba's Wan-Animate-2, a 14-billion-parameter model that transfers motion and facial expressions from a reference video to a static image, now has day-zero support in ComfyUI, a widely used graphical workflow tool for generative AI. NVIDIA said the model runs up to 16 times faster on an RTX PRO 5000 Blackwell and 26 times faster on an RTX 5090 compared with Apple's M3 Ultra chip.

  ## What it signals

  The combined announcement reflects an effort by NVIDIA to position its hardware and software stack as viable infrastructure for running large open-weight models locally, across a range from consumer graphics cards to clustered desktop appliances. The addition of cost-routing software such as Switchyard indicates that NVIDIA is targeting enterprise developers concerned about inference costs at scale, not only researchers and enthusiasts.

  NVIDIA said the updates are intended to make open-source software and open-weight models more practical for use cases spanning coding agents, robotics, media generation and multimodal applications. The effort spans hardware from consumer GPUs to compact clustered appliances, the company said.

  NeMo Switchyard is available as open-source software, and Nemotron 3.5 Lightning is available in NVFP4 and GGUF formats through vLLM, Ollama, llama.cpp, LM Studio and Unsloth Studio.
body_zh: |
  輝達（NVIDIA）正式發布 Nemotron 3.5 Lightning，這是一款擁有 300 億參數、採混合專家（MoE）架構的開放權重模型，主要針對希望在本地硬體上執行 AI 代理、而非將所有推論工作傳送至遠端雲端服務的開發者。

  該模型可在多款輝達硬體上執行，涵蓋搭載 RTX 的個人電腦、DGX Spark 緊湊型運算設備、Jetson 邊緣裝置及工作站。輝達表示，宏碁（Acer）、華碩（ASUS）、戴爾（Dell）、Exxact、技嘉（GIGABYTE）、惠普（HP）、聯想（Lenovo）、微星（MSI）及超微（Supermicro）等合作夥伴，均已支援可執行該軟體的 Blackwell 架構系統。

  ## Nemotron 3.5 Lightning 的功能

  Nemotron 3.5 Lightning 採混合專家架構，在每次推論步驟中，僅有部分模型參數會被啟用，相較於參數量相同的密集型模型，所需運算資源因此大幅降低。輝達表示，該模型專為「全天候運行」的代理所設計，可在本地處理重複性或專業性任務，無需完全仰賴雲端基礎架構。開放權重讓開發者能針對特定使用場景進行微調，同時將資料保留於裝置本地。

  該模型提供 NVFP4 與 GGUF 兩種格式——這兩種量化方案可壓縮模型權重以降低記憶體佔用——並支援 vLLM、Ollama、llama.cpp 及 LM Studio 等推論執行環境。Unsloth 亦透過其 Unsloth Studio 產品提供額外支援。

  ## 路由與成本管理

  伴隨該模型一同推出的，還有 NeMo Switchyard——一套輝達推出的開源函式庫，可將代理工作流程路由至多個模型。這套軟體能根據速度、準確度與成本需求，將任務的各個階段分配給不同模型，而非將所有請求一律發送至單一高效能模型。

  輝達表示，內部基準測試顯示，透過 Switchyard 路由工作負載後，基準測試完成成本降至僅使用 Opus 4.8 的約三分之一，同時仍維持前沿水準的任務完成率。輝達將此定位為回應企業界日益關切的問題——當所有工作負載都發送至頂級模型時，token 成本大幅攀升。

  ## 更廣泛的模型新增

  此次發布的內容遠不止 Nemotron 3.5 Lightning。輝達列出了數款現已上市或在其硬體上獲得全新支援的模型：

  - **Cosmos 3 Edge**：一款擁有 40 億參數的世界模型，適用於機器人與視覺應用
  - **MiniMax-H3**：一款擁有 330 億參數的模型，可生成影片與立體聲音訊
  - **Poolside AI 的 Laguna S 2.1**：一款專注於程式設計任務的模型
  - **Meta 的 Muse Glimmer**：一款擁有 300 億參數的開放權重模型，專為程式設計與本地代理任務設計，可在單張 GeForce RTX 5090 上執行，同時支援長上下文視窗與多步驟工作流程

  輝達亦宣布更新對 DeepSeek-V4-Flash 與 Thinking Machines Lab 的 Inkling-Small 的支援，並將兩者描述為大型模型，可透過最佳化檢查點或社群建立格式，在 DGX Spark 與 DGX Station 等系統上以較少的活躍參數執行。

  ## 代理工具鏈

  用於建立本地代理的開發者工具現包含 NemoClaw，輝達表示該工具可用於圍繞本地模型建構代理。NeMo Automodel 則可在資料保留於裝置本地的前提下，對部分模型進行微調。

  Unsloth Desktop 也即將以完全開源桌面應用程式的形式推出，涵蓋本地模型推論、訓練、擴散工作負載、代理整合、網路研究與程式碼執行，根據輝達的說法，將上述所有功能整合於單一應用程式之中。

  ## 桌面系統叢集化

  此次公告中值得特別關注的，是 NVIDIA Sync 的更新。這套軟體可將多台 DGX Spark 系統聯網，組建成單一邏輯資源。該應用程式支援 Windows 與 macOS，可自動偵測已連接的裝置、提供遠端存取，並能跨一台或多台 DGX Spark 機器啟動應用程式。

  Sync 內建的叢集助理（Cluster Assistant）可利用 ConnectX-7 連接埠——一種專為低延遲伺服器通訊設計的高頻寬互連介面——將兩台或更多裝置配置成高速叢集。輝達表示，叢集功能讓開發者在單台裝置記憶體或吞吐量不足時，仍能執行 GLM 5.2 與 DeepSeek V4 Flash 等大型模型。

  輝達也揭露了 DGX Spark 的另外兩項軟體更新：原生 ARM64 Linux 版 Google Chrome，以及用於系統層級用量追蹤的 Sync Resource Monitor。

  ## 影像與媒體生成

  輝達特別列出了針對其硬體最佳化的第三方影片生成工具的效能數據。LTX 推出的開放世界影片生成模型 LTX 2.5 已針對 RTX GPU、DGX Spark 及 DGX Station 進行最佳化，輝達表示在 RTX 6000 PRO GPU 上可達最高 20% 的效能提升，並節省 40% 的記憶體用量。

  阿里巴巴的 Wan-Animate-2 是一款擁有 140 億參數的模型，可將動作與臉部表情從參考影片轉移至靜態圖像，現已在廣泛使用的生成式 AI 圖形工作流程工具 ComfyUI 中獲得首日支援。輝達表示，該模型在 RTX PRO 5000 Blackwell 上的執行速度最高可達 Apple M3 Ultra 晶片的 16 倍，在 RTX 5090 上更達 26 倍。

  ## 此次發布的意涵

  此次綜合性公告反映了輝達的整體佈局——將自身硬體與軟體堆疊定位為在本地執行大型開放權重模型的可行基礎架構，涵蓋範圍從消費級顯示卡到叢集桌面設備。Switchyard 等成本路由軟體的加入，顯示輝達的目標受眾不僅限於研究人員與愛好者，更鎖定擔憂大規模推論成本的企業開發者。

  輝達表示，此次更新旨在讓開源軟體與開放權重模型在程式設計代理、機器人、媒體生成及多模態應用等場景中更具實用價值。輝達表示，這項努力涵蓋從消費級顯示卡到緊湊型叢集設備的各類硬體。

  NeMo Switchyard 已以開源軟體形式對外提供，Nemotron 3.5 Lightning 則以 NVFP4 與 GGUF 格式，透過 vLLM、Ollama、llama.cpp、LM Studio 及 Unsloth Studio 提供下載。
date: "2026-08-13"
source_published: "2026-08-12T16:15:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Gigabyte", "Nvidia", "Supermicro"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA unveils Nemotron 3.5 Lightning for local agents (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-unveils-nemotron-3-5-lightning-for-local-agents"
    title: "NVIDIA unveils Nemotron 3.5 Lightning for local agents"
    trust: 3
    type: primary
    published_at: "2026-08-12T16:15:00.000Z"
---
