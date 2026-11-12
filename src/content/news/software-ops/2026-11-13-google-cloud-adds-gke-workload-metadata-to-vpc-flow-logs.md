---
title_en: "Google Cloud adds GKE workload metadata to VPC Flow Logs"
title_zh: "Google Cloud 為 VPC Flow Logs 新增 GKE 工作負載元資料"
summary_en: "Google Cloud has updated VPC Flow Logs to include Google Kubernetes Engine metadata, letting engineers attribute network traffic to specific pods, namespaces, and services rather than transient IP addresses. The feature is available on subnets hosting GKE clusters and surfaces enriched records in a Network Intelligence Centre tool called Flow Analyser."
summary_zh: "Google Cloud 更新 VPC Flow Logs，納入 Google Kubernetes Engine 元資料，讓工程師能將網路流量歸因至特定 Pod、命名空間與服務，不再受限於瞬態 IP 位址。此功能適用於承載 GKE 叢集的子網路，並透過網路智慧中心的 Flow Analyser 工具呈現豐富化紀錄。"
body_en: |
  Google Cloud has added Google Kubernetes Engine (GKE) metadata to VPC Flow Logs, giving operators workload-level attribution for network traffic captured inside Google Cloud's virtual network. The update targets a persistent visibility gap in Kubernetes environments, where pods are temporary and IP addresses shift as workloads scale, fail, or move between nodes.

  Under the new approach, traffic records collected through VPC Flow Logs — Google Cloud's service for recording information about connections traversing a virtual private cloud network — can be annotated with Kubernetes context tied to the IP address at the moment traffic was sampled. That context includes the cluster name and location, pod name, namespace, owning controller, receiving service, and node and zone details at both ends of a flow, Google said.

  Because the metadata is attached when traffic is observed in the virtual network, it remains available even if the pod no longer exists by the time an engineer investigates an incident.

  ## Operational requirements

  The feature is available when VPC Flow Logs are enabled on a subnet hosting a GKE cluster. Customers who want to use the enriched data inside Flow Analyser — a tool in Google's Network Intelligence Centre that presents log records as charts and tables — must meet several additional requirements. Those include upgrading their log bucket to Observability Analytics, enabling VPC Flow Logs at the organisation level for broad subnet coverage, and keeping full metadata enabled so namespace and pod information appears in records.

  Standard GKE clusters require intranode visibility to be turned on; Autopilot clusters, a managed GKE configuration, include that setting by default. Google noted that enabling intranode visibility on Standard clusters restarts control plane and node components and adds per-node overhead, and recommended testing on non-production systems before a production rollout.

  ## What engineers can do with the data

  Google is positioning the feature as a way to improve troubleshooting and architecture analysis without deploying additional agents or sidecars — lightweight proxy processes — inside clusters. The logs are also designed to complement existing observability tools running inside clusters, including Container Network Interface and dataplane monitoring systems.

  For organisations that register GKE workloads in App Hub — Google's service for cataloguing applications across infrastructure — records can also carry application-level labels identifying each endpoint's business application, environment, and criticality. That can be useful when services inside a cluster communicate with external resources also registered in App Hub, such as Cloud Run services.

  Flow Analyser can group and filter traffic by cluster, namespace, workload, pod, or service. Google described several specific uses. Grouping traffic by source and destination GKE workload converts a table of network flows into a dependency map of service-to-service communication, letting engineers read connections in application terms rather than resolving transient IP addresses after the fact. Filtering on a single server workload and aggregating traffic bidirectionally between client and server shows which callers account for the largest share of traffic and how that changes over time; the same view can be switched from volume to latency, ranking callers by round-trip time.

  ## Zone inefficiency detection

  Because VPC Flow Logs include the zone at both ends of each flow, engineers can filter for traffic where the source and destination zones differ, identifying pod pairs generating cross-zone traffic. In regional clusters — those spanning multiple zones within a region — such traffic can indicate avoidable inter-zone data transfer charges as well as added latency. Google said a built-in GKE setting can mitigate this by preferring healthy endpoints in the caller's zone, provided each zone has enough replicas to handle its own load.

  ## Limits

  Google outlined several constraints. Pod-to-internet traffic does not carry pod annotations because the pod IP is replaced by the node IP before a flow is sampled. Traffic blocked by Kubernetes network policy never reaches the virtual network layer and therefore never appears in flow logs; those events must be investigated through NetworkPolicy logging. And because VPC Flow Logs are sampled rather than exhaustive, byte and packet counts are suited to ranking and trend analysis rather than precise per-connection accounting.

  ## Industry context

  The release is part of a broader pattern among cloud providers working to make Kubernetes networking inspectable at the workload level as operators manage distributed applications built from short-lived components. The practical value of the feature will depend on how widely customers enable the logging, analytics, and cluster settings required to surface the data, Google acknowledged. For customers already using VPC Flow Logs, Google said the simplest path forward is to upgrade the default logging bucket and begin analysis in Flow Analyser.
body_zh: |
  Google Cloud 已將 Google Kubernetes Engine（GKE）元資料整合至 VPC Flow Logs，讓操作人員能對 Google Cloud 虛擬網路內擷取的網路流量進行工作負載層級的歸因。此次更新針對的是 Kubernetes 環境中長期存在的可視性缺口——由於 Pod 具有暫時性，工作負載在擴展、故障或於節點間遷移時，IP 位址也隨之不斷變動。

  在新機制下，透過 VPC Flow Logs（Google Cloud 用於記錄穿越虛擬私有雲網路之連線資訊的服務）所收集的流量紀錄，可在流量被取樣的當下，以當時對應該 IP 位址的 Kubernetes 情境加以標註。Google 表示，這些情境資訊涵蓋叢集名稱與位置、Pod 名稱、命名空間、擁有控制器、接收服務，以及連線兩端的節點與可用區詳細資訊。

  由於元資料是在虛擬網路觀測到流量時即附加其上，因此即便工程師事後調查事件時 Pod 已不復存在，相關資訊仍可取得。

  ## 操作需求

  此功能需在承載 GKE 叢集的子網路上啟用 VPC Flow Logs 方可使用。若客戶希望在 Flow Analyser（Google 網路智慧中心中以圖表與表格呈現日誌紀錄的工具）內使用豐富化資料，則須符合數項額外條件：包括將日誌值區升級至 Observability Analytics、在組織層級啟用 VPC Flow Logs 以廣泛涵蓋各子網路，以及維持完整元資料啟用狀態，確保命名空間與 Pod 資訊確實出現在紀錄中。

  標準 GKE 叢集需開啟節點內可視性（intranode visibility）；Autopilot 叢集作為一種受管理的 GKE 配置，預設已包含此設定。Google 指出，在標準叢集上啟用節點內可視性將重新啟動控制平面與節點元件，並為每個節點帶來額外的運算負擔，因此建議先在非正式環境測試，再進行正式環境部署。

  ## 工程師能用這些資料做什麼

  Google 將此功能定位為提升故障排除與架構分析能力的方法，且無須在叢集內部署額外的代理程式或 sidecar（輕量級邊車代理程序）。這些日誌也設計為能與叢集內現有的可觀測性工具相輔相成，包括容器網路介面（Container Network Interface）及資料平面監控系統。

  對於在 App Hub（Google 用於跨基礎設施整理應用程式目錄的服務）中登錄 GKE 工作負載的組織，紀錄還可附帶應用程式層級的標籤，標識每個端點所屬的業務應用程式、環境及重要性等級。當叢集內的服務與同樣在 App Hub 中登錄的外部資源（例如 Cloud Run 服務）相互通訊時，此功能尤為實用。

  Flow Analyser 可依叢集、命名空間、工作負載、Pod 或服務對流量進行分組與篩選。Google 描述了數種具體用途：將流量依來源與目的端 GKE 工作負載分組，可將一張網路流量表格轉化為服務間通訊的相依關係圖，讓工程師以應用程式術語直接解讀連線關係，而無須事後逐一解析瞬態 IP 位址。針對單一伺服器工作負載進行篩選，並雙向匯總客戶端與伺服器端之間的流量，可顯示哪些呼叫方佔用最大流量份額及其隨時間的變化情形；同一檢視畫面亦可從流量切換至延遲模式，依往返時間（round-trip time）排列呼叫方順序。

  ## 跨區流量偵測

  由於 VPC Flow Logs 記錄了每筆連線兩端的可用區資訊，工程師可篩選來源與目的可用區不同的流量，找出產生跨區流量的 Pod 配對。在跨越同一區域內多個可用區的區域叢集中，此類流量可能意味著原本可避免的跨區資料傳輸費用，以及額外的網路延遲。Google 表示，GKE 內建一項設定可緩解此問題，做法是優先選擇位於呼叫方同一可用區內的健康端點，前提是每個可用區都有足夠的副本能承載自身的負載。

  ## 限制

  Google 列出了數項限制。Pod 對外連線至網際網路的流量不帶有 Pod 標註，原因在於流量被取樣之前，Pod IP 已被節點 IP 所取代。受 Kubernetes 網路政策封鎖的流量從未抵達虛擬網路層，因此不會出現在流量日誌中；這類事件須透過 NetworkPolicy 日誌另行調查。此外，由於 VPC Flow Logs 採取取樣而非完整記錄的方式，位元組與封包計數更適合用於排名與趨勢分析，而非精確的逐條連線計量。

  ## 產業背景

  此次發布是雲端服務業者更廣泛趨勢的一部分——隨著操作人員管理由短暫元件所構成的分散式應用程式，各大業者持續致力於讓 Kubernetes 網路在工作負載層級具備可檢視性。Google 坦承，此功能的實際價值取決於客戶在多大程度上啟用了呈現這些資料所需的日誌記錄、分析工具及叢集設定。對於已使用 VPC Flow Logs 的客戶，Google 表示最簡便的路徑是升級預設日誌值區，並開始在 Flow Analyser 中進行分析。
date: "2026-11-13"
source_published: "2026-11-12T17:15:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Google Cloud"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google Cloud adds Kubernetes metadata to flow logs (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/google-cloud-adds-kubernetes-metadata-to-flow-logs"
    title: "Google Cloud adds Kubernetes metadata to flow logs"
    trust: 3
    type: primary
    published_at: "2026-11-12T17:15:00.000Z"
  - url: "https://datacenternews.asia/story/google-cloud-adds-kubernetes-metadata-to-flow-logs"
    title: "Google Cloud adds Kubernetes metadata to flow logs"
    trust: 3
    type: corroborating
    published_at: "2026-11-12T17:15:00.000Z"
---
