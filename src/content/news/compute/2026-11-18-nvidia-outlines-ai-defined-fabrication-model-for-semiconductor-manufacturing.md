---
title_en: "Nvidia outlines AI-defined fabrication model for semiconductor manufacturing"
title_zh: "輝達發布AI定義製造模型，重塑半導體生產格局"
summary_en: "Nvidia has detailed a framework it calls an AI-defined manufacturing model that combines accelerated computing, physics-based AI, AI agents, and digital twins to shorten engineering analysis cycles in chip fabrication. Partners including Applied Materials, COMSOL, Siemens, Lam Research, and Advantest are integrating Nvidia tools with reported speed gains ranging from 10 to 35 times on specific simulation workloads."
summary_zh: "輝達詳細說明一套名為「AI定義製造」的框架，結合加速運算、以物理為基礎的人工智慧、AI代理程式與數位分身，旨在縮短晶片製程的工程分析週期。應用材料、COMSOL、西門子、泛林研發及愛德萬測試等合作夥伴已陸續整合輝達工具，特定模擬工作負載的速度提升幅度達10至35倍。"
body_en: |
  Nvidia has outlined a framework it calls an AI-defined model for semiconductor fabrication, combining accelerated computing, physics-based artificial intelligence, AI agents, and digital twins to cut the time and cost of engineering analysis in chip manufacturing.

  The announcement brings together several existing Nvidia software libraries and frameworks — including cuDSS, PhysicsNeMo, cuLitho, NeMo Switchyard, and Omniverse — and pairs them with specific use cases from established equipment and software suppliers. Nvidia's argument is that linking these tools in a connected engineering loop, where production data informs simulation and AI models before decisions reach the factory floor, can reduce feedback cycles across semiconductor manufacturing.

  ## Faster simulation

  A central component of the model is accelerated simulation, which lets engineers test more process alternatives before committing to physical trials on a production line, where mistakes carry significant commercial consequences.

  Software provider COMSOL is using Nvidia's cuDSS library — a GPU-accelerated sparse linear solver — to speed up semiconductor manufacturing simulations by up to 10 times, according to Nvidia. Applied Materials is also working with Nvidia: its Ginestra atomic-scale simulation platform runs up to 10 times faster than CPU-only approaches when integrated with cuDSS, while its ACE+ multiphysics platform, which models interactions such as heat transfer, electrical behaviour, and mechanical stress, delivers topography simulations up to 35 times faster using Nvidia PhysicsNeMo.

  Computational lithography — the calculation-intensive process that determines how circuit patterns are printed onto silicon wafers — is another target. Siemens is integrating Nvidia's cuLitho library into its Calibre lithography software, with Nvidia reporting up to 17 times acceleration on key simulation workloads. That gives engineers more scope to verify designs before a wafer reaches the printing stage.

  ## Physics-based AI for expensive calculations

  Beyond faster simulation on conventional accelerated hardware, Nvidia made the case for physics-based AI models that predict material and process behaviour without running a complete simulation each time. The company argues the benefit is largest for calculations that remain expensive even on GPU hardware.

  Plasma modelling in semiconductor etch processes — where plasma behaviour is governed by coupled electrical, chemical, and thermal interactions — is one such workload. Lam Research has demonstrated that Nvidia's PhysicsNeMo framework can predict plasma behaviour in milliseconds, compared with days for a full physics simulation, according to Nvidia. That allows engineers to explore process conditions more rapidly without rerunning the complete model.

  ## AI agents to automate intermediate steps

  Nvidia also highlighted AI agents as a mechanism to automate sequences of engineering tasks that are currently handled manually. The company acknowledged that engineers retain decision-making authority in semiconductor production, but said many intermediate steps consume significant time.

  Advantest, a supplier of semiconductor test equipment, is using Nvidia's NeMo Switchyard AI agents to automate the selection of which AI model to apply to a given task. Nvidia said this cuts response times from hours to minutes.

  ## Digital twins of fabrication plants

  Digital twins — virtual representations of physical environments — form the fourth pillar of Nvidia's proposed model. Applied Materials uses Nvidia Omniverse libraries to build what Nvidia describes as physically accurate digital twins of entire fabrication plants. Those models are used to simulate material movement, identify bottlenecks, and assess layouts, throughput, cost, and process control before changes are made on the production line.

  Nvidia framed this as extending simulation from individual manufacturing steps to factory-wide operations, which it said is increasingly relevant as fabrication plants become more complex.

  ## Industry context

  Semiconductor manufacturers are facing rising demand for advanced chips alongside growing process complexity. In that environment, Nvidia said, even small errors in yield or process quality carry significant commercial consequences, and the cost of unsuccessful physical process trials is high. The company presented the AI-defined model as a way to help engineers identify problems earlier and evaluate more options before physical experiments are needed.

  The framework does not represent a single product but rather an integration architecture spanning Nvidia's existing GPU computing libraries and AI software, combined with applications from equipment makers, process simulation vendors, and test suppliers. The commercial relationships underpinning each announced partnership — Lam Research, Applied Materials, Siemens, COMSOL, Advantest — were not detailed in terms of contract value or deployment scale.

  The push to bring AI tools into semiconductor process engineering reflects broader industry pressure to manage fabrication complexity without relying solely on physical experimentation, which remains slow and expensive at leading-edge process nodes.
body_zh: |
  輝達（Nvidia）正式發布一套名為「AI定義製造」的半導體製造框架，將加速運算、以物理為基礎的人工智慧、AI代理程式與數位分身融為一體，旨在降低晶片製造工程分析所需的時間與成本。

  此次發布整合了輝達旗下多個現有軟體程式庫與框架，包括cuDSS、PhysicsNeMo、cuLitho、NeMo Switchyard與Omniverse，並搭配既有設備商與軟體供應商的具體應用案例。輝達主張，透過連結上述工具、建立一個環環相扣的工程迴圈——讓生產數據在決策落實至廠房之前，先行回饋至模擬與AI模型——可望縮短整個半導體製程的回饋週期。

  ## 加速模擬

  此框架的核心要素之一是加速模擬，讓工程師得以在正式進行生產線實體試驗前，先行測試更多製程替代方案，避免因失誤而付出龐大商業代價。

  軟體供應商COMSOL正運用輝達的cuDSS程式庫——一款以GPU加速的稀疏線性求解器——將半導體製造模擬速度提升最多10倍，據輝達表示。應用材料（Applied Materials）同樣與輝達攜手合作：其Ginestra原子尺度模擬平台整合cuDSS後，運算速度較純CPU方案最多快10倍；旗下的ACE+多物理場平台可模擬熱傳遞、電氣行為與機械應力等交互作用，使用輝達PhysicsNeMo後，地形模擬速度更可提升最多35倍。

  計算微影——決定電路圖樣如何印製於矽晶圓的高運算需求製程——也是此框架的重點應用領域。西門子（Siemens）正將輝達的cuLitho程式庫整合至其Calibre微影軟體，輝達指出關鍵模擬工作負載的加速幅度最多可達17倍。這讓工程師在晶圓進入印製階段之前，有更大空間驗證設計的正確性。

  ## 以物理為基礎的AI，應對高運算成本

  除了在傳統加速硬體上提升模擬速度，輝達還主張以物理為基礎的AI模型能夠預測材料與製程行為，無需每次都執行完整模擬。輝達認為，對於即便在GPU硬體上運算成本仍然高昂的計算任務，此方案的效益最為顯著。

  半導體蝕刻製程中的電漿模擬——電漿行為受電氣、化學與熱力的耦合交互作用所支配——正是此類工作負載之一。泛林研發（Lam Research）已驗證輝達的PhysicsNeMo框架能在毫秒內預測電漿行為，相較之下，完整物理模擬往往需要數天，據輝達表示。這讓工程師無需重新執行完整模型，即可更快速地探索各種製程條件。

  ## AI代理程式，自動化中間作業步驟

  輝達也強調，AI代理程式可作為自動化一系列現行仰賴人工處理的工程任務的機制。該公司坦言，半導體生產的決策權仍由工程師主導，但許多中間步驟耗費大量時間。

  半導體測試設備供應商愛德萬測試（Advantest）正運用輝達的NeMo Switchyard AI代理程式，自動選擇適用於特定任務的AI模型。輝達表示，此舉將回應時間從數小時縮短至數分鐘。

  ## 製造廠數位分身

  數位分身——實體環境的虛擬呈現——構成輝達所提框架的第四大支柱。應用材料運用輝達Omniverse程式庫，建構輝達所描述的「整座製造廠物理精確數位分身」。這些模型用於模擬物料流動、找出瓶頸，並在正式變更生產線之前，評估廠房配置、產能、成本與製程控制。

  輝達將此定位為將模擬範疇從個別製程步驟延伸至全廠運營，並表示隨著製造廠日趨複雜，此應用的重要性與日俱增。

  ## 產業背景

  半導體製造商正面臨先進晶片需求攀升、製程複雜度持續增加的雙重壓力。在此背景下，輝達表示，即便是良率或製程品質上的微小差錯，也將帶來重大商業損失，實體製程試驗失敗的代價更是高昂。該公司將「AI定義製造」模型定位為協助工程師更早發現問題、在進行實體試驗前評估更多選項的解決方案。

  此框架並非單一產品，而是一套橫跨輝達現有GPU運算程式庫與AI軟體的整合架構，並結合設備商、製程模擬廠商及測試供應商的應用。各項已宣布合作的商業關係——包含泛林研發、應用材料、西門子、COMSOL、愛德萬測試——均未就合約金額或部署規模提供詳細說明。

  積極將AI工具引入半導體製程工程，反映出業界更廣泛的壓力：在不完全仰賴實體實驗的前提下管控製造複雜度——而在先進製程節點，實體實驗至今仍然緩慢且所費不貲。
date: "2026-11-18"
source_published: "2026-11-17T16:30:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Nvidia", "Siemens"]
trust:
  score: 3
  reasoning: "Single source: Nvidia outlines AI-defined model for chip fabrication (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-outlines-ai-defined-model-for-chip-fabrication"
    title: "Nvidia outlines AI-defined model for chip fabrication"
    trust: 3
    type: primary
    published_at: "2026-11-17T16:30:00.000Z"
---
