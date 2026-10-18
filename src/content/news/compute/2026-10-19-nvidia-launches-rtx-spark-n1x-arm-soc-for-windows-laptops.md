---
title_en: "NVIDIA Launches RTX Spark N1X Arm SoC for Windows Laptops"
title_zh: "輝達發表 RTX Spark N1X Arm SoC，正式進軍 Windows 筆電市場"
summary_en: "NVIDIA this week launched the RTX Spark N1X, its Arm-based system-on-chip for Windows, with roughly half a dozen laptops and a mini-PC shipping alongside Microsoft's Surface Laptop Ultra. The chip is the consumer-market name for the GB10 SoC, a joint NVIDIA-MediaTek design that has shipped in Linux systems for approximately one year."
summary_zh: "輝達本週正式發表 RTX Spark N1X，這款基於 Arm 架構的 Windows 用系統單晶片（SoC）與微軟 Surface Laptop Ultra 及約半打合作廠商裝置同步亮相。該晶片為輝達與聯發科聯合設計的 GB10 SoC 之消費市場品牌，此前已以 Linux 系統形式出貨約一年，此次正式踏入 Windows 市場。"
body_en: |
  NVIDIA this week launched the RTX Spark N1X, its Arm-based system-on-chip (SoC) for Windows laptops and mini-PCs, with roughly half a dozen partner devices arriving alongside Microsoft's Surface Laptop Ultra. The launch marks the chip's entry into the Windows market after approximately one year of shipping in Linux mini-PC systems under its internal designation, GB10.

  The devices shipping this week include laptops from multiple manufacturers targeting developers, content creators, and broader consumer buyers, as well as Microsoft's Surface RTX Spark Dev Box, a Windows mini-PC. NVIDIA positions the RTX Spark N1X as a high-end SoC comparable in class to AMD's Ryzen AI Max series, also known as Strix Halo.

  ## What the RTX Spark N1X is

  The RTX Spark N1X is the consumer-facing brand name for the GB10 SoC. NVIDIA describes it as a scaled-down version of its Grace Blackwell server architecture, the platform that underpins its GB200 and GB300 data-center systems. The "N1X" designation leaves room for future chips within the RTX Spark family.

  GB10 is a joint project between NVIDIA and MediaTek. Rather than a single monolithic chip, it uses two chiplets — discrete silicon dies integrated into one package. MediaTek designed the CPU and memory chiplet, referred to as the S-dielet, while NVIDIA designed the GPU chiplet, referred to as the G-chiplet. NVIDIA said both chiplets are manufactured on TSMC's 3-nanometer process node, which at the time of GB10's development was the most advanced node available at that foundry and newer than the process used for NVIDIA's discrete Blackwell GPUs or its Grace server CPU.

  ## CPU and memory

  The MediaTek-designed CPU die contains 20 processor cores split across two clusters: 10 Arm Cortex-X925 performance cores and 10 Arm Cortex-A725 efficiency cores. Each cluster has its own 16 MB of L3 cache. The cores are standard off-the-shelf designs from Arm's 2024 Cortex lineup and carry no architectural modifications. ServeTheHome noted that launching a chip based on 2024 CPU cores in 2026 puts the RTX Spark N1X behind current CPU technology and that the design emphasizes multi-threaded workloads over single-threaded performance, in part because it does not target high CPU clock speeds.

  The memory subsystem sits on the same MediaTek die. The chip uses a 16-channel, 256-bit LPDDR5X memory bus — one of a small number of non-Apple consumer chips to use that width — delivering up to 300 GB per second of memory bandwidth using LPDDR5X-9400 speed-grade memory. The current configuration supports up to 128 GB of system memory.

  The MediaTek die also houses display controllers, which NVIDIA said are positioned alongside the memory controllers for bandwidth and power efficiency reasons, as well as general-purpose I/O and the chip's PCIe lanes for connecting external peripherals.

  ## GPU

  The NVIDIA-designed GPU chiplet implements a full Blackwell graphics architecture at 48 streaming multiprocessors (SMs), yielding 6,144 CUDA cores — the parallel processing units that handle both graphics rendering and general-purpose compute tasks. ServeTheHome noted this core count matches NVIDIA's discrete GeForce RTX 5070 graphics card in raw hardware, though the discrete card carries more than twice the memory bandwidth through its use of GDDR7 memory rather than the shared LPDDR5X pool.

  NVIDIA said the GPU implementation is a complete Blackwell graphics design, not a scaled-down server variant, meaning it includes ray tracing hardware, texture units, raster output processors (ROPs), and the full set of features required for NVIDIA's consumer graphics suite including DLSS (Deep Learning Super Sampling, an AI-based image upscaling technology).

  ## Chip-to-chip interconnect

  The two chiplets communicate via NVLink-C2C, the same chip-to-chip interface NVIDIA uses to link Grace CPUs and Blackwell GPUs in its GB200 and GB300 server systems. In GB10, the NVLink-C2C link runs at 600 GB per second, approximately twice the bandwidth of the chip's memory controllers.

  ## Context

  The RTX Spark launch is part of a broader effort within the Windows ecosystem to expand adoption of Arm-based processors. ServeTheHome described Microsoft's Surface Laptop Ultra as the most premium Surface Laptop to date and the leading device in this week's rollout, with partner laptops targeting both professional and consumer segments.

  NVIDIA has not previously designed a consumer-market Arm SoC since its Tegra line, having focused its Arm silicon on automotive (DRIVE), embedded AI (Jetson), and server (Grace) platforms over the past decade and a half. The GB10 is a departure in that it targets end-user computing directly, and its co-design with MediaTek is a structural break from NVIDIA's previous practice of designing its own Arm SoCs entirely in-house.

  NVIDIA presented GB10's architecture in detail at the Hot Chips 2025 conference. The specifications disclosed at that event apply to the RTX Spark N1X as shipped.

  ## Significance

  The RTX Spark N1X launch gives Windows a high-end Arm SoC with a GPU subsystem comparable in core count to a current discrete mid-range graphics card, a memory bandwidth ceiling of 300 GB per second, and support for up to 128 GB of unified memory — specifications that position the platform for developer, AI inference, and content creation workloads where memory capacity and GPU compute matter more than single-threaded CPU speed. Whether the platform achieves broad Windows adoption will depend in part on software compatibility and ecosystem development, which the source did not address.

  Multiple OEM laptops based on the RTX Spark N1X are now commercially available alongside Microsoft's own Surface devices, and NVIDIA's naming convention for the chip suggests additional variants in the RTX Spark family are planned.
body_zh: |
  輝達本週正式推出 RTX Spark N1X，這款適用於 Windows 筆電與迷你電腦的 Arm 架構系統單晶片（SoC），約半打合作廠商裝置與微軟 Surface Laptop Ultra 同步問世。此次發表標誌著該晶片以內部代號 GB10 在 Linux 迷你電腦系統出貨約一年後，正式踏入 Windows 市場。

  本週出貨的裝置涵蓋來自多家製造商、分別面向開發者、內容創作者及一般消費者的筆電，以及微軟的 Surface RTX Spark Dev Box 迷你電腦。輝達將 RTX Spark N1X 定位為高階 SoC，可與 AMD 的 Ryzen AI Max 系列（又稱 Strix Halo）相抗衡。

  ## RTX Spark N1X 是什麼

  RTX Spark N1X 是 GB10 SoC 的消費市場品牌名稱。輝達將其描述為旗下 Grace Blackwell 伺服器架構的精簡版本，而 Grace Blackwell 正是支撐 GB200 及 GB300 資料中心系統的核心平台。「N1X」這一命名方式，也為 RTX Spark 家族未來推出其他晶片預留了空間。

  GB10 是輝達與聯發科的共同設計專案。它並非單一整合式晶片，而是採用兩枚小晶片（chiplet）——兩塊獨立的晶粒，整合封裝於同一套件之中。聯發科負責設計 CPU 與記憶體小晶片（稱為 S-dielet），輝達則負責 GPU 小晶片（稱為 G-chiplet）。輝達表示，兩枚小晶片均採用台積電 3 奈米製程生產，這在 GB10 開發當時是該晶圓廠最先進的製程節點，也比輝達獨立 Blackwell 繪圖晶片或 Grace 伺服器 CPU 所採用的製程更為先進。

  ## 處理器與記憶體

  聯發科設計的 CPU 晶粒共配置 20 個處理器核心，分屬兩個叢集：10 個 Arm Cortex-X925 效能核心，以及 10 個 Arm Cortex-A725 效率核心，每個叢集各擁有 16 MB 的 L3 快取。這些核心均採用 Arm 2024 年 Cortex 產品線的標準現成設計，未經任何架構修改。ServeTheHome 指出，在 2026 年推出一款採用 2024 年 CPU 核心的晶片，意味著 RTX Spark N1X 在 CPU 技術層面已落後於當前水準；由於該設計並未以高 CPU 時脈速度為目標，部分原因在於其著重多執行緒工作負載，而非單執行緒效能。

  記憶體子系統同樣位於聯發科晶粒上。該晶片採用 16 通道、256 位元的 LPDDR5X 記憶體匯流排——這是少數採用如此匯流排寬度的非 Apple 消費級晶片之一——搭配 LPDDR5X-9400 速率等級記憶體，可提供高達每秒 300 GB 的記憶體頻寬，現行配置最高支援 128 GB 的系統記憶體。

  聯發科晶粒上還整合了顯示控制器，輝達表示其與記憶體控制器相鄰配置，有助於兼顧頻寬與能源效率；此外亦包含通用型 I/O 介面，以及用於連接外部周邊裝置的 PCIe 通道。

  ## 繪圖處理器

  輝達設計的 GPU 小晶片實作了完整的 Blackwell 繪圖架構，共配備 48 個串流多處理器（SM），合計 6,144 個 CUDA 核心——這些並行處理單元同時肩負繪圖渲染與通用運算任務。ServeTheHome 指出，這一核心數量在原始硬體規格上與輝達的獨立顯示卡 GeForce RTX 5070 相當，但後者採用 GDDR7 記憶體，記憶體頻寬超出兩倍以上，而非仰賴共用的 LPDDR5X 記憶體池。

  輝達表示，此 GPU 實作為完整的 Blackwell 繪圖設計，而非精簡的伺服器衍生版本，因此內含光線追蹤硬體、材質單元、光柵輸出處理器（ROP），以及輝達消費級繪圖套件所需的完整功能集，其中包括 DLSS（深度學習超取樣，一種基於 AI 的圖像升頻技術）。

  ## 晶片間互連

  兩枚小晶片之間透過 NVLink-C2C 進行通訊，這正是輝達在 GB200 及 GB300 伺服器系統中連結 Grace CPU 與 Blackwell GPU 所採用的晶片對晶片介面。在 GB10 中，NVLink-C2C 連結的運作頻寬高達每秒 600 GB，約為該晶片記憶體控制器頻寬的兩倍。

  ## 背景脈絡

  RTX Spark 的發表，是 Windows 生態系推動 Arm 架構處理器普及這一更宏觀佈局的組成部分。ServeTheHome 將微軟 Surface Laptop Ultra 描述為迄今最頂級的 Surface 筆電，也是本週產品陣容的旗艦裝置，合作夥伴筆電則分別瞄準專業與消費市場。

  輝達自 Tegra 系列之後，便未曾再為消費市場設計 Arm SoC，過去十餘年間，其 Arm 晶矽開發主要聚焦於車用（DRIVE）、嵌入式 AI（Jetson）及伺服器（Grace）等平台。GB10 是一次方向性轉變，直接以終端用戶運算為目標；而與聯發科的共同設計，也打破了輝達過去全程自行設計 Arm SoC 的慣例。

  輝達在 2025 年 Hot Chips 研討會上詳細介紹了 GB10 的架構，該活動所揭露的規格，即適用於目前已出貨的 RTX Spark N1X。

  ## 意義

  RTX Spark N1X 的發表，為 Windows 帶來一款高階 Arm SoC：其 GPU 子系統的核心數量媲美當前獨立中階繪圖晶片，記憶體頻寬上限達每秒 300 GB，並支援最多 128 GB 的統一記憶體——這些規格使該平台特別切合記憶體容量與 GPU 運算力比單執行緒 CPU 速度更為關鍵的開發者、AI 推論及內容創作工作負載。該平台能否在 Windows 生態系取得廣泛普及，部分將取決於軟體相容性與整體生態系的發展，原報導對此並未進一步探討。

  目前，多款基於 RTX Spark N1X 的 OEM 筆電已與微軟自家 Surface 裝置同步上市；而輝達對這款晶片的命名慣例，也暗示 RTX Spark 系列日後將推出更多變體型號。
date: "2026-10-19"
source_published: "2026-10-17T17:00:47.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Nvidia", "TSMC"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA RTX Spark N1X Launch Overview: NVIDIA Arms Windows (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/nvidia-rtx-spark-n1x-launch-overview-nvidia-arms-windows/"
    title: "NVIDIA RTX Spark N1X Launch Overview: NVIDIA Arms Windows"
    trust: 3
    type: primary
    published_at: "2026-10-17T17:00:47.000Z"
---
