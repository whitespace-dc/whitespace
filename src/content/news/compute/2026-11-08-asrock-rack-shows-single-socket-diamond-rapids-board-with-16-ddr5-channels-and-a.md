---
title_en: "ASRock Rack Shows Single-Socket Diamond Rapids Board with 16 DDR5 Channels and All-MCIO I/O"
title_zh: "華擎機架展出 Diamond Rapids 單路主機板：16 通道 DDR5 搭配全 MCIO 擴充"
summary_en: "ASRock Rack unveiled the DMRD16-2L+ at OCP Summit 2026, a single-socket EEB motherboard for Intel's Diamond Rapids Xeon platform supporting 16 DDR5 memory channels and replacing all conventional PCIe add-in card slots with MCIO connectors."
summary_zh: "華擎機架在 OCP Summit 2026 上發表 DMRD16-2L+，這張採用英特爾 Diamond Rapids Xeon 平台的 EEB 規格單路主機板，支援 16 通道 DDR5 記憶體，並以 MCIO 連接器全面取代傳統 PCIe 擴充卡插槽，標誌著伺服器業界在擴充介面設計上的重大轉變。"
body_en: |
  ASRock Rack showed a physical motherboard for Intel's Diamond Rapids Xeon platform at OCP Summit 2026, demonstrating the processor's 16-channel DDR5 memory architecture in hardware for the first time and signaling a further shift away from traditional PCIe card slots toward cabled MCIO connectivity.

  The board, designated DMRD16-2L+, is a single-socket design in the EEB form factor, measuring 12 inches by 13 inches. It carries 16 DDR5 DIMM slots arranged in a one-DIMM-per-channel (1DPC) configuration around a single CPU socket, according to ASRock Rack.

  ## Memory options

  ASRock Rack says the board supports three DDR5 module types:

  - RDIMMs (Registered DIMMs, the standard server memory format) up to 128 GB per slot at a maximum transfer rate of 8,000 MT/s (megatransfers per second)
  - MRDIMMs (Multiplexed Registered DIMMs, a higher-bandwidth variant) up to 128 GB per slot at up to 12,800 MT/s
  - MRDIMM 2U modules up to 256 GB per slot, also rated at 12,800 MT/s

  With 16 slots populated at the highest-capacity option, the board can address up to 4 TB of DRAM per socket.

  ## I/O architecture: MCIO replaces CEM slots

  The board carries no PCIe CEM (Card Electromechanical) slots, the standard riser-based connectors used for GPUs and other add-in cards in conventional servers. All PCIe expansion is instead routed through 16 MCIO (Mini Cool Edge IO) x8 connectors. Each connector runs at PCIe 6.0 or CXL 3.0 speeds at x8 width, yielding 128 PCIe Gen 6 or CXL 3.0 lanes in total. MCIO is a small, high-density connector designed for cabled connections rather than direct card insertion.

  ASRock Rack also omitted an OCP NIC 3.0 slot, a common mezzanine connector for network interface cards in open-compute server designs. That means all PCIe and network expansion in systems using this board must be handled through the MCIO ports and the two onboard 1GbE ports.

  ## Storage and management

  Local storage is limited to a single M-key M.2 slot running PCIe 5.0 at x4 width, supporting drive lengths of 22110, 2280, and 2260 mm — formats common in enterprise NVMe SSDs.

  For out-of-band management, the board uses an ASPEED AST2700 BMC (baseboard management controller), paired with a dedicated IPMI port driven by a Realtek RTL8211F PHY. Two RJ45 1GbE ports for in-band host networking are provided by an Intel I350 controller.

  Rear panel connectivity includes two USB 3.2 Gen 1 Type-A ports and a DB15 VGA connector. Internally, the board adds a 19-pin header for two additional USB 3.2 Gen 1 ports, a separate internal video header, one COM (serial) header, and support for a 13-pin SPI TPM (Trusted Platform Module) security chip.

  The CPU socket uses a twist-lock cover rather than a standard lift-off design, a detail ASRock Rack highlighted at the show.

  ## What the design signals

  The DMRD16-2L+ makes concrete a memory architecture Intel has described for some time. With 16 channels and one DIMM slot per channel laid out around a single socket, the physical scale of Diamond Rapids' memory subsystem is visible in the board layout in a way that specification sheets do not convey.

  The absence of CEM slots is consistent with a broader trend ASRock Rack itself noted: PCIe signal integrity has grown more challenging with each generation since Ice Lake and Gen 4, and at Gen 6 speeds, cabled MCIO connections are increasingly preferred over direct card-edge interfaces. A server built around this board would route all PCIe Gen 6 and CXL 3.0 expansion through MCIO cables to a separate riser or backplane.

  ASRock Rack displayed the DMRD16-2L+ at OCP Summit 2026 without announcing pricing or availability dates.
body_zh: |
  華擎機架（ASRock Rack）在 OCP Summit 2026 上展出了英特爾 Diamond Rapids Xeon 平台的實體主機板，首度以硬體形式呈現這款處理器的 16 通道 DDR5 記憶體架構，同時也宣示伺服器業界進一步遠離傳統 PCIe 擴充卡插槽、轉向纜線式 MCIO 連接的趨勢。

  這張主機板型號為 DMRD16-2L+，採用 EEB 規格的單路設計，尺寸為 12 英寸乘以 13 英寸。根據華擎機架的說明，主機板在單一 CPU 插座周圍配置 16 個 DDR5 DIMM 插槽，採每通道單 DIMM（1DPC）的排列方式。

  ## 記憶體規格

  華擎機架表示，這張主機板支援三種 DDR5 記憶體模組類型：

  - **RDIMM**（Registered DIMM，標準伺服器記憶體規格）：每槽最高 128 GB，最高傳輸速率 8,000 MT/s（百萬次傳輸／秒）
  - **MRDIMM**（Multiplexed Registered DIMM，高頻寬變體）：每槽最高 128 GB，最高傳輸速率 12,800 MT/s
  - **MRDIMM 2U 模組**：每槽最高 256 GB，傳輸速率同為 12,800 MT/s

  若 16 個插槽全數安裝最大容量的模組，每顆處理器最多可支援 4 TB 的 DRAM 容量。

  ## 擴充介面架構：MCIO 全面取代 CEM 插槽

  這張主機板未配置任何 PCIe CEM（Card Electromechanical）插槽——即傳統伺服器中用於安裝 GPU 及其他擴充卡的標準升降卡介面。所有 PCIe 擴充功能改由 16 組 MCIO（Mini Cool Edge IO）x8 連接器引出。每組連接器以 PCIe 6.0 或 CXL 3.0 速率、x8 頻寬運作，合計提供 128 條 PCIe Gen 6 或 CXL 3.0 通道。MCIO 是一種小型高密度連接器，專為纜線連接而設計，並非直插式擴充卡介面。

  華擎機架也省略了 OCP NIC 3.0 插槽——這是開放運算伺服器設計中常見的網路介面卡中板連接介面。這意味著採用此主機板的系統，所有 PCIe 與網路擴充功能都必須透過 MCIO 連接埠，以及板載的兩個 1GbE 埠來處理。

  ## 儲存與管理

  本機儲存方面，主機板僅配備一個 M-key M.2 插槽，以 PCIe 5.0 x4 運作，支援 22110、2280 及 2260 mm 等企業級 NVMe SSD 常見的規格長度。

  帶外管理方面，主機板採用 ASPEED AST2700 BMC（底板管理控制器），搭配由 Realtek RTL8211F PHY 驅動的專用 IPMI 連接埠。帶內主機網路則由 Intel I350 控制器提供兩個 RJ45 1GbE 連接埠。

  後面板連接埠包含兩個 USB 3.2 Gen 1 Type-A 埠及一個 DB15 VGA 連接器。主機板內部另設有一個 19 針腳接頭，可擴充兩個額外的 USB 3.2 Gen 1 埠、一個獨立內部視訊接頭、一個 COM（序列）接頭，以及支援 13 針腳 SPI TPM（可信賴平台模組）安全晶片。

  CPU 插座採用旋轉鎖定式護蓋設計，而非標準的掀蓋式，華擎機架在展場上特別強調了這項細節。

  ## 此設計透露的產業走向

  DMRD16-2L+ 將英特爾長期描述的記憶體架構落實為具體硬體。16 通道、每通道單 DIMM 的插槽排列圍繞單一處理器插座展開，讓 Diamond Rapids 記憶體子系統的物理規模一目瞭然——這是規格表所無法傳達的直觀印象。

  捨棄 CEM 插槽的做法，與華擎機架自身指出的更廣泛業界趨勢相符：自 Ice Lake 與 Gen 4 以來，PCIe 訊號完整性在每個世代都愈發難以維持，到了 Gen 6 速率，纜線式 MCIO 連接愈來愈受到青睞，勝過直插式卡緣介面。採用此主機板的伺服器，所有 PCIe Gen 6 與 CXL 3.0 擴充功能都將透過 MCIO 纜線連接至獨立的升降板或背板。

  華擎機架在 OCP Summit 2026 上展出 DMRD16-2L+，目前尚未公布定價或上市時程。
date: "2026-11-08"
source_published: "2026-11-07T16:00:55.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["ASRock Rack", "Intel"]
trust:
  score: 3
  reasoning: "Single source: ASRock Rack DMRD16-2L+ Spotted with 16 DDR5 Slots for Diamond Rapids (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/asrock-rack-dmrd16-2l-plus-diamond-rapids-ocp-summit-2026/"
    title: "ASRock Rack DMRD16-2L+ Spotted with 16 DDR5 Slots for Diamond Rapids"
    trust: 3
    type: primary
    published_at: "2026-11-07T16:00:55.000Z"
---
