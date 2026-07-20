---
title_en: "AI rack density surge forces data centers to weigh air, liquid and hybrid cooling tradeoffs"
title_zh: "AI機架密度驟增　資料中心須權衡氣冷、液冷與混合冷卻取捨"
summary_en: "Global data center electricity consumption is on track to roughly double by 2030 as artificial intelligence workloads push rack power densities beyond the limits of conventional air cooling, according to a Data Center Frontier analysis that maps the tradeoffs among air, evaporative, liquid and hybrid cooling systems."
summary_zh: "隨著AI工作負載將機架功耗密度推向傳統氣冷系統的極限，全球資料中心電力消耗預計在2030年前翻倍。Data Center Frontier最新技術分析比較氣冷、蒸發冷卻、液冷與混合冷卻方案的取捨，結論是沒有任何單一架構能適用於所有環境，混合方案才是現代資料中心最具永續性的前進之路。"
body_en: |
  Global data center electricity consumption is on track to roughly double by 2030, the International Energy Agency (IEA) projects, with artificial intelligence (AI) accelerator-based systems driving much of that growth and placing new demands on cooling infrastructure that most facilities were not built to handle at high rack density, according to a technical analysis published July 20 by Data Center Frontier.

  The analysis maps tradeoffs across the major cooling approaches — air, evaporative, liquid and hybrid — and concludes that no single architecture fits all environments. Capital and operating cost, rack density, water and energy consumption, reliability, climate suitability and retrofit complexity each shape which approach fits a given facility.

  ## How the cooling chain works

  Every data center cooling system performs three functions: capturing heat from IT equipment, transporting that heat away from the rack or room, and rejecting it to the outside environment or making it available for reuse, the analysis states.

  In a conventional air-cooled facility, server fans draw cool air across processors, memory, storage and power supplies, then discharge heated air into a hot aisle or return-air plenum. The facility cooling system removes heat from that return air before recirculating it. Liquid cooling shifts the point of heat capture closer to the electronics: rear-door heat exchangers remove heat from server exhaust before it enters the room; cold plates mounted directly on processors and graphics processing units (GPUs) capture heat at the component level; and immersion systems submerge servers or components in dielectric fluid, a non-electrically conductive liquid.

  Lawrence Berkeley National Laboratory describes liquid cooling as a spectrum extending from room-level systems such as computer room air handlers (CRAHs) to immersion cooling directly at the surface of heat-generating components, according to the report. Capturing heat closer to the source allows coolant to operate at warmer temperatures while maintaining effective thermal control.

  The core physical tradeoff is that air carries relatively little heat per unit volume, while liquids transport far more heat using much lower flow volumes. Liquid systems introduce pumps, coolant distribution networks, leak detection requirements, materials-compatibility constraints and changes to server maintenance procedures that air-cooled facilities do not face.

  ## Air cooling: the incumbent approach and its limits

  Air cooling remains the dominant approach for general-purpose data centers, the analysis states. Common configurations include chilled-water CRAH systems, in which air handlers transfer room heat into centrally supplied chilled water; direct-expansion (DX) computer room air conditioner (CRAC) units, which use refrigerant absorbed within the cooling unit itself; and in-row or close-coupled coolers placed near racks to shorten airflow paths and reduce hot- and cold-air mixing.

  Air cooling's primary advantages are maturity and familiarity. It supports standard server hardware and conventional rack designs, relies on established maintenance practices and fits standard redundancy models. It also keeps liquid outside IT equipment, a requirement in many enterprise and colocation environments.

  Its central limitation is the volume of air required as rack power increases. Higher airflow demands raise fan energy within servers and across the facility. Poor air management compounds the problem: bypass airflow, hot- and cold-air recirculation, missing blanking panels, cable obstructions and raised-floor leaks force cooling equipment to work harder than necessary. Berkeley Lab guidance cited in the analysis describes effective airflow management as not only an efficiency measure but a prerequisite for many other cooling and energy-saving improvements.

  Water consumption in air-cooled facilities depends on how heat is rejected. Facilities that use dry coolers or air-cooled condensers can use little or no water at the site, but may depend on water elsewhere in the cooling chain if chillers, cooling towers or evaporative-assist systems are also in use. Fully dry designs substantially reduce direct water consumption, though they may require more fan or compressor energy during peak outdoor temperatures, the analysis notes.

  ## Liquid cooling for high-density AI and HPC

  Direct-to-chip cooling and immersion cooling are increasingly necessary for high-density AI and high-performance computing (HPC) workloads, which generate more heat per rack than conventional servers can dissipate through air alone, according to the analysis. These liquid approaches enable higher rack power densities with better thermal management than air-cooled systems can achieve at equivalent densities.

  AI factories are bringing HPC and accelerator-based systems, previously concentrated in specialized supercomputing environments, into mainstream data center deployments, the analysis states. That shift is the primary driver of rising rack density across the industry.

  ## Water availability and climate as site-specific constraints

  Water availability and local climate conditions heavily influence cooling system selection, the analysis states. Evaporative cooling systems, which use water evaporation to reject heat, perform well in dry, cool climates. Facilities in water-constrained regions are better suited to dry coolers, which reject heat through air contact without evaporating water.

  ## The case for hybrid architectures

  A hybrid approach, combining multiple cooling technologies calibrated to local conditions and workload demands, represents the most sustainable and cost-effective path forward for modern data centers, the analysis concludes. A hyperscale campus in a favorable climate, a financial-services colocation facility in a dense urban area, a legacy enterprise data center and a purpose-built AI training campus will each require different combinations of techniques.

  The IEA projection that global data center electricity consumption will roughly double by 2030, driven by AI and accelerated computing, means that cooling infrastructure decisions now in progress will shape operating costs and environmental footprints for the coming decade, according to the Data Center Frontier analysis.
body_zh: |
  全球資料中心電力消耗有望在2030年前翻倍，根據國際能源署（IEA）的預測，人工智慧（AI）加速器系統是推動此一成長的主要動力，並對冷卻基礎設施帶來前所未有的壓力——大多數既有設施在建設之初，根本未針對高機架密度的需求而設計。這是Data Center Frontier於7月20日發布的一份技術分析報告所呈現的圖像。

  這份分析比較了各主要冷卻做法——氣冷、蒸發冷卻、液冷及混合冷卻——並得出結論：沒有任何單一架構能適用於所有環境。資本與營運成本、機架密度、水資源與能源消耗、可靠度、氣候適宜性，以及改造複雜度，都是決定特定設施最適冷卻方案的關鍵變數。

  ## 冷卻鏈的運作原理

  每套資料中心冷卻系統都執行三項核心功能：從IT設備擷取熱能、將熱能從機架或機房輸送出去，以及將熱能排放至外部環境，或將其回收再利用，分析報告如此說明。

  在傳統氣冷設施中，伺服器風扇將冷空氣吹過處理器、記憶體、儲存裝置與電源供應器，再將熱空氣排入熱走道或回風靜壓腔。設施冷卻系統對回風除熱後再重新循環。液冷的熱擷取點則更靠近電子元件：後門熱交換器在熱空氣進入機房前，先行移除伺服器廢熱；冷板（cold plate）直接安裝在處理器及圖形處理器（GPU）上，在元件層級擷取熱能；浸沒冷卻則將伺服器或元件浸泡在介電液——一種不導電的液體——之中。

  根據這份報告，勞倫斯伯克萊國家實驗室（Lawrence Berkeley National Laboratory）將液冷定義為一個連續光譜，從機房層級的電腦機房空調設備（CRAH）系統，延伸至直接對發熱元件表面進行浸沒冷卻。熱擷取點越靠近熱源，冷卻液便能在較高溫度下運作，同時仍維持有效的熱控效果。

  核心物理取捨在於：空氣每單位體積能攜帶的熱量相對有限，而液體只需遠低的流量，便能輸送多得多的熱能。然而，液冷系統也引入了泵浦、冷卻液分配網路、洩漏偵測需求、材料相容性限制，以及有別於氣冷設施的伺服器維護程序。

  ## 氣冷：主流做法與其局限

  氣冷仍是通用型資料中心的主流方案，分析報告指出。常見配置包括：冷凍水CRAH系統——空調設備將機房熱能傳入集中供應的冷凍水；直膨式（DX）電腦機房空調（CRAC）機組——使用機組內部的冷媒吸熱；以及布設於機架旁的列間或近耦合冷卻設備，縮短氣流路徑，減少冷熱空氣混合。

  氣冷的主要優勢在於技術成熟且廣為業界熟悉。它支援標準伺服器硬體與傳統機架設計，仰賴成熟的維護慣例，並符合標準備援模型。此外，液體完全隔絕於IT設備之外，這在許多企業級及共置（colocation）環境中是必要條件。

  其核心限制在於：隨機架功耗增加，所需氣流量也隨之龐大。更高的風量需求，使伺服器內部及整體設施的風扇能耗跟著攀升。不良的氣流管理更加劇問題：旁路氣流、冷熱空氣再循環、遺漏的填充面板、線纜阻塞，以及高架地板洩漏，都迫使冷卻設備超量運轉。分析報告援引伯克萊實驗室的指引指出，有效的氣流管理不僅是節能手段，更是許多其他冷卻改善措施與節能改良的先決條件。

  氣冷設施的用水量，取決於熱能的排放方式。採用乾式冷卻器或氣冷冷凝器的設施，幾乎或完全不需現場用水，但若同時使用冰水主機、冷卻塔或蒸發輔助系統，冷卻鏈的其他環節仍可能涉及用水。全乾式設計能大幅降低現場直接用水量，但在室外高溫尖峰時段，可能需要消耗更多風扇或壓縮機能耗，分析報告如此指出。

  ## 高密度AI與HPC的液冷方案

  對高密度AI及高效能運算（HPC）工作負載而言，直接對晶片冷卻（direct-to-chip cooling）與浸沒冷卻已日益成為必要選項。這類工作負載每個機架所產生的熱量，遠超傳統伺服器單靠氣冷所能散逸的上限，分析報告指出。相較於氣冷系統在等同密度下的表現，這些液冷方案能以更佳的熱管理，實現更高的機架功耗密度。

  AI工廠正將過去集中於特定超級電腦環境的HPC與加速器系統，引入主流資料中心部署，分析報告說明。這一轉變，正是業界機架密度持續攀升的主要驅動力。

  ## 水資源與氣候：因地制宜的限制因素

  水資源可用性與當地氣候條件，對冷卻系統的選擇影響深遠，分析報告指出。蒸發冷卻系統利用水蒸發來排熱，在乾燥涼爽的氣候下表現優異。位於水資源受限地區的設施，則較適合採用乾式冷卻器——透過空氣接觸排熱，無須蒸發水分。

  ## 混合架構的優勢

  結合多種冷卻技術、並依據當地條件與工作負載需求靈活調配的混合方案，是現代資料中心最具永續性且最具成本效益的前進之路，分析報告如此總結。無論是氣候條件優越地區的超大規模園區型資料中心、高密度都市區的金融服務共置設施、傳統企業自建資料中心，還是專為AI訓練打造的專用校園，各自都需要不同的技術組合搭配。

  IEA預測全球資料中心電力消耗將在2030年前翻倍，主要受AI與加速運算帶動。這意味著，當前正在推進的冷卻基礎設施決策，將左右未來十年的營運成本與環境足跡，Data Center Frontier的分析報告如此結語。
date: "2026-07-21"
source_published: "2026-07-20T15:57:49.549Z"
category: "cooling"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Tech Explainer: Data Center Cooling - Air, Evaporative, Liquid, and Hybrid Approaches (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/cooling/article/55389787/tech-explainer-data-center-cooling-air-evaporative-liquid-and-hybrid-approaches"
    title: "Tech Explainer: Data Center Cooling - Air, Evaporative, Liquid, and Hybrid Approaches"
    trust: 3
    type: primary
    published_at: "2026-07-20T15:57:49.549Z"
---
