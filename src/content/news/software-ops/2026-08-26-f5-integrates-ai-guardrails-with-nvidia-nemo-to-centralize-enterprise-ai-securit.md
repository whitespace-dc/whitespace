---
title_en: "F5 Integrates AI Guardrails with Nvidia NeMo to Centralize Enterprise AI Security"
title_zh: "F5整合輝達NeMo防護欄　集中管控企業AI安全政策"
summary_en: "F5 has integrated its AI Guardrails service with Nvidia NeMo Guardrails, giving enterprises a single control point to enforce security policies across AI applications running on hybrid multicloud infrastructure. The integration inspects prompts and large language model responses to block risks including prompt injection, data leakage, and harmful outputs."
summary_zh: "F5已將旗下AI Guardrails服務與輝達NeMo Guardrails整合，讓企業得以在混合多雲基礎架構上，透過單一控制點統一執行所有AI應用程式的安全政策。該整合方案可檢查使用者提示詞及大型語言模型的回應，有效攔截提示詞注入、資料外洩及有害輸出等風險。"
body_en: |
  ## F5 and Nvidia unite AI security layers for enterprise deployments

  F5, the U.S.-based application delivery and cloud services company, has integrated its F5 AI Guardrails service with Nvidia NeMo Guardrails, allowing enterprises to enforce AI security and usage policies from a single point across all their AI applications without modifying individual application code.

  The integration addresses a problem F5 says emerges when companies scale AI into production: organizations typically run multiple AI models and frameworks across several infrastructure environments, including hybrid multicloud setups, causing security controls to fragment and policies to diverge across deployments.

  ## How the layered architecture works

  Under the integrated architecture, F5 AI Guardrails operates as an inspection layer above the Nvidia NeMo Guardrails framework. F5 AI Guardrails checks the prompts users send to AI applications and the responses those applications return from large language models (LLMs), which are the foundation models underlying AI assistants and similar tools. Nvidia NeMo Guardrails provides the underlying framework for defining the security and usage rules that govern AI behavior.

  F5 said the combined system lets security teams manage policies for multiple AI applications from one location without rewriting code or restructuring application workflows. Each layer — the F5 inspection layer and the Nvidia framework beneath it — can be updated, scaled, or replaced independently.

  ## Risks the system targets

  F5 AI Guardrails is designed to help prevent several categories of AI-specific risk:

  - Prompt injection, where malicious instructions embedded in user input attempt to override an AI application's intended behavior
  - Personally identifiable information (PII) exposure, where sensitive user data surfaces in model outputs
  - Data leakage more broadly
  - Harmful or policy-violating model outputs

  ## Centralized visibility across models and business units

  Beyond policy enforcement, F5 said the integration provides unified visibility into AI application behavior across different models, frameworks, and business units. Security teams can monitor, audit, and act from a single operational layer rather than inspecting each AI deployment separately.

  F5 Chief Product Officer Kunal Anand said many enterprises today are not short of AI applications but lack consistent security and governance across them. Anand said fragmented security controls, once AI reaches production, create risk, complexity, and delays.

  ## What the integration means for enterprise AI operations

  The arrangement reflects a broader challenge facing organizations adopting AI at scale: the security tooling built for conventional software does not map cleanly onto AI systems, which interact with users through natural language and generate unpredictable outputs. By positioning policy enforcement as a centralized infrastructure layer separate from the applications themselves, F5 and Nvidia are offering enterprises a way to apply governance uniformly without requiring each application team to implement its own controls.

  F5 said the layered design also means enterprises can update security policies or swap out components as AI frameworks evolve, without rebuilding their AI applications.
body_zh: |
  ## F5與輝達攜手整合AI安全防護層，服務企業部署

  F5是一家總部位於美國的應用程式交付與雲端服務公司，該公司已將旗下F5 AI Guardrails服務與輝達NeMo Guardrails整合，讓企業無需修改個別應用程式的程式碼，即可從單一管控點，對所有AI應用程式統一執行AI安全與使用政策。

  此次整合所解決的，是F5指出的企業將AI大規模推進生產環境時所浮現的問題：組織通常在多個基礎架構環境（包括混合多雲設定）中，同時運行多種AI模型與框架，導致安全管控機制分散，各部署之間的政策也因此出現落差。

  ## 分層架構的運作方式

  在整合後的架構下，F5 AI Guardrails作為稽查層，運行於輝達NeMo Guardrails框架之上。F5 AI Guardrails負責檢查使用者傳送至AI應用程式的提示詞，以及這些應用程式從大型語言模型（LLM）取得的回應——LLM即AI助理及類似工具背後的基礎模型。輝達NeMo Guardrails則提供底層框架，用以定義規範AI行為的安全與使用規則。

  F5表示，這套整合系統讓資安團隊無需重寫程式碼或重整應用程式工作流程，即可從單一位置管理多個AI應用程式的政策。每一層——F5的稽查層與其下方的輝達框架——均可獨立更新、擴展或替換。

  ## 系統針對的風險類型

  F5 AI Guardrails的設計目標，在於防範多種AI專屬風險類別：

  - 提示詞注入：惡意指令嵌入使用者輸入，試圖覆蓋AI應用程式預期的行為
  - 個人識別資訊（PII）外洩：敏感的使用者資料出現於模型輸出結果中
  - 更廣義的資料外洩
  - 有害或違反政策的模型輸出

  ## 跨模型與跨業務單位的集中可視性

  除政策執行之外，F5表示此次整合亦提供了跨不同模型、框架與業務單位，對AI應用程式行為的統一可視性。資安團隊可從單一作業層進行監控、稽核與因應，毋須逐一檢視每個AI部署環境。

  F5產品長Kunal Anand表示，許多企業如今並不缺乏AI應用程式，缺乏的是跨應用程式一致的安全性與治理機制。Anand指出，一旦AI進入生產環境，分散的安全管控機制便會帶來風險、複雜性與延誤。

  ## 整合對企業AI營運的意義

  此次合作反映出大規模導入AI的組織所面臨的更廣泛挑戰：為傳統軟體打造的安全工具，並不能直接套用於AI系統——後者透過自然語言與使用者互動，並產生難以預測的輸出結果。透過將政策執行定位為獨立於應用程式本身的集中式基礎架構層，F5與輝達為企業提供了一種無需各應用程式團隊自行實作管控機制，即可統一落實治理的方式。

  F5表示，分層設計同時也意味著，隨著AI框架持續演進，企業可直接更新安全政策或替換元件，而無需重建其AI應用程式。
date: "2026-08-26"
source_published: "2026-08-21T00:00:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: F5 Tambah Keamanan Aplikasi AI untuk Enterprise, Pakai Teknologi Nvidia (trust 3/5)."
sources:
  - url: "https://tekno.kompas.com/read/2026/08/21/16450087/f5-tambah-keamanan-aplikasi-ai-untuk-enterprise-pakai-teknologi-nvidia"
    title: "F5 Tambah Keamanan Aplikasi AI untuk Enterprise, Pakai Teknologi Nvidia"
    trust: 3
    type: primary
    published_at: "2026-08-21T00:00:00.000Z"
---
