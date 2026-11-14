---
title_en: "Daikin Applied releases 60MW cooling reference architecture for AI factories"
title_zh: "大金空調發布AI工廠60MW冷卻參考架構"
summary_en: "Daikin Applied has published D60-W, a 60-megawatt cooling reference architecture for AI factories on NVIDIA's DSX AI Factory Platform, covering liquid and air cooling across six deployable units from rack-level CDUs to plant-level dry coolers."
summary_zh: "大金空調正式發布名為D60-W的60MW冷卻參考架構，專為建置於輝達DSX AI工廠平台上的AI工廠而設計，涵蓋液冷與氣冷兩大系統，包含從機架層冷卻液分配單元至廠區層乾式冷卻器共六個可部署單元。"
body_en: |
  Daikin Applied has published a 60-megawatt cooling reference architecture called D60-W for AI factories built on NVIDIA's DSX AI Factory Platform using NVIDIA Vera Rubin NVL72 processors, providing data center developers, engineers and operators a starting point for designing cooling from rack to plant.

  ## Architecture and load split

  D60-W supports a 60 MW information-technology load across six deployable units. Liquid cooling handles 92 percent of that load; air cooling handles the remaining 8 percent.

  The design runs two separate temperature loops. A high-temperature liquid loop serves coolant distribution units (CDUs) at the rack level; a dedicated low-temperature loop serves air-cooling rack containment units. Separating the two loops improves overall plant efficiency, Daikin Applied said.

  Rack-level liquid cooling is delivered through CDUs. DDC Solutions' S-Series rack containment units capture residual heat at the rack and move it to the low-temperature loop. Fire suppression and water-loop protection are built into every rack, the company said.

  The chiller plant is built around Daikin Applied's Magnitude WME oil-free magnetic bearing centrifugal chillers, which the company said offer capacities up to 10 megawatts per unit.

  ## Heat rejection and operating modes

  Heat is rejected through dry coolers rather than evaporative cooling towers. That choice eliminates cooling-tower make-up water and supports a low water usage effectiveness (WUE) — an industry metric expressing water consumed per unit of IT energy used — Daikin Applied said.

  The system operates in one of three modes depending on outdoor temperature. In dry cooling mode, chiller compressors are off and dry coolers carry the full load. In hybrid mode, waterside economisers — heat exchangers that pre-cool return water using outside air — reduce chiller load, with chillers handling the remainder. In full mechanical cooling mode, chillers carry the peak load. Dry coolers handle the load for most of the year in suitable climates, Daikin Applied said, with chillers supporting operation only during the hottest days.

  ## Supervisory controls and resilience

  Daikin Applied's iDCM supervisory layer coordinates rack containment units, CDUs, chillers and dry coolers as a single plant. The system manages load sharing between equipment, balances operating hours across machines and controls transitions between the three cooling modes. It integrates with site management systems for centralised visibility and includes energy optimisation and predictive maintenance capabilities, the company said.

  Two proprietary chiller technologies address power interruptions. RideThrough keeps chillers operational through brief power disturbances; RapidRestore restarts them after a full shutdown.

  ## Significance

  The NVIDIA DSX AI Factory Platform is an end-to-end framework that unifies design, simulation, deployment and operation of large-scale AI data centers. D60-W is aligned to that platform and is intended to give engineering teams a connected system spanning individual rack decisions through water temperatures, flow requirements and plant-level heat rejection.

  "An AI factory is a system of systems," said Karim Shalash, director of Data Center Solutions at Daikin Applied. "A cooling decision at the rack carries implications for water temperatures, flow requirements, plant operation and heat rejection. D60-W gives engineering teams a framework for working through those dependencies and developing a cooling architecture around the facility's operating requirements."

  Yu Nishiwaki, president and CEO of Daikin Applied, said D60-W draws on the full depth of the company's portfolio, with the goal of positioning Daikin Applied as a single partner for customers scaling AI operations.
body_zh: |
  大金空調（Daikin Applied）正式發布名為D60-W的60MW冷卻參考架構，專為建置於輝達（NVIDIA）DSX AI工廠平台、搭載輝達Vera Rubin NVL72處理器的AI工廠而設計，為資料中心開發商、工程師與營運人員提供從機架至廠區層級的冷卻設計起點。

  ## 架構與負載分配

  D60-W支援60MW的資訊技術負載，涵蓋六個可部署單元。液冷承擔其中92%的負載，氣冷則處理剩餘的8%。

  此設計採用兩條獨立的溫度迴路。高溫液體迴路服務機架層級的冷卻液分配單元（CDU）；另設一條專用低溫迴路，服務氣冷機架圍護單元。大金空調表示，兩條迴路分離可提升整體廠區效率。

  機架層級的液冷透過CDU提供。DDC Solutions的S系列機架圍護單元負責捕捉機架殘餘熱量，並將其導入低溫迴路。該公司表示，每個機架均內建消防與水迴路保護功能。

  冰水機組以大金空調的Magnitude WME無油磁浮軸承離心式冰水機為核心，該公司表示每台容量最高可達10MW。

  ## 熱排放與運行模式

  散熱採用乾式冷卻器，而非蒸發式冷卻水塔。大金空調表示，此選擇可消除冷卻水塔的補充用水需求，並有助於達到低水資源使用效率（WUE）——WUE為業界衡量每單位IT能耗所消耗水量的指標。

  系統依戶外溫度在三種模式之間切換運行。乾式冷卻模式下，冰水機壓縮機停機，由乾式冷卻器承擔全部負載。混合模式下，水側節能器——即利用外部空氣預冷回水的熱交換器——可降低冰水機負載，剩餘部分再由冰水機接手處理。全機械冷卻模式下，冰水機承擔尖峰負載。大金空調表示，在氣候適宜的地區，乾式冷卻器全年大部分時間即可獨力承擔負載，冰水機僅在最炎熱的日子才介入支援。

  ## 監控系統與韌性

  大金空調的iDCM監控層將機架圍護單元、CDU、冰水機與乾式冷卻器統一協調，作為單一廠區進行管理。系統負責管理設備間的負載分配、平衡各機台的運行時數，並控制三種冷卻模式之間的切換。該公司表示，系統可與廠區管理系統整合，實現集中可視性，並具備能源最佳化與預測性維護功能。

  兩項專有冰水機技術可應對電力中斷問題。RideThrough可在短暫電力擾動期間維持冰水機正常運行；RapidRestore則可在全面停機後重新啟動冰水機。

  ## 重要意義

  輝達DSX AI工廠平台是一個端到端框架，整合大型AI資料中心的設計、模擬、部署與運營。D60-W與該平台完整對齊，旨在為工程團隊提供一套前後串連的完整系統，涵蓋個別機架決策，乃至水溫、流量需求與廠區層級熱排放的全面考量。

  大金空調資料中心解決方案總監Karim Shalash表示：「AI工廠是一個由系統組成的系統。機架層級的冷卻決策，對水溫、流量需求、廠區運行與熱排放均有連帶影響。D60-W為工程團隊提供了一套框架，幫助他們釐清這些依賴關係，並根據設施的運行需求制定完整的冷卻架構。」

  大金空調總裁暨執行長西脇裕（Yu Nishiwaki）表示，D60-W充分運用了公司產品組合的完整深度，目標是將大金空調定位為客戶擴大AI運營規模時的單一合作夥伴。
date: "2026-11-15"
source_published: "2026-11-14T16:20:47.000Z"
category: "cooling"
secondary_categories: ["compute"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: 60MW AI factory cooling reference architecture (trust 3/5)."
sources:
  - url: "https://www.coolingpost.com/products/60mw-ai-factory-cooling-reference-architecture/"
    title: "60MW AI factory cooling reference architecture"
    trust: 3
    type: primary
    published_at: "2026-11-14T16:20:47.000Z"
---
