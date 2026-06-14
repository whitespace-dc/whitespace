---
title_en: "Anthropic Disables Fable 5 and Mythos 5 After US Government Export Control Order"
title_zh: "美政府出口管制令出爐，Anthropic 緊急下架 Fable 5 與 Mythos 5"
summary_en: "Anthropic has shut down access to its Fable 5 and Mythos 5 AI models for all customers after the US government issued an export control directive barring any foreign national from using either model, citing national security authorities."
summary_zh: "Anthropic 因美國政府以國家安全為由頒布出口管制指令，禁止任何外籍人士存取，被迫全面關閉 Fable 5 與 Mythos 5 兩款 AI 模型。此舉導致大量依賴上述模型的自動化工作流程即刻中斷，引發業界對 AI 基礎設施脆弱性的廣泛討論。"
body_en: |
  Anthropic has disabled its Fable 5 and Mythos 5 AI models for all customers after the US government issued an export control directive barring any foreign national from accessing either model, citing national security authorities.

  The directive, as Anthropic described it, suspends access for "any foreign national, whether inside or outside the United States, including foreign national Anthropic employees." Because that restriction covers a population that overlaps with the company's customer base and its own workforce, Anthropic said it had no practical option but to disable both models entirely in order to ensure compliance.

  ## What the government directed

  Export controls have previously been applied across a range of sensitive technologies, including encryption on data processing units (DPUs), high-end graphics processors (GPUs), and dual-use software — products that have legitimate commercial applications but can also be used in ways that raise national security concerns. The US government has now applied that same authority to two AI models.

  The directive is linked, at least in part, to what the government characterized as a "universal jailbreak" — a means of bypassing a model's safety constraints. Anthropic is contesting that framing. The company argued that the capability believed to underlie the jailbreak is not unique to Fable 5 or Mythos 5, but is available across other frontier AI models as well. Anthropic further warned that if the same reasoning were extended to all frontier models industry-wide, the result could be a halt to new frontier model deployments broadly.

  ## Immediate operational impact

  Both models are now unavailable through the Anthropic API and the Claude desktop application. Operators who built automated or agentic workflows on Fable 5 or Mythos 5 faced an immediate, unplanned migration to alternative models. Fallback options including Opus 4.7 and Opus 4.8 are available, though they were described as less accurate for at least some tasks the halted models handled reliably.

  The disruption illustrates a structural vulnerability in agentic AI deployments. A workflow built around a single model with no automatic failover stops entirely when that model is taken offline. That risk compounds if multiple frontier models from different providers were subject to similar orders at the same time.

  ## What the episode signals for infrastructure planning

  The shutdown has renewed attention to the question of whether operators running critical workloads should treat locally hosted AI models — which would not be subject to the same access controls — as a necessary contingency layer rather than an optional alternative. It also points to the value of routing infrastructure that can redirect traffic to a substitute model without manual intervention when a primary model becomes unavailable.

  Anthropic has not disclosed whether or when access to Fable 5 or Mythos 5 will be restored.
body_zh: |
  美國政府以國家安全為由頒布出口管制指令，禁止任何外籍人士存取 Fable 5 與 Mythos 5 兩款 AI 模型，Anthropic 隨即對所有客戶全面關閉這兩款模型的存取權限。

  該指令如 Anthropic 所述，暫停了「任何外籍人士，無論身處美國境內或境外，包括 Anthropic 的外籍員工」的使用權限。由於這項限制所涵蓋的群體與公司客戶群及自身員工有所重疊，Anthropic 表示，為確保合規，實際上別無選擇，只能全面下架兩款模型。

  ## 政府指令的內容

  出口管制先前已被應用於多種敏感技術，包括資料處理器（DPU）上的加密技術、高階繪圖處理器（GPU），以及雙重用途軟體——即具備正當商業用途，但也可能被用於引發國家安全疑慮之用途的產品。美國政府如今已將同樣的管制權力延伸至兩款 AI 模型。

  此次指令至少部分起因於政府所稱的「通用越獄」（universal jailbreak）——一種可繞過模型安全限制的手段。Anthropic 對此定性提出異議，主張被認為構成越獄基礎的技術能力並非 Fable 5 或 Mythos 5 所獨有，而是廣泛存在於其他前沿 AI 模型之中。Anthropic 並進一步警告，若將相同邏輯推廣至整個業界的所有前沿模型，可能導致新型前沿模型的發布全面停擺。

  ## 立即的營運衝擊

  兩款模型目前已無法透過 Anthropic API 及 Claude 桌面應用程式存取。以 Fable 5 或 Mythos 5 為基礎建構自動化或代理工作流程的業者，面臨了緊急且毫無預警的模型遷移壓力。可用的備援選項包括 Opus 4.7 與 Opus 4.8，但在被停用模型原本能穩定處理的部分任務上，這些替代方案的準確度被描述為略遜一籌。

  此次事件揭示了代理式 AI 部署架構中的結構性弱點：若工作流程僅依賴單一模型且未設置自動備援機制，一旦該模型下線，整個流程便會立即中斷。若來自不同供應商的多款前沿模型同時受到類似指令波及，這一風險更將成倍放大。

  ## 此事件對基礎設施規劃的啟示

  這次關閉事件再度引發各界關注：對於執行關鍵工作負載的業者而言，本地部署的 AI 模型——因其不受相同存取管制的約束——是否應被視為必要的應急備援層，而非可有可無的替代選項。此外，此事件也凸顯了路由基礎設施的重要性：當主要模型無法使用時，能夠在無需人工介入的情況下，自動將流量導向替代模型。

  Anthropics 目前尚未披露 Fable 5 或 Mythos 5 的存取權限是否會恢復，以及何時恢復。
date: "2026-06-15"
source_published: "2026-06-14T13:00:04.000Z"
category: "regulatory"
secondary_categories: ["compute"]
region: ["United States"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: Antropic Halts Access to Fable 5 and Mythos 5 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/antropic-halts-access-to-fable-5-and-mythos-5/"
    title: "Antropic Halts Access to Fable 5 and Mythos 5"
    trust: 3
    type: primary
    published_at: "2026-06-14T13:00:04.000Z"
---
