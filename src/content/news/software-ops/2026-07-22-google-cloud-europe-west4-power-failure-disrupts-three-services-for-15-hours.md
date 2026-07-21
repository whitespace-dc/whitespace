---
title_en: "Google Cloud europe-west4 Power Failure Disrupts Three Services for 15 Hours"
title_zh: "Google Cloud歐洲資料中心大停電　三項服務中斷逾15小時"
summary_en: "An electrical fault on the upstream grid serving Google Cloud's europe-west4-a zone knocked out power distribution and cooling for roughly 15 hours, taking down VMware Engine, NetApp Volumes, and Bare Metal Solutions. The incident has renewed scrutiny of how transparently hyperscalers communicate the true resilience architecture of their managed services."
summary_zh: "Google Cloud位於荷蘭的europe-west4-a可用區因上游電網發生電力故障，導致供電與冷卻系統失效長達約15小時，旗下VMware Engine、NetApp Volumes及Bare Metal Solutions三項服務相繼中斷。此事件再度引發外界對超大規模雲端業者如何透明揭露其託管服務真實備援架構的質疑。"
body_en: |
  An electrical fault on the upstream power grid serving Google Cloud's europe-west4-a availability zone triggered a cascade that disabled power distribution and cooling equipment in the affected data center, causing approximately 15 hours of disruption to three services: Google Cloud VMware Engine (GCVE), NetApp Volumes, and Bare Metal Solutions (BMS). Google disclosed the incident in a post-incident notice and has apologized to affected customers.

  The sequence, as Google described it, began with an electrical fault on the upstream grid that fed the data center's power distribution infrastructure. The loss of power caused the cooling systems to fail. To prevent hardware damage and protect customer data from the resulting high-temperature environment, Google said it proactively reduced workloads in the zone. The company said a final incident report, including preventive measures, is still in preparation.

  ## Which services were affected and why

  The three affected services — GCVE, which runs VMware-compatible virtual machines; NetApp Volumes, a managed file-storage service; and BMS, which provides access to dedicated physical servers — share a dependency on specialized or tightly coupled infrastructure. That dependency appears to have tied them to the single data center that lost power, even though other parts of the europe-west4 region continued operating normally.

  Google, like other major cloud providers, advises customers to distribute workloads across multiple regions and availability zones to improve fault tolerance. The europe-west4-a outage illustrates the limit of that guidance when a managed service is itself anchored to a single facility: a zone-level event becomes a service-level outage regardless of how the customer has structured their deployment.

  ## The transparency gap analysts have identified

  Analysts quoted in coverage of the incident said the deeper issue is not the outage itself but the difficulty customers face in understanding which services carry single-facility risk. Customers are routinely told to adopt multi-region, multi-zone architectures, but they generally cannot determine whether a specific managed service replicates its underlying infrastructure across facilities or concentrates it in one location.

  The analysts noted that GCVE, NetApp Volumes, and BMS are not unusual in this respect. AWS, Azure, and Google all operate services that rely on dedicated hardware, proprietary storage platforms, or tightly integrated infrastructure that does not distribute across multiple physical sites the way core compute and object storage services typically do. The result, they said, is that enterprises sometimes assume cloud abstraction layers provide more physical redundancy than actually exists.

  ## Context: a similar 2023 incident in europe-west9

  The episode echoes a 2023 incident in Google Cloud's europe-west9-a zone, where a water leak at a facility not owned by Google caused a subset of services to fail after a single building was affected. In that case, as in this one, analysts observed that the real-world architecture of a cloud region proved harder for customers to interpret than the zone and region model suggests.

  ## What comes next

  Google has committed to publishing a final post-incident report covering both the sequence of events and the preventive measures it intends to implement. Until that report is released, the precise scope of infrastructure affected and the specific steps Google will take to reduce the risk of recurrence remain undisclosed.
body_zh: |
  ## Google Cloud歐洲資料中心大停電　三項服務中斷逾15小時

  上游電網發生電力故障，進而引發連鎖效應，導致Google Cloud歐洲europe-west4-a可用區的供配電與冷卻設備全面失效。此次事故造成三項服務——Google Cloud VMware Engine（GCVE）、NetApp Volumes以及Bare Metal Solutions（BMS）——合計中斷約15小時。Google事後發布事後說明公告，並向受影響的客戶致歉。

  根據Google的說明，事件起因於供應該資料中心供配電基礎設施的上游電網出現電力故障。斷電後，冷卻系統隨之失效。為防止硬體損壞並在高溫環境下保護客戶資料，Google表示已主動縮減該可用區的工作負載。公司並指出，包含預防措施在內的最終事故報告仍在準備當中。

  ## 受影響的服務及原因

  此次受波及的三項服務中，GCVE負責執行與VMware相容的虛擬機器，NetApp Volumes是一項託管式檔案儲存服務，BMS則提供專用實體伺服器的存取。這三項服務共同依賴專用或緊密耦合的基礎設施，此一依賴關係使它們與單一資料中心深度綁定，即便europe-west4區域的其他部分持續正常運作，仍難逃停機命運。

  Google與其他主要雲端業者相同，建議客戶將工作負載分散部署於多個區域與可用區，以提升容錯能力。然而，europe-west4-a的停電事件清楚揭示這項建議的侷限：當一項託管服務本身即錨定於單一設施，可用區層級的事故便會演變為服務層級的全面中斷，無論客戶如何規劃其部署架構，皆無從倖免。

  ## 分析師點出的透明度落差

  針對此事件的報導中，多位分析師指出，更深層的問題並非停電事件本身，而是客戶難以判斷哪些服務存在單一設施風險。客戶平日被告知應採用多區域、多可用區架構，卻普遍無從得知某項特定託管服務的底層基礎設施是否跨設施備援，抑或集中於單一地點。

  分析師亦指出，GCVE、NetApp Volumes與BMS在這方面並非特例。AWS、Azure與Google旗下均有服務倚賴專用硬體、專屬儲存平台或緊密整合的基礎設施，這類服務無法像核心運算與物件儲存服務那樣分散至多個實體站點。他們表示，這樣的現實導致企業往往誤以為雲端抽象層所提供的實體備援能力，遠比實際情況更為完善。

  ## 背景：2023年europe-west9的類似事件

  此次事故與2023年Google Cloud europe-west9-a可用區的停機事件如出一轍。當時，一棟並非Google自有的建築發生漏水事故，導致該可用區部分服務中斷。分析師在那次事件中同樣觀察到：雲端區域的實際架構，遠比可用區與區域的概念模型所呈現的更難讓客戶清楚解讀。

  ## 後續發展

  Google已承諾將發布最終事後報告，涵蓋事件的完整經過以及計畫實施的預防措施。在該報告公布之前，此次受影響的基礎設施確切範圍，以及Google為降低事故重演風險所將採取的具體步驟，目前均尚未對外說明。
date: "2026-07-22"
source_published: "2026-07-21T10:10:45.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["AWS", "Azure", "Google Cloud"]
trust:
  score: 3
  reasoning: "Single source: 資料中心「韌性」撲朔迷離難以掌握！Google Cloud 電力故障只影響三項服務 (trust 3/5)."
sources:
  - url: "https://infosecu.technews.tw/2026/07/21/google-cloud-outage-shows-its-still-hard-to-understand-hyperscalers-real-resilience-regimes/"
    title: "資料中心「韌性」撲朔迷離難以掌握！Google Cloud 電力故障只影響三項服務"
    trust: 3
    type: primary
    published_at: "2026-07-21T10:10:45.000Z"
---
