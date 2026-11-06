---
title_en: "Supermicro Ships Convertible Tower-Rack AI Station on NVIDIA Grace Blackwell GB300"
title_zh: "超微出貨 Grace Blackwell GB300 可轉換塔架 AI 工作站"
summary_en: "Supermicro has shipped the Super AI Station (ARS-511GD-NB-LCC), a Grace Blackwell GB300 workstation in NVIDIA's DGX Station program featuring a chassis that converts between desktop tower and 5U rack-mount deployment. The design distinguishes the system from competing DGX Station offerings and reflects the company's server manufacturing background."
summary_zh: "超微已出貨 Super AI Station（ARS-511GD-NB-LCC），這款搭載輝達 Grace Blackwell GB300 的 DGX Station 工作站採用可在桌旁直立塔式與 5U 機架掛載形態之間自由切換的機箱設計，在同計畫的競爭產品中獨樹一幟，也彰顯了該公司深厚的伺服器製造背景。"
body_en: |
  Supermicro has shipped the Super AI Station (model ARS-511GD-NB-LCC), a desk-side workstation built on NVIDIA's Grace Blackwell GB300 platform and part of the company's DGX Station program, in a convertible chassis that can be deployed as a desktop tower or rack-mounted as a 5U server.

  The DGX Station program is NVIDIA's initiative to bring server-grade Grace Blackwell GB300 hardware to workstation form factors for local AI development work. Supermicro is among multiple hardware partners supplying systems for the program.

  ## Convertible chassis design

  The defining feature of the Super AI Station is a chassis engineered to function in both orientations. Installed upright, it operates as a desk-side tower; fitted with rails, it inserts into a standard server rack as a 5U unit. That dual-purpose constraint drives the system's dimensions: 218 x 455 x 701 mm (8.6 x 17.9 x 27.6 inches). At 455mm, the chassis is narrow enough to fit between rack posts; at 701mm — nearly 28 inches deep — it is substantially longer than a standard desktop tower.

  The convertible design shapes the internal layout in unconventional ways. The power supply occupies a dedicated compartment separate from the motherboard area, and the motherboard is installed upside-down relative to typical tower orientation, with PCIe slot brackets positioned at the top of the chassis. Neither side panel provides meaningful ventilation; cooling relies on front-to-rear airflow drawn across nearly the entire front face of the chassis.

  ## Core hardware

  The Super AI Station pairs an NVIDIA Grace CPU — a 72-core, 72-thread Neoverse V2 processor — with an NVIDIA Blackwell Ultra compute accelerator. CPU-side memory totals 496GB of LPDDR5X at 396 GB/s bandwidth; GPU-side memory is 252GB of HBM3E running at 7.1 TB/s. Because NVIDIA supplies the motherboards for all DGX Station systems, the memory configuration is standardized across vendors in the program.

  A 1,600W 80 PLUS Titanium-rated power supply supports the full compute load. Storage comprises four M.2 2280 slots: two operating at PCIe Gen 6 x4 and two at PCIe Gen 5 x4. The system ships with Ubuntu 24.04 LTS preloaded with NVIDIA AI developer tools.

  ## Networking

  Two QSFP112 ports — a high-density pluggable connector standard used in data center switching and high-performance computing interconnects — are driven by an NVIDIA ConnectX-8 SuperNIC, each delivering 400 Gbps of bandwidth. These ports serve as the primary connectivity path to high-speed storage and to other DGX Station systems on the same network. In certain configurations, the ConnectX-8 SuperNIC can sustain 800 Gbps aggregate throughput, according to the review.

  The ConnectX-8 SuperNIC also carries the system's 10 Gigabit Ethernet interface, supplied by a Marvell controller. That 10GbE port does not connect directly to the Grace CPU; it routes through the SuperNIC's integrated PCIe switch before reaching the processor. A separate 1 Gigabit Ethernet RJ45 port connects to the baseboard management controller (BMC) for out-of-band system administration.

  ## I/O ports

  Supermicro is the first DGX Station vendor to include a front I/O panel, according to the review. That panel provides two USB-A ports running at 5 Gbps. Other DGX Station vendors have placed 10 Gbps USB-A and USB-C ports at equivalent front-panel positions; the review notes the difference reflects Supermicro's server design lineage.

  The rear panel carries four USB-A ports, all running at 10 Gbps, making them the fastest USB connections on the system. No USB-C ports appear anywhere on the Super AI Station; the review attributes the omission to NVIDIA's motherboard design, which does not include USB-C. A micro-USB UART serial port and a Mini DisplayPort connection, both tied to the BMC, complete the rear panel alongside three 3.5mm audio jacks.

  ## Display and system management

  The Blackwell Ultra is a compute accelerator and does not drive a display. Out-of-the-box graphical output is provided by the BMC via its Mini DisplayPort connection. For a full graphics solution, Supermicro offers the Super AI Station with an optional NVIDIA RTX PRO Blackwell discrete GPU in 2000, 4000, or 6000 configurations. BMC-based system management runs on OpenBMC with an HTML5 iKVM interface. A locked cage on the front panel houses the service tag and could accommodate front-panel storage expansion.

  ## Industry significance

  The convertible chassis means the Super AI Station can move from an individual developer's desk into a shared rack environment without hardware replacement, a potential operational advantage for organizations that expect local AI workloads to grow toward shared infrastructure. NVIDIA and its DGX Station partners are positioning these systems as desk-side platforms for intensive local AI work, the review notes.

  The production unit ships with plain steel side panels; a plexiglass side window shown on a demonstration chassis at Computex is not included in the production version.
body_zh: |
  超微已出貨 Super AI Station（型號 ARS-511GD-NB-LCC），這是一款以輝達 Grace Blackwell GB300 平台為基礎的桌旁工作站，隸屬輝達 DGX Station 計畫，採用可轉換機箱設計，能以桌旁直立塔式或 5U 機架掛載伺服器形式部署。

  DGX Station 計畫是輝達為推動伺服器等級 Grace Blackwell GB300 硬體進入工作站外形規格、供本地端 AI 開發使用的專案計畫。超微是該計畫中多家提供系統的硬體合作夥伴之一。

  ## 可轉換機箱設計

  Super AI Station 的核心特色在於機箱經過特別設計，可在兩種擺放方向下使用。直立擺放時，以桌旁塔式形態運作；裝上滑軌後，可插入標準伺服器機架，以 5U 規格運作。這種雙用途限制決定了系統的外形尺寸：218 × 455 × 701 公釐（8.6 × 17.9 × 27.6 英寸）。機箱寬度 455 公釐，足以嵌入機架立柱之間；深度 701 公釐（近 28 英寸），遠超一般桌上型電腦塔式機箱的深度。

  可轉換設計也帶來一些非典型的內部佈局安排。電源供應器位於與主機板區域隔開的專屬隔艙；主機板的安裝方向與一般塔式機箱相比呈上下顛倒，PCIe 插槽擋板朝向機箱頂端。兩側機板均未提供有效的通風設計，散熱完全依賴前後向氣流，冷空氣從機箱正面幾乎全覆蓋的進氣面吸入後向後排出。

  ## 核心硬體

  Super AI Station 搭載輝達 Grace CPU——一款具備 72 核心、72 執行緒的 Neoverse V2 處理器——並與輝達 Blackwell Ultra 運算加速器配對。CPU 端記憶體為 496GB LPDDR5X，頻寬達 396 GB/s；GPU 端記憶體為 252GB HBM3E，頻寬高達 7.1 TB/s。由於輝達為所有 DGX Station 系統提供主機板，記憶體配置在計畫中各廠商間均已標準化。

  系統配備一組 1,600W、80 PLUS 鈦金牌認證電源供應器，支援完整運算負載。儲存方面設有四個 M.2 2280 插槽：其中兩個以 PCIe Gen 6 x4 運作，另外兩個以 PCIe Gen 5 x4 運作。系統出廠預載 Ubuntu 24.04 LTS，並已整合輝達 AI 開發者工具。

  ## 網路連線

  系統配備兩個 QSFP112 連接埠——這是一種廣泛應用於資料中心交換器與高效能運算互連的高密度可插拔連接器標準——由輝達 ConnectX-8 SuperNIC 驅動，每個連接埠提供 400 Gbps 頻寬，作為連接高速儲存設備及同網路中其他 DGX Station 系統的主要通道。根據評測報導，ConnectX-8 SuperNIC 在特定配置下可達到 800 Gbps 的聚合傳輸量。

  ConnectX-8 SuperNIC 同時提供系統的 10 Gigabit 乙太網路介面，由 Marvell 控制器驅動。該 10GbE 連接埠並非直接連接至 Grace CPU，而是經由 SuperNIC 內建的 PCIe 交換器後才到達處理器。另設有一個獨立的 1 Gigabit 乙太網路 RJ45 連接埠，專供底板管理控制器（BMC）使用，用於頻外系統管理。

  ## I/O 連接埠

  根據評測報導，超微是 DGX Station 計畫中首家在系統上設置前置 I/O 面板的廠商。該面板提供兩個支援 5 Gbps 的 USB-A 連接埠。其他 DGX Station 廠商在對應的前置面板位置配備了 10 Gbps 的 USB-A 與 USB-C 連接埠；評測指出，這一差異反映了超微深厚的伺服器設計背景。

  後置面板設有四個 USB-A 連接埠，均支援 10 Gbps，是本系統速度最快的 USB 連接埠。Super AI Station 全機沒有任何 USB-C 連接埠，評測認為這源於輝達所提供的主機板本身不含 USB-C 設計。後置面板另設有一個連接至 BMC 的 Micro-USB UART 序列埠、一個 Mini DisplayPort 顯示輸出，以及三個 3.5 公釐音訊插孔。

  ## 顯示輸出與系統管理

  Blackwell Ultra 為純運算加速器，不具備顯示輸出功能。系統開機後的圖形輸出由 BMC 透過其 Mini DisplayPort 連接埠提供。若需完整圖形解決方案，超微提供可選配輝達 RTX PRO Blackwell 獨立顯示卡的版本，可選 2000、4000 或 6000 型號。BMC 系統管理基於 OpenBMC 運作，提供 HTML5 iKVM 介面。機箱前面板設有一個上鎖的護蓋，內置服務標籤，並預留前面板儲存擴充空間。

  ## 產業意義

  可轉換機箱設計意味著 Super AI Station 能在無需更換硬體的情況下，從個別開發者的辦公桌移至共享機架環境，對預期本地端 AI 工作負載將逐步擴展至共享基礎設施的組織而言，具有潛在的營運優勢。評測指出，輝達及其 DGX Station 合作夥伴正將這些系統定位為執行密集本地端 AI 工作的桌旁平台。

  量產版本配備素面鋼板側板；曾在 Computex 展示機上亮相的壓克力透明側板，並未隨量產版本出貨。
date: "2026-11-07"
source_published: "2026-11-05T21:15:28.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Marvell", "Nvidia", "Supermicro"]
trust:
  score: 4
  reasoning: "Single source: Supermicro Super AI Station Review: The AI Server That Doubles as a Workstation (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/supermicro-super-ai-station-review-the-ai-server-that-doubles-as-a-workstation/"
    title: "Supermicro Super AI Station Review: The AI Server That Doubles as a Workstation"
    trust: 4
    type: primary
    published_at: "2026-11-05T21:15:28.000Z"
---
