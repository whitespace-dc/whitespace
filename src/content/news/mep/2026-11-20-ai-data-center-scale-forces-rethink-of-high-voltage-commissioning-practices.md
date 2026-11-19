---
title_en: "AI Data Center Scale Forces Rethink of High-Voltage Commissioning Practices"
title_zh: "AI資料中心規模激增，迫使高壓試運轉作業規範重新審視"
summary_en: "As AI data centers require power in the tens and hundreds of megawatts, more facilities are bypassing conventional distribution networks to connect directly to high-voltage transmission infrastructure at 66kV, 110kV, and 150kV — a shift that demands specialist commissioning disciplines that standard low-voltage certification programs do not cover."
summary_zh: "隨著 AI 資料中心的用電需求高達數十乃至數百 MW，愈來愈多設施跳過傳統配電網路，直接接入 66kV、110kV 與 150kV 等高壓輸電基礎設施；這一轉變對高壓試運轉專業能力提出全新要求，而標準的低壓認證課程根本無法涵蓋這些需求。"
body_en: |
  ## Direct grid connections reshape data center electrical scope

  The global buildout of data center capacity to support artificial intelligence workloads is pushing an increasing number of facilities to connect directly to high-voltage (HV) transmission infrastructure, a shift that substantially expands the technical complexity of bringing those projects into service, according to an analysis published by Data Center Knowledge.

  Traditionally, data centers have received utility power through local distribution networks, with transformers stepping voltage down to the low-voltage (LV) levels used by uninterruptible power supplies, switchgear, and IT loads inside the facility. As AI-driven demand trends toward gigawatt-scale — meaning clusters of facilities requiring power equivalent to a mid-sized city — local distribution networks in some markets cannot support new projects without major infrastructure upgrades, contributing to extended approval processes and multiyear delays, the analysis states.

  In response, developers are increasingly pursuing direct connections to 66 kilovolt (kV), 110kV, and 150kV transmission systems. Those voltage levels were, until recently, well outside the project boundary for most data center developments.

  ## HV commissioning is a distinct discipline, not an extension of LV work

  Connecting at transmission voltages introduces substations, power transformers, HV cables, switchgear, protection systems, and utility interfaces as integral parts of the critical power architecture. Each of those elements requires inspection, testing, and verification before energization — work that carries risks and technical requirements categorically different from standard low-voltage commissioning, the analysis argues.

  At higher voltage levels, electrical hazards include arc flash, flashover, and fatal electric shock that can affect personnel even without direct contact with live conductors. Equipment failure during energization can damage expensive infrastructure, disrupt the wider electrical network beyond the facility boundary, and cause significant project delays, in addition to creating direct risk to on-site teams.

  HV commissioning operates under its own standards, testing methodologies, and safety protocols. The analysis states explicitly that it is not simply an extension of LV commissioning, and warns that incorporating HV work into an existing data center commissioning scope without specialist oversight risks leaving critical elements of the project insufficiently verified.

  ## What a structured HV commissioning program covers

  A properly structured HV commissioning program, according to the analysis, begins with a comprehensive review of design documentation, equipment specifications, installation records, and manufacturer requirements. Site inspections then verify correct installation, satisfactory connections and terminations, and conformance with design intent.

  Individual equipment testing spans several categories:

  - **Power transformers**: electrical tests confirming insulation integrity, winding condition, and correct operation of associated monitoring and protection devices.
  - **HV cables and terminations**: tests verifying insulation performance and installation integrity.
  - **Switchgear and circuit breakers**: mechanical and electrical verification, including operating mechanisms, interlocks, contact resistance, and switching functionality.
  - **Protection systems**: relays checked against approved protection studies and settings schedules, with secondary injection testing used to verify relay operation.
  - **Grid-interface testing**: verification of interactions among multiple systems delivered by different contractors and organizations, which the analysis identifies as particularly important given that supply performance often depends on those interactions.
  - **Power quality assessment**: evaluation of voltage stability, harmonics, and reactive power performance against connection requirements and applicable standards.

  Completing individual equipment tests does not, by itself, confirm that the full HV installation is ready for activation, the analysis cautions. Before energization, the commissioning team must confirm that all required inspections, tests, defect resolutions, and safety checks have been completed and appropriately authorized — including protection settings, switching schedules, grounding arrangements, permits, procedures, and personnel authorizations.

  ## The risk of treating commissioning as a late-stage task

  The analysis identifies one of the greatest risks in large-scale data center development as treating HV commissioning as a late-stage activity, introduced only when the substation and associated infrastructure are nearing physical completion.

  By that point, opportunities to influence design decisions, resolve interface issues between systems delivered by different contractors, and secure specialist resources may have already passed. Early engagement enables commissioning teams to contribute to design reviews, establish test requirements, and identify access and testing constraints before they become program problems.

  Coordination requirements extend beyond the developer and its contractors. Early engagement and collaboration among developers, utilities, electrical designers, equipment manufacturers, and specialist commissioning teams is necessary; when that coordination is absent, the analysis states, it creates serious program risks.

  ## Assurance requirements extend beyond initial energization

  The commissioning assurance obligation does not end at day-one handover. The analysis states that performance monitoring, periodic inspection, protection-system verification, and planned maintenance are all required to preserve the integrity of the installation throughout its operational life — a requirement the analysis describes as especially important given the demands placed on HV systems and the consequences of failure.

  As data center development continues to scale toward direct transmission-level grid connections, the analysis concludes that HV infrastructure must be treated as a specialist engineering discipline with its own competencies and assurance requirements, with commissioning teams brought into projects from the earliest planning stages rather than at the point of physical completion.
body_zh: |
  ## 直接接入電網重塑資料中心電氣工程範疇

  根據《Data Center Knowledge》發布的一項分析，全球為支援人工智慧（AI）工作負載而大規模擴建資料中心的浪潮，正推動愈來愈多設施直接接入高壓（HV）輸電基礎設施，這一轉變大幅提升了相關專案投入運轉的技術複雜度。

  以往，資料中心透過地方配電網路取得電力，由變壓器降壓至不斷電系統（UPS）、配電開關設備以及設施內各種 IT 負載所需的低壓（LV）等級。然而，隨著 AI 帶動的用電需求朝吉瓦（GW）規模邁進——意即多個設施的總用電量相當於一座中型城市——部分市場的地方配電網路若不進行大規模基礎設施升級，將無力支撐新建專案，進而導致冗長的審批流程與長達數年的延誤，該分析指出。

  對此，開發商愈來愈積極地尋求直接接入 66 千伏（kV）、110kV 與 150kV 等輸電系統。而這些電壓等級直到不久前，對大多數資料中心開發專案而言，仍遠超出其職責範疇之外。

  ## 高壓試運轉是獨立專業，而非低壓作業的延伸

  以輸電電壓等級接入電網，意味著變電站、電力變壓器、高壓電纜、開關設備、保護系統以及與電力公司的介面，全都成為關鍵電力架構不可或缺的組成部分。上述每一個環節在送電前均需進行檢驗、測試與核實，而這些作業所涉及的風險與技術要求，與標準低壓試運轉截然不同，該分析如此指出。

  在高電壓等級下，電氣危害包括電弧閃絡（arc flash）、閃絡（flashover）以及可能奪命的電擊，即便人員未直接接觸帶電導體，也可能受到波及。送電過程中若發生設備故障，不僅可能損毀造價高昂的基礎設施、干擾設施範圍以外的廣域電力網路，造成重大工程延誤，更對現場作業人員構成直接威脅。

  高壓試運轉有其自成一套的標準、測試方法論與安全規程。該分析明確指出，高壓試運轉絕非低壓試運轉的延伸，並警告：若將高壓作業納入現有資料中心試運轉範疇而缺乏專業監督，將使專案的關鍵環節面臨驗證不足的風險。

  ## 結構化高壓試運轉計畫的涵蓋範疇

  根據該分析，一套架構完善的高壓試運轉計畫，應從全面審查設計文件、設備規格、安裝記錄與製造商要求開始著手。現場查驗則確認安裝是否正確、接線與終端處理是否妥善，以及是否符合設計意圖。

  各項設備的個別測試涵蓋以下幾個類別：

  - **電力變壓器**：進行電氣測試，確認絕緣完整性、繞組狀況，以及相關監控與保護裝置的正確運作。
  - **高壓電纜與終端**：測試驗證絕緣性能與安裝完整性。
  - **開關設備與斷路器**：進行機械與電氣驗證，涵蓋操作機構、連鎖裝置、接觸電阻及切換功能。
  - **保護系統**：依據核准的保護協調研究與整定排程核查繼電器，並以二次注入測試驗證繼電器動作。
  - **電網介面測試**：驗證由不同承包商與機構交付的多個系統之間的互動關係，該分析特別強調此點至關重要，因為供電性能往往取決於這些系統互動。
  - **電能品質評估**：針對連接要求與適用標準，評估電壓穩定性、諧波及無效功率表現。

  該分析提醒，完成各項設備的個別測試，並不代表整個高壓安裝已準備好可以送電。在送電之前，試運轉團隊必須確認所有必要的檢驗、測試、缺陷排除及安全查核均已完成並獲得適當授權，涵蓋保護整定值、切換排程、接地配置、相關許可、作業程序及人員授權。

  ## 將試運轉視為後期作業的風險

  該分析指出，大型資料中心開發中最大的風險之一，在於將高壓試運轉視為後期作業，僅在變電站及相關基礎設施接近實體完工時才納入考量。

  屆時，影響設計決策、解決不同承包商交付系統之間介面問題，以及確保專業人力資源的機會，可能早已錯失。提早介入使試運轉團隊得以參與設計審查、確立測試要求，並在存取限制與測試條件演變為工程進度問題之前，及早加以識別處理。

  協調需求不僅限於開發商及其承包商之間。開發商、電力公司、電氣設計師、設備製造商與專業試運轉團隊之間，均需提早介入並密切協作；該分析指出，一旦缺乏此種協調，將帶來嚴重的工程進度風險。

  ## 保證要求延伸至初次送電之後

  試運轉的保證義務並不隨第一天移交而終止。該分析指出，效能監控、定期查驗、保護系統驗證及計畫性維護，均為維持安裝完整性、貫穿整個運轉壽命所不可或缺，並特別強調這一要求的重要性——鑑於高壓系統所承受的高度負荷，以及一旦發生故障所帶來的嚴重後果。

  隨著資料中心開發持續擴大規模，邁向直接接入輸電等級電網，該分析最終結論為：高壓基礎設施必須被視為一門具有獨立能力要求與保證要求的專業工程領域，試運轉團隊應從最早期的規劃階段便納入專案，而非等到實體完工之際才介入。
date: "2026-11-20"
source_published: "2026-11-18T19:33:26.000Z"
category: "mep"
secondary_categories: ["power"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Rethinking High-Voltage Commissioning for AI Data Centers (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/energy-power-supply/rethinking-high-voltage-commissioning-for-ai-data-centers"
    title: "Rethinking High-Voltage Commissioning for AI Data Centers"
    trust: 3
    type: primary
    published_at: "2026-11-18T19:33:26.000Z"
---
