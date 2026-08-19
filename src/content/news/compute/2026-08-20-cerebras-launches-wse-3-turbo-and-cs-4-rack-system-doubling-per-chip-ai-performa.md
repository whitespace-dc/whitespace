---
title_en: "Cerebras launches WSE-3 Turbo and CS-4 rack system, doubling per-chip AI performance"
title_zh: "Cerebras發表WSE-3 Turbo與CS-4機架系統，單晶片AI效能倍增"
summary_en: "Cerebras Systems has unveiled the WSE-3 Turbo, a clock-doubled version of its wafer-scale AI accelerator rated at 250 petaflops of sparse FP16 performance, and the CS-4, its first rack-scale system integrating three of the new processors for a combined 750 petaflops in a single rack."
summary_zh: "Cerebras Systems推出WSE-3 Turbo晶片與CS-4機架級運算系統，前者以倍頻方式將稀疏FP16效能提升至250 PFLOPS，後者則首度將三顆新處理器整合於單一機架，合計達750 PFLOPS。"
body_en: |
  Cerebras Systems has introduced the WSE-3 Turbo processor and the CS-4 rack-scale compute system, its most significant hardware refresh since the WSE-3 launched in 2024, according to a technical review published by ServeTheHome. The new processor doubles the compute throughput of its predecessor by running every major subsystem at twice the clock speed, while the accompanying CS-4 rack integrates three of those processors into a single unified system for the first time.

  ## WSE-3 Turbo: same silicon, doubled clocks

  The WSE-3 Turbo is not a new chip design. It retains the same 900,000 AI cores, 44 gigabytes (GB) of on-processor SRAM, 4 trillion transistors, and TSMC 5-nanometer fabrication process as the original WSE-3. The performance improvement comes entirely from raising clock speeds across every subsystem of the processor simultaneously.

  Key WSE-3 Turbo specifications, compared to the original WSE-3:

  - **Compute throughput**: 250 petaflops (PFLOPS) sparse FP16, up from 125 PFLOPS
  - **On-processor SRAM bandwidth**: 43.2 petabytes per second (PB/sec), up from 21 PB/sec
  - **On-wafer mesh fabric bandwidth**: 53.5 PB/sec, up from 26.8 PB/sec
  - **Off-processor network bandwidth**: 300 gigabytes per second (GB/sec), up from 150 GB/sec
  - **Transistor count**: 4 trillion (unchanged)
  - **Process node**: TSMC 5nm (unchanged)

  Cerebras has not disclosed the WSE-3 Turbo's power consumption. However, the company stated that the CS-4 rack "enables the delivery of twice as much power to the WSE-3 Turbo" relative to the CS-3 system that housed the original WSE-3. Since the WSE-3 consumed approximately 27 kilowatts (kW), that language implies the Turbo variant draws roughly 54 kW. ServeTheHome noted that achieving a doubling of clock speed without a superlinear increase in power — that is, without power rising faster than performance — would represent a meaningful engineering result if the implied figures hold.

  ## CS-4: first true rack-scale system

  The CS-4 is Cerebras's first rack-scale compute system. Its predecessor, the CS-3, was a single-processor, 16U liquid-cooled chassis. While Cerebras offered a "CS-3 Rack" configuration containing two CS-3 units, those two units functioned as independent systems rather than as a unified scale-up platform.

  The CS-4 integrates three WSE-3 Turbo processors into a single rack alongside a redesigned power, cooling, and networking architecture. Compared to a single CS-3 system, the CS-4 delivers:

  - **750 PFLOPS** sparse FP16, versus 125 PFLOPS
  - **132 GB** total on-processor SRAM, versus 44 GB
  - **129.6 PB/sec** memory bandwidth, versus 21.6 PB/sec
  - **160.5 PB/sec** fabric bandwidth, versus 26.7 PB/sec
  - **900 GB/sec** I/O bandwidth, versus 150 GB/sec
  - **2 microseconds (µs)** I/O latency, versus 5 µs

  Against the CS-3 Rack — two independent CS-3 units — the CS-4 represents a 50 percent increase in processor count per rack. Combined with the WSE-3 Turbo's doubled per-chip throughput, the CS-4 delivers approximately three times the total compute of a CS-3 Rack, or six times that of a single CS-3 system, according to ServeTheHome's analysis.

  ## Nexus platform and multi-generation rack architecture

  To house three higher-power processors in a single rack, Cerebras developed a new internal platform called Nexus. The architecture places power supplies, fans, and support hardware at the front of the rack, with WSE processors at the rear. Cerebras described Nexus as a multi-generation design: racks are intended to accommodate future WSE generations and other equipment through component swaps rather than full rack replacements, a capability the company is emphasizing to prospective customers.

  ## Industry positioning

  The CS-4 launch marks Cerebras's entry into rack-scale AI compute, a segment where NVIDIA and AMD have both made recent moves, ServeTheHome noted. Cerebras introduced the original wafer-scale engine in 2019 and has shipped three processor generations since. The company said it intends the CS-4 and Nexus platform to address both the current scale-up computing paradigm and longer-term disaggregated data center architectures.

  The CS-4's multi-generation Nexus rack design is intended to give customers a path to reuse rack infrastructure across future WSE processor generations.
body_zh: |
  ## Cerebras發表WSE-3 Turbo與CS-4機架系統，單晶片AI效能倍增

  Cerebras Systems正式推出WSE-3 Turbo處理器與CS-4機架級運算系統，這是該公司自2024年發表WSE-3以來規模最大的一次硬體世代更新。根據ServeTheHome發布的技術評測，WSE-3 Turbo透過對全部主要子系統同步倍頻，將前代產品的運算吞吐量提升一倍；而搭配推出的CS-4機架則首度將三顆WSE-3 Turbo整合成一套統一的系統。

  ## WSE-3 Turbo：相同晶片、時脈倍增

  WSE-3 Turbo並非全新設計的晶片。它與原版WSE-3共用相同的90萬顆AI核心、44 GB的片上SRAM、4兆顆電晶體，以及台積電5奈米製程。效能提升完全來自於對處理器各子系統同步拉高運作時脈。

  WSE-3 Turbo主要規格與原版WSE-3對照如下：

  - **運算吞吐量**：稀疏FP16 250 PFLOPS，前代為125 PFLOPS
  - **片上SRAM頻寬**：每秒43.2 PB，前代為21 PB/秒
  - **晶圓內網狀互連頻寬**：每秒53.5 PB，前代為26.8 PB/秒
  - **對外網路頻寬**：每秒300 GB，前代為150 GB/秒
  - **電晶體數量**：4兆顆（不變）
  - **製程節點**：台積電5奈米（不變）

  Cerebras尚未公布WSE-3 Turbo的功耗數字。不過，該公司表示CS-4機架「能夠為WSE-3 Turbo提供原CS-3系統兩倍的供電量」。由於WSE-3的功耗約為27千瓦（kW），這樣的說法暗示Turbo版本的功耗約為54 kW左右。ServeTheHome指出，若上述推算數字屬實，能在時脈倍增的情況下避免功耗超線性攀升——也就是功耗成長幅度未超過效能提升幅度——將是相當值得關注的工程成果。

  ## CS-4：首款真正的機架級系統

  CS-4是Cerebras首款機架級運算系統。前代產品CS-3是單處理器、16U的液冷機箱。雖然Cerebras曾推出內含兩台CS-3的「CS-3 Rack」配置，但那兩台機器以獨立系統的形式運作，並非整合成統一的擴展平台。

  CS-4將三顆WSE-3 Turbo處理器整合進單一機架，並重新設計了供電、散熱與網路架構。與單台CS-3系統相比，CS-4的各項規格提升如下：

  - **稀疏FP16運算效能**：750 PFLOPS，對比125 PFLOPS
  - **片上SRAM總容量**：132 GB，對比44 GB
  - **記憶體頻寬**：每秒129.6 PB，對比21.6 PB/秒
  - **網狀互連頻寬**：每秒160.5 PB，對比26.7 PB/秒
  - **I/O頻寬**：每秒900 GB，對比150 GB/秒
  - **I/O延遲**：2微秒（µs），對比5微秒

  若與CS-3 Rack——即兩台獨立CS-3機器的組合——相比，CS-4在每機架處理器數量上提升了50%。再加上WSE-3 Turbo每顆晶片效能倍增，據ServeTheHome分析，CS-4的整體運算量約為CS-3 Rack的三倍，或單台CS-3系統的六倍。

  ## Nexus平台與跨世代機架架構

  為了在單一機架內容納三顆更高功耗的處理器，Cerebras開發了名為Nexus的全新內部平台。這套架構將電源供應器、風扇及輔助硬體配置於機架前側，WSE處理器則置於後側。Cerebras將Nexus定位為跨世代設計：機架預計能透過元件替換而非整架汰換的方式，容納未來世代的WSE處理器及其他設備，並以此作為對潛在客戶的重要賣點。

  ## 產業定位

  ServeTheHome指出，CS-4的推出標誌著Cerebras正式進軍機架級AI運算市場——這個區塊近來已有輝達與AMD相繼布局。Cerebras最初於2019年推出晶圓級引擎（Wafer-Scale Engine），至今已累計出貨三個世代的處理器。該公司表示，CS-4與Nexus平台不僅著眼於當前的擴展式運算需求，也希望能因應長遠的分散式資料中心架構趨勢。

  CS-4所採用的多世代Nexus機架設計，旨在讓客戶能夠跨越未來各代WSE處理器，持續沿用同一套機架基礎設施。
date: "2026-08-20"
source_published: "2026-08-19T14:35:17.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Cerebras", "Nvidia", "TSMC"]
trust:
  score: 3
  reasoning: "Single source: Cerebras Intros Faster WSE-3 Turbo Processor and First Rack-Scale CS-4 System (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/cerebras-intros-faster-wse-3-turbo-processor-and-first-rack-scale-cs-4-system/"
    title: "Cerebras Intros Faster WSE-3 Turbo Processor and First Rack-Scale CS-4 System"
    trust: 3
    type: primary
    published_at: "2026-08-19T14:35:17.000Z"
---
