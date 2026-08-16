---
title_en: "DOE Emergency Order Extends Grid Dispatch Authority to Data Center Backup Resources"
title_zh: "能源部緊急命令擴大電網調度權，涵蓋資料中心備援電源"
summary_en: "A July 14, 2026, US Department of Energy emergency order gave PJM Interconnection temporary authority to direct backup power resources at large-load sites, including data centers, during grid emergencies — a step that industry analysis says should trigger the same governance disciplines as any live production change."
summary_zh: "美國能源部於2026年7月14日發布緊急命令，授予PJM Interconnection臨時權力，得在電網緊急狀況下調度包括資料中心在內的大型場址備援電源；業界分析指出，此舉應比照正式生產環境變更，落實相應的治理規範。"
body_en: |
  A July 14, 2026, US Department of Energy emergency order gave PJM Interconnection temporary authority to direct backup power resources at large-load sites, including data centers, as a last resort before firm load interruption — a development that places external grid authority inside facility operating boundaries and, according to industry analysis, demands production-change governance to match.

  The order authorized PJM to direct eligible backup resources during an Energy Emergency Alert Level 3 or immediately before firm load interruption. Covered resources included auxiliary, standby, and directly connected generation, battery storage, and other backup equipment. Assets serving a critical reliability or backup need were excluded. The order ran for one week, through July 21, unless renewed.

  The order did not authorize PJM to shut down servers. But under those emergency conditions, an eligible backup resource at an affected site was no longer under exclusively internal control. External authority could require a change in the live electrical state inside the site boundary, according to analysis published August 16 by Ruslan Seyidov, lead engineer at Delta Telecom LTD, writing in Data Center Dynamics.

  ## Why the Boundary Matters

  Seyidov argues that any authorized grid instruction or accepted market signal that can start generation, discharge storage, change cooling, or reschedule compute has crossed into production control — defined as a change to the live facility or service state, not merely to electricity output. That distinction matters, he writes, because such a response can consume reserve capacity, alter customer performance, or change the recovery path after a fault.

  Data center power architecture is typically designed inward from the utility meter: condition power, carry critical load through disturbances, and preserve service. A grid request enters a system that already carries customer obligations and required operating margins. Those demands can conflict.

  The grid may register available megawatts. The site may have a power train under maintenance, protected uninterruptible power supply (UPS) battery reserve, and no cooling headroom. The demand-response platform may not know a tenant has never authorized workload movement. Seyidov frames this as the gap between a technical flexibility envelope — what a site can sustain within equipment and recovery limits over time — and live permission, which depends on equipment health, maintenance state, weather, fuel or battery charge, eligible workloads, and customer contract terms.

  A two-hour demand reduction may be safe when storage and schedulable compute are fully available. The same committed response can become unsafe when a generator is offline, cooling is constrained, or a customer workload is approaching a deadline. The hardware has not changed, Seyidov notes; safe capacity has.

  ## Ireland Ties Grid Conditions to Facility Operation

  Ireland has moved further in coupling grid requirements to facility status. Under a policy published by Ireland's regulator in December 2025, some qualifying data center connections of ten megavolt-amperes (MVA) or more must link covered demand to dispatchable generation or storage. The nominated asset must be delivered before the covered load can come online or ramp. EirGrid, Ireland's transmission system operator, records an active judicial review of the process. That turns an energy-policy condition into a direct dependency of live facility operation.

  ## Google's Contracted Demand Response

  In March 2026, Google said it had integrated one gigawatt of data center demand response into long-term US utility contracts by limiting or shifting portions of its machine-learning workloads. The company also said the flexibility was limited and available only at certain locations. Seyidov characterizes that figure as contracted capacity, not a delivery record, and notes that a schedulable workload is not equivalent to every workload at every site.

  ## Asset Classes Are Not Interchangeable

  Seyidov draws distinctions between resource types that grid operators and market platforms can conflate. A grid-facing battery energy storage system (BESS) can respond quickly when its state of charge, reserve floor, and interconnection allow. A UPS battery has a different primary duty: continuity of critical load during a disturbance. Similar cells do not create the same operating contract. Standby generators are not automatically continuous or market-participating generation. Cooling systems can exploit thermal inertia, but rebound after a setback constrains subsequent operation. Shifting a batch compute job is not instantaneous curtailment. Accepted demand response is also distinct from involuntary load shedding.

  ## NERC Voluntary Guidelines Set an Operational Baseline

  NERC (North American Electric Reliability Corporation) published voluntary guidelines in May 2026 for emerging large loads that reinforce several of these disciplines. The guidelines recommend 24/7 operational contacts, telemetry and load forecasts, advance notice of step changes, ramp and reconnection protocols, and testing of demand-response signals. They also call for recommissioning after material changes and explicitly treat restoration as a system-level risk when many large loads attempt to reconnect simultaneously after a grid event.

  Seyidov argues that commissioning a flexibility response must validate the full command path, not individual components in isolation. A battery discharge test does not prove that the external signal, energy controller, building controls, protected power path, and compute scheduler will coordinate during a degraded state. Commissioning must cover stale or lost telemetry, unavailable resources, local override, orderly abort, and rebound.

  ## Where Governance Can Be Lighter

  Seyidov's framework does not require heavy information-technology change control for every grid interaction. An electrically and logically segregated BESS, with coordinated protection, can provide a bounded grid service without drawing on UPS reserve or affecting customer workloads. A hyperscaler that controls its job queue and holds the necessary contractual rights can create opt-in flexibility tiers.

  That model holds only if the separation is real, not merely visible on an architecture diagram. Grid service may still share batteries, controls, switchgear, cooling margin, or workload rights with production systems. Redundancy does not equal independence when resources share a failure path, Seyidov writes. The lighter the potential impact on customer service or protected reserves, the lighter the production controls required — but electrical protection, interconnection requirements, and asset-maintenance obligations remain in all cases.

  ## Significance for the Industry

  The DOE order, Ireland's 10 MVA connection rule, and NERC's May 2026 voluntary guidance represent three distinct but converging instruments through which regulators and grid operators are formalizing the terms under which large data center loads participate in grid management. Each extends the reach of grid authority further into facility operating decisions. Together they signal that flexibility commitments made at the interconnection or contract level will increasingly require the same end-to-end commissioning and live-state governance that operators apply to internal production changes.

  NERC's guidelines specifically flag the simultaneous reconnection of many large loads after a grid event as a system risk — a concern that grows as aggregate data center power demand increases.
body_zh: |
  2026年7月14日，美國能源部（DOE）發布緊急命令，授予PJM Interconnection臨時權力，在電網緊急狀況下得對包括資料中心在內的大型用電場址之備援電源資產下達調度指令——此舉將外部電網管控權延伸至設施營運邊界之內。業界分析人士指出，這要求業者比照正式生產環境變更，落實相應的治理規範。

  該命令授權PJM於能源緊急警報第三級（Energy Emergency Alert Level 3）發布之際，或即將強制切斷供電之前，得指揮符合資格的備援電源資產。涵蓋範疇包括輔助型、備用型及直接連接的發電設備、電池儲能設備，以及其他備援設備。承擔關鍵可靠性或備用功能的資產則排除在外。此命令有效期為一週，至7月21日止，除非另行展延。

  該命令並未授權PJM關閉伺服器。然而在上述緊急情況下，受影響場址的符合資格備援資源，已不再完全處於內部控制之下。Delta Telecom LTD首席工程師魯斯蘭·賽多夫（Ruslan Seyidov）於8月16日在《Data Center Dynamics》發表分析指出，外部權力得要求改變場址邊界內的即時電氣狀態。

  ## 邊界為何至關重要

  賽多夫主張，任何經授權的電網指令或已接受的市場信號，只要能啟動發電、放電儲能、改變冷卻條件或重新排程運算，即已跨入生產控制的範疇——其定義為對設施或服務即時狀態的改變，而非僅是電力輸出的調整。他指出，這項區分至關重要，因為此類回應可能消耗備用容量、影響客戶效能，或改變故障後的復原路徑。

  資料中心的電力架構通常由電錶向內設計：調節電力品質、讓關鍵負載在擾動期間持續運作，並維護服務的連續性。電網的要求進入的是一個已承載客戶義務與必要操作裕度的系統，兩者之間可能產生衝突。

  電網系統看到的是可用的百萬瓦（MW）容量；但場址內可能有某條電力鏈路正在維護中、不斷電系統（UPS）的電池備用量受到保護，且冷卻系統毫無餘裕。需求回應平台或許並不知道某位租戶從未授權工作負載遷移。賽多夫以此說明「技術彈性包絡」與「即時許可」之間的落差——前者指場址在一段時間內、於設備與復原限制下所能承受的調度空間，後者則取決於設備健康狀態、維護狀況、天氣、燃料或電池電量、符合資格的工作負載，以及客戶合約條款。

  削減兩小時的需求，在儲能與可排程運算皆充分就緒時或許安全無虞；但同樣的承諾回應，在一台發電機離線、冷卻受限，或某客戶工作負載即將到期時，卻可能形成風險。賽多夫指出，硬體本身並未改變，但安全容量已然不同。

  ## 愛爾蘭將電網條件與設施運作緊密掛鉤

  愛爾蘭在電網要求與設施狀態的連結上走得更遠。根據愛爾蘭監管機關於2025年12月公布的政策，部分達到10百萬伏安（MVA）以上的資料中心連接申請，必須將受管制的用電需求與可調度的發電或儲能資產綁定。受指定的資產須在受管制負載上線或升載之前到位。愛爾蘭輸電系統業者EirGrid表示，此程序目前正面臨司法審查。這將一項能源政策條件，轉化為即時設施運作的直接相依關係。

  ## Google的合約式需求回應

  2026年3月，Google表示已透過限制或轉移部分機器學習工作負載，將一吉瓦（GW）的資料中心需求回應容量納入美國長期電力合約。該公司同時表示，此彈性容量有限，且僅在特定地點適用。賽多夫將這個數字定性為合約容量，而非實際交付紀錄，並指出可排程的工作負載，並不等同於每個場址的所有工作負載。

  ## 資產類別不可相互混用

  賽多夫對電網業者與市場平台有時混淆的資源類型做出區分。面向電網的電池儲能系統（BESS）在荷電狀態、備用下限與併網條件允許時，可快速回應；而UPS電池則有不同的首要任務：在擾動期間維持關鍵負載的連續性。外觀相似的電池單元，並不代表相同的運作合約。備用發電機不會自動具備持續運轉或參與市場的能力。冷卻系統可利用熱慣量進行調節，但降溫後的回彈效應會限制後續的操作空間。批次運算工作的轉移，也並非即時的削減。已接受的需求回應，同樣有別於非自願的強制切載。

  ## NERC自願性指引確立操作基準

  北美電力可靠性協會（NERC）於2026年5月發布針對新興大型負載的自願性指引，強化了上述諸多規範。指引建議設置全年無休的操作聯絡窗口、提供遙測數據與負載預測、提前通知階段性負載變化、制定升降載與重新併網協定，以及測試需求回應信號。指引同時要求在重大變更後重新試運轉，並明確將「多個大型負載在電網事件後同時嘗試重新連接」列為系統層級的風險。

  賽多夫主張，試運轉彈性回應時，必須驗證完整的指令路徑，而非僅對個別元件進行孤立測試。電池放電測試無法證明外部信號、能源控制器、樓宇控制系統、受保護電力路徑與運算排程器，在降級狀態下能夠協調運作。試運轉必須涵蓋遙測資料過期或中斷、資源不可用、本地覆蓋、有序中止，以及回彈效應等情境。

  ## 治理可以較為輕量的場合

  賽多夫的框架並不要求對每次電網互動都套用嚴格的資訊科技變更管控。在電氣與邏輯層面均與生產環境隔離、具備協調保護機制的電池儲能系統，可在不動用UPS備用電量、不影響客戶工作負載的前提下，提供有限範圍的電網服務。能夠掌控工作佇列、且持有必要合約權利的超大規模業者，可建立供客戶選擇加入的彈性分級機制。

  這套模型的前提，是隔離必須真實存在，而非僅止於架構圖上的呈現。電網服務可能仍與生產系統共用電池、控制器、開關設備、冷卻裕度或工作負載權利。賽多夫指出，當資源共用同一故障路徑時，備援並不等於獨立。對客戶服務或受保護備用電量的潛在影響愈低，所需的生產管控就可愈輕量——但電氣保護、併網要求與資產維護義務，在任何情況下都不得豁免。

  ## 對產業的重要意義

  能源部命令、愛爾蘭10 MVA連接規定，以及NERC於2026年5月發布的自願性指引，代表監管機關與電網業者正式規範大型資料中心負載參與電網管理條款的三條不同卻趨於一致的路徑。每一項都進一步將電網管控權延伸至設施運作決策之中。三者合而觀之，傳遞出一個明確信號：在併網或合約層面所做出的彈性承諾，將日益要求業者比照內部生產環境變更，實施端對端的試運轉與即時狀態治理。

  NERC指引特別將電網事件後多個大型負載同時重新併網視為系統風險——隨著資料中心整體用電需求持續攀升，這項隱憂只會與日俱增。
date: "2026-08-17"
source_published: "2026-08-16T14:00:31.000Z"
category: "software-ops"
secondary_categories: ["power"]
region: ["Ireland"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: When a grid signal becomes a production change (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/opinions/when-a-grid-signal-becomes-a-production-change/"
    title: "When a grid signal becomes a production change"
    trust: 3
    type: primary
    published_at: "2026-08-16T14:00:31.000Z"
---
