---
title_en: "Infosys Says Data Center Efficiency Gains Will Delay Power Crunch, Not Eliminate It"
title_zh: "Infosys：資料中心效率提升可延緩供電危機，但無法根除"
summary_en: "A new Infosys analysis concludes that AI-driven efficiency improvements and flexible workload scheduling can create near-term power headroom for data centers but will not remove the need for new generation, transmission, and grid infrastructure through 2030."
summary_zh: "Infosys最新分析指出，AI驅動的效率改善與彈性工作負載排程，能在短期內為資料中心創造額外的供電餘裕，但無法消除2030年前對新建發電、輸電及電網基礎設施的需求。"
body_en: |
  Data center operators can extract more capacity from existing power connections through efficiency improvements and demand shifting, but those measures will not remove the need for new electricity infrastructure, according to a new Infosys analysis of AI energy demand through 2030.

  Mit Majumdar, executive vice president and global head of services, utilities, resources, and energy at Infosys, said AI-driven energy management, advanced cooling, and peak-load optimization can deliver usable capacity faster than new generation or grid upgrades can be built. He framed those measures as buying time, not buying a way out of the underlying supply problem.

  "These measures are more likely to delay rather than eliminate the need for new infrastructure," Majumdar said. "The best path forward is a dual-track strategy: maximize existing capacity while accelerating investment in generation, transmission, and grid modernization."

  ## Not all AI workloads can be shifted

  The report draws a distinction between workloads that can be deferred and those that cannot. Model training, retraining, and batch processing can be scheduled around grid conditions; real-time inference and customer-facing applications generally cannot, Majumdar said.

  A facility handling both categories cannot treat its entire AI load as available for curtailment — the practice of reducing consumption on request from a grid operator. Operators must map each workload to its flexibility class before making reliability commitments to utilities.

  The commercial structures to support that flexibility do not yet exist at scale. Majumdar said broader demand response will require service-level agreements (SLAs) — contracts specifying the performance a customer is guaranteed — matched to each workload type, along with pricing structures that reward customers for shifting non-urgent computing.

  "Greater flexibility will require new commercial models, including workload-aware SLAs, demand-response incentives, and pricing structures that reward customers for shifting non-urgent compute," he said.

  The commercial question extends beyond technical feasibility, the report notes. Operators need customer commitments that make scheduling changes available when grid conditions actually require them, not merely when it is convenient.

  ## Phased construction limits exposure to demand uncertainty

  The Infosys analysis identifies a structural mismatch at the center of the power problem: AI adoption cycles run in months while energy infrastructure development runs in years. That gap creates risk for developers deciding how much capacity to build.

  The report recommends staged, modular construction rather than locking all project phases to assumptions made at groundbreaking. Building in phases allows developers to adjust later stages as AI model efficiency, chip performance, and cooling technology evolve.

  Infosys also recommends selecting AI models suited to specific tasks and applying techniques such as quantization (reducing numerical precision to lower compute requirements), pruning (removing low-value model components), and knowledge distillation (training a smaller model to replicate a larger one's outputs) to reduce the energy intensity of each workload. Measuring energy use and carbon emissions at the individual workload level, rather than at the facility level, is also called for.

  "A modular approach allows capacity to scale as demand evolves while preserving flexibility to benefit from advances in AI models, chips, and cooling technologies," Majumdar said. "The goal is to avoid both overbuilding and underestimating long-term demand."

  ## Utilities should require verified performance, not projections

  For grid operators evaluating demand-side savings when approving new data center connections, the Infosys report argues that projections are not sufficient. Utilities should require documented historical performance, real-time monitoring capability, and enforceable contractual commitments to reduce load when the grid requires it, Majumdar said.

  The report calls for shared accountability between operators and utilities when promised flexibility fails to materialize, rather than placing the burden entirely on one party.

  "Risk should be shared: operators should stand behind performance claims through guarantees, while utilities should establish clear qualification and verification standards to ensure reliability," Majumdar said.

  The findings point to a gap between what operators can claim and what utilities can verify — a gap that will grow in importance as more large AI loads seek grid interconnection. The Infosys analysis covers AI energy demand through 2030.
body_zh: |
  資料中心業者可透過效率提升與需求移轉，從現有電力連線中挖掘更多容量，然而這些措施無法取代新建電力基礎設施的必要性。這是Infosys針對2030年前AI能源需求所進行的最新分析所得出的結論。

  Infosys執行副總裁暨全球服務、公用事業、資源與能源事業群負責人米特・馬宗達（Mit Majumdar）表示，AI驅動的能源管理、先進冷卻技術以及尖峰負載最佳化，能比新建發電設施或電網升級更快速地釋出可用容量。他將這些措施定位為「爭取時間」，而非「解決根本供應問題的出路」。

  「這些措施更可能是延緩而非消除對新基礎設施的需求，」馬宗達說。「最佳的前進路徑是雙軌策略：在最大化現有容量的同時，加速投資發電、輸電與電網現代化。」

  ## 並非所有AI工作負載都能彈性調度

  該報告區分了可延後執行與不可延後執行的工作負載。馬宗達指出，模型訓練、再訓練及批次處理可依電網狀況彈性排程；但即時推論與面向客戶的應用程式通常無法如此。

  同時處理這兩類工作負載的機房，不能將其全部AI負載視為可依電網業者要求削減用電的對象。業者必須在向電力公司做出可靠性承諾之前，先將每項工作負載對應至其彈性分類。

  支撐此類彈性的商業架構目前尚未大規模落地。馬宗達表示，更廣泛的需求回應機制需要與各工作負載類型對應的服務水準協議（SLA）——即明訂客戶所獲保障效能的合約——以及能激勵客戶移轉非緊急運算的定價結構。

  「更大的彈性需要全新的商業模式，包括工作負載感知SLA、需求回應誘因，以及能激勵客戶移轉非緊急運算的定價結構，」他說。

  報告進一步指出，商業層面的問題不僅止於技術可行性。業者需要客戶承諾，確保在電網狀況確實有需求時排程調整得以落實，而非僅在方便時才配合。

  ## 分階段建設降低需求不確定性的風險敞口

  Infosys的分析點出了供電問題核心的結構性錯位：AI導入週期以月計，能源基礎設施的開發卻以年計。這道落差對必須決定興建多少容量的開發商而言構成風險。

  報告建議採用分階段、模組化建設方式，而非在動土之初便將所有專案階段鎖定於當時的假設。分階段興建可讓開發商隨著AI模型效率、晶片效能及冷卻技術的演進，適時調整後續階段。

  Infosys也建議選用適合特定任務的AI模型，並應用量化（降低數值精度以減少運算需求）、剪枝（移除低價值模型元件）及知識蒸餾（訓練小型模型複現大型模型的輸出）等技術，以降低每項工作負載的能源強度。報告亦呼籲在個別工作負載層級而非設施整體層級衡量能源使用量與碳排放。

  「模組化方式能讓容量隨需求演進而擴展，同時保有從AI模型、晶片及冷卻技術進步中受益的彈性，」馬宗達說。「目標是避免過度建設，同時也不低估長期需求。」

  ## 電力公司應要求驗證實績，而非僅接受預測

  對於在審核新資料中心連線申請時評估需求端節電效益的電網業者，Infosys報告認為單憑預測數據並不足夠。馬宗達表示，電力公司應要求業者提供有案可查的歷史績效紀錄、即時監控能力，以及在電網有需求時降低負載的可執行合約承諾。

  報告呼籲，當業者所承諾的彈性未能如預期落實時，業者與電力公司應共同承擔責任，而非將負擔全壓在單一方身上。

  「風險應由雙方共擔：業者應以績效保證為其宣稱背書，電力公司則應建立明確的資格認定與驗證標準，以確保可靠性，」馬宗達說。

  相關研究發現揭示了業者所能宣稱與電力公司所能驗證之間的落差——隨著更多大型AI負載尋求電網接入，這道落差的重要性將與日俱增。Infosys此次分析的涵蓋範圍為2030年前的AI能源需求。
date: "2026-10-23"
source_published: "2026-10-22T09:00:00.000Z"
category: "power"
secondary_categories: ["software-ops"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Data Centers Can Delay, Not Dodge, the Power Crunch (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/energy-power-supply/data-centers-can-delay-not-dodge-the-power-crunch"
    title: "Data Centers Can Delay, Not Dodge, the Power Crunch"
    trust: 3
    type: primary
    published_at: "2026-10-22T09:00:00.000Z"
---
