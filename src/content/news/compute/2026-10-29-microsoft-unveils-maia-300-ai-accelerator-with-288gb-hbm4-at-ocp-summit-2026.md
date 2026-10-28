---
title_en: "Microsoft Unveils Maia 300 AI Accelerator With 288GB HBM4 at OCP Summit 2026"
title_zh: "微軟發表Maia 300 AI加速器：288GB HBM4、每晶片950W"
summary_en: "Microsoft presented the Maia 300, its next-generation in-house AI accelerator, at OCP Summit 2026, showing a complete four-accelerator node rated at 950W per chip with 288GB of HBM4 memory and support for racks of 96 units."
summary_zh: "微軟於2026年OCP高峰會上發表下一代自研AI加速器Maia 300，展出完整四加速器節點，每顆晶片熱設計功耗950W、搭載288GB HBM4記憶體，單一機架最多可容納96顆。"
body_en: |
  Microsoft presented the Maia 300, its next-generation in-house AI accelerator, at OCP Summit 2026, displaying a complete four-accelerator node on the show floor rather than a bare chip.

  The Maia 300 carries eight stacks of HBM4 — the latest generation of High Bandwidth Memory — giving each chip 288GB of total memory capacity and 18TB/s of memory bandwidth, a measure of how quickly data moves between compute cores and memory. The chip also provides 3.2TB/s of bidirectional scale-up bandwidth, the connection speed used to link multiple chips into larger clusters. Each chip is rated at 950 watts (W) of thermal design power (TDP).

  ## Density and scale

  Microsoft said 96 Maia 300 accelerators fit in a single rack. The scale-up domain — the group of chips that can communicate directly with one another — supports roughly 12,000 units, the company said. At 950W per chip across 96 chips, a fully loaded rack carries an accelerator power draw exceeding 91 kilowatts.

  ## Node design

  Rather than showing only silicon, Microsoft brought a full four-accelerator node to OCP, demonstrating how the chip integrates into a deployable system. The node is approximately 1.5 times the width of a standard Open Compute Project unit — wider than a single-wide server but not as wide as the double-wide form factor used by AMD's Helios platform, according to ServeTheHome, which examined the hardware at the show.

  Each accelerator sits on its own printed circuit board (PCB) and connects to the rest of the system through multiple cables. ServeTheHome identified what appear to be MCIO x16 connectors — a high-speed interconnect interface — on the board, alongside cabled connections the publication assessed as likely UltraPass connectors used for scale-up communication within the node. Microsoft has also built extensive PCIe fabric connectivity throughout the chassis.

  The cable-intensive architecture contrasts with NVIDIA's approach on its Vera Rubin NVL72 platform, which ServeTheHome noted is designed to reduce cabling. Microsoft routes each accelerator's connections individually across separate PCBs, producing a high cable count across the system.

  ## Cooling architecture

  The node uses a hybrid cooling design. The accelerators are covered by liquid-cooling cold plates — metal blocks through which chilled liquid circulates to draw heat directly from the chip surface. The CPU, solid-state drives, OCP NIC 3.0 network interface cards (a standard for open-spec data center networking), and other components surrounding the accelerators are cooled by air delivered through a large fan partition that spans the chassis width.

  At the rear, the node connects to busbar power delivery, blind-mate liquid cooling couplings — connectors designed to attach to facility plumbing without manual hose connections — and the scale-up network interface.

  ## Context

  The Maia 300 follows the Maia 200. Several weeks before OCP Summit 2026, Microsoft conducted a technical deep-dive on the Maia 200 at Hot Chips 2026; OCP marked the first public showing of the next-generation Maia 300, ServeTheHome reported.

  The node-level disclosure at OCP continues Microsoft's practice of revealing its custom silicon alongside complete system designs at the open-hardware conference. The combination of HBM4 memory density, 96-chip rack configurations, and a hybrid liquid-air cooling plant reflects infrastructure decisions that will shape how Microsoft builds and powers AI compute capacity at scale. The Maia 300's rack density and per-chip power draw will factor directly into data center power and cooling specifications for facilities deploying the platform.
body_zh: |
  微軟於2026年OCP高峰會上發表下一代自研AI加速器Maia 300，現場展出的不只是裸晶，而是一套完整的四加速器節點。

  Maia 300搭載八組HBM4堆疊——最新一代高頻寬記憶體——每顆晶片的總記憶體容量達288GB，記憶體頻寬為18TB/s，衡量的是運算核心與記憶體之間的資料移動速度。晶片亦提供3.2TB/s的雙向擴展頻寬，作為將多顆晶片串連成更大叢集的連接速率。每顆晶片的熱設計功耗（TDP）為950瓦（W）。

  ## 密度與規模

  微軟表示，單一機架可容納96顆Maia 300加速器。擴展域——即可直接相互通訊的晶片群組——約可支援12,000顆晶片。以96顆晶片、每顆950W計算，滿載機架的加速器功耗超過91千瓦。

  ## 節點設計

  微軟此次帶至OCP的不只是矽晶片，而是完整的四加速器節點，藉此展示晶片如何整合進可部署的系統。根據現場實際審視硬體的ServeTheHome報導，該節點寬度約為標準Open Compute Project規格單元的1.5倍——比單寬伺服器更寬，但不及AMD Helios平台所採用的雙寬外形規格。

  每顆加速器各配置於獨立的印刷電路板（PCB）上，透過多條線纜與系統其他部分相連。ServeTheHome辨識出板上疑似為MCIO x16接頭的高速互連介面，旁側另有評估可能是用於節點內擴展通訊的UltraPass接頭纜線連接。微軟亦於機箱全域建置了大量PCIe匯流排（fabric）連線。

  這種大量佈線的架構，與輝達Vera Rubin NVL72平台的設計取向形成對比——ServeTheHome指出，NVL72的設計目標之一正是降低線纜用量。微軟讓每顆加速器的連線各自跨獨立PCB布設，使整個系統的線纜數量相當可觀。

  ## 冷卻架構

  此節點採用混合式冷卻設計。加速器上方覆蓋液冷冷板——讓冷卻液在金屬塊內循環流通、直接從晶片表面帶走熱能的裝置。CPU、固態硬碟、OCP NIC 3.0網路介面卡（開放規格資料中心網路標準），以及加速器周邊的其他元件，則透過橫跨機箱寬度的大型風扇分隔區以氣冷方式散熱。

  機箱後方設有匯流排供電、盲配液冷耦合接頭——此種接頭設計可無需手動接管即直接對接機房管路——以及擴展網路介面。

  ## 背景脈絡

  Maia 300是Maia 200的下一代產品。在2026年OCP高峰會前數週，微軟已於Hot Chips 2026上針對Maia 200進行深度技術說明；OCP高峰會則是Maia 300的首次公開亮相，ServeTheHome如此報導。

  此次在OCP上揭露節點層級細節，延續了微軟在此一開放硬體研討會上同步展示自研晶片與完整系統設計的一貫做法。HBM4的記憶體密度、96晶片機架配置，以及液冷與氣冷並用的混合冷卻方案，反映了微軟大規模建構AI運算容量時的基礎架構決策。Maia 300的機架密度與每顆晶片的功耗，將直接影響部署此平台之設施的資料中心電力與冷卻規格。
date: "2026-10-29"
source_published: "2026-10-27T21:28:01.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Microsoft Maia 300 Shown at OCP 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/microsoft-maia-300-shown-at-ocp-2026/"
    title: "Microsoft Maia 300 Shown at OCP 2026"
    trust: 3
    type: primary
    published_at: "2026-10-27T21:28:01.000Z"
---
