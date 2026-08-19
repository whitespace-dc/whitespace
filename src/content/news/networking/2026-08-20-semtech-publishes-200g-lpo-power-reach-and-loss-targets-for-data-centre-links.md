---
title_en: "Semtech publishes 200G LPO power, reach and loss targets for data centre links"
title_zh: "Semtech公布200G LPO功耗、光學距離與損耗目標"
summary_en: "Semtech has set out power consumption, optical reach and electrical loss targets for 200G linear pluggable optics, putting module consumption at about 10 watts versus 23 to 25 watts for conventional retimed DSP modules. Deployment requires tighter host platform board design and calibration than retimed optics demand."
summary_zh: "Semtech針對200G線性可插拔光學模組（LPO）公布功耗、光學傳輸距離及電氣損耗目標，模組功耗約10瓦，遠低於傳統重定時DSP模組的23至25瓦。部署LPO對主機平台電路板設計與校準的要求，也比重定時光學模組更為嚴格。"
body_en: |
  Semtech has published power consumption, optical reach and electrical loss targets for 200G linear pluggable optics (LPO), giving switch makers and data centre operators a working specification baseline for a technology designed to cut interconnect power in AI and high-density computing clusters.

  ## Power targets and module comparison

  The company targets 200G LPO module power at about 10 watts. That compares with 23 to 25 watts for retimed digital signal processor (DSP) modules, which contain dedicated signal-processing silicon to correct the optical signal before it reaches the switch chip. Retimer-based linear receive optics (RTLR), a middle-ground design that applies retiming on the receive side only, consume about 16 watts, Semtech said.

  Next-generation versions of both competing designs would narrow the gap but not close it. Retimed modules could fall to about 20 watts in their next iteration, while RTLR designs could reach 14 to 15 watts, according to the company's projections.

  ## System-level power savings

  The watt difference between module types compounds across the port count of a large switch. On a 512-port switch based on the Tomahawk-6 generation of switching silicon, moving from retimed modules to LPO would save about 500 watts at the module level, rising to nearly one kilowatt once cooling overhead is included, Semtech said. At 1,024 ports, the saving would double.

  Those figures carry weight as data centre operators build larger clusters for AI workloads, where optical interconnect power has become a meaningful share of overall switch power consumption.

  ## LPO architecture and trade-offs

  LPO removes the DSP found in conventional retimed optical modules and instead uses a linear electrical path between the switch chip and the optical transmitter and receiver. That architecture shifts engineering complexity from the module to the host platform: the switch board itself must meet tighter electrical tolerances to compensate for impairments that a DSP would otherwise correct internally.

  Semtech described the trade-off plainly: lower module power comes with narrower operating margins. For operators evaluating LPO deployment, the relevant question is not only the wattage of a single module but whether the complete switching platform can stay within the electrical and optical constraints the technology requires.

  ## Optical reach

  The current target reach for 200G LPO is 500 metres, corresponding to a 3 dB optical loss budget, which Semtech said would cover most practical data centre link lengths.

  Longer reaches are possible under specific conditions. In a low-dispersion direct-reach (DR) context, reach could extend to about two kilometres if receiver sensitivity and transmit power are sufficient, giving an optical power budget of roughly 4 dB. Beyond the 500-metre baseline, the binding constraint is optical power budget — determined by transmitter output and receiver performance — rather than fibre length alone.

  ## Electrical loss limits

  Semtech set the electrical loss budget for LPO ports at 22 dB die-to-die, meaning the combined electrical loss between the switch chip and the module die across both the transmit and receive paths must stay within that figure. The company said it is working to raise that ceiling to 26 dB once measurement methods confirm the level is achievable in practice; the design target currently remains 22 dB.

  The current 22 dB ceiling compares with up to 32 dB tolerated by fully retimed modules. That 10 dB gap constrains printed circuit board (PCB) layout, connector selection and signal path design. Switch platforms engineered with the margins typical for retimed modules do not automatically qualify for LPO; engineers must assess whether the electrical channel between the switching silicon and each pluggable can stay within the tighter budget.

  ## Calibration requirement

  Host port calibration is required for reliable LPO operation, Semtech said. The process aims to ensure the switch port presents the correct electrical eye — the signal waveform that the module's continuous-time linear equaliser (CTLE) expects at its input.

  The calibration procedure involves inserting a host compliance board into the switch, setting the CTLE target for the specific module in use, applying an equaliser with constrained taps and no precursor taps, measuring output swing, verifying eye shape, and confirming that channel loss is correctly reflected in the equalisation settings.

  Once the procedure is complete for a given switch platform and module type, those settings can be deployed in software at module insertion, enabling plug-and-play operation without per-port manual tuning.

  ## Industry implications

  The specification set shifts where engineering effort falls in the optical interconnect stack. With retimed modules, the optical module absorbs signal impairments through internal DSP; with LPO, the host switch platform must be designed and calibrated with greater precision from the outset. That represents a meaningful change in what switch vendors and their hardware engineers must account for in board and channel design.

  Semtech's working headline figures for designers evaluating 200G LPO are a 10 W module power target, 500-metre reach within a 3 dB optical budget, and a 22 dB die-to-die electrical loss ceiling, with the electrical budget potentially rising to 26 dB pending measurement validation.
body_zh: |
  Semtech已發布200G線性可插拔光學模組（LPO）的功耗、光學傳輸距離及電氣損耗目標，為交換器製造商與資料中心業者提供一套實用的規格基準，協助評估這項旨在降低AI與高密度運算叢集互連功耗的技術。

  ## 功耗目標與模組比較

  Semtech將200G LPO模組的功耗目標設定在約10瓦。相較之下，內建專用訊號處理晶片、在訊號抵達交換器晶片前進行光學訊號校正的重定時數位訊號處理器（DSP）模組，功耗為23至25瓦。Semtech表示，一種折衷設計——「重定時器線性接收光學模組」（RTLR）——僅在接收端施以重定時，功耗約為16瓦。

  兩種競爭設計的下一代版本，雖可縮小差距，但仍難以與LPO相抗衡。依該公司預測，重定時模組的下一代版本功耗可降至約20瓦，RTLR設計則可達14至15瓦。

  ## 系統層級節能效益

  各模組類型之間的瓦數差異，會隨大型交換器的連接埠數量不斷累積放大。Semtech表示，在採用第六代Tomahawk（Tomahawk-6）交換晶片、配備512個連接埠的交換器上，從重定時模組改用LPO，僅模組層級就可節省約500瓦，若計入散熱開銷，節省量更接近一千瓦。連接埠數增至1,024個時，節能效益將倍增。

  隨著資料中心業者為AI工作負載建置更大規模的叢集，光學互連功耗在整體交換器總功耗中所占的比重日益顯著，上述數字因而格外具有參考價值。

  ## LPO架構與取捨

  LPO捨棄了傳統重定時光學模組內建的DSP，改以線性電氣路徑連接交換器晶片與光學發射器及接收器。這種架構將工程複雜度從模組轉移至主機平台：交換器電路板本身必須符合更嚴格的電氣容差，以補償原本由DSP在模組內部自行修正的訊號損傷。

  Semtech坦率地指出了這項取捨：較低的模組功耗伴隨著更窄的操作裕度。對於評估部署LPO的業者而言，關鍵問題不只是單一模組的瓦數，更在於整個交換平台能否維持在該技術所要求的電氣與光學約束範圍之內。

  ## 光學傳輸距離

  200G LPO目前的目標傳輸距離為500公尺，對應3 dB光學損耗預算，Semtech表示此規格已能涵蓋資料中心大多數實際連結的長度。

  在特定條件下，可達到更長的傳輸距離。在低色散直接傳輸（DR）情境中，若接收器靈敏度與發射功率足夠，傳輸距離可延伸至約兩公里，光學功率預算約為4 dB。超過500公尺的基準距離後，主要限制因素是光學功率預算——由發射器輸出功率與接收器性能共同決定——而非單純的光纖長度。

  ## 電氣損耗限制

  Semtech將LPO連接埠的電氣損耗預算設定為晶片對晶片（die-to-die）22 dB，意即交換器晶片與模組晶片之間，涵蓋發射與接收路徑在內的總電氣損耗，必須控制在此數值以內。該公司表示，一旦量測方法確認可行，將致力將上限提升至26 dB；目前設計目標仍維持22 dB。

  現行22 dB上限與全重定時模組所能容忍的最高32 dB相比，相差10 dB，這對印刷電路板（PCB）布局、連接器選型及訊號路徑設計形成明顯限制。以重定時模組典型裕度設計的交換平台，並不自動符合LPO的要求；工程師必須評估交換晶片與各可插拔模組之間的電氣通道，能否維持在更嚴格的損耗預算之內。

  ## 校準要求

  Semtech表示，主機連接埠校準是LPO可靠運作的必要條件。校準程序旨在確保交換器連接埠所呈現的電氣眼圖——即模組的連續時間線性等化器（CTLE）在其輸入端所預期的訊號波形——符合規格要求。

  校準程序包含下列步驟：將主機合規板插入交換器、針對所使用的特定模組設定CTLE目標、套用受限抽頭且無前游標抽頭的等化器、量測輸出擺幅、驗證眼圖形狀，並確認通道損耗已正確反映於等化設定中。

  針對特定交換平台與模組類型完成上述程序後，相關設定可在模組插入時透過軟體自動部署，實現免手動逐埠調整的隨插即用操作。

  ## 產業影響

  這套規格的發布，改變了光學互連堆疊中工程投入的重心所在。使用重定時模組時，光學模組透過內部DSP吸收訊號損傷；採用LPO後，主機交換平台從設計初期便必須以更高的精度進行規劃與校準。這對交換器廠商及其硬體工程師在電路板與通道設計上的考量，代表著一項實質性的改變。

  Semtech為評估200G LPO的設計工程師所提出的核心參考數字為：模組功耗目標10瓦、光學預算3 dB範圍內傳輸距離500公尺，以及晶片對晶片電氣損耗上限22 dB——電氣預算則有望在量測驗證確認後提升至26 dB。
date: "2026-08-20"
source_published: "2026-08-19T16:30:00.000Z"
category: "networking"
secondary_categories: ["compute"]
updates: "networking/2026-08-06-semtech-makes-case-for-removing-dsp-retimers-from-ai-data-centre-optical-modules"
region: []
vendor: []
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Semtech sets 200G LPO targets for data centre links (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/semtech-sets-200g-lpo-targets-for-data-centre-links"
    title: "Semtech sets 200G LPO targets for data centre links"
    trust: 3
    type: primary
    published_at: "2026-08-19T16:30:00.000Z"
  - url: "https://datacenternews.asia/story/semtech-sets-200g-lpo-targets-for-data-centre-links"
    title: "Semtech sets 200G LPO targets for data centre links"
    trust: 3
    type: corroborating
    published_at: "2026-08-19T16:30:00.000Z"
---
