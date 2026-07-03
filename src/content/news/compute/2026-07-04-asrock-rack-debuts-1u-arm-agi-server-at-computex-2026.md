---
title_en: "ASRock Rack Debuts 1U Arm AGI Server at Computex 2026"
title_zh: "華擎伺服器攜Arm AGI 1U機器亮相Computex 2026"
summary_en: "ASRock Rack displayed the 1U4E1S-ARM, a single-socket 1U server built around Arm's first in-house server processor, the Arm AGI, at Computex 2026. The chip, built on TSMC's 3nm process with 136 Neoverse V3 cores, has not yet entered volume production."
summary_zh: "華擎伺服器（ASRock Rack）在Computex 2026展出搭載Arm首款自研伺服器處理器「Arm AGI」的1U4E1S-ARM單槽位1U伺服器，該晶片採台積電3奈米製程、內建136顆Neoverse V3核心，目前尚未進入量產階段。"
body_en: |
  ASRock Rack showed one of the first servers built around Arm's own-branded AGI server processor at Computex 2026, marking a public preview of a chip the architecture licensor turned chip designer announced in March but has not yet shipped in volume.

  The server, designated the 1U4E1S-ARM, is a 1U single-socket chassis powered by ASRock Rack's ARMD12M3 motherboard — the same board the company uses in its previously announced 2OU 2OU2N-ARM dual-node 2U system. The 1U design fits one AGI processor in half the space of the two-processor 2U chassis, the company said.

  ## The Arm AGI processor

  The Arm AGI is fabricated on TSMC's 3-nanometer process and integrates 136 of Arm's Neoverse V3 compute cores. The top-clocked variant runs at 3.7 GHz with a base thermal design power (TDP) — the rated sustained heat output a cooling system must handle — of 300W, which ServeTheHome described as similar to other contemporary server processors, or perhaps slightly lower.

  The chip supports 12 channels of DDR5 memory running at speeds up to DDR5-8800. Memory channel count has become a competition point between server CPU vendors as growing core counts demand more bandwidth, according to ServeTheHome, with agentic AI workloads expected to keep more cores consistently busy.

  The AGI is among the first server processors to support PCIe Generation 6 — the latest version of the interconnect standard used to link CPUs to storage, networking, and accelerator cards — alongside CXL 3.0, a cache-coherent interconnect used to pool memory and other resources across a system. The chip exposes 96 PCIe Gen6 lanes in total.

  ## Server configuration

  The 1U4E1S-ARM makes approximately 80 of the chip's 96 PCIe lanes available to connected components, ServeTheHome reported.

  Expansion options include:

  - 1 full-height, full-length (FHFL) PCIe Gen6 x16 card slot
  - 1 half-height, half-length (HHHL) PCIe Gen6 x16/x8 card slot
  - 1 OCP NIC 3.0 slot — an industry-standard connector for network interface cards — fed by 16 PCIe lanes

  The board also carries QSFP ports, high-density fiber-optic networking connectors, though ServeTheHome noted the controller and exact configuration were not disclosed by ASRock Rack.

  Storage consists of two M.2 slots at the rear for internal drives and four front-panel hot-swap E1.S bays rated for PCIe Gen5 x4 speeds. E1.S is a compact solid-state drive form factor designed for dense server deployments. Power comes from a pair of redundant 800W 80 PLUS Titanium power supply units.

  ASRock Rack configured memory at one DIMM per channel across all 12 DDR5 channels, split between the left and right sides of the processor to simplify board routing, according to ServeTheHome.

  ## Context

  Arm announced the AGI processor in March alongside ASRock Rack's disclosure of the dual-node 2OU 2OU2N-ARM server. The chip represents Arm's direct entry as a server silicon vendor rather than solely an architecture licensor. Arm's first publicly named direct customer for the AGI is Meta, according to ServeTheHome.

  ASRock Rack is a launch partner for the AGI platform. As of Computex, the AGI had not entered volume production. The company said it had not released additional product details and the 1U4E1S-ARM had not been listed on its website, with the implication being that a formal launch awaits TSMC's ramp of AGI chip output.

  ## What it means

  The Computex display is the first public appearance of hardware built around Arm's own-branded server processor, demonstrating that the supply chain at the board, chassis, and power level is ready ahead of chip availability. Volume production and customer shipments remain contingent on TSMC's 3nm production ramp for the AGI.

  Pricing, software support details, and a shipping date for the 1U4E1S-ARM had not been announced as of the show.
body_zh: |
  ## 華擎伺服器攜Arm AGI 1U機器亮相Computex 2026

  華擎伺服器（ASRock Rack）在Computex 2026展示了其中一款率先搭載Arm自有品牌AGI伺服器處理器的機器，為這顆架構授權商轉型晶片設計商後的重要里程碑——Arm於今年3月正式發表AGI晶片，但至今仍未展開量產出貨，此次展出堪稱公開預覽。

  這款伺服器型號為1U4E1S-ARM，採1U單槽位機箱設計，搭載華擎伺服器自家的ARMD12M3主機板，與此前發表的雙節點2U機器「2OU2N-ARM」所使用的主機板相同。華擎伺服器表示，1U的設計僅佔雙處理器2U機箱一半的空間，卻能容納一顆AGI處理器。

  ## Arm AGI處理器

  Arm AGI採台積電3奈米製程製造，整合了136顆Arm Neoverse V3運算核心。最高時脈版本可達3.7 GHz，基礎熱設計功耗（TDP）——即散熱系統須持續承受的額定熱輸出——為300W，ServeTheHome指出，這與當代其他伺服器處理器相近，甚至略低。

  該晶片支援12通道DDR5記憶體，速度最高可達DDR5-8800。ServeTheHome表示，隨著伺服器CPU核心數持續增加，記憶體通道數已成為各家廠商的競爭焦點，而代理AI（agentic AI）工作負載預期將使更多核心長時間保持高度使用，對頻寬需求更為迫切。

  AGI是首批支援PCIe第6代規格的伺服器處理器之一——這是用於連接CPU與儲存裝置、網路及加速卡的匯流排標準最新版本——同時也支援CXL 3.0快取一致性互連，可用於跨系統彙集記憶體及其他資源。該晶片共提供96條PCIe Gen6通道。

  ## 伺服器規格配置

  據ServeTheHome報導，1U4E1S-ARM將晶片96條PCIe通道中的約80條開放給連接元件使用。

  擴充選項包括：

  - 1個全高全長（FHFL）PCIe Gen6 x16卡槽
  - 1個半高半長（HHHL）PCIe Gen6 x16/x8卡槽
  - 1個OCP NIC 3.0插槽——業界標準網路介面卡連接器——提供16條PCIe通道

  主機板上亦設有QSFP連接埠，為高密度光纖網路連接器，但ServeTheHome指出，控制器型號及確切配置並未由華擎伺服器揭露。

  儲存方面，機器後方設有兩個M.2插槽供內部儲存碟使用，前面板則配備四個支援PCIe Gen5 x4速度的E1.S熱插拔硬碟槽。E1.S是專為高密度伺服器部署設計的小尺寸固態硬碟規格。電源方面，配置一對冗餘800W 80 PLUS鈦金認證電源供應器。

  據ServeTheHome報導，華擎伺服器在全部12個DDR5通道各配置一條DIMM，並將記憶體分散於處理器左右兩側，以簡化主機板佈線設計。

  ## 背景脈絡

  Arm於今年3月宣布AGI處理器的同時，華擎伺服器也一併披露了雙節點的2OU2N-ARM伺服器。這顆晶片代表Arm正式以伺服器晶片供應商的角色直接參與市場競爭，而非僅作為架構授權方。據ServeTheHome指出，AGI目前已公開揭露的首位直接客戶為Meta。

  華擎伺服器是AGI平台的首批合作夥伴之一。截至Computex展期，AGI尚未進入量產。華擎伺服器表示，目前尚未公布更多產品細節，1U4E1S-ARM也未列於官方網站，言下之意是正式發表將等待台積電AGI晶片產能拉升後再行啟動。

  ## 意義與展望

  此次Computex展出是搭載Arm自有品牌伺服器處理器之硬體的首次公開亮相，證明在晶片備貨到位之前，主機板、機箱及電源層面的供應鏈已準備就緒。量產與客戶出貨仍有賴台積電AGI晶片3奈米產能的爬坡進度。

  截至展覽期間，1U4E1S-ARM的定價、軟體支援細節及出貨日期均尚未對外公告。
date: "2026-07-04"
source_published: "2026-07-03T17:00:43.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["ASRock Rack", "Coherent", "TSMC"]
trust:
  score: 3
  reasoning: "Single source: ASRock Rack Had One of the First Arm AGI Servers at Computex 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/asrock-rack-had-one-of-the-first-arm-agi-servers-at-computex-2026/"
    title: "ASRock Rack Had One of the First Arm AGI Servers at Computex 2026"
    trust: 3
    type: primary
    published_at: "2026-07-03T17:00:43.000Z"
---
