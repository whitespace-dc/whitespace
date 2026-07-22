---
title_en: "NVIDIA Vera Rubin NVL72 enters commercial deployment at four major cloud providers"
title_zh: "輝達 Vera Rubin NVL72 正式商用，四大雲端巨頭同步部署"
summary_en: "NVIDIA's Vera Rubin NVL72 rack-scale AI system has entered commercial deployment at CoreWeave, Google Cloud, Microsoft Azure, and Oracle Cloud Infrastructure. CoreWeave said the platform delivers 10 times more tokens per second per megawatt than NVIDIA's previous Grace Blackwell NVL72 generation in a DeepSeek-R1 benchmark."
summary_zh: "輝達（NVIDIA）旗下 Vera Rubin NVL72 機架級 AI 系統已在 CoreWeave、Google Cloud、Microsoft Azure 及 Oracle Cloud Infrastructure 正式進入商業部署。CoreWeave 公布的 DeepSeek-R1 基準測試數據顯示，新平台每百萬瓦每秒可產出的 token 數量，較上一代 Grace Blackwell NVL72 提升十倍。"
body_en: |
  NVIDIA's Vera Rubin NVL72 rack-scale AI system has entered commercial deployment at CoreWeave, Google Cloud, Microsoft Azure, and Oracle Cloud Infrastructure, the company said, with early benchmark data from CoreWeave claiming a tenfold improvement in power efficiency over the previous Grace Blackwell NVL72 generation.

  The rollout marks the commercial arrival of NVIDIA's latest rack-scale AI platform, backed by a supply chain spanning more than 350 factory sites across 30 countries. Vera Rubin NVL72 combines seven chips and five rack trays into a single package. NVIDIA said the platform was engineered as an integrated system rather than assembled from standard components, spanning compute, networking, and cooling.

  ## CoreWeave benchmark and early deployments

  CoreWeave said it had brought up and validated Vera Rubin NVL72 before publishing benchmark data from live hardware. In a benchmark using the DeepSeek-R1 AI model, CoreWeave said the system delivered 10 times more tokens per second per megawatt than Grace Blackwell NVL72. Tokens per second per megawatt measures how much useful AI output a system produces for each unit of electricity consumed, a key metric for data centre operators managing power constraints in large AI clusters. CoreWeave said the test focused on power efficiency.

  NVIDIA said Google Cloud's first A5X instance based on Vera Rubin NVL72 is running for Ineffable Intelligence, a startup based in London. The A5X system uses Vera Rubin NVL72 with Google Virgo networking for data centre scale-out, NVIDIA said, and the bare-metal instances are intended to support reinforcement learning workloads. The system can scale from large single-site clusters to multi-site deployments, according to NVIDIA.

  "The next era of research requires the next era of hardware," said Lasse Espeholt, co-founder of Ineffable Intelligence. "We feel privileged to work with the teams at NVIDIA and Google Cloud, who were able to grant us early access to Vera Rubin. The support across both teams has been unmatched; we were up and running almost immediately and are already testing infra for our superlearners."

  ## Processor and networking architecture

  At the processor level, the system centres on the NVIDIA Vera CPU, a central processing unit that NVIDIA said was designed for AI agent workloads. NVIDIA claimed gains in single-threaded performance, core-to-core bandwidth, and memory latency over competing chiplet designs.

  Networking is central to the platform. NVIDIA said its sixth-generation NVLink scale-up network, an interconnect linking processors within and across racks, delivers more than twice the throughput on complex workloads, along with lower latency and higher packet rates than standard Ethernet. Its Spectrum-X Ethernet offering is designed to link systems across larger clusters and multiple sites.

  NVIDIA said CoreWeave, Microsoft, SpaceXAI, and Tesla are among the first organisations to deploy Spectrum-6 switches for AI workloads. CoreWeave, Lambda, and Oracle Cloud Infrastructure are among early adopters of NVIDIA's photonics-based networking hardware, the company added.

  ## Vera CPU performance

  NVIDIA highlighted benchmark data from DeepInfra, an AI inference provider, focused on the Vera CPU rather than the full rack system. According to NVIDIA, DeepInfra found the processor more than twice as fast in orchestration tasks and capable of supporting up to 1.6 times more concurrent AI agents at the same quality of service than alternative CPUs. DeepInfra processes nearly five trillion tokens a week, NVIDIA said, with about 30% of that load driven by agentic systems. The benchmark was designed and run by DeepInfra using its production AI agent infrastructure, NVIDIA added.

  ## European infrastructure expansion

  NVIDIA also tied Vera Rubin to a broader European infrastructure push involving Microsoft and AI company Mistral. The platform will underpin a newly expanded partnership between the two companies, centred on a multibillion-dollar agreement to expand AI infrastructure in Europe, NVIDIA said.

  Under the arrangement, Mistral is adding GPU capacity based on thousands of Vera Rubin processors to expand AI compute availability for customers. NVIDIA said Vera Rubin's architecture is intended to support open-model deployments across public cloud, cloud-connected, and fully disconnected private cloud environments, addressing growing demand in Europe for AI services that can operate within regional data control and governance requirements.

  NVIDIA said Mistral Medium 3.5 and OCR 4 are now available in Microsoft Foundry, and Mistral models have been integrated into Microsoft Copilot Studio. Azure Local and Foundry Local allow customers to use the same models and tools across cloud and customer-controlled environments, NVIDIA said.

  ## Physical design and cooling

  NVIDIA said three generations of rack-scale co-design had removed cables, fans, and hoses from the compute tray, cutting rack assembly time from hours to one minute. The system uses a liquid-cooling inlet temperature of 45 degrees Celsius, which NVIDIA said allows dry-cooler operation without chillers. NVIDIA said this approach can save millions of gallons of water per megawatt each year in new AI facilities.

  ## Significance

  The simultaneous deployment across four major cloud providers establishes immediate availability from multiple vendors for buyers of large-scale AI compute. The power efficiency claims, if validated broadly, carry direct implications for how much usable AI capacity an operator can install within a given power budget, a constraint that has become a central planning variable as data centres compete for limited grid connections and power infrastructure.

  NVIDIA said the broader objective is to address the economics of increasingly complex AI systems, particularly agentic workloads requiring more compute and tighter control over power use. The European buildout, centred on the Mistral-Microsoft partnership and designed to serve open-model deployments within regional data governance frameworks, draws on tens of thousands of Vera Rubin GPUs, NVIDIA said.
body_zh: |
  輝達（NVIDIA）表示，旗下 Vera Rubin NVL72 機架級 AI 系統已在 CoreWeave、Google Cloud、Microsoft Azure 及 Oracle Cloud Infrastructure 正式進入商業部署，CoreWeave 來自實機的早期基準測試數據顯示，新平台的電力效率較上一代 Grace Blackwell NVL72 提升十倍。

  此次大規模推出，標誌著輝達最新機架級 AI 平台正式進入商用階段。該平台背後的供應鏈橫跨 30 個國家、逾 350 座工廠。Vera Rubin NVL72 將七顆晶片與五個機架托盤整合成單一套件。輝達表示，這套平台的設計理念是整合系統，而非由標準零組件拼湊而成，涵蓋運算、網路與散熱三大面向。

  ## CoreWeave 基準測試與早期部署

  CoreWeave 表示，在公布基準測試數據之前，已完成 Vera Rubin NVL72 的上架與驗證。以 DeepSeek-R1 AI 模型進行的測試顯示，該系統每百萬瓦每秒產出的 token 數量，是 Grace Blackwell NVL72 的十倍。每百萬瓦每秒 token 數（tokens per second per megawatt）衡量系統每單位耗電量所能產生的有效 AI 輸出，是資料中心業者在管理大型 AI 叢集電力限制時的關鍵指標。CoreWeave 表示，此次測試聚焦於電力效率。

  輝達指出，Google Cloud 首個基於 Vera Rubin NVL72 的 A5X 執行個體，目前正為倫敦新創公司 Ineffable Intelligence 提供服務。輝達表示，A5X 系統採用 Vera Rubin NVL72 搭配 Google Virgo 網路進行資料中心規模擴展，裸機執行個體的設計用途在於支援強化學習工作負載。根據輝達說法，該系統可從大型單一站點叢集擴展至多站點部署。

  「研究的下一個時代，需要的是下一個世代的硬體，」Ineffable Intelligence 共同創辦人 Lasse Espeholt 表示，「我們很榮幸能與輝達和 Google Cloud 的團隊合作，他們讓我們提前取得 Vera Rubin 的使用權。兩個團隊所給予的支援無與倫比；我們幾乎立刻就能上線運作，目前已在為我們的超級學習者（superlearners）測試基礎設施。」

  ## 處理器與網路架構

  在處理器層面，系統的核心為輝達 Vera CPU——一款輝達表示專為 AI 代理工作負載設計的中央處理器。輝達宣稱，在單執行緒效能、核心對核心頻寬及記憶體延遲方面，Vera CPU 均優於競爭對手的小晶片（chiplet）設計。

  網路是這套平台的核心要素。輝達表示，其第六代 NVLink 擴展網路——一種連結機架內外處理器的互連技術——在複雜工作負載下的吞吐量超過標準乙太網路的兩倍，同時具備更低延遲與更高封包速率。其 Spectrum-X 乙太網路產品則設計用於跨越更大規模叢集與多站點的系統互連。

  輝達表示，CoreWeave、Microsoft、SpaceXAI 及 Tesla 是率先為 AI 工作負載部署 Spectrum-6 交換器的組織之一。輝達補充，CoreWeave、Lambda 及 Oracle Cloud Infrastructure 則是其光子網路硬體的早期採用者。

  ## Vera CPU 效能

  輝達特別援引 AI 推論供應商 DeepInfra 的基準測試數據，該測試聚焦於 Vera CPU 本身，而非整套機架系統。輝達表示，DeepInfra 發現這款處理器在協作調度任務上的速度，超過替代 CPU 的兩倍以上，且在相同服務品質下，最多可支援 1.6 倍的並發 AI 代理數量。輝達表示，DeepInfra 每週處理近五兆個 token，其中約 30% 的負載來自代理式系統。輝達補充，此基準測試由 DeepInfra 使用其生產環境的 AI 代理基礎設施自行設計並執行。

  ## 歐洲基礎設施擴張

  輝達也將 Vera Rubin 與一項涉及 Microsoft 及 AI 公司 Mistral 的更大規模歐洲基礎設施推進計畫相連結。輝達表示，這套平台將支撐兩家公司一項新擴展的合作關係，核心是一份數十億美元規模的歐洲 AI 基礎設施擴建協議。

  根據此安排，Mistral 正新增以數千顆 Vera Rubin 處理器為基礎的 GPU 容量，以擴大提供給客戶的 AI 運算資源。輝達表示，Vera Rubin 的架構旨在支援跨公有雲、雲端連線及完全隔離私有雲環境的開放模型部署，以因應歐洲對於能在區域資料管控與法規框架內運作之 AI 服務日益增長的需求。

  輝達表示，Mistral Medium 3.5 與 OCR 4 現已在 Microsoft Foundry 上架，Mistral 模型也已整合至 Microsoft Copilot Studio。Azure Local 與 Foundry Local 則讓客戶得以在雲端與客戶自控環境中使用相同的模型與工具。

  ## 實體設計與冷卻

  輝達表示，歷經三個世代的機架級協同設計，已從運算托盤中移除纜線、風扇及水管，將機架組裝時間從數小時縮短至一分鐘。系統採用攝氏 45 度的液態冷卻進水溫度，輝達表示這使系統得以在無須冷水機的情況下以乾式冷卻塔運作。輝達表示，在新建 AI 設施中，此方案每百萬瓦每年可節省數百萬加侖的用水量。

  ## 意義

  四大主要雲端供應商同步部署，使大規模 AI 運算的採購方得以即時從多家廠商取得服務。若電力效率方面的聲稱能獲得廣泛驗證，將直接影響業者在既有電力預算下能安裝多少可用 AI 容量——隨著資料中心競相爭奪有限的電網連線與電力基礎設施，這已成為核心的規劃變數。

  輝達表示，其更宏觀的目標，是解決日趨複雜 AI 系統所帶來的經濟課題，尤其是需要更多運算資源與更嚴格電力管控的代理式工作負載。以 Mistral 與 Microsoft 合作為核心的歐洲建設計畫，旨在服務區域資料治理框架內的開放模型部署，動用的 Vera Rubin GPU 規模達數萬顆。
date: "2026-07-23"
source_published: "2026-07-22T16:00:00.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-06-27-nvidia-ceo-declares-vera-rubin-in-full-production-fy2026-revenue-up-65-to-2159b"
region: []
vendor: ["Azure", "CoreWeave", "Google Cloud", "Nvidia", "Oracle Cloud"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA ramps up Vera Rubin AI system for cloud giants (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-ramps-up-vera-rubin-ai-system-for-cloud-giants"
    title: "NVIDIA ramps up Vera Rubin AI system for cloud giants"
    trust: 3
    type: primary
    published_at: "2026-07-22T16:00:00.000Z"
---
