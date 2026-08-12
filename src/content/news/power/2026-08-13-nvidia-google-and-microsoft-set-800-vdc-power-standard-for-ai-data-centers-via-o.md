---
title_en: "Nvidia, Google and Microsoft set 800 VDC power standard for AI data centers via OCP"
title_zh: "輝達、Google、微軟透過OCP制定AI資料中心800 VDC供電標準"
summary_en: "Nvidia, Google, and Microsoft have jointly published an 800-volt direct-current power architecture and solid-state transformer specification through the Open Compute Project, with Nvidia planning a phased rollout beginning with a hybrid power rack in the second half of 2026 and a row-level system capable of 2 megawatts per row in 2027."
summary_zh: "輝達、Google與微軟聯手透過開放計算專案（OCP）共同發布800伏特直流電源架構及固態變壓器規格；輝達計畫自2026年下半年起分階段推出混合供電機架，並於2027年推出每排最高2百萬瓦的列級供電系統。"
body_en: |
  Nvidia, Google, and Microsoft have jointly published an 800-volt direct-current (VDC) power architecture and a solid-state transformer specification through the Open Compute Project (OCP), setting a common technical framework as AI data center rack power demands rise toward the megawatt scale.

  The three companies have published a joint white paper and a low-voltage direct-current solid-state transformer (SST) specification through OCP. More than 80 equipment manufacturers and infrastructure companies are already developing products to that specification, Nvidia said.

  ## Why 800 VDC

  Conventional data center power systems run on alternating current (AC) and convert it to direct current (DC) multiple times before electricity reaches compute equipment — each conversion step consuming energy and adding complexity. The 800 VDC approach reduces the number of conversion stages, delivering more of the incoming electricity to accelerators and other compute systems. Higher voltage also means lower current for the same power load, which reduces copper wiring requirements and transmission losses within the facility and frees space inside rack enclosures, according to Nvidia's blog.

  Nvidia argued that the challenge for large AI data center operators is not only how much power can be delivered to a facility, but how efficiently that power can be moved from the grid to the compute equipment inside it.

  ## Nvidia's three-stage roadmap

  Nvidia described the architecture as a staged path rather than a one-step redesign, structured around three products aimed at different facility types.

  The first product is an MGX-compatible 800 VDC Power Rack planned for the second half of 2026. It is designed to integrate with existing AC infrastructure, delivering 800 VDC to compute racks within a row without requiring changes to a building's electrical system. The hybrid design targets operators that have already invested in land, power access, and physical infrastructure and want to support higher-density compute without a full site rebuild.

  The second stage is a Row Power Center, planned for 2027. The unit uses an overhead 800 VDC busway to distribute power across a full rack row and is rated at up to 2 megawatts (MW) per row — a level aimed at the most power-intensive AI compute clusters.

  The third stage is a DC Power Block intended for purpose-built new facilities. It would convert grid power directly to 800 VDC in a single step, eliminating further conversion stages for sites designed from the ground up around AI demand.

  Vladimir Troy, Nvidia's Vice President of Data Centre Infrastructure, said: "800 VDC unlocks the compute performance and power density required for AI at scale." Through OCP, Nvidia is working with more than 80 ecosystem companies to give AI facilities "a practical path forward, not just a future vision," Troy said.

  ## OCP solid-state transformer specification

  A key component of the architecture is the SST, which combines power semiconductors, high-frequency power conversion, and digital control technology. Unlike a conventional transformer, an SST integrates power conversion and transformation functions in a single unit, and could eventually connect medium-voltage grid power directly to an 800 VDC distribution system, reducing the number of conversion stages between the utility grid and the AI rack.

  OCP published its SST Design Specification v0.3 in July, developed jointly by Google, Microsoft, and Nvidia. The specification sets out common hardware interfaces, communication protocols, and performance requirements, with the goal of reducing integration barriers between equipment from different vendors and accelerating formation of an 800 VDC ecosystem, according to TechNews.

  ## Taiwan supply chain response

  Taiwan-based power supply manufacturers are among the first to move into production for the architecture.

  Delta Electronics said at a recent investor briefing that its plus-or-minus 400 V products are set to enter mass production in the third quarter of 2026, with shipments beginning in the fourth quarter, and that 800 V products will ramp according to customer demand. Delta has also entered the SST market.

  Lite-On Technology said its new 8.5 kilowatt (kW) power supply unit (PSU) and battery backup unit (BBU) are already in mass production, and that its 110 kW Power Shelf has begun shipping. Lite-On has also entered the SST segment.

  Acbel Polytech said its PSU and Power Shelf products for next-generation AI power applications are currently at the prototype stage.

  Market analysts cited by TechNews said the shift from kilowatt-scale to megawatt-scale rack power is lifting both per-unit prices and overall demand for power conversion equipment, distribution hardware, backup batteries, busways, and cooling systems. The convergence on a common technical specification by major cloud providers and chip makers is seen as strengthening the position of Taiwanese power supply manufacturers with high-power electronics and system integration capabilities.

  ## Investment context

  Nvidia cited a Wood Mackenzie projection of USD $9 trillion in global AI and data infrastructure investment through 2040, framing the scale of buildout the architecture is meant to serve. That spending outlook, Nvidia said, is intensifying scrutiny of facility design as operators try to ensure that both new and retrofitted sites can support denser hardware over time.

  Nvidia's DSX reference designs are intended as a system-level blueprint connecting power distribution, rack-scale computing, and facility infrastructure, guiding operators through migration from AC-based environments to fully native 800 VDC facilities. Customer verification timelines and mass production schedules for SST products from Delta and Lite-On are being closely tracked by the industry.
body_zh: |
  輝達（Nvidia）、Google與微軟（Microsoft）三家公司日前聯手透過開放計算專案（OCP），共同發布800伏特直流電（VDC）電源架構與低壓直流固態變壓器（SST）規格，為AI資料中心機架供電需求邁向百萬瓦量級奠定共通技術框架。

  三家公司已透過OCP聯合發表白皮書及固態變壓器設計規格。輝達表示，目前已有逾80家設備製造商與基礎設施業者依據該規格進行產品開發。

  ## 為何採用800 VDC

  傳統資料中心供電系統採用交流電（AC），電力在抵達運算設備前須歷經多次交流轉直流的轉換程序，每一道轉換步驟都會耗損能源並增加系統複雜度。800 VDC方案減少了轉換次數，能將更多進線電力直接輸送至加速器等運算設備。根據輝達官方部落格，較高電壓在相同功率負載下可降低電流，進而減少機房內部的銅線布線需求與輸電損耗，並為機架機箱騰出更多空間。

  輝達指出，大型AI資料中心營運業者所面臨的挑戰，不只是如何取得足夠電力，更在於如何有效率地將電力從電網輸送至機房內的運算設備。

  ## 輝達的三階段路線圖

  輝達將這套架構定位為分階段推進的路徑，而非一步到位的全面改造，並規劃了三項針對不同設施類型的產品。

  第一項產品為MGX相容的800 VDC供電機架，預計於2026年下半年推出。該產品設計可與現有交流電基礎設施整合，在無需更動建築物電氣系統的前提下，於機列內向運算機架提供800伏特直流電。這款混合設計鎖定的目標族群，是已在土地取得、電力接入與實體基礎設施上完成投資、希望在不全面重建場址的情況下支援更高密度運算的業者。

  第二階段為列級電源中心（Row Power Center），預計2027年推出。該裝置透過架空式800 VDC匯流排向整排機架配電，額定功率最高可達每排2百萬瓦（MW），目標是供電需求最為密集的AI運算叢集。

  第三階段為適用於全新專建設施的直流電源模組（DC Power Block）。該產品可在單一步驟內將電網電力直接轉換為800 VDC，省去更多轉換環節，專為從設計之初即以AI需求為核心的新建場址所設計。

  輝達資料中心基礎設施副總裁弗拉迪米爾・特洛伊（Vladimir Troy）表示：「800 VDC解鎖了AI規模化所需的運算效能與供電密度。」他說，輝達正透過OCP與逾80家生態系夥伴攜手合作，為AI設施提供「切實可行的前進路徑，而非遙不可及的未來願景」。

  ## OCP固態變壓器規格

  這套架構的核心元件為固態變壓器（SST），整合了電力半導體、高頻電力轉換技術與數位控制技術。與傳統變壓器不同，SST將電力轉換與變壓功能整合於單一裝置，未來甚至可將中壓電網電力直接轉換為800 VDC配電系統所需電壓，大幅減少電力公司電網至AI機架之間的轉換次數。

  OCP已於七月發布由Google、微軟與輝達三方聯合制定的SST設計規格v0.3版。根據科技新報報導，該規格訂定了共通硬體介面、通訊協定與效能要求，目的在於降低不同廠商設備之間的整合障礙，並加速800 VDC生態系的形成。

  ## 台灣供應鏈的動向

  台灣電源供應器製造商是率先針對這套架構啟動量產布局的業者之一。

  台達電在近期法說會上表示，正負400V產品預計於2026年第三季進入量產、第四季開始出貨，800V產品則將依客戶需求逐步放量；台達電也已跨入SST市場。

  光寶科技表示，新款8.5千瓦（kW）電源供應器（PSU）與電池備援裝置（BBU）已進入量產，110千瓦電源模組架（Power Shelf）亦已開始出貨；光寶同樣已切入SST領域。

  康舒科技表示，其面向下一代AI供電應用的PSU及電源模組架產品目前仍處於原型開發階段。

  據科技新報引述市場分析師觀點，機架供電規格從千瓦量級躍升至百萬瓦量級，帶動電力轉換設備、配電硬體、備用電池、匯流排及冷卻系統的單價與整體需求雙雙走揚。主要雲端業者與晶片製造商匯聚於共通技術規格的趨勢，被視為有助於強化台灣電源供應器廠商在高功率電子元件與系統整合能力方面的市場地位。

  ## 投資規模背景

  輝達援引Wood Mackenzie的預測數據，指出至2040年全球AI與資料基礎設施投資規模將達9兆美元，藉此說明這套架構所要服務的建設量級。輝達表示，如此龐大的支出展望，正促使業者更加嚴格審視設施設計，確保新建與改造場址都能隨時間推移持續支援密度更高的硬體設備。

  輝達的DSX參考設計旨在提供系統層級的藍圖，串聯供電配電、機架級運算與設施基礎設施，引導業者從交流電環境逐步遷移至全原生800 VDC設施。台達電與光寶科技SST產品的客戶驗證時程與量產計畫，目前正受到業界密切追蹤。
date: "2026-08-13"
source_published: "2026-08-12T10:41:18.000Z"
category: "power"
secondary_categories: ["compute"]
updates: "power/2026-07-26-nvidia-800vdc-ai-power-architecture-may-be-delayed-past-2028-semianalysis-says"
region: ["Taiwan"]
vendor: ["Delta Electronics", "Nvidia"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead 輝達、Google、微軟三巨頭共推 800 V 電力革命，台廠電源鏈卡位 (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://technews.tw/2026/08/12/nvidia-google-microsoft-ai-power-revolution-taiwan-firms-secure-power-supply-chain-positions/"
    title: "輝達、Google、微軟三巨頭共推 800 V 電力革命，台廠電源鏈卡位"
    trust: 3
    type: primary
    published_at: "2026-08-12T10:41:18.000Z"
  - url: "https://datacenternews.asia/story/nvidia-outlines-800-vdc-power-plan-for-ai-factories"
    title: "NVIDIA outlines 800 VDC power plan for AI factories"
    trust: 3
    type: corroborating
    published_at: "2026-08-12T16:15:00.000Z"
---
