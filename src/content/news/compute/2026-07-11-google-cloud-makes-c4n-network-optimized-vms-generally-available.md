---
title_en: "Google Cloud makes C4N network-optimized VMs generally available"
title_zh: "Google Cloud 推出 C4N 網路最佳化虛擬機器正式版"
summary_en: "Google Cloud has made its C4N virtual machine family generally available on Compute Engine, offering up to 400 Gbps of network bandwidth and one million IOPS for data-intensive workloads including databases, 5G core, analytics, and AI inference. The instances run on 5th-generation Intel Xeon Scalable processors and offload network and storage processing to dedicated Titanium hardware."
summary_zh: "Google Cloud 宣布 C4N 虛擬機器系列在 Compute Engine 上正式開放使用，提供最高 400 Gbps 網路頻寬與每秒百萬次 IOPS，專為資料庫、5G 核心網路、數據分析及 AI 推論等高吞吐量工作負載設計。"
body_en: |
  Google Cloud has made its C4N virtual machine family generally available on Compute Engine, targeting workloads that demand high network throughput or heavy block storage use, including databases, network appliances, analytics, and some artificial intelligence inference tasks.

  The new instance family runs on 5th-generation Intel Xeon Scalable processors, code-named Emerald Rapids, and is built on Google Cloud's Titanium offload architecture, which shifts network and storage processing to dedicated hardware rather than the main compute cores. C4N scales from 2 to 192 virtual CPUs (vCPUs), with memory configurations of up to 1.5 terabytes.

  ## Specifications

  At full scale, C4N delivers up to 400 gigabits per second (Gbps) of network bandwidth, up to 95 million packets per second, block storage throughput of up to 25 gibibytes per second (GiB/s), and up to one million input/output operations per second (IOPS) when paired with Hyperdisk Extreme, Google Cloud's highest-performance block storage tier.

  For configurations in the 2-to-16 vCPU range, the family provides between 25 Gbps and 50 Gbps of network bandwidth. Internet egress bandwidth reaches up to 200 Gbps, with egress packet processing of up to 48 million packets per second.

  ## Storage integration

  C4N supports the full Hyperdisk portfolio, which covers Balanced, Balanced High Availability, Extreme, Throughput, and ML storage tiers. With Hyperdisk Balanced, instances can reach up to 20 GiB/s and approximately 640,000 IOPS.

  Scott Fadden, Senior HPC Solutions Architect at Sycomp, a systems integrator that tested the instances, noted a hardware difference from earlier Compute Engine families: C4N ships with two 200 gigabit Ethernet (GbE) network interfaces rather than one. "That architectural shift is significant. It means we can dedicate both networks entirely to storage traffic, doubling the available bandwidth for data-intensive workloads, and achieving 2x storage performance over the previous generation," Fadden said.

  In Sycomp's testing, a cluster of ten C4N storage servers achieved 195 GiB/s of sustained read and write throughput, which Fadden described as 97% of the theoretical ceiling with no platform-specific tuning applied. A three-server configuration reached 58.5 GiB/s on both read and write. Google Cloud's published per-instance maximum for Hyperdisk Balanced on C4N is 20 GiB/s.

  ## How C4N differs from C4

  Google Cloud distinguishes C4N from its general-purpose C4 family by optimizing for predictable performance under sustained network and storage demand rather than raw compute throughput. In internal testing comparing the two families, Google Cloud reported that C4N delivered up to 1.5 times more Nginx web server requests per second for typical request sizes and up to 45% better MySQL database query throughput when data resides primarily on disk.

  The company said C4N is designed to let customers size instances to their compute requirements without over-provisioning vCPUs solely to unlock higher network or storage bandwidth tiers.

  ## Customer and partner accounts

  Ericsson tested C4N for 5G Core workloads running in a public cloud environment. "5G Core workloads are inherently network-heavy, demanding high-throughput packet processing and deterministic latency that standard public cloud instances often struggle to maintain at scale," said Eric Parsons, VP and Head of Ericsson On-Demand. Parsons said C4N enabled Ericsson On-Demand to reach a one terabit-per-second (Tbps) throughput milestone while meeting carrier-grade reliability requirements.

  Teradata said C4N is suited to its Autonomous Knowledge Platform, which runs production AI, analytics, and large datasets in a single integrated system. "Customers rely on Teradata to run mission-critical, highly I/O-intensive workloads where performance and cost control directly determine value," said Kevin Dougherty, Senior Director of Product Management for Teradata's core platform.

  NetApp is extending support for Google Cloud NetApp Volumes to the C4N family, targeting AI workloads that require more bandwidth between compute and storage services. "Together, we're delivering data-in-place AI and analytics solutions that simplify architectures, maximize performance, and turn data into impact," said Pravjit Tiwana, Senior Vice President and General Manager of Cloud Storage and Services at NetApp.

  Intel, whose Emerald Rapids processors and custom Infrastructure Processing Unit (IPU) underpin C4N, said the product demonstrates how silicon and cloud infrastructure design can be combined to serve I/O-intensive environments. "With Intel Xeon and Custom Infrastructure Processing Unit (IPU), C4N delivers the performance and efficiency needed for demanding network optimized environments," said Srini Krishna, Intel Fellow, Data Centre Products at Intel.

  ## What the launch means

  C4N extends Google Cloud's Compute Engine portfolio to cover workloads where standard cloud instances have historically struggled to deliver consistent network and storage performance at scale, a gap Ericsson flagged explicitly in its account of 5G Core deployments. By offloading network and storage functions to dedicated Titanium hardware, Google Cloud decouples I/O capacity from vCPU count, giving customers running bandwidth-constrained workloads the option to select instance sizes based on compute needs rather than bandwidth tiers.

  Sycomp said C4N was already active in its test environment shortly after the announcement, and that further configuration work could close the remaining gap between the 195 GiB/s result its ten-server cluster achieved and the 200 GiB/s theoretical ceiling.
body_zh: |
  Google Cloud 宣布 C4N 虛擬機器系列正式在 Compute Engine 上全面開放，鎖定需要高網路吞吐量或大量區塊儲存讀寫的工作負載，涵蓋資料庫、網路設備、數據分析，以及部分人工智慧推論任務。

  這款新虛擬機器系列採用第五代 Intel Xeon 可擴充處理器（開發代號 Emerald Rapids），並建構於 Google Cloud 的 Titanium 卸載架構之上——此架構將網路與儲存處理工作轉移至專用硬體，不再佔用主要運算核心資源。C4N 可從 2 個虛擬 CPU（vCPU）擴充至 192 個 vCPU，記憶體配置最高可達 1.5 TB。

  ## 規格說明

  C4N 在滿規格配置下，網路頻寬最高可達 400 Gbps，每秒封包處理量最高達 9,500 萬個，搭配 Google Cloud 最高效能區塊儲存層 Hyperdisk Extreme 時，區塊儲存吞吐量最高可達每秒 25 GiB，IOPS 更可突破每秒百萬次。

  在 2 至 16 個 vCPU 的配置區間內，C4N 提供 25 Gbps 至 50 Gbps 的網路頻寬。對外（egress）網際網路頻寬最高可達 200 Gbps，對外封包處理量每秒最多可達 4,800 萬個。

  ## 儲存整合

  C4N 支援完整的 Hyperdisk 產品組合，涵蓋 Balanced、Balanced High Availability、Extreme、Throughput 及 ML 等儲存層級。搭配 Hyperdisk Balanced 時，執行個體最高可達每秒 20 GiB 吞吐量及約 64 萬 IOPS。

  曾測試 C4N 執行個體的系統整合商 Sycomp 資深高效能運算解決方案架構師 Scott Fadden 指出，C4N 在硬體架構上與先前的 Compute Engine 系列有所不同：C4N 配備兩張 200 GbE 網路介面卡，而非僅有一張。他表示：「這項架構上的轉變意義重大。這代表我們可以將兩個網路完全專用於儲存流量，讓資料密集型工作負載的可用頻寬倍增，儲存效能較上一代提升兩倍。」

  在 Sycomp 的測試中，由十台 C4N 儲存伺服器組成的叢集達到了每秒 195 GiB 的持續讀寫吞吐量。Fadden 形容這已達到理論上限的 97%，且無需針對平台進行任何特殊調校。三台伺服器的配置則在讀取與寫入雙向均達到每秒 58.5 GiB。Google Cloud 公開的 C4N 搭配 Hyperdisk Balanced 單一執行個體最大值為每秒 20 GiB。

  ## C4N 與 C4 的差異

  Google Cloud 將 C4N 與通用型 C4 系列加以區隔，強調 C4N 的最佳化目標在於在持續性網路與儲存負載下提供穩定可預測的效能，而非追求原始運算吞吐量。在兩個系列的內部比較測試中，Google Cloud 表示，對於一般請求大小，C4N 每秒處理的 Nginx 網頁伺服器請求數最多提升 1.5 倍；當資料主要存放於磁碟時，MySQL 資料庫查詢吞吐量則提升最多 45%。

  Google Cloud 表示，C4N 的設計理念是讓客戶依照實際運算需求選擇執行個體規格，無需為了解鎖更高的網路或儲存頻寬層級而過度配置 vCPU。

  ## 客戶與合作夥伴實測回饋

  愛立信（Ericsson）針對在公有雲環境中執行的 5G 核心網路工作負載測試了 C4N。Ericsson On-Demand 副總裁暨負責人 Eric Parsons 表示：「5G 核心網路工作負載本質上就是網路密集型任務，需要高吞吐量的封包處理能力，以及標準公有雲執行個體在大規模部署時往往難以維持的確定性低延遲。」他說，C4N 讓 Ericsson On-Demand 得以達成每秒 1 Tbps（Terabit）的吞吐量里程碑，同時符合電信級的可靠性要求。

  Teradata 表示，C4N 非常適合其 Autonomous Knowledge Platform——該平台在單一整合系統中同時執行生產環境 AI、數據分析與大型資料集。Teradata 核心平台產品管理資深總監 Kevin Dougherty 表示：「客戶仰賴 Teradata 執行關鍵任務型、高 I/O 密集度的工作負載，在這類場景中，效能與成本控管直接決定了價值所在。」

  NetApp 宣布將 Google Cloud NetApp Volumes 的支援範圍延伸至 C4N 系列，目標是滿足需要在運算與儲存服務之間傳輸更大頻寬的 AI 工作負載。NetApp 雲端儲存暨服務事業部資深副總裁兼總經理 Pravjit Tiwana 表示：「我們攜手打造資料就地 AI 與數據分析解決方案，簡化架構、極大化效能，讓資料真正轉化為實質影響力。」

  C4N 的底層採用 Intel 的 Emerald Rapids 處理器與客製化基礎設施處理單元（IPU）。Intel 表示，此產品展示了晶片與雲端基礎設施設計如何結合，以服務 I/O 密集型環境。Intel 資料中心產品 Intel Fellow Srini Krishna 表示：「透過 Intel Xeon 與客製化基礎設施處理單元（IPU），C4N 為嚴苛的網路最佳化環境提供了所需的效能與效率。」

  ## 此次發布的意義

  C4N 擴展了 Google Cloud Compute Engine 的產品組合，補足了標準雲端執行個體長期以來在大規模部署中難以穩定提供一致網路與儲存效能的缺口——愛立信在其 5G 核心網路部署的說明中也明確指出了這一痛點。透過將網路與儲存功能卸載至專用的 Titanium 硬體，Google Cloud 將 I/O 容量與 vCPU 數量脫鉤，讓受頻寬瓶頸限制的工作負載客戶，得以依照實際運算需求選擇執行個體大小，而非被迫依據頻寬層級進行選擇。

  Sycomp 表示，C4N 在發布公告後不久即已在其測試環境中上線運行，並指出進一步的組態調校有望縮小目前十台伺服器叢集測得的 195 GiB/s 與 200 GiB/s 理論上限之間的差距。
date: "2026-07-11"
source_published: "2026-07-10T00:15:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Google Cloud", "Intel"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google Cloud launches C4N virtual machines for heavy I/O (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/google-cloud-launches-c4n-virtual-machines-for-heavy-i-o"
    title: "Google Cloud launches C4N virtual machines for heavy I/O"
    trust: 3
    type: primary
    published_at: "2026-07-10T00:15:00.000Z"
  - url: "https://datacenternews.asia/story/google-cloud-launches-c4n-virtual-machines-for-heavy-i-o"
    title: "Google Cloud launches C4N virtual machines for heavy I/O"
    trust: 3
    type: corroborating
    published_at: "2026-07-10T00:15:00.000Z"
---
