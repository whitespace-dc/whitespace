---
title_en: "AMD EPYC Embedded 9006 Launches Simultaneously With Commercial Venice Server Chips"
title_zh: "AMD EPYC Embedded 9006「Venice」與商用伺服器晶片同步問世"
summary_en: "AMD has launched its EPYC Embedded 9006 \"Venice\" processor family concurrently with its standard EPYC 9006 commercial server chips, the first time the company has released an embedded and commercial server product simultaneously rather than staggering the embedded release by months. The new family adopts AMD's SP7 platform with Zen 6 architecture, up to 256 cores, PCIe Gen 6 connectivity, and a minimum seven-year availability commitment."
summary_zh: "AMD首度同步推出EPYC Embedded 9006「Venice」嵌入式處理器家族與標準商用EPYC 9006伺服器晶片，採Zen 6架構、最高256核心及PCIe Gen 6連接能力，並承諾至少七年供貨期。新家族全面導入SP7平台，鎖定自動測試設備、防火牆及企業儲存三大市場。"
body_en: |
  AMD has launched its EPYC Embedded 9006 "Venice" processor family at the same time as its standard EPYC 9006 commercial server chips, marking the first time AMD has released an embedded and commercial server product simultaneously rather than staggering the embedded launch by months.

  ## AMD reverses embedded launch order with Venice

  The EPYC Embedded line is a highly validated variant of AMD's server silicon, designed for equipment with long production lifespans such as network appliances, storage controllers, and semiconductor test systems. Historically, embedded chips were among the last products to receive a new microarchitecture. With the Venice generation, built on AMD's Zen 6 architecture, that order has reversed: server silicon now leads AMD's product releases and the embedded family ships alongside it, according to ServeTheHome.

  The EPYC Embedded 9006 adopts AMD's SP7 platform in full, bringing several generational advances over the prior Embedded 9005 "Turin" family, which used the SP5 socket and Zen 5c architecture manufactured at 3nm.

  ## Specifications

  Key specifications for the EPYC Embedded 9006 family, as reported by ServeTheHome:

  - **Architecture:** Zen 6 / Zen 6c
  - **Process node:** 2nm (down from 3nm in Turin)
  - **Maximum cores / threads:** 256 / 512 (up from 192 / 384)
  - **Core complex cache:** 32 + 128MB (up from 16 + 32MB)
  - **Memory:** 16-channel DDR5-8000, with support for MRDIMM (multiplexed registered dual in-line memory module) at 12,800 MT/s, up from 12-channel DDR5-6400
  - **Maximum memory capacity:** 8TB (up from 6TB)
  - **I/O:** 96 lanes of PCIe (Peripheral Component Interconnect Express) Gen 6 and CXL (Compute Express Link) 3.1
  - **Socket:** SP7
  - **Peak power envelope:** 600W (up from 500W)

  One tradeoff accompanies the platform change. The SP5 socket, used by the prior two embedded generations, supported 128 PCIe Gen 5 lanes. The SP7 socket provides 96 lanes, though each lane operates at double the per-lane bandwidth of Gen 5. Customers that make heavy use of PCIe connectivity will have fewer physical slots available, ServeTheHome noted.

  ## Long-term availability and platform continuity

  AMD is committing to a minimum seven-year availability window for EPYC Embedded 9006 chips, with support extending beyond that period, the company said. That horizon addresses how embedded customers typically operate: hardware designs run in production for years and require a stable component supply chain.

  The SP7 platform also carries a forward compatibility benefit. AMD said it will reuse the same socket for its next-generation processor family, codenamed Florence, meaning product designs built around SP7 today can be upgraded to Florence-generation chips without a full platform redesign or revalidation.

  ## Target markets: ATE, firewalls, and enterprise storage

  AMD identified three primary markets for the EPYC Embedded 9006 lineup, all described by the company as long-lived infrastructure with ties to growing AI-driven demand.

  **Automatic test equipment.** ATE refers to systems used by semiconductor and electronics firms to validate new component designs. AMD said it expects a surge in ATE demand as the industry develops and certifies hardware built around faster DDR5 memory modules, MRDIMMs, PCIe Gen 6, and CXL 3.1 — all technologies requiring new component designs and extensive validation. AMD noted it is among the first vendors to offer a server processor combining all those features; according to ServeTheHome, Intel is months away from comparable silicon and Arm-based alternatives are still ramping production.

  **Firewalls.** AMD said agentic AI systems are pushing higher network data volumes, requiring firewall appliances that can process more traffic or enforce more computationally intensive security policies. CPU workloads in modern firewall hardware remain significant even with dedicated offload accelerators, the company said.

  **Enterprise storage.** AI computing systems rely on dedicated storage appliances, and AMD is positioning the 9006 family for use in storage controllers. The generation also introduces PCIe Gen 6 support to AMD's EPYC Embedded platform for the first time. For storage systems without a PCIe switch, native Gen 6 connectivity is required to fully use first-generation PCIe Gen 6 solid-state drives, the company said.

  ## Generation comparison

  | | Embedded 9004 (Genoa) | Embedded 9005 (Turin) | Embedded 9006 (Venice) |
  |---|---|---|---|
  | Microarchitecture | Zen 4 | Zen 5c | Zen 6 / Zen 6c |
  | Process node | 5nm | 3nm | 2nm |
  | Max cores / threads | 128 / 256 | 192 / 384 | 256 / 512 |
  | Core complex cache | 16 + 32MB | 16 + 32MB | 32 + 128MB |
  | Memory | 12x DDR5-4800 | 12x DDR5-6400 | 16x DDR5-8000 / MRDIMM-12800 |
  | Memory capacity | 6TB | 6TB | 8TB |
  | PCIe | Gen 5, 128 lanes | Gen 5, 128 lanes | Gen 6, 96 lanes |
  | Socket | SP5 | SP5 | SP7 |
  | Peak power | 400W | 500W | 600W |

  ## What the launch means for embedded infrastructure buyers

  The simultaneous commercial and embedded release reflects a change in how AMD is treating the embedded market within its product planning cycle. Embedded customers now receive Zen 6 silicon on the same timeline as hyperscale server buyers rather than waiting through a delayed follow-on release. The seven-year supply commitment and SP7 socket continuity with the Florence generation give platform designers a longer upgrade horizon than prior generations offered.

  The 128-core EPYC Embedded 9756 is available immediately; the remaining five processors in the family are scheduled to begin shipping in late December.
body_zh: |
  AMD同步推出EPYC Embedded 9006「Venice」處理器家族與標準EPYC 9006商用伺服器晶片，這是AMD首度同步發布嵌入式與商用伺服器產品，不再讓嵌入式版本延後數月才問世。

  ## AMD以Venice逆轉嵌入式產品發布順序

  EPYC Embedded系列是AMD伺服器晶片的高度驗證版本，專為網路設備、儲存控制器、半導體測試系統等生命週期長的設備所設計。歷來，嵌入式晶片往往是最後才導入新微架構的產品線。然而在以Zen 6架構打造的Venice世代，這個順序已然逆轉：伺服器晶片率先問市，嵌入式家族則同步出貨，據ServeTheHome報導。

  EPYC Embedded 9006全面採用AMD SP7平台，相較於前代使用SP5腳座與3奈米Zen 5c架構的Embedded 9005「Turin」家族，帶來多項世代躍進。

  ## 規格

  根據ServeTheHome報導，EPYC Embedded 9006家族主要規格如下：

  - **架構：** Zen 6 / Zen 6c
  - **製程節點：** 2奈米（較Turin的3奈米更先進）
  - **最大核心數／執行緒數：** 256 / 512（前代為192 / 384）
  - **核心複合體快取：** 32 + 128MB（前代為16 + 32MB）
  - **記憶體：** 16通道DDR5-8000，支援MRDIMM（多工暫存式雙列直插記憶體模組）至12,800 MT/s，較前代12通道DDR5-6400大幅提升
  - **最大記憶體容量：** 8TB（前代為6TB）
  - **I/O：** 96條PCIe（周邊元件互連快速匯流排）Gen 6與CXL（運算快速連結）3.1通道
  - **腳座：** SP7
  - **峰值功耗：** 600W（前代為500W）

  此次平台更換也帶來一項取捨。前兩代嵌入式產品所採用的SP5腳座支援128條PCIe Gen 5通道，SP7腳座則提供96條通道，但每條通道的頻寬是Gen 5的兩倍。對於大量仰賴PCIe連接的客戶而言，可用的實體插槽數量將因此減少，ServeTheHome指出。

  ## 長期供貨承諾與平台延續性

  AMD承諾EPYC Embedded 9006晶片至少提供七年的供貨期，支援時間更可延伸至此後，該公司表示。這個時間範圍正好契合嵌入式客戶的典型運作模式：硬體設計在生產環境中運行多年，需要穩定的零組件供應鏈。

  SP7平台亦具備前向相容優勢。AMD表示，下一代處理器家族（開發代號Florence）將沿用相同腳座，意味著目前以SP7為基礎設計的產品，日後可直接升級至Florence世代晶片，無需全面重新設計或重新驗證平台。

  ## 目標市場：ATE、防火牆與企業儲存

  AMD為EPYC Embedded 9006陣容確立了三大主要市場，均屬於與AI驅動需求成長息息相關的長壽命基礎設施。

  **自動測試設備（ATE）。** ATE泛指半導體與電子企業用於驗證新元件設計的系統。AMD預期，隨著業界開發並認證採用更快速DDR5記憶體模組、MRDIMM、PCIe Gen 6及CXL 3.1等技術的硬體，ATE需求將迎來一波大幅成長——這些技術均需要全新元件設計與大量驗證作業。AMD指出，該公司是少數率先推出同時整合上述所有功能之伺服器處理器的廠商之一；據ServeTheHome報導，英特爾距離推出同等級矽晶片尚需數月，基於Arm架構的替代方案也仍在爬坡量產階段。

  **防火牆。** AMD表示，代理式AI系統正推動更高的網路資料流量，要求防火牆設備能夠處理更大流量，或執行運算強度更高的資安政策。即便配備專用卸載加速器，現代防火牆硬體中的CPU工作負載仍相當可觀，該公司指出。

  **企業儲存。** AI運算系統仰賴專用儲存設備，AMD正積極將9006家族定位於儲存控制器應用。本世代也首度為AMD EPYC Embedded平台帶來PCIe Gen 6支援。對於未配備PCIe交換器的儲存系統而言，要充分發揮第一代PCIe Gen 6固態硬碟的效能，原生Gen 6連接能力不可或缺，該公司表示。

  ## 世代規格比較

  | | Embedded 9004（Genoa） | Embedded 9005（Turin） | Embedded 9006（Venice） |
  |---|---|---|---|
  | 微架構 | Zen 4 | Zen 5c | Zen 6 / Zen 6c |
  | 製程節點 | 5奈米 | 3奈米 | 2奈米 |
  | 最大核心數／執行緒數 | 128 / 256 | 192 / 384 | 256 / 512 |
  | 核心複合體快取 | 16 + 32MB | 16 + 32MB | 32 + 128MB |
  | 記憶體 | 12通道 DDR5-4800 | 12通道 DDR5-6400 | 16通道 DDR5-8000 / MRDIMM-12800 |
  | 記憶體容量 | 6TB | 6TB | 8TB |
  | PCIe | Gen 5，128條通道 | Gen 5，128條通道 | Gen 6，96條通道 |
  | 腳座 | SP5 | SP5 | SP7 |
  | 峰值功耗 | 400W | 500W | 600W |

  ## 此次發布對嵌入式基礎設施買家的意義

  商用與嵌入式產品同步發布，反映出AMD在產品規劃週期中對嵌入式市場定位的轉變。嵌入式客戶現在能與超大規模伺服器買家在同一時間取得Zen 6矽晶片，無需再等待延遲推出的後續版本。七年供貨承諾，以及SP7腳座與Florence世代的延續相容性，為平台設計者提供了比前幾個世代更長的升級視野。

  搭載128核心的EPYC Embedded 9756即日起正式上市；其餘五款處理器預計於十二月下旬陸續出貨。
date: "2026-11-16"
source_published: "2026-11-14T19:00:44.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-11-11-amd-launches-epyc-9006-venice-with-256-core-sp7-platform-eyes-server-cpu-market-"
region: []
vendor: ["AMD", "Intel"]
trust:
  score: 3
  reasoning: "Single source: AMD Launches EPYC Embedded 9006: Venice Gets an Early Start in Embedded (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/amd-launches-epyc-embedded-9006-venice-gets-an-early-start-in-embedded/"
    title: "AMD Launches EPYC Embedded 9006: Venice Gets an Early Start in Embedded"
    trust: 3
    type: primary
    published_at: "2026-11-14T19:00:44.000Z"
---
