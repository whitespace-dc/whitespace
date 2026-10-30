---
title_en: "Uptime Institute lays out design requirements for vendor-neutral liquid cooling networks"
title_zh: "Uptime Institute提出廠商中立液冷網路設計規範要求"
summary_en: "Data center operators building shared direct liquid cooling infrastructure face unresolved design trade-offs around coolant chemistry, pipe sizing, temperature strategy, and maintainability, Uptime Institute reports, identifying the absence of industry-wide specifications as the central obstacle to IT-agnostic deployments."
summary_zh: "Uptime Institute報告指出，正在建置共用直接液冷基礎設施的資料中心業者，面臨冷卻液化學成分、管路尺寸、溫度策略及可維護性等多重設計取捨難題尚待解決，而全業界統一規範的缺位，是阻礙IT設備廠商中立部署的核心障礙。"
body_en: |
  Data center operators trying to run a single liquid cooling infrastructure that serves hardware from multiple IT vendors face a set of compounding design challenges the industry has not yet standardized around, according to a report from Uptime Institute, the data center research and certification organization, developed with input from equipment vendors Vertiv and Schneider Electric.

  The report addresses direct liquid cooling, or DLC — a method of removing heat from server components by routing water or water-based fluid through metal cold plates mounted directly to processors, in contrast to conventional air blown through a rack. DLC adoption has accelerated alongside demand for dense artificial intelligence computing, which generates heat loads that air cooling cannot efficiently manage at scale.

  The central design problem the report addresses is IT-agnosticism: building a facility's shared DLC infrastructure so it can serve hardware from any vendor across multiple technology generations without requiring major system modifications. In discussions with data center operators, Uptime Institute found this to be a recurring concern. Facilities typically cycle through several overlapping hardware generations from different vendors over their operating lifetimes, making vendor-specific cooling infrastructure a long-term liability.

  ## Fragmentation and lock-in

  Limited industry standardization is the root cause of most problems, the report states. DLC originated as a hardware-integrated solution, first deployed in mainframes and supercomputers, and commercial development of the technology proceeded without common specifications. The result, in the report's terms, is technical fragmentation and commercial lock-in that raises operational complexity for operators.

  As DLC installations now span multiple racks or entire data halls, operators increasingly take on maintenance and operational responsibility for the cooling infrastructure outside the IT rack — a role that makes vendor-neutral systems a practical necessity.

  ## Coolant compatibility

  The first design barrier is material compatibility. Different IT hardware vendors may specify different coolants, but the report finds this need not block a shared secondary fluid network, or SFN — the facility-side loop that carries cooled water to and from rack hardware. A high-quality water coolant, whether a propylene glycol mix (typically a 25 percent solution, referred to as PG25) or deionized water, is technically compatible with the wetted components — cold plates, connectors, hoses, pipes, heat exchangers, and pumps — used by any major IT hardware vendor.

  The caveat is that each coolant requires the correct additive packages to inhibit biological growth, corrosion, and fluid degradation. The report recommends operators maintain and regularly review a wetted material list with all involved vendors. The Open Compute Project, an industry consortium that develops open hardware specifications, offers applicable guidelines.

  ## Coolant quality management

  Maintaining fluid quality across a larger SFN serving diverse hardware is the second major concern. The report calls for disciplined commissioning and change management: all equipment connected to the network should be filled, flushed, and drained by facility staff, with testing for turbidity (suspended particulates) and acidity measured by pH value, both checked against a retained factory-condition sample of the network fluid. In live production environments, taking reference samples before and after installing any new equipment establishes traceability and accountability.

  The standard industry filtration rating for water DLC networks is 25 microns. Full-flow filters are typically integrated with coolant distribution units, or CDUs — the hardware that conditions and circulates coolant through the facility loop. For larger, multi-megawatt networks, additional side-stream filtration can improve coolant quality and simplify servicing.

  ## Physical design: connections, valves, and pipe sizing

  Row-level fluid headers, sometimes called in-row manifolds, distribute coolant to individual racks. Because IT rack manifolds differ in positioning and racks vary in width, the report recommends closely spaced connection points on facility headers to accommodate the widest possible range of rack configurations and allow changes between them.

  In a heterogeneous IT environment, rack power densities, utilization rates, flow requirements, and pressure drops vary significantly. Adjustable or automated valves are needed to balance coolant flow across racks with differing demands.

  On pipe sizing, the report recommends DN65 connections — 2.5-inch diameter — as the minimum standard for facilities expecting to support high-density AI or high-performance computing racks. DN40 (1.5-inch) connections are adequate for installations not intended to support ultrahigh power densities. Fluid velocity should not exceed 2 meters per second (approximately 6.6 feet per second) in a finely filtered network, to remain safely below the erosional velocity threshold and avoid debris accumulation.

  ## Flow rates and temperatures

  OCP standardization work has produced a reference assumption for engineering calculations: 1.5 liters per minute per kilowatt of heat load, at a 10 degrees Celsius (18 degrees Fahrenheit) temperature rise across the cold plate. Operationally, a higher temperature rise is possible as long as coolant temperatures remain well below permitted maximum levels, which allows operators to reduce flow rates and corresponding pumping energy.

  Temperature strategy involves significant trade-offs. There is renewed interest in chiller-free facility designs using warm water cooling — an approach that avoids the energy cost of mechanical refrigeration. Nvidia has publicly endorsed, and provided hardware support for, a 45 degrees Celsius water coolant supply temperature, the report notes.

  However, the benefits of elevated coolant temperatures depend on the facility's surrounding climate. Higher supply temperatures also require stricter thermal stability, limit the achievable temperature rise across cold plates, and most non-Nvidia IT equipment is restricted to lower coolant temperatures. For facility water infrastructure shared with conventional air cooling systems, CDU supply temperatures tend to converge around 25 degrees Celsius (77 degrees Fahrenheit).

  ## Maintainability

  Concurrent maintainability — the ability to service any part of the cooling infrastructure without interrupting cooling to active hardware — is not guaranteed in shared DLC networks. Not every rack will necessarily be served by redundant supply and return manifolds, which would be the standard requirement for full concurrent maintainability. Alternative configurations such as dual-fed manifolds or T-connector installations are currently uncommon.

  The report recommends dividing facility headers into serviceable sections using isolation valves to limit the number of racks affected during any maintenance event. Determining the appropriate granularity of maintainability requires input from IT operations and, in the case of colocation providers, from tenant customers.

  ## What it means for facility planners

  The report reflects the condition of a market segment scaling faster than its supporting standards. As AI computing drives rack power densities beyond what air cooling can practically manage, operators building shared DLC infrastructure face decisions — coolant chemistry, pipe sizing, temperature strategy, valve architecture — for which settled best-practice answers do not yet exist in the way they do for mature data center technologies.

  The absence of common specifications, the report concludes, remains the central obstacle to IT-agnostic DLC at scale. Operators will need to weigh each design trade-off against their specific hardware mix, local climate, and maintainability requirements, and must plan for a facility lifetime that will include hardware generations not yet commercially available.
body_zh: |
  資料中心研究與認證機構Uptime Institute，聯合設備廠商Vertiv及施耐德電機（Schneider Electric）共同發布一份報告，指出正在嘗試以單一液冷基礎設施服務多家IT廠商硬體的資料中心業者，面臨一系列業界尚未建立標準的複合性設計挑戰。

  報告探討的是直接液冷（Direct Liquid Cooling，DLC）技術——透過金屬冷板直接貼附於處理器，以水或水基流體帶走伺服器元件熱量的散熱方式，有別於傳統以風扇向機架吹冷空氣的做法。隨著高密度人工智慧運算需求持續成長，其產生的熱負荷已非風冷所能有效應對，DLC的採用率因此大幅提升。

  報告所探討的核心設計問題是「IT設備廠商中立性」（IT-agnosticism）：如何建置一套設施端的共用DLC基礎設施，使其能服務任何廠商的硬體、橫跨多個技術世代，且無需進行大規模系統改造。Uptime Institute在與資料中心業者的討論中發現，這是反覆出現的共同顧慮。資料中心設施在整個運營生命週期內，往往會同時運行來自不同廠商的多個世代硬體，使得廠商專屬的冷卻基礎設施成為長期的營運負擔。

  ## 碎片化與鎖定效應

  報告指出，業界標準化程度不足是大多數問題的根源。DLC最初是以硬體整合方案的形式問世，最早部署於大型主機與超級電腦，商業化發展過程中始終缺乏統一規格。報告以「技術碎片化」與「商業鎖定」形容其結果，進一步加重了業者的營運複雜度。

  隨著DLC裝置規模擴展至多個機架乃至整個資料大廳，業者愈來愈需要承擔IT機架以外冷卻基礎設施的維護與運營責任，使得廠商中立系統成為實際需求。

  ## 冷卻液相容性

  第一道設計障礙是材料相容性。不同IT硬體廠商可能指定使用不同的冷卻液，但報告認為這並不妨礙建置共用的次要流體網路（Secondary Fluid Network，SFN）——即設施端將冷水輸送至機架硬體並回收的循環迴路。高品質的水基冷卻液，無論是丙二醇混合液（通常為25%濃度，稱為PG25）或去離子水，在技術上均與各大IT硬體廠商所使用的接觸性元件相容，包括冷板、接頭、軟管、管路、熱交換器及幫浦。

  但有一個前提：每種冷卻液都需要搭配正確的添加劑，以抑制生物生長、腐蝕及流體劣化。報告建議業者與所有相關廠商共同維護一份接觸材料清單，並定期檢視。開放運算計畫（Open Compute Project，OCP）這個開放硬體規格業界聯盟，提供了適用的指引準則。

  ## 冷卻液品質管理

  第二項主要顧慮是在服務多樣硬體的大型SFN中維持流體品質。報告要求嚴格的試運轉與變更管理程序：所有接入網路的設備均應由設施人員負責注液、沖洗與排液，並針對濁度（懸浮微粒）及以pH值衡量的酸鹼度進行測試，兩項數值均須對照保留的工廠原始網路流體樣本進行比對。在生產環境中，於安裝任何新設備前後分別採集參考樣本，可建立可追溯性與責任歸屬。

  水基DLC網路的業界標準過濾精度為25微米。全流量過濾器通常整合於冷卻液配送單元（Coolant Distribution Unit，CDU）中——CDU是負責調節並循環設施迴路冷卻液的硬體設備。對於規模達數百萬瓦特的大型網路，額外加裝旁流過濾（side-stream filtration）可進一步改善冷卻液品質，並簡化維護作業。

  ## 實體設計：接頭、閥門與管路尺寸

  列級流體總管（row-level fluid headers），有時稱為列間歧管（in-row manifolds），負責將冷卻液分配至各個機架。由於IT機架歧管的位置各異，機架寬度也不盡相同，報告建議在設施總管上採用間距緊密的連接點，以適應盡可能多的機架配置，並便於在不同配置之間切換。

  在異質IT環境中，各機架的功率密度、使用率、流量需求及壓降差異顯著，因此需要可調節或自動化的閥門，以平衡不同需求機架之間的冷卻液流量。

  在管路尺寸方面，報告建議將DN65連接規格（管徑2.5英寸）設為預期支援高密度AI或高效能運算（HPC）機架的設施最低標準。DN40（管徑1.5英寸）連接規格則適用於不需要支援超高功率密度的設施。在精細過濾的網路中，流體速度不應超過每秒2公尺（約每秒6.6英尺），以安全地保持在侵蝕速度閾值以下，並避免雜質堆積。

  ## 流量與溫度

  OCP的標準化工作已為工程計算提供了一個參考假設：每千瓦熱負荷對應每分鐘1.5公升的流量，冷板前後溫差為攝氏10度（華氏18度）。在實際運營中，只要冷卻液溫度維持在容許最高值以下，溫差可以更高，這使業者得以降低流量及相應的幫浦耗能。

  溫度策略涉及重大取捨。業界對不使用冷水機組（chiller）的設施設計——即暖水冷卻方案——重燃興趣，此方式可避免機械制冷的能源成本。報告指出，輝達（NVIDIA）已公開背書並提供硬體支援，將冷卻液供水溫度設定為攝氏45度。

  然而，提高冷卻液溫度的效益取決於設施所在地的氣候條件。較高的供水溫度同時也要求更嚴格的熱穩定性，限制了冷板可達到的溫升幅度，且大多數非輝達IT設備只允許使用較低的冷卻液溫度。對於與傳統風冷系統共用的設施供水基礎設施而言，CDU的供水溫度往往收斂在攝氏25度（華氏77度）左右。

  ## 可維護性

  在共用DLC網路中，「並行可維護性」——即在不中斷任何主動硬體冷卻的情況下，對冷卻基礎設施任何部位進行維護的能力——並非理所當然。並非每個機架都必然配備冗餘的供回水歧管，而這正是完整並行可維護性的標準需求。雙饋歧管或T型接頭安裝等替代配置目前仍不普遍。

  報告建議利用隔離閥將設施總管劃分成可獨立維護的區段，以限制每次維護事件影響的機架數量。確定可維護性的適當粒度，需要IT運營團隊的參與，若為代管（colocation）供應商，則還需納入租戶客戶的意見。

  ## 對設施規劃者的意義

  這份報告反映了一個市場區塊發展速度超越其支撐標準的現狀。隨著AI運算將機架功率密度推向風冷難以有效應對的水準，正在建置共用DLC基礎設施的業者，在冷卻液化學成分、管路尺寸、溫度策略、閥門架構等決策上，目前仍缺乏像成熟資料中心技術那樣已有定論的最佳實務答案。

  報告最終結論是，缺乏統一規範仍是大規模實現IT設備廠商中立DLC的核心障礙。業者需要根據自身的硬體組合、當地氣候及可維護性需求，逐一權衡各項設計取捨，並必須為一個涵蓋尚未商業化的未來硬體世代的設施生命週期做好規劃。
date: "2026-10-31"
source_published: "2026-10-29T22:00:00.000Z"
category: "cooling"
secondary_categories: ["regulatory"]
region: []
vendor: ["Nvidia", "Schneider Electric", "Vertiv"]
trust:
  score: 4
  reasoning: "Single source: IT-agnostic DLC systems: key considerations (trust 4/5)."
sources:
  - url: "https://journal.uptimeinstitute.com/it-agnostic-dlc-systems-key-considerations/"
    title: "IT-agnostic DLC systems: key considerations"
    trust: 4
    type: primary
    published_at: "2026-10-29T22:00:00.000Z"
---
