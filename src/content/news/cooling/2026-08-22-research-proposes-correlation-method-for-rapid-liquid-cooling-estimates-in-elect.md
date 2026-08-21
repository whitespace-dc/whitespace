---
title_en: "Research proposes correlation method for rapid liquid cooling estimates in electronics design"
title_zh: "研究：熱傳關聯式可加速液冷電子設計初步估算"
summary_en: "A paper presented at THERMINIC 2025 outlines how classical heat-transfer correlations can give engineers fast preliminary estimates for liquid-cooled electronics, while identifying the flow-classification errors that can make those correlations misleading."
summary_zh: "一篇於 THERMINIC 2025 發表的論文指出，工程師可運用古典熱傳關聯式對液冷電子系統進行快速初步估算，惟前提是必須正確辨識流態，否則可能導致計算結果嚴重失準。"
body_en: |
  A paper presented at the THERMINIC 2025 conference proposes using established heat-transfer and pressure-drop correlations as a rapid first-pass tool for designing liquid-cooled electronics, arguing the approach can accelerate thermal architecture work before more resource-intensive computational modelling begins — provided engineers correctly identify which type of fluid flow is present.

  The research, summarized by Electronics Cooling, comes as single-component heat dissipation levels in electronics are rising to the point where air cooling is no longer adequate for many applications. Liquid cooling offers a substantially higher heat transfer coefficient — a measure of how efficiently heat moves from a surface into a fluid — along with higher pressure drop and significantly lower heating of the fluid itself compared with air.

  ## Why correlations matter for early design

  The correlations in question link three dimensionless quantities that fluid dynamics has long used to characterize heat transfer: the Reynolds number, which relates viscous boundary-layer thickness to a reference dimension of the channel; the Nusselt number, which relates the thermal boundary layer to that same dimension; and the Prandtl number, a fluid property that combines viscosity and thermal characteristics. For air, the viscous and thermal boundary layers are roughly the same thickness. In liquids other than liquid metals, the viscous boundary layer is thicker than the thermal one.

  Because these correlations are explicit mathematical expressions, they can be entered into a spreadsheet and solved almost instantly, the paper notes. That speed is the primary advantage: engineers get a ballpark geometry they can carry into full computer-aided-design and computational fluid dynamics (CFD) optimization, rather than beginning CFD from scratch.

  ## The classification problem

  The paper identifies correct flow classification as the central risk when using these correlations. Two distinctions must be made before selecting any equation.

  The first is between developing and developed flow. Near the entrance of a cooling channel, the boundary layer — the thin fluid layer affected by the wall — is still growing and has not reached the opposite wall. This is called undeveloped or developing flow, and the relevant length dimension is the distance from the channel entrance. In longer channels, boundary layers from opposing walls eventually merge; the flow is then called developed, and the relevant dimension shifts to the hydraulic diameter, a standardized measure of channel cross-section calculated from the channel's cross-sectional area divided by its wetted perimeter. For a rectangular channel, that formula simplifies to width times height divided by the sum of both; where width greatly exceeds height, hydraulic diameter approaches twice the height.

  The second distinction is between laminar and turbulent flow. At low velocities, fluid moves in parallel sheets with no cross-wall mixing; heat travels to the channel core by conduction alone. At higher velocities the flow becomes turbulent, adding velocity components perpendicular to the wall that enhance heat transfer. Laminar heat transfer can be solved analytically; turbulent heat transfer is determined empirically, and several competing equations exist in the literature.

  For undeveloped laminar flow the average heat transfer coefficient over a plate length can be derived analytically. For undeveloped turbulent flow a well-known empirical correlation applies. In developed laminar flow, the Nusselt number — and therefore the heat transfer coefficient — becomes a constant, approximately 4 in dimensionless terms, corresponding to roughly 3.66 for a constant wall temperature or 4.36 for a constant heat-flux boundary condition. For developed turbulent flow, the widely used Dittus-Boelter equation applies, with the Prandtl number exponent set to 0.4 when the fluid is being heated.

  For pressure drop, the Hagen-Poiseuille equation gives the analytical result for fully developed laminar flow, while the Blasius equation has been shown to perform well in the electronics cooling context for turbulent flow. The paper also flags that minor losses — pressure drops at channel entries and exits, orifices, and direction changes such as the U-bends in a serpentine cold plate — must be added to duct friction losses for an accurate total.

  ## The proposed workaround

  The core finding is that while classifying flow type precisely is difficult — the paper notes there is no consensus in the literature on exact transition thresholds between developing and developed flow or between laminar and turbulent — choosing which correlation to use in an engineering calculation may be more tractable than it first appears.

  The paper illustrates the point with a worked example: ethylene glycol flowing at 1 metre per second through a 1-centimetre-diameter channel. At a duct length of 0.1 metres, the undeveloped laminar correlation yields an average heat transfer coefficient of approximately 500 watts per square metre per kelvin (W/m²/K), while developed flow correlations produce values around 300 W/m²/K or below 200 W/m²/K. At that short length, undeveloped laminar flow is the physically expected regime, which corresponds to the highest of the calculated values. At long duct lengths, developed turbulent flow is expected, and again that regime produces the highest heat transfer coefficient. The paper's proposed heuristic is that the correct correlation tends to produce the highest value among the candidates — meaning engineers uncertain about flow type may be able to identify the appropriate correlation by selecting the result that is physically consistent with both the expected regime and the highest heat transfer outcome.

  ## Significance for thermal architecture

  The practical implication is a faster early-stage design process. Rather than running full CFD simulations at the outset — computationally expensive and time-consuming — engineers can use spreadsheet-based correlation estimates to establish a viable starting geometry, then hand that geometry to CFD for refinement. The paper cautions, however, that the approach is error-prone for users without a fluid-dynamics background, and particularly for cases where geometry or flow-speed optimization is performed using a single fixed correlation when the underlying flow type may change as parameters shift.

  The research was presented at THERMINIC 2025 and subsequently reported by Electronics Cooling. The author frames the correlation method as a complement to, not a replacement for, detailed simulation in the design of liquid-cooled electronics.
body_zh: |
  一篇於 THERMINIC 2025 研討會發表的論文提出，可將現有的熱傳與壓降關聯式作為液冷電子系統快速初步設計的工具，認為此方法有助於在耗費大量資源的計算模擬開始之前加速熱架構規劃——前提是工程師必須正確辨識當前的流體流態類型。

  這項研究由 Electronics Cooling 整理報導，恰逢電子元件單一組件的散熱量持續攀升、氣冷在許多應用場景下已不再足夠的時間點。液冷提供了顯著更高的熱傳係數——衡量熱量從表面傳入流體效率的指標——同時伴隨更高的壓降，以及相較於空氣冷卻，流體本身溫升顯著更低的特點。

  ## 關聯式在早期設計中的重要性

  論文所討論的關聯式，將流體力學長期用於描述熱傳行為的三個無因次量聯繫起來：雷諾數（Reynolds number），反映黏性邊界層厚度與通道參考尺寸之間的關係；努塞爾數（Nusselt number），反映熱邊界層與同一尺寸的關係；以及普朗特數（Prandtl number），一個結合流體黏度與熱特性的流體屬性值。對空氣而言，黏性邊界層與熱邊界層的厚度大致相同；但在液態金屬以外的液體中，黏性邊界層比熱邊界層更厚。

  由於這些關聯式是明確的數學運算式，可直接輸入試算表並幾乎即時求解，論文對此特別指出。這正是其主要優勢：工程師能先取得大致的幾何構型，再帶入完整的電腦輔助設計（CAD）與計算流體力學（CFD）進行最佳化，而不必從零開始進行 CFD 模擬。

  ## 流態分類的關鍵問題

  論文指出，在使用這些關聯式時，正確的流態分類是最核心的風險所在。在選用任何方程式之前，必須先釐清兩項區別。

  第一項是「發展中流」與「充分發展流」之間的區別。在冷卻通道入口附近，邊界層——即受到壁面影響的薄層流體——仍在持續生長，尚未延伸至對面壁面，稱為「未充分發展流」或「發展中流」，適用的長度尺寸是距通道入口的距離。在較長的通道中，對面壁面的邊界層最終會相互合併，此時流體稱為「充分發展流」，適用尺寸也轉換為水力直徑（hydraulic diameter）——以通道截面積除以濕周（wetted perimeter）計算出的標準化截面量度。對矩形通道而言，此公式化簡為寬度乘以高度再除以兩者之和；當寬度遠大於高度時，水力直徑趨近於高度的兩倍。

  第二項是層流（laminar flow）與紊流（turbulent flow）之間的區別。在低流速下，流體以平行薄層方式流動，無跨壁面混合，熱量僅靠傳導傳至通道核心。在較高流速下，流體轉為紊流，產生垂直於壁面的速度分量，進而強化熱傳效果。層流的熱傳可透過解析方式求解，紊流的熱傳則由實驗結果決定，文獻中存在多個競爭的方程式。

  針對未充分發展層流，沿板長的平均熱傳係數可解析推導而得。針對未充分發展紊流，則有一個廣為人知的實驗關聯式可用。在充分發展層流中，努塞爾數——以及由此衍生的熱傳係數——成為一個常數，無因次值約為 4，對應等壁溫邊界條件時約為 3.66，等熱通量邊界條件時則約為 4.36。在充分發展紊流中，廣泛使用的迪特斯—貝爾特（Dittus-Boelter）方程式適用，當流體受熱時，普朗特數的指數設為 0.4。

  在壓降方面，哈根—泊肅葉（Hagen-Poiseuille）方程式提供充分發展層流的解析結果，布拉修斯（Blasius）方程式則已被證明在電子散熱的紊流應用情境中表現良好。論文也提醒，次要損失——包括通道入口與出口、孔口，以及方向轉變（例如蛇形冷板中的 U 形彎頭）所產生的壓降——必須加入管道摩擦損失，方能得到準確的總壓降值。

  ## 論文提出的解決方法

  論文的核心發現在於：儘管精確判斷流態相當困難——論文指出，文獻中對於發展中流與充分發展流之間、以及層流與紊流之間的確切轉換臨界值並無共識——但在工程計算中選擇適用的關聯式，可能比乍看之下更為可行。

  論文以一個具體算例加以說明：乙二醇（ethylene glycol）以每秒 1 公尺的流速流過直徑 1 公分的管道。在管道長度為 0.1 公尺時，未充分發展層流關聯式計算出的平均熱傳係數約為每平方公尺每克耳文 500 瓦（W/m²/K），而充分發展流關聯式則分別給出約 300 W/m²/K 或低於 200 W/m²/K 的數值。在如此短的管道長度下，物理上應處於未充分發展層流狀態，對應的正是上述計算值中最高的結果。在管道較長時，充分發展紊流為預期的流態，同樣地，該流態也對應最高的熱傳係數。論文提出的啟發式法則是：正確的關聯式往往能在候選結果中產生最高數值——這意味著，對流態不確定的工程師，或許可以透過選取在物理上與預期流態相符、且對應最高熱傳係數的結果，來辨識出適用的關聯式。

  ## 對熱架構設計的意義

  這項研究的實際意涵在於加速早期設計流程。工程師無需在初始階段就運行計算量龐大、耗時費力的完整 CFD 模擬，而是可以先利用試算表版的關聯式估算建立可行的起始幾何構型，再將此構型交由 CFD 進行精修。不過，論文也警告，對於缺乏流體力學背景的使用者而言，此方法容易出錯；尤其是在以單一固定關聯式對幾何或流速進行最佳化時，若底層流態可能隨參數改變而轉換，問題將更為明顯。

  本研究於 THERMINIC 2025 發表，其後由 Electronics Cooling 報導。作者將關聯式法定位為液冷電子設計中詳細模擬的輔助工具，而非取代品。
date: "2026-08-22"
source_published: "2026-08-20T19:24:32.000Z"
category: "cooling"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Use of Heat Transfer Coefficient and Pressure Drop Correlations for Liquid Cooling of Electronics (trust 3/5)."
sources:
  - url: "https://www.electronics-cooling.com/2026/08/use-of-heat-transfer-coefficient-and-pressure-drop-correlations-for-liquid-cooling-of-electronics/"
    title: "Use of Heat Transfer Coefficient and Pressure Drop Correlations for Liquid Cooling of Electronics"
    trust: 3
    type: primary
    published_at: "2026-08-20T19:24:32.000Z"
---
