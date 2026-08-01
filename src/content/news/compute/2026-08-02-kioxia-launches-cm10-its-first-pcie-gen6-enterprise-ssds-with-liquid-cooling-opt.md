---
title_en: "Kioxia launches CM10, its first PCIe Gen6 enterprise SSDs, with liquid-cooling options"
title_zh: "Kioxia發表首款PCIe Gen6企業級SSD CM10，支援液冷選項"
summary_en: "Kioxia has launched the CM10 series, its first enterprise solid-state drives built on the PCIe 6.0 interface, ahead of Flash Memory Summit 2026, targeting AI inference storage and claiming up to 92 percent higher sequential read performance over the previous CM9 generation. The product family spans both next-generation EDSFF and conventional 2.5-inch form factors, with the two running on different memory generations and interface speeds."
summary_zh: "Kioxia搶在Flash Memory Summit 2026前發表CM10系列，這是該公司首款採用PCIe 6.0介面的企業級固態硬碟，主打AI推論儲存應用，官方聲稱循序讀取效能較上一代CM9提升高達92%。"
body_en: |
  Kioxia has launched the CM10 series, its first enterprise solid-state drives (SSDs) built on the PCIe 6.0 interface, ahead of Flash Memory Summit (FMS) 2026, targeting artificial intelligence infrastructure where flash storage sits close to GPU accelerators.

  The new series uses Kioxia's BiCS FLASH generation 10 memory technology and is positioned for key-value (KV) cache workloads — a data structure that AI inference systems use to store and retrieve attention data during large-language-model processing — as well as NVIDIA CMX context memory solutions. Kioxia claims the CM10 delivers approximately 92 percent higher sequential read performance and approximately 85 percent higher random read performance compared with the CM9, the previous generation. The company tied those improvements to AI models with parameter counts approaching trillions and context windows expanding to millions of tokens.

  ## Form factors and cooling options

  The CM10 ships across two form-factor families. The EDSFF lineup, a newer SSD connector standard designed for data center deployments, includes an E3.S variant at 7.5 mm thickness and E1.S variants in 9.5 mm and 15 mm profiles. The 9.5 mm versions of both E3.S and E1.S support direct cold-plate liquid cooling. A dual-port E3.S variant is also available for high-availability storage arrays that require redundant data paths. All CM10 variants remain compatible with traditional air-cooled environments, the company said.

  A 2.5-inch variant extends the CM10 family to conventional enterprise chassis that cannot accommodate EDSFF connectors or require higher storage capacity per drive slot. The 2.5-inch drive is 15 mm thick and carries a dual-port design for high-availability applications.

  ## A split in memory generation and interface speed

  The two form-factor families do not share the same underlying technology. The EDSFF variants run on PCIe 6.0 with BiCS FLASH generation 10 memory, while the 2.5-inch variant uses BiCS FLASH generation 8 with TLC flash — TLC, or triple-level cell, stores three bits per memory cell — and runs on a PCIe 5.0 interface rather than PCIe 6.0.

  ServeTheHome, which covered the announcement, noted that the divergence reflects an emerging shift in enterprise storage. The publication said it had previously warned readers that traditional U.2 and U.3 drive connectors, which have led enterprise SSD deployments for roughly 15 years, were likely to give way to EDSFF as the electrical requirements of PCIe Gen6 escalated, and described the CM10 split as a concrete illustration of that transition. The use of different NAND generations in the two families — generation 10 in EDSFF and generation 8 in 2.5-inch — reflects the thermal and density requirements of each deployment environment, ServeTheHome said.

  ## Context and industry significance

  The CM10 launch coincides with the arrival of server processors that support PCIe Gen6, including the NVIDIA Vera CPU and AMD EPYC Venice series, according to ServeTheHome. Flash storage for KV cache — occupying a tier between GPU high-bandwidth memory (HBM) and networked storage — represents a growing part of AI infrastructure, and the CM10's direct liquid-cooling support addresses thermal constraints in the dense GPU pods where such drives would operate, the publication said.

  The CM10 represents a meaningful structural shift in how enterprise SSD product families are organized. By splitting PCIe 6.0 EDSFF drives from PCIe 5.0 2.5-inch drives within a single product branding, Kioxia can address next-generation liquid-cooled deployments and existing air-cooled infrastructure simultaneously. ServeTheHome observed that the pattern of pairing newer NAND generations with Gen6 EDSFF drives while continuing older generations in Gen5 2.5-inch drives may extend across the industry as more manufacturers confront the same interface constraints.

  Kioxia introduced the CM10 series ahead of FMS 2026, where additional details on availability are expected.
body_zh: |
  ## Kioxia發表首款PCIe Gen6企業級SSD CM10，支援液冷選項

  Kioxia搶在Flash Memory Summit（FMS）2026展前，正式發表CM10系列——該公司首款基於PCIe 6.0介面打造的企業級固態硬碟（SSD），鎖定AI基礎架構市場，讓快閃儲存裝置能緊鄰GPU加速器部署。

  新系列採用Kioxia第十代BiCS FLASH記憶體技術，定位於鍵值（KV）快取工作負載，以及NVIDIA CMX情境記憶體解決方案。所謂KV快取，是AI推論系統在處理大型語言模型時，用來儲存與檢索注意力資料的資料結構。Kioxia宣稱，CM10的循序讀取效能較前一代CM9提升約92%，隨機讀取效能則提升約85%。該公司將這些進步與參數量逼近兆級、情境視窗擴展至數百萬個詞元的AI模型需求緊密連結。

  ## 規格外型與散熱選項

  CM10提供兩大外型系列。EDSFF系列採用專為資料中心設計的新一代SSD連接器標準，包含厚度7.5毫米的E3.S規格，以及9.5毫米與15毫米兩種厚度的E1.S規格。E3.S與E1.S的9.5毫米版本均支援直接冷板液冷。此外，E3.S亦提供雙埠版本，適用於需要冗餘資料路徑的高可用儲存陣列。Kioxia表示，所有CM10版本均可相容於傳統風冷環境。

  2.5吋版本則將CM10家族延伸至無法容納EDSFF連接器、或需要更高單槽儲存容量的傳統企業機箱。該2.5吋硬碟厚度為15毫米，同樣採用雙埠設計，適合高可用應用場景。

  ## 記憶體世代與介面速度的分岐

  兩大外型系列並未採用相同的底層技術。EDSFF版本搭載PCIe 6.0介面，搭配第十代BiCS FLASH記憶體；2.5吋版本則採用第八代BiCS FLASH，使用TLC快閃——TLC即三層式儲存單元（triple-level cell），每個記憶體單元儲存三個位元——介面為PCIe 5.0，並非PCIe 6.0。

  報導此次發表的ServeTheHome指出，這樣的分岐反映了企業儲存領域正在浮現的世代轉移。該媒體表示，先前曾提醒讀者，在企業SSD市場主導長達約15年的傳統U.2與U.3硬碟連接器，可能因PCIe Gen6對電氣規格要求升高而逐漸讓位給EDSFF，並將CM10的這種分拆視為此一轉變的具體例證。兩個系列採用不同世代NAND——EDSFF採第十代、2.5吋採第八代——反映了各自部署環境在散熱與密度方面的不同需求，ServeTheHome如此表示。

  ## 背景脈絡與產業意義

  根據ServeTheHome的報導，CM10的發表時機恰好與支援PCIe Gen6的伺服器處理器問世同步，包括NVIDIA Vera CPU及AMD EPYC Venice系列。快閃儲存在KV快取中佔據一個介於GPU高頻寬記憶體（HBM）與網路儲存之間的階層，已成為AI基礎架構中日益重要的環節；而CM10所支援的直接液冷，正是為了因應此類硬碟所要部署之高密度GPU機櫃的散熱限制，ServeTheHome表示。

  CM10代表企業SSD產品家族組織方式的一次重大結構性轉變。Kioxia在同一品牌下，將PCIe 6.0 EDSFF硬碟與PCIe 5.0 2.5吋硬碟明確分拆，得以同時兼顧下一代液冷部署環境與現有風冷基礎架構。ServeTheHome觀察到，將較新NAND世代搭配Gen6 EDSFF硬碟、較舊世代延續用於Gen5 2.5吋硬碟的模式，可能隨著更多製造商面臨相同介面限制而在業界普遍蔓延。

  Kioxia在FMS 2026前夕推出CM10系列，預計將在展會上公布更多供貨細節。
date: "2026-08-02"
source_published: "2026-08-01T15:00:24.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Kioxia CM10 Series Launched for the PCIe Gen6 Generation of SSDs (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/kioxia-cm10-series-launched-for-the-pcie-gen6-generation-of-ssds/"
    title: "Kioxia CM10 Series Launched for the PCIe Gen6 Generation of SSDs"
    trust: 3
    type: primary
    published_at: "2026-08-01T15:00:24.000Z"
---
