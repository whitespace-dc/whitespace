---
title_en: "Bull Sequana XH31600 Displays Intel Xeon Diamond Rapids Package at SC26"
title_zh: "Bull Sequana XH31600 於 SC26 展出 Diamond Rapids 實體封裝"
summary_en: "Bull became the only vendor at Supercomputing 2026 to show an actual Intel Xeon Diamond Rapids processor package, housed in its liquid-cooled Sequana XH31600 blade system. The sighting places Diamond Rapids in what ServeTheHome described as a sampling phase, with a launch now estimated no earlier than Q2 2027."
summary_zh: "Bull 在 SC26 超算大會上成為唯一展出 Intel Xeon Diamond Rapids 實體處理器封裝的廠商，封裝搭載於液冷式 Sequana XH31600 刀鋒系統中；ServeTheHome 指出，Diamond Rapids 目前處於送樣階段，上市時間預估最早落在 2027 年第二季。"
body_en: |
  Bull displayed physical Intel Xeon Diamond Rapids processor packages inside its Sequana XH31600 blade system at Supercomputing 2026 (SC26) in Chicago, making it the only exhibitor at the show to present an actual Diamond Rapids package, according to ServeTheHome, which covered the show floor.

  The disclosure is significant because Diamond Rapids, Intel's next-generation server central processing unit (CPU), had not previously appeared in a production-class system at a major industry show. ServeTheHome characterized the processor as appearing to be in a sampling phase and estimated a launch no earlier than Q2 2027, with a possible slip to early September 2027 if the schedule extends past June or Intel opts for a staggered release separating single-socket (1P) and dual-socket (2P) platforms.

  ## The Sequana XH31600 platform

  The Sequana XH31600 is a compute blade that carries four Intel Xeon Diamond Rapids packages across two dual-socket compute nodes. Each node uses a 16-channel memory configuration — meaning 16 independent memory pathways per processor, a figure relevant to memory bandwidth-intensive workloads such as high-performance computing (HPC) and scientific simulation.

  The blade uses an LGA9324 processor socket, the same socket ServeTheHome previously documented on the ASRock Rack DMRD16-2L+ shown at OCP Summit 2026. Motherboards in the platform are notably wide, a geometry driven by the volume of memory modules positioned on both sides of each CPU.

  The system is fully liquid cooled. ServeTheHome observed heatpipes and liquid cooling blocks throughout the blade, with blind-mate liquid and power connectors at the rear and networking connections at the front. The platform does not use a copper-cabled backplane at the rear, a design choice ServeTheHome flagged as notable in the context of industry moves toward high-density rack standards.

  ## Networking: BXI interconnect alongside NVIDIA

  Bull equipped the platform with its proprietary BXI interconnect technology. At its SC26 booth, Bull showed a BXI switch carrying 64 ports running at 800 gigabits per second (Gbps) each using OSFP optical transceivers. The BXI network interface cards (NICs) use QSFP-DD connectors and a PCIe Generation 5 x16 electrical interface — two PCIe Gen5 x16 links combined to deliver 800 Gbps aggregate bandwidth, a configuration ServeTheHome compared to the approach used in NVIDIA's ConnectX-8 SuperNIC.

  Also present in the platform was an NVIDIA ConnectX-8 SuperNIC in OCP NIC 3.0 form factor — a standard mechanical and electrical specification for open datacenter networking cards. ServeTheHome noted the juxtaposition: a system with a proprietary high-performance interconnect and a PCIe Gen5 NIC running alongside NVIDIA's high-volume PCIe Generation 6 NIC product in the same enclosure.

  ## Multi-vendor node lineup

  The Sequana XH31600 is part of a broader Bull platform that also accommodates SiPearl, NVIDIA, and AMD Venice compute nodes in a common mechanical form factor, ServeTheHome reported. That multi-vendor capability sets Bull's approach apart from most single-vendor blade ecosystems and may be relevant to procurement decisions at national labs and supercomputing centers that run heterogeneous workloads.

  Other vendors at SC26 displayed Diamond Rapids-based systems as well, including configurations with 32 dual inline memory modules (DIMMs) per socket in a two-DIMMs-per-channel (2DPC) arrangement, but none showed a physical processor package. Bull's presentation of the package itself provided the clearest public look at the Diamond Rapids die and package design to date.

  ## Industry context and launch timing

  ServeTheHome noted that a platform of this density would have been exceptional at earlier shows, but that NVIDIA's Vera Rubin systems in ORv3 racks — ORv3 being an Open Rack Version 3 standard for high-density AI infrastructure — have shifted the baseline for what constitutes leading-edge compute density. AMD has also moved to a double-wide blade format for high-density configurations, contributing to what ServeTheHome described as a high-volume industry standard for power and cooling in dense racks.

  If Intel's Diamond Rapids launch proceeds on schedule, ServeTheHome placed it at Q2 2027. A delay past June 2027, or a split launch separating 1P and 2P platforms, would push the next realistic launch window to early September 2027.
body_zh: |
  Bull 於 2026 年超算大會（SC26，在芝加哥舉行）的展場上，在其 Sequana XH31600 刀鋒系統中展示了 Intel Xeon Diamond Rapids 處理器的實體封裝，成為本屆展會中唯一展出 Diamond Rapids 實體封裝的參展廠商。此一消息由實地報導展場的 ServeTheHome 所披露。

  此次展示意義深遠，因為 Diamond Rapids——英特爾下一代伺服器中央處理器（CPU）——此前從未以量產等級系統的形式在重要業界展會上公開亮相。ServeTheHome 判斷該處理器目前處於送樣（sampling）階段，並預估正式上市時間最早為 2027 年第二季；若進度延誤至 6 月以後，或英特爾選擇分批上市、將單路（1P）與雙路（2P）平台分開發布，則下一個可能的上市窗口將順延至 2027 年 9 月初。

  ## Sequana XH31600 平台

  Sequana XH31600 是一款運算刀鋒，搭載四顆 Intel Xeon Diamond Rapids 處理器封裝，分布於兩個雙路運算節點之中。每個節點採用 16 通道記憶體配置——意即每顆處理器有 16 條獨立記憶體通道——此規格對於高效能運算（HPC）與科學模擬等記憶體頻寬密集型應用尤具意義。

  此刀鋒系統採用 LGA9324 處理器插槽，與 ServeTheHome 先前在 2026 年 OCP 高峰會上記錄的 ASRock Rack DMRD16-2L+ 所使用的插槽型號相同。平台中的主機板寬度相當寬，此一外型尺寸源自於每顆 CPU 兩側均配置了大量記憶體模組所需的空間。

  整套系統全面採用液冷設計。ServeTheHome 在刀鋒內部觀察到大量熱管與液冷水冷頭，後端配有盲插式液冷與電源接頭，前端則設有網路連接介面。該平台後端不採用銅纜背板，ServeTheHome 指出，在業界持續朝向高密度機架標準邁進的背景下，此一設計選擇格外值得關注。

  ## 網路架構：BXI 互連與輝達同台

  Bull 為此平台配備了自家專有的 BXI 互連技術。在 SC26 展位上，Bull 展示了一台搭載 64 個連接埠的 BXI 交換器，每個連接埠透過 OSFP 光學收發器運行，速率達每秒 800 Gbps。BXI 網路介面卡（NIC）採用 QSFP-DD 接頭與 PCIe 第五代 x16 電氣介面——兩條 PCIe Gen5 x16 鏈路合併，可提供 800 Gbps 的聚合頻寬；ServeTheHome 將此架構與輝達 ConnectX-8 SuperNIC 所採用的做法相提並論。

  平台中亦同時配備了一張輝達 ConnectX-8 SuperNIC，採 OCP NIC 3.0 外型規格——此為開放資料中心網路卡的標準機械與電氣規範。ServeTheHome 特別點出兩者並存的對比：同一機箱內，既有專有高效能互連搭配 PCIe Gen5 NIC，又同時運行著輝達高出貨量的 PCIe 第六代 NIC 產品。

  ## 多廠商節點陣容

  Sequana XH31600 是 Bull 更廣泛平台的組成部分，據 ServeTheHome 報導，該平台可在相同的機械外型規格下，同時容納 SiPearl、輝達與 AMD Venice 的運算節點。這種多廠商相容能力使 Bull 的做法有別於大多數單一廠商的刀鋒生態系，對於執行異質工作負載的國家實驗室與超算中心在採購決策上或具重要參考價值。

  SC26 上其他廠商亦展示了基於 Diamond Rapids 的系統，包括每顆插槽配置 32 條雙列直插記憶體模組（DIMM）、以每通道雙模組（2DPC）排列的系統，但均未展出實體處理器封裝。Bull 展出封裝本體，提供了迄今為止公眾對 Diamond Rapids 晶片與封裝設計最清晰的一次直接觀察。

  ## 產業背景與上市時程

  ServeTheHome 指出，以此密度等級的平台而言，放在稍早的展會上堪稱一流，但輝達 Vera Rubin 系統在 ORv3 機架（ORv3 為高密度 AI 基礎設施的開放機架第三版標準）中的部署，已重新定義了業界對頂尖運算密度的基準。AMD 亦已為高密度配置轉向雙寬刀片外型，進一步鞏固了 ServeTheHome 所描述的業界在高密度機架電力與散熱方面的高出貨量標準。

  若英特爾 Diamond Rapids 能按既定時程上市，ServeTheHome 預估時間為 2027 年第二季。若進度延誤至 2027 年 6 月以後，或採取 1P 與 2P 平台分批上市的策略，則下一個最有可能的上市窗口將落在 2027 年 9 月初。
date: "2026-11-19"
source_published: "2026-11-18T17:21:10.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-11-08-asrock-rack-shows-single-socket-diamond-rapids-board-with-16-ddr5-channels-and-a"
region: []
vendor: ["AMD", "ASRock Rack", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Bull Shows Intel Xeon Diamond Rapids Package at SC26 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/bull-shows-intel-xeon-diamond-rapids-package-at-sc26/"
    title: "Bull Shows Intel Xeon Diamond Rapids Package at SC26"
    trust: 3
    type: primary
    published_at: "2026-11-18T17:21:10.000Z"
---
