---
title_en: "Google Cloud enables BigQuery to query Databricks, Snowflake and AWS Glue without data movement"
title_zh: "Google Cloud 讓 BigQuery 無需搬移資料即可跨平台查詢"
summary_en: "Google Cloud has outlined a method for BigQuery to query data held in Databricks, Snowflake and AWS Glue using federated Apache Iceberg REST catalog connections, allowing cross-platform analytics without copying datasets into a central store."
summary_zh: "Google Cloud 說明了一種方法，讓 BigQuery 透過聯合 Apache Iceberg REST 目錄連線，查詢存放於 Databricks、Snowflake 及 AWS Glue 中的資料，無需將資料集複製至集中式儲存庫，即可實現跨平台分析。"
body_en: |
  Google Cloud has described a method for its BigQuery analytics service to query data stored in Databricks, Snowflake and Amazon Web Services Glue without moving the underlying datasets, using federated connections built on the Apache Iceberg REST catalog specification.

  The approach targets organisations whose data is distributed across multiple cloud platforms, a pattern that has traditionally forced analytics teams to choose between building extraction pipelines into a central warehouse or tolerating inconsistent reporting across systems.

  ## How the federated architecture works

  Under the model Google Cloud described, BigQuery synchronises metadata from external catalogs while reading Parquet data files — the columnar storage format underpinning most modern data lakes — directly from remote object storage at query time. Query processing runs on Google Cloud compute; remote Databricks clusters, Snowflake virtual warehouses and AWS compute instances are not used during execution.

  The architecture separates two functions: metadata synchronisation and storage access. A component called the Lakehouse runtime catalog periodically syncs schemas, snapshot pointers and table definitions from remote catalogs on a user-defined schedule. Storage access uses temporary credentials issued by the external platform at query time.

  All three platforms — Databricks Unity Catalog, Snowflake Horizon Catalog and AWS Glue Data Catalog — support the Apache Iceberg REST catalog specification, a shared interface standard that allows a common connection pattern across them.

  ## Platform-specific configuration

  Google Cloud described distinct setup steps for each platform.

  For Databricks, a schema was associated with an external location, an Iceberg table was created for product data, and a Databricks service principal was used to establish the federated connection in Google Cloud, with permissions granted for catalog traversal, schema use and data access.

  For Snowflake, the process involved creating an Iceberg table for customer data, assigning a dedicated reader role, and binding Google Cloud's numeric identity to a Snowflake service user through Workload Identity Federation — a mechanism that allows Google Cloud workloads to authenticate to external systems without long-lived credentials.

  For AWS, configuration involved creating an IAM role — AWS's identity and access management system — attaching permissions for AWS Glue and Amazon S3, and registering an Iceberg table through Amazon Athena.

  ## Single query across four systems

  Google Cloud demonstrated a single SQL query joining native BigQuery sales data with customer records held in Snowflake, product information stored in Databricks and store location data kept in AWS Glue. BigQuery referenced the federated Iceberg tables using four-part table paths that identify catalog, schema, and table across each external system. Snowflake identifiers appear in uppercase in this configuration; Databricks and AWS Glue paths remain in lowercase.

  Google Cloud also described saving such a multi-cloud join as a logical view in BigQuery, allowing users to query the combined dataset through conversational analytics — posing natural-language questions that BigQuery translates into SQL and runs against the federated sources.

  ## Operational constraints

  The minimum metadata refresh interval for federated catalogs is 300 seconds, or five minutes. For larger catalogs containing hundreds of tables, metadata retrieval can take longer than that interval. If one synchronisation cycle overruns, the next scheduled run is skipped to prevent task queuing.

  BigQuery caches retrieved cross-cloud data blocks in the region where the federated catalog resides, which can reduce network transfer costs for repeat queries. However, those cached blocks sit in Google Cloud storage in that region, which Google Cloud acknowledged raises data residency considerations for organisations subject to geographic data sovereignty requirements.

  Organisations that enforce the `constraints/gcp.restrictNonCmekServices` policy — a Google Cloud control that requires customer-managed encryption keys — have the cache bypassed automatically, with BigQuery reading directly from remote storage for each query instead. Google Cloud said users can monitor cache behaviour through the `objectStorageStats` section in BigQuery job statistics by comparing `cacheBytesRead` against `objectStorageBytesRead`.

  ## Why the model matters

  Google Cloud framed the federated approach as an alternative to extract-transform-load pipelines, the traditional method of copying data from source systems into a central warehouse before running analytics. Extraction pipelines can introduce synchronisation lag between source systems and reports, storage overhead from duplicated datasets, network egress charges for cross-cloud data transfer, and breakage when upstream schema changes alter source table structures.

  The federated model, as Google Cloud described it, brings compute to where data already resides rather than pulling data to where compute runs. Cross-cloud metadata synchronisation and direct reads from remote object storage at query time form the basis of the approach.

  The 300-second minimum refresh interval means that federated queries reflect catalog state as of the most recent completed synchronisation cycle, not necessarily the current state of the source system.
body_zh: |
  Google Cloud 說明了一種方法，讓旗下 BigQuery 分析服務得以查詢儲存於 Databricks、Snowflake 及 Amazon Web Services（AWS）Glue 中的資料，而無需搬移底層資料集。此方法採用以 Apache Iceberg REST 目錄規格為基礎建立的聯合連線。

  此方案針對的是資料分散於多個雲端平台的組織——這種架構模式長期以來迫使分析團隊在兩條路之間二選一：要麼建構擷取管線將資料匯入集中式倉儲，要麼忍受各系統之間報表不一致的問題。

  ## 聯合架構的運作方式

  在 Google Cloud 所描述的模型中，BigQuery 從外部目錄同步元資料，並在查詢時直接從遠端物件儲存空間讀取 Parquet 資料檔案——Parquet 是支撐現代大多數資料湖的欄式儲存格式。查詢處理在 Google Cloud 的運算資源上執行；遠端 Databricks 叢集、Snowflake 虛擬倉儲及 AWS 運算執行個體均不參與執行過程。

  此架構將兩項功能分離：元資料同步與儲存存取。一個稱為「Lakehouse 執行時期目錄」的元件，會依使用者自訂的排程，定期從遠端目錄同步結構描述、快照指標與資料表定義。儲存存取則使用外部平台在查詢時核發的暫時憑證。

  三個平台——Databricks Unity Catalog、Snowflake Horizon Catalog 及 AWS Glue Data Catalog——均支援 Apache Iceberg REST 目錄規格，這是一種共用介面標準，允許跨平台採用統一的連線模式。

  ## 各平台的設定方式

  Google Cloud 針對每個平台說明了各自不同的設定步驟。

  針對 Databricks，需將結構描述與外部位置建立關聯、為產品資料建立 Iceberg 資料表，並使用 Databricks 服務主體在 Google Cloud 中建立聯合連線，同時授予目錄瀏覽、結構描述使用及資料存取的相關權限。

  針對 Snowflake，流程包括為客戶資料建立 Iceberg 資料表、指派專屬讀取器角色，並透過工作負載身分聯合（Workload Identity Federation）將 Google Cloud 的數字識別身分與 Snowflake 服務使用者綁定——這是一種讓 Google Cloud 工作負載無需長效憑證即可向外部系統驗證身分的機制。

  針對 AWS，設定包括建立 IAM 角色——即 AWS 的身分與存取管理系統——附加 AWS Glue 與 Amazon S3 的相關權限，並透過 Amazon Athena 註冊 Iceberg 資料表。

  ## 單一查詢橫跨四個系統

  Google Cloud 展示了一個單一 SQL 查詢，將 BigQuery 原生的銷售資料，與存放於 Snowflake 的客戶記錄、儲存在 Databricks 的產品資訊，以及保存於 AWS Glue 的門市位置資料進行聯結。BigQuery 使用四段式資料表路徑來參照聯合 Iceberg 資料表，這些路徑跨每個外部系統識別目錄、結構描述與資料表。在此設定中，Snowflake 識別碼以大寫形式呈現；Databricks 與 AWS Glue 路徑則保持小寫。

  Google Cloud 也說明，可將此類多雲端聯結另存為 BigQuery 中的邏輯檢視，讓使用者能透過對話式分析查詢合併後的資料集——以自然語言提問，由 BigQuery 轉譯為 SQL 後對聯合來源執行。

  ## 操作限制

  聯合目錄的最短元資料重新整理間隔為 300 秒，即五分鐘。對於包含數百張資料表的大型目錄，元資料擷取所需時間可能超過此間隔。若某一同步週期執行超時，下一個排程執行將被略過，以防止工作排隊堆積。

  BigQuery 會在聯合目錄所在的區域快取擷取到的跨雲端資料區塊，有助於降低重複查詢的網路傳輸費用。然而，這些快取區塊存放於該區域的 Google Cloud 儲存空間中，Google Cloud 也坦承，這對受地理資料主權法規約束的組織而言，將帶來資料存放地的合規考量。

  強制執行 `constraints/gcp.restrictNonCmekServices` 政策的組織——這是 Google Cloud 要求使用客戶自管加密金鑰的控制機制——其快取將被自動略過，BigQuery 每次查詢時將直接從遠端儲存空間讀取資料。Google Cloud 表示，使用者可透過 BigQuery 工作統計資料中的 `objectStorageStats` 區段，比較 `cacheBytesRead` 與 `objectStorageBytesRead` 兩項數值，以監控快取行為。

  ## 此模型的重要性

  Google Cloud 將此聯合方法定位為擷取-轉換-載入（ETL）管線的替代方案。ETL 管線是傳統上在執行分析前，先將資料從來源系統複製至集中式倉儲的做法。ETL 管線可能帶來來源系統與報表之間的同步延遲、資料集重複儲存衍生的額外開銷、跨雲端資料傳輸的網路出口費用，以及上游結構描述變更導致來源資料表結構異動時的中斷問題。

  按 Google Cloud 的描述，此聯合模型是將運算帶往資料所在之處，而非將資料拉往運算所在之處。跨雲端元資料同步，加上查詢時直接從遠端物件儲存空間讀取，共同構成此方法的核心。

  300 秒的最短重新整理間隔意味著，聯合查詢所反映的是最近一次完成同步週期時的目錄狀態，而不一定是來源系統的即時狀態。
date: "2026-10-27"
source_published: "2026-10-26T16:00:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["AWS", "Google Cloud"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google Cloud lets BigQuery query Databricks, Snowflake (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenternews.asia/story/google-cloud-lets-bigquery-query-databricks-snowflake"
    title: "Google Cloud lets BigQuery query Databricks, Snowflake"
    trust: 3
    type: primary
    published_at: "2026-10-26T16:00:00.000Z"
  - url: "https://datacenter.news/story/google-cloud-lets-bigquery-query-databricks-snowflake"
    title: "Google Cloud lets BigQuery query Databricks, Snowflake"
    trust: 3
    type: corroborating
    published_at: "2026-10-26T16:00:00.000Z"
---
