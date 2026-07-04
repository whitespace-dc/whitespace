---
title_en: "AWS Brings Graviton5 EC2 Instances to General Availability With Four New Instance Families"
title_zh: "AWS Graviton5 正式上市，推出四大 EC2 執行個體系列"
summary_en: "Amazon Web Services has made four new EC2 instance families — M9g, M9gd, C9g, and C9gd — generally available, all powered by its in-house Graviton5 Arm-architecture processor, delivering up to 25% higher per-vCPU performance than the prior Graviton4 generation and introducing a formally verified isolation engine in the underlying Nitro infrastructure."
summary_zh: "亞馬遜網路服務正式推出搭載自研 Graviton5 Arm 架構處理器的四大 EC2 執行個體系列——M9g、M9gd、C9g 與 C9gd，每 vCPU 效能較前一代 Graviton4 提升最高 25%。此次發布同步引入採用形式數學驗證技術的 Nitro 隔離引擎，為雲端工作負載之間的隔離提供數學層級的安全保證。"
body_en: |
  Amazon Web Services has launched four new Amazon EC2 (Elastic Compute Cloud) instance families — M9g, M9gd, C9g, and C9gd — all built on its custom Graviton5 Arm-architecture processor, the company announced in June 2026. The rollout extends across general-purpose and compute-optimized workload categories and is accompanied by a new security capability in AWS's Nitro hypervisor infrastructure that uses formal mathematical verification to guarantee workload isolation.

  AWS first previewed the M9g general-purpose instance and disclosed initial Graviton5 performance figures at its re:Invent 2025 conference in December. At that time, the company said M9g delivered 25% higher compute performance than the M8g — the equivalent Graviton4-based instance — and 35% faster throughput for web application and machine-learning workloads and 30% faster for database workloads compared to the prior generation.

  ## General-availability timeline

  M9g reached general availability on June 10, alongside M9gd, a variant that adds local NVMe (Non-Volatile Memory Express) solid-state storage. M9gd provides up to 11.4 TB of local NVMe capacity per instance and delivers 30% higher IOPS (input/output operations per second) than the Graviton4-based M8gd, AWS said.

  Approximately one week later, AWS added M9g support to Amazon RDS (Relational Database Service) for configurations running the PostgreSQL, MySQL, and MariaDB database engines. RDS instances on M9g deliver 30% better performance than equivalent Graviton4 RDS instances and can achieve up to 23% better price-performance under on-demand pricing, the company said.

  In late June, AWS added the compute-optimized C9g and C9gd families. Like their general-purpose counterparts, C9g and C9gd offer 25% higher per-vCPU performance than the Graviton4-based C8g series. AWS additionally cited a threefold improvement in packet-processing throughput. C9gd carries the same 30% IOPS improvement over the C8gd as observed in the M9gd versus M8gd comparison.

  ## Graviton5 chip architecture

  Graviton5 is fabricated on a 3-nanometer process and is built from four chiplets (individual silicon dies integrated into a single package). Each chiplet contains 48 CPU cores, a DRAM controller, and a PCIe controller, giving the full processor 192 cores — double the 96 cores in Graviton4. Inter-chiplet bandwidth is 420 GB/s, and AWS has eliminated the separate I/O and DRAM controller dies used in earlier designs.

  Each core is based on the Arm Neoverse V3 microarchitecture. Total L3 cache per processor is 192 MB, a 5.3-fold increase over the prior generation; each individual core can access 2.6 times as much L3 cache as a Graviton4 core, reducing memory-access latency for cloud instances.

  The processor supports DDR5-8800 memory — a high-bandwidth standard that AWS says allows customers to process larger data sets and run memory-intensive applications more efficiently — and PCIe 6.0 for I/O connectivity. Operators can configure each processor with two or four NUMA (Non-Uniform Memory Access) zones and can partition the L3 cache to match the size of virtual machines running on the chip, a technique intended to reduce memory-access latency for instances using 48 cores or fewer.

  AWS also noted that Graviton5 supports bare-die cooling at the system level, which it said contributes to improved energy efficiency.

  ## Instance configurations and pricing

  All four instance families run on AWS's sixth-generation Nitro System, the company's infrastructure offload and isolation architecture. M9g and M9gd use a 1:4 vCPU-to-memory ratio (1 vCPU per 4 GiB of RAM); C9g and C9gd use a 1:2 ratio (1 vCPU per 2 GiB of RAM). All four families scale from a `medium` size up to a `metal-48xl` bare-metal configuration spanning 192 vCPUs.

  M9g and M9gd specifications:
  - vCPUs: 1 to 192
  - Memory: 4 to 768 GiB DDR5-8800
  - Network bandwidth: 15 to 100 Gbps
  - EBS (Elastic Block Store) bandwidth: 12 to 72 Gbps
  - M9gd local storage: 1 to 3 NVMe SSDs, 59 GB to 11,400 GB total
  - On-demand pricing (US West — Oregon): m9g.medium at $0.04892/hr; m9gd.medium at $0.06285/hr

  C9g and C9gd specifications:
  - vCPUs: 1 to 192
  - Memory: 2 to 384 GiB DDR5-8800
  - Network bandwidth: 15 to 100 Gbps
  - EBS bandwidth: 12 to 72 Gbps
  - C9gd local storage: 1 to 3 NVMe SSDs, 59 GB to 11,400 GB total
  - On-demand pricing (US West — Oregon): c9g.medium at $0.04347/hr; c9gd.medium at $0.0534/hr

  Across all four families, network bandwidth is 15% higher and EBS bandwidth 20% higher than AWS's average instance configuration, the company said. Compared with the largest prior-generation instances, the new families double available network bandwidth, which AWS said accelerates data transfer, backup operations, and distributed application performance.

  ## Workload targeting

  AWS positions M9g and M9gd for application servers, microservices, mid-tier data stores, game servers, caching clusters, containerized applications, large Java applications, code repositories, web applications, and agentic AI workloads. The M9gd variant, with its local NVMe storage, extends that list to key-value stores, data logging, media processing, batch and event-log processing, and other use cases that require fast temporary storage.

  C9g and C9gd are aimed at high-performance computing, batch processing, gaming, video encoding, scientific modeling, distributed data analytics, CPU-based machine-learning inference, real-time data analytics, and ad-serving. C9gd adds support for compute-intensive workloads that require high-speed, low-latency local storage, including scratch data and caching.

  ## Nitro Isolation Engine

  Alongside the hardware launch, AWS introduced the Nitro Isolation Engine, a new security component of the Nitro System. The engine applies formal verification — a mathematical technique used to prove the correctness of software against a specification — to provide what AWS describes as mathematical certainty that workloads are isolated from one another and from AWS operators. AWS said the engine has a minimal, formally verified codebase whose behavior can be proven to conform exactly to its specification, and that customers will be given access to review the engine's implementation and the resulting proofs.

  ## Industry significance

  The Graviton5 launch marks a doubling of core count per processor generation and the introduction of formal verification into hypervisor-level isolation, both significant technical steps for cloud infrastructure. For enterprise buyers evaluating Arm-based cloud compute, the combination of higher per-core performance, the new RDS support, and the price-performance claims on on-demand pricing present a direct comparison point against x86-based instance alternatives. The formal-verification approach to security isolation is a relatively novel claim for a hyperscaler's production infrastructure, and AWS's stated plan to publish the proofs for customer review will allow independent scrutiny of those guarantees.
body_zh: |
  亞馬遜網路服務（AWS）正式推出四個新的 Amazon EC2（彈性雲端運算）執行個體系列——M9g、M9gd、C9g 與 C9gd，全數搭載自研的 Graviton5 Arm 架構處理器，該公司於 2026 年 6 月宣布。此次發布涵蓋一般用途與運算最佳化工作負載兩大類別，並在 AWS Nitro 虛擬機器監控程式（Hypervisor）基礎架構中導入全新安全性能力，透過形式數學驗證技術，確保各工作負載之間的隔離。

  AWS 最早在 2025 年 12 月的 re:Invent 大會上預覽了 M9g 一般用途執行個體，並公布了 Graviton5 的初期效能數據。當時，該公司表示 M9g 的運算效能比 M8g（基於 Graviton4 的同級執行個體）高出 25%，網頁應用程式與機器學習工作負載的吞吐量加快 35%，資料庫工作負載則加快 30%。

  ## 正式上市時程

  M9g 於 6 月 10 日正式上市，同日推出的還有 M9gd——這是一個新增本地 NVMe（非揮發性記憶體快速傳輸）固態儲存的變體。M9gd 每個執行個體可提供最多 11.4 TB 的本地 NVMe 容量，每秒輸入／輸出操作次數（IOPS）比基於 Graviton4 的 M8gd 高出 30%，AWS 表示。

  約一週後，AWS 在 Amazon RDS（關聯式資料庫服務）中新增了對 M9g 的支援，適用於執行 PostgreSQL、MySQL 及 MariaDB 資料庫引擎的組態。M9g 上的 RDS 執行個體效能比同級 Graviton4 RDS 執行個體高出 30%，並可在隨需定價下實現最高 23% 的性價比提升，該公司表示。

  6 月下旬，AWS 進一步推出運算最佳化的 C9g 與 C9gd 系列。與一般用途系列相同，C9g 和 C9gd 的每 vCPU 效能比 Graviton4 的 C8g 系列高出 25%。AWS 另外強調封包處理吞吐量提升了三倍。C9gd 的 IOPS 改善幅度相較 C8gd 同樣達 30%，與 M9gd 對比 M8gd 的提升幅度一致。

  ## Graviton5 晶片架構

  Graviton5 採用 3 奈米製程製造，由四個小晶片（chiplet，即整合在單一封裝中的獨立矽晶粒）組成。每個小晶片內含 48 個 CPU 核心、一個 DRAM 控制器及一個 PCIe 控制器，使整顆處理器共擁有 192 個核心——是 Graviton4 的 96 個核心的兩倍。晶粒間頻寬為 420 GB/s，AWS 並移除了先前設計中獨立的 I／O 與 DRAM 控制器晶粒。

  每個核心採用 Arm Neoverse V3 微架構。每顆處理器的 L3 快取總容量為 192 MB，是前一代的 5.3 倍；每個核心可存取的 L3 快取量是 Graviton4 核心的 2.6 倍，有助於降低雲端執行個體的記憶體存取延遲。

  該處理器支援 DDR5-8800 記憶體——這是一種高頻寬標準，AWS 表示可讓客戶處理更大規模的資料集，並更有效率地執行記憶體密集型應用程式——以及 PCIe 6.0 I／O 連接介面。使用者可將每顆處理器配置為兩個或四個 NUMA（非均勻記憶體存取）區域，並可分割 L3 快取以配合在晶片上執行的虛擬機器大小，此技術旨在降低使用 48 個核心或更少核心之執行個體的記憶體存取延遲。

  AWS 亦指出，Graviton5 在系統層級支援裸晶冷卻，有助於提升整體能源效率。

  ## 執行個體規格與定價

  四個執行個體系列均運行於 AWS 第六代 Nitro 系統之上，該系統是 AWS 的基礎架構卸載與隔離架構。M9g 與 M9gd 採用 1:4 的 vCPU 對記憶體比例（每 vCPU 對應 4 GiB 記憶體）；C9g 與 C9gd 則採用 1:2 比例（每 vCPU 對應 2 GiB 記憶體）。四個系列均從 `medium` 規格擴展至含 192 個 vCPU 的 `metal-48xl` 裸機配置。

  **M9g 與 M9gd 規格：**
  - vCPU：1 至 192
  - 記憶體：4 至 768 GiB DDR5-8800
  - 網路頻寬：15 至 100 Gbps
  - EBS（彈性區塊儲存）頻寬：12 至 72 Gbps
  - M9gd 本地儲存：1 至 3 個 NVMe SSD，總容量 59 GB 至 11,400 GB
  - 隨需定價（美西俄勒岡州）：m9g.medium 每小時 $0.04892 美元；m9gd.medium 每小時 $0.06285 美元

  **C9g 與 C9gd 規格：**
  - vCPU：1 至 192
  - 記憶體：2 至 384 GiB DDR5-8800
  - 網路頻寬：15 至 100 Gbps
  - EBS 頻寬：12 至 72 Gbps
  - C9gd 本地儲存：1 至 3 個 NVMe SSD，總容量 59 GB 至 11,400 GB
  - 隨需定價（美西俄勒岡州）：c9g.medium 每小時 $0.04347 美元；c9gd.medium 每小時 $0.0534 美元

  四個系列的網路頻寬均比 AWS 平均執行個體配置高出 15%，EBS 頻寬則高出 20%。與前一代最大規格執行個體相比，新系列的可用網路頻寬倍增，AWS 表示這將加速資料傳輸、備份作業及分散式應用程式的效能。

  ## 適用工作負載

  AWS 將 M9g 與 M9gd 定位為以下情境的首選：應用程式伺服器、微服務、中介層資料儲存、遊戲伺服器、快取叢集、容器化應用程式、大型 Java 應用程式、程式碼儲存庫、網頁應用程式，以及自主代理式 AI 工作負載。M9gd 變體憑藉本地 NVMe 儲存，適用範圍進一步延伸至鍵值儲存、資料記錄、媒體處理、批次與事件記錄處理，以及其他需要高速暫存的使用情境。

  C9g 與 C9gd 則瞄準高效能運算、批次處理、遊戲、影片編碼、科學模擬、分散式資料分析、基於 CPU 的機器學習推論、即時資料分析及廣告投放。C9gd 另外支援需要高速、低延遲本地儲存的運算密集型工作負載，包括暫存資料與快取。

  ## Nitro 隔離引擎

  伴隨硬體發布，AWS 同步推出 Nitro 隔離引擎——Nitro 系統的全新安全性元件。此引擎採用形式驗證技術，這是一種透過數學方式嚴格證明軟體行為符合規格的方法，可提供 AWS 所稱的「數學確定性」，確保各工作負載之間以及工作負載與 AWS 操作人員之間維持完全隔離。AWS 表示，該引擎具備精簡且通過形式驗證的程式碼庫，其行為可被數學證明完全符合既定規格，並將開放客戶審閱引擎實作內容及對應的驗證證明。

  ## 產業意義

  Graviton5 的發布標誌著每代處理器核心數量翻倍，以及形式驗證技術首度被引入 Hypervisor 層級的隔離機制，對雲端基礎架構而言，兩者均為重大的技術里程碑。對於正在評估 Arm 架構雲端運算的企業買家而言，每核心效能的提升、新增的 RDS 支援，以及隨需定價下的性價比優勢，為與 x86 架構執行個體的直接比較提供了具體參照依據。在超大規模雲端業者的正式生產基礎架構中，以形式驗證方式保障安全隔離是相對新穎的主張，而 AWS 公開發布驗證證明供客戶審閱的計畫，將使這些保證能夠接受獨立的外部審查。
date: "2026-07-05"
source_published: "2026-07-04T03:07:06.000Z"
category: "compute"
secondary_categories: []
supersedes: "compute/2026-07-01-aws-makes-graviton5-powered-c9g-and-c9gd-ec2-instances-generally-available"
region: []
vendor: ["AWS"]
trust:
  score: 3
  reasoning: "Single source: 搭配強化VM隔離的Nitro引擎，AWS Graviton5執行個體上線 (trust 3/5)."
sources:
  - url: "https://www.ithome.com.tw/review/176974"
    title: "搭配強化VM隔離的Nitro引擎，AWS Graviton5執行個體上線"
    trust: 3
    type: primary
    published_at: "2026-07-04T03:07:06.000Z"
---
