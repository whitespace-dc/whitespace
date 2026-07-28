---
title_en: "NVIDIA deploys Vera CPU in chip design workflows, reporting up to 1.5x EDA gains"
title_zh: "輝達將Vera CPU導入晶片設計流程，EDA效能最高提升1.5倍"
summary_en: "NVIDIA is deploying its Vera CPU in the electronic design automation workflows used to develop its next-generation chips, with early testing against Cadence and Synopsys tools showing performance gains of up to 1.5 times on selected workloads at equal core counts."
summary_zh: "輝達（NVIDIA）正式將旗下Vera CPU部署至開發次世代晶片所用的電子設計自動化工作流程，針對Cadence與Synopsys工具的早期測試顯示，在核心數相同的條件下，特定工作負載的效能最高可提升1.5倍。"
body_en: |
  NVIDIA has begun deploying its Vera central processing unit (CPU) in the electronic design automation (EDA) software workflows used to build its next-generation chips, with early testing against tools from Cadence and Synopsys showing performance gains of up to 1.5 times on selected workloads using the same number of cores.

  ## Initial benchmark results

  The testing covered two widely used pre-silicon engineering tools: Cadence Jasper, a formal verification platform that uses mathematical methods and machine learning to find design bugs early in the development cycle, and Synopsys VCS, a functional verification tool used to simulate and validate chip designs before fabrication. Pre-silicon engineering refers to the phase of chip development that occurs before a design is sent to a manufacturing facility.

  NVIDIA said both applications recorded up to 1.5 times higher performance on selected workloads at equal core counts. The company did not disclose the full range of workloads tested or provide broader benchmark data beyond those selected cases, and described the current results as early.

  Work with both software firms also includes application profiling, software optimization, and system-level tuning aimed at improving engineering productivity across a wider set of EDA tasks, NVIDIA said.

  ## Why EDA workloads depend on CPU performance

  EDA workflows — which encompass logic simulation, formal verification, regression testing, and digital implementation — remain heavily dependent on CPU performance even as graphics processing units (GPUs) and artificial intelligence tools absorb more work in other parts of chip development. Those EDA stages rely on fast single-core processing, memory efficiency, and overall throughput rather than the massively parallel computation GPUs are designed to provide.

  Engineers validating a chip design can spend years running repeated checks to confirm behavior, identify corner cases, and refine the architecture through many iterations before the design reaches a fabrication facility. Delays in verification and implementation directly slow the broader pace of chip development. Faster individual runs reduce the time needed for each check; greater throughput lets teams test more design options within the same development cycle.

  Because the stages of chip design are interconnected, improvements in one area can propagate across a project. If verification workloads complete faster, engineering teams can identify problems earlier and avoid the expensive design changes that tend to emerge later in development, according to NVIDIA.

  ## Vera's architecture

  The Vera CPU combines 88 custom Olympus CPU cores with an LPDDR5X memory subsystem and the second generation of NVIDIA's Scalable Coherent Fabric, the interconnect technology that links processors and memory across a system. NVIDIA said those features target workloads that mix latency-sensitive jobs with large-scale regression testing across compute farms, a combination common in EDA environments.

  ## Internal deployment and broader compute strategy

  NVIDIA is rolling out Vera in its own engineering systems as part of the EDA effort. The company said its approach is to match computing architectures to specific engineering tasks: GPUs and AI for workflows where parallel algorithms deliver gains, and CPUs for the parts of the design process that remain tied to serial processing, memory behavior, and verification throughput.

  The chip design process begins after engineers define the architecture and microarchitecture of a processor. They then describe the chip's behavior at the register-transfer level (RTL) — a hardware description that can be simulated and verified by EDA tools before any physical chip is manufactured. Simulation, formal verification, regression testing, and digital implementation follow in linked stages.

  ## Significance and next steps

  By using its own CPUs inside the workflows that produce future CPUs and GPUs, NVIDIA is tightening the connection between silicon design, software optimization, and systems engineering. The deployment also gives the company direct operational data on how Vera performs under production EDA conditions, which can inform further hardware and software tuning.

  NVIDIA said work with Cadence and Synopsys continues on tuning applications and systems for a broader set of engineering tasks. The company said it plans to follow Vera with a future CPU called Rosa, which will use its Rigel core.
body_zh: |
  輝達（NVIDIA）已開始在用於打造次世代晶片的電子設計自動化（EDA）軟體工作流程中，部署旗下Vera中央處理器（CPU）。針對Cadence與Synopsys工具的早期測試顯示，在核心數相同的條件下，特定工作負載的效能最高可提升1.5倍。

  ## 初步基準測試結果

  此次測試涵蓋兩項廣泛應用的前矽工程工具：Cadence Jasper——一款運用數學方法與機器學習，在開發週期早期即可揪出設計缺陷的形式驗證平台；以及Synopsys VCS——一款用於在量產前模擬並驗證晶片設計的功能驗證工具。所謂「前矽工程」，是指晶片設計在送往製造廠之前的開發階段。

  輝達表示，上述兩款應用程式在特定工作負載、相同核心數的條件下，效能最高可提升1.5倍。該公司並未揭露完整的工作負載測試範圍，也未提供超出上述案例的更廣泛基準測試資料，並將目前的結果定性為初步成果。

  輝達表示，與這兩家軟體廠商的合作，還涵蓋應用程式剖析、軟體最佳化以及系統層級調校，目標是全面提升更廣泛EDA任務的工程生產力。

  ## EDA工作負載對CPU效能的依賴

  EDA工作流程——涵蓋邏輯模擬、形式驗證、迴歸測試及數位實作——即便在圖形處理器（GPU）與人工智慧工具已在晶片開發其他環節承擔更多工作的今日，仍高度仰賴CPU效能。這些EDA階段所依賴的，是快速的單核心運算、記憶體效率與整體吞吐量，而非GPU所擅長的大規模平行運算。

  工程師在驗證晶片設計時，可能需要耗費數年時間，反覆執行各種檢查，以確認行為是否符合預期、找出邊緣案例，並在設計送往製造廠前，歷經多次迭代持續精煉架構。驗證與實作環節的延誤，會直接拖慢整體晶片開發的腳步。更快的單次執行速度，可縮短每次檢查所需的時間；更高的吞吐量，則讓團隊能在相同的開發週期內測試更多設計選項。

  由於晶片設計的各個階段環環相扣，某一環節的改善可在整個專案中產生連鎖效應。輝達指出，若驗證工作負載完成得更快，工程團隊便能更早發現問題，從而避免在開發後期才浮現、往往代價高昂的設計變更。

  ## Vera的架構

  Vera CPU結合了88顆自研Olympus CPU核心、LPDDR5X記憶體子系統，以及第二代NVIDIA可擴展相干架構（Scalable Coherent Fabric）——這是一種用於連結系統中處理器與記憶體的互連技術。輝達表示，上述特性專為混合延遲敏感型任務與跨運算叢集大規模迴歸測試的工作負載所設計，此類組合在EDA環境中十分常見。

  ## 內部部署與更廣泛的運算策略

  輝達正將Vera部署至其自身的工程系統，作為EDA工作的一環。該公司表示，其策略是將運算架構與特定工程任務進行對應配置：在平行演算法能帶來效益的工作流程中使用GPU與AI，在設計流程中仍與串行處理、記憶體行為及驗證吞吐量緊密綁定的環節則採用CPU。

  晶片設計流程始於工程師定義處理器的架構與微架構。接著，他們以暫存器傳輸層（RTL）描述晶片的行為——這是一種硬體描述語言，能在任何實體晶片製造之前，透過EDA工具進行模擬與驗證。模擬、形式驗證、迴歸測試與數位實作，隨後以相互關聯的階段依序展開。

  ## 意義與後續步驟

  藉由在生產未來CPU與GPU的工作流程中導入自家CPU，輝達正進一步強化矽晶片設計、軟體最佳化與系統工程之間的緊密連結。此次部署也讓該公司得以直接取得Vera在量產EDA條件下的實際運行資料，進而為後續的硬體與軟體調校提供重要依據。

  輝達表示，將持續與Cadence及Synopsys合作，針對更廣泛的工程任務調校應用程式與系統。該公司並透露，計劃在Vera之後推出代號為Rosa的下一代CPU，屆時將採用其Rigel核心。
date: "2026-07-29"
source_published: "2026-07-28T15:40:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Coherent", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA deploys Vera CPU to speed chip design tools (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-deploys-vera-cpu-to-speed-chip-design-tools"
    title: "NVIDIA deploys Vera CPU to speed chip design tools"
    trust: 3
    type: primary
    published_at: "2026-07-28T15:40:00.000Z"
---
