---
title_en: "AI Data Center Rack Densities Reach 250 kW as Electrical Infrastructure Lags Behind"
title_zh: "AI資料中心機架密度飆至250 kW　電力基礎建設嚴重落後"
summary_en: "AI data center rack densities have surged from 5-8 kilowatts five years ago to as high as 250 kW per rack in GPU-dense configurations, while electrical equipment lead times stretching to 128 weeks are stalling construction timelines, according to analysis published by Turtle senior director Kevin Cruts in Data Center Dynamics."
summary_zh: "AI資料中心的機架功率密度在短短五年內從5至8千瓦暴增至最高250千瓦，然而支撐這股需求所需的電力設備採購前置期已長達128週，正嚴重拖累建設時程。"
body_en: |
  AI data center rack densities have surged from 5 to 8 kilowatts five years ago to between 15 and 50 kW in new facilities, with GPU-dense configurations reaching 100 to 250 kW per rack, while the electrical infrastructure needed to support that load has not kept pace, according to analysis published by Kevin Cruts, senior director of data center solutions at electrical distribution company Turtle, in Data Center Dynamics.

  New builds are on track to average 45 kW per rack, with 80 percent incorporating liquid cooling from the ground up, Cruts wrote. That gap between compute density and electrical readiness is now the primary constraint determining whether facilities reach commercial operation on schedule or sit structurally complete, waiting on power.

  ## Equipment lead times now govern the construction schedule

  The most immediate consequence of rising density is a procurement timeline that determines project delivery. Switchgear and transformers, the equipment that routes and steps down power from the utility feed to the rack, carry lead times of 52 to 78 weeks for distribution-class units, Cruts wrote. Large power transformers run 128 weeks or longer, depending on the manufacturer and configuration.

  High-voltage utility interconnections, on-site substations, and redundant distribution paths all require design lock and procurement decisions before a project's civil and structural work is complete, Cruts said. Project teams that treat electrical procurement as a post-design activity consistently reach the same outcome, he wrote: structural work finishes on schedule and sits idle, waiting on switchgear.

  ## The spatial paradox

  Rising rack density creates what engineers call the spatial paradox: as the power delivered to each rack increases, the upstream electrical infrastructure required to support it consumes more of the physical footprint originally allocated to compute, Cruts wrote. The effect forces a rethinking of how electrical scope is sequenced, specified, and built into the project.

  ## Shift to 800-volt DC distribution

  Most data center construction still operates on alternating current (AC) infrastructure, but facilities built around GPU-dense AI clusters are increasingly adopting 800-volt direct current (DC) distribution as the architecture of record, Cruts wrote. DC distribution moves power directly from the utility feed to the rack, eliminating the repeated AC-to-DC conversions that traditional server infrastructure requires.

  DC-capable systems require new categories of switchgear, DC-ready circuit breakers, solid-state transformers, and cable architecture designed for the ampacity — the current-carrying capacity — demanded by high-density AI clusters, according to Cruts. In GPU-dense deployments, busbars, rigid conductive bars that distribute power more efficiently than conventional cable bundles, are displacing traditional cabling because cable systems cannot match their current-carrying capacity at extreme rack densities, he wrote.

  Electrical contractors with the skills to design, specify, and commission DC-capable systems are in short supply, Cruts noted. Most carry deep experience with AC infrastructure. Identifying and staffing for that gap early is not a competitive advantage, he said; it is a scheduling requirement.

  ## Dual-architecture campuses

  A single data center campus today may need to support both AC and DC architectures in parallel, according to Cruts. Traditional enterprise and cloud workloads continue to run on AC infrastructure while AI clusters require high-density DC systems. Each architecture carries its own protection scheme, monitoring layer, and power path.

  Managing two concurrent electrical architectures introduces coordination demands that most facilities teams have not previously encountered, Cruts wrote. The interconnection between those systems, including the handoff points and protection coordination across both, must be designed together, not sequenced independently. Electrical contractors entering these projects for the first time find that the scope is not simply larger but structurally different, he said.

  ## What project teams need to change

  Cruts outlined three execution shifts to address the infrastructure gap. First, electrical procurement should begin before the final design is complete, with switchgear and transformer specifications developed in parallel with design development. Second, specifications should reflect the electrical architecture the facility will actually operate rather than what was standard when the design team last built a data center; DC-ready equipment, high-ampacity busway systems, and power modules designed for liquid-cooling integration are currently available. Third, both electrical architectures should be coordinated as a single integrated system from the design phase, requiring early collaboration between the engineer of record, the electrical contractor, and the equipment suppliers.

  ## Market scale

  The data center switchgear market alone is projected to reach $13.6 billion by 2031, growing at 16 percent annually, Cruts wrote. That growth reflects real construction volume driven by the AI density transition, he said. The projects driving it will be delivered by teams that recognized the infrastructure gap early and built their execution strategy around it, Cruts wrote.
body_zh: |
  ## AI資料中心機架密度飆至250 kW　電力基礎建設嚴重落後

  根據電力配電公司Turtle資料中心解決方案資深總監凱文．克魯茲（Kevin Cruts）發表於《Data Center Dynamics》的分析報告，AI資料中心的機架功率密度在五年前僅為5至8千瓦，如今新建設施已普遍落在每機架15至50千瓦之間，GPU密集型配置更可高達100至250千瓦——然而支撐這股需求所需的電力基礎建設，卻完全跟不上腳步。

  克魯茲指出，新建設施的平均機架密度將達到45千瓦，其中八成從規劃初期就全面導入液冷系統。運算密度與電力整備程度之間的落差，已成為決定機房能否如期投入商業運營的核心瓶頸——不少設施在土建結構完工後，只能乾等配電設備到位。

  ## 設備採購前置期決定建設進度

  功率密度上升帶來的最直接衝擊，是採購時程成了左右專案交付的關鍵變數。克魯茲寫道，配電級開關設備與變壓器的採購前置期為52至78週；大型電力變壓器則視廠商與規格而定，前置期長達128週以上。

  高壓電力接入、場地變電站及冗餘配電路徑，全都必須在土建與結構工程完成之前就鎖定設計、啟動採購。克魯茲指出，凡是把電力採購視為「設計完成後再處理」的專案團隊，最終往往落得同一個結果：結構工程如期完工，卻得閒置等待開關設備到貨。

  ## 空間悖論

  機架密度的提升衍生出工程師所稱的「空間悖論」：每個機架承受的供電量愈大，支撐它所需的上游電力基礎設施就愈龐大，進而佔用原本規劃給運算設備的實體空間。克魯茲寫道，這個效應迫使業界從根本重新思考電力工程的排序方式、規格制定方式，以及如何將其納入整體專案規劃之中。

  ## 轉向800伏直流配電

  目前絕大多數資料中心的建設仍以交流電（AC）基礎架構為主，但圍繞GPU密集型AI叢集打造的設施，正愈來愈多地採用800伏直流電（DC）配電作為標準架構。克魯茲寫道，直流配電可將電力從電網直接送達機架，省去傳統伺服器基礎設施中反覆進行的交流轉直流轉換步驟。

  根據克魯茲的說明，直流相容系統需要全新類別的開關設備、直流適用斷路器、固態變壓器，以及專為高密度AI叢集所需的載流量（安培容量）設計的線纜架構。在GPU密集型部署環境中，匯流排（busbar）——一種比傳統電纜束更有效率的剛性導電排——正逐漸取代傳統佈線，原因在於在極高機架密度下，電纜系統的載流能力根本無法匹敵。

  克魯茲也特別點出，具備直流系統設計、規格制定與調試能力的電力承包商十分稀缺，市面上大多數業者的深厚經驗仍集中在交流基礎架構。他表示，及早識別並填補這項人才缺口，已不只是競爭優勢，而是排程上的必要條件。

  ## 雙架構園區

  克魯茲指出，單一資料中心園區如今可能同時需要支援交流與直流兩種架構並行運作。傳統企業與雲端工作負載持續跑在交流電基礎設施上，AI叢集則需要高密度的直流系統。兩種架構各有其保護機制、監控層次與供電路徑。

  克魯茲寫道，同時管理兩套電力架構所帶來的協調需求，是大多數設施團隊此前從未遭遇過的挑戰。兩個系統之間的互聯——包括交接點以及跨系統的保護協調——必須整合設計，而非各自獨立排序推進。他說，首次承接此類專案的電力承包商會發現，工程的複雜度不只是規模更大，而是本質上截然不同。

  ## 專案團隊的三項執行轉變

  克魯茲列出三項執行面的調整方向，以應對基礎建設落差。第一，電力採購應在最終設計完成之前就啟動，開關設備與變壓器的規格制定須與設計開發同步並行推進。第二，規格書應反映設施實際將運行的電力架構，而非設計團隊上一次建設資料中心時的業界標準；直流相容設備、高載流量匯流排系統，以及專為液冷整合設計的電源模組，目前均已可供採購。第三，兩種電力架構應從設計階段起就作為單一整合系統進行協調，這需要設計負責工程師、電力承包商與設備供應商從早期就緊密合作。

  ## 市場規模

  克魯茲寫道，僅資料中心開關設備市場一項，預計到2031年規模將達136億美元，年複合成長率為16%。他表示，這樣的成長幅度反映的是AI密度轉型所驅動的真實建設量能。克魯茲最後寫道，能夠推動這波建設的，將是那些及早認清基礎建設落差、並據此構建執行策略的團隊。
date: "2026-07-13"
source_published: "2026-07-12T14:30:26.000Z"
category: "power"
secondary_categories: ["compute"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: The electrical infrastructure gap: What AI data center density demands from every project team (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/opinions/the-electrical-infrastructure-gap-what-ai-data-center-density-demands-from-every-project-team/"
    title: "The electrical infrastructure gap: What AI data center density demands from every project team"
    trust: 3
    type: primary
    published_at: "2026-07-12T14:30:26.000Z"
---
