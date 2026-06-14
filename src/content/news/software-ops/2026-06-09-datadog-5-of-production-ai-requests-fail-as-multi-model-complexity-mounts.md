---
title_en: "Datadog: 5% of production AI requests fail as multi-model complexity mounts"
title_zh: "Datadog：生產環境AI請求5%失敗，多模型複雜度成主因"
summary_en: "Datadog's 2026 AI Engineering report, published June 1, found that roughly 5% of AI requests in production environments fail, with capacity limitations responsible for about 60% of those failures, as nearly seven in ten organizations now run three or more AI models simultaneously."
summary_zh: "Datadog於2026年6月1日發布的《2026 AI工程報告》指出，生產環境中約5%的AI請求遭遇失敗，其中六成歸因於容量限制；目前近七成企業同時運行三個以上的AI模型，多模型部署已成為新常態。"
body_en: |
  Roughly one in twenty AI requests sent to production systems fails, and the primary cause is not model quality but operational complexity, according to Datadog's 2026 AI Engineering Survey Report, published June 1, 2026.

  The report, which analyzes data from organizations running AI in production, found that approximately 5% of AI model requests fail in live environments. Of those failures, about 60% are attributable to capacity limitations rather than model errors, Datadog said.

  ## Multi-model adoption and surging token volumes

  The backdrop to those failure rates is rapid expansion in the number of models organizations operate at once. According to the report, 69% of companies are currently using three or more AI models. OpenAI, the maker of ChatGPT, retains the largest provider share at 63%, but adoption of Google's Gemini rose 20 percentage points and adoption of Anthropic's Claude rose 23 percentage points, making multi-model deployments the new baseline, the report found.

  Alongside the proliferation of models, the volume of data moving through AI systems has grown sharply. Average tokens per request — the unit of text that large language models (LLMs) process — more than doubled for teams with typical usage levels and grew more than fourfold for high-usage teams, according to the report. Use of agent frameworks, software that chains multiple AI calls together to complete complex tasks, doubled year-over-year.

  ## Operational complexity as the core bottleneck

  Datadog Japan Senior Developer Advocate Taiji Hagino described a common failure pattern among organizations struggling to move from pilot projects to full production: fragmented visibility and reactive problem-solving. As the number of models and the volume of data grow, AI workflows become opaque, Hagino said, leaving teams unable to identify the source of cost increases or reproduce and diagnose problems. Security concerns compound the difficulty, further slowing adoption.

  "For many companies, it is not AI itself but the operational complexity of using AI that is starting to become the bottleneck," Hagino said, according to the report.

  Organizations that have scaled AI successfully treat it as a system requiring continuous operation rather than a one-time deployment, Hagino said. Those companies prioritize end-to-end visibility, standardized model management, and security controls built into workflows from an early stage, and focus on building structures for ongoing improvement rather than on the initial deployment itself, he said.

  ## Full-stack observability

  Observability — the practice of monitoring a system's internal state through its outputs — is central to Datadog's recommended response. The company argues that stable operation of complex AI systems requires visibility and control across the entire AI stack: infrastructure, data, models, agents, and security, rather than monitoring individual components in isolation.

  Datadog framed the next step for enterprises as moving from experimentation to safe scaling. That transition requires continuously measuring business value through cross-functional visibility and building operational structures that achieve speed without sacrificing security or governance, the company said.

  The report positions that operational foundation as a determining factor in competitive standing as AI deployment continues to expand.
body_zh: |
  根據Datadog於2026年6月1日發布的《2026 AI工程調查報告》，每二十個送往生產系統的AI請求中，約有一個會失敗，而失敗的主因並非模型品質，而是營運複雜度。

  該報告分析了在正式環境中運行AI的企業數據，發現約5%的AI模型請求會在實際上線環境中失敗。Datadog指出，在這些失敗案例中，約六成源自容量限制，而非模型本身的錯誤。

  ## 多模型採用與驟增的Token用量

  上述失敗率的背後，是企業同時運行模型數量的快速擴張。報告顯示，目前69%的企業同時使用三個以上的AI模型。ChatGPT開發商OpenAI以63%的占比維持最大供應商地位，但Google Gemini的採用率上升了20個百分點，Anthropic Claude則上升了23個百分點，多模型部署已成為業界新常態。

  伴隨著模型數量的激增，流經AI系統的資料量也大幅成長。報告指出，對於一般使用量的團隊而言，每次請求的平均Token數——即大型語言模型（LLM）處理的文字單位——已增加逾一倍；對於高使用量的團隊，更成長了四倍以上。將多個AI呼叫串連在一起、用以完成複雜任務的代理框架（agent framework）使用量，也較去年同期翻倍成長。

  ## 營運複雜度成為核心瓶頸

  Datadog日本資深開發者倡導者萩野太二（Taiji Hagino）描述了許多企業在嘗試從概念驗證走向全面生產時常見的失敗模式：可視性破碎、問題處理流於被動。他表示，隨著模型數量與資料量的增長，AI工作流程變得愈發不透明，讓團隊難以釐清成本攀升的根源，也無從重現及診斷問題。資安疑慮更是雪上加霜，進一步拖慢了企業的導入腳步。

  「對許多企業而言，阻礙他們的不是AI本身，而是使用AI的營運複雜度——這正逐漸成為最大的瓶頸。」報告引述萩野的話說道。

  萩野指出，成功規模化AI應用的企業，會將其視為需要持續維運的系統，而非一次性的部署。這類企業優先確保端到端的可視性、標準化的模型管理，以及從早期階段便內建於工作流程中的資安管控，並將重心放在建立持續改善的運作架構，而非僅著眼於初始部署本身。

  ## 全端可觀測性

  可觀測性（observability）——透過系統輸出來監測其內部狀態的實踐方式——是Datadog所建議因應之道的核心。該公司主張，複雜AI系統的穩定運行，需要橫跨整個AI技術堆疊的可視性與管控能力，涵蓋基礎架構、資料、模型、代理程式與資安，而非各自孤立地監控單一元件。

  Datadog將企業的下一步定位為：從實驗性嘗試邁向安全的規模化擴展。這一轉型需要透過跨部門的可視性持續衡量商業價值，並建立在不犧牲資安與治理的前提下兼顧速度的營運架構。

  報告將這套營運基礎定位為，在AI部署持續擴張的時代中，決定企業競爭地位的關鍵因素。
date: "2026-06-08T18:42:16.949Z"
source_published: "2026-06-07T22:00:00.000Z"
category: "software-ops"
secondary_categories: []
region: ["Japan"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: なぜ本番環境のAIは失敗するのか？　Datadog調査で判明した「運用の壁」と打開策 (trust 3/5)."
sources:
  - url: "https://www.itmedia.co.jp/enterprise/articles/2606/08/news040.html"
    title: "なぜ本番環境のAIは失敗するのか？　Datadog調査で判明した「運用の壁」と打開策"
    trust: 3
    type: primary
    published_at: "2026-06-07T22:00:00.000Z"
---
