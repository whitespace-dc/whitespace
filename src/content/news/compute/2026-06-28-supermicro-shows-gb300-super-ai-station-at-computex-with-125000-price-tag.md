---
title_en: "Supermicro Shows GB300 Super AI Station at Computex with $125,000 Price Tag"
title_zh: "超微在Computex展出GB300超級AI工作站，售價約台幣400萬元"
summary_en: "Supermicro displayed its Super AI Station — its version of NVIDIA's DGX Station desktop workstation — at Computex 2026, giving attendees a close look at the liquid-cooled, 1,600-watt system built around NVIDIA's Grace Blackwell GB300 chip and priced at roughly $125,000."
summary_zh: "超微（Supermicro）在2026年Computex展上展出其「超級AI工作站」（Super AI Station），這是輝達DGX Station桌上型工作站的超微版本，搭載輝達Grace Blackwell GB300晶片，採液冷設計、總功耗達1,600瓦，售價約12萬5,000美元。"
body_en: |
  Supermicro put its Super AI Station on display at Computex 2026, offering one of the first close public looks at a Grace Blackwell GB300-based desktop workstation retailing for approximately $125,000 — currently listed via Newegg, according to ServeTheHome.

  The Super AI Station is Supermicro's implementation of NVIDIA's DGX Station platform, a category of desktop systems built around NVIDIA's flagship GB300 accelerator. NVIDIA controls the motherboard and processor design for DGX Station products, leaving OEMs such as Supermicro to design the chassis, cooling, and peripheral configuration within NVIDIA's specifications.

  ## The GB300 chip

  At the system's core is the Grace Blackwell GB300, a single package that combines a 72-core Grace central processing unit (CPU) with a Blackwell graphics processing unit (GPU). The GPU portion in DGX Station systems ships with seven of eight HBM3e (High Bandwidth Memory) stacks enabled rather than the full complement, yielding 252 gigabytes (GB) of GPU memory and a total memory bandwidth of 7.1 terabytes per second (TB/s). The CPU side draws on four LPDDR5X SOCAMMs — a form of soldered memory module — providing 496 GB of system memory.

  ## Cooling and power

  The system carries a total design power of 1,600 watts (W), the majority of which is attributed to the GB300 chip. Supermicro uses liquid cooling throughout, fitting cold plates over all critical components and routing heat to a radiator mounted at the front of the chassis. Three fans draw air through the radiator and push it toward the rear. Supermicro noted the front-to-back airflow arrangement is intentional: it matches conventional workstation design while also making the unit compatible with an optional rackmount kit that allows the desktop system to be installed as a 5U server.

  ## Storage and expansion

  All DGX Station systems include four PCIe Gen 5 x4 M.2 2280 storage slots — the slot format used by most consumer and enterprise solid-state drives. The showcase unit at Computex was fitted with 480 GB Micron 7450 Gen4 x4 drives in each slot. Two PCIe x16 slots (wired at x8 electrical) are available for additional expansion cards.

  Because the GB300 is a compute-optimized accelerator without conventional graphics output, Supermicro installed an NVIDIA RTX PRO discrete graphics card in the showcase system. NVIDIA permits this as an optional addition; without it, the system is limited to video output from its baseboard management controller (BMC), the low-power chip used for remote system administration.

  ## Networking and I/O

  The DGX Station platform features dual 400-gigabit Ethernet (GbE) ports using QSFP connectors, driven by NVIDIA's ConnectX-8 network controller. Those ports are visible along the system's side and carry a small heatsink. On the front panel, two USB 3 ports run at 5 Gbps; the rear carries four USB 3 ports at 10 Gbps. No USB-C ports are present on the system.

  ## Software and roadmap

  DGX Station systems currently ship with DGX OS, NVIDIA's customized distribution of Ubuntu Linux. NVIDIA and its OEM partners, including Supermicro, are expected to release versions running Windows later in 2026 under the DGX Station for Windows branding.

  ## Industry significance

  The Super AI Station represents the only way to access NVIDIA's GB300 accelerator outside of a full server form factor, making it relevant for organizations that want to run local development and testing against GB300-class hardware without committing to rack infrastructure. The 1,600 W power draw requires a dedicated electrical circuit, a practical constraint that may steer some buyers toward the rackmount configuration rather than a desk deployment. The $125,000 price point positions DGX Station systems as the highest-cost desktop computers currently available, according to ServeTheHome's reporting.
body_zh: |
  ## 超微在Computex展出GB300超級AI工作站，售價約12萬5,000美元

  超微（Supermicro）在2026年Computex展上公開展示其「超級AI工作站」（Super AI Station），讓參觀者得以近距離一睹這款基於輝達（NVIDIA）Grace Blackwell GB300架構的桌上型工作站。根據ServeTheHome的報導，該系統目前已在Newegg上架，售價約12萬5,000美元。

  超級AI工作站是超微對輝達DGX Station平台的自家實作版本。DGX Station是一個以輝達旗艦GB300加速器為核心所打造的桌上型系統產品線。輝達統一掌控DGX Station產品的主機板與處理器設計，OEM廠商（如超微）則在輝達規格框架內，自行設計機殼、散熱方案及周邊配置。

  ## GB300晶片

  系統核心為Grace Blackwell GB300，這是一顆將72核心Grace中央處理器（CPU）與Blackwell繪圖處理器（GPU）整合於單一封裝的晶片。在DGX Station系統中，GPU部分開啟八組HBM3e（高頻寬記憶體）堆疊中的七組，提供252 GB的GPU記憶體，總記憶體頻寬達每秒7.1 TB。CPU端則配備四條LPDDR5X SOCAMM——一種焊接式記憶體模組，提供496 GB的系統記憶體。

  ## 散熱與電源

  整套系統的設計總功耗為1,600瓦，其中絕大部分來自GB300晶片本身。超微全面採用液冷設計，在所有關鍵元件上加裝冷板，並將熱能導引至安裝於機殼前方的散熱排。三顆風扇負責抽取空氣穿過散熱排，再向後排出。超微表示，前進後出的氣流設計是刻意為之：一方面符合傳統工作站的設計慣例，同時也讓這台桌上型系統相容於選配的機架安裝套件，可作為5U伺服器安裝於機架中。

  ## 儲存與擴充

  所有DGX Station系統均配備四個PCIe Gen 5 x4 M.2 2280儲存插槽——即消費級與企業級固態硬碟最常見的插槽規格。Computex展示機在每個插槽中均安裝了480 GB的Micron 7450 Gen4 x4固態硬碟。此外還提供兩個PCIe x16插槽（電氣走線為x8），可用於安裝額外的擴充卡。

  由於GB300是針對運算優化的加速器，本身不具備傳統的圖形輸出功能，超微在展示機中另外安裝了一張輝達RTX PRO獨立顯示卡。輝達允許此項選配；若不安裝獨立顯示卡，系統僅能透過底板管理控制器（BMC）輸出影像——BMC是一顆用於遠端系統管理的低功耗晶片。

  ## 網路與輸出入介面

  DGX Station平台配備雙埠400 Gigabit乙太網路（GbE）連接埠，採QSFP接頭，由輝達ConnectX-8網路控制器驅動。這兩個連接埠位於系統側面，並附有小型散熱片。前面板提供兩個傳輸速率為5 Gbps的USB 3連接埠；後方則有四個10 Gbps的USB 3連接埠。系統上並未配置任何USB-C連接埠。

  ## 軟體與產品藍圖

  DGX Station系統目前預載DGX OS，即輝達基於Ubuntu Linux客製化的作業系統。輝達及包括超微在內的OEM合作夥伴預計於2026年稍晚推出支援Windows的版本，品牌名稱為「DGX Station for Windows」。

  ## 產業意義

  超級AI工作站是在完整伺服器形態之外，唯一能夠取得輝達GB300加速器的途徑，因此對於希望在本地端進行GB300等級硬體開發與測試、又不想投資機架基礎設施的企業或組織而言，具有相當的吸引力。不過，1,600瓦的功耗需要專用電路，這一實際限制可能促使部分買家選擇機架式配置，而非直接置於桌面使用。12萬5,000美元的售價，使DGX Station系統成為目前市場上售價最高的桌上型電腦，此一定位亦獲ServeTheHome報導所佐證。
date: "2026-06-28"
source_published: "2026-06-27T15:00:22.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Micron", "Nvidia", "Supermicro"]
trust:
  score: 3
  reasoning: "Single source: Taking an Up-Close Look at the Supermicro GB300 Super AI Station (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/taking-an-up-close-look-at-the-supermicro-gb300-super-ai-station/"
    title: "Taking an Up-Close Look at the Supermicro GB300 Super AI Station"
    trust: 3
    type: primary
    published_at: "2026-06-27T15:00:22.000Z"
---
