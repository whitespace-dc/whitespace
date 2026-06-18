---
title_en: "HPE Expands AI Networking Portfolio With Juniper Switches and Automation Tools"
title_zh: "HPE擴充AI網路版圖，Juniper交換器與自動化工具齊亮相"
summary_en: "Hewlett Packard Enterprise introduced new Juniper-based switching products and expanded AI-driven automation capabilities at HPE Discover 2026, arguing that network congestion is a primary cause of GPU underutilization in AI data centers. The announcements deepen integration between Juniper Networks technology and HPE's AI infrastructure stack."
summary_zh: "慧與科技（HPE）於HPE Discover 2026大會上推出多款以Juniper為基礎的全新交換器產品，並擴展旗下AI驅動自動化功能，直指網路壅塞是AI資料中心GPU使用率低落的主因。此次公告進一步深化Juniper Networks技術與HPE AI基礎架構整體方案的整合程度。"
body_en: |
  Hewlett Packard Enterprise introduced new Juniper-based switching products and extended AI-driven network automation across its portfolio at HPE Discover 2026, with the company framing network performance as a direct economic variable in the cost of running GPU-based AI infrastructure.

  The announcements span AI training clusters, inference environments, data center interconnects, and edge deployments. At their core is the addition of HPE Juniper Networking QFX switches — a line of high-performance data center switches — to HPE's AI Data Center Solution, managed through HPE Networking Data Center Director, a software platform for orchestrating data center network operations.

  ## Network congestion as a GPU utilization problem

  Rami Rahim, executive vice president and general manager of networking at HPE, told reporters at HPE Discover that unreliable or congested networks directly reduce the fraction of time GPUs spend doing productive work.

  "If your network has congestion, reliability problems, what will happen is those GPUs that you spent hundreds of millions or billions on could be used at 75% utilization, 50% utilization, 25% utilization," Rahim said. "Networking has truly become a force multiplier for massive AI data center investments."

  J.J. Kardwell, CEO of cloud provider Vultr — which announced a partnership with HPE around the same event — said the problem becomes more acute as AI clusters grow larger, because more of a workload's time is spent moving data between servers rather than computing.

  "The network between those cabinets and across those clusters becomes the key factor in accomplishing these massive training and inferencing workloads," Kardwell said at a media briefing during HPE Discover.

  Sameh Boujelbene, vice president at market research firm Dell'Oro Group, framed the shift in broader industry terms. "AI infrastructure is no longer just a GPU race," Boujelbene told Data Center Knowledge. "It is a systems race, and networking is becoming one of the key economic levers that determines who can turn raw compute into usable intelligence at scale and profitably."

  ## New switching products and AMD integration

  HPE introduced two new switching products as part of the announcement. The HPE Juniper Networking QFX5140 switch targets inference clusters — systems that run trained AI models to generate outputs — and edge AI deployments, where computing happens closer to where data is generated rather than in centralized data centers. A new QFX5252 switch tray is designed specifically for AMD's Helios rack-scale AI platform, which integrates compute and networking hardware at the rack level.

  HPE said both products are intended to reduce networking delays that leave GPUs waiting for data rather than processing workloads.

  Rahim said the Juniper acquisition has enabled HPE to address two distinct networking architectures used in AI deployments: scale-out, which connects many separate servers in a cluster, and scale-up, which tightly links processors within a single system or rack. Juniper had existing positions in routing and scale-out networking, he said, while tighter integration with HPE compute hardware has accelerated development of scale-up capabilities, including those used in AMD Helios.

  ## Mist and Marvis automation extend to Aruba installed base

  HPE is also bringing Juniper's AI-driven network management platform, Mist, to its Aruba networking product line. HPE Networking CX switches — part of HPE's Aruba portfolio — will now be supported within Mist, giving customers access to automated troubleshooting, service-level monitoring, and what HPE calls Marvis AI actions.

  Marvis is Juniper's AI assistant for network operations, capable of identifying and in some cases automatically correcting network problems. HPE said it is extending Marvis self-driving capabilities into Aruba Central, HPE's cloud-based network management platform, including automated wired port troubleshooting.

  New Mist capabilities announced include predictive analytics for hardware failures in optical transceivers and systems, and an AI reasoning engine that draws on operational telemetry, historical support cases, and network data to accelerate identification of root causes when problems occur.

  Rahim said more than 80% of network incidents in deployments using self-driving network features are now either automatically remediated or accompanied by immediate root-cause analysis for operators.

  Kardwell said automated recovery is increasingly important as AI infrastructure grows more complex and downtime costs rise. "The cost of failure and downtime is unacceptable. The ability of self-healing is so important," he said.

  ## Unified operations and security management

  HPE also announced integration between its network management and compute management platforms. HPE Mist Networking Data Center Assurance — a network visibility and analytics service — is now integrated with HPE Compute Ops Management and GreenLake, HPE's hybrid cloud services platform, providing operators with a combined view of networking and compute infrastructure.

  On the security side, HPE introduced a unified secure access service edge, or SASE, platform. SASE is a networking architecture that combines wide-area network management with cloud-delivered security functions. HPE's implementation combines SD-WAN — software-defined wide-area networking, which manages traffic across geographically dispersed sites — and security service edge capabilities through a single management console. The platform is built on HPE Networking EdgeConnect and incorporates zero-trust access controls, a security model that requires continuous verification of users and devices rather than assuming trust based on network location.

  ## Integration speed cited as faster than anticipated

  HPE completed its acquisition of Juniper Networks in 2024. Rahim said the pace of integration since the deal closed has exceeded internal expectations.

  "Things that I thought would be really difficult — getting teams together, making them feel like they're on the same team, making the tough decisions about roadmaps and so forth — have all gone easier than I expected," Rahim said.

  The new products and integrations represent the most concrete articulation to date of how HPE intends to position the combined Juniper and Aruba networking portfolios within its AI infrastructure strategy. The QFX5252 switch tray for AMD's Helios platform is among the most specific product-level signals of that direction, tying HPE networking hardware directly to third-party rack-scale AI systems.
body_zh: |
  慧與科技（HPE）於HPE Discover 2026大會上推出多款以Juniper為基礎的全新交換器產品，並擴展旗下產品組合中的AI驅動網路自動化功能，將網路效能定位為運行GPU型AI基礎架構時不可忽視的直接成本變因。

  此次公告涵蓋AI訓練叢集、推論環境、資料中心互連及邊緣部署等多個面向。核心亮點在於將HPE Juniper Networking QFX交換器——一款高效能資料中心交換器系列——納入HPE AI資料中心解決方案，並透過HPE Networking Data Center Director（一套用於統籌資料中心網路運作的軟體平台）進行統一管理。

  ## 網路壅塞即GPU使用率問題

  HPE網路部門執行副總裁暨總經理拉米·拉希姆（Rami Rahim）在HPE Discover大會上向媒體表示，不穩定或壅塞的網路會直接壓縮GPU的有效工作時間比例。

  「如果您的網路出現壅塞或可靠性問題，您花費數億甚至數十億資金購置的那些GPU，實際使用率可能只剩75%、50%，甚至25%，」拉希姆說道，「網路已真正成為大規模AI資料中心投資的力量乘數。」

  雲端服務商Vultr的執行長J.J. 卡德威爾（J.J. Kardwell）——該公司在同一場活動上宣布與HPE建立合作關係——表示，隨著AI叢集規模持續擴大，這個問題將愈發棘手，因為工作負載中愈來愈多的時間耗費在伺服器間的資料傳輸，而非實際運算。

  「機架之間與整個叢集的網路，成為完成這些大規模訓練與推論工作負載的關鍵因素，」卡德威爾在HPE Discover期間的媒體簡報會上說道。

  市場研究機構Dell'Oro Group副總裁薩梅赫·布傑爾貝內（Sameh Boujelbene）從更宏觀的產業視角詮釋這一轉變。「AI基礎架構已不再只是GPU競賽，」布傑爾貝內告訴Data Center Knowledge，「這是一場系統競賽，而網路正成為決定誰能夠規模化且獲利地將原始算力轉化為可用智慧的關鍵經濟槓桿之一。」

  ## 全新交換器產品與AMD整合

  HPE此次推出兩款全新交換器產品。HPE Juniper Networking QFX5140交換器鎖定推論叢集——即運行已訓練AI模型以產生輸出結果的系統——以及邊緣AI部署，亦即在資料生成端就近運算、而非集中傳回資料中心處理的應用場景。全新的QFX5252交換器托盤則專為AMD的Helios機架規模AI平台設計，該平台在機架層級整合了運算與網路硬體。

  HPE表示，兩款產品均旨在縮短網路延遲，避免GPU因等待資料而閒置、無法充分處理工作負載。

  拉希姆指出，收購Juniper讓HPE得以因應AI部署中兩種截然不同的網路架構：橫向擴展（scale-out）架構，用於連結叢集中多台獨立伺服器；以及縱向擴展（scale-up）架構，用於緊密連結單一系統或機架內的處理器。他說，Juniper在路由與橫向擴展網路領域原本就具備既有優勢，而與HPE運算硬體的深度整合則加速了縱向擴展能力的開發，包括應用於AMD Helios的相關功能。

  ## Mist與Marvis自動化擴展至Aruba既有客戶群

  HPE同時宣布將Juniper的AI驅動網路管理平台Mist引入旗下Aruba網路產品線。HPE Networking CX交換器——HPE Aruba產品組合的一部分——將獲得Mist平台支援，讓客戶能夠使用自動化故障排除、服務等級監控，以及HPE所稱的Marvis AI功能。

  Marvis是Juniper用於網路維運的AI助理，能夠識別網路問題，在某些情況下甚至可自動進行修正。HPE表示，正將Marvis自動駕駛功能延伸至Aruba Central——HPE的雲端網路管理平台——包括有線連接埠的自動化故障排除。

  此次公告的全新Mist功能包含：針對光收發器與系統硬體故障的預測性分析，以及一套AI推理引擎，能整合運營遙測資料、歷史技術支援案例與網路資料，以加速問題發生時的根本原因識別。

  拉希姆表示，在採用自動駕駛網路功能的部署中，逾80%的網路事故現已實現自動修復，或在問題發生時即時為操作人員提供根本原因分析。

  卡德威爾表示，隨著AI基礎架構日趨複雜、停機成本持續攀升，自動化復原能力愈發重要。「故障與停機的代價令人難以承受，自我修復能力至關重要，」他說道。

  ## 統一化運營與資安管理

  HPE同時宣布網路管理與運算管理平台之間的整合。HPE Mist Networking Data Center Assurance——一套網路可視性與分析服務——現已與HPE Compute Ops Management及GreenLake（HPE的混合雲服務平台）整合，讓操作人員得以在單一視角同時掌握網路與運算基礎架構的全貌。

  在資安方面，HPE推出統一化的安全存取服務邊緣（SASE）平台。SASE是一種將廣域網路管理與雲端交付資安功能相結合的網路架構。HPE的實作方案透過單一管理主控台，整合了SD-WAN（軟體定義廣域網路，負責管理地理上分散各站點間流量）與安全服務邊緣（SSE）功能。該平台以HPE Networking EdgeConnect為基礎構建，並融入零信任存取控制——這是一種對使用者與裝置持續進行身份驗證的資安模型，而非依據網路位置來預設信任關係。

  ## 整合速度超乎預期

  HPE於2024年完成對Juniper Networks的收購。拉希姆表示，交易完成後的整合進度已超越內部預期。

  「我原本以為會非常困難的事情——讓兩個團隊走在一起、讓他們感覺像是同一個團隊、就技術藍圖做出艱難決策等等——全都比我預期的要順利，」拉希姆說道。

  這些新產品與整合方案，是迄今為止HPE最具體地詮釋其如何將Juniper與Aruba整合網路產品組合定位於AI基礎架構策略中的表態。其中，針對AMD Helios平台的QFX5252交換器托盤，是最明確的產品層面訊號之一，將HPE的網路硬體直接與第三方機架規模AI系統緊密綁定在一起。
date: "2026-06-19"
source_published: "2026-06-17T12:59:48.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["AMD", "Juniper"]
trust:
  score: 3
  reasoning: "Single source: HPE Targets GPU Utilization With New AI Networking Portfolio (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/networking/hpe-targets-gpu-utilization-with-new-ai-networking-portfolio"
    title: "HPE Targets GPU Utilization With New AI Networking Portfolio"
    trust: 3
    type: primary
    published_at: "2026-06-17T12:59:48.000Z"
---
