---
title_en: "Kioxia GP2 SSD Delivers Over 18 Million IOPS on PCIe 6.0 for AI Memory Expansion"
title_zh: "Kioxia GP2 SSD 突破 1,800 萬 IOPS，專攻 AI 記憶體擴充"
summary_en: "Kioxia has announced the GP2 Series SSD, reaching more than 18 million random read IOPS at a 512-byte block size over PCIe 6.0, nearly double the GP1 Series the company showed in August. Evaluation samples are expected to reach select customers by end of 2027."
summary_zh: "Kioxia 宣布推出 GP2 系列 SSD，採用 PCIe 6.0 介面，以 512 位元組區塊大小達到逾 1,800 萬隨機讀取 IOPS，效能幾乎是今年 8 月發表的 GP1 系列兩倍；評估樣品預計於 2027 年底前提供給特定客戶。"
body_en: |
  Kioxia has announced the GP2 Series SSD, a PCIe 6.0 and NVMe 2.3 (the latest revision of the Non-Volatile Memory Express storage interface standard) drive rated at more than 18 million random read IOPS at a 512-byte block size — nearly double the performance of the company's GP1 Series, which Kioxia showed publicly in August at Flash Memory Summit.

  The drive is also expected to deliver sequential read throughput of up to 28 GB/s, which the company says is sufficient to saturate a PCIe 6.0 x4 link. PCIe 6.0 is the latest generation of the Peripheral Component Interconnect Express bus, which doubles the per-lane bandwidth of PCIe 5.0.

  ## Specs and form factors

  The GP2 Series specifications as announced:

  - **Interface:** PCIe 6.0 / NVMe 2.3
  - **Flash memory:** Kioxia XL-FLASH generation 3
  - **Random read performance:** More than 18 million IOPS at 512-byte block size
  - **Expected sequential read throughput:** Up to 28 GB/s
  - **Endurance:** Up to 50 DWPD (drive writes per day)
  - **Form factors under consideration:** E1.S 9.5 mm and E3.S
  - **Cooling:** Direct liquid cooling support

  At 50 DWPD, the GP2 carries higher endurance than most capacity-focused SSDs, which typically target workloads that write data far less frequently.

  ## Role in AI infrastructure

  Kioxia positions the GP series as a memory-expansion tier for AI systems. Rather than adding high-bandwidth memory (HBM) or DRAM — both more expensive per gigabyte than NAND flash — operators can use GP-series drives to create a flash-based layer that GPUs can access directly. The tradeoff allows AI systems to work with larger datasets at lower cost, the company said.

  The drive uses Kioxia's XL-FLASH generation 3 memory, which the company describes as low-latency flash better suited to the fine-grained, random data access patterns of memory expansion than conventional triple-level cell (TLC) NAND. Kioxia claims XL-FLASH generation 3 delivers approximately 2.5 times the IOPS of its own TLC-based CM10 Series SSDs at a 512-byte block size.

  ## OCP Summit preview and roadmap

  Kioxia previewed the next-generation GP series at OCP Summit 2026, demonstrating a system running live at 20 million IOPS. The company has stated that future generations of the GP platform will target up to 100 million random read IOPS, though it did not provide a timeline for that milestone.

  ## What it means for the industry

  The GP2 announcement adds to a growing set of PCIe 6.0 storage and compute products becoming commercially visible. Flash-based memory expansion addresses a persistent constraint in AI infrastructure: the cost and physical density limits of DRAM and HBM relative to the dataset sizes modern AI workloads require. A drive platform capable of delivering DRAM-adjacent access patterns at NAND price points could shift how data center planners size GPU memory budgets.

  Kioxia said evaluation GP2 samples will be available to select customers by the end of 2027.
body_zh: |
  Kioxia 宣布推出 GP2 系列 SSD，這款採用 PCIe 6.0 與 NVMe 2.3（非揮發性記憶體表示儲存介面標準的最新版本）的硬碟，以 512 位元組區塊大小達到逾 1,800 萬隨機讀取 IOPS，幾乎是 Kioxia 今年 8 月在 Flash Memory Summit 上公開展示的 GP1 系列效能的兩倍。

  這款硬碟的循序讀取吞吐量預計最高可達 28 GB/s，Kioxia 表示此速度已足以飽和 PCIe 6.0 x4 通道的頻寬。PCIe 6.0 是周邊元件互連快速匯流排的最新世代，每通道頻寬是 PCIe 5.0 的兩倍。

  ## 規格與尺寸規格

  GP2 系列公布規格如下：

  - **介面：** PCIe 6.0 / NVMe 2.3
  - **快閃記憶體：** Kioxia XL-FLASH 第三代
  - **隨機讀取效能：** 以 512 位元組區塊大小達逾 1,800 萬 IOPS
  - **預計循序讀取吞吐量：** 最高 28 GB/s
  - **耐用度：** 最高 50 DWPD（每日磁碟機寫入次數）
  - **考慮中的尺寸規格：** E1.S 9.5 mm 與 E3.S
  - **散熱：** 支援直接液冷

  以 50 DWPD 的規格來看，GP2 的耐用度高於多數以容量為導向的 SSD——後者通常針對寫入頻率遠低於此的工作負載設計。

  ## AI 基礎架構中的角色

  Kioxia 將 GP 系列定位為 AI 系統的記憶體擴充層。有別於新增高頻寬記憶體（HBM）或 DRAM——兩者的每 GB 單價均高於 NAND 快閃記憶體——業者可透過 GP 系列硬碟建立一個以快閃記憶體為基礎的儲存層級，供 GPU 直接存取。Kioxia 表示，此一取捨方案可讓 AI 系統以更低的成本處理更大型的資料集。

  這款硬碟搭載 Kioxia XL-FLASH 第三代記憶體，Kioxia 形容其為低延遲快閃記憶體，相較於傳統三層式儲存單元（TLC）NAND，更適合記憶體擴充所需的細粒度隨機資料存取模式。Kioxia 宣稱，XL-FLASH 第三代在 512 位元組區塊大小下所達到的 IOPS，約為同公司 TLC 架構 CM10 系列 SSD 的 2.5 倍。

  ## OCP 高峰會預覽與產品藍圖

  Kioxia 在 2026 年 OCP 高峰會上預覽了下一代 GP 系列，並在現場展示了以 2,000 萬 IOPS 實際運行的系統。該公司表示，GP 平台的未來世代目標為達到最高 1 億隨機讀取 IOPS，但並未說明達成該里程碑的具體時間表。

  ## 對產業的意義

  GP2 的發表，為日益壯大的 PCIe 6.0 儲存與運算產品陣容再添一員。快閃記憶體型記憶體擴充方案直接回應了 AI 基礎架構中長期存在的痛點：相較於現代 AI 工作負載所需的資料集規模，DRAM 與 HBM 的成本及實體密度限制始終是難以突破的瓶頸。若有硬碟平台能以 NAND 的價位提供近似 DRAM 的存取模式，將可能從根本上改變資料中心規劃者調配 GPU 記憶體預算的方式。

  Kioxia 表示，GP2 評估樣品將於 2027 年底前提供給特定客戶。
date: "2026-11-28"
source_published: "2026-11-27T04:08:01.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Gigabyte"]
trust:
  score: 3
  reasoning: "Single source: Kioxia Announces GP2 Series SSD with Over 18 Million Random Read IOPS (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/kioxia-gp2-series-ssd/"
    title: "Kioxia Announces GP2 Series SSD with Over 18 Million Random Read IOPS"
    trust: 3
    type: primary
    published_at: "2026-11-27T04:08:01.000Z"
---
