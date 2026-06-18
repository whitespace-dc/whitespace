---
title_en: "HPE Shows 81,920-Core Rack Density With AMD EPYC Venice at Discover 2026"
title_zh: "HPE於Discover 2026展示搭載AMD EPYC Venice的81,920核心機架"
summary_en: "HPE displayed what appeared to be a working HPE Cray GX250a compute blade housing eight AMD EPYC Venice processors at HPE Discover 2026, with the company claiming its GX5000 rack system delivers 81,920 CPU cores per enclosure. The figure represents roughly ten times the core density achievable in a dense air-cooled rack today, according to ServeTheHome."
summary_zh: "HPE在2026年Discover大會上展出HPE Cray GX250a運算刀鋒伺服器，內建八顆AMD EPYC Venice處理器，並宣稱其GX5000機架系統每台機櫃可提供81,920顆CPU核心，約為當今高密度氣冷機架的十倍。"
body_en: |
  HPE displayed what appeared to be a working HPE Cray GX250a compute blade housing eight AMD EPYC Venice processors at HPE Discover 2026, with the company claiming its GX5000 rack system delivers 81,920 central processing unit cores per enclosure — roughly ten times the core density of a dense air-cooled rack today, according to ServeTheHome, which photographed the hardware on the show floor.

  ## Core count and a math discrepancy

  The GX250a blade mounts eight AMD EPYC Venice CPUs per sled. A fully populated GX5000 rack holds 36 blades. ServeTheHome flagged a discrepancy in HPE's headline figure: 81,920 cores divided by 36 blades and eight sockets per blade yields approximately 284 cores per socket, which does not correspond to a clean processor configuration. The publication suggested the rack-level total may incorporate additional processors installed elsewhere in the enclosure beyond the 36 compute blades.

  ## Blade design and memory

  Each CPU connects to a 16-channel memory subsystem. The memory modules use standard dual in-line memory module (DIMM) form factors and are fully liquid-cooled alongside the processors. ServeTheHome noted the modules appeared to be MRDIMMs — multiplexer-combined RDIMMs, a high-bandwidth memory standard — but said it could not confirm that with certainty given the viewing angle on the show floor.

  Four of the eight CPU positions on the displayed sled carried Samsung E1.S EDSSF solid-state drives mounted directly on top of the CPU coldplates. HPE told ServeTheHome these serve as local fast scratch storage.

  ## Cooling and power

  The blade uses a direct liquid cooling loop with hot and cool liquid mating points on either side of the chassis and a center busbar for power distribution. ServeTheHome described the arrangement as comparable at a high level to Open Rack v3 — a widely used data center rack standard — but with a different implementation. The cooling distribution unit (CDU), which circulates coolant between the rack and a facility's chilled water plant, is rated at 1.6 megawatts of heat rejection capacity and was on display alongside the blade hardware.

  ## Networking

  Side pods on each blade carry HPE's Slingshot 400 high-speed network interface cards, with two NICs on each side cabled individually to each CPU. HPE said the mechanical form factor is designed to accept the future Slingshot 800 generation as well. ServeTheHome noted the connectors resemble OCP NIC 3.0 form factor. The publication also noted that the rack's front networking components extend outward at a 90-degree angle relative to a conventional server orientation, which will require a different cabling approach for optical fiber.

  ## Working system, not a prototype

  ServeTheHome identified the displayed unit as a Vanover VP1-01 node, a designation the publication said typically indicates a functional engineering system rather than a non-operational mock-up. Installed DRAM and SSDs reinforced that assessment. The unit was roped off on the show floor.

  The publication said this represents a meaningful step beyond the AMD EPYC Venice node HPE showed at SC25 in November 2025, which it described at the time as a prototype setup. The faceplate on the associated rack structure at Discover was labeled for the Mission supercomputer, a system destined for Los Alamos National Laboratory in partnership with NVIDIA.

  ## Density in context

  ServeTheHome noted that a densely configured air-cooled rack today holds approximately 8,000 processor cores, placing the GX5000's claimed 81,920-core figure at roughly ten times that density. Reaching that level requires liquid cooling throughout — not only for the CPUs and their coldplates but also for the memory subsystem — alongside infrastructure-scale CDUs capable of managing megawatt-class heat loads per rack.

  HPE Discover 2026 marked the most complete public showing of the GX5000 platform to date; the company has not announced a general availability date for the system.
body_zh: |
  HPE在2026年Discover大會上展出一套看似已可運作的HPE Cray GX250a運算刀鋒伺服器，每片刀鋒搭載八顆AMD EPYC Venice處理器。HPE宣稱其GX5000機架系統每台機櫃可提供81,920顆CPU核心——根據科技媒體ServeTheHome的現場拍攝報導，這個數字約為當今高密度氣冷機架核心數的十倍。

  ## 核心數量與數字落差

  GX250a刀鋒每個托架搭載八顆AMD EPYC Venice處理器。一台滿載的GX5000機架共容納36片刀鋒。ServeTheHome指出HPE公布的主打數字存在出入：以81,920顆核心除以36片刀鋒、再除以每片8個插槽，每個插槽約對應284顆核心，這並不符合任何乾淨整齊的處理器規格配置。該媒體推測，機架層級的總核心數可能涵蓋了36片運算刀鋒以外、安裝於機櫃其他位置的額外處理器。

  ## 刀鋒設計與記憶體

  每顆CPU連接一套16通道記憶體子系統。記憶體模組採用標準雙列直插式記憶體模組（DIMM）規格，與處理器一同進行全液冷散熱。ServeTheHome指出，這些模組看起來是MRDIMM（多工器結合型RDIMM，一種高頻寬記憶體規格），但表示受限於現場觀看角度，無法百分之百確認。

  展示托架上八個CPU插槽中有四個，其CPU冷卻板頂部直接安裝了三星E1.S EDSSF固態硬碟。HPE向ServeTheHome說明，這些硬碟作為本機高速暫存儲存使用。

  ## 散熱與電力

  刀鋒採用直接液冷迴路設計，機箱兩側分別設有熱液與冷液的對接接口，中央則設有匯流排用於電力分配。ServeTheHome形容這套架構在概念層面與廣泛應用於資料中心的Open Rack v3標準相近，但實作方式有所不同。負責在機架與機房冷凍水系統之間循環冷卻液的冷卻分配單元（CDU），額定排熱容量為1.6百萬瓦（MW），並與刀鋒硬體一同在現場展出。

  ## 網路

  每片刀鋒兩側的擴充槽搭載HPE Slingshot 400高速網路介面卡，兩側各配置兩張網路卡，並分別以獨立纜線連接至各顆CPU。HPE表示，這套機械結構規格同時相容未來的Slingshot 800世代產品。ServeTheHome觀察到，這些連接器外觀與OCP NIC 3.0規格相近。該媒體也注意到，機架正面的網路元件相對於傳統伺服器方向呈90度向外延伸，因此光纖佈線方式需要有別於傳統做法。

  ## 可運作系統，而非原型展示品

  ServeTheHome將展出的這套設備辨識為Vanover VP1-01節點，並說明這個型號命名慣例通常代表可實際運作的工程系統，而非無法運作的展示模型。機器上已安裝DRAM與固態硬碟，更進一步印證了這項判斷。該設備在展場以圍繩隔離展示。

  ServeTheHome表示，相較於HPE在2025年11月SC25超算大會上展示的AMD EPYC Venice節點——當時被描述為原型設置——此次展出代表著重大進展。大會現場對應機架結構上的面板標示著「Mission」超級電腦字樣，這套系統將與輝達（NVIDIA）合作，交付給美國洛斯阿拉莫斯國家實驗室。

  ## 密度的脈絡

  ServeTheHome指出，當今一台高密度配置的氣冷機架約可容納8,000顆處理器核心，對照之下，GX5000號稱的81,920核心約為前者的十倍。要達到這樣的密度，需要全面導入液冷技術——不僅處理器與冷卻板需要液冷，記憶體子系統同樣如此——同時還需要能夠承載每台機架百萬瓦級熱負荷的基礎設施規模CDU。

  2026年HPE Discover大會是GX5000平台迄今最完整的公開亮相；HPE尚未公布該系統的正式上市日期。
date: "2026-06-19"
source_published: "2026-06-18T01:48:19.000Z"
category: "compute"
secondary_categories: ["cooling"]
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 4
  reasoning: "Single source: 81920 Cores Per Rack with AMD EPYC Venice at HPE Discover 2026 (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/81920-cores-per-rack-with-amd-epyc-venice-at-hpe-discover-2026/"
    title: "81920 Cores Per Rack with AMD EPYC Venice at HPE Discover 2026"
    trust: 4
    type: primary
    published_at: "2026-06-18T01:48:19.000Z"
---
