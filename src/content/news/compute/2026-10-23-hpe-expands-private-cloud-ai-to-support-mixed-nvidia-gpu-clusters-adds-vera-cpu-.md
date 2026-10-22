---
title_en: "HPE expands Private Cloud AI to support mixed Nvidia GPU clusters, adds Vera CPU rack"
title_zh: "HPE擴展私有雲AI平台，支援混合輝達GPU叢集並新增Vera CPU機架"
summary_en: "HPE has updated its Private Cloud AI platform to let customers combine Nvidia H200 and RTX PRO 6000 Blackwell GPUs in a single cluster and has added a liquid-cooled Nvidia Vera CPU rack supporting agentic AI workloads."
summary_zh: "HPE於2026年10月22日宣布更新其私有雲AI平台，允許客戶在同一叢集中混用輝達H200與RTX PRO 6000 Blackwell顯示卡，並新增支援代理型AI工作負載的液冷輝達Vera CPU機架。"
body_en: |
  HPE has expanded its Private Cloud AI platform to support mixed Nvidia GPU configurations within a single cluster and has added a liquid-cooled Nvidia Vera CPU rack to the offering, the company announced October 22, 2026.

  The update allows customers to combine Nvidia H200 and RTX PRO 6000 Blackwell GPUs in the same cluster. HPE said the approach is designed to support a broader mix of AI workloads — meaning organizations are not required to standardize on a single GPU generation or class across a deployment.

  ## How scheduling works across mixed hardware

  To manage workload placement across the heterogeneous GPU pool, the platform uses Nvidia's KAI Scheduler, which HPE described as providing quota- and priority-based scheduling. That means compute resources can be allocated to teams or projects according to defined limits and relative priority, rather than requiring manual assignment to specific hardware.

  ## Vera CPU rack specifications

  HPE also announced a liquid-cooled Nvidia Vera CPU rack as a new addition to the platform's infrastructure portfolio. The company said the rack delivers 80 percent faster agentic CPU performance — referring to performance for AI agents, software systems that autonomously execute multi-step tasks.

  The rack's specifications, as stated by HPE:

  - 256 Nvidia Vera CPUs
  - BlueField4 DPUs (data processing units, which offload networking and security tasks from the main CPU)
  - Support for 22,500 sandboxes (isolated execution environments for running agent workloads)

  The rack supports OpenShell and Sentry, which HPE described as Nvidia's hardware-based governance tools for agentic AI, enabling enforcement of security and access policies at the infrastructure level.

  ## Platform background

  HPE Private Cloud AI was first launched at HPE's 2024 Discover event. The platform integrates Nvidia's AI computing, networking, and software with HPE's AI storage, compute infrastructure, and GreenLake hybrid cloud management service. It is designed to support inference, fine-tuning, and RAG — retrieval-augmented generation, a technique that grounds AI outputs in an organization's proprietary data — while giving operators control over data privacy, security, and governance.

  The October 2026 update also expands access mechanisms for the platform, with HPE saying the changes make it easier for developers, independent software vendors, and AI agents themselves to securely access, integrate with, and consume enterprise AI services.

  ## What the expansion means

  The ability to mix H200 and RTX PRO 6000 Blackwell GPUs in a single cluster is relevant to enterprise buyers managing diverse workload profiles, where training, inference, and fine-tuning tasks have different compute requirements. Forcing hardware uniformity across a cluster can leave capability or capacity underutilized; the mixed-cluster model, backed by priority-based scheduling, is intended to address that constraint.

  The addition of hardware-level governance tools — OpenShell and Sentry on the Vera CPU rack — reflects the platform's positioning toward regulated industries and sensitive-data environments where software-only controls may not satisfy compliance requirements.

  "AI agents are becoming an essential part of how enterprises operate and create value," said Cheri Williams, SVP and General Manager, Private Cloud and Flex Solutions at HPE. "As organizations deploy AI across industries and increasingly sensitive environments, they need infrastructure that gives them greater control over security, sovereignty, and how enterprise data is accessed and used."

  The platform's Vera CPU rack, with its 22,500-sandbox capacity and hardware governance support, represents HPE's current infrastructure ceiling for agentic AI deployments within the Private Cloud AI offering.
body_zh: |
  ## HPE擴展私有雲AI平台，支援混合輝達GPU叢集並新增Vera CPU機架

  HPE於2026年10月22日宣布，旗下私有雲AI平台（Private Cloud AI）已進行重大更新，新增對混合輝達GPU配置的支援，允許客戶在同一叢集內同時部署不同型號的顯示卡，並將液冷式輝達Vera CPU機架納入產品組合，以因應代理型AI工作負載的需求。

  此次更新讓客戶能夠在同一叢集中混合搭配輝達H200與RTX PRO 6000 Blackwell顯示卡。HPE表示，這項設計旨在支援更多元的AI工作負載組合，企業在部署時不必強制統一使用單一世代或同一類型的GPU。

  ## 混合硬體環境下的排程機制

  為了在異質GPU資源池中管理工作負載的分配，該平台採用輝達的KAI排程器（KAI Scheduler）。HPE說明，此排程器提供配額制與優先權制的資源調度機制，可依據預先設定的配額上限與相對優先順序，將運算資源分配給不同團隊或專案，無需人工指定特定硬體。

  ## Vera CPU機架規格

  HPE同步宣布，將液冷式輝達Vera CPU機架列為平台基礎架構產品組合的新成員。HPE表示，此機架的代理型CPU運算效能提升達80%——此處所指的代理型效能，是針對AI代理程式的執行能力，即能自主完成多步驟任務的軟體系統。

  根據HPE公布的規格，Vera CPU機架具備以下配置：

  - 256顆輝達Vera CPU
  - BlueField4 DPU（資料處理器，負責將網路與資安任務從主CPU卸載）
  - 支援22,500個沙箱環境（供代理型工作負載運行的隔離執行環境）

  此機架支援OpenShell與Sentry，HPE說明這兩項工具是輝達針對代理型AI所推出的硬體層級治理工具，能夠在基礎架構層面強制執行資安政策與存取控管。

  ## 平台背景

  HPE私有雲AI平台最初於2024年HPE Discover大會上正式發表。該平台整合了輝達的AI運算、網路及軟體能力，以及HPE的AI儲存系統、運算基礎架構，並搭配GreenLake混合雲管理服務。其設計目標涵蓋推論、微調與RAG（檢索增強生成，一種將AI輸出結果植基於企業專有資料的技術），同時讓維運人員能夠掌控資料隱私、資安與治理。

  2026年10月的更新亦擴充了平台的存取機制，HPE表示，此次調整使開發者、獨立軟體廠商以及AI代理程式本身，能夠更便捷且安全地存取、整合及使用企業AI服務。

  ## 此次擴展的意義

  在同一叢集中混用H200與RTX PRO 6000 Blackwell顯示卡的能力，對於需要管理多元工作負載的企業買家而言具有重要意義——訓練、推論與微調等任務各有不同的運算需求。強制要求叢集內硬體一致，往往導致某些運算能力或資源容量閒置；透過優先權排程支撐的混合叢集模式，正是為了解決這一限制。

  在Vera CPU機架上導入硬體層級治理工具（OpenShell與Sentry），則反映出該平台積極向受監管產業及高敏感資料環境靠攏的定位——在這些場景中，單純仰賴軟體層控管往往難以滿足合規要求。

  HPE私有雲與彈性方案事業部資深副總裁暨總經理Cheri Williams表示：「AI代理程式正逐漸成為企業營運與創造價值不可或缺的一環。隨著各產業組織在日益敏感的環境中部署AI，他們需要能夠賦予更強大控管能力的基礎架構，以確保資安、資料主權，以及企業資料的存取與使用方式均受到妥善管理。」

  Vera CPU機架具備22,500個沙箱環境的容量，並支援硬體層級治理，代表HPE目前在私有雲AI產品組合中，針對代理型AI部署所能提供的最高基礎架構規格。
date: "2026-10-23"
source_published: "2026-10-22T16:20:35.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: HPE expands Private Cloud AI solution to support mixed Nvidia hardware clusters, launches Vera CPU rack (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/news/hpe-expands-private-cloud-ai-solution-to-support-mixed-nvidia-hardware-clusters-launches-vera-cpu-rack/"
    title: "HPE expands Private Cloud AI solution to support mixed Nvidia hardware clusters, launches Vera CPU rack"
    trust: 3
    type: primary
    published_at: "2026-10-22T16:20:35.000Z"
---
