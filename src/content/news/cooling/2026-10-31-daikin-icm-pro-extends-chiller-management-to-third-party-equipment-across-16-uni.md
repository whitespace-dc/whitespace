---
title_en: "Daikin iCM Pro extends chiller management to third-party equipment across 16-unit plants"
title_zh: "大金iCM Pro冰水機管理平台整合第三方設備，最多支援16台機組"
summary_en: "Daikin has launched iCM Pro, an updated intelligent chiller manager platform that integrates chillers and heat pumps from third-party manufacturers alongside Daikin equipment within a single control architecture. The platform supports up to 16 units per controller across four configuration tiers and introduces flow-based sequencing for variable-load and industrial applications."
summary_zh: "大金推出智慧冰水機管理平台iCM Pro更新版，可在單一控制架構下整合大金自有及第三方廠商的冰水機與熱泵，每台控制器最多支援16台機組，並新增基於流量的排序控制功能，適用於變流量及工業製程應用場景。"
body_en: |
  Daikin has launched iCM Pro, an updated version of its intelligent chiller manager platform that can coordinate chillers and heat pumps from third-party manufacturers alongside Daikin equipment within a single control architecture, supporting up to 16 units per controller.

  The platform is available in four configurations supporting 4, 8, 12, or 16 chillers and heat pumps, designed to serve plant installations of varying size and complexity, the company said. Each configuration offers multiple datapoint management tiers, ranging from 500 to 5,000 datapoints, allowing system sizing to reflect the volume of signals, parameters, and monitored device information as well as the number of controlled units.

  ## Third-party integration and retrofit use

  The ability to manage equipment from multiple manufacturers within a single control strategy extends iCM Pro beyond platforms limited to a single vendor's units. Daikin said this flexibility is particularly useful in retrofit projects, where full system replacement may be complex or impractical and operators need to bring existing mixed-brand plant under unified control.

  The control architecture is pre-configured using proprietary Daikin software, a design the company said is intended to simplify configuration and commissioning.

  ## Supported plant types and auxiliary control

  iCM Pro manages a range of plant configurations, including air-cooled chillers, water-cooled chillers, heat pumps, and multi-functional units, according to Daikin. It supports two-pipe systems, which carry either heating or cooling fluid, and four-pipe systems, which carry both simultaneously, enabling simultaneous heating and cooling production from a single installation. It also handles seasonal changeover applications and systems dedicated solely to heating or cooling.

  The platform extends control to major plant auxiliaries including pumps, cooling towers, and control valves, coordinating them within the same operating strategy as the primary chiller and heat pump units.

  ## Software architecture

  At the core of iCM Pro is a two-level software architecture developed entirely by Daikin Applied Europe. The first level holds validated Daikin control algorithms. The second is built on Niagara — an open integration and automation framework widely used in building management systems — and allows configurations, operating logic, and functionality to be adapted to individual project requirements. Daikin said this customization layer operates without modifying the underlying validated Daikin control layer.

  ## Sequencing logic and load management

  The platform continuously monitors each connected unit's availability, alarm status, operating priority, running hours, start frequency, and the plant's overall thermal demand, Daikin said. Using those inputs, iCM Pro adjusts its staging strategy in response to load conditions, with the stated aim of improving operational efficiency and reducing unnecessary equipment operation.

  A new capability in iCM Pro is flow-based sequencing, which works alongside conventional temperature-based control. Rather than relying solely on temperature signals to determine when to stage units on or off, it incorporates the plant's hydraulic demand — the rate of fluid flow through the system — as an additional control input. Daikin said this approach is particularly suited to variable-flow systems, primary-secondary hydraulic configurations (where separate pump circuits serve the chiller plant and the distribution network), multi-zone buildings, and industrial processes where loads change frequently.

  ## Significance

  iCM Pro's multi-brand compatibility and Niagara-based customization layer address two recurring constraints in large HVAC plant management: equipment heterogeneity in existing installations and the need to tailor control logic to site-specific conditions. Support for up to 5,000 datapoints at the platform's highest tier also targets larger, more heavily instrumented facilities where monitoring depth is as significant a sizing criterion as unit count.

  Flow-based sequencing, added to complement temperature-based staging, extends iCM Pro's applicability to variable-flow systems and industrial processes with dynamic loads.
body_zh: |
  大金推出iCM Pro，為其智慧冰水機管理平台的更新版本，可在單一控制架構下統籌管理大金自有設備與第三方廠商的冰水機及熱泵，每台控制器最多支援16台機組。

  該平台提供四種配置，分別支援4、8、12或16台冰水機與熱泵，旨在服務規模與複雜程度各異的機房設施。每種配置均提供多個資料點管理層級，資料點數量從500至5,000不等，可依照訊號數量、參數數量、受監控裝置資訊量以及受控機組數量，彈性調整系統規模。

  ## 第三方設備整合與改裝應用

  iCM Pro能在單一控制策略下管理多個廠牌的設備，突破了僅限單一廠商機組的平台框架。大金表示，這項靈活性在改裝工程中尤為實用——在完整替換整套系統既繁瑣又不切實際的場合，運營商需要將現有的混合品牌機房設備納入統一控制之下，此時iCM Pro便能派上用場。

  控制架構採用大金專有軟體進行預先配置，據該公司表示，此設計旨在簡化系統設定與試運轉流程。

  ## 支援的機房類型及輔助設備控制

  據大金表示，iCM Pro可管理多種機房配置，包括風冷式冰水機、水冷式冰水機、熱泵及多功能機組。它支援雙管系統（僅輸送冷熱其中一種流體）與四管系統（同時輸送冷熱兩種流體），使單一設施得以同時產生供熱與供冷能力。此外，它也適用於季節性切換應用，以及專供暖氣或冷氣的單一用途系統。

  該平台的控制範疇延伸至主要機房輔助設備，包括水泵、冷卻塔及控制閥，將其與主要冰水機和熱泵機組納入同一套運行策略中協同管理。

  ## 軟體架構

  iCM Pro的核心是一套由大金應用歐洲（Daikin Applied Europe）全程自主開發的雙層軟體架構。第一層包含經驗證的大金控制演算法；第二層則建構於Niagara之上——Niagara是一套廣泛應用於樓宇管理系統的開放整合與自動化框架——允許針對各個專案需求調整配置、操作邏輯與功能。大金表示，此一客製化層在運作時不會修改底層已驗證的大金控制層。

  ## 排序邏輯與負載管理

  大金表示，該平台持續監控每台連接機組的可用性、警報狀態、運行優先順序、運行小時數、啟動頻率，以及整個機房的總體熱量需求。iCM Pro利用上述資訊，因應負載狀況動態調整機組啟停排程策略，以達到提升運行效率、減少不必要設備運轉的目標。

  iCM Pro的一項新功能是基於流量的排序控制，可與傳統的溫度控制並行運作。與其單純依賴溫度訊號決定機組啟停時機，此功能還將機房的水力需求——即系統內的流體流量——納入額外的控制輸入。大金表示，這種方式特別適合變流量系統、一次／二次水力迴路配置（即以獨立泵浦迴路分別服務冰水機機房與配水網路）、多區域建築，以及負載頻繁變化的工業製程。

  ## 意義

  iCM Pro的多品牌相容性與基於Niagara的客製化層，針對大型暖通空調機房管理中反覆出現的兩大制約因素提出解方：一是既有設施中設備廠牌雜亂的問題，二是需要依據現場特定條件量身打造控制邏輯的需求。在最高配置層級下支援多達5,000個資料點，也使iCM Pro進一步瞄準規模更大、儀器化程度更高的設施——在這類場合，監控深度與機組數量同樣是重要的規模選型依據。

  基於流量的排序控制作為溫度分段控制的補充新增至iCM Pro，進一步拓展了其在變流量系統與動態負載工業製程中的適用範疇。
date: "2026-10-31"
source_published: "2026-10-30T17:25:34.000Z"
category: "cooling"
secondary_categories: ["software-ops"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: HVAC plant management control platform (trust 3/5)."
sources:
  - url: "https://www.coolingpost.com/products/hvac-plant-management-control-platform/"
    title: "HVAC plant management control platform"
    trust: 3
    type: primary
    published_at: "2026-10-30T17:25:34.000Z"
---
