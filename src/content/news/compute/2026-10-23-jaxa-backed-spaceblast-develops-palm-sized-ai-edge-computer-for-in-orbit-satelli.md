---
title_en: "JAXA-backed SpaceBlast develops palm-sized AI edge computer for in-orbit satellite data processing"
title_zh: "SpaceBlast獲JAXA資金支援，研發衛星用掌上型AI邊緣電腦"
summary_en: "SpaceBlast, a Tokyo space startup selected for a JAXA funding program in February 2026, is developing TENEDGE CORE, a palm-sized edge computer designed to run small AI models aboard satellites and compress imagery data before it reaches the ground."
summary_zh: "東京太空新創公司SpaceBlast獲選日本宇宙航空研究開發機構（JAXA）資金支援計畫，正在研發一款名為TENEDGE CORE的掌上型邊緣電腦，讓衛星得以在軌道上執行小型AI模型並壓縮影像資料，大幅降低須傳輸回地面的資料量。該裝置提供約60 TOPS的AI推論效能，採有別於傳統太空硬體的散熱與錯誤修正設計，計畫於2031財政年度前完成在軌驗證。"
body_en: |
  SpaceBlast, a Tokyo space startup selected this year for a Japan Aerospace Exploration Agency (JAXA) support fund program, is developing a palm-sized edge computer designed to run small AI models aboard satellites and reduce the volume of data that must be transmitted to Earth.

  The company presented its TENEDGE data processing platform and its TENEDGE CORE edge computer at Japan IT Week Fall 2026, held at Makuhari Messe from October 21 to 23. JAXA selected SpaceBlast for its support fund program in February 2026; funded development began in April.

  ## What TENEDGE CORE does

  TENEDGE CORE is an edge computer small enough to fit in the palm of a hand. SpaceBlast says a single unit delivers approximately 60 TOPS — 60 trillion arithmetic operations per second, a standard measure of AI inference throughput — making it capable of running a small language model (SLM), a compact AI model designed for hardware-constrained environments.

  The device takes a different approach from conventional space hardware, which typically relies on radiation-resistant materials and circuit designs to prevent faults caused by cosmic rays. Instead, TENEDGE CORE uses high heat-dissipation materials and incorporates error detection and correction mechanisms directly into its memory and latch circuits. SpaceBlast said this approach improves availability in extreme environments including space, Antarctica, and high-altitude locations.

  ## Reducing the satellite downlink bottleneck

  Satellites generate large volumes of imagery that must be sent over limited radio links before reaching ground stations. TENEDGE runs an SLM on the satellite itself to analyze imagery in orbit and extract only relevant information, transmitting metadata rather than raw files. SpaceBlast said raw data that would otherwise occupy megabytes can be reduced to kilobyte-scale metadata before downlink.

  The longer-term commercial service concept, which SpaceBlast is calling TENEDGE SPACE AI CLOUD, would allow ground operators to specify data requirements by querying a large language model (LLM) on the ground; that LLM would then translate the request into processing instructions for the orbital SLM. SpaceBlast said ground-side development for this service remains at an early stage.

  ## Applications and deployment roadmap

  SpaceBlast cited construction, urban development, and agriculture as target markets for efficient satellite imagery acquisition. A company representative also described a potential role in lunar operations: combining TENEDGE with Japan's in-development lunar positioning systems could support real-time tracking of lunar rovers and monitoring of surface conditions, the representative said.

  Under the current JAXA program, SpaceBlast plans to deploy TENEDGE CORE on at least two satellites and aboard a space station; further details were not disclosed. The JAXA support period extends through fiscal year 2031, by which point the company aims to complete technical development and in-orbit demonstration while pursuing commercial customers in parallel.
body_zh: |
  東京太空新創公司SpaceBlast今年獲選日本宇宙航空研究開發機構（JAXA）資金支援計畫，正在研發一款掌上型邊緣電腦，讓衛星能在軌道上執行小型AI模型，同時降低必須傳輸至地球的資料量。

  該公司於2026年10月21日至23日在幕張Messe舉辦的Japan IT Week Fall 2026（日本IT週秋季展）上，發表了TENEDGE資料處理平台及TENEDGE CORE邊緣電腦。JAXA於2026年2月將SpaceBlast納入其資金支援計畫，資金開發工作自同年4月正式啟動。

  ## TENEDGE CORE的功能

  TENEDGE CORE是一款小到可以握在掌心的邊緣電腦。SpaceBlast表示，單一裝置可提供約60 TOPS的運算效能——即每秒60兆次算術運算，這是衡量AI推論吞吐量的標準指標——足以執行小型語言模型（SLM）。SLM是一種專為硬體資源受限環境設計的輕量AI模型。

  這款裝置的設計理念有別於傳統太空硬體。傳統太空硬體通常仰賴抗輻射材料與電路設計，以防範宇宙射線所引發的故障；TENEDGE CORE則改採高散熱材料，並在記憶體與鎖存電路中直接整合錯誤偵測與修正機制。SpaceBlast表示，這種方式能提升裝置在極端環境下的可用性，適用範圍涵蓋外太空、南極洲及高海拔地區。

  ## 突破衛星下行頻寬的瓶頸

  衛星會產生大量影像資料，這些資料必須透過頻寬有限的無線電鏈路傳送，才能抵達地面站。TENEDGE讓衛星在軌道上直接執行SLM，分析影像並只擷取相關資訊，傳輸的是元資料（metadata）而非原始檔案。SpaceBlast指出，原本可能佔用數MB的原始資料，在下行傳輸前即可壓縮至KB等級的元資料。

  在更長遠的商業服務構想上，SpaceBlast規劃推出名為TENEDGE SPACE AI CLOUD的服務，讓地面操作人員透過地面端的大型語言模型（LLM）提出資料需求，再由該LLM將請求轉譯成軌道SLM的處理指令。SpaceBlast表示，這項服務的地面端開發目前仍處於早期階段。

  ## 應用場景與部署時程

  SpaceBlast將建築、都市開發及農業列為高效率衛星影像取得的目標市場。公司代表也提及一項潛在應用場景：將TENEDGE與日本正在研發的月球定位系統相結合，有望支援月球漫遊車的即時追蹤，以及月面狀況的即時監測。

  在現行JAXA計畫框架下，SpaceBlast預計將TENEDGE CORE部署至至少兩顆衛星及一座太空站，惟進一步細節暫未透露。JAXA的支援期延伸至2031財政年度，屆時該公司目標完成技術開發與在軌驗證，同時並行開拓商業客戶。
date: "2026-10-23"
source_published: "2026-10-22T09:00:00.000Z"
category: "compute"
secondary_categories: ["software-ops"]
region: ["Japan"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: 手のひらサイズの“宇宙AIデータセンター”？　JAXA後押しの国内新興が実現目指す　南極・高山での利用も視野 (trust 3/5)."
sources:
  - url: "https://www.itmedia.co.jp/news/article/2610/22/2000002510/"
    title: "手のひらサイズの“宇宙AIデータセンター”？　JAXA後押しの国内新興が実現目指す　南極・高山での利用も視野"
    trust: 3
    type: primary
    published_at: "2026-10-22T09:00:00.000Z"
---
