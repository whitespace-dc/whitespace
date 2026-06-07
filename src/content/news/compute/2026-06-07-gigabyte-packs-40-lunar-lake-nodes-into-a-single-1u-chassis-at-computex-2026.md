---
title_en: "Gigabyte Packs 40 Lunar Lake Nodes Into a Single 1U Chassis at Computex 2026"
title_zh: "技嘉 Computex 2026：單一 1U 機箱搭載 40 顆 Lunar Lake 節點"
summary_en: "Gigabyte displayed the R1C7-K0A-AS1 at Computex 2026, a single 1U server chassis holding 40 Intel Lunar Lake nodes. The system delivers 320 CPU cores, 1.28TB of low-power memory, 80 solid-state drives, and 40 integrated GPUs in a form factor one rack unit tall."
summary_zh: "技嘉於 Computex 2026 展出型號 R1C7-K0A-AS1 的 1U 伺服器機箱，單一機箱內建 40 個 Intel Lunar Lake 節點，整合 320 顆 CPU 核心、1.28TB 低功耗記憶體、80 顆固態硬碟及 40 個整合式 GPU，高度僅佔一個機架單元。"
body_en: |
  Gigabyte showed a 40-node cluster squeezed into a single 1U chassis at Computex 2026, combining 320 CPU cores, 1.28 terabytes of memory, 80 solid-state drives, and 40 integrated GPUs in a form factor one rack unit tall.

  The system is designated R1C7-K0A-AS1. Its five removable cartridges each contain eight independent compute nodes: three cartridges occupy a front bay and two sit in a second row behind them. Each node runs an Intel Core Ultra 7 258V processor from Intel's Lunar Lake generation, paired with 32GB of LPDDR5X (low-power double data rate) memory and two PCIe Gen 5 x2 M.2 storage slots. ServeTheHome reported each processor carries four performance cores and eight efficiency cores, for a chassis-wide total of 320 cores.

  ## Node and cartridge design

  Each cartridge resembles a GPU card in its form factor. Inside, eight individual compute boards each carry two heatsinks: one over the Lunar Lake processor and one over the pair of M.2 slots. The cartridges plug into the chassis through rear-facing connectors that ServeTheHome said appear to be MCIO 8i interfaces, a connector type used for high-speed storage and interconnect signaling. ServeTheHome noted those connectors do not appear in the displayed specification sheet and that no Gigabyte representative at the show could confirm the internal wiring topology.

  ## Rear fabric and networking

  Two internal interconnect scenarios are possible, according to ServeTheHome. If the rear connectors carry PCIe signaling, each node would receive two PCIe lanes per cartridge slot. If the connectors instead carry Ethernet, a chip under a large heatsink at the chassis rear would aggregate all node traffic and feed it to two QSFP28 ports at the back panel. The rack-scale figure published by ServeTheHome implies each chassis provides two 100-gigabit Ethernet uplinks, consistent with the two-port QSFP28 count. ServeTheHome said no one it spoke to at the show could clarify which topology the system uses.

  ## Power and management

  The chassis pairs two 3.2-kilowatt Titanium-rated power supplies with a chassis management controller, the latter accessible through a dedicated rear management port. Titanium is the highest efficiency classification under the 80 Plus power supply rating program.

  ## Rack-scale density

  ServeTheHome calculated what a standard 40U rack filled entirely with R1C7-K0A-AS1 units would yield: 12,800 CPU cores, 3,200 SSDs, 1,600 integrated GPUs, and 51.2TB of LPDDR5X memory, served by 80 100GbE uplinks, 40 management ports, and 80 power connections.

  ## Use case context

  A ServeTheHome contributor placed the design within a lineage of Intel integrated-GPU cluster nodes used in data centers and cloud environments for workloads such as video transcoding and physical desktop virtualization. The contributor cited Intel's Quick Sync hardware video encoding engine as a recurring draw for such deployments, noting it combines hardware-accelerated encoding with general-purpose x86 processing cores in a single node. The R1C7-K0A-AS1 applies that approach using the Lunar Lake generation's integrated GPU.

  ## Status

  The R1C7-K0A-AS1 is not yet available. Gigabyte displayed it as a demonstration at Computex 2026, and ServeTheHome reported that detailed specifications beyond those shown on site had not been publicly released at the show.
body_zh: |
  技嘉在 Computex 2026 展出一款將 40 個節點塞入單一 1U 機箱的高密度運算系統，整合 320 顆 CPU 核心、1.28TB 記憶體、80 顆固態硬碟及 40 個整合式 GPU，高度僅佔一個機架單元。

  這款系統型號為 R1C7-K0A-AS1，配備五個可抽換式卡匣，每個卡匣內含八個獨立運算節點：三個卡匣配置於前排插槽，另外兩個則位於其後方的第二排。每個節點搭載一顆英特爾 Lunar Lake 世代的 Core Ultra 7 258V 處理器，配備 32GB LPDDR5X（低功耗雙倍資料速率）記憶體，以及兩個 PCIe Gen 5 x2 M.2 儲存插槽。ServeTheHome 報導指出，每顆處理器具備四顆效能核心與八顆效率核心，全機箱合計共 320 顆核心。

  ## 節點與卡匣設計

  每個卡匣的外型尺寸與顯示卡相近。卡匣內部，八片獨立運算板各自配備兩組散熱器：一組覆蓋 Lunar Lake 處理器，另一組則覆蓋兩個 M.2 插槽。卡匣透過後方連接器插入機箱，ServeTheHome 指出這些連接器外觀疑似為 MCIO 8i 介面，這是一種用於高速儲存與互連訊號傳輸的連接器規格。不過，ServeTheHome 也注意到這些連接器並未出現在展示的規格表上，且在展場上沒有任何技嘉代表能確認內部的配線拓撲。

  ## 後端交換架構與網路

  根據 ServeTheHome 的分析，後端連接器的訊號傳輸存在兩種可能情境。若後方連接器傳輸的是 PCIe 訊號，每個節點在每個卡匣插槽上將獲得兩條 PCIe 通道。若連接器改為傳輸乙太網路訊號，則機箱後方大型散熱器下方的晶片將匯總所有節點流量，並透過後面板的兩個 QSFP28 連接埠對外輸出。ServeTheHome 公布的機架規模數據顯示，每台機箱提供兩組 100 Gigabit 乙太網路上行鏈路，與兩個 QSFP28 連接埠的數量相符。ServeTheHome 表示，在展場上無法從任何接洽對象處獲得關於系統採用哪種拓撲的確認。

  ## 電源與管理

  機箱配備兩組 3.2 千瓦鈦金牌（Titanium）認證電源供應器，並整合一個機箱管理控制器，可透過後方獨立的管理連接埠存取。鈦金牌是 80 Plus 電源供應器認證計畫中最高等級的效能分類。

  ## 機架級密度

  ServeTheHome 計算了將一個標準 40U 機架完全以 R1C7-K0A-AS1 填滿後的整體效能規模：合計可達 12,800 顆 CPU 核心、3,200 顆固態硬碟、1,600 個整合式 GPU，以及 51.2TB 的 LPDDR5X 記憶體，並配備 80 組 100GbE 上行鏈路、40 個管理連接埠及 80 組電源連接。

  ## 應用場景背景

  ServeTheHome 的一位撰稿人將此設計定位於英特爾整合式 GPU 叢集節點的發展脈絡之中，這類節點廣泛應用於資料中心與雲端環境，處理影片轉碼及實體桌面虛擬化等工作負載。該撰稿人援引英特爾 Quick Sync 硬體影片編碼引擎，作為此類部署反覆受到青睞的關鍵原因，指出它在單一節點上將硬體加速編碼能力與通用 x86 處理核心合而為一。R1C7-K0A-AS1 採用 Lunar Lake 世代的整合式 GPU，延續了這一設計路線。

  ## 現況

  R1C7-K0A-AS1 目前尚未正式開放購買。技嘉在 Computex 2026 上以展示原型的形式呈現，ServeTheHome 報導指出，除展場現場所展示的規格之外，更詳細的技術規格在展覽期間尚未對外公開發布。
date: "2026-06-06T18:11:02.106Z"
source_published: "2026-06-06T15:00:37.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: A 40-Node 1U Cluster Gigabyte R1C7-K0A-AS1 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/a-40-node-1u-cluster-gigabyte-r1c7-k0a-as1/"
    title: "A 40-Node 1U Cluster Gigabyte R1C7-K0A-AS1"
    trust: 3
    type: primary
    published_at: "2026-06-06T15:00:37.000Z"
---
