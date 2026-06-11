---
title_en: "Railway uses Anthropic's Claude to design Gen 2 bare-metal data center rollout"
title_zh: "Railway 借助 Claude 規劃第二代裸機資料中心全球建置"
summary_en: "Platform-as-a-service provider Railway used Anthropic's Claude to plan the physical deployment of its next-generation bare-metal data centers across four geographies, compressing a logistics task involving thousands of components into a two-to-three week installation window per site."
summary_zh: "平台即服務供應商 Railway 透過 Anthropic 的 Claude，為其次世代裸機資料中心的實體部署進行整體規劃，橫跨四大地理區域。這套由 AI 輔助完成的建置方案，成功將涵蓋數千項元件的龐大物流任務，壓縮至每站兩到三週的安裝時程。"
body_en: |
  Platform-as-a-service provider Railway used Anthropic's Claude to design the physical buildout of its next-generation bare-metal data center sites, the company disclosed in a blog post, as it moves to accelerate an infrastructure expansion that its previous 18-month rollout pace can no longer sustain.

  ## Planning scope

  Claude coordinated the deployment plan across four geographies and eight or nine individual data centers, accounting for roughly half a dozen hardware suppliers, dozens of network providers, dozens of field technicians, hundreds of line items, and thousands of cables, Railway said. All of it had to align within a two-to-three week installation window per site.

  ## From Gen 1 to Gen 2

  Railway runs on a combination of Google Cloud Platform (GCP), Amazon Web Services (AWS), and its own bare-metal servers. Its first bare-metal generation, Gen 1, was rolled out in eight phases over 18 months. The process was explicitly incremental: build an initial site skeleton in each region, fill capacity to 20 percent, work on other projects for a few months, then cycle back in batches of 15 to 20 percent of site capacity until each site was full.

  Railway said that pace is no longer viable given growing customer demand and supply-chain pressure on components ranging from DRAM to glass fiber.

  ## How Railway structured Claude's work

  Railway did not give Claude an open-ended brief. The company built a structured framework within which the model operated. That framework included version control for physical infrastructure — so changes could be tracked, applied, and audited — as well as design-rules checks to verify that devices, cables, racks, and sites met specified requirements, a library of approved parts, and an attribute and constraint system.

  Railway also converted its internal DCIM (data center infrastructure management) software to operate in real time and added a curated set of MCP (Model Context Protocol) tools that encoded internal processes as callable skills. A single global contractor executed the physical buildout, with local teams in each geography where Railway operates.

  ## Gen 2 hardware specifications

  Gen 2 servers use AMD Zen 5c EPYC central processing units with 96 cores and 192 threads, DDR5 memory, and dual 100-gigabit ConnectX-6 network interface cards. Storage capacity is five times that of Gen 1. By retaining the same physical chassis used in the Gen 1 storage server, Railway reduced its total server stock-keeping unit (SKU) count from four to two, simplifying procurement and spare parts management.

  Gen 2 sites are built alongside their Gen 1 counterparts rather than replacing them. The two generations are connected over Railway's own dark fiber using 400-gigabit links across four diverse paths, with DWDM (dense wavelength-division multiplexing) deployed where additional bandwidth capacity is needed. Railway said that in most regions its infrastructure can reach the nearest hyperscaler cloud region in under one millisecond, which it described as significant for enterprise customers running workloads that span Railway's infrastructure and AWS or GCP.

  ## Railway's relationship with public cloud

  Railway was originally built entirely on GCP. The company has been publicly critical of that dependency, previously describing hyperscaler reliance as an "existential risk" that affected pricing and made it difficult to diagnose upstream failures. Railway wrote that despite multi-million dollar annual spending with GCP, it received roughly the same support as a customer spending $100.

  A separate incident recently saw Google Cloud suspend one of Railway's projects. A person familiar with the situation told Data Center Dynamics that the suspension was triggered by detection of a cryptocurrency mining spike on the account, which would violate Google's terms of service. The source said multiple customer accounts were suspended as part of Google's standard procedure, and that Railway's account had a history of failing to address abusive activity occurring on its platform. Communications between the two companies were established quickly after the suspension, but Railway did not submit a formal support ticket, according to the source.

  ## Rollout status

  As of early June 2026, Gen 2 was live in three of four planned regions: US West (California), US East (Virginia), and Amsterdam, the Netherlands. The fourth region, Singapore, had not yet gone live.
body_zh: |
  平台即服務（PaaS）供應商 Railway 在一篇部落格文章中揭露，該公司已借助 Anthropic 的 Claude 設計其次世代裸機資料中心站點的實體建置計畫。隨著先前長達 18 個月的建置速度已無法因應業務成長需求，Railway 正積極加速基礎設施擴張步伐。

  ## 規劃範疇

  Railway 表示，Claude 統籌協調了橫跨四個地理區域、共計八至九座資料中心的部署計畫，涵蓋約六家硬體供應商、數十家網路服務商、數十名現場技術人員、數百個明細項目，以及數千條網路線纜。這一切都必須在每個站點兩到三週的安裝窗口期內完成。

  ## 從第一代到第二代

  Railway 的基礎設施結合了 Google 雲端平台（GCP）、亞馬遜網路服務（AWS）以及自有裸機伺服器。其第一代裸機基礎設施（Gen 1）歷時 18 個月、分八個階段完成建置，過程採取明確的漸進策略：先在各區域搭建站點骨架，填充至 20% 容量後，轉而處理其他專案數個月，再回頭以每批 15% 至 20% 站點容量的步調循環推進，直至站點填滿為止。

  Railway 表示，在客戶需求持續增長、從 DRAM 記憶體到玻璃光纖等各類元件面臨供應鏈壓力的情況下，這樣的建置速度已難以為繼。

  ## Railway 如何為 Claude 建立工作框架

  Railway 並非給予 Claude 一個開放式的任務指示，而是為模型的運作建構了一套結構化框架。這套框架涵蓋實體基礎設施的版本控制（以便追蹤、套用並稽核變更）、設計規則檢查（驗證設備、網路線纜、機架與站點是否符合規格要求）、已核准零件庫，以及屬性與限制條件系統。

  Railway 還將內部的 DCIM（資料中心基礎設施管理）軟體改造為即時運作模式，並加入一組精心設計的 MCP（模型情境協定）工具，將內部流程編碼為可呼叫的技能。在實體建置方面，由單一全球承包商統一執行，各地理區域則配置當地施工團隊。

  ## 第二代硬體規格

  第二代伺服器搭載 AMD Zen 5c EPYC 中央處理器，具備 96 核心、192 執行緒，配置 DDR5 記憶體，以及雙埠 100 Gbps ConnectX-6 網路介面卡。儲存容量為第一代的五倍。藉由沿用第一代儲存伺服器的相同實體機箱，Railway 將伺服器的料號（SKU）總數從四種削減至兩種，大幅簡化採購與備料管理作業。

  第二代站點採取與第一代並行建設的方式，而非直接取代。兩代設施透過 Railway 自有暗光纖相連，採用 400 Gbps 鏈路並跨越四條不同路徑，在需要額外頻寬的地方則部署 DWDM（密集波長分割多工）技術。Railway 表示，在多數地區，其基礎設施與最近的超大規模雲端區域之間的網路延遲不到一毫秒，對於同時跨 Railway 基礎設施與 AWS 或 GCP 執行工作負載的企業客戶而言，具有重要意義。

  ## Railway 與公有雲的關係

  Railway 最初完全建構於 GCP 之上。該公司曾公開批評這種依賴關係，將對超大規模雲端業者的仰賴形容為影響定價、且難以診斷上游故障的「生存風險」。Railway 寫道，儘管每年在 GCP 上投入數百萬美元，所獲得的支援與一個僅花費 100 美元的客戶幾乎相同。

  此外，近期還發生了另一起事件：Google Cloud 暫停了 Railway 的其中一個專案。一位知情人士向《Data Center Dynamics》透露，此次暫停是因系統偵測到該帳戶出現加密貨幣挖礦流量激增，違反了 Google 的服務條款。該消息人士表示，依照 Google 的標準程序，多個客戶帳戶同時遭到暫停，且 Railway 的帳戶過去曾有未能有效處理其平台上濫用行為的紀錄。雙方在暫停後迅速建立了溝通管道，但據該消息人士稱，Railway 並未提交正式的支援工單。

  ## 建置進度

  截至 2026 年 6 月初，第二代資料中心已在四個計畫區域中的三個正式上線，分別為美國西部（加利福尼亞州）、美國東部（維吉尼亞州）以及荷蘭阿姆斯特丹。第四個區域新加坡尚未正式上線。
date: "2026-06-09T18:38:10.899Z"
source_published: "2026-06-09T17:00:27.000Z"
category: "software-ops"
secondary_categories: ["mep"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Railway taps Claude to design a data center (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/news/railway-taps-claude-to-design-a-data-center/"
    title: "Railway taps Claude to design a data center"
    trust: 3
    type: primary
    published_at: "2026-06-09T17:00:27.000Z"
---
