---
title_en: "Senao debuts SA9832v2 wired SASE gateway built on Intel Amston Lake"
title_zh: "神腦SA9832v2有線SASE閘道亮相，搭載Intel Amston Lake平台"
summary_en: "Senao demonstrated the SA9832v2 secure access service edge gateway at Computex 2026, a wired-only appliance powered by Intel's Atom X7809C processor with six 2.5 Gigabit Ethernet ports and two SFP+ uplinks. The device is the company's newest and highest-performance model in its SASE gateway lineup."
summary_zh: "神腦於2026年Computex展示SA9832v2安全存取服務邊緣閘道，此款純有線設備採用Intel Atom X7809C處理器，配備六個2.5 Gigabit乙太網路埠及兩個SFP+上行埠，是該公司SASE閘道產品線中最新、效能最高的機種。"
body_en: |
  Senao demonstrated the SA9832v2 secure access service edge (SASE) gateway at Computex 2026, presenting it as the newest and most capable product in the company's SASE lineup, with higher system performance and greater wired networking bandwidth than previous models.

  The SA9832v2 is built around Intel's Atom X7809C processor, part of the Amston Lake embedded platform. ServeTheHome, which examined the device at Senao's booth, reported that the chip carries 8 Gracemont CPU cores, a peak clock speed of 3.6GHz, and a thermal design power (TDP) of 25 watts. Amston Lake is architecturally equivalent to Intel's Alder Lake-N series, which has appeared across a range of networking appliances. The SoC provides 9 PCIe Gen3 lanes, which ServeTheHome identified as the next most relevant feature after CPU cores for gateway applications. Senao pairs the processor with 16GB of LPDDR5 memory.

  ## Port configuration

  The SA9832v2 carries six 2.5 Gigabit Ethernet (GbE) copper ports and two SFP+ ports. SFP+ slots accept small form-factor pluggable transceivers, typically used for fiber or direct-attach copper connections at higher speeds. The predecessor SA9820 offered a mixed copper configuration of two 1GbE ports and two 2.5GbE ports alongside two SFP+ ports. By upgrading all copper connections to 2.5GbE and adding two additional copper ports, the SA9832v2 delivers substantially more aggregate wired Ethernet bandwidth than the SA9820.

  ## Relationship to the SA9820

  Despite carrying a "v2" designation, ServeTheHome reported it could find no SA9832v1. The SA9832v2 is functionally a wired-only derivative of the existing SA9820, which combines wired and wireless connectivity. Senao uses the same Intel Atom X7809C processor and the same physical form factor in both products. The SA9832v2 drops wireless capability in exchange for faster and more numerous wired Ethernet ports, and Senao positions it as suited to environments that specifically do not require wireless connectivity.

  ## Physical design

  The front panel includes two USB 3.0 ports and a USB Mini-B connector for console access. The rear panel has two fan outlets serving as the sole active cooling for the SoC and associated hardware. The system does not include an internal power supply unit, relying instead on an external power adapter.

  ## What a SASE gateway does

  A SASE gateway combines network and security functions in a single appliance, handling tasks such as firewall enforcement, traffic filtering and inspection, and virtual private network (VPN) connectivity. The SA9832v2 is intended to function simultaneously as a networking appliance and a security appliance for business deployments.

  ## Significance

  The SA9832v2 extends Senao's SASE lineup with a product aimed at deployments requiring higher wired throughput without wireless connectivity. The Amston Lake platform, designed for embedded markets and less widely covered than Intel's server or client processor lines, provides the PCIe lane count and low power envelope suited to always-on edge appliances. Senao also showed an unrelated Xeon 6-based SmartNIC and data processing unit (DPU) at its Computex 2026 booth.
body_zh: |
  ## 神腦SA9832v2有線SASE閘道亮相，搭載Intel Amston Lake平台

  神腦於2026年Computex展覽上展示了SA9832v2安全存取服務邊緣（SASE）閘道，將其定位為公司SASE產品線中最新、最強的機種，相較前代產品擁有更高的系統效能與更大的有線網路頻寬。

  SA9832v2以Intel Atom X7809C處理器為核心，該晶片隸屬Intel Amston Lake嵌入式平台。前往神腦展位實際查看的ServeTheHome報導指出，這顆晶片內建8個Gracemont CPU核心，最高時脈達3.6GHz，熱設計功耗（TDP）為25瓦。Amston Lake在架構上與Intel Alder Lake-N系列相當，後者已廣泛應用於各類網路設備。此款SoC提供9條PCIe Gen3通道，ServeTheHome認為這是繼CPU核心數之後，對閘道應用最具參考價值的規格。神腦為這顆處理器搭配16GB LPDDR5記憶體。

  ## 連接埠配置

  SA9832v2配備六個2.5 Gigabit乙太網路（GbE）銅纜埠及兩個SFP+埠。SFP+插槽支援小型可插拔收發器，通常用於光纖或直接連接銅纜的高速傳輸。前代產品SA9820的銅纜配置為兩個1GbE埠加兩個2.5GbE埠，另有兩個SFP+埠。SA9832v2將所有銅纜埠全面升級為2.5GbE，並額外增加兩個銅纜埠，因此整體有線乙太網路聚合頻寬遠高於SA9820。

  ## 與SA9820的關係

  儘管型號帶有「v2」字樣，ServeTheHome表示找不到任何SA9832v1的相關資訊。SA9832v2在功能上是現有SA9820的純有線衍生版本，SA9820同時具備有線與無線連接能力。兩款產品採用相同的Intel Atom X7809C處理器與相同的外觀尺寸。SA9832v2捨棄無線功能，換取速度更快、數量更多的有線乙太網路埠，神腦將其定位為適合不需要無線連接之環境的專用機種。

  ## 機體設計

  前面板設有兩個USB 3.0埠及一個USB Mini-B接頭，供主控台存取使用。後面板則有兩個風扇出風口，作為SoC及相關硬體的唯一主動散熱機制。本機不內建電源供應器，改以外接電源變壓器供電。

  ## SASE閘道的功能

  SASE閘道將網路與資安功能整合於單一設備，負責執行防火牆規則、流量過濾與檢測，以及虛擬私人網路（VPN）連線等工作。SA9832v2的設計目標是在企業部署環境中，同時作為網路設備與資安設備運作。

  ## 產品意義

  SA9832v2豐富了神腦SASE產品線，專為需要更高有線傳輸量、且無須無線連接的部署場景而生。Amston Lake平台專為嵌入式市場設計，在業界的討論度不如Intel伺服器或用戶端處理器產品線，但其PCIe通道數量與低功耗特性，恰好符合需全天候運作之邊緣設備的需求。此外，神腦在2026年Computex展位上也展示了一款採用Xeon 6的SmartNIC及資料處理單元（DPU），與SA9832v2屬不同產品系列。
date: "2026-07-27"
source_published: "2026-07-26T17:00:01.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["Intel"]
trust:
  score: 3
  reasoning: "Single source: This Senao SA9832v2 is an Intel Amston Lake-Powered Cloud SASE Gateway (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/computex-2026-senao-sa9832v2-an-intel-amston-lake-powered-cloud-sase-gateway/"
    title: "This Senao SA9832v2 is an Intel Amston Lake-Powered Cloud SASE Gateway"
    trust: 3
    type: primary
    published_at: "2026-07-26T17:00:01.000Z"
---
