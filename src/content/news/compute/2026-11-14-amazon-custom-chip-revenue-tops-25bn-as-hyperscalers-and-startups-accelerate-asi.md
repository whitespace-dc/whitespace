---
title_en: "Amazon custom chip revenue tops $25bn as hyperscalers and startups accelerate ASIC push"
title_zh: "亞馬遜客製晶片年化營收突破250億美元，超大規模業者與新創加速ASIC布局"
summary_en: "Amazon's custom chip business surpassed $25 billion in annual revenue run rate in July 2026, as OpenAI, Anthropic, Google, and two heavily funded chip startups advanced competing custom silicon programs over the same summer — the most concentrated wave of application-specific integrated circuit investment the industry has yet recorded."
summary_zh: "亞馬遜客製晶片業務於2026年7月突破年化營收250億美元里程碑，同期OpenAI、Anthropic、Google及兩家晶片新創也紛紛推進各自的客製矽晶片計畫，掀起業界史上最密集的特殊應用積體電路投資浪潮。"
body_en: |
  Amazon's custom chip business surpassed $25 billion in annual revenue run rate in July 2026, as OpenAI, Anthropic, Google, and two chip startups all advanced competing custom silicon programs over a single summer, marking a convergence of investment in purpose-built AI hardware that cuts across the largest cloud providers and a new generation of well-capitalized startups.

  Application-specific integrated circuits, or ASICs, are chips hardwired for a single application or task, distinguishing them from general-purpose processors such as graphics processing units (GPUs) or central processing units (CPUs), which can run any workload. The broader term custom silicon covers ASICs and other hardware designed in-house rather than purchased from third-party chip suppliers; not all custom chips are strictly ASICs.

  Between June and August 2026, OpenAI unveiled its 'Jalapeño' Intelligence Processor, developed in partnership with Broadcom. Anthropic confirmed it was assembling an in-house team to design its own chips. Reports emerged that Google is working on a new AI chip intended to run its Gemini model more efficiently. Chip startups Etched and Olix raised $700 million and $300 million respectively in the same period; Etched was valued at $21 billion and Olix at $3.3 billion.

  ## Why inference is driving demand

  The accelerating interest in custom silicon follows a shift in AI workloads from training — the phase in which a model learns from data — to inference, the phase in which a deployed model responds to user queries. A growing number of organizations have committed significant capital to silicon specifically optimized for that latter workload.

  Google VP and GM of AI and infrastructure Amin Vahdat said in October 2025 that certain computations run on the company's Tensor Processing Units (TPUs) — Google's custom AI accelerators — are "somewhere between 10 and 100 times more efficient per watt than a CPU." Speaking at the Andreessen Horowitz Runtime event in Utah, Vahdat added that even more specialized architectures could benefit emerging workloads such as agentic AI, in which AI systems carry out multi-step tasks autonomously.

  ## Amazon's $25 billion run rate

  Amazon's custom chip operation traces to its 2015 acquisition of chip design firm Annapurna Labs. Its current portfolio includes Trainium, targeting AI training and inference, and Graviton, used for general cloud computing and agentic AI. Both products are built on the company's Nitro System, a platform for security and networking.

  In April 2026, CEO Andy Jassy said two of AWS's largest customers had asked to purchase all available Graviton instance capacity. Mark Carroll, Amazon's director of engineering, said the original motivation for entering the chip business was reducing latency for specific customer workloads, with benefits broadening across generations since.

  "The primary reason that we got into [the chip business] ... is we're designing specifically to solve customer problems," Carroll said. "In the early days as we developed Nitro and some of the offload silicon, it was to reduce latency because our customers had the pain of specific latencies on the compute side of things."

  Carroll said Amazon's custom chips deliver "40 percent better cost-performance" across multiple generations and that the current generation achieves five times more tokens per watt than its predecessor. Amazon designs and builds the full hardware and software stack surrounding its chips, including boards, chassis, systems, firmware, drivers, and software.

  "We get the feedback at every level. Not only all the way down to the chip, which we can then change based on the performance of the system itself, but we can also change any of those stacks at any time as well," Carroll said.

  Amazon also uses data on customers' power consumption patterns to shape chip design. "We're able to even design towards that, based on how [customers] are using them to actually come out with an equation that reduces power generation over generation," Carroll said.

  ## The cost and supply barriers

  Entry into custom silicon remains expensive. A 2025 report from the UK government's Council for Science and Technology estimated that designing a leading-edge chip costs approximately $50 million to $100 million, manufacturing it costs roughly $100 million, and building a semiconductor fabrication plant costs approximately $20 billion.

  Ryan Shrout, president and general manager of Signal65, an analyst firm focused on silicon testing and validation operating within the Futurum Group, said capital requirements have historically been a limiting factor but that investment now flowing into the sector has changed the calculus. "There's just too much money involved now for [custom chips] to be something that isn't chased by basically everyone that has a good idea," Shrout said.

  Shrout cautioned that bringing a chip to market involves more than engineering. "Companies can develop a really good idea or make a really good product. But taking it to market is maybe even more work than they might think."

  Supply chain constraints compound the difficulty. Taiwan Semiconductor Manufacturing Company (TSMC), which accounts for approximately 92 percent of advanced chip production capacity globally, is investing hundreds of billions of dollars to expand its manufacturing footprint across the United States, Germany, Japan, and Taiwan. The majority of that new capacity is not expected to be available before the end of the decade.

  An ongoing global memory chip shortage has driven prices sharply higher over the past 12 months. Memory suppliers SK Hynix and Samsung have both warned that the supply crunch is likely to persist into 2027 and beyond. Startup Olix has said its chips integrate SRAM — static random-access memory, a form of on-chip memory — as part of their architecture.

  ## What the activity signals

  Amazon's $25 billion run rate establishes custom silicon as a material revenue line for large cloud providers, not merely an internal cost-reduction tool. The concentration of moves by OpenAI, Anthropic, Google, Etched, and Olix across a single summer indicates that investment now follows any credible chip design effort, consistent with Shrout's observation that capital is no longer the barrier it once was.

  The primary constraints ahead are supply-side. TSMC's expanded manufacturing capacity is largely unavailable before 2030, and both SK Hynix and Samsung have projected that the memory chip shortage will persist into 2027 and beyond.
body_zh: |
  亞馬遜客製晶片業務於2026年7月突破年化營收250億美元里程碑，同一個夏天，OpenAI、Anthropic、Google及兩家晶片新創也紛紛推進各自的客製矽晶片計畫，標誌著針對AI專用硬體的投資浪潮全面匯聚，橫跨規模最大的雲端服務業者，以及資本雄厚的新一代新創公司。

  特殊應用積體電路（ASIC）是針對單一應用或任務固化設計的晶片，有別於繪圖處理器（GPU）或中央處理器（CPU）等通用處理器——後者可執行任意工作負載。廣義的「客製矽晶片」涵蓋ASIC及其他由自家研發、而非向第三方晶片供應商採購的硬體；並非所有客製晶片都嚴格符合ASIC的定義。

  2026年6月至8月間，OpenAI聯手博通（Broadcom）發表代號「Jalapeño」的智慧處理器；Anthropic確認正組建內部團隊自主研發晶片；外界報導指出Google正在開發一款新型AI晶片，用以更有效率地執行其Gemini模型。晶片新創Etched與Olix也在同一期間分別完成7億美元及3億美元的募資，Etched估值達210億美元，Olix估值則為33億美元。

  ## 為何推論需求正在驅動市場

  客製矽晶片備受高度關注，源於AI工作負載的重心從「訓練」——模型從資料中學習的階段——逐漸轉向「推論」——已部署的模型回應使用者查詢的階段。愈來愈多組織願意投入大量資本，專門用於針對推論工作負載優化的晶片。

  Google AI暨基礎架構部門副總裁兼總經理阿明‧瓦達特（Amin Vahdat）於2025年10月表示，部分運算在該公司的張量處理器（TPU）——Google自研的AI加速器——上執行時，「每瓦效能比CPU高出10至100倍」。他在猶他州的Andreessen Horowitz Runtime活動上發言，並補充指出，對於智能代理AI（Agentic AI）等新興工作負載——即AI系統自主執行多步驟任務——更加專用的架構將能帶來更大效益。

  ## 亞馬遜的250億美元年化營收

  亞馬遜的客製晶片事業可追溯至2015年收購晶片設計公司Annapurna Labs。目前的產品組合包括：針對AI訓練與推論的Trainium，以及用於一般雲端運算與智能代理AI的Graviton。兩款產品均建構於亞馬遜的Nitro系統之上——這是一套涵蓋資安與網路功能的平台。

  2026年4月，執行長安迪‧賈西（Andy Jassy）透露，AWS規模最大的兩家客戶已要求購入全部可用的Graviton執行個體容量。亞馬遜工程總監馬克‧卡羅爾（Mark Carroll）表示，當初進入晶片業的初衷是為了降低特定客戶工作負載的延遲，而此後一代代演進，帶來的效益也愈來愈廣泛。

  「我們投入晶片業的主要原因……是我們專門針對客戶問題進行設計，」卡羅爾說。「早期在開發Nitro與部分卸載矽晶片時，目的是降低延遲，因為客戶在運算端深受特定延遲問題之苦。」

  卡羅爾表示，亞馬遜客製晶片跨世代實現「40%的成本效能提升」，且現行世代每瓦所能產出的Token數量是上一代的五倍。亞馬遜自行設計並建構圍繞晶片的完整硬體與軟體堆疊，涵蓋電路板、機箱、系統、韌體、驅動程式及軟體。

  「我們在每個層面都能獲得回饋。不僅能一路深入到晶片層級，根據系統整體效能加以調整，同時也能在任何時間點修改任何一層堆疊，」卡羅爾說。

  亞馬遜也會利用客戶用電模式的相關資料來指引晶片設計方向。「我們甚至能以此作為設計依據，根據客戶的實際使用方式，推導出一套能夠逐代降低功耗的方程式，」卡羅爾說。

  ## 成本與供應鏈的雙重門檻

  進軍客製矽晶片的門檻依舊高昂。英國政府科學技術委員會（Council for Science and Technology）2025年的一份報告估計，設計一顆先進晶片的成本約為5,000萬至1億美元，製造成本約1億美元，興建一座半導體晶圓廠則約需200億美元。

  專注於矽晶片測試與驗證的分析機構Signal65（隸屬Futurum Group）總裁兼總經理萊恩‧施羅特（Ryan Shrout）表示，資本需求過去一直是進入障礙，但如今湧入這個領域的投資已改變了這道計算題。「現在牽涉的資金實在太龐大，只要有好點子，幾乎人人都想追逐客製晶片，」施羅特說。

  他也提醒，將一顆晶片推向市場所需付出的，遠不止工程能力。「企業可以發展出很好的想法，或打造出很好的產品。但要將它推向市場，所需要的工夫可能比他們原先預期的還要多得多。」

  供應鏈的限制更是雪上加霜。台積電（TSMC）目前約掌握全球92%的先進晶片製造產能，正斥資數千億美元擴充位於美國、德國、日本及台灣的製造規模。然而，這批新增產能的大部分預計在本十年結束前都難以開出。

  持續延燒的全球記憶體晶片短缺，已在過去12個月間大幅推升價格。記憶體供應商SK海力士（SK Hynix）與三星（Samsung）均已警告，供應吃緊的情況很可能延續至2027年乃至更遠。新創公司Olix表示，其晶片架構整合了SRAM（靜態隨機存取記憶體，一種片上記憶體）。

  ## 這波動向透露的訊號

  亞馬遜250億美元的年化營收，已確立客製矽晶片對大型雲端業者而言是實質的營收來源，而非僅僅用於削減內部成本的工具。OpenAI、Anthropic、Google、Etched與Olix在短短一個夏天密集行動，說明只要有可信的晶片設計計畫，資本便會隨之而來，與施羅特所觀察到的「資金已不再是昔日的進入障礙」一說相互印證。

  未來的主要制約來自供給面：台積電的擴廠產能大多要到2030年前後才能釋出，而SK海力士與三星均預測記憶體晶片短缺將延續至2027年及以後。
date: "2026-11-14"
source_published: "2026-11-13T17:00:43.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AWS", "Broadcom", "SK Hynix", "TSMC"]
trust:
  score: 3
  reasoning: "Single source: ASIC ambition (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/analysis/asic-custom-silicon-amazon-arm-meta/"
    title: "ASIC ambition"
    trust: 3
    type: primary
    published_at: "2026-11-13T17:00:43.000Z"
---
