---
title_en: "Network Switches Hold Nvidia H100 Clusters to 35-40% Utilization, Analysis Finds"
title_zh: "網路交換器瓶頸拖累H100叢集：使用率僅達35至40%"
summary_en: "Network switching has emerged as the primary bottleneck limiting AI infrastructure performance, with Nvidia H100 GPUs reaching only 35 to 40 percent of their rated compute capacity during large-scale training runs because switching fabrics cannot deliver data fast enough. Networking's share of data center capital spending is forecast to climb from roughly 5 to 10 percent today to 15 to 20 percent by 2030 as operators work to address the constraint."
summary_zh: "一份最新分析指出，網路交換架構已成為制約AI基礎設施效能的主要瓶頸，輝達H100 GPU在大規模訓練任務中的實際運算能力僅達額定效能的35至40%，原因在於交換架構無法以足夠快的速度傳遞資料。預計網路建設在資料中心資本支出的佔比，將從目前的5至10%攀升至2030年的15至20%。"
body_en: |
  AI data centers running trillion-parameter model training are achieving only 35 to 40 percent Model Flop Utilization on Nvidia H100 GPUs, according to an analysis published by Data Center Knowledge. Model Flop Utilization, abbreviated MFU, measures how closely a processor's real-world output matches its theoretical peak capacity as derived from Model Floating Point Operations Per Second (FLOPs). At 35 to 40 percent, the chips sit idle for more than half their operating time waiting for data to arrive over the network.

  The analysis identifies the switching fabric — the network equipment that coordinates data movement across thousands of interconnected processors — as the binding constraint. The architectural decisions now being made to stitch together AI infrastructure components will, the analysis states, determine the cost, energy efficiency, and competitive viability of future AI systems.

  ## Bandwidth roadmap outpacing switching capacity

  AI training clusters are already operating at 400 gigabits per second (Gb/s) per link and are moving toward 800 Gb/s, with 1.6 terabits per second (Tb/s) on the near-term roadmap. The analysis states the industry must reach 1.6 Tb/s line rates by 2027, noting that vendors who miss that window will force the ecosystem to route around them.

  Raw link speed is only part of the problem. As clusters scale to thousands of GPUs, the challenge shifts from connection speed to how efficiently the switching fabric coordinates data movement across all of them — a problem the analysis describes as "fundamentally harder" from an engineering standpoint.

  ## The switch cannot be bypassed

  Upgrading transceivers, cables, and line rates — the instinctive response to a bandwidth shortfall — does not address the underlying constraint. As per-link bandwidth increases, every switching node in the network faces proportionally greater demand. A switch adequate at 400 Gb/s becomes a hard ceiling at 800 Gb/s, the analysis states, with the interconnect upgrade exposing the switching layer rather than relieving it.

  Attempts to bypass the switching layer through point-to-point interconnects carry concrete penalties: more laser sources required, power consumption that grows nonlinearly, and compounding complexity with each node added.

  ## Networking share of capex set to double

  Networking's share of data center capital expenditure (capex) is rising from approximately 5 to 10 percent today toward 15 to 20 percent by 2030, the analysis found. The shift reflects a reclassification of networking from infrastructure overhead to a primary cost driver.

  ## Disaggregated supply chain built for the wrong era

  The AI infrastructure stack evolved as a collection of independently optimized components — accelerators, transceivers, interconnects, and switches — each designed to its own performance envelope and then handed to system architects expected to integrate them. The result is overengineering and wasted capacity: network fabrics are specified for generic workloads that match no actual deployment, forcing designers to plan for worst-case conditions at every interface.

  The analysis frames the core problem as "trying to solve a system-level problem with component-level thinking," and states that trillion-dollar investments end up substantially less productive than they should be as a result.

  ## Three requirements for closing the gap

  The analysis identifies three requirements for closing the gap between raw compute capacity and delivered performance.

  First, co-optimization across the stack: the interposer, interconnect, and switching layer must be treated as interdependent rather than independent variables, because gains in one layer are routinely offset by constraints in another.

  Second, architecture-specific design: AI training, inference, and high-performance computing (HPC) workloads carry different traffic patterns, latency tolerances, and bandwidth utilization profiles. Generic reference architectures serve none of them well, the analysis states.

  Third, photonic packet-level reconfigurable switching: electronic packet switches face hard limits at scale, with power dissipation rising, latency floors that do not improve, and silicon reaching physical constraints. Photonic switching, which routes data using light rather than electrical signals, offers a path through those limits. The analysis distinguishes between photonic circuit switching — suited to predictable, long-duration data flows — and photonic packet-level reconfigurable switching, which can adapt quickly enough to handle AI traffic's asymmetric and dynamically shifting patterns. Photonic circuit switching cannot reconfigure fast enough to avoid the idle periods that defeat the purpose of optical systems, the analysis states.

  ## Industry implications

  Nvidia has made networking one of its largest business divisions, the analysis notes, on the basis that returns on compute investment depend on whether the network can deliver data at required speeds without latency, congestion, or underutilization.

  Operators who design network architecture from the workload outward — rather than assembling fabrics from available components — will determine the cost and energy efficiency outcomes of AI infrastructure investment through the end of the decade. Networking's projected capex share of 15 to 20 percent by 2030, up from 5 to 10 percent today, marks the clearest near-term indicator of how far that restructuring has advanced.
body_zh: |
  根據《Data Center Knowledge》發布的一項分析，執行兆參數模型訓練的AI資料中心，其輝達H100 GPU的模型浮點運算使用率（MFU）僅達35至40%。MFU衡量的是處理器實際產出與理論峰值效能（依模型每秒浮點運算數推算）之間的契合程度。在35至40%的使用率下，晶片有超過一半的運作時間處於閒置狀態，等待資料透過網路傳入。

  該分析指出，交換架構——協調數千個互聯處理器之間資料流動的網路設備——是當前的根本制約因素。現階段在串聯AI基礎設施各組件時所做出的架構決策，將決定未來AI系統的成本、能源效率，以及市場競爭力。

  ## 頻寬路線圖超前交換容量

  AI訓練叢集目前已在每條鏈路以每秒400 Gb/s的速率運作，並正朝向800 Gb/s邁進，每秒1.6 Tb/s亦已列入近期路線圖。該分析指出，業界必須在2027年前達到1.6 Tb/s的線速標準，並警告未能趕上此時間窗口的廠商，將迫使整個生態系統設法繞過他們。

  原始鏈路速度只是問題的一部分。隨著叢集規模擴展至數千顆GPU，挑戰已從連線速度轉移至交換架構如何有效協調所有處理器之間的資料流動——該分析將此描述為工程上「從根本上更為困難」的問題。

  ## 交換器無法繞過

  升級收發器、纜線與線速——這是面對頻寬不足時最直覺的反應——並無法解決底層的制約問題。隨著每條鏈路頻寬提升，網路中每個交換節點所承受的需求也等比例增加。一台在400 Gb/s下尚稱足夠的交換器，到了800 Gb/s時便成為硬性上限；互聯升級反而暴露了交換層的瓶頸，而非緩解它。

  試圖以點對點互聯繞過交換層的做法，將帶來具體的代價：所需雷射光源數量增加、功耗呈非線性增長，且每新增一個節點，複雜度便會累積疊加。

  ## 網路佔資本支出比重將倍增

  該分析發現，網路建設在資料中心資本支出（capex）中的佔比，正從目前約5至10%攀升至2030年的15至20%。這一轉變反映出業界對網路的重新定位——從基礎設施的間接成本，躍升為主要成本驅動因素。

  ## 為舊時代打造的分散式供應鏈

  AI基礎設施堆疊的演進，是將各個獨立優化的組件——加速器、收發器、互聯設備與交換器——分別設計至各自的效能上限，再交由系統架構師負責整合。最終結果是過度工程化與容量浪費：網路架構是針對通用工作負載所規劃，與任何實際部署情境均不相符，迫使設計師在每個介面都必須以最差情況為前提進行規劃。

  該分析將核心問題定義為「試圖以組件層面的思維解決系統層面的問題」，並指出這使得數兆美元的投資，最終產出的效益遠低於應有水準。

  ## 縮小差距的三大條件

  該分析指出，要縮小原始運算能力與實際效能之間的落差，需要滿足三項條件。

  第一，跨堆疊協同優化：中介層、互聯設備與交換層必須視為相互依存的整體，而非各自獨立的變數，因為在某一層的效能提升，往往會被另一層的制約所抵消。

  第二，針對特定架構進行設計：AI訓練、推論與高效能運算（HPC）工作負載，各自具有不同的流量模式、延遲容忍度與頻寬使用輪廓。該分析指出，通用的參考架構對任何一種都無法妥善服務。

  第三，光子封包級可重組交換：電子封包交換器在規模擴展時面臨硬性限制，包括功耗攀升、延遲底限無法改善，以及矽晶體觸及物理極限。光子交換以光而非電信號傳輸資料，提供了突破上述限制的可能路徑。該分析區分了光子電路交換——適合可預測、持續時間較長的資料流——以及光子封包級可重組交換，後者能夠以足夠快的速度重新配置，進而應對AI流量非對稱且動態變化的模式。該分析指出，光子電路交換的重新配置速度不夠快，無法避免閒置期，而閒置期的存在正是光學系統失去效益的根源。

  ## 產業影響

  該分析指出，輝達已將網路列為旗下規模最大的業務部門之一，其依據在於：運算投資的回報，取決於網路能否以所需速度傳遞資料，同時不產生延遲、壅塞或低使用率等問題。

  從工作負載出發設計網路架構的營運商——而非從現有組件拼裝架構——將決定本十年結束前AI基礎設施投資的成本與能源效率走向。網路佔資本支出的比重預計將從目前的5至10%，於2030年前攀升至15至20%，這是衡量上述結構性調整進展最清晰的近期指標。
date: "2026-07-04"
source_published: "2026-07-02T17:52:30.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: The Switch Is the Bottleneck: Why AI Infrastructure Has a Network Problem (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/switches-routers/the-switch-is-the-bottleneck-why-ai-infrastructure-has-a-network-problem"
    title: "The Switch Is the Bottleneck: Why AI Infrastructure Has a Network Problem"
    trust: 3
    type: primary
    published_at: "2026-07-02T17:52:30.000Z"
---
