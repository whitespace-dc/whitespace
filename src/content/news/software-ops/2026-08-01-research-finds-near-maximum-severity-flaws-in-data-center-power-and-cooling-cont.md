---
title_en: "Research Finds Near-Maximum Severity Flaws in Data Center Power and Cooling Controllers"
title_zh: "資料中心電源與冷卻控制器驚現近最高危漏洞"
summary_en: "Security researchers have identified near-maximum-severity vulnerabilities in the network interfaces of data center uninterruptible power supply and HVAC systems, with flaws enabling unauthenticated attackers to cut power or seize control of cooling. The findings expose a structural governance gap between IT security teams and facilities operators at a moment when accelerating construction timelines are outpacing security oversight."
summary_zh: "資安研究人員在資料中心不斷電系統（UPS）及暖通空調（HVAC）控制器的網路介面中，發現了近最高危等級的安全漏洞，攻擊者無需驗證即可切斷電源或奪取冷卻系統控制權。此一發現揭示了IT資安團隊與設施維運人員之間結構性的治理缺口，而加速推進的建設時程更讓資安監管難以跟上腳步。"
body_en: |
  Data center operators face near-maximum-severity security flaws in the power and cooling systems that determine facility uptime, with research revealing vulnerabilities in uninterruptible power supply (UPS) and HVAC controller interfaces that could allow attackers to cut power or disable cooling without authentication, according to an analysis published by Data Center Knowledge.

  The findings expose an underexamined attack surface in operational technology (OT) — the hardware and software that controls physical processes in a facility, distinct from information technology (IT) systems that handle computing and data — at a moment when data center construction is accelerating faster than governance can keep pace.

  ## Vulnerabilities in power and cooling systems

  Recent research cited in the analysis found near-maximum-severity flaws in the network interfaces used to manage UPS units, which provide battery-backed power to protected loads during grid disturbances. An authentication bypass combined with a remote code execution condition could allow an attacker to bypass login controls and issue commands that interrupt power to those protected loads. In a data center, the analysis states, that is not an inconvenience but a potential facility-scale outage event.

  A separate chain of vulnerabilities was identified in a widely deployed HVAC (heating, ventilation, and air conditioning) controller. The chain includes a path to root-level remote access without authentication and the exposure of sensitive facility data. Together, these conditions could give an attacker influence over cooling systems that directly govern whether high-density computing workloads remain thermally stable. As rack power densities rise, the analysis notes, thermal margin shrinks, making cooling an uptime dependency rather than a background system.

  In both cases, the analysis observes, the equipment that most IT security teams rarely inventory turned out to be exactly the equipment that determines whether a facility stays online.

  ## The governance gap between IT and facilities teams

  The core structural problem, according to the analysis, is that organizational boundaries have not kept pace with the connectivity of physical infrastructure. UPS units, power distribution units (PDUs), environmental sensors, and building management systems are now routinely connected via remote access tools and legacy protocols that were not designed for today's threat environment.

  Facilities teams, which own the vendor relationships for this equipment, lack a workflow to track firmware risk. Security teams, which know how to manage software vulnerabilities, typically do not have these physical assets in their inventory. The result, the analysis states, is a gap in ownership, visibility, and prioritization — and that gap is where outages originate.

  The analysis draws a distinction between the consequences that matter in IT security versus those that matter in facility security. Corporate IT security is largely built around protecting the confidentiality of data. In a facility environment, the primary consequence of a compromise is disruption: unexpected equipment shutdown, false sensor readings that delay alarms, or cooling degradation that forces computing hardware to throttle its own performance to avoid overheating. In the worst case, a rack-level power event can cascade into upstream facility systems.

  This distinction, the analysis argues, should change how leaders measure security outcomes. The relevant question is not solely whether intrusions are being prevented, but whether safe operations can be sustained during one.

  ## Hypergrowth is compounding supply chain and configuration risk

  The pace of data center construction is introducing compounding categories of risk. When organizations break ground on a new facility every three months, the analysis states, speed-driven mistakes become more common. Real-world examples cited include misconfigured network segmentation using VLANs (virtual local area networks, a method for logically separating network traffic), management ports left exposed to untrusted networks, and default credentials left unchanged on newly deployed devices.

  Supply chain risk is also rising. The technologies used for power and cooling are evolving rapidly, bringing in new vendors including startups and suppliers from what the analysis describes as semi-trusted geographies, which may lack mature secure software development practices. As these technologies become embedded in critical infrastructure, the analysis states, programs for managing cyber-physical supply chain risk become essential for controlling third-party exposure.

  ## Stakes rise as AI workloads concentrate in data centers

  The analysis frames data center security in explicitly systemic terms. As artificial intelligence becomes a dependency for business operations, supply chain logistics, and national security analysis, data center uptime moves from a service availability question to an economic security and public safety issue. Facilities that train and run AI models are described as strategic assets whose failure carries knock-on effects beyond the immediate operators.

  The publication draws a parallel to healthcare interdependencies: a hospital depends not only on clinicians and buildings but on medical records systems, cold-chain storage for medicines, and stable power for environmental conditions. When those enabling systems fail, care continues but becomes manual, slower, and riskier. The same cascading logic, the analysis argues, now applies to data center infrastructure, and the cost of an outage scales with everything that depends on it.

  ## Recommended controls for closing the gap

  The analysis outlines a sequence of controls. Asset visibility is the starting point: inventorying what OT and cyber-physical devices exist across both the gray space (facility power and HVAC areas) and white space (the computing floor), including which protocols they use and which firmware versions are installed.

  From that baseline, the analysis recommends mapping assets to their operational purpose so that remediation efforts and compensating controls prioritize systems most critical to uptime. Network segmentation — restricting which systems can communicate with which, and keeping control networks separate from business networks — is described as a first-class uptime control, not a security-only measure. A compromise should not be able to become a facility-wide event.

  Remote access for vendors and contractors should enforce strong authentication, least-privilege access, and auditable session logging. Finally, the analysis calls for detection and response to be treated as cyber-physical disciplines, with security events correlated against operational anomalies and incident playbooks designed to account for the manipulation of the monitoring and control systems themselves.

  The analysis identifies the gap between facilities teams and security teams as the central obstacle, with neither side currently equipped to translate the other's risks into operational action.
body_zh: |
  根據《Data Center Knowledge》發布的分析報告，資料中心營運商正面臨電源與冷卻系統中的近最高危安全漏洞——正是這些系統決定著設施的正常運作。研究揭示，不斷電系統（UPS）及暖通空調（HVAC）控制器介面存在嚴重漏洞，可讓攻擊者無需驗證即可中斷電力或關閉冷卻功能。此一發現揭示了營運技術（OT）中長期受到忽視的攻擊面——OT係指控制設施實體流程的硬體與軟體，有別於負責運算與資料處理的資訊技術（IT）系統——而此時資料中心建設的加速步調，已超越治理機制所能跟上的速度。

  ## 電源與冷卻系統的安全漏洞

  近期研究發現，用於管理UPS裝置的網路介面存在近最高危漏洞；UPS在電網異常時為受保護負載提供電池備援電力。身份驗證繞過漏洞加上遠端程式碼執行條件，可讓攻擊者跳過登入控管並發出命令，中斷對受保護負載的電力供應。分析指出，在資料中心環境下，這不只是一時不便，而是可能引發設施整體規模停電的重大事件。

  另一組漏洞鏈則出現在一款被廣泛部署的HVAC（暖通空調）控制器中。該漏洞鏈包含一條無需驗證即可取得root層級遠端存取的路徑，以及敏感設施資料外洩的風險。綜合來看，這些條件可能讓攻擊者掌控冷卻系統，而冷卻系統直接決定高密度運算工作負載能否維持熱穩定。分析指出，隨著機架功率密度持續攀升，散熱餘裕不斷縮小，冷卻已從背景系統升格為攸關設施正常運作的關鍵依賴項目。

  在上述兩起案例中，分析均觀察到：大多數IT資安團隊鮮少列管的設備，恰恰就是決定設施能否維持上線的關鍵設備。

  ## IT與設施團隊之間的治理缺口

  根據分析，核心結構問題在於組織界線未能跟上實體基礎設施連網化的速度。UPS裝置、配電單元（PDU）、環境感測器及建築管理系統，如今普遍透過遠端存取工具及當初並非為當今威脅環境所設計的老舊協定連線至網路。

  設施團隊掌管這些設備的廠商關係，卻缺乏追蹤韌體風險的工作流程；資安團隊雖具備管理軟體漏洞的能力，但這些實體資產通常不在其資產清冊之列。分析指出，結果就是責任歸屬、可視性與優先順序三個面向均出現缺口——而停電事件往往正是從這個缺口中滋生。

  分析區分了IT資安與設施資安兩種場域在後果上的差異。企業IT資安主要建立在保護資料機密性的基礎上；在設施環境中，遭到入侵的主要後果是服務中斷：設備意外關機、感測器讀數失真導致警報延誤，或冷卻效能下降迫使運算硬體主動降頻以避免過熱。最嚴重的情況下，機架層級的電力事件可能連鎖波及上游設施系統。

  分析認為，這項差異應促使管理層重新衡量資安成效的指標。關鍵問題不只是能否防堵入侵，更在於當入侵發生時，能否維持安全運作。

  ## 超高速成長加劇供應鏈與配置風險

  資料中心建設的急速步調正帶來多重疊加的風險類別。分析指出，當企業每三個月就動工興建一座新設施時，因趕工而衍生的錯誤便更加普遍。實際案例包括：使用VLAN（虛擬區域網路，一種邏輯隔離網路流量的方法）進行網路分割時設定錯誤、管理埠暴露於不受信任的網路，以及新部署裝置上的預設憑證未予更換。

  供應鏈風險同樣持續攀升。電源與冷卻技術正快速演進，引入了大量新廠商，包括新創業者，以及分析所描述為「半信任地區」的供應商，這些廠商可能欠缺成熟的安全軟體開發實踐。分析指出，隨著這些技術嵌入關鍵基礎設施，建立管理網路實體供應鏈風險的計畫，將成為掌控第三方曝險的必要條件。

  ## AI工作負載集中資料中心，風險賭注節節升高

  分析以明確的系統性視角框架資料中心安全議題。隨著人工智慧成為企業營運、供應鏈物流及國家安全分析的關鍵依賴，資料中心的正常運作已從服務可用性問題，升格為經濟安全與公共安全議題。用於訓練及執行AI模型的設施被定義為戰略性資產，其停擺所帶來的連鎖效應，將遠超直接營運方的範疇。

  文章援引醫療體系相互依賴的類比：醫院不僅依賴醫療人員與建築硬體，更依賴病歷系統、藥品冷鏈儲存，以及維持環境條件所需的穩定電力。當這些支援系統失靈，醫療作業雖可持續，卻將轉為人工操作，速度更慢、風險更高。分析認為，同樣的連鎖邏輯如今已適用於資料中心基礎設施，而停電代價將隨所有仰賴它的業務規模等比例放大。

  ## 建議的管控措施以彌合缺口

  分析提出一套循序漸進的管控措施。起點是資產可視性：盤點灰色空間（設施電源與HVAC區域）與白色空間（運算機房）中存在哪些OT及網路實體裝置，涵蓋其所使用的協定及已安裝的韌體版本。

  在此基線之上，分析建議將資產對應至其運作用途，使修補工作與補償性管控能優先針對對正常運作最關鍵的系統。網路分割——限制哪些系統可與哪些系統通訊，並使控制網路與業務網路保持分離——被定義為正常運作的第一線管控措施，而非單純的資安手段。任何一次入侵都不應演變為全設施範圍的事故。

  廠商與承包商的遠端存取應強制實施強身份驗證機制、最低權限存取原則，以及可稽核的連線記錄。最後，分析呼籲將偵測與回應視為網路實體的專業訓練，讓資安事件與運作異常相互關聯，並設計涵蓋監控與控制系統本身遭操控情境的事件應變劇本。

  分析指出，設施團隊與資安團隊之間的缺口，是當前最核心的障礙——雙方目前均未具備將對方的風險轉化為具體行動的能力。
date: "2026-08-01"
source_published: "2026-07-31T16:00:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: The Data Center’s Hidden Attack Surface: Why OT Security Can’t Wait (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/cybersecurity/untitled"
    title: "The Data Center’s Hidden Attack Surface: Why OT Security Can’t Wait"
    trust: 3
    type: primary
    published_at: "2026-07-31T16:00:00.000Z"
---
