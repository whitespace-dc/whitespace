---
title_en: "AMD launches open Helion rack architecture for agentic AI workloads"
title_zh: "AMD 發表開放式 Helion 機架架構，鎖定代理式 AI 工作負載"
summary_en: "AMD has introduced Helion, an open rack-scale architecture for agentic AI built on an Open Compute Project blueprint, with two hardware configurations and launch support from eight server and infrastructure manufacturers including Cisco, Dell, HPE, and Supermicro."
summary_zh: "AMD 推出 Helion，這是一套以開放運算專案藍圖為基礎、專為代理式 AI 基礎架構打造的開放機架規模架構，提供兩種硬體配置，並獲得思科、戴爾、HPE、超微電腦等八家伺服器與基礎設施製造商共同背書。"
body_en: |
  AMD has introduced Helion, an open rack-scale architecture for agentic AI infrastructure based on an Open Compute Project blueprint, with design backing from eight server and infrastructure manufacturers at launch.

  The announcement extends AMD's rack-scale AI strategy beyond its existing Helios platform and targets workloads in which software agents autonomously execute tasks such as code generation, workflow management, and enterprise automation — a category AMD argues requires infrastructure that can be reconfigured for different compute mixes rather than a single fixed design.

  ## Two rack configurations

  Helion offers two distinct hardware configurations. The first uses 6th Generation AMD EPYC server processors and scales to 32,768 CPU cores per rack; AMD positioned this option for hyperscale operators seeking dedicated capacity for agent execution while connecting to separate model inference systems. The second combines EPYC CPU nodes, Instinct MI350P graphics processing unit (GPU) nodes — accelerators used to run AI workloads — and general-purpose compute in a single rack, targeting enterprise customers that need one platform for varied agentic tasks.

  Both configurations support liquid-cooled and air-cooled deployments and are designed to work with open software. AMD said the blueprint is intended to integrate with existing IT environments rather than require purpose-built data center infrastructure.

  ## Open Compute Project contribution

  AMD said it plans to contribute the Helion specification to the Open Compute Project (OCP), an industry consortium that develops shared, vendor-neutral hardware designs for data centers. Contributing the specification means any manufacturer can build systems to the same blueprint, which AMD framed as part of a broader push for open hardware and software ecosystems over proprietary stacks.

  The rack also includes an integrated token router, a component that directs model calls from software agents across frontier and open-source AI models. AMD described this as enabling deployments where operators route workloads by task, cost, or other operational requirements rather than depending on a single model provider.

  ## Partner backing

  Eight companies issued support statements at launch: Cisco, Dell Technologies, Hon Hai Technology Group, HPE, Lenovo, QCT, Supermicro, and Wiwynn. Their statements centered on customer flexibility and system integration.

  Jeremy Foster, Senior Vice President and General Manager of Cisco Compute, said agentic AI changes infrastructure requirements beyond raw compute performance to encompass how systems are connected, managed, and secured. "Architectures like AMD Helion, combined with Cisco's full-stack infrastructure capabilities, can give customers greater flexibility to deploy, operate and scale agentic workloads into their environments as their needs evolve," Foster said.

  Dell Technologies framed its involvement around validated system integration. "Dell PowerRack gives customers choice without compromise, and our support for AMD Helion Agentic Rack Reference Design extends that promise to the next generation of agentic AI," said Arun Narayanan, Senior Vice President, Compute and Networking at Dell Technologies, adding that Dell offers customers "a complete, validated path to deploy agentic compute at scale."

  Wiwynn President and CEO William Lin said the company would contribute expertise in rack-level integration and advanced cooling to help hyperscaler customers tailor Helion systems to their power and workload requirements.

  ## AMD's case for workload diversity

  Dan McNamara, Senior Vice President and General Manager of Compute and Enterprise AI at AMD, said the core rationale for Helion is that agentic AI does not map to a single workload profile. "Agentic AI is not a single workload. It spans personal agents, enterprise applications, code execution and complex workflows, each with different compute requirements," McNamara said. He added that the Helion design is intended to let partners build systems around customer needs while making efficient use of available power.

  ## Helios production status

  AMD also disclosed that its existing Helios rack-scale platform is moving into production, with customer deliveries, deployments, and workload validation under way. The company said early Helios systems are running at OpenAI, Meta, Microsoft, and Oracle.

  ## Industry significance

  The Helion launch reflects AMD's effort to compete at the level of complete system architecture as AI infrastructure buyers increasingly evaluate power, cooling, integration, and model orchestration alongside processor performance. By contributing the Helion specification to the Open Compute Project and securing commitments from eight manufacturing and integration partners at launch, AMD is attempting to build a supply chain and validation network around the design rather than a single-vendor solution.

  AMD said partners are expected to build customer systems using the Helion blueprint, with the OCP contribution intended to extend the architecture's availability across the broader manufacturing ecosystem.
body_zh: |
  AMD 正式推出 Helion，這是一套以開放運算專案（Open Compute Project，OCP）藍圖為基礎、專為代理式 AI 基礎架構設計的開放機架規模架構，發布之初即獲得八家伺服器與基礎設施製造商的設計背書。

  此次公告將 AMD 的機架規模 AI 策略從現有的 Helios 平台進一步延伸，鎖定由軟體代理自主執行任務的工作負載，涵蓋程式碼生成、工作流程管理與企業自動化等應用類別。AMD 認為，這類工作負載需要能針對不同運算組合靈活重新配置的基礎架構，而非一成不變的固定設計。

  ## 兩種機架配置

  Helion 提供兩種截然不同的硬體配置。第一種採用第六代 AMD EPYC 伺服器處理器，每個機架可擴展至 32,768 個 CPU 核心；AMD 將此選項定位為需要專屬代理執行容量、同時連接獨立模型推論系統的超大規模業者。第二種則將 EPYC CPU 節點、Instinct MI350P 圖形處理器（GPU）節點——用於執行 AI 工作負載的加速器——以及通用運算整合於單一機架，目標客群為需要以單一平台因應各種代理式任務的企業用戶。

  兩種配置均支援液冷與氣冷部署，並設計為可搭配開放軟體運作。AMD 表示，此藍圖旨在與現有 IT 環境整合，而非要求專門建置的資料中心基礎設施。

  ## 開放運算專案貢獻

  AMD 表示計畫將 Helion 規格貢獻給開放運算專案——一個專門為資料中心開發共享、廠商中立硬體設計的產業聯盟。將規格貢獻給 OCP，意味著任何製造商均可依據相同藍圖建置系統。AMD 將此舉定位為推動開放硬體與軟體生態系統、取代專有技術堆疊之更廣泛戰略的一環。

  此機架還內建一個整合式詞元路由器（token router），負責將軟體代理的模型呼叫導向各前沿及開源 AI 模型。AMD 表示，此元件能讓業者依據任務類型、成本或其他營運需求路由工作負載，無需依賴單一模型供應商。

  ## 夥伴支持

  發布之初共有八家企業發表支持聲明，分別為：思科（Cisco）、戴爾科技（Dell Technologies）、鴻海科技集團（Hon Hai Technology Group）、惠普企業（HPE）、聯想（Lenovo）、廣達雲端（QCT）、超微電腦（Supermicro）以及緯穎科技（Wiwynn）。各家聲明的重點均圍繞客戶彈性與系統整合。

  思科運算事業群資深副總裁暨總經理 Jeremy Foster 表示，代理式 AI 改變了基礎架構需求，其範疇已超越原始運算效能，延伸至系統的連接、管理與安全防護方式。「AMD Helion 等架構與思科全堆疊基礎架構能力的結合，能為客戶提供更大彈性，隨需求演進在其環境中部署、營運及擴展代理式工作負載，」Foster 說道。

  戴爾科技以驗證系統整合為切入點闡述其參與初衷。「Dell PowerRack 讓客戶無需妥協即可自由選擇，我們對 AMD Helion 代理式機架參考設計的支持，將這項承諾延伸至下一代代理式 AI，」戴爾科技運算與網路事業群資深副總裁 Arun Narayanan 表示，並補充說戴爾為客戶提供「完整、經驗證的大規模代理式運算部署路徑」。

  緯穎科技總裁暨執行長 William Lin 表示，公司將在機架層級整合與先進冷卻技術方面貢獻專業知識，協助超大規模客戶根據其電力與工作負載需求量身打造 Helion 系統。

  ## AMD 對工作負載多樣性的主張

  AMD 運算暨企業 AI 事業群資深副總裁暨總經理 Dan McNamara 表示，Helion 的核心設計邏輯在於代理式 AI 並不對應單一工作負載類型。「代理式 AI 並非單一工作負載，它橫跨個人代理、企業應用、程式碼執行與複雜工作流程，每種都有不同的運算需求，」McNamara 說道。他補充表示，Helion 的設計旨在讓夥伴圍繞客戶需求建置系統，同時有效運用現有電力資源。

  ## Helios 量產進度

  AMD 也揭露，其現有的 Helios 機架規模平台正在進入量產階段，客戶交付、部署及工作負載驗證工作均已展開。該公司表示，早期 Helios 系統已在 OpenAI、Meta、微軟（Microsoft）及甲骨文（Oracle）投入運行。

  ## 產業意義

  Helion 的推出反映出 AMD 的雄心：在 AI 基礎架構採購方愈來愈傾向於將電力、冷卻、整合與模型協調納入評估、與處理器效能並重的趨勢下，AMD 力圖在完整系統架構層面展開競爭。藉由將 Helion 規格貢獻給開放運算專案，並在發布之初取得八家製造與整合夥伴的承諾，AMD 試圖圍繞此設計建立供應鏈與驗證網路，而非推行單一廠商解決方案。

  AMD 表示，夥伴預計將依據 Helion 藍圖為客戶建置系統，而 OCP 貢獻則旨在將此架構的可及性延伸至更廣泛的製造生態系統。
date: "2026-10-20"
source_published: "2026-10-19T04:03:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Cisco", "Foxconn", "Supermicro", "Wiwynn"]
trust:
  score: 3
  reasoning: "Single source: AMD unveils open Helion rack for agentic AI workloads (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/amd-unveils-open-helion-rack-for-agentic-ai-workloads"
    title: "AMD unveils open Helion rack for agentic AI workloads"
    trust: 3
    type: primary
    published_at: "2026-10-19T04:03:00.000Z"
---
