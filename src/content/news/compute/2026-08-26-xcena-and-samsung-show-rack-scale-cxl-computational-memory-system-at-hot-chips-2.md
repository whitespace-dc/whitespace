---
title_en: "XCENA and Samsung show rack-scale CXL computational memory system at Hot Chips 2026"
title_zh: "XCENA與三星於Hot Chips 2026發表機架級CXL運算記憶體系統"
summary_en: "XCENA presented its MX1 Type 3 CXL computational memory device at Hot Chips 2026 in a joint session with Samsung, demonstrating a rack-scale architecture that fuses DDR5 memory expansion, SSD-backed byte-addressable memory, and near-memory RISC-V processing, with benchmark results showing up to 64x more queries per second than a host CPU-based CXL memory pool for AI vector search."
summary_zh: "XCENA於Hot Chips 2026與三星聯合發表MX1 Type 3 CXL運算記憶體裝置，展示融合DDR5記憶體擴充、SSD支援位元組定址記憶體及近記憶體RISC-V處理能力的機架級架構；基準測試顯示，AI向量搜尋每秒查詢量最高可達主機CPU型CXL記憶體池的64倍。"
body_en: |
  XCENA and Samsung jointly presented XCENA's MX1 computational memory device at Hot Chips 2026, showing a rack-scale system that pairs near-memory processing with Compute Express Link (CXL) — a hardware interface standard that lets servers attach memory and storage over a high-speed interconnect — and reported throughput gains of up to 64x for AI retrieval workloads and 3.35x for large-language-model decoding at 100,000-token context lengths.

  The MX1 is a Type 3 CXL part, meaning the host sees it as a memory-only device rather than a device with its own processor cache hierarchy. It combines three functions on a single system-on-chip: CXL memory expansion across four DDR5-8400 channels reaching up to 2TB of capacity; solid-state drive storage exposed to the host as byte-addressable CXL memory through a feature XCENA calls Infinite Memory; and near-memory processing across 3,072 custom RISC-V cores, an open-specification processor instruction set.

  XCENA built the MX1 on Samsung Foundry's 4-nanometer process and organized the die into 24 subsystems, each composed of four clusters of 32 memory units (MUs), totaling 3,072 MUs. The company said it chose the subsystem as the unit of host job allocation, with each subsystem capable of running an independent job and sharing a 128MB last-level cache.

  ## Why many small cores instead of fewer large ones

  XCENA said it selected a large number of simple in-order RISC-V cores over a smaller number of complex ones because target workloads are bandwidth-bound and power-sensitive. The smaller cores allow 3,072 to fit on the die while keeping energy per byte low. The RISC-V open instruction set also provides a mature toolchain and allows custom instructions for data-parallel work such as in-memory analytics, retrieval-augmented generation (RAG) — a technique that combines a live database lookup with a language model — and memory compression.

  A Vector Processing Engine adds a vector path on top of the scalar MUs. XCENA reports roughly 3 trillion floating-point operations per second (TFLOPS) of peak dot-product throughput per MX1, covering element-wise arithmetic, reductions, CRC32 checksums, and vector-scalar operations, with per-MU command queues aimed at RAG vector search and key-value (KV) cache scoring.

  ## Memory hierarchy and address model

  Each cluster of four MUs shares an 8KB L1 instruction cache, and each cluster of 32 MUs shares a 256KB L2 data cache, with a 128MB shared last-level cache tying all clusters together. Instructions use physical addresses while data uses host virtual addresses, with address translation shared at the cluster level.

  XCENA chose a single virtual address space shared by the host and the MUs, so pointer-rich data structures can cross the boundary without remapping, and existing software using standard memory allocation can migrate to CXL memory with minimal code changes. A CXL-aware allocator manages per-tenant page tables to isolate one application's kernels from another's memory.

  On the software side, XCENA ships a MapReduce-style runtime called PXL, the Parallel Xceleration Library. PXL lets developers write kernels in C, C++, or Rust, define jobs that allocate one or more subsystems, and distribute work across MU cores with allocation and synchronization managed automatically.

  ## Throughput and power benchmarks

  XCENA reported throughput of up to 4.7x versus host-over-CXL and 2x versus local DRAM for analytics kernels, at roughly one-quarter of host power, yielding efficiency figures of up to 18.7x versus CXL and 6.2x versus DRAM. The company said the comparison used an Intel Xeon 6767P reference platform, excluding idle power.

  ## Infinite Memory and KV cache

  The Infinite Memory function presents SSD capacity as byte-addressable CXL memory using a DRAM-plus-NAND hybrid in which DRAM caches SSD pages. The SSD is divided into 64KB pages tracked by a 1,024-entry map-cache translation lookaside buffer (TLB), with misses filled by firmware running on the MU cores.

  XCENA applied Infinite Memory to LLM KV cache storage — the temporary buffer that holds previously computed attention values during model inference — testing with Llama-3.1-8B, the vLLM and LMCache inference frameworks, and an NVIDIA RTX 6000 Pro GPU. With a pinned prefix kept resident in DRAM, time-to-first-token (TTFT) tracked DRAM at 1.13x; removing the pin raised the ratio to 1.57x; a raw SSD baseline reached 1.86x. A lookahead prefetch that exploits device underutilization brought latency close to DRAM-resident performance, XCENA said.

  ## Samsung's rack-scale research

  The second half of the Hot Chips session shifted to Samsung's processing-near-memory research using the MX1. Samsung's analysis centers on computing inside the CXL device rather than shipping raw data back to the host, exploiting the contrast between DDR5 bandwidth at 268.8 gigabytes per second behind the CXL interconnect versus a 64 gigabytes-per-second PCIe Generation 6 x8 host link. A Samsung representative said on stage that CXL is being adopted by major hyperscalers for databases and AI workloads including KV cache.

  Samsung and XCENA described a rack-scale reference system pairing a Liqid CXL switch with GPU servers equipped with 96GB NVIDIA RTX Pro 6000 Blackwell graphics cards, targeting 20TB of total memory capacity at 2.7TB/s of aggregate bandwidth.

  Samsung contributed the NDC API, a near-data-computing library the company described as vendor-agnostic and open-sourced through the Open Compute Project's Flexible Time Infrastructure Data Center Compute (OCP FTI DCC) initiative. Samsung routes PyTorch integration through OpenXLA and the PrivateUse1 dispatch mechanism, allowing an AI framework to reach the XCENA PXL library without application code changes.

  ## RAG vector search results

  For RAG vector search, Samsung offloaded L2 k-nearest-neighbor distance computation from a FAISS IVF Flat index — a standard approximate-similarity-search library and indexing method — because the operation is memory-bandwidth-bound. Using 10 MX1 devices against a 512-million-vector index drawn from the Laion 5B image dataset, Samsung reported 64x more queries per second than a host CPU with a CXL memory pool, and 65x better query-per-energy.

  ## LLM decode: GPU and PNM hybrid attention

  The second AI use case addressed LLM decoding with a hybrid attention scheme in which attention computation for KV pages resident on the GPU stays on the GPU, while missed pages are handled by the processing-near-memory (PNM) device, which returns only the computed attention result rather than transferring the full KV pages back to the host.

  At a 100,000-token context length — relevant to document-scale inference — Samsung reported that the PNM pool raised throughput by 3.35x and token-per-energy by 3.84x compared with GPU-only attention loading the KV cache from CXL, producing 17.7 versus 5.50 tokens per second and 4.31 versus 1.12 tokens per kilojoule. That test ran LLaMA-3.1-70B at INT8 precision across two servers, each equipped with five MX1 devices and NVIDIA RTX Pro 6000 Blackwell GPUs.

  ## Industry context

  The joint session positions CXL computational memory as an alternative to scaling raw GPU count for AI inference tasks constrained by memory bandwidth and capacity rather than arithmetic throughput. The rack-scale reference design targeting 20TB at 2.7TB/s, using a Liqid CXL switch and RTX Pro 6000 Blackwell GPUs, represents the forward-looking architecture XCENA and Samsung are offering to customers evaluating CXL-based memory infrastructure.
body_zh: |
  XCENA與三星在Hot Chips 2026聯合發表XCENA的MX1運算記憶體裝置，展示一套結合近記憶體處理與CXL（Compute Express Link）的機架級系統。CXL是一種硬體介面標準，允許伺服器透過高速互連匯流排外掛記憶體與儲存裝置。此次展示中，AI檢索工作負載的吞吐量提升最高達64倍，在10萬Token上下文長度下，大型語言模型解碼吞吐量也提升了3.35倍。

  MX1屬於Type 3 CXL元件，意味著主機將其視為純記憶體裝置，而非擁有自身處理器快取層次結構的裝置。它在單一系統單晶片上整合了三項功能：透過四條DDR5-8400通道提供最高2TB容量的CXL記憶體擴充；透過XCENA稱為「Infinite Memory（無限記憶體）」的功能，將固態硬碟儲存以位元組定址CXL記憶體的形式呈現給主機；以及由3,072顆客製化RISC-V核心構成的近記憶體處理能力，RISC-V採用開放規格處理器指令集。

  XCENA在三星晶圓代工4奈米製程上打造MX1，並將晶片組織為24個子系統，每個子系統由四個叢集、每叢集32個記憶體單元（MU）組成，總計3,072個MU。該公司表示以子系統作為主機工作分配的基本單位，每個子系統能夠執行獨立工作，並共用128MB末級快取。

  ## 為何選擇大量小核心而非少數大核心

  XCENA表示，選擇大量簡單順序執行RISC-V核心，而非少量複雜核心，是因為目標工作負載受頻寬限制且對功耗敏感。較小的核心使3,072顆得以容納於單一晶片，同時維持低每位元組能耗。RISC-V開放指令集也提供成熟的工具鏈，並允許針對資料平行工作進行客製化指令，例如記憶體內分析、RAG（檢索增強生成）——一種結合即時資料庫查詢與語言模型的技術——以及記憶體壓縮。

  向量處理引擎在純量MU之上增加了向量運算路徑。XCENA報告稱每顆MX1的峰值點積吞吐量約達3 TFLOPS（兆次浮點運算／秒），涵蓋逐元素算術、歸約運算、CRC32校驗碼及向量純量運算，各MU命令佇列專為RAG向量搜尋及鍵值（KV）快取評分設計。

  ## 記憶體層次與定址模型

  每組四個MU共用一個8KB L1指令快取，每組32個MU共用一個256KB L2資料快取，再由一個128MB共享末級快取將所有叢集串接在一起。指令使用實體位址，資料則使用主機虛擬位址，位址轉換在叢集層級共用。

  XCENA採用主機與MU共用的單一虛擬位址空間，使得含大量指標的資料結構得以跨越邊界而無需重新映射，採用標準記憶體配置的現有軟體也能以最小程式碼變動遷移至CXL記憶體。CXL感知的記憶體配置器負責管理各租戶的分頁表，以隔離各應用程式的核心與其他應用程式的記憶體。

  在軟體層面，XCENA附帶一套名為PXL（Parallel Xceleration Library，平行加速函式庫）的MapReduce風格執行環境。PXL讓開發者以C、C++或Rust撰寫核心程式，定義配置一個或多個子系統的工作，並由系統自動管理工作分配與同步，將工作分散於各MU核心。

  ## 吞吐量與功耗基準測試

  XCENA報告，相較於主機透過CXL的方案，分析核心吞吐量最高提升4.7倍；相較於本地DRAM提升2倍；功耗約為主機的四分之一，能效分別達到相較CXL方案的18.7倍及相較DRAM的6.2倍。該公司表示此比較以英特爾Xeon 6767P作為參考平台，不含閒置功耗。

  ## Infinite Memory與KV快取

  Infinite Memory功能透過DRAM加NAND混合架構，將SSD容量以位元組定址CXL記憶體的形式呈現，其中DRAM作為SSD分頁的快取。固態硬碟被劃分為64KB分頁，由一個1,024條目的映射快取轉譯後備緩衝區（TLB）追蹤，未命中時由MU核心上執行的韌體填入。

  XCENA將Infinite Memory應用於LLM KV快取儲存——即模型推論期間用於儲存先前計算注意力數值的暫存緩衝區——測試配備Llama-3.1-8B模型、vLLM及LMCache推論框架，以及輝達RTX 6000 Pro GPU。在固定前綴保留於DRAM的情況下，首個Token產生時間（TTFT）為DRAM的1.13倍；移除固定後比率升至1.57倍；純SSD基線則達1.86倍。利用裝置未充分使用時機進行預取的前瞻預取機制，使延遲接近DRAM常駐效能，XCENA表示。

  ## 三星的機架級研究

  Hot Chips聯合場次的後半段轉移至三星使用MX1進行的近記憶體處理研究。三星的分析核心在於在CXL裝置內部進行運算，而非將原始資料回傳至主機，以此利用CXL互連後端DDR5頻寬268.8 GB/s與64 GB/s PCIe Gen 6 x8主機連結之間的落差。三星代表在台上表示，CXL正獲得主要超大規模業者採用，用於資料庫及AI工作負載（包括KV快取）。

  三星與XCENA描述了一套機架級參考系統，將Liqid CXL交換器與配備96GB輝達RTX Pro 6000 Blackwell顯示卡的GPU伺服器搭配使用，目標是實現20TB總記憶體容量及2.7 TB/s的整體頻寬。

  三星貢獻了NDC API，這是一套近資料運算函式庫，該公司將其描述為廠商中立，並透過開放運算計畫（OCP）旗下的彈性時間基礎架構資料中心運算（FTI DCC）倡議開放原始碼。三星透過OpenXLA與PrivateUse1調度機制整合PyTorch，使AI框架無需變更應用程式碼即可呼叫XCENA PXL函式庫。

  ## RAG向量搜尋結果

  在RAG向量搜尋方面，三星將L2 k近鄰距離運算從FAISS IVF Flat索引——一種標準近似相似度搜尋函式庫與索引方法——中卸載，因為該運算受記憶體頻寬限制。使用10顆MX1裝置針對取自Laion 5B圖像資料集的5.12億向量索引，三星報告每秒查詢量達主機CPU搭配CXL記憶體池的64倍，每焦耳查詢數則高出65倍。

  ## LLM解碼：GPU與PNM混合注意力機制

  第二項AI應用案例針對LLM解碼，採用混合注意力方案：KV分頁仍在GPU上的注意力運算繼續由GPU處理，而未命中的分頁則交由近記憶體處理（PNM）裝置處理，後者僅將計算後的注意力結果回傳，而非將完整KV分頁傳回主機。

  在10萬Token上下文長度——與文件規模推論情境相關——下，三星報告PNM池相較於由GPU從CXL載入KV快取的純GPU注意力方案，吞吐量提升3.35倍、每能耗Token數提升3.84倍，分別達到每秒17.7個Token對5.50個Token，以及每千焦耳4.31個Token對1.12個Token。該測試在兩台伺服器上以INT8精度執行LLaMA-3.1-70B模型，每台伺服器配備五顆MX1裝置及輝達RTX Pro 6000 Blackwell GPU。

  ## 產業背景

  此次聯合場次將CXL運算記憶體定位為一種替代擴充方案，專為受記憶體頻寬與容量瓶頸制約、而非算術吞吐量不足的AI推論任務提供選擇，以取代單純增加GPU數量的做法。以Liqid CXL交換器搭配RTX Pro 6000 Blackwell GPU、目標實現20TB容量與2.7 TB/s頻寬的機架級參考設計，代表了XCENA與三星向評估CXL記憶體基礎架構的客戶所提出的前瞻性系統架構。
date: "2026-08-26"
source_published: "2026-08-25T17:20:50.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Intel", "Nvidia"]
trust:
  score: 4
  reasoning: "Single source: XCENA MX1 CXL Computational Memory Device at Hot Chips 2026 with Samsung (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/xcena-mx1-cxl-computational-memory-device-at-hot-chips-2026/"
    title: "XCENA MX1 CXL Computational Memory Device at Hot Chips 2026 with Samsung"
    trust: 4
    type: primary
    published_at: "2026-08-25T17:20:50.000Z"
---
