---
title_en: "NEMA, ASHRAE, and PNNL Release Unified AI Data Center Energy Performance Framework"
title_zh: "NEMA、ASHRAE與PNNL聯合發布AI資料中心能源效能框架"
summary_en: "NEMA, ASHRAE, and PNNL this week published the AI Data Center Energy Performance Framework, a guide unifying electrical, cooling, and operational standards for power-intensive AI data center facilities. The document covers the full project lifecycle from site selection through retrofit, and is intended to give developers, engineers, and facility managers a common technical reference."
summary_zh: "NEMA、ASHRAE 及 PNNL 本週共同發布《AI 資料中心能源效能框架》，統合電氣、冷卻與營運標準，為高耗能 AI 資料中心設施提供一份貫穿專案全生命週期的共同技術參考文件，供開發商、工程師及設施管理人員使用。"
body_en: |
  NEMA, ASHRAE, and PNNL this week published the AI Data Center Energy Performance Framework, a unified guide giving project developers, engineers, and facility managers a common technical reference for designing, building, and operating facilities that support power-intensive artificial intelligence workloads.

  The framework brings together electrical systems, cooling infrastructure, energy management, and facility operations under a single document. Its three backing organizations each contribute distinct expertise: the National Electrical Manufacturers Association (NEMA) represents electrical equipment manufacturers; the American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) supplies thermal management guidance; and Pacific Northwest National Laboratory (PNNL) contributes energy management and grid integration expertise.

  ## What the framework covers

  The document spans the full data center lifecycle, addressing energy sourcing, energy efficiency, thermal management, water use, resiliency, and operational performance. Specific areas include site selection and planning, integrated facility design, grid-interactive infrastructure, commissioning and performance validation, operations and maintenance, and retrofit and modernization of existing facilities.

  The framework incorporates more than a dozen NEMA standards and guidance resources covering energy storage systems, microgrids, transformers, switchgear, uninterruptible power supply (UPS) systems, wire and cable, electricity metering, fire and life-safety equipment, insulating materials, and grounding and bonding systems.

  ## The shift from AC to DC power distribution

  One of the more consequential design shifts the framework addresses is the industry's movement from alternating current (AC) to direct current (DC) power distribution. Patrick Hughes, NEMA's senior vice president of strategy, technical, and industry affairs, described the efficiency problem embedded in current AC-based designs.

  "Today's data centers are built around AC utility power," Hughes told Data Center Knowledge. Power from the grid travels through a step-down transformer, converts to DC inside a UPS, converts back to AC for building distribution, and then converts again to low-voltage DC at the server rack. Each conversion introduces energy loss.

  "The efficiency case for high-voltage DC is strong," Hughes said. The standards required for higher-voltage DC distribution — such as 800 volts DC and above — are not yet in place. "Much of the industry is pursuing adapted solutions while waiting for clearer standards, safety frameworks, and customer demand signals," he said, adding that the framework addresses this gap at a systems level.

  Building a DC supply chain depends on stabilizing those standards so equipment suppliers can design, certify, manufacture, and install hardware with confidence, Hughes said.

  ## Fragmented standards slowing development

  Hughes identified the fragmentation of existing standards as a central problem the framework is meant to solve. Data centers, he said, "are using and managing energy in ways fundamentally different from what the codes and standards governing this type of infrastructure were designed to address."

  "The guidance connecting electrical and thermal management equipment to each other, and to the specific demands of AI data centers, has been fragmented across multiple organizations and multiple standards bodies," Hughes said.

  That fragmentation has pushed many operators toward proprietary internal standards. "Too many data center developers are working from proprietary internal standards," Hughes said. "But it takes time for a data center developer to start from scratch on every project." The document is intended to consolidate existing standards, guidance, and deployment practices into a single resource that reduces uncertainty during planning, construction, and ongoing operations.

  ## Industry pressure on timelines and power

  The framework's release comes as hyperscalers, colocation providers, and independent developers face growing pressure to accelerate project timelines while securing sufficient power capacity for AI infrastructure. Industry attention has shifted toward "speed to power" strategies, including alternative generation sources, microgrids, energy storage systems, and other approaches designed to shorten the time between project approval and facility energization.

  ## Access and significance

  The framework represents an attempt to address fragmentation in a standards landscape that the organizations say has not kept pace with AI infrastructure buildout. By consolidating NEMA's electrical equipment expertise, ASHRAE's thermal management guidance, and PNNL's grid integration knowledge, it offers project teams a single reference covering the full lifecycle from siting through retrofit.

  The framework is available through ASHRAE's technical resources webpage.
body_zh: |
  NEMA、ASHRAE 及 PNNL 本週聯合發布《AI 資料中心能源效能框架》（AI Data Center Energy Performance Framework），為專案開發商、工程師及設施管理人員提供一份共同技術參考，完整涵蓋設計、建置與營運支援高耗能人工智慧工作負載設施的各項指引。

  該框架將電氣系統、冷卻基礎設施、能源管理及設施營運整合於單一文件之中。三個主要支持機構各自貢獻不同專業：美國國家電氣製造商協會（NEMA）代表電氣設備製造商；美國暖通空調製冷工程師協會（ASHRAE）提供熱管理指導；太平洋西北國家實驗室（PNNL）則貢獻能源管理與電網整合專業。

  ## 框架涵蓋內容

  本文件涵蓋資料中心的完整生命週期，涉及能源供應、能源效率、熱管理、用水、韌性及營運效能等議題。具體領域包括選址與規劃、整合式設施設計、可與電網互動的基礎設施、試運轉與效能驗證、日常營運與維護，以及既有設施的改造與現代化升級。

  該框架納入逾十二項 NEMA 標準與指導資源，涵蓋儲能系統、微電網、變壓器、配電盤、不斷電系統（UPS）、電線電纜、電力計量、消防與生命安全設備、絕緣材料，以及接地與搭接系統。

  ## 從交流電到直流電的配電轉型

  框架所探討的一項重要設計趨勢，是業界從交流電（AC）向直流電（DC）配電的轉變。NEMA 負責策略、技術與業界事務的資深副總裁 Patrick Hughes 描述了現行交流電設計所內含的效率問題。

  Hughes 向《資料中心知識》（Data Center Knowledge）表示：「現今的資料中心是圍繞交流電市電建構的。」電力從電網進入後，先經降壓變壓器處理，在不斷電系統內轉換為直流電，再轉回交流電以供建築物配電，最後在伺服器機架端再次轉換為低壓直流電。每一次轉換都會造成能源損耗。

  Hughes 說：「高壓直流電的效率優勢相當顯著。」然而，800 伏特直流電及以上等級的高壓直流配電所需標準目前尚未到位。他表示：「業界有很多人在等待更明確的標準、安全規範及市場需求訊號，同時採用各種權宜方案。」他補充道，該框架在系統層面著手填補這一缺口。

  Hughes 指出，建立直流電供應鏈，有賴於相關標準的穩定化，如此設備供應商才能有信心地進行設計、認證、製造與安裝。

  ## 標準分散阻礙發展

  Hughes 將現有標準的分散化視為框架所欲解決的核心問題。他指出，資料中心「使用與管理能源的方式，已根本性地有別於現行規範與標準最初設計所針對的基礎設施形態」。

  Hughes 表示：「將電氣與熱管理設備相互銜接、並與 AI 資料中心特定需求掛鉤的指導方針，原本分散在多個組織與多個標準機構之間。」

  這種分散化迫使許多業者轉向自行制定內部專有標準。Hughes 說：「太多資料中心開發商都在用自己的專有內部標準辦事，但每個專案都要從頭來過，相當耗時。」這份文件旨在將現有標準、指導方針與部署實踐整合為單一資源，以降低規劃、建設及日常營運過程中的不確定性。

  ## 時程與電力供應的產業壓力

  該框架的發布，恰逢超大規模雲端業者、主機代管服務商及獨立開發商面臨日益加劇的雙重壓力——既要加速專案時程，又要為 AI 基礎設施確保充足的電力容量。業界目光已轉向「快速取電」策略，包括替代發電來源、微電網、儲能系統，以及其他旨在縮短從專案核准到設施通電之間所需時間的各種方案。

  ## 取得方式與重要意義

  該框架是在一個各機構認為已跟不上 AI 基礎設施建設步伐的標準體系中，嘗試解決分散化問題的重要成果。透過整合 NEMA 的電氣設備專業、ASHRAE 的熱管理指導，以及 PNNL 的電網整合知識，它為專案團隊提供了一份涵蓋從選址到改造全生命週期的單一參考文件。

  該框架可透過 ASHRAE 技術資源網頁取得。
date: "2026-06-11"
source_published: "2026-06-10T15:51:06.000Z"
category: "standards"
secondary_categories: ["compute", "power"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Industry Groups Launch AI Data Center Framework Amid Rising Power Needs (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/energy-power-supply/industry-groups-launch-ai-data-center-framework-amid-rising-power-needs"
    title: "Industry Groups Launch AI Data Center Framework Amid Rising Power Needs"
    trust: 3
    type: primary
    published_at: "2026-06-10T15:51:06.000Z"
---
