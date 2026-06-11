---
title_en: "Supermicro Unveils Megascale AI Data Centre Blueprints for Vera Rubin Systems"
title_zh: "超微推出Vera Rubin大規模AI資料中心積木藍圖"
summary_en: "Supermicro has launched Data Centre Building Block Solutions blueprints for NVIDIA Vera Rubin NVL72 and HGX Rubin NVL8, packaging compute, cooling, power and software into a single deployment model for AI facilities ranging from 5 MW to 1 GW."
summary_zh: "超微發布NVIDIA Vera Rubin NVL72與HGX Rubin NVL8的資料中心積木解決方案藍圖，將運算、冷卻、電力及軟體整合為單一部署模型，適用於5MW至1GW規模的AI資料中心。"
body_en: |
  Supermicro has introduced Data Centre Building Block Solutions blueprints for NVIDIA Vera Rubin NVL72 and NVIDIA HGX Rubin NVL8, targeting AI data centre deployments from 5 MW to 1 GW. The blueprints consolidate compute, storage, networking, liquid cooling, power distribution and site infrastructure into a single deployment model built around a repeatable 1,152-GPU scalable unit.

  ## Scalable Reference Architecture

  The core building block contains 1,152 NVIDIA Rubin GPUs and 331 TB of HBM4 GPU memory. A full deployment unit comprises:

  - 16 compute racks
  - Six networking racks
  - Four high-performance storage racks
  - Two context memory storage platform racks

  Networking support includes NVIDIA Spectrum-X Ethernet and NVIDIA Quantum-X800 InfiniBand, with compute fabric throughput of up to 1.6 TB/s. Supermicro noted that silicon photonics networking with co-packaged optics will also be available as an option.

  Storage uses Supermicro's Petascale server platform for NVMe-tier application storage and model checkpointing. The context memory storage platform racks are designed for long-context inference, retrieval workloads and related AI processing tasks.

  ## Liquid Cooling and Power

  Direct liquid cooling is a central feature. Supermicro's DLC-2 stack includes cold plates, cooling distribution units, manifolds, rear-door heat exchangers, cooling towers and its SMC PG25-A coolant. For sites without facility water infrastructure, liquid-to-air options are available: a 200 kW configuration for one rack and a 500 kW configuration for two racks.

  Power infrastructure spans medium-voltage transformers, low-voltage distribution, rack-level power shelves and battery backup options. Each Vera Rubin NVL72 rack includes four 110 kW power shelves with redundant 18.3 kW power supply units. Battery energy storage options are available for sites that require backup power.

  ## Software and Management

  Supermicro bundles its SuperCloud Composer and SuperCloud Director management tools with the blueprint, covering bare-metal management through to multi-tenant workload orchestration. The package also includes NVIDIA AI Enterprise and NVIDIA Run:ai. Asset tracking provides data on physical equipment and sensors across components such as cooling distribution units. The software supports both single-tenant and multi-tenant environments.

  ## Integrated Delivery Model

  Much of the integration work is completed at Supermicro's US manufacturing operations before delivery, including racking, cabling and testing at both system and cluster level. On-site work covers placement, power and cooling connections, software installation and validation. Supermicro also provides site surveys, project design, integration, deployment and ongoing support through a dedicated team, with the stated aim of reducing the number of separate supplier relationships operators must manage across an AI infrastructure project.
body_zh: |
  超微（Supermicro）針對輝達 Vera Rubin NVL72 與 HGX Rubin NVL8 發布資料中心積木解決方案藍圖，目標涵蓋 5MW 至 1GW 規模的 AI 資料中心部署。該藍圖將運算、儲存、網路、液冷、電力分配及場地基礎設施整合於單一部署模型，以可重複擴展的 1,152 GPU 可擴充單元為核心架構。

  ## 可擴展參考架構

  核心積木單元包含 1,152 顆輝達 Rubin GPU 及 331TB 的 HBM4 GPU 記憶體。完整部署單元由以下元件組成：

  - 16 個運算機架
  - 6 個網路機架
  - 4 個高效能儲存機架
  - 2 個情境記憶體儲存平台機架

  網路支援輝達 Spectrum-X 乙太網路及輝達 Quantum-X800 InfiniBand，運算網路架構傳輸量最高可達 1.6TB/s。超微亦表示，矽光子網路及共封裝光學元件選項將可供選用。

  儲存系統採用超微 Petascale 伺服器平台，用於 NVMe 層應用程式儲存與模型檢查點儲存。情境記憶體儲存平台機架專為長情境推論、檢索工作負載及相關 AI 處理任務而設計。

  ## 液冷與電力

  直接液冷為此藍圖的核心功能。超微 DLC-2 堆疊包含冷板、冷卻分配單元、歧管、後門熱交換器、冷卻塔及 SMC PG25-A 冷卻液。對於未具備設施水路基礎設施的場地，超微提供液對氣選項：單機架 200kW 及雙機架 500kW 配置。

  電力基礎設施涵蓋中壓變壓器、低壓配電、機架級電力架及電池備援選項。每個 Vera Rubin NVL72 機架配備四個 110kW 電力架，搭配冗餘 18.3kW 電源供應器。有備援電力需求的場地亦可選配電池儲能選項。

  ## 軟體與管理

  超微隨藍圖整合 SuperCloud Composer 及 SuperCloud Director 管理工具，功能涵蓋裸機管理至多租戶工作負載協作。套件亦包含輝達 AI Enterprise 及輝達 Run:ai。資產追蹤功能提供冷卻分配單元等元件的實體設備與感測器資料，軟體同時支援單租戶及多租戶環境。

  ## 整合交付模式

  超微在交付前於其美國製造設施完成大部分整合工作，包含機架組裝、佈線及系統級與叢集級測試。現場作業涵蓋設備定位、電力與冷卻連接、軟體安裝及驗證。超微亦透過專屬團隊提供場地勘查、專案設計、整合、部署及持續支援服務，旨在減少 AI 基礎設施專案中運營商所需管理的獨立供應商關係數量。
date: "2026-06-02T17:06:02.662Z"
category: "mep"
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Supermicro unveils blueprints for giant AI data centres (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/supermicro-unveils-blueprints-for-giant-ai-data-centres"
    title: "Supermicro unveils blueprints for giant AI data centres"
    trust: 3
    type: primary
---
