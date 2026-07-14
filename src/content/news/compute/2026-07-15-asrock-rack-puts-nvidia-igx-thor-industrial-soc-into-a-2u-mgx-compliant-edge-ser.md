---
title_en: "ASRock Rack Puts NVIDIA IGX Thor Industrial SoC Into a 2U MGX-Compliant Edge Server"
title_zh: "華擎 Rack 將輝達 IGX Thor 工業 SoC 植入 2U MGX 邊緣伺服器"
summary_en: "ASRock Rack unveiled the 2UXGI-THOR at Computex 2026, a 2U short-depth server built around NVIDIA's IGX Thor industrial system-on-chip and aimed at industrial and medical customers that need to process large volumes of sensor and image data at the edge."
summary_zh: "華擎 Rack 於 2026 年 Computex 展上發表 2UXGI-THOR，這是一款以輝達 IGX Thor 工業級系統單晶片（SoC）為核心的 2U 短深度伺服器，專為需要在網路邊緣大量處理感測器與影像資料的工業及醫療客戶而設計。此機型罕見地將汽車與工業等級晶片置入符合輝達 MGX 規格的伺服器機箱，在同質化嚴重的市場中提供差異化選擇。"
body_en: |
  ASRock Rack unveiled the 2UXGI-THOR at Computex 2026, a 2U short-depth server built around NVIDIA's IGX Thor industrial system-on-chip (SoC) and targeting industrial and medical customers that need to process large volumes of sensor and image data at the network edge.

  The product is notable for placing an automotive- and industrial-grade SoC — rather than conventional datacenter silicon — inside a server chassis compliant with NVIDIA's MGX modular server specification. MGX defines a hardware framework that allows compute servers and racks to mix and match processors to meet specific workload requirements; it is more commonly used with x86 or NVIDIA Grace datacenter CPUs.

  ## The SoC at the core

  IGX Thor is the industrial variant of NVIDIA's latest-generation automotive and industrial SoC. According to ServeTheHome, it combines 14 Arm Neoverse-V3AE CPU cores with an NVIDIA Blackwell integrated GPU and a set of specialized hardware blocks: a programmable vision accelerator, sensor bridging, and camera-over-Ethernet support. ServeTheHome described the chip as "designed to excel at ingesting and processing sensor data in real time."

  ASRock Rack built the server around NVIDIA's IGX T7000 platform, which is a full microATX motherboard that integrates an IGX Thor module, 128 GB of LPDDR5X memory, and an NVIDIA ConnectX-7 network interface card (NIC). The company then housed that board in a server chassis with supporting hardware.

  ## Additional GPU for AI inference

  Because the Thor SoC's integrated Blackwell GPU alone is not sufficient for heavy AI workloads, ASRock Rack added a discrete NVIDIA Blackwell PRO video card via the T7000 motherboard's PCIe interface. The server accommodates a single full-height, full-length (FHFL) PCIe card; ASRock Rack offers the slot filled with either an RTX PRO 5000 or RTX PRO 6000, which ServeTheHome said is "meant to provide the bulk of the AI processing power, well beyond what the Thor SoC could accomplish on its own." Only one PCIe bracket opening is used despite the T7000 motherboard having multiple PCIe slots.

  ## Connectivity and management

  For a 2U system, the 2UXGI-THOR carries a substantial I/O complement:

  - Two 200 GbE QSFP28 ports, supplied by the ConnectX-7 NIC on the T7000 motherboard
  - One 1 GbE RJ45 port from Thor's integrated NIC
  - Five USB 10 Gbps ports (four USB-A and one USB-C)
  - One dedicated RJ45 management port

  Server management is handled by an ASPEED AST2600 baseboard management controller (BMC), a standard component in rackmount servers that allows administrators to monitor and control the system remotely and out-of-band, independent of the host operating system.

  Power comes from dual 800 W redundant power supplies, meaning a single supply failure will not take the system down — a requirement in industrial and medical deployments where uptime is critical.

  ## Storage is minimal by design

  The 2UXGI-THOR is designed for data processing, not storage. The only onboard storage provision is a single M.2 2280 slot operating at PCIe Gen 5 x2 speeds, which ServeTheHome said is sufficient for an operating system drive and nothing more. Customers requiring large-capacity local storage would need to supplement the server externally.

  ## Market positioning

  ASRock Rack positioned the system specifically for industrial and medical markets — two sectors where real-time ingestion and analysis of sensor, camera, and imaging data is a core workload. The use of IGX Thor's camera-over-Ethernet and sensor bridging capabilities makes the platform better matched to those data types than a conventional datacenter CPU.

  The server's short-depth 2U chassis is suited to placement in smaller server rooms or edge locations rather than large hyperscale facilities, fitting a deployment pattern where processing needs to occur close to the sensors generating the data.

  ServeTheHome noted that placing an automotive and industrial SoC inside a server chassis is an unusual approach at a time when most servers use datacenter-grade hardware, but said it makes ASRock Rack's product a differentiated offering in a commodity market — and one well-optimized for customers whose primary workload is high-volume image and sensor processing. The company had the 2UXGI-THOR on display at Computex 2026 in Taipei.
body_zh: |
  華擎 Rack（ASRock Rack）於 2026 年台北國際電腦展（Computex 2026）發表 2UXGI-THOR，這是一款以輝達（NVIDIA）IGX Thor 工業級系統單晶片（SoC）為核心的 2U 短深度伺服器，目標客群為需要在網路邊緣大量處理感測器與影像資料的工業及醫療產業。

  此款產品的特色，在於將一顆汽車與工業等級的 SoC——而非傳統資料中心矽晶片——置入符合輝達 MGX 模組化伺服器規格的機箱之中。MGX 定義了一套硬體框架，讓運算伺服器與機架得以靈活搭配不同處理器，以因應特定工作負載需求；這套規格通常多見於 x86 或輝達 Grace 資料中心 CPU 的應用場景。

  ## 核心 SoC

  IGX Thor 是輝達最新一代汽車與工業 SoC 的工業版本。根據 ServeTheHome 的說明，此晶片整合了 14 個 Arm Neoverse-V3AE CPU 核心、輝達 Blackwell 整合式 GPU，以及一系列專用硬體模組：可程式化視覺加速器、感測器橋接，以及網路攝影機乙太網路傳輸（Camera-over-Ethernet）支援。ServeTheHome 形容這顆晶片「專為即時擷取與處理感測器資料而生」。

  華擎 Rack 以輝達 IGX T7000 平台為基礎打造此款伺服器。T7000 是一塊完整的 microATX 主機板，整合了 IGX Thor 模組、128 GB LPDDR5X 記憶體，以及一張輝達 ConnectX-7 網路介面卡（NIC）。華擎 Rack 再將這塊主機板裝入伺服器機箱並搭配所需的支援硬體。

  ## 額外 GPU 加速 AI 推論

  由於 Thor SoC 內建的 Blackwell GPU 在面對高強度 AI 工作負載時仍顯不足，華擎 Rack 透過 T7000 主機板的 PCIe 介面，額外加裝了一張獨立的輝達 Blackwell PRO 顯示卡。此伺服器可容納單張全高全長（FHFL）PCIe 卡；華擎 Rack 提供兩種選配方案，分別搭載 RTX PRO 5000 或 RTX PRO 6000。ServeTheHome 指出，這張獨立顯示卡「旨在提供絕大部分的 AI 運算能力，遠超 Thor SoC 本身所能達到的水準」。儘管 T7000 主機板設有多個 PCIe 插槽，實際上僅使用其中一個擴充槽開口。

  ## 連接埠與管理功能

  以一款 2U 系統而言，2UXGI-THOR 提供了相當豐富的 I/O 配置：

  - 兩個 200 GbE QSFP28 連接埠，由 T7000 主機板上的 ConnectX-7 NIC 提供
  - 一個 1 GbE RJ45 連接埠，來自 Thor 整合式網路控制器
  - 五個 USB 10 Gbps 連接埠（四個 USB-A、一個 USB-C）
  - 一個專用 RJ45 管理連接埠

  伺服器管理由 ASPEED AST2600 基板管理控制器（BMC）負責，此為機架式伺服器的標準元件，可讓管理員不依賴主機作業系統，透過頻外（out-of-band）方式遠端監控與操控系統。

  電源方面，本機配備雙 800 W 備援電源供應器，單一電源故障不會造成系統停機——這是工業與醫療部署環境中對系統持續運作的基本要求。

  ## 儲存設計精簡有其用意

  2UXGI-THOR 的設計核心在於資料處理，而非儲存。板載儲存僅提供單一 M.2 2280 插槽，運作於 PCIe Gen 5 x2 速率；ServeTheHome 指出，此配置僅足以安裝作業系統，別無餘裕。若客戶需要大容量本地儲存，則需另行擴充外部儲存設備。

  ## 市場定位

  華擎 Rack 將此系統明確定位於工業與醫療市場——這兩個領域的核心工作負載，正是即時擷取與分析感測器、攝影機及影像資料。IGX Thor 的網路攝影機乙太網路傳輸與感測器橋接功能，使這套平台在處理上述資料類型時，遠比傳統資料中心 CPU 更為適切。

  此伺服器採用短深度 2U 機箱，更適合部署於較小型的伺服器機房或邊緣場域，而非大型超大規模設施，完全契合讓運算盡量貼近資料來源感測器的部署模式。

  ServeTheHome 指出，在多數伺服器仍採用資料中心等級硬體的當下，將汽車與工業 SoC 裝入伺服器機箱是相當罕見的做法，但也正因如此，華擎 Rack 得以在同質化嚴重的市場中推出差異化產品——對於以大量影像與感測器處理為主要工作負載的客戶而言，更是高度最佳化的解決方案。華擎 Rack 在 2026 年台北 Computex 展上公開展示了 2UXGI-THOR。
date: "2026-07-15"
source_published: "2026-07-13T20:00:16.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["ASRock Rack", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: ASRock Rack Built an Edge Server Based on NVIDIA’s Thor Industrial SoC (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/asrock-rack-built-an-edge-server-based-on-nvidias-thor-industrial-soc/"
    title: "ASRock Rack Built an Edge Server Based on NVIDIA’s Thor Industrial SoC"
    trust: 3
    type: primary
    published_at: "2026-07-13T20:00:16.000Z"
---
