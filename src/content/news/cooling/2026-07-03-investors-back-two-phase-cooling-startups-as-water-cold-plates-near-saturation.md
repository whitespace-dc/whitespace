---
title_en: "Investors back two-phase cooling startups as water cold plates near saturation"
title_zh: "投資人押注兩相冷卻新創，水冷板市場趨近飽和"
summary_en: "Johnson Controls and Legrand have taken strategic stakes in Accelsius, while Carrier has invested in ZutaCore, as two-phase direct liquid cooling draws renewed attention from facility vendors positioning for a post-water-cold-plate market. The moves come as AI rack densities approach and are expected to surpass 200 kW, straining the economics of incumbent water-based systems."
summary_zh: "Johnson Controls 與 Legrand 已入股 Accelsius，Carrier 則投資 ZutaCore，三家設施大廠押注兩相直接液冷技術，在水冷板市場趨近飽和之際搶先卡位。此波佈局發生在 AI 機架功率密度逼近並預計突破 200 千瓦的關鍵時刻。"
body_en: |
  ## Strategic investors move into two-phase cooling

  Strategic investors including Johnson Controls, Legrand, and Carrier have placed bets on two-phase direct liquid cooling (DLC) — a technology that removes heat by vaporizing a coolant rather than warming water — as the market for conventional water cold plates shows signs of saturation, according to Uptime Institute.

  Johnson Controls and Legrand have backed Accelsius, which uses a flow-boiling approach, while Carrier has invested in ZutaCore, whose system relies on pool boiling. In both cases, Uptime Institute says the logic is strategic positioning: the partnerships allow all parties to offer complete thermal solutions spanning cold plates, heat transport, and heat rejection across both technology cooling and facility loops.

  The investments arrive as rack power densities in AI training clusters are expected to surpass 200 kilowatts — a threshold that analysts and operators increasingly treat as a forcing function for liquid cooling adoption broadly. As recently as a few years ago, Uptime Institute notes, data center planners debated whether DLC was necessary at all; by 2026, the question for many has shifted to how much DLC capacity they will need and on what timeline.

  ## Water cold plates still dominate, but the segment is crowded

  Water cold plates — typically using a 25% propylene-glycol and water mixture known as PG25 — remain the overwhelmingly preferred DLC technology among IT vendors and operators. Uptime Institute attributes that preference to a long track record, broad component availability, well-understood material compatibility, and maintenance procedures familiar to staff already versed in chilled-water facility systems and water-cooled mainframes.

  Investment activity over the past year has reflected that dominance, Uptime Institute says. But the water cold plate segment is already saturated, giving strategic investors in adjacent facility markets less room to differentiate. Two-phase systems, by contrast, add differentiation and relevance, and open new opportunities in the IT supply chain — particularly with server manufacturers, who serve as a key channel for cold plate and coolant distribution unit (CDU) integration.

  ## How two-phase systems differ from water

  At the cold plate itself, two-phase systems are physically similar to water cold plates in form factor and placement on silicon packages such as CPUs and GPUs. The divergence begins beyond the cold plate: tube and hose sizing, manifold designs, and CDU architecture differ materially from water-based equivalents.

  The fundamental difference is the presence of vapor. In a two-phase system, part or all of the cooling capacity is delivered as latent heat — the energy absorbed when the coolant changes from liquid to gas at the heat source, making the cold plate function as an evaporator. Accelsius uses flow boiling, in which part of the cooling capacity is latent; ZutaCore uses pool boiling, in which all of it is. Uptime Institute says this mechanism can be advantageous in managing silicon hotspots — localized areas of extreme heat flux — by providing greater temperature stability and uniformity across a chip package.

  ## Three structural advantages cited for two-phase

  Uptime Institute identifies three factors that could allow two-phase coolants to challenge water's dominance as rack densities rise.

  **Flow rates and pumping energy.** Two-phase systems require comparatively lower flow rates despite the base liquid having a lower specific heat capacity than water. Nucleation — the onset of boiling — at the heat source addresses hotspots without requiring increased liquid replenishment across the entire cold plate, as water systems typically do. Uptime Institute expects this difference to grow more important as GPU thermal design power (TDP) surpasses 2 kilowatts per module and CPU TDP approaches 1 kilowatt per socket. Next-generation water-cooled rack systems, the organization says, will each require hundreds of liters of water per minute, along with larger pipes and kilowatts of pumping power to overcome fluid network pressure. At facility scale, two-phase cooling could offer significant infrastructure benefits by comparison.

  **Coolant quality and maintenance.** Water cold plate networks require fine particle filtration, corrosion and biogrowth inhibitors, and regular contamination checks. Errors or material quality failures can be expensive to remedy and disruptive to operations, particularly as DLC fluid networks scale to multiple megawatts covering dozens of racks. Positive-pressure water systems also carry leakage risk that can cause terminal damage to IT hardware components costing several thousands of dollars each and trigger hours of downtime; Uptime Institute notes that commercialization of negative-pressure water systems, such as those from Chilldyne, remains limited. Two-phase and other dielectric-based systems carry much reduced maintenance burden and overall risk, Uptime Institute says.

  **Free cooling opportunities.** Nvidia chief executive Jensen Huang drew industry attention early in 2026 when he discussed the technical feasibility of using 45-degree-Celsius (113-degree-Fahrenheit) supply water — a temperature that in many climates would allow operators to run cooling without mechanical compressors, using only dry or evaporative coolers. Uptime Institute notes several trade-offs that explain why most operators avoid that approach: it can create a capacity silo for Nvidia-based systems, may degrade computational speeds and accelerate component wear at higher operating temperatures, and places additional pressure on facility infrastructure to hold temperature stability during power interruptions. Two-phase systems can ease some of those trade-offs by physics: the high heat capacity of liquid-to-gas phase change keeps the spread between supply and return temperatures narrow, and nucleate boiling maintains temperature uniformity across silicon packages. That means two-phase systems can operate at higher supply temperatures — calibrated just below the coolant's boiling point, such as 50 degrees Celsius (122 degrees Fahrenheit) — without the same penalties that apply to water-cooled systems at equivalent supply temperatures.

  ## Operator sentiment shifting

  Uptime Institute's Cooling Systems Survey 2025 found that a greater share of data center operators reported considering two-phase systems for future deployments compared with prior surveys. The organization says many operators expect two-phase cold plates to become more attractive as IT densification continues and DLC deployments grow in scale.

  Broader adoption will depend on IT vendor support and the availability of multiple CDU sources — factors Uptime Institute identifies as critical for commercial success. The two-phase cold plate companies currently active in the market are working to build that supply chain, with the recent strategic investments from Johnson Controls, Legrand, and Carrier representing an early signal of facility-side industry alignment behind the technology.
body_zh: |
  ## 策略投資人進軍兩相冷卻領域

  Johnson Controls、Legrand 和 Carrier 等策略投資人已對兩相直接液冷（DLC）下注。這項技術透過將冷卻劑氣化而非加熱水來帶走熱量。Uptime Institute 表示，這一系列動態發生在傳統水冷板市場出現飽和跡象之際。

  Johnson Controls 和 Legrand 已共同投資 Accelsius，該公司採用流動沸騰技術；Carrier 則投資了 ZutaCore，其系統依賴池沸騰技術。Uptime Institute 指出，兩者的投資邏輯均屬策略卡位：這些夥伴關係讓各方得以提供完整的熱管理解決方案，涵蓋冷板、熱傳輸，以及橫跨技術冷卻迴路與設施迴路的熱排放。

  這些投資到來之際，AI 訓練叢集的機架功率密度預計將突破 200 千瓦（kW）——分析師與運營商愈來愈將這一門檻視為推動液冷廣泛普及的關鍵驅動力。Uptime Institute 指出，就在幾年前，資料中心規劃人員還在爭論 DLC 是否有採用必要；到了 2026 年，許多人的問題已轉變為：他們需要多大規模的 DLC 容量，以及應在何時展開建置。

  ## 水冷板仍居主導，但市場已趨擁擠

  水冷板——通常使用俗稱 PG25 的 25% 丙二醇與水混合液——在 IT 廠商與運營商之間仍是壓倒性的主流 DLC 技術。Uptime Institute 將這一偏好歸因於長期的使用紀錄、廣泛的元件供應、已充分理解的材料相容性，以及工作人員所熟悉的維護程序——這些人員本就具備冷凍水設施系統與水冷主機的操作經驗。

  Uptime Institute 表示，過去一年的投資活動反映了水冷板的主導地位。然而水冷板市場已趨飽和，使鄰近設施市場的策略投資人愈來愈難以差異化。相較之下，兩相系統帶來了差異化空間與市場相關性，並在 IT 供應鏈中開創了新機會——尤其是對伺服器製造商而言，他們是冷板與冷卻分配單元（CDU）整合的重要通路。

  ## 兩相系統與水冷的差異

  就冷板本身而言，兩相系統在外觀規格與在 CPU、GPU 等矽晶片封裝上的安裝位置，與水冷板十分相似。差異從冷板之後才開始顯現：管路與軟管的尺寸、集管設計，以及 CDU 架構，均與水基系統有實質差異。

  根本差異在於蒸氣的存在。在兩相系統中，部分或全部冷卻能力以潛熱形式提供——即冷卻劑在熱源處從液態轉為氣態時所吸收的能量，使冷板的功能如同一台蒸發器。Accelsius 採用流動沸騰技術，其中部分冷卻能力屬於潛熱；ZutaCore 採用池沸騰技術，其冷卻能力則全部來自潛熱。Uptime Institute 表示，這種機制在管理矽晶片熱點——即局部極端熱通量區域——方面具有優勢，能在晶片封裝上提供更高的溫度穩定性與均勻性。

  ## 兩相系統的三大結構性優勢

  Uptime Institute 指出三項因素，可能使兩相冷卻劑在機架密度持續攀升之際挑戰水的主導地位。

  **流量與泵送能耗。** 儘管基礎液體的比熱容低於水，兩相系統所需的流量仍相對較低。在熱源處的成核——即沸騰啟動——能在不需要像水系統那樣大幅增加整個冷板液體補充量的情況下解決熱點問題。Uptime Institute 預計，隨著 GPU 熱設計功耗（TDP）突破每模組 2 千瓦、CPU TDP 接近每插槽 1 千瓦，這項差距將愈發關鍵。該機構表示，下一代水冷機架系統每台將需要每分鐘數百公升的水，以及更大口徑的管路和數千瓦的泵送功率，以克服流體網路壓力。從設施整體規模來看，兩相冷卻可提供相當可觀的基礎設施效益。

  **冷卻劑品質與維護。** 水冷板網路需要精細的顆粒過濾、防腐蝕與抑制生物生長的添加劑，以及定期的汙染檢查。一旦出現失誤或材料品質問題，補救成本高昂且嚴重干擾運營，在 DLC 液體網路擴展至覆蓋數十個機架、達到數百萬瓦規模時尤為如此。正壓水系統還存在洩漏風險，可能對每件成本高達數千美元的 IT 硬體元件造成永久性損壞，並引發數小時停機；Uptime Institute 指出，負壓水系統（如 Chilldyne 的產品）的商業化程度目前仍相當有限。Uptime Institute 表示，兩相及其他介電質基系統的維護負擔與整體風險大幅降低。

  **自由冷卻機會。** 輝達執行長黃仁勳在 2026 年初引發業界關注，他討論了使用攝氏 45 度（華氏 113 度）供水的技術可行性——在許多氣候條件下，這一溫度可讓運營商僅使用乾式或蒸發式冷卻器，無需機械壓縮機即可運行冷卻系統。Uptime Institute 指出幾項取捨，說明了為何多數運營商對此做法敬而遠之：它可能為輝達架構的系統製造容量孤島，在較高運行溫度下可能降低運算速度並加速元件損耗，並在電力中斷期間對設施基礎設施維持溫度穩定帶來額外壓力。兩相系統在物理特性上能緩解部分取捨：液氣相變的高熱容量使供回液溫差維持在較窄範圍，而成核沸騰則在矽晶片封裝上維持均勻溫度。這意味著兩相系統能在更高的供液溫度下運行——調校至略低於冷卻劑沸點，例如攝氏 50 度（華氏 122 度）——且不會承受水冷系統在同等供液溫度下所面臨的相同代價。

  ## 運營商態度轉變

  Uptime Institute 的《2025 年冷卻系統調查》發現，與先前調查相比，有更高比例的資料中心運營商表示正考慮在未來部署中採用兩相系統。該機構表示，許多運營商預計，隨著 IT 密度持續提升、DLC 部署規模擴大，兩相冷板將愈來愈具吸引力。

  更廣泛的普及將取決於 IT 廠商的支援，以及多元 CDU 來源的可得性——Uptime Institute 將這些因素視為商業成功的關鍵。目前活躍於市場的兩相冷板廠商正積極建構這一供應鏈，Johnson Controls、Legrand 和 Carrier 近期的策略投資，則代表設施側產業率先對這項技術表態支持的早期信號。
date: "2026-07-03"
source_published: "2026-07-01T22:00:00.000Z"
category: "cooling"
secondary_categories: []
region: []
vendor: ["Accelsius", "Chilldyne", "Legrand", "Nvidia", "ZutaCore"]
trust:
  score: 3
  reasoning: "Single source: Investments back two-phase cooling as water cold plate successor (trust 3/5)."
sources:
  - url: "https://journal.uptimeinstitute.com/investments-back-two-phase-cooling-as-water-cold-plate-successor/"
    title: "Investments back two-phase cooling as water cold plate successor"
    trust: 3
    type: primary
    published_at: "2026-07-01T22:00:00.000Z"
---
