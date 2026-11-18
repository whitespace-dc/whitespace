---
title_en: "Hitachi Vantara adds in-place object storage analytics and AI data connectors to VSP One"
title_zh: "日立萬創為 VSP One 新增就地物件儲存分析與 AI 資料連接器"
summary_en: "Hitachi Vantara has updated VSP One Object to support direct analytical queries against object storage without data movement, and extended Hitachi iQ Studio with new data connectors, model access tools, and governance controls for AI workloads."
summary_zh: "日立萬創更新 VSP One Object，支援對物件儲存執行就地分析查詢，無需移動資料，速度最高提升五倍、CPU 用量減少 80%；並擴充 Hitachi iQ Studio，新增 AI 工作負載的資料連接器與治理控制功能。"
body_en: |
  Hitachi Vantara has updated its VSP One storage platform to allow analytical queries against object storage in place, without first moving data into separate analytics systems, and extended its Hitachi iQ Studio software with new data connectors and governance tools for AI workloads.

  The update centers on VSP One Object, which now supports direct querying of data stored in Iceberg, Apache Parquet, JSON, and CSV formats. The company said the change can deliver analytical queries up to five times faster while using 80 percent fewer CPUs compared with workflows that require data to be copied into dedicated analytics systems. Hitachi Vantara said the approach is designed to reduce duplicate datasets, cut the number of data pipelines, and lower supporting infrastructure requirements.

  ## Smaller entry point and performance gains

  Hitachi Vantara introduced a smaller entry configuration for VSP One Object, allowing deployments to start with four nodes — a change the company said lowers the starting point for customers building AI and analytics infrastructure.

  The release also cites small-object performance improvements of up to 5.5 times faster data access for AI, analytics, and S3 (Simple Storage Service, a standard object storage interface) workloads. Hitachi Vantara added expanded multisite replication and regional capabilities intended to improve data availability and protection across locations.

  ## AI data access through Hitachi iQ Studio

  The update also extends Hitachi iQ Studio, a software layer used to build, deploy, manage, and govern AI applications and agents. The release adds filesystem and NFS (Network File System, a standard protocol for accessing files over a network) as knowledge sources, broadening the range of data available to retrieval-augmented generation (RAG) applications — a technique that supplements AI model responses with retrieved enterprise data rather than relying on a model's training data alone.

  New additions include a Model Gateway for accessing both local and external AI models, support for Model Context Protocol (MCP, an open standard for connecting AI models to external data and tools), integration with ServiceNow, role-based access controls, observability tooling, and lifecycle management features.

  ## Platform positioning

  Hitachi Vantara positions VSP One as a unified data platform that brings storage systems under a common control plane, with VSP One Object as the storage layer and Hitachi iQ as the connection point between AI applications and enterprise data, models, tools, and workflows.

  The company framed the release against industry research on AI adoption and data quality. It cited McKinsey research showing nearly nine in ten organizations regularly use AI in at least one business function, with 44 percent saying AI is scaling across the enterprise. It also cited IDC research showing that 89 percent of organizations report some level of data-quality problem — a barrier the company said the update is designed to address.

  Octavian Tanase, Chief Product Officer at Hitachi Vantara, said the release is intended to tie data management more closely to AI deployment. "AI strategy is now inseparable from data strategy. As AI becomes part of more business-critical workloads, the infrastructure underneath it has to make it easier to put enterprise data to work," he said. He added that VSP One is designed to give customers "a stronger path from experimentation to production without sacrificing the resilience and control enterprises depend on."

  ## What it means for storage suppliers

  The update reflects a wider shift among storage vendors from providing capacity to offering tooling that lets customers analyze and act on data without moving it. A central challenge in enterprise AI deployment is managing the complexity that arises when data must be copied between storage, analytics, and AI systems.

  By combining direct object storage analytics, connectors for fragmented data estates through filesystem and NFS sources, and governance controls in a single stack, Hitachi Vantara is targeting organizations that need to work across both legacy and newer data repositories. The inclusion of role-based access and lifecycle management also addresses growing scrutiny over how enterprises control access to models and data in AI deployments.

  The addition of MCP connectivity and a Model Gateway extends VSP One into the ecosystem of AI models and agents being adopted for enterprise use, positioning the platform as an infrastructure layer rather than a standalone storage product.
body_zh: |
  日立萬創（Hitachi Vantara）更新旗下 VSP One 儲存平台，讓客戶可直接對物件儲存執行分析查詢，無需事先將資料移至獨立的分析系統；同時擴充 Hitachi iQ Studio 軟體，新增資料連接器與 AI 工作負載治理工具。

  此次更新的核心在於 VSP One Object。該元件現已支援直接查詢以 Iceberg、Apache Parquet、JSON 及 CSV 格式儲存的資料。日立萬創表示，與需要將資料複製至專用分析系統的工作流程相比，這項改變可讓分析查詢速度最高提升五倍，同時減少 80% 的 CPU 使用量。該公司指出，此設計旨在減少重複資料集、削減資料管線數量，並降低相關基礎架構需求。

  ## 更低起點與效能提升

  日立萬創為 VSP One Object 推出更小型的起步配置，允許從四節點開始部署——該公司表示，此舉降低了客戶建置 AI 與分析基礎架構的初始門檻。

  此版本亦提升小物件效能，針對 AI、分析及 S3（Simple Storage Service，一種標準物件儲存介面）工作負載，資料存取速度最高可加快 5.5 倍。日立萬創也擴充了多站點複寫與區域功能，旨在提升跨地點的資料可用性與保護能力。

  ## 透過 Hitachi iQ Studio 存取 AI 資料

  此次更新同時擴充了 Hitachi iQ Studio——這是一套用於建置、部署、管理及治理 AI 應用程式與代理程式的軟體層。新版本新增檔案系統與 NFS（Network File System，一種透過網路存取檔案的標準通訊協定）作為知識來源，擴大了檢索增強生成（RAG）應用可取用的資料範圍。RAG 是一種以企業資料補充 AI 模型回應的技術，不再單純仰賴模型本身的訓練資料。

  新功能包括：用於存取本地與外部 AI 模型的模型閘道（Model Gateway）、支援模型情境協定（MCP，一種將 AI 模型連接至外部資料與工具的開放標準）、與 ServiceNow 整合、角色型存取控制、可觀測性工具，以及生命週期管理功能。

  ## 平台定位

  日立萬創將 VSP One 定位為統一資料平台，透過共通控制平面整合儲存系統，其中 VSP One Object 作為儲存層，Hitachi iQ 則作為 AI 應用程式與企業資料、模型、工具及工作流程之間的連接點。

  日立萬創以業界研究對 AI 採用率與資料品質的調查結果，為此次發布提供背景依據。該公司引述麥肯錫（McKinsey）研究顯示，近九成組織已在至少一項業務功能中定期使用 AI，其中 44% 表示 AI 正在全企業擴大規模部署。此外，該公司亦引述 IDC 研究指出，89% 的組織面臨不同程度的資料品質問題——該公司表示，此次更新正是為了解決這一障礙而設計。

  日立萬創產品長 Octavian Tanase 表示，此次發布旨在將資料管理與 AI 部署更緊密地結合。他說：「AI 策略現在已與資料策略密不可分。隨著 AI 成為更多業務關鍵工作負載的一部分，其底層基礎架構必須讓企業資料更易於投入使用。」他補充，VSP One 的設計目標是讓客戶「在不犧牲企業所仰賴的韌性與管控能力的前提下，擁有從實驗到正式上線更順暢的路徑」。

  ## 對儲存設備供應商的意義

  此次更新反映出儲存設備供應商更廣泛的轉型趨勢——從單純提供容量，轉向提供讓客戶無需移動資料即可分析並運用資料的工具。企業 AI 部署的核心挑戰之一，在於當資料必須在儲存、分析與 AI 系統之間複製流轉時，所帶來的複雜性管理難題。

  日立萬創將就地物件儲存分析、透過檔案系統與 NFS 來源整合分散資料資產的連接器，以及治理控制功能整合於單一堆疊之中，鎖定的正是需要同時兼顧傳統與新型資料儲存庫的企業客戶。角色型存取控制與生命週期管理的加入，也因應了企業在 AI 部署中對模型與資料存取管控日益嚴格的審視。

  MCP 連接性與模型閘道的新增，進一步將 VSP One 延伸至企業正在採用的 AI 模型與代理程式生態系，將該平台定位為基礎架構層，而非單純的獨立儲存產品。
date: "2026-11-19"
source_published: "2026-11-18T09:15:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Hitachi Vantara expands VSP One for AI data access (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/hitachi-vantara-expands-vsp-one-for-ai-data-access"
    title: "Hitachi Vantara expands VSP One for AI data access"
    trust: 3
    type: primary
    published_at: "2026-11-18T09:15:00.000Z"
---
