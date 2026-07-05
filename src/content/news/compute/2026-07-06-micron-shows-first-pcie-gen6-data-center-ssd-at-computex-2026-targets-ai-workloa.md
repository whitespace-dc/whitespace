---
title_en: "Micron Shows First PCIe Gen6 Data Center SSD at Computex 2026, Targets AI Workloads"
title_zh: "美光在Computex 2026展示首款PCIe Gen6資料中心SSD，鎖定AI工作負載"
summary_en: "Micron Technology displayed the 9650, its first PCIe Generation 6 enterprise solid-state drive, at Computex 2026, rating the drive at 28 GB/s sequential read and 5.5 million random read IOPS and positioning it for AI inference and training deployments."
summary_zh: "美光科技（Micron Technology）於Computex 2026展出旗下首款PCIe第六代企業級固態硬碟9650，循序讀取速度高達28 GB/s、隨機讀取達550萬IOPS，專為AI推論與訓練應用場景所設計。"
body_en: |
  Micron Technology displayed the 9650, its first PCIe Generation 6 (PCIe Gen6) enterprise solid-state drive (SSD), at Computex 2026, citing sequential read performance of up to 28 gigabytes per second (GB/s) — sufficient to saturate a PCIe Gen6 x4 host interface at the rated speed — and up to 5.5 million random read input/output operations per second (IOPS).

  The 9650, which Micron first announced last year, marks the company's initial entry into the sixth generation of the PCIe interconnect standard. Sequential read performance is roughly double that of Micron's current Gen5 9550 series, the company said. Write performance gains are more modest: sequential write is rated at 14 GB/s and random write at 900,000 IOPS.

  ## Performance targets and capacity

  Micron is positioning the 9650 squarely for AI inference and training workloads, where storage I/O bandwidth has become an increasing bottleneck as newer graphics processing units (GPUs) process model weights at higher rates. The company said it expects AI infrastructure operators to be the first and largest customers for PCIe Gen6 SSDs.

  The drive ships in two variants: a read-optimized PRO model in capacities up to 30.72 terabytes (TB), and a mixed-workload MAX model in capacities up to 25.6 TB.

  ## Liquid cooling becomes a requirement

  The smallest available form factor, the E1.S — a compact sled-style design used in high-density server enclosures — will be the first Micron enterprise SSD the company describes as liquid-cooling "optimized" rather than merely liquid-cooling "compatible." In practice, Micron said, direct liquid cooling is effectively required rather than optional for this configuration. The company's published performance figures assume a 25-watt power envelope, reflecting the thermal load that high-end server drives at this performance tier generate. Micron said the E1.S is designed for pairing with high-performance GPU server environments, where liquid cooling has similarly become a near-universal requirement.

  ## Controller and NAND

  Internally, the 9650 uses Micron's new PCIe Gen6 controller paired with the company's ninth-generation (G9) triple-level cell (TLC) NAND flash memory running at 3,600 megatransfers per second (MT/s). Micron said G9 NAND is already deployed in other products, and that the performance gains in the 9650 relative to its Gen5 predecessors derive primarily from the new controller rather than the NAND itself.

  ## Production ahead of platform availability

  Micron said mass production of the 9650 has already begun. No live demonstration was staged at Computex, however, because no shipping server platform with PCIe Gen6 host connectivity is yet publicly available. ServeTheHome reported that NVIDIA and AMD appear to be targeting 2027 for PCIe Gen6 server platform launches, while Intel's Xeon 7 Diamond Rapids is on a separate timeline. A number of hyperscale server designs and platforms based on Arm's AGI central processing unit (CPU) are also expected to arrive in coming quarters.

  The result is a gap in which production-ready 9650 drives will precede the server hardware required to operate them at full specification — a constraint that limits near-term deployment even as Micron begins volume shipments.
body_zh: |
  ## 美光在Computex 2026展示首款PCIe Gen6資料中心SSD，鎖定AI工作負載

  美光科技於Computex 2026展出旗下首款PCIe第六代（PCIe Gen6）企業級固態硬碟（SSD）9650，官方標示循序讀取效能最高可達每秒28 GB——足以飽和PCIe Gen6 x4主機介面的額定頻寬——隨機讀取效能則高達每秒550萬次輸入輸出操作（IOPS）。

  9650早於去年便由美光正式宣布，是該公司首次跨入PCIe第六代互連標準的產品。美光表示，9650的循序讀取效能約為現行Gen5 9550系列的兩倍。寫入效能的提升則相對有限：循序寫入額定為14 GB/s，隨機寫入為每秒90萬IOPS。

  ## 效能目標與儲存容量

  美光將9650定位為AI推論與訓練工作負載的首選，因為隨著新一代繪圖處理器（GPU）以更高速率處理模型權重，儲存I/O頻寬已逐漸成為系統瓶頸。該公司表示，AI基礎設施營運商預計將成為PCIe Gen6 SSD的首批、也是最大宗的客戶群。

  9650提供兩種版本：針對讀取效能優化的PRO型，容量最高達30.72 TB；以及適合混合工作負載的MAX型，容量最高達25.6 TB。

  ## 液冷成為必要條件

  最小的可用規格——E1.S——是一種採用緊湊托盤式設計、用於高密度伺服器機箱的外形規格，也將成為美光首款以液冷「優化」（optimized）而非僅「相容」（compatible）為描述的企業級SSD。美光表示，就實際應用而言，直接液冷對E1.S這一配置而言是不可或缺的條件，而非可選項目。該公司公布的效能數字假設功耗上限為25瓦，反映出這一效能等級的高階伺服器硬碟所產生的熱負荷。美光指出，E1.S專為搭配高效能GPU伺服器環境而設計，而液冷在這類環境中同樣已幾乎成為標準配備。

  ## 控制器與NAND快閃記憶體

  9650內部採用美光全新PCIe Gen6控制器，搭配該公司第九代（G9）三層式儲存單元（TLC）NAND快閃記憶體，傳輸速率達每秒3,600百萬次傳輸（MT/s）。美光表示，G9 NAND已於其他產品中量產部署，9650相較於Gen5前代產品的效能躍升，主要來自新控制器的貢獻，而非NAND本身。

  ## 量產超前於平台上市

  美光表示，9650已正式進入量產階段。不過，Computex現場並未進行任何實機展示，原因在於目前尚無配備PCIe Gen6主機連接介面的量產伺服器平台公開上市。據ServeTheHome報導，輝達（NVIDIA）與AMD的PCIe Gen6伺服器平台目標上市時程約在2027年，英特爾的Xeon 7 Diamond Rapids則依循獨立的時程規劃。此外，多款採用Arm AGI中央處理器（CPU）的超大型雲端業者伺服器設計與平台，預計也將在未來幾季陸續問世。

  此一情況造成了一段空窗期：已達量產規格的9650硬碟，將早於能讓其發揮完整規格效能的伺服器硬體上市——即便美光已開始批量出貨，這一限制仍使近期的實際部署受到制約。
date: "2026-07-06"
source_published: "2026-07-05T17:00:11.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Intel", "Micron", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Spotted at Computex 2026: Micron’s First PCIe Gen6 Data Center SSD, the 9650 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/spotted-at-computex-2026-microns-first-pcie-gen6-data-center-ssd-the-9650/"
    title: "Spotted at Computex 2026: Micron’s First PCIe Gen6 Data Center SSD, the 9650"
    trust: 3
    type: primary
    published_at: "2026-07-05T17:00:11.000Z"
---
