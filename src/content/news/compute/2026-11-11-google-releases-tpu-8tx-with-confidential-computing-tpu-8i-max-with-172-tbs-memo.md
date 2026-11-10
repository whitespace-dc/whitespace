---
title_en: "Google Releases TPU 8tx with Confidential Computing, TPU 8i Max with 17.2 TB/s Memory Bandwidth"
title_zh: "Google 推出 TPU 8tx 與 8i Max　機密運算與 17.2 TB/s 高頻寬"
summary_en: "Google Cloud announced TPU 8tx, a secure inference accelerator paired with AMD EPYC Turin processors for confidential computing, and TPU 8i Max, a dual-chip package that doubles high-bandwidth memory throughput to 17.2 TB/s for large-context agentic workloads. The additions extend the company's eighth-generation TPU lineup to four distinct system configurations within a single calendar year."
summary_zh: "Google Cloud 宣布推出第八代 TPU 兩款新品：TPU 8tx 搭配 AMD EPYC Turin 處理器，專為機密運算設計；TPU 8i Max 採雙晶片封裝，高頻寬記憶體頻寬達 17.2 TB/s，針對大型上下文視窗的代理工作負載而設計。兩款新品使 Google 在同一日曆年度內完成了四款第八代 TPU 系統配置的市場發布。"
body_en: |
  Google Cloud on Monday announced two additions to its eighth-generation Tensor Processing Unit (TPU) family: TPU 8tx, a hardware-secured accelerator for sensitive AI workloads, and TPU 8i Max, a dual-chip inference package targeting memory-intensive agentic applications with large context windows.

  The new chips extend a TPU generation Google Cloud introduced in April, when it launched the TPU 8t training accelerator, which the company said delivers up to 2.7 times better training performance than the prior generation, and the TPU 8i inference chip, which it said offers 80 percent better inference price-performance. ServeTheHome, which covered Google's TPU architecture at Hot Chips 2026, noted that the November additions mark the first time Google has brought four distinct system configurations to market within a single calendar year, though the new products reuse existing chip designs rather than introducing new silicon.

  ## TPU 8tx: hardware-level security for regulated workloads

  The TPU 8tx uses the same silicon as the training-focused TPU 8t but is reconfigured for secure inference and small-scale training. Google Cloud paired it with custom dual-socket 5th Gen AMD EPYC "Turin" host processors to implement confidential computing, a security model that keeps data encrypted while it is actively being processed, inside an isolated trusted execution environment (TEE).

  Conventional cloud security protects data in transit, as it moves over a network, and at rest, while stored, but leaves data exposed in memory during active computation. TPU 8tx addresses that gap, according to Mark Lohmeyer, vice president and general manager of AI and computing infrastructure at Google Cloud, who said during a media briefing that the chip targets regulated enterprises and governments running frontier or proprietary models alongside sensitive data.

  The dual-socket Turin configuration provides 128 PCIe Gen 5 lanes across four TPU accelerators and high-speed networking cards, which Google said eliminates I/O oversubscription. ServeTheHome reported that Google evaluated AMD EPYC Venice, the sixth-generation successor to Turin, but selected Turin because Venice would operate at Gen 5 speeds without adding accelerator bandwidth; that decision also aligns with Google's 2027 hardware qualification schedule.

  Although TPU 8tx shares silicon with the TPU 8t, which uses a torus network topology with a maximum of 16 hops between chips, it adopts the Boardfly network topology from the inference-focused TPU 8i, which limits the hop count to seven. ServeTheHome noted that the reduced hop count lowers latency for multi-step agentic workloads that issue many sequential inference calls. Google claims TPU 8tx achieves up to two times lower latency than TPU 8t with a near-zero performance penalty.

  ## TPU 8i Max: doubling bandwidth for large context windows

  TPU 8i Max combines two TPU 8i chips into a single multi-chip package, doubling compute, on-chip SRAM, and high-bandwidth memory (HBM) bandwidth compared with a single TPU 8i. The resulting package delivers 384 GB of HBM, which ServeTheHome described as about one-third more capacity than a single TPU 8i; HBM bandwidth of 17.2 terabytes per second (TB/s); and 768 megabytes of on-chip SRAM.

  Lohmeyer said the chip is designed to address memory constraints for agentic workloads processing large context windows, defined as the volume of text or data a model considers simultaneously. ServeTheHome noted that for agents working across entire codebases or extended video content, memory bandwidth becomes the system bottleneck before compute capacity does.

  Google Cloud also said TPU 8i Max fits within an existing rack footprint, delivering more computing capacity per square foot and per watt. Dave McCarthy, group vice president at IDC, said the denser configuration could allow Google Cloud to expand capacity at existing facilities without adding racks or constructing new data centers, potentially easing near-term pressure on physical space.

  Google confirmed that workloads requiring both large-context handling and confidential computing should run on TPU 8tx rather than TPU 8i Max, as the latter does not include the same hardware security features.

  ## Market and competitive implications

  McCarthy said the ability to release four TPU system variants in one year signals an accelerating pace of custom silicon development. "The fact that Google was able to launch the 8i and 8t earlier this year, and now they're coming out with these new ones within the same calendar year, is just showing the pace of innovation," he said. "They're showing their commitment to R&D to build this stuff. And if what they're saying is true — twice the bandwidth, all these new features — that's showing they're potentially outpacing the competition in terms of new product releases."

  On confidential computing, McCarthy said cloud providers have traditionally centered security on data in transit and at rest, and that protecting data in use is an emerging requirement for AI workloads. He said Nvidia is still developing its strategy in that area. "If Google can come out with a strong confidential compute story, it kind of gives them a little bit of an edge," McCarthy said.

  For AMD, ServeTheHome characterized the TPU 8tx selection as a notable win for EPYC, with a CPU socket secured in a non-AMD AI accelerator system at a major hyperscaler, and said the design validates AMD's confidential computing capabilities at hyperscale.

  McCarthy said Google's broader strategy of making TPUs available through third-party cloud providers could expand its market reach and generate an additional revenue stream. Oracle recently announced it would offer Google TPU chips to customers of Oracle Cloud Infrastructure. Lohmeyer said Google Cloud will also allow select customers to deploy the TPU 8tx in their own data centers.
body_zh: |
  Google Cloud 週一宣布推出第八代張量處理器（TPU）家族的兩款新品：專為機敏 AI 工作負載提供硬體安全防護的 TPU 8tx，以及針對大型上下文視窗與記憶體密集型代理應用而設計的雙晶片推論封裝 TPU 8i Max。

  這兩款新晶片進一步延伸了 Google Cloud 今年四月推出的第八代 TPU 產品線——當時發表的 TPU 8t 訓練加速器號稱訓練效能比上一代提升最高 2.7 倍，TPU 8i 推論晶片則宣稱推論性價比改善 80%。科技媒體 ServeTheHome 曾報導 Google 在 Hot Chips 2026 大會上展示的 TPU 架構，並指出此次十一月的新品發表，是 Google 首度在同一個日曆年度內推出四款不同系統配置，不過新產品均沿用現有晶片設計，並未導入全新矽晶片。

  ## TPU 8tx：針對受規範工作負載的硬體級安全防護

  TPU 8tx 採用與訓練導向 TPU 8t 相同的矽晶片，但重新設定為安全推論與小規模訓練用途。Google Cloud 將其搭配客製化雙插槽第五代 AMD EPYC「Turin」主機處理器，以實現機密運算（Confidential Computing）——這是一種在資料主動運算期間仍保持加密狀態、並置於隔離可信執行環境（TEE）中的安全模型。

  傳統雲端安全防護聚焦於傳輸中資料（在網路上移動時）與靜態資料（儲存時），但在主動運算期間，記憶體中的資料仍處於暴露狀態。TPU 8tx 正是為了填補這道缺口而生。Google Cloud AI 與運算基礎架構副總裁暨總經理 Mark Lohmeyer 在媒體簡報中表示，這款晶片的目標客群，是在處理機敏資料的同時需要執行前沿或專有模型的受規範企業及政府客戶。

  雙插槽 Turin 配置透過四塊 TPU 加速器與高速網路卡，提供合計 128 條 PCIe Gen 5 通道，Google 表示此設計可消除 I/O 超額訂閱問題。ServeTheHome 報導指出，Google 曾評估 AMD EPYC Venice（Turin 的第六代繼任者），但最終選用 Turin，原因在於 Venice 的運作速度仍停留在 Gen 5，對加速器頻寬並無提升；此決定同時也符合 Google 2027 年的硬體資格認證時程規劃。

  儘管 TPU 8tx 與 TPU 8t 共用矽晶片——後者採用最多需 16 次跳轉的環形網路拓撲——TPU 8tx 卻採用了來自推論導向 TPU 8i 的 Boardfly 網路拓撲，將跳轉次數上限壓縮至七次。ServeTheHome 指出，較少的跳轉次數可降低多步驟代理工作負載的延遲，因為這類工作負載會發出大量連續推論呼叫。Google 宣稱，TPU 8tx 相較於 TPU 8t 可實現最高兩倍的延遲降幅，且效能損耗趨近於零。

  ## TPU 8i Max：為大型上下文視窗倍增頻寬

  TPU 8i Max 將兩顆 TPU 8i 晶片整合為單一多晶片封裝，與單顆 TPU 8i 相比，運算能力、片上 SRAM 以及高頻寬記憶體（HBM）頻寬均翻倍。最終封裝提供 384 GB HBM（ServeTheHome 描述約比單顆 TPU 8i 多出三分之一的容量）、17.2 TB/s 的 HBM 頻寬，以及 768 MB 的片上 SRAM。

  Lohmeyer 表示，這款晶片旨在解決代理工作負載在處理大型上下文視窗時所面臨的記憶體限制——上下文視窗指的是模型同時考量的文字或資料量。ServeTheHome 指出，對於需要橫跨整個程式碼庫或大量影片內容進行處理的代理程式而言，記憶體頻寬往往會比運算能力更早成為系統瓶頸。

  Google Cloud 也表示，TPU 8i Max 可在現有機架空間內安裝，提升每平方英尺與每瓦特的運算密度。IDC 集團副總裁 Dave McCarthy 指出，更高的部署密度或許能讓 Google Cloud 在現有設施內擴充容量，無需增加機架或興建新的資料中心，有望緩解近期的實體空間壓力。

  Google 確認，對於同時需要大型上下文處理與機密運算的工作負載，應選用 TPU 8tx 而非 TPU 8i Max，因為後者不具備相同的硬體安全功能。

  ## 市場競爭意涵

  McCarthy 表示，Google 能在同一年度內推出四款 TPU 系統變體，顯示自研晶片的開發步伐正在加快。他說：「Google 能在今年稍早推出 8i 和 8t，現在又在同一個日曆年度內推出這些新品，充分展現了創新的速度。他們正在展示對研發的承諾，致力打造這些產品。而如果他們所說的屬實——兩倍頻寬、這些全新功能——那就顯示他們在新產品發布速度上，可能正在超越競爭對手。」

  在機密運算方面，McCarthy 表示，雲端服務供應商傳統上將安全防護集中在傳輸中與靜態資料，而保護使用中資料正逐漸成為 AI 工作負載的新興需求。他指出，輝達（NVIDIA）在這一領域的策略仍在發展中。「如果 Google 能提出一套有力的機密運算方案，這在某種程度上賦予他們一些優勢，」McCarthy 說。

  對 AMD 而言，ServeTheHome 將 TPU 8tx 選用 AMD 處理器一事定性為 EPYC 的一次重大勝利——在一家大型超大規模業者的非 AMD AI 加速器系統中，成功取得 CPU 插槽，同時也驗證了 AMD 機密運算能力在超大規模部署環境中的可行性。

  McCarthy 表示，Google 透過第三方雲端服務供應商提供 TPU 的更廣泛策略，有望擴大市場觸及範圍並創造額外營收來源。Oracle 近期宣布將向 Oracle Cloud Infrastructure 的客戶提供 Google TPU 晶片。Lohmeyer 則表示，Google Cloud 也將允許特定客戶在自己的資料中心部署 TPU 8tx。
date: "2026-11-11"
source_published: "2026-11-09T18:50:19.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Google Cloud", "Nvidia", "Oracle Cloud"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google Adds TPU 8tx, 8i Max for Enterprise AI (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://www.datacenterknowledge.com/data-center-chips/google-adds-tpu-8tx-8i-max-for-enterprise-ai"
    title: "Google Adds TPU 8tx, 8i Max for Enterprise AI"
    trust: 3
    type: primary
    published_at: "2026-11-09T18:50:19.000Z"
  - url: "https://www.servethehome.com/google-tpu-8tx-8i-max-amd-epyc-turin/"
    title: "Google TPU 8tx Pairs AMD EPYC Turin Hosts with Confidential Computing while TPU 8i Max Doubles Memory Bandwidth"
    trust: 3
    type: corroborating
    published_at: "2026-11-09T21:37:58.000Z"
---
