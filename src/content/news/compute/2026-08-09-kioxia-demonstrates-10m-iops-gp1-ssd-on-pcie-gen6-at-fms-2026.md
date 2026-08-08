---
title_en: "Kioxia Demonstrates 10M IOPS GP1 SSD on PCIe Gen6 at FMS 2026"
title_zh: "鎧俠FMS 2026展示GP1 SSD，PCIe Gen6達千萬IOPS"
summary_en: "Kioxia showed its GP1 Series NVMe SSD delivering just over 10 million random read IOPS live on the FMS 2026 show floor, using SLC-class NAND over a PCIe Gen6 interface. The drive targets a fast-tier role in AI servers where latency and write endurance matter more than raw capacity."
summary_zh: "鎧俠在FMS 2026展場現場實測GP1系列NVMe固態硬碟，搭載第二代SLC等級XL-FLASH NAND與PCIe Gen6介面，隨機讀取IOPS突破一千萬次。這款硬碟鎖定AI伺服器快速儲存層市場，以低延遲與高寫入耐久度為訴求，並非追求容量密度。"
body_en: |
  Kioxia demonstrated its GP1 Series enterprise NVMe solid-state drive hitting just over 10 million random read IOPS live on the FMS 2026 show floor, the company confirmed, with performance consistent enough that observers initially mistook the real-time dashboard for a static slide.

  The GP1 reaches that figure using XL-FLASH generation 2, Kioxia's second-generation SLC-class NAND — single-level cell memory that stores one bit per cell, trading capacity density for lower latency and higher endurance compared with the TLC (triple-level cell) NAND found in most mainstream enterprise SSDs. The drive runs over PCIe Gen6, the latest generation of the peripheral interconnect standard, which roughly doubles the per-lane bandwidth available to PCIe Gen5 devices.

  ## Specifications

  Kioxia rates the GP1 at the following figures:

  - Up to 10 million random read IOPS at a 512-byte block size
  - Up to 50 DWPD (drive writes per day) endurance — a measure of how many full-capacity writes a drive can sustain daily over its rated life
  - Form factors: E3.S and E1.S in both 9.5 mm and 15 mm heights (EDSFF, or Enterprise and Data Center Standard Form Factor, a connector and chassis standard designed for high-density flash in servers)
  - Cooling: air-cooled across the family; cold-plate liquid cooling supported on the E3.S and E1.S 9.5 mm variants

  The 512-byte access granularity is finer than the 4 KB blocks typical of TLC-based enterprise SSDs, which Kioxia says makes the drive better suited to workloads where individual operations are small and latency per operation matters more than sustained throughput on large sequential transfers.

  ## Target market and competitive context

  Kioxia positions the GP1 explicitly as a fast-tier device for AI servers, arguing that very high-performance SSDs can absorb workloads that would otherwise require DRAM — the fastest but most expensive and power-intensive memory tier in a server. The company said the drive competes against conventional TLC-based SSDs rather than DRAM directly, occupying an intermediate performance and cost tier.

  The GP1 replaces or supersedes the Kioxia FL6, a prior drive that used an earlier generation of XL-FLASH and was limited to PCIe Gen4. Moving to PCIe Gen6 and the second-generation XL-FLASH memory is the primary change the company cited.

  ## Cooling flexibility and form factor choice

  Offering both air and cold-plate cooling within a single drive family lets server manufacturers choose the thermal management approach that fits their chassis design, rather than committing to separate drive SKUs for each. The E3.S and E1.S form factors align with flash-dense Gen6 server platforms that vendors are building, according to the company.

  ## Industry direction

  The GP1 demonstration reflects a broader industry push toward higher per-drive IOPS as PCIe Gen6 platforms come to market. The source noted that the near-term industry goal is to reach 100 million IOPS per drive — an order of magnitude beyond the GP1's current rating — within roughly the next year.
body_zh: |
  鎧俠（Kioxia）在FMS 2026展場上進行現場展示，確認旗下GP1系列企業級NVMe固態硬碟達到超過一千萬次隨機讀取IOPS，現場儀表板上的數字穩定得讓在場觀眾一度誤以為是靜態簡報投影片，而非即時數據。

  GP1之所以能達到這項數字，仰賴XL-FLASH第二代——鎧俠自家第二代SLC等級NAND。SLC（單層式儲存單元）每個儲存單元只寫入一個位元，相較於主流企業級固態硬碟普遍採用的TLC（三層式儲存單元）NAND，犧牲了容量密度，換取更低的存取延遲與更高的寫入耐久度。這款硬碟透過PCIe Gen6介面運作，PCIe Gen6是當前最新一代的周邊匯流排標準，每通道頻寬約為PCIe Gen5裝置的兩倍。

  ## 規格

  鎧俠公布GP1的官方規格如下：

  - 隨機讀取最高可達一千萬IOPS（以512位元組區塊大小測試）
  - 寫入耐久度最高達50 DWPD（每日完整磁碟寫入次數，衡量硬碟在額定壽命內每天可承受多少次完整容量寫入）
  - 外形規格：E3.S與E1.S，提供9.5公釐與15公釐兩種高度（EDSFF，即企業與資料中心標準外形規格，一種專為伺服器高密度快閃儲存設計的接頭與機箱標準）
  - 散熱方式：全系列支援氣冷；E3.S與E1.S 9.5公釐版本另支援冷板液冷

  512位元組的存取粒度比TLC企業級固態硬碟常見的4 KB區塊更細。鎧俠表示，這讓GP1更適合單次操作資料量小、且每次操作延遲比大型循序傳輸吞吐量更重要的工作負載。

  ## 目標市場與競爭態勢

  鎧俠明確將GP1定位為AI伺服器的快速儲存層裝置，主張高效能固態硬碟能承接原本需要DRAM才能處理的工作負載——DRAM是伺服器中速度最快、但也最昂貴且最耗電的記憶體層級。該公司表示，GP1的競爭對象是傳統TLC固態硬碟，而非直接與DRAM競爭，定位在兩者之間的性能與成本中間地帶。

  GP1取代或接替了鎧俠FL6——前代產品採用較早一代的XL-FLASH技術，且受限於PCIe Gen4介面。升級至PCIe Gen6與第二代XL-FLASH記憶體，是鎧俠這次列舉的主要改進項目。

  ## 散熱彈性與外形規格選擇

  在單一產品線中同時提供氣冷與冷板液冷兩種選項，讓伺服器製造商能依照機箱設計選擇合適的散熱方案，無需為不同散熱需求分別採購不同料號的硬碟。鎧俠表示，E3.S與E1.S外形規格符合各廠商正在建構的Gen6高密度快閃儲存伺服器平台。

  ## 產業趨勢

  GP1的展示反映出更廣泛的產業趨勢——隨著PCIe Gen6平台陸續上市，業界正積極追求更高的單碟IOPS。報導消息人士指出，產業近期目標是在約一年內達到每碟一億IOPS——是GP1現有數字的十倍。
date: "2026-08-09"
source_published: "2026-08-07T19:00:09.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 4
  reasoning: "Single source: A 10M IOPS Kioxia GP1 SSD Shown Running at FMS 2026 (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/a-10m-iops-kioxia-gp1-ssd-shown-running-at-fms-2026/"
    title: "A 10M IOPS Kioxia GP1 SSD Shown Running at FMS 2026"
    trust: 4
    type: primary
    published_at: "2026-08-07T19:00:09.000Z"
---
