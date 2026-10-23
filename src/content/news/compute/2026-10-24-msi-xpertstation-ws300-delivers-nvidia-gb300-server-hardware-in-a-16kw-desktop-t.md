---
title_en: "MSI XpertStation WS300 Delivers NVIDIA GB300 Server Hardware in a 1.6kW Desktop Tower"
title_zh: "微星 XpertStation WS300：輝達 GB300 硬體裝進 1.6kW 直立機箱"
summary_en: "MSI's XpertStation WS300 packages NVIDIA's 72-core Grace Arm CPU and Blackwell Ultra GPU into a tower workstation drawing up to 1,600 watts and priced above $100,000, targeting AI developers who need data-center-class hardware on-premises. The system carries 252GB of HBM3e GPU memory and dual 400-gigabit-per-second network ports that ServeTheHome demonstrated at 800Gbps aggregate when linked to a second DGX Station unit via RDMA."
summary_zh: "微星 XpertStation WS300 將輝達 72 核心 Grace Arm 處理器與 Blackwell Ultra GPU 整合於一台直立式工作站，最高功耗達 1,600 瓦、售價逾 10 萬美元，目標是需要在本地端部署資料中心級硬體的 AI 開發者。系統配備 252GB HBM3e GPU 記憶體及雙埠 400Gbps 網路介面，經 ServeTheHome 實測，與另一台 DGX Station 機器透過 RDMA 串聯後可達 800Gbps 聚合頻寬。"
body_en: |
  MSI's XpertStation WS300 is a tower workstation built on NVIDIA's GB300 platform, pairing a 72-core Grace Arm Neoverse V2 CPU with a Blackwell Ultra GPU in a single compute module, and priced above $100,000. The system draws up to 1,600 watts, weighs nearly 30 kilograms, and carries dual 400-gigabit-per-second network connections intended to link multiple units together for larger AI workloads. It targets developers and workstation users who need to run and test AI applications locally without relying on remote infrastructure.

  The WS300 is one of several third-party systems built on NVIDIA's standardized DGX Station motherboard. ServeTheHome reviewed the WS300 as the second DGX Station system it has examined, following an earlier look at Gigabyte's W775-V10-L01.

  ## Memory and compute

  The Grace CPU carries 496GB of LPDDR5X memory at 396 gigabytes per second. The Blackwell Ultra GPU carries 252GB of HBM3e — High Bandwidth Memory, third generation extended — at 7.1 terabytes per second. Four M.2 2280 storage slots are provided: two running at PCIe Generation 6 x4 and two at PCIe Generation 5 x4. The system ships with Ubuntu 24.04 LTS and NVIDIA AI Developer Tools preinstalled, powered by a 1,600-watt 80 PLUS Platinum-rated supply.

  ## Networking

  The WS300's two QSFP112 ports — high-density cages used for fiber-optic connections — each deliver 400Gbps through an integrated NVIDIA ConnectX-8 SuperNIC, which also functions as a PCIe switch within the system. During testing, the review connected the WS300 to the Gigabyte DGX Station unit and achieved an 800Gbps aggregate Blackwell Ultra-to-Blackwell Ultra RDMA link. RDMA, or Remote Direct Memory Access, is a protocol that allows two systems to exchange data without processor involvement on either end.

  The Marvell 10 Gigabit Ethernet RJ45 port for conventional traffic does not connect directly to the Grace CPU; the review noted it routes through the ConnectX-8 SuperNIC's internal PCIe switch first, an unusual topology. A separate 1GbE RJ45 port connects to the system's BMC (Baseboard Management Controller), an independent chip that allows remote system management without involving the main operating system. OpenBMC software handles that function through an HTML5 iKVM, a browser-based interface for remote keyboard, video, and mouse control.

  The WS300 provides no USB4-speed ports. According to the review, NVIDIA's DGX Station motherboard does not include USB4 support, meaning high-speed transfers outside of storage must use the QSFP112 network ports. The review notes that PCIe card slots could theoretically add USB options, but describes the system as better suited to network-connected use.

  ## Chassis and cooling

  MSI designed the WS300 as a floor-standing tower with no front-panel I/O. Given the system's size and heat output, MSI placed the power button, reset button, two USB-A and two USB-C ports (each at 10Gbps), and 3.5mm audio jacks on the top panel instead. The front face uses an open triangular mesh to admit airflow directly to the system's internals; the review contrasts this with the Gigabyte DGX Station, which had a fully closed front panel.

  The rear panel carries four USB-A 10Gbps ports, the dual QSFP112 array, both RJ45 Ethernet jacks, a USB Micro-B UART port for the BMC, three 3.5mm audio jacks, and a Mini DisplayPort dedicated to the BMC. The chassis measures 246 x 529 x 570 millimeters, or approximately 9.7 x 20.8 x 22.5 inches.

  Cooling uses a closed-loop liquid system, with three fans pushing air through a radiator on the right side of the chassis and a 120mm fan handling rear exhaust. MSI did not place active cooling directly over the QSFP112 cages, but designed the I/O shield to leave passive airflow unobstructed — an approach the review noted as an improvement over the Gigabyte system's I/O shield design.

  The reset button on the top panel is recessed to reduce the chance of accidental activation, though the review noted this also makes intentional use harder.

  ## Optional discrete graphics

  The WS300 can accept an optional discrete graphics card in addition to the GB300 compute module. Compatible options listed include the NVIDIA RTX PRO Blackwell 2000, 4000, and 6000. The review describes MSI's provision for mounting a high-end RTX Pro card as a deliberate design consideration for users who need a conventional display adapter alongside the GB300's compute hardware.

  ## Industry significance

  DGX Station systems like the WS300 bring NVIDIA's Blackwell Ultra GPU architecture to individual workstations, allowing developers to test and run AI workloads on the same hardware generation used in large rack deployments. Because all DGX Station vendors share the same standardized NVIDIA motherboard and rear I/O layout, design differences between system integrators center on chassis construction, cooling approach, and add-in card support rather than core compute or networking specifications.

  The WS300's demonstrated 800Gbps aggregate RDMA link to a second DGX Station unit shows the platform is built to scale across multiple systems, extending available compute for larger models or more concurrent users beyond what a single unit supports.
body_zh: |
  微星的 XpertStation WS300 是一台以輝達 GB300 平台為基礎的直立式工作站，將 72 核心 Grace Arm Neoverse V2 處理器與 Blackwell Ultra GPU 整合於單一運算模組，售價逾 10 萬美元。系統最高功耗達 1,600 瓦，重量將近 30 公斤，並配備雙埠 400Gbps 網路介面，可將多台機器串聯以因應更大規模的 AI 工作負載。其目標客群為需要在本地端執行並測試 AI 應用程式、無須仰賴遠端基礎設施的開發者與工作站使用者。

  WS300 是多款以輝達標準化 DGX Station 主機板為基礎的第三方系統之一。ServeTheHome 在評測 WS300 時，這是該媒體繼技嘉 W775-V10-L01 之後所審視的第二款 DGX Station 系統。

  ## 記憶體與運算

  Grace 處理器搭載 496GB 的 LPDDR5X 記憶體，頻寬為每秒 396GB。Blackwell Ultra GPU 則配備 252GB 的 HBM3e（高頻寬記憶體第三代延伸版），頻寬高達每秒 7.1TB。系統提供四個 M.2 2280 儲存插槽：其中兩個走 PCIe 第六代 x4，另外兩個走 PCIe 第五代 x4。系統預裝 Ubuntu 24.04 LTS 及輝達 AI 開發者工具，由一顆符合 80 PLUS 白金認證的 1,600 瓦電源供應器供電。

  ## 網路連線

  WS300 配備兩個 QSFP112 埠——用於光纖連線的高密度籠式介面——各透過內建的輝達 ConnectX-8 SuperNIC 提供 400Gbps 頻寬，而該 SuperNIC 同時也在系統內部扮演 PCIe 交換器的角色。在測試過程中，評測人員將 WS300 與技嘉 DGX Station 連接，實測達到 800Gbps 聚合頻寬的 Blackwell Ultra 對 Blackwell Ultra RDMA 連線。RDMA（遠端直接記憶體存取）是一種允許兩台系統在不涉及任一端處理器的情況下直接交換資料的協定。

  Marvell 10 Gigabit Ethernet RJ45 埠負責一般流量，但並未直接連接至 Grace 處理器；評測指出，該埠的流量必須先經過 ConnectX-8 SuperNIC 內部的 PCIe 交換器，屬於較為少見的拓撲架構。另有一個獨立的 1GbE RJ45 埠連接至系統的 BMC（底板管理控制器）——一顆可在不透過主作業系統的情況下實現遠端系統管理的獨立晶片。BMC 功能由 OpenBMC 軟體透過 HTML5 iKVM（瀏覽器型遠端鍵盤、視訊與滑鼠控制介面）負責處理。

  WS300 不提供 USB4 速度的連接埠。根據評測說明，輝達的 DGX Station 主機板並不支援 USB4，這意味著儲存裝置以外的高速傳輸只能透過 QSFP112 網路埠進行。評測指出，PCIe 擴充卡槽理論上可以增加 USB 選項，但整體而言此系統更適合以網路連線方式使用。

  ## 機箱與散熱

  微星將 WS300 設計為落地式直立機箱，前面板不設任何 I/O 介面。考量到系統的體積與散熱需求，微星將電源按鈕、重置按鈕、兩個 USB-A 與兩個 USB-C 埠（各支援 10Gbps）以及 3.5mm 音訊插孔全數移至頂部面板。前面板採用開放式三角形網格設計，讓氣流能直接導入系統內部；評測並以此與技嘉 DGX Station 的全封閉前面板設計進行對比。

  後面板配置了四個 USB-A 10Gbps 埠、雙埠 QSFP112 陣列、兩個 RJ45 乙太網路插孔、一個用於 BMC 的 USB Micro-B UART 埠、三個 3.5mm 音訊插孔，以及一個專供 BMC 使用的 Mini DisplayPort。機箱尺寸為 246 × 529 × 570 公釐，換算約為 9.7 × 20.8 × 22.5 英吋。

  散熱系統採用封閉式液冷設計，三顆風扇將氣流導入機箱右側的散熱排，另有一顆 120mm 風扇負責後方排氣。微星並未在 QSFP112 籠架正上方設置主動散熱，而是將 I/O 遮板設計為不阻礙被動氣流的形式——評測認為此設計優於技嘉系統的 I/O 遮板設計。

  頂部面板的重置按鈕採內凹設計，以降低誤觸機率，但評測也指出，這同時使有意操作時更為費力。

  ## 選配獨立顯示卡

  WS300 可在 GB300 運算模組之外，另行選配一張獨立顯示卡，相容選項包括輝達 RTX PRO Blackwell 2000、4000 及 6000。評測描述微星為安裝高階 RTX Pro 顯示卡所進行的設計考量，是專為需要在 GB300 運算硬體之外同時使用傳統顯示輸出的使用者所做的刻意規劃。

  ## 產業意義

  如 WS300 這類 DGX Station 系統，將輝達 Blackwell Ultra GPU 架構帶入個人工作站層級，讓開發者得以在與大型機架部署相同世代的硬體上測試與執行 AI 工作負載。由於所有 DGX Station 廠商共用同一塊輝達標準化主機板與後面板 I/O 配置，各系統整合商之間的差異主要集中在機箱設計、散熱方案與擴充卡支援，而非核心運算或網路規格。

  WS300 與另一台 DGX Station 系統實測達成的 800Gbps 聚合 RDMA 連線，印證了這個平台具備跨機器擴充的能力，可為更大規模的模型或更多並行使用者，提供超越單台機器所能支援的運算資源。
date: "2026-10-24"
source_published: "2026-10-23T17:00:33.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Gigabyte", "Marvell", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: MSI XpertStation WS300 Review NVIDIA DGX Station GB300 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/msi-xpertstation-ws300-review-nvidia-dgx-station-gb300/"
    title: "MSI XpertStation WS300 Review NVIDIA DGX Station GB300"
    trust: 3
    type: primary
    published_at: "2026-10-23T17:00:33.000Z"
---
