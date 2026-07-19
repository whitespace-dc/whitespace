---
title_en: "MSI Displays Liquid-Cooled Dual-Node Server Built for AMD EPYC Venice at Computex"
title_zh: "MSI Computex展出液冷雙節點伺服器，鎖定AMD EPYC Venice"
summary_en: "MSI showed the CD182-S6091-X2 (DLC), a direct-liquid-cooled 1U two-node server designed for AMD's unreleased sixth-generation \"Venice\" EPYC processors, at Computex 2026, alongside an ORv3 rack rated for 100 kW and 112 processors per 44U enclosure."
summary_zh: "MSI在2026年Computex展出CD182-S6091-X2（DLC），這是一款直接液冷的1U雙節點伺服器，專為AMD尚未發布的第六代「Venice」EPYC處理器所設計；同步亮相的還有一座額定100kW、每44U機箱可容納112顆處理器的ORv3液冷機架。"
body_en: |
  MSI displayed the CD182-S6091-X2 (DLC), a direct-liquid-cooled server designed for AMD's unreleased sixth-generation "Venice" EPYC processors, at Computex 2026, offering an early look at the hardware OEM partners are developing ahead of the platform's commercial launch.

  The system follows a 1OU2N form factor, meaning two dual-socket server nodes share a single rack unit (1U) conforming to the Open Compute Project version 3 (OCPv3) standard. That arrangement places four AMD Venice processors and their full memory complement inside one unit of rack space — a density MSI said is enabled by direct liquid cooling (DLC), which gives the product its suffix.

  ## Cooling architecture

  Each node runs two independent liquid loops. One serves the processors, which sit beneath large metal cold plates arranged in series on a dedicated circuit. A second loop cools the memory modules separately. AMD has not disclosed thermal design power (TDP) figures for Venice, but fifth-generation EPYC chips already reach up to 500 watts each, ServeTheHome reported. Venice is also introducing a wider memory bus, adding to overall node heat load. A practical side effect of MSI's cold-plate design is that the processor identities remain concealed beneath the cooling hardware — a feature ServeTheHome noted makes the trade-show display convenient for MSI. The node also appears to include leak-detection circuitry for the CPU cold plates, though MSI has not disclosed its full scope or capabilities.

  ## Memory and I/O specifications

  Each dual-socket node supports 32 DDR5 RDIMMs (registered dual inline memory modules) across 16 channels in a 1DPC (one DIMM per channel) configuration, with eight channels positioned on each side of each processor. Venice carries a 16-channel, 1,024-bit memory bus per processor, according to ServeTheHome.

  For networking and expansion, each node includes an OCP 3.0 slot for a customer-selected network interface card (NIC), connected via PCIe Gen6 lanes that Venice introduces. Two additional expansion slots are fitted per node: one full-height half-length (FHHL) and one half-height half-length (HHHL), both running at PCIe Gen6 x16. A dual-socket configuration provides enough PCIe lanes to run those slots at full width. Four E1.S local storage bays are also included, connected via PCIe Gen6. Each node is managed by an ASPEED AST2700 baseboard management controller (BMC) with two 1GbE out-of-band management ports.

  ## Power delivery

  The CD182-S6091-X2 contains no internal power supply unit. It draws power from a 48-volt direct current (VDC) busbar integrated into the chassis, eliminating per-node power conversion hardware and, MSI said, simplifying the installation and removal of individual nodes as well as entire chassis assemblies.

  ## ORv3 Liquid Cooled Rack

  MSI also showed the CD182-S6091-X2's intended installation environment: an ORv3 Liquid Cooled Rack rated for up to 100 kW of compute load. The 44U enclosure holds 28 CD182-S6091-X2 servers — 56 nodes in total — for a maximum density of 112 Venice processors and 1,792 RDIMMs per rack.

  The demo rack carried two Chicony power shelves rated at 55 kW each to energize the busbar, and a 100 kW Auras CDU (coolant distribution unit) designed to connect the server-side liquid loop to a facility-level cooling circuit via liquid-to-liquid heat exchange. Rack networking in the demonstration consisted of one 32-port 100GbE switch for compute traffic and two 48-port 1GbE switches dedicated to the out-of-band management network.

  ## What the system signals for the industry

  MSI's exhibit was one of several instances of liquid cooling that ServeTheHome documented across server vendor booths at Computex 2026. The report attributed the trend to processor thermal loads continuing to rise and air cooling approaching its practical limits for high-density server configurations. The dual liquid loops, 48VDC busbar power, and OCPv3 mechanical format of the CD182-S6091-X2 illustrate how those constraints are reshaping server design as the industry prepares for next-generation processor platforms.

  AMD has not announced a Venice launch date or processor TDP figures. MSI has not announced pricing or availability for the CD182-S6091-X2 (DLC) or the ORv3 rack. ServeTheHome described the Venice commercial launch as "a few months off" from the mid-2026 Computex show.
body_zh: |
  MSI在2026年Computex展出CD182-S6091-X2（DLC），這是一款採用直接液冷設計的伺服器，專為AMD尚未發布的第六代「Venice」EPYC處理器所開發，讓外界提前一窺OEM合作夥伴在平台正式商用上市前所籌備的硬體產品。

  此系統採用1OU2N機型，意即兩個雙插槽伺服器節點共用單一機架單元（1U），符合Open Compute Project第3版（OCPv3）標準。這樣的配置讓四顆AMD Venice處理器及其完整記憶體模組在一個機架單元的空間內並存——MSI表示，如此高密度正是有賴直接液冷（DLC）技術才得以實現，也因此成為產品名稱的後綴。

  ## 冷卻架構

  每個節點配備兩套獨立液冷迴路。其中一套專門服務處理器，處理器下方安裝了大型金屬冷板，以串聯方式布置在專用迴路上；另一套迴路則獨立冷卻記憶體模組。AMD尚未公布Venice的熱設計功耗（TDP）數值，但根據ServeTheHome的報導，第五代EPYC晶片的TDP已高達每顆500瓦。Venice還將引入更寬的記憶體匯流排，進一步增加整體節點的散熱負荷。MSI冷板設計的一個實際效果是，處理器型號被冷卻硬體完整遮蔽——ServeTheHome指出，這讓MSI在展場上的展示相當便利。此外，節點上似乎也配備了CPU冷板的洩漏偵測電路，但MSI尚未公開其完整範圍或功能。

  ## 記憶體與I/O規格

  每個雙插槽節點支援32條DDR5 RDIMM（已登錄雙列直插式記憶體模組），分佈於16個通道，採用1DPC（每通道一條DIMM）配置，每顆處理器兩側各配置八個通道。根據ServeTheHome的資料，Venice每顆處理器搭載16通道、1,024位元的記憶體匯流排。

  在網路與擴充方面，每個節點配備一個OCP 3.0插槽，供客戶自選網路介面卡（NIC），透過Venice引入的PCIe Gen6通道連接。每個節點另設兩個擴充槽：一個全高半長（FHHL）與一個半高半長（HHHL），均以PCIe Gen6 x16規格運作。雙插槽配置提供足夠的PCIe通道，讓這些插槽以完整頻寬運作。本機儲存方面，每個節點配備四個E1.S儲存槽，同樣透過PCIe Gen6連接。每個節點由一顆ASPEED AST2700基板管理控制器（BMC）負責管理，並配備兩個1GbE頻外管理連接埠。

  ## 電力供應

  CD182-S6091-X2不內建電源供應器。整台伺服器由整合於機箱的48伏特直流（VDC）匯流排供電，省去每個節點獨立設置電源轉換硬體的需求。MSI表示，此設計同時簡化了單一節點及整台機箱組件的安裝與拆卸流程。

  ## ORv3液冷機架

  MSI同步展出CD182-S6091-X2的預定安裝環境：一座ORv3液冷機架，最高可承載100kW的運算負荷。這座44U機箱可容納28台CD182-S6091-X2伺服器，共56個節點，每架最大密度達112顆Venice處理器與1,792條RDIMM。

  展示機架搭載兩組Chicony電源架，每組額定55kW，負責為匯流排供電；另配備一台Auras 100kW CDU（冷卻液分配單元），透過液對液熱交換，將伺服器端液冷迴路接入機房層級的冷卻系統。展示機架的網路配置包含一台32埠100GbE交換器，用於運算流量，以及兩台48埠1GbE交換器，專門服務頻外管理網路。

  ## 此系統對產業的意涵

  MSI的展示是ServeTheHome在2026年Computex各大伺服器廠商展位所記錄到的多個液冷案例之一。報導將這波趨勢歸因於處理器熱負荷持續攀升，加上風冷散熱已逐漸逼近高密度伺服器配置的實用極限。CD182-S6091-X2的雙液冷迴路、48VDC匯流排供電，以及OCPv3機械規格，清楚呈現出這些限制條件如何在業界備戰下一世代處理器平台之際，重新形塑伺服器的設計走向。

  AMD尚未宣布Venice的上市日期或處理器TDP數值。MSI也尚未公布CD182-S6091-X2（DLC）或ORv3機架的定價與供貨時程。ServeTheHome描述Venice的商業上市時間點距2026年中旬的Computex展「還有幾個月」。
date: "2026-07-20"
source_published: "2026-07-19T18:00:07.000Z"
category: "compute"
secondary_categories: ["cooling"]
region: []
vendor: ["AMD"]
trust:
  score: 3
  reasoning: "Single source: MSI Slyly Shows off an Upcoming DLC AMD EPYC Venice Platform With CD182-S6091-X2 Servers and Racks (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/msi-slyly-shows-off-an-upcoming-dlc-amd-epyc-venice-platform-with-cd182-s6091-x2-servers-and-racks/"
    title: "MSI Slyly Shows off an Upcoming DLC AMD EPYC Venice Platform With CD182-S6091-X2 Servers and Racks"
    trust: 3
    type: primary
    published_at: "2026-07-19T18:00:07.000Z"
---
