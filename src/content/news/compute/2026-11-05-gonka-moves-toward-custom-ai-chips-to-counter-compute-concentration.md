---
title_en: "Gonka moves toward custom AI chips to counter compute concentration"
title_zh: "Gonka轉向自製AI晶片，對抗算力集中化危機"
summary_en: "Distributed GPU inference network Gonka has outlined plans to develop application-specific AI chips, saying software coordination alone cannot address concentration in semiconductor supply chains that the company argues limits broader access to AI compute infrastructure."
summary_zh: "分散式GPU推論網路Gonka公布開發專用AI晶片計畫，指出僅靠軟體協調無法解決半導體供應鏈集中化問題；該公司認為，這正是限制AI算力基礎設施廣泛普及的根本障礙。"
body_en: |
  Gonka, a distributed GPU inference network, has outlined plans to develop application-specific integrated circuits (ASICs) — chips designed for a specific workload rather than general-purpose computing — for AI inference, saying coordination software alone cannot solve concentration in chip supply, manufacturing, and energy access that the company argues limits broader participation in AI infrastructure.

  Co-Creator Daniil Liberman set out the proposal as part of the company's broader push to widen access to AI compute infrastructure. Liberman and his brother David are co-creators of Gonka; both have backgrounds building technology companies, including augmented reality work at Snap.

  ## The concentration argument

  Liberman said the hardware and supply chains underpinning AI are becoming increasingly concentrated even as open models have widened access at the software layer. Developers may inspect and adapt open models, he said, but still depend on a small group of infrastructure providers for the accelerator chips, memory, power, and data center facilities needed to run those models at scale.

  He cited a figure of 80% of global AI usage coming from open models, but argued that access to model weights does not resolve the underlying question of compute ownership. "A developer can download the model and still depend on the same small set of infrastructure providers," Liberman said. "That is the gap we started with."

  Gonka describes this dynamic as "GPU feudalism" — the condition of building on third-party infrastructure without controlling the terms under which it is provided. Liberman argued the dependency deepens as AI becomes more capable and central to business operations, with price changes, access limits, or service restrictions by a small number of infrastructure providers posing risks to businesses that have come to rely on AI tools.

  ## Gonka's current model

  Gonka operates a coordination layer that connects independent hardware providers and turns their capacity into a shared pool for AI inference workloads. Developers access that pool through an application programming interface (API) compatible with the OpenAI format, allowing them to use Gonka's network with minimal changes to existing code.

  The company began with inference rather than training, Liberman said, because inference — running a trained model to generate outputs — is the service developers can use directly in commercial applications. Distributed training, which involves processing large datasets to build a model in the first place, remains a possible path but brings different technical demands, he said.

  Historical usage figures suggest the shared protocol can attract physical infrastructure and meet paying demand, Liberman said, framing that as evidence that software coordination can support a durable market for AI compute at the inference layer.

  ## Why software coordination is not enough

  The next problem, Liberman said, is that coordination software cannot remove concentration in chip supply, manufacturing, or energy access. Even if large numbers of independent operators join a network and pool their hardware, they may still source that hardware from the same narrow set of semiconductor suppliers.

  That constraint has led Gonka to examine ASICs for AI inference workloads. Liberman said specialised hardware could improve the economics of inference but added that any such claim would need to be validated through engineering work and real-world measurement rather than broad promises.

  He drew a comparison with Bitcoin mining hardware, where economic incentives supported successive generations of specialised chips. AI presents a different engineering challenge, he said, because models and memory demands change over time and inference workloads place varying pressures on hardware. A useful AI accelerator would need to address memory capacity, data movement, and software integration, not processing speed alone, Liberman said, if new chips are to run relevant models efficiently on the network.

  ## Next steps and what is not yet decided

  Gonka's immediate focus remains on improving reliability in distributed GPU inference and connecting more applications to existing capacity, Liberman said. He described specialised AI chips as the next area of development, not a finished product, and said the company is not providing a shipping date or performance target.

  Before reaching manufacturing, financing, and deployment with infrastructure operators, the process will require economic validation, software integration, and proof that new hardware can meet the network's operating requirements, Liberman said.

  The move into chip development would expand Gonka's scope from a software coordination layer into the hardware supply chain it has identified as the deeper source of infrastructure concentration. Whether the economics of a distributed network can support custom silicon development is a question Liberman said must be answered through engineering and market validation before any manufacturing commitment is made.
body_zh: |
  Gonka是一家分散式GPU推論網路業者，日前公布開發應用程式專用積體電路（ASIC）的計畫——這類晶片專為特定工作負載設計，而非通用運算——用於AI推論工作，並指出光靠協調軟體，無法解決晶片供應、製造及能源取得方面的集中化問題，而該公司認為，這些問題正在限制更多業者參與AI基礎設施市場。

  共同創辦人Daniil Liberman提出這項計畫，作為公司擴大AI算力基礎設施普及性整體戰略的一部分。Liberman與其兄弟David同為Gonka共同創辦人；兩人均有創業背景，包括曾在Snap從事擴增實境相關工作。

  ## 集中化問題

  Liberman表示，儘管開放模型已在軟體層面擴大了AI的可及性，支撐AI運作的硬體與供應鏈卻愈來愈集中。開發者或許可以檢視並調整開放模型，他說，但仍須依賴少數基礎設施供應商，才能取得大規模執行這些模型所需的加速晶片、記憶體、電力及資料中心設施。

  他引用了一項數據：全球AI使用量有80%來自開放模型；但他認為，能取得模型權重，並不能解決算力所有權的根本問題。「開發者可以下載模型，卻仍然依賴同一批少數基礎設施供應商，」Liberman說，「這正是我們最初所看到的缺口。」

  Gonka將這種現象稱為「GPU封建主義」——意指在第三方基礎設施上進行建設，卻無法掌控其提供服務的條件。Liberman認為，隨著AI能力不斷提升、在商業營運中的地位愈來愈舉足輕重，這種依賴關係只會持續加深；少數基礎設施供應商若調整定價、限制存取或更改服務條款，將對已高度仰賴AI工具的企業構成重大風險。

  ## Gonka的現行運作模式

  Gonka運作一套協調層，連結各獨立硬體供應商，將其算力整合為一個共享資源池，供AI推論工作負載使用。開發者透過與OpenAI格式相容的應用程式介面（API）存取這個資源池，只需對現有程式碼進行極少量修改，即可使用Gonka的網路服務。

  Liberman表示，公司從推論而非訓練切入，是因為推論——即執行訓練完成的模型以產生輸出結果——是開發者可直接用於商業應用的服務。他說，分散式訓練涉及處理大型資料集以從頭建立模型，雖然也是可能的發展方向，但技術需求截然不同。

  Liberman表示，歷史使用數據顯示，共享協議能夠吸引實體基礎設施加入，並滿足付費需求，他以此作為軟體協調可在推論層支撐穩健AI算力市場的佐證。

  ## 軟體協調為何不足以解決問題

  Liberman說，下一個問題在於，協調軟體無法消除晶片供應、製造或能源取得方面的集中化現象。即便大量獨立業者加入網路、整合各自的硬體，這些硬體仍可能全數來自同一批少數半導體供應商。

  正是這項限制促使Gonka開始研究針對AI推論工作負載的ASIC。Liberman表示，專用硬體有望改善推論的經濟效益，但他也補充，任何此類主張都必須透過工程實作與實際量測加以驗證，而非僅憑廣泛承諾。

  他以比特幣挖礦硬體做類比——經濟誘因曾驅動一代又一代專用晶片的問世。他說，AI面臨截然不同的工程挑戰，因為模型及記憶體需求會隨時間演變，推論工作負載對硬體的壓力也因工作性質不同而有所差異。Liberman指出，一款實用的AI加速器必須同時解決記憶體容量、資料搬移及軟體整合等問題，而不能僅著重於運算速度，新晶片方能在網路上高效執行相關模型。

  ## 後續步驟與尚待決定事項

  Liberman表示，Gonka眼下的工作重心，仍在於提升分散式GPU推論的可靠性，以及讓更多應用程式接入現有算力。他將專用AI晶片定位為下一個開發方向，而非已完成的產品，並表示公司目前不會提供出貨時程或效能目標。

  Liberman說，在進入製造、融資及與基礎設施業者部署等階段之前，整個過程還需要歷經經濟可行性驗證、軟體整合，以及證明新硬體能夠符合網路運作需求。

  投入晶片開發，將使Gonka的業務範疇從軟體協調層延伸至其所指認的基礎設施集中化更深層根源——硬體供應鏈。Liberman表示，分散式網路的經濟模式能否支撐自製晶片的開發，是一個必須在承諾任何製造行動之前，先透過工程實作與市場驗證來回答的問題。
date: "2026-11-05"
source_published: "2026-11-04T17:00:00.000Z"
category: "compute"
secondary_categories: ["market"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Gonka eyes AI chips to tackle compute concentration (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/gonka-eyes-ai-chips-to-tackle-compute-concentration"
    title: "Gonka eyes AI chips to tackle compute concentration"
    trust: 3
    type: primary
    published_at: "2026-11-04T17:00:00.000Z"
---
