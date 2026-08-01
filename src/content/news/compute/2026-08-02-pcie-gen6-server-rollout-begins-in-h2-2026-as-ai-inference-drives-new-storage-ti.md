---
title_en: "PCIe Gen6 Server Rollout Begins in H2 2026 as AI Inference Drives New Storage Tier"
title_zh: "PCIe Gen6 伺服器 2026 下半年登場，AI 推論催生新儲存層架構"
summary_en: "Server platforms will begin supporting PCIe Gen6 speeds in the second half of 2026, doubling per-lane bandwidth over Gen5 and enabling new storage architectures for AI inference and KV cache workloads; Gen5 storage is expected to remain relevant for budget-constrained deployments through the transition."
summary_zh: "2026 年下半年起，伺服器平台將開始支援 PCIe Gen6 規格，每通道頻寬較 Gen5 翻倍，並為 AI 推論及 KV 快取工作負載帶來全新儲存架構；在此過渡期間，預算受限的部署環境仍預計持續倚重 Gen5 儲存設備。"
body_en: |
  Server platforms will begin supporting PCIe Generation 6 (Gen6) speeds in the second half of 2026, marking the first major interface transition for servers since AMD's EPYC 9004 "Genoa" processors introduced PCIe Generation 5 (Gen5) in 2022, with AI inference workloads driving a shift in storage architecture. Despite the transition, Gen5 storage is expected to remain a significant part of AI infrastructure, according to ServeTheHome, which based the analysis on information from SSD controller maker Silicon Motion.

  AI inference — running trained models to generate outputs — has grown rapidly enough that most industry forecasts project it is becoming the dominant data center workload, displacing training workloads that previously drove infrastructure investment, the report states.

  ## CPU platforms bringing Gen6

  Several processor families will introduce PCIe Gen6 support beginning in the second half of 2026, according to the report. These include AMD EPYC Venice, NVIDIA Vera, and Arm's AGI CPU, as well as several hyperscaler-designed chips. Intel's Xeon 7 "Diamond Rapids" is on the list but is not expected until 2027.

  ## Gen6 bandwidth and its storage implications

  PCIe Gen6 doubles the data transfer rate per lane compared with Gen5. A single PCIe Gen6 x16 slot — using 16 lanes — delivers 800 gigabits per second (Gbps) of network bandwidth, equivalent to roughly the throughput of 32 PCIe Gen3 NVMe solid-state drives across 128 lanes, according to ServeTheHome. Modern servers can carry 8 to 10 such links, and each GPU in a system may have 800Gbps to 1.2 terabits per second (Tbps) of bandwidth available.

  Higher lane bandwidth reduces latency penalties when storage tiers extend beyond the immediate host, which matters for distributed AI inference workloads spanning multiple systems, the report states.

  The bandwidth increase also changes how architects allocate lanes inside a server. With Gen6, designers can attach more devices over narrower x2 connections rather than x4 connections and still match Gen5 throughput per device, or route the full bandwidth to fewer devices for higher per-device performance. A generational comparison in the report illustrates cumulative gains across three interface generations: a single 2026 PCIe Gen6 SSD delivers approximately the throughput of eight early-2021 PCIe Gen3 NVMe drives.

  ## AI storage tiers and KV cache demand

  The shift to inference at scale has created distinct storage tiers inside AI infrastructure. ServeTheHome describes high-capacity flash for model training, lower-capacity but high-performance storage within GPU compute nodes, and fast shared storage for KV cache and agentic AI workloads. KV cache stores intermediate AI computation states to avoid reprocessing prior context, and its demands are large enough that NVIDIA has developed a dedicated architecture called CMX (Context Memory eXtension). CMX moves KV cache data out of HBM — high-bandwidth memory, the on-accelerator memory mounted directly on AI chips — and across machine boundaries into network-attached storage, allowing AI workloads to span multiple systems without exhausting the most constrained memory tier, according to the report.

  ## Silicon Motion's Gen6 controller

  Silicon Motion, which designs controllers used by SSD manufacturers and which has an advertising relationship with ServeTheHome, provided the technical specifications underlying the report. The company's SM8466 PCIe Gen6 controller supports a PCIe Gen6 x4 interface and exceeds 28 gigabytes per second (GB/s) sequential read performance with over 7 million random input/output operations per second (IOPS), the company says — approximately twice the throughput of its PCIe Gen5 SM8366 controller.

  Silicon Motion says the SM8466 targets NVIDIA CMX and KV cache extension use cases. It supports SR-IOV (Single Root I/O Virtualization, which allows one physical device to present as multiple virtual devices to host software), Multi Physical Function isolation for separating tenant workloads, and NVMe 2.0 Flexible Data Placement, a standard that gives the host more control over how data is organized on flash media. Silicon Motion says all three features are also present in its Gen5 controllers.

  ServeTheHome notes it has not yet tested a finished SM8466-based SSD, and that actual performance depends on the SSD manufacturer's design, firmware, host platform, and software stack.

  ## Gen5 storage and the budget constraint

  Despite the Gen6 transition beginning in the second half of 2026, Gen5 storage is expected to remain a significant part of AI infrastructure. Budget constraints and what ServeTheHome describes as a highly supply-constrained environment mean that organizations deploying AI inference clusters, KV cache architectures, and existing platforms will continue to rely on Gen5 storage through the transition period.

  Gen5 controllers, including Silicon Motion's SM8366, carry the same SR-IOV, Multi Physical Function, and NVMe 2.0 Flexible Data Placement features as the Gen6 SM8466, making them capable of supporting AI inference and KV cache workloads on current platforms.

  Intel's Xeon 7 Diamond Rapids, the last major CPU family on the Gen6 list, is not expected until 2027, meaning Gen6 adoption in Intel-based server environments will trail AMD EPYC Venice, NVIDIA Vera, and Arm AGI CPU platforms by at least six months.
body_zh: |
  伺服器平台將於 2026 年下半年開始支援 PCI Express 第六代（Gen6）規格，這是自 AMD EPYC 9004「Genoa」處理器於 2022 年引入 PCIe 第五代（Gen5）以來，伺服器領域最重大的介面世代更迭，而 AI 推論工作負載也正推動儲存架構的全面轉型。儘管如此，根據 ServeTheHome 援引固態硬碟控制器廠商慧榮科技（Silicon Motion）資料所做的分析，Gen5 儲存設備預計仍將在 AI 基礎架構中扮演舉足輕重的角色。

  AI 推論——即運行已訓練模型以產生輸出結果——成長速度之快，已使多數產業預測皆指向其正逐漸成為資料中心的主導工作負載，並取代過去引領基礎架構投資的訓練工作負載，報告如此指出。

  ## 搭載 Gen6 的 CPU 平台

  根據報告，多個處理器家族將於 2026 年下半年起陸續導入 PCIe Gen6 支援，包括 AMD EPYC Venice、輝達（NVIDIA）Vera、Arm 的 AGI CPU，以及多款超大規模雲端業者自行設計的晶片。英特爾（Intel）的 Xeon 7「Diamond Rapids」雖在名單之列，但預計要到 2027 年才會推出。

  ## Gen6 頻寬及其對儲存的影響

  PCIe Gen6 每通道的資料傳輸率是 Gen5 的兩倍。根據 ServeTheHome 的說明，單一 PCIe Gen6 x16 插槽——使用 16 條通道——可提供每秒 800 Gbps 的網路頻寬，相當於 32 顆 PCIe Gen3 NVMe 固態硬碟跨越 128 條通道的總吞吐量。現代伺服器可搭載 8 至 10 條這樣的鏈路，每顆 GPU 可獲得每秒 800 Gbps 至 1.2 Tbps 的可用頻寬。

  更高的通道頻寬能降低儲存層延伸至直接主機以外時所帶來的延遲損失，這對跨越多個系統運作的分散式 AI 推論工作負載而言至關重要，報告如此說明。

  頻寬的提升也改變了架構師在伺服器內部分配通道的方式。在 Gen6 時代，設計師可以採用更窄的 x2 連接而非 x4 連接來接入更多裝置，仍可匹敵 Gen5 每部裝置的吞吐量；或者將全部頻寬集中到少數裝置，以追求更高的單裝置效能。報告中列舉了三個介面世代的累積效能比較：一顆 2026 年的 PCIe Gen6 固態硬碟，其吞吐量大約等同於八顆 2021 年初的 PCIe Gen3 NVMe 固態硬碟。

  ## AI 儲存層與 KV 快取需求

  大規模推論的興起，在 AI 基礎架構內部催生了截然不同的儲存層次。ServeTheHome 描述了三個層次：用於模型訓練的大容量快閃儲存、GPU 運算節點內部較低容量但高效能的儲存，以及用於 KV 快取與代理式 AI 工作負載的高速共享儲存。KV 快取用於儲存 AI 運算的中間狀態，以避免重複處理先前的上下文脈絡，其需求規模之大，促使輝達（NVIDIA）專門開發了一套稱為 CMX（Context Memory eXtension，上下文記憶體延伸）的專屬架構。根據報告，CMX 將 KV 快取資料從 HBM——高頻寬記憶體，即直接封裝於 AI 晶片上的加速器記憶體——移出，透過跨機器邊界的方式傳送至網路附加儲存裝置，讓 AI 工作負載得以跨越多個系統運行，而不至於耗盡最受限制的記憶體層。

  ## 慧榮科技的 Gen6 控制器

  慧榮科技（Silicon Motion）設計的控制器廣泛被固態硬碟製造商採用，該公司與 ServeTheHome 之間存在廣告合作關係，並提供了本報告所依據的技術規格。慧榮科技的 SM8466 PCIe Gen6 控制器支援 PCIe Gen6 x4 介面，循序讀取效能超過每秒 28 GB，隨機讀寫的每秒輸入／輸出操作次數（IOPS）超過 700 萬次——約為其 PCIe Gen5 SM8366 控制器兩倍的吞吐量，該公司表示。

  慧榮科技指出，SM8466 的目標應用場景正是輝達 CMX 與 KV 快取延伸使用案例。它支援 SR-IOV（單根輸入／輸出虛擬化，允許單一實體裝置以多個虛擬裝置的形式呈現給主機軟體）、用於隔離租戶工作負載的多實體功能（Multi Physical Function）隔離，以及 NVMe 2.0 彈性資料放置（Flexible Data Placement）標準——後者讓主機能更靈活地控制資料在快閃媒體上的組織方式。慧榮科技表示，以上三項功能在其 Gen5 控制器中同樣具備。

  ServeTheHome 特別說明，目前尚未測試任何基於 SM8466 的量產固態硬碟，實際效能將取決於固態硬碟製造商的設計、韌體、主機平台及軟體堆疊。

  ## Gen5 儲存與預算限制

  儘管 Gen6 過渡期將於 2026 年下半年展開，Gen5 儲存設備預計仍將在 AI 基礎架構中持續占有一席之地。預算限制，以及 ServeTheHome 所描述的高度供應受限環境，意味著正在部署 AI 推論叢集、KV 快取架構及現有平台的各組織，將在過渡期間持續倚重 Gen5 儲存設備。

  Gen5 控制器，包括慧榮科技的 SM8366，同樣具備 SR-IOV、多實體功能隔離及 NVMe 2.0 彈性資料放置等功能，使其完全有能力在現有平台上支援 AI 推論與 KV 快取工作負載。

  英特爾 Xeon 7 Diamond Rapids 是 Gen6 名單上最後一個重量級 CPU 家族，預計要到 2027 年才會推出，這意味著英特爾伺服器環境中 Gen6 的導入進度，將落後 AMD EPYC Venice、輝達 Vera 及 Arm AGI CPU 平台至少六個月。
date: "2026-08-02"
source_published: "2026-08-01T02:00:19.000Z"
category: "compute"
secondary_categories: ["networking"]
updates: "compute/2026-07-12-aic-unveils-32-bay-pcie-gen6-jbof-server-for-nvidia-vera-rubin-kv-cache"
region: []
vendor: ["AMD", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: PCIe Gen6 and Gen5 Will Both Matter for AI Storage (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/pcie-gen6-and-gen5-will-both-matter-for-ai-storage/"
    title: "PCIe Gen6 and Gen5 Will Both Matter for AI Storage"
    trust: 3
    type: primary
    published_at: "2026-08-01T02:00:19.000Z"
---
