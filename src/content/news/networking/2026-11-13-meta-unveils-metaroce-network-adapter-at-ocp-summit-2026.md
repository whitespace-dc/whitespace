---
title_en: "Meta Unveils MetaRoCE Network Adapter at OCP Summit 2026"
title_zh: "Meta發表MetaRoCE網路介面卡　開放RDMA瞄準百萬GPU叢集"
summary_en: "Meta displayed its MetaRoCE network adapter at OCP Summit 2026, presenting an open RDMA transport protocol designed to run on commodity Ethernet hardware and scale to million-GPU training clusters. The adapter was demonstrated on an AMD Pensando NIC and targets multi-vendor deployability."
summary_zh: "Meta於2026年OCP峰會展示MetaRoCE網路介面卡，推出一套開放式RDMA傳輸協定，可在商用乙太網路硬體上運行，目標是擴展至百萬GPU規模的AI訓練叢集。該介面卡在AMD Pensando網路介面卡系列上進行實機展示，以跨廠商可部署性為核心設計理念。"
body_en: |
  Meta presented its MetaRoCE network adapter at OCP Summit 2026, showcasing an open remote direct memory access (RDMA) transport protocol built to run across commodity Ethernet infrastructure and multiple hardware vendors.

  The physical adapter on display at the Meta booth was an OCP NIC 3.0 form-factor card with an SFF pull-tab connector. OCP NIC 3.0 is an Open Compute Project standard for server network interface cards.

  ## What MetaRoCE does

  Meta described MetaRoCE as an RDMA transport layer — a networking protocol that allows one computer to read and write another's memory directly, bypassing the CPU, which is critical for high-speed AI training workloads. Meta said the protocol includes per-path reliability and congestion control, receiver rate hints (RCN) for fast incast convergence, tolerance for packet loss and reordering, and the ability to carry multiple streams over multiple network paths through a single queue pair (QP).

  Congestion control refers to mechanisms that prevent network bottlenecks when many senders transmit simultaneously. Incast convergence describes how quickly a network recovers when many-to-one traffic patterns cause congestion.

  The protocol runs on standard Ethernet using explicit congestion notification (ECN) and equal-cost multi-path (ECMP) routing, requiring no specialized switching hardware, Meta said. ECN allows network devices to signal congestion without dropping packets; ECMP distributes traffic across multiple equal-cost paths.

  ## Multi-vendor approach

  Before OCP Summit, Meta demonstrated MetaRoCE on the AMD Pensando NIC series, according to ServeTheHome. Meta said the programmability of that hardware allowed it to implement the protocol without dedicated silicon, a design choice that positions the company to source adapters from multiple vendors rather than a single supplier.

  ## Scale target

  Meta said it is developing MetaRoCE to scale to million-GPU training clusters while remaining compatible with different network topologies and hardware platforms. AI training at that scale requires extremely high-bandwidth, low-latency interconnects, and existing proprietary RDMA transports have typically required purpose-built network infrastructure.

  ## Industry significance

  By publishing MetaRoCE at OCP Summit — the Open Compute Project conference Meta helped found — the company is positioning the protocol as a potential open standard for AI networking, available to other operators who want RDMA performance without locking into a specific vendor's switching or NIC ecosystem. Whether other hyperscalers or hardware vendors adopt the protocol remains to be seen; Meta has not announced formal standardization efforts or external partnerships beyond the AMD Pensando demonstration.
body_zh: |
  Meta於2026年OCP峰會展示其MetaRoCE網路介面卡，推出一套開放式遠端直接記憶體存取（RDMA）傳輸協定，設計上可在商用乙太網路基礎架構上運行，並支援多家硬體廠商的設備。

  Meta展示台上的實體介面卡採用OCP NIC 3.0規格，配備SFF拉片式連接器。OCP NIC 3.0是開放運算計畫（Open Compute Project）針對伺服器網路介面卡所訂定的開放標準。

  ## MetaRoCE的功能

  Meta將MetaRoCE定位為RDMA傳輸層——一種允許一台電腦直接讀寫另一台電腦記憶體、繞過CPU的網路協定，對於高速AI訓練工作負載至關重要。Meta表示，此協定具備以下特性：逐路徑可靠性與壅塞控制、用於加快多對一流量快速收斂的接收端速率提示（RCN）、封包遺失與亂序容忍能力，以及透過單一佇列對（QP）在多條網路路徑上承載多組資料串流的能力。

  壅塞控制是指在多個傳送端同時傳輸時，防止網路發生瓶頸的機制。多對一流量收斂（incast convergence）則描述網路在多對一流量模式造成壅塞後，恢復正常運作所需的速度。

  此協定在標準乙太網路上運行，採用顯式壅塞通知（ECN）與等價多路徑（ECMP）路由，無需專用交換硬體，Meta表示。ECN允許網路設備在不丟棄封包的情況下發送壅塞訊號；ECMP則將流量分散至多條等價路徑上。

  ## 多廠商策略

  根據ServeTheHome的報導，在OCP峰會召開之前，Meta已在AMD Pensando NIC系列上完成MetaRoCE的展示。Meta表示，該硬體的可程式化特性，使其得以在不需要專用晶片的情況下實作此協定——這項設計選擇讓Meta日後得以向多家廠商採購網路介面卡，不必依賴單一供應商。

  ## 規模目標

  Meta表示，MetaRoCE的開發目標是擴展至百萬GPU訓練叢集的規模，同時相容於不同的網路拓撲與硬體平台。在如此規模下進行AI訓練，需要極高頻寬、極低延遲的互連技術，而現有的專有RDMA傳輸協定通常需要搭配專門打造的網路基礎架構。

  ## 產業意義

  Meta選擇在OCP峰會——即Meta協助創立的開放運算計畫年度大會——上公開MetaRoCE，此舉意在將此協定定位為AI網路領域的潛在開放標準，讓其他希望獲得RDMA效能、同時又不願受限於特定廠商交換器或網路介面卡生態系的業者得以採用。至於其他超大規模雲端業者或硬體廠商是否會跟進採納此協定，目前仍有待觀察；Meta迄今尚未宣布任何正式的標準化計畫，或除AMD Pensando展示以外的對外合作夥伴關係。
date: "2026-11-13"
source_published: "2026-11-12T04:51:39.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["AMD"]
trust:
  score: 3
  reasoning: "Single source: This is the Meta MetaRoCE Network Adapter (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/this-is-the-meta-metaroce-network-adapter/"
    title: "This is the Meta MetaRoCE Network Adapter"
    trust: 3
    type: primary
    published_at: "2026-11-12T04:51:39.000Z"
---
