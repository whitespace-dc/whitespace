---
title_en: "Schneider Electric to commercialize Immersive Twin platform after live AI factory pilot at SINES"
title_zh: "施耐德電氣SINES試驗後宣布沉浸式孿生平台商業化計畫"
summary_en: "Schneider Electric plans to commercialize its Immersive Twin data center digital simulation platform through 2027, following the first end-to-end deployment on a live site at Nscale's 26-megawatt facility on Start Campus's 1.2-gigawatt SINES Data Campus in Portugal, announced at NVIDIA GTC Berlin on 21 October."
summary_zh: "施耐德電氣宣布計畫於2027年前將沉浸式孿生（Immersive Twin）資料中心數位模擬平台推向商業化，此前已在葡萄牙Start Campus的SINES資料園區Nscale SIN01建築完成首次端對端實地部署；消息於10月21日在輝達（NVIDIA）GTC柏林大會上正式發布。沉浸式孿生系統在NVIDIA Omniverse DSX Blueprint上運行，整合即時電力與冷卻模擬，並以SINES部署作為標準化產品的開發範本。"
body_en: |
  Schneider Electric plans to commercialize its Immersive Twin data center digital simulation platform through 2027, after completing the first end-to-end deployment on a live AI facility at Nscale's SIN01 building on Start Campus's SINES Data Campus in Portugal.

  The pilot, announced at NVIDIA GTC Berlin on 21 October, connects real-time power and cooling simulation to Nscale's SIN01, the first 26-megawatt building on Start Campus's 1.2-gigawatt (GW) SINES campus. The twin runs on the NVIDIA Omniverse DSX Blueprint.

  "This is not a one-and-done pilot," Steve Brown, vice president of the EcoStruxure IT line of business at Schneider Electric, told Capacity at the event. "We intend to commercialise this through next year." Brown said commercial discussions are ongoing and the exact steps to market have not been finalized. The product is not yet generally available.

  ## What the twin does

  The Immersive Twin pairs 3D visualization in NVIDIA Omniverse with Schneider's own simulation engines: ETAP for power modeling and EcoStruxure IT for cooling, linked by AVEVA software. Brown said the live connection to those solvers distinguishes the platform from static, CAD-based models.

  An operator can substitute a planned Vera Rubin rack for a Blackwell rack in the model; the system then runs that change through the power and cooling solvers and returns recommendations or flagged deviations within the same interface. That scenario mirrors Nscale's own trajectory at SINES: SIN01 hosts more than 12,600 Blackwell Ultra GPUs, while SIN02, a second building of up to 200 megawatts, is planned to host more than 66,000 NVIDIA Rubin GPUs for Microsoft from late 2027.

  Brown outlined two operating modes. During construction or refurbishment, the focus is what he called "time to token" — verifying that cooling distribution units (CDUs), piping, and upstream electrical infrastructure are sized correctly for new compute. Once a facility is running, the emphasis shifts to token efficiency, or how much useful AI compute can be extracted from existing infrastructure.

  ## Three-partner structure

  The SINES pilot brought together three organizations: Start Campus provided facility, engineering, and operational data; Nscale contributed workload and IT requirements; and Schneider supplied the twin technology. Brown described the outcome as "one plus one plus one equals more than three."

  Nscale CTO David Power said in the announcement that the twin provides "a clearer view" of where full-stack optimization can occur before changes are made on site.

  For Start Campus, the twin has taken on a direct commercial function. Asked whether it now forms part of the pitch for SINES against competing European sites, Omer Wilson, chief marketing officer at Start Campus, told Capacity: "Absolutely." Wilson said the site's competitive case rests on scale, sustainability, connectivity, and flexibility, and that testing infrastructure in a live AI factory environment adds to that proposition.

  Brown said Start Campus's long development runway was a factor in selecting the site: with plans to build beyond SIN01 toward more than one gigawatt of capacity, the twin model can be reused across successive buildings on the campus.

  ## Building toward a standard product

  Each twin is currently built to the specific site it models. Brown said the building models ingested vary across data centers, and Schneider's immediate goal is to standardize as much of the core technology as possible, using the SINES deployment as the template.

  He identified two technical challenges. The first is asset fidelity: the 3D models used for simulation must carry the physical properties needed to produce accurate results. Schneider's role as a manufacturer of infrastructure equipment, Brown said, helped ensure that both its own and third-party assets were accurate enough to simulate against.

  The second challenge, which Brown described as an opportunity, is that most operators understand their data centers at the level of individual assets but have not documented how those assets connect — which switchgear feeds which uninterruptible power supply (UPS), busway, and rack is often undocumented. Schneider's energy intelligence orchestration layer maps those relationships, enabling operators to model how a CDU set-point change affects an upstream chiller and whether power is being stranded as a result.

  Brown said the platform will remain open and interoperable, with support for third-party simulation engines.

  ## From reference design to operating site

  The SINES deployment is the third public milestone in Schneider's AI factory digital twin program. In 2025, the company launched a power-focused AI factory twin developed with ETAP on NVIDIA Omniverse. At a subsequent NVIDIA GTC in San Jose, Schneider unveiled a Vera Rubin reference design and a lifecycle digital twin architecture within the DSX Blueprint. SINES is the first time the combined technology has been applied end to end on an operating site, with a developer and its tenant both participating.

  Brown attributed the urgency driving adoption to compressed AI factory delivery timelines. Power, cooling, and IT are now so tightly coupled that "the margin for error is very, very limited," he said. Data center delivery cycles have also fallen out of step with GPU hardware cycles, which are advancing faster, leaving operators needing to validate infrastructure decisions before hardware arrives on site.

  ## What comes next

  The SINES pilot marks a transition from reference architecture work to field validation for a class of simulation software that carries direct commercial stakes for operators building at AI-factory scale. Schneider's stated intent to commercialize the Immersive Twin through 2027 will test whether the bespoke single-site approach can be standardized into a repeatable product.

  Nscale's planned deployment of more than 66,000 Rubin GPUs for Microsoft in SIN02 from late 2027 represents one of the near-term infrastructure milestones the twin technology is expected to support.
body_zh: |
  施耐德電氣計畫於2027年前將沉浸式孿生（Immersive Twin）資料中心數位模擬平台推向商業化，此前已在葡萄牙Start Campus的SINES資料園區Nscale SIN01建築，完成首次端對端的實地部署。SIN01是SINES園區首棟落成建築，裝置容量26百萬瓦（MW），隸屬於規劃容量達1.2吉瓦（GW）的整體園區。消息於10月21日在NVIDIA GTC柏林大會上正式發布。

  這項試驗將即時電力與冷卻模擬連接至Nscale SIN01，孿生系統在NVIDIA Omniverse DSX Blueprint上運行。

  施耐德電氣EcoStruxure IT業務副總裁史蒂夫·布朗（Steve Brown）在活動現場接受《Capacity》採訪時表示：「這絕非一次性試驗，我們打算在明年推動商業化。」布朗表示商業洽談正在進行中，上市的具體步驟尚未確定，該產品目前尚未正式上市發售。

  ## 孿生系統的功能

  沉浸式孿生系統將NVIDIA Omniverse的3D視覺化功能，與施耐德自有的模擬引擎相結合：電力建模採用ETAP，冷卻模擬採用EcoStruxure IT，兩者透過AVEVA軟體串聯。布朗表示，與這些求解器的即時連線，使這套平台有別於靜態的CAD模型。

  操作人員可在模型中將原定的Vera Rubin機架替換為Blackwell機架，系統隨即將這項變更送入電力與冷卻求解器運算，並在同一介面中回傳建議方案或標示偏差。這個情境正好映照了Nscale在SINES的實際發展軌跡：SIN01現已部署超過12,600顆Blackwell Ultra GPU；而規劃容量最高達200百萬瓦的第二棟建築SIN02，則預計於2027年底開始為微軟（Microsoft）部署超過66,000顆NVIDIA Rubin GPU。

  布朗概述了兩種運作模式。在建設或翻新階段，重點在於他所稱的「time to token」——驗證冷卻分配單元（CDU）、管路與上游電力基礎設施的規格，是否足以支撐新的運算需求。一旦設施投入運行後，重心便轉移至「token efficiency」，亦即如何從現有基礎設施中榨取最大的AI運算效益。

  ## 三方合作架構

  SINES試驗匯聚了三個組織：Start Campus提供廠址、工程與營運資料；Nscale提供工作負載與IT需求；施耐德則提供孿生技術。布朗將這次合作的成果描述為「一加一加一大於三」。

  Nscale技術長大衛·鮑爾（David Power）在聲明中表示，孿生系統提供了「更清晰的視野」，讓團隊得以在現場實施變更前，找出全堆疊優化的空間。

  對Start Campus而言，孿生系統已具備直接的商業功能。當被問及這套系統是否已成為SINES在歐洲競爭場址中的賣點時，Start Campus行銷長歐瑪·威爾遜（Omer Wilson）告訴《Capacity》：「毫無疑問。」威爾遜表示，該場址的競爭優勢建立在規模、永續性、連結能力與靈活性之上，而在實際運行的AI工廠環境中測試基礎設施，更強化了這項主張。

  布朗表示，Start Campus長期的開發規劃是選擇該場址的重要因素：園區計畫從SIN01持續擴建，朝超過1吉瓦的容量邁進，孿生模型可在同一園區的後續建築中重複沿用。

  ## 邁向標準化產品

  目前每套孿生系統均依其所模擬的特定場址客製化打造。布朗表示，各資料中心所導入的建築模型各有差異，施耐德當前的首要目標是盡可能將核心技術標準化，並以SINES部署作為範本。

  他指出兩項技術挑戰。第一項是資產保真度：用於模擬的3D模型必須具備精準的物理屬性，才能產生可靠的結果。布朗表示，施耐德身為基礎設施設備製造商的身分，有助於確保自有及第三方資產均達到足夠的精準度以進行模擬。

  第二項挑戰——布朗稱之為機遇——在於大多數營運商雖了解資料中心內的各個資產，卻未曾記錄這些資產之間的連接關係：哪台開關設備連接至哪台不斷電系統（UPS）、母線槽與機架，往往缺乏文件記錄。施耐德的能源智慧協調層能夠對應這些關係，讓營運商得以模擬CDU設定值的調整對上游冷水機的影響，以及電力是否因此遭到閒置浪費。

  布朗表示，這套平台將保持開放與互通性，支援第三方模擬引擎。

  ## 從參考設計到實際營運場址

  SINES部署是施耐德AI工廠數位孿生計畫的第三個公開里程碑。2025年，該公司基於NVIDIA Omniverse搭配ETAP，推出了一套以電力為核心的AI工廠孿生系統。在隨後於聖荷西舉辦的NVIDIA GTC上，施耐德在DSX Blueprint框架內發布了Vera Rubin參考設計與生命週期數位孿生架構。SINES則是這套整合技術首次端對端應用於實際營運場址，且開發商與其租戶均同時參與其中。

  布朗將推動採用的迫切性歸因於AI工廠交付時程的壓縮。電力、冷卻與IT現已高度耦合，「容錯空間極為有限」，他說。資料中心的交付週期也已跟不上GPU硬體的更新節奏——後者的演進速度更快，導致營運商必須在硬體抵達現場前，就完成基礎設施決策的驗證工作。

  ## 後續發展

  SINES試驗標誌著這類模擬軟體從參考架構研究轉向實地驗證的重要轉捩點，對於以AI工廠規模進行建設的營運商而言，其商業利益直接相關。施耐德所宣示的2027年前將沉浸式孿生商業化的目標，將考驗這套按場址客製的單一部署方案，能否標準化為可重複複製的成熟產品。

  Nscale計畫自2027年底起在SIN02部署超過66,000顆Rubin GPU以服務微軟，這也代表了孿生技術預計將支援的近期基礎設施里程碑之一。
date: "2026-10-27"
source_published: "2026-10-26T12:57:06.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: ["Portugal"]
vendor: ["Nvidia", "Schneider Electric"]
trust:
  score: 3
  reasoning: "Single source: Schneider takes NVIDIA DSX digital twin from reference design to live 1.2GW site (trust 3/5)."
sources:
  - url: "https://capacityglobal.com/news/schneider-takes-nvidia-dsx-digital-twin-from-reference-design-to-live-1-2gw-site/"
    title: "Schneider takes NVIDIA DSX digital twin from reference design to live 1.2GW site"
    trust: 3
    type: primary
    published_at: "2026-10-26T12:57:06.000Z"
---
