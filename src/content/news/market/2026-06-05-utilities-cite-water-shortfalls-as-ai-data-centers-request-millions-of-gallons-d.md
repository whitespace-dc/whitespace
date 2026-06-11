---
title_en: "Utilities Cite Water Shortfalls as AI Data Centers Request Millions of Gallons Daily"
title_zh: "AI資料中心日需數百萬加侖，各地公用事業坦言水源告急"
summary_en: "Municipal water systems are emerging as a primary siting constraint for AI data centers, with utilities in Georgia and Virginia citing insufficient supply capacity to meet cooling demands from proposed campuses requesting up to 8 million gallons per day. Texas's draft 2027 state water plan projects existing statewide supplies could decline roughly 10% by 2080, with an estimated $174 billion in new water infrastructure needed over the next 50 years."
summary_zh: "美國喬治亞州與維吉尼亞州的供水機構，以供水能力不足為由，相繼拒絕或質疑大型AI資料中心園區的申請，這些園區每日需水量最高達800萬加侖。德州2027年水資源計畫草案同時示警，全州供水量至2080年可能萎縮約10%，未來50年恐需投入逾1,740億美元興建水利基礎設施，方能因應人口與資料中心雙重成長的需求。"
body_en: |
  Water availability is emerging as a primary constraint on artificial intelligence data center siting, with utilities in Georgia and Virginia citing insufficient capacity to accommodate cooling demands from proposed large-scale AI campuses, and Texas projecting a multi-decade gap between water supply and combined population and data center growth.

  A proposed Virginia data center campus filed utility-services documents requesting up to 2 million gallons per day (MGD) of water capacity for its initial deployment, with future demand reaching as much as 8 MGD. The filing acknowledged that the project's projected demand exceeded existing water and wastewater planning assumptions and required "continuous evaporative cooling to protect sensitive equipment required for essential operations," according to Data Center Knowledge.

  In Newton County, Georgia, a water authority representative responded to a proposed 6 MGD request from a data center project by stating: "We just don't have the water." The remark underscores a constraint that is separate from electrical access: securing grid interconnection does not guarantee sufficient cooling water, wastewater treatment capacity, or municipal support.

  ## Texas projects a long-term supply gap

  Texas's draft 2027 State Water Plan projects existing statewide water supplies could decline roughly 10% by 2080, even as the state's population rises more than 50%. The state estimates roughly $174 billion in water infrastructure investment may be required over the next 50 years to meet growing demand. The plan frames water planning around drought-of-record conditions, which are precisely the conditions that intensify cooling-water stress from large AI clusters, yet it does not explicitly model AI-related data center demand as a discrete planning category, according to Data Center Knowledge.

  ## Why GPU clusters stress water systems

  Water systems were not engineered for dense AI hardware operating at massive thermal scale. Nearly all server energy converts into heat that must be removed from the facility, researchers from the University of California, Riverside wrote in a recent paper on AI's water footprint. Modern GPU systems pack far more thermal density into each rack than traditional enterprise hardware, and operators increasingly deploy direct-to-chip (D2C) liquid cooling, rear-door heat exchangers, chilled-water loops, and large cooling distribution systems to move heat efficiently, pulling pumps, cooling towers, treatment systems, chillers, and reclaimed-water systems directly into the thermal management chain.

  The shift to liquid cooling does not eliminate the fundamental heat-rejection burden. "Getting the heat from the data hall is simply concentrating it and moving it somewhere else," Justin Blumling, chief marketing officer at data center thermal monitoring firm EkkoSense, told Data Center Knowledge. "Liquid cooling changes how heat is transported, but the facility still must reject it to the outside environment."

  ## Energy-water trade-offs in cooling design

  Cooling architecture forces a direct trade-off between electricity demand and water consumption. Evaporative systems, which use water evaporation to shed heat, can reduce electricity demand while increasing direct water consumption. Dry or adiabatic cooling reduces water dependency but can raise energy overhead during extreme heat events.

  "Cooling towers are the worst water-wise; dry or adiabatic cooling is the best," said Vaibhav Bahadur, an associate professor at the University of Texas at Austin who studies thermal systems, liquid cooling, and water use in AI infrastructure, in an interview with Data Center Knowledge. "This has to be contrasted with energy use as well."

  Shaolei Ren, an associate professor at UC Riverside who co-authored the water-footprint paper, argued in recent public commentary that evaporative-assist cooling can reduce peak cooling power demand by 20% to 60% during extreme summer conditions, effectively shifting part of the infrastructure burden from the electric grid onto municipal water systems. Ren also identified what he described as "two distinct water dependencies" for data centers: direct cooling demand and the off-site water burden tied to electricity generation at the power plant level.

  ## Direct vs. indirect water consumption

  The distinction between on-site and off-site water use is becoming more consequential as operators pursue behind-the-meter natural gas generation to bypass constrained grid interconnection. While on-site generation can reduce dependence on transmission infrastructure, it may also increase regional water consumption depending on generation technology and cooling design.

  The UC Riverside paper notes D2C liquid cooling systems themselves "do not evaporate or consume water." But even closed-loop systems, where coolant circulates through sealed pipes and cold plates rather than evaporating inside the server environment, do not eliminate the facility-level heat-rejection burden, which can shift water demand to cooling towers, evaporative-assist systems, or the power generation chain.

  A 2025 review paper from researchers affiliated with Lawrence Berkeley National Laboratory found workload-level water use can vary by more than 10,000-fold depending on cooling architecture, electrical-grid water intensity, server utilization, climate zone, and efficiency. "While direct water use will go down with adoption of better technologies and optimization, indirect water use is likely to be a big issue," Bahadur said.

  ## Performance gains driving liquid cooling adoption

  Even as water consumption draws scrutiny, operators are accelerating liquid cooling deployments because dense AI workloads increasingly overwhelm traditional air-cooling systems. A benchmarking study comparing liquid-cooled and air-cooled eight-GPU Nvidia H100 servers found the liquid-cooled configuration maintained GPU temperatures between 41 and 50 degrees Celsius (106 to 122 degrees Fahrenheit) under peak load, compared with 54 to 72 degrees Celsius (129 to 162 degrees Fahrenheit) for the air-cooled system. The lower temperatures translated into roughly 17% higher throughput during sustained stress testing. The liquid-cooled system also consumed approximately 1 to 1.5 kilowatts less node-level power under high utilization while maintaining equal or better training performance.

  Blumling noted that monitoring granularity becomes more important as rack densities increase and GPU clusters operate closer to sustained maximum utilization. "The blast radius of a problem with AI racks, often running near maximum levels, could be greater," he said.

  ## Implications for siting and planning

  The convergence of municipal water limits, state-level supply projections, and energy-water trade-offs in cooling design is positioning water access as a co-equal siting factor alongside grid capacity for large AI campuses. The pattern mirrors what happened with electricity over the past two years, when utilities rewrote load forecasts and grid operators struggled under waves of interconnection requests as hyperscalers locked up substations and transmission access.

  Texas's draft 2027 State Water Plan does not yet model AI-related data center demand as a discrete planning category, a gap the plan will need to close as project scales continue to grow and drought-of-record planning assumptions come under additional pressure from dense GPU deployments.
body_zh: |
  水資源可得性正逐漸成為AI資料中心選址的首要制約因素。喬治亞州與維吉尼亞州的供水機構表示，現有供水能力已無法滿足大型AI園區提案的冷卻需求；德州最新水資源計畫草案更預測，未來數十年間，全州供水量恐持續無法跟上人口成長與資料中心擴張的雙重壓力。

  維吉尼亞州一處資料中心園區提案，在送交公用事業申請文件時，要求初期部署階段提供每日最多200萬加侖（MGD）的供水能力，未來需求更可能攀升至每日800萬加侖。文件中坦承，該專案的預估需求已超出現有供水與廢水規劃假設的範疇，且設備「需要持續蒸發冷卻，以保護維持關鍵業務運作的敏感設備」，相關資訊由《Data Center Knowledge》報導。

  喬治亞州牛頓郡（Newton County）一處資料中心提案要求每日600萬加侖的供水量，當地水務局代表直接回應：「我們根本沒有這麼多水。」這句話道出了一個獨立於電力問題之外的現實困境——取得電網併網許可，並不代表同時擁有足夠的冷卻用水、廢水處理能力，或地方政府的支持。

  ## 德州預估長期供水缺口

  德州2027年州水資源計畫草案預測，即使全州人口將成長逾50%，現有供水量至2080年仍可能下滑約10%。德州估計，未來50年內可能需要約1,740億美元的水利基礎設施投資，方能因應日益增長的需求。此計畫以「歷史最嚴峻乾旱」情境作為水資源規劃基準，而這恰恰正是大型AI叢集冷卻用水壓力最為劇烈的時刻。然而，《Data Center Knowledge》指出，該計畫尚未將AI相關資料中心需求列為獨立的規劃項目。

  ## 為何GPU叢集對供水系統壓力如此之大

  現有供水系統並非為高密度AI硬體大規模散熱而設計。加州大學河濱分校研究人員在一篇探討AI水資源足跡的近期論文中指出，伺服器消耗的電能幾乎全數轉化為熱能，必須從機房中排出。現代GPU系統的每機架熱密度遠超傳統企業級硬體，業者也愈來愈多採用直達晶片（D2C）液冷、後門熱交換器、冷凍水迴路及大型冷卻分配系統，將幫浦、冷卻水塔、處理系統、冷水機組及回收水系統全數納入熱管理鏈中，以提升散熱效率。

  改用液冷並不能消除根本的熱排放負擔。資料中心熱管理監控公司EkkoSense行銷長賈斯汀·布盧姆林（Justin Blumling）向《Data Center Knowledge》表示：「把熱從機房帶走，只是把它集中起來、移到別處而已。液冷改變的是熱的傳輸方式，但設施仍然必須把熱排放到外部環境。」

  ## 冷卻架構中的能源與用水取捨

  冷卻架構的設計，直接涉及電力需求與耗水量之間的取捨。蒸發式系統利用水的蒸發來散熱，可降低電力需求，但會增加直接用水量；乾式或絕熱冷卻（adiabatic cooling）則減少對水的依賴，但在極端高溫天氣下可能推高能耗。

  德州大學奧斯汀分校研究熱力系統、液冷與AI基礎設施用水的助理教授瓦依巴夫·巴哈杜爾（Vaibhav Bahadur）接受《Data Center Knowledge》採訪時表示：「從用水角度來說，冷卻水塔最差；乾式或絕熱冷卻最好。但這必須同時考量能耗的面向。」

  加州大學河濱分校助理教授任少磊（Shaolei Ren）是前述水資源足跡論文的共同作者，他近期在公開評論中指出，蒸發輔助冷卻在夏季極端高溫期間，可將峰值冷卻電力需求降低20%至60%，實際上是將部分基礎設施壓力從電網轉嫁至市政供水系統。任少磊還點出資料中心存在「兩種截然不同的用水依賴」：一是直接冷卻用水需求，二是電廠發電層面的場外用水負擔。

  ## 直接與間接用水的差異

  隨著業者開始採用電錶後端（behind-the-meter）天然氣自發電，以繞過電網併網瓶頸，場內與場外用水之間的區別變得愈發關鍵。場內自發電雖可減少對輸電基礎設施的依賴，但視發電技術與冷卻設計而定，也可能增加區域整體用水量。

  加州大學河濱分校的論文指出，D2C液冷系統本身「不會蒸發或消耗水」。但即便是密閉迴路系統——冷卻液在密封管路與冷板中循環，而非在伺服器環境中蒸發——也無法消除設施層級的熱排放負擔，這部分用水需求可能轉移至冷卻水塔、蒸發輔助系統或發電鏈。

  勞倫斯伯克利國家實驗室（Lawrence Berkeley National Laboratory）附屬研究人員於2025年發表的一篇綜述論文發現，依冷卻架構、電網用水強度、伺服器使用率、氣候帶及效率等因素的不同，工作負載層級的用水量差異可超過一萬倍。巴哈杜爾表示：「儘管直接用水量會隨著更優良技術的普及與效率優化而下降，但間接用水量很可能才是更大的問題所在。」

  ## 液冷普及背後的效能驅動因素

  儘管耗水問題備受關注，業者仍在加速部署液冷方案，因為高密度AI工作負載已愈來愈難以靠傳統氣冷系統應付。一項針對液冷與氣冷八GPU輝達H100伺服器的基準測試比較發現，液冷架構在滿載運作時，GPU溫度維持在攝氏41至50度（華氏106至122度），而氣冷系統的GPU溫度則達攝氏54至72度（華氏129至162度）。較低的溫度在持續壓力測試中帶來了約17%更高的處理效能。液冷系統在高使用率下，節點層級功耗也減少了約1至1.5千瓦，同時維持了相當甚至更佳的訓練效能。

  布盧姆林指出，隨著機架密度持續提升、GPU叢集長期在接近最大使用率的狀態下運行，監控粒度的重要性也與日俱增。他說：「AI機架一旦出現問題，波及範圍往往更廣，因為這些機架通常接近滿載運行。」

  ## 對選址與規劃的影響

  市政供水限制、州級供水量預測，以及冷卻設計中的能源與用水取捨，三者正匯聚成一股合力，使水資源取得成為大型AI園區選址時與電網容量並列的關鍵考量因素。這個趨勢與過去兩年電力領域的發展如出一轍——當時公用事業公司相繼修訂負載預測，電網運營商在一波波的併網申請下疲於應付，超大規模業者（hyperscaler）搶佔變電站與輸電容量的大戰也正如火如荼地上演。

  德州2027年州水資源計畫草案尚未將AI相關資料中心需求列為獨立的規劃項目，然而隨著專案規模持續擴大，高密度GPU部署對「歷史最嚴峻乾旱」規劃假設帶來的衝擊也愈發沉重，這個規劃缺口勢必亟待補足。
date: "2026-06-04T18:17:04.742Z"
source_published: "2026-05-29T13:00:00.000Z"
category: "market"
secondary_categories: ["cooling"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Water Is the New Constraint for AI Data Centers (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/infrastructure/breaking-points-the-ai-boom-is-colliding-with-water-infrastructure"
    title: "Water Is the New Constraint for AI Data Centers"
    trust: 3
    type: primary
    published_at: "2026-05-29T13:00:00.000Z"
---
