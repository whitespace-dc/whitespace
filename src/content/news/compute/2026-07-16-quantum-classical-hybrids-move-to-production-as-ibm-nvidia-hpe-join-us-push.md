---
title_en: "Quantum-Classical Hybrids Move to Production as IBM, Nvidia, HPE Join U.S. Push"
title_zh: "量子古典混合系統邁向量產，IBM、輝達、HPE齊宣布整合藍圖"
summary_en: "Major hardware vendors including IBM, Nvidia, Hewlett Packard Enterprise, and AMD have announced hybrid quantum-classical integration roadmaps in 2026, as the U.S. government commits more than $2 billion to quantum commercialization and industry analysts project the market will reach roughly $3 billion by 2028."
summary_zh: "IBM、輝達（Nvidia）、惠普企業（HPE）及超微（AMD）等硬體大廠於2026年相繼發布量子-古典混合整合藍圖；與此同時，美國政府承諾投入逾20億美元推動量子商業化，業界分析師預測全球量子運算市場規模將於2028年達到約30億美元。"
body_en: |
  The U.S. government and the largest names in computing infrastructure have moved in concert to advance quantum-classical hybrid systems from laboratory demonstrations into production data center deployments, with multiple vendor roadmaps, new interconnect hardware, and federal policy all arriving within weeks of each other.

  ## U.S. policy commits more than $2 billion to quantum commercialization

  The Department of Commerce in May announced more than $2 billion in incentives to accelerate quantum commercialization, covering quantum manufacturing and the development of utility-scale, fault-tolerant systems. The term fault-tolerant refers to quantum processors capable of correcting the errors that make today's systems unreliable at scale. In June, the White House issued an Executive Order on the "Next Frontier of Quantum Innovation," directing near-term attention toward practical quantum components, supply chain procurement, and infrastructure security. Other governments have advanced similar initiatives, according to Data Center Knowledge, which described quantum-classical integration as a multiyear policy priority.

  ## Market on track to nearly triple by 2028

  Hyperion Research estimates the quantum computing market reached $1.4 billion in 2025 and is growing at roughly 30% annually, putting the sector on a path to approximately $3 billion by 2028, according to Bob Sorensen, Hyperion's chief quantum computing and AI analyst. Sorensen told Data Center Knowledge that the most promising near-term applications center on quantum-level simulations, particularly in computational chemistry and materials science.

  Digital simulators based on CPUs and GPUs — that is, classical processors running software that approximates quantum behavior — account for nearly one quarter of the quantum hardware market Hyperion tracks, with GPUs outpacing CPUs in that segment by roughly 2-to-1.

  ## Vendors announce hybrid integration roadmaps

  IBM, Nvidia, Hewlett Packard Enterprise, and AMD all announced or detailed hybrid quantum-classical efforts in the first half of 2026.

  In March, IBM outlined methods for what it calls "quantum-centric supercomputing" — a staged approach that begins with offloading specific calculations to quantum systems and progresses to co-designed, heterogeneous systems built from the ground up.

  At its GTC 2026 conference, Nvidia introduced NVQLink, an interconnect architecture designed to connect quantum processing units (QPUs) — processors that exploit quantum mechanical properties such as superposition and entanglement rather than binary transistors — to GPU-based supercomputers. Nvidia also announced a collaboration with Quantum Machines on an open framework that integrates classical systems and Nvidia GPUs within quantum control stacks.

  In June, Hewlett Packard Enterprise said it is working with Intel, IQM, Qblox, Quantinuum, QuEra Computing, Quantum Machines, Rigetti, and Riverlane on algorithm co-design and software interoperability to connect different styles of quantum computers to its Cray supercomputing platform in hybrid configurations. Also in June, AMD said it is working with OQC and JPMorgan Chase to explore how quantum computing, AI, and high-performance classical infrastructure can address complex financial services workloads.

  ## The integration challenge: modalities, latency, and colocation

  Quantum hardware spans several distinct technologies, referred to in the industry as modalities — superconducting qubits, trapped ions, neutral atoms, photonic systems, and silicon spin, among others. Each carries different environmental and operational requirements. Superconducting systems depend on deep cryogenic cooling and are sensitive to thermal, magnetic, and vibrational interference. Because modalities are evolving rapidly, deployments must accommodate upgrades and add-ons without major disruptions to adjacent classical infrastructure, according to Data Center Knowledge.

  Teams are increasingly colocating QPUs with GPU and CPU nodes where low-latency coupling can reduce time-to-solution for specific workloads. McKinsey partner Henning Soller, speaking at the Quantum.Tech World conference in Boston in June, said early integration work is needed now, ahead of possible clarity on a quantum computing advantage in the 2028–2030 timeframe.

  "One of the key aspects of making quantum computing usable is not just developing the quantum computers, but also developing the integrations with the high-performance computers with classical infrastructure," Soller said, noting that the bulk of data will continue to reside in conventional data center databases. McKinsey's research indicates that colocating quantum systems with classical infrastructure can improve overall hybrid performance by reducing communication latency for certain workflows.

  ## Facility design: power, cooling, and floor vibration

  Quantum deployments impose physical requirements that conventional data center design does not address. Aparna Prabhakar, chief strategy and sustainability officer for Schneider Electric's energy management business, told attendees at the same Boston conference that operators should evaluate power and cooling requirements — and whether cooling approaches require changes at the slab level — before quantum systems arrive on the floor.

  Prabhakar drew a parallel to generative AI's rapid penetration of data centers, where facilities are now retrofitting for power loads that were not anticipated at build time. "You need a floor setup that is not going to disturb the quantum computer," she said, citing vibration mitigation as a distinct operational concern.

  ## Algorithm scarcity and the case for broader access

  Despite the infrastructure momentum, the pool of quantum algorithms that provide practical advantage over classical computation remains limited. Peter Shor, the MIT mathematician behind Shor's algorithm — which demonstrated in 1994 that a quantum computer could factor very large numbers beyond the reach of classical supercomputers — addressed the question at Quantum.Tech. Asked why relatively few quantum algorithms have emerged in the decades since, Shor said: "We haven't discovered very many more algorithms … and the ones we have discovered are for abstruse problems that nobody actually wants to solve in practice," with some exceptions in physics and quantum chemistry simulations.

  Shor suggested that broader hands-on access to quantum systems could catalyze new algorithmic breakthroughs, drawing an analogy to the way classical algorithms emerged through wide experimentation on classical computers.

  ## What the shift means for data center operators

  The industry-wide move from qubit-count competition to hybrid performance on real workloads reframes how data center planners should evaluate quantum. Sorensen of Hyperion said organizations are now asking how to introduce quantum processing into existing classical compute environments, rather than when quantum will surpass classical computation entirely.

  HPE's announced multi-vendor collaboration — spanning eight quantum hardware and software companies connected to its Cray platform — is the most concrete indication yet that hybrid integration is moving from bilateral vendor agreements toward a broader ecosystem framework. McKinsey's Soller placed the window for meaningful quantum computing advantage at 2028 to 2030, a timeline that gives operators roughly two to four years to begin facility and integration planning before hybrid systems may be required at scale.
body_zh: |
  美國政府與計算基礎設施領域的頂尖業者步調一致，齊力推動量子-古典混合系統從實驗室展示走向資料中心的正式量產部署，多家廠商的整合藍圖、全新互連硬體以及聯邦政策措施，在短短數週內相繼問世。

  ## 美國政策投入逾20億美元推動量子商業化

  美國商務部於5月宣布逾20億美元的獎勵措施，加速量子技術商業化，涵蓋量子製造以及公用規模、容錯系統的開發。所謂「容錯」，係指量子處理器能夠修正造成現有系統在規模化時出現不可靠狀況的錯誤。6月，白宮發布行政命令「量子創新的下一個前沿」（Next Frontier of Quantum Innovation），將近期重點導向實用量子元件、供應鏈採購及基礎設施安全。其他國家政府亦推出類似計畫；《Data Center Knowledge》將量子-古典整合定性為跨越多年的政策優先要務。

  ## 市場規模有望於2028年近乎翻三倍

  Hyperion Research估計，量子運算市場規模於2025年已達14億美元，年增率約30%，照此走勢，到2028年市場規模將逼近30億美元。以上數字來自Hyperion首席量子運算暨人工智慧分析師鮑伯‧索倫森（Bob Sorensen）向《Data Center Knowledge》提供的估算。索倫森表示，最具近期商業潛力的應用集中在量子層級的模擬，尤其是計算化學與材料科學領域。

  以CPU與GPU為基礎的數位模擬器——即以古典處理器執行軟體來近似模擬量子行為——約占Hyperion所追蹤量子硬體市場的四分之一，其中GPU的表現以約2比1的比例領先CPU。

  ## 各大廠商宣布混合整合藍圖

  IBM、輝達（Nvidia）、惠普企業（Hewlett Packard Enterprise，HPE）及超微（AMD）均在2026年上半年宣布或詳述了各自的量子-古典混合方案。

  3月，IBM說明了其稱為「以量子為核心的超級電腦」（quantum-centric supercomputing）的方法論。這是一種分階段的路徑，起點為將特定運算工作卸載至量子系統，終點則是從頭打造的協同設計異質系統。

  在GTC 2026大會上，輝達發表了NVQLink——一種互連架構，設計用於將量子處理單元（QPU）連接至GPU超級電腦。量子處理單元是利用疊加態（superposition）與量子糾纏（entanglement）等量子力學特性運作的處理器，有別於傳統的二進位電晶體。輝達另宣布與Quantum Machines展開合作，推動一個開放框架，將古典系統與輝達GPU整合至量子控制堆疊之中。

  6月，惠普企業表示正與英特爾（Intel）、IQM、Qblox、Quantinuum、QuEra Computing、Quantum Machines、Rigetti及Riverlane合作，進行演算法協同設計與軟體互通性開發，目標是將不同類型的量子電腦以混合配置連接至其Cray超級電腦平台。同月，超微宣布正與OQC及摩根大通（JPMorgan Chase）合作，探索量子運算、人工智慧與高效能古典基礎設施如何協力應對複雜的金融服務工作負載。

  ## 整合挑戰：模態、延遲與共址部署

  量子硬體涵蓋多種截然不同的技術，業界統稱為「模態」（modality），包括超導量子位元、陷離子、中性原子、光子系統及矽自旋等。每種模態對環境和操作條件的要求各有不同。超導系統依賴深度低溫冷卻，且對熱能干擾、磁場及振動極為敏感。由於各模態正在快速演進，系統部署時必須能夠在不嚴重干擾鄰近古典基礎設施的前提下進行升級與擴充，《Data Center Knowledge》如此指出。

  為縮短特定工作負載的求解時間，業界愈來愈傾向於將QPU與GPU及CPU節點共址部署，藉助低延遲耦合發揮效益。麥肯錫（McKinsey）合夥人海寧‧索勒（Henning Soller）於6月在波士頓舉行的Quantum.Tech World大會上表示，考量到量子運算優勢的明確性可能要到2028至2030年才會浮現，眼下就必須著手展開早期整合工作。

  「讓量子運算真正可用，關鍵不僅在於開發量子電腦本身，更在於打造量子電腦與高效能電腦及古典基礎設施之間的整合，」索勒說道，並指出絕大部分的資料仍將存放於傳統資料中心的資料庫中。麥肯錫的研究顯示，將量子系統與古典基礎設施共址部署，可針對特定工作流程降低通訊延遲，進而提升整體混合系統效能。

  ## 設施設計：電力、冷卻與地板振動

  量子系統的部署對實體設施提出了傳統資料中心設計未曾面對的要求。施耐德電氣（Schneider Electric）能源管理業務首席策略暨永續長阿帕爾納‧普拉巴卡（Aparna Prabhakar）在同一場波士頓大會上告訴與會者，業者應在量子系統進場之前，就先評估電力與冷卻需求——以及冷卻方式是否需要在樓板層面進行改造。

  普拉巴卡以生成式AI快速滲透資料中心為例進行類比：如今，眾多設施正在對當初建設時未曾預見的電力負載進行改建。「你需要一個不會干擾量子電腦的地板設置，」她說，並將振動抑制列為一項獨立的操作關鍵要務。

  ## 演算法匱乏與擴大存取管道的必要性

  儘管基礎設施動能強勁，能夠對古典運算提供實質優勢的量子演算法仍為數有限。彼得‧秀爾（Peter Shor）是麻省理工學院（MIT）的數學家，也是秀爾演算法的創始人——該演算法於1994年證明，量子電腦能夠分解超出古典超級電腦能力範疇的超大整數——他在Quantum.Tech大會上回應了這個問題。被問及為何在此後數十年間問世的量子演算法依舊寥寥可數時，秀爾說：「我們並未發現更多演算法……而我們所發現的那些，都是針對實際上根本沒有人真正想在現實中解決的晦澀問題，」儘管在物理學與量子化學模擬方面有若干例外。

  秀爾建議，更廣泛的量子系統實機存取機會或許能催化新的演算法突破，並以古典演算法是在古典電腦上透過廣泛實驗逐步成熟的歷程作為類比。

  ## 對資料中心業者的意義

  業界整體從比拼量子位元數量轉向追求在真實工作負載上的混合系統效能，這一趨勢轉變重新界定了資料中心規劃者評估量子運算的框架。Hyperion的索倫森指出，各機構現在提出的問題已不再是「量子什麼時候能全面超越古典運算」，而是「如何將量子處理能力引入現有的古典運算環境」。

  惠普企業宣布的多廠商合作——涵蓋八家量子硬體與軟體公司，並將它們連接至其Cray平台——是迄今最具體的跡象，顯示混合整合正從雙邊廠商協議走向更廣泛的生態系框架。麥肯錫的索勒將量子運算優勢真正實現的窗口定在2028至2030年，這一時程給予業者大約兩至四年的時間，在混合系統可能需要規模化部署之前，提前展開設施改造與整合規劃。
date: "2026-07-16"
source_published: "2026-07-15T09:00:00.000Z"
category: "compute"
secondary_categories: ["market"]
region: []
vendor: ["AMD", "Intel", "Nvidia", "Schneider Electric"]
trust:
  score: 3
  reasoning: "Single source: Quantum Meets the Data Center: Hybrid Systems Take Off (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/supercomputers/quantum-meets-the-data-center-hybrid-systems-take-off"
    title: "Quantum Meets the Data Center: Hybrid Systems Take Off"
    trust: 3
    type: primary
    published_at: "2026-07-15T09:00:00.000Z"
---
