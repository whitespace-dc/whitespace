---
title_en: "HPE Backs Eight Quantum Vendors to Integrate Competing Architectures with Cray Supercomputers"
title_zh: "HPE聯手八家量子廠商整合競爭架構與Cray超算"
summary_en: "Hewlett Packard Enterprise has assembled an eight-vendor quantum computing partner network spanning competing processor technologies, control systems and error-correction software, with a September 22 expansion adding neutral-atom developer QuEra Computing to its push for on-premises quantum-HPC integration built around HPE Cray infrastructure."
summary_zh: "惠普企業（HPE）集結八家量子運算廠商，組建涵蓋競爭處理器技術、控制系統與錯誤更正軟體的合作夥伴網路；9月22日更宣布擴大與中性原子技術商QuEra Computing的合作，攜手推動以HPE Cray基礎架構為核心的本地端量子—高效能運算整合方案。HPE本身不開發量子處理器，而是將超算平台定位為連結量子硬體與所需工作負載的基礎架構層。"
body_en: |
  Hewlett Packard Enterprise has assembled an eight-vendor quantum computing partner network spanning competing processor technologies, control systems and error-correction software, with a September 22 expansion adding neutral-atom developer QuEra Computing to its push for on-premises quantum-HPC integration built around HPE Cray infrastructure.

  The QuEra deal expands a relationship the companies said dates to 2025. Under the expanded collaboration, HPE and QuEra said they intend to develop integrated testbeds, software interoperability, hybrid algorithms and performance benchmarks aimed at deploying future fault-tolerant quantum hardware at customer sites alongside HPE Cray supercomputing systems. The September announcement follows HPE's June disclosure of collaborations with eight quantum technology companies.

  HPE is not developing its own quantum processor. Instead, the company is positioning its classical supercomputing platforms as the infrastructure layer connecting quantum hardware to the workloads, measurement processing and error-correction software those systems require to function.

  ## HPE's eight-vendor quantum partner network

  HPE's June announcement identified partners spanning the main competing processor architectures and the supporting technology layers those processors depend on. Intel is developing silicon spin qubits, a semiconductor-based approach. IQM and Rigetti are both pursuing superconducting quantum processors, which generally require dilution refrigerators operating at temperatures measured in millikelvin — a fraction of a degree above absolute zero. Quantinuum specializes in trapped-ion systems. QuEra focuses on neutral-atom technology, which uses individual atoms as qubits manipulated through lasers and electromagnetic controls and does not require extreme cryogenic refrigeration, though it does require specialized laser systems, vacuum equipment, precision optics and environmental controls.

  The remaining partners address the layers surrounding the processors themselves. Qblox and Quantum Machines develop the control electronics and software used to operate quantum hardware. Riverlane specializes in quantum error correction, the techniques that detect and fix errors in quantum calculations by encoding logical information across many physical qubits.

  By maintaining relationships across architectures, HPE said it is building an infrastructure framework capable of accommodating different quantum technologies within established high-performance computing (HPC) environments, rather than committing its investment to a single technical approach.

  ## What on-premises quantum-HPC integration requires

  For data center operators, integrating quantum systems with conventional infrastructure presents requirements that vary significantly by processor type. Superconducting quantum processors require dilution refrigerators and the associated cryogenic plant. Neutral-atom systems such as QuEra's avoid those refrigeration demands but introduce precision laser systems, vacuum chambers and vibration-isolation requirements.

  All quantum architectures depend on classical computing resources for workload preparation, measurement processing, system control and error correction. As error-correction demands grow with more capable quantum systems, those classical computing workloads will grow with them, making the quality of the quantum-classical interface a practical constraint on system performance.

  QuEra Chief Commercial Officer Yuval Boger said on-premises integration presents different engineering challenges from cloud-based quantum access. "HPE's deep experience in supercomputing gives organizations the benefit of working with a partner who can solve that problem at the scale they need," Boger said.

  The collaboration targets institutions that may be unable or unwilling to rely on cloud-based quantum services, including national laboratories, defense organizations, pharmaceutical researchers and organizations subject to data sovereignty requirements.

  ## An operating example: AIST's ABCI-Q testbed in Japan

  Loosely coupled quantum-classical integration at the research level is already operating. Japan's National Institute of Advanced Industrial Science and Technology (AIST) runs QuEra's 260-physical-qubit Gemini neutral-atom computer as part of its ABCI-Q research platform. According to a case study published by QuEra on October 26, the Gemini system operates in a building approximately 350 meters from the main installation, which incorporates an NVIDIA H100-based artificial intelligence supercomputer. Gemini is mounted on vibration-isolation equipment and connected through a software-defined network.

  The ABCI-Q configuration illustrates that quantum processors do not need to share physical space with the HPC systems they work alongside. It also highlights a distinction between what is feasible today and what fault-tolerant systems will require: batch-oriented workflows with loose coupling between the quantum and classical sides are workable now, while future fault-tolerant systems will demand tighter coordination and lower-latency interconnects between the quantum processor and its classical control infrastructure.

  ## QuEra's system roadmap and what it implies for data center design

  QuEra's forward roadmap, if realized, would narrow the facility gap between quantum and conventional computing hardware. The company's planned Libra system is projected to operate without cryogenic refrigeration, consume less than 40 kilowatts and occupy less than 1,000 square feet — specifications that, if met, would allow deployment within existing data center environments rather than requiring dedicated quantum facilities.

  Libra is designed to deliver 256 error-corrected logical qubits and execute approximately one million reliable logical quantum operations. Logical qubits represent quantum information that has been protected through error-correction encoding; producing each logical qubit requires a much larger number of physical qubits. QuEra projects that Libra will require more than 10,000 physical qubits to support its 256 logical qubit target. The company has said Libra is targeted for availability through Amazon Web Services' Braket quantum computing service in 2028.

  QuEra has also outlined a follow-on gigaquop-class system, targeted for 2028 to 2029, designed to support more than 1,000 logical qubits and approximately one billion reliable logical operations. The HPE collaboration is described as a potential path to deploying such a system on premises.

  Those figures are vendor development targets. Neither HPE nor QuEra has announced a completed HPE-integrated fault-tolerant installation, a firm customer delivery schedule or commercial pricing for an on-premises configuration.

  ## What the strategy means for the quantum computing market

  HPE's multi-vendor approach reflects the unresolved state of quantum processor competition. No single architecture has established clear technical dominance across the range of potential applications, and the control, error-correction and software layers that determine system usability remain active areas of development. By distributing its integration investments across competing architectures and supporting technology layers, HPE reduces its exposure to any single technical outcome while positioning Cray platforms as infrastructure relevant regardless of which processor technologies mature into commercial systems.

  The approach parallels the evolution of conventional supercomputing, where CPUs, graphics processing units (GPUs) and specialized accelerators have increasingly combined within single computing environments rather than competing as standalone platforms.

  QuEra's Libra system, targeting 256 logical qubits and one million logical operations via Amazon Braket, represents the nearest-term milestone against which the commercial viability of the on-premises integration path can be measured, with availability projected for 2028.
body_zh: |
  惠普企業（HPE）組建了涵蓋八家廠商的量子運算合作夥伴網路，橫跨相互競爭的處理器技術、控制系統與錯誤更正軟體。9月22日，HPE宣布擴大既有合作關係，將中性原子技術開發商QuEra Computing納入陣營，進一步推動以HPE Cray基礎架構為核心、部署於客戶端的量子—高效能運算（HPC）整合方案。

  QuEra這筆協議，是建立在雙方自2025年即已啟動的合作關係之上。根據擴大後的合作框架，HPE與QuEra表示，雙方計畫共同開發整合測試平台、軟體互通機制、混合演算法與效能基準，目標是讓未來的容錯量子硬體得以部署於客戶端，並與HPE Cray超級電腦系統並肩運作。此次9月的宣布，緊接在HPE今年6月揭露與八家量子技術公司展開合作之後。

  HPE本身並不自行開發量子處理器。這家公司的策略定位，是將其傳統超算平台打造為基礎架構層，負責連結量子硬體，以及這些系統運作所需的工作負載、量測處理與錯誤更正軟體。

  ## HPE的八家量子合作夥伴網路

  HPE今年6月公布的合作夥伴名單，涵蓋了量子領域幾大主流競爭架構，以及各架構所依賴的支援技術層。英特爾（Intel）正在開發矽自旋量子位元，屬於半導體技術路線；IQM與Rigetti則同時投入超導量子處理器的研發，此類處理器通常需要稀釋冷凍機在毫克耳文（millikelvin）溫度下運作，即絕對零度以上不到一度；Quantinuum專攻囚禁離子系統；QuEra則聚焦於中性原子技術，以個別原子作為量子位元，透過雷射與電磁控制操控，無需極低溫冷凍環境，但需要專用的雷射系統、真空設備、精密光學元件與環境控制裝置。

  其餘合作夥伴則著眼於處理器以外的支援層。Qblox與Quantum Machines負責開發操控量子硬體所需的控制電子設備與軟體；Riverlane則專精量子錯誤更正——即透過將邏輯資訊分散編碼於眾多實體量子位元的方式，偵測並修正量子運算錯誤的技術。

  HPE表示，透過與各架構廠商維持合作關係，公司正在建立一套基礎架構框架，能夠在既有高效能運算（HPC）環境中容納不同量子技術，而不是將全部投資押注於單一技術路線。

  ## 本地端量子—HPC整合的基本需求

  對資料中心業者而言，將量子系統與傳統基礎架構整合，所面臨的需求因處理器類型而大相逕庭。超導量子處理器需要稀釋冷凍機及配套的低溫設備；以QuEra技術為代表的中性原子系統雖無此類冷凍需求，卻對精密雷射系統、真空腔體與隔振設備有嚴格要求。

  所有量子架構都仰賴傳統運算資源，負責工作負載準備、量測處理、系統控制與錯誤更正。隨著量子系統能力提升、錯誤更正需求隨之增加，傳統運算工作負載也將同步成長，使得量子—傳統介面的品質成為制約系統效能的實際瓶頸。

  QuEra首席商務長尤瓦爾·博格（Yuval Boger）表示，本地端整合部署與透過雲端存取量子資源，在工程挑戰上截然不同。「HPE在超算領域深厚的經驗，讓企業組織得以與一位可以按其所需規模解決問題的夥伴合作，」博格說道。

  此項合作瞄準的對象，是那些可能無法或不願仰賴雲端量子服務的機構，包括國家實驗室、國防組織、製藥研究人員，以及受資料主權法規約束的機構。

  ## 實際運作案例：日本AIST的ABCI-Q研究測試平台

  鬆散耦合的量子—傳統整合在研究層面已付諸實施。日本產業技術總合研究所（AIST）將QuEra搭載260個實體量子位元的Gemini中性原子電腦，納入其ABCI-Q研究平台運作。根據QuEra於10月26日發布的案例研究，Gemini系統安置於主設施約350公尺外的建築內，主設施包含一台以輝達（NVIDIA）H100為基礎的人工智慧超級電腦。Gemini架設於隔振設備之上，並透過軟體定義網路與主設施連接。

  ABCI-Q的配置說明了量子處理器無需與其協同運作的HPC系統共享同一實體空間。這個案例同時也點出了現階段可行性與未來容錯系統需求之間的差距：批次導向、量子端與傳統端鬆散耦合的工作流程目前已可運作；然而未來的容錯系統，將對量子處理器與其傳統控制基礎架構之間的協調性與低延遲互連提出更嚴格的要求。

  ## QuEra的系統藍圖與資料中心設計意涵

  QuEra的未來發展藍圖若能如期實現，將大幅縮小量子設備與傳統運算硬體在設施需求上的差距。該公司規劃中的Libra系統，預計在無需低溫冷凍設備的條件下運作，功耗低於40千瓦，佔地不足1,000平方英尺（約93平方公尺）——若能達標，將可部署於現有資料中心環境，無需另建專用量子設施。

  Libra的設計目標為提供256個經錯誤更正的邏輯量子位元，並可執行約一百萬次可靠的邏輯量子運算。邏輯量子位元代表已透過錯誤更正編碼加以保護的量子資訊；每產生一個邏輯量子位元，需要遠多於此數量的實體量子位元。QuEra預估，Libra將需要超過一萬個實體量子位元，方能支撐其256個邏輯量子位元的目標。該公司表示，Libra預計於2028年透過亞馬遜網路服務（AWS）的Braket量子運算服務正式提供存取。

  QuEra也勾勒了後續的十億次量子閘操作（gigaquop）等級系統，預計在2028至2029年間問世，設計目標為支援超過1,000個邏輯量子位元，以及約十億次可靠的邏輯量子運算。此次與HPE的合作，被描述為在客戶端部署此類系統的潛在路徑。

  上述數據均為廠商開發目標。HPE與QuEra均未宣布任何已完成的HPE整合容錯系統裝置、明確的客戶交付時程，或本地端部署配置的商業定價。

  ## 這項策略對量子運算市場的意義

  HPE的多廠商策略，反映的是量子處理器競爭格局尚未定案的現實。目前沒有任何單一架構，能夠在各類潛在應用場景中確立明確的技術優勢；決定系統可用性的控制、錯誤更正與軟體層，也仍處於積極開發階段。HPE將整合投資分散於相互競爭的架構與支援技術層，一方面降低對任何單一技術方向的風險曝露，同時也確保Cray平台無論哪種處理器技術最終成熟走向商業化，都能維持其基礎架構的競爭地位。

  這套策略與傳統超算的演進路徑相互呼應。在傳統超算領域，CPU、圖形處理器（GPU）與專用加速器已愈來愈多地在單一運算環境中相互協作，而非以各自獨立平台的姿態相互競爭。

  QuEra的Libra系統以256個邏輯量子位元與一百萬次邏輯量子運算為目標，計畫於2028年透過Amazon Braket提供服務，這是衡量本地端整合部署商業可行性的最近期里程碑。
date: "2026-10-29"
source_published: "2026-10-28T15:00:03.348Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AWS", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: HPE's Quantum Computing Bet: A Multi-Vendor Path to the Data Center (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/hyperscale/article/55413469/hpes-quantum-computing-bet-a-multi-vendor-path-to-the-data-center"
    title: "HPE's Quantum Computing Bet: A Multi-Vendor Path to the Data Center"
    trust: 3
    type: primary
    published_at: "2026-10-28T15:00:03.348Z"
---
