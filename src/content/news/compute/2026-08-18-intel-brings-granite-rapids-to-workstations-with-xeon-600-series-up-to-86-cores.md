---
title_en: "Intel Brings Granite Rapids to Workstations With Xeon 600 Series, Up to 86 Cores"
title_zh: "Intel Xeon 600系列搭載Granite Rapids架構，工作站處理器最高達86核心"
summary_en: "Intel has launched its Xeon 600 series workstation processors, the first new workstation silicon from the company in over three years, based on the Granite Rapids architecture and offering up to 86 CPU cores alongside a new platform with expanded memory bandwidth and PCIe connectivity. The Xeon 6 658X is among the first chips reviewed under the new lineup."
summary_zh: "Intel正式推出Xeon 600系列工作站處理器，這是該公司超過三年來首次推出全新工作站晶片架構，採用Granite Rapids架構，每個插槽最高提供86顆CPU核心。新平台支援更快的記憶體頻寬與更多PCIe通道，並以對齊伺服器產品線的全新品牌命名，終結了工作站晶片架構長達三年以上的空窗期。"
body_en: |
  Intel has brought its Granite Rapids server silicon to the workstation market in the form of the Xeon 600 processor family, ending a gap of more than three years since the company last introduced new workstation chip architecture. The lineup, which replaces the long-running Xeon W-2xxx and W-3xxx naming scheme with branding aligned to Intel's server products, offers up to 86 CPU cores per socket and introduces support for faster memory and additional PCIe lanes, according to a hands-on review published by ServeTheHome.

  The Xeon 6 658X, one of the new chips under review, sits within a stack of 11 SKUs spanning 12 to 86 cores. The top-end chip's 86 cores represent a 43 percent increase over the 60-core maximum offered by the outgoing Xeon W-3500 series, which was based on Intel's Sapphire Rapids architecture. Intel launched Sapphire Rapids workstation parts in early 2023 and, according to ServeTheHome, never brought Emerald Rapids, Sapphire Rapids' successor, to workstation platforms, instead releasing a refreshed lineup in 2024 using the same underlying silicon with incremental clock-speed and core-count adjustments.

  ## Architecture and performance expectations

  The Xeon 600 series is built around Intel's Redwood Cove CPU cores, manufactured on the Intel 3 fabrication node. The previous Xeon W-3500 and W-2400 generations used Golden Cove cores. ServeTheHome notes that Redwood Cove's primary advantages over its predecessor are area and power efficiency rather than large gains in instructions-per-clock (IPC, a measure of how much work a core completes per clock cycle) or peak frequency. Intel's own promotional material, as cited in the review, states single-threaded performance improvement for the top SKU at just 9 percent, while multi-threaded performance — work distributed across all cores simultaneously — is listed at 61 percent higher. The multi-threaded gain tracks closely with the core-count increase, which ServeTheHome attributes as the primary driver of the generational uplift.

  The L3 cache, a fast on-chip memory buffer that reduces latency for frequently accessed data, expands from 112.5 MB on the Xeon W-3500 to 336 MB on the Xeon 600 series.

  ## Memory and I/O platform

  All Xeon 600 chips support eight DDR5 memory channels and speeds up to DDR5-6400 at one DIMM per channel (DPC), delivering up to 410 GB per second of memory bandwidth. That compares with a maximum of DDR5-4800 and 307 GB per second on the previous generation. SKUs with 28 or more cores also support Multiplexed Rank DIMMs (MRDIMMs), a higher-density memory module type that enables effective transfer speeds up to DDR5-8000 and a peak bandwidth figure of 512 GB per second, according to ServeTheHome. The review notes Intel has separately announced DDR5-8000 RDIMM support for some Granite Rapids server SKUs but has made no equivalent announcement for workstation parts.

  On the interconnect side, the Xeon 600 adds support for CXL 2.0 (Compute Express Link, a high-speed CPU-to-device protocol used for memory expansion and pooling) and brings the PCIe Gen5 lane count from the host processor to 128, up from 112 on the W-3500. In practice, ServeTheHome says the additional 16 lanes allow for one more x16 expansion slot in a system.

  The platform uses a new LGA4710 socket, replacing the LGA4677 used by the Sapphire Rapids workstation parts.

  ## Tiered capabilities across the SKU stack

  Not all Xeon 600 chips receive the full platform capabilities. Chips with 16 or fewer cores are limited to 80 PCIe lanes and four memory channels, a configuration ServeTheHome describes as comparable to the outgoing Xeon W-2400 and W-2500 series. Access to all eight memory channels and the full 128 PCIe lanes requires selecting a chip with at least 18 cores, which carries a starting price of approximately $1,199, according to the review.

  ## W890 chipset

  All Xeon 600 processors pair with Intel's new W890 chipset. The W890 connects to the host CPU through a DMI Gen4 x8 link — a direct chip-to-chip bus — offering just under 16 GB per second of bandwidth between the two. The chipset provides additional PCIe Gen4 lanes, SATA ports, a baseboard management controller (BMC, used for remote system administration), and USB connectivity topping out at 20 Gbps via USB 3.2 Gen 2x2. Wired Ethernet options through the chipset run to 1 Gbps or 2.5 Gbps. Wireless connectivity can be added via a discrete radio supporting Wi-Fi 7, or through integrated CNVIo2 Wi-Fi 6E on the chipset itself, though ServeTheHome notes that vendors targeting the premium workstation segment will largely use the discrete route.

  ## Market context

  ServeTheHome frames the Xeon 600 launch against a broader backdrop in which workstation processors have occupied an increasingly niche position, squeezed between the consumer shift toward laptops and surging server demand driven by artificial intelligence workloads. The review positions the new chips as competing directly against AMD's Threadripper processor line in the high-end workstation segment, which serves engineering, visual effects, and AI development workflows.

  The rebrand from Xeon W to Xeon 6 aligns workstation product naming with Intel's current server product family, a move ServeTheHome suggests reflects Intel's repositioning of the segment. The full Xeon 600 stack of 11 SKUs, with core counts from 12 to 86, spans both the entry-level and high-end portions of the workstation market under the unified branding.
body_zh: |
  Intel正式將旗下Granite Rapids伺服器架構引進工作站市場，推出Xeon 600處理器家族，終結了長達三年以上的工作站晶片架構空窗期。這個新產品線以貼近Intel伺服器產品的品牌命名方式，取代長期沿用的Xeon W-2xxx與W-3xxx命名規則，每個插槽最高提供86顆CPU核心，並支援更快速的記憶體與更多PCIe通道。以上資訊來自ServeTheHome發布的實測評測報告。

  Xeon 6 658X是新產品線中率先接受評測的晶片之一，位於涵蓋12至86核心、共11款SKU的產品堆疊之中。頂規晶片的86核心較前一代Xeon W-3500系列最高60核心多出43%；W-3500系列採用Intel的Sapphire Rapids架構。Intel在2023年初推出Sapphire Rapids工作站版本，但根據ServeTheHome的報導，Intel始終未將Sapphire Rapids的繼任者Emerald Rapids引進工作站平台，而是在2024年以相同底層晶片推出更新產品線，僅小幅調整時脈速度與核心數。

  ## 架構與效能預期

  Xeon 600系列以Intel的Redwood Cove CPU核心為基礎，採用Intel 3製程節點製造。前一代的Xeon W-3500與W-2400系列則使用Golden Cove核心。ServeTheHome指出，Redwood Cove相較於前代的主要優勢在於面積效率與能源效率，而非大幅提升每時脈指令數（IPC，衡量核心每個時脈週期可完成多少工作的指標）或峰值頻率。評測引用Intel官方宣傳資料指出，頂規SKU的單執行緒效能僅提升9%，而多執行緒效能——即同時分配至所有核心的工作負載——則提高61%。ServeTheHome認為，多執行緒的提升幅度與核心數增加幅度高度吻合，核心數增加才是這世代效能躍升的主要驅動力。

  L3快取是晶片上的高速記憶體緩衝區，可降低頻繁存取資料的延遲，容量從Xeon W-3500的112.5 MB大幅擴展至Xeon 600系列的336 MB。

  ## 記憶體與I/O平台

  所有Xeon 600晶片均支援八條DDR5記憶體通道，在每通道單根記憶體模組（DPC）的配置下，速度最高可達DDR5-6400，記憶體頻寬最高達每秒410 GB。相較之下，前一代最高僅支援DDR5-4800，記憶體頻寬為每秒307 GB。根據ServeTheHome的報告，28核心以上的SKU另外支援多工排列雙列直插記憶體模組（MRDIMM），這是一種高密度記憶體模組類型，可實現最高DDR5-8000的有效傳輸速度，峰值頻寬達每秒512 GB。評測指出，Intel雖已針對部分Granite Rapids伺服器SKU單獨宣布支援DDR5-8000 RDIMM，但迄今尚未對工作站版本發出同等公告。

  在互連方面，Xeon 600新增了對CXL 2.0的支援（Compute Express Link，一種用於記憶體擴展與匯聚的高速CPU至裝置協定），並將來自主處理器的PCIe Gen5通道數從W-3500的112條提升至128條。ServeTheHome表示，實際上多出的16條通道可讓系統額外增加一個x16擴充槽。

  此平台採用全新LGA4710插槽，取代Sapphire Rapids工作站版本所使用的LGA4677插槽。

  ## SKU堆疊的分層功能

  並非所有Xeon 600晶片都能享有完整的平台功能。16核心以下的晶片限制在80條PCIe通道與四條記憶體通道，ServeTheHome形容此配置與前一代Xeon W-2400及W-2500系列相當。若要啟用全部八條記憶體通道與128條PCIe通道，則需選擇至少18核心以上的晶片，根據評測資料，起售價約為1,199美元。

  ## W890晶片組

  所有Xeon 600處理器均搭配Intel全新的W890晶片組。W890透過DMI Gen4 x8連結——一種直接晶片對晶片匯流排——與主處理器相連，兩者之間的頻寬略低於每秒16 GB。晶片組另外提供額外的PCIe Gen4通道、SATA連接埠、底板管理控制器（BMC，用於遠端系統管理），以及透過USB 3.2 Gen 2x2達到最高20 Gbps的USB連接。晶片組提供的有線乙太網路選項涵蓋1 Gbps及2.5 Gbps兩種規格。無線連接功能可透過支援Wi-Fi 7的獨立無線網路卡新增，或透過晶片組內建的CNVIo2 Wi-Fi 6E實現；不過ServeTheHome指出，鎖定高端工作站市場的廠商大多會選擇獨立無線網路卡方案。

  ## 市場背景

  ServeTheHome將Xeon 600的推出置於更宏觀的市場背景下加以審視：工作站處理器正逐漸成為愈來愈小眾的市場區塊，一方面受到消費者大量轉向筆記型電腦的衝擊，另一方面也面臨人工智慧工作負載驅動的伺服器需求急速攀升所帶來的夾擊。評測將這批新晶片定位為高階工作站市場中，與AMD Threadripper處理器產品線的直接競爭對手，目標客群涵蓋工程設計、視覺特效及人工智慧開發等領域。

  從Xeon W更名為Xeon 6，使工作站產品命名與Intel現行伺服器產品家族統一，ServeTheHome認為此舉反映了Intel對這個市場區塊的重新定位。涵蓋12至86核心、共11款SKU的完整Xeon 600產品線，以統一品牌名稱同時涵蓋工作站市場的入門級與高階兩端。
date: "2026-08-18"
source_published: "2026-08-17T18:00:02.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Intel"]
trust:
  score: 4
  reasoning: "Single source: Intel Xeon 658X Review: Granite Rapids For Workstations (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/intel-xeon-658x-review-granite-rapids-for-workstations/"
    title: "Intel Xeon 658X Review: Granite Rapids For Workstations"
    trust: 4
    type: primary
    published_at: "2026-08-17T18:00:02.000Z"
---
