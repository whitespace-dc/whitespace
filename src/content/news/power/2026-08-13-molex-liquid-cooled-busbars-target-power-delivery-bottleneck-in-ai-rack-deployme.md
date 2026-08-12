---
title_en: "Molex liquid-cooled busbars target power delivery bottleneck in AI rack deployments"
title_zh: "Molex液冷匯流排鎖定AI機架電力傳輸散熱瓶頸"
summary_en: "Molex says its multi-channel liquid-cooled busbar outperforms conventional single-channel designs by 20% in simulation while using half the cooling-channel footprint, as rack power densities push past the 150 kW threshold where air cooling of power conductors fails."
summary_zh: "Molex匯流排／電力營運總監Vic Geevarghese表示，該公司多通道液冷匯流排在模擬測試中效能較傳統單通道設計提升20%，冷卻通道截面積更縮減一半；隨著AI機架功率密度突破150千瓦門檻，導電元件的氣冷散熱已陷入失效困境。"
body_en: |
  Molex is positioning liquid-cooled busbars as a necessary component of high-density AI data center infrastructure, citing a 20% simulation-tested performance gain and a 50% reduction in cooling-channel cross-section compared with conventional single-channel designs, according to an interview with Vic Geevarghese, Molex Director of Operations for Busbar/Power, published by Electronics Cooling magazine.

  ## Where air-cooled busbars fail

  Air-cooled busbars reach a practical thermal limit at approximately 3,000 amperes, which corresponds to roughly 150 to 160 kilowatts of rack power, Geevarghese said. Beyond that point, maintaining a stable 30-degree-Celsius temperature rise becomes difficult to sustain. The failure mode is a combination of thermal and physical constraints: as current through the copper conductors rises, heat generation increases, creating localized hotspots that add electrical resistance, widen voltage drop, and reduce overall system efficiency.

  Larger copper conductors can carry more current, but their physical bulk obstructs airflow inside the rack, compounding the thermal problem. Geevarghese described both effects as mutually reinforcing limits: more copper addresses current capacity but restricts the airflow that is supposed to remove the resulting heat.

  Rack power densities have risen sharply with AI accelerator workloads. Geevarghese noted that racks drawing roughly 20 kilowatts were common a few years ago; today the same physical rack enclosure may be asked to carry 250 kilowatts or 500 kilowatts — on the order of 20 times the previous load — while the rack itself has not grown larger.

  ## The power delivery path as a thermal bottleneck

  Direct-to-chip liquid cooling has become a standard method for removing heat from processors, but Geevarghese said the power delivery layer — the busbars that carry high-current electricity from facility infrastructure to the servers — has become the next distinct thermal bottleneck. Liquid-cooled busbars route coolant directly through the conductor assembly, removing heat at its origin rather than relying on airflow across the busbar's outer surface.

  Lowering conductor temperature reduces a secondary loss mechanism: elevated temperatures increase electrical resistance in copper, causing additional energy to be lost as heat. Geevarghese said air-cooled systems waste more energy through this effect, while liquid cooling keeps resistive losses lower by holding conductor temperatures down.

  The space argument also reverses under high-density conditions. Larger copper cross-sections and heat sinks required for air cooling consume rack volume, but Geevarghese said any space recovered by moving to liquid-cooled busbars is typically absorbed by the more powerful servers and processors that prompted the upgrade — the rack footprint stays fixed while the hardware inside grows denser.

  ## Molex multi-channel cooling geometry

  The Molex product uses a multi-channel internal coolant pathway rather than the single central channel found in conventional designs. The multi-channel geometry increases heat-transfer surface area within the same outer tube diameter, improving heat removal while reducing turbulence, Geevarghese said. In simulation testing, the design showed a 20% performance improvement over a comparable single-channel product.

  The footprint advantage is substantial. Conventional liquid-cooled busbar designs require approximately 50 square millimeters of cross-sectional area for their cooling channels; the Molex design achieves comparable thermal performance using approximately 25 square millimeters — half the area. In racks where internal space is contested at every increment, that difference directly affects how much power delivery hardware can be fitted within a fixed enclosure.

  ## System-level infrastructure requirements

  Geevarghese cautioned that adopting higher-density power delivery is not a component-level swap. A facility designed around 20-kilowatt racks cannot simply substitute 700-kilowatt racks without substantial infrastructure changes throughout the building. Operators face a choice between retrofitting existing architectures incrementally or designing new high-density facilities from the outset to accommodate the power and cooling demands of current AI accelerator hardware.

  If rack power requirements grow without a corresponding improvement in power-delivery cooling, the physical size of the power distribution system must expand to compensate, Geevarghese said — reducing the number of racks a given facility can house and ultimately colliding with the limits of available floor space and airflow capacity.

  ## Industry significance

  The conversation marks a shift in where the data center cooling industry's attention is focused. For several years, liquid cooling investment concentrated on processors; the power distribution layer that feeds those processors remained predominantly air-cooled. Molex's position, supported by its simulation data, is that the busbar layer has now crossed the threshold where liquid cooling transitions from a performance upgrade to a functional prerequisite.

  By Molex's assessment, that inflection point is already reached at 3,000 amperes and above — a current level that corresponds to the rack power densities now deployed for AI inference and training workloads.
body_zh: |
  Molex匯流排／電力營運總監Vic Geevarghese接受《Electronics Cooling》雜誌訪談時表示，Molex正將液冷匯流排定位為高密度AI資料中心基礎設施的必要元件，並援引模擬測試數據佐證：相較於傳統單通道設計，該產品效能提升20%，冷卻通道截面積亦縮減50%。

  ## 氣冷匯流排的失效極限

  Geevarghese指出，氣冷匯流排的實際散熱極限約在3,000安培，對應的機架功率約為150至160千瓦。超過此門檻後，要維持穩定的攝氏30度溫升便愈發困難。失效模式涉及熱效應與物理雙重限制：隨著流過銅導體的電流增大，產熱隨之升高，形成局部熱點，進而提升電阻、擴大電壓降，並拉低整體系統效率。

  加大銅導體截面積雖能承載更大電流，但龐大的體積卻會阻礙機架內的氣流，反而加劇散熱問題。Geevarghese將這兩種效應形容為相互強化的限制：增加銅材雖能提升載流能力，卻同時阻斷了本應帶走熱量的氣流。

  受AI加速器工作負載推動，機架功率密度急遽攀升。Geevarghese指出，幾年前耗電約20千瓦的機架已屬常態；如今同樣的機架外殼可能需要承載250千瓦乃至500千瓦的功率——約為過去的20倍——而機架本身的體積卻絲毫未曾擴大。

  ## 電力傳輸路徑成為新散熱瓶頸

  晶片直接液冷已成為處理器散熱的主流方式，但Geevarghese表示，負責將高電流從設施基礎架構傳輸至伺服器的電力傳輸層——也就是匯流排——已成為下一個明確的散熱瓶頸。液冷匯流排將冷卻液直接導入導體總成，從熱源處直接帶走熱量，而非依賴氣流流過匯流排外表面。

  降低導體溫度可減少一種次要損耗機制：溫度升高會增加銅的電阻，導致更多能量以熱能形式散逸。Geevarghese表示，氣冷系統因此效應損耗更多能量，而液冷則藉由壓低導體溫度，將電阻損耗維持在較低水準。

  空間層面的考量在高密度情境下同樣出現逆轉。氣冷所需的較大銅截面積與散熱片佔用了機架空間，但Geevarghese指出，改用液冷匯流排所釋出的空間，通常會被促成此次升級的更高效能伺服器與處理器所填滿——機架佔地面積維持不變，內部硬體卻愈來愈密集。

  ## Molex多通道冷卻幾何設計

  Molex產品採用多通道內部冷卻液流道，有別於傳統設計中單一中央通道的配置。Geevarghese表示，多通道幾何設計在相同外管直徑內增加了導熱表面積，在提升散熱效果的同時也降低了紊流。模擬測試結果顯示，該設計較同規格單通道產品的效能提升了20%。

  尺寸優勢相當顯著。傳統液冷匯流排設計的冷卻通道截面積約需50平方毫米；Molex設計僅需約25平方毫米——僅為前者的一半——即可達到相當的散熱效果。在內部空間分毫必爭的機架中，此差異直接關係到固定外殼內能容納多少電力傳輸硬體。

  ## 系統層面的基礎設施需求

  Geevarghese警告，導入更高密度的電力傳輸並非僅是元件層面的替換。一座以20千瓦機架為設計基準的設施，若想直接換用700千瓦機架，必須對整棟建築的基礎設施進行大規模改造。業者面臨兩種選擇：逐步改造現有架構，或從頭設計專為高密度而生的新設施，以因應當前AI加速器硬體的電力與散熱需求。

  Geevarghese表示，若機架功率需求持續增長，電力傳輸散熱卻未能同步改善，配電系統的物理體積就必須擴大以補償不足——這將壓縮設施可容納的機架數量，最終觸及可用地板面積與氣流容量的極限。

  ## 產業意涵

  這場對話標誌著資料中心冷卻產業關注焦點的轉移。過去數年間，液冷投資主要集中於處理器；為處理器供電的配電層則大多仍沿用氣冷方式。Molex的立場——並有模擬數據佐證——是匯流排層如今已跨越臨界點，液冷已從效能升級選項，轉變為不可或缺的功能性必要條件。

  依Molex的評估，這個轉折點在3,000安培以上已然到來——此電流水準正對應著當前AI推論與訓練工作負載所部署的機架功率密度。
date: "2026-08-13"
source_published: "2026-08-12T16:23:54.000Z"
category: "power"
secondary_categories: ["cooling"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Molex Engineer Q&A: Why High-Density Racks Need Liquid-Cooled Busbars (trust 3/5)."
sources:
  - url: "https://www.electronics-cooling.com/2026/08/molex-engineer-qa-why-high-density-racks-need-liquid-cooled-busbars/"
    title: "Molex Engineer Q&A: Why High-Density Racks Need Liquid-Cooled Busbars"
    trust: 3
    type: primary
    published_at: "2026-08-12T16:23:54.000Z"
---
