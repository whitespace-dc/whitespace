---
title_en: "Semtech makes case for removing DSP retimers from AI data centre optical modules"
title_zh: "Semtech主張AI資料中心光模組應移除DSP重定時器"
summary_en: "Semtech has published a technical position on linear pluggable optics, arguing that removing the digital signal processor retimer from optical transceivers can cut module power by more than half in AI data centre deployments. The company, a founding member of the Linear Pluggable Optics Multi-Source Agreement Group, said standards and calibration methodology are mature enough to support deployment planning now."
summary_zh: "Semtech發布線性可插拔光學（LPO）技術立場文件，主張從光收發器移除數位訊號處理器（DSP）重定時器可將模組功耗降低逾半；該公司身為LPO多源協議工作組創始成員，並表示現行標準與校準方法已足夠成熟，可支援當前的部署規劃。"
body_en: |
  Semtech has outlined a technical and commercial case for linear pluggable optics — a transceiver design that removes the digital signal processor (DSP) retimer from the optical module — arguing the approach can cut power consumption by more than half in dense AI data centre networks.

  In conventional optical modules, a DSP inside the transceiver retimes, reshapes and re-amplifies signals on both the transmit and receive paths before returning traffic to the host switch. That processing helps the module tolerate degraded electrical signals and reflections along the link, but it carries a significant power cost. Semtech said a 1.6T DR-8 retimed module — a transceiver supporting 1.6 terabits per second across eight lanes using direct-reach optics — typically consumes 23 to 25 watts in current data centre deployments.

  ## How LPO differs

  Under a linear pluggable optics (LPO) design, the DSP retimer is removed. The transmit side of the module instead uses a continuous time linear equaliser, a driver and a modulator — all analogue components. The receive side uses a transimpedance amplifier, which converts photocurrent from the optical detector into a voltage signal, and in some cases an additional linear equaliser.

  The fundamental shift is where signal conditioning happens. In a retimed design, the module performs the main equalisation work. In an LPO design, that task moves to the SerDes — the serialiser/deserialiser circuitry — on the host switch, while the transceiver concentrates on analogue amplification and optical conversion.

  ## Power targets and system-level savings

  Semtech said LPO modules for 200G per-lane links are targeting approximately 10 watts, compared with 23 to 25 watts for retimed equivalents and roughly 16 watts for Retimed Transmitter Linear Receiver (RTLR) designs, a middle-ground approach also known as Linear Receive Optics.

  At system scale, the differences compound. Semtech provided an illustration based on a 512-port switch configuration, which it associated with the current Tomahawk-6 switch generation. At that port count, LPO could save approximately 500 watts at the module level. When cooling overhead is included, total system savings could reach 1 kilowatt. In a 1,024-port configuration, both figures would double, the company said.

  ## LPO is not passive

  Semtech addressed what it called a common misconception: LPO modules are not passive devices. They still contain active analogue components and require configuration and calibration, even though they do not include a DSP retimer with clock-recovery circuitry.

  That distinction affects how operators plan deployments. Shifting equalisation responsibility to the host switch SerDes does not necessarily require new switch ASICs, Semtech argued. The existing host SerDes must instead be correctly calibrated to supply the equalisation that LPO modules expect. The company framed the challenge as primarily a question of configuration methodology rather than hardware replacement.

  ## Where retimed optics remain appropriate

  Semtech did not position LPO as a universal replacement for retimed modules. It said deployments involving high-loss electrical channels, significant signal reflections, or requirements for maximum transmit equalisation flexibility may still be better served by RTLR or fully retimed designs.

  ## Standards status

  The standards framework for LPO remains under active development. Semtech said the electrical interface is being defined by the OIF CEI 224 linear specification — a standard from the Optical Internetworking Forum targeting 22 decibels of die-to-die port loss — while IEEE is responsible for the optical performance requirements for 200G links.

  The Linear Pluggable Optics Multi-Source Agreement (MSA) Group is working to combine those two sets of requirements into a single interoperability framework. Semtech said it is a founding member of that group. Despite the ongoing standards work, the company argued that the framework and calibration methodology are sufficiently mature to support deployment planning today.

  ## Industry significance

  The LPO discussion is unfolding as operators building AI infrastructure face rising pressure to contain power consumption while increasing bandwidth between switches, accelerators and storage systems. Optical interconnect choices have become a more prominent factor in data centre design as rack-scale and cluster-scale AI systems grow in port count and cooling demand.

  Semtech's position marks LPO as a deployable design option rather than a future concept, even as the formal standards process continues. The completion of the LPO MSA interoperability framework will determine how broadly the approach can be adopted across multi-vendor switch and transceiver combinations.
body_zh: |
  Semtech已就線性可插拔光學（Linear Pluggable Optics，LPO）提出技術與商業層面的完整論述。LPO是一種從光模組中移除數位訊號處理器（DSP）重定時器的收發器設計，Semtech主張，在高密度AI資料中心網路中，此方案可將功耗降低逾半。

  在傳統光模組中，收發器內建的DSP會在發送與接收路徑上對訊號進行重定時、波形整形及再放大，再將流量回傳至主機交換器。這種處理方式有助於模組容忍電氣訊號劣化與鏈路上的反射，但代價是可觀的功耗。Semtech表示，目前資料中心普遍部署的1.6T DR-8重定時模組——一種透過八條通道支援每秒1.6兆位元傳輸、採用直達光學設計的收發器——典型功耗為23至25瓦。

  ## LPO與傳統設計的差異

  採用線性可插拔光學（LPO）設計時，DSP重定時器將被移除。模組發送側改採連續時間線性等化器（CTLE）、驅動器與調變器，三者均為類比元件。接收側則採用跨阻抗放大器（TIA），負責將光偵測器的光電流轉換為電壓訊號，部分設計中還會另加線性等化器。

  這項設計的根本轉變，在於訊號調整的執行位置。在重定時設計中，模組承擔主要的等化工作；在LPO設計中，這項任務移交至主機交換器上的SerDes（序列器／解序列器）電路，收發器則專注於類比放大與光電轉換。

  ## 功耗目標與系統層級節能效益

  Semtech表示，針對每通道200G連結的LPO模組，目標功耗約為10瓦；相比之下，重定時等效模組為23至25瓦，介於兩者之間的「重定時發送線性接收」（Retimed Transmitter Linear Receiver，RTLR，又稱線性接收光學）設計則約為16瓦。

  在系統規模下，差距進一步擴大。Semtech以512埠交換器配置為例——對應當前Tomahawk-6交換器世代——在此埠數規模下，採用LPO可在模組層級節省約500瓦。計入散熱開銷後，整體系統節能效益可達1千瓦。若擴展至1,024埠配置，兩項數字均將加倍，該公司如此說明。

  ## LPO並非被動元件

  Semtech特別澄清一項常見誤解：LPO模組並非被動元件。儘管不含具備時脈恢復電路的DSP重定時器，LPO仍包含主動類比元件，且需進行組態設定與校準。

  這項區別直接影響業者的部署規劃方式。Semtech主張，將等化責任轉移至主機交換器SerDes，未必需要更換新的交換器ASIC。現有主機SerDes必須正確校準，以提供LPO模組所需的等化能力。該公司將此挑戰定性為主要屬於組態方法論的問題，而非硬體更換的問題。

  ## 仍適合採用重定時光學的應用場景

  Semtech並未將LPO定位為重定時模組的全面替代方案。該公司表示，涉及高損耗電氣通道、顯著訊號反射，或需要最大化發送等化靈活度的部署場景，採用RTLR或完全重定時設計仍較為適合。

  ## 標準化進展

  LPO的標準框架仍在積極制定中。Semtech表示，電氣介面規範由光纖網際互連論壇（Optical Internetworking Forum，OIF）的CEI 224線性規範負責定義，該標準以晶片對晶片埠損耗22分貝為目標；200G連結的光學效能要求則由IEEE負責制定。

  線性可插拔光學多源協議（LPO MSA）工作組正致力於將上述兩套要求整合為單一互通性框架。Semtech表示，本身是該工作組的創始成員之一。儘管標準工作仍在進行中，該公司認為，現行框架與校準方法已足夠成熟，可支援當前的部署規劃。

  ## 產業意義

  上述LPO討論正值AI基礎設施建置業者面臨雙重壓力之際——一方面須遏制功耗攀升，另一方面又須提升交換器、加速器與儲存系統之間的頻寬。隨著機架規模與叢集規模的AI系統在埠數與散熱需求方面持續成長，光互連的選擇在資料中心設計中已成為日益關鍵的考量因素。

  Semtech的立場文件將LPO定位為當前可部署的設計選項，而非遙遠的未來概念，即便正式標準化流程仍在推進中。LPO MSA互通性框架的完成，將決定這項方案能在何種程度上跨越多廠商交換器與收發器的組合，獲得廣泛採用。
date: "2026-08-06"
source_published: "2026-08-05T16:15:00.000Z"
category: "networking"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Semtech backs linear pluggable optics for AI data centres (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/semtech-backs-linear-pluggable-optics-for-ai-data-centres"
    title: "Semtech backs linear pluggable optics for AI data centres"
    trust: 3
    type: primary
    published_at: "2026-08-05T16:15:00.000Z"
  - url: "https://datacenternews.asia/story/semtech-backs-linear-pluggable-optics-for-ai-data-centres"
    title: "Semtech backs linear pluggable optics for AI data centres"
    trust: 3
    type: corroborating
    published_at: "2026-08-05T16:15:00.000Z"
---
