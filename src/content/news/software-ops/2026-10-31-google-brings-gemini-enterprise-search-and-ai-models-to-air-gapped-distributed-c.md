---
title_en: "Google brings Gemini enterprise search and AI models to air-gapped Distributed Cloud"
title_zh: "Google 為氣隙分散式雲端導入 Gemini 企業搜尋與 AI 模型"
summary_en: "Google has expanded its air-gapped Google Distributed Cloud platform with Gemini-powered enterprise search, broader AI model support including Gemini 3.5 Flash, NVIDIA Blackwell Ultra hardware, and new partner software from Teradata, Solo.io and Mattermost. The additions target customers in defence, intelligence and regulated sectors that cannot use standard public cloud services."
summary_zh: "Google 擴充氣隙隔離版 Google 分散式雲端平台，新增以 Gemini 為基礎的企業搜尋功能、Gemini 3.5 Flash 等更廣泛的 AI 模型支援、輝達 Blackwell Ultra 硬體，以及 Teradata、Solo.io 和 Mattermost 三家合作夥伴的軟體，目標客群鎖定國防、情報及受管制產業中無法使用標準公有雲服務的機構。"
body_en: |
  Google has expanded its air-gapped Google Distributed Cloud platform with generative AI tools, updated infrastructure and software from three additional partners, targeting customers in defence, intelligence and regulated industries that cannot use standard public cloud services because of data sovereignty or security requirements.

  ## Enterprise search and model availability

  The headline addition is an enterprise search capability built on Gemini, available in preview on Google Distributed Cloud air-gapped. The service provides a conversational interface for querying and summarising data held inside isolated environments, covering text, audio and video content. Google said the tool uses retrieval-augmented generation (RAG) — a technique that grounds AI-generated responses in a specific document corpus rather than relying solely on a model's training — with all indexing and query interactions confined within the sovereign perimeter.

  Google positioned the capability as a response to a recurring problem in classified environments: analysts frequently work across compartmentalised information sources and must currently rely on custom-built tools to search and synthesise that data.

  Gemini 3.5 Flash, described by Google as suited to low-latency reasoning and multimodal tasks in disconnected environments, is now generally available on the air-gapped platform. The update also extends support to open-weight models including Gemma and Mistral, giving customers a choice of models for different workloads on the same infrastructure. Google said it is among the first large cloud providers to make a frontier model — one from a current commercial AI lineup — available in a fully disconnected deployment.

  ## Infrastructure changes

  On the hardware side, NVIDIA HGX B300 systems based on the Blackwell Ultra architecture are now generally available on Google Distributed Cloud. The systems are intended to provide local compute for running Gemini, open models and AI agent workloads at production scale inside air-gapped environments.

  Virtual machine networking throughput has been raised from 25 Gbps to 32 Gbps per VM. Google said the change is designed to improve data movement to graphics processing units and reduce bottlenecks in AI inference pipelines, where large amounts of data must move rapidly between storage and accelerator hardware.

  The platform now also includes fully managed Cloud DNS, which lets teams manage DNS records — the system that translates hostnames to IP addresses — through Kubernetes application programming interfaces and command-line tools already in use. Hardware-offloaded IPsec encryption for node-to-node traffic is available at up to 100 Gbps; IPsec is a standard protocol suite for encrypting communications between network nodes.

  Google is also integrating Elastic Security into air-gapped deployments. The integration covers security information and event management (SIEM) — centralised log collection and automated threat detection — and endpoint detection and response (EDR), which monitors individual devices for malicious activity, both within the isolated environment.

  ## Partner software additions

  The update expands the software marketplace available within Google Distributed Cloud. Teradata, Solo.io and Mattermost have been newly added or expanded for sovereign deployments.

  Teradata is bringing its data analytics and warehouse software to the platform for use at the distributed edge, allowing customers to run analytical pipelines near local AI inference without moving data beyond the secure perimeter. "Enterprises in highly regulated and air-gapped environments are eager to harness the transformative power of generative AI, but they cannot compromise on data privacy or analytical rigor," said Sumeet Arora, Chief Product Officer at Teradata. "By bringing Teradata to Google Distributed Cloud, we are enabling our joint customers to run complex analytical workloads and AI inferencing right where their data resides."

  Solo.io is adding API management, service mesh and tools including kagent and agentgateway to these environments. Google said the software is intended to help customers connect and govern microservices and AI agents across isolated clusters — a need that grows as organisations deploy multiple AI models and services that must communicate securely within a closed network.

  Mattermost, a collaboration platform used in defence and public sector settings, is being added with AI-assisted summaries and translation capabilities. According to Google, those AI functions run on models hosted locally on Google Distributed Cloud rather than calling out to external services.

  ## Significance for regulated-sector AI adoption

  The update reflects a widening effort among cloud providers to pre-integrate AI tools within sovereign infrastructure rather than requiring organisations in sensitive sectors to build such capabilities independently. Customers in defence, intelligence and critical infrastructure have historically faced barriers to adopting commercial AI services because regulations or security policies prohibit routing sensitive data through shared external networks.

  For Google, the release moves Google Distributed Cloud from a core compute and storage platform toward a more complete packaged environment spanning search, model deployment, analytics, security operations and team collaboration — all within an air-gapped perimeter.

  Google said enterprise search with Gemini on Google Distributed Cloud remains in preview, while Gemini 3.5 Flash and the NVIDIA HGX B300 systems have reached general availability on the platform.
body_zh: |
  Google 擴充了氣隙隔離版 Google 分散式雲端平台，新增生成式 AI 工具、更新後的基礎架構，以及來自三家合作夥伴的軟體，目標客群鎖定國防、情報與受管制產業中，因資料主權或安全要求而無法使用標準公有雲服務的客戶。

  ## 企業搜尋與模型支援

  此次更新最受矚目的新功能，是以 Gemini 為基礎的企業搜尋能力，目前已在氣隙隔離版 Google 分散式雲端上以預覽版形式提供。此服務提供對話式介面，可查詢並摘要隔離環境中存放的資料，涵蓋文字、音訊與影片內容。Google 表示，這套工具採用檢索增強生成（RAG）技術——一種將 AI 生成的回應扎根於特定文件語料庫、而非單純依賴模型訓練知識的方法——所有索引建立與查詢互動均在主權邊界範圍內進行。

  Google 將此能力定位為針對機密環境中一個反覆出現的痛點所提出的解方：分析師在日常工作中往往需要跨越多個分隔的資訊來源，目前必須仰賴客製化工具才能搜尋並整合這些資料。

  Gemini 3.5 Flash 被 Google 形容為適合在斷線環境中執行低延遲推論及多模態任務，目前已在氣隙隔離平台上正式上線。此次更新同時擴大了對開放權重模型的支援，涵蓋 Gemma 與 Mistral，讓客戶得以在同一基礎架構上針對不同工作負載選用不同模型。Google 表示，這使其成為率先在完全斷線的部署環境中提供前沿模型——即目前商用 AI 產品線中最新世代模型——的大型雲端服務商之一。

  ## 基礎架構更新

  硬體方面，採用 Blackwell Ultra 架構的輝達 HGX B300 系統現已在 Google 分散式雲端上正式上線。這些系統旨在氣隙隔離環境中提供本地運算能力，以生產規模執行 Gemini、開放模型及 AI 代理工作負載。

  虛擬機器的網路吞吐量已從每台虛擬機器 25 Gbps 提升至 32 Gbps。Google 表示，此項調整旨在改善資料向圖形處理器（GPU）移動的效率，並緩解 AI 推論管線中的瓶頸——在推論過程中，大量資料必須在儲存裝置與加速器硬體之間快速傳輸。

  平台現已納入全代管的 Cloud DNS，讓團隊得以透過現有的 Kubernetes 應用程式介面及命令列工具管理 DNS 記錄，亦即負責將主機名稱轉換為 IP 位址的系統。節點間流量的硬體卸載 IPsec 加密目前最高支援 100 Gbps；IPsec 是一套用於加密網路節點間通訊的標準協定組。

  Google 同時將 Elastic Security 整合至氣隙隔離部署中。此整合涵蓋資安資訊與事件管理（SIEM）——即集中式日誌收集與自動化威脅偵測——以及端點偵測與回應（EDR），後者可在隔離環境內監控個別裝置的惡意活動。

  ## 合作夥伴軟體新增

  此次更新擴充了 Google 分散式雲端內可取用的軟體市集。Teradata、Solo.io 與 Mattermost 已針對主權部署環境新增或擴展相關功能。

  Teradata 將其資料分析與倉儲軟體引入此平台，供分散式邊緣端使用，讓客戶得以在本地 AI 推論環境旁直接執行分析管線，無需將資料移出安全邊界。Teradata 首席產品長 Sumeet Arora 表示：「高度受管制及氣隙隔離環境中的企業，迫切希望駕馭生成式 AI 的變革力量，但又絕不能在資料隱私或分析嚴謹度上有所妥協。透過將 Teradata 引入 Google 分散式雲端，我們讓雙方的共同客戶得以在其資料所在之處，直接執行複雜的分析工作負載與 AI 推論。」

  Solo.io 則將 API 管理、服務網格，以及 kagent 與 agentgateway 等工具引入這些環境。Google 表示，相關軟體旨在協助客戶跨隔離叢集連結並管理微服務與 AI 代理——隨著組織部署多個必須在封閉網路內安全通訊的 AI 模型與服務，這項需求正持續成長。

  Mattermost 是一款廣泛應用於國防與公部門環境的協作平台，此次在加入支援的同時，也帶入了 AI 輔助摘要與翻譯功能。據 Google 表示，這些 AI 功能係在本地託管於 Google 分散式雲端的模型上執行，不會呼叫外部服務。

  ## 對受管制產業導入 AI 的意義

  此次更新反映出雲端服務商日益擴大的一項趨勢：主動將 AI 工具預先整合至主權基礎架構中，而非要求敏感部門的組織自行建構此類能力。國防、情報及關鍵基礎設施領域的客戶，歷來面臨採用商用 AI 服務的重重障礙，原因在於相關法規或安全政策禁止將敏感資料透過共用的外部網路傳輸。

  對 Google 而言，這次發布使 Google 分散式雲端從一個核心運算與儲存平台，蛻變為更完整的整合封裝環境，涵蓋搜尋、模型部署、分析、資安操作與團隊協作——全數在氣隙隔離邊界內完成。

  Google 表示，Google 分散式雲端上的 Gemini 企業搜尋功能仍處於預覽階段，而 Gemini 3.5 Flash 與輝達 HGX B300 系統則已在平台上正式上線。
date: "2026-10-31"
source_published: "2026-10-29T18:48:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Google adds AI & partner tools to air-gapped cloud (trust 3/5)."
sources:
  - url: "https://datacenter.news/story/google-adds-ai-partner-tools-to-air-gapped-cloud"
    title: "Google adds AI & partner tools to air-gapped cloud"
    trust: 3
    type: primary
    published_at: "2026-10-29T18:48:00.000Z"
---
