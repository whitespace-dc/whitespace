---
title_en: "Agentic AI Foundation adds agentgateway as its fourth hosted project"
title_zh: "代理式AI基金會將agentgateway納為第四個託管專案"
summary_en: "The Agentic AI Foundation has adopted agentgateway, an open-source AI traffic gateway, as its fourth hosted project under the Linux Foundation. The Apache 2.0-licensed software is designed to give platform teams a single layer for managing AI-specific and conventional application traffic."
summary_zh: "代理式AI基金會（AAIF）宣布，將開源AI流量閘道agentgateway納為其在Linux基金會旗下的第四個託管專案。這款採Apache 2.0授權的軟體，旨在為平台團隊提供統一的單一介面層，同時管理AI專屬流量與傳統應用程式流量。"
body_en: |
  The Agentic AI Foundation (AAIF), operating under the Linux Foundation, has adopted agentgateway, an open-source gateway for AI and software system traffic, as its fourth hosted project. Released under the Apache 2.0 licence, agentgateway is designed to give platform teams a single layer for managing both AI-specific and conventional application traffic.

  ## What agentgateway does

  agentgateway handles traffic across Model Context Protocol (MCP, a standard for connecting AI models to tools and data sources), agent-to-agent (A2A) communication, large language model (LLM) inference, HTTP, and gRPC services. According to the project description, it lets organisations run AI-related and traditional application traffic through one operational setup rather than maintaining separate infrastructure stacks.

  The software supports JWT authentication, API key authentication, role-based access control (RBAC), external authorisation, mutual TLS, and CORS, along with logging, tracing, and metrics. It also provides model switching across providers, policy controls written in Common Expression Language, and a feature the project calls MCP virtualisation, which combines multiple MCP tool servers into a single access point.

  For cost and risk management, the project includes rate limiting, budget controls, prompt guards, content-based routing, and model aliasing. The software runs on bare metal, virtual machines, containers, and Kubernetes environments, and supports dynamic configuration updates without downtime through xDS, a configuration protocol used in service-mesh infrastructure.

  ## Community and industry backing

  The project reports more than 300 active contributors from more than 60 organisations, including CoreWeave, Red Hat, Solo.io, Adobe, Salesforce, Amdocs, and Microsoft.

  David Soria Parra, Chair of the AAIF Technical Committee, said the adoption addresses a gap in agentic AI infrastructure. "The addition of agentgateway marks a major milestone for the AAIF ecosystem. As organizations deploy increasingly sophisticated AI systems, they need infrastructure that can provide visibility, governance, and operational control across agent workflows and tool interactions. agentgateway helps fill that gap with an open, high-performance platform designed specifically for these emerging workloads," Soria Parra said.

  Lin Sun, who donated the project to the foundation, described the move as consistent with the project's founding direction. "Donating agentgateway to AAIF is the natural next step for a project built around open connectivity and interoperability. Our goal from day one has been to help organizations manage the operational realities of AI systems - security, governance, observability, and reliability - through open infrastructure. Bringing the project into AAIF ensures it can evolve through open collaboration and neutral governance alongside the broader ecosystem," Sun said.

  ## Why AI traffic infrastructure has become a priority

  The AAIF positions itself as a neutral home for standards, protocols, and software related to agentic AI, which the foundation defines as systems built as networks of tools, models, databases, and services that interact across multiple environments. As companies move these systems from testing into production, they face traffic-management challenges that conventional web infrastructure was not designed to address: routing requests between models and tools, monitoring activity across multi-step agent processes, and enforcing security and governance rules when agents interact with external services.

  The foundation said the addition of agentgateway strengthens its ecosystem by providing an infrastructure layer for AI traffic management, security, and interoperability, alongside its existing work on standards and tooling for agent-based systems.

  The broader industry shift the foundation describes is from model development to operational tooling. Earlier industry focus concentrated on model performance; companies are now investing in the layers required to deploy and manage AI systems in production. The challenge differs from earlier generations of API or microservices infrastructure because AI agents can initiate actions, call external tools, and coordinate with other agents rather than simply responding to user requests.

  One aspect the announcement highlights is model independence. As businesses use multiple model providers or combine proprietary and open-weight models, infrastructure that can route traffic across them without locking teams into a single supplier has become a practical concern. agentgateway's model-switching and model-aliasing capabilities are aimed at that problem.

  The agentgateway adoption brings the AAIF's total hosted project count to four.
body_zh: |
  隸屬於Linux基金會的代理式AI基金會（Agentic AI Foundation，AAIF）宣布，將開源AI與軟體系統流量閘道agentgateway納為旗下第四個託管專案。agentgateway採Apache 2.0授權發布，旨在讓平台團隊透過單一作業層次，同時管理AI專屬與傳統應用程式流量。

  ## agentgateway 的功能

  agentgateway 負責處理以下流量：模型情境協定（Model Context Protocol，MCP；一種連接AI模型與工具及資料來源的標準）、代理程式間（A2A）通訊、大型語言模型（LLM）推論、HTTP 及 gRPC 服務。根據專案說明，它讓各組織得以透過同一套作業環境，統一處理AI相關與傳統應用程式流量，無需各自維護獨立的基礎架構堆疊。

  該軟體支援 JWT 驗證、API 金鑰驗證、角色型存取控制（RBAC）、外部授權、雙向 TLS 與 CORS，並提供日誌記錄、追蹤與監控指標功能。此外，它還支援跨供應商的模型切換、以 Common Expression Language 撰寫的政策控管，以及專案所稱的「MCP 虛擬化」功能——可將多個 MCP 工具伺服器整合為單一存取點。

  在成本與風險管理方面，專案提供速率限制、預算控管、提示防護、基於內容的路由，以及模型別名功能。該軟體可在裸機、虛擬機器、容器及 Kubernetes 環境上執行，並透過 xDS（服務網格基礎架構中廣泛使用的組態協定）支援動態組態更新，無需停機即可完成變更。

  ## 社群與產業支持

  專案報告顯示，來自逾60個組織的300多名活躍貢獻者參與其中，包括 CoreWeave、Red Hat、Solo.io、Adobe、Salesforce、Amdocs 及 Microsoft。

  AAIF 技術委員會主席 David Soria Parra 表示，此次納入填補了代理式AI基礎架構的空白。他說：「agentgateway 的加入，是 AAIF 生態系的重大里程碑。隨著各組織部署愈來愈複雜的AI系統，它們需要能夠在代理程式工作流程與工具互動之間提供可視性、治理與作業控制的基礎架構。agentgateway 以開放、高效能的平台填補了這一缺口，專為這些新興工作負載而設計。」

  將該專案捐贈給基金會的 Lin Sun 則表示，此舉與專案創立之初的方向一脈相承。他說：「將 agentgateway 捐贈給 AAIF，對於一個圍繞開放連接性與互通性打造的專案而言，是再自然不過的下一步。我們從第一天起的目標，就是幫助各組織透過開放基礎架構，管理AI系統在實際營運上的種種現實需求——涵蓋資安、治理、可觀測性與可靠性。將專案納入 AAIF，確保它能與更廣泛的生態系並肩，透過開放協作與中立治理持續演進。」

  ## 為何AI流量基礎架構已成為優先要務

  AAIF 將自身定位為代理式AI相關標準、協定與軟體的中立歸宿。基金會將代理式AI定義為：由工具、模型、資料庫與服務所構成的網路，能跨多種環境互動運作的系統。隨著企業將這類系統從測試推向正式生產環境，他們面臨的流量管理挑戰，是傳統網路基礎架構當初設計時未曾預見的：如何在模型與工具之間路由請求、如何監控多步驟代理程式流程的活動，以及當代理程式與外部服務互動時，如何落實資安與治理規則。

  基金會表示，agentgateway 的加入強化了其生態系，為AI流量管理、資安與互通性提供了基礎架構層，與其現有針對代理式系統所推動的標準與工具開發工作相輔相成。

  基金會所描述的產業更廣泛趨勢，是從模型開發轉向作業工具。過去產業的關注焦點集中於模型效能；如今，企業正大舉投資於在正式生產環境中部署與管理AI系統所需的各個層次。這一挑戰不同於早期的API或微服務基礎架構——因為AI代理程式不只是被動回應使用者請求，而是能主動發起行動、呼叫外部工具，並與其他代理程式協調合作。

  本次公告特別強調的一個面向是模型獨立性。隨著企業採用多個模型供應商，或混合使用專有模型與開放權重模型，能夠跨供應商路由流量、不將團隊綁定於單一供應商的基礎架構，已成為實際業務上的迫切需求。agentgateway 的模型切換與模型別名功能，正是針對這一問題而設計。

  agentgateway 的納入，使 AAIF 旗下託管專案總數達到四個。
date: "2026-06-05T18:16:20.347Z"
source_published: "2026-06-05T17:37:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Agentic AI Foundation adds agentgateway as hosted project (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/agentic-ai-foundation-adds-agentgateway-as-hosted-project"
    title: "Agentic AI Foundation adds agentgateway as hosted project"
    trust: 3
    type: primary
    published_at: "2026-06-05T17:37:00.000Z"
  - url: "https://datacenternews.asia/story/agentic-ai-foundation-adds-agentgateway-as-hosted-project"
    title: "Agentic AI Foundation adds agentgateway as hosted project"
    trust: 3
    type: corroborating
    published_at: "2026-06-05T17:37:00.000Z"
---
