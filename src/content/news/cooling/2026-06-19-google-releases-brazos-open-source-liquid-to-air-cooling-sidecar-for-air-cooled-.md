---
title_en: "Google releases Brazos open-source liquid-to-air cooling sidecar for air-cooled data centers"
title_zh: "Google發布Brazos開源液對空冷側架　助氣冷資料中心導入高密度液冷"
summary_en: "Google has released Brazos, an open-source, rack-mounted liquid-to-air cooling sidecar designed to bring high-density liquid cooling to existing air-cooled data centers. The system is already generally available, supports a 60 kW nominal thermal load per rack, and interfaces with standard Open Compute Project ORv3 racks, with Google's manufacturing suppliers ready to produce the design."
summary_zh: "Google發布開源機架式液對空冷卻側架Brazos，設計目的是讓現有氣冷資料中心得以導入高密度液冷設備。該系統已正式上市，每機架額定散熱負載達60千瓦，相容標準Open Compute Project ORv3機架，Google的製造合作夥伴已準備好生產此設計。"
body_en: |
  Google has released Brazos, an open-source, rack-mounted closed-loop liquid-to-air cooling system designed to deploy high-density liquid cooling within existing air-cooled data center environments.

  The system is generally available, Google said, and the company's manufacturing suppliers are "ready to engage the broader industry to market and produce the Google Brazos design."

  ## How Brazos works

  Brazos is self-contained. It captures heat via liquid at the component level, then rejects that heat into the data center's hot aisle using liquid-to-air heat exchangers. The design is intended to allow installation of high-density, liquid-cooled equipment one unit at a time.

  The system is modular, comprising three cooling units and integrated rack manifolds. Each chassis stands 11 Open Units of rack height and interfaces with standard Open Compute Project (OCP) ORv3 form-factor racks, an open hardware specification for data center rack infrastructure.

  Key specifications:

  - **Thermal capacity:** 60 kW nominal load per rack, distributed across three modular units
  - **Coolant:** deionized water or a 25 percent propylene glycol-water mixture
  - **Power input:** 40–60V DC, connecting directly to standard rack busbars
  - **Safety certifications:** UL/CSA/IEC 62368-1
  - **Safety features:** built-in leak detection and pressure relief valves
  - **Management:** built-in human-machine interface (HMI) with remote management via Modbus over TCP

  Google said it intends to open-source the technical specifications, design principles, and visual assets of Brazos.

  ## AI workloads and rising rack power densities

  The release reflects a broader industry effort to adapt existing air-cooled data center infrastructure to the higher rack power densities driven by artificial intelligence workloads. That transition has proved complex to implement for both new developments and retrofits, Google said.

  Google described Brazos as part of "a broader infrastructure portfolio that continues to leverage waterless air-cooled systems alongside liquid cooling," and one of many innovations it is contributing to the open hardware ecosystem.

  ## Google's broader open sidecar work

  Brazos is not Google's first contribution to open sidecar cooling and power designs. The company has participated in the Open Compute Project, contributing to the standardization of electrical and mechanical interfaces. Together with Meta and Microsoft, Google developed an AC-to-DC sidecar power rack that reserves main rack space for compute — graphics processing units (GPUs), tensor processing units (TPUs), and central processing units (CPUs).

  That design, called Mount Diablo, was announced by Microsoft and Meta in 2024. It separates power and compute into separate cabinets, with the power cabinet functioning as a sidecar alongside the compute rack.

  Amazon Web Services (AWS) has pursued a comparable approach with its In Row Heat Exchanger, a sidecar liquid cooling design that can be installed without adjusting existing air-cooled mechanical systems.

  ## What the open-source release means for operators

  Google's stated goal is to allow high-performance liquid cooling with "the operational simplicity of standard air systems." Open-sourcing the Brazos specifications gives manufacturers the information needed to produce the design and allows operators — including those running facilities not originally built for liquid cooling — to evaluate and adopt it.

  "We invite system architects, manufacturers, and thermal engineers to evaluate these designs to scale rack-mounted cooling infrastructure for the high-power computing demands of the future," Google said.

  Longer term, Google said it is exploring direct distribution of higher-voltage DC power within the data center and to the rack.
body_zh: |
  Google發布了Brazos，這是一套開源的機架式封閉迴路液對空冷卻系統，專為在現有氣冷資料中心環境中部署高密度液冷而設計。

  Google表示，該系統目前已正式上市，公司的製造合作夥伴「已準備好與更廣泛的產業接洽，共同行銷和生產Google Brazos設計」。

  ## Brazos的運作原理

  Brazos是一套自給自足的系統。它在元件層級透過液體捕捉熱量，再透過液對空熱交換器將熱量排放至資料中心的熱走道。此設計旨在允許逐台安裝高密度液冷設備。

  該系統採模組化設計，由三個冷卻單元與整合式機架歧管組成。每個機箱高度為11U（開放機架單位），可與標準Open Compute Project（OCP）ORv3規格機架相容——ORv3是資料中心機架基礎設施的開放硬體規範。

  主要規格如下：

  - **散熱容量：** 每機架額定負載60千瓦，分散於三個模組化單元
  - **冷卻液：** 去離子水或25%丙二醇水溶液
  - **電源輸入：** 40至60V直流電，直接連接至標準機架匯流排
  - **安全認證：** UL／CSA／IEC 62368-1
  - **安全功能：** 內建洩漏偵測與壓力釋放閥
  - **管理介面：** 內建人機介面（HMI），並支援透過Modbus over TCP進行遠端管理

  Google表示，計畫開源Brazos的技術規格、設計原則及視覺資產。

  ## AI工作負載與機架功率密度持續攀升

  此次發布反映了業界更廣泛的努力——將現有氣冷資料中心基礎設施，調整以因應人工智慧工作負載所驅動的更高機架功率密度。Google表示，無論是新建設施還是改造既有設施，這一轉型都相當複雜。

  Google將Brazos定位為「持續結合無水氣冷系統與液冷的更廣泛基礎設施組合」的一部分，也是公司為開放硬體生態系所貢獻的眾多創新之一。

  ## Google在開源側架領域的更多貢獻

  Brazos並非Google在開源側架冷卻與電源設計方面的首次貢獻。該公司長期參與Open Compute Project，協助推動電氣與機械介面的標準化。Google與Meta及微軟共同開發了一套交流轉直流側架電源機架，將主機架空間保留給運算元件——包括繪圖處理器（GPU）、張量處理器（TPU）與中央處理器（CPU）。

  這套設計稱為Mount Diablo，由微軟與Meta於2024年宣布。其設計將電源與運算分置於獨立機櫃，電源機櫃作為側架與運算機架並排運作。

  亞馬遜雲端服務（AWS）則以類似思路推出了「列中熱交換器」（In Row Heat Exchanger），這是一種側架式液冷設計，無需調整現有氣冷機械系統即可安裝。

  ## 開源發布對業者的意義

  Google表示的目標，是讓高效能液冷系統能夠具備「標準氣冷系統的操作簡便性」。開源Brazos規格，讓製造商取得生產所需資訊，也讓業者——包括原本並非為液冷而建的設施營運商——得以評估並採用此設計。

  「我們邀請系統架構師、製造商與熱工程師評估這些設計，以擴展機架式冷卻基礎設施，因應未來高功率運算的需求，」Google表示。

  從長遠來看，Google表示正在探索在資料中心內部及機架層級直接配送更高電壓直流電的可能性。
date: "2026-06-19"
source_published: "2026-06-18T16:30:33.000Z"
category: "cooling"
secondary_categories: ["regulatory"]
region: []
vendor: ["AWS"]
trust:
  score: 3
  reasoning: "Single source: Google unveils new open-source liquid-to-air cooling sidecar for air-cooled environments (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/news/google-unveils-new-open-source-liquid-to-air-cooling-sidecar-for-air-cooled-environments/"
    title: "Google unveils new open-source liquid-to-air cooling sidecar for air-cooled environments"
    trust: 3
    type: primary
    published_at: "2026-06-18T16:30:33.000Z"
---
