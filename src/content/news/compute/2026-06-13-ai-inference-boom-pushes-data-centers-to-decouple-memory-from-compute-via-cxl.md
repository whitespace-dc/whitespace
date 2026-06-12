---
title_en: "AI Inference Boom Pushes Data Centers to Decouple Memory from Compute via CXL"
title_zh: "AI推論熱潮推動資料中心以CXL分離記憶體與運算"
summary_en: "As AI workloads shift from model training to inference, data centers face a growing mismatch between memory demand and compute capacity, prompting the industry to treat Compute Express Link as a strategic tool for disaggregating and pooling memory independently of processors."
summary_zh: "隨著AI工作負載從模型訓練轉向推論，記憶體需求與運算容量之間的落差日益擴大，促使業界將Compute Express Link（CXL）視為獨立擴充與集中調度記憶體的戰略工具，從根本上重塑資料中心的基礎設施設計思路。"
body_en: |
  ## Memory, not compute, emerges as the binding constraint in AI inference

  AI data centers built for model training are poorly matched to the demands of inference, and the gap is forcing a fundamental rethink of how memory is provisioned, scaled, and managed, according to Data Center Knowledge. The publication argues that memory architecture has moved to the center of data center design as inference displaces training as the dominant AI workload.

  The structural difference between the two workload types drives the problem. Training is primarily a compute-and-bandwidth challenge: the goal is to maximize throughput across tightly orchestrated bursts of work, keeping accelerators such as GPUs fully utilized while moving model parameters, activations, and gradients as quickly as possible. Memory in that context is optimized for speed, locality, and bandwidth, and the data it holds is consumed and discarded within training iterations.

  Inference works differently. Once a model is deployed, the challenge becomes serving millions of requests efficiently, often under low-latency requirements and unpredictable demand patterns. Memory in that environment is no longer a high-speed staging area for short-lived data. It must remain available across sessions, requests, and in some cases across applications, holding key-value cache, embeddings, retrieved data, and session context. For reasoning models and agentic systems, those demands grow further as context windows expand and systems retain more intermediate state.

  ## Memory demand scales with users, not just model size

  The shift in what drives memory consumption has significant infrastructure planning implications. In training, capacity planning starts with model size and the compute required to process it. In inference, the number of active users, prompt length, retrieved context volume, and interaction duration all become primary drivers. A single deployed model can generate an enormous range of memory footprints depending on how it is used.

  Longer prompts, multi-turn conversations, retrieval-augmented generation (RAG, a technique that supplements model responses with data fetched from external sources), and tool use all add memory pressure without a proportional increase in useful computation, according to the publication. The memory footprint required to support inference can rival or exceed the size of the model weights themselves, particularly when serving large user populations or maintaining long contexts, where key-value cache and other runtime data structures grow quickly and remain live across many transactions.

  As a result, inference systems are becoming less bandwidth-bound and more capacity- and cost-bound, the publication said.

  ## Tight coupling between memory and compute creates an economic problem

  Conventional server architecture was not designed for a world where memory demand rises faster than processing requirements. Today, memory remains tightly coupled to compute: if an operator needs more memory capacity, the standard answer is to add more CPUs or GPUs, even when additional computation is not the primary need.

  High-performance memory technologies such as HBM (High Bandwidth Memory, a type of memory stacked directly on or near a processor for very fast access) are essential for many AI workloads but remain costly and limited in capacity. Expanding server memory through conventional means also runs into physical constraints around DIMM slots (the connectors on a server motherboard that accept memory modules), power budgets, and board design. The result, according to the publication, is overprovisioned infrastructure, stranded resources, and rising total cost of ownership: operators are forced to purchase expensive compute resources solely to gain access to more memory.

  ## CXL offers a path to independent memory scaling

  Compute Express Link, or CXL, is an open interconnect standard that allows memory to be disaggregated from compute and managed more flexibly. The publication characterizes CXL as the mechanism by which data centers can align infrastructure more closely with actual workload requirements, enabling memory and compute to scale independently rather than in lockstep.

  The publication identifies three specific benefits for inference environments.

  First, CXL enables memory pooling. Instead of leaving memory stranded inside underutilized systems, operators can allocate memory dynamically to the hosts and services that need it most. In large environments, the publication argues, this can substantially improve overall utilization and reduce the inefficiency of sizing every server for peak memory demand that may appear only intermittently.

  Second, CXL supports tiered memory architectures. Not all data needs to reside in the most expensive and highest-bandwidth memory layer at all times. CXL makes it easier to place data according to access patterns and performance needs, allowing operators to balance cost and performance across hot, warm, and cooler data tiers.

  Third, CXL reduces the structural mismatch between how AI services scale and how infrastructure has traditionally been built. When inference workloads are defined by persistent state, growing memory footprints, and uneven demand patterns, a composable memory architecture, in which resources can be reconfigured and reassigned dynamically, is better suited than one in which every memory increase requires another step up in compute expenditure.

  ## CXL specification reaches deployment maturity

  The publication addresses skepticism about CXL directly, noting that the practical question for a new interconnect standard is whether its core features have stabilized rather than whether its roadmap is ambitious. On that measure, it says the answer is increasingly affirmative.

  CXL 3.0 introduced the fabric, pooling, and peer-to-peer capabilities that data centers need for disaggregated memory deployment. CXL 3.2 focused on device management, monitoring, security, and backward-compatible interoperability. The publication characterizes the specification as having moved much closer to feature maturity and practical deployment readiness, while noting that adoption will not be uniform or immediate across the industry.

  ## Operational and economic pressure, not performance alone, will drive the transition

  The publication frames the inference memory challenge as an operational and economic problem as much as a technical one. Serving AI at scale, day after day and request after request, requires infrastructure that can match memory supply to actual demand without forcing operators to overbuy compute as a proxy for capacity.

  The publication states that the winners in AI infrastructure will be defined not only by who can deliver the most compute, but by who can deliver the best balance of compute, memory capacity, utilization, and cost. In that environment, the publication concludes, memory can no longer be treated as a passive component alongside the processor; it has become a strategic control point for AI economics.

  With CXL 3.2's device management and interoperability work now complete, the specification's next test is large-scale deployment across production inference environments.
body_zh: |
  ## 記憶體、而非運算，成為AI推論的核心瓶頸

  為模型訓練所建置的AI資料中心，與推論需求之間存在根本性的落差，迫使業界重新思考記憶體的供應、擴充與管理方式。根據Data Center Knowledge的報導，隨著推論取代訓練、躍升為主流AI工作負載，記憶體架構已成為資料中心設計的核心課題。

  兩種工作負載類型在結構上的差異，正是問題的根源所在。訓練主要是運算與頻寬的挑戰：目標是在嚴密協調的突發式作業中最大化吞吐量，讓GPU等加速器維持高度利用率，同時盡可能快速地移動模型參數、啟動值與梯度。在這個情境下，記憶體的設計重點在於速度、局部性與頻寬，其中存放的資料在訓練迭代結束後即會被消耗並捨棄。

  推論的運作方式則截然不同。模型一旦部署完成，挑戰就變成如何有效率地處理數百萬筆請求——往往要在低延遲要求與難以預測的需求模式下運作。在這種環境中，記憶體不再只是短暫存放資料的高速暫存區，而必須跨越工作階段、請求，乃至跨應用程式持續保持可用，儲存鍵值快取（KV cache）、嵌入向量（embeddings）、擷取資料以及工作階段情境。對於推理模型與代理式系統而言，隨著情境視窗不斷擴展、系統保留更多中間狀態，這些需求還會進一步成長。

  ## 記憶體需求隨使用者規模擴增，而非僅取決於模型大小

  驅動記憶體消耗的因素轉變，對基礎設施規劃具有重大影響。在訓練場景中，容量規劃的起點是模型大小以及處理所需的運算量；但在推論場景中，活躍使用者數量、提示長度、擷取情境的資料量，以及互動持續時間，都成了主要的驅動因素。同一個已部署的模型，依據使用方式的不同，可能產生截然不同的記憶體使用量。

  根據該報導，較長的提示、多輪對話、檢索增強生成（RAG，一種透過從外部資料來源擷取資料來補充模型回應的技術），以及工具呼叫，都會在未帶來等比例有效運算增加的情況下，持續累加記憶體壓力。支援推論所需的記憶體佔用量，可能與模型權重本身的大小相當甚至超越，尤其是在服務大量使用者或維護長情境時，鍵值快取與其他執行階段資料結構會迅速成長，並在大量交易過程中持續保持活躍狀態。

  因此，推論系統正逐漸從頻寬受限轉變為容量受限與成本受限，報導如此指出。

  ## 記憶體與運算的緊密耦合造成經濟問題

  傳統伺服器架構的設計，並未考量記憶體需求成長速度超越運算需求的情境。時至今日，記憶體仍與運算緊密耦合：若營運商需要更多記憶體容量，標準做法是增加更多CPU或GPU，即便實際上並不需要額外的運算能力。

  高效能記憶體技術，例如HBM（高頻寬記憶體，一種直接堆疊於處理器上或緊鄰處理器、以實現極快存取速度的記憶體類型），對許多AI工作負載而言不可或缺，但價格高昂且容量有限。透過傳統方式擴充伺服器記憶體，還會遭遇DIMM插槽（伺服器主機板上用來安裝記憶體模組的連接器）數量、電源預算以及電路板設計等實體限制。根據該報導，結果就是過度配置的基礎設施、閒置浪費的資源，以及不斷攀升的總持有成本：營運商被迫購買昂貴的運算資源，僅僅是為了獲取更多記憶體容量。

  ## CXL提供獨立擴充記憶體的解決路徑

  Compute Express Link，簡稱CXL，是一種開放式互連標準，允許記憶體從運算中解耦並進行更靈活的管理。該報導將CXL定性為資料中心得以讓基礎設施更貼近實際工作負載需求的機制，使記憶體與運算能夠獨立擴充，而非被迫同步連動。

  報導點名了CXL在推論環境中的三項具體效益。

  首先，CXL實現記憶體集中調度（memory pooling）。營運商無需讓記憶體閒置在利用率不足的系統中，而是可以動態地將記憶體分配給最需要的主機與服務。報導認為，在大型環境中，這可以大幅提升整體利用率，降低每台伺服器都按峰值記憶體需求配置所帶來的低效問題——而這種峰值需求往往只是偶發出現。

  其次，CXL支援分層記憶體架構。並非所有資料在任何時刻都需要存放在最昂貴、頻寬最高的記憶體層。CXL使根據存取模式與效能需求來放置資料變得更加容易，讓營運商得以在熱資料、溫資料與冷資料層之間取得成本與效能的最佳平衡。

  第三，CXL縮小了AI服務擴充方式與傳統基礎設施建構方式之間的結構性落差。當推論工作負載的特點是持久狀態、不斷成長的記憶體佔用量，以及不均衡的需求模式時，可組合式記憶體架構——資源得以動態重新配置與重新分配——遠比每次需要增加記憶體就必須相應增加運算支出的架構更為適合。

  ## CXL規格達到部署成熟度

  該報導正面回應了外界對CXL的質疑，指出評估一項新互連標準的實際問題，在於其核心功能是否已趨於穩定，而非其技術藍圖是否雄心勃勃。在這個衡量標準下，報導表示答案已愈來愈明確。

  CXL 3.0引入了資料中心部署分散式記憶體所需的網狀架構（fabric）、集中調度，以及點對點通訊能力。CXL 3.2則著重於裝置管理、監控、安全性，以及向下相容的互通性。報導將該規格定性為已大幅接近功能成熟與實際部署就緒的階段，同時指出業界的採用不會是一致的，也不會是立竿見影的。

  ## 推動轉型的是營運與經濟壓力，而非單純的效能考量

  報導將推論記憶體挑戰定性為一個與技術同等重要的營運與經濟問題。日復一日、一筆又一筆地大規模提供AI服務，需要能夠將記憶體供應與實際需求相匹配的基礎設施，而不是迫使營運商以超額購買運算資源來換取容量。

  報導指出，AI基礎設施的贏家，不僅僅是能夠提供最強運算能力的人，而是能夠在運算能力、記憶體容量、資源利用率與成本之間取得最佳平衡的人。報導最終結論認為，在這樣的環境下，記憶體不再能被視為處理器旁邊的被動零組件，它已成為AI經濟學的戰略控制點。

  隨著CXL 3.2的裝置管理與互通性工作宣告完成，這項規格的下一個考驗，將是在正式量產的推論環境中大規模落地部署。
date: "2026-06-13"
source_published: "2026-06-12T16:00:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: AI’s Next Data Center Challenge: Scaling Memory for the Inference Era (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/data-center-chips/ai-s-next-data-center-challenge-scaling-memory-for-the-inference-era"
    title: "AI’s Next Data Center Challenge: Scaling Memory for the Inference Era"
    trust: 3
    type: primary
    published_at: "2026-06-12T16:00:00.000Z"
---
