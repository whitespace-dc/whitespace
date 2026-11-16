---
title_en: "Percona adds high-availability mode to PMM monitoring platform in version 3.10.0"
title_zh: "Percona PMM 3.10.0 推出高可用模式，消除資料庫監控單點故障風險"
summary_en: "Percona has released PMM 3.10.0, introducing a Kubernetes-native high-availability deployment option for its Percona Monitoring and Management platform that eliminates the single point of failure in database monitoring. The architecture runs three PMM servers behind a single address, with automatic failover to keep alerting active if a server, pod, or node fails."
summary_zh: "Percona 發布 PMM 3.10.0，為旗下監控管理平台導入 Kubernetes 原生高可用部署選項，三台伺服器共用單一位址並支援自動失效移轉，徹底消除資料庫監控的單點故障隱患。"
body_en: |
  Percona has released version 3.10.0 of its Percona Monitoring and Management (PMM) platform, adding a high-availability deployment mode designed to prevent monitoring outages from silencing database alerts in production environments.

  The new option, called PMM High Availability (PMM HA), addresses a structural gap in database operations: production databases are commonly configured with replication and automatic failover, but the monitoring systems watching them have typically depended on a single server. When that server fails, Percona says, alert rules stop executing and critical notifications may never reach on-call teams.

  ## How the architecture works

  PMM HA uses a Kubernetes-native design that places three PMM server instances behind a single network address. If the active server, pod, or node fails, another instance takes over automatically. Users and connected services do not need to change endpoints; the transition is transparent to them.

  Metrics gathered during a failover event are queued by monitoring clients and transmitted once connectivity is restored, which Percona says reduces gaps in monitoring graphs. Rolling upgrades during routine maintenance are handled through Helm — the Kubernetes package manager — replacing replicas one at a time rather than taking the entire monitoring stack offline simultaneously.

  The deployment uses two Helm charts, and Kubernetes operators manage the replicated data stores that back the monitoring environment.

  ## Backup, restore, and platform support

  PMM HA includes backup and restore capabilities. The monitoring stack can be backed up to S3-compatible object storage or a shared volume, and can be restored either in place or into a separate Kubernetes namespace.

  Percona has validated the architecture on Amazon Elastic Kubernetes Service (EKS) and Red Hat OpenShift, including Red Hat OpenShift Service on AWS (ROSA).

  The 3.10.0 release also adds ARM64 processor architecture support for PMM Server, extending deployment options for organizations running ARM-based infrastructure.

  ## Why monitoring resilience matters

  Peter Farkas, chief executive of Percona, said in a statement that the launch reflects the need for monitoring systems to meet the same availability standards as the databases they oversee. "When a single-instance PMM server fails, alert rules stop running, meaning critical notifications may never reach on-call teams," Farkas said. "In the worst cases, teams may only learn of an incident when a customer notifies them."

  The gap PMM HA targets is a known operational risk: a monitoring platform that goes dark during the same conditions that stress production infrastructure — node failures, maintenance windows, cluster disruptions — can delay incident response precisely when it is most needed.

  ## Percona's product scope

  Percona develops open source database software and support services. Its portfolio spans MySQL, MariaDB, PostgreSQL, MongoDB, Valkey, and Redis, along with Kubernetes operators and cloud-native tooling. PMM is its database observability platform, used by infrastructure teams, database administrators, site reliability engineers, and platform engineers.

  PMM 3.10.0, including the high-availability mode and ARM64 server support, is available now.
body_zh: |
  Percona 正式發布 Percona Monitoring and Management（PMM）平台 3.10.0 版，新增高可用部署模式，專門解決因監控系統中斷而導致資料庫警示訊號消失的問題，確保正式環境的可觀測性持續不間斷。

  此一全新選項稱為 PMM 高可用（PMM HA），針對資料庫維運長期存在的結構性缺口：正式環境的資料庫普遍設有複寫與自動失效移轉機制，然而負責監控它們的系統卻往往只仰賴單一伺服器。Percona 指出，一旦該伺服器發生故障，告警規則便會停止執行，關鍵通知可能永遠無法送達值班團隊。

  ## 架構設計原理

  PMM HA 採用 Kubernetes 原生設計，將三台 PMM 伺服器執行個體部署於同一個網路位址之後。當主要伺服器、Pod 或節點發生故障時，另一個執行個體會自動接管。使用者與已連線的服務無需更換端點，整個切換過程對其而言完全透明。

  在失效移轉期間，監控用戶端會將收集到的指標資料排入佇列，待連線恢復後再行傳送；Percona 表示此機制可有效縮減監控圖表的資料缺口。例行維護時的滾動升級則透過 Kubernetes 套件管理工具 Helm 執行，每次僅替換一個副本，而非將整個監控堆疊同步下線。

  此部署方案採用兩份 Helm Chart，並由 Kubernetes Operator 負責管理支撐監控環境的複寫資料儲存。

  ## 備份、還原與平台支援

  PMM HA 內建備份與還原功能。監控堆疊可備份至相容 S3 的物件儲存或共用磁碟區，並可就地還原，亦可還原至獨立的 Kubernetes 命名空間。

  Percona 已在 Amazon Elastic Kubernetes Service（EKS）與 Red Hat OpenShift 上完成架構驗證，涵蓋於 AWS 上執行的 Red Hat OpenShift Service（ROSA）。

  3.10.0 版同時新增 PMM Server 對 ARM64 處理器架構的支援，為採用 ARM 架構基礎設施的企業進一步擴展了部署選項。

  ## 監控韌性的重要性

  Percona 執行長 Peter Farkas 在聲明中表示，此次發布反映出監控系統應與其所監控的資料庫維持相同可用性標準的迫切需求。「當單一執行個體的 PMM 伺服器發生故障，告警規則便會停止運作，關鍵通知可能永遠無法送達值班團隊，」Farkas 說，「在最糟的情況下，團隊往往要等到客戶主動回報，才會得知事件已經發生。」

  PMM HA 所針對的正是一個廣為人知的維運風險：監控平台若在正式基礎設施同樣承受壓力的情境下——節點故障、維護時間窗口、叢集中斷——跟著陷入黑暗，便可能在最需要快速應變的時刻，反而拖延事件的處理進度。

  ## Percona 的產品版圖

  Percona 專注於開源資料庫軟體與支援服務的研發，產品組合涵蓋 MySQL、MariaDB、PostgreSQL、MongoDB、Valkey 與 Redis，以及 Kubernetes Operator 與雲端原生工具。PMM 是該公司的資料庫可觀測性平台，廣泛應用於基礎設施團隊、資料庫管理員、網站可靠性工程師及平台工程師的日常維運工作。

  PMM 3.10.0 版——包括高可用模式與 ARM64 伺服器支援——現已正式開放取用。
date: "2026-11-17"
source_published: "2026-11-16T17:15:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["AWS"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Percona launches high-availability PMM monitoring platform (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/percona-launches-high-availability-pmm-monitoring-platform"
    title: "Percona launches high-availability PMM monitoring platform"
    trust: 3
    type: primary
    published_at: "2026-11-16T17:15:00.000Z"
  - url: "https://datacenternews.asia/story/percona-launches-high-availability-pmm-monitoring-platform"
    title: "Percona launches high-availability PMM monitoring platform"
    trust: 3
    type: corroborating
    published_at: "2026-11-16T17:15:00.000Z"
---
