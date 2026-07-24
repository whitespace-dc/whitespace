---
title_en: "Ashburn transmission fault triggers 3 GW load drop as Data Center Alley shifts to backup power"
title_zh: "阿什本輸電故障致3GW驟降　資料中心走廊切換備援電力"
summary_en: "A transmission line fault in Ashburn, Virginia, caused data centers across Data Center Alley to transfer automatically to backup power Wednesday, removing more than 3 GW of demand — about 3 percent of system load — from the PJM grid in seconds without utility-directed load shedding. NERC and grid planners are now examining what the event reveals about the grid behavior of concentrated AI infrastructure."
summary_zh: "維吉尼亞州阿什本輸電線路周三突發故障，促使「資料中心走廊」各大資料中心自動切換備援電力，逾3吉瓦用電需求在數秒內從PJM電網驟降，約占系統總需求的3%。NERC與電網規劃人員正就此事件所揭示的、AI基礎設施高度集中對電網行為造成的影響展開評估。"
body_en: |
  A transmission line fault in Ashburn, Virginia, caused data centers across the world's largest concentration of such facilities to transfer automatically to backup power on Wednesday, pulling more than 3 gigawatts (GW) of demand from the PJM Interconnection in seconds. PJM, the regional grid operator covering much of the eastern United States, said the drop represented about 3 percent of system demand at the time and produced a measurable frequency change but no reliability impacts to the bulk power system.

  The transfers were not directed by PJM or by Dominion Energy, the Virginia-based utility operating within the PJM network. Dominion said the facilities' own protection systems initiated the shift after the transmission line fault triggered normal system isolation procedures.

  "To be clear, no load was shed and Dominion Energy did not disconnect area data centers from the grid; the data centers' own control systems transferred them to backup power for a very short period of time," Dominion spokesperson Jeremy Slayton said. Dominion's system operations team stabilized the grid and restored normal operating conditions within minutes.

  PJM has not identified the customers involved, disclosed how many facilities transferred to backup power, or released a preliminary event analysis. The cause of the transmission line fault has not been disclosed, and PJM has not said whether the 3 GW load drop came from a single customer or multiple campuses.

  ## Scale of the load concentration

  The magnitude of the response reflects the singular concentration of digital infrastructure in Loudoun County, Virginia, which brands itself Data Center Alley. According to the county's Department of Economic Development, Loudoun has 209 completed data centers and 43 more under construction, representing more than 53 million square feet of operational and planned capacity.

  A Northern Virginia disturbance in 2024 caused roughly 1.5 GW of data center load to disconnect, Reuters reported. Wednesday's event more than doubled that figure. Neil Osnato, founder of Persistence Analytics Group, said the increase reflects operational consequences growing alongside the region's expanding AI infrastructure.

  ## Common-mode risk and reconnection coordination

  Osnato said the event raises questions that extend beyond any individual facility's protection settings. The central concern is whether hundreds of megawatts, or even gigawatts, of hyperscale capacity share similar voltage thresholds, transfer logic, and timing — conditions in which individually reasonable settings can produce a common-mode response when many facilities react simultaneously to the same disturbance.

  "A 3 GW customer response is no longer merely customer behavior," Osnato told Data Center Knowledge. "It is grid behavior — and it must be planned, modeled, and verified accordingly."

  Osnato said hyperscale campuses have become system-significant enough to warrant technology-specific ride-through requirements, similar to the detailed performance standards large generators must already satisfy during voltage and frequency disturbances. He said utilities and PJM also need real-time visibility into how much load has transferred behind the meter, how much backup generation is operating, and when that load intends to reconnect. Returning several gigawatts to the grid too quickly could create a second disturbance if reconnection is not coordinated, he said.

  ## Three developments in three weeks

  Wednesday's event is the third significant interaction between AI data centers and PJM grid conditions within a month. Less than three weeks earlier, PJM issued its first-ever "Emergency Use of Backup-Generator Warning" during a record heat wave, alerting certain large-load customers they might be asked to transfer to on-site generation if conditions deteriorated. That warning was never elevated to an emergency action, and no customer-owned generators were dispatched.

  Shortly after that episode, reports emerged that the White House had considered breaking up PJM over delays connecting new generation and large electricity users. The administration instead directed the grid operator to accelerate reforms aimed at supporting AI infrastructure growth.

  Wednesday's transfer sequence differed from both prior situations in that the data centers acted autonomously, without direction from PJM or Dominion. Together, the three developments show how AI data centers are becoming active participants in grid operations: PJM is developing new emergency procedures for gigawatt-scale loads, federal policymakers are pressing for faster reforms to accommodate AI infrastructure, and automated responses by hyperscale campuses have demonstrated the ability to remove gigawatts of demand within seconds.

  ## NERC review

  The North American Electric Reliability Corporation (NERC), the body responsible for bulk power system reliability standards across North America, said Thursday it is reviewing the event through its standard system performance monitoring and analysis processes. NERC has spent the past year examining how rapidly growing data center loads should be modeled and integrated into bulk power system planning.

  "These incidents are always of interest," said John Moura, NERC's director of reliability assessment and performance analysis, pointing to the organization's recent work in that area.

  Moura said it is too early to draw broader reliability lessons or determine whether the incident will produce new recommendations. "We expect to know more soon," he said. "We'll review once all the processes are completed to see if there is anything significantly new."

  "The transmission outage may have been discrete," Osnato said. "But the scale of the resulting load response reveals a broader reliability consideration."

  PJM has not released a preliminary event analysis, and it remains unclear how many campuses participated in the transfer or when the grid operator expects to publish its findings.
body_zh: |
  周三，美國維吉尼亞州阿什本（Ashburn）一條輸電線路突發故障，促使全球最大資料中心聚集地「資料中心走廊」（Data Center Alley）的各大設施自動切換至備援電力，逾3吉瓦（GW）的用電需求在短短數秒內從PJM互聯電網驟然消失。PJM是覆蓋美國東部大部分地區的區域電網調度中心，其表示此次負載驟降約占當時系統總需求的3%，並在系統中產生了可量測的頻率波動，但未對大型電力系統的可靠性造成實質影響。

  此次切換並非由PJM，或由在PJM網絡內運營的維吉尼亞州公用事業公司多米尼恩能源（Dominion Energy）所指示。多米尼恩能源表示，各設施自有的保護系統在輸電線路故障觸發正常系統隔離程序後，主動啟動了切換作業。

  多米尼恩能源發言人傑里米·斯萊頓（Jeremy Slayton）聲明：「明確來說，此次並未發生任何限電，多米尼恩能源也未切斷區域資料中心與電網的連接；資料中心的自有控制系統在極短時間內將其切換至備援電力。」多米尼恩能源的系統運營團隊在數分鐘內穩定了電網，恢復正常運行狀態。

  PJM迄今尚未公布涉事客戶資訊、透露切換至備援電力的設施數量，也未發布初步事件分析報告。輸電線路故障的原因仍未對外揭露，PJM亦未說明這3GW的負載驟降究竟源自單一客戶還是多個園區。

  ## 負載集中規模

  此次響應的規模，折射出數位基礎設施在維吉尼亞州勞登郡（Loudoun County）高度集中的現實——該郡以「資料中心走廊」自我定位。根據勞登郡經濟發展部的數據，該郡目前已有209座資料中心竣工，另有43座正在興建，合計運營中及規劃中的容量超過5,300萬平方英尺。

  路透社曾報導，2024年北維吉尼亞地區一次擾動事件導致約1.5GW的資料中心負載斷電。此次事件的規模已超過前者逾一倍。Persistence Analytics Group創辦人尼爾·奧斯納托（Neil Osnato）指出，這一增幅反映出隨著該地區AI基礎設施持續擴張，其運營衝擊也與日俱增。

  ## 共模風險與重新併網協調

  奧斯納托表示，此事件所引發的問題已超越任何單一設施保護設定的範疇。核心疑慮在於：數以百計兆瓦乃至吉瓦級的超大規模容量，是否共用相近的電壓閾值、切換邏輯與觸發時序——如此一來，各設施個別看來合理的設定，一旦眾多設施同時響應相同擾動，便可能觸發共模反應。

  「3GW的客戶響應已不再僅是客戶行為，」奧斯納托向《資料中心知識》（Data Center Knowledge）表示，「它已是電網行為——必須以此為前提，加以規劃、建模和驗證。」

  奧斯納托指出，超大規模園區對電力系統的影響已舉足輕重，有必要為其制定針對特定技術的故障穿越（ride-through）要求，類似大型發電機在電壓及頻率擾動期間所須滿足的詳細性能標準。他並表示，公用事業公司與PJM還需要即時掌握有多少負載已切換至計量表後的備用電源、有多少自備發電機正在運行，以及這些負載預計何時重新接回電網。他說，若數吉瓦的電力在缺乏協調的情況下過快回歸電網，重新併網過程本身即可能引發二次擾動。

  ## 三週內三起重大事件

  周三的事件是AI資料中心與PJM電網狀況在一個月內發生的第三次重大交集。就在不到三週前，PJM在一波破紀錄的熱浪期間首度發出「緊急備用發電機使用警示」，提醒部分大型用電戶，若情況持續惡化，可能需要切換至自備的現場發電機。該警示最終未升級為緊急行動，亦未實際調度任何客戶自有的發電機組。

  就在前述事件後不久，外界傳出白宮曾考慮拆解PJM，以應對新發電設施及大型用電戶接入電網延遲的問題。行政當局最終未採取此舉，轉而指示PJM加快推動改革，以支撐AI基礎設施的成長需求。

  周三的切換與前兩起事件截然不同——此次資料中心完全出於自主行動，未受PJM或多米尼恩能源任何指示。綜觀三起事件，AI資料中心正日益成為電網運作中的主動參與者：PJM正針對吉瓦級負載研擬全新的緊急應對程序；聯邦政策制定者持續施壓，要求加速推動改革以容納AI基礎設施；超大規模園區的自動化響應，更已展現出在數秒之內移除數吉瓦需求的實際能力。

  ## NERC審查

  北美電力可靠性公司（NERC）——負責制定全北美大型電力系統可靠性標準的機構——於周四表示，正透過標準的系統性能監測與分析程序對此事件展開審查。過去一年間，NERC持續研究應如何將快速增長的資料中心負載納入大型電力系統規劃，並建立適切的建模框架。

  「這類事件向來值得高度關注，」NERC可靠性評估與績效分析部門主任約翰·穆拉（John Moura）說，同時提及該組織在此領域的近期工作成果。

  穆拉指出，目前就此事件的廣泛可靠性意涵作出判斷，或評估事件是否將催生新建議，仍為時過早。「我們預期不久後將有更多了解，」他說，「待所有程序完成後，我們將進行審視，看看是否有任何重要的新發現。」

  「這次輸電中斷或許是一起單一的偶發事件，」奧斯納托說，「但由此引發的負載響應規模，揭示了一個更深層的可靠性課題。」

  PJM尚未發布初步事件分析報告，外界目前仍不清楚有多少園區參與了此次切換，也不清楚電網調度中心預計何時公布調查結果。
date: "2026-07-25"
source_published: "2026-07-23T15:00:10.000Z"
category: "power"
secondary_categories: ["compute"]
updates: "power/2026-07-04-nerc-report-flags-ai-data-center-load-drops-as-grid-reliability-risk"
region: ["United States"]
vendor: []
trust:
  score: 4
  reasoning: "Single source: Fault in Data Center Alley Triggered 3 GW Load Drop (trust 4/5)."
sources:
  - url: "https://www.datacenterknowledge.com/outages/fault-in-data-center-alley-triggered-3-gw-load-drop-on-pjm"
    title: "Fault in Data Center Alley Triggered 3 GW Load Drop"
    trust: 4
    type: primary
    published_at: "2026-07-23T15:00:10.000Z"
---
