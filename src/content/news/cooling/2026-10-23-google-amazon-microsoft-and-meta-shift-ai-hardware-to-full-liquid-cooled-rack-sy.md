---
title_en: "Google, Amazon, Microsoft and Meta shift AI hardware to full liquid-cooled rack systems"
title_zh: "Google等四大CSP將AI硬體全面轉向液冷機架系統"
summary_en: "All four major North American cloud service providers have committed their next-generation AI accelerator hardware to full liquid-cooled, rack-scale form factors, driven by per-rack power loads exceeding 100 kilowatts and a memory-bandwidth bottleneck that discrete server designs can no longer address, Commercial Times reported."
summary_zh: "Google、Amazon、Microsoft與Meta四大北美雲端服務供應商均已承諾，次世代AI加速器硬體將全面轉向全液冷、機架規模架構。驅動因素包括每機架超過100千瓦的功耗負載，以及離散式伺服器設計已無從解決的記憶體頻寬瓶頸。"
body_en: |
  Google, Amazon, Microsoft, and Meta have each committed their next-generation AI accelerator hardware to full liquid-cooled, rack-scale form factors, Commercial Times reported, citing analysis published in Pioneer Magazine. The transition — forced by per-rack power loads exceeding 100 kilowatts and a fundamental memory-bandwidth constraint — marks the end of the discrete accelerator card and the standalone 2U or 4U server as the standard delivery unit of AI compute for the four largest North American cloud service providers, known as CSPs.

  ## From training to inference

  Until this year, the dominant workload inside large cloud data centers was training foundation models: a one-time capital expenditure consuming tens of thousands of chips for months at a stretch. That balance has reversed. Daily production services now include search summarization, code generation, real-time voice interaction, and multi-step agentic AI — systems capable of autonomous planning and multi-stage reasoning — each query generating thousands to tens of thousands of hidden tokens. Industry data cited in the report shows more than 70 percent of power and compute consumption in large cloud data centers is now attributable to inference workloads.

  The four CSPs have designed their latest custom application-specific integrated circuits, or ASICs, explicitly around that reality. Google's TPU v7, codenamed Ironwood, was presented at its launch as the first TPU designed for the inference era. Microsoft's Maia 200 and the recently announced Maia 300 abandon traditional training logic in favor of inference optimization; Microsoft said the Maia 200 delivers 1.7 times more tokens per watt than commercial GPUs when running its Copilot service and OpenAI models. Amazon has positioned Trainium 3 and Trainium 4 as unified training-and-inference chips purpose-built for agentic AI. Meta's MTIA family — spanning the 300, 400, 450, and 500 generations — is defined by the company as inference-first, with two new chip generations released per year.

  ## The memory wall

  The technical constraint driving the rack-scale shift is the memory wall. Generating each new token in a large language model requires continuously loading model weights and an expanding key-value cache, or KV cache, from high-bandwidth memory — known as HBM — into compute cores. When memory capacity or bandwidth is insufficient, compute cores sit idle regardless of raw processing speed. The report identifies resolving memory constraints, not increasing raw compute throughput measured in floating-point operations per second, as the central engineering challenge in the four CSPs' roadmaps through 2028.

  Current-generation ASICs — including Google's TPU v7, Amazon's Trainium 3, and Microsoft's Maia 200 — address this using TSMC's 3-nanometer process paired with HBM3e, pushing per-chip memory to the 144-to-216 gigabyte range with bandwidths of 4.9 to 7.4 terabytes per second.

  The next generation, targeting production next year, moves to 2-nanometer process nodes with HBM4, reaching 288 gigabytes per chip. Microsoft's Maia 300 is the most aggressive implementation, integrating eight HBM4 stacks to achieve 18 terabytes per second of memory bandwidth — more than 2.5 times its predecessor — targeting long-context and real-time multimodal inference. Google's TPU v8 and Amazon's Trainium 4 follow the same 2-nanometer-plus-HBM4 trajectory.

  ## Why racks, not cards

  A single chip's memory ceiling is bounded by TSMC's CoWoS advanced-packaging process, which limits the wafer area that can be exposed in a single manufacturing step. Even the most advanced chips — Google TPU v7, AWS Trainium 4, and Microsoft Maia 300 — top out at 192 to 288 gigabytes of HBM per die. Inference workloads involving mixture-of-experts models, such as GPT-5, Claude 4, and Gemini 3, and long-context processing routinely require 10 to 25 terabytes or more of HBM for a single computation.

  The solution, the report stated, is to bind 48, 64, 96, or as many as 144 ASICs together through ultra-high-speed interconnects so that the software stack treats the entire cluster as a single logical chip with up to 20 terabytes of aggregate memory. This architecture is called scale-up, or vertical scaling. A standard server rack is the smallest physical enclosure capable of hosting it.

  ## Why liquid cooling is required

  Operating rack-scale clusters above 100 kilowatts per cabinet exceeds the practical limits of air cooling. Commercial Times identified five hardware physics constraints that together force the full-rack, full-liquid-cooling form factor: aggregate model memory requirements, the physical distance limits of high-speed copper cabling, heat loads above 100 kilowatts, power delivery at that density, and a fifth constraint also cited. No single factor alone dictates the design; together they make the rack the minimum viable delivery unit, according to the report. The four CSPs have accordingly abandoned per-card and per-server delivery in favor of integrated rack-scale systems as their standard hardware output.

  ## Supply chain implications

  Until this year, a large share of the hundreds of billions of dollars in annual CSP capital expenditure on data center hardware was captured by Nvidia, which the report said carries gross margins of approximately 75 percent. As in-house ASICs mature into the primary compute workhorses, that dynamic shifts. The rack-scale liquid-cooled transition also restructures the broader supply chain — from intellectual property licensing and wafer fabrication at TSMC, through advanced packaging such as CoWoS, to liquid-cooling assembly at the rack level. Taiwanese server and thermal-management suppliers were identified in the report as direct beneficiaries of the upgrade cycle.

  The next disclosed hardware milestones are Google's TPU v8, Amazon's Trainium 4, and Microsoft's Maia 300, all targeting 2-nanometer production with HBM4 memory integration next year.
body_zh: |
  Google、Amazon、Microsoft與Meta均已相繼承諾，旗下次世代AI加速器硬體將全面採用全液冷、機架規模架構，《工商時報》引述《先鋒雜誌》所發布的分析報告指出。這場轉型由每機架超過100千瓦的功耗負載，及根本性的記憶體頻寬限制所迫使，標誌著離散式加速器顯示卡與獨立2U或4U伺服器，作為北美四大雲端服務供應商（CSP）AI運算標準交付單元的時代已正式告終。

  ## 從訓練到推論

  直到今年以前，大型雲端資料中心內的主流工作負載，仍是基礎模型訓練：這是一次性資本支出，需耗用數萬顆晶片連續運算數月。如今這一格局已然逆轉。日常生產服務現涵蓋搜尋摘要、程式碼生成、即時語音互動，以及多步驟代理式AI——即具備自主規劃與多階段推理能力的系統——每筆查詢均會產生數千至數萬個隱藏token。報告所引用的產業數據顯示，大型雲端資料中心超過70%的電力與運算消耗，目前已歸因於推論工作負載。

  四大CSP均已針對此一現實，在最新自研特殊應用積體電路（ASIC）設計上明確回應。Google的TPU v7（開發代號Ironwood）在發布時被定位為首款專為推論時代而設計的TPU。Microsoft的Maia 200及近期發布的Maia 300捨棄傳統訓練邏輯，轉而全力聚焦推論最佳化；Microsoft表示，Maia 200在運行Copilot服務及OpenAI模型時，每瓦所產生的token數量較商用GPU高出1.7倍。Amazon則將Trainium 3與Trainium 4定位為專為代理式AI打造的訓練暨推論統一晶片。Meta的MTIA系列——涵蓋300、400、450及500世代——被該公司定義為推論優先架構，每年發布兩個新晶片世代。

  ## 記憶體高牆

  驅動機架規模轉型的核心技術制約，是所謂的「記憶體高牆」。大型語言模型每生成一個新token，都需要從高頻寬記憶體（HBM）持續讀取模型權重及不斷擴張的鍵值快取（KV cache）至運算核心。一旦記憶體容量或頻寬不足，無論原始處理速度多快，運算核心都將陷於閒置。報告指出，解決記憶體限制，而非提升以每秒浮點運算次數（FLOPS）衡量的原始運算吞吐量，才是四大CSP至2028年技術路線圖的核心工程挑戰。

  現世代ASIC——包括Google TPU v7、Amazon Trainium 3及Microsoft Maia 200——採用台積電3奈米製程搭配HBM3e，將單晶片記憶體推升至144至216GB區間，頻寬達4.9至7.4TB/s。

  鎖定明年量產的次世代產品，將轉進2奈米製程節點並搭載HBM4，單晶片記憶體達288GB。其中Microsoft Maia 300規格最為激進，整合八組HBM4堆疊，記憶體頻寬達18TB/s——超越前代2.5倍以上——目標瞄準長上下文及即時多模態推論。Google TPU v8與Amazon Trainium 4同樣走2奈米加HBM4的技術路線。

  ## 為何選擇機架而非顯示卡

  單顆晶片的記憶體上限，受台積電CoWoS先進封裝製程所制約——該製程限制了單次製造步驟中可曝光的晶圓面積。即便是最先進的晶片——Google TPU v7、AWS Trainium 4及Microsoft Maia 300——每個die的HBM也頂多達到192至288GB。混合專家（MoE）模型（如GPT-5、Claude 4及Gemini 3）的推論工作負載，以及長上下文處理，單次運算所需的HBM通常達10至25TB，甚至更多。

  報告指出，解決方案是透過超高速互連，將48、64、96乃至多達144顆ASIC綁定在一起，使軟體堆疊將整個叢集視為單一邏輯晶片，並擁有高達20TB的聚合記憶體。此一架構稱為「向上擴展」（scale-up）或垂直擴展。標準伺服器機架是能夠容納此類配置的最小實體機殼。

  ## 為何必須採用液冷

  在每機架超過100千瓦的條件下運行機架規模叢集，已超出氣冷的實際極限。報告點出五項硬體物理限制，共同迫使業界採用全機架、全液冷的架構：聚合模型記憶體需求、高速銅纜的物理距離限制、超過100千瓦的熱負載、在如此高密度下的電力供輸，以及報告中所引述的第五項限制。報告表示，任何單一因素均不足以獨力決定設計走向；然而合而觀之，機架已成為最小可行交付單元。四大CSP因此已放棄以顯示卡或伺服器為單位的交付方式，改以整合式機架規模系統作為標準硬體輸出。

  ## 供應鏈影響

  直到今年以前，CSP每年在資料中心硬體上數千億美元的年度資本支出，相當大一部分流向輝達——報告指出其毛利率約為75%。隨著自研ASIC逐步成熟為主要運算主力，這一格局正在轉變。機架規模液冷轉型同時也重塑整體供應鏈——從台積電的智慧財產授權與晶圓製造、CoWoS等先進封裝，到機架層級的液冷組裝，環環相扣。報告特別點名，台灣的伺服器廠商與熱管理供應商，將是此次升級週期的直接受益者。

  下一批已公開的硬體里程碑包括Google TPU v8、Amazon Trainium 4及Microsoft Maia 300，三者均鎖定以2奈米製程搭載HBM4記憶體，目標明年量產。
date: "2026-10-23"
source_published: "2026-10-21T00:00:00.000Z"
category: "cooling"
secondary_categories: ["compute"]
region: []
vendor: ["AWS", "Gigabyte", "Nvidia", "TSMC"]
trust:
  score: 3
  reasoning: "Single source: AI晶片愈強 散熱愈難！四大雲端巨頭轉向全液冷機櫃 台廠迎升級商機 (trust 3/5)."
sources:
  - url: "https://www.ctee.com.tw/news/20261022700019-430501"
    title: "AI晶片愈強 散熱愈難！四大雲端巨頭轉向全液冷機櫃 台廠迎升級商機"
    trust: 3
    type: primary
    published_at: "2026-10-21T00:00:00.000Z"
---
