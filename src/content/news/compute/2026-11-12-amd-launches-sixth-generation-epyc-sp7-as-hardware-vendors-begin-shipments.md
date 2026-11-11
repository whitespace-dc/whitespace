---
title_en: "AMD Launches Sixth-Generation EPYC SP7 as Hardware Vendors Begin Shipments"
title_zh: "AMD發布第六代EPYC SP7處理器，各大硬體廠商同步出貨"
summary_en: "AMD's sixth-generation EPYC SP7 server processor is now generally available, with hardware vendors shipping systems based on the chip and AMD reporting the strongest opening demand in the EPYC line's history. The launch targets enterprise computing and agentic AI infrastructure, with Meta, Microsoft Azure, and Oracle Cloud Infrastructure among the first named customers."
summary_zh: "AMD第六代EPYC SP7伺服器處理器正式全面上市，各大硬體廠商已開始出貨搭載新晶片的系統，AMD表示此次開賣需求創下EPYC系列有史以來最強勁的紀錄。Meta、微軟Azure與甲骨文雲端基礎架構（OCI）均列為首批客戶。"
body_en: |
  AMD's sixth-generation EPYC SP7 server processor is now generally available, the company announced Tuesday, with hardware vendors already shipping systems based on the chip. AMD said opening demand for the product is the strongest it has recorded for any EPYC generation.

  The SP7 is built on AMD's Zen 6 processor architecture and supports up to 256 cores. It is the first of four planned sixth-generation EPYC central processing units (CPUs); the remaining three are expected in 2027, AMD said. The broader sixth-generation family, internally code-named Venice, targets enterprise applications, cloud computing, high-performance computing (HPC), and AI workloads, including agentic AI — a category covering AI systems that execute multi-step tasks autonomously.

  ## Opening demand and platform commitments

  AMD Chair and CEO Lisa Su said during the company's third-quarter earnings call that early demand for Venice is the strongest AMD has seen for any new EPYC generation. AMD began revenue shipments during the third quarter, Su said. Hardware makers have committed to more than 240 Venice platforms, a figure AMD said is 20% higher than the platform commitments it received for Turin, its fifth-generation EPYC product.

  ## Performance claims

  In benchmarks cited by AMD, the top-end EPYC 9996 chip delivers up to 2.2 times the performance of Intel's Xeon 6980P server processor and up to 3.7 times the performance of Nvidia's Vera CPU. For agentic AI workloads specifically, AMD said the line offers up to approximately 3.3 times the agents-per-watt of Nvidia Vera. Su said Venice delivers significantly better performance per watt, per core, and per dollar than any other x86 or Arm server CPU. All comparative figures were provided by AMD.

  ## Cloud deployments

  Meta is preparing to deploy sixth-generation EPYC-based platforms at scale and has been validating systems based on the new chips ahead of wider deployment, AMD said. Microsoft Azure is preparing several services tied to the processors: Azure HDv2 for AI data processing is currently in preview; Azure HXv2 targets electronic design automation (EDA) and technical computing; and Azure ND MI455X v7, based on AMD's Helios rack design for large-scale AI inference, is cited for production-scale inference. Oracle Cloud Infrastructure (OCI) plans to use the processors in OCI Compute E7 instances for enterprise applications and CPU tasks surrounding AI models.

  ## Helion rack-scale design for agentic AI

  AMD said the first Helion rack-scale systems, designed for agentic AI, will become available from hardware partners throughout this month. Helion is an open reference design that partners — including Dell Technologies, Hewlett Packard Enterprise (HPE), Lenovo, Supermicro, and Cisco — build from an AMD blueprint. AMD introduced Helion in October.

  AMD is offering three Helion configurations:
  - **Helion Liquid**: a CPU-only, liquid-cooled rack designed to operate alongside a Helios rack for large-scale agentic AI deployments
  - **Helion Air**: a CPU-only rack designed to expand agent capacity within existing air-cooled data centers
  - **Helion Air Inference**: an air-cooled rack combining CPUs and GPUs for inference workloads

  Some Helion configurations support up to 73,728 processor threads in a single rack, AMD said. Helion is distinct from AMD's Helios rack product, which targets large-scale inference, frontier model training, and fine-tuning.

  ## Embedded expansion

  Alongside the server announcement, AMD introduced the EPYC Embedded 9006 Series, targeting applications such as semiconductor test equipment, network security, and enterprise storage. The embedded chips support up to 256 cores, include next-generation connectivity, and carry a seven-year product longevity commitment — a priority for buyers in embedded markets who value stable supply and long support cycles alongside raw compute performance, AMD said.

  ## The CPU's role in AI infrastructure

  AMD's position, stated by Senior Vice President and General Manager of Compute and Enterprise AI Dan McNamara, is that AI is expanding rather than reducing the CPU's role across the data center. The company identifies three distinct CPU functions in AI infrastructure: general-purpose services; GPU host nodes, where CPUs coordinate the work of graphics processing units (GPUs) handling AI computation; and agent sandbox environments, where individual AI agents run isolated tasks.

  Matt Kimball, vice president and principal analyst at Moor Insights & Strategy, said the launch is significant for enterprise operators. Enterprise chief information officers (CIOs) are managing fixed power budgets and need infrastructure that handles both traditional workloads today and agentic AI in the future, Kimball said. The SP7's high core count, large cache, and memory capacity make current server purchases viable for agentic workloads down the line, he added.

  ## Industry context

  AMD competes in the server CPU market against Intel, whose Xeon line is the primary benchmark AMD cited in its performance comparisons, and against Arm-based processors. AMD is simultaneously competing with Nvidia in GPUs and rack-scale AI systems, while Nvidia has introduced its own CPU. Cloud providers AWS, Google Cloud, and Microsoft Azure have also built custom AI accelerators and Arm-based CPUs, according to AMD. AMD said its fifth-generation EPYC family was the fastest-ramping and highest-volume EPYC generation in its history, setting the baseline against which the sixth-generation launch is measured.

  The three remaining sixth-generation EPYC CPUs are scheduled for release in 2027.
body_zh: |
  ## AMD第六代EPYC SP7處理器全面上市，硬體廠商同步出貨

  AMD週二宣布，第六代EPYC SP7伺服器處理器正式全面上市，各大硬體廠商已開始出貨搭載該晶片的系統。AMD表示，此次新品的開賣需求是整個EPYC世代中有史以來最強勁的一次。

  SP7採用AMD Zen 6處理器架構，最高支援256顆核心。這是AMD規劃中第六代四款EPYC中央處理器（CPU）的首款；其餘三款預計於2027年推出。第六代EPYC系列家族內部研發代號為「Venice」，鎖定企業應用、雲端運算、高效能運算（HPC）以及AI工作負載，包含「代理式AI」（agentic AI）——即能夠自主執行多步驟任務的AI系統。

  ## 開賣需求強勁，平台承諾數量創新高

  AMD董事長暨執行長蘇姿丰（Lisa Su）在該公司第三季財報電話會議中表示，Venice的早期需求是AMD在任何新EPYC世代中所見過最強勁的。蘇姿丰指出，AMD已於第三季開始進行營收出貨。各大硬體製造商已承諾打造超過240款Venice平台，AMD表示這一數字比第五代EPYC產品Turin當初獲得的平台承諾數高出20%。

  ## 效能表現宣稱

  根據AMD引用的基準測試數據，旗艦款EPYC 9996晶片的效能最高可達英特爾Xeon 6980P伺服器處理器的2.2倍，以及輝達（NVIDIA）Vera CPU的3.7倍。針對代理式AI工作負載，AMD表示該系列每瓦可運行的代理數量最高達輝達Vera的約3.3倍。蘇姿丰表示，Venice在每瓦效能、每核心效能與每元效能方面，均顯著優於市面上任何x86或Arm架構的伺服器CPU。上述所有比較數據均由AMD自行提供。

  ## 雲端部署動態

  AMD表示，Meta正準備大規模部署基於第六代EPYC的平台，目前已在進行新晶片系統的驗證，以備後續大規模上線使用。微軟Azure則規劃多項與該處理器相關的服務：用於AI資料處理的Azure HDv2目前已進入預覽階段；Azure HXv2鎖定電子設計自動化（EDA）與技術運算領域；而基於AMD Helios機架設計、主打大規模AI推論的Azure ND MI455X v7，則被列為生產規模推論用途。甲骨文雲端基礎架構（OCI）計畫將這款處理器用於OCI Compute E7執行個體，服務企業應用程式及AI模型周邊的CPU運算任務。

  ## 專為代理式AI設計的Helion機架規模系統

  AMD表示，首批專為代理式AI設計的Helion機架規模系統，將於本月內陸續由硬體合作夥伴開始供貨。Helion是一款開放式參考設計，合作夥伴——包括戴爾科技（Dell Technologies）、慧與科技（HPE）、聯想（Lenovo）、超微電腦（Supermicro）及思科（Cisco）——均依照AMD的設計藍圖進行生產製造。AMD於今年十月正式發布Helion。

  AMD提供三種Helion配置選項：

  - **Helion Liquid**：僅搭載CPU、採液冷散熱的機架，設計用於與Helios機架搭配運作，支援大規模代理式AI部署
  - **Helion Air**：僅搭載CPU的氣冷機架，用於在現有氣冷資料中心內擴充代理運算容量
  - **Helion Air Inference**：氣冷架構、同時整合CPU與GPU的機架，專為推論工作負載設計

  AMD表示，部分Helion配置在單一機架中最高可支援73,728條處理器執行緒。Helion與AMD的Helios機架產品有所區別——Helios主要鎖定大規模推論、前沿模型訓練與微調（fine-tuning）等應用。

  ## 嵌入式市場擴展

  在伺服器產品發布的同時，AMD亦推出EPYC嵌入式9006系列，鎖定半導體測試設備、網路資安及企業儲存等應用場景。這款嵌入式晶片最高支援256顆核心，配備新世代連接技術，並承諾提供七年產品供貨保證——這對嵌入式市場的買家而言至關重要，因為這類客戶在追求原始運算效能之餘，同樣高度重視穩定的供貨管道與長期支援週期。

  ## CPU在AI基礎架構中的角色定位

  AMD資深副總裁暨運算與企業AI事業群總經理丹·麥克納馬拉（Dan McNamara）表示，AMD的立場是：AI的發展正在擴大而非縮減CPU在整座資料中心中所扮演的角色。該公司將CPU在AI基礎架構中的功能區分為三大類：一般用途服務、GPU主機節點（即CPU負責協調承擔AI運算的繪圖處理器（GPU）工作），以及代理沙盒環境（各個AI代理在此運行相互獨立的任務）。

  摩爾洞察與策略（Moor Insights & Strategy）副總裁暨首席分析師麥特·金博（Matt Kimball）表示，此次發布對企業營運者而言意義重大。他指出，企業資訊長（CIO）正面臨固定功耗預算的壓力，需要能同時應對當下傳統工作負載、又能為未來代理式AI做好準備的基礎架構。金博補充說，SP7的高核心數、大容量快取與龐大的記憶體容量，使得現階段的伺服器採購決策在面對未來代理式工作負載時仍具備長期可用性。

  ## 產業競爭格局

  AMD在伺服器CPU市場的主要競爭對手為英特爾，其Xeon系列也是AMD效能比較中引用的主要基準，另一競爭對手則是Arm架構處理器。與此同時，AMD在GPU與機架規模AI系統領域也與輝達正面交鋒，而輝達亦已推出自家CPU。AMD指出，雲端服務供應商AWS、谷歌雲（Google Cloud）與微軟Azure也都已自行開發AI加速器與Arm架構CPU。AMD表示，第五代EPYC家族是其史上成長速度最快、出貨量最高的EPYC世代，而此次第六代產品的發布，正是以第五代所奠定的高基期為衡量基準。

  其餘三款第六代EPYC處理器預計於2027年陸續推出。
date: "2026-11-12"
source_published: "2026-11-10T21:21:00.000Z"
category: "compute"
secondary_categories: ["market"]
updates: "compute/2026-11-11-amd-launches-epyc-9006-venice-with-256-core-sp7-platform-eyes-server-cpu-market-"
region: []
vendor: ["AMD", "AWS", "Azure", "Cisco", "Google Cloud", "Intel", "Nvidia", "Oracle Cloud", "Supermicro"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead AMD Launches Epyc SP7, Helion as AI Rack Demand Rises (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://www.datacenterknowledge.com/data-center-chips/amd-launches-epyc-sp7-helion-as-ai-rack-demand-rises"
    title: "AMD Launches Epyc SP7, Helion as AI Rack Demand Rises"
    trust: 3
    type: primary
    published_at: "2026-11-10T21:21:00.000Z"
  - url: "https://datacenternews.asia/story/amd-launches-6th-gen-epyc-chips-for-ai-data-centres"
    title: "AMD launches 6th Gen EPYC chips for AI data centres"
    trust: 3
    type: corroborating
    published_at: "2026-11-11T04:33:38.000Z"
---
