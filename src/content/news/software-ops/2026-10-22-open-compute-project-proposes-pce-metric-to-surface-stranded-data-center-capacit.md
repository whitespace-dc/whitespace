---
title_en: "Open Compute Project Proposes PCE Metric to Surface Stranded Data Center Capacity"
title_zh: "開放運算計畫提出PCE新指標　揭露資料中心閒置電力容量"
summary_en: "The Open Compute Project has published a paper introducing power compute effectiveness (PCE), a metric that quantifies how much of a data center's provisioned power is structurally available for servers versus consumed by cooling, electrical losses, and support systems. Proponents say PCE complements the existing PUE efficiency standard and is most applicable when operators need to recover stranded compute capacity within fixed power envelopes."
summary_zh: "開放運算計畫（OCP）發表論文，提出「電力運算效能」（PCE）指標，量化資料中心已配置電力中真正可供伺服器使用的比例，而非消耗於冷卻、電力損耗及支援系統的部分。倡議者表示，PCE可補充現行PUE效率標準，尤其適用於在固定電力配額內試圖挖掘閒置算力的營運商。"
body_en: |
  The Open Compute Project has published a paper introducing power compute effectiveness (PCE), a proposed metric that expresses how much of a data center's total provisioned power is structurally allocated to compute rather than consumed by cooling infrastructure, electrical conversion losses, and auxiliary systems such as lighting, controls, and security.

  The metric was defined by Airsys Cooling Technologies in the OCP paper and is expressed as a simple ratio. A 100-megawatt (MW) facility — enough to power a small city — that reserves 30 MW for support loads has a PCE of 0.70, meaning 70 MW is structurally available for servers. Paul Quigley, Chief Strategic Relations Officer at Airsys and a co-author of the paper, framed the concept directly: "PCE asks a very simple question: Of all the power provisioned for a data center, how much is actually provisioned for compute?"

  Proponents say PCE is not a replacement for power usage effectiveness (PUE), the industry-standard metric that compares total facility energy consumption to IT equipment energy use. Instead, they argue it answers a question PUE cannot: within a fixed power envelope, how much capacity is actually available for servers before they are even switched on.

  ## How PCE differs from PUE

  PUE measures operational efficiency while a facility is running. According to Uptime Institute, average PUE across the industry has improved from roughly 2.5 to about 1.6 over the past 20 years, and some facilities now report 1.1 or better. Despite that progress, PUE has structural limits. It can leave room for interpretation about what qualifies as IT load versus facility load — fan power classification, for example, varies from site to site — and shared utility metering can complicate comparisons further.

  PCE is calculated at the provisioned-power level, upstream of operations, making it applicable to design comparisons and retrofit evaluations that PUE cannot inform. Quigley offered a design-phase example: two hypothetical 50 MW facilities, one using a conventional chilled-water plant requiring 10 MW for cooling and another using a warm-liquid loop with dry coolers requiring 5 MW. With equivalent electrical losses and building loads, the first design leaves 37 MW for compute (PCE: 0.74) and the second leaves 42 MW (PCE: 0.84). "That is a 5 MW difference decided on paper, before any concrete is poured," Quigley said. "That's an example where PCE differs from PUE, which can only be measured after the meter is spinning."

  Bill Kleyman, executive chair of Data Center Programs at AFCOM, an association for data center professionals, said the metric extends beyond initial design. "I see value in PCE beyond the initial design phase, particularly for operators evaluating retrofits and figuring out how much provisioned power can actually support IT equipment," he said. "The right framing is to consider PCE as a complement to PUE."

  ## Recovering stranded power in constrained markets

  The metric's practical appeal sharpens when operators cannot expand their total power envelope. In many markets, obtaining additional grid capacity is slow or unavailable, and constructing new on-site generation is costly. PCE makes the existing allocation visible, giving engineers a framework for evaluating whether changes to cooling architecture, electrical design, or building systems could free up capacity already paid for.

  Quigley described a facility with 20 MW provisioned for an older cooling architecture, 7 MW allocated to electrical conversion and distribution losses, and 3 MW dedicated to auxiliary loads. An engineering study showing that a cooling retrofit could reduce the cooling allocation from 20 MW to 12 MW would make another 8 MW structurally available for compute — without any new utility application. "The infrastructure changes needed to achieve this gain may require significant capital investment," Quigley said. "What PCE uncovers is whether investment in cooling, electrical architecture, or other infrastructure can reallocate a larger portion of the existing power envelope to compute."

  The paper provides a colocation example to illustrate the capital-planning application. A 40 MW site with a PCE of 0.70 supports 28 MW of compute. If a tenant requires an additional 6 MW for an AI deployment, the conventional response is to seek more utility power. A PCE analysis instead asks whether infrastructure improvements could raise the site's score to 0.85, which would support 34 MW of compute within the same 40 MW envelope, eliminating the need for a new grid application.

  At a portfolio level, Quigley said, PCE could help operators compare sites and direct capital toward facilities where infrastructure investment would recover the most compute headroom. A facility with the lowest score does not automatically represent the best investment target; a site with a slightly better PCE may have far more recoverable capacity.

  ## Early data points

  Because PCE is new, no validated industry averages exist. The Airsys/OCP paper reported two real-world results: a 20 MW colocation site scored 0.705 and a 100 MW hyperscale campus scored 0.79. Quigley said many older, air-cooled facilities may fall between 0.50 and 0.65, while well-designed liquid-cooled sites could reach the high 0.80s. Those ranges are described as directional estimates rather than established benchmarks.

  ## Adoption prospects

  Whether PCE gains broad traction is an open question. PUE became a near-universal standard partly because it was simple, intuitive, and aligned with a broad industry movement toward energy efficiency. PCE is more narrowly scoped. The paper's proponents say it is most likely to resonate with infrastructure designers, capital planners, and operators working through constrained-power retrofit decisions rather than with the wider data center market.

  The absence of validated industry benchmarks means operators working with PCE now are doing so without a reference class. Quigley said the 0.705 and 0.79 figures from the paper's two case studies represent initial data points, and that the directional ranges for older and newer facility types will require more real-world examples before they can serve as reliable comparisons.
body_zh: |
  開放運算計畫（Open Compute Project，OCP）近日發表論文，提出「電力運算效能」（Power Compute Effectiveness，PCE）這項新指標。PCE用以表達資料中心全部已配置電力中，在結構上分配給運算設備的比例，而非消耗於冷卻基礎設施、電力轉換損耗，以及照明、控制系統、門禁等輔助系統的部分。

  PCE指標由Airsys Cooling Technologies在OCP論文中定義，以簡單比率表示。以一座100百萬瓦（MW）的設施為例——其電力規模足以供應一座小城市——若其中30 MW用於支援負載，則PCE為0.70，意即70 MW在結構上可供伺服器使用。Airsys首席戰略關係長、論文共同作者Paul Quigley直接點出這個概念的核心：「PCE提出一個非常簡單的問題：在資料中心所有已配置的電力當中，究竟有多少是真正為運算設備所配置的？」

  倡議者表示，PCE並非要取代電力使用效率（Power Usage Effectiveness，PUE）——PUE是現行業界標準指標，用以比較設施總能耗與IT設備能耗的比值。他們的論點是，PCE回答了PUE無法回答的問題：在固定電力配額內，伺服器尚未開機之前，實際上有多少容量可供使用？

  ## PCE與PUE的差異

  PUE衡量的是設施運轉時的營運效率。根據Uptime Institute的資料，業界平均PUE在過去20年間已從約2.5改善至約1.6，部分設施現已達到1.1甚至更低。儘管如此，PUE仍有結構性局限。在認定何者屬於IT負載、何者屬於設施負載方面，PUE存在解讀空間——例如，風扇電力的歸類方式因場地而異——共用電表計量也會使比較更加複雜。

  PCE則在配置電力層面計算，發生在實際營運之前，因此適用於PUE無法涉及的設計比較與改造評估。Quigley舉了一個設計階段的例子：兩座假設性的50 MW設施，一座採用傳統冷凍水系統，需耗費10 MW用於冷卻；另一座採用暖液體迴路搭配乾式冷卻器，僅需5 MW。在電力損耗和建築負載相當的前提下，第一種設計可留給運算設備37 MW（PCE：0.74），第二種則可留下42 MW（PCE：0.84）。「這是在圖紙上就能決定的5 MW差距，混凝土還沒澆灌，」Quigley說，「這正是PCE與PUE不同之處——PUE只能在電表開始轉動之後才能量測。」

  資料中心專業人員協會AFCOM的資料中心計畫執行主席Bill Kleyman表示，PCE的價值不僅限於初始設計階段。「我認為PCE在初始設計之外同樣具有價值，特別是對於正在評估改造方案、試圖釐清已配置電力中有多少能真正支援IT設備的營運商，」他說，「正確的思考框架是將PCE視為PUE的補充指標。」

  ## 在受限市場中挖掘閒置電力

  當營運商無法擴大總電力配額時，這項指標的實際價值更為凸顯。在許多市場，取得額外電網容量速度緩慢甚或無從取得，而建設新的場內發電設施成本高昂。PCE讓現有配置的電力結構一目了然，為工程師提供一套框架，用以評估冷卻架構、電氣設計或建築系統的調整，是否能夠釋放已付費但遭閒置的容量。

  Quigley描述了這樣一個情境：一座設施配置20 MW用於舊式冷卻架構、7 MW分配給電力轉換與配電損耗、3 MW專用於輔助負載。若一項工程研究顯示，冷卻系統改造可將冷卻配置從20 MW降至12 MW，則可在不提出任何新電力申請的情況下，多出8 MW在結構上可供運算設備使用。「要實現這項增益所需的基礎設施變更，可能需要大量資本投入，」Quigley說，「PCE所揭示的，是對冷卻系統、電氣架構或其他基礎設施的投資，是否能將現有電力配額中更大的比例重新分配給運算設備。」

  論文提供了一個共置機房（colocation）案例，以說明資本規劃的應用。一座40 MW、PCE為0.70的場地可支援28 MW的運算負載。若某位租戶為部署AI需要額外6 MW，傳統做法是申請更多電網電力。PCE分析則改而詢問：基礎設施升級能否將該場地PCE提升至0.85？若能，在同樣的40 MW配額內，可支援的運算負載將達34 MW，從而免去新的電網申請。

  在整體投資組合層面，Quigley表示，PCE可協助營運商比較不同場地，並將資本導向基礎設施投資能挖掘最多運算空間的設施。PCE得分最低的設施並不自動成為最佳投資標的；一座得分略高的場地，可恢復的容量可能遠遠更多。

  ## 早期數據

  由於PCE問世不久，目前尚無經過驗證的業界平均值。Airsys/OCP論文報告了兩項真實數據：一座20 MW的共置場地得分0.705，一座100 MW的超大規模（hyperscale）園區得分0.79。Quigley表示，許多老舊的氣冷設施得分可能介於0.50至0.65之間，而設計良好的液冷設施則可達到0.80後段班以上。這些區間被定位為方向性估算，而非已確立的基準值。

  ## 普及前景

  PCE能否獲得廣泛採用，目前仍是未知數。PUE之所以成為近乎通用的標準，部分原因在於它簡單直觀，且與業界廣泛的能源效率提升趨勢相契合。PCE的應用範疇則較為狹窄。論文倡議者表示，PCE最可能引起基礎設施設計師、資本規劃人員，以及正在面對電力受限改造決策的營運商的共鳴，而非整個資料中心市場。

  缺乏經過驗證的業界基準，意味著目前使用PCE的營運商是在沒有參考基礎的情況下摸索前行。Quigley表示，論文兩個案例研究所呈現的0.705與0.79僅屬初步數據，而舊式與新式設施類型的方向性區間，在成為可靠比較參考之前，仍有待更多真實案例加以佐證。
date: "2026-10-22"
source_published: "2026-10-21T09:00:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: New PCE Metric Could Recover Stranded Data Center Power (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/energy-power-supply/new-pce-metric-could-recover-stranded-data-center-power"
    title: "New PCE Metric Could Recover Stranded Data Center Power"
    trust: 3
    type: primary
    published_at: "2026-10-21T09:00:00.000Z"
---
