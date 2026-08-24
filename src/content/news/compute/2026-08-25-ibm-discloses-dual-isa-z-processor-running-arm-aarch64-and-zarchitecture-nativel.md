---
title_en: "IBM discloses dual-ISA Z processor running Arm AArch64 and z/Architecture natively on one core"
title_zh: "IBM揭露雙ISA Z處理器，單核原生執行Arm與z架構"
summary_en: "IBM detailed at Hot Chips 2026 a future Z and LinuxONE processor built on 2-nanometer silicon that executes both z/Architecture and Arm AArch64 natively in a single core, alongside a second-generation AI inference accelerator carrying 96GB of HBM3e memory at roughly 20 times the bandwidth of its predecessor."
summary_zh: "IBM在Hot Chips 2026大會上詳細介紹未來Z與LinuxONE處理器，這款基於2奈米製程的晶片能在單一核心中原生執行z/Architecture與Arm AArch64兩種指令集；同場亦揭露第二代AI推論加速晶片，搭載96GB HBM3e記憶體，頻寬約為前代的20倍。"
body_en: |
  IBM detailed the architecture of a future IBM Z and LinuxONE processor at the Hot Chips 2026 conference that executes both its proprietary z/Architecture and Arm's AArch64 instruction sets natively in a single core, and disclosed a second-generation AI inference accelerator chip with 96 gigabytes of HBM3e memory and approximately 4 terabytes per second of memory bandwidth.

  IBM Distinguished Engineer Christian Zoellin presented both chips. The processor is built on a 2-nanometer process and carries 11 IBM Z cores running at 5.7 GHz or higher. Each core natively executes both z/Architecture, the instruction set underpinning IBM mainframes, and AArch64, the 64-bit Arm instruction set used across cloud servers and a wide range of other hardware. IBM said it implemented AArch64 in full hardware rather than through software translation or emulation.

  ## Processor architecture

  Each core carries 36 megabytes of private L2 cache, which aggregates into a virtual L3 and virtual L4 hierarchy. IBM disclosed 432MB of virtual L3 and 3.5GB of virtual L4 capacity during the live session. The design uses SMT-2, meaning each physical core runs two threads simultaneously. The chip also integrates a dedicated data processing unit (DPU) for input/output acceleration and separate on-chip blocks for AI inference, compression, cryptography, and sort operations.

  The AArch64 implementation conforms to Arm v9.3 and includes SVE and SVE2, Arm's Scalable Vector Extensions for high-throughput numerical and AI workloads. IBM said it implemented 2,792 AArch64 instructions, a count the company noted is more than twice the number of z/Architecture instructions. IBM also claims Arm SystemReady compliance, a certification indicating that standard Arm operating systems and software can run unmodified on the platform.

  ## How IBM merged two instruction sets into one core

  IBM built AArch64 support into its existing Z core microarchitecture rather than designing a separate Arm core. Branch prediction logic is shared between the two instruction sets. IBM used Arm's XML architecture descriptions to automate generation of AArch64 instruction decode logic, and extended the existing register-rename mechanism to cover AArch64's general-purpose register range. New control logic handles SVE, and new dataflows cover FP16, BFloat16, and cryptographic operations. IBM said several CISC (complex instruction set computing) capabilities in the Z core, including memory copy and clear, are reused by the AArch64 implementation.

  The two ISAs operate in different byte orders on the same core: z/Architecture uses big-endian byte ordering, while the AArch64 implementation uses little-endian, standard for Arm.

  ## Software environment

  IBM exposes Z on-chip hardware accelerators, including cryptography, GZIP compression, and the AI inference unit, as Linux platform devices when the processor runs Arm code. IBM said access latency for those accelerators from AArch64 workloads is comparable to the latency of native z/Architecture instructions accessing the same blocks. For z/Architecture (s390x) workloads, those accelerators remain accessible as CPU instructions.

  IBM uses Linux KVM (Kernel-based Virtual Machine) and OpenShift Virtualization to allow z/Architecture and AArch64 workloads to coexist on the same processor. Logical partitions can simultaneously host z/OS, s390x Linux, and ARM64 Linux. IBM said switching a thread between s390x and Arm execution takes nanoseconds.

  ## Reliability

  IBM carries its mainframe reliability targets into the new processor. The company said it targets 99.999999% availability, supported by error checking across memory arrays, dataflows, and control logic; transparent recovery from transient faults; core sparing for persistent faults; concurrent repair; and RAIM memory protection.

  ## Second-generation AI inference accelerator

  The second chip IBM presented is a next-generation AI inference accelerator. It carries 16 active AI cores plus one redundant core for fault tolerance, a feature IBM highlighted as unusual for AI hardware. The chip supports FP4 and MXFP4 numeric formats, low-precision floating-point types designed to increase inference throughput; IBM said the chip delivers up to four times the TOPS (tera-operations per second) of the current generation.

  The accelerator includes 96 gigabytes of HBM3e (High Bandwidth Memory, third-generation extended) running at approximately 4 terabytes per second, which IBM said is roughly 20 times the bandwidth of the current generation. It connects to the Z processor via PCIe Gen 6, which IBM described as a low-latency peer-to-peer interface.

  On security, IBM said the accelerator supports confidential computing, protecting AI models and data at rest, in transit, and in use, including quantum-safe cryptography. It also incorporates secure boot and on-chip cryptographic hardware, with a firmware stack IBM described as tuned for availability and serviceability within IBM Z operational environments.

  ## Significance

  IBM noted that approximately 70% of global transaction volume runs over IBM Z mainframes. The company positioned the dual-ISA design as a way to bring Arm ecosystem software onto the Z platform alongside existing z/Architecture and z/OS workloads, which it said opens a new class of applications for IBM Z mainframes.

  IBM said the rationale for implementing a single dual-ISA core rather than pairing separate Z and Arm cores was to extend Z's reliability engineering to Arm workloads and to allow Arm software direct low-latency access to Z hardware accelerators. IBM did not disclose a commercial availability date for either chip during the Hot Chips 2026 presentation.
body_zh: |
  IBM在Hot Chips 2026大會上詳細說明了未來IBM Z與LinuxONE處理器的架構。這款處理器在單一核心中原生執行自家專有的z/Architecture以及Arm的AArch64指令集，同時也揭露了第二代AI推論加速晶片，搭載96GB HBM3e記憶體，記憶體頻寬約達每秒4TB。

  IBM傑出工程師Christian Zoellin在現場發表了兩款晶片。處理器採用2奈米製程，內含11個IBM Z核心，運行頻率達5.7 GHz或更高。每個核心原生支援z/Architecture（IBM大型主機所採用的指令集）以及AArch64（廣泛應用於雲端伺服器與各類硬體的64位元Arm指令集）。IBM表示，AArch64完全以硬體方式實作，並非透過軟體轉譯或模擬。

  ## 處理器架構

  每個核心配備36MB的私有L2快取，並匯聚成虛擬L3與虛擬L4快取階層。IBM在現場發表會上揭露了432MB的虛擬L3容量與3.5GB的虛擬L4容量。設計採用SMT-2架構，即每個實體核心可同時執行兩條執行緒。晶片另整合了專屬資料處理單元（DPU）以加速輸入／輸出，並設有獨立的片上區塊，分別負責AI推論、資料壓縮、加密及排序運算。

  AArch64實作符合Arm v9.3規範，並支援SVE與SVE2（Arm的可擴充向量擴充功能，專為高吞吐量數值運算與AI工作負載設計）。IBM表示，此次共實作了2,792條AArch64指令，據IBM指出，這個數字是z/Architecture指令數量的兩倍以上。IBM亦宣稱符合Arm SystemReady認證，代表標準Arm作業系統及軟體無需修改即可在此平台上執行。

  ## IBM如何將兩種指令集整合至單一核心

  IBM將AArch64支援直接建置於現有的Z核心微架構中，而非另行設計一顆獨立的Arm核心。分支預測邏輯由兩種指令集共用。IBM運用Arm的XML架構描述檔，自動化生成AArch64指令解碼邏輯，並擴充現有的暫存器重新命名機制，以涵蓋AArch64的通用暫存器範圍。新增的控制邏輯負責處理SVE，而新的資料流則支援FP16、BFloat16及加密運算。IBM表示，Z核心中原有的多項CISC（複雜指令集運算）能力，包括記憶體複製與清除功能，均被AArch64實作所沿用。

  兩種ISA在同一核心上採用不同的位元組順序：z/Architecture使用大端序（big-endian），而AArch64實作則採用Arm的標準小端序（little-endian）。

  ## 軟體環境

  當處理器執行Arm程式碼時，IBM將Z片上硬體加速器（包括加密、GZIP壓縮及AI推論單元）以Linux平台裝置的形式對外開放。IBM表示，AArch64工作負載存取這些加速器的延遲，與原生z/Architecture指令存取相同區塊的延遲相當。對於z/Architecture（s390x）工作負載而言，這些加速器仍可透過CPU指令直接存取。

  IBM使用Linux KVM（核心式虛擬機器）與OpenShift虛擬化技術，讓z/Architecture與AArch64工作負載能在同一處理器上共存。邏輯分割區可同時承載z/OS、s390x Linux及ARM64 Linux。IBM表示，執行緒在s390x與Arm執行環境之間切換僅需奈秒級時間。

  ## 可靠性

  IBM將大型主機的可靠性目標延伸至新款處理器。IBM表示，目標是達到99.999999%的可用性，並透過以下機制加以支撐：記憶體陣列、資料流及控制邏輯的錯誤檢查；暫態故障的透明恢復；針對持續性故障的核心備援；並行修復；以及RAIM記憶體保護。

  ## 第二代AI推論加速晶片

  IBM發表的第二款晶片是新一代AI推論加速器。它配備16個主動AI核心，另加一個備援核心以實現容錯——IBM特別強調，此設計在AI硬體中並不常見。此晶片支援FP4與MXFP4數值格式，這些低精度浮點類型旨在提升推論吞吐量；IBM表示，該晶片的TOPS（每秒兆次運算）效能可達現行世代的四倍。

  加速器搭載96GB HBM3e（高頻寬記憶體第三代增強版），記憶體頻寬約達每秒4TB，IBM表示這約是現行世代的20倍。它透過PCIe Gen 6與Z處理器相連，IBM將此形容為低延遲點對點介面。

  在安全性方面，IBM表示加速器支援機密運算，能保護靜態、傳輸中及使用中的AI模型與資料，並支援量子安全加密。此外，它還整合了安全啟動及片上加密硬體，韌體堆疊經IBM調校，以符合IBM Z作業環境的可用性與可維護性需求。

  ## 市場意義

  IBM指出，全球約70%的交易量透過IBM Z大型主機處理。該公司將雙ISA設計定位為一種途徑，讓Arm生態系的軟體能與現有的z/Architecture及z/OS工作負載共存於Z平台之上，並表示這為IBM Z大型主機開創了一類全新的應用場景。

  IBM說明採用單一雙ISA核心、而非將獨立Z核心與Arm核心配對的理由，是為了將Z的可靠性工程延伸至Arm工作負載，並讓Arm軟體能直接以低延遲方式存取Z硬體加速器。IBM在Hot Chips 2026發表會上並未揭露這兩款晶片的商業上市時程。
date: "2026-08-25"
source_published: "2026-08-24T16:47:50.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: IBM Z and LinuxONE Dual-ISA Processor and AI Acceleration at Hot Chips 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/ibm-z-and-linuxone-dual-isa-processor-and-ai-acceleration-at-hot-chips-2026/"
    title: "IBM Z and LinuxONE Dual-ISA Processor and AI Acceleration at Hot Chips 2026"
    trust: 3
    type: primary
    published_at: "2026-08-24T16:47:50.000Z"
---
