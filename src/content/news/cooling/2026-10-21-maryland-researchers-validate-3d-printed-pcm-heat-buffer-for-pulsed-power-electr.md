---
title_en: "Maryland researchers validate 3D-printed PCM heat buffer for pulsed-power electronics"
title_zh: "馬里蘭大學驗證3D列印相變材料熱緩衝器用於脈衝功率電子散熱"
summary_en: "Researchers at the University of Maryland's AHX-PI Laboratory have developed and experimentally validated an additively manufactured phase change material thermal storage system that absorbs burst heat loads in pulsed-power electronics without requiring oversized steady-state cooling. The design eliminates micro-encapsulation — responsible for up to 99% of conventional PCM system cost — and is accompanied by a reduced-order computational model that predicts performance in seconds rather than hours."
summary_zh: "馬里蘭大學AHX-PI實驗室研究人員開發並實驗驗證了一套積層製造相變材料熱儲存系統，可吸收脈衝功率電子元件的突發熱負荷，無需將穩態冷卻設施過度擴容。該設計省去了佔傳統PCM系統成本高達99%的微膠囊化製程，並搭配可在數秒內完成運算的降階計算模型。"
body_en: |
  Researchers at the University of Maryland's AHX-PI Laboratory have developed and experimentally validated an additively manufactured thermal energy storage (TES) system that uses phase change materials (PCMs) to absorb peak heat loads in pulsed-power electronics, removing the need to oversize steady-state cooling infrastructure for brief transient events, according to a study published in *Electronics Cooling*.

  The system targets power electronics that operate under highly variable or pulsed loads, including voltage regulators inside server racks, electric vehicle drivetrain inverters, and industrial motor drives. In each of those applications, peak heat generation during a power pulse can far exceed what steady-state cooling can absorb in real time. Conventional practice — oversizing the cooling system to handle peak load — adds cost, weight, and energy consumption, with much of that capacity sitting idle between pulses.

  ## Why PCMs suit pulsed loads

  PCMs store energy through a solid-to-liquid phase transition at a fixed temperature, making the melting process isothermal. According to the study, PCMs store five to 14 times more thermal energy per unit volume than sensible storage materials at comparable temperature differences. Paraffin wax, for example, stores roughly 200 kJ/kg via latent heat, compared with water's sensible heat capacity of approximately 4.2 kJ/kg·K.

  The isothermal characteristic carries direct reliability implications for semiconductor devices. Temperature swings during pulsed loads drive thermal fatigue in insulated-gate bipolar transistors (IGBTs), metal-oxide-semiconductor field-effect transistors (MOSFETs), and diodes. A PCM buffer that holds component temperature nearly constant during a pulse reduces those swings and extends device lifetime compared with sensible or purely convective approaches, the researchers said.

  ## Cross-media composite architecture

  The TES system is built on a patented cross-media metal-polymer composite heat exchanger developed at the AHX-PI Laboratory. The design uses alternating fluid channels and PCM-filled polymer channels, with continuous high-conductivity metal wires running through both channel types in a staggered tube-bank geometry.

  The metal wires are the thermal core of the design. Conventional polymer heat exchangers must conduct heat through polymer itself, which has thermal conductivity in the range of 0.2 to 0.5 W/m·K — inherently low. The cross-media wires bypass the polymer and provide a direct axial conduction path from the fluid to the PCM, raising the effective thermal conductivity by more than an order of magnitude, the researchers said.

  The PCM is held directly within the polymer channels without micro-encapsulation. Encapsulation — the process of coating PCM particles in a shell material — accounts for up to 99% of conventional PCM system cost, according to the study. Eliminating it substantially reduces fabrication expense. The entire assembly is 3D-printed using a customized dual-head printer equipped with separate polymer and metal print heads, enabling the complex cross-media geometry and supporting rapid design iteration.

  The low-melting-temperature PCMs relevant to electronics cooling transition in the 20 to 25°C range. The fabricated prototype used n-hexadecane as the PCM.

  ## Reduced-order model for rapid design optimization

  Designing a TES system requires optimizing multiple parameters — wire diameter and spacing, PCM channel width, flow rate, and material selection — against transient phase-change thermal performance. Conventional computational fluid dynamics (CFD) tools can solve this problem accurately but slowly; a single simulation can take hours, making a full design-space sweep impractical on an engineering schedule, the researchers noted.

  The team developed a one-dimensional (1D) reduced-order model (ROM) that predicts TES performance in seconds by reducing the full heat exchanger domain to a single representative PCM-wire element and solving it analytically. At each time step the ROM computes total thermal resistance — combining fluid-side convective resistance, wire axial conductive resistance, and transient cylindrical PCM resistance — and advances the melt front position accordingly.

  The model is governed by two non-dimensional parameters. The first, τ (dimensionless time constant), captures approach temperature and PCM properties; higher values indicate faster melting. The second, the product of an equivalent Biot number and an equivalent length ratio (Bi·LR), captures the fluid-to-wire resistance balance; higher values, achievable through increased flow rate or smaller wire diameter, indicate faster heat delivery to the PCM.

  A third parameter, R\*wire, is the ratio of axial wire resistance to maximum radial PCM resistance. Low R\*wire values — achieved with high-conductivity metals such as copper and aluminum at minimum wire diameters around 0.4 mm, a floor set by nozzle size in fused deposition modeling (FDM) additive manufacturing — maintain uniform temperature distribution along the wire and preserve the validity of the 1D radial conduction assumption. That assumption holds for Stefan numbers (the ratio of sensible heat to latent heat) below 0.1, a condition the researchers said is satisfied by the low-melting-temperature PCMs applicable to electronics cooling.

  ## Validation results

  The ROM was validated numerically against a 2D CFD axisymmetric reference model across a broad parametric sweep. For the ranges most applicable to power electronics cooling — τ from 0.3 to 50 and Bi·LR from 3 to 30, with R\*wire at or below 1 — agreement between the ROM and CFD was within 3 to 7%. Deviations above 10% occurred only at parameter extremes (Bi·LR at or above 300, or R\*wire at or above 10), where axial PCM conduction dominates and the 1D radial assumption breaks down. The researchers described this condition as straightforward to avoid in practice.

  Experimental testing on the fabricated 3D-printed prototype confirmed ROM predictions of complete melting time within 17% and freezing time within 8% of measured values. The researchers characterized this accuracy level as well suited to early-stage design optimization, where the speed advantage of the ROM over full CFD is most valuable.

  ## Design application and significance

  The ROM was used to optimize a 19.2 kJ cross-media TES unit for a pulsed-power application with a peak discharge power of approximately 3.2 kW. The design logic is that base cooling infrastructure can be sized to average load rather than peak load, with the PCM unit absorbing burst energy during each pulse and releasing it gradually to the cooling system between pulses.

  The approach is applicable across segments where pulsed or highly variable electrical loads are common: data center power conversion hardware, EV powertrains, and industrial drive systems. By enabling cooling infrastructure to be sized for average rather than peak load, the design reduces cost, weight, and energy consumption of the overall thermal management system, according to the study.

  The combination of additive manufacturing, micro-encapsulation elimination, and a fast computational design tool addresses three barriers — fabrication complexity, material cost, and design cycle time — that have historically limited PCM adoption in power electronics cooling. The researchers noted that the fabricated prototype provides experimental ground truth for further development of the cross-media TES platform.
body_zh: |
  馬里蘭大學AHX-PI實驗室研究人員開發並以實驗驗證了一套積層製造熱能儲存（TES）系統，利用相變材料（PCM）吸收脈衝功率電子元件的峰值熱負荷，無需為短暫暫態事件而將穩態冷卻基礎設施過度擴容。相關研究已發表於《Electronics Cooling》期刊。

  該系統針對在高度可變或脈衝負荷下運作的功率電子元件，包括伺服器機架內的電壓調節器、電動車傳動逆變器，以及工業馬達驅動器。在上述各類應用中，功率脈衝期間的峰值熱產生量可能遠超穩態冷卻系統的即時吸收能力。傳統做法是將冷卻系統擴容以應對峰值負荷，但此舉會增加成本、重量與能耗，且大部分容量在脈衝間隙期間閒置。

  ## 相變材料適用於脈衝負荷的原因

  PCM透過固液相變在固定溫度下儲存能量，使熔化過程維持等溫特性。根據該研究，相較於可比溫差下的顯熱儲存材料，PCM每單位體積可儲存五至十四倍的熱能。以石蠟為例，其透過潛熱可儲存約200 kJ/kg的熱能，而水的顯熱容量僅約4.2 kJ/kg·K。

  等溫特性對半導體元件的可靠性具有直接影響。脈衝負荷期間的溫度波動會加速絕緣柵雙極電晶體（IGBT）、金屬氧化物半導體場效電晶體（MOSFET）及二極體的熱疲勞。研究人員指出，PCM緩衝器在脈衝期間使元件溫度幾乎保持恆定，與顯熱或純對流冷卻方式相比，可減少溫度波動並延長元件使用壽命。

  ## 跨介質複合架構

  該TES系統以AHX-PI實驗室研發的專利跨介質金屬-聚合物複合熱交換器為基礎建構。設計採用交替排列的流體通道與充填PCM的聚合物通道，並以連續高導熱金屬線以交錯管束幾何形式貫穿兩種通道。

  金屬線是該設計的熱傳核心。傳統聚合物熱交換器須透過聚合物本身導熱，其導熱係數僅約0.2至0.5 W/m·K，本質上偏低。跨介質金屬線繞過聚合物，提供從流體到PCM的直接軸向導熱路徑，研究人員表示，此舉可將有效導熱係數提升逾一個數量級。

  PCM直接置於聚合物通道中，無需微膠囊化處理。根據該研究，微膠囊化——即以殼層材料包覆PCM顆粒的製程——佔傳統PCM系統成本的高達99%。省去此步驟可大幅降低製造費用。整個組件以客製化雙頭3D印表機列印，該機具備獨立的聚合物與金屬列印頭，可實現複雜的跨介質幾何形狀，並支援快速設計迭代。

  與電子元件冷卻相關的低熔點PCM相變溫度範圍為20至25°C。製作的原型機使用正十六烷作為PCM。

  ## 用於快速設計優化的降階模型

  設計TES系統需要針對暫態相變熱性能，對多個參數進行優化，包括金屬線直徑與間距、PCM通道寬度、流量及材料選擇。傳統計算流體動力學（CFD）工具雖可準確求解此問題，但速度緩慢；單次模擬可能耗時數小時，使得在工程排程內進行完整設計空間掃描幾乎不可行，研究人員指出。

  研究團隊開發了一套一維（1D）降階模型（ROM），透過將完整熱交換器域簡化為單一代表性PCM-金屬線元件並以解析方式求解，可在數秒內預測TES性能。在每個時間步驟，ROM計算總熱阻——結合流體側對流熱阻、金屬線軸向導熱熱阻及暫態圓柱PCM熱阻——並據此推進熔化前緣位置。

  該模型由兩個無因次參數控制。第一個參數τ（無因次時間常數）捕捉接近溫度與PCM特性；數值越高表示熔化越快。第二個參數為等效比奧數與等效長度比之乘積（Bi·LR），捕捉流體與金屬線的熱阻平衡；可透過增大流量或縮小金屬線直徑來提高此數值，數值越高表示熱量傳遞至PCM的速度越快。

  第三個參數R\*wire為軸向金屬線熱阻與最大徑向PCM熱阻之比值。低R\*wire數值——可透過高導熱金屬如銅和鋁，配合最小約0.4 mm的金屬線直徑來實現，此下限由熔融沉積成型（FDM）積層製造的噴嘴尺寸所決定——可維持金屬線沿長方向的均勻溫度分佈，並確保一維徑向導熱假設的有效性。該假設在史蒂芬數（顯熱與潛熱之比）低於0.1時成立，研究人員表示此條件可由適用於電子元件冷卻的低熔點PCM滿足。

  ## 驗證結果

  ROM已在廣泛的參數掃描範圍內，與二維CFD軸對稱參考模型進行數值驗證。在最適用於功率電子元件冷卻的範圍——τ為0.3至50、Bi·LR為3至30、R\*wire等於或低於1——ROM與CFD之間的吻合度在3%至7%以內。偏差超過10%的情況僅出現在參數極端值（Bi·LR等於或高於300，或R\*wire等於或高於10），此時PCM的軸向導熱佔主導地位，一維徑向假設不再成立。研究人員描述，在實際應用中此種情況相當容易避免。

  針對已製作的3D列印原型機進行的實驗測試，確認ROM對完全熔化時間的預測誤差在實測值17%以內，對凝固時間的預測誤差則在8%以內。研究人員認為，此準確度水準非常適合早期設計優化階段，此時ROM相較於完整CFD的速度優勢最為顯著。

  ## 設計應用與意義

  ROM被用於針對脈衝功率應用優化一套19.2 kJ跨介質TES單元，其峰值放電功率約為3.2 kW。設計邏輯在於：基礎冷卻基礎設施可按平均負荷而非峰值負荷來規格化，PCM單元在每次脈衝期間吸收突發能量，並在脈衝間隙期間逐步將熱量釋放至冷卻系統。

  此方法適用於脈衝或高度可變電氣負荷普遍存在的各類應用領域：資料中心電源轉換硬體、電動車動力系統，以及工業驅動系統。根據該研究，透過使冷卻基礎設施能夠按平均而非峰值負荷規格化，此設計可降低整體熱管理系統的成本、重量與能耗。

  積層製造、省去微膠囊化，以及快速計算設計工具三者的結合，共同解決了長期以來限制PCM在功率電子元件冷卻領域普及的三大障礙——製造複雜性、材料成本與設計週期時間。研究人員指出，所製作的原型機為跨介質TES平台的進一步發展提供了實驗基準。
date: "2026-10-21"
source_published: "2026-10-19T19:28:42.000Z"
category: "cooling"
secondary_categories: []
region: ["United States"]
vendor: []
trust:
  score: 4
  reasoning: "Single source: Latent Thermal Energy Storage for Pulsed-Power Electronics Cooling: A Novel Additively Manufactured PCM System (trust 4/5)."
sources:
  - url: "https://www.electronics-cooling.com/2026/10/latent-thermal-energy-storage-for-pulsed-power-electronics-cooling/"
    title: "Latent Thermal Energy Storage for Pulsed-Power Electronics Cooling: A Novel Additively Manufactured PCM System"
    trust: 4
    type: primary
    published_at: "2026-10-19T19:28:42.000Z"
---
