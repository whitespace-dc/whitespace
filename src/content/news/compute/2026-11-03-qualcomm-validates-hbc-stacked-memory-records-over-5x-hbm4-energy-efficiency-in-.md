---
title_en: "Qualcomm Validates HBC Stacked Memory, Records Over 5x HBM4 Energy Efficiency in Early Tests"
title_zh: "高通驗證HBC堆疊記憶體架構，早期測試能效超越HBM4逾五倍"
summary_en: "Qualcomm has completed initial validation of its High Bandwidth Compute stacked memory architecture, measuring more than five times the energy efficiency of HBM4 and 18 times the bandwidth of external LPDDR5X, ahead of planned Dragonfly AI250 accelerator sampling in 2027."
summary_zh: "高通宣布完成高頻寬運算（HBC）堆疊記憶體架構的初步驗證，早期測試顯示其能效為HBM4的五倍以上、頻寬為外接LPDDR5X的18倍，預計搭載此技術的Dragonfly AI250加速器將於2027年開始送樣。"
body_en: |
  Qualcomm announced it has completed initial validation of its High Bandwidth Compute (HBC) stacked memory architecture, recording more than five times the energy efficiency of HBM4 and 18 times the bandwidth of external LPDDR5X in early testing. The results, which Qualcomm said meet its development targets, bring the technology closer to commercial deployment in the Dragonfly AI250 data center accelerator, with sampling scheduled for 2027.

  The validation was conducted at Qualcomm's San Diego laboratories using an automated tester and marks the first public confirmation that HBC hardware functions as designed and delivers energy and bandwidth performance close to the company's expectations.

  ## How HBC differs from HBM

  HBC places a small compute die at the base of a stack of DRAM (dynamic random-access memory) layers rather than alongside them. Current HBM (High Bandwidth Memory) designs stack DRAM dies on a passive base die that connects back to a host processor over an ultra-wide memory bus — a configuration requiring expensive advanced packaging techniques such as CoWoS (Chip-on-Wafer-on-Substrate) or EMIB (Embedded Multi-die Interconnect Bridge). HBC replaces that passive base die with an active compute die, eliminating the need for an external wide memory bus connection between the memory stack and its host processor.

  Qualcomm argues that placing compute hardware directly beneath the memory stack reduces the energy cost of data movement. Moving data across even a short HBM-style interconnect consumes power; eliminating that distance, the company said, frees energy that can instead support processing performance or allow more chips to operate within a given power budget. That trade-off is material for AI inference workloads, which require moving large volumes of data between memory and compute hardware continuously.

  ## Cost and packaging trade-offs

  The architectural shift also targets production cost. Because the HBC compute die handles the most memory bandwidth-intensive operations locally, the connection from the HBC stack to a larger host processor die requires less bandwidth than a conventional HBM link. Lower bandwidth requirements allow that interconnect to be built on traditional two-dimensional organic substrates rather than the advanced packaging HBM currently demands, Qualcomm said.

  The design does not eliminate all manufacturing complexity. Like HBM, HBC still requires TSVs (through-silicon vias), fine vertical channels etched through stacked silicon layers to carry electrical signals between dies. Qualcomm said the requirement for advanced manufacturing has been narrowed from two steps — memory stacking and die-to-die package connectivity — to one: memory stacking alone.

  ## Validation findings and gaps

  The test stack used in the validation contained two DRAM layers. Shipping products will use four-layer stacks, meaning the tested configuration is a pre-production build at half the final layer count.

  Qualcomm reported three principal findings from the validation:

  - The technology functions as intended, confirming the architecture can be built.
  - The two-layer stack delivered more than five times the energy efficiency of HBM4, measured as bandwidth per watt against HBM4 published specifications.
  - Bandwidth was measured at 18 times that of external LPDDR5X memory.

  Qualcomm did not release absolute bandwidth numbers. The five-times efficiency result falls short of the company's initial target of six times HBM4, a gap Qualcomm acknowledged. Thermal performance was also evaluated during testing, the company said, though no details were disclosed. Managing heat from an active compute die at the base of a memory stack is among the technical hurdles Qualcomm identified, as such a die is expected to generate more heat than a passive HBM base die.

  ## Memory design and capacity position

  HBC uses LPDDR5X DRAM dies — the type found in mobile and edge devices — rather than the thinner, higher-performance dies used in HBM stacks. Qualcomm said projected memory capacity for an HBC stack already exceeds what current HBM4 implementations can achieve. The company characterizes HBC bandwidth as approaching HBM levels while costing less than either HBM or on-die SRAM (static random-access memory, the fastest but most silicon-area-intensive and expensive form of on-chip memory). Qualcomm has not disclosed specific final bandwidth or capacity figures.

  Qualcomm first announced HBC at its 2026 Investor Day.

  ## Path to commercial products

  The Dragonfly AI250 will be the first product to incorporate HBC. It is the planned successor to the Dragonfly AI200, which Qualcomm said is due for release in 2026. AI250 does not yet have a launch date, but the company said sampling will begin in 2027, a timeline the company described as potentially representing a pull-forward from its original schedule. Qualcomm has also previously indicated plans to extend HBC beyond Dragonfly AI accelerators to other product lines.
body_zh: |
  ## 高通驗證HBC堆疊記憶體，早期測試能效超越HBM4逾五倍

  高通宣布已完成高頻寬運算（High Bandwidth Compute，HBC）堆疊記憶體架構的初步驗證，早期測試結果顯示其能效為HBM4的五倍以上，頻寬則達外接LPDDR5X記憶體的18倍。高通表示，上述結果符合內部開發目標，使該技術距離正式商用又更進一步——搭載HBC的Dragonfly AI250資料中心加速器預計於2027年開始送樣。

  此次驗證在高通位於美國聖地牙哥的實驗室中透過自動化測試設備完成，也是HBC硬體首次獲得公開確認：架構運作符合設計預期，能效與頻寬表現貼近公司目標。

  ## HBC與HBM的架構差異

  HBC的核心概念，是在一疊DRAM（動態隨機存取記憶體）堆疊的底部放置一顆小型運算晶片，而非將運算晶片置於堆疊旁側。現行HBM（高頻寬記憶體）設計是將DRAM晶片堆疊於一顆被動基底晶片之上，再透過超寬記憶體匯流排連回主處理器——這種配置需要仰賴CoWoS（Chip-on-Wafer-on-Substrate）或EMIB（嵌入式多晶片互連橋接）等昂貴的先進封裝技術。HBC則以一顆主動式運算晶片取代被動基底晶片，從而省去記憶體堆疊與主處理器之間的外部寬頻匯流排連接。

  高通主張，將運算硬體直接置於記憶體堆疊正下方，可降低資料搬移的能耗。即使是短距離的HBM式互連也會消耗電力；消除這段距離後，所節省的電能便可轉用於提升處理效能，或在相同功耗預算下支援更多晶片運作。對AI推論工作負載而言，這項取捨尤為關鍵——推論過程需要持續在記憶體與運算硬體之間搬移大量資料。

  ## 成本與封裝的取捨

  此一架構轉變同樣著眼於降低生產成本。由於HBC運算晶片在本地端處理最耗費記憶體頻寬的運算，從HBC堆疊連回較大主處理器晶片所需的頻寬，比傳統HBM連結低得多。頻寬需求降低後，該互連便可採用傳統的二維有機基板製作，而無需仰賴HBM目前所要求的先進封裝工藝，高通如此說明。

  這項設計並未完全消除製造上的複雜性。與HBM相同，HBC仍需要TSV（矽穿孔）——貫穿堆疊矽晶層的精細垂直通道，用以傳遞晶片間的電氣訊號。高通表示，先進製造的要求已從兩個步驟——記憶體堆疊與晶片間封裝互連——縮減至一個：僅剩記憶體堆疊本身。

  ## 驗證結果與尚待確認之處

  此次驗證所用的測試堆疊包含兩層DRAM。量產商品將採用四層堆疊，意即本次測試的配置為預量產版本，層數僅有最終版本的一半。

  高通公布了三項主要驗證結果：

  - 技術運作符合預期，確認此架構具備可製造性。
  - 雙層堆疊的能效超越HBM4逾五倍，以每瓦頻寬對比HBM4公開規格計算。
  - 頻寬達外接LPDDR5X記憶體的18倍。

  高通並未揭露絕對頻寬數值。五倍能效的結果未達公司原訂六倍HBM4的目標，高通對此差距予以承認。測試期間同步進行了散熱表現評估，但未揭露具體細節。如何管理置於記憶體堆疊底部的主動式運算晶片所產生的熱量，是高通點名的技術挑戰之一——此類晶片預計產生的熱量將多於被動式HBM基底晶片。

  ## 記憶體設計與容量定位

  HBC採用LPDDR5X DRAM晶片——即常見於行動裝置與邊緣裝置的記憶體類型——而非HBM堆疊所採用的更薄、更高效能晶片。高通表示，HBC堆疊的預估記憶體容量已超越現行HBM4實作所能達到的水準。該公司將HBC的頻寬定位為接近HBM等級，但成本低於HBM及晶片上SRAM（靜態隨機存取記憶體，速度最快但矽面積需求最大、成本最高的一種片上記憶體）。高通尚未揭露最終頻寬或容量的具體數字。

  高通首次發表HBC，是在2026年的投資人日活動上。

  ## 邁向商用產品之路

  Dragonfly AI250將成為首款搭載HBC的產品，也是Dragonfly AI200的計畫接班機型——高通表示AI200預計於2026年推出。AI250目前尚未確定上市日期，但高通表示送樣將於2027年展開，並形容此時程可能代表較原訂計畫提前。高通此前亦曾表明，未來計畫將HBC技術從Dragonfly AI加速器擴展至其他產品線。
date: "2026-11-03"
source_published: "2026-11-02T14:00:14.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Qualcomm Validates HBC Stacked Memory Ahead of 2027 Dragonfly AI250 Sampling (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/qualcomm-validates-hbc-stacked-memory-ahead-of-2027-dragonfly-ai250-sampling/"
    title: "Qualcomm Validates HBC Stacked Memory Ahead of 2027 Dragonfly AI250 Sampling"
    trust: 3
    type: primary
    published_at: "2026-11-02T14:00:14.000Z"
---
