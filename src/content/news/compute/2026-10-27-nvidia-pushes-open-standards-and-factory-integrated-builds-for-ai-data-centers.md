---
title_en: "Nvidia pushes open standards and factory-integrated builds for AI data centers"
title_zh: "輝達推開放標準與工廠預整合，加速AI資料中心部署"
summary_en: "Nvidia contributed Vera Rubin rack designs to the Open Compute Project, released open source software for its DSX AI Factory platform, and unveiled a containerized DSX POD deployment model at GTC Berlin on October 21, claiming a six-month onsite build can be compressed to 14 days with pre-integrated modular units."
summary_zh: "輝達於10月21日在柏林GTC大會上宣布三項重大舉措：將Vera Rubin機架設計貢獻給開放運算計畫（OCP）、發布DSX AI工廠平台開源軟體，並推出容器化DSX POD部署模式。輝達宣稱，透過工廠預整合的模組化單元，原本約需六個月的現場建置可壓縮至最短14天。"
body_en: |
  ## Nvidia opens Vera Rubin hardware designs, targets faster AI factory deployments

  Nvidia contributed Vera Rubin rack and compute tray designs to the Open Compute Project (OCP), published new open source software for its DSX AI Factory platform, and introduced a containerized delivery model called DSX POD — all announced at GTC Berlin on October 21 — as part of a coordinated push to standardize how large-scale AI data centers are engineered, built, and operated.

  The announcements span hardware architecture, facility specifications, power distribution, networking and supply chain expansion, and involve a broad coalition of partners including Meta, Cisco, Google, AMD, Visionbay, Schneider Electric, Vertiv, and a roster of Taiwanese and European manufacturers.

  ## DSX POD: factory-assembled AI infrastructure

  The most operationally significant announcement was DSX POD, a reference design built around the Vera Rubin platform that packages compute, networking, rack-level power and liquid cooling inside standardized modular containers. Under the model, manufacturers would complete integration, cabling, piping and functional testing before shipment, rather than assembling those systems through successive onsite installation stages.

  Nvidia claims the approach can reduce deployment time at a suitably prepared site from approximately six months to as little as 14 days, allowing operators to begin generating AI compute output sooner. A global partner ecosystem is preparing to deliver DSX POD systems beginning in early 2027, Nvidia said.

  "An AI factory creates value when it starts producing tokens — not when construction is complete," said Nvidia founder and CEO Jensen Huang.

  DSX POD is described as an extension of the broader DSX AI Factory architecture introduced in March, which covers facility-wide systems including compute, networking, storage, electrical distribution, cooling, controls and software for optimizing computing output within available power budgets. The containerized POD model translates those principles into a specific physical delivery format, according to Data Center Frontier.

  Nvidia's partner roster for DSX POD includes Dell Technologies, HPE, Lenovo, Bull, Foxconn/Ingrasys, Quanta Cloud Technology, Wistron, Pegatron, GIGABYTE, Schneider Electric, Vertiv, Eaton, Delta, Crusoe, Armada, DayOne and Anduril.

  ## MGX 1.2 and OCP hardware contributions

  On the hardware standards side, Nvidia said its MGX 1.2 specification extends its open architecture for AI factories with rack-scale blind-mate liquid cooling, interoperable rack-scale interconnect infrastructure, and a liquid-cooled 5,000-ampere busbar for higher-power AI systems. The specification also adds support for native 19-inch equipment and denser rack designs, and supports rack deployments of up to 250 kilowatts.

  Nvidia also outlined a Vera CPU rack design using the same third-generation MGX rack architecture, aimed at workloads including tool calling, orchestration and sandboxed execution for AI agents, as well as larger-scale training and inference systems built on Vera Rubin NVL72.

  Nvidia said the open architecture is intended to give system builders a common framework that allows equipment manufacturers, colocation providers and data center operators to design and build infrastructure without relying on customer-specific proprietary designs.

  ## DSX OS open source software

  Alongside the hardware contributions, Nvidia released open source software components for DSX OS, the operating layer within its DSX AI Factory platform. The additions cover network configuration, cluster validation, rack management and bare-metal provisioning — the process of setting up physical servers from scratch.

  Specific tools released include Nvidia Config Manager, Cluster Readiness Engine, Rack Management Service and a Cluster API Provider for Nvidia Infrastructure Controller. Nvidia said the software draws on its experience operating DGX Cloud and is intended for cloud providers and software partners running multi-tenant platforms.

  ## Facility and grid specifications

  Nvidia joined AMD, Google and Meta in publishing Open Data Centre Specification v0.7, which sets out a common approach to facility design for large AI installations, covering power architecture, cooling infrastructure and physical layout.

  A separate Grid Resilience Specification, published by Google, Meta, Microsoft and Nvidia, sets expectations for how large AI facilities should respond during utility grid disturbances. According to Nvidia, the specification covers staying connected to the grid, responding automatically to disruptions, and returning to near-full load in less than two seconds.

  ## Power distribution: 800 VDC architecture

  Power distribution was a separate focus of the announcements. Visionbay introduced plans for K-1, an AI factory platform based on an 800-volt direct current (VDC) architecture designed for future Vera Rubin deployments. Standard data center power distribution typically uses lower AC voltages and requires multiple conversion stages before power reaches compute hardware.

  Nvidia said the K-1 design combines its 800 VDC reference architecture with power and thermal systems from Vertiv. The approach centers on cluster-level power units that convert alternating current to 800 VDC and distribute it closer to compute resources, which Nvidia said reduces the need for additional copper cabling and power-conversion equipment. The design also allows operators to introduce 800 VDC in stages rather than through a full infrastructure redesign.

  ## Networking: Spectrum-6, USFP optics, and Falcon Transport

  In networking, Meta said it is adopting Nvidia Spectrum-6 102.4 terabit-per-second Ethernet switches for larger Vera Rubin AI factory deployments. Nvidia said the switches provide double the switching capacity and per-lane bandwidth of Spectrum-4, the previous generation.

  Meta's implementation, called N-IceCube, will run FBOSS — the Facebook Open Switching System, Meta's open source network operating system — and is built on the Switch Abstraction Interface, an OCP standard Nvidia said it helped develop.

  The collaboration also includes Spectrum-X Multiplane technology, which distributes GPU traffic across up to eight independent network planes. Nvidia said this is intended to support AI factory deployments of more than 100,000 graphics processing units (GPUs) with fewer switch tiers than conventional designs.

  "We are excited about our close partnership with NVIDIA in making multiplane fabrics operationally scalable and performant, a critical requirement both for our own infrastructure builds and for our joint cloud partners," said Omar Baldonado, Senior Director of Data Centre and AI Networking at Meta. "Extending FBOSS to Spectrum ASICs means we can run that same software stack across our fabrics, and Meta's new Spectrum-based switch, N-IceCube, brings that into Icepack — our liquid-cooled 102.4T network rack for scale-out that connects upcoming generations of accelerators in our fleet."

  Nvidia and Cisco announced a new optical transceiver standard called Ultra-Dense Small Form Factor Pluggable (USFP), designed to provide a path to 400 gigabits-per-second per lane networking while keeping a physical footprint similar to current OSFP modules. According to Nvidia, USFP packs 16 full-duplex lanes with plans to scale to 32, offering four times the bandwidth density of conventional 200 gigabit-per-second per lane pluggable optics. TE Connectivity and Amphenol are working with Nvidia and Cisco on connectors, cages and modules.

  Nvidia and Google separately said future ConnectX-10 SuperNICs and BlueField DPUs — data processing units that offload networking tasks from the main CPU — will support Falcon Transport, Google's transport protocol for Ethernet networks, with the stated aim of improving efficiency and interoperability for large-scale AI networking.

  ## Armada and supply chain expansion

  One of the largest forward-looking announcements came from Armada, which disclosed plans to work with Johnson Controls on a distributed sovereign AI infrastructure program targeting 500 megawatts of capacity in 2027 using Vera Rubin and the DSX POD reference design. Manufacturing is expected to draw on Armada's Galleon Forge facilities in Gilbert, Arizona, and Dublin, Ireland.

  "The SI race isn't going to be won by whoever pours concrete the fastest," said Dan Wright, Armada's co-founder and CEO. Armada said it will use Nvidia DSX Air for simulation and predeployment validation and DSX MaxLPS to optimize AI computing output within available power limits once installations are operating. The 500 MW figure represents a forward-looking development target, not installed or contracted capacity.

  Taiwanese trade publication Commercial Times, citing Caixin magazine, reported that Nvidia directly named four supply chain categories it expects to expand significantly. IC substrate — the boards connecting chips to circuit boards — capacity is forecast to grow 2.5 times within three years, with suppliers including Japan's Ibiden, Samsung Electro-Mechanics and Unimicron. Advanced packaging supplier Amkor targets a fourfold increase in interposer wafer capacity by end of 2028. IC testing firm KYEC plans to double relevant capacity by 2027. In co-packaged optics — a technology that integrates optical components directly with chips to accelerate data transfer — SPIL's CPO optical engine capacity is targeted to grow 15 times by mid-2027 and 30 times by end of 2028.

  For European manufacturing, Nvidia said Bull in Angers, France will handle rack manufacturing, and Foxconn's Czech facility will conduct system manufacturing for Vera Rubin, covering more than ten countries in the supply chain.

  ## Industry significance

  The breadth of the announcements reflects a shift in how Nvidia is positioning itself: no longer only as a GPU supplier but as the architect of a standardized, full-stack AI factory model encompassing hardware, software, power, cooling, networking and supply chain. By contributing designs to the OCP and co-publishing open facility and grid specifications with competitors including AMD, Google and Meta, Nvidia is working to establish its own architectural choices as the de facto industry baseline.

  For data center planners and operators, the practical implication is a proposed reorganization of where the most complex integration work happens — moving it from construction sites into manufacturing facilities — though the claimed 14-day deployment timeline remains to be demonstrated at commercial scale.

  Nvidia's partner ecosystem for DSX POD systems is preparing to begin deliveries in early 2027.
body_zh: |
  ## 輝達開放Vera Rubin硬體設計，鎖定加速AI工廠部署

  輝達將Vera Rubin機架與運算托盤設計貢獻給開放運算計畫（OCP），發布DSX AI工廠平台新版開源軟體，並推出稱為DSX POD的容器化交付模式——上述消息均於10月21日在柏林GTC大會上發布——是輝達有計畫地推動大規模AI資料中心工程、建置與營運標準化的重要佈局。

  此次宣布涵蓋硬體架構、設施規格、電力配送、網路及供應鏈擴張等多個層面，並匯集包括Meta、Cisco、Google、AMD、Visionbay、Schneider Electric、Vertiv，以及多家台灣與歐洲製造商在內的廣泛合作夥伴陣營。

  ## DSX POD：工廠預整合AI基礎架構

  最具實際營運意義的宣布是DSX POD——一款以Vera Rubin平台為核心的參考設計，將運算、網路、機架級電力及液冷系統整合於標準化模組容器之中。在此模式下，製造商將於出貨前完成整合、佈線、配管及功能測試，而非在現場分階段逐步組裝。

  輝達宣稱，在條件適備的場地，此方式可將部署時間從約六個月壓縮至最短14天，讓營運商得以更早開始產出AI運算效益。輝達表示，全球合作夥伴生態系預計自2027年初開始交付DSX POD系統。

  輝達創辦人暨執行長黃仁勳表示：「AI工廠在開始產生token的那一刻才真正創造價值，而不是在工程完工的時候。」

  DSX POD被定位為今年3月推出的DSX AI工廠整體架構之延伸。該架構涵蓋設施層級的全套系統，包括運算、網路、儲存、電力配送、冷卻、控制系統，以及在可用電力預算內最佳化運算產出的軟體。根據《Data Center Frontier》報導，容器化POD模式是將上述原則轉化為具體的實體交付形式。

  輝達DSX POD的合作夥伴名單涵蓋：戴爾科技（Dell Technologies）、HPE、聯想（Lenovo）、Bull、富士康旗下英業達（Foxconn／Ingrasys）、雲達科技（Quanta Cloud Technology）、緯創（Wistron）、和碩（Pegatron）、技嘉（GIGABYTE）、Schneider Electric、Vertiv、Eaton、Delta、Crusoe、Armada、DayOne以及Anduril。

  ## MGX 1.2與OCP硬體貢獻

  在硬體標準方面，輝達表示其MGX 1.2規格以機架規模盲插液冷、可互通的機架規模互連基礎架構，以及適用於高功耗AI系統的液冷5,000安培匯流排，擴充了AI工廠的開放架構。此規格亦新增對原生19吋設備與高密度機架設計的支援，並支援最高250千瓦的機架部署。

  輝達也說明了採用相同第三代MGX機架架構的Vera CPU機架設計，目標工作負載涵蓋AI代理程式的工具呼叫、協作調度與沙箱執行，以及以Vera Rubin NVL72為基礎的大規模訓練與推論系統。

  輝達表示，開放架構旨在為系統建置商提供共通框架，使設備製造商、共置服務供應商與資料中心營運商得以設計和建置基礎架構，無需仰賴客戶特定的專有設計。

  ## DSX OS開源軟體

  除硬體貢獻外，輝達亦發布了DSX OS的開源軟體元件——DSX OS是其DSX AI工廠平台的作業層。新增項目涵蓋網路配置、叢集驗證、機架管理及裸機佈建（即從零設定實體伺服器的流程）。

  具體發布的工具包括輝達Config Manager、叢集就緒引擎（Cluster Readiness Engine）、機架管理服務（Rack Management Service），以及輝達基礎架構控制器的叢集API Provider。輝達表示，上述軟體融合了其運營DGX Cloud的實務經驗，專為運行多租戶平台的雲端供應商與軟體合作夥伴打造。

  ## 設施與電網規格

  輝達與AMD、Google及Meta共同發布了開放資料中心規格v0.7（Open Data Centre Specification v0.7），為大型AI設施的設施設計建立共通方法，涵蓋電力架構、冷卻基礎架構與實體佈局。

  另一份由Google、Meta、Microsoft與輝達共同發布的電網韌性規格（Grid Resilience Specification），則訂定大型AI設施在公用電網發生擾動時的因應標準。據輝達表示，該規格涵蓋持續並網、自動回應中斷，以及在兩秒內恢復至接近滿載等要求。

  ## 電力配送：800伏特直流架構

  電力配送是此次宣布的另一個重點。Visionbay宣布推出K-1——一款基於800伏特直流電（VDC）架構的AI工廠平台，專為未來的Vera Rubin部署所設計。標準資料中心電力配送通常採用較低的交流電壓，且需經多次轉換才能將電力送達運算硬體。

  輝達表示，K-1設計將其800 VDC參考架構與Vertiv的電力及散熱系統相結合。此方法以叢集級電力單元為核心，將交流電轉換為800 VDC後靠近運算資源配送，輝達稱此舉可降低對額外銅纜及電力轉換設備的需求。此設計亦允許營運商分階段導入800 VDC，無需進行全面的基礎架構重新設計。

  ## 網路：Spectrum-6、USFP光收發模組及Falcon Transport

  在網路方面，Meta表示將在較大規模的Vera Rubin AI工廠部署中採用輝達Spectrum-6 102.4兆位元每秒（Tbps）乙太網路交換器。輝達表示，相較於前一代Spectrum-4，此款交換器提供雙倍的交換容量與每通道頻寬。

  Meta的實作方案稱為N-IceCube，將運行FBOSS（Facebook Open Switching System，即Meta的開源網路作業系統），並以OCP標準的交換器抽象介面（Switch Abstraction Interface）為基礎——輝達表示其參與了該標準的開發。

  此次合作亦涵蓋Spectrum-X多平面（Multiplane）技術，可將GPU流量分散至多達八個獨立網路平面。輝達表示，相較於傳統設計，此技術旨在以更少的交換器層級支援超過10萬顆GPU的AI工廠部署。

  Meta資料中心與AI網路資深總監Omar Baldonado表示：「我們對與輝達在多平面網路架構上的緊密合作深感振奮，讓多平面架構在運營上兼具可擴充性與高效能，這對我們自身的基礎架構建設及共同雲端合作夥伴而言都是關鍵需求。將FBOSS延伸至Spectrum ASIC，意味著我們能在整個網路架構中沿用同一套軟體堆疊；Meta全新的Spectrum交換器N-IceCube，則將這項能力帶入Icepack——我們用於連接下一代加速器的液冷102.4T規模擴展網路機架。」

  輝達與Cisco宣布了一項名為超密集小型可插拔模組（Ultra-Dense Small Form Factor Pluggable，USFP）的新型光收發模組標準，旨在提供每通道400Gbps網路的升級路徑，同時維持與現行OSFP模組相近的實體尺寸。據輝達表示，USFP內含16條全雙工通道並計畫擴充至32條，提供傳統每通道200Gbps可插拔光纖模組四倍的頻寬密度。TE Connectivity與Amphenol正與輝達及Cisco合作開發連接器、插槽及模組。

  輝達與Google另行宣布，未來的ConnectX-10超級網卡（SuperNIC）及BlueField DPU（資料處理器，負責將網路任務從主CPU卸載）將支援Falcon Transport——Google用於乙太網路的傳輸協定，目標是提升大規模AI網路的效率與互通性。

  ## Armada與供應鏈擴張

  此次前瞻性最強的宣布之一來自Armada。該公司披露計畫與Johnson Controls合作推動分散式主權AI基礎架構計畫，目標是在2027年以Vera Rubin及DSX POD參考設計部署500百萬瓦（MW）容量。製造業務預計依託Armada位於美國亞利桑那州吉爾伯特（Gilbert）及愛爾蘭都柏林的Galleon Forge設施。

  Armada共同創辦人暨執行長Dan Wright表示：「系統整合（SI）競賽的勝負，不會由混凝土倒得最快的一方決定。」Armada表示，將採用輝達DSX Air進行模擬與部署前驗證，並在設施上線後以DSX MaxLPS在可用電力範圍內最佳化AI運算產出。500 MW數字代表前瞻性開發目標，並非已安裝或已簽約的容量。

  台灣財經媒體《工商時報》援引《財新》雜誌報導，輝達點名四個預計大幅擴張的供應鏈類別。IC基板（連接晶片與電路板的基板）產能預計在三年內成長2.5倍，供應商包括日本揖斐電（Ibiden）、三星電機（Samsung Electro-Mechanics）及欣興電子（Unimicron）。先進封裝供應商艾克爾（Amkor）目標在2028年底前將中介層（interposer）晶圓產能擴增四倍。IC測試廠京元電（KYEC）計畫在2027年前將相關產能倍增。在共封裝光學（co-packaged optics，CPO）——一種將光學元件直接與晶片整合以加速資料傳輸的技術——領域，矽品精密（SPIL）的CPO光引擎產能目標在2027年中前成長15倍、2028年底前成長30倍。

  在歐洲製造方面，輝達表示法國昂熱（Angers）的Bull將負責機架製造，富士康捷克廠則承接Vera Rubin的系統製造，供應鏈橫跨逾十個國家。

  ## 產業意義

  此次宣布的廣度反映了輝達定位的轉變：輝達不再只是GPU供應商，而是標準化全堆疊AI工廠模式的架構師，涵蓋硬體、軟體、電力、冷卻、網路與供應鏈。透過將設計貢獻至OCP，並與AMD、Google、Meta等競爭對手共同發布開放設施與電網規格，輝達正致力於將自身的架構選擇確立為業界的事實標準。

  對資料中心規劃人員與營運商而言，實際影響是一項關於最複雜整合工作應在何處完成的重組提案——從建築工地移往製造設施——但14天部署時程的主張仍有待在商業規模下得到驗證。

  輝達的DSX POD系統合作夥伴生態系預計自2027年初開始交付。
date: "2026-10-27"
source_published: "2026-10-26T16:00:00.000Z"
category: "compute"
secondary_categories: ["mep", "networking"]
supersedes: "compute/2026-10-23-nvidia-unveils-dsx-pod-modular-ai-factory-at-gtc-berlin-promising-14-day-deploym"
region: []
vendor: ["AMD", "Cisco", "Crusoe", "Eaton", "Foxconn", "Gigabyte", "Nvidia", "Schneider Electric", "Vertiv", "Wistron"]
trust:
  score: 3
  reasoning: "Synthesized from 4 sources; lead Nvidia backs open standards for AI factory builds (trust 3/5) plus 3 corroborating."
sources:
  - url: "https://datacenter.news/story/nvidia-backs-open-standards-for-ai-factory-builds"
    title: "Nvidia backs open standards for AI factory builds"
    trust: 3
    type: primary
    published_at: "2026-10-26T16:00:00.000Z"
  - url: "https://datacenternews.asia/story/nvidia-backs-open-standards-for-ai-factory-builds"
    title: "Nvidia backs open standards for AI factory builds"
    trust: 3
    type: corroborating
    published_at: "2026-10-26T16:00:00.000Z"
  - url: "https://www.datacenterfrontier.com/machine-learning/article/55414295/nvidias-dsx-pod-pushes-ai-factory-construction-toward-the-assembly-line"
    title: "NVIDIA's DSX POD Pushes AI Factory Construction Toward the Assembly Line"
    trust: 3
    type: corroborating
    published_at: "2026-10-26T14:20:58.217Z"
  - url: "https://www.ctee.com.tw/news/20261026700013-430502"
    title: "欣興、京元電、矽品被點名！輝達揭AI擴產藍圖 四大供應鏈動起來"
    trust: 3
    type: corroborating
    published_at: "2026-10-26T00:00:00.000Z"
---
