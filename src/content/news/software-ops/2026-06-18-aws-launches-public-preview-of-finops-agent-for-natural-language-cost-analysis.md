---
title_en: "AWS Launches Public Preview of FinOps Agent for Natural-Language Cost Analysis"
title_zh: "AWS FinOps Agent 公開預覽上線，支援自然語言雲端成本分析"
summary_en: "Amazon Web Services has opened a public preview of AWS FinOps Agent, a tool that answers natural-language questions about cloud spending and investigates cost anomalies by drawing on existing AWS cost-management services. The agent is available at no additional charge during the preview period, with usage limits, in the US East (N. Virginia) region."
summary_zh: "亞馬遜雲端服務（AWS）宣布 AWS FinOps Agent 正式進入公開預覽階段，這項工具可接受自然語言查詢、分析雲端支出，並透過現有 AWS 成本管理服務自動調查費用異常狀況。預覽期間於美東（北維吉尼亞）區域免費提供，但有使用量限制。"
body_en: |
  Amazon Web Services has begun a public preview of AWS FinOps Agent, a service that lets engineers and finance teams ask plain-language questions about their AWS bill and receive automated root-cause analysis when costs spike, the company announced.

  The agent is available now in the US East (N. Virginia) region. AWS said it carries no additional charge during the preview period, though usage is subject to unspecified limits.

  ## What the agent does

  AWS FinOps Agent accepts natural-language queries — the company gave the example "Why did my AWS costs increase last month?" — and returns answers that identify which services changed, by how much, and what underlying factors drove the shift.

  When costs move sharply, the agent can cross-reference spending data with AWS CloudTrail event logs to trace the change to specific actions or configuration shifts. It can then post a findings report directly to a Slack channel, AWS said.

  Beyond reactive investigation, the agent can execute scheduled tasks. AWS described two examples: generating a daily cost report formatted as a presentation-ready PDF, and pulling optimization recommendations from AWS Cost Optimization Hub and AWS Compute Optimizer, summarizing them, and filing the results as Jira tickets.

  ## Background in existing AWS cost tooling

  AWS already offers several cost-management services the FinOps Agent draws on: AWS Cost Explorer for spending visualization, AWS Cost Anomaly Detection for automated alerting on unusual charges, and AWS Cost Optimization Hub for rightsizing and savings recommendations. The FinOps Agent sits atop these services as a natural-language interface and workflow layer, according to AWS.

  AWS bills most services on a consumption basis — metering compute time, storage volume, and data transfer — a model the company described as rational but one that makes precise cost forecasting difficult and complicates efforts to distinguish legitimate growth in usage from inefficiency.

  ## What it means

  The public preview extends AWS's cost-management portfolio into agentic territory, giving teams a single query interface that can both explain past charges and automate reporting and ticketing workflows without manual data extraction across multiple consoles. The scope of the tool at general availability — including supported regions and final pricing — has not been announced.
body_zh: |
  亞馬遜雲端服務（AWS）宣布，AWS FinOps Agent 正式進入公開預覽階段。這項服務讓工程師與財務團隊能以日常語言直接詢問 AWS 帳單問題，並在費用異常攀升時自動執行根本原因分析，AWS 於公告中表示。

  該代理目前已在美東（北維吉尼亞）區域上線。AWS 表示預覽期間不另行收費，但使用量受到尚未公開說明的限制。

  ## 功能說明

  AWS FinOps Agent 接受自然語言查詢——AWS 舉例，用戶可直接詢問「我的 AWS 費用上個月為何增加？」——並回傳能識別哪些服務發生變化、變化幅度，以及背後驅動因素的分析結果。

  當費用出現大幅波動時，該代理可交叉比對支出資料與 AWS CloudTrail 事件日誌，將費用變化追溯至特定操作或組態異動，並可將調查結果報告直接發布至 Slack 頻道，AWS 表示。

  除了被動式調查之外，該代理還能執行排程任務。AWS 列舉了兩個範例：每日自動產生格式化為可供簡報使用的 PDF 成本報告；以及從 AWS Cost Optimization Hub 與 AWS Compute Optimizer 擷取優化建議、加以彙整摘要，並將結果建立為 Jira 工單。

  ## AWS 現有成本管理工具背景

  AWS 現已提供多項成本管理服務，FinOps Agent 正是以這些服務為基礎：用於支出視覺化的 AWS Cost Explorer、針對異常費用自動發出警示的 AWS Cost Anomaly Detection，以及提供適度調整規模與節省費用建議的 AWS Cost Optimization Hub。AWS 表示，FinOps Agent 作為自然語言介面與工作流程層，架構於上述服務之上。

  AWS 多數服務採用依使用量計費的模式——以運算時間、儲存容量與資料傳輸量計費——AWS 形容這一模式雖然合理，但也使精確的費用預測變得困難，並讓區分正常使用量成長與低效浪費的工作更加複雜。

  ## 意義解析

  此次公開預覽將 AWS 成本管理產品組合延伸至代理式（Agentic）領域，讓團隊透過單一查詢介面，既能解釋過往費用，又能自動化報告與工單工作流程，無需在多個管理主控台之間手動擷取資料。至於正式上線時的工具範圍——包括支援區域與最終定價——AWS 目前尚未公布。
date: "2026-06-18"
source_published: "2026-06-17T15:49:03.000Z"
category: "software-ops"
secondary_categories: []
region: ["United States"]
vendor: ["AWS"]
trust:
  score: 3
  reasoning: "Single source: あなたのAWSのコストの問題がどこにあるか、AIが教えてくれる「AWS FinOps Agent」パブリックプレビュー開始 (trust 3/5)."
sources:
  - url: "https://www.publickey1.jp/blog/26/awsaiaws_finops_agent.html"
    title: "あなたのAWSのコストの問題がどこにあるか、AIが教えてくれる「AWS FinOps Agent」パブリックプレビュー開始"
    trust: 3
    type: primary
    published_at: "2026-06-17T15:49:03.000Z"
---
