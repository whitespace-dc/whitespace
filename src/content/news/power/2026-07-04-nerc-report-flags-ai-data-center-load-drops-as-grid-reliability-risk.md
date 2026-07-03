---
title_en: "NERC Report Flags AI Data Center Load Drops as Grid Reliability Risk"
title_zh: "NERC報告示警：AI資料中心負載驟降已成電網可靠度隱患"
summary_en: "NERC's 2026 State of Reliability report documents multiple 2025 incidents in which more than 1 gigawatt of AI data center demand disconnected during grid disturbances, establishing large computational facilities as an active reliability challenge for North American grid operators. The organization has issued new computational load modeling guidance and advanced standards work in response, while industry experts say utilities must now plan for how AI campuses behave during disturbances, not just how much power they consume."
summary_zh: "北美電力可靠度協會（NERC）最新報告記錄2025年多起逾1GW的AI資料中心需求在電網擾動瞬間斷線事件，將大型運算設施列為北美電網營運的主動風險；該組織已發布新的運算負載建模指引，並推進相關標準制定。"
body_en: |
  NERC's 2026 State of Reliability report documents multiple incidents in 2025 in which more than 1 gigawatt (GW) of AI data center demand disconnected within moments of transmission disturbances, establishing large computational facilities as an active reliability challenge for North American grid operators that requires new planning standards and operational coordination.

  The North American Electric Reliability Corporation documented the events in the report. A February 2025 event shed approximately 1,800 megawatts (MW) of data center load following a transmission fault; a June 2025 event involved roughly 1,300 MW. NERC also documented additional data center load reductions ranging from about 200 MW to more than 500 MW. The Electric Reliability Council of Texas (ERCOT) experienced nine cryptocurrency mining load-loss events exceeding 100 MW during the year.

  NERC found that the bulk power system remained reliable throughout 2025 but concluded the incidents signal a structural shift. "As the size of individual large load facilities increases and if large load facilities are located near one another, the sizes of these large load events will likely increase," the report states. "This could lead to measurable frequency or voltage stability issues."

  ## Why large data centers disconnect during disturbances

  The root cause is existing facility equipment. The Electric Power Research Institute (EPRI) said the events reflect a longstanding technical issue that has grown in significance as AI campuses have expanded.

  "The customer-initiated load reduction is due to the inability of existing equipment in data center facilities, both AI and non-AI, to ride through normally cleared grid disturbances," said Parag Mitra, senior principal technical leader at EPRI. "While in the past these events were manageable, the rapid increase in data center load capacity has magnified the issue to the point that it affects grid reliability."

  Mitra said utilities are making progress in developing computational load models but still lack both the detailed operational information needed to accurately represent large data centers and standardized methods for validating those models.

  ## Behavior, not just volume

  A concurrent IEEE Spectrum analysis argues that framing data center growth as an energy-volume problem obscures a more immediate operational concern: the behavior of AI workloads on the grid.

  The International Energy Agency (IEA) estimates data centers could account for 3 to 4 percent of total global electricity consumption within this decade, and utilities are adjusting long-term forecasts accordingly. Aggregate consumption figures, however, do not capture the temporal characteristics of AI compute demand.

  AI model training, which synchronizes large clusters of graphics processing units (GPUs), tensor processing units (TPUs), and specialized accelerators, creates highly dense, scheduled, and correlated demand. AI inference, the process of running a trained model to generate outputs, is more distributed and user-driven, making its demand profile less predictable. Both categories differ from conventional industrial loads in that they can ramp rapidly, producing step-changes in electricity consumption over intervals as short as milliseconds.

  Data center operators have deployed mitigation technologies, including batteries, power-conditioning systems, and supercapacitors, at the facility level. At the aggregate level, however, synchronized workload changes across multiple facilities can compress backup generation reserves, stress frequency-control mechanisms that maintain grid stability, and burden local transmission infrastructure.

  Vikhyat Chaudhry, co-founder, chief technology officer, and chief operating officer of Buzz Solutions, described the scale shift. "A single AI campus can now represent the equivalent demand of a city, which fundamentally changes how utilities plan, monitor, and operate the grid assets," he said.

  ## Geographic concentration amplifies risk

  The problem grows more acute when large campuses cluster in the same area. Regions with favorable conditions for data centers, including fiber connectivity, market access, tax incentives, and historically low electricity costs, have attracted disproportionate concentrations of compute infrastructure. Northern Virginia, often called "Data Center Alley," hosts the world's largest concentration of data centers and carries a substantial share of global internet traffic, according to the IEEE Spectrum analysis. Virginia-based utility Dominion Energy has repeatedly cited hyperscale demand growth in its integrated resource planning documents.

  A sudden, large demand change within a constrained geographic area can stress substations, transmission corridors, and local balancing operations even when the broader grid retains sufficient aggregate capacity. Cooling infrastructure compounds the effect: as compute intensity rises, cooling demand rises with it, often nonlinearly, meaning workload changes propagate through multiple layers of facility power consumption simultaneously.

  High-density compute clusters can also introduce power quality problems. Large concentrations of accelerators, switching power supplies, and high-frequency compute equipment generate harmonics and nonlinear load behavior that place additional stress on distribution infrastructure, the IEEE Spectrum analysis notes. Electrical transients from these systems can further burden localized power-conditioning equipment.

  ## Regulatory and modeling gaps

  Neither NERC nor the IEEE Spectrum analysis found existing planning frameworks adequate for loads of this type. Many grid planning rules were built around relatively stable industrial demand profiles; abrupt cycling of large loads has historically been constrained because it complicates balancing operations and increases equipment stress. Large-scale compute facilities do not fit neatly within those assumptions.

  NERC's response to the 2025 incidents has been active. During 2025 and early 2026, the organization issued industry alerts, developed guidance for modeling computational loads, advanced standards work, published a technical reference for representing data centers in transient stability studies, and endorsed the PERC1 performance model for characterizing data center behavior during disturbances. The report also highlights draft Rules of Procedure that would establish a new registered entity category for computational load facilities.

  Through EPRI's DCFlex initiative, utilities, hyperscale cloud providers, data center developers, and technology providers are working to improve operational coordination and flexibility as large computational loads continue to grow, according to the NERC report.

  Demand response mechanisms that allow certain workloads to be shifted or curtailed during periods of system stress are being explored by grid operators. Data center operators are separately examining flexible scheduling and behind-the-meter generation. Interconnection queues across the United States continue to expand significantly, but grid expansion timelines are measured in years rather than quarters, the IEEE Spectrum analysis notes.

  Chaudhry said earlier coordination between utilities and hyperscale developers, combined with better operational data sharing, will become increasingly important as new campuses connect to the grid.

  ## Conventional generation under additional strain

  NERC's report also identifies mounting strain on the conventional generation fleet. Weighted equivalent forced outage rates climbed to 9.2 percent in 2025, above the historical range of 7 to 8 percent. Coal plants accounted for the largest increase in unavailable generation, followed by combined-cycle natural gas units. Rather than a single weather-related event, NERC found a broader increase in outages throughout the year. The organization recommends that utilities and regulators consider whether reserve margin requirements should be increased to account for the reduced availability of conventional generation.

  ## What grid operators and planners must address

  NERC's assessment indicates that AI infrastructure is changing not just electricity forecasts but operational planning. Utilities historically focused on how much power large customers would consume; now planners must also model how computational loads respond during disturbances, assess the frequency and voltage effects of those responses, and coordinate operationally with facilities before they connect to the grid.

  Whether AI data centers ultimately become a greater reliability challenge or a more flexible grid resource will depend on how quickly utilities, hyperscalers, and standards bodies close the modeling, data-sharing, and operational gaps identified in the report. NERC's draft Rules of Procedure establishing a registered entity category for computational load facilities represent the most concrete near-term step toward that coordination.
body_zh: |
  ## NERC報告示警：AI資料中心負載驟降已成電網可靠度隱患

  NERC於其2026年《電網可靠度現況》報告中，詳細記錄2025年間多起AI資料中心需求在輸電擾動發生後瞬間斷線、合計超過1GW的事件，正式將大型運算設施列為北美電網營運者須面對的主動可靠度挑戰，並明確指出此一問題需要全新的規劃標準與跨業協調機制。

  北美電力可靠度協會（NERC）在報告中詳述各起事件：2025年2月的一次事件，因輸電線路故障導致約1,800MW的資料中心負載脫網；2025年6月的另一事件則涉及約1,300MW。此外，NERC亦記錄了數起規模約在200MW至逾500MW之間的資料中心負載縮減事件。德克薩斯州電力可靠度委員會（ERCOT）在同年亦發生九起加密貨幣挖礦設施負載損失事件，每次均超過100MW。

  NERC研判，整體電力系統在2025年全年仍維持可靠運轉，但上述事件已顯示出結構性的轉變。報告中指出：「隨著個別大型負載設施的規模持續擴大，且多座大型負載設施彼此鄰近集中，此類大規模負載事件的衝擊程度極可能進一步放大，並可能引發可量測的頻率或電壓穩定性問題。」

  ## 資料中心為何在電網擾動時斷線

  問題根源在於現有設施設備本身。電力研究院（EPRI）指出，這些事件反映出一個由來已久的技術問題，隨著AI園區規模不斷擴張，其重要性已大幅提升。

  EPRI資深首席技術專家帕拉格．米特拉（Parag Mitra）表示：「客戶端自主縮減負載，源於資料中心設施內現有設備——無論是AI或非AI用途——無法在電網正常清除擾動的過程中持續運行。過去此類事件尚在可控範圍內，但資料中心負載容量的快速增長，已將問題放大至足以影響電網可靠度的程度。」

  米特拉表示，電力公司在建立運算負載模型方面雖有進展，但目前仍缺乏精確模擬大型資料中心所需的詳細營運資訊，以及驗證這些模型的標準化方法。

  ## 關鍵在於行為特性，而非單純用電量

  同期發布的《IEEE Spectrum》分析文章則指出，若僅將資料中心成長定性為能源用量問題，將遮蔽一個更迫切的營運隱憂：AI工作負載對電網的行為影響。

  國際能源署（IEA）估計，資料中心在本十年內可能佔全球總電力消耗的3%至4%，各電力公司也正據此調整長期預測。然而，加總的用電量數字，並無法呈現AI運算需求在時間維度上的特性。

  AI模型訓練涉及大規模同步運行的圖形處理器（GPU）、張量處理器（TPU）與各類專用加速晶片，會產生高度密集、排程固定且高度相關的需求。AI推論——即運行已訓練模型以產生輸出的過程——則較為分散且由使用者驅動，需求曲線的可預測性相對較低。這兩類應用均與傳統工業負載有所不同：它們能夠快速攀升，在短至毫秒級的時間區間內造成電力消耗的階梯式驟變。

  資料中心業者已在設施層級部署電池、電力調節系統及超級電容器等緩解技術。然而在整體層面，多座設施的工作負載若同步變動，可能壓縮備用發電餘裕、衝擊維繫電網穩定的頻率控制機制，並加重當地輸電基礎設施的負擔。

  Buzz Solutions共同創辦人暨技術長兼營運長維克亞特．喬杜里（Vikhyat Chaudhry）如此描述規模的質變：「單一AI園區的需求規模，如今已可相當於一座城市的用電量，這從根本上改變了電力公司規劃、監控與操作電網資產的方式。」

  ## 地理集中加劇風險

  當大型園區在同一地區群聚時，問題將更形嚴峻。那些兼具光纖連線、市場准入、租稅優惠及歷史上電費低廉等優勢的地區，已吸引了不成比例的運算基礎設施聚集。北維吉尼亞州——人稱「資料中心走廊」——匯聚了全球最大規模的資料中心群，並承載全球互聯網流量中相當可觀的比重，《IEEE Spectrum》分析如是指出。維吉尼亞州電力公司道明能源（Dominion Energy）已在其多份整合資源規劃文件中，反覆提及超大規模需求的成長壓力。

  在地理範圍受限的區域內，需求若突然大幅波動，即便整體電網仍有足夠的聚合容量，也足以對變電站、輸電廊道及在地平衡操作造成壓力。冷卻基礎設施更進一步放大了這種效應：隨著運算密度提高，冷卻需求往往呈非線性上升，意味著工作負載的變化會同步波及設施內多個層次的電力消耗。

  高密度運算叢集還可能帶來電力品質問題。《IEEE Spectrum》分析指出，大量加速器、交換式電源供應器與高頻運算設備集中於一處，會產生諧波及非線性負載行為，對配電基礎設施造成額外壓力；這些系統產生的電氣暫態現象，亦可能進一步加重在地電力調節設備的負擔。

  ## 法規與建模缺口

  NERC與《IEEE Spectrum》分析均認為，現行規劃框架不足以因應此類負載。許多電網規劃規則是針對相對穩定的工業需求曲線所制定的；大型負載的驟然切換在過去之所以受到約束，正是因為這會使平衡操作複雜化並加速設備損耗。大規模運算設施並不符合上述假設前提。

  NERC對2025年各起事件的回應相當積極。在2025年至2026年初，該組織發布了業界警示、制定運算負載建模指引、推進標準制定工作、發布資料中心瞬態穩定性研究技術參考文件，並認可採用PERC1性能模型來描述資料中心在電網擾動期間的行為特性。報告也強調，草擬中的《程序規則》將為運算負載設施建立全新的登記實體類別。

  透過EPRI旗下的DCFlex計畫，電力公司、超大規模雲端服務商、資料中心開發商與技術供應商正攜手合作，隨著大型運算負載持續成長，共同改善營運協調能力與調度彈性，NERC報告對此予以肯定。

  電網營運者目前正在探索需量反應機制，以便在系統吃緊時段將部分工作負載轉移或縮減。資料中心業者亦正從自身角度研究彈性排程與場域內自備發電方案。全美互連申請佇列持續大幅擴張，但電網擴建所需時間以年計，而非以季度計，《IEEE Spectrum》分析如此點出現實落差。

  喬杜里表示，電力公司與超大規模開發商若能及早協調、輔以更完善的營運資料共享機制，隨著新園區陸續接入電網，這些工作將日益重要。

  ## 傳統發電機組承受額外壓力

  NERC報告同時點出傳統發電機組日益沉重的壓力。2025年，機組加權等效強迫停機率攀升至9.2%，高於歷史區間7%至8%的水準。燃煤電廠在無法供電的發電量中占比最大，其次為複循環天然氣機組。NERC發現，此次並非單一氣候事件所致，而是全年停機事件的廣泛增加。該組織建議電力公司與主管機關重新評估，是否應提高備轉容量要求，以因應傳統發電機組可用性下滑的現實。

  ## 電網營運者與規劃者須正視的課題

  NERC的評估顯示，AI基礎設施不僅改變了電力需求預測，也正在改變營運規劃的本質。電力公司過去聚焦於大型用戶將消耗多少電力；如今，規劃者必須同時建立運算負載在電網擾動時的反應模型、評估這些反應對頻率與電壓的影響，並在設施接入電網前就展開營運層面的協調。

  AI資料中心最終是成為更大的可靠度威脅，還是轉型為更具彈性的電網資源，取決於電力公司、超大規模業者與標準制定機構能以多快的速度，彌合報告中所指出的建模、資料共享與營運協調缺口。NERC草擬中的《程序規則》——為運算負載設施建立登記實體類別——是目前邁向此一協調目標最具體的近期行動。
date: "2026-07-04"
source_published: "2026-07-03T12:00:01.000Z"
category: "power"
secondary_categories: ["compute", "regulatory"]
updates: "power/2026-06-26-north-american-grid-forced-outage-rate-hits-92-as-coal-gas-reliability-falls"
region: ["United States"]
vendor: []
trust:
  score: 4
  reasoning: "Synthesized from 2 sources; lead How Data Centers Grid Instability Threatens Reliability (trust 4/5) plus 1 corroborating."
sources:
  - url: "https://spectrum.ieee.org/data-centers-grid-instability"
    title: "How Data Centers Grid Instability Threatens Reliability"
    trust: 4
    type: primary
    published_at: "2026-07-03T12:00:01.000Z"
  - url: "https://www.datacenterknowledge.com/energy-power-supply/nerc-flags-ai-data-center-grid-risks-in-report"
    title: "NERC Flags AI Data Center Grid Risks in Report"
    trust: 3
    type: corroborating
    published_at: "2026-07-03T09:00:00.000Z"
---
