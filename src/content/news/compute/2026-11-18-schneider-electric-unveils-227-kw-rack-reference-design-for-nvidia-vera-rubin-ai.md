---
title_en: "Schneider Electric Unveils 227-kW Rack Reference Design for NVIDIA Vera Rubin AI Clusters"
title_zh: "施耐德電氣發布輝達 Vera Rubin AI 叢集 227 kW 機架參考設計"
summary_en: "Schneider Electric has published a modular AI factory reference design targeting NVIDIA's Vera Rubin GPU platform, specifying racks drawing up to 227 kilowatts each within a standardized 10–20 MW architecture. The company introduced the design at NVIDIA GTC Berlin on October 21."
summary_zh: "施耐德電氣（Schneider Electric）於柏林 NVIDIA GTC 大會上發布針對輝達（NVIDIA）Vera Rubin GPU 平台的模組化 AI 工廠參考設計，規格指定每個機架最高功耗達 227 kW，整體架構適用於 10 至 20 MW 規模的設施。此設計於 10 月 21 日正式亮相，涵蓋詳盡的電力、液冷與工廠預製模組方案，可用性目標設定為 Tier III 等級。"
body_en: |
  Schneider Electric has published a detailed engineering reference design for high-density AI data centers built around NVIDIA's Vera Rubin GPU platform, specifying racks capable of drawing up to 227 kilowatts each — a figure that illustrates the sharp increase in power density now driving infrastructure redesign across the industry. The company introduced the design, called RapidScale Modular Data Center Reference Design 115, at NVIDIA GTC Berlin on October 21.

  The reference design targets facilities in the 10 to 20 megawatt range and is built to ANSI standards with a Tier III availability target. Tier III is a data center classification meaning the facility can sustain maintenance on any single power or cooling component without taking the IT systems offline.

  The published example centers on one deployment unit — a self-contained block of infrastructure — containing four scalable sub-units. Each sub-unit is designed around one NVIDIA Vera Rubin cluster with 1,008 GPUs, bringing the deployment unit to 4,032 GPUs in total. Those GPUs are housed across 56 AI computing racks, with another 32 racks dedicated to networking equipment. The deployment unit occupies approximately 33,518 square feet, divided between IT space and supporting utility infrastructure, with a total peak facility power draw of approximately 13.25 MW, Schneider said.

  ## Power states and the capacity trade-off

  The design documents two distinct operating modes for the Vera Rubin racks, each reflecting a different balance between raw computing performance and power efficiency.

  At Max-P — maximum power — each AI rack draws approximately 227 kW, prioritizing peak computing throughput. At Max-Q, power per rack falls to approximately 188 kW, with the stated objective of improving tokens produced per watt. A token is the basic unit of output from large language models.

  Those two modes produce meaningfully different facility-level outcomes. In the tabulated Max-P configuration, 42 of the 56 AI racks operate simultaneously, generating approximately 10.4 MW of total IT demand including networking gear. The Max-Q configuration runs all 56 racks at the lower per-rack draw, producing approximately 11.4 MW of aggregate IT demand, according to the documentation.

  The gap between the two modes reflects a structural constraint in the electrical design. The deployment unit is served by four 3.75 MW RapidScale powertrains — factory-assembled electrical distribution and backup-power packages — arranged in a 3+1 distributed redundant configuration. That means three powertrains handle the normal IT load while the fourth provides a reserve for failures or maintenance. The Max-P configuration, with its higher per-rack consumption concentrated in 42 racks, operates on three of the four IT powertrains; the Max-Q configuration, with lower per-rack draw spread across all 56 racks, uses all four.

  Operators choosing between configurations must therefore weigh peak computing performance against the degree of electrical redundancy they retain, Schneider's documentation indicates. The company also describes configurations with more Max-P racks when additional electrical capacity is available, as well as reduced-rack arrangements for maintenance or equipment failure scenarios.

  ## Electrical architecture

  Each of the four IT powertrains contains a 5,000-ampere QED-2 switchboard, three parallel 1,250 kW Galaxy VXL uninterruptible power supply units, and associated distribution infrastructure. The UPS units — battery-backed systems that keep servers running through brief utility outages — provide five minutes of runtime at rated load.

  AI racks receive power at 480 volts AC; networking equipment operates on 415V AC distribution. Schneider said it is developing higher-voltage direct-current technologies for future AI infrastructure, but Reference Design 115 does not use an 800V DC electrical architecture.

  Separate 2.5 MW powertrains supply 2N — fully redundant, with two independent paths — electrical infrastructure for the mechanical systems, including UPS support for critical cooling pumps and distribution units.

  ## Liquid cooling handles 96 percent of rack heat

  The thermal design reflects the difficulty of managing heat at 227 kW per rack using air alone. Schneider's reference design assumes that liquid cooling removes approximately 96 percent of the heat generated by the liquid-cooled racks, with the remaining portion handled by conventional air-cooling infrastructure.

  Motivair liquid-to-liquid coolant distribution units connect the computing equipment to a high-temperature cooling loop, which Schneider specifies at approximately 108 degrees Fahrenheit supply and 126 degrees Fahrenheit return. A separate chilled-water system supplies 64-degree water to Uniflair fan walls that manage residual rack heat and other air-cooled equipment.

  The higher-temperature liquid loop is significant because it permits the use of dry coolers — heat exchangers that reject heat directly to outdoor air — for a substantial portion of the heat-rejection load, supplemented by adiabatic cooling, which uses water evaporation, when outdoor temperatures require it. That approach can reduce or eliminate dependence on mechanical chillers, which consume additional electricity.

  Schneider models annualized power usage effectiveness, or PUE — a ratio measuring how much total facility power goes to IT equipment versus overhead such as cooling and lighting, where 1.0 is theoretical perfection — at approximately 1.1 under conditions modeled for San Francisco and Dallas. The company characterized these as engineering projections rather than measured operating results, and said actual performance depends on climate, equipment configuration, and workload.

  ## Factory assembly alongside site construction

  Reference Design 115 combines prefabricated powertrains, liquid-cooling equipment, IT pods, distribution infrastructure, and management software within a single engineering framework. Schneider's documentation frames the design not as a replacement for conventional data center buildings but as a way to incorporate prefabricated equipment packages into a broader construction program, with factory assembly proceeding in parallel with site development.

  For developers building large campuses in multiple phases, the company's argument is that standardizing the infrastructure inside buildings makes it easier to reproduce, coordinate, and commission as computing hardware generations change.

  Separately, a study Schneider conducted with Compass Datacenters — the companies jointly announced an EcoStruxure white-space module in September 2025 — documents reductions in selected onsite installation activities achieved through prefabricated modules. The source material covering the full findings of that study was not complete at the time of publication.

  ## Industry significance

  The 227 kW maximum rack power specified in Reference Design 115 marks a significant escalation from the rack densities that dominated data center design even two years ago, and it illustrates the degree to which AI GPU clusters are driving infrastructure suppliers to standardize engineering solutions that previously required custom site-by-site work. By publishing detailed electrical and thermal specifications for a named GPU platform, Schneider is positioning modular, factory-assembled infrastructure as a credible alternative to conventional field engineering for the highest-density AI deployments.

  Schneider said it is continuing to develop higher-voltage DC power distribution technologies for future AI infrastructure generations beyond those addressed in Reference Design 115.
body_zh: |
  施耐德電氣針對以輝達 Vera Rubin GPU 平台為核心的高密度 AI 資料中心，發布了一份詳盡的工程參考設計，規格指出每個機架最高可消耗 227 千瓦（kW）——這一數字清楚呈現了目前驅動全產業基礎設施重新設計的供電密度急劇攀升趨勢。該公司於 10 月 21 日在柏林 NVIDIA GTC 大會上，正式推出這份名為「RapidScale Modular Data Center Reference Design 115」的設計方案。

  此參考設計適用於 10 至 20 百萬瓦（MW）規模的設施，依循 ANSI 標準建構，可用性目標設定為 Tier III 等級。Tier III 是一種資料中心分類標準，意指設施可在不中斷 IT 系統運作的情況下，對任一電力或冷卻元件進行維護。

  已公布的範例設計以一個「部署單元」（deployment unit）為核心——即一個自給自足的基礎設施區塊——包含四個可擴展的子單元。每個子單元圍繞一組搭載 1,008 顆 GPU 的輝達 Vera Rubin 叢集設計，使整個部署單元共計達 4,032 顆 GPU。這些 GPU 分布於 56 個 AI 運算機架中，另有 32 個機架專供網路設備使用。施耐德表示，該部署單元佔地約 3,114 平方公尺（約 33,518 平方英尺），分為 IT 空間與配套公用設施基礎設施兩部分，整體設施峰值總功耗約為 13.25 MW。

  ## 電力模式與容量取捨

  此設計文件定義了 Vera Rubin 機架的兩種不同運作模式，各自體現了原始運算效能與電力效率之間不同的取捨方式。

  在 Max-P（最大功耗）模式下，每個 AI 機架的功耗約為 227 kW，以追求峰值運算吞吐量為優先。在 Max-Q 模式下，每個機架的功耗降至約 188 kW，主要目標在於提升每瓦所產生的詞元（token）數量。詞元是大型語言模型輸出的基本單位。

  這兩種模式在設施整體層面上會產生明顯不同的結果。根據文件中列表的 Max-P 配置，56 個 AI 機架中有 42 個同時運作，包含網路設備在內的 IT 總需求功耗約為 10.4 MW。而 Max-Q 配置則讓全部 56 個機架以較低的單機架功耗運行，根據文件顯示，整體 IT 需求功耗合計約為 11.4 MW。

  兩種模式之間的差距反映了電氣設計上的一項結構性限制。該部署單元由四組 3.75 MW 的 RapidScale 供電套件供電——這些是工廠預組裝的電力配送與備用電力套件——採用 3+1 分散式冗餘配置。這意味著三組供電套件承載正常的 IT 負載，第四組則作為應對故障或維護的備援。在 Max-P 配置中，較高的單機架功耗集中於 42 個機架，僅使用四組 IT 供電套件中的三組；在 Max-Q 配置中，較低的單機架功耗分散至全部 56 個機架，則使用全部四組供電套件。

  施耐德的文件指出，運營商在選擇配置時，必須在峰值運算效能與所保留的電力冗餘程度之間做出權衡。該公司亦描述了當額外電力容量充足時，可增加 Max-P 機架數量的配置方式，以及在維護或設備故障情境下縮減機架數量的配置方案。

  ## 電氣架構

  四組 IT 供電套件中，每組均包含一個 5,000 安培的 QED-2 配電盤、三組並聯的 1,250 kW Galaxy VXL 不斷電系統（UPS），以及相關配電基礎設施。UPS 為電池備援系統，可在短暫市電中斷期間維持伺服器運作，在額定負載下可提供五分鐘的備援時間。

  AI 機架以 480 伏特交流電（AC）供電；網路設備則採用 415V 交流電配電。施耐德表示，公司正在開發用於未來 AI 基礎設施的高壓直流電（DC）技術，但第 115 號參考設計並未採用 800V 直流電電氣架構。

  另有獨立的 2.5 MW 供電套件，以 2N——即完全冗餘、具備兩條獨立迴路——的電氣架構為機械系統供電，包括為關鍵冷卻泵浦及配電單元提供 UPS 支援。

  ## 液冷系統承擔 96% 的機架散熱

  此熱管理設計反映了單靠空氣來管理每機架 227 kW 熱量的困難程度。施耐德的參考設計預設，液冷系統可移除液冷機架所產生約 96% 的熱量，其餘部分則由傳統空氣冷卻基礎設施處理。

  Motivaiar 的液對液冷卻液配送單元（CDU）將運算設備連接至高溫冷卻迴路，施耐德規格指定供水溫度約為攝氏 42 度（華氏 108 度）、回水溫度約為攝氏 52 度（華氏 126 度）。另有獨立的冷凍水系統，以約攝氏 18 度（華氏 64 度）的冷凍水供應給 Uniflair 風牆，用於管理機架殘餘熱量及其他空冷設備。

  高溫液冷迴路的重要性在於，它允許在相當大比例的散熱負荷上使用乾式冷卻器（dry cooler）——即直接將熱量排放至戶外空氣的熱交換器——並在戶外氣溫需要時，以利用水分蒸發的絕熱冷卻（adiabatic cooling）作為輔助。這種方式可減少甚至消除對機械式冷水主機的依賴，進而降低額外的電力消耗。

  施耐德模擬了年化電力使用效率（PUE）——這是一個衡量設施總功耗中有多少用於 IT 設備、相對於冷卻和照明等支援用電的比率，理論最佳值為 1.0——在針對舊金山與達拉斯的模擬條件下，PUE 約為 1.1。該公司特別說明，這些數據為工程預測值，並非實際測量結果，且表示實際表現將取決於氣候條件、設備配置及工作負載。

  ## 工廠組裝與現場施工並行推進

  第 115 號參考設計將預製供電套件、液冷設備、IT 機房模組、配電基礎設施及管理軟體整合於單一工程框架之下。施耐德的文件將此設計定位為，並非取代傳統資料中心建築物的方案，而是一種將預製設備套件納入更大規模建設計畫的方式，使工廠組裝能與現地開發工程同步進行。

  對於分多期興建大型園區的開發商而言，施耐德的論點是：將建築物內的基礎設施加以標準化，能讓各期工程在運算硬體世代更迭時，更易於複製、協調與完工驗收。

  另外，施耐德與 Compass Datacenters 合作進行的一項研究——兩家公司於 2025 年 9 月共同宣布推出一款 EcoStruxure 白色空間模組——記錄了透過預製模組在特定現場安裝作業上所實現的縮減成效。該研究完整結果的相關資料，在本文發稿時尚未完整公開。

  ## 產業意義

  第 115 號參考設計所規格的 227 kW 最大機架功耗，相較於兩年前主導資料中心設計的機架密度，標誌著一次顯著的躍升，也清楚呈現了 AI GPU 叢集正如何驅動基礎設施供應商，將過去需要逐站客製化的工程解決方案加以標準化。藉由發布針對特定 GPU 平台的詳細電氣與熱管理規格，施耐德正將模組化、工廠預製的基礎設施，定位為最高密度 AI 部署中傳統現場工程的可行替代方案。

  施耐德表示，公司將持續開發用於第 115 號參考設計所涵蓋世代以外、未來 AI 基礎設施世代的高壓直流電力配送技術。
date: "2026-11-18"
source_published: "2026-11-16T16:25:19.464Z"
category: "compute"
secondary_categories: ["mep"]
region: []
vendor: ["Motivair", "Nvidia", "Schneider Electric"]
trust:
  score: 3
  reasoning: "Single source: Schneider Electric's AI Factory Strategy Moves Beyond the Modular Data Hall (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/design/article/55414793/schneider-electrics-ai-factory-strategy-moves-beyond-the-modular-data-hall"
    title: "Schneider Electric's AI Factory Strategy Moves Beyond the Modular Data Hall"
    trust: 3
    type: primary
    published_at: "2026-11-16T16:25:19.464Z"
---
