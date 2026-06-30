---
title_en: "Anthropic Claude models now generally available on Microsoft Azure Foundry via NVIDIA GB300 GPUs"
title_zh: "Anthropic Claude 搭輝達 GB300 GPU，正式登陸 Azure Foundry"
summary_en: "Anthropic's Claude models are now generally available through Microsoft Foundry on Azure, running on NVIDIA GB300 Blackwell Ultra GPUs. The release also brings NVIDIA agent tooling into Anthropic's software stack and introduces a reference design for secure enterprise deployments."
summary_zh: "Anthropic 的 Claude 語言模型現已透過 Microsoft Azure 上的 Foundry 平台正式上線，底層採用輝達 GB300 Blackwell Ultra GPU 驅動運算。此次發布同步將輝達代理工具整合至 Anthropic 軟體堆疊，並推出適用於企業安全部署的參考設計架構。"
body_en: |
  Anthropic's Claude language models are now generally available through Microsoft Foundry on Microsoft Azure, running on NVIDIA GB300 Blackwell Ultra graphics processing units (GPUs), the three companies announced. The release gives enterprise customers a path to deploy Claude-based AI agents inside Azure-native infrastructure using NVIDIA's latest accelerated computing hardware.

  The deployment runs on NVIDIA GB300 NVL72 systems — a rack-scale configuration of GB300 Blackwell Ultra GPUs — connected through NVIDIA Quantum-X800 InfiniBand networking, a high-speed fabric designed for tightly coupled AI workloads. The companies said the configuration is intended to support inference workloads for enterprise applications where multiple specialised AI agents operate across different business functions simultaneously.

  Microsoft Foundry is Microsoft's platform for developing and deploying AI models and applications within Azure. Making Claude generally available through it extends the range of models Azure customers can use without leaving the Azure ecosystem.

  ## NVIDIA tooling integrated into Anthropic's software stack

  Alongside the infrastructure availability, NVIDIA and Anthropic are expanding their collaboration through the integration of NVIDIA tools directly into Anthropic's software stack. The integration allows developers to equip Claude-based agents with domain-specific capabilities using what NVIDIA calls verified agent skills — pre-built, validated tool sets designed for particular enterprise functions.

  According to NVIDIA, the combination gives organisations a way to develop AI systems more closely aligned with internal business processes and operational requirements. The companies said enterprises can build specialised sub-agents that operate across different business domains while remaining part of a broader AI workflow.

  ## Secure deployment framework

  Organisations deploying Claude on Azure can also adopt the NVIDIA Secure Agent Workspace Reference Design, a framework for running autonomous AI agents within controlled enterprise environments. The reference design covers infrastructure-level controls including identity management, network access, credential handling and runtime policy.

  By applying governance controls at the infrastructure layer rather than the application layer, the framework is intended to let enterprises manage how AI agents access internal systems and business data while maintaining operational policies. The companies said it provides a structured deployment model for organisations introducing autonomous AI into production environments.

  ## Partnership context

  The general availability follows an existing collaboration between Microsoft, NVIDIA and Anthropic focused on expanding enterprise access to Claude models on NVIDIA accelerated computing within Azure. The latest release combines all three elements — Microsoft's AI development environment, Anthropic's Claude models and NVIDIA's GB300 Blackwell Ultra architecture — into a single offering for Azure customers.

  The companies said the platform targets enterprises seeking to develop autonomous AI systems that operate across business functions while remaining within Azure-native environments. The release also expands the range of AI models available through Microsoft Foundry for organisations building production AI applications.
body_zh: |
  Anthropic 的 Claude 語言模型現已透過 Microsoft Azure 上的 Microsoft Foundry 平台正式上線，底層運算採用輝達（NVIDIA）GB300 Blackwell Ultra 繪圖處理器（GPU）。三家公司聯合宣布，此次發布讓企業客戶得以在 Azure 原生基礎架構上，借助輝達最新加速運算硬體，部署以 Claude 為核心的 AI 代理系統。

  此次部署採用輝達 GB300 NVL72 系統——一種以機架規模配置 GB300 Blackwell Ultra GPU 的運算平台——並透過輝達 Quantum-X800 InfiniBand 網路相互串連。Quantum-X800 InfiniBand 是一種專為高度耦合 AI 工作負載設計的高速網路架構。三家公司表示，此組合配置旨在支援企業應用的推論工作負載，使多個專屬 AI 代理得以在不同業務功能上同時運行。

  Microsoft Foundry 是微軟在 Azure 上用於開發與部署 AI 模型及應用程式的平台。此次將 Claude 在該平台上正式開放，進一步擴展了 Azure 客戶可使用的模型陣容，無須離開 Azure 生態系即可取用。

  ## 輝達工具整合至 Anthropic 軟體堆疊

  除基礎架構層面的正式上線之外，輝達與 Anthropic 亦透過將輝達工具直接整合至 Anthropic 軟體堆疊的方式，進一步深化雙方合作。此項整合讓開發者能夠運用輝達所稱的「驗證代理技能」（Verified Agent Skills）——亦即針對特定企業功能預先建置並經過驗證的工具組——為以 Claude 為基礎的代理系統賦予特定領域的能力。

  輝達表示，此組合讓企業能夠開發出更貼近內部業務流程與營運需求的 AI 系統。兩家公司指出，企業可建置專屬的子代理，使其在不同業務領域中各自運作，同時仍歸屬於更大範圍的 AI 工作流程之中。

  ## 安全部署框架

  在 Azure 上部署 Claude 的企業，亦可採用「輝達安全代理工作區參考設計」（NVIDIA Secure Agent Workspace Reference Design）——這是一套專為在受控企業環境中運行自主 AI 代理而設計的框架。該參考設計涵蓋基礎架構層級的管控措施，包括身分管理、網路存取、憑證處理與執行時期政策。

  透過在基礎架構層（而非應用程式層）實施治理管控，此框架旨在讓企業能夠有效管理 AI 代理存取內部系統與業務資料的方式，同時維護既有的營運政策。三家公司表示，對於正在將自主 AI 引入生產環境的企業而言，此框架提供了一套結構化的部署模型。

  ## 合作背景

  此次正式上線，是微軟、輝達與 Anthropic 三方既有合作關係的延伸。三方此前即持續致力於在 Azure 上透過輝達加速運算，擴展企業對 Claude 模型的取用管道。此次最新發布將三大要素整合為單一方案，供 Azure 客戶使用：微軟的 AI 開發環境、Anthropic 的 Claude 模型，以及輝達的 GB300 Blackwell Ultra 架構。

  三家公司表示，該平台的目標客群為有意開發自主 AI 系統的企業——這些系統須能跨越業務功能運作，同時保持在 Azure 原生環境之內。此次發布亦進一步擴充了 Microsoft Foundry 上可供選用的 AI 模型陣容，惠及正在建置生產級 AI 應用的各類企業。
date: "2026-07-01"
source_published: "2026-06-30T16:15:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Azure", "Nvidia"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Claude models go live on Microsoft Foundry via Azure (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/claude-models-go-live-on-microsoft-foundry-via-azure"
    title: "Claude models go live on Microsoft Foundry via Azure"
    trust: 3
    type: primary
    published_at: "2026-06-30T16:15:00.000Z"
  - url: "https://datacenternews.asia/story/claude-models-go-live-on-microsoft-foundry-via-azure"
    title: "Claude models go live on Microsoft Foundry via Azure"
    trust: 3
    type: corroborating
    published_at: "2026-06-30T16:15:00.000Z"
---
