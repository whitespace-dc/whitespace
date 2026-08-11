---
title_en: "Dell adds PowerStore to Nutanix Cloud Platform via Dell Private Cloud"
title_zh: "戴爾藉 Dell Private Cloud 將 PowerStore 納入 Nutanix 平台"
summary_en: "Dell has integrated its PowerStore all-flash storage platform with Nutanix Cloud Platform through Dell Private Cloud, available with Nutanix Cloud Infrastructure 7.6. The move adds a second external storage option to Dell's Nutanix portfolio alongside PowerFlex."
summary_zh: "戴爾透過 Dell Private Cloud，將旗下 PowerStore 全快閃儲存平台整合至 Nutanix 雲端平台，並隨 Nutanix Cloud Infrastructure 7.6 正式推出。此舉為戴爾的 Nutanix 產品組合新增第二個外部儲存選項，與 PowerFlex 並列。"
body_en: |
  Dell has integrated its PowerStore all-flash storage platform with Nutanix Cloud Platform through Dell Private Cloud, with availability tied to Nutanix Cloud Infrastructure (NCI) 7.6. The addition gives organizations running Nutanix environments a second Dell-validated external storage option, following PowerFlex, which was the first external storage platform to receive support in the Nutanix Cloud Platform.

  PowerStore is Dell's flagship all-flash storage system. In this configuration, Dell is positioning it for customers who want to separate their compute and storage scaling paths within a Nutanix environment, rather than relying on hyper-converged nodes where compute and storage scale together.

  ## How the integration works

  Dell Private Cloud automates deployment of AHV — Nutanix's native hypervisor — using validated blueprints, and manages full-stack lifecycle operations through Dell Automation Platform. The setup covers what the industry refers to as Day 0 through Day 2 operations: initial provisioning, ongoing management, and non-disruptive upgrades. Storage can be scaled one drive at a time.

  IT teams manage the environment through Nutanix Prism, Nutanix's unified management console, without requiring additional tooling. Dell also provides system-level hardware support across the stack.

  The platform includes always-on deduplication and compression — processes that reduce redundant data to lower storage consumption — backed by what Dell describes as a 6:1 data reduction guarantee. Dell said the efficiency gains could allow customers to consolidate more workloads while reducing storage costs.

  ## Resilience and data protection

  Resiliency features are managed through Prism and include asynchronous replication as well as Metro synchronous replication. Metro synchronous replication is designed for active-active data center configurations where zero recovery point objective (RPO) and zero recovery time objective (RTO) are required — meaning no data loss and no downtime in a failover event.

  For longer-term data retention, remote backups can be managed through Dell PowerProtect Data Manager, with support for cloud archival and retention locks.

  ## Analyst and partner views

  Dell cited analyst firm Omdia, which conducted a technical assessment of the integration. Omdia said the approach "reduces operational overhead while maintaining compliance with Dell's tested and supported configurations, closing potential security gaps left open by solutions without this level of integration and lifecycle management support."

  Omdia also assessed the combination's positioning for evolving workloads, stating that "the combination of enterprise-grade storage capabilities, automated lifecycle management and flexible deployment options of Dell Private Cloud on PowerStore with Nutanix positions IT teams to support current workloads while preparing for AI-driven transformation."

  Raj Patel, manager of project services and HCI lead at Winslow Technology Group, a channel partner, said the pairing demonstrates value quickly for customers. "Customers get streamlined infrastructure management through Nutanix, backed by the performance, efficiency, and scalability of PowerStore, making it an attractive option for modernization initiatives," Patel said.

  ## Industry context

  The announcement comes as infrastructure vendors respond to organizations reconsidering their virtualization and private cloud strategies. Nutanix has been expanding support for external storage and positioning its AHV hypervisor and Prism management software as components of a broader cloud operating model for data center environments.

  Dell described the PowerStore integration as giving it the broadest infrastructure support in the Nutanix ecosystem, and framed the launch within a 14-year partnership with Nutanix. With PowerStore now added alongside PowerFlex, Dell offers two validated external storage paths for organizations deploying Nutanix Cloud Platform.
body_zh: |
  戴爾（Dell）已透過 Dell Private Cloud，將旗下 PowerStore 全快閃儲存平台與 Nutanix 雲端平台完成整合，並隨 Nutanix Cloud Infrastructure（NCI）7.6 正式推出。此次新增，為採用 Nutanix 環境的企業帶來第二個經戴爾驗證的外部儲存選項。第一個獲支援的外部儲存平台為 PowerFlex，如今 PowerStore 緊隨其後。

  PowerStore 是戴爾的旗艦全快閃儲存系統。在此配置下，戴爾將其定位為希望在 Nutanix 環境中分離運算與儲存擴充路徑的客戶，而非仰賴超融合節點——在超融合架構中，運算與儲存是同步擴充的。

  ## 整合運作方式

  Dell Private Cloud 透過經驗證的藍圖自動部署 AHV（Nutanix 的原生虛擬機器管理程式），並透過 Dell Automation Platform 管理全棧生命週期作業。這套設定涵蓋業界所稱的 Day 0 至 Day 2 作業：初始佈建、日常管理，以及不中斷升級。儲存容量可以單顆硬碟為單位逐步擴充。

  IT 團隊透過 Nutanix 的統一管理主控台 Nutanix Prism 管理環境，無需額外工具。戴爾亦提供跨整個技術棧的系統級硬體支援。

  此平台內建常態化的重複資料刪除與壓縮功能——透過消除冗餘資料以降低儲存用量——並以戴爾所稱的 6:1 資料縮減保證作為後盾。戴爾表示，效率的提升有助於客戶在降低儲存成本的同時，整合更多工作負載。

  ## 韌性與資料保護

  韌性功能透過 Prism 管理，包含非同步複寫以及 Metro 同步複寫。Metro 同步複寫專為主動-主動（active-active）資料中心配置設計，適用於需要零復原點目標（RPO）與零復原時間目標（RTO）的場景——亦即在容錯移轉事件中，不容許任何資料遺失，也不允許任何停機時間。

  長期資料留存方面，遠端備份可透過 Dell PowerProtect Data Manager 管理，並支援雲端封存與留存鎖定。

  ## 分析師與合作夥伴觀點

  戴爾引用了分析機構 Omdia 對此整合所進行的技術評估。Omdia 表示，這套做法「在維持符合戴爾測試與支援配置的前提下，降低了營運負擔，填補了缺乏此等整合層級與生命週期管理支援的解決方案所留下的潛在資安缺口」。

  Omdia 同時評估了這一組合在演進中工作負載上的定位，並指出：「Dell Private Cloud on PowerStore 搭配 Nutanix 所具備的企業級儲存能力、自動化生命週期管理以及彈性部署選項，使 IT 團隊得以支援當前工作負載，同時為 AI 驅動的轉型預做準備。」

  通路合作夥伴 Winslow Technology Group 的專案服務經理暨 HCI 主管 Raj Patel 表示，這一搭配能為客戶迅速展現價值。「客戶透過 Nutanix 取得流暢的基礎架構管理體驗，並以 PowerStore 的效能、效率與擴充性作為後盾，使其成為現代化升級計畫中頗具吸引力的選項，」Patel 說道。

  ## 產業背景

  此次宣布恰逢基礎架構廠商因應企業重新審視其虛擬化與私有雲策略之際。Nutanix 持續擴大對外部儲存的支援，並將旗下 AHV 虛擬機器管理程式與 Prism 管理軟體定位為資料中心環境中更廣泛雲端作業模型的組成元件。

  戴爾表示，PowerStore 的整合使其在 Nutanix 生態系中擁有最廣泛的基礎架構支援，並將此次發布置於雙方長達 14 年合作關係的框架之下。隨著 PowerStore 加入 PowerFlex 的行列，戴爾如今為部署 Nutanix 雲端平台的企業提供兩條經驗證的外部儲存路徑。
date: "2026-08-12"
source_published: "2026-08-11T11:25:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Dell adds PowerStore support to Nutanix Cloud Platform (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenternews.asia/story/dell-adds-powerstore-support-to-nutanix-cloud-platform"
    title: "Dell adds PowerStore support to Nutanix Cloud Platform"
    trust: 3
    type: primary
    published_at: "2026-08-11T11:25:00.000Z"
  - url: "https://datacenter.news/story/dell-adds-powerstore-support-to-nutanix-cloud-platform"
    title: "Dell adds PowerStore support to Nutanix Cloud Platform"
    trust: 3
    type: corroborating
    published_at: "2026-08-11T11:25:00.000Z"
---
