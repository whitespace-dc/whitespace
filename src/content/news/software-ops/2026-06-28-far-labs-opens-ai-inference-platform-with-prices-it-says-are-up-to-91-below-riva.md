---
title_en: "FAR Labs opens AI inference platform with prices it says are up to 91% below rivals"
title_zh: "FAR Labs 推出 AI 推論平台，定價最低較同業便宜 91%"
summary_en: "FAR Labs, the AI infrastructure arm of Abu Dhabi-based Dizzaract, has opened early access registration for its FAR AI inference platform, listing per-token prices it claims are up to 91% below competing providers for selected open-source model deployments."
summary_zh: "FAR Labs 為阿布達比科技集團 Dizzaract 旗下 AI 基礎設施部門，日前正式開放其 FAR AI 推論平台的優先存取申請，公布每 token 定價，聲稱特定開源模型的費率最低可較競爭業者低 91%。"
body_en: |
  FAR Labs, the AI infrastructure unit of Abu Dhabi-based technology group Dizzaract, has opened early access registration for its FAR AI inference platform, listing prices the company says are up to 91% below those of competing providers for selected model deployments.

  The platform, currently in a closed testing stage with select partners, routes developer workloads across a distributed network of underused graphics processing unit (GPU) capacity drawn from consumer devices and small and medium-sized enterprise data centres. Developers access it through a single API — application programming interface — compatible with OpenAI's interface standard, allowing applications built for that ecosystem to connect without code changes. Workload allocation runs through FAR Labs' own FAR Orchestrator software layer.

  ## Pricing comparisons

  FAR Labs released benchmark price comparisons for three open-source models against listed rates from named competitors:

  - **Qwen3-30B-A3B**: $0.03 per million tokens, against $0.35 listed by NextBit and $0.27 by DeepInfra — a gap FAR Labs described as up to 91% lower.
  - **Qwen2.5-72B-Instruct** at FP8 precision: $0.17 per million tokens, against $0.39 from NovitaAI at BF16 precision and $0.38 from DeepInfra at FP8 — 55 to 56% lower, according to the company.
  - **Qwen3.5-122B-A10B** at FP8 precision: $0.51 per million tokens, with output token costs FAR Labs said were up to 79% below AtlasCloud FP8 and SiliconFlow FP8 listings.

  FP8 and BF16 are numerical precision formats used during model inference; lower precision reduces memory and compute requirements and generally lowers cost, though the figures are not always directly comparable across providers. FAR Labs' comparisons draw on listed rack rates; actual costs may differ based on volume, contractual terms, or workload characteristics not disclosed in the benchmarks.

  ## Structural cost argument

  FAR Labs said its pricing reflects how the network is built rather than temporary promotional discounting. By aggregating underused GPU capacity from consumer hardware and enterprise data centres rather than operating dedicated large-scale data centre fleets, the company argues it carries lower fixed infrastructure costs and can pass those savings to builders.

  Ilman Shazhaev, founder and chief executive of Dizzaract, framed it directly. "Our cost advantage is not a discount we are burning cash on. It is structural," he said in a statement.

  Routing through FAR Orchestrator sits at the centre of that claim. The orchestration layer performs reliability scoring and workload allocation across the distributed GPU pool, with the stated goals of maintaining uptime, workload continuity, and low latency.

  ## Platform capabilities

  Beyond price, FAR Labs said the platform addresses production requirements that go beyond experimental or development use. Features include trusted execution environment (TEE)-based secure inference — a hardware-level isolation mechanism that keeps workloads private even from the underlying infrastructure operator — as well as Semantic Vector Streaming and support for both open-source and proprietary models.

  ## Market conditions

  The launch targets a cost dynamic that has shifted for AI application developers. Shazhaev said the per-token cost of AI inference has fallen approximately 99% since 2021, yet total spending on inference continues to rise because usage is expanding faster than prices decline.

  That combination is especially consequential for developers whose products rely on proprietary APIs from large model providers. As AI features scale into production — across customer support systems, automated agents, gaming applications, and internal business workflows — recurring inference charges can reduce margins and limit how freely teams can iterate or expand usage.

  FAR Labs said conversations with developers, GPU suppliers, model teams, investors, and enterprise executives during meetings at the SuperAI Singapore event surfaced repeated demand for inference infrastructure that is faster, more reliable, lower cost, and suitable for production deployment rather than testing.

  ## Access and next steps

  The platform remains in a closed testing phase with select partners. FAR Labs is accepting early access registrations from builders and is offering one million free tokens to participants who join the programme.
body_zh: |
  FAR Labs 為阿布達比科技集團 Dizzaract 旗下 AI 基礎設施部門，日前正式開放其 FAR AI 推論平台的優先存取申請，公布每百萬 token 定價，聲稱針對特定開源模型的費率最低可較競爭業者低 91%。

  該平台目前處於封閉測試階段，僅開放部分合作夥伴參與。其運作方式是將開發者的工作負載路由至一個分散式網路，匯集來自消費性裝置及中小型企業資料中心中閒置的繪圖處理器（GPU）算力。開發者可透過單一 API（應用程式介面）存取，且該介面與 OpenAI 的介面規範相容，讓原先針對該生態系開發的應用程式無需修改程式碼即可直接串接。工作負載的分配則透過 FAR Labs 自行開發的 FAR Orchestrator 軟體層執行。

  ## 定價比較

  FAR Labs 針對三款開源模型，公布了與主要競爭業者公開費率的基準比較：

  - **Qwen3-30B-A3B**：每百萬 token 收費 0.03 美元，而 NextBit 公開費率為 0.35 美元、DeepInfra 為 0.27 美元，FAR Labs 稱此差距最高達 91%。
  - **Qwen2.5-72B-Instruct**（FP8 精度）：每百萬 token 收費 0.17 美元，而 NovitaAI（BF16 精度）為 0.39 美元、DeepInfra（FP8 精度）為 0.38 美元，據該公司說法低了 55 至 56%。
  - **Qwen3.5-122B-A10B**（FP8 精度）：每百萬 token 收費 0.51 美元，FAR Labs 指出其輸出 token 成本最低可較 AtlasCloud FP8 及 SiliconFlow FP8 的公開費率低 79%。

  FP8 與 BF16 為模型推論時所採用的數值精度格式；較低精度能降低記憶體與運算需求，通常也能壓低成本，但不同業者之間的數字並非總具直接可比性。FAR Labs 的比較係以各家公開的標準費率為準，實際費用可能因用量、合約條款或工作負載特性而有所不同，且相關細節並未在基準資料中揭露。

  ## 結構性成本優勢

  FAR Labs 表示，其定價反映的是網路架構本身的成本邏輯，而非短期促銷折扣。該公司並不自行建置大規模專屬資料中心機隊，而是匯聚來自消費性硬體與企業資料中心的閒置 GPU 算力，藉此主張固定基礎設施成本較低，並能將這份節省轉讓給開發者。

  Dizzaract 創辦人兼執行長 Ilman Shazhaev 在聲明中直言：「我們的成本優勢並非靠燒錢換來的折扣，而是結構性的。」

  FAR Orchestrator 的路由機制是這項主張的核心。該協調層負責對分散式 GPU 池進行可靠性評分與工作負載分配，目標在於維持系統可用性、工作負載連續性與低延遲。

  ## 平台功能

  除定價優勢外，FAR Labs 表示該平台亦具備超越實驗或開發用途、足以應對正式生產環境需求的功能。包括：基於可信執行環境（TEE）的安全推論——此為一種硬體層級的隔離機制，即便是底層基礎設施的營運方也無法存取工作負載內容——以及語義向量串流（Semantic Vector Streaming），並同時支援開源及專有模型。

  ## 市場背景

  此次上線瞄準的是 AI 應用開發者所面臨的成本結構變化。Shazhaev 表示，自 2021 年以來，AI 推論的每 token 成本已累計下降約 99%，然而推論的整體支出仍持續上升，原因在於使用量的擴張速度超過了價格的跌幅。

  這樣的情況對於產品仰賴大型模型業者專有 API 的開發者而言，影響尤為深遠。隨著 AI 功能逐步進入正式生產環境——橫跨客服系統、自動化代理、遊戲應用及企業內部工作流程——反覆累積的推論費用可能侵蝕利潤空間，並限制團隊自由迭代或擴展用量的能力。

  FAR Labs 指出，在新加坡 SuperAI 活動期間，他們與開發者、GPU 供應商、模型團隊、投資人及企業高管進行的多輪交流中，反覆聽到市場對推論基礎設施的同一種需求：速度更快、更可靠、成本更低，且須能支援正式部署，而非僅供測試使用。

  ## 申請方式與後續步驟

  該平台目前仍處於封閉測試階段，僅開放特定合作夥伴參與。FAR Labs 正接受開發者的優先存取申請，並提供加入計畫的參與者 100 萬枚免費 token。
date: "2026-06-28"
source_published: "2026-06-26T18:57:00.000Z"
category: "software-ops"
secondary_categories: []
region: ["Singapore"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: FAR Labs opens access to cheaper AI inference platform (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/far-labs-opens-access-to-cheaper-ai-inference-platform"
    title: "FAR Labs opens access to cheaper AI inference platform"
    trust: 3
    type: primary
    published_at: "2026-06-26T18:57:00.000Z"
---
