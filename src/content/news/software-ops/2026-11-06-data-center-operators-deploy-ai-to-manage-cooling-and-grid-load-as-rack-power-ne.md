---
title_en: "Data Center Operators Deploy AI to Manage Cooling and Grid Load as Rack Power Nears 1 MW"
title_zh: "機架功耗逼近1MW，業者以AI管控冷卻與電網負載"
summary_en: "The 2026 OCP Global Summit detailed machine-learning tools being applied to data center cooling, grid-load smoothing, and carbon-aware compute scheduling, as next-generation GPU rack power is projected to reach 600 kilowatts to 1 megawatt by 2027 and the IEA forecasts the sector's electricity use doubling to roughly 945 TWh by 2030."
summary_zh: "2026年OCP全球高峰會詳細介紹了應用於資料中心冷卻、電網負載管理及碳感知運算排程的機器學習工具；下一代GPU機架功耗預計於2027年達到600千瓦至1百萬瓦，國際能源總署則預測，資料中心業用電量將在2030年前約倍增至945兆瓦時。"
body_en: |
  The 2026 OCP (Open Compute Project) Global Summit detailed a set of machine-learning tools being applied to data center cooling, grid-load management, and carbon-aware compute scheduling, as next-generation GPU racks are projected to reach 600 kilowatts to 1 megawatt by 2027 and the International Energy Agency (IEA) forecasts the sector's electricity consumption roughly doubling to 945 terawatt-hours by 2030. Most of the tools described are early-stage, but OCP is developing formal specifications to standardize them across operators.

  The Summit organized its facility and energy sessions into two linked tracks — AI Open Data Center and AI Open DC: Power Distribution — with a single theme running through both: AI workloads are reshaping the data center from the chip outward, and the same machine-learning capability is being applied back onto the infrastructure to manage it.

  ## Rack density and the shift to liquid cooling

  The GPU's displacement of the general-purpose CPU has changed data center physics at the chip level. A single high-end GPU now draws 1,000 to 1,200 watts, rising each generation as advanced packaging concentrates heat into smaller areas, according to Summit presentations. The cumulative rack-level numbers are stark: an H100-class rack draws roughly 40 kilowatts (kW); a Blackwell GB200 rack draws about 120 kW; and Rubin-generation "Kyber" racks are projected at 600 kW to 1 megawatt (MW) by 2027.

  Air cooling cannot remove heat at those densities, making direct-to-chip liquid cooling or immersion cooling mandatory for high-end AI racks. That solves the thermal problem but creates an economic one: a cooling plant sized for peak load overcools the facility during lighter periods, wasting energy. The challenge is as much about cost as temperature — holding each chip within limit while spending the least energy as load shifts minute to minute.

  Predictive machine-learning models address that inefficiency. Dense sensor arrays feed algorithms that forecast thermal hotspots hours ahead and adjust fan speeds, cooling valves, and chilled-water flow before temperatures degrade, directing cooling to specific aisles rather than conditioning the full facility uniformly. In one hyperscale deployment cited at the Summit, reinforcement-learning agents co-optimizing chillers, flow rates, and fans reduced cooling energy by roughly 40 percent, moving power usage effectiveness (PUE) — the ratio of total facility power to IT load, where 1.0 represents perfect efficiency — toward 1.0.

  Meta's Summit session, "Managing Liquid Cooling at Scale," described the operational challenge: once liquid cooling is deployed across a large fleet, the hard part is the tooling — instrumenting valves and manifolds and automating responses under a single framework, which is the same telemetry infrastructure that predictive models require.

  Higher rack densities also force a rethink of electrical delivery. In the Summit keynote "Shifting to DC Power Distribution in Data Centers," ABB's Paolo Catapane and Eaton's Peter De Bock traced the escalation from 208-volt (V) single-phase distribution to 480-volt three-phase and then to 800-volt direct current (DC), arguing that DC distribution is the proven method for moving this much power into a small space without an unmanageable burden of copper cabling. OCP's Data Center Facility Power Distribution subproject is developing a companion standard — the DCF Power Distribution LVDC (low-voltage DC) white paper, version 1.1.0 — to standardize rack-level delivery toward 800 VDC.

  ## Grid interconnection and load volatility

  At campus scale, the volatility of AI workloads creates a problem distinct from their total size. As tens of thousands of GPUs synchronize for training, checkpoint, and go idle simultaneously, facility load can swing by a large fraction within seconds, creating frequency and voltage excursions on the grid. In their Summit session "Grid Interconnection Requirements for Large Loads," NVIDIA's Sai Somayajula and Mike Tu, with Equinix's Eric Mannarino, characterized AI campuses as capacitive, switched power-electronic loads — fundamentally different from the steady resistive loads that grid planners designed for. The presenters described emerging ride-through mandates requiring facilities to sustain stable draw for approximately 500 milliseconds in Ireland and one to two seconds in Finland, with performance demonstrated by simulation before grid energization, and identified the absence of a shared standard for characterizing that behavior as the gap to close.

  Because AI training schedules and job mixes drive the swings, the load is forecastable. Control-layer models shift deferrable batch and non-urgent compute into demand troughs, so the net campus draw rises and falls more gradually. Peak reductions of 15 to 25 percent have been reported at large facilities, according to the Summit source, and facilities can reduce deferrable load further during grid-stress events. In his session "Flexibility the Grid Can Count On," NVIDIA's Sean James argued that grid-flexible data centers can use interconnection capacity already on the network rather than waiting for new transmission build-out.

  Scheduling cannot respond quickly enough to catch the fastest transients, so the control layer pairs software with hardware. Battery energy storage systems (BESS) configured as uninterruptible power supplies (UPS) absorb millisecond-scale load steps and present a smoother draw profile to the upstream grid, supplying the ride-through that high-density systems require. Echion Technologies' Tyler Andrews and Proper Voltage's Drew Schaller presented in "Path to the Megawatt Rack" a symmetric, high-power UPS design built on high-charge-rate battery chemistry for this application.

  OCP is formalizing the terms under which AI facilities interact with grids under stress. Google's Mike Della Penna and Ashish Upreti presented a version-one Interface Specification Between Hyperscalers and Utility Grid for Disturbance Performance, co-signed by Meta and NVIDIA, covering voltage ride-through requirements, active-power recovery, and facility coordination procedures. The OCP Energy project is separately developing OCP-Ready Requirements for Energy Storage Systems to standardize the storage that buffers those transients — the subject of EPC Power's Jason Barmann in "Enabling Grid Compliant Data Center Growth Through Advanced Energy Storage."

  ## Demand at the system level

  The demand trajectory framing these discussions is rapid. The IEA projects data-center electricity consumption roughly doubling to about 945 TWh by 2030, representing close to 3 percent of projected global electricity demand. The North American Electric Reliability Corporation's (NERC) 2025 Long-Term Reliability Assessment raised its ten-year US summer peak-demand forecast by approximately 224 gigawatts (GW), attributing most of that increase to new data centers.

  Total demand growth is a generation and policy question beyond any single operator's control, but the Summit's programming focused on the narrower set of decisions that are within operators' reach: when and where load lands. Google's Amber Huffman and Tom Garvens addressed that question in their session "From Chip to Grid," describing how compute scheduling interacts with grid conditions and available capacity.

  ## What the Summit signals for the industry

  The pattern across all three layers — rack, campus, and grid — is consistent: AI workloads have outpaced the infrastructure assumptions built into cooling systems, grid interconnection standards, and power delivery specifications. Machine-learning tools are being deployed to close those gaps from the inside, and the Summit framing is explicit that the same intelligence driving the load can govern the infrastructure carrying it.

  For the industry, the OCP specifications under development — the LVDC power delivery standard, the hyperscaler-utility disturbance-performance interface, and the ESS requirements — represent an effort to convert individual operator deployments into shared norms that any facility can implement.

  The concrete near-term marker is the Rubin-generation rack arriving at 600 kW to 1 MW by 2027, a power density at which all three layers — predictive thermal management, DC power delivery, and grid-coordinated load and storage — will need to operate simultaneously.
body_zh: |
  2026年OCP（開放運算計畫）全球高峰會詳細介紹了一套應用於資料中心冷卻、電網負載管理及碳感知運算排程的機器學習工具。下一代GPU機架功耗預計於2027年達到600千瓦至1百萬瓦，國際能源總署（IEA）則預測，資料中心業的用電量將在2030年前約倍增至945兆瓦時（TWh）。這些工具目前多數仍處於早期階段，但OCP正著手制定正式規格，以期在各營運業者之間建立統一標準。

  此次高峰會將設施與能源議程分為兩大互相串聯的主題軌道——「AI開放資料中心」與「AI開放資料中心：電力配送」——並貫穿同一核心思想：AI工作負載正從晶片層面向外重塑資料中心，而同樣的機器學習能力也正被反過來部署至基礎設施管理之上。

  ## 機架密度提升與液冷轉型

  GPU取代通用CPU一事，從晶片層面徹底改變了資料中心的物理特性。根據峰會簡報，單顆高階GPU目前耗電量已達1,000至1,200瓦，且隨著先進封裝技術將熱量集中於更小面積，每一代產品的功耗持續攀升。累計至機架層級，數字更是觸目驚心：H100等級機架約耗電40千瓦（kW）；Blackwell GB200機架約達120千瓦；Rubin世代的「Kyber」機架則預計於2027年攀升至600千瓦至1百萬瓦（MW）。

  在如此高密度的情況下，氣冷已無力移除熱量，高階AI機架因此必須採用直接晶片液冷或浸沒式冷卻。這雖然解決了熱管理問題，卻帶來了另一項經濟難題：依尖峰負載設計的冷卻設備，在輕負載期間會對設施過度冷卻，徒然浪費能源。這項挑戰不只是溫度問題，更攸關成本——如何在負載每分每秒不斷移動的情況下，以最少能源讓每顆晶片保持在限制範圍內。

  預測型機器學習模型正是為了解決這種低效率而生。高密度感測器陣列將資料饋入演算法，提前數小時預測熱點，並在溫度惡化之前調整風扇轉速、冷卻閥門及冷凍水流量，將冷卻資源精準導向特定走道，而非對整個設施進行一視同仁的均勻調節。峰會引述的某超大規模部署案例顯示，同時最佳化冷凍機、流量及風扇的強化學習代理，將冷卻能耗降低了約40%，使電源使用效率（PUE）——即設施總用電量與IT負載的比值，1.0代表完美效率——趨近於1.0。

  Meta在峰會發表的議程「大規模管理液冷」描述了這項運營挑戰：一旦液冷系統大規模部署於龐大的機群，最難的部分在於工具——為閥門與歧管安裝儀器，並在統一框架下自動化應對，而這正是預測模型所需的相同遙測基礎設施。

  機架密度提升也迫使電力配送方式必須重新思考。在峰會主題演講「資料中心轉向直流電配電」中，ABB的Paolo Catapane與伊頓（Eaton）的Peter De Bock梳理了從208伏（V）單相配電到480伏三相、再到800伏直流電（DC）的演進歷程，論證直流配電是在不形成難以管理的銅纜負擔的前提下，將如此龐大電力送入有限空間的成熟方案。OCP的資料中心設施電力配送子計畫正在制定配套標準——《DCF電力配送低壓直流（LVDC）白皮書》1.1.0版——以規範機架層級配電朝800 VDC方向標準化。

  ## 電網互連與負載波動

  在園區規模層面，AI工作負載的波動性所帶來的問題，有別於其總量大小本身。當數以萬計的GPU同步進行訓練、寫入檢查點，然後同時閒置時，設施負載可能在數秒內劇烈起伏，在電網上造成頻率與電壓偏移。輝達的Sai Somayajula與Mike Tu，以及Equinix的Eric Mannarino，在峰會議程「大型負載的電網互連需求」中，將AI園區定性為電容性、交換式電力電子負載——與電網規劃者原先設計所針對的穩態電阻性負載有著根本上的不同。簡報者描述了各地新興的穿越要求，包括愛爾蘭要求設施在約500毫秒內維持穩定用電、芬蘭則要求一至兩秒，且須在電網通電前透過模擬加以驗證；並指出目前缺乏用於描述此類行為的共同標準，是亟待填補的缺口。

  由於AI訓練排程與工作組合主導了這些起伏，負載是可預測的。控制層模型將可遞延的批次處理與非緊急運算排程至需求低谷，使園區整體用電量的起伏更為平緩。峰會資料顯示，大型設施已報告尖峰削減幅度達15至25%，且在電網壓力事件期間可進一步削減可遞延負載。輝達的Sean James在其議程「電網可仰賴的彈性」中指出，具備電網彈性的資料中心可善用現有電網上的互連容量，無須等待新輸電線路的建設完工。

  排程雖能平滑較緩的變動，卻無法快速回應最急劇的瞬態，因此控制層需將軟體與硬體結合。設定為不斷電系統（UPS）的電池儲能系統（BESS）可吸收毫秒級的負載突變，向上游電網呈現更平滑的用電曲線，提供高密度系統所需的穿越能力。Echion Technologies的Tyler Andrews與Proper Voltage的Drew Schaller在「通往百萬瓦機架之路」中，發表了一款以高充電率電池化學技術為基礎、針對此應用場景設計的對稱式高功率UPS。

  OCP正在規範AI設施在電網壓力下與電網互動的條件。Google的Mike Della Penna與Ashish Upreti發表了《超大規模業者與公用事業電網擾動性能介面規格》第一版，由Meta與輝達共同連署，涵蓋電壓穿越要求、主動功率恢復，以及設施協調程序。OCP能源計畫也另行制定「OCP儲能系統就緒要求」，以規範緩衝上述瞬態的儲能設備——此即EPC Power的Jason Barmann在「透過先進儲能實現符合電網規範的資料中心成長」議程中所探討的主題。

  ## 系統層面的需求

  為上述討論奠定框架的需求成長軌跡極為迅速。IEA預測，資料中心用電量將在2030年前倍增至約945兆瓦時（TWh），約佔全球預測用電量的3%。北美電力可靠性公司（NERC）2025年《長期可靠性評估》將美國未來十年夏季尖峰需求預測上調約224吉瓦（GW），並將大部分增量歸因於新設資料中心。

  整體需求成長是任何單一業者都無法掌控的發電與政策問題，但此次峰會的議程聚焦於業者自身能夠掌握的較小決策範疇：負載在何時、何地落地。Google的Amber Huffman與Tom Garvens在其議程「從晶片到電網」中探討了這一問題，說明運算排程如何與電網條件及可用容量相互作用。

  ## 峰會對產業的指標意義

  在機架、園區與電網三個層面，呈現出一致的模式：AI工作負載已超越原先嵌入冷卻系統、電網互連標準及電力配送規格的基礎設施假設。機器學習工具正從內部被部署來填補這些缺口，而峰會的論述框架也明白指出：驅動負載的同一套智慧，正可用來治理承載它的基礎設施。

  對整個產業而言，OCP正在制定的規格——低壓直流電力配送標準、超大規模業者與公用事業擾動性能介面，以及儲能系統要求——代表著一項努力：將各家業者的個別部署，轉化為任何設施都能實施的共同規範。

  近期最具體的里程碑，是Rubin世代機架預計於2027年以600千瓦至1百萬瓦的功率密度面世。在如此功率密度下，三個層面——預測式熱管理、直流電力配送，以及電網協調的負載與儲能——將必須同時協同運作。
date: "2026-11-06"
source_published: "2026-11-05T13:42:31.000Z"
category: "software-ops"
secondary_categories: ["cooling", "power"]
region: []
vendor: ["ABB", "Eaton", "Equinix", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: The Infrastructure Challenges of AI Data Centers and How AI Could Help Manage Them (trust 3/5)."
sources:
  - url: "https://www.opencompute.org/news/the-infrastructure-challenges-of-ai-data-centers-and-how-ai-could-help-manage-them/"
    title: "The Infrastructure Challenges of AI Data Centers and How AI Could Help Manage Them"
    trust: 3
    type: primary
    published_at: "2026-11-05T13:42:31.000Z"
---
