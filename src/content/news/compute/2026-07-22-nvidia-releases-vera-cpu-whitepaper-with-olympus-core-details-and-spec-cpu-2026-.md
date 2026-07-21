---
title_en: "NVIDIA releases Vera CPU whitepaper with Olympus core details and SPEC CPU 2026 benchmarks"
title_zh: "輝達發布 Vera CPU 白皮書，揭露 Olympus 核心細節與 SPEC CPU 2026 測試成績"
summary_en: "NVIDIA published a full architectural whitepaper for its forthcoming Vera CPU on Monday, revealing previously undisclosed details on the Olympus custom processor core and releasing SPEC CPU 2026 benchmark results — the deepest public look at the chip since its announcement earlier this year."
summary_zh: "輝達（NVIDIA）週一正式發布即將上市的 Vera CPU 完整架構白皮書，首度公開 Olympus 自研處理器核心的詳細規格，並釋出 SPEC CPU 2026 基準測試成績，是該晶片自今年初宣布以來最完整的一次公開技術揭露。"
body_en: |
  NVIDIA published a full architectural whitepaper for its forthcoming Vera CPU on Monday, disclosing previously unavailable details on the Olympus custom processor core and releasing SPEC CPU 2026 benchmark results, providing the most thorough public examination of the chip since its announcement at the start of this year.

  The release lands ahead of two significant industry events later this week: Intel's quarterly earnings and AMD's Advancing AI enterprise conference in San Francisco, according to ServeTheHome's report. Alongside the Vera CPU whitepaper, NVIDIA also published supplementary technical material on its Rubin GPU architecture and additional details on the NVLink interconnect that binds those chips together within the Vera Rubin platform.

  ## What Olympus replaces and why it matters

  Vera is NVIDIA's first custom CPU core design in several years. Its predecessor in NVIDIA's server lineup, Grace, used an off-the-shelf Arm Neoverse V2 core rather than a proprietary design. ServeTheHome reported that NVIDIA intends Vera to serve a broader range of server workloads than Grace did, rather than functioning primarily as a host processor for its own GPUs — the role Grace was principally built for.

  The server CPU market is currently dominated by Intel with its Xeon line and AMD with EPYC, alongside a growing field of Arm-based offerings. ServeTheHome described it as a large and lucrative segment where NVIDIA is still building its position.

  ## Olympus versus Grace: specification changes

  The Olympus core expands on Grace substantially across most parameters:

  - **Cores and threads:** 88 cores and 176 threads on Vera, up from 72 cores and 72 threads on Grace. The additional threads come through a feature NVIDIA calls Spatial Multithreading.
  - **Per-core L2 cache:** 2 MB, doubling Grace's 1 MB per core.
  - **Unified L3 cache:** 164 MB, up from 114 MB. (L3 is the last, largest cache layer on-chip, shared across all cores.)
  - **Memory bandwidth:** up to 1.2 terabytes per second (TB/s), up from 512 gigabytes per second (GB/s) on Grace.
  - **Memory capacity:** up to 1.5 TB of LPDDR5X, up from 480 GB.
  - **NVLink chip-to-chip bandwidth:** 1.8 TB/s, doubling Grace's 900 GB/s. NVLink chip-to-chip, or C2C, is the high-speed interconnect that binds the CPU and GPU within the same package.
  - **Connectivity:** PCIe Generation 6 and CXL 3.1, up from PCIe Gen 5. CXL, or Compute Express Link, is an industry-standard interface used to attach additional memory and accelerators to a host processor.
  - **Vector units:** six 128-bit SVE2 (Scalable Vector Extension 2) units per core, up from four; Vera also adds FP8 support not present on Grace. FP8, or 8-bit floating-point, is a low-precision numerical format used primarily in AI inference.
  - **Thermal design power (TDP):** 250 to 450 watts, compared with a fixed 250 W for Grace. TDP indicates the maximum sustained heat output a chip is rated to produce, which determines the cooling infrastructure required in a server.

  ## Inside the Olympus core: front-end

  The whitepaper confirms the organization of the Olympus front-end, which had not been fully documented until Monday.

  Each core's front-end is anchored by a neural branch predictor capable of issuing two predictions per cycle with the goal of reducing the performance penalty from mispredicted branches — a stall that occurs when the processor has speculatively executed instructions down the wrong path. NVIDIA's new whitepaper does not elaborate further on the predictor's internals.

  The instruction fetch unit supplies up to 16 instructions per cycle, each 64 bits wide, into a decode queue that holds 48 instructions. The decoder itself processes up to 10 fused instructions per cycle, matching the rename throughput further down the pipeline.

  The L1 instruction cache — the fastest, smallest cache tier, located inside each core's front-end — is 64 KB and 4-way set-associative. ServeTheHome noted this is twice the size of the equivalent cache in AMD's Zen 5 architecture and matches Intel's Cougar Cove design. The L1 data cache, located in the core's back-end, is 96 KB and 6-way set-associative.

  ## Mid-core: out-of-order execution and speculative techniques

  Olympus's execution engine is out-of-order, meaning it can reorder and execute instructions ahead of their program sequence to improve throughput. The engine can rename up to 10 micro-operations — the small internal instructions a processor breaks larger instructions into — per cycle. NVIDIA did not disclose the size of the reorder buffer, which is the internal structure that tracks all in-flight instructions awaiting completion, or the register file sizes used in the renaming process.

  Three speculative-execution techniques supplement the out-of-order engine. Memory renaming extends conventional register renaming — which maps architectural registers to physical ones to eliminate artificial data dependencies — to whole memory addresses, allowing the core to begin executing dependent instructions before a preceding memory load has returned its result. NVIDIA noted that recent AMD designs also employ this technique. Value prediction speculatively estimates the output of recurring computational patterns before a result is actually available, with a verification check afterward. Move elimination detects and discards unnecessary transfers of data values between locations.

  ## Back-end execution pipes

  The back-end of each Olympus core includes 18 execution pipes in total. Eight of those pipes handle integer arithmetic operations and branching.

  ## SPEC CPU 2026 results

  NVIDIA published results on the SPEC CPU 2026 benchmark suite, the primary industry-standard test for measuring general-purpose processor performance across a range of workloads. ServeTheHome described the results as illustrating which aspects of CPU design NVIDIA has prioritized, while characterizing the overall picture as "not all rosy for NVIDIA."

  ## What remains undisclosed

  The whitepaper, while the most detailed public disclosure on Vera to date, does not answer all open questions about the chip. Key micro-architectural parameters — including reorder buffer size and register file dimensions — remain unpublished. ServeTheHome noted that the disclosures also do not provide a complete picture of the Olympus branch predictor beyond its high-level throughput figure.

  The Vera CPU whitepaper release precedes the broader Vera Rubin platform's commercial availability, with the chip positioned to compete in a server CPU market that ServeTheHome described as one where NVIDIA is still working to establish its standing against entrenched incumbents.
body_zh: |
  輝達（NVIDIA）週一正式發布即將上市的 Vera CPU 完整架構白皮書，首度公開 Olympus 自研處理器核心的詳細規格，並釋出 SPEC CPU 2026 基準測試成績，是該晶片自今年初宣布以來最完整的一次公開技術揭露。

  根據 ServeTheHome 的報導，此次白皮書的發布時機，恰在本週稍晚兩場重要產業活動前夕：英特爾（Intel）的季度財報公布，以及超微（AMD）在舊金山舉辦的「Advancing AI」企業大會。輝達此次除了發布 Vera CPU 白皮書，同時也公開了 Rubin GPU 架構的補充技術資料，以及在 Vera Rubin 平台中串連兩款晶片的 NVLink 互連技術的進一步細節。

  ## Olympus 取代了什麼，為何重要

  Vera 是輝達數年來首款自研 CPU 核心設計。在此之前，輝達伺服器產品線所採用的 Grace 處理器，使用的是 Arm Neoverse V2 現成公版核心，並非自有設計。ServeTheHome 報導指出，輝達打算讓 Vera 能夠服務比 Grace 更廣泛的伺服器工作負載，而非像 Grace 那樣主要扮演輝達自家 GPU 主機端處理器（host processor）的角色——那才是 Grace 當初的主要設計定位。

  目前伺服器 CPU 市場由英特爾的 Xeon 產品線與超微的 EPYC 系列主導，Arm 架構解決方案的陣容也持續壯大。ServeTheHome 形容這是一個規模龐大、利潤豐厚的市場區塊，輝達目前仍在積極建立自身的市場地位。

  ## Olympus 對比 Grace：規格變化

  Olympus 核心在多數規格上均大幅超越 Grace：

  - **核心與執行緒：** Vera 配備 88 個核心、176 條執行緒，Grace 為 72 核心、72 執行緒。額外的執行緒來自輝達稱為「Spatial Multithreading（空間多執行緒）」的技術。
  - **每核心 L2 快取：** 2 MB，為 Grace 每核心 1 MB 的兩倍。
  - **統一 L3 快取：** 164 MB，高於 Grace 的 114 MB。（L3 是晶片上最後一層、也是容量最大的快取層，由所有核心共享。）
  - **記憶體頻寬：** 最高達每秒 1.2 TB（TB/s），遠高於 Grace 的每秒 512 GB（GB/s）。
  - **記憶體容量：** 最高支援 1.5 TB 的 LPDDR5X，Grace 為 480 GB。
  - **NVLink 晶片對晶片頻寬：** 1.8 TB/s，為 Grace 900 GB/s 的兩倍。NVLink 晶片對晶片（C2C）是在同一封裝內串連 CPU 與 GPU 的高速互連技術。
  - **連接介面：** PCIe 第六代與 CXL 3.1，Grace 為 PCIe 第五代。CXL（Compute Express Link，計算快取互連）是業界標準介面，用於為主機處理器掛載額外記憶體與加速器。
  - **向量運算單元：** 每核心配備六個 128 位元 SVE2（可擴充向量延伸第二代）單元，Grace 為四個；Vera 另新增 Grace 所不具備的 FP8 支援。FP8（8 位元浮點數）是一種低精度數值格式，主要應用於 AI 推論。
  - **散熱設計功耗（TDP）：** 250 至 450 瓦，Grace 為固定 250 瓦。TDP 代表晶片額定最大持續散熱量，決定伺服器所需的散熱基礎設施規格。

  ## Olympus 核心架構解析：前端

  白皮書確認了 Olympus 前端（front-end）的組成架構，相關細節在週一之前從未完整公開。

  每個核心的前端以神經網路分支預測器（neural branch predictor）為核心，每個時脈週期可發出兩次預測，目標是降低分支預測錯誤所造成的效能損失——一旦處理器沿錯誤路徑推測執行了指令，便會觸發停頓（stall）。輝達的白皮書並未進一步說明預測器的內部設計細節。

  指令擷取單元每個時脈週期可向解碼佇列（decode queue）輸送最多 16 條指令，每條指令寬度為 64 位元，解碼佇列容量為 48 條指令。解碼器本身每個週期可處理最多 10 條融合指令（fused instructions），與管線後段的重新命名（rename）吞吐量一致。

  L1 指令快取位於每個核心前端內部，是速度最快、容量最小的快取層，容量為 64 KB、4 路組相聯（4-way set-associative）。ServeTheHome 指出，這是超微 Zen 5 架構同等快取容量的兩倍，也與英特爾 Cougar Cove 設計相當。位於核心後端的 L1 資料快取為 96 KB、6 路組相聯。

  ## 中段核心：亂序執行與推測技術

  Olympus 的執行引擎採亂序執行（out-of-order）設計，可對指令重新排序並提前執行，以提升整體吞吐量。該引擎每個時脈週期可重新命名（rename）最多 10 個微操作（micro-operation）——即處理器將較大指令拆解後的內部小指令。輝達未揭露重排序緩衝區（reorder buffer）的大小，該結構負責追蹤所有尚未完成的執行中指令；重新命名過程所使用的暫存器檔案（register file）大小同樣未公開。

  三項推測執行技術為亂序引擎提供進一步補強。記憶體重新命名（memory renaming）將傳統的暫存器重新命名技術延伸至完整記憶體位址——傳統技術將架構暫存器對應至實體暫存器，以消除人為的資料相依性——讓核心能在前一筆記憶體讀取結果返回之前，便開始執行相依指令。輝達指出，超微的近期設計也採用了這項技術。數值預測（value prediction）則在結果實際完成前，針對重複出現的運算模式推測估算輸出值，事後再進行驗證比對。搬移消除（move elimination）則偵測並捨棄不必要的資料值搬移動作。

  ## 後端執行管線

  每個 Olympus 核心的後端共有 18 條執行管線，其中 8 條專門負責整數算術運算與分支處理。

  ## SPEC CPU 2026 測試成績

  輝達此次公布了 SPEC CPU 2026 基準測試套件的成績。SPEC CPU 2026 是衡量通用處理器在多種工作負載下效能表現的主要業界標準測試工具。ServeTheHome 形容這些成績反映了輝達在 CPU 設計上的優先取向，同時指出整體表現「對輝達而言並非全然樂觀」。

  ## 尚未揭露的資訊

  這份白皮書雖是迄今對 Vera 最詳盡的公開揭露，但仍有若干問題懸而未決。重排序緩衝區大小與暫存器檔案規格等關鍵微架構參數至今仍未公開。ServeTheHome 也指出，此次揭露對 Olympus 分支預測器的說明，仍僅止於高階吞吐量數字，未提供完整的架構細節。

  Vera CPU 白皮書的發布先於 Vera Rubin 平台的商業上市。這款晶片的定位是在伺服器 CPU 市場中與根基深厚的現有強勢廠商一較高下——而 ServeTheHome 形容，輝達在這個市場中仍處於努力建立市場地位的階段。
date: "2026-07-22"
source_published: "2026-07-21T15:00:01.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Intel", "Nvidia"]
trust:
  score: 4
  reasoning: "Single source: Diving Deeper on NVIDIA’s Vera CPU: New Architectural Details and SPEC CPU 2026 Benchmarks (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/diving-deeper-on-nvidias-vera-cpu-new-architectural-details-and-spec-cpu-2026-benchmarks/"
    title: "Diving Deeper on NVIDIA’s Vera CPU: New Architectural Details and SPEC CPU 2026 Benchmarks"
    trust: 4
    type: primary
    published_at: "2026-07-21T15:00:01.000Z"
---
