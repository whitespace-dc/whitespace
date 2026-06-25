---
title_en: "HPE and NVIDIA expand AI Factory stack to push agentic AI into enterprise production"
title_zh: "HPE與輝達擴展AI Factory技術堆疊，推動自主AI進入企業生產"
summary_en: "HPE announced a set of new technologies built into its AI Factory with NVIDIA solution aimed at moving agentic AI systems from experimentation into live production environments, with new server hardware, security tooling, and storage optimizations. The announcements include a new HPE ProLiant server powered by NVIDIA's Vera CPU and software components designed to govern, monitor, and recover AI agent workloads at scale."
summary_zh: "HPE宣布一系列整合至「HPE AI Factory with NVIDIA」解決方案的新技術，目標是將自主AI系統從實驗階段推進至正式生產環境，涵蓋新款伺服器硬體、資安工具及儲存最佳化。此次公告包括搭載輝達Vera CPU的HPE ProLiant新型伺服器，以及用於治理、監控並復原大規模AI代理工作負載的軟體元件。"
body_en: |
  ## HPE, NVIDIA push agentic AI into production with new hardware and governance stack

  Hewlett Packard Enterprise (HPE) on June 25 announced a range of new technologies intended to help enterprise customers move agentic AI — systems in which AI models act autonomously, adapt to conditions, and collaborate with other agents — out of pilot environments and into full production operations. The additions extend the HPE AI Factory with NVIDIA, a joint full-stack solution spanning networking, servers, storage, and software.

  HPE President and CEO Antonio Neri said the move toward greater AI autonomy requires infrastructure built for safety, governance, and cost-efficient scale. "HPE and NVIDIA together deliver full-stack AI solutions — from networking, servers, and storage to software — that lay the foundation for the agentic enterprise, helping it move from experimentation to production with greater control and confidence," Neri said in the announcement.

  NVIDIA Founder and CEO Jensen Huang framed the development as a fundamental reshaping of the compute stack. "In the age of AI agents, every layer of the compute stack is being reshaped," Huang said, adding that the joint solution combines NVIDIA's Vera CPU, accelerated computing infrastructure, and secure AI software to help enterprises convert data into autonomous action.

  ## New hardware: ProLiant DL394 Gen12 with NVIDIA Vera CPU

  At the hardware level, HPE Private Cloud AI — the joint one-stop AI factory product developed with NVIDIA — adds the HPE ProLiant Compute DL394 Gen12 server, which runs on NVIDIA's Vera CPU. HPE described the server as providing an optimized compute base for agentic AI and high-performance data processing, along with security and management capabilities.

  The addition of NVIDIA's Vera CPU to a ProLiant platform marks an expansion of the silicon options within HPE's enterprise AI server line.

  ## Security and governance tooling

  A central theme of the announcements is providing enterprises with the controls they need to approve, monitor, and recover AI agent workloads — a concern that has slowed enterprise adoption of autonomous AI systems.

  HPE Private Cloud AI now incorporates the NVIDIA Agent Toolkit, a software layer that includes the NVIDIA Nemotron family of open-source models, NVIDIA NemoClaw, and the NVIDIA OpenShell secure execution environment. Together, HPE said, these components form an agent operating system capable of high-efficiency inference while allowing customers to monitor agent behavior, enforce safety guardrails, and reduce deployment risk.

  HPE Zerto Software, the company's data protection product, gains new capabilities to detect anomalous AI agent behavior and use continuous data protection (CDP) — a technique that records data changes in near-real time — to roll systems back to a state prior to an incident. HPE Private Cloud AI also adds support for a secure local agent registry, through which organizations can approve which AI models, skills, and tools agents are permitted to use, under centralized governance and security policies.

  ## Storage and data pipeline performance

  HPE identified data access as a potential bottleneck for AI agents operating at scale and announced optimizations to its storage and data management products.

  The HPE Alletra Storage MP X10000 gains embedded intelligence that automatically applies metadata and governance policies to unstructured data, preparing it for AI pipelines. HPE said this can reduce token response time — the speed at which a model can retrieve and process information — by up to 20 times. Separately, HPE Private Cloud AI can improve instruction-processing efficiency and increase token throughput, the volume of text the system can generate per unit of time, by up to 20 percent.

  HPE Data Fabric Software, the company's data management layer, extends support for the Model Context Protocol (MCP) — an emerging standard for connecting AI models to data sources and tools — to Apache Airflow, a widely used open-source workflow orchestration platform. HPE said the integration increases data availability for agentic workflows. The update also introduces enterprise-grade AI asset inventory features that enrich distributed data with metadata. HPE Data Fabric can now be deployed independently on HPE ProLiant servers.

  ## Compute efficiency and scaling

  For organizations looking to control the cost of running AI agents — which generate charges based on token consumption — HPE Private Cloud AI adds a unified model gateway that provides governed access to multiple AI models from a single control point, along with proactive workload prioritization. The platform now supports multi-node inference across up to 256 GPUs, enabling workloads that are too large for a single server to be distributed across a cluster.

  For model customization, customers can use NVIDIA NeMo — NVIDIA's framework for building and fine-tuning large language models — to adapt pretrained models, including Nemotron open-source models, on enterprise data under controlled conditions.

  ## Industry significance

  The announcements reflect an industry-wide effort to address the gap between AI experimentation and reliable production deployment. Enterprises across sectors have tested AI agents extensively but have faced obstacles including unpredictable behavior, data governance requirements, cost control, and the absence of enterprise-grade recovery mechanisms. HPE and NVIDIA are positioning the expanded AI Factory stack as a response to each of those concerns within a single integrated platform.

  The inclusion of continuous data protection and anomaly detection for AI agents in particular signals that infrastructure vendors are beginning to treat AI agent workloads as a distinct class of enterprise risk, requiring the same recovery and audit capabilities applied to conventional business-critical systems.

  HPE said its Private Cloud AI platform, extended with these capabilities, is designed to support long-term scaling needs as enterprises build out what both companies are calling the agentic enterprise — an organizational model in which AI agents automate business processes and augment decision-making at production scale.
body_zh: |
  ## HPE、輝達攜手推出新硬體與治理堆疊，加速自主AI進入生產環境

  惠普企業（HPE）於6月25日宣布一系列新技術，協助企業客戶將自主AI（agentic AI）——即AI模型能自主行動、因應狀況並與其他代理協作的系統——從試驗環境推進至全面正式營運。這些新功能擴展了「HPE AI Factory with NVIDIA」聯合全端解決方案，涵蓋網路、伺服器、儲存及軟體各層面。

  HPE董事長暨執行長Antonio Neri表示，AI自主性的提升需要以安全性、治理與符合成本效益的規模化為基礎的基礎設施。他在公告中說：「HPE與輝達共同提供全端AI解決方案——從網路、伺服器、儲存到軟體——為自主AI企業奠定基礎，協助企業在更強的掌控力與信心下，從實驗走向生產。」

  輝達創辦人暨執行長黃仁勳則將此次發展定位為運算堆疊的根本性重塑。他表示：「在AI代理的時代，運算堆疊的每一層都正在被重塑。」他補充說，這套聯合解決方案結合輝達的Vera CPU、加速運算基礎架構及安全AI軟體，協助企業將資料轉化為自主行動。

  ## 新硬體：搭載輝達Vera CPU的ProLiant DL394 Gen12

  在硬體層面，HPE與輝達共同開發的一站式AI工廠產品「HPE Private Cloud AI」新增HPE ProLiant Compute DL394 Gen12伺服器，搭載輝達Vera CPU。HPE表示，這款伺服器為自主AI與高效能資料處理提供最佳化的運算基礎，並具備資安與管理功能。

  輝達Vera CPU進入ProLiant平台，標誌著HPE企業AI伺服器系列在處理器選項上的進一步擴展。

  ## 資安與治理工具

  此次公告的核心主題之一，是為企業提供所需的管控能力，以核准、監控並復原AI代理工作負載——這正是阻礙企業大規模採用自主AI系統的關鍵因素。

  HPE Private Cloud AI現已整合輝達Agent Toolkit（代理工具套件），這是一個軟體層，包含輝達Nemotron開源模型系列、輝達NemoClaw，以及輝達OpenShell安全執行環境。HPE表示，這些元件共同構成一套代理作業系統，能在實現高效率推論的同時，讓客戶監控代理行為、強制執行安全防護機制，並降低部署風險。

  HPE Zerto軟體——該公司的資料保護產品——新增偵測AI代理異常行為的功能，並採用持續資料保護（CDP）技術——一種近乎即時記錄資料變更的機制——使系統得以在事件發生後回復至事件前的狀態。HPE Private Cloud AI也新增支援安全的本地代理登錄庫，企業可透過集中式治理與資安政策，核准AI代理可使用的AI模型、技能與工具。

  ## 儲存與資料管道效能

  HPE指出，資料存取可能成為大規模運行AI代理的瓶頸，並宣布針對其儲存與資料管理產品進行最佳化。

  HPE Alletra Storage MP X10000新增嵌入式智慧功能，能自動將元資料與治理政策套用至非結構化資料，以便整合至AI資料管道。HPE表示，此舉可將Token回應時間——即模型擷取與處理資訊的速度——縮短最多20倍。另外，HPE Private Cloud AI可提升指令處理效率，並將Token吞吐量——即系統單位時間內可生成的文字量——提升最多20%。

  HPE Data Fabric軟體——該公司的資料管理層——將模型情境協定（MCP，Model Context Protocol）的支援延伸至Apache Airflow，這是一個廣泛使用的開源工作流程編排平台；MCP是連接AI模型與資料來源及工具的新興標準。HPE表示，此整合提升了自主AI工作流程的資料可用性。此次更新也引入企業級AI資產清單功能，能以元資料豐富分散式資料內容。HPE Data Fabric現可獨立部署於HPE ProLiant伺服器上。

  ## 運算效率與擴展規模

  對於希望控制AI代理運行成本的企業——AI代理依Token使用量計費——HPE Private Cloud AI新增統一模型閘道器，從單一控制點提供對多個AI模型的治理式存取，並具備主動工作負載優先排序功能。這個平台現在支援跨最多256個GPU的多節點推論，使超出單台伺服器負荷的工作負載得以分散至整個叢集執行。

  在模型客製化方面，客戶可使用輝達NeMo——輝達用於建構與微調大型語言模型的框架——在受控條件下，以企業資料調整預訓練模型，包括Nemotron開源模型系列。

  ## 產業意義

  此次公告反映出業界正普遍致力於彌合AI實驗與可靠生產部署之間的落差。各產業的企業雖已廣泛測試AI代理，卻面臨行為難以預測、資料治理要求、成本管控，以及缺乏企業級復原機制等障礙。HPE與輝達將擴展後的AI Factory技術堆疊定位為在單一整合平台上因應上述每項挑戰的解方。

  尤其值得注意的是，此次將持續資料保護與AI代理異常偵測功能納入平台，這一跡象表明基礎架構廠商已開始將AI代理工作負載視為企業風險的獨立類別，要求套用與傳統關鍵業務系統相同的復原與稽核能力。

  HPE表示，搭載上述新功能的Private Cloud AI平台旨在支援企業的長期擴展需求，因為企業正致力於建構兩家公司所稱的「自主AI企業」——一種AI代理在生產規模下自動化業務流程並輔助決策的組織模型。
date: "2026-06-26"
source_published: "2026-06-25T03:58:08.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: HPE 攜手 NVIDIA 推動「代理型 AI」落地生產  構築安全、治理與主權新防線 (trust 3/5)."
sources:
  - url: "https://www.ctee.com.tw/news/20260625701010-431202"
    title: "HPE 攜手 NVIDIA 推動「代理型 AI」落地生產  構築安全、治理與主權新防線"
    trust: 3
    type: primary
    published_at: "2026-06-25T03:58:08.000Z"
---
