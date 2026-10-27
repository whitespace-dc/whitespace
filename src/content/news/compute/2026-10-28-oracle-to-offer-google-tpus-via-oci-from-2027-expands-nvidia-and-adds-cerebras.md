---
title_en: "Oracle to offer Google TPUs via OCI from 2027, expands Nvidia and adds Cerebras"
title_zh: "Oracle將於2027年透過OCI提供Google TPU並擴大AI晶片陣容"
summary_en: "Oracle announced it will offer Google's Tensor Processing Units on Oracle Cloud Infrastructure starting in 2027, making it the first hyperscaler to carry the chips outside Google, while also expanding its Nvidia commitment and adding inference chips from Cerebras Systems and SambaNova Systems."
summary_zh: "Oracle與Google週二宣布，Oracle將於2027年起在OCI上提供Google張量處理器（TPU），成為首家在Google自家平台以外搭載這款晶片的超大規模雲端業者，並同步擴大與輝達的合作，新增Cerebras Systems及SambaNova Systems的推論晶片。"
body_en: |
  Oracle will offer Google's Tensor Processing Units (TPUs) on Oracle Cloud Infrastructure (OCI) starting in 2027, the companies announced Tuesday at Oracle AI World 2026 in Las Vegas, making Oracle the first hyperscaler to carry the chips outside of Google's own platform. The announcement came alongside a broader set of chip supply agreements that includes an expanded Nvidia relationship and new deals with Cerebras Systems and Intel-backed SambaNova Systems.

  The Google arrangement is structured as a "multi-year, multi-gigawatt" commitment, according to Karan Batta, senior vice president of Oracle Cloud Infrastructure, who told Data Center Dynamics the deal would be at gigawatt scale — a unit equal to one billion watts of continuous electrical power. Oracle will provide the power, cooling, and data center networking required to support the TPU deployment, the company said. Oracle declined to disclose the scale of the initial rollout.

  On the Nvidia side, Oracle said it will scale to "multi-gigawatt" capacity using Nvidia's newest generation of "Vera Rubin" AI servers. Nvidia chief executive Jensen Huang has previously said Vera Rubin systems can generate up to $40 billion in revenue per gigawatt for the chipmaker. Oracle and Nvidia did not disclose the value of the expanded agreement. Oracle added that even within the Nvidia deployment, it will use its own in-house "Acceleron" networking chips in place of Nvidia's networking hardware.

  Oracle said it is also adding inference chips from Cerebras and SambaNova. Inference is the process by which a deployed AI system responds to live user requests; Nvidia dominates the market for training AI systems, but the inference segment draws a more competitive and diverse supplier base, according to Reuters. Cerebras chief executive Andrew Feldman described the Oracle arrangement as significant for his company's reach. "That's a massive expansion of our customer base of tier-one customers," Feldman told Reuters. "We're being deployed in other people's data centers at large scale."

  ## Google's eighth-generation TPUs

  Google is now on its eighth generation of TPUs, having spent more than a decade developing the chips. It offers two distinct variants at this generation.

  The TPU 8t is a training chip. It delivers close to three times the compute performance per pod compared to the prior generation, with the following characteristics:

  - 19.2 terabits per second (Tbps) of bidirectional scale-up bandwidth per chip — the speed at which chips in the same cluster communicate internally
  - 400 gigabits per second (Gbps) of scale-out networking bandwidth for connectivity between separate pods

  The TPU 8i is an inference chip, designed with more memory bandwidth to serve latency-sensitive workloads, and is scalable to 1,152 chips in a single pod. Its specifications:

  - 11.6 exaflops of FP8 compute performance per pod — a measure of floating-point arithmetic at a precision level suited for inference
  - 331.8 terabytes of total high-bandwidth memory (HBM) capacity per pod
  - 19.2 Tbps of bidirectional scale-up bandwidth per chip

  To support the eighth-generation hardware, Google developed a new interconnect architecture called Virgo Network, which the company claims delivers a fourfold increase in data center bandwidth through high-radix switches that reduce the number of network layers.

  ## Background: Google's push to distribute TPUs

  Google announced in April 2026 that it would make TPUs available for purchase by a "select group of customers," according to Data Center Dynamics. Oracle will be the first hyperscaler to adopt them under that program. Google is also working separately with Blackstone to establish a US-based cloud platform offering TPUs; depending on which comes online first, Oracle could be the first provider outside Google to bring the chips to market commercially.

  Batta told Data Center Dynamics that Oracle intends to carry each new TPU generation from the day Google launches it. "When Google launches a new TPU, we will have it on day one," he said.

  Google Cloud last week released TorchTPU as open source — a version of PyTorch, the widely used machine learning library, with native TPU support — according to Publickey. The release is intended to allow developers to run AI workloads on TPUs using common frameworks, rather than being limited to Google's proprietary AI services.

  ## Oracle's competitive position

  Oracle trails AWS, Microsoft Azure, and Google Cloud in the broader cloud market and has concentrated its competitive push on AI compute infrastructure, according to Publickey. The Japanese technology publication noted that securing non-Nvidia AI processor options through the Google partnership is a rational strategy for Oracle to offer a broader AI hardware range, while giving Google an additional channel through which to expand TPU adoption beyond its own platform.

  Mahesh Thiagarajan, president of Oracle Cloud Infrastructure, framed the approach in terms of workload flexibility. "Different AI workloads have different compute needs," Thiagarajan said in a statement. "Bringing Google TPUs to OCI gives customers access to multiple leading AI compute architectures in one cloud. That choice gives them the flexibility to choose the right infrastructure for the performance, throughput, and economics of each AI workload."

  ## Financing

  Oracle did not disclose how it plans to finance the chip purchases. During an earnings call the prior month, the company said customers are increasingly covering chip costs directly, and Oracle maintained its capital expenditure target of approximately $90 billion to $95 billion for its fiscal year 2027. Oracle plans to hold an investor day this week.

  Google TPUs on OCI are scheduled to become available in calendar year 2027 and will ramp over a multi-year period to meet customer demand, the companies said.
body_zh: |
  Oracle與Google週二於拉斯維加斯舉行的「Oracle AI World 2026」大會上共同宣布，Oracle將於2027年起在Oracle雲端基礎架構（OCI）上提供Google的張量處理器（TPU），成為首家在Google自家平台以外搭載這款晶片的超大規模雲端業者。此次公告同步涵蓋一系列晶片供應協議，包括與輝達（NVIDIA）擴大合作，以及與Cerebras Systems、英特爾旗下SambaNova Systems達成新協議。

  Google TPU的合作採「多年期、多吉瓦」規模架構。Oracle雲端基礎架構資深副總裁Karan Batta接受《Data Center Dynamics》採訪時表示，這項合作屬於吉瓦（gigawatt）等級——即每秒十億瓦的持續用電量。Oracle將負責提供支援TPU部署所需的電力、冷卻設備及資料中心網路基礎設施。Oracle拒絕透露初期部署規模的詳細數字。

  在輝達部分，Oracle表示將透過輝達最新一代「Vera Rubin」AI伺服器，將算力規模擴展至「多吉瓦」等級。輝達執行長黃仁勳（Jensen Huang）先前曾表示，Vera Rubin系統每吉瓦可為輝達帶來高達400億美元的營收。Oracle與輝達均未揭露擴大合作協議的金額。Oracle並補充說明，即便在輝達的部署環境中，公司仍將以自行研發的「Acceleron」網路晶片取代輝達原廠網路硬體。

  Oracle同時宣布新增來自Cerebras及SambaNova的推論晶片。推論是指已部署的AI系統回應即時用戶請求的運算過程；輝達主導AI訓練市場，但根據路透社報導，推論市場的競爭更為激烈，供應商也更為多元。Cerebras執行長Andrew Feldman將Oracle合作描述為對公司業務拓展的重大里程碑。「這將大幅擴展我們的頂級客戶群，」Feldman接受路透社採訪時表示，「我們正在其他業者的大規模資料中心中被廣泛部署。」

  ## Google第八代TPU

  Google已歷經逾十年的TPU自研歷程，目前進入第八代，並在此世代推出兩款截然不同的型號。

  **TPU 8t** 為訓練晶片，與上一代相比，每個Pod的運算效能提升近三倍，規格如下：

  - 每顆晶片雙向擴充頻寬達每秒19.2兆位元（Tbps）——即同一叢集內晶片相互通訊的速度
  - 跨Pod間連線的對外網路頻寬達每秒400吉位元（Gbps）

  **TPU 8i** 為推論晶片，採用更高記憶體頻寬設計，適用於對延遲敏感的工作負載，單一Pod最多可擴展至1,152顆晶片。規格如下：

  - 每Pod FP8運算效能達11.6 exaflops——以適合推論精度的浮點運算量衡量
  - 每Pod總高頻寬記憶體（HBM）容量達331.8 TB
  - 每顆晶片雙向擴充頻寬達每秒19.2兆位元（Tbps）

  為支援第八代硬體，Google開發了全新互連架構「Virgo Network」。Google宣稱，透過能降低網路層數的高基數（high-radix）交換器，可將資料中心頻寬提升四倍。

  ## 背景：Google積極推動TPU對外供應

  根據《Data Center Dynamics》報導，Google於2026年4月宣布將向「特定客戶群」開放TPU採購。Oracle將成為首家在該計畫下採用TPU的超大規模雲端業者。Google另行與黑石集團（Blackstone）合作，計畫在美國建立提供TPU的雲端平台；視何者率先推出，Oracle有望成為Google以外最早將TPU商業化供應的業者。

  Batta向《Data Center Dynamics》表示，Oracle計畫從Google每一代新TPU上市當天起即同步提供。「Google每推出新一代TPU，我們當天就會上線，」他說。

  Google雲端上週以開源方式發布TorchTPU——這是廣泛使用的機器學習函式庫PyTorch的TPU原生支援版本，據《Publickey》報導。此次發布旨在讓開發者能以常見的框架在TPU上執行AI工作負載，不必侷限於Google的專屬AI服務。

  ## Oracle的市場競爭定位

  根據《Publickey》報導，Oracle在整體雲端市場中排名落後於AWS、微軟Azure及Google雲端，因此將競爭重心集中於AI運算基礎設施。這家日本科技媒體指出，透過Google合作取得非輝達AI處理器的多元選項，是Oracle拓展AI硬體產品線的合理策略，同時也讓Google獲得在自家平台以外擴大TPU普及率的額外管道。

  Oracle雲端基礎架構總裁Mahesh Thiagarajan以工作負載彈性為切入角度，詮釋這項策略的核心定位。「不同的AI工作負載有不同的運算需求，」Thiagarajan在聲明中表示，「將Google TPU引入OCI，讓客戶能在同一個雲端平台上存取多種領先的AI運算架構。這樣的選擇賦予客戶彈性，得以針對每項AI工作負載的效能、吞吐量與成本效益，選擇最合適的基礎設施。」

  ## 資金籌措

  Oracle未揭露晶片採購的資金來源。在上個月的法人說明會上，Oracle表示客戶愈來愈傾向自行直接承擔晶片費用，公司維持其2027財政年度資本支出目標，約為900億至950億美元。Oracle計畫本週舉行投資人說明日。

  Google TPU預計於2027年曆年內開始在OCI上架，並在多年期間逐步擴大規模以滿足客戶需求，兩家公司表示。
date: "2026-10-28"
source_published: "2026-10-27T17:57:17.000Z"
category: "compute"
secondary_categories: ["market"]
region: []
vendor: ["AWS", "Azure", "Cerebras", "Google Cloud", "Intel", "Nvidia", "Oracle Cloud", "Sambanova"]
trust:
  score: 3
  reasoning: "Synthesized from 3 sources; lead Oracle will offer Google’s TPU AI chip via OCI (trust 3/5) plus 2 corroborating."
sources:
  - url: "https://www.datacenterdynamics.com/en/news/oracle-will-offer-googles-tpu-ai-chip-via-oci/"
    title: "Oracle will offer Google’s TPU AI chip via OCI"
    trust: 3
    type: primary
    published_at: "2026-10-27T17:57:17.000Z"
  - url: "https://www.publickey1.jp/blog/26/oracle_cloudgoogle_tpu2027oracle_ai_world_2026.html"
    title: "Oracle CloudがGoogle TPU導入を発表、2027年に提供を開始。Oracle AI World 2026"
    trust: 3
    type: corroborating
    published_at: "2026-10-27T16:33:51.000Z"
  - url: "https://www.thestar.com.my/tech/tech-news/2026/10/28/oracle-expands-chip-supply-deal-with-nvidia-adds-google-and-cerebras-offerings"
    title: "Oracle expands chip supply deal with Nvidia, adds Google and Cerebras offerings"
    trust: 3
    type: corroborating
    published_at: "2026-10-27T00:00:00.000Z"
---
