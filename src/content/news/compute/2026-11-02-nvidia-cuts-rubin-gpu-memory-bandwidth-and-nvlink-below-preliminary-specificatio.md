---
title_en: "NVIDIA cuts Rubin GPU memory bandwidth and NVLink below preliminary specifications"
title_zh: "輝達下修Rubin GPU記憶體頻寬與NVLink規格，低於初始公告數字"
summary_en: "NVIDIA has revised its Rubin GPU shipping specifications, reducing HBM4 memory bandwidth from 22TB/s to 19.2TB/s and NVLink scale-up bandwidth by 17 percent below preliminary figures while boosting scale-out networking. The changes carry through to the NVL72 rack and HGX NVL8 systems as hyperscalers begin making the first NVL72 rack-scale deployments generally available to customers."
summary_zh: "輝達悄悄修訂Rubin GPU出貨規格，HBM4記憶體頻寬從22TB/s下修至19.2TB/s，NVLink擴展互連頻寬較初始公告數字縮減17%，同時小幅上調對外叢集網路容量；隨著各大超大規模雲端業者陸續向客戶正式開放首批NVL72機架規模系統，這些規格異動的影響也隨之浮現。"
body_en: |
  NVIDIA has revised the shipping specifications for its Rubin graphics processing unit (GPU), reducing HBM4 memory bandwidth from 22 terabytes per second to 19.2TB/s and NVLink scale-up interconnect bandwidth by 17 percent from previously published preliminary figures, while modestly increasing scale-out networking capacity, as the company and its partners ramp production and hyperscalers begin making the first NVL72 rack-scale systems generally available to customers.

  The updates were posted quietly to NVIDIA's product pages and architecture datasheet in September and were first spotted by IT Home. NVIDIA had previously disclosed that its published Rubin specifications were preliminary and subject to change.

  ## Memory bandwidth

  The per-GPU HBM4 (High Bandwidth Memory 4, a stacked memory format used in AI accelerators) bandwidth has been revised from 22TB/s to 19.2TB/s. Each Rubin GPU incorporates eight HBM4 stacks, each with a 2,048-bit wide memory bus. Reaching 22TB/s would require those stacks to run at approximately 10.75 gigabits per second per pin (Gbps/pin); the shipping target is 9.375Gbps/pin.

  The revised rate remains above the base HBM4 specification, which targets 8Gbps/pin, and above the 7.6Gbps/pin at which AMD runs HBM4 stacks on its MI455X accelerator, according to the source. NVIDIA has not publicly explained the reduction. The source's assessment is that NVIDIA and its memory partners could not deliver on the original targets — potentially because of memory controller speeds, stack data rates, stack yield constraints, or some combination — though NVIDIA has not confirmed that.

  GPU memory capacity per chip is unchanged at 288GB of HBM4 (eight stacks of 36GB each). Compute throughput is also unchanged: 50 petaFLOPS (PFLOPS, or quadrillions of floating-point operations per second) of NVFP4 inference, 35 PFLOPS of NVFP4 training, 250 teraoperations per second (TOPS) of INT8, and 2 PFLOPS of TF32.

  ## NVLink and scale-out bandwidth

  NVLink, NVIDIA's multi-GPU connection and scale-up fabric designed to make many physical GPUs function as one, has also been revised downward. Per-GPU NVLink bandwidth drops from 3.6TB/s to 3.0TB/s, a reduction of 600 gigabytes per second, or 17 percent.

  Scale-out networking bandwidth, which governs connections to the broader cluster fabric outside the NVLink domain, moves in the opposite direction. The preliminary specification of 400 gigabytes per second per GPU has been increased to 450GB/s in shipping hardware, a gain of 50GB/s.

  ## Vera Rubin NVL72

  The bandwidth changes carry through proportionally into the Vera Rubin NVL72, NVIDIA's flagship rack-scale system integrating 72 Rubin GPUs with Vera CPUs and BlueField-4 data processing units (DPUs). At the aggregate level, the rack's GPU memory bandwidth drops from 1,580TB/s to 1,400TB/s, a reduction of 180TB/s (11 percent), and NVLink scale-up bandwidth drops from 260TB/s to 216TB/s, a reduction of 44TB/s (17 percent). Scale-out networking bandwidth for the rack increases from 28.8TB/s to 32.4TB/s.

  Total GPU memory for the NVL72 remains at 20.7TB of HBM4. NVIDIA states that all other NVL72 specifications are unchanged from earlier published figures.

  ## HGX Rubin NVL8

  The HGX Rubin NVL8, an eight-GPU server form factor, carries an additional change not shared by the NVL72: total HBM4 memory capacity has been reduced from 2.3TB to 2.0TB, a loss of 300GB (13 percent). According to the source, reaching the preliminary 2.3TB figure would have required each of the eight Rubin GPUs to carry its full 288GB memory complement.

  NVL8 specification changes from preliminary to shipping:

  - GPU memory capacity: 2.3TB to 2.0TB
  - GPU memory bandwidth: 176TB/s to 130TB/s
  - NVLink scale-up bandwidth: 28.8TB/s to 24TB/s
  - Scale-out networking bandwidth: 1.6TB/s to 1.8TB/s (increase)
  - NVFP4 training throughput: 280 PFLOPS to 270 PFLOPS
  - FP8 training throughput: 140 PFLOPS to 130 PFLOPS

  NVFP4 inference throughput (400 PFLOPS) and TF32 throughput (16 PFLOPS) for the NVL8 are unchanged.

  ## What buyers receive

  The specification reductions mean customers receiving the first Rubin-based systems will have less memory bandwidth and NVLink interconnect capacity than NVIDIA's advance figures indicated. According to the source, those gaps carry performance ramifications for workloads that rely on high data-movement rates within and between GPUs.

  NVIDIA has met its targets for GPU clock speed and HBM4 memory capacity per chip; the revisions are confined to memory data rates and interconnect bandwidth. For large deployments that rely heavily on scale-out networking to coordinate between racks rather than NVLink, the increase in scale-out bandwidth provides more throughput than was originally specified, the source notes.

  Hyperscalers are currently making the first Vera Rubin NVL72 systems generally available to customers.
body_zh: |
  輝達（NVIDIA）已悄然修訂Rubin繪圖處理器（GPU）的出貨規格，HBM4記憶體頻寬從每秒22TB下修至19.2TB，NVLink擴展互連頻寬較先前公布的初始數字縮減17%，同時小幅上調對外叢集網路容量。隨著輝達與合作夥伴加速量產，各大超大規模雲端業者也開始向客戶正式提供首批NVL72機架規模系統。

  這些異動於九月間悄悄更新至輝達產品頁面及架構規格文件，最早由IT Home率先發現。輝達此前曾說明，已發布的Rubin規格屬於初始數字，仍有可能調整。

  ## 記憶體頻寬

  每顆Rubin GPU所配備的HBM4（高頻寬記憶體4，一種用於AI加速器的堆疊式記憶體）頻寬，已從22TB/s修正為19.2TB/s。每顆Rubin GPU內建八組HBM4堆疊，每組採用2,048位元寬記憶體匯流排。若要達到22TB/s，這些堆疊須以約每引腳每秒10.75吉位元（Gbps/pin）的速率運行；出貨目標則為9.375 Gbps/pin。

  修正後的速率仍高於HBM4基本規格（目標為8 Gbps/pin），也高於AMD在其MI455X加速器上以7.6 Gbps/pin運行HBM4堆疊的水準。輝達迄今未公開說明下修原因。消息來源評估，輝達與記憶體合作夥伴無法實現原定目標——可能涉及記憶體控制器速度、堆疊資料傳輸率、堆疊良率限制，或上述因素的綜合影響——但輝達尚未證實此說法。

  每顆晶片的GPU記憶體容量維持不變，仍為288GB HBM4（八組各36GB的堆疊）。運算效能同樣不變：NVFP4推論達50 PFLOPS（petaFLOPS，即每秒千兆次浮點運算）、NVFP4訓練達35 PFLOPS、INT8達250 TOPS（每秒兆次整數運算），以及TF32達2 PFLOPS。

  ## NVLink與對外網路頻寬

  NVLink是輝達專為多GPU連接所設計的擴展互連架構，可讓多顆實體GPU作為單一整體運作，此規格同樣向下修正。每顆GPU的NVLink頻寬從3.6TB/s降至3.0TB/s，縮減600GB/s，降幅達17%。

  對外網路頻寬（管理NVLink網域以外、連接至更大叢集架構的連線）則朝反方向調整。初始規格為每顆GPU 400GB/s，出貨硬體已提升至450GB/s，增加50GB/s。

  ## Vera Rubin NVL72

  上述頻寬變動按比例延伸至Vera Rubin NVL72——輝達旗艦機架規模系統，整合了72顆Rubin GPU、Vera CPU以及BlueField-4資料處理器（DPU）。在整機架層級，GPU記憶體頻寬從1,580TB/s降至1,400TB/s，減少180TB/s（下降11%）；NVLink擴展頻寬從260TB/s降至216TB/s，減少44TB/s（下降17%）。機架的對外網路頻寬則從28.8TB/s增加至32.4TB/s。

  NVL72的GPU記憶體總容量維持20.7TB HBM4不變。輝達表示，NVL72其餘所有規格均與先前公布數字相同。

  ## HGX Rubin NVL8

  HGX Rubin NVL8是八GPU伺服器型態，除了與NVL72共同的調整外，還有一項額外變動：HBM4記憶體總容量從2.3TB縮減至2.0TB，減少300GB（下降13%）。消息來源指出，若要達到初始規格的2.3TB，每顆Rubin GPU必須搭載完整的288GB記憶體配置。

  NVL8規格從初始版本到出貨版本的變動如下：

  - GPU記憶體容量：2.3TB → 2.0TB
  - GPU記憶體頻寬：176TB/s → 130TB/s
  - NVLink擴展頻寬：28.8TB/s → 24TB/s
  - 對外網路頻寬：1.6TB/s → 1.8TB/s（提升）
  - NVFP4訓練效能：280 PFLOPS → 270 PFLOPS
  - FP8訓練效能：140 PFLOPS → 130 PFLOPS

  NVL8的NVFP4推論效能（400 PFLOPS）與TF32效能（16 PFLOPS）維持不變。

  ## 買家實際取得的規格

  上述規格縮水，意味著首批收到Rubin系統的客戶，所擁有的記憶體頻寬與NVLink互連容量將低於輝達當初預告的數字。消息來源表示，這些落差對高度依賴GPU內部及GPU間資料傳輸速率的工作負載，將帶來實質的效能影響。

  輝達已達成GPU時脈速度與每顆晶片HBM4記憶體容量的目標；此次修正僅限於記憶體資料傳輸率與互連頻寬。消息來源指出，對於大型部署而言，若主要仰賴對外網路在機架間協調運作，而非倚重NVLink，則對外頻寬的提升反而提供了比原始規格更高的傳輸量。

  目前，各超大規模雲端業者正陸續向客戶正式開放首批Vera Rubin NVL72系統。
date: "2026-11-02"
source_published: "2026-11-01T03:00:28.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-10-27-aivres-shows-vera-rubin-nvl72-rack-and-hgx-rubin-nvl8-compute-tray-at-ocp-summit"
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA Updates Rubin GPU Specs as First Production Hardware Arrives (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/nvidia-updates-rubin-gpu-specs-as-first-production-hardware-arrives/"
    title: "NVIDIA Updates Rubin GPU Specs as First Production Hardware Arrives"
    trust: 3
    type: primary
    published_at: "2026-11-01T03:00:28.000Z"
---
