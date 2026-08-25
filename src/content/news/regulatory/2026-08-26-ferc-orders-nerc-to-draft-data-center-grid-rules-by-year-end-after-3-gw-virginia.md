---
title_en: "FERC orders NERC to draft data center grid rules by year-end after 3 GW Virginia disturbance"
title_zh: "維吉尼亞3GW擾動後，FERC命令NERC年底前制定資料中心電網規範"
summary_en: "The Federal Energy Regulatory Commission directed the North American Electric Reliability Corporation to develop binding reliability standards for computational loads by December 31, 2026, after a July 22 disturbance in Northern Virginia removed more than 3 gigawatts of data center demand from the grid in seconds."
summary_zh: "北維吉尼亞州7月22日發生超過3吉瓦資料中心負載瞬間離網事件，美國聯邦能源管理委員會（FERC）隨即責令北美電力可靠性公司（NERC）於2026年12月31日前，針對大型運算負載制定具有約束力的電網可靠性標準。"
body_en: |
  U.S. energy regulators have ordered the North American Electric Reliability Corporation (NERC) to develop binding grid reliability standards for data centers and other large computational loads by December 31, 2026, after a July 22 disturbance in Northern Virginia showed how quickly such facilities can remove gigawatts of demand from the grid.

  The Federal Energy Regulatory Commission (FERC) issued the directive in July, the same month that more than 3 gigawatts (GW) of data center demand — roughly 3% of system load at the time — went offline in seconds as Northern Virginia facilities automatically transferred to backup power. PJM Interconnection, the regional transmission organization (RTO) overseeing the affected area's bulk power grid, reported no reliability impact. Dominion Energy said operators stabilized conditions and returned the system to normal within minutes.

  Sensor firm Ting Labs detected the disturbance beginning at 7:56 a.m. Eastern time and recorded a frequency rise and voltage effects across the Eastern Interconnection in response.

  ## A pattern of events across three grid systems

  The Virginia event was the latest in a documented series of large-load disturbances. ERCOT, the Electric Reliability Council of Texas, identified eight events between November 2020 and March 2023 in which faults near a large Gulf Coast industrial load produced repeated demand reductions of approximately 400 to 700 megawatts (MW). ERCOT recorded system frequencies as high as approximately 60.11 hertz during those events; the standard operating target for North American grids is 60 hertz, and deviations signal a supply-demand imbalance on the system. ERCOT said later changes to variable-frequency-drive (VFD) settings — control equipment that regulates motor speeds in cooling and industrial systems — and internal facility controls improved the sites' ride-through performance during grid disturbances.

  A more severe event occurred on December 7, 2022, when multiple faults and delayed 19-cycle fault-clearing following a breaker failure in West Texas produced an approximately 1,560 MW demand reduction. Ten large power-electronic loads accounted for approximately 162 MW of the reduction; oil and gas production, processing, and delivery facilities accounted for approximately 420 MW; and 112 MW of thermal generation also tripped.

  Ireland's transmission system operators EirGrid and SONI (System Operator for Northern Ireland) documented four major data center demand reductions linked to disturbances on Ireland's 220-kilovolt (kV) high-voltage network: 74 MW on January 7, 2022; 204 MW on December 13, 2022; 321 MW on January 26, 2025; and 387 MW on May 8, 2025.

  ## Ireland's proposed behavioral requirements

  EirGrid and SONI have proposed Grid Code Modification MPID345 to set behavioral requirements for large loads during grid events. The proposal includes Rate of Change of Frequency (ROCOF) limits, voltage fault ride-through obligations, and post-fault active-power-recovery standards. Under the proposal, a facility could transfer demand to backup systems during a voltage dip but would generally be required to restore at least 90% of its pre-fault power consumption within 500 milliseconds of fault clearance and voltage recovery. The proposal remains under regulatory consideration.

  ## The gap in current load rules

  Policy debates about large loads have focused primarily on whether sufficient generation and transmission capacity exists to serve them, when interconnection projects will come online, what financial security developers must provide, and who pays for network upgrades, according to Brandon Owens, founder of AIxEnergy.io, writing in Utility Dive. Those questions address only whether a load can be connected and served, not how it behaves once operating, Owens wrote.

  A data center may procure generation, fund network upgrades, and satisfy applicable capacity and interconnection obligations while still presenting a poorly modeled simultaneous-transfer risk during a grid disturbance, Owens wrote. The concern is not any single facility going offline, but many power-electronic devices — the switching hardware inside servers, uninterruptible power supplies (UPS), and cooling equipment — responding simultaneously to the same disturbance, each protecting its own facility as designed, and together creating an unanticipated demand swing.

  ## Elements of a proposed large-load operating regime

  Owens outlined six elements he said a credible large-load operating architecture should include: identifying the largest plausible simultaneous demand reduction at both individual facility and electrical-cluster levels; establishing performance-based voltage and frequency ride-through requirements; requiring verified as-built models of IT loads, cooling systems, UPS equipment, protection settings, backup generation, transfer logic, and reconnection timing; providing grid operators with real-time telemetry on real and reactive power, voltage, transfer status, and expected restoration behavior; specifying notification, ramping, restoration, and battery-recharging procedures; and maintaining a shared forensic record after significant events.

  Where a facility's size, concentration, or control behavior creates need for additional instrumentation, reactive support, reserves, or protection changes, costs should be assigned according to applicable cost-causation principles, Owens wrote.

  ## U.S. regulatory action

  NERC issued a Level 3 Alert in May 2026 calling for improved computational-load modeling, studies, instrumentation, commissioning, operational coordination, and protection and control practices. The alert is not an enforceable Reliability Standard.

  For most of the power industry's history, reliability planning has concentrated on the sudden loss of supply. The growth of large computational loads is creating a reciprocal risk: the sudden loss and return of demand, as thousands of power-electronic devices respond simultaneously to the same grid event, Owens wrote. FERC's July directive requires NERC to file new or modified computational-load reliability standards and registration criteria by December 31, 2026.
body_zh: |
  美國能源監管機關已責令北美電力可靠性公司（NERC），針對資料中心及其他大型運算負載，在2026年12月31日前制定具有約束力的電網可靠性標準。這項指令的背景，是7月22日北維吉尼亞州發生的一起電網擾動事件——當地資料中心設施在幾秒鐘內自動切換至備用電力，導致超過3吉瓦（GW）的需求負載瞬間從電網消失。

  聯邦能源管理委員會（FERC）於7月發出這項指令，就在同月，北維吉尼亞州超過3 GW的資料中心用電需求——約占當時系統總負載的3%——在短短幾秒內離線。負責監管該地區骨幹電網的區域輸電組織PJM Interconnection表示，此次事件並未對電網可靠性造成影響。Dominion Energy表示，運維人員在幾分鐘內穩定了電網狀況，系統恢復正常運作。

  感測器公司Ting Labs偵測到這起擾動始於美東時間上午7時56分，並記錄到東部互聯電網出現頻率上升與電壓效應。

  ## 三大電網系統的連環擾動事件

  維吉尼亞州事件，是一系列有記錄在案的大型負載擾動事件中最新的一起。德克薩斯州電力可靠性委員會（ERCOT）識別出2020年11月至2023年3月間的八起事件，起因均為墨西哥灣沿岸某大型工業負載附近發生故障，每次造成約400至700百萬瓦（MW）的需求反覆驟降。ERCOT記錄到這些事件期間系統頻率最高達到約60.11赫茲；北美電網的標準運行目標為60赫茲，頻率偏差是系統供需失衡的訊號。ERCOT表示，後來對變頻驅動器（VFD）設定——即用於調節冷卻及工業系統馬達轉速的控制設備——以及設施內部控制系統進行調整後，相關站點在電網擾動期間的穿越性能有所改善。

  一起更為嚴重的事件發生於2022年12月7日，當時西德克薩斯州因多重故障疊加斷路器失靈，導致長達19個週期的延遲故障清除，造成約1,560 MW的需求驟降。其中，十個大型電力電子負載約占162 MW的降幅；油氣開採、加工與輸送設施約占420 MW；另有112 MW的熱電機組同步跳機。

  愛爾蘭輸電系統運營商EirGrid與北愛爾蘭系統運營商SONI記錄了四起與愛爾蘭220千伏（kV）高壓電網擾動相關的重大資料中心需求驟降事件：2022年1月7日74 MW、2022年12月13日204 MW、2025年1月26日321 MW、2025年5月8日387 MW。

  ## 愛爾蘭提出的行為規範草案

  EirGrid與SONI已提出《電網規程修訂MPID345》，擬為大型負載在電網事件期間的行為設定規範要求。該提案涵蓋頻率變化率（ROCOF）限制、電壓故障穿越義務，以及故障後有功功率恢復標準。依據該提案，設施可在電壓驟降期間將負載切換至備用系統，但通常須在故障清除及電壓恢復後500毫秒內，將有功功率恢復至故障前消耗水準的至少90%。該提案目前仍在監管審議中。

  ## 現行負載規範的缺口

  根據AIxEnergy.io創辦人布蘭登‧歐文斯（Brandon Owens）在《Utility Dive》的撰文，有關大型負載的政策討論，主要聚焦於是否存在足夠的發電與輸電容量來供電、互聯項目何時上線、開發商須提供多少財務保證，以及誰來承擔電網升級費用等問題。歐文斯指出，這些問題只涉及負載能否接入電網並獲得供電，而非其運行後的行為表現。

  歐文斯寫道，一座資料中心即便採購了發電資源、資助了電網升級、滿足了適用的容量與互聯義務，在電網擾動期間仍可能存在難以預測的同步轉移風險，而這一風險往往未能在模型中充分體現。問題不在於某一單一設施離線，而在於大量電力電子裝置——包括伺服器內部的開關硬體、不間斷電源（UPS）及冷卻設備——同時對同一擾動作出反應，各自依設計保護所屬設施，卻在整體上造成難以預期的需求大幅波動。

  ## 大型負載運行規範的建議要素

  歐文斯概述了他認為一套可信的大型負載運行架構應具備的六項要素：一、在單一設施及電氣叢集層級，識別可能發生的最大同步需求降幅；二、建立以績效為基礎的電壓與頻率穿越要求；三、要求提供經核實的竣工模型，涵蓋資訊技術負載、冷卻系統、UPS設備、保護整定值、備用發電機、切換邏輯及重新併網時序；四、為電網運營商提供有功功率與無功功率、電壓、切換狀態及預期恢復行為等即時遙測資料；五、明確規定通知、負載調升、恢復供電及電池充電程序；六、在重大事件後維護共用的事後鑑定記錄。

  歐文斯寫道，若某設施的規模、集中程度或控制行為需要額外的量測儀器、無功功率支援、備轉容量或保護設定調整，相關費用應依適用的成本肇因原則進行分攤。

  ## 美國監管行動

  NERC於2026年5月發布第三級警示，呼籲業界改善運算負載的建模、研究、量測儀器配置、設備調試、運行協調，以及保護與控制實務。惟該警示並不具有可執行的可靠性標準效力。

  歐文斯寫道，電力產業長期以來的可靠性規劃，主要著眼於供應端的突然損失。隨著大型運算負載的快速成長，一種對稱性風險正在浮現：當數以千計的電力電子裝置同時對同一電網事件作出反應，可能引發需求的瞬間大量消失與迅速回升。FERC的7月指令要求NERC於2026年12月31日前，提交新訂或修訂的運算負載可靠性標準及登記標準。
date: "2026-08-26"
source_published: "2026-08-25T15:00:00.000Z"
category: "regulatory"
secondary_categories: ["power"]
updates: "regulatory/2026-08-13-pjm-eyes-ride-through-rules-for-data-centers-after-38-gw-load-drop"
region: ["Ireland", "United States"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: Data centers can vanish from the grid in seconds; reliability rules need to catch up (trust 3/5)."
sources:
  - url: "https://www.utilitydive.com/news/data-centers-vanish-grid-seconds-reliability-rules/827035/"
    title: "Data centers can vanish from the grid in seconds; reliability rules need to catch up"
    trust: 3
    type: primary
    published_at: "2026-08-25T15:00:00.000Z"
---
