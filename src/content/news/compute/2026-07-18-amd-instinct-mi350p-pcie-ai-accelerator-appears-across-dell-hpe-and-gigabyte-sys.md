---
title_en: "AMD Instinct MI350P PCIe AI Accelerator Appears Across Dell, HPE, and GIGABYTE Systems"
title_zh: "AMD MI350P PCIe AI加速卡現身Dell、HPE與技嘉伺服器系統"
summary_en: "AMD's Instinct MI350P, a PCIe-form-factor AI accelerator with 141GB of HBM3E memory and CDNA 4 architecture, has been integrated into systems from multiple major vendors and shown publicly at Dell Tech World, HPE Discover, and Computex 2026. The card positions AMD against NVIDIA's Hopper-generation H200 NVL and the newer Blackwell-generation RTX Pro 6000 Server Edition in the inference accelerator market."
summary_zh: "AMD Instinct MI350P 是一款基於 CDNA 4 架構、採 PCIe 介面的 AI 加速卡，搭載 141GB HBM3E 記憶體，已整合進 Dell、HPE 及技嘉（GIGABYTE）的多款商用伺服器系統，並在 Dell Tech World、HPE Discover 與 Computex 2026 三大展覽上相繼公開亮相。這張卡在推論加速卡市場中，直接對標輝達 Hopper 世代的 H200 NVL，以及更新的 Blackwell 世代 RTX Pro 6000 伺服器版。"
body_en: |
  ## AMD's MI350P PCIe accelerator reaches multiple vendor platforms

  AMD's Instinct MI350P, a PCIe card-form-factor AI accelerator built on the company's CDNA 4 architecture, has begun appearing in commercial server systems from Dell, HPE, and GIGABYTE, with the card shown publicly at Dell Tech World, HPE Discover, and Computex 2026 over a span of roughly two months, according to reporting by ServeTheHome.

  The MI350P carries 141GB of HBM3E (High Bandwidth Memory, third-generation extended) and operates at 600 watts in a passive-cooled PCIe CEM (Card Electromechanical) form factor — the standard add-in card format used in conventional server PCIe slots. Like NVIDIA's competing cards, the power connector is positioned on the front face opposite the I/O bracket, and the card has no video output ports.

  ## How AMD arrived at half of the MI350X

  The MI350P is derived directly from the OAM (Open Accelerator Module) form-factor MI350X, which is designed for high-density tray-based AI server configurations. According to ServeTheHome, AMD engineers recognized that the MI350X's power envelope was too large to fit within the constraints of a standard PCIe CEM card. The solution was to use approximately half the MI350X's compute, memory, and power budget, producing the MI350P. The two chips were shown side by side at Computex 2026.

  ## Spec positioning against NVIDIA H200 NVL and RTX Pro 6000 Blackwell

  The MI350P's 141GB of HBM3E places it close to, though slightly below, the NVIDIA H200 NVL's 144GB of HBM3E. The more consequential comparison, ServeTheHome argues, is against the NVIDIA RTX Pro 6000 Blackwell Server Edition, which carries 96GB of GDDR7 — a different and less bandwidth-dense memory technology — rather than HBM3E.

  The H200 NVL belongs to NVIDIA's Hopper generation, which predates hardware support for lower-precision numeric formats such as FP6 and FP4. These formats allow models to run in smaller numerical representations, reducing memory consumption per parameter and increasing the number of parameters that fit on a single card. The MI350P publishes performance figures for both FP4 and MXFP6 — a microscaling variant of FP6 that sits between FP8 and FP4 in precision. ServeTheHome notes that the RTX Pro 6000 Blackwell Server Edition does not publish FP6 numbers on its specification page, though it does support RT (ray tracing) cores for mixed compute-and-graphics workloads, an area where the MI350P and H200 NVL offer no equivalent.

  All three cards — the MI350P, H200 NVL, and RTX Pro 6000 Blackwell Server Edition — are rated at 600 watts in passive-cooled configurations.

  ## Why memory capacity and format matter for inference

  In inference deployments, where AI models respond to user queries rather than being trained from scratch, operators typically seek to maximize the number of model parameters that fit on a single card while using the most compact numeric format the model's accuracy will tolerate. A card with more memory capacity can run larger models without splitting them across multiple accelerators, which reduces latency and infrastructure complexity. Lower-precision formats such as FP4 and FP6 shrink each parameter's memory footprint further, compounding the effective capacity advantage. ServeTheHome notes that when FP4 or FP6 is used instead of FP8, operators can fit more model weight into the same physical memory.

  The RTX Pro 6000 Blackwell Server Edition's 96GB GDDR7 capacity deficit relative to HBM-based competitors represents a trade-off NVIDIA has made to avoid reliance on HBM3E, which ServeTheHome describes as heavily supply-constrained.

  ## Vendor adoption and forward momentum

  The MI350P's appearance across systems from Dell, HPE, and GIGABYTE — including the GIGABYTE G294-Z22 platform — signals that AMD has secured integration commitments from server vendors for the PCIe accelerator tier, where OAM-based systems from the same vendors would require different chassis and backplane infrastructure. ServeTheHome reports seeing MI350P-equipped systems broadly across show floors over the past several weeks, suggesting the card has moved beyond pre-production demonstration into vendor qualification and early deployment configurations.
body_zh: |
  ## AMD MI350P PCIe 加速卡進駐多家大廠平台

  根據 ServeTheHome 的報導，AMD 的 Instinct MI350P 是一款採 PCIe 卡式設計、基於 CDNA 4 架構打造的 AI 加速卡，已開始現身 Dell、HPE 及技嘉的商用伺服器系統之中。這張卡在約兩個月內先後公開亮相於 Dell Tech World、HPE Discover 以及 2026 年台北國際電腦展（Computex 2026）三大展覽。

  MI350P 搭載 141GB 的 HBM3E（高頻寬記憶體第三代延伸版），功耗設計為 600 瓦，採被動散熱的 PCIe CEM（卡片機電模組）外形規格——即傳統伺服器 PCIe 插槽所使用的標準擴充卡格式。與輝達的競品相同，電源接頭位於卡片正面、與 I/O 擋板相對的一側，且卡上沒有任何影像輸出連接埠。

  ## AMD 如何從 MI350X 衍生出 MI350P

  MI350P 直接衍生自採用 OAM（開放加速器模組）外形規格的 MI350X，後者是專為高密度托盤式 AI 伺服器配置所設計。根據 ServeTheHome 的報導，AMD 工程師發現 MI350X 的功耗範圍過大，無法符合標準 PCIe CEM 卡的限制。解決方案是取用 MI350X 約一半的運算能力、記憶體容量與功耗預算，進而推出 MI350P。這兩款晶片在 Computex 2026 上並排展示。

  ## 對照輝達 H200 NVL 與 RTX Pro 6000 Blackwell 的規格定位

  MI350P 搭載的 141GB HBM3E，與輝達 H200 NVL 的 144GB HBM3E 相近，但略低於後者。ServeTheHome 認為，更具比較意義的競品是輝達 RTX Pro 6000 Blackwell 伺服器版——該卡搭載的是 96GB GDDR7，這是一種與 HBM3E 不同、頻寬密度也較低的記憶體技術。

  H200 NVL 屬於輝達 Hopper 世代，在硬體層面並不支援較低精度的數值格式，例如 FP6 與 FP4。這些格式允許模型以更精簡的數值方式運行，降低每個參數的記憶體佔用量，進而提升單張卡所能容納的參數數量。MI350P 公布了 FP4 與 MXFP6 的效能數據——MXFP6 是 FP6 的一種微縮放（microscaling）變體，精度介於 FP8 與 FP4 之間。ServeTheHome 指出，RTX Pro 6000 Blackwell 伺服器版的規格頁面並未公布 FP6 數據，但該卡確實支援 RT（光線追蹤）核心，適用於運算與繪圖混合的工作負載——這是 MI350P 與 H200 NVL 均無法提供的功能。

  MI350P、H200 NVL 與 RTX Pro 6000 Blackwell 伺服器版三張卡，在被動散熱配置下的功耗皆為 600 瓦。

  ## 記憶體容量與數值格式對推論部署的意義

  在推論部署場景中，AI 模型負責回應使用者的查詢請求，而非從頭訓練，業者通常希望在模型精度容許的前提下，於單張卡上盡可能容納更多的模型參數，並採用最精簡的數值格式。記憶體容量較大的加速卡，可在不將模型拆分至多張加速卡的情況下運行更大的模型，進而降低延遲、簡化基礎架構。FP4、FP6 等低精度格式能進一步壓縮每個參數的記憶體佔用量，形成有效容量的複利效果。ServeTheHome 指出，當以 FP4 或 FP6 取代 FP8 時，業者可以在相同的實體記憶體中容納更多的模型權重。

  RTX Pro 6000 Blackwell 伺服器版採用 96GB GDDR7，相較於搭載 HBM 的競品存在容量差距，這是輝達為避免依賴 HBM3E 所做的取捨——ServeTheHome 形容 HBM3E 目前供應極為吃緊。

  ## 廠商採用動態與後續發展動能

  MI350P 現身於 Dell、HPE 與技嘉的系統之中——包括技嘉 G294-Z22 平台——顯示 AMD 已在 PCIe 加速卡這一層級獲得伺服器廠商的整合承諾。相較之下，若同一廠商要部署同廠 OAM 架構的加速卡系統，則需要截然不同的機箱與背板基礎架構。ServeTheHome 報導，過去數週在多個展場的展示區廣泛見到搭載 MI350P 的系統，顯示這張卡已從量產前的展示階段，正式推進至廠商認證及早期部署配置的階段。
date: "2026-07-18"
source_published: "2026-07-17T17:00:59.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Gigabyte", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: The AMD Instinct MI350P is a HBM PCIe AI Accelerator That Has Been All Over (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/the-amd-instinct-mi350p-is-a-hbm-pcie-accelerator-that-has-been-all-over/"
    title: "The AMD Instinct MI350P is a HBM PCIe AI Accelerator That Has Been All Over"
    trust: 3
    type: primary
    published_at: "2026-07-17T17:00:59.000Z"
---
