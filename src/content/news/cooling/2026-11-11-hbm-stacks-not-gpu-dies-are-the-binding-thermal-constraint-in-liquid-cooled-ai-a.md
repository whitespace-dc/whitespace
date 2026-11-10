---
title_en: "HBM stacks, not GPU dies, are the binding thermal constraint in liquid-cooled AI accelerators"
title_zh: "液冷AI加速器散熱瓶頸：HBM堆疊先於GPU晶片觸及溫度上限"
summary_en: "High Bandwidth Memory stacks in AI accelerators reach their 85°C thermal ceiling before the GPU compute die does, making HBM cooling the binding constraint on sustained training throughput in direct liquid-cooled platforms, according to analysis in Electronics Cooling."
summary_zh: "根據《Electronics Cooling》期刊的分析，AI加速器中的高頻寬記憶體（HBM）堆疊在GPU運算晶片之前便率先達到85°C的散熱上限，使HBM散熱成為直接液冷平台中制約持續訓練吞吐量的關鍵瓶頸。HBM垂直堆疊架構所造成的結構性熱阻，以及比GPU晶片更嚴格的溫度容許值，使其接面溫度成為AI運算叢集有效訓練速率的真正決定因素。"
body_en: |
  High Bandwidth Memory stacks co-packaged inside AI accelerators reach their 85°C thermal limit before the GPU compute die does, making memory cooling the binding performance constraint in direct liquid-cooled AI platforms, according to analysis published in Electronics Cooling.

  Every modern AI accelerator package includes a second class of thermally critical heat source that has received far less engineering attention, the article notes: the HBM stacks surrounding the GPU die. A single high-performance AI accelerator module now routinely dissipates 700 to 1,000 watts at the GPU die under sustained workloads, with fully populated AI compute racks demanding upward of 200 kilowatts of cooling capacity. HBM stacks generate only 15 to 30 watts per stack. But the HBM memory controller begins reducing bandwidth at 85°C, below the GPU die's 90-to-95°C tolerance, so HBM junction temperature, not GPU temperature, sets the sustained throughput of the platform.

  ## How HBM's stacked architecture concentrates thermal resistance

  HBM achieves high memory bandwidth by stacking multiple dynamic random-access memory (DRAM) dies vertically and connecting them through fine-pitch through-silicon vias (TSVs), placed on a silicon interposer alongside the GPU die. Both the GPU and the HBM stacks share a single cold plate in this 2.5D packaging configuration.

  The vertical stack architecture creates a thermal problem with no equivalent in conventional flat DRAM. Each DRAM die in the stack, thinned to 30 to 50 micrometers, adds silicon, die-attach material, and underfill to the thermal path upward. In an 8-High (8 Hi) HBM stack, using JEDEC's standard notation for die count, heat generated at the bottom interface die must conduct upward through every die above before reaching the cold plate. The cumulative junction-to-case thermal resistance of such a stack reaches three to five times that of an equivalent planar die of the same footprint, the article states.

  The result is a persistent intra-stack temperature gradient. Because power dissipates across all active DRAM layers, the bottom interface die runs hottest: it must conduct its own heat, plus the heat from every layer above it, up through the full stack. Electronics Cooling reports bottom-to-top temperature differentials of 7 to 14°C across an 8 Hi stack, with the range depending on stack height, die power distribution, and the quality of the thermal interface material (TIM) and cold plate above. A single junction temperature value cannot characterize the stack; the bottom-die temperature is always the binding constraint.

  Lateral heat spreading within each die adds a further complication. Silicon conducts heat well within the plane of a die at approximately 150 watts per meter-kelvin, but the extreme thinness of each DRAM die limits how much heat can spread laterally before it must travel vertically. Workload-dependent memory access hot spots concentrate heat in small die areas and amplify the vertical gradient.

  ## Collective HBM thermal load per accelerator module

  A typical AI accelerator module carries four to eight HBM stacks, placing aggregate HBM thermal load at 60 to 240 watts per module. Each stack occupies a footprint of 75 to 120 square millimeters and generates a heat flux of 15 to 25 watts per square centimeter. The GPU die produces 80 to 120 watts per square centimeter over an 800-to-1,000-square-millimeter footprint at 700 to 1,000 watts total. The HBM thermal challenge is one of vertical stack geometry and a tighter temperature ceiling, not of total power.

  ## One cold plate, two incompatible thermal profiles

  Sharing one cold plate between the GPU die and the HBM stacks creates a structural design conflict. After assembly on the interposer, the GPU die typically stands 200 to 400 micrometers taller than the top of the HBM stack. Without active compensation in the cold plate or TIM design, the cold plate contact force concentrates on the taller GPU die, leaving a thicker and higher-resistance TIM layer over each HBM stack.

  Height variation across HBM stacks in a manufacturing lot is substantially greater than for a monolithic GPU die, the article notes. Each HBM stack undergoes 8 to 16 sequential die-bonding operations in which dimensional tolerances accumulate with each bond. TSV tip height varies due to wafer warpage during backside exposure, and the thinned DRAM dies are susceptible to warpage that further alters post-bond height. For a compliant polymer TIM with a thermal conductivity of 8 watts per meter-kelvin, a 200-micrometer increase in bond line thickness over the HBM zone increases TIM thermal resistance above the HBM stacks, compounding the elevated resistance already inherent to the vertical die stack.

  ## Implications for accelerator and data center design

  HBM junction temperature, not GPU junction temperature, sets the sustained memory bandwidth of an AI compute cluster and therefore its effective training throughput. Increasing cold plate coolant flow rate alone cannot eliminate the intra-stack vertical gradient, which is structural to HBM's architecture rather than a product of insufficient coolant supply. The bottom interface die temperature must be the design target, not any average or top-die stack temperature.

  The article identifies TIM bond line thickness management and cold plate surface compensation for the GPU-to-HBM height differential as the central unresolved engineering challenges for current and next-generation AI accelerator platforms.
body_zh: |
  根據《Electronics Cooling》期刊發表的分析，AI加速器中與GPU晶片共封裝的高頻寬記憶體（HBM）堆疊，在GPU運算晶片之前便率先達到85°C的熱限值，使記憶體散熱成為直接液冷AI平台中制約效能的關鍵瓶頸。

  每顆現代AI加速器封裝中都存在另一類散熱關鍵熱源，長期以來卻受到的工程關注遠遠不足——那就是圍繞GPU晶片排列的HBM堆疊。單顆高效能AI加速器模組在持續工作負載下，GPU晶片的散熱量如今動輒高達700至1,000瓦；全配置AI運算機架更需要高達200千瓦以上的冷卻容量。每組HBM堆疊的散熱量雖僅有15至30瓦，看似微乎其微，但HBM記憶體控制器在溫度達到85°C時便會開始降低頻寬，低於GPU晶片90至95°C的耐受上限。因此，HBM接面溫度而非GPU溫度，才是決定整個平台持續吞吐量的關鍵指標。

  ## HBM堆疊架構如何集中熱阻

  HBM透過將多顆動態隨機存取記憶體（DRAM）晶片垂直堆疊，並以細間距矽穿孔（TSV）相互連接，再與GPU晶片並排安置於矽中介層上，藉此實現高記憶體頻寬。在此2.5D封裝架構中，GPU晶片與HBM堆疊共用同一塊冷板。

  垂直堆疊架構所帶來的散熱問題，是傳統平面DRAM所沒有的。堆疊中每顆DRAM晶片均已被薄化至30至50微米，每新增一層便在熱傳路徑上疊加了矽材、晶片接合材料與底部填充材料。以JEDEC標準符號標示層數的8-Hi（8層）HBM堆疊為例，底部介面晶片產生的熱量必須向上穿越上方所有晶片，才能抵達冷板。該文指出，此類堆疊的累積接面至外殼熱阻，可達相同佔板面積之等效平面晶片的三至五倍。

  由此造成的結果，是堆疊內部持續存在的溫度梯度。由於功耗分散在所有活躍DRAM層中，底部介面晶片的運作溫度最高——它不僅需要向上傳導自身產生的熱量，還必須一併傳導上方每一層晶片的熱量。《Electronics Cooling》報告指出，8-Hi堆疊的底部至頂部溫差達7至14°C，確切差值取決於堆疊層數、各晶片的功耗分佈，以及熱介面材料（TIM）與上方冷板的品質。單一接面溫度值無法完整描述整個堆疊的熱狀態；底部晶片溫度始終是具有決定性的瓶頸。

  每顆晶片內部的橫向熱擴散又帶來額外的複雜性。矽在晶片平面內的導熱係數約為每米開爾文150瓦，橫向導熱表現良好，但每顆DRAM晶片的極度薄化，限制了熱量在必須轉為垂直傳導之前能向橫向擴散的程度。工作負載引發的記憶體存取熱點將熱量集中在晶片的局部小區域，進一步放大垂直方向的溫度梯度。

  ## 每顆加速器模組的HBM總散熱負荷

  典型的AI加速器模組配備四至八組HBM堆疊，使每顆模組的HBM總散熱負荷達到60至240瓦。每組堆疊的佔板面積為75至120平方毫米，產生每平方公分15至25瓦的熱通量。相較之下，GPU晶片在700至1,000瓦的總散熱量下，於800至1,000平方毫米的面積上產生每平方公分80至120瓦的熱通量。HBM的散熱挑戰根源在於垂直堆疊的幾何結構與更嚴格的溫度上限，而非總功耗的大小。

  ## 一塊冷板，兩種不相容的散熱特性

  GPU晶片與HBM堆疊共用同一塊冷板，形成了結構性的設計衝突。在中介層上完成組裝後，GPU晶片的高度通常比HBM堆疊頂部高出200至400微米。若冷板或TIM設計未主動補償此高度差，冷板的接觸壓力便會集中在較高的GPU晶片上，致使每組HBM堆疊上方的TIM層更厚、熱阻更高。

  該文指出，同批次HBM堆疊之間的高度差異，遠大於整塊GPU晶片的製造差異。每組HBM堆疊須歷經8至16道循序的晶片接合工序，尺寸公差隨每道工序逐步累積。TSV尖端高度因背面曝光製程中的晶圓翹曲而出現偏差，薄化後的DRAM晶片也容易因翹曲而在接合後改變堆疊高度。以導熱係數為每米開爾文8瓦的順應性聚合物TIM為例，HBM區域的接合線厚度每增加200微米，便會使HBM堆疊上方的TIM熱阻升高，使垂直晶片堆疊本身既有的高熱阻問題更加惡化。

  ## 對加速器與資料中心設計的影響

  HBM接面溫度而非GPU接面溫度，決定了AI運算叢集的持續記憶體頻寬，進而決定其有效訓練吞吐量。單純提高冷板冷卻液流速，並無法消除堆疊內部的垂直溫度梯度——這一梯度源於HBM架構本身的結構特性，而非冷卻液供應不足所致。設計目標應以底部介面晶片的溫度為準，而非以堆疊平均溫度或頂部晶片溫度作為基準。

  該文指出，TIM接合線厚度管理，以及針對GPU與HBM高度差異進行冷板表面補償，是當前與下一代AI加速器平台最核心且尚待解決的工程挑戰。
date: "2026-11-11"
source_published: "2026-11-09T06:35:37.000Z"
category: "cooling"
secondary_categories: ["compute"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Thermal Management of High Bandwidth Memory Stacks in AI Accelerators Under Direct Liquid Cooling (trust 3/5)."
sources:
  - url: "https://www.electronics-cooling.com/2026/11/thermal-management-of-high-bandwidth-memory-stacks-in-ai-accelerators-under-direct-liquid-cooling/"
    title: "Thermal Management of High Bandwidth Memory Stacks in AI Accelerators Under Direct Liquid Cooling"
    trust: 3
    type: primary
    published_at: "2026-11-09T06:35:37.000Z"
---
