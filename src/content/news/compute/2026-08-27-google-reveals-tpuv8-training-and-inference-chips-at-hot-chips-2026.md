---
title_en: "Google Reveals TPUv8 Training and Inference Chips at Hot Chips 2026"
title_zh: "Google於Hot Chips 2026揭露TPUv8訓練與推論晶片完整架構"
summary_en: "Google disclosed full architectural details of its eighth-generation TPU family at Hot Chips 2026, releasing a training chip and an inference chip in the same year for the first time. The TPU 8t superpod delivers 121 exaFLOPS of FP4 compute across 9,600 chips, while the TPU 8i introduces a new low-latency network topology and shifts to Google's own Axion CPU as its host processor."
summary_zh: "Google在Hot Chips 2026大會上完整披露第八代TPU家族的架構細節，史上首次在同一年度同步推出訓練晶片TPU 8t與推論晶片TPU 8i。TPU 8t超級Pod以9,600顆晶片提供121 exaFLOPS的FP4運算效能，TPU 8i則引入全新低延遲網路拓撲，並首度搭配Google自研Axion CPU作為主機處理器。"
body_en: |
  Google disclosed the full architecture of its eighth-generation tensor processing unit (TPU) family at Hot Chips 2026, presenting two distinct chips — the TPU 8t for model training and the TPU 8i for inference — released in the same calendar year rather than on the company's historical alternating schedule.

  The dual release marks a departure driven by what Google described as a widening range of application requirements. Mixture-of-experts (MoE) models — a class of AI architecture that routes data through specialized subnetworks rather than a single dense network — impose heavier communication and network demands than earlier model types, the company said, making it impractical to address both training and inference with a single design. Long context windows required by agentic AI workloads added further pressure.

  ## TPU 8t: Training at scale

  The TPU 8t is built for large-scale model training. A full 8t superpod spans 9,600 chips arranged across 300 racks, with four chips per tray. Collectively, those chips provide access to 2 petabytes (PB) of shared high-bandwidth memory (HBM) — the specialized DRAM stacked directly on AI accelerator packages — and deliver 121 exaFLOPS (10^18 floating-point operations per second) of FP4 compute. FP4 is a low-precision numerical format that increases throughput but requires mixed-precision handling for operations that do not map cleanly to four-bit arithmetic; Google said its mixed-precision training approach is what enabled the chip to reach roughly twice the performance-per-watt of its predecessor, the TPUv7 Ironwood.

  The 8t introduces a dedicated interconnect layer called Virgo, which Google said is new to this generation. Previous TPU training clusters used the broader data center network; Virgo is a purpose-built, two-layer switching topology capable of connecting 134,000 TPUs in a single domain at an aggregate bandwidth of 47 petabits per second.

  Intra-pod connectivity uses Google's optical circuit switch (OCS), a reconfigurable optical networking technology that links chips within the superpod. OCS allows operators to carve any slice size or shape from within the larger pod, provides redundancy, and handles chip failures automatically: when a chip degrades, the system drops it from the active pool, provisions a spare, restores from a checkpoint, and resumes training.

  A new reliability feature introduced with the 8t is in-field unit testing, which runs diagnostic checks on chips during idle cycles to detect partial failures before they affect a training run. Google noted that chip failure rates increase exponentially with temperature, citing the Arrhenius equation — a thermodynamic relationship that predicts roughly a doubling of chemical degradation and semiconductor wear for every 10 to 15 degrees Celsius rise in operating temperature — as the basis for treating cooling as a reliability concern, not just a power one. The 8t tray is also the first Google TPU platform to use liquid cooling for its optical interconnects, which were previously air-cooled.

  ## TPU 8i: Inference hardware and network topology

  The TPU 8i is configured differently from what might be expected. The 8i carries eight stacks of HBM, compared with six on the smaller 8t, because inference, unlike training, requires more memory bandwidth and a higher proportion of on-chip SRAM (static random-access memory, a fast but area-intensive cache tier) relative to raw compute. Google used the comparison to illustrate that inference and training impose fundamentally different resource profiles.

  The 8i is also the first Google TPU inference chip to be paired with the company's own Axion processor. Axion is Google's in-house central processing unit (CPU) based on the Arm instruction set architecture. Inside an 8i node, Axion CPUs are paired with TPUs at a two-to-one ratio; previously, Google used x86-based CPUs from third-party vendors for this host role.

  For interconnect, the 8i replaces the 3D torus topology used in prior generations — a three-dimensional grid of chip-to-chip links optimized for training — with what Google calls the BoardFly topology. BoardFly organizes chips into eight trays of four TPUs each, across 36 groups in total, and limits the maximum number of network hops between any two chips to seven, compared with 16 hops under the torus arrangement. Fly networks in general are characterized by lower latency than torus networks, and latency is the dominant constraint in inference because higher per-user request rates cause throughput to fall sharply.

  The 8i also incorporates a Collective Acceleration Engine. Collective operations — computations that aggregate or distribute data across multiple chips simultaneously — are handled in the chip's ICI I/O die, a dedicated input/output component located at the edge of the package adjacent to the networking hardware. Processing collectives there, rather than routing data to the main compute die and back, eliminates both the physical data-movement latency and the associated HBM memory accesses.

  ## Broader context

  Google characterized the TPUv8 generation as part of a design philosophy it has maintained since the first TPU, which was a PCIe inference card. Subsequent generations alternated broadly between inference-optimized and training-optimized designs, each informing the other; the company noted that roughly one-third of the forward pass in training is itself a form of inference. Over the full eight-generation arc, Google said performance has increased by a factor of one million.

  While Google's internal workloads remain a primary design target, the company said it has increasingly incorporated the requirements of external cloud customers into its hardware planning — a shift from earlier generations that were built primarily to its own specifications.

  Google also disclosed that it used AI models to assist in designing the TPU 8t, with those models reducing power consumption and reclaiming chip area on both the training and inference designs.

  The simultaneous release of a training chip and an inference chip in a single year positions Google as the only major hyperscaler developing custom silicon for both workload types concurrently, at a moment when MoE architectures and long-context agentic applications are placing divergent and growing demands on data center infrastructure. Google said the Virgo network on the 8t is capable of scaling to 134,000 TPUs in a single interconnected domain.
body_zh: |
  Google在Hot Chips 2026大會上完整揭露其第八代張量處理器（TPU）家族的架構，發表了訓練用TPU 8t與推論用TPU 8i兩款截然不同的晶片——這是Google首次在同一年度同時推出兩款產品，打破了過去交替發表的歷史慣例。

  這次雙晶片同步發布代表重大策略轉向，導火線是應用需求的多元化日益擴大。Google表示，混合專家模型（Mixture-of-Experts，MoE）——這類AI架構將資料路由至多個專門的子網路，而非單一密集網路——對通訊與網路的需求遠比早期模型更為繁重，使得以單一設計同時兼顧訓練與推論變得不切實際。代理式AI（agentic AI）工作負載所需的長上下文視窗，則進一步加重了這項壓力。

  ## TPU 8t：大規模訓練

  TPU 8t專為大規模模型訓練而生。一套完整的8t超級Pod（superpod）包含9,600顆晶片，分布於300個機架，每個托盤配置四顆晶片。這些晶片合計提供2 PB（拍位元組）的共享高頻寬記憶體（HBM）——即直接堆疊於AI加速器封裝上的特殊DRAM——並可提供121 exaFLOPS（每秒10的18次方次浮點運算）的FP4運算效能。FP4是一種低精度數值格式，能提升吞吐量，但需要以混合精度方式處理無法完全對應至四位元運算的計算；Google表示，正是這套混合精度訓練方法，讓TPU 8t達到前一代TPUv7 Ironwood約兩倍的每瓦效能。

  8t引入了一個名為Virgo的專用互連層，是本世代的全新設計。先前的TPU訓練叢集使用更廣泛的資料中心網路；Virgo是專為此目的打造的雙層交換拓撲，能在單一網域內連接多達134,000顆TPU，總頻寬達47 Pb/s（拍位元每秒）。

  Pod內部連接採用Google的光學電路交換器（OCS），這是一種可重新配置的光學網路技術，負責連接超級Pod內部的各顆晶片。OCS讓營運人員能從更大的Pod中切分出任意大小與形狀的切片，並提供備援能力，同時能自動處理晶片故障：當某顆晶片效能下降時，系統會將其從作用中的資源池移除、配置備用晶片、從檢查點還原，並恢復訓練。

  8t引入的一項新可靠性功能是「現場單元測試」（in-field unit testing），在晶片閒置週期執行診斷檢查，以便在訓練作業受到影響之前，提前偵測局部故障。Google指出，晶片故障率會隨溫度呈指數上升，並引用Arrhenius方程式——這個熱力學關係式預測，每當工作溫度升高攝氏10至15度，化學降解與半導體磨損率約增加一倍——作為將散熱視為可靠性問題而非單純電力問題的理論依據。8t托盤也是Google首款對光學互連採用液冷的TPU平台，先前各代均使用氣冷。

  ## TPU 8i：推論硬體與網路拓撲

  TPU 8i的配置方式與一般預期有所不同。8i搭載八疊HBM，相較之下規格較小的8t僅有六疊，原因在於推論工作（不同於訓練）需要更高的記憶體頻寬，以及相對於原始運算能力更高比例的片上SRAM（靜態隨機存取記憶體，一種速度快但面積密集的快取層）。Google以此對比說明，推論與訓練對資源的需求在本質上截然不同。

  8i也是第一款搭配Google自研Axion處理器的TPU推論晶片。Axion是Google基於Arm指令集架構（ISA）自行開發的中央處理器（CPU）。在8i節點內部，Axion CPU與TPU以二比一的比例搭配；此前Google在這個主機角色上使用的是第三方廠商的x86 CPU。

  在互連方面，8i以Google所稱的BoardFly拓撲取代了前幾代採用的3D環形（3D torus）拓撲——後者是針對訓練最佳化的三維晶片對晶片連結網格。BoardFly將晶片組織成八個托盤，每個托盤含四顆TPU，共36個群組，並將任意兩顆晶片之間的最大網路跳轉次數限制在七次，相較於環形拓撲的16次大幅降低。Fly網路的整體特徵是延遲低於環形網路，而延遲正是推論工作的首要制約因素，因為更高的每用戶請求速率會導致吞吐量急遽下滑。

  8i還整合了「集體加速引擎」（Collective Acceleration Engine）。集體運算——同時跨多顆晶片彙總或分發資料的計算——在晶片的ICI I/O晶粒（位於封裝邊緣、緊鄰網路硬體的專用輸入／輸出元件）中處理。在此處理集體運算，而非將資料路由至主運算晶粒再傳回，可同時消除實體資料移動的延遲以及相關的HBM記憶體存取。

  ## 更廣泛的背景

  Google將TPUv8世代定位為自第一代TPU以來一貫秉持之設計哲學的延續——第一代TPU是一張PCIe推論卡。後續各世代大致上在推論最佳化設計與訓練最佳化設計之間交替，彼此相互啟發；Google指出，訓練過程中的前向傳播約有三分之一本身就是一種推論形式。縱觀八個世代的完整歷程，Google表示整體效能已提升了百萬倍。

  雖然Google的內部工作負載仍是主要設計目標，但公司表示，在硬體規劃中已日益納入外部雲端客戶的需求——這是相較於早期世代的一大轉變，早期世代主要依照Google自身規格打造。

  Google也透露，在設計TPU 8t的過程中借助了AI模型輔助，這些模型在訓練與推論兩款設計上均有效降低了功耗並回收了晶片面積。

  在同一年同步發布訓練晶片與推論晶片，使Google成為目前唯一同時為兩種工作負載類型開發客製化矽晶片的主要超大規模業者，而此時MoE架構與長上下文代理式應用正對資料中心基礎設施提出日益分歧且持續增長的需求。Google表示，8t上的Virgo網路能夠在單一互連網域內擴展至134,000顆TPU。
date: "2026-08-27"
source_published: "2026-08-26T00:15:29.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-08-21-marvell-wins-google-custom-chip-deal-issues-122-billion-share-warrant"
region: []
vendor: []
trust:
  score: 4
  reasoning: "Single source: Google’s TPUv8s for Training and Inference at Hot Chips 2026 (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/googles-tpuv8s-for-training-and-inference-at-hot-chips-2026/"
    title: "Google’s TPUv8s for Training and Inference at Hot Chips 2026"
    trust: 4
    type: primary
    published_at: "2026-08-26T00:15:29.000Z"
---
