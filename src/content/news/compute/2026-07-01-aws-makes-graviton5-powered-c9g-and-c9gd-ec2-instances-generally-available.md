---
title_en: "AWS Makes Graviton5-Powered C9g and C9gd EC2 Instances Generally Available"
title_zh: "AWS Graviton5 驅動 C9g 與 C9gd EC2 執行個體正式上線"
summary_en: "Amazon Web Services has made its Graviton5-powered EC2 C9g and C9gd instances generally available, offering up to 25 percent higher performance per vCPU than the prior generation and targeting AI inference, high-performance computing, and the CPU-bound orchestration work surrounding AI workloads."
summary_zh: "亞馬遜雲端服務（AWS）正式推出以 Graviton5 處理器驅動的 EC2 C9g 與 C9gd 執行個體，每 vCPU 效能較上一代提升最高 25%，鎖定 AI 推論、高效能運算及 AI 工作負載周邊的 CPU 密集型協調任務。此次發表同步推出以 Rust 語言撰寫的 Nitro Isolation Engine 安全功能，進一步強化共享實體主機的虛擬機器間隔離性。"
body_en: |
  Amazon Web Services has made its Graviton5-powered Amazon EC2 C9g and C9gd instances generally available, bringing its latest Arm-based processor to compute-optimized cloud instances aimed at artificial intelligence inference, high-performance computing (HPC), distributed analytics, and other CPU-intensive workloads.

  AWS says C9g delivers up to 25 percent higher performance per vCPU compared with the previous-generation C8g family. The new instances support DDR5-8800 memory — the current highest-speed DDR5 specification — carry five times the L3 cache of their predecessors, offer PCIe Gen 6 connectivity, and deliver up to three times higher packet-processing performance.

  The family spans 11 sizes from medium through 48xlarge, including bare-metal options. AWS says the largest instances provide up to 100 Gbps of network throughput and up to 72 Gbps of Amazon EBS (Elastic Block Store) bandwidth. C9gd instances add local NVMe solid-state storage for workloads requiring high-speed caching or scratch space.

  ## Platform security update

  Alongside the processor upgrade, AWS is rolling out the Nitro Isolation Engine, a new security capability written in the Rust programming language and embedded in the Nitro Hypervisor — the custom silicon and software stack AWS uses to virtualize its EC2 fleet. The engine mediates access to memory, CPU register state, and I/O devices, strengthening isolation between virtual machines sharing the same physical host.

  ## CPUs in an accelerator-first architecture

  The launch arrives as AI infrastructure spending remains concentrated on graphics processing units (GPUs), but AWS is explicitly positioning C9g and C9gd for the portions of AI workloads that run on central processing units. Agentic AI systems — software that plans, calls external tools, and executes multi-step workflows — place substantial demands on CPUs for orchestration, memory management, scheduling, and concurrency, even when model inference runs on accelerators.

  "AI enablement is a design point for every CPU moving forward," said Matt Kimball, vice president and principal analyst for data center technologies at Moor Insights & Strategy. "While all of the hype is on GPUs, CPU demand is going to continue to grow at a very rapid rate."

  Kimball said Graviton5 is designed to serve both established enterprise workloads and emerging AI applications. Larger caches, faster memory, and higher-bandwidth I/O benefit databases, analytics, and HPC, while the processor's architecture also suits CPU-bound AI tasks such as reasoning, task decomposition, and concurrency, he said.

  Stephen Sopko, semiconductor and deep tech analyst at HyperFrame Research, drew a similar line. "Model inference may run on accelerators, but orchestration, tool calling, and multi-step reasoning are CPU-bound," Sopko said. "It doesn't replace accelerators; it keeps them fed while agents plan, call tools, and hold state."

  Sopko said the balance will matter more as enterprises deploy larger agentic AI systems. "Agentic AI turns the CPU from supporting actor back into co-star," he said. "C9g is Amazon wiring the control plane for that shift."

  ## Broader Graviton strategy

  The C9g family extends a push AWS began earlier in 2026 when it introduced Graviton-powered Amazon Redshift RG instances to improve performance and economics for AI-era analytics. The C9g launch moves that strategy deeper into the infrastructure layer, targeting the orchestration and memory-intensive paths that surround AI inference, according to the company.

  ## Competitive landscape

  AWS is not the only company redesigning server processors around AI. Nvidia's Grace CPU integrates tightly with its AI platform, Arm has emphasized AI throughout its Neoverse processor roadmap, and Qualcomm has introduced server CPU variants for orchestration, general-purpose computing, and AI head-node functions, according to Data Center Knowledge reporting.

  Kimball said Graviton5's most direct competition remains AMD EPYC and Intel Xeon processors rather than AI accelerators. He expects every major CPU line to continue evolving around AI workloads as demand grows for processors optimized to handle data movement, memory, and orchestration alongside GPUs.

  ## Availability

  C9g and C9gd instances are initially available in the AWS US East (Northern Virginia and Ohio), US West (Oregon), and Europe (Frankfurt) regions. AWS says additional regions are planned.
body_zh: |
  亞馬遜雲端服務（AWS）已正式推出以 Graviton5 驅動的 Amazon EC2 C9g 與 C9gd 執行個體，將其最新 Arm 架構處理器導入運算最佳化雲端執行個體，鎖定人工智慧（AI）推論、高效能運算（HPC）、分散式分析及其他 CPU 密集型工作負載。

  AWS 表示，C9g 每 vCPU 效能較上一代 C8g 系列提升最高 25%。新執行個體支援 DDR5-8800 記憶體——目前 DDR5 規格的最高速度——L3 快取容量為上一代的五倍，提供 PCIe Gen 6 連接能力，封包處理效能最高提升三倍。

  此系列涵蓋從 medium 到 48xlarge 共 11 種規格，並提供裸機選項。AWS 指出，最大規格執行個體提供最高 100 Gbps 的網路吞吐量，以及最高 72 Gbps 的 Amazon EBS（彈性區塊儲存）頻寬。C9gd 執行個體另附本機 NVMe 固態硬碟儲存，適合需要高速快取或暫存空間的工作負載。

  ## 平台安全性升級

  伴隨處理器升級，AWS 同步推出 Nitro Isolation Engine——一項以 Rust 程式語言撰寫、內嵌於 Nitro Hypervisor 的全新安全功能。Nitro Hypervisor 是 AWS 用於虛擬化 EC2 機群的自研晶片與軟體堆疊。這套引擎負責管控對記憶體、CPU 暫存器狀態及 I/O 裝置的存取，強化在同一實體主機上共享資源的虛擬機器之間的隔離性。

  ## 加速器主導架構下的 CPU 定位

  此次發表恰逢 AI 基礎設施支出仍以圖形處理器（GPU）為重心之際，但 AWS 明確將 C9g 與 C9gd 定位於 AI 工作負載中由 CPU 執行的環節。代理型 AI 系統——能規劃、呼叫外部工具並執行多步驟工作流程的軟體——即便模型推論在加速器上運行，仍對 CPU 在協調、記憶體管理、排程與並行處理方面提出可觀需求。

  「AI 賦能將成為未來每顆 CPU 的設計核心，」Moor Insights & Strategy 資料中心技術副總裁暨首席分析師 Matt Kimball 說。「儘管外界目光都集中在 GPU，CPU 需求仍將以極快的速度持續成長。」

  Kimball 表示，Graviton5 的設計同時服務成熟的企業工作負載與新興 AI 應用。更大的快取、更快的記憶體與更高頻寬的 I/O 有助於資料庫、分析與高效能運算，而其處理器架構亦適合 CPU 密集型 AI 任務，例如推理、任務分解及並行處理。

  HyperFrame Research 半導體與深度科技分析師 Stephen Sopko 也抱持類似看法。「模型推論或許在加速器上執行，但協調、工具呼叫與多步驟推理都是 CPU 密集型工作，」Sopko 說。「這不是為了取代加速器，而是讓加速器在代理規劃、工具呼叫與狀態維護的同時保持滿載運轉。」

  Sopko 表示，隨著企業部署規模更大的代理型 AI 系統，這種平衡將愈發關鍵。「代理 AI 讓 CPU 從配角重回共同主角的位置，」他說。「C9g 是亞馬遜為這場轉變布局的控制平面。」

  ## 更廣泛的 Graviton 策略

  C9g 系列延伸了 AWS 於 2026 年稍早展開的布局——當時 AWS 推出了 Graviton 驅動的 Amazon Redshift RG 執行個體，以提升 AI 世代分析的效能與經濟效益。據 AWS 表示，C9g 的發表將這項策略推進至更深的基礎設施層，鎖定 AI 推論周邊的協調與記憶體密集路徑。

  ## 競爭態勢

  AWS 並非唯一針對 AI 重新設計伺服器處理器的業者。根據 Data Center Knowledge 的報導，輝達（NVIDIA）的 Grace CPU 與其 AI 平台緊密整合，Arm 在其 Neoverse 處理器藍圖中全面強調 AI，高通（Qualcomm）則推出了針對協調、通用運算及 AI 主節點功能的伺服器 CPU 變體。

  Kimball 表示，Graviton5 最直接的競爭對手仍是 AMD EPYC 與 Intel Xeon 處理器，而非 AI 加速器。他預計隨著市場對資料搬移、記憶體及協調工作最佳化之處理器需求持續成長，每個主要 CPU 產品線都將持續圍繞 AI 工作負載進行演進。

  ## 供應情形

  C9g 與 C9gd 執行個體初期將在 AWS 美東（北維吉尼亞與俄亥俄）、美西（奧勒岡）及歐洲（法蘭克福）區域上線，AWS 表示後續計畫擴展至更多區域。
date: "2026-07-01"
source_published: "2026-06-30T15:00:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "AWS", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: AWS Launches Graviton5-Powered EC2 Instances for AI and HPC (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/data-center-chips/aws-makes-the-case-for-cpus-in-the-ai-stack"
    title: "AWS Launches Graviton5-Powered EC2 Instances for AI and HPC"
    trust: 3
    type: primary
    published_at: "2026-06-30T15:00:00.000Z"
---
