---
title_en: "AMD Launches EPYC 9006 Venice with 256-Core SP7 Platform, Eyes Server CPU Market Lead"
title_zh: "AMD發布EPYC 9006 Venice，SP7平台最高256核心，劍指伺服器CPU市場過半營收"
summary_en: "AMD has launched its sixth-generation EPYC 9006 'Venice' server processors, built on TSMC's 2-nanometer fabrication process and delivering up to 256 cores per socket on a new SP7 platform, as the company targets more than 50 percent of the x86 server CPU revenue market within the next 12 months."
summary_zh: "AMD正式推出第六代EPYC 9006「Venice」伺服器處理器，採用台積電2奈米製程，單插槽最高256核心，搭載全新SP7平台，並宣示將在未來12個月內拿下x86伺服器CPU超過五成的市場營收份額。"
body_en: |
  AMD has launched its sixth-generation EPYC server processors — codenamed "Venice" and designated the EPYC 9006 series — delivering up to 256 cores per socket on TSMC's 2-nanometer fabrication process and introducing a new SP7 socket platform, as the company said it expects to surpass 50 percent of the x86 server CPU revenue market within the next 12 months.

  The Venice launch is also the commercial debut of AMD's Zen 6 processor microarchitecture. AMD said Zen 6 delivers a 20 percent improvement in instructions per clock (IPC) over the Zen 5 architecture used in the previous-generation EPYC 9005 "Turin," while the SP7 platform as a whole achieves approximately twice Turin's performance and 40 percent better performance per watt in general-purpose workloads, the company said. Venice requires the new SP7 socket, replacing the SP5 socket shared by EPYC 9004 "Genoa" and Turin, meaning servers must be re-platformed to adopt the new generation.

  ## SP7 platform specifications

  The EPYC 9006 SP7 platform raises the ceiling on core count, memory bandwidth, and cache capacity compared with Turin:

  - **Cores:** Up to 256 cores and 512 threads per socket, up from Turin's maximum of 192 cores and 384 threads — a 33 percent increase
  - **Cache per compute die:** 32 cores and 128 megabytes of L3 cache per die, up from 16 cores and 32 megabytes per die in Turin
  - **Memory:** 16 channels of DDR5-8000 or MRDIMM-12800, up from 12 channels of DDR5-6400; maximum system capacity rises to 8 terabytes from 6 terabytes
  - **I/O:** PCIe Gen 6 at 96 lanes per socket, versus PCIe Gen 5 at 128 lanes in Turin
  - **Peak TDP:** 600 watts, up from Turin's 500 watts

  ## SP7 SKU stack at launch

  AMD is shipping four SP7 processor SKUs at launch:

  | SKU | Cores / Threads | Max Boost | Base Clock | L3 Cache | TDP |
  |---|---|---|---|---|---|
  | EPYC 9996 | 256 / 512 | 4.1 GHz | 2.55 GHz | 1,024 MB | 600W |
  | EPYC 9966 | 192 / 384 | 4.0 GHz | 2.9 GHz | 768 MB | 600W |
  | EPYC 9846 | 168 / 336 | 3.7 GHz | 2.85 GHz | 768 MB | 500W |
  | EPYC 9756 | 128 / 256 | 4.0 GHz | 3.15 GHz | 512 MB | 500W |

  ## High-frequency variant ships faster than announced

  The EPYC 9686F, Venice's high-frequency part aimed at latency-sensitive workloads and GPU-serving tasks, ships at a maximum boost frequency of 5.3 GHz — higher than the 5.0 GHz AMD disclosed when it first previewed the lineup over the summer. AMD told ServeTheHome that final silicon outperformed the company's earlier projections, enabling the higher clock target. AMD described it as the highest clockspeed yet for an EPYC server chip.

  ## Manufacturing and packaging

  Both compute dies in Venice are manufactured on TSMC's N2 (2-nanometer) process node, which AMD noted is TSMC's first GAAFET-based fabrication node. AMD said it makes heavier use of chiplets than in prior EPYC generations and relies on advanced packaging techniques to connect the dies, with the goal of reducing the power consumed and latency incurred by moving data between dies — directing more of the available power budget to active computation, a constraint that becomes more significant as configurations approach the 600-watt TDP ceiling.

  ## OEM partners and cloud integrations

  Five major server OEMs — Dell, Hewlett Packard Enterprise (HPE), Lenovo, Supermicro, and Cisco — presented Venice-based products at AMD's EPYC technical event in Las Vegas on November 4–5. Microsoft said it is incorporating Venice-based capacity into its cloud platform.

  Dell said it has worked with AMD on liquid-cooled high-density compute platforms for two years and is now extending Venice into its storage and AI data platform product lines. The company noted that many enterprise customers operate under per-rack power budgets of only 15 to 20 kilowatts, making energy efficiency a central purchasing criterion alongside raw performance.

  HPE said some SP7-based products are already shipping, spanning enterprise servers, engineering workstations, and high-density rack systems. The company said it plans configurations pairing EPYC with eight GPUs per system.

  Lenovo said Venice will be the basis for its broadest-ever EPYC product lineup. The company showed two systems at the event: a fully liquid-cooled, fanless server for high-performance computing and a 2U single-socket design for general enterprise workloads.

  Supermicro said it is offering approximately 20 Venice-based configurations, adjustable across GPU connectivity, memory capacity, and chassis form factor. Cisco focused its Venice integration on 800-gigabit networking and system interconnects for linking compute clusters.

  Nutanix's NC2 software has been brought to Google Cloud Platform, allowing enterprise customers to extend on-premises workloads to the cloud, AMD said. Red Hat is combining EPYC, AMD's Instinct GPU line, and Red Hat AI tools to develop enterprise AI platforms. AMD also said it is collaborating with Synopsys, Siemens, and Cadence on optimizing chip design tool performance on Venice, and with VMware, Nutanix, and Red Hat on virtualization and hybrid cloud workloads.

  ## Helion-certified rack supply chain

  AMD has assembled more than 10 Helion-certified rack configurations for Venice, with the first batch expected to begin shipping in November 2026. Taiwan-based manufacturers serving as Helion rack partners include Hon Hai (Foxconn), Compal, Inventec, and Wiwynn, with participation spanning server manufacturing, power supply, thermal management, and full-rack integration.

  Large cloud operators can select liquid-cooled, high-density CPU rack configurations; enterprises can choose air-cooled designs or racks that co-locate CPUs, GPUs, and networking in a single enclosure.

  ## Performance demonstrations and workload positioning

  AMD positioned Venice around two primary workload profiles: the high-core-count tier — up to 256 cores — for simultaneously running large numbers of AI agents, and the high-frequency 9686F for tasks requiring rapid response times such as inference serving for GPU accelerators.

  In a computational fluid dynamics demonstration using the Fluent simulation software on a model with 250 million mesh cells, Venice completed 14.6 simulations per day, compared with 8 simulations per day on Intel's Granite Rapids platform, according to AMD materials presented at the Las Vegas event. AMD said the higher throughput allows engineering teams to compare more design iterations in the same elapsed time.

  Venice also incorporates new virtualization and security features alongside the core architecture changes, AMD said, without detailing those capabilities at launch.

  ## Market context and revenue outlook

  AMD said it currently holds approximately 46 percent of x86 server CPU revenue share. Based on its most recent quarterly earnings, the company's data center division is projecting that its revenues will surpass those of Intel in the fourth quarter of 2026, AMD said in materials cited by ServeTheHome.

  Dan McNamara, AMD senior vice president and general manager of Compute and Enterprise AI, said at the Las Vegas event that the addressable market for data center CPUs is projected to expand from roughly $26 billion in 2025 to approximately $220 billion in 2030, a compound annual growth rate exceeding 50 percent. McNamara attributed the growth to a shift in computing patterns toward AI agents that continuously query data, invoke tools, and execute tasks — a workload model that increases per-node CPU demand across data centers.

  In a separate development, AMD said it recently acquired a software engineering firm to develop technology that substitutes flash memory for DRAM, addressing memory capacity constraints in data center servers.

  ## Forthcoming Venice variants and embedded line

  The SP7 platform launching today is the high-performance tier of a broader Venice product family. AMD said an SP8 platform, targeting a wider range of server applications with different cost and thermal profiles, is planned for launch in early 2027. Additional Venice-generation products include Venice-X, a high-cache derivative following the pattern of AMD's previous -X series parts, and Verano, an LPDDR5X-memory variant targeting different power and density configurations.

  The EPYC Embedded 9006 series, sharing the Zen 6 architecture, is aimed at semiconductor test equipment, firewalls, and enterprise storage applications. AMD said these parts carry a seven-year supply commitment, meeting the extended continuity requirements of industrial and infrastructure customers.

  AMD said it expects Venice and the broader SP7 platform to push the company past 50 percent of the x86 server CPU revenue market — a threshold AMD has not previously crossed — within the next 12 months.
body_zh: |
  ## AMD發布EPYC 9006 Venice，SP7平台最高256核心，劍指伺服器CPU市場過半營收

  AMD正式推出第六代EPYC伺服器處理器——開發代號「Venice」、產品系列編號EPYC 9006——採用台積電2奈米製程，單插槽最高可達256核心，並導入全新SP7插槽平台。AMD表示，預計在未來12個月內，於x86伺服器CPU市場拿下超過五成的營收佔比。

  Venice同時也是AMD Zen 6處理器微架構的首次商用亮相。AMD指出，Zen 6的每時脈執行指令數（IPC）較上一代EPYC 9005「Turin」所採用的Zen 5架構提升20%；整體SP7平台與Turin相比，一般用途工作負載的效能約提升一倍，每瓦效能也改善約40%。Venice需搭配全新SP7插槽，取代EPYC 9004「Genoa」與Turin共用的SP5插槽，意味著採用新一代處理器的伺服器必須更換平台。

  ## SP7平台規格

  EPYC 9006 SP7平台在核心數、記憶體頻寬與快取容量等方面均超越Turin：

  - **核心數：** 單插槽最高256核心、512執行緒，較Turin最高192核心、384執行緒提升33%
  - **每計算晶片快取：** 每顆晶片32核心、128 MB L3快取，Turin為每顆晶片16核心、32 MB
  - **記憶體：** 16通道DDR5-8000或MRDIMM-12800，較Turin的12通道DDR5-6400提升；最大系統容量從6 TB提升至8 TB
  - **I/O：** PCIe Gen 6，每插槽96條通道；Turin為PCIe Gen 5、128條通道
  - **最高TDP：** 600瓦，較Turin的500瓦提升

  ## SP7上市SKU陣容

  AMD此次首批推出四款SP7處理器SKU：

  | SKU | 核心／執行緒 | 最高加速頻率 | 基礎時脈 | L3快取 | TDP |
  |---|---|---|---|---|---|
  | EPYC 9996 | 256／512 | 4.1 GHz | 2.55 GHz | 1,024 MB | 600W |
  | EPYC 9966 | 192／384 | 4.0 GHz | 2.9 GHz | 768 MB | 600W |
  | EPYC 9846 | 168／336 | 3.7 GHz | 2.85 GHz | 768 MB | 500W |
  | EPYC 9756 | 128／256 | 4.0 GHz | 3.15 GHz | 512 MB | 500W |

  ## 高頻版本出貨規格優於預告

  面向低延遲工作負載與GPU推論服務的高頻版本EPYC 9686F，最高加速頻率達5.3 GHz，高於AMD今年夏季預告陣容時所揭露的5.0 GHz。AMD向ServeTheHome表示，最終實際晶片的表現超越公司先前的預估，因而得以達成更高的時脈目標。AMD並稱，這是EPYC伺服器處理器系列有史以來最高的時脈頻率。

  ## 製造工藝與封裝技術

  Venice的兩顆計算晶片均採用台積電N2（2奈米）製程節點製造。AMD指出，N2是台積電首款採用GAAFET（環繞閘極電晶體）架構的量產製程節點。AMD表示，Venice比歷代EPYC更大量運用小晶片（chiplet）設計，並採用先進封裝技術連接各晶片，目標是降低晶片間資料傳輸所消耗的功耗與延遲，將更多可用功率預算導向實際運算——在組態逼近600瓦TDP上限時，這項限制尤為關鍵。

  ## OEM夥伴與雲端整合

  五大主要伺服器OEM廠商——戴爾（Dell）、慧與（HPE）、聯想（Lenovo）、超微電腦（Supermicro）及思科（Cisco）——於11月4至5日AMD在拉斯維加斯舉辦的EPYC技術發表活動上，展示了各自基於Venice的產品。微軟（Microsoft）表示，將把Venice架構的運算容量納入其雲端平台。

  戴爾表示，已與AMD攜手合作液冷高密度運算平台達兩年，現正將Venice延伸至其儲存及AI資料平台產品線。戴爾指出，許多企業客戶的每機架功率預算僅有15至20千瓦，使能源效率成為採購時與原始效能並重的核心考量。

  慧與表示，部分SP7平台產品已開始出貨，涵蓋企業伺服器、工程工作站及高密度機架系統。該公司表示，計畫推出每系統搭載八顆GPU的EPYC組態。

  聯想表示，Venice將成為其有史以來規模最大的EPYC產品線基礎。聯想在活動上展示兩款系統：一款採用全液冷、無風扇設計的高效能運算伺服器，以及一款面向一般企業工作負載的2U單插槽機型。

  超微電腦表示，提供約20種Venice組態，可依GPU連接方式、記憶體容量及機箱外型規格彈性調整。思科則將Venice整合重點放在800Gbps網路及連接運算叢集的系統互連。

  Nutanix的NC2軟體已進駐Google Cloud Platform，讓企業客戶得以將地端工作負載延伸至雲端，AMD表示。Red Hat則結合EPYC、AMD Instinct GPU系列及Red Hat AI工具，共同開發企業AI平台。AMD也表示，正與新思科技（Synopsys）、西門子（Siemens）及益華電腦（Cadence）合作，優化晶片設計工具在Venice上的執行效能，並與VMware、Nutanix及Red Hat攜手推進虛擬化與混合雲工作負載。

  ## Helion認證機架供應鏈

  AMD已為Venice組建超過10種Helion認證機架組態，首批預計於2026年11月開始出貨。台灣廠商中，鴻海（Foxconn）、仁寶（Compal）、英業達（Inventec）及緯穎（Wiwynn）均為Helion機架合作夥伴，參與範疇涵蓋伺服器製造、電源供應、散熱管理及整機架整合。

  大型雲端業者可選擇液冷高密度CPU機架組態；企業客戶則可選用氣冷設計，或將CPU、GPU與網路設備整合於單一機箱的機架方案。

  ## 效能展示與工作負載定位

  AMD將Venice定位於兩大主要工作負載場景：高核心數tier——最高256核心——用於同時執行大量AI代理（AI agent）；高頻版9686F則面向需要快速回應的任務，例如為GPU加速器提供推論服務。

  在一項使用Fluent模擬軟體、以2.5億網格單元模型進行的計算流體力學演示中，Venice每天可完成14.6次模擬；相比之下，英特爾（Intel）Granite Rapids平台每天僅完成8次，數據來自AMD於拉斯維加斯活動上發布的資料。AMD表示，更高的運算吞吐量讓工程團隊在相同時間內得以比較更多設計迭代方案。

  AMD表示，Venice在核心架構更新之外，也導入了新的虛擬化與資安功能，但未在發布會上披露相關細節。

  ## 市場背景與營收展望

  AMD表示，目前在x86伺服器CPU市場的營收佔比約為46%。根據最新季度財報，AMD資料中心事業部預計在2026年第四季，營收將超越英特爾，AMD在ServeTheHome引用的資料中如此表示。

  AMD資深副總裁暨運算與企業AI事業部總經理Dan McNamara在拉斯維加斯活動上表示，資料中心CPU的可觸達市場預計將從2025年約260億美元，擴大至2030年約2,200億美元，複合年均成長率超過50%。McNamara將這波成長歸因於運算模式轉向AI代理——AI代理持續查詢資料、呼叫工具並執行任務——此一工作負載模式大幅提升了整個資料中心各節點對CPU的需求。

  另一項獨立進展是，AMD表示近期收購了一家軟體工程公司，以開發以快閃記憶體（flash memory）取代DRAM的技術，藉此解決資料中心伺服器的記憶體容量瓶頸。

  ## 後續Venice變體與嵌入式產品線

  今日發布的SP7平台是更廣泛Venice產品家族的高效能旗艦tier。AMD表示，定位更廣泛伺服器應用、具備不同成本與散熱規格的SP8平台，預計於2027年初推出。Venice世代的其他產品還包括：Venice-X——延續AMD前幾代「-X」系列模式的高快取衍生版本，以及Verano——採用LPDDR5X記憶體、針對不同功耗與密度組態的變體。

  EPYC Embedded 9006系列同樣採用Zen 6架構，目標市場涵蓋半導體測試設備、防火牆及企業儲存應用。AMD表示，這些產品提供七年供貨承諾，符合工業與基礎設施客戶對長期供應連續性的要求。

  AMD表示，預計Venice與整體SP7平台將推動公司在未來12個月內，突破x86伺服器CPU市場營收逾五成的歷史性門檻——這是AMD迄今從未達到的里程碑。
date: "2026-11-11"
source_published: "2026-11-10T17:00:08.000Z"
category: "compute"
secondary_categories: ["market"]
updates: "compute/2026-11-05-amd-q3-2026-revenue-hits-134b-as-data-center-segment-rises-97-year-over-year"
region: []
vendor: ["AMD", "Cisco", "Foxconn", "Google Cloud", "Intel", "Inventec", "Siemens", "Supermicro", "TSMC", "Wiwynn"]
trust:
  score: 4
  reasoning: "Synthesized from 3 sources; lead AMD EPYC 9006 Results Are Here and AMD Delivers a Knockout Part Deux (trust 4/5) plus 2 corroborating."
sources:
  - url: "https://www.servethehome.com/amd-epyc-9006-results-are-here-and-amd-delivers-a-knockout-part-deux/"
    title: "AMD EPYC 9006 Results Are Here and AMD Delivers a Knockout Part Deux"
    trust: 4
    type: primary
    published_at: "2026-11-10T17:00:08.000Z"
  - url: "https://money.udn.com/money/story/11162/9870452"
    title: "超微 Venice 進入量產出貨 台積電2奈米助陣 鴻海、仁寶等迎商機"
    trust: 3
    type: corroborating
    published_at: "2026-11-10T17:46:00.000Z"
  - url: "https://money.udn.com/money/story/11162/9870460"
    title: "超微新品亮相 戴爾、聯想等五大廠站台、端出整合方案"
    trust: 3
    type: corroborating
    published_at: "2026-11-10T17:44:22.000Z"
---
