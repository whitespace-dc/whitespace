---
title_en: "GMI Cloud Opens Taoyuan AI Factory, Cites Power Capacity as Limit on GPU Expansion"
title_zh: "GMI Cloud 桃園 AI 工廠啟用，電力容量成 GPU 擴充關鍵瓶頸"
summary_en: "GMI Cloud on Friday opened its AI Factory in Taoyuan, Taiwan to media, deploying three NVIDIA DGX SuperPOD GB300 clusters in a converted Taiwan Mobile data center and describing power supply, not floor space, as the binding constraint on further GPU expansion. A second phase adding approximately 3.5 more SuperPODs is scheduled for December 2026, with a third phase contingent on power efficiency improvements."
summary_zh: "GMI Cloud 週五正式對媒體開放其位於台灣桃園的 AI 工廠，廠內部署三套輝達 DGX SuperPOD GB300 叢集，前身為台灣大哥大所有的資料中心；公司指出，限制 GPU 持續擴充的關鍵瓶頸是電力供應而非樓地板面積，第二期預計 2026 年 12 月上線。"
body_en: |
  GMI Cloud on Friday opened its AI Factory in Taoyuan, Taiwan to media, deploying three NVIDIA DGX SuperPOD GB300 clusters in a converted Taiwan Mobile data center and describing power supply, not physical floor space, as the binding constraint on further GPU expansion.

  The four-story, 19,835-square-meter facility draws up to 25 megawatts (MW) from the grid, of which approximately 16 MW is allocated to IT equipment including GPUs, servers, and storage. The remainder powers cooling, air handling, and facility operations. Engineers leading the tour said that even with floor space remaining, no additional GPU hardware can be deployed once IT load approaches the 16 MW ceiling.

  GMI Cloud, a GPU cloud computing provider, announced in November 2025 a $500 million commitment to build AI infrastructure in Taiwan. Rather than constructing a new building, the company converted an existing data center owned by Taiwan Mobile in Taoyuan, a decision that shortened deployment timelines but also required integrating AI-grade hardware into infrastructure originally designed for conventional servers.

  ## Power access in a constrained northern Taiwan grid

  The Taoyuan location carries a grid-access advantage with direct bearing on AI data center siting in Taiwan. Taiwan Power Company (Taipower), the national utility, has applied more conservative power allocation policies to large data centers consuming more than 5 MW in areas north of Taoyuan, citing supply-and-demand conditions and transmission constraints on the northern grid. A facility that already holds high-capacity power allocation is therefore better positioned to deploy GPU-dense workloads than a competing greenfield site, according to GMI Cloud.

  ## Three SuperPODs in Phase 1, Phase 2 due in December

  The first phase deploys three NVIDIA DGX SuperPOD GB300 units. Each SuperPOD contains approximately 16 AI cabinets, for a combined first-phase total of roughly 48 AI cabinets. GMI Cloud said both Phase 1 and Phase 2 capacity have already been contracted by U.S. startups.

  Phase 2 is scheduled to come online in December 2026 and will add approximately 3.5 SuperPODs.

  A third phase has no confirmed timeline. GMI Cloud said expansion beyond the current footprint requires improvements in power use efficiency, and that the company will assess operating data from the first two phases as well as the power management capabilities of next-generation NVIDIA GPU hardware before proceeding. The company added it is evaluating software tools that would allow operators to monitor actual GPU power draw and workloads in order to raise compute output per megawatt without affecting customer jobs.

  ## Layered backup power designed to protect multi-day training runs

  The facility uses a three-tier power backup architecture whose design reflects the economics of GPU training workloads. Training runs can last several days; an abrupt power interruption forces a restart from an earlier checkpoint, making supply continuity a direct factor in compute utilization rates.

  The first tier is a bank of lithium-ion batteries on the second floor, configured in a 10+1 arrangement (ten units plus one redundant). At full facility load, the batteries provide an estimated six minutes of backup power. That window is not sized to sustain operations; it is designed to bridge the interval between a grid failure and the startup of generator power.

  The second tier is an uninterruptible power supply (UPS) system on the third floor. GMI Cloud described the UPS as the central coordinator of the backup sequence, managing voltage anomalies and the handoff from battery to generator power.

  The third tier is a diesel generator plant on the fourth floor, built to an N+1 redundancy standard: one generating unit beyond the minimum required to meet facility load. Generators cover both IT equipment and the cooling and mechanical infrastructure required to sustain it. At the full 25 MW load, existing fuel tanks support more than 24 hours of continuous operation, the company said, with external fuel resupply arrangements in place for extended outages.

  Power equipment, including transformers, batteries, and UPS units, is distributed across the building rather than concentrated in a single area to reduce single-point-of-failure exposure, according to GMI Cloud. The rooftop carries solar panels; the company did not disclose their capacity or contribution to total facility power.

  ## Liquid cooling handles 87% of heat load; legacy chilled water system creates efficiency gap

  The facility uses a hybrid cooling arrangement: approximately 87% of heat removal is handled by liquid cooling applied to GPU cabinets, with the remaining 13% managed by air cooling systems serving network and storage equipment, according to GMI Cloud.

  Each SuperPOD incorporates two large cylindrical thermal storage tanks that retain chilled coolant as a buffer. If power is interrupted and cooling pumps go offline, stored coolant continues flowing through GPU equipment long enough for the generator start sequence to complete, preventing thermal shutdown of active compute nodes.

  Converting a conventional data center to an AI factory introduced a cooling efficiency gap that GMI Cloud said it is working to close. The facility's original chilled water infrastructure, designed for air-cooled servers, supplies water at approximately 16 to 17 degrees Celsius. GPU liquid cooling circuits operate effectively at 35 to 38 degrees Celsius, a substantially higher supply temperature that would allow cooling systems to run more efficiently. Currently, the company uses coolant distribution units (CDUs) to exchange heat between the legacy chilled water circuit and the GPU cooling loop. Because the original chilled water system must continue serving other equipment, GMI Cloud cannot yet raise the supply temperature or operate the AI cooling circuit independently.

  ## PUE at 1.35, target 1.3

  GMI Cloud said the facility's current power usage effectiveness (PUE) is approximately 1.35. PUE is the ratio of total facility power consumption to IT equipment power consumption; a value of 1.0 would represent a facility where all consumed power goes to compute with none lost to overhead such as cooling or power conversion. The company said the target is 1.3. Greater operational independence for the liquid cooling circuit, including the ability to supply higher-temperature chilled water to AI cooling loops without affecting legacy equipment, could help reduce the gap, according to GMI Cloud.

  The Taoyuan facility reflects a broader shift in the competitive logic of AI-era data centers. GMI Cloud engineers framed the central design question as how much usable compute can be delivered per megawatt of power supply, a metric that now governs site selection, infrastructure investment, and power procurement in markets where grid access for large loads is constrained. The company said Phase 3 expansion planning will draw on operating data from the first two phases and on assessments of power management capabilities in next-generation NVIDIA GPU hardware.
body_zh: |
  GMI Cloud 週五正式對媒體開放其位於台灣桃園的 AI 工廠，廠內部署三套輝達 DGX SuperPOD GB300 叢集，設施前身為台灣大哥大所有的資料中心。公司表示，限制 GPU 進一步擴充的關鍵瓶頸在於電力供應，而非機房樓地板面積。

  這棟四層樓、占地 19,835 平方公尺的建築，最高可從電網引入 25 百萬瓦（MW）電力，其中約 16 MW 配置給 IT 設備，涵蓋 GPU、伺服器與儲存系統，其餘電力則用於冷卻、空調及設施維運。帶領媒體參觀的工程師表示，即便機房仍有剩餘空間，一旦 IT 負載逼近 16 MW 上限，便無法再增設任何 GPU 硬體。

  GMI Cloud 是一家 GPU 雲端運算服務供應商，曾於 2025 年 11 月宣布投入 5 億美元在台灣建置 AI 基礎設施。公司並未自建新大樓，而是改裝台灣大哥大在桃園既有的資料中心，此決策雖縮短了部署時程，但也需要將 AI 等級硬體整合進原本為傳統伺服器設計的既有基礎設施。

  ## 受限的北台灣電網中，取得電力接入優勢

  桃園廠址的電網接入條件，對台灣 AI 資料中心的選址策略具有直接影響。台灣電力公司（台電）對桃園以北、用電量超過 5 MW 的大型資料中心，採取了更為保守的電力配額政策，原因在於北部電網在供需條件與輸電容量方面存在限制。GMI Cloud 指出，已持有大容量電力配額的廠址，在部署高密度 GPU 工作負載方面，較競爭對手的新建場地更具優勢。

  ## 第一期三套 SuperPOD，第二期預計 12 月上線

  第一期部署三套輝達 DGX SuperPOD GB300。每套 SuperPOD 配備約 16 個 AI 機架，合計第一期共約 48 個 AI 機架。GMI Cloud 表示，第一期與第二期的容量均已由美國新創企業簽約包租。

  第二期預計於 2026 年 12 月上線，屆時將新增約 3.5 套 SuperPOD。

  第三期目前尚無確定時程。GMI Cloud 表示，超出現有規模的擴充需仰賴電力使用效率的提升，公司將評估前兩期的運營數據，以及下一代輝達 GPU 硬體的電源管理能力，再決定是否推進。公司並補充，正在評估相關軟體工具，讓營運人員得以即時監控 GPU 實際功耗與工作負載，進而在不影響客戶作業的前提下，提升每百萬瓦的算力產出。

  ## 多層備援電力架構，確保多日訓練任務不中斷

  設施採用三層備援電力架構，其設計邏輯體現了 GPU 訓練工作負載的經濟特性。訓練任務往往需要連續數日才能完成；電力一旦驟然中斷，便須從較早的檢查點重新啟動，使供電連續性直接影響算力使用率。

  第一層是位於二樓的鋰電池組，採 10+1 配置（十組主機加一組備援）。在設施滿載情況下，電池組可提供約六分鐘的備援電力。此設計並非為了維持長時間運作，而是為了橋接電網故障至發電機啟動之間的時間間隔。

  第二層是三樓的不斷電系統（UPS）。GMI Cloud 指出，UPS 是整個備援切換流程的核心協調者，負責處理電壓異常，並管理從電池切換至發電機電力的交接程序。

  第三層是四樓的柴油發電機組，採 N+1 備援標準——即在滿足設施負載所需的最低機組數量之外，再多設置一組。發電機同時涵蓋 IT 設備，以及維持其運作所需的冷卻與機械基礎設施。公司表示，在 25 MW 滿載情況下，現有油槽可支持逾 24 小時的連續運作，並已安排外部燃油補給方案以應對長時間停電。

  GMI Cloud 表示，電力設備（包括變壓器、電池組與 UPS 系統）分散配置於建築各樓層，而非集中於單一區域，以降低單點故障風險。屋頂設有太陽能板，但公司並未揭露其容量或對設施總用電的貢獻比例。

  ## 液冷承擔 87% 熱負載，舊式冰水系統形成效率缺口

  設施採用混合冷卻方案：根據 GMI Cloud 說法，約 87% 的散熱工作由應用於 GPU 機架的液冷系統承擔，其餘 13% 則由服務網路與儲存設備的氣冷系統負責。

  每套 SuperPOD 配備兩個大型圓柱形蓄冷槽，用於儲存冷卻液作為緩衝。若電力中斷導致冷卻泵停機，儲存的冷卻液仍可持續流通於 GPU 設備，為發電機啟動序列爭取足夠時間，防止正在運行的算力節點因過熱而停機。

  將傳統資料中心改裝為 AI 工廠，帶來了冷卻效率上的落差，GMI Cloud 表示正致力縮小此一差距。設施原有的冰水基礎設施為氣冷伺服器而設計，冷卻水供水溫度約攝氏 16 至 17 度。GPU 液冷迴路的有效運作溫度為攝氏 35 至 38 度，較高的供水溫度理論上可讓冷卻系統以更高效率運行。目前，公司採用冷卻分配單元（CDU）在舊有冰水迴路與 GPU 冷卻迴路之間進行熱交換。由於原有冰水系統仍須服務其他設備，GMI Cloud 目前尚無法提高供水溫度，或讓 AI 冷卻迴路獨立運作。

  ## PUE 現為 1.35，目標降至 1.3

  GMI Cloud 表示，設施目前的電源使用效率（PUE）約為 1.35。PUE 是設施總用電量與 IT 設備用電量的比值；若 PUE 為 1.0，代表所有電力均用於算力，無任何電力耗損於冷卻或電力轉換等附屬設施。公司表示目標是將 PUE 降至 1.3。GMI Cloud 指出，若液冷迴路能獲得更高的運作自主性——包括在不影響舊有設備的前提下提高 AI 冷卻迴路的冰水供水溫度——將有助於縮小這一差距。

  桃園廠址折射出 AI 時代資料中心競爭邏輯的更廣泛轉變。GMI Cloud 工程師將核心設計命題定義為：每百萬瓦電力能夠交付多少可用算力——在大功率電網接入受限的市場中，這項指標如今主導著選址決策、基礎設施投資與電力採購。公司表示，第三期擴充規劃將參考前兩期的運營數據，並評估下一代輝達 GPU 硬體的電源管理能力。
date: "2026-10-31"
source_published: "2026-10-30T07:10:02.000Z"
category: "power"
secondary_categories: ["compute"]
region: ["Taiwan"]
vendor: ["Nvidia", "Taipower"]
trust:
  score: 3
  reasoning: "Single source: GMI Cloud展示在臺AI Factory設計，AI資料中心的新瓶頸不是機櫃，而是電力 (trust 3/5)."
sources:
  - url: "https://www.ithome.com.tw/news/180116"
    title: "GMI Cloud展示在臺AI Factory設計，AI資料中心的新瓶頸不是機櫃，而是電力"
    trust: 3
    type: primary
    published_at: "2026-10-30T07:10:02.000Z"
---
