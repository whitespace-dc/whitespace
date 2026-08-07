---
title_en: "NVIDIA Weighs HBM Spec Reductions for Rubin Ultra as DRAM Shortage Set to Persist Through 2027"
title_zh: "輝達評估削減 Rubin Ultra HBM 規格，DRAM 短缺恐延至 2027 年"
summary_en: "NVIDIA is evaluating cuts to the high-bandwidth memory configuration of its Rubin Ultra GPU accelerator, according to TrendForce, as a global DRAM supply shortage is forecast to continue through 2027 and uncertainty surrounds production readiness of next-generation HBM4e memory stacks."
summary_zh: "根據集邦科技報告，輝達正評估是否調降旗下 Rubin Ultra GPU 加速器的高頻寬記憶體（HBM）規格。全球 DRAM 供應短缺預計延續至 2027 年，加上 HBM4e 量產準備工作仍有諸多不確定性，促使輝達考慮採用較低階配置方案。"
body_en: |
  NVIDIA is evaluating reductions to the high-bandwidth memory (HBM) specification of its next-generation Rubin Ultra GPU accelerator, market research firm TrendForce reported on August 4, as a global DRAM supply shortage forecast to last through 2027 and unresolved questions about HBM4e production readiness pressure the company to consider lower-tier configurations.

  Since early in the third quarter of 2026, NVIDIA has opened evaluation of alternatives to the HBM4e 12-high (12hi) baseline it had used for Rubin Ultra since 2025, according to TrendForce. The options now under parallel review include HBM4e 8hi, HBM4 12hi, and HBM4 8hi. No final specification has been selected.

  The shift affects one of the most performance-critical components of modern AI accelerators. HBM is a type of DRAM — dynamic random-access memory — stacked in multiple layers ("hi" refers to the number of die layers in a stack) directly alongside a processor to maximize data transfer speeds and memory capacity. Higher stack counts deliver more capacity per chip but require more supply of the underlying wafers.

  ## Two supply-side bottlenecks

  TrendForce identified two constraints driving NVIDIA's reassessment. First, overall DRAM supply is expected to remain tight through 2027, limiting the wafer capacity that memory manufacturers can allocate to HBM production. Second, the verification and yield-ramp process for HBM4e 12hi — the most advanced configuration in the original Rubin Ultra plan — carries unresolved uncertainties that could affect delivery timelines.

  TrendForce noted that NVIDIA's primary design objective for the Rubin Ultra generation is an increase in memory input/output (I/O) speed, with volume shipment growth as a secondary goal. If the company ultimately reduces the HBM specification, TrendForce said the adjustment would most likely come through lowering stack layer counts rather than switching memory generations entirely.

  ## I/O speed implications

  The choice between HBM4e and HBM4 carries direct performance consequences. TrendForce stated that successful verification and volume production of HBM4e would allow Rubin Ultra's memory I/O speed to reach 14–16 gigabits per second (Gbps), an upgrade from the 8–11.7 Gbps range achieved on the prior Rubin generation. A fallback to HBM4-based designs would limit the improvement to approximately 11–12 Gbps.

  In addition to I/O speed, stack layer count determines how memory capacity is distributed across a production run: fewer layers per stack allow a given wafer supply to yield more individual GPU units, while more layers increase per-chip capacity. TrendForce described this as a trade-off between total HBM capacity per GPU and the number of GPUs that can be shipped.

  ## Broader industry pattern

  The Rubin Ultra review is part of a wider pattern of DRAM specification reductions across the AI hardware supply chain. TrendForce reported that since the first half of 2026, cloud service providers (CSPs) and server original equipment manufacturers (OEMs) have been lowering RDIMM — registered dual inline memory module — capacity in their server deployments. Some CSPs are also considering reducing the HBM capacity targets in their next-generation custom AI chips, known as application-specific integrated circuits (ASICs).

  NVIDIA has already made one related adjustment: separately from Rubin Ultra, the company decided to halve the SOCAMM memory capacity in its next-generation Vera Rubin Superchip modules, citing an anticipated LPDDR5X — a type of low-power mobile DRAM — shortage continuing through 2027.

  ## Supply and pricing outlook

  TrendForce projected that HBM shipment volume, measured in bits, will grow 50–60 percent year-over-year in 2027. The firm said that growth rate will nonetheless fall short of demand expansion, keeping the market in a supply-deficit condition. Under that scenario, TrendForce expects memory suppliers to retain pricing power through 2027, and described a significant rise in HBM unit prices as an industry consensus view.

  AI chip vendors will consequently face simultaneous pressure from constrained HBM supply and higher procurement costs, TrendForce said, reinforcing the financial incentive to adopt lower-capacity configurations. Whether the final Rubin Ultra specification includes HBM4e will depend on the pace at which memory manufacturers complete validation and scale production yields for the 12hi stacks, TrendForce concluded.
body_zh: |
  市場研究機構集邦科技於 8 月 4 日發布報告指出，輝達（NVIDIA）正評估是否削減下一代 Rubin Ultra GPU 加速器的高頻寬記憶體（HBM）規格。由於全球 DRAM 供應短缺預計延續至 2027 年，加上 HBM4e 量產準備工作仍存在諸多未解問題，促使該公司考慮採用較低階的配置方案。

  集邦科技表示，自 2026 年第三季初以來，輝達已開始評估替代方案，以取代其自 2025 年起為 Rubin Ultra 設定的 HBM4e 12 層堆疊（12hi）基準規格。目前同步列入評估的選項包括 HBM4e 8hi、HBM4 12hi 及 HBM4 8hi，最終規格尚未拍板定案。

  此次調整涉及現代 AI 加速器中最關鍵的效能元件之一。HBM 是一種動態隨機存取記憶體（DRAM），以多層堆疊方式緊鄰處理器配置——「hi」代表堆疊中的晶粒層數——藉此最大化資料傳輸速度與記憶體容量。堆疊層數愈高，每顆晶片的容量愈大，但相應地也需消耗更多底層晶圓供應量。

  ## 兩大供應端瓶頸

  集邦科技指出，驅使輝達重新評估的主因有二。其一，整體 DRAM 供應預計至 2027 年前仍將持續吃緊，限制了記憶體製造商能夠挹注於 HBM 生產的晶圓產能；其二，原 Rubin Ultra 計畫中最先進的配置——HBM4e 12hi 的驗證與良率提升進程，仍存在尚待解決的不確定性，可能影響交貨時程。

  集邦科技指出，輝達在 Rubin Ultra 世代的首要設計目標是提升記憶體輸入／輸出（I/O）速度，出貨量成長則列為次要目標。集邦科技表示，若輝達最終決定調降 HBM 規格，最有可能的調整方向是降低堆疊層數，而非全面切換至不同的記憶體世代。

  ## I/O 速度影響

  HBM4e 與 HBM4 之間的選擇，對效能有直接影響。集邦科技表示，若 HBM4e 能順利完成驗證並達到量產規模，Rubin Ultra 的記憶體 I/O 速度可達每秒 14 至 16 吉位元（Gbps），相較前一代 Rubin 的每秒 8 至 11.7 Gbps 有所提升。若退而採用以 HBM4 為基礎的設計，速度提升幅度將受限，約落在每秒 11 至 12 Gbps 左右。

  除 I/O 速度之外，堆疊層數也決定了記憶體容量在整批產出中的分配方式：每個堆疊的層數愈少，相同的晶圓供應量可生產的 GPU 顆數愈多；層數愈高，則每顆晶片的容量愈大。集邦科技將此描述為每顆 GPU 的 HBM 總容量與可出貨 GPU 數量之間的取捨。

  ## 更廣泛的產業趨勢

  Rubin Ultra 的規格重新評估，是 AI 硬體供應鏈中更廣泛 DRAM 規格下調趨勢的一部分。集邦科技報告指出，自 2026 年上半年起，雲端服務供應商（CSP）及伺服器原始設備製造商（OEM）已陸續降低伺服器部署中的 RDIMM（已登錄雙列直插記憶體模組）容量。部分 CSP 也考慮削減其下一代自訂 AI 晶片——即特定應用積體電路（ASIC）——的 HBM 容量目標。

  輝達已就相關議題做出一項獨立調整：有別於 Rubin Ultra，該公司另行決定將下一代 Vera Rubin 超級晶片模組中的 SOCAMM 記憶體容量減半，原因是預期 LPDDR5X——一種低功耗行動 DRAM——的供應短缺將持續至 2027 年。

  ## 供應與價格展望

  集邦科技預測，以位元計算的 HBM 出貨量在 2027 年將較前一年成長 50 至 60%。惟該機構表示，此一成長幅度仍不足以趕上需求擴張的速度，市場將持續處於供不應求的狀態。在此情境下，集邦科技預期記憶體供應商至 2027 年仍將保有定價能力，並將 HBM 單位價格大幅上揚列為業界共識看法。

  集邦科技表示，AI 晶片供應商將因此同時承受 HBM 供應受限與採購成本攀升的雙重壓力，進一步強化採用低容量配置的財務誘因。至於 Rubin Ultra 最終規格是否納入 HBM4e，將取決於記憶體製造商完成 12hi 堆疊驗證並提升量產良率的速度，集邦科技如此總結。
date: "2026-08-08"
source_published: "2026-08-04T00:00:00.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-07-23-nvidia-vera-rubin-nvl72-enters-commercial-deployment-at-four-major-cloud-provide"
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: 《科技》DRAM供不應求至2027 NVIDIA評估下調Rubin Ultra HBM配置 (trust 3/5)."
sources:
  - url: "https://www.ctee.com.tw/news/20260804701361-430503"
    title: "《科技》DRAM供不應求至2027 NVIDIA評估下調Rubin Ultra HBM配置"
    trust: 3
    type: primary
    published_at: "2026-08-04T00:00:00.000Z"
---
