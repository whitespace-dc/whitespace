---
title_en: "NVIDIA Launches DSX Pod Container to Cut AI Data Center Deploy Time to 14 Days"
title_zh: "輝達推出DSX Pod貨櫃模組，AI資料中心部署縮短至14天"
summary_en: "NVIDIA unveiled the DSX Pod at GTC Berlin, a containerized AI data center module housing seven Vera Rubin NVL72 racks that can be installed at a prepared site in 14 days, compared to roughly six months for a conventional build. Partners including Dell Technologies, HPE, and Schneider Electric are expected to begin delivering units worldwide in early 2027."
summary_zh: "輝達於GTC柏林大展發表DSX Pod，這是一款容納七座Vera Rubin NVL72機架的貨櫃化AI資料中心模組，可在預備場地14天內完成安裝，相較傳統建置所需約六個月大幅縮短部署時程；戴爾科技、HPE及施耐德電機等17家合作夥伴預計於2027年初開始在全球交付。"
body_en: |
  NVIDIA unveiled the DSX Pod at GTC Berlin, a containerized AI data center unit housing seven Vera Rubin NVL72 racks that the company says can be installed at a prepared site in 14 days, cutting deployment time from roughly six months for a conventional on-site build.

  The announcement came during CEO Jensen Huang's keynote at NVIDIA's 2026 GTC Berlin trade show. NVIDIA said 17 partners, including Bull, Dell Technologies, HPE, Lenovo, Eaton, Schneider Electric, and Vertiv, are expected to begin delivering DSX Pods worldwide in early 2027. NVIDIA will not manufacture or sell the units itself; they will be built and delivered by its partners.

  ## What the DSX Pod contains

  Each DSX Pod packages seven Vera Rubin NVL72 racks — NVIDIA's current-generation AI server platform — along with networking, cabling, and cooling into what is believed to be a standard 40-foot intermodal shipping container; NVIDIA has not confirmed the exact dimensions. The containers arrive fully assembled, tested, and validated. On-site, they still require connection to external power, networking, and a larger cooling infrastructure, but need no further hardware integration work.

  Each pod delivers 25 exaflops (EFLOPS) of AI inference capacity, according to ServeTheHome. Multiple pods can be combined on a single site to form a larger compute cluster. Because they use a standard intermodal container format, DSX Pods can be transported by truck rather than requiring heavy rail, allowing delivery to a wider range of locations.

  ## Faster deployment through factory builds

  Ian Buck, NVIDIA's vice president of hyperscale and high-performance computing, described the product at a media briefing as "a fully assembled, fully tested, fully pre-plumbed, prebuilt, pre-validated container that is the building block for AI factories," adding that it is "designed to accelerate Europe's infrastructure deployment and dramatically shorten the time to first token."

  NVIDIA's stated goal with DSX Pod is to shift Vera Rubin system construction from an on-site activity to factory production, capturing the quality and efficiency advantages of standardized manufacturing. Buck said the product is intended for organizations looking to bring compute online at the hundreds-of-megawatts scale more quickly while reducing the complexity of a conventional site build.

  NVIDIA chose GTC Berlin for the announcement in part because of its strategic focus on European AI infrastructure, but Buck confirmed that DSX Pods are intended for worldwide deployment.

  IDC analyst Ashish Nadkarni identified three primary use cases for the product: sovereign AI deployments that require physical isolation, smaller-footprint AI builds for specific needs, and edge AI environments. "It provides accelerated compute capacity in a turnkey fashion wherever there is demand," Nadkarni said.

  ## Supply chain capacity targets

  NVIDIA used GTC Berlin to outline a set of manufacturing capacity targets across the supply chain inputs required to support growing AI infrastructure demand. The company and its partners announced plans to:

  - Increase substrate capacity 2.5 times over the next three years, drawing on suppliers IBIDEN, Samsung Electro-Mechanics, and Unimiron
  - Expand advanced packaging capacity by more than 300 percent by 2028, with supplier Amkor targeting a 4x increase in interposer wafer output
  - Double testing capacity by 2027 at KYEC
  - Increase optical engine capacity for co-packaged optics 15 times by mid-2027, with a goal of doubling that figure again — reaching 30 times current capacity — by the end of 2028

  Co-packaged optics (CPO) integrates optical fiber connectivity directly with computing chips, enabling denser, higher-bandwidth networking compared with copper-based connections. NVIDIA is transitioning toward CPO as part of the Vera Rubin generation; because the technology is ramping from a relatively small base, the required proportional increase in optical engine supply is correspondingly large.

  ## OpenShell governance architecture

  NVIDIA also introduced the OpenShell Reference Architecture, a design guide for organizations deploying AI agents at scale. The architecture is intended to help operators define what AI agents can access and do, monitor their behavior, and enforce policy controls if unsafe activity is detected.

  Justin Boitano, NVIDIA's vice president of enterprise, described a system that combines Vera Rubin NVL72 infrastructure for AI training and inference with Vera CPU systems that run and manage what NVIDIA calls the "agent harness." BlueField-4 DPUs — data processing units that handle networking, security, and storage tasks as dedicated offload chips — act as an isolated security enforcement layer between the two, inspecting traffic and enabling policy actions including disconnecting an agent if unsafe behavior is detected.

  Unlike the DSX Pod, OpenShell is not new hardware or software but a reference document and set of best practices for using existing NVIDIA platforms together. The architecture document and associated software were made available at GTC Berlin.

  NVIDIA said companies adopting the OpenShell Reference Architecture include Anthropic, AWS, Google Cloud, Meta, Microsoft, OpenAI, and Perplexity.

  ## Industry implications

  The DSX Pod addresses a recurring constraint in large-scale AI infrastructure deployment: the gap between demand for compute capacity and the time required to bring it online. By standardizing the rack configuration and moving integration work to a factory setting, NVIDIA and its partners are attempting to compress that gap significantly for operators with prepared sites.

  NVIDIA expects partners to begin delivering DSX Pods worldwide in early 2027.
body_zh: |
  輝達（NVIDIA）於GTC柏林大展上發表DSX Pod，這是一款可容納七座Vera Rubin NVL72機架的貨櫃化AI資料中心單元，該公司表示，在場地已備妥的前提下，安裝作業僅需14天，相較於傳統現場建置所需的約六個月，大幅縮短部署時程。

  消息由執行長黃仁勳在2026年NVIDIA GTC柏林大展的主題演講中宣布。輝達表示，包含Bull、戴爾科技（Dell Technologies）、HPE、聯想（Lenovo）、伊頓（Eaton）、施耐德電機（Schneider Electric）及維谛（Vertiv）在內的17家合作夥伴，預計於2027年初開始在全球交付DSX Pod。輝達本身不製造或銷售此產品，而是由合作夥伴負責製造與交付。

  ## DSX Pod的配置內容

  每個DSX Pod封裝了七座Vera Rubin NVL72機架——輝達現行世代AI伺服器平台——並將網路設備、線纜及冷卻系統整合至據信符合標準40英尺聯運貨櫃規格的容器內；輝達尚未確認確切尺寸。貨櫃抵達時已完成組裝、測試與驗證。在現場端，仍需連接外部電力、網路及更大型的冷卻基礎設施，但無需進行任何額外的硬體整合作業。

  根據ServeTheHome的報導，每個Pod可提供25 EFLOPS的AI推論算力。多個Pod可於單一場地內相互組合，構成更大規模的運算叢集。由於採用標準聯運貨櫃格式，DSX Pod可直接以卡車運輸，無需仰賴重型鐵路，因此可配送至更廣泛的地點。

  ## 工廠生產加速部署

  輝達超大規模與高效能運算副總裁伊恩·巴克（Ian Buck）在媒體簡報中將此產品描述為「一個完全組裝、完全測試、完全預先配管、預先建置、預先驗證的貨櫃，是AI工廠的基礎構件」，並補充說明其「旨在加速歐洲的基礎設施部署，並大幅縮短首個token的生成時間」。

  輝達推出DSX Pod的核心目標，是將Vera Rubin系統的建置工作從現場施工轉移至工廠生產，從而發揮標準化製造在品質與效率上的優勢。巴克表示，此產品面向的是希望以數百MW規模更快速上線算力、同時降低傳統場地建置複雜度的企業組織。

  輝達選擇GTC柏林作為發表場合，部分原因在於其對歐洲AI基礎設施的戰略性重視，但巴克確認DSX Pod的交付範圍涵蓋全球。

  IDC分析師阿希什·納德卡尼（Ashish Nadkarni）點出此產品的三大主要應用場景：需要實體隔離的主權AI部署、針對特定需求的小占地AI建置，以及邊緣AI環境。納德卡尼表示：「它以交鑰匙方式，在任何有需求的地方提供加速算力。」

  ## 供應鏈產能目標

  輝達藉GTC柏林大會，概述了一系列因應AI基礎設施需求持續擴張所需的供應鏈製造產能目標。輝達及其合作夥伴宣布的計畫包括：

  - 未來三年內將基板產能提升2.5倍，供應商包括揖斐電（IBIDEN）、三星電機（Samsung Electro-Mechanics）及景碩（Unimiron）
  - 至2028年將先進封裝產能擴充逾300%，供應商安靠（Amkor）目標是將中介層（interposer）晶圓產出提升至4倍
  - 至2027年由京元電子（KYEC）將測試產能倍增
  - 至2027年中將共封裝光學（CPO）所需光學引擎產能提升15倍，並以在2028年底前再翻倍——達到現有產能30倍——為目標

  共封裝光學（CPO）是將光纖連接直接整合至運算晶片的技術，相較於銅線連接，可實現更高密度、更大頻寬的網路架構。輝達正以Vera Rubin世代推動CPO轉型；由於這項技術的起始規模相對較小，所需的光學引擎供應比例增幅也相應龐大。

  ## OpenShell治理架構

  輝達亦發表了OpenShell參考架構，這是一套專為大規模部署AI代理（agent）的企業組織所設計的設計指南，旨在協助營運者定義AI代理可存取的資源與可執行的操作、監控其行為，並在偵測到不安全活動時執行政策控管措施。

  輝達企業副總裁賈斯汀·波伊塔諾（Justin Boitano）描述了一套系統架構：以Vera Rubin NVL72基礎設施負責AI訓練與推論，搭配運行並管理輝達所謂「代理框架（agent harness）」的Vera CPU系統。BlueField-4 DPU（資料處理單元，作為專屬卸載晶片處理網路、資安與儲存任務）則在兩者之間扮演獨立的資安執法層角色，負責檢查流量並執行政策動作，包括在偵測到不安全行為時切斷代理的連線。

  OpenShell與DSX Pod不同，並非全新的硬體或軟體，而是一份參考文件，以及善用現有輝達平台的最佳實踐集。架構文件及相關軟體已於GTC柏林大會上公開。

  輝達表示，採用OpenShell參考架構的企業包括Anthropic、AWS、Google Cloud、Meta、Microsoft、OpenAI及Perplexity。

  ## 產業影響

  DSX Pod正面回應了大規模AI基礎設施部署中一個反覆出現的制約瓶頸：算力需求與實際上線所需時間之間的落差。透過標準化機架配置並將整合作業移至工廠端執行，輝達及其合作夥伴試圖為場地已備妥的營運者大幅壓縮這段差距。

  輝達預計合作夥伴將於2027年初開始在全球交付DSX Pod。
date: "2026-10-22"
source_published: "2026-10-21T15:12:26.000Z"
category: "mep"
secondary_categories: ["compute"]
region: []
vendor: ["AWS", "Eaton", "Google Cloud", "Nvidia", "Schneider Electric", "Vertiv"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Nvidia Unveils DSX Pod for Faster AI Data Center Builds (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://www.datacenterknowledge.com/ai-data-centers/nvidia-unveils-dsx-pod-for-faster-ai-data-center-builds"
    title: "Nvidia Unveils DSX Pod for Faster AI Data Center Builds"
    trust: 3
    type: primary
    published_at: "2026-10-21T15:12:26.000Z"
  - url: "https://www.servethehome.com/nvidia-gtc-berlin-2026-nvidia-intros-dsx-pods-and-more/"
    title: "NVIDIA GTC Berlin 2026 NVIDIA Intros DSX PODs and More"
    trust: 3
    type: corroborating
    published_at: "2026-10-21T16:30:25.000Z"
---
