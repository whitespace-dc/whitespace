---
title_en: "QumulusAI Signs $124M in AI Infrastructure Deals as Industry Focus Shifts to Utilization"
title_zh: "QumulusAI簽逾1.24億美元AI基礎設施合約，業界焦點轉向使用效率"
summary_en: "QumulusAI has signed more than $124 million in three-year AI infrastructure contracts tied to Nvidia Blackwell GPU deployments, including an agreement with AI cloud provider Hyperbolic, as the industry's primary concern shifts from acquiring computing capacity to keeping it productively occupied."
summary_zh: "QumulusAI已簽署逾1.24億美元的三年期AI基礎設施合約，合約與輝達Blackwell GPU部署掛鉤，包含與AI雲端供應商Hyperbolic的協議。業界首要關切正從搶購算力，轉向如何有效運用既有資源。"
body_en: |
  QumulusAI has signed more than $124 million in three-year AI infrastructure contracts tied to Nvidia Blackwell GPU deployments, including an agreement with AI cloud provider Hyperbolic, as the industry's primary concern shifts from acquiring computing capacity to keeping it productively occupied.

  The contracts center on inference workloads — the production-stage deployments that serve end users and applications in real time, distinct from the training runs used to build AI models. That distinction is reshaping how operators buy, design, and manage infrastructure.

  ## From capacity race to utilization problem

  Since 2024, AI infrastructure providers have competed to put more graphics processing units (GPUs), the specialized processors that power AI workloads, onto the floor. The race rewarded scale: larger GPU clusters, expanded data center campuses, and secured power capacity wherever it could be found. Training workloads, which eventually finish, defined the initial infrastructure requirement.

  Production workloads do not finish. Models continuously serving users, applications, and business processes generate a constant stream of requests, converting infrastructure efficiency from a secondary concern into a primary financial and operational one.

  "The priority was securing the biggest and most flexible clusters possible," QumulusAI CEO Mike Maniscalco told Data Center Knowledge. "Today, more customers are focused on running models in production at scale but may also want the flexibility to do smaller-scale training or fine-tuning on the same infrastructure."

  ## Idle capacity as the primary cost driver

  For Hyperbolic, the AI cloud provider party to the QumulusAI agreement, utilization is the defining variable.

  "Utilization and cost-efficiency are at the top, because idle capacity is the most expensive problem in this market," Hyperbolic CEO Jasper Zhang told Data Center Knowledge. Zhang also cited time-to-availability and supply reliability as key concerns.

  The inference context sharpens those priorities further. "For inference specifically, latency and cost per unit of output matter as teams move open-source workloads into production," Zhang said. Latency refers to the time a system takes to respond to a request; as that figure rises, the effective cost of each unit of model output rises with it.

  ## Infrastructure tuned to the workload

  QumulusAI said it typically begins with Nvidia reference architectures but adapts deployments to match customer requirements. Depending on workload needs, customers may select local NVMe storage (a high-speed flash storage interface), attached high-performance storage, external storage systems, or tiered architectures. Network designs vary as well, shaped by latency requirements, workload characteristics, deployment schedules, and budget constraints.

  "Customers are optimizing for many factors, including time to market, budget, SLA, and workload requirements," Maniscalco said. Service level agreements (SLAs) define the performance and availability commitments an operator is contractually required to meet.

  The objective, Maniscalco said, is not to build a completely separate infrastructure stack for inference but to tune the same hardware to the demands of specific workloads. Zhang framed it the same way. "It's less about two separate stacks and more about the same infrastructure tuned to different points: training optimizes for scale and interconnect, inference for latency and utilization efficiency," he told Data Center Knowledge.

  ## Design priorities expected to diverge

  Steven Dickens, CEO and principal analyst at HyperFrame Research, expects these operational differences to produce distinct infrastructure design choices across the industry. "The biggest misconception is that all AI infrastructure will be the same," Dickens told Data Center Knowledge. "It won't."

  Dickens said he expects differences to emerge across CPU-to-GPU ratios — the balance between general-purpose central processing units (CPUs) and AI-specific GPU compute within a server — as well as across workload orchestration methods, deployment strategies, and data center placement decisions.

  Training infrastructure remains central to the AI buildout, and organizations still require environments capable of supporting multiple AI workload types. As more models move into production, however, the industry faces an efficiency challenge that expanding GPU supply alone cannot resolve. GPU procurement remains vital to the AI race; infrastructure utilization, operating economics, and cost per unit of output now command equal attention alongside it.

  Dickens expects differences in deployment strategy and data center placement to become more pronounced as production inference workloads continue to grow.
body_zh: |
  QumulusAI已簽署逾1.24億美元的三年期AI基礎設施合約，合約與輝達（NVIDIA）Blackwell GPU部署掛鉤，其中包含與AI雲端供應商Hyperbolic的協議。與此同時，業界的首要關切正從搶購算力，轉移至如何有效運用既有資源。

  這批合約聚焦於推論工作負載——即即時為終端用戶與應用程式提供服務的生產階段部署，有別於用於建構AI模型的訓練任務。這項區別正在重塑業者採購、設計與管理基礎設施的方式。

  ## 從算力競賽到使用率難題

  自2024年以來，AI基礎設施業者競相擴充繪圖處理器（GPU）的規模——GPU是驅動AI運算的專用處理器。這場競賽以規模論勝負：更大的GPU叢集、持續擴張的資料中心園區，以及盡可能取得的電力容量。訓練工作負載終有完成之日，最初的基礎設施需求也由此定義。

  然而，生產環境的工作負載卻沒有終點。持續為用戶、應用程式與業務流程提供服務的模型，會不斷產生請求，使基礎設施效率從次要考量，一躍成為首要的財務與營運議題。

  QumulusAI執行長Mike Maniscalco在接受Data Center Knowledge採訪時表示：「當時的優先要務是取得規模最大、彈性最高的叢集。如今，愈來愈多客戶專注於在生產環境中大規模運行模型，但也希望能在同一套基礎設施上靈活進行小規模訓練或微調。」

  ## 閒置算力是最主要的成本殺手

  對於參與QumulusAI合約的AI雲端供應商Hyperbolic而言，使用率是最關鍵的變數。

  Hyperbolic執行長Jasper Zhang告訴Data Center Knowledge：「使用率與成本效益是首要考量，因為閒置算力是這個市場最昂貴的問題。」Zhang同時點出，上線時效與供應穩定性也是重要關切。

  推論場景讓這些優先要務更加明確。Zhang說：「就推論而言，當各團隊將開源工作負載移轉至生產環境時，延遲與每單位輸出成本至關重要。」延遲指的是系統回應請求所需的時間；延遲愈高，每單位模型輸出的實際成本也隨之上升。

  ## 針對工作負載調校的基礎設施

  QumulusAI表示，公司通常以輝達的參考架構為起點，再依客戶需求調整部署方式。根據工作負載需求，客戶可選擇本地NVMe儲存（一種高速快閃儲存介面）、外接高效能儲存、外部儲存系統，或分層架構。網路設計也會因延遲需求、工作負載特性、部署時程與預算限制而有所差異。

  Maniscalco表示：「客戶同時在最佳化多項因素，包括上市時間、預算、服務水準協議（SLA）與工作負載需求。」服務水準協議定義了業者在合約上必須達到的效能與可用性承諾。

  Maniscalco指出，目標並非為推論建立一套完全獨立的基礎設施架構，而是讓同一套硬體針對特定工作負載的需求加以調校。Zhang的看法如出一轍：「與其說是兩套獨立架構，不如說是同一套基礎設施針對不同重點進行調校：訓練著重規模與互連，推論則著重延遲與使用效率。」

  ## 設計優先考量預期將走向分歧

  HyperFrame Research執行長暨首席分析師Steven Dickens預期，上述運營差異將在業界催生截然不同的基礎設施設計選擇。Dickens告訴Data Center Knowledge：「最大的誤解，就是認為所有AI基礎設施都會長得一樣，但事實並非如此。」

  Dickens預期差異將體現在CPU與GPU的比例——即伺服器內通用中央處理器（CPU）與AI專用GPU算力之間的配比——以及工作負載協調方式、部署策略與資料中心選址決策等層面。

  訓練基礎設施仍是AI建置浪潮的核心，各組織也仍需要能夠支援多種AI工作負載類型的環境。然而，隨著愈來愈多模型進入生產階段，業界正面臨一項光靠擴充GPU供應無法解決的效率挑戰。GPU採購對AI競賽依然不可或缺，但基礎設施使用效率、營運經濟效益與每單位輸出成本，如今已與其並駕齊驅，同樣備受重視。

  Dickens預期，隨著生產推論工作負載持續成長，部署策略與資料中心選址的差異化趨勢將愈發顯著。
date: "2026-06-16"
source_published: "2026-06-15T10:53:40.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: QumulusAI’s $124M Deal Spotlights AI Infrastructure’s Utilization Challenge (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/business/qumulusai-s-124m-deal-highlights-ai-infrastructure-s-next-challenge-utilization"
    title: "QumulusAI’s $124M Deal Spotlights AI Infrastructure’s Utilization Challenge"
    trust: 3
    type: primary
    published_at: "2026-06-15T10:53:40.000Z"
---
