---
title_en: "ASRock Radeon AI Pro R9700 Delivers 382 TFLOPS FP8 in Dual-Slot Workstation Card"
title_zh: "華擎 Radeon AI Pro R9700 雙槽工作站顯示卡：FP8 達 382 TFLOPS"
summary_en: "ASRock has released the Creator Radeon AI Pro R9700, a dual-slot workstation GPU built on AMD's RDNA 4 architecture that delivers 382.7 teraflops of FP8 matrix throughput and 32GB of GDDR6 memory, entering a market where demand for high-VRAM inference hardware has driven supply pressure across the workstation GPU segment."
summary_zh: "華擎科技推出 Creator Radeon AI Pro R9700，這是一款基於 AMD RDNA 4 架構的雙槽工作站顯示卡，在 300W 功耗下提供 382.7 TFLOPS 的 FP8 矩陣算力與 32GB GDDR6 記憶體。隨著高顯存 AI 推論硬體需求急遽攀升，工作站 GPU 市場供貨吃緊、價格持續走高，這張顯示卡正是在此背景下登場。"
body_en: |
  ASRock has released the Creator Radeon AI Pro R9700, a dual-slot workstation graphics card built on AMD's RDNA 4 architecture that delivers 382.7 teraflops of FP8 matrix throughput from a 300-watt card, arriving as demand for workstation-class AI inference hardware drives supply pressure and price increases across the GPU market.

  ## Card Specifications

  The R9700 is built on AMD's Navi 48 graphics processor, a die measuring 357 square millimeters with 53.9 billion transistors. It carries 64 compute units (CUs) — AMD's basic GPU processing blocks — comprising 4,096 shading units for vector math and 128 AI accelerator cores for matrix operations. At a boost clock of 2.92GHz, the card delivers 47.8 teraflops of FP32 (single-precision floating-point) throughput and 382.7 teraflops of FP8 (8-bit floating-point) matrix throughput. AMD specifies double the FP8 figure, roughly 765 teraflops, when sparsity — a technique that skips zero-value computations in the model — is applied.

  The card carries 32GB of GDDR6 memory across a 256-bit bus, organized as sixteen 2-gigabit chips in clamshell configuration, meaning chips are mounted on both faces of the PCB. Memory runs at 20 gigabits per second per pin, yielding 640 gigabytes per second of total bandwidth. A 64MB Infinity Cache — AMD's on-die buffer designed to reduce off-chip memory traffic — is also included. The card uses a PCIe Gen 5 x16 interface.

  ## Architecture and AI Precision Formats

  AMD's RDNA 4 architecture does not implement discrete matrix math units as the company's server-oriented CDNA architecture does. Instead, it handles matrix operations through Wave Matrix Multiply-Accumulate (WMMA), running on the same CUs used for standard graphics and vector workloads. ServeTheHome's review states that RDNA 4 doubled floating-point performance and quadrupled INT8 (8-bit integer) performance relative to the previous RDNA 3 generation.

  A key addition in RDNA 4 is native FP8 support, a lower-precision numeric format that reduces memory consumed per model weight and aligns with the industry trend toward quantized AI models. The R9700 does not natively accelerate FP6 or FP4 formats but does support them by processing them at FP8 precision. ServeTheHome notes this is sufficient to run roughly 30-billion-parameter AI models using FP6 weights on the 32GB card with VRAM capacity to spare.

  ## Memory Capacity and ECC

  The 32GB memory configuration represents the ceiling of what the card's memory subsystem supports, and AMD reserves this capacity exclusively for its Radeon AI Pro professional line; consumer-tier RDNA 4 cards do not carry that amount. The R9700 nonetheless ships with less total memory than its predecessor: the previous-generation Radeon Pro W7900 carried 48GB. ServeTheHome's reviewer recounted asking AMD at its Advancing AI 2025 event why the card was capped at 32GB; AMD representatives indicated 32GB is the maximum the current configuration supports. The reviewer characterized the gap between the R9700 and AMD's MI350P server accelerator as a space that might support a higher-memory product, noting the market would likely absorb the premium.

  ECC (error-correcting code) memory support, which detects and corrects single-bit memory errors to improve system reliability, is included but only functions under Linux and only when manually enabled. ServeTheHome describes the implementation as soft ECC — enforced at the driver or firmware level rather than in dedicated hardware silicon. The review notes that ECC becomes more relevant in multi-card configurations, where a greater number of memory chips raises the statistical likelihood of a bit error.

  ## Form Factor and Design Constraints

  AMD has not produced a reference design workstation card for this generation, leaving manufacturing to board partners. According to ServeTheHome, AMD has constrained those partners to a dual-slot blower form factor — a narrow, internally-exhausting cooler configuration that ServeTheHome notes is uncommon outside the workstation segment — in order to permit multiple cards to be installed side by side in a single chassis. ASRock's implementation measures 271 x 111 x 39 mm and conforms to the PCIe CEM (Card Electromechanical) specification.

  The card's 300W total board power rating allows up to four R9700 units to be installed in a standard ATX workstation, though ServeTheHome notes such a configuration would approach the limits of a single power supply. That multi-card capability is a deliberate design target: AMD's decision to require the dual-slot blower format across its partner lineup is driven by the goal of supporting installations of up to four cards in standard workstation platforms.

  ## Market Position

  ServeTheHome places the R9700 in a market where AI inference demand has driven supply pressure and price increases hardest in the highest-VRAM tier of discrete workstation GPUs. The card fills the tier below AMD's data-center accelerator line and above consumer-class RDNA 4 cards, which lack the 32GB memory configuration.

  The Navi 48 die's intermediate size — between mid-range and high-end in die area and transistor count, according to ServeTheHome — reflects the absence of a flagship-class GPU in AMD's consumer and workstation lineup this generation. That absence is what limits the R9700 to 32GB, a step down in raw memory capacity from the 48GB W7900 it effectively follows, even as compute throughput has increased with the newer architecture.

  The R9700 is AMD's most AI-capable workstation card in the current generation, according to ServeTheHome, and the only tier in the Radeon AI Pro lineup where 32GB of VRAM is available.
body_zh: |
  華擎科技推出 Creator Radeon AI Pro R9700，這是一款基於 AMD RDNA 4 架構打造的雙槽工作站顯示卡，在 300W 功耗下即可提供 382.7 TFLOPS 的 FP8 矩陣運算效能。隨著工作站級 AI 推論硬體需求急遽升溫，整個 GPU 市場供貨吃緊、價格持續攀升，這張顯示卡正是在此背景下應運而生。

  ## 規格總覽

  R9700 採用 AMD 的 Navi 48 繪圖處理器，晶片面積達 357 平方毫米，電晶體數量高達 539 億顆。搭載 64 個計算單元（CU）——AMD GPU 的基本運算模組——其中涵蓋 4,096 個著色單元負責向量運算，以及 128 個 AI 加速器核心負責矩陣運算。在 2.92GHz 的加速時脈下，這張顯示卡可提供 47.8 TFLOPS 的 FP32（單精度浮點）運算效能，以及 382.7 TFLOPS 的 FP8（8 位元浮點）矩陣運算效能。若啟用稀疏性（sparsity）——一種跳過模型中零值運算的技術——AMD 所標示的 FP8 數字可翻倍，約達 765 TFLOPS。

  記憶體方面，R9700 配備 32GB GDDR6，透過 256 位元匯流排連接，由十六顆 2Gb 記憶體晶片以蛤殼式（clamshell）配置排列，亦即晶片分別安裝於 PCB 正反兩面。記憶體運行速度為每針腳每秒 20Gbps，總頻寬達 640GB/s。此外亦搭載 64MB Infinity Cache——AMD 用於減少對外部記憶體存取的晶片內緩衝——並採用 PCIe Gen 5 x16 介面。

  ## 架構與 AI 精度格式

  AMD 的 RDNA 4 架構並未如伺服器導向的 CDNA 架構般配備獨立的矩陣運算單元，而是透過波矩陣乘法累加（Wave Matrix Multiply-Accumulate，WMMA）執行矩陣運算，使用的是與一般圖形及向量工作負載相同的 CU。ServeTheHome 的評測指出，RDNA 4 相較前一代 RDNA 3，浮點效能翻倍，INT8（8 位元整數）效能更大幅提升至四倍。

  RDNA 4 的一項重要新增功能是原生 FP8 支援——這是一種較低精度的數值格式，可減少每個模型權重所佔用的記憶體，與業界日益普及的量化 AI 模型趨勢相符。R9700 雖不原生加速 FP6 或 FP4 格式，但可將這兩種格式以 FP8 精度進行處理。ServeTheHome 指出，這樣的能力已足以在這張 32GB 顯示卡上，以 FP6 權重執行約 300 億參數規模的 AI 模型，且仍有顯存餘裕。

  ## 記憶體容量與 ECC

  32GB 的記憶體配置是該卡記憶體子系統的上限，AMD 將此容量專屬保留給 Radeon AI Pro 專業產品線；消費級 RDNA 4 顯示卡並不具備這樣的記憶體規格。儘管如此，R9700 的記憶體總量仍不及前一代產品：上一代 Radeon Pro W7900 搭載 48GB。ServeTheHome 的評測者提及，他曾在 AMD 的 Advancing AI 2025 活動上詢問為何此卡上限為 32GB，AMD 代表回應表示 32GB 是目前配置所能支援的最大容量。該評測者認為，R9700 與 AMD MI350P 伺服器加速器之間的空間，或許足以容納一款搭載更高記憶體的產品，並指出市場大概率願意為此支付溢價。

  ECC（錯誤更正碼）記憶體支援——可偵測並修正單位元記憶體錯誤以提升系統可靠性——雖然有提供，但僅能在 Linux 下運作，且需手動啟用。ServeTheHome 將此實作定性為軟體 ECC——在驅動程式或韌體層級強制執行，而非依靠專用硬體矽晶片。評測亦指出，ECC 在多卡配置中愈加重要，因為記憶體晶片數量越多，位元錯誤發生的統計機率也隨之上升。

  ## 外觀規格與設計限制

  AMD 這一代並未推出工作站顯示卡的公版設計，製造工作全數交由板卡合作夥伴負責。據 ServeTheHome 指出，AMD 限定合作夥伴必須採用雙槽渦輪式（blower）外觀——一種向機箱內部排熱的窄型散熱設計，ServeTheHome 指出此設計在工作站市場以外並不常見——目的是讓多張顯示卡能並排安裝於同一機箱中。華擎的實作尺寸為 271 × 111 × 39 公釐，符合 PCIe CEM（卡片電氣機械）規範。

  這張卡的整板功耗為 300W，允許在標準 ATX 工作站中最多安裝四張 R9700，但 ServeTheHome 指出，這樣的配置將逼近單一電源供應器的極限。多卡安裝能力是一個明確的設計目標：AMD 要求整個合作夥伴產品線採用雙槽渦輪式外觀，正是為了在標準工作站平台上支援最多四張顯示卡並排安裝的使用情境。

  ## 市場定位

  ServeTheHome 將 R9700 置於這樣的市場背景之下：AI 推論需求對高顯存離散工作站 GPU 市場造成最強烈的供貨壓力與價格漲幅。這張顯示卡填補了 AMD 資料中心加速器產品線以下、欠缺 32GB 顯存配置的消費級 RDNA 4 顯示卡以上的市場空缺。

  Navi 48 晶片的中間定位——依 ServeTheHome 的說法，其晶片面積與電晶體數量介於中階與高階之間——反映了 AMD 消費者及工作站產品線這一代缺乏旗艦級 GPU 的現實。正是這一缺席，將 R9700 的記憶體容量限制在 32GB，使其在原始記憶體容量上較其實際繼承的 48GB W7900 退步，即便較新架構已帶來更高的運算效能。

  依 ServeTheHome 的評估，R9700 是 AMD 當前世代 AI 運算能力最強的工作站顯示卡，也是 Radeon AI Pro 產品線中唯一能提供 32GB 顯存的等級。
date: "2026-10-28"
source_published: "2026-10-26T18:07:04.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD"]
trust:
  score: 4
  reasoning: "Single source: ASRock Creator Radeon AI Pro R9700 Review: Workstation Inference, AMD Style (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/asrock-creator-radeon-ai-pro-r9700-review-workstation-inference-amd-style/"
    title: "ASRock Creator Radeon AI Pro R9700 Review: Workstation Inference, AMD Style"
    trust: 4
    type: primary
    published_at: "2026-10-26T18:07:04.000Z"
---
