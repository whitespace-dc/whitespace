---
title_en: "NVIDIA launches NVLink Fusion to connect custom accelerators to its NVLink network and MGX rack platform"
title_zh: "輝達推出NVLink Fusion，開放客製加速器接入其互連網路與MGX機架平台"
summary_en: "NVIDIA has launched NVLink Fusion, a program that lets companies building custom accelerator processors plug into NVIDIA's NVLink scale-up network and MGX rack-scale infrastructure. The product targets hyperscalers and AI-native operators developing custom silicon who want to avoid engineering the surrounding network, cooling, power, and supply-chain layers from scratch."
summary_zh: "輝達（NVIDIA）推出NVLink Fusion計畫，讓企業研發的客製加速器處理器（XPU）得以接入其NVLink擴展互連網路與MGX機架規模基礎設施。此方案主要面向正在開發客製晶片的超大規模雲端業者與AI原生營運商，協助其免去從頭打造周邊網路、散熱、電力及供應鏈等基礎設施的工程負擔。"
body_en: |
  NVIDIA has launched NVLink Fusion, a program that connects third-party custom accelerator processors — which NVIDIA calls XPUs — into its NVLink scale-up interconnect network and MGX rack-scale infrastructure, giving hyperscalers and AI-native operators a path to deploy custom silicon without building every surrounding layer of an AI data center independently.

  ## What NVLink Fusion provides

  The offering has two primary hardware elements. The first is NVLink itself, which links custom XPUs into the same scale-up network used by NVIDIA's own GPUs. The second is NVLink-C2C, a chip-to-chip interface for connecting those XPUs to either NVIDIA's Vera CPUs or CPUs from other ecosystem vendors.

  Companies adopting NVLink Fusion can use NVIDIA's MGX rack-scale architecture and the supply chain that supports existing MGX-based systems, including the Vera Rubin NVL72 — a 72-GPU rack configuration. Manufacturing partners take responsibility for system design and integration, while components for racks, cooling, and power come from suppliers already operating within the MGX ecosystem.

  ## Network performance and roadmap

  NVIDIA said sixth-generation NVLink can connect up to 72 XPUs in a single interconnect domain. The company said end-to-end latency for XPU-to-XPU transfers is three times lower than alternatives based on standard Ethernet, and that NVLink packet rates are 10 times higher than Ethernet-based options. For the CPU-to-XPU link, NVLink-C2C delivers up to six times the energy efficiency of a PCIe (Peripheral Component Interconnect Express) interface, according to NVIDIA.

  NVIDIA also disclosed a roadmap for future NVLink configurations that would support domains of up to 1,152 accelerators, incorporating co-packaged optics — a technique that integrates optical components directly into chip packages to reduce power consumption and signal loss at high speeds.

  ## The infrastructure timing problem

  NVIDIA argued that companies building custom silicon frequently encounter delays and cost overruns once they move beyond chip design into the surrounding infrastructure: network integration, rack engineering, cooling, power systems, software, and supplier management.

  The timing issue is particularly acute for large facility operators. Power procurement, facility planning, cooling design, rack layout, and network architecture often begin well before an operator has finalized its accelerator selection, according to NVIDIA. Tying a site's infrastructure too closely to a single chip plan creates risk if that plan changes.

  MediaTek's corporate senior vice president and general manager of the data centre and computing business group, Vince Hu, described the benefit as schedule decoupling: "The value of the NVLink Fusion program is ... [customers] can deploy their rack-level solution with the NVIDIA GPU, and then they can decouple the development of their XPU and put it at a different pace."

  Intel's vice president and general manager of data centre silicon engineering, Tim Wilson, described the flexibility in chip selection: "NVLink Fusion gives customers the ability to choose the CPU architecture, the performance level, the software capabilities that best meet their needs for the workloads that they care about."

  ## Ecosystem and named partners

  NVIDIA said the NVLink Fusion ecosystem spans ASIC (application-specific integrated circuit) design, CPU, IP, and optical interconnect partners. Companies cited at launch included Intel, MediaTek, GUC, QCT and Quanta Computer, and Amazon's Annapurna Labs.

  Lie-Szu Juang, chair and chief strategy officer at GUC — a semiconductor design services firm — described the architecture's function: "NVLink Fusion allows the hyperscalers or the custom ASIC designers to integrate their own custom CPU or XPU and bridges the NVIDIA technology with a third-party process to create a unified rack-scale architecture."

  CC Lee, senior hardware development manager at Annapurna Labs, an Amazon company, cited time-to-market and supply-chain access as primary motivations: "With NVLink Fusion we can use proven NVL72 rack design to have time-to-market, and we can have access to multiple suppliers to help us to deliver more into the hands of our customers."

  ## Manufacturing and rack design

  Jack Luoh, head of product and solution at QCT and Quanta Computer, noted that manufacturing automation developed for the Vera Rubin NVL72 carries over directly to NVLink Fusion-based systems: "With Vera Rubin [NVL72], we are looking at almost 100% automation of system builds in the manufacturing line. Most of those investments can be leveraged if the XPU leverages NVLink Fusion."

  At the rack level, NVIDIA said reference compute trays use liquid cooling throughout and are designed so trays can be removed while the rest of the rack continues operating. NVLink Switch trays — the hardware units that route traffic across the NVLink network — are also liquid cooled and support continued operation during servicing.

  ## AI factory and software integration

  NVIDIA positioned NVLink Fusion within its broader AI factory strategy, saying the product aligns with its DSX reference architecture, which covers building design, power, cooling, compute, and networking. NVIDIA also cited its Omniverse DSX AI Factory Blueprint, a digital twin tool that allows partners to model facility configurations before physical deployment.

  Software integration across mixed-processor clusters is handled through several NVIDIA platforms: NCCL (NVIDIA Collective Communications Library) for distributed workloads, Dynamo and NIXL for disaggregation — splitting workloads across separate compute resources — and Mission Control for cluster management, telemetry, and debugging.

  ## Industry context and significance

  The launch reflects a shift in AI data center design toward heterogeneous processor environments, where operators combine different chip types for training, inference, reasoning, retrieval, and serving. That trend has created demand for shared rack formats, common cooling and power architectures, and software capable of managing multi-vendor clusters without requiring early commitment to a single processor architecture, according to NVIDIA.

  By making its NVLink network and MGX supply chain available to third-party accelerators, NVIDIA is positioning its rack and interconnect platform as a base layer for the broader custom silicon market — one that includes cloud providers and large AI operators developing their own chips. NVIDIA's roadmap calls for future NVLink domains to scale to 1,152 accelerators with co-packaged optics.
body_zh: |
  輝達（NVIDIA）推出NVLink Fusion計畫，將第三方客製加速器處理器——輝達稱之為XPU——接入其NVLink擴展互連網路與MGX機架規模基礎設施，為超大規模雲端業者和AI原生營運商提供一條部署客製晶片的路徑，無需自行逐一建構AI資料中心的每個周邊層次。

  ## NVLink Fusion的提供內容

  此方案涵蓋兩項主要硬體元素。其一是NVLink本身，將客製XPU接入與輝達自家GPU相同的擴展互連網路。其二是NVLink-C2C，一種晶片對晶片介面，用於將XPU連接至輝達的Vera CPU或生態系中其他廠商的CPU。

  採用NVLink Fusion的企業可使用輝達的MGX機架規模架構，以及支援現有MGX系統（包括Vera Rubin NVL72——一款72顆GPU機架配置）的供應鏈。製造夥伴負責系統設計與整合，機架、散熱及電力所需的元件則由已在MGX生態系內運作的供應商提供。

  ## 網路效能與技術藍圖

  輝達表示，第六代NVLink可在單一互連域中連接多達72顆XPU。輝達指出，XPU對XPU傳輸的端對端延遲比基於標準乙太網路的替代方案低三倍，NVLink的封包速率則是乙太網路方案的十倍。在CPU對XPU的連結方面，輝達表示NVLink-C2C的能源效率是PCIe（週邊元件互連快速）介面的六倍。

  輝達亦公布了未來NVLink配置的技術藍圖，可支援多達1,152顆加速器的互連域，並導入共封裝光學技術——一種將光學元件直接整合入晶片封裝的技術，旨在降低高速傳輸時的功耗與訊號損失。

  ## 基礎設施時序問題

  輝達指出，建構客製晶片的企業在晶片設計完成後，往往在周邊基礎設施層面遭遇延誤與成本超支，涵蓋網路整合、機架工程、散熱、電力系統、軟體及供應商管理等面向。

  對大型設施營運商而言，這個時序問題尤為嚴峻。輝達表示，電力採購、設施規劃、散熱設計、機架布局及網路架構，往往在營運商確定加速器選型之前便已展開。若將場地基礎設施過度綁定於單一晶片計畫，一旦計畫出現變動便會帶來相當風險。

  聯發科技（MediaTek）資料中心與運算業務群企業資深副總裁暨總經理Vince Hu，將此效益描述為進程解耦：「NVLink Fusion計畫的價值在於……客戶可以先以輝達GPU部署機架層級解決方案，然後將其XPU的開發解耦，以不同的節奏推進。」

  英特爾（Intel）資料中心矽晶工程副總裁暨總經理Tim Wilson則就晶片選擇的靈活性表示：「NVLink Fusion讓客戶得以針對自身在乎的工作負載，選擇最符合需求的CPU架構、效能等級與軟體能力。」

  ## 生態系與指名合作夥伴

  輝達表示，NVLink Fusion生態系涵蓋ASIC（特殊應用積體電路）設計、CPU、IP及光學互連合作夥伴。發布時列名的企業包括英特爾、聯發科技、創意電子（GUC）、廣達電腦旗下QCT及廣達電腦本身，以及亞馬遜旗下的Annapurna Labs。

  半導體設計服務公司創意電子（GUC）董事長暨首席策略長Lie-Szu Juang描述了此架構的功能：「NVLink Fusion允許超大規模雲端業者或客製ASIC設計者整合自己的客製CPU或XPU，在輝達技術與第三方製程之間搭起橋梁，打造統一的機架規模架構。」

  亞馬遜旗下Annapurna Labs資深硬體開發經理CC Lee則以上市時程與供應鏈取得為主要動機：「藉助NVLink Fusion，我們可以使用經過驗證的NVL72機架設計掌握上市時程，並取得多家供應商的資源，協助我們將更多產品交到客戶手中。」

  ## 製造與機架設計

  QCT與廣達電腦產品暨解決方案主管Jack Luoh指出，為Vera Rubin NVL72開發的製造自動化技術，可直接沿用至基於NVLink Fusion的系統：「在Vera Rubin（NVL72）方面，我們在製造線上追求幾乎100%的系統組裝自動化。若XPU採用NVLink Fusion，多數投資皆可直接加以利用。」

  在機架層面，輝達表示參考運算托盤全程採用液冷設計，且可在機架其餘部分持續運作的情況下單獨抽換托盤。NVLink Switch托盤——負責在NVLink網路中路由流量的硬體單元——同樣採液冷設計，並支援在維護期間繼續運作。

  ## AI工廠與軟體整合

  輝達將NVLink Fusion定位於其更廣泛的AI工廠策略之中，表示此產品與其DSX參考架構相符，涵蓋建築設計、電力、散熱、運算及網路等層面。輝達亦引述其Omniverse DSX AI Factory Blueprint——一款數位孿生工具，允許合作夥伴在實體部署前先行模擬設施配置。

  跨異質處理器叢集的軟體整合由多個輝達平台負責：NCCL（NVIDIA集體通訊函式庫）用於分散式工作負載；Dynamo與NIXL負責分解運算，即將工作負載拆分至不同運算資源；Mission Control則負責叢集管理、遙測及除錯。

  ## 產業背景與意義

  此次發布反映出AI資料中心設計朝異質處理器環境轉型的趨勢——營運商針對訓練、推論、推理、檢索及服務等不同任務，組合使用不同類型的晶片。輝達表示，這一趨勢催生了對共用機架格式、通用散熱與電力架構，以及能夠管理多廠商叢集且無需過早綁定單一處理器架構之軟體的需求。

  藉由向第三方加速器開放NVLink網路與MGX供應鏈，輝達正將其機架與互連平台定位為更廣泛客製晶片市場的基礎層——這個市場涵蓋正在開發自有晶片的雲端服務商與大型AI營運商。輝達的技術藍圖指出，未來NVLink互連域將擴展至1,152顆加速器，並採用共封裝光學技術。
date: "2026-08-26"
source_published: "2026-08-25T15:45:00.000Z"
category: "compute"
secondary_categories: ["networking"]
region: []
vendor: ["Intel", "Nvidia", "Quanta Computer"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead NVIDIA launches NVLink Fusion for custom AI factories (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenternews.asia/story/nvidia-launches-nvlink-fusion-for-custom-ai-factories"
    title: "NVIDIA launches NVLink Fusion for custom AI factories"
    trust: 3
    type: primary
    published_at: "2026-08-25T15:45:00.000Z"
  - url: "https://datacenter.news/story/nvidia-launches-nvlink-fusion-for-custom-ai-factories"
    title: "NVIDIA launches NVLink Fusion for custom AI factories"
    trust: 3
    type: corroborating
    published_at: "2026-08-25T15:45:00.000Z"
---
