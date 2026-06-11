---
title_en: "Secondary Workloads Used to Smooth AI Power Swings Inflate Data Center Energy Use"
title_zh: "次要工作負載填補AI訓練GPU空檔，卻悄然推高資料中心能耗"
summary_en: "A common power-management practice in AI data centers — running secondary workloads to fill brief GPU idle periods during training — silently inflates electricity consumption and compounds grid strain, according to industry analysis published by Data Center Knowledge."
summary_zh: "一種在AI資料中心普遍採用的電力管理做法——在GPU訓練閒置期間執行次要工作負載以填補功耗缺口——正在悄然推高電力消耗、加重電網負擔，根據《Data Center Knowledge》刊載的產業分析，這項問題至今幾乎不受業界正視。"
body_en: |
  A common power-management technique used in AI data centers to prevent electrical grid disruptions is itself a significant and largely invisible source of energy waste, according to analysis published by Data Center Knowledge. The practice, known as running secondary workloads during GPU idle periods, inflates peak power demand, slows grid interconnection approvals, and accelerates hardware wear — problems that compound rapidly at hyperscale.

  The issue stems from how modern large AI models are trained. Most training jobs use a bulk-synchronous approach: thousands of graphics processing units (GPUs) compute in parallel, then pause briefly to exchange data and synchronize results across the cluster. Those synchronized pauses create sharp, rapid drops in power demand across an entire data center. Such swings can stress transformers, power distribution units, and upstream grid components, raising the risk of outages or costly downtime.

  ## How operators fill the gaps

  To prevent demand from dropping too sharply, data center operators commonly run secondary workloads whenever GPUs would otherwise be idle. These jobs are not part of the primary training task; they exist to hold power draw at a stable level, then yield instantly when primary computation resumes. Oracle, for example, uses a millisecond-scale process it calls a "GPU heartbeat" to continuously measure GPU activity and trigger secondary workloads with near-instant timing, according to the analysis.

  Secondary workloads fall into two categories, each with distinct trade-offs.

  The first category is productive secondary workloads — tasks that need to run eventually and are scheduled to take advantage of idle GPU cycles. Because these jobs share GPU resources, memory bandwidth, and thermal headroom with the primary training job, they reduce effective performance: training takes longer, synchronization overhead rises, or throughput falls. The analysis notes that at the scale of large AI clusters, even small efficiency losses translate into meaningful increases in training time, cost, and time-to-market.

  The second category is dummy workloads — calculations that serve no purpose other than sustaining a stable power draw. Dummy workloads avoid the performance penalty of productive secondary jobs, but in facilities with tens of thousands of GPUs they represent a substantial and largely unacknowledged source of energy consumption that produces no useful output.

  ## Cascading operational consequences

  The effects extend beyond wasted electricity. The analysis identifies three compounding consequences.

  First, operating costs rise across the board. Electricity, cooling, and infrastructure must all be sized to support the highest possible load continuously, even when real workloads demand that capacity only intermittently.

  Second, grid interconnection timelines lengthen. Utilities evaluate connection requests based on a facility's maximum power requirements. If a project's peak load exceeds available generation or transmission capacity, approvals are delayed and infrastructure costs increase — a constraint that is already slowing project timelines.

  Third, equipment wears faster. GPUs, power systems, and cooling infrastructure all experience greater thermal and electrical stress when operated at sustained peak utilization, shortening component lifespan and driving up maintenance costs.

  ## Why it matters now

  The analysis argues that constraints once considered theoretical have become operational realities. Grid interconnection delays are already affecting project timelines, electricity costs face heightened regulatory and public scrutiny, and communities are questioning whether AI's benefits justify its growing energy demand.

  The author, Taavi Madiberk, CEO of Skeleton Technologies — a company focused on energy storage for AI data centers and grid infrastructure — contends that using additional computation, whether productive or dummy, to flatten the power curve is a costly substitute for purpose-built demand-management solutions, and that it worsens the power challenge the industry is already under pressure to address.

  More efficient approaches to managing rapid demand fluctuations would not resolve every aspect of AI's power footprint, Madiberk writes, but would directly reduce one of the most overlooked sources of waste at a time when grid interconnection delays are already constraining the pace of new data center deployment.
body_zh: |
  根據《Data Center Knowledge》刊載的分析報告，AI資料中心為防止電網受到衝擊而普遍採用的一種電力管理技術，本身卻是一項規模龐大卻幾乎不為人知的能源浪費來源。這種做法是在GPU閒置期間執行次要工作負載，不僅會推高尖峰電力需求、拖慢電網併網審批進度，更會加速硬體耗損——在超大規模資料中心中，這些問題會以驚人的速度相互疊加、放大。

  問題的根源在於現代大型AI模型的訓練方式。大多數訓練任務採用「整批同步」（bulk-synchronous）的並行運算架構：數千顆繪圖處理器（GPU）同步並行運算，隨後短暫暫停，在整個叢集中交換資料並同步運算結果。這種同步暫停會造成整座資料中心的電力需求急遽驟降。如此劇烈的功耗波動可能對變壓器、配電單元及上游電網元件造成壓力，提高停電或高額停機損失的風險。

  ## 業者如何填補功耗缺口

  為防止電力需求下滑過於劇烈，資料中心業者通常會在GPU原本閒置的時段執行次要工作負載。這些工作任務並非主要訓練作業的一部分，存在目的僅在於將電力消耗維持在穩定水準，待主要運算恢復時立即讓出資源。以甲骨文（Oracle）為例，根據該報告，甲骨文採用一種以毫秒為單位運作、稱為「GPU心跳」（GPU heartbeat）的機制，持續監測GPU活動狀況，並以幾近即時的反應觸發次要工作負載。

  次要工作負載可分為兩大類，各有不同的取捨考量。

  第一類是「生產性次要工作負載」——這些任務本身終究需要執行，因此被安排在GPU閒置週期中運行以善加利用空閒資源。但由於這類工作必須與主要訓練任務共享GPU資源、記憶體頻寬及散熱餘裕，因此會降低有效執行效能：訓練時間因此拉長、同步開銷增加，或整體處理吞吐量下降。分析報告指出，在大型AI叢集的規模下，即便是微小的效率損失，也會轉化為訓練時間、成本及上市時程的顯著增加。

  第二類是「假工作負載」（dummy workloads）——這類運算任務除了維持穩定的功耗水準之外，別無任何用途。假工作負載雖能避免生產性次要工作負載所帶來的效能損耗，但在擁有數萬顆GPU的設施中，它們代表著一項規模可觀且幾乎不受正視的能源消耗來源，卻無法產生任何有意義的產出。

  ## 連鎖反應與營運衝擊

  影響層面不止於電力浪費，分析報告點出三項相互疊加的後果。

  首先，整體營運成本全面上升。即便實際工作負載僅有間歇性地需要滿載運行，電力、冷卻及基礎設施仍必須全數按照可能的最高持續負載來規劃建置，導致資源長期過度配置。

  其次，電網併網審批時程延宕。公用事業單位在評估連接申請時，是以設施的最大電力需求為依據。若某專案的尖峰負載超過可用的發電或輸電容量，審批便會延遲，基礎設施成本也會隨之攀升——這項限制目前已在切實拖慢多個資料中心專案的推進時程。

  第三，設備磨損明顯加速。GPU、電力系統及冷卻基礎設施在長期維持尖峰負載運行時，會承受更高的熱應力與電氣應力，縮短元件壽命，並拉高維護成本。

  ## 為何此刻格外重要

  分析報告指出，過去被視為理論上才存在的限制，如今已成為業者必須正視的實際運營挑戰。電網併網延遲已在切實影響專案時程，電費成本面臨更嚴格的監管審查與公眾輿論壓力，各地社群也開始質疑AI帶來的效益是否足以合理化其日益龐大的能源需求。

  報告作者塔維·馬迪貝爾克（Taavi Madiberk）是儲能技術公司Skeleton Technologies的執行長，該公司專注於為AI資料中心及電網基礎設施提供儲能解決方案。他主張，無論是執行生產性工作負載還是假工作負載，以額外的運算來「熨平」功耗曲線，都是一種代價高昂的替代方案，不僅無助於根本解決問題，更只會讓業界本已承受龐大壓力的電力挑戰雪上加霜，並呼籲業界轉向採用專為需求管理所設計的解決方案。

  馬迪貝爾克寫道，更有效率的快速需求波動管理方式，雖然無法解決AI能源足跡的每一個面向，但能直接削減目前最被忽視的浪費來源之一——而在電網併網延遲已開始制約新一代資料中心建置速度的當下，此事的重要性更顯迫切。
date: "2026-06-12"
source_published: "2026-06-11T16:09:47.000Z"
category: "software-ops"
secondary_categories: ["power"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: The Overlooked Reason AI Data Centers Use So Much Power (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/energy-power-supply/the-overlooked-reason-ai-data-centers-use-so-much-power"
    title: "The Overlooked Reason AI Data Centers Use So Much Power"
    trust: 3
    type: primary
    published_at: "2026-06-11T16:09:47.000Z"
---
