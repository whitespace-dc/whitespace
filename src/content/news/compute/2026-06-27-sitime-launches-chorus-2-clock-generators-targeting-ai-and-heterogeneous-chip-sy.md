---
title_en: "SiTime launches Chorus 2 clock generators targeting AI and heterogeneous chip systems"
title_zh: "SiTime 推出 Chorus 2 時脈產生器，鎖定 AI 與異質晶片系統"
summary_en: "SiTime has begun volume production of its Chorus 2 programmable clock generators, designed to replace multiple discrete timing devices in systems that combine FPGAs, ASICs, GPUs, and CPUs on a single platform."
summary_zh: "SiTime 宣布旗下第二代可程式化時脈產生器 Chorus 2 正式進入量產，專為結合 FPGA、ASIC、GPU 與 CPU 的異質運算系統設計，以單一元件取代多顆離散計時裝置。兩款型號目前均可立即提供樣品。"
body_en: |
  SiTime has launched its Chorus 2 family of programmable clock generators into volume production, targeting data center servers, AI training clusters, and other systems that mix multiple processor types on a single board.

  The two-device lineup is designed to replace banks of discrete oscillators or clock signals with a single programmable component, consolidating timing distribution in heterogeneous computing architectures — platforms that combine chips of different types rather than relying on a uniform processor design.

  ## What Chorus 2 replaces

  In systems that mix FPGAs (field-programmable gate arrays), ASICs (application-specific integrated circuits), GPUs, and CPUs, each chip type typically requires its own clock frequency. Engineers have commonly addressed this by installing a separate timing device for each chip, adding component count and increasing power consumption. Chorus 2 is designed to handle up to eight or 12 of those discrete clock signals from a single device, depending on the model.

  Each output can be set to a different frequency or operating condition. Up to 20 custom configurations can be stored in one-time programmable memory on the device. Unused outputs can be disabled, which SiTime said reduces both power draw and electromagnetic noise.

  ## Device specifications

  The Chorus 2 launch includes two models:

  - **SiT95272**: 12 outputs, 6 mm x 6 mm 48-pin QFN package
  - **SiT95278**: 8 outputs, 5 mm x 5 mm 40-pin QFN package

  Both are available for immediate sampling, according to SiTime.

  SiTime said Chorus 2 delivers jitter — unwanted variation in signal timing — below 110 femtoseconds (one femtosecond is one quadrillionth of a second) at 156.25 MHz. The devices support PCIe Gen7 compliance; PCIe, or Peripheral Component Interconnect Express, is the dominant interconnect standard used to link processors with accelerators and storage in servers. The family also provides four independent spread spectrum clocks, a technique that distributes clock energy across a range of frequencies to reduce electromagnetic interference (EMI) across multiple timing domains on a single board.

  SiTime claimed the Chorus 2 family delivers up to twice the overall performance of competing products, with up to two times lower jitter and up to 2.5 times lower output skew.

  ## Why output skew matters

  Output skew — the timing difference between signals leaving the clock generator on different lines — is a critical metric when multiple chips must operate in synchronization. A high skew value means some chips receive their clock signal later than others, which can cause data errors on high-speed links. SiTime said Chorus 2 cuts skew variation by approximately 1.6 to 2.5 times compared with competing products.

  The devices use a low-noise coupling multiplexer design with fractional-divider frequency selection, which SiTime said allows designers to assign nearly any frequency to any output.

  ## Target applications

  SiTime identified several primary markets: AI training clusters, smart factory machine vision systems, SmartNIC (smart network interface card) networking platforms, data center servers, and GPU baseboards. The company also cited mid-tier networking equipment, industrial systems, and higher-end consumer electronics as target segments.

  A specific use case cited by SiTime is timing distribution in servers and GPU baseboards where PCIe switches and retimer ASICs — chips that restore signal integrity on high-speed links — currently require multiple separate clock sources.

  The devices are pin-to-pin compatible with other products on the market, meaning they can serve as drop-in replacements in existing board designs without requiring a full schematic redesign.

  ## Industry context

  The launch reflects a shift in how timing components are treated in semiconductor system design. As hardware architectures move toward combinations of specialized processors and accelerators — particularly in AI and high-performance computing — managing clock synchronization across components has grown more complex, according to SiTime. The company said this has driven demand for programmable clock generators that cover a wide frequency range while maintaining signal integrity, particularly as interconnect standards and data rates continue to rise.

  SiTime said both Chorus 2 models are in volume production and available for immediate sampling.
body_zh: |
  SiTime 正式推出 Chorus 2 可程式化時脈產生器系列，宣告進入量產階段，主要鎖定資料中心伺服器、AI 訓練叢集，以及在單一主機板上混用多種處理器類型的異質運算系統。

  此次推出的兩款產品，設計目的在於以單一可程式化元件，取代原本需要多顆離散振盪器或時脈訊號的架構，從而整合異質運算平台中的時序分配——所謂異質運算，指的是在系統中結合不同類型晶片，而非仰賴單一規格的處理器設計。

  ## Chorus 2 取代的對象

  在混用 FPGA（現場可程式化閘陣列）、ASIC（特殊應用積體電路）、GPU 與 CPU 的系統中，每種晶片類型通常各需一組專屬時脈頻率。工程師過去的常見做法是為每顆晶片各裝一個計時裝置，導致元件數量增加、功耗隨之上升。Chorus 2 的設計可讓單一裝置處理多達 8 或 12 組離散時脈訊號，依型號而定。

  每組輸出均可設定不同頻率或工作條件。裝置內建的一次性可程式化記憶體（OTP）最多可儲存 20 種自訂組態。未使用的輸出可停用，SiTime 表示此舉能同時降低功耗與電磁雜訊。

  ## 產品規格

  Chorus 2 此次推出兩款型號：

  - **SiT95272**：12 路輸出，6 mm × 6 mm、48 腳 QFN 封裝
  - **SiT95278**：8 路輸出，5 mm × 5 mm、40 腳 QFN 封裝

  SiTime 表示，兩款型號均可立即提供樣品。

  SiTime 指出，Chorus 2 在 156.25 MHz 下的抖動（jitter，即訊號時序的不必要變化）低於 110 飛秒（一飛秒等於一千兆分之一秒）。兩款產品均符合 PCIe Gen7 規範；PCIe（週邊元件快速互連）是伺服器中連接處理器與加速器及儲存裝置的主流互連標準。此外，該系列提供四組獨立的展頻時脈，此技術可將時脈能量分散至一定頻率範圍，以降低單一主機板上多個時序域的電磁干擾（EMI）。

  SiTime 宣稱，Chorus 2 系列的整體效能最高可達競品的兩倍，抖動最低可降至競品的二分之一，輸出偏斜最低可縮減至競品的 2.5 分之一。

  ## 輸出偏斜的重要性

  輸出偏斜——即時脈產生器從不同輸出端送出訊號的時序差異——是多顆晶片需同步運作時的關鍵指標。偏斜值過高，代表部分晶片收到時脈訊號的時間晚於其他晶片，可能在高速連結上引發資料錯誤。SiTime 表示，與競品相比，Chorus 2 的偏斜變異可縮減約 1.6 至 2.5 倍。

  這兩款產品採用低雜訊耦合多工器設計，搭配分數除頻器頻率選取機制，SiTime 表示此架構可讓設計者為任意輸出端指定幾乎任何頻率。

  ## 目標應用

  SiTime 點名的主要市場包括：AI 訓練叢集、智慧工廠機器視覺系統、SmartNIC（智慧型網路介面卡）網路平台、資料中心伺服器，以及 GPU 底板。此外，公司也將中階網路設備、工業系統與高階消費性電子列為目標市場。

  SiTime 列舉的具體應用場景之一，是在伺服器與 GPU 底板中進行時序分配——這類系統中的 PCIe 交換器與訊號再生 ASIC（負責在高速連結上恢復訊號完整性的晶片），目前往往需要多個獨立時脈來源。

  這兩款產品與市面上其他產品具備接腳對接（pin-to-pin）相容性，意即可直接作為既有電路板設計的替換品，無需重新繪製完整電路圖。

  ## 產業背景

  此次發表反映出半導體系統設計中計時元件地位轉變的趨勢。SiTime 表示，隨著硬體架構持續走向整合特化處理器與加速器——尤其是在 AI 與高效能運算領域——跨元件的時脈同步管理日趨複雜。公司指出，這促使業界對可程式化時脈產生器的需求持續增加，此類產品須能涵蓋寬廣頻率範圍並維持訊號完整性，在互連標準與資料傳輸速率不斷提升的環境下尤為關鍵。

  SiTime 表示，Chorus 2 兩款型號均已進入量產，可立即提供樣品。
date: "2026-06-27"
source_published: "2026-06-26T15:00:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: SiTime launches Chorus 2 clock generators for AI systems (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/sitime-launches-chorus-2-clock-generators-for-ai-systems"
    title: "SiTime launches Chorus 2 clock generators for AI systems"
    trust: 3
    type: primary
    published_at: "2026-06-26T15:00:00.000Z"
---
