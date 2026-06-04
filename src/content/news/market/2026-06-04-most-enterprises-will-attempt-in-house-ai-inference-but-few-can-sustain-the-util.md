---
title_en: "Most enterprises will attempt in-house AI inference but few can sustain the utilization rates needed to beat cloud costs, Uptime Institute finds"
title_zh: "Uptime Institute：多數企業將嘗試自建AI推論，卻難維持低於雲端成本所需的使用率"
summary_en: "Enterprises are converging on in-house inference as their preferred approach to deploying AI, but an Uptime Institute analysis finds that the majority lack the server utilization discipline required to make on-premises compute cheaper than public cloud. Model portability constraints and facility power density gaps add further barriers."
summary_zh: "企業普遍傾向在自家資料中心部署AI推論，但Uptime Institute分析指出，多數企業缺乏維持足夠伺服器使用率的管理紀律，難以讓自建運算成本優於公有雲；模型可攜性限制與機房電力密度不足，更進一步加高了自建門檻。"
body_en: |
  Enterprises are broadly moving toward deploying AI inference — the process of running a model to generate outputs from user inputs — inside their own data centers, but most cannot sustain the hardware utilization rates that would make that choice cheaper than public cloud, according to an Uptime Institute analysis of inference economics across data center venues.

  The finding reflects a market that has largely settled one question — who builds the models — while still working through a harder one: where to run them.

  ## Few organizations will train their own models

  Training large language models (LLMs) requires specialized infrastructure, deep technical skills, and a differentiated outcome, Uptime Institute said. As a result, most organizations are expected to rely on commercial or open-weight models rather than develop their own. Open-weight models are those whose parameters are publicly released, allowing deployment outside the original developer's infrastructure.

  Uptime Institute compared this shift to established software procurement behavior: organizations needing enterprise software buy it from vendors or deploy open-source alternatives rather than build from scratch.

  ## The utilization threshold that makes on-premises viable

  Once a model is chosen, the economics of where to run inference depend heavily on hardware utilization — the share of time servers are actively processing workloads. Uptime Institute's analysis identifies 65% average utilization as the threshold above which AI infrastructure becomes more cost-effective on-premises than in public cloud.

  Cloud providers achieve lower per-unit costs primarily through economies of scale and the ability to maximize utilization across virtualized, multi-tenant infrastructure. Enterprises can match those costs only by drawing on existing infrastructure and skills — treating those as sunk costs — while sustaining utilization above that threshold.

  In practice, most do not. Uptime Institute's IT and Power Efficiency Survey 2024 found that 53% of respondents had no utilization objective for their overall server fleet. Among those that did set a target, only 29% reported average utilization above 65%.

  LLM workloads compound the problem. Uptime Institute noted that utilization for LLM-based services is difficult to predict because it is shaped by hidden system prompts set by developers, the complexity of end-user queries, and the number of tokens — discrete units of text — generated in response. That unpredictability makes public cloud more attractive, since customers pay only for capacity consumed.

  ## Model choice constrains infrastructure choice

  Organizations that select flagship models from providers such as OpenAI or Anthropic face an additional constraint: those models can only be consumed as a cloud service or via a cloud platform, and cannot be deployed on-premises or in a colocation facility. Colocation refers to third-party data centers where enterprises rent space and power for their own equipment.

  Choosing inference hardware purpose-built by a cloud vendor adds a further lock-in dimension. Uptime Institute cited Google TPUs, AWS Trainium, and Microsoft Maia as examples of accelerators that bind customers to the respective vendor's cloud services and to models optimized for that hardware.

  Open-weight models paired with GPU-based servers from vendors such as Dell, HPE, Lenovo, and Supermicro offer the widest deployment flexibility, Uptime Institute said, describing this combination as the likely preferred path for enterprises that require full control over their data during inference.

  ## The facility density gap

  Frontier models — the largest and most capable LLMs — require dense, liquid-cooled infrastructure that most existing corporate data halls cannot accommodate. Uptime Institute put average rack density for typical corporate IT at roughly 7 kilowatts (kW) per rack in 2025; a kilowatt is a unit of electrical power equivalent to 1,000 watts. High-density AI clusters can require multiples of that figure per rack and depend on liquid cooling systems that many older facilities lack.

  When deploying a frontier model requires building or leasing new space, any cost advantage over public cloud disappears, Uptime Institute said.

  ## Smaller models lower the infrastructure bar

  Not all AI use cases require frontier-scale models. Uptime Institute noted that smaller, less complex LLMs can handle tasks such as transcription, translation, and summarization, and can be run within existing facilities with minimal changes to cooling and power distribution.

  For organizations starting with narrower AI applications, deploying within in-house or existing colocation space can be attractive even without achieving high hardware utilization, because the cost per token — the per-unit cost of generating output — remains low at smaller scale.

  ## On-premises remains the leading venue despite cloud economics

  Despite the commercial advantages of public cloud for variable or unpredictable workloads, Uptime Intelligence surveys show on-premises data centers as the most popular venue for AI workloads, according to the analysis. Latency, data locality, governance requirements, and operational control all factor into that preference alongside cost.

  Uptime Institute's analysis suggests the practical path for most enterprises will be smaller open-weight models deployed in existing facilities, with cloud used for workloads that exceed on-premises capacity or require proprietary frontier models. Organizations pursuing the in-house route will need to close the gap in utilization management before they can reliably capture the cost savings the approach theoretically offers.
body_zh: |
  企業正廣泛朝向在自家資料中心內部署AI推論——也就是執行模型、根據使用者輸入產生輸出的過程——但根據Uptime Institute針對各類資料中心場域推論經濟學所做的分析，多數企業無法維持讓自建方案比公有雲更划算所必需的硬體使用率。

  這項發現反映出一個市場已大致解決了一個問題——由誰來訓練模型——卻仍在摸索另一個更棘手的問題：模型究竟應在哪裡執行。

  ## 少數組織會自行訓練模型

  Uptime Institute指出，訓練大型語言模型（LLM）需要專門的基礎架構、深厚的技術能力，以及能夠帶來差異化成果的明確目標。因此，預計多數組織將仰賴商業模型或開放權重模型，而非自行開發。所謂開放權重模型，是指參數已公開發布、允許在原始開發者的基礎架構之外部署的模型。

  Uptime Institute將這股趨勢比擬為既有的軟體採購慣例：需要企業軟體的組織，通常向廠商購買或採用開源替代方案，而非從頭自行開發。

  ## 讓自建推論具備成本競爭力的使用率門檻

  一旦選定模型，推論應在哪裡執行的經濟考量，在很大程度上取決於硬體使用率——也就是伺服器實際處理工作負載的時間比例。Uptime Institute的分析指出，平均使用率需達到65%，AI基礎架構自建的成本才會優於公有雲。

  雲端服務供應商之所以能以較低的單位成本提供服務，主要是靠規模經濟，以及在虛擬化多租戶基礎架構上最大化使用率的能力。企業若想與之抗衡，必須充分運用既有基礎架構與技術能力——將這些視為沉沒成本——同時將使用率持續維持在65%以上。

  但實際上，多數企業都做不到這一點。Uptime Institute於2024年發布的《IT與電力效率調查》（IT and Power Efficiency Survey 2024）發現，53%的受訪者對整體伺服器群沒有設定任何使用率目標。在有設定目標的受訪者中，僅有29%回報平均使用率超過65%。

  LLM工作負載更讓情況雪上加霜。Uptime Institute指出，LLM服務的使用率難以預測，因為它受到開發人員設定的隱藏系統提示、終端使用者查詢的複雜程度，以及回應中所產生的字元數量——也就是文字的最小離散單位——等多重因素影響。這種不確定性使公有雲更具吸引力，因為客戶只需為實際使用的算力付費。

  ## 模型選擇限縮了基礎架構的選擇空間

  選擇OpenAI或Anthropic等供應商旗艦模型的組織，面臨一項額外限制：這些模型只能透過雲端服務或雲端平台使用，無法在自有機房或共置機房部署。所謂共置機房（colocation），是指企業在第三方資料中心租用空間與電力、放置自有設備的模式。

  選擇雲端廠商專屬推論硬體，則會進一步產生供應商綁定（lock-in）的問題。Uptime Institute以Google TPU、AWS Trainium及Microsoft Maia為例，說明這些加速器如何將客戶綁定在各自雲端服務，以及針對該硬體優化的特定模型上。

  Uptime Institute指出，搭配Dell、HPE、Lenovo、Supermicro等廠商GPU伺服器的開放權重模型，提供最大的部署彈性，並將這種組合描述為需要在推論期間對資料擁有完整掌控權的企業，最可能優先選擇的路徑。

  ## 機房電力密度的缺口

  前沿模型（frontier model）——也就是規模最大、能力最強的LLM——需要高密度、液冷式的基礎架構，而多數現有企業機房無法容納這類設備。Uptime Institute估計，2025年一般企業IT的平均機架密度約為每機架7千瓦（kW）；1千瓦等於1,000瓦，是電功率的計量單位。高密度AI叢集每機架所需的電力往往是上述數字的數倍，且依賴許多老舊機房所欠缺的液冷系統。

  Uptime Institute指出，若部署前沿模型需要新建或租用空間，自建相對於公有雲的任何成本優勢都將蕩然無存。

  ## 小型模型降低了基礎架構門檻

  並非所有AI應用情境都需要前沿規模的模型。Uptime Institute指出，規模較小、複雜度較低的LLM能夠處理語音轉文字、翻譯及摘要等任務，且可在現有機房內執行，對冷卻與電力配置的調整需求極小。

  對於從較窄AI應用場景起步的組織而言，在自有或既有共置機房內部署，即使硬體使用率不高，也具有一定的吸引力，因為在較小規模下，每個字元的產生成本仍能維持在低水準。

  ## 儘管雲端在經濟效益上具優勢，自有機房仍是主流場域

  儘管公有雲在工作負載變動或難以預測的情況下具備商業優勢，Uptime Intelligence的調查顯示，自有資料中心仍是AI工作負載最普遍的部署場域。延遲、資料在地化、法規遵循要求以及營運掌控，都在成本之外共同左右了這項偏好。

  Uptime Institute的分析認為，多數企業的實際路徑將是：在既有機房中部署較小型的開放權重模型，並將公有雲用於超出自建容量、或需要使用專有前沿模型的工作負載。選擇自建路線的組織，若要穩定獲取這條路線理論上可實現的成本節省，必須先縮小在使用率管理上的落差。
date: "2026-06-04T13:17:09.477Z"
category: "market"
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Enterprises will deploy inference in-house — if they can (trust 3/5)."
sources:
  - url: "https://journal.uptimeinstitute.com/enterprises-will-deploy-inference-in-house-if-they-can/"
    title: "Enterprises will deploy inference in-house — if they can"
    trust: 3
    type: primary
---
