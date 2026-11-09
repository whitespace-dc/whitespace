---
title_en: "Dell PowerEdge R770AP packs 256 Xeon 6 cores and 32 E3.S NVMe bays in 2U chassis"
title_zh: "Dell PowerEdge R770AP：2U 伺服器塞入 256 核心與 32 個 E3.S 槽"
summary_en: "Dell's PowerEdge R770AP, a 2U dual-socket server supporting up to two Intel Xeon 6980P processors for 256 total cores, delivers high core density alongside a front-panel E3.S NVMe storage design that fits 32 drives where previous generations fit fewer than 24, according to a hardware review by ServeTheHome."
summary_zh: "Dell PowerEdge R770AP 是一款 2U 雙插槽伺服器，最多可搭載兩顆 Intel Xeon 6980P 處理器以達 256 顆核心。該機採用 E3.S NVMe 前面板儲存設計，在同一 2U 機箱內可容納多達 32 顆硬碟，較前一代 2.5 吋 U.2 設計不到 24 顆的上限大幅提升，以上評測來自 ServeTheHome 的深度硬體測試。"
body_en: |
  Dell's PowerEdge R770AP, a 2U dual-socket server supporting up to two Intel Xeon 6980P processors for 256 total cores, delivers high core density alongside a front-panel E3.S NVMe storage design that fits 32 drives where previous generations fit fewer than 24, according to a hardware review by ServeTheHome.

  The R770AP carries the "Advanced Performance" designation within Dell's Intel server line. Each Intel Xeon 6980P socket holds 128 cores, putting the two-socket maximum at 256 cores per chassis. ServeTheHome noted that given the current Diamond Rapids roadmap timeline, the Xeon 6980P platform is expected to remain Dell's primary Intel compute offering for a significant period.

  ServeTheHome attempted to test the system with Intel's next-generation Xeon 6+ Clearwater Forest processors but said Intel was unable to provide sample chips, leaving the review to cover only the currently available Xeon 6980P configuration.

  ## Front-panel storage architecture

  The front panel divides into two banks of EDSFF E3.S carriers — a small-form-factor NVMe drive standard — flanking a central ventilation channel. Each bank holds 16 drives vertically, for 32 E3.S bays total. ServeTheHome noted that prior 2.5-inch U.2 drive designs that also reserved central space for airflow typically yielded fewer than 24 front bays; the E3.S geometry recovers that capacity.

  Dell's current specifications list three front storage configurations for the R770AP:

  - Up to 32 EDSFF E3.S Gen5 NVMe drives
  - Up to 16 2.5-inch U.2 Gen5 x4 or x2 NVMe SSDs
  - A no-backplane option

  The review unit carried four Dell DC NVMe CD8P E3.S MU 1.6TB solid-state drives. Individual carriers use orange release markers and printed bay numbers for identification; ServeTheHome noted the latches are narrower than U.2 carrier latches, a consequence of the smaller E3.S footprint.

  One labeling quirk: bay numbers on the front panel run 25–31 with an arrow, because the service tag occupies the space where the full numbering sequence would normally be printed.

  ## Rear I/O and networking

  The rear panel groups riser modules across the top, power supplies on the lower flanks, and a fixed I/O cluster in the center. That fixed cluster provides VGA for local console access, two USB 3.1 Type-A ports, and a dedicated iDRAC (Integrated Dell Remote Access Controller) Ethernet port for out-of-band management — meaning administrators can reach the server's management interface over a physically separate network connection from the data ports.

  Dell uses OCP NIC 3.0 (Open Compute Project Network Interface Card) slots for primary networking, a standard that allows operators to swap in different controller cards without redesigning the chassis. The review unit carried both a Broadcom BCM57608 and a Mellanox ConnectX-6 Dx controller. The ConnectX-6 Dx supports QSFP56 cabling for 200 Gbps ports.

  The front panel provides a USB 2.0 Type-C connector. Dell specifies it as a service port rather than a high-speed data interface; ServeTheHome noted it does not carry Thunderbolt capability.

  ## Boot module and power

  At the rear, Dell installs its BOSS-N1 DC-MHS (Boot Optimized Storage Solution) module, which holds two 480GB M.2 NVMe drives behind orange release levers and presents them as a RAID 1 (mirrored) volume. ServeTheHome observed that this arrangement provides a redundant OS boot volume suited for hypervisors such as VMware or Windows Server, and frees two front drive bays that would otherwise be consumed by OS storage.

  The review configuration uses redundant 1.8 kilowatt hot-swap power supplies. Dell offers multiple PSU options for the platform.

  The chassis measures 801mm in rear I/O depth without the front bezel, per Dell's current technical specifications. Rail hardware ships with the system; ServeTheHome described the rail installation as straightforward.

  ## Riser and thermal considerations

  The rear riser area supports full-height, low-profile, and other card configurations. ServeTheHome noted that fitting high-power NICs, data processing units (DPUs), and GPUs in the rear presents thermal challenges because air passing over front-mounted SSDs, processors, and memory arrives at the rear risers already heated.

  ## Industry significance

  The R770AP represents Dell's primary two-socket Intel platform at a point when the Xeon 6980P's 128-core-per-socket count sets a high ceiling for air-cooled compute density in a standard 2U footprint. The E3.S storage layout illustrates a broader industry shift away from 2.5-inch U.2 drives in dense compute servers, trading familiar carrier mechanics for higher device counts in the same chassis volume.

  ServeTheHome published the review using its AgentSTH V7 benchmark suite, with performance results included as part of the full analysis.
body_zh: |
  Dell 旗下最新 2U 雙插槽伺服器 PowerEdge R770AP，最多可搭載兩顆 Intel Xeon 6980P 處理器，合計提供 256 顆核心，兼具高核心密度與前面板 E3.S NVMe 儲存設計，可在同一機箱容納 32 顆硬碟，遠超前一代 2.5 吋方案不到 24 顆的上限。以上資訊來自硬體評測媒體 ServeTheHome 的詳細測試報告。

  R770AP 在 Dell 的 Intel 伺服器產品線中獲得「進階效能」（Advanced Performance）的定位。每個 Intel Xeon 6980P 插槽擁有 128 顆核心，雙插槽配置下每台機箱最高可達 256 顆核心。ServeTheHome 指出，考量 Diamond Rapids 目前的產品路線圖時程，Xeon 6980P 平台預計在相當長的時間內，仍將是 Dell 主力的 Intel 運算產品線。

  ServeTheHome 曾嘗試以 Intel 下一代 Xeon 6+ Clearwater Forest 處理器進行測試，但 Intel 表示無法提供樣品晶片，因此本次評測僅涵蓋目前市售的 Xeon 6980P 配置。

  ## 前面板儲存架構

  前面板分為兩排 EDSFF E3.S 硬碟托架——E3.S 是一種小尺寸 NVMe 硬碟規格——兩排托架之間夾著一條中央散熱通道。每排垂直排列 16 顆硬碟，合計共有 32 個 E3.S 槽位。ServeTheHome 指出，過去採用 2.5 吋 U.2 硬碟的設計同樣在中央預留氣流空間，但前面板通常只能容納不到 24 顆硬碟；改用 E3.S 幾何尺寸後，原本無法善加利用的空間得以重新用於儲存。

  Dell 目前為 R770AP 提供三種前端儲存配置選項：

  - 最多 32 顆 EDSFF E3.S Gen5 NVMe 硬碟
  - 最多 16 顆 2.5 吋 U.2 Gen5 x4 或 x2 NVMe 固態硬碟
  - 無背板選項

  評測機配備四顆 Dell DC NVMe CD8P E3.S MU 1.6TB 固態硬碟。每個托架以橙色釋放標記與印刷槽位編號加以識別；ServeTheHome 注意到，由於 E3.S 規格尺寸較小，其托架卡榫比 U.2 托架卡榫更窄。

  前面板的槽位編號有個特殊之處：號碼從 25 連標至 31 並附有箭頭，原因是服務標籤佔用了完整號碼序列原本應印刷的位置。

  ## 後面板 I/O 與網路

  後面板上方排列著擴充卡模組，左右兩側下方設有電源供應器，中央則是固定 I/O 連接埠區。該固定連接埠區提供 VGA 本機終端存取、兩個 USB 3.1 Type-A 連接埠，以及一個專用 iDRAC（整合式 Dell 遠端存取控制器）乙太網路連接埠，用於頻外管理——意即管理員可透過與資料傳輸連接埠實體分離的獨立網路，存取伺服器的管理介面。

  Dell 採用 OCP NIC 3.0（開放運算計畫網路介面卡）插槽作為主要網路介面，此標準允許操作人員更換不同的控制卡，無需重新設計機箱。評測機同時配備 Broadcom BCM57608 與 Mellanox ConnectX-6 Dx 兩款控制器。ConnectX-6 Dx 支援 QSFP56 線材，可提供 200 Gbps 的連接埠速度。

  前面板另設有一個 USB 2.0 Type-C 連接埠，Dell 將其定位為服務連接埠而非高速資料介面；ServeTheHome 指出，此連接埠不支援 Thunderbolt 功能。

  ## 開機模組與電源

  後面板裝有 Dell BOSS-N1 DC-MHS（開機最佳化儲存解決方案）模組，其中搭載兩顆 480GB M.2 NVMe 硬碟，以橙色釋放拉桿固定，並以 RAID 1（鏡像）磁碟區呈現。ServeTheHome 觀察到，此配置提供冗餘的作業系統開機磁碟區，適合部署 VMware 或 Windows Server 等 Hypervisor 環境，同時也釋出了兩個前端硬碟槽位，不再需要用於存放作業系統。

  評測配置採用冗餘 1.8 千瓦熱插拔電源供應器。Dell 為此平台提供多種電源選項。

  依照 Dell 目前的技術規格，機箱深度（不含前擋板）為 801 公釐。導軌套件隨機附贈；ServeTheHome 表示導軌安裝過程相當順暢。

  ## 擴充卡與散熱考量

  後端擴充卡區域支援全高、低矮及其他規格的卡片配置。ServeTheHome 指出，在後端擴充卡安裝高功耗網路介面卡、資料處理單元（DPU）及 GPU 時，散熱是一大挑戰——氣流流經前端固態硬碟、處理器與記憶體後，抵達後端擴充卡時溫度已明顯上升。

  ## 產業意義

  R770AP 代表 Dell 在當前時間點的主力雙插槽 Intel 平台。Xeon 6980P 每插槽 128 顆核心的規格，為標準 2U 機箱的風冷運算密度設立了相當高的天花板。E3.S 儲存配置則體現了業界一個更廣泛的趨勢：在高密度運算伺服器中逐漸捨棄 2.5 吋 U.2 硬碟，以相同機箱體積內更高的裝置數量換取對傳統托架機構的讓步。

  ServeTheHome 採用其 AgentSTH V7 基準測試套件進行本次評測，完整效能數據已納入全文分析報告中。
date: "2026-11-10"
source_published: "2026-11-08T23:00:11.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Broadcom", "Intel"]
trust:
  score: 4
  reasoning: "Single source: Dell PowerEdge R770AP Review One Fast Intel Xeon 6 Server (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/dell-poweredge-r770ap-review-one-fast-intel-xeon-6-server/"
    title: "Dell PowerEdge R770AP Review One Fast Intel Xeon 6 Server"
    trust: 4
    type: primary
    published_at: "2026-11-08T23:00:11.000Z"
---
