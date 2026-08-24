---
title_en: "Intel details Wildcat Lake at Hot Chips 2026, its first budget chiplet CPU using UCIe"
title_zh: "Intel Wildcat Lake 詳解：首款採用 UCIe 的平價小晶片 CPU"
summary_en: "Intel used Hot Chips 2026 to detail the architecture of its Core Series 3 chip, codenamed Wildcat Lake — the company's first high-volume, low-cost chiplet-based processor, distinguished by its use of UCIe die-to-die interconnect on organic multi-chip packaging rather than Intel's proprietary Foveros technology."
summary_zh: "Intel 在 Hot Chips 2026 上詳細說明了代號 Wildcat Lake 的 Core Series 3 處理器架構，這是該公司首款大量生產的低成本小晶片處理器，採用開放標準 UCIe 晶粒間互連搭配有機多晶片封裝，而非 Intel 自有的 Foveros 技術。"
body_en: |
  Intel used its presentation slot at Hot Chips 2026 to walk through the architecture of its Core Series 3 processor, codenamed Wildcat Lake — the company's first high-volume, low-cost chiplet-based CPU and its first use of the UCIe (Universal Chiplet Interconnect Express) open interconnect standard for die-to-die communication.

  Wildcat Lake serves as the budget counterpart to Intel's Core Ultra Series 3 (Panther Lake) and targets consumer, edge, and embedded device markets. Intel described the presentation as a look at the behind-the-scenes engineering tradeoffs made to hit bill-of-materials and power targets for an entry-level part while still delivering its latest CPU and GPU architectures.

  ## Architecture and process node

  Despite its budget positioning, Wildcat Lake reuses the same Panther Cove and Darkmont CPU core designs as Panther Lake, along with the Xe3 GPU architecture — a departure from the more common practice of shipping a prior-generation design into lower price tiers. Intel also brought forward platform features including Thunderbolt 4, USB4, and Wi-Fi 7.

  The chip moves from Intel 7, the process node used on the previous product in this line (Raptor Lake-U), to Intel 18A — skipping an intermediate process node generation.

  ## Packaging: UCIe and organic MCP over Foveros

  The most significant engineering decision Intel detailed was the choice of packaging. Intel's Foveros technology — used in Panther Lake — allows tightly integrated, small chiplets (dies) with a bump pitch of approximately 36 microns. Intel said Foveros offers significant flexibility and simplifies validation, but those advantages do not justify its cost for a budget product where the individual dies are already smaller.

  Instead, Wildcat Lake uses organic multi-chip packaging (MCP), with UCIe providing the physical and protocol layer for die-to-die communication. UCIe on organic substrates operates at a pitch of approximately 110 microns — lower density than advanced packaging, but sufficient for the lower data volumes the chip moves between dies. Intel said this was the key technology that made chiplet construction viable at the price point.

  Wildcat Lake uses a two-die configuration. Intel said it evaluated a fully monolithic (single-die) design but concluded that IP availability and the economics of chiplet fabrication and assembly favored the two-die MCP approach.

  The shift to organic MCP also produced a meaningfully smaller and cheaper package than Panther Lake's.

  ## Scaling down compute and I/O

  To reach its targets, Intel reduced the chip across several dimensions relative to Panther Lake:

  - Fewer P-cores (performance cores)
  - Fewer NPU (neural processing unit) engines
  - Smaller GPU with ray tracing removed; XMX matrix acceleration cores retained (Intel said it initially considered removing them but did not)
  - Reduced cache
  - Display controller scaled back, with DisplayPort UHBR (Ultra-High Bit Rate) support removed
  - Thunderbolt 4/USB4 retained but reduced to two ports
  - Fewer PCIe lanes
  - Camera PHYs removed entirely
  - Narrower DRAM (memory) bus to lower system cost for device makers

  Intel said these cuts saved approximately 15 percent of die area in the I/O chiplet compared to Panther Lake. Other elements Intel terms "globals" — blocks that require extensive validation — were left unchanged to avoid duplicating that validation work.

  Elements Intel chose to retain include dedicated power rails for the efficiency cores and GPU, which Intel identified as a significant contributor to the power efficiency of both Panther Lake and Wildcat Lake, as well as the integrated Wi-Fi 7, which reduces system cost for device makers.

  ## UCIe implementation details

  Moving to UCIe required Intel to solve problems it does not face with Foveros. Foveros uses a direct, non-packetized connection between dies; UCIe requires that data be broken into packets before transmission, which Intel said required new engineering work.

  Intel chose to run the UCIe links at 8 GT/s (gigatransfers per second). The lower rate keeps the bit error rate low enough that neither retry logic nor forward error correction — techniques that add complexity and die area — are needed. The tradeoff is that more physical lanes are required to deliver sufficient bandwidth, consuming more die space, but Intel said avoiding the complexity was the higher priority.

  Power management across the die-to-die link presented a specific challenge around display output. Budget laptops often lack panel self-refresh, meaning display data must flow across the die-to-die link nearly continuously. To allow the link to enter a low-power state, Intel buffered the display connection between dies, accumulating data and then bursting it across the link, reducing the duty cycle of the high-power active state.

  For signal integrity, Intel's power analysis team conducted extensive work and added a second LDO (low-dropout regulator) to the board as a fallback. Intel said the backup regulator proved unnecessary and can be removed in future designs.

  ## Die yield recovery

  Intel also described its yield recovery strategy — the practice of salvaging dies that do not fully pass quality screening by using them in lower-specification SKUs. Intel said approximately 29 percent of compute dies were recoverable under its current SKU lineup, and noted that recovery value depends on whether the resulting lower-spec parts correspond to products the market actually wants.

  ## Industry significance

  Wildcat Lake marks a structural shift in how Intel approaches its budget product line. Where prior generations typically recycled older architectures or process nodes at the low end, Intel has now extended its latest CPU and GPU cores, and its newest fabrication process, across price tiers using chiplet construction and an open interconnect standard. The use of UCIe — rather than a proprietary interconnect — is a first for Intel in production silicon and demonstrates a practical application of the industry standard in a high-volume consumer device.

  Intel described Wildcat Lake as part of a market coverage strategy spanning edge devices through to data center and server products, with Diamond Rapids at the high end.
body_zh: |
  Intel 在 Hot Chips 2026 上詳細說明了代號 Wildcat Lake 的 Core Series 3 處理器架構——這是該公司首款大量生產的低成本小晶片（chiplet）CPU，同時也是 Intel 首次在產品中採用開放標準 UCIe（Universal Chiplet Interconnect Express）作為晶粒間通訊互連。

  Wildcat Lake 定位為 Intel Core Ultra Series 3（Panther Lake）的平價版本，目標市場涵蓋消費性裝置、邊緣運算及嵌入式設備。Intel 在簡報中表示，此次發表旨在呈現工程團隊為了讓入門級產品達成物料清單（BOM）與功耗目標所做的幕後權衡取捨，同時仍搭載最新的 CPU 與 GPU 架構。

  ## 架構與製程節點

  儘管定位平價，Wildcat Lake 仍採用與 Panther Lake 相同的 Panther Cove 及 Darkmont CPU 核心設計，以及 Xe3 GPU 架構——這有別於業界常見的做法，即將上一代架構下放至低價位產品線。Intel 也保留了 Thunderbolt 4、USB4 及 Wi-Fi 7 等平台功能。

  在製程節點方面，本品從前一代產品（Raptor Lake-U）所採用的 Intel 7 直接跳升至 Intel 18A，跨越了中間的製程世代。

  ## 封裝：UCIe 有機多晶片封裝取代 Foveros

  Intel 詳述的最重要工程決策，在於封裝方式的選擇。Intel 的 Foveros 技術——Panther Lake 所採用的方案——可實現高度整合的小型晶粒，凸塊間距（bump pitch）約為 36 微米。Intel 表示，Foveros 靈活性高且可簡化驗證工作，但對於晶粒本身已相對較小的平價產品而言，這些優勢不足以抵銷其成本。

  因此，Wildcat Lake 改採有機多晶片封裝（MCP），並以 UCIe 作為晶粒間通訊的實體層與協定層。有機基板上的 UCIe 間距約為 110 微米，密度低於先進封裝，但對於該晶片在晶粒間移動的較低資料量而言已相當充足。Intel 表示，正是這項技術使得小晶片架構在此價位上得以可行。

  Wildcat Lake 採用雙晶粒配置。Intel 表示曾評估完整單晶片（單體）設計，但最終判定 IP 可用性及小晶片製造與組裝的經濟效益，使雙晶粒 MCP 方案更占優勢。

  改採有機 MCP 封裝，也使整體封裝尺寸明顯縮小、成本顯著下降，相較於 Panther Lake 的封裝方案更具競爭力。

  ## 縮減運算與 I/O 規格

  為達成目標，Intel 在多個面向上縮減了 Wildcat Lake 相較於 Panther Lake 的規格：

  - 減少效能核心（P 核心）數量
  - 減少神經處理器（NPU）引擎數量
  - 縮小 GPU 規模，移除光線追蹤支援；XMX 矩陣加速核心予以保留（Intel 表示原本考慮移除，最終決定保留）
  - 縮減快取容量
  - 顯示控制器規格縮減，移除 DisplayPort UHBR（超高位元率）支援
  - 保留 Thunderbolt 4／USB4，但埠數縮減為兩個
  - 減少 PCIe 通道數量
  - 完全移除鏡頭 PHY
  - 縮窄 DRAM（記憶體）匯流排寬度，以降低裝置製造商的系統成本

  Intel 表示，上述削減措施使 I/O 晶粒面積相較於 Panther Lake 節省了約 15%。至於 Intel 稱為「全域區塊」（globals）的部分——即需要大量驗證工作的功能區塊——則維持不變，以避免重複耗費驗證資源。

  Intel 選擇保留的功能，包括效能核心與 GPU 的獨立電源軌——Intel 認為這是 Panther Lake 與 Wildcat Lake 功耗效率的重要貢獻因素——以及整合式 Wi-Fi 7，後者可降低裝置製造商的系統成本。

  ## UCIe 實作細節

  導入 UCIe 要求 Intel 解決 Foveros 所不曾面對的技術難題。Foveros 在晶粒間採用直接、非封包化的連接；UCIe 則必須在傳輸前將資料切分為封包，Intel 表示這需要全新的工程開發工作。

  Intel 選擇以 8 GT/s（每秒 Giga 次傳輸）的速率運行 UCIe 連結。較低的速率可將位元錯誤率維持在足夠低的水準，因此無需重傳邏輯或前向錯誤更正（FEC）——這兩項技術都會增加設計複雜度與晶粒面積。代價是需要更多實體通道才能提供足夠的頻寬，佔用更多晶粒空間，但 Intel 表示，避免複雜度是更優先的考量。

  跨晶粒連結的電源管理，在顯示輸出方面帶來了特定挑戰。平價筆記型電腦通常缺乏面板自我刷新功能，意味著顯示資料必須幾乎持續不斷地流經晶粒間連結。為讓連結得以進入低功耗狀態，Intel 在晶粒間的顯示連接上加入了緩衝機制，先積累資料再集中突發傳輸，藉此降低高功耗主動狀態的工作週期（duty cycle）。

  在訊號完整性方面，Intel 的功耗分析團隊進行了大量評估，並在電路板上額外加入第二顆 LDO（低壓差穩壓器）作為備援。Intel 表示，備援穩壓器事後證明並無必要，未來設計中可予以移除。

  ## 晶粒良率回收

  Intel 也說明了良率回收策略——即將未能完全通過品質篩選的晶粒，用於規格較低的 SKU 產品加以再利用。Intel 表示，在目前的 SKU 產品線下，約有 29% 的運算晶粒具備回收價值，並指出回收效益取決於降規後的產品是否符合市場實際需求。

  ## 產業意義

  Wildcat Lake 標誌著 Intel 在平價產品線策略上的結構性轉變。以往世代通常以舊有架構或舊製程節點填充低價位，如今 Intel 已透過小晶片架構與開放式互連標準，將最新的 CPU 與 GPU 核心及最新製程節點延伸至各個價位層級。採用 UCIe——而非專有互連——是 Intel 在量產矽晶片中的首次實踐，也展示了這項產業標準在大量生產消費性裝置中的實際應用價值。

  Intel 將 Wildcat Lake 定位為市場覆蓋策略的一環，產品線從邊緣裝置橫跨至資料中心與伺服器產品，高端則由 Diamond Rapids 坐鎮。
date: "2026-08-25"
source_published: "2026-08-24T17:00:33.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Intel"]
trust:
  score: 3
  reasoning: "Single source: Intel Core Series 3 (Wildcat Lake) CPU at Hot Chips 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/intel-core-series-3-wildcat-lake-cpu-at-hot-chips-2026/"
    title: "Intel Core Series 3 (Wildcat Lake) CPU at Hot Chips 2026"
    trust: 3
    type: primary
    published_at: "2026-08-24T17:00:33.000Z"
---
