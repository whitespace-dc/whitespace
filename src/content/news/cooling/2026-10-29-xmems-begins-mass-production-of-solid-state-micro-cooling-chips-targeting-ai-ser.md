---
title_en: "xMEMS Begins Mass Production of Solid-State Micro-Cooling Chips Targeting AI Server Components"
title_zh: "xMEMS固態微冷卻晶片量產，鎖定AI伺服器熱點盲區"
summary_en: "xMEMS has started mass production of two silicon-based micro-cooling chips designed to address localized hotspots in enterprise SSDs and other AI server components that liquid cooling cold plates leave inadequately covered. The company positions the technology as a complement to existing rack- and server-level cooling, not a replacement."
summary_zh: "xMEMS宣布兩款矽基微冷卻晶片正式量產，專門解決液冷冷板無法覆蓋的企業級SSD及AI伺服器元件局部熱點問題，定位為現有冷卻架構的補強方案。"
body_en: |
  ## xMEMS enters mass production of solid-state active cooling chips

  xMEMS has begun mass production of its XMC-2400 and XMC-4800 chips, silicon-based devices that generate directed airflow without rotating blades or bearings, marking what the company describes as the first large-scale commercialization of solid-state active cooling for edge AI systems. The chips target a gap that liquid cooling leaves open: components such as enterprise solid-state drives (SSDs), memory modules, retimers, and optical subsystems that sit inside densely packaged AI servers but are not covered by the cold plates used to cool high-power central and graphics processors.

  ## Why liquid cooling leaves some components underserved

  Cold plates — metal blocks bonded to a processor or other chip through which chilled liquid circulates — remove heat only from the surface they directly contact. In a liquid-cooled server, that precision can leave neighboring components with uneven thermal coverage.

  Enterprise SSDs illustrate the problem, according to Mike Housholder, vice president and general manager of the Thermal Management Business Unit at xMEMS. A cold plate attached to one side of an SSD can cool the storage controller and the NAND flash memory packages on that face, while NAND on the opposite side runs hotter. That temperature gradient, Housholder said, can cause thermal throttling — a condition in which a device automatically reduces its operating speed to prevent heat damage — and limit input/output (I/O) performance during sustained workloads driven by AI data transfers.

  "We see enterprise SSDs as the strongest near-term use case," Housholder told Data Center Knowledge. "As AI workloads drive faster storage and more sustained data transfers, thermal throttling can limit SSD performance."

  ## How the chips work

  xMEMS builds its uCooling chips on a piezoMEMS semiconductor platform — a design that uses silicon structures to produce mechanical movement at the microscale when voltage is applied, generating airflow through narrow micro-channels. The company says the all-silicon construction eliminates the mechanical wear associated with small rotating fans, which degrade over time.

  The two chips in mass production carry different performance profiles:

  - **XMC-2400:** up to 28 cubic centimeters of airflow per second, up to 1,300 pascals (Pa) of back pressure, approximately 150 milliwatts (mW) power consumption; roughly thumbnail-sized.
  - **XMC-4800:** up to 48 cubic centimeters per second, up to 1,100 Pa back pressure, approximately 240 mW power consumption; targeted at enterprise SSDs.

  Back pressure is a measure of a cooling device's ability to push air through resistance — relevant inside tightly enclosed subsystems where airflow paths are restricted. A pascal is the standard unit of pressure; 1,100 to 1,300 Pa represents meaningful pressure capability for a device this small.

  The chips can be mounted on flexible or rigid printed circuit boards (PCBs) and pre-assembled inside subsystems such as SSDs and laser modules before those subsystems ship, rather than being added by data center operators later.

  ## A complement, not a replacement

  xMEMS is explicit that the technology is not designed to replace chassis fans or liquid cooling systems. Housholder said the airflow the chips produce is a small fraction of what a conventional server fan can move, making them suited only to localized hotspots inside tightly packaged components.

  "Solid-state active cooling is best viewed as a complementary technology that helps address localized hotspots within a broader cooling architecture, rather than a replacement for conventional cooling methods," Housholder said.

  The practical implication is that xMEMS expects the chips to reach data centers embedded inside components supplied by SSD manufacturers or optical module vendors, rather than as aftermarket additions installed by facility operators.

  ## Scope and forward direction

  Beyond SSDs, xMEMS says similar thermal challenges are beginning to appear in other dense AI infrastructure components, though the company did not name specific products or partners in production.

  Longer term, Housholder said the company sees a path toward co-packaging thermal solutions that integrate cooling closer to the processor package itself. For mainstream data center processors, however, he said air-based micro-cooling is likely to give way to liquid micro-channel designs because of the power density involved. Air-based uCooling, he said, is more viable in edge AI systems, where thermal envelopes are lower and physical space is tighter.

  "Given the power density of data center processors, liquid micro-channels in the co-packaging architecture may be the next step," Housholder said. "There are likely applications in co-packaging at the edge that are more viable for our air-based uCooling."

  The company's stated expectation is that future thermal architectures will combine liquid cooling, passive thermal solutions, and localized active cooling working in parallel to manage system performance.
body_zh: |
  ## xMEMS固態主動冷卻晶片正式進入量產階段

  xMEMS已宣布旗下XMC-2400與XMC-4800兩款晶片正式量產。這兩款矽基裝置無需旋轉葉片或軸承，即可產生定向氣流，是該公司口中邊緣AI系統固態主動冷卻技術首度大規模商業化的里程碑。這兩款晶片所針對的，正是液冷技術力有未逮的空白地帶：企業級固態硬碟（SSD）、記憶體模組、retimer晶片、光學次系統等元件，雖然封裝在高密度AI伺服器機箱內，卻無法受惠於專為高功耗中央處理器與顯示卡所設計的液冷冷板。

  ## 液冷為何讓部分元件陷入散熱盲區

  冷板是一種金屬塊，直接貼合於處理器或其他晶片表面，內部循環低溫液體以帶走熱量。這種點對點的精準散熱，在液冷伺服器內反而可能造成周邊元件的散熱覆蓋不均。

  以企業級SSD為例，問題說明得最為清楚。xMEMS熱管理業務部門副總裁暨總經理Mike Housholder表示，若冷板只貼合SSD的其中一面，雖然可以冷卻該面的儲存控制器與NAND快閃記憶體顆粒，但另一面的NAND溫度卻會偏高。Housholder指出，這種溫度梯度可能引發熱降頻（thermal throttling）——即裝置為防止過熱損壞而自動降低運作速度——進而在AI資料傳輸帶來的持續高負載工況下，限制輸入／輸出（I/O）效能。

  「我們認為企業級SSD是近期最具潛力的應用場景，」Housholder接受《Data Center Knowledge》採訪時表示，「隨著AI工作負載推動儲存速度加快、資料傳輸更為持續，熱降頻問題將直接限制SSD的效能表現。」

  ## 晶片的運作原理

  xMEMS的uCooling系列晶片建構於壓電MEMS（piezoMEMS）半導體平台之上。這項設計透過施加電壓，使矽結構在微尺度產生機械運動，進而推動氣流穿越狹窄的微流道。該公司表示，全矽結構從根本上消除了小型旋轉風扇因機械磨損導致性能衰退的問題。

  目前量產的兩款晶片規格各異：

  - **XMC-2400：** 最高每秒28立方公分氣流量、最高1,300帕斯卡（Pa）背壓、約150毫瓦（mW）功耗；尺寸約略與指甲相當。
  - **XMC-4800：** 最高每秒48立方公分氣流量、最高1,100帕斯卡背壓、約240毫瓦功耗；專為企業級SSD設計。

  背壓是衡量冷卻裝置克服阻力推送氣流之能力的指標，在氣流路徑受限的密閉次系統內部尤為關鍵。帕斯卡為標準壓力單位，對於如此微小的裝置而言，能達到1,100至1,300帕斯卡的背壓，代表相當可觀的驅動能力。

  這兩款晶片可安裝於軟性或硬式印刷電路板（PCB），並可在SSD、雷射模組等次系統出廠前預先組裝完畢，不需仰賴資料中心營運商事後加裝。

  ## 補強角色，而非取代

  xMEMS明確表示，這項技術並非用來取代機箱風扇或液冷系統。Housholder說明，這些晶片所能移動的氣流量，僅是傳統伺服器風扇的一小部分，因此只適合針對緊密封裝元件內部的局部熱點發揮作用。

  「固態主動冷卻最適合被視為整體冷卻架構中的補強技術，協助解決局部熱點問題，而非取代傳統冷卻方式，」Housholder說。

  從實際應用層面來看，xMEMS預期這些晶片將以內嵌方式，透過SSD製造商或光學模組廠商出貨至資料中心，而非由設施營運商自行採購安裝。

  ## 應用範疇與未來方向

  除SSD之外，xMEMS表示其他高密度AI基礎設施元件也開始出現類似的散熱挑戰，但該公司目前尚未公布具體產品名稱或量產合作夥伴。

  展望更長遠的發展，Housholder表示公司正探索將散熱方案整合至更靠近處理器封裝本身的共封裝（co-packaging）熱管理路線。不過，針對主流資料中心處理器，他認為氣冷式微冷卻方案終究可能讓位給液冷微流道設計，原因在於其功率密度過高。相較之下，氣冷式uCooling在邊緣AI系統更具可行性，因為邊緣場景的散熱限制較低、實體空間也更為緊湊。

  「考量到資料中心處理器的功率密度，共封裝架構中的液冷微流道或許是下一步，」Housholder說，「在邊緣端的共封裝應用上，我們的氣冷式uCooling則更有發揮空間。」

  該公司預期，未來的散熱架構將結合液冷、被動式散熱方案與局部主動冷卻，三者並行協作，共同管理系統效能表現。
date: "2026-10-29"
source_published: "2026-10-28T09:00:00.000Z"
category: "cooling"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Where Solid-State Micro-Cooling Fits in Data Centers (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/cooling/where-solid-state-micro-cooling-fits-in-data-centers"
    title: "Where Solid-State Micro-Cooling Fits in Data Centers"
    trust: 3
    type: primary
    published_at: "2026-10-28T09:00:00.000Z"
---
