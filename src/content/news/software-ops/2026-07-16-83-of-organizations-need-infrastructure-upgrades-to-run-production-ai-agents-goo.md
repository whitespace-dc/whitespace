---
title_en: "83% of Organizations Need Infrastructure Upgrades to Run Production AI Agents, Google Cloud Survey Finds"
title_zh: "Google Cloud調查：83%企業須升級基礎設施方能落地AI代理"
summary_en: "A Google Cloud survey of 1,402 IT leaders worldwide found that 83% of organizations need to upgrade their IT infrastructure to support production-level AI agents, with hidden inference costs and operational complexity cited as the primary drivers of unplanned spending."
summary_zh: "Google Cloud針對全球1,402位IT主管進行調查，結果顯示83%的企業必須升級IT基礎設施，才能在生產環境中運行AI代理，隱性推論成本與營運複雜度是預算超支的主要驅動因素。"
body_en: |
  A Google Cloud survey of 1,402 IT department leaders worldwide found that 83% of organizations require infrastructure upgrades to operate AI agents at production scale, underscoring a widening gap between pilot deployments and full production readiness that is straining enterprise IT budgets.

  The findings come from Google Cloud's "2026 State of infrastructure in the agentic AI era," the second annual edition of the survey, which examines the infrastructure realities of running AI agents in live production environments.

  ## The inference tax

  Among the specific cost pressures identified, 62% of respondents said the "inference tax" — the aggregate cost of running AI inference — is directly increasing their spending. Google Cloud breaks that tax into three components: data egress charges, expanding storage requirements, and fees for dedicated hardware that sits idle between workloads.

  Beyond inference alone, 81% of leaders identified "operational complexity" as a hidden cost of production AI agent deployments. Google Cloud attributed this complexity partly to the architectural assumption underlying most current deployments: AI agents running continuously in the cloud, with inference never paused.

  Google Cloud's position, as stated in its survey commentary, is that conventional IT infrastructure was not designed with autonomously operating agents in mind. The transition from pilot to production is where most organizations encounter infrastructure constraints, the company said.

  ## Edge deployment as a cost lever

  One response Google Cloud highlights is moving AI agent workloads to the edge — running optimized models on smartphones, IoT devices, and on-premises local servers rather than centralized cloud infrastructure. By shifting compute closer to the point of use, organizations can convert per-token variable costs, which scale with processing volume, into more predictable local infrastructure costs.

  Survey respondents signaled broad interest in the approach: 90% of organizations rated edge AI deployment as "important," and 72% rated it "very important." Google Cloud said edge deployment also reduces latency and enables operational continuity when network connectivity is interrupted.

  "To maintain cost efficiency, it is necessary to reconsider where computational loads are processed," Google Cloud said, according to the survey report.

  ## Industry implications

  The survey results indicate that the cost challenges of production agentic AI are widespread rather than isolated, affecting the large majority of organizations that have attempted the transition from testing to live deployment. As enterprises move beyond experimentation, infrastructure spending decisions — particularly around where inference workloads run — are becoming a central concern for IT planners and finance teams alike.

  Google Cloud said the survey reflects infrastructure conditions in the current agentic AI era and represents the second data point in what the company frames as an ongoing annual benchmark.
body_zh: |
  Google Cloud針對全球1,402位IT部門主管進行的調查顯示，83%的企業必須升級IT基礎設施，才能在生產規模上運行AI代理，凸顯出概念驗證部署與正式生產就緒之間日益擴大的落差，已對企業IT預算造成沉重壓力。

  這份調查結果來自Google Cloud發布的《2026年代理式AI時代基礎設施現況》報告，為該系列調查的第二年度版本，深入探討在實際生產環境中運行AI代理的基礎設施現實。

  ## 推論稅的衝擊

  在具體的成本壓力方面，62%的受訪者表示「推論稅」——即運行AI推論的整體成本——正在直接推高他們的支出。Google Cloud將這筆稅金拆解為三大組成要素：資料傳出費用、不斷擴張的儲存需求，以及工作負載閒置期間仍須支付的專用硬體費用。

  除了推論本身之外，81%的主管將「營運複雜度」列為生產環境部署AI代理的隱性成本。Google Cloud將這種複雜性部分歸因於現行大多數部署所依賴的架構假設：AI代理在雲端持續運行，推論從不暫停。

  Google Cloud在調查報告的評論中指出，傳統IT基礎設施在設計之初，並未將自主運作的代理納入考量。從試驗到正式生產的過渡階段，正是大多數企業遭遇基礎設施瓶頸的關鍵時刻。

  ## 邊緣部署作為降本槓桿

  Google Cloud重點介紹的因應之道之一，是將AI代理工作負載移轉至邊緣端——在智慧型手機、物聯網裝置及本地端伺服器上運行經過優化的模型，而非仰賴集中式雲端基礎設施。透過將運算資源移近使用端，企業能將隨處理量浮動的每Token變動成本，轉換為更具可預測性的本地基礎設施固定成本。

  受訪者對此方向展現高度興趣：90%的企業將邊緣AI部署評為「重要」，72%更評為「非常重要」。Google Cloud表示，邊緣部署同時有助於降低延遲，並在網路連線中斷時仍能維持營運持續性。

  報告引述Google Cloud的說法：「為維持成本效益，有必要重新審視運算負載的處理位置。」

  ## 產業影響

  這份調查結果顯示，生產級代理式AI的成本挑戰並非個案，而是普遍現象，影響到絕大多數曾嘗試從測試環境過渡至正式部署的企業。隨著企業超越實驗階段，基礎設施支出的決策——尤其是推論工作負載應在何處運行——正成為IT規劃人員與財務團隊共同關注的核心議題。

  Google Cloud表示，這份調查反映了當前代理式AI時代的基礎設施現況，也是該公司定位為持續年度基準測試中的第二份數據點。
date: "2026-07-16"
source_published: "2026-07-14T23:00:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Google Cloud"]
trust:
  score: 3
  reasoning: "Single source: AIエージェントのコスト、どこに「消えて」いる？　Google Cloud調査で浮上した“クラウド利用の盲点”：AIニュースピックアップ (trust 3/5)."
sources:
  - url: "https://www.itmedia.co.jp/enterprise/articles/2607/14/news039.html"
    title: "AIエージェントのコスト、どこに「消えて」いる？　Google Cloud調査で浮上した“クラウド利用の盲点”：AIニュースピックアップ"
    trust: 3
    type: primary
    published_at: "2026-07-14T23:00:00.000Z"
---
