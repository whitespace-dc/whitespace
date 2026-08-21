---
title_en: "AMD Launches Helios Rack-Scale AI System With Microsoft, OpenAI, Anthropic as Early Customers"
title_zh: "AMD推出Helios機架級AI系統，微軟、OpenAI、Anthropic搶先部署"
summary_en: "AMD has unveiled Helios, a production rack-scale AI system combining 72 Instinct MI455X GPUs with sixth-generation EPYC processors, as the company moves to challenge Nvidia's integrated AI factory model. Microsoft, OpenAI, and Anthropic have made early commitments totaling as much as 8 gigawatts of AMD GPU capacity."
summary_zh: "AMD發表Helios量產機架級AI系統，整合72顆Instinct MI455X GPU與第六代EPYC處理器，正面挑戰輝達的整合式AI工廠架構。微軟、OpenAI與Anthropic已率先承諾採購，GPU容量合計最高達8吉瓦。"
body_en: |
  AMD has launched Helios, a rack-scale AI system now in production, positioning the company directly against Nvidia's Vera Rubin platform in the contest to define how large-scale AI infrastructure is built and operated. The announcement came at AMD's Advancing AI 2026 event in San Francisco, with deployments expected to begin in the second half of 2026.

  Helios integrates 72 Instinct MI455X accelerators, sixth-generation EPYC "Venice" central processing units (CPUs), Pensando networking silicon, and AMD's ROCm software stack into a single rack-level system. AMD reported $6.7 billion in Data Center segment revenue for the second quarter of 2026, up 107 percent year over year, driven by demand for EPYC processors and Instinct graphics processing units (GPUs). Chief Executive Lisa Su said the company entered the second half of 2026 with EPYC demand accelerating and Helios beginning to ramp.

  ## Customer commitments

  The platform has attracted commitments from several major AI operators. OpenAI and AMD have a multi-generation agreement covering as much as 6 gigawatts (GW) of AMD GPU capacity, beginning with MI450-series infrastructure — the largest single customer commitment disclosed. Anthropic has committed to deploy up to 2 GW of AMD Instinct MI450-series GPUs using Helios systems, with the first gigawatt expected to begin deployment in the first half of 2027. Microsoft plans to deploy the platform in Azure for frontier-model inference, Azure AI services, and customer workloads. Meta is validating Helios and sixth-generation EPYC systems for future deployments, and Cerebras is working with AMD on an inference architecture that pairs Helios with its wafer-scale systems.

  Taken together, those commitments span hyperscalers, AI labs, and specialized inference providers, giving Helios a breadth of early deployment that AMD has not previously achieved in the AI accelerator market.

  ## What Helios is

  The MI455X accelerator at the center of Helios is built on AMD's CDNA 5 architecture and uses HBM4 high-bandwidth memory. The system is direct-liquid cooled and uses the Open Compute Project's (OCP) Open Rack Wide form factor, a departure from the conventional 19-inch rack standard that has dominated enterprise computing. AMD says the MI455X provides more peak AI compute and greater memory capacity than Nvidia's Rubin GPU, though AMD did not provide independent third-party benchmarks for that comparison.

  AMD also claims Helios delivers up to 30 percent more inference tokens per dollar than a competing system. Those figures are AMD's own benchmarks.

  The networking layer uses open standards — UALink and Ethernet — for front-end, scale-up, and scale-out traffic. AMD is framing this openness as a differentiator: rack-scale integration without locking customers into a fully proprietary ecosystem, as an operator selecting Helios is not required to adopt every element of AMD's stack.

  ## The rack as infrastructure unit

  Helios reflects a structural shift in how AI computing is being built. Rather than treating servers as largely independent pieces of IT equipment, both AMD and Nvidia are engineering GPUs, CPUs, memory, networking, power delivery, and cooling as interdependent elements of a rack-level system. AMD's answer is to make Helios a repeatable building block for AI clusters.

  The physical infrastructure requirements illustrate how far that shift extends. Schneider Electric's reference design for Helios is built around 246-kilowatt (kW) liquid-cooled racks, with modular AI clusters scaling to as much as 10.4 megawatts (MW). A single rack at 246 kW draws roughly 20 times the power of a typical high-density enterprise server rack from five years ago. The Schneider design integrates medium- and low-voltage electrical distribution, cooling, and physical infrastructure around the AMD platform.

  Nvidia has laid out a roadmap that moves from current Blackwell systems toward Vera Rubin and then toward rack architectures operating at several hundred kilowatts, driving the industry toward liquid cooling, higher-voltage power distribution, and tighter coordination between computing equipment and the electrical and mechanical systems supporting it. AMD is now entering that same architectural conversation with Helios.

  For data center developers and operators, a platform selection increasingly determines network architecture, cooling topology, rack dimensions, electrical distribution design, and overall deployment efficiency across campuses that may span hundreds of megawatts or more.

  ## CPUs and agentic AI workloads

  AMD used the same event to launch its sixth-generation EPYC 9006 processor family, code-named Venice. The lineup targets conventional enterprise and cloud workloads as well as high-density AI host systems, with configurations reaching 256 cores.

  AMD argues the EPYC launch is strategically timed. As AI applications move toward agentic architectures — where AI systems retrieve information, call external tools, manage state, and coordinate workflows in addition to running model inference — the CPU capacity surrounding accelerators becomes more significant. GPUs remain the primary compute engines for AI, but the orchestration layer those agents require runs on CPUs. AMD frames this dynamic as an opportunity to defend and expand EPYC's position at the same moment Nvidia is pushing its Arm-based Vera CPU into the data center, raising the question for operators of whether CPUs and GPUs will increasingly be procured as tightly paired platform components rather than separate decisions.

  ## AMD's position against Nvidia

  Nvidia still holds the commanding position in AI infrastructure. Its advantage includes not only GPU performance but also CUDA (Compute Unified Device Architecture), NVLink high-speed interconnects, networking products, DGX server systems, and a broad partner ecosystem, all of which allow Nvidia to present an integrated AI factory architecture to customers.

  AMD's response with Helios is to assemble a comparable full-stack proposition — Instinct accelerators, EPYC CPUs, Pensando networking, ROCm software, and open rack-scale hardware — rather than competing on individual GPU specifications alone. The use of open standards is central to that positioning, as it preserves multi-vendor optionality for hyperscalers that prefer not to depend entirely on a single supplier.

  The more significant question is execution at volume. AMD's larger historical challenge in AI infrastructure has been less about producing competitive silicon than about building an ecosystem — software tools, partner support, and deployment experience — capable of challenging Nvidia's installed base.

  AMD has outlined a continuing hardware roadmap: another Instinct generation and Helios platform in 2027, followed by MI600-series hardware in 2028.
body_zh: |
  AMD正式推出Helios——一套現已量產的機架級AI系統，直接與輝達的Vera Rubin平台正面競爭，爭奪大規模AI基礎設施的架構主導權。這項宣布在AMD於舊金山舉辦的「Advancing AI 2026」活動上發表，預計2026年下半年開始部署。

  Helios整合了72顆Instinct MI455X加速器、第六代EPYC「Venice」中央處理器（CPU）、Pensando網路晶片，以及AMD的ROCm軟體堆疊，構成一套完整的機架級系統。AMD公布2026年第二季資料中心部門營收達67億美元，年增107%，主要由EPYC處理器與Instinct顯示卡（GPU）的需求帶動。執行長蘇姿丰表示，公司進入2026年下半年後EPYC需求持續加速，Helios也已開始放量出貨。

  ## 客戶承諾

  該平台已獲多家主要AI業者承諾採購。OpenAI與AMD簽訂多代合作協議，涵蓋最高6吉瓦（GW）的AMD GPU容量，從MI450系列基礎設施起步，是目前揭露規模最大的單一客戶承諾。Anthropic承諾部署最多2吉瓦的AMD Instinct MI450系列GPU，採用Helios系統，首批1吉瓦預計於2027年上半年開始部署。微軟計劃在Azure上部署Helios，用於前沿模型推論、Azure AI服務及客戶工作負載。Meta正在驗證Helios與第六代EPYC系統，評估未來部署可行性；Cerebras則與AMD合作開發推論架構，將Helios與其晶圓級系統搭配使用。

  綜合來看，這些承諾橫跨超大規模雲端業者、AI實驗室與專業推論服務商，為Helios帶來AMD在AI加速器市場前所未有的廣泛初期部署陣容。

  ## Helios的技術架構

  Helios的核心——MI455X加速器採用AMD的CDNA 5架構，搭載HBM4高頻寬記憶體。系統採直接液冷設計，並採用開放運算計畫（OCP）的Open Rack Wide規格，有別於長期主導企業運算的標準19吋機架。AMD表示，MI455X的AI運算峰值與記憶體容量均優於輝達的Rubin GPU，惟AMD並未提供獨立第三方基準測試數據加以佐證。

  AMD並宣稱，Helios在每美元推論Token數量上，較競爭系統高出最多30%，惟此數據為AMD自行測試所得。

  網路層面採用開放標準——UALink與乙太網路——分別處理前端、縱向擴展（scale-up）及橫向擴展（scale-out）流量。AMD以開放性作為差異化訴求：機架級整合不強迫客戶進入完全封閉的生態系，採用Helios的業者並不需要採納AMD技術堆疊中的每一個環節。

  ## 機架作為基礎設施單元

  Helios反映出AI運算建構方式的結構性轉變。伺服器不再被視為相互獨立的IT設備，AMD與輝達都在將GPU、CPU、記憶體、網路、電力供應與冷卻系統，整合為機架級系統中相互依存的組成元素。AMD的做法，是將Helios打造為AI叢集可重複採用的標準建構單元。

  實體基礎設施的需求，清楚展示了這場轉變的幅度。施耐德電機針對Helios的參考設計，以246千瓦（kW）液冷機架為核心，模組化AI叢集可擴展至最高10.4百萬瓦（MW）。單一246 kW機架的用電量，約為五年前典型高密度企業伺服器機架的20倍。施耐德的設計將中低壓配電、冷卻與實體基礎設施整合於AMD平台周圍，形成一體化解決方案。

  輝達已規劃從現行Blackwell系統邁向Vera Rubin、再走向數百千瓦機架架構的技術路線圖，推動業界轉向液冷、高壓配電，以及運算設備與電氣機械支援系統之間更緊密的協作。AMD現以Helios加入同一場架構競逐。

  對資料中心開發商與營運商而言，平台選擇所牽動的範疇日益廣泛，從網路架構、冷卻拓撲、機架尺寸、配電設計，乃至橫跨數百百萬瓦以上園區的整體部署效率，無一不受影響。

  ## CPU與代理式AI工作負載

  AMD在同一場活動上發表第六代EPYC 9006處理器系列，開發代號Venice。該系列瞄準傳統企業與雲端工作負載，以及高密度AI主機系統，最高配置可達256核心。

  AMD認為此次EPYC發表的時機具有戰略意義。隨著AI應用轉向代理式（agentic）架構——AI系統除執行模型推論外，還須擷取資訊、呼叫外部工具、管理狀態並協調工作流程——加速器周邊的CPU運算能力日益關鍵。GPU仍是AI的主要運算引擎，但代理系統所需的協調層則運行於CPU之上。AMD將此動態視為鞏固並拓展EPYC市場地位的契機，恰逢輝達正積極將其基於Arm架構的Vera CPU推進資料中心，引發業者思考：CPU與GPU的採購，是否將日益以緊密配對的平台元件形式進行，而非分開獨立做出的兩項決策。

  ## AMD對抗輝達的市場態勢

  輝達目前仍在AI基礎設施中佔據主導地位，其優勢不僅在於GPU效能，更涵蓋CUDA（統一運算裝置架構）、NVLink高速互聯、網路產品、DGX伺服器系統及廣泛的夥伴生態系——這一切讓輝達得以向客戶呈現整合式AI工廠架構。

  AMD以Helios回應的方式，是集結Instinct加速器、EPYC CPU、Pensando網路、ROCm軟體與開放式機架硬體，打造可比擬的全堆疊方案，而非僅在單一GPU規格上與輝達一較高下。採用開放標準是其市場定位的核心，得以為傾向不完全依賴單一供應商的超大規模業者，保留多元供應商的選擇彈性。

  更關鍵的問題在於量產執行力。AMD在AI基礎設施領域長期面臨的更大挑戰，與其說是生產具競爭力的晶片，不如說是建立足以挑戰輝達既有裝機基礎的生態系——包括軟體工具、夥伴支援與部署經驗。

  AMD已公布持續推進的硬體路線圖：2027年將推出新一代Instinct與Helios平台，2028年接續推出MI600系列硬體。
date: "2026-08-22"
source_published: "2026-08-21T16:40:57.814Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-07-29-amd-unveils-mi455x-accelerator-and-helios-cabinet-extends-ai-everywhere-strategy"
region: []
vendor: ["AMD", "Azure", "Cerebras", "Nvidia", "Schneider Electric"]
trust:
  score: 3
  reasoning: "Single source: AMD Helios Takes AI Infrastructure Fight to Rack Scale (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/machine-learning/news/55399746/amd-helios-takes-ai-infrastructure-fight-to-rack-scale"
    title: "AMD Helios Takes AI Infrastructure Fight to Rack Scale"
    trust: 3
    type: primary
    published_at: "2026-08-21T16:40:57.814Z"
---
