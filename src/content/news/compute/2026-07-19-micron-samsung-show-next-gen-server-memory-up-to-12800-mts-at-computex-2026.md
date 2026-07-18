---
title_en: "Micron, Samsung Show Next-Gen Server Memory Up to 12,800 MT/s at Computex 2026"
title_zh: "美光、三星Computex 2026展示次世代伺服器記憶體，速率最高達12,800 MT/s"
summary_en: "Micron Technology and Samsung displayed next-generation server memory modules at Computex 2026, with Micron showing DDR5-8000 registered DIMMs and Samsung demonstrating second-generation Multiplexor Rank DIMMs rated at 12,800 MT/s, a 45 percent bandwidth increase over the current MRDIMM generation."
summary_zh: "美光科技與三星在2026年Computex展覽中展示次世代伺服器記憶體模組：美光展出DDR5-8000 RDIMM，三星則發表第二代多工排序雙列直插式記憶體模組（MRDIMM Gen2），傳輸速率達12,800 MT/s，較現行MRDIMM世代頻寬大幅提升45%。"
body_en: |
  Micron Technology and Samsung displayed next-generation server memory modules at Computex 2026, with Micron showing DDR5-8000 registered DIMMs (RDIMMs) and Samsung demonstrating second-generation Multiplexor Rank DIMMs (MRDIMMs) rated at 12,800 megatransfers per second (MT/s), 45 percent faster than the current MRDIMM generation, as Intel and AMD push ahead with next-generation 16-channel server processor platforms.

  ## MRDIMM Gen2 pushes bandwidth to 12,800 MT/s

  The second generation of MRDIMMs retains the same fundamental architecture as Gen1: multiple ranks of DRAM chips on a single module, with multiplexors switching between them in an interleaved pattern to produce higher aggregate bandwidth than a conventional DIMM of equivalent DRAM speed. The advance in Gen2 is the underlying base DRAM. Where Gen1 MRDIMMs used DDR5-4400 base chips to reach 8,800 MT/s, Gen2 moves to DDR5-6400 base chips operating the same way, yielding 12,800 MT/s.

  Samsung is promoting MRDIMM Gen2 in capacities up to 128 gigabytes (GB) per module. That ceiling is half the 256GB available from 3D-stacked (3DS) RDIMMs, a format that stacks multiple DRAM die vertically to increase density without multiplexing. The gap means server operators cannot simultaneously maximize both per-channel bandwidth and memory capacity per slot; gaining close to twice the bandwidth requires accepting roughly half the capacity.

  ## Projected bandwidth on AMD's 16-channel Venice platform

  MRDIMM Gen2 is expected to debut alongside AMD's EPYC "Venice" server processor platform, which is designed with 16 memory channels, though that pairing has not been confirmed by either company. Based on Samsung's stated 12,800 MT/s figure, a Venice system running MRDIMM Gen2 across all 16 channels would produce 1.6 terabytes per second (TB/s) of aggregate memory bandwidth, according to ServeTheHome. The current EPYC 9005 platform supports 12 channels at DDR5-6400, which the publication pegged at 0.6 TB/s. AMD's EPYC Venice is described as launching later in 2026.

  ## Micron's DDR5-8000 RDIMMs

  On the conventional RDIMM side, Micron is developing DDR5-8000 modules to replace the DDR5-6400 maximum supported on current platforms. Micron's lineup covers both standard and 3D-stacked DIMMs, with the 3DS variant pairing 32-gigabit die stacking with 8,000 MT/s speeds to support modules as large as 256GB. Micron attributed the performance advance in part to its 1y manufacturing process, which the company says gives it an advantage in energy consumption measured in picojoules per bit, positioning the higher-speed modules as an option for power-conscious system operators.

  Micron's DDR5-8000 modules appeared at multiple vendor booths at Computex, including Asus's, indicating that board and server partners are already incorporating the memory into upcoming platform designs.

  ## Platform context and significance

  Both AMD and Intel are preparing server processor platforms with 16 memory channels, up from 12 in the current EPYC 9005 generation. AMD's EPYC Venice is targeted for later in 2026. Intel's Diamond Rapids Xeon is also planned with 16 channels but is scheduled for 2027; Intel canceled a planned 8-channel intermediate platform in the interim. ServeTheHome noted that the broader channel counts will provide some bandwidth uplift on their own, but that higher-speed RDIMMs and MRDIMMs are expected to supply the remainder of the gains server customers are demanding.

  Intel's Diamond Rapids Xeon, targeting 16 memory channels, is scheduled to launch in 2027.
body_zh: |
  美光科技（Micron Technology）與三星（Samsung）在2026年Computex展覽中展示了次世代伺服器記憶體模組：美光展出DDR5-8000 RDIMM（Registered DIMM），三星則發表第二代多工排序雙列直插式記憶體模組（MRDIMM Gen2），傳輸速率達每秒12,800百萬次傳輸（MT/s），較現行MRDIMM世代快出45%。這兩項發表的背景，是英特爾與AMD正積極推進採用16記憶體通道的次世代伺服器處理器平台。

  ## MRDIMM Gen2將頻寬推升至12,800 MT/s

  第二代MRDIMM與第一代維持相同的基本架構：在單一模組上配置多個DRAM晶片排（rank），透過多工器（multiplexor）以交錯方式在各排之間切換，藉此達到比同等DRAM速度的傳統DIMM更高的總頻寬。Gen2的進步之處在於底層基礎DRAM的升級。Gen1 MRDIMM採用DDR5-4400基礎晶片，達到8,800 MT/s；Gen2改用DDR5-6400基礎晶片，以相同運作方式將速率提升至12,800 MT/s。

  三星推出的MRDIMM Gen2單模組容量最高達128 GB（吉位元組）。這個上限僅是3D堆疊（3DS）RDIMM的一半——3DS RDIMM可提供256 GB，透過垂直堆疊多層DRAM晶粒來提升密度，並不採用多工方式。這項差距意味著伺服器業者無法同時兼顧每通道頻寬最大化與每插槽記憶體容量最大化；若要獲得接近兩倍的頻寬，就必須接受約一半的容量。

  ## AMD 16通道Venice平台的預估頻寬

  MRDIMM Gen2預計將搭配AMD的EPYC「Venice」伺服器處理器平台首度問世，該平台設計採用16個記憶體通道，不過兩家公司均尚未正式確認這項搭配。根據三星所公布的12,800 MT/s規格，依ServeTheHome的推算，一套在全部16個通道上配置MRDIMM Gen2的Venice系統，理論上可提供每秒1.6 TB（兆位元組）的總記憶體頻寬。相較之下，現行的EPYC 9005平台支援12個通道、速率為DDR5-6400，該媒體估算的總頻寬為0.6 TB/s。AMD的EPYC Venice預計於2026年稍晚推出。

  ## 美光的DDR5-8000 RDIMM

  在傳統RDIMM方面，美光正在開發DDR5-8000模組，以取代現行平台所支援的最高DDR5-6400規格。美光的產品線涵蓋標準版與3D堆疊（3DS）DIMM，其中3DS版本結合32 Gb（吉位元）晶粒堆疊與8,000 MT/s傳輸速率，可支援最大256 GB的模組容量。美光將此效能提升部分歸功於其1y製程技術，並表示這使其在以每位元皮焦耳（picojoule per bit）衡量的能耗表現上具備競爭優勢，將高速模組定位為注重功耗控管的系統業者的理想選擇。

  美光的DDR5-8000模組出現在Computex多個廠商的展示攤位，包括華碩（Asus），顯示主機板與伺服器合作夥伴已著手將這款記憶體納入即將推出的平台設計之中。

  ## 平台背景與意義

  AMD與英特爾均正積極籌備搭載16個記憶體通道的伺服器處理器平台，相較於現行EPYC 9005世代的12個通道有所增加。AMD的EPYC Venice預計於2026年稍晚推出；英特爾的Diamond Rapids Xeon同樣規劃採用16個通道，但預定於2027年推出。值得注意的是，英特爾已取消原先計畫中的一款8通道過渡平台。ServeTheHome指出，更多的通道數本身即可帶來一定程度的頻寬提升，但高速RDIMM與MRDIMM預計將提供伺服器客戶所需的其餘增益。

  英特爾的Diamond Rapids Xeon瞄準16個記憶體通道，預計於2027年正式推出。
date: "2026-07-19"
source_published: "2026-07-18T17:00:51.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Intel", "Micron"]
trust:
  score: 3
  reasoning: "Single source: Next Gen Server Memory On Display: DDR5-8000 RDIMMs and MRDIMM Gen2 Hits DDR5-12800 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/next-gen-server-memory-on-display-ddr5-8000-rdimms-and-mrdimm-gen2-hits-ddr5-12800/"
    title: "Next Gen Server Memory On Display: DDR5-8000 RDIMMs and MRDIMM Gen2 Hits DDR5-12800"
    trust: 3
    type: primary
    published_at: "2026-07-18T17:00:51.000Z"
---
