---
title_en: "Data center automation advances across power, cooling and security as operators seek granular control"
title_zh: "資料中心自動化全面升級，供電、冷卻與安全管控邁向精細化"
summary_en: "Data center operators are deploying a new generation of automation tools that extends well beyond generative AI to cover power orchestration, predictive thermal management, and physical security, enabling more granular, policy-driven control across facility operations. The shift marks a significant expansion of the automation toolkit available to operators of mission-critical infrastructure."
summary_zh: "資料中心業者正大規模導入新一代自動化平台，涵蓋電力調度、預測式熱管理與實體安全防護，實現更精細的策略驅動管控。這波浪潮標誌著關鍵任務基礎設施的自動化工具箱正進入全新階段。"
body_en: |
  Data center automation has entered a new phase, with platforms now coordinating power delivery, cooling, physical security, and day-to-day operations at levels of granularity and integration that were not practical until recently, according to an analysis by technology analyst Christopher Tozzi published by Data Center Knowledge.

  The analysis identifies four domains where automation capabilities have advanced materially: power orchestration, predictive thermal control, physical security, and AI-assisted administration. Taken together, Tozzi writes, these tools give operators a toolkit that spans "from the electrical room to the rack and from the SOC to the NOC" — that is, from the security operations center to the network operations center.

  ## Power orchestration gains rack-level granularity

  Modern power management platforms coordinate data from three previously siloed systems: electrical power management systems (EPMS), data center infrastructure management (DCIM) platforms, and intelligent power distribution units (PDUs), which are the devices that distribute and monitor electricity to individual servers and equipment. By integrating these data streams, the platforms can enforce power caps at the individual rack or outlet level, prioritize critical workloads, and shed nonessential loads during grid constraints.

  Uninterruptible power supply (UPS) systems and batteries bridge outages or voltage dips while on-site generators synchronize to the load, typically within seconds. In more advanced deployments, batteries are also being used for peak shaving — drawing on stored energy during periods of high demand to reduce electricity costs — and, where regulations permit, for grid services such as demand response and frequency regulation.

  Tozzi characterizes these capabilities as going "far beyond conventional power automation, such as traditional breaker-centric approaches, by adding granular control and faster, policy-driven responses to power events."

  ## Cooling automation shifts from reactive to predictive

  Thermal management is moving from reactive correction to prediction-based prevention. Dense sensor networks now monitor temperatures at rack or individual server granularity and correlate those readings with workload and airflow data. Automated systems employing model-predictive control — a technique that uses real-time forecasting models to anticipate conditions and make adjustments before they become problems — steer cooling capacity to where it is needed before throttling or hardware stress occurs.

  Liquid cooling is expanding for high-density racks and AI workloads. The analysis states that integrating liquid cooling with airflow optimization can reduce cooling energy consumption while proactively resolving hotspots.

  ## Physical security adds real-time AI detection

  Physical security automation has moved beyond foundational measures such as smart locks and video surveillance to include AI-assisted video analytics capable of flagging suspicious behavior or threats in real time. Environmental and tamper sensors now detect unexpected interactions with physical infrastructure, including cable movement and ceiling tile displacement. In controlled deployments, biometric controls such as facial recognition can streamline identity verification at entry points.

  Tozzi characterizes these developments as "evolutionary steps toward broader coverage, lower response times, and higher confidence in access control and situation awareness" rather than radical departures from established practice.

  ## AI augments day-to-day administration

  Artificial intelligence is augmenting data center administration beyond its more widely publicized generative and agentic applications. Operators can now use natural language interfaces to configure servers, or deploy AI agents to optimize network designs, reducing the specialized expertise previously required for some tasks and decreasing manual effort for routine operations, according to the analysis.

  ## Significance: integration across facility layers

  The analysis frames the current evolution of data center automation not as a single breakthrough but as the convergence of more granular control across historically separate facility domains. While Tozzi notes that some elements of data center management will remain resistant to full automation for the foreseeable future, the payoff for operators integrating these capabilities is described as "better resiliency and efficiency, delivered with auditability and control that mission-critical environments demand."

  The expansion of automation into power, cooling, and security positions operators to manage increasingly power-dense facilities — particularly those supporting AI workloads — through policy-driven responses rather than manual intervention.
body_zh: |
  ## 資料中心自動化全面升級，供電、冷卻與安全管控邁向精細化

  資料中心業者正在部署新一代自動化工具，其應用範疇已遠超過生成式AI，延伸至電力調度、預測式熱管理及實體安全防護，讓業者得以透過更精細、策略驅動的方式管理整座機房。這波轉變，標誌著關鍵任務基礎設施業者所能運用的自動化工具箱正大幅擴張。

  根據科技分析師克里斯多福．托齊（Christopher Tozzi）發表於《Data Center Knowledge》的分析報告，資料中心自動化已進入新階段——如今的平台能以前所未有的精細度與整合深度，協調電力供應、冷卻系統、實體安全及日常營運。

  托齊在報告中點出四大領域的自動化能力已出現實質躍進：電力調度、預測式熱控制、實體安全，以及AI輔助管理。他指出，綜合來看，這些工具讓業者擁有一套從「電力室到機架、從資安操作中心到網路操作中心」全面覆蓋的工具組合。

  ## 電力調度精細化至機架層級

  現代電力管理平台能整合三套過去各自為政的系統：電氣電力管理系統（EPMS）、資料中心基礎設施管理（DCIM）平台，以及智慧型配電單元（PDU）——也就是負責將電力分配並監控至各台伺服器與設備的裝置。透過整合這三類資料流，平台可在個別機架或插座層級執行用電上限，優先保障關鍵工作負載，並在電網受限時自動卸載非必要用電。

  不斷電系統（UPS）與電池組可在停電或電壓驟降時橋接供電，同時現場發電機也會在通常數秒內同步接手負載。在更進階的部署場景中，電池還被用於「削峰」——在用電高峰時段動用儲存電量以降低電費。在法規許可的地區，這些電池甚至可參與電網服務，例如需量反應與頻率調節。

  托齊形容，這些能力已遠超「傳統以斷路器為核心的電力自動化」，透過更精細的管控與更快速、策略驅動的電力事件回應，大幅拓展了自動化的邊界。

  ## 冷卻自動化從被動應對轉為主動預測

  熱管理正從事後補救轉向預測性防範。密集的感測器網路現在可監控機架或個別伺服器層級的溫度，並將這些數據與工作負載及氣流資料進行關聯分析。採用模型預測控制技術——一種運用即時預測模型預先研判狀況、在問題發生前即做出調整的方法——的自動化系統，能在發生降頻節流或硬體過熱壓力之前，將冷卻能量導引至最需要的地方。

  液態冷卻的應用也持續擴展，尤其針對高密度機架與AI工作負載。報告指出，將液態冷卻與氣流優化整合運用，不僅能降低冷卻能耗，還能主動排除熱點問題。

  ## 實體安全導入即時AI偵測

  實體安全自動化已超越智慧門鎖與影像監控等基礎措施，進一步納入AI輔助影像分析，能夠即時標記可疑行為或潛在威脅。環境感測器與防竄改感測器現在能偵測實體基礎設施遭受的異常互動，包括線纜移動與天花板板塊位移。在受控的部署環境中，臉部辨識等生物特徵管控手段可簡化出入口的身份驗證流程。

  托齊將這些發展定性為「朝向更廣泛覆蓋、更短回應時間，以及對門禁管控與態勢感知更高信心的演進步伐」，而非對既有做法的根本性顛覆。

  ## AI強化日常管理作業

  人工智慧正在擴大對資料中心日常管理的輔助，其應用已超越目前廣受關注的生成式與自主代理應用。根據報告分析，業者現在可透過自然語言介面來設定伺服器，或部署AI代理來優化網路設計，從而降低部分任務對專業人力的依賴，並減少例行作業的人工投入。

  ## 意義：跨設施層級的整合

  報告將當前資料中心自動化的演進，定位為歷來各自獨立運作的設施領域在更精細管控層面的匯流，而非單一突破性技術的出現。儘管托齊指出，資料中心管理中仍有若干環節在可預見的未來難以實現完全自動化，但對於整合這些能力的業者而言，其回報在於「以關鍵任務環境所需的可稽核性與管控力，帶來更強的韌性與效率」。

  自動化向電力、冷卻與安全領域的全面擴張，讓業者得以透過策略驅動的方式——而非仰賴人工介入——管理功率密度日益提升的機房，尤其是那些支撐AI工作負載的設施。
date: "2026-06-18"
source_published: "2026-06-17T09:00:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Data Center Automation: What’s New and What Works (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/automation/data-center-automation-what-s-new-and-what-works"
    title: "Data Center Automation: What’s New and What Works"
    trust: 3
    type: primary
    published_at: "2026-06-17T09:00:00.000Z"
---
