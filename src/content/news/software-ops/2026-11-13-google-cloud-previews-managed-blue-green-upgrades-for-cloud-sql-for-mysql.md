---
title_en: "Google Cloud previews managed blue-green upgrades for Cloud SQL for MySQL"
title_zh: "Google Cloud 預覽 Cloud SQL for MySQL 受管藍綠升級"
summary_en: "Google Cloud has launched a preview of fully managed blue-green deployments for Cloud SQL for MySQL, allowing teams to upgrade major database versions with sub-second downtime and a manual rollback option. PostgreSQL support has not yet been added."
summary_zh: "Google Cloud 正式推出 Cloud SQL for MySQL 全受管藍綠部署的預覽功能，讓資料庫團隊在進行主要版本升級時停機時間不到一秒，並可在切換後手動回滾。PostgreSQL 版本目前尚不支援此功能。"
body_en: |
  Google Cloud has launched a preview of fully managed blue-green deployments for Cloud SQL for MySQL, letting database teams perform major version upgrades — such as moving from MySQL 8.0 to MySQL 8.4 — without taking production systems offline for extended maintenance windows.

  The feature is available now for Cloud SQL for MySQL standalone primary instances, including high-availability configurations. It is not yet available for PostgreSQL.

  ## How the upgrade process works

  The system divides an upgrade into three managed stages. The existing production database remains live in what Google Cloud terms the blue environment. Cloud SQL then creates a temporary green environment as a clone of that instance, upgrades it to the target version, and keeps it current through continuous replication from the live system.

  When an operator triggers switchover, Cloud SQL briefly places the original blue instance in read-only mode, completes a final data synchronisation, and promotes the green instance to serve as the new primary database. The company said customers using Cloud SQL Enterprise Plus can see sub-second maintenance downtime during that transition.

  After switchover, Cloud SQL transfers the existing database IP address, instance name, and backups to the upgraded instance. The company said this means applications do not need changes to connection strings or configuration files.

  ## Rollback and testing window

  Before the cutover is confirmed, teams can test applications and queries against production data in the green environment. If a problem is found, the deployment can be cancelled without affecting the live database. After switchover, the former blue environment can be retained as a manual fallback before operators choose to delete it, providing an additional recovery option if issues emerge once production traffic moves to the upgraded system.

  ## Why this matters for database operations

  Major version upgrades for production databases have traditionally required scheduled maintenance windows, often overnight or on weekends, because in-place upgrades can take systems offline. That scheduling burden has led many organisations to defer upgrades, leaving them on older engine versions that may carry security vulnerabilities and lack newer performance improvements, the company said.

  Blue-green deployment models address that problem by staging the upgraded environment in the background and limiting the production impact to a brief, controlled cutover. Google Cloud said the managed version removes the operational work that teams have historically had to perform themselves — building staging copies, maintaining synchronisation, and planning cutovers and rollback procedures manually — and is intended to allow database maintenance to move into regular working hours.

  ## Scope and competitive context

  The preview applies to Cloud SQL for MySQL; the company has not announced a timeline for PostgreSQL support. The launch adds to competition among cloud providers to reduce the operational complexity of managing production databases, particularly as the expectation of continuous availability has made extended maintenance windows increasingly difficult for businesses running customer-facing systems.
body_zh: |
  Google Cloud 正式推出 Cloud SQL for MySQL 全受管藍綠部署（blue-green deployment）的預覽版本，讓資料庫團隊在進行主要版本升級時——例如從 MySQL 8.0 升至 MySQL 8.4——無需讓正式環境系統長時間停機維護。

  此功能目前已開放 Cloud SQL for MySQL 獨立主要執行個體使用，包含高可用性設定在內，但 PostgreSQL 版本暫不支援。

  ## 升級流程說明

  整個升級程序由系統分為三個受管階段。現有的正式環境資料庫持續運作，Google Cloud 將其稱為「藍色」（blue）環境。Cloud SQL 接著建立一個臨時的「綠色」（green）環境，作為該執行個體的複製體，將其升級至目標版本，並透過與正式系統的持續資料複寫（replication）保持即時同步。

  當操作人員觸發切換（switchover）時，Cloud SQL 會短暫將原藍色執行個體切換為唯讀模式，完成最後一次資料同步，再將綠色執行個體提升為新的主要資料庫。Google Cloud 表示，使用 Cloud SQL Enterprise Plus 的客戶在切換過程中，維護停機時間可低於一秒。

  切換完成後，Cloud SQL 會將原有的資料庫 IP 位址、執行個體名稱及備份資料移轉至已升級的執行個體。Google Cloud 指出，這意味著應用程式無需更動連線字串或設定檔。

  ## 回滾機制與測試視窗

  在正式確認切換前，團隊可針對綠色環境中的正式資料測試應用程式與查詢。若發現問題，部署程序可直接取消，不影響正式環境資料庫的正常運作。切換完成後，原藍色環境可暫時保留作為手動回退（rollback）選項，待操作人員確認無誤後再選擇刪除，為正式流量移至升級後系統後可能浮現的問題，提供額外的復原機制。

  ## 對資料庫運維的意義

  正式環境資料庫的主要版本升級，傳統上需要規劃排程維護視窗，往往安排在深夜或週末進行，原因在於就地升級（in-place upgrade）可能導致系統停機。這種排程負擔使許多組織選擇推遲升級，讓系統長期停留在較舊的資料庫引擎版本上，而這些舊版本可能存在資安漏洞，也無從享受較新版本的效能改善，Google Cloud 如此表示。

  藍綠部署模式透過在背景中預先備妥升級後的環境，將對正式環境的影響限縮在一次短暫且可控的切換操作，藉此解決上述問題。Google Cloud 表示，全受管版本免除了團隊過去必須自行承擔的繁瑣作業——包括建立預備環境複本、維持資料同步，以及手動規劃切換與回滾程序——目的是讓資料庫維護工作得以在正常上班時間內進行。

  ## 適用範圍與競爭態勢

  此預覽功能適用於 Cloud SQL for MySQL；Google Cloud 目前尚未公布 PostgreSQL 支援的時程。此次發布，是雲端服務供應商之間競相降低正式環境資料庫管理複雜度的一環，尤其在持續可用性已成為普遍期待的當下，對於經營面向客戶系統的企業而言，動輒數小時的停機維護視窗愈來愈難以接受。
date: "2026-11-13"
source_published: "2026-11-12T17:00:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Google Cloud"]
trust:
  score: 3
  reasoning: "Single source: Google Cloud previews blue-green upgrades for Cloud SQL (trust 3/5)."
sources:
  - url: "https://datacenter.news/story/google-cloud-previews-blue-green-upgrades-for-cloud-sql"
    title: "Google Cloud previews blue-green upgrades for Cloud SQL"
    trust: 3
    type: primary
    published_at: "2026-11-12T17:00:00.000Z"
---
