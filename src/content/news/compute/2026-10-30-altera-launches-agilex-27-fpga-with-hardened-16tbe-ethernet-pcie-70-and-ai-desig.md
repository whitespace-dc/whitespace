---
title_en: "Altera Launches Agilex 27 FPGA with Hardened 1.6TbE Ethernet, PCIe 7.0, and AI Design Tool"
title_zh: "Altera 發表 Agilex 27：硬化 1.6TbE 乙太網、PCIe 7.0 與 AI 工具"
summary_en: "Altera has introduced the Agilex 27, the first device in its new Agilex 2X FPGA portfolio, pairing hardened 800-gigabit and 1.6-terabit Ethernet with PCIe 7.0 and a new AI-assisted design companion, QuartusIQ, that the company says can cut design creation time by up to ten times. Engineering samples are expected in the second half of 2027."
summary_zh: "Altera 發表 Agilex 2X 系列首款 FPGA Agilex 27，整合硬化 800 Gbps 及 1.6 Tbps 乙太網路介面並支援 PCIe 7.0，同步推出 AI 輔助設計工具 QuartusIQ，號稱最多可將設計建立時間縮短十倍；晶片工程樣品預計 2027 年下半年出貨。"
body_en: |
  Altera has introduced the Agilex 27 field-programmable gate array (FPGA — a chip whose logic can be reconfigured in the field after manufacture), the first member of its new Agilex 2X platform family. The device combines hardened 800-gigabit-per-second and 1.6-terabit-per-second Ethernet interfaces with support for PCIe (Peripheral Component Interconnect Express) generations 6.0 and 7.0, and ships alongside QuartusIQ, an AI-assisted design companion that Altera says reduces design creation time by as much as ten times in internal testing.

  Configurable transceivers on the Agilex 27 reach 256 gigabits per second. The chip includes memory controllers for DDR5, LPDDR4, LPDDR5X, and LPDDR6, hardware cryptography acceleration, UCIe (a chiplet interconnect standard) support, and embedded Arm Cortex-A720 and Cortex-A520 processor cores.

  ## HyperFlow data fabric

  A central new architectural element is HyperFlow, a full-chip distributed data network that Altera says can move data at multi-terabit-per-second rates across the device. HyperFlow operates on a dedicated internal network separate from the programmable logic fabric, meaning data movement does not consume soft logic resources or add routing congestion. Altera describes a representative use case: a 1.6TbE Ethernet port receives traffic through hardened I/O, HyperFlow carries it across the chip, and the programmable logic handles processing rather than transport.

  ## HyperFlex registers and performance claims

  Agilex 27 carries third-generation HyperFlex registers distributed throughout its routing fabric. Altera's Quartus Prime design software can re-time and pipeline designs through those registers without consuming additional logic resources. Altera claims the combination delivers a 1.8 times generation-over-generation improvement in performance per watt compared with the prior Agilex 7 family.

  ## Portfolio positioning

  Agilex 27 occupies the high-performance tier of the four-device Agilex 2X lineup. Below it sit the mid-range Agilex 25, the value-oriented Agilex 22 (FPGA-only), and the Agilex 23, which adds system-on-chip configuration options that integrate a processor subsystem alongside the programmable fabric.

  ## QuartusIQ AI companion

  QuartusIQ is an AI companion integrated into Altera's existing Quartus Prime design environment. The tool guides developers through compile, timing, debug, and verification stages. In internal benchmarks comparing Quartus Prime with and without QuartusIQ, Altera found design creation was up to ten times faster and the total design cycle was up to 1.5 times faster. QuartusIQ integrates with MCP and uses a bring-your-own-key arrangement for AI model access.

  ## NVIDIA workstation integration

  At NVIDIA's GTC Berlin 2026 conference, Altera and NVIDIA announced that QuartusIQ would be available on NVIDIA RTX Station systems, a Windows-based workstation platform. Under that arrangement, designers can use QuartusIQ with a locally running NVIDIA Nemotron model, keeping the design workflow on-premises.

  ## What it means for FPGA adoption

  The hardened high-speed Ethernet and HyperFlow fabric address a persistent challenge in networking FPGA deployments: routing high-bandwidth traffic through the chip without consuming the programmable resources available for user logic. By offloading data movement to dedicated silicon, Altera gives designers more of the FPGA's reconfigurable area to apply to their applications. The QuartusIQ tooling targets a separate barrier — FPGA design has historically required deep expertise in hardware description languages and timing closure, and AI-assisted tooling that abstracts those steps could widen the pool of engineers who can productively use the platform.

  QuartusIQ software is available in the current quarter, Altera said. Engineering samples of Agilex 27 hardware are expected in the second half of 2027.
body_zh: |
  Altera 正式發表現場可程式化閘陣列（FPGA，即一種可於出廠後在現場重新配置邏輯的晶片）新品 Agilex 27，成為其全新 Agilex 2X 平台家族的首款成員。這款晶片整合了硬化 800 Gbps 及 1.6 Tbps 乙太網路介面，並支援 PCIe（周邊元件互連快速匯流排）第 6 代與第 7 代規格，同步推出的 AI 輔助設計工具 QuartusIQ，據 Altera 表示，在內部測試中最多可將設計建立時間縮短十倍。

  Agilex 27 上的可配置收發器速率達每秒 256 Gb。晶片內建 DDR5、LPDDR4、LPDDR5X 及 LPDDR6 記憶體控制器、硬體密碼學加速引擎、UCIe（小晶片互連標準）支援，以及嵌入式 Arm Cortex-A720 與 Cortex-A520 處理器核心。

  ## HyperFlow 資料網路架構

  Agilex 27 的核心新架構特色是 HyperFlow——一個遍布整顆晶片的分散式資料網路，Altera 宣稱其在裝置內部的資料傳輸速率可達數個 Tb/s 等級。HyperFlow 運行於專屬的內部網路，與可程式化邏輯結構完全分離，意味著資料搬移不會消耗軟邏輯資源，亦不會增加繞線壅塞。Altera 描述了一個典型應用情境：1.6TbE 乙太網路埠透過硬化 I/O 接收流量，HyperFlow 負責在晶片內部進行資料傳遞，可程式化邏輯則專注處理資料內容，而非資料搬運本身。

  ## HyperFlex 暫存器與效能宣稱

  Agilex 27 在整個繞線結構中分散配置了第三代 HyperFlex 暫存器。Altera 的 Quartus Prime 設計軟體可透過這些暫存器對設計進行重新計時與管線化，且無需額外消耗邏輯資源。Altera 宣稱，此組合相較於上一代 Agilex 7 系列，帶來每瓦效能 1.8 倍的世代提升。

  ## 產品線定位

  Agilex 27 在 Agilex 2X 四款產品的陣容中定位於高效能等級。其下依序為中階定位的 Agilex 25、主打性價比的純 FPGA 版 Agilex 22，以及增加系統單晶片配置選項、可在可程式化結構旁整合處理器子系統的 Agilex 23。

  ## QuartusIQ AI 設計夥伴

  QuartusIQ 是整合於 Altera 現有 Quartus Prime 設計環境中的 AI 夥伴工具，引導開發者走過編譯、時序分析、除錯與驗證等各個設計階段。Altera 以有無搭載 QuartusIQ 的 Quartus Prime 進行內部基準測試，結果顯示設計建立速度最多提升十倍，整體設計周期最多加快 1.5 倍。QuartusIQ 支援 MCP 整合，並採用「自帶金鑰」機制，讓使用者自行提供存取 AI 模型所需的金鑰。

  ## 與輝達工作站的整合

  在 2026 年柏林 GTC 大會上，Altera 與輝達（NVIDIA）共同宣布，QuartusIQ 將可在輝達 RTX Station 系統上取得使用——這是一款以 Windows 為基礎的工作站平台。在此合作框架下，設計師可搭配本機執行的輝達 Nemotron 模型來使用 QuartusIQ，讓整個設計工作流程完全在本地端進行，無須將資料送往外部。

  ## 對 FPGA 普及化的意義

  硬化高速乙太網路與 HyperFlow 資料網路架構，正面回應了網路 FPGA 部署中長期存在的痛點：如何讓大頻寬流量穿越晶片，同時不消耗原本供用戶邏輯使用的可程式化資源。透過將資料搬移卸載至專用矽晶電路，Altera 讓設計者得以將更多 FPGA 可重配置面積用於實際的應用邏輯。QuartusIQ 工具則針對另一道門檻而來——FPGA 設計向來需要深厚的硬體描述語言及時序收斂專業知識，能夠抽象化這些步驟的 AI 輔助工具，有望擴大可有效運用此平台的工程師群體。

  Altera 表示，QuartusIQ 軟體已於本季上市。Agilex 27 硬體的工程樣品則預計於 2027 年下半年出貨。
date: "2026-10-30"
source_published: "2026-10-28T18:51:37.000Z"
category: "compute"
secondary_categories: ["networking"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Altera Agilex 27 is the First Agilex 2X Platform Adding 800GbE and 1.6TbE and More (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/altera-agilex-27-800gbe-1-6tbe-hyperflow/"
    title: "Altera Agilex 27 is the First Agilex 2X Platform Adding 800GbE and 1.6TbE and More"
    trust: 3
    type: primary
    published_at: "2026-10-28T18:51:37.000Z"
---
