---
title_en: "AMD unveils Versal RF Series at Hot Chips 2026 with 19x DSP gain over prior gen"
title_zh: "AMD在Hot Chips 2026發表Versal RF系列，DSP效能較上一代提升19倍"
summary_en: "AMD presented the Versal RF Series adaptive system-on-chip family at Hot Chips 2026, claiming up to 19 times the DSP compute and 6.4 times the maximum sample rate of the prior generation, targeting defense, test and measurement, communications, and quantum control."
summary_zh: "AMD於Hot Chips 2026研討會發表Versal RF系列自適應系統單晶片（SoC）產品家族，聲稱數位訊號處理（DSP）運算效能最高達上一代的19倍、最高取樣率提升6.4倍，目標市場涵蓋國防、測試與量測、通訊及量子控制等領域。"
body_en: |
  AMD presented the Versal RF Series, a family of adaptive system-on-chips (SoCs) for wideband radio-frequency signal processing, at the Hot Chips 2026 symposium, claiming up to 19 times the digital signal processing (DSP) compute and 6.4 times the maximum sample rate of the prior generation.

  The new devices reach 32 giga-samples per second (GSPS) on the analog-to-digital converter (ADC) side and cover 18 gigahertz (GHz) of RF bandwidth, AMD said, compared with 5 GSPS and 6 GHz on Gen 3 parts. Peak effective DSP compute across the family tops out near 80 tera-operations per second (TOPS).

  ## Product line history

  AMD's integrated RF product line runs from the first-generation RFSoC parts introduced in 2018 through the 2023 direct frequency conversion (DFE) family, with RF bandwidth climbing from 4 GHz to 7 GHz over that period, according to AMD's presentation. The Versal RF Series marks the transition from the prior Zynq architecture to the Versal platform.

  ## Target markets and the signal-processing problem

  The series targets defense, test and measurement, communications, and quantum control applications. AMD frames the central engineering challenge as collapsing a wideband RF input, up to 18 GHz wide, into signals narrow enough for analysis, typically down to 1 MHz, while meeting size, weight, and power (SWaP) constraints at the far edge. The signal chain runs from the RF-ADC through a first-stage channelizer into the AI Engine array, then a second-stage channelizer and general compute.

  ## Architecture

  The device integrates fixed-function hard IP blocks, a processing system, and an AI Engine array. Two Arm Cortex-A72 general-purpose processor cores and a pair of Cortex-R5F real-time processor cores handle system control. Hard IP covers fast Fourier transform and inverse FFT (FFT/iFFT) operations, channelization (splitting a wideband signal into narrower sub-channels), low-density parity-check (LDPC) error-correction decoding, and a polynomial function block for filter and resampling operations.

  Memory interfaces include DDR5 and LPDDR5X. The family also incorporates UCIe (Universal Chiplet Interconnect Express) chip-to-chip links for multi-die configurations.

  ## Converter performance

  Three tile types handle data conversion, all with DC-to-18 GHz bandwidth and 14-bit resolution:

  - RF-ADC quad tile: four channels at 8 GSPS each
  - Single ADC tile: 32 GSPS on one channel
  - RF-DAC quad tile: four channels at 16 GSPS each (DAC = digital-to-analog converter)

  AMD says aggregate throughput from the ADCs into on-chip DSP reaches up to 256 GSPS, which the company equates to 4 terabits per second (Tb/s).

  ## Device family

  Four near-term devices make up the lineup, plus a UCIe-capable part:

  - VR1602: 16 ADCs at 8 GSPS each
  - VR1652: four ADCs at 32 GSPS each, the highest single-die sample rate in the family
  - VR1902: adds more DSP engines and a poly block versus the VR1602
  - VR1952: adds more DSP engines and a poly block versus the VR1652

  All devices use 14-bit converters. Peak DSP throughput across the channelizer function reaches approximately 31,104 giga-operations per second (GOPS) for the highest-end configuration, AMD said.

  ## Hard IP blocks

  AMD places fixed-function silicon where efficiency matters rather than using reconfigurable programmable logic. The FFT/iFFT hard blocks run at up to 4 GSPS in streaming mode, supporting power-of-two point sizes from 8 to 4,096, with both point size and transform direction switchable during operation. The VR16xx sub-family carries 28 such blocks; the VR19xx carries 36. AMD estimates a hard block consumes approximately 87 percent less power than an equivalent soft programmable-logic implementation.

  The second-stage channelizer blocks each run a 64-tap prototype filter at a 1 GSPS native rate, configurable as an eight-channel polyphase filter with complex or real taps. The VR16xx integrates 224 of these blocks; the VR19xx integrates up to 480, at 0.035 watts per instance.

  The LDPC decoder hard IP targets 5G New Radio (NR) and satellite link error correction. AMD says the block sustains 7.7 gigabits per second (Gb/s) at eight decoding iterations for 5G NR, 4 Gb/s for the DVB-S2 satellite broadcast standard, and 3.7 Gb/s for DVB-S2X. The 5G NR mode requires no programmable logic resources. AMD equates four LDPC decoder blocks to the capacity of a complete Virtex UltraScale+ VU13P FPGA for that decoding function.

  The poly block is exclusive to VR19xx devices. One hard block incorporates eight functions, including single- and multi-channel finite impulse response (FIR) filters, an arbitrary resampler, and a matrix multiplier, exposed through five soft IP layers.

  ## AI Engine array

  The AI Engine array provides programmable DSP compute alongside the hard IP blocks. Versal RF carries up to 126 tiles; each tile contains a very long instruction word (VLIW) processor running above 1 GHz with integrated on-tile memory. AMD says the array delivers approximately 20 percent lower power than equivalent programmable-logic implementations.

  For a 32,768-point (32K-point) FFT at 8 GSPS, AMD says combining AI Engines with programmable logic instead of using programmable logic alone reduces look-up table (LUT) usage from more than 153,000 to approximately 8,000, cuts latency from 48 microseconds to 7.5 microseconds, and lowers dynamic power by up to 30 percent.

  ## SWaP consolidation

  Size, weight, and power reduction is a stated selling point for constrained platforms. AMD says a single VR1602 or VR1652, in a 37.5 by 37.5 millimeter package, delivers the equivalent DSP compute of four Virtex UltraScale+ VU13P FPGAs along with the programmable logic and AI Engine resources of a Versal AI Core VC1702.

  ## Quantum control

  AMD presented quantum control as a target application, mapping the latency hierarchy of quantum systems from millisecond-scale error decoding and correction down to nanosecond-scale pulse generation and readout. In AMD's architecture, Versal RF sits between a host central processing unit (CPU) and graphics processing unit (GPU) compute stack and the quantum processing unit (QPU).

  AMD cited the Quantum Instrumentation Control Kit (QICK), developed in collaboration with Fermilab, Oak Ridge National Laboratory, and the U.S. Department of Energy, as an existing deployment on its RFSoC platform. QICK uses a single-chip combination of CPU, FPGA, and radio hardware for open qubit control and readout. AMD says the Versal RF extends that platform with higher bandwidth, enabling more read channel multiplexing and simpler frequency planning.
body_zh: |
  AMD於Hot Chips 2026研討會發表Versal RF系列自適應系統單晶片（SoC）產品家族，針對寬頻射頻（RF）訊號處理應用，聲稱數位訊號處理（DSP）運算效能最高達上一代的19倍，最高取樣率提升至6.4倍，目標市場涵蓋國防、測試與量測、通訊及量子控制等領域。

  新裝置在類比數位轉換器（ADC）端達到每秒320億次取樣（32 GSPS），RF頻寬涵蓋18 GHz，相較之下第三代產品僅為5 GSPS及6 GHz。整個產品系列的峰值有效DSP運算能力約達每秒80兆次運算（80 TOPS）。

  ## 產品線沿革

  AMD整合式RF產品線從2018年推出的第一代RFSoC產品起，歷經2023年的直接頻率轉換（DFE）家族，RF頻寬從4 GHz逐步提升至7 GHz。根據AMD的簡報，Versal RF系列標誌著從舊有Zynq架構正式過渡至Versal平台。

  ## 目標市場與訊號處理挑戰

  本系列產品以國防、測試與量測、通訊及量子控制應用為主要目標。AMD將核心工程挑戰定義為：在符合體積、重量與功耗（SWaP）限制的前提下，將最寬達18 GHz的寬頻RF輸入壓縮至適合分析的窄頻訊號——通常縮減至1 MHz。訊號處理鏈路由RF-ADC出發，依序通過第一級通道化器、AI Engine陣列，再經第二級通道化器，最終進入通用運算單元。

  ## 架構設計

  此裝置整合固定功能硬體IP區塊、處理系統及AI Engine陣列。兩顆Arm Cortex-A72通用處理器核心與一對Cortex-R5F即時處理器核心負責系統控制。硬體IP涵蓋快速傅立葉轉換與反向FFT（FFT/iFFT）運算、通道化（將寬頻訊號分割為較窄子頻道）、低密度奇偶校驗（LDPC）錯誤更正解碼，以及用於濾波與重新取樣運算的多項式函數區塊。

  記憶體介面支援DDR5與LPDDR5X。此系列亦整合UCIe（通用小晶片互連快速）晶片對晶片連結，以因應多晶粒組態需求。

  ## 轉換器效能

  三種晶片類型負責資料轉換，皆具備DC至18 GHz頻寬及14位元解析度：

  - RF-ADC四合一晶片：四個通道，各達8 GSPS
  - 單一ADC晶片：單一通道達32 GSPS
  - RF-DAC四合一晶片：四個通道，各達16 GSPS（DAC為數位類比轉換器）

  AMD表示，從ADC到晶片內部DSP的聚合吞吐量最高可達256 GSPS，相當於每秒4兆位元（4 Tb/s）。

  ## 裝置系列

  近期推出的產品陣容共有四款，另設有一款支援UCIe的型號：

  - VR1602：16顆ADC，各8 GSPS
  - VR1652：四顆ADC，各32 GSPS，為系列中單晶片最高取樣率
  - VR1902：相較VR1602，新增更多DSP引擎及多項式區塊
  - VR1952：相較VR1652，新增更多DSP引擎及多項式區塊

  所有裝置均採用14位元轉換器。AMD表示，最高端組態的通道化功能峰值DSP吞吐量約達31,104 GOPS（每秒十億次運算）。

  ## 硬體IP區塊

  AMD選擇在效率攸關之處採用固定功能矽晶實作，而非仰賴可重新配置的可程式化邏輯。FFT/iFFT硬體區塊在串流模式下最高可達4 GSPS，支援8至4,096點的2次方點數大小，且點數大小與轉換方向均可在運作期間切換。VR16xx子系列搭載28個此類區塊；VR19xx則搭載36個。AMD估計，硬體區塊的功耗比等效軟體可程式化邏輯實作低約87%。

  第二級通道化器區塊各以1 GSPS原生速率執行64抽頭原型濾波器，可配置為具有複數或實數抽頭的八通道多相濾波器。VR16xx整合224個此類區塊；VR19xx最多整合480個，每個實例功耗為0.035瓦。

  LDPC解碼器硬體IP以5G NR（新無線電）及衛星鏈路錯誤更正為目標。AMD表示，此區塊在5G NR模式下以八次解碼迭代維持7.7 Gb/s的處理速率，DVB-S2衛星廣播標準為4 Gb/s，DVB-S2X則為3.7 Gb/s。5G NR模式無需佔用任何可程式化邏輯資源。AMD指出，四個LDPC解碼器區塊的解碼容量，相當於一整塊Virtex UltraScale+ VU13P FPGA所能提供的該功能容量。

  多項式區塊為VR19xx裝置專屬功能。單一硬體區塊整合八項函數，包括單通道與多通道有限脈衝響應（FIR）濾波器、任意重新取樣器及矩陣乘法器，並透過五層軟體IP對外開放介面。

  ## AI Engine陣列

  AI Engine陣列在硬體IP區塊之外提供可程式化DSP運算能力。Versal RF最多搭載126個晶片（tile）；每個晶片均包含一顆運行頻率逾1 GHz的超長指令字（VLIW）處理器，並配備晶片內建記憶體。AMD表示，此陣列的功耗比等效可程式化邏輯實作低約20%。

  以8 GSPS下的32,768點（32K點）FFT為例，AMD指出，相較於單獨使用可程式化邏輯，結合AI Engine與可程式化邏輯可將查找表（LUT）用量從逾153,000個降至約8,000個，延遲從48微秒縮短至7.5微秒，動態功耗最高可降低30%。

  ## SWaP整合效益

  在受限平台上縮減體積、重量與功耗，是AMD明確強調的賣點。AMD表示，封裝尺寸為37.5×37.5毫米的單顆VR1602或VR1652，其DSP運算能力相當於四塊Virtex UltraScale+ VU13P FPGA，同時兼具Versal AI Core VC1702的可程式化邏輯與AI Engine資源。

  ## 量子控制應用

  AMD在發表會中將量子控制列為目標應用，並描繪量子系統的延遲層級架構——從毫秒級的錯誤解碼與更正，一路向下延伸至奈秒級的脈衝生成與讀出。在AMD的架構中，Versal RF介於主機CPU與GPU運算堆疊和量子處理單元（QPU）之間。

  AMD引述與費米國家實驗室（Fermilab）、橡樹嶺國家實驗室及美國能源部合作開發的量子儀器控制套件（QICK）作為實例，該套件已部署於其RFSoC平台。QICK以單晶片整合CPU、FPGA與無線電硬體，用於開放式量子位元控制與讀出。AMD表示，Versal RF藉由提供更高頻寬，擴展了該平台的能力，可支援更多讀出通道多工，並簡化頻率規劃。
date: "2026-08-26"
source_published: "2026-08-25T16:22:41.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD"]
trust:
  score: 3
  reasoning: "Single source: AMD Versal RF Series at Hot Chips 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/amd-versal-rf-series-at-hot-chips-2026/"
    title: "AMD Versal RF Series at Hot Chips 2026"
    trust: 3
    type: primary
    published_at: "2026-08-25T16:22:41.000Z"
---
