---
title_en: "Apple Launches Mac Mini M6 and Mac Studio M5 Ultra for Desktop AI Workloads"
title_zh: "蘋果發表 Mac Mini M6 與 Mac Studio M5 Ultra，主攻桌面 AI 推論"
summary_en: "Apple introduced the Mac Mini powered by the M6, its first 2-nanometer desktop chip, and the Mac Studio with the M5 Ultra, a quad-die system supporting up to 512 gigabytes of unified memory for local AI inference and professional compute workloads."
summary_zh: "蘋果本週發表搭載首款 2 奈米桌面晶片 M6 的 Mac Mini，以及配備四晶粒 M5 Ultra 的 Mac Studio，後者最高支援 512GB 統一記憶體，專為本地端 AI 推論與專業運算工作負載而設計。"
body_en: |
  Apple launched two new desktop computers this week: the Mac Mini, now powered by the M6, the company's first 2-nanometer (nm) desktop chip, and the Mac Studio, configured with the M5 Ultra, a quad-die system supporting up to 512 gigabytes (GB) of unified memory for local AI inference and professional compute tasks.

  ## M6: first 2nm Apple desktop chip in the Mac Mini

  The M6 chip carries a 12-core CPU divided into two super cores, four performance cores, and six efficiency cores, paired with a 12-core GPU. Each GPU core includes a Neural Accelerator. The chip also integrates a dual 16-core Neural Engine, two independent 16-core engines that Apple says can run simultaneously to accelerate model execution. Unified memory tops out at 32 GB, backed by up to 170 gigabytes per second (GB/s) of bandwidth.

  Apple claims the M6 delivers 1.2 times faster multithreaded CPU performance than the M5, nearly 30 percent more peak GPU AI compute, 10 percent more memory bandwidth, and up to two times the peak Neural Engine compute of prior generations. The Mac Mini retains the same compact form factor as its predecessor; ServeTheHome, which covered the launch, had previously designated the M4 Mac Mini the standard for compact desktops.

  ## M5 Ultra: quad-die SoC with 512GB memory capacity

  The Mac Studio's M5 Ultra is built using Apple's UltraFusion interconnect technology, which combines two dual-die M5 Max chips into a single quad-die system-on-chip (SoC). The inter-die fabric is rated above 4.4 terabytes per second (TB/s).

  The combined chip scales to a 36-core CPU with 12 super cores and 24 performance cores, an 80-core GPU with per-core Neural Accelerators, and a 32-core Neural Engine. The M5 Ultra supports up to 512 GB of unified memory, served by 1.2 TB/s of bandwidth. Apple says that bandwidth figure is 50 percent higher than the M3 Ultra. The company also claims up to 1.3 times faster multithreaded performance than the M3 Ultra, based on preproduction benchmarks.

  The M5 Ultra's storage interface uses PCIe Generation 6 (Gen 6), which Apple says exceeds the throughput of currently available M.2 solid-state drives. A lower-tier Mac Studio configuration built on the M5 Max chip is also available, with up to an 18-core CPU, 40-core GPU, and 128 GB of unified memory.

  ## Pricing and availability

  The M5 Ultra Mac Studio with 256 GB of unified memory is priced above $11,000 at launch. That compares with approximately $10,000 that ServeTheHome paid for the prior-generation M3 Ultra configuration with 512 GB. Apple has not disclosed pricing for the 512-GB M5 Ultra model, which will not be available until October; only the 256-GB version can be ordered now.

  ## On-device AI: capacity advantage and competitive context

  The M5 Ultra's large unified memory pool allows large language models (LLMs) to run entirely in local system memory, avoiding the capacity limits of discrete GPU cards. The higher 1.2 TB/s bandwidth is intended to improve tokens-per-second throughput for on-device inference. ServeTheHome previously described the M3 Ultra Mac Studio as a notable platform for local AI workloads on that basis.

  For comparison, Nvidia's GB300 Station, a workstation-class AI system priced at approximately $100,000, provides substantially higher memory bandwidth and total system memory. ServeTheHome reported running a Qwen 3.6-35B-A3B model at NVFP4 precision on the GB300 Station at more than 26,000 tokens per second at a context length of 512 — a figure that illustrates the performance gap between desktop and data-center-class AI hardware at current price points.

  The M5 Ultra Mac Studio sits well below that performance tier but also well below that price point, positioning it as a desk-side inference platform for users who need large local memory capacity without data-center-class hardware.

  Apple has not disclosed the price of the 512-GB M5 Ultra Mac Studio configuration; that figure is expected closer to the model's October availability date.
body_zh: |
  蘋果本週發表兩款新款桌上型電腦：搭載 M6 的 Mac Mini，以及配備 M5 Ultra 的 Mac Studio。M6 是蘋果首款 2 奈米（nm）桌面晶片；M5 Ultra 則是四晶粒系統，最高支援 512 GB 統一記憶體，專為本地端 AI 推論與專業運算工作負載而設計。

  ## M6：Mac Mini 搭載蘋果首款 2 奈米桌面晶片

  M6 晶片搭載 12 核心 CPU，分為兩顆超級核心、四顆效能核心與六顆效率核心，並配備 12 核心 GPU。每顆 GPU 核心均內建神經加速器（Neural Accelerator）。晶片同時整合雙組 16 核心神經引擎（Neural Engine）——兩組獨立引擎，據蘋果表示可同步運作以加速模型執行。統一記憶體最高達 32 GB，記憶體頻寬最高為每秒 170 GB（GB/s）。

  蘋果宣稱，M6 的多執行緒 CPU 效能較 M5 提升 1.2 倍、GPU AI 峰值運算能力提升近 30%、記憶體頻寬增加 10%，神經引擎峰值運算能力則最高達前代的兩倍。Mac Mini 維持與前代相同的緊湊外型；科技媒體 ServeTheHome 在報導此次發表時指出，搭載 M4 的 Mac Mini 此前已被該媒體列為緊湊型桌面電腦的業界標竿。

  ## M5 Ultra：四晶粒 SoC，最高 512 GB 記憶體容量

  Mac Studio 搭載的 M5 Ultra 採用蘋果的 UltraFusion 互連技術，將兩顆雙晶粒 M5 Max 晶片整合為單一四晶粒系統單晶片（SoC）。晶粒間互連架構的頻寬超過每秒 4.4 TB（TB/s）。

  整合後的晶片擴展至 36 核心 CPU，涵蓋 12 顆超級核心與 24 顆效能核心；GPU 達 80 核心，每顆核心均配備神經加速器；神經引擎則為 32 核心。M5 Ultra 最高支援 512 GB 統一記憶體，記憶體頻寬達每秒 1.2 TB。蘋果表示，此頻寬數字較 M3 Ultra 高出 50%。依據預量產版本的基準測試，該公司亦宣稱多執行緒效能最高較 M3 Ultra 提升 1.3 倍。

  M5 Ultra 的儲存介面採用 PCIe 第六代（Gen 6），蘋果指出其傳輸速率超越目前市售的 M.2 固態硬碟。Mac Studio 亦提供搭載 M5 Max 晶片的入門配置，最高規格為 18 核心 CPU、40 核心 GPU 及 128 GB 統一記憶體。

  ## 定價與供貨時程

  搭載 M5 Ultra 且配備 256 GB 統一記憶體的 Mac Studio，上市售價逾 11,000 美元。相較之下，ServeTheHome 先前購入搭載 M3 Ultra、配備 512 GB 記憶體的上代機型，售價約為 10,000 美元。蘋果尚未公布 512 GB M5 Ultra 機型的售價，該機型要到 10 月才會上市，目前僅開放 256 GB 版本預購。

  ## 本地端 AI：記憶體容量優勢與競爭格局

  M5 Ultra 龐大的統一記憶體池，讓大型語言模型（LLM）得以完全在本地端系統記憶體中執行，不受獨立顯示卡容量限制。每秒 1.2 TB 的較高頻寬，旨在提升本地端推論的每秒 token 生成速率。ServeTheHome 此前即以此為由，將搭載 M3 Ultra 的 Mac Studio 列為本地端 AI 工作負載的重要平台。

  相較之下，輝達（NVIDIA）的 GB300 Station 是一款售價約 10 萬美元的工作站級 AI 系統，所提供的記憶體頻寬與整體系統記憶體均遠高出許多。ServeTheHome 報導指出，在 GB300 Station 上以 NVFP4 精度執行 Qwen 3.6-35B-A3B 模型、上下文長度設為 512 時，每秒可達逾 26,000 個 token——此數字清楚呈現出，以現行價位而言，桌面級與資料中心級 AI 硬體之間的效能落差依然相當懸殊。

  M5 Ultra Mac Studio 在效能上遠不及 GB300 Station，但售價也遠低於後者，因此定位為桌旁推論平台，服務對象是那些需要大容量本地端記憶體、卻不需要資料中心等級硬體的用戶。

  蘋果尚未揭露 512 GB M5 Ultra Mac Studio 的售價，預計將在該機型 10 月正式上市前後才會公布。
date: "2026-08-27"
source_published: "2026-08-26T15:00:05.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Apple Mac Studio M5 Ultra and Mac Mini M6 Launched (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/apple-mac-studio-m5-ultra-and-mac-mini-m6-launched/"
    title: "Apple Mac Studio M5 Ultra and Mac Mini M6 Launched"
    trust: 3
    type: primary
    published_at: "2026-08-26T15:00:05.000Z"
---
