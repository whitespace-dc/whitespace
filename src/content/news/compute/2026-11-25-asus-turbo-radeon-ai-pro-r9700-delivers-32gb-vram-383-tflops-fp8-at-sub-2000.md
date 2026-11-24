---
title_en: "ASUS Turbo Radeon AI Pro R9700 Delivers 32GB VRAM, 383 TFLOPS FP8 at Sub-$2,000"
title_zh: "華碩 Turbo Radeon AI Pro R9700：32GB 顯示記憶體、383 TFLOPS FP8，售價不到兩萬美元"
summary_en: "ASUS has released the Turbo Radeon AI Pro R9700, a sub-$2,000 dual-slot workstation graphics card built on AMD's Navi 48 GPU with 32GB of GDDR6 memory and 382.7 TFLOPS of FP8 AI inference throughput, as AMD rebrands its professional graphics lineup from Radeon Pro to Radeon AI Pro and positions the card against NVIDIA's RTX PRO Blackwell workstation series."
summary_zh: "華碩推出 Turbo Radeon AI Pro R9700 工作站顯示卡，搭載 AMD Navi 48 GPU 與 32GB GDDR6 記憶體，FP8 推論吞吐量達 382.7 TFLOPS，售價低於 2,000 美元，同時 AMD 正式將專業顯示卡產品線從 Radeon Pro 更名為 Radeon AI Pro，劍指輝達 RTX PRO Blackwell 工作站系列。"
body_en: |
  ASUS has released the Turbo Radeon AI Pro R9700, a sub-$2,000 dual-slot workstation graphics card built on AMD's Navi 48 GPU, as AMD rebrands its professional graphics lineup from Radeon Pro to Radeon AI Pro and targets the card against NVIDIA's RTX PRO Blackwell workstation series.

  The R9700 carries 32GB of GDDR6 memory and delivers 382.7 teraflops (TFLOPS) of peak matrix throughput at FP8 precision — a reduced-precision numerical format increasingly used in AI inference to fit more model weights in memory — according to a hardware review by ServeTheHome. With sparsity enabled, that throughput doubles.

  ## Hardware and Architecture

  The card is based on AMD's Navi 48 graphics processor, the top chip in the company's current RDNA 4 GPU family. The die measures 357 square millimeters and contains 53.9 billion transistors, placing it in what ServeTheHome characterized as the mid-to-high-end range; AMD did not produce a full high-end GPU in this generation.

  Navi 48 provides 64 Compute Units — the fundamental parallel processing building blocks in AMD's GPU architecture — which contain 4,096 shading units for vector math and 128 AI accelerator cores for matrix operations, the type of calculation that underlies neural network inference. The boost clock reaches 2.92 GHz. Peak vector throughput at FP32 (standard 32-bit floating-point) precision is 47.8 TFLOPS. The chip also includes 64MB of Infinity Cache, AMD's on-die high-bandwidth memory buffer. The card connects to the host system via PCIe Gen 5 x16, the latest revision of the standard expansion slot used in workstation and server motherboards.

  ## Memory

  The R9700 carries 32GB of GDDR6 across 16 chips organized in a clamshell configuration — eight chips on each side of the circuit board — on a 256-bit memory bus. Each chip runs at 20 gigabits per second, yielding 640 gigabytes per second (GB/s) of total bandwidth. Memory capacity is a primary differentiator between AMD's consumer and professional cards, ServeTheHome noted; 32GB is available only on the Radeon AI Pro line.

  Soft error-correcting code (ECC) memory — which detects and corrects single-bit errors to improve reliability in professional deployments — is supported but restricted to Linux and must be manually enabled.

  ## Thermal Design and Power

  Total board power (TBP) is rated at 300 watts. The card uses a dual-slot blower cooler with an open-backed shroud that draws intake air through vents on both sides of the card and exhausts it through the rear bracket, keeping heat out of the chassis interior. ASUS uses a dual ball bearing fan. Power is supplied through an ATX 12V-2x6 connector, rated for up to 600 watts, positioned on the rear edge of the card rather than the top to ease cable routing in multi-card builds.

  The card measures 267 by 111 by 40 millimeters (10.5 by 4.4 by 1.6 inches) and complies with PCIe Card Electromechanical (CEM) dual-slot specifications.

  ## Multi-Card Design

  AMD has structured the Radeon AI Pro lineup to support up to four cards in a single workstation, and has constrained all manufacturing partners to the dual-slot blower form factor to ensure multiple cards fit within standard workstation chassis. AMD is not offering its own reference design card for this generation, with production left to partners such as ASUS — an approach common on the consumer side but less standard for professional workstation graphics, the review noted.

  Four R9700 cards running simultaneously at 300W TBP would draw a combined 1,200 watts, which ServeTheHome said would push the limits of a single power supply.

  ## Display Outputs

  The R9700 carries four display outputs: three DisplayPort 2.1a ports and one HDMI 2.1b port, the maximum number of displays the Navi 48 GPU supports simultaneously. Combined with Display Stream Compression (DSC), the card is capable of driving displays at resolutions up to 12K, according to ASUS.

  ## Comparison to Prior Generation

  The R9700 carries less VRAM than its predecessor. AMD's previous workstation flagship, the Radeon Pro W7900, shipped with 48GB of video memory; the R9700 steps back to 32GB. ServeTheHome noted that AMD is seeking to offset this reduction through higher compute throughput enabled by RDNA 4, particularly the addition of FP8 support — a capability absent in the prior generation — and the architecture's broader alignment with industry trends toward lower-precision AI model weights.

  ## Positioning

  AMD and its partners are pricing the Radeon AI Pro R9700 below $2,000, positioning it as a more affordable workstation AI inference option relative to NVIDIA's RTX PRO Blackwell line. The card's 32GB VRAM capacity, 382.7 TFLOPS FP8 throughput, and support for four-card workstation configurations are the primary competitive differentiators AMD and ASUS are citing for local AI inference deployments.
body_zh: |
  ## 華碩 Turbo Radeon AI Pro R9700：32GB 顯示記憶體、383 TFLOPS FP8，售價不到兩千美元

  華碩正式推出 Turbo Radeon AI Pro R9700 工作站顯示卡，採用 AMD Navi 48 GPU 設計，定價低於 2,000 美元。此時 AMD 也同步將旗下專業顯示卡產品線從 Radeon Pro 更名為 Radeon AI Pro，直接將這款顯示卡定位為輝達 RTX PRO Blackwell 工作站系列的競爭對手。

  根據 ServeTheHome 的硬體評測，R9700 配備 32GB GDDR6 記憶體，FP8 精度下的矩陣運算峰值吞吐量達 382.7 TFLOPS（兆次浮點運算/秒）。FP8 是一種降低精度的數值格式，在 AI 推論應用中日益普及，可讓更多模型權重塞入記憶體中。若啟用稀疏性（sparsity）加速，吞吐量還可再翻倍。

  ## 硬體架構

  這張顯示卡以 AMD Navi 48 繪圖處理器為核心，是該公司現行 RDNA 4 GPU 家族的頂規晶片。晶片面積為 357 平方毫米，內含 539 億顆電晶體，ServeTheHome 將其歸類為中高階定位；AMD 在這一個世代並未推出完整的旗艦高階 GPU。

  Navi 48 配置 64 個運算單元（Compute Unit），這是 AMD GPU 架構中最基本的平行運算模組。每個運算單元內含 4,096 個著色器單元，負責向量運算，以及 128 個 AI 加速核心，專責矩陣運算——也就是神經網路推論的核心計算類型。Boost 時脈最高可達 2.92 GHz，FP32（標準 32 位元浮點數）精度下的峰值向量吞吐量為 47.8 TFLOPS。晶片另內建 64MB Infinity Cache，即 AMD 的片上高頻寬記憶體緩衝區。顯示卡透過 PCIe Gen 5 x16 介面與主機系統連接，這是工作站與伺服器主機板上最新一代的標準擴充插槽規格。

  ## 記憶體

  R9700 採用 16 顆 GDDR6 顆粒，以「蛤殼式」（clamshell）配置分佈於電路板兩面——正背面各八顆——共同組成 32GB 容量，並透過 256 位元記憶體匯流排傳輸。每顆顆粒的速率為每秒 20 Gbps，總頻寬合計達 640 GB/s。ServeTheHome 指出，記憶體容量是 AMD 消費級與專業顯示卡之間的核心差異：32GB 配置僅見於 Radeon AI Pro 專業產品線。

  此外，軟體 ECC（錯誤更正碼）記憶體功能雖有支援——可偵測並修正單一位元錯誤，提升專業部署環境下的可靠性——但僅限 Linux 系統使用，且須手動開啟。

  ## 散熱設計與功耗

  這張顯示卡的整板功耗（TBP）標定為 300 瓦。散熱器採用雙插槽渦輪風扇設計，開放式外殼從顯示卡兩側的通風孔吸入冷空氣，再由後端擋板排出熱氣，有效將熱量引導至機箱外部，不積蓄在機箱內。華碩選用雙滾珠軸承風扇。電源供應端採用 ATX 12V-2x6 接頭，規格上限為 600 瓦；接頭特意設計在顯示卡後緣而非頂部，以便在多卡安裝環境中更順暢地走線。

  顯示卡尺寸為 267 × 111 × 40 毫米（約 10.5 × 4.4 × 1.6 英寸），符合 PCIe 卡機構規範（CEM）雙插槽標準。

  ## 多卡擴充設計

  AMD 在規劃 Radeon AI Pro 產品線時，已預留單一工作站最多安裝四張顯示卡的擴充空間，並要求所有製造夥伴一律採用雙插槽渦輪風扇形式，確保多張顯示卡能同時裝入標準工作站機箱。值得注意的是，AMD 這個世代並未自行推出公版設計，生產工作全數交由華碩等合作夥伴負責——評測文章指出，這種模式在消費級市場雖然常見，但對專業工作站顯示卡而言並非慣例。

  若四張 R9700 同時滿載運行，合計功耗將達 1,200 瓦，ServeTheHome 認為這已逼近單一電源供應器的供電極限。

  ## 顯示輸出

  R9700 提供四組顯示輸出：三個 DisplayPort 2.1a 埠與一個 HDMI 2.1b 埠，這也是 Navi 48 GPU 所能同時驅動的最大螢幕數量上限。搭配 DSC（Display Stream Compression，顯示串流壓縮）技術，華碩表示這張顯示卡最高可驅動解析度達 12K 的顯示器。

  ## 與上一代的比較

  R9700 的顯示記憶體容量較上一代產品有所縮減。AMD 上一代專業工作站旗艦——Radeon Pro W7900——配備 48GB 顯示記憶體，而 R9700 退至 32GB。ServeTheHome 指出，AMD 試圖透過 RDNA 4 架構帶來的更高運算吞吐量來彌補這一落差，尤其是新增的 FP8 支援——上一代架構並不具備此能力——以及整體架構更貼近業界 AI 模型權重朝向低精度格式演進的趨勢。

  ## 市場定位

  AMD 及其合作夥伴將 Radeon AI Pro R9700 定價在 2,000 美元以下，主打性價比，相較輝達 RTX PRO Blackwell 系列，提供更親民的工作站 AI 推論選項。AMD 與華碩主要援引三大競爭優勢，作為本地端 AI 推論部署場景的賣點：32GB 顯示記憶體容量、382.7 TFLOPS 的 FP8 吞吐量，以及單一工作站最多支援四卡擴充的彈性。
date: "2026-11-25"
source_published: "2026-11-24T16:00:27.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 4
  reasoning: "Single source: ASUS Turbo Radeon AI PRO R9700 Review (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/asus-turbo-radeon-pro-ai-r9700-review/"
    title: "ASUS Turbo Radeon AI PRO R9700 Review"
    trust: 4
    type: primary
    published_at: "2026-11-24T16:00:27.000Z"
---
