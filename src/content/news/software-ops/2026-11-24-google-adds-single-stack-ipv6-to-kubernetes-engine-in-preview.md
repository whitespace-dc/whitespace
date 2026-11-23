---
title_en: "Google adds single-stack IPv6 to Kubernetes Engine in preview"
title_zh: "Google 為 Kubernetes Engine 推出單棧 IPv6 預覽功能"
summary_en: "Google has launched a preview of single-stack IPv6 support for Google Kubernetes Engine, letting nodes and pods run without private IPv4 addresses on Cloud TPU v6e and CPU node pools. The feature targets IP address exhaustion in large AI clusters, where accelerator node counts and inference workloads can consume RFC 1918 private address space faster than compute or power limits are reached."
summary_zh: "Google 宣布 Google Kubernetes Engine 支援單棧 IPv6，讓節點與 Pod 無需私有 IPv4 位址即可運作，首波支援 Cloud TPU v6e 與多款 CPU 機型，主要針對大型 AI 叢集中 IP 位址耗盡的問題。"
body_en: |
  Google has introduced single-stack IPv6 support for Google Kubernetes Engine (GKE), its managed container orchestration service, making the feature available in preview on GKE version 1.37.1-gke.3020000. Under the new model, cluster nodes and pods run on IPv6 only, with no requirement for private IPv4 addresses.

  The immediate driver is IP address exhaustion in large-scale artificial intelligence deployments. As operators add accelerator nodes, inference replicas, Ray workers, and sidecar services to AI clusters, demand for private IPv4 addresses — defined by RFC 1918, the standard governing non-routable private IP ranges — can outpace compute and power constraints. Single-stack IPv6 removes that ceiling by assigning each node a /112 pod range, a block equivalent to 65,536 addresses. Standard GKE limits on the maximum number of pods per node still apply.

  Workloads running on the new configuration access Google Cloud APIs over native IPv6. For services that remain IPv4-only, the deployment uses DNS64 and NAT64, protocol translation mechanisms that allow IPv6 clients to initiate connections to IPv4 endpoints without requiring dual-stack addressing on the cluster side.

  ## Supported hardware and machine families

  At preview, single-stack IPv6 is available on Cloud TPU v6e — Google's sixth-generation tensor processing unit, also known as Trillium — and on the following CPU-based machine families: E2, N1, N2, N2D, N4, C3, C3D, C4, C4D, C4A, and Z3. Axion-based CPU node pools are also supported. Axion is Google's Arm-based custom processor.

  ## Network topology changes

  Eliminating RFC 1918 addresses from nodes and pods removes a source of address-space conflicts with on-premises networks, peered virtual private clouds (VPCs), and adjacent clusters, according to Google. It also removes the need to run network address translation (NAT) inside the cluster itself. When every pod carries a unique, globally routable IPv6 address, intra-cluster NAT is unnecessary. Google said this simplifies telemetry collection, network policy management, and debugging.

  ## Performance

  Google said internal testing found pod lifecycle performance at parity with IPv4 for burst scheduling and container network interface (CNI) sandbox setup. CNI is the standard plugin interface for attaching network connectivity to containers in Kubernetes. Inter-node TCP and UDP latency and multi-stream pod-to-pod throughput also matched IPv4 in those tests, the company said.

  For service handling and DNS resolution, Google said eBPF-based service load balancing and NodeLocalDNS — a GKE component that caches DNS responses locally on each node — showed no measurable overhead compared with standard IPv4.

  ## Deployment requirements

  Creating an IPv6-only cluster requires the following prerequisites:

  - A VPC with internal IPv6 enabled
  - A DNS64 policy applied to the network
  - A regional Cloud Router
  - A Cloud NAT gateway configured for NAT64

  ## Industry context

  The addition of single-stack IPv6 reflects sustained pressure on cloud network design as AI workloads drive rapid cluster growth. Dual-stack configurations, which assign both IPv4 and IPv6 addresses to nodes and pods, can extend the life of existing deployments but still consume private IPv4 space, which many organizations have already committed heavily across internal networks. Single-stack IPv6 eliminates that dependency entirely for new clusters, though it introduces a dependency on DNS64 and NAT64 infrastructure for backward compatibility with IPv4 services.

  The preview is live now on GKE version 1.37.1-gke.3020000.
body_zh: |
  ## Google 為 Kubernetes Engine 推出單棧 IPv6 預覽功能

  Google 宣布旗下受管容器協調服務 Google Kubernetes Engine（GKE）正式支援單棧 IPv6，目前以預覽版形式在 GKE 1.37.1-gke.3020000 版本上線。在新架構下，叢集節點與 Pod 僅使用 IPv6 運作，不再需要私有 IPv4 位址。

  此功能推出的直接背景，是大規模人工智慧部署帶來的 IP 位址耗盡壓力。隨著業者持續在 AI 叢集中增加加速器節點、推論副本、Ray 工作節點及 sidecar 服務，對私有 IPv4 位址的需求——亦即 RFC 1918 所定義、用於不可路由私有網路範圍的位址標準——往往在運算與電力資源尚未觸頂之前，就已消耗殆盡。單棧 IPv6 為每個節點分配一個 /112 的 Pod 位址區段，相當於 65,536 個位址，徹底移除此一上限。GKE 對每個節點最大 Pod 數量的標準限制仍然適用。

  在新設定下執行的工作負載，可透過原生 IPv6 存取 Google Cloud API。若遇到仍僅支援 IPv4 的服務，部署架構則透過 DNS64 與 NAT64 這兩種協定轉換機制，讓 IPv6 用戶端得以連線至 IPv4 端點，而無需在叢集端採用雙棧定址。

  ## 支援的硬體與機型系列

  預覽階段，單棧 IPv6 支援 Cloud TPU v6e——即 Google 第六代張量處理器，也稱為 Trillium——以及下列 CPU 機型系列：E2、N1、N2、N2D、N4、C3、C3D、C4、C4D、C4A 與 Z3。以 Axion 為基礎的 CPU 節點集區同樣受到支援；Axion 是 Google 自家研發、基於 Arm 架構的客製化處理器。

  ## 網路拓樸的變化

  Google 表示，將 RFC 1918 位址從節點與 Pod 中移除，可消除與地端網路、對等虛擬私有雲（VPC）及相鄰叢集之間的位址空間衝突。同時，叢集內部也不再需要執行網路位址轉換（NAT）。當每個 Pod 都擁有唯一且可全球路由的 IPv6 位址時，叢集內的 NAT 便成多餘。Google 指出，這將簡化遙測資料收集、網路政策管理及問題排查的作業。

  ## 效能表現

  Google 表示，內部測試結果顯示，在突發排程與容器網路介面（CNI）沙箱建立方面，Pod 生命週期效能與 IPv4 相當。CNI 是 Kubernetes 中為容器接入網路連線的標準外掛介面。在節點間 TCP 與 UDP 延遲，以及多串流 Pod 對 Pod 的吞吐量方面，測試數據同樣與 IPv4 持平。

  在服務處理與 DNS 解析方面，Google 表示基於 eBPF 的服務負載平衡，以及 GKE 在每個節點上本地快取 DNS 回應的元件 NodeLocalDNS，與標準 IPv4 相比均未出現可量測的效能損耗。

  ## 部署需求

  建立純 IPv6 叢集需具備以下先決條件：

  - 已啟用內部 IPv6 的 VPC
  - 套用至該網路的 DNS64 政策
  - 區域性 Cloud Router
  - 設定為 NAT64 的 Cloud NAT 閘道

  ## 產業背景

  單棧 IPv6 的加入，反映出隨著 AI 工作負載帶動叢集規模快速擴張，雲端網路設計所承受的持續壓力。雙棧設定雖然同時為節點與 Pod 分配 IPv4 與 IPv6 位址，可延長現有部署的使用壽命，但仍會消耗私有 IPv4 空間；而許多企業早已在內部網路中大量佔用這些位址。單棧 IPv6 能讓新建叢集徹底擺脫對私有 IPv4 的依賴，但相對地，也引入了對 DNS64 與 NAT64 基礎設施的依賴，以維持與 IPv4 服務的回溯相容性。

  此預覽功能已於 GKE 1.37.1-gke.3020000 版本正式上線。
date: "2026-11-24"
source_published: "2026-11-23T17:30:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Google Cloud"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google adds single-stack IPv6 to Kubernetes Engine (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenternews.asia/story/google-adds-single-stack-ipv6-to-kubernetes-engine"
    title: "Google adds single-stack IPv6 to Kubernetes Engine"
    trust: 3
    type: primary
    published_at: "2026-11-23T17:30:00.000Z"
  - url: "https://datacenter.news/story/google-adds-single-stack-ipv6-to-kubernetes-engine"
    title: "Google adds single-stack IPv6 to Kubernetes Engine"
    trust: 3
    type: corroborating
    published_at: "2026-11-23T17:30:00.000Z"
---
