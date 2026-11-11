---
title_en: "Jabil executive says liquid cooling now governs entire AI rack design as densities top 100 kW"
title_zh: "捷比高層：液冷已全面主導AI機架設計，密度突破100 kW"
summary_en: "Rack power densities exceeding 100 kW in current AI configurations have forced liquid cooling from a niche technology into a system-level design requirement that shapes how racks are engineered, manufactured, tested, and deployed, Jabil's senior director of technology strategy said. Industry roadmaps project further increases to several hundred kilowatts per rack, with 2027 described as an inflection point."
summary_zh: "捷比（Jabil）智慧基礎設施部門高層表示，AI機架功率密度已超過100 kW，液冷技術已從利基選項躍升為影響機架設計、製造、測試與部署的系統級必要條件；業界路線圖預估2027年將是關鍵轉折點。"
body_en: |
  Liquid cooling has become a foundational system-level requirement for AI infrastructure rather than a component-level option, Matt McGuff, Senior Director of Technology Strategy and System Architecture at Jabil's Intelligent Infrastructure division, said in a published interview. The shift is driven by rack power densities that have already surpassed 100 kW in current AI deployments, with roadmaps projecting several hundred kilowatts and potentially 1 megawatt per rack.

  xPU power consumption — a term covering graphics processing units (GPUs), central processing units (CPUs), and custom accelerators — has risen from a few hundred watts per chip to more than 1 kW, McGuff said, with next-generation designs reaching 5 kW per chip. Rack densities have climbed in parallel, from 10–20 kW in earlier generations to well over 100 kW in today's AI racks.

  "Liquid cooling is not just changing how we cool a server," McGuff said. "It is changing how we design, manufacture, test and deploy the entire rack."

  ## How rack-level cooling changes design and manufacturing

  At densities above 100 kW, cooling can no longer be treated as a standalone subsystem, McGuff said. Effective rack design now begins with the data center facility: how water is delivered, available flow rates, connection requirements, coolant type, and the location and specification of the coolant distribution unit (CDU), the equipment that conditions and circulates fluid through the rack. At the rack level, engineers must address flow balancing, pressure drop, leak detection, and the system's response if a leak occurs.

  Manufacturing lines require facility water and equipment to fill, purge, and service coolant loops. Testing now covers pressure drop, leak detection, flow balancing across manifolds, and coolant cleanliness — microchannel cold plates, which transfer heat from chips to coolant through fine internal passages, are sensitive to particulates. Full-power thermal testing under real or simulated workloads follows.

  The risk profile has shifted upstream, McGuff said. Problems that might once have been resolved on site must be eliminated before the rack ships, and the facility's cooling loop must be commissioned and ready to receive the rack on arrival. In operation, telemetry and leak detection must be integrated with facility monitoring, and components must be serviceable without disrupting neighboring systems.

  McGuff said liquid cooling is not expected to displace air cooling across all compute categories. Even liquid-cooled racks reject some heat to air, and general-purpose compute will remain largely air-cooled. The outcome, he said, is a hybrid model, with liquid cooling becoming the default specifically for AI compute.

  ## Hyperscaler procurement and the volume production challenge

  Rack-scale procurement is not new for large cloud and AI infrastructure operators — hyperscalers — but the interdependence of components inside the rack and the pace at which new capacity must come online have both increased, McGuff said.

  Many hyperscalers design their own racks and cooling systems, often building on open standards such as the Open Compute Project (OCP), an industry consortium that publishes hardware specifications. What they require from manufacturing partners is the ability to take those designs into volume production quickly, McGuff said, rather than a fixed off-the-shelf product. Each new custom accelerator brings its own rack configuration, thermal load, and power requirements.

  Hyperscalers ramping capacity across several regions simultaneously require the same validated configuration to be built identically at every site. Meanwhile, many are deploying sidecar and liquid-to-air approaches — methods that add liquid cooling capability to existing air-cooled halls without full facility replacement — while new liquid-ready facilities are under construction.

  ## Challenges for operators: complexity, speed, and regional gaps

  McGuff identified the central challenge for operators as managing system complexity at speed and scale while the underlying technology keeps moving. AI platforms now evolve on roughly an annual cycle, he said, meaning operators are designing facilities today for racks two or three generations away without knowing precisely what power and cooling those racks will require.

  Retrofitting existing air-cooled halls — which were not engineered for the weight of liquid-cooled racks or the plumbing they require — adds further difficulty. Every week of delay leaves expensive compute sitting idle, making time to capacity a critical measure.

  A change in cooling architecture affects power delivery, mechanical design, and serviceability in interconnected ways, McGuff said. With standards still maturing, operators must often coordinate multiple suppliers and determine accountability when failures occur. In Asia-Pacific specifically, McGuff cited grid capacity constraints, permitting timelines, and a shortage of experienced liquid-cooling technicians as additional pressures.

  Pre-validated rack configurations, consistent manufacturing and traceability across regions, and a single accountable partner across cooling, power, and mechanics help operators reduce risk and deploy faster, he said.

  ## System-level validation requirements

  Validating power, thermal management, networking, and optics as a complete system is critical, McGuff said, because components that pass individual qualification tests do not necessarily perform as expected once running together.

  Power spikes from AI workloads stress both power delivery and cooling response simultaneously. Changes in cooling design can push heat-sensitive optical components outside their operating range. A single xPU throttling — reducing its clock speed to avoid overheating — due to uneven coolant flow can slow an entire training job running across a cluster.

  Validation must therefore progress from component and subsystem testing to rack-level and, where applicable, cluster-level testing, so integration problems are found in a controlled engineering and manufacturing environment rather than on the customer's data center floor. As co-packaged optics — where optical interconnect components are integrated directly onto the chip package — and liquid-cooled networking become more common, these interdependencies will only increase, McGuff said.

  ## Accelerating time to capacity

  The greatest opportunity to reduce deployment risk and accelerate time to capacity lies in removing iterations, handoffs, and surprises between design and deployment, McGuff said.

  That means co-designing with chip vendors and operators early so systems are built for manufacturability and serviceability from the outset, rather than redesigned after the fact. Standardized reference designs and rack platforms that carry across chip generations mean each deployment does not start as a fresh engineering project. Completing integration in the factory — so racks arrive as tested systems rather than as parts assembled on site — is central to that approach.

  On the facility side, prefabricated power and cooling infrastructure can be built and tested in parallel with site construction. Securing long-lead components early and building validated configurations identically across all sites removes common causes of delay, he said.

  ## Outlook for 2027

  McGuff described 2027 as an inflection point for the industry. Announced industry roadmaps point to racks of several hundred kilowatts and 800 VDC (volt direct current) power distribution by that year — a voltage level that improves transmission efficiency at the power levels AI racks require. At those densities, McGuff said, power and cooling can no longer be designed as separate engineering problems.
body_zh: |
  液冷已成為AI基礎設施的核心系統級需求，而非單純的元件選項。捷比（Jabil）智慧基礎設施事業部技術策略暨系統架構資深總監Matt McGuff在一篇公開專訪中指出，這股轉變由機架功率密度所驅動——目前AI部署環境中已超過100 kW，路線圖更預測未來將達數百千瓦，甚至每機架1百萬瓦（1 MW）。

  McGuff表示，xPU功耗——涵蓋繪圖處理器（GPU）、中央處理器（CPU）與客製化加速器——已從每顆晶片數百瓦躍升至逾1 kW，下一世代設計更將達每顆5 kW。機架密度也同步攀升，從早期世代的10至20 kW，到當今AI機架的逾100 kW。

  「液冷改變的不只是伺服器散熱方式，」McGuff說，「它正在改變我們設計、製造、測試和部署整座機架的方式。」

  ## 機架級散熱如何改變設計與製造

  McGuff表示，在密度超過100 kW的情況下，散熱系統已無法視為獨立子系統。有效的機架設計如今必須從資料中心設施端開始：水如何導入、可用流量、連接需求、冷卻液種類，以及冷卻液分配單元（CDU，負責調節並循環機架內流體的設備）的位置與規格。在機架層面，工程師必須處理流量平衡、壓降、洩漏偵測，以及萬一發生洩漏時系統的應對方式。

  製造產線需要設施端的水源與設備，以便填充、清洗及維護冷卻液迴路。測試項目現涵蓋壓降、洩漏偵測、歧管間流量平衡，以及冷卻液潔淨度——微流道冷板（透過細小內部通道將晶片熱能傳導至冷卻液的元件）對微粒雜質十分敏感。之後還需在真實或模擬工作負載下進行全功率熱測試。

  McGuff說，風險輪廓已前移。過去可能在現場排除的問題，現在必須在機架出貨前就解決；設施端的散熱迴路也必須在機架抵達時已完成試運轉，隨時可以接收。在運作期間，遙測與洩漏偵測必須與設施監控系統整合，各項元件也需在不影響鄰近系統的情況下可單獨維修。

  McGuff表示，液冷並不預期在所有運算類別中全面取代氣冷。即使是液冷機架，也仍有部分熱能排放至空氣，而通用運算將大體維持氣冷。他說，最終結果將是混合模式，液冷特別針對AI運算成為預設選項。

  ## 超大規模業者的採購與量產挑戰

  McGuff表示，機架規模採購對大型雲端及AI基礎設施業者（超大規模業者）而言並非新鮮事，但機架內元件的相互依存程度，以及新容量必須上線的速度，兩者都在提高。

  許多超大規模業者自行設計機架和散熱系統，通常以開放運算計畫（OCP，一個發布硬體規格的業界聯盟）等開放標準為基礎。McGuff說，他們對製造夥伴的要求，是能將這些設計迅速導入量產，而非提供固定的現貨產品。每一款新的客製化加速器，都帶來各自的機架配置、熱負荷與電力需求。

  同時在多個地區擴增容量的超大規模業者，要求每個站點都以完全相同的方式建置同一套經過驗證的配置。與此同時，許多業者正在部署側掛式（sidecar）與液轉氣（liquid-to-air）方案——這些方式可在不全面改建設施的情況下，為現有氣冷機房增加液冷能力——同時新的液冷就緒設施也在興建中。

  ## 業者面臨的挑戰：複雜度、速度與區域差距

  McGuff指出，業者所面臨的核心挑戰，是在底層技術持續演進的同時，以足夠的速度和規模管理系統複雜度。他說，AI平台目前約以一年為週期迭代，意味著業者今天設計的設施，是為了兩、三個世代之後的機架，卻還不清楚那些機架究竟需要多少電力和散熱。

  改造現有氣冷機房的難度更高——這些機房在設計時，並未考量液冷機架的重量或所需管路。每延誤一週，昂貴的運算設備就閒置一週，使上線時程成為關鍵指標。

  McGuff說，散熱架構的改變，會以相互牽連的方式影響電力配送、機械設計與維護性。在標準尚未成熟的情況下，業者往往需要協調多家供應商，並在出現故障時釐清責任歸屬。在亞太地區，McGuff特別指出電網容量限制、許可證取得時程，以及具備液冷技術經驗的技師短缺，是額外的壓力來源。

  他表示，預先驗證的機架配置、跨區域一致的製造流程與可追溯性，以及在散熱、電力與機械方面有單一負責夥伴，有助於業者降低風險、加速部署。

  ## 系統級驗證需求

  McGuff表示，將電力、熱管理、網路與光學元件作為完整系統來驗證至關重要，因為通過個別資格測試的元件，不一定在協同運作時表現如預期。

  AI工作負載產生的功率突波，會同時對電力配送和散熱響應造成壓力。散熱設計的改變，可能使對熱敏感的光學元件超出其工作溫度範圍。由於冷卻液流量分配不均導致單顆xPU節流（降低時脈速度以避免過熱），就可能拖慢整個跨叢集訓練任務的進度。

  因此，驗證必須從元件與子系統測試推進至機架級，乃至適用時的叢集級測試，讓整合問題在受控的工程與製造環境中被發現，而不是在客戶資料中心現場才暴露。McGuff說，隨著共封裝光學（co-packaged optics，將光學互連元件直接整合至晶片封裝）與液冷網路愈趨普及，這些相互依存關係只會更加深化。

  ## 加速上線時程

  McGuff表示，降低部署風險、加速上線時程的最大機會，在於消除從設計到部署之間的反覆迭代、交接空白與意外狀況。

  這意味著要及早與晶片廠商和業者共同設計，讓系統從一開始就考量可製造性與可維護性，而非事後重新設計。標準化參考設計與機架平台可跨晶片世代沿用，使每次部署不必從零開始做工程開發。在工廠端完成整合——讓機架以完整測試系統的狀態抵達現場，而非在現場組裝零件——是此一方針的核心。

  在設施端，預製化電力與散熱基礎設施可與工地施工同步建置測試。提前取得長採購週期元件，並在所有站點以相同方式建置經驗證的配置，可消除常見的延誤成因，他說。

  ## 2027年展望

  McGuff將2027年描述為業界的關鍵轉折點。業界已公布的路線圖顯示，到該年將出現數百千瓦的機架，以及800 VDC（伏特直流電）配電——這一電壓等級在AI機架所需的功率水準下，可提升傳輸效率。McGuff表示，在如此高的密度下，電力與散熱將再也無法作為各自獨立的工程問題來設計。
date: "2026-11-12"
source_published: "2026-11-11T11:45:52.000Z"
category: "cooling"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Q&A | Liquid cooling is changing how we design, and deploy the entire rack: Matt McGuff, Jabil (trust 3/5)."
sources:
  - url: "https://w.media/qa-liquid-cooling-is-changing-how-we-design-and-deploy-the-entire-rack-matt-mcguff-jabil/"
    title: "Q&A | Liquid cooling is changing how we design, and deploy the entire rack: Matt McGuff, Jabil"
    trust: 3
    type: primary
    published_at: "2026-11-11T11:45:52.000Z"
---
