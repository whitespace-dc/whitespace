---
title_en: "AMD Helios Rackscale AI System Enters Production With 2.9 EFLOPS and 31TB HBM4"
title_zh: "AMD Helios機架級AI系統正式量產，算力達2.9 EFLOPS、HBM4記憶體31TB"
summary_en: "AMD's Helios rackscale AI system has entered production delivering 2.9 exaflops of peak compute across 72 MI455X GPUs and 31TB of HBM4 memory, with final memory bandwidth specifications 21 percent above the company's original projections."
summary_zh: "AMD於「Advancing AI 2026」發表會上宣布，旗下Helios機架級AI系統已正式進入量產，峰值算力達2.9 EFLOPS，搭載72顆MI455X GPU與31TB HBM4記憶體，實際記憶體頻寬更較原始預測高出21%。"
body_en: |
  AMD's Helios rackscale AI system has entered production at 2.9 exaflops (EFLOPS) of peak compute performance, with final specifications showing memory bandwidth 21 percent above the company's original projections, AMD disclosed at its Advancing AI 2026 event.

  The system houses 72 Instinct MI455X graphics processing units (GPUs), each carrying 432 gigabytes (GB) of HBM4 high-bandwidth memory running at 23.3 terabytes per second (TB/s). Across all 72 GPUs, the rack accumulates 31 terabytes of HBM4 and 1.7 petabytes per second (PB/s) of aggregate memory bandwidth. AMD's original projections for memory bandwidth were lower by about 21 percent, the company said. Peak compute performance is stated at the MXFP4 precision level.

  Memory bandwidth is one of the major bottlenecks in AI inference workloads, AMD said, making the above-plan gain directly relevant for customers.

  ## System components

  Helios integrates three AMD product lines into a single rack. AMD EPYC 9006 "Venice" central processing units (CPUs) handle host compute. The 72 MI455X GPUs deliver AI processing. Pensando network interface cards (NICs) and data processing units (DPUs) form the fabric layer. Engineering for the physical rack came from ZT Systems.

  AMD acquired Pensando in 2022. With Helios now in production, AMD said all constituent pieces are finally in place for what it described as its first true rackscale system.

  ## Scale-up and scale-out networking

  Helios supports two tiers of networking. A scale-up fabric connects all nodes within a single rack at a combined 260 TB/s. A separate scale-out fabric carries 43 TB/s of bandwidth beyond the rack boundary, enabling multiple Helios racks to be clustered together.

  ## What rackscale means

  A rackscale AI system clusters multiple servers, including multiple types of servers, to operate as a single coherent machine. The design addresses AI workloads that exceed the processing power and memory capacity of a single server. The central technical requirement is a high-performance fabric linking all nodes. AMD said the key advances enabling rackscale AI have been integrating such fabrics directly into GPUs and developing networking hardware to extend those connections across nodes within a rack.

  AMD noted that this computing paradigm has, in part, helped establish rival NVIDIA's position in GPU computing.

  ## Significance

  Helios represents AMD's first integrated rackscale product, combining CPU, GPU, DPU, and rack engineering capabilities assembled through acquisitions and internal development. The company has promoted the platform for more than a year, and final shipping specifications tracked closely to AMD's original projections, the company said, with memory bandwidth as the notable exception.

  The scale-out fabric, rated at 43 TB/s, supports multi-rack Helios deployments for workloads requiring capacity beyond a single rack.
body_zh: |
  ## AMD Helios機架級AI系統正式量產，算力達2.9 EFLOPS、HBM4記憶體31TB

  AMD在「Advancing AI 2026」發表會上宣布，旗下Helios機架級AI系統已正式進入量產，峰值運算效能達每秒2.9艾次浮點運算（EFLOPS），而最終規格顯示記憶體頻寬較公司原始預測高出21%。

  整套系統內建72顆Instinct MI455X繪圖處理器（GPU），每顆搭載432 GB的HBM4高頻寬記憶體，傳輸速率達每秒23.3 TB。72顆GPU加總後，整個機架共累積31 TB的HBM4記憶體，以及每秒1.7 PB的聚合記憶體頻寬。AMD表示，此數字較公司最初預測的記憶體頻寬高出約21%。峰值運算效能以MXFP4精度規格為基準。

  AMD指出，記憶體頻寬是AI推論工作負載中的主要瓶頸之一，因此超出預期的頻寬增益對客戶而言具有直接且重要的意義。

  ## 系統組成元件

  Helios將AMD三條產品線整合於單一機架之中。AMD EPYC 9006「Venice」中央處理器（CPU）負責主機端運算，72顆MI455X GPU承擔AI運算處理，Pensando網路介面卡（NIC）與資料處理器（DPU）則構成整個互連架構的網路層。機架本體的工程設計則來自ZT Systems。

  AMD於2022年收購Pensando。隨著Helios正式量產，AMD表示所有組成元件終於齊備，並將Helios定位為AMD首款真正意義上的機架級系統。

  ## 橫向擴展與縱向擴展網路

  Helios支援兩個層級的網路架構。縱向擴展（scale-up）網路架構以每秒260 TB的聚合頻寬，連接單一機架內的所有節點；橫向擴展（scale-out）網路架構則提供每秒43 TB的機架外頻寬，使多台Helios機架得以叢集部署，協同運作。

  ## 何謂機架級系統

  機架級AI系統將多台伺服器——包括不同類型的伺服器——叢集整合，使其如同單一完整機器般運作。這種設計專門應對超出單台伺服器處理能力與記憶體容量的AI工作負載，其核心技術需求在於一套連接所有節點的高效能互連架構。AMD表示，實現機架級AI的關鍵突破在於：將此類互連架構直接整合進GPU，並研發出可將連線延伸至機架內各節點的網路硬體。

  AMD亦指出，這種運算典範在一定程度上協助競爭對手輝達（NVIDIA）確立了其在GPU運算領域的領先地位。

  ## 重要意義

  Helios是AMD首款整合式機架級產品，融合了CPU、GPU、DPU及機架工程能力，這些能力分別來自歷年來的收購與內部自主研發。AMD為這個平台進行了逾一年的推廣，公司表示最終出貨規格與當初預測高度吻合，唯一顯著例外正是記憶體頻寬——實際表現超出預期。

  橫向擴展網路架構的頻寬規格為每秒43 TB，可支援多機架Helios叢集部署，以因應單一機架容量不足以承載的大規模工作負載需求。
date: "2026-08-05"
source_published: "2026-08-03T19:00:32.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-07-29-amd-unveils-mi455x-accelerator-and-helios-cabinet-extends-ai-everywhere-strategy"
region: []
vendor: ["AMD", "Coherent", "Nvidia"]
trust:
  score: 4
  reasoning: "Single source: AMD Helios Architecture Deep Dive: The Power of AMD’s Hardware Combined (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/amd-helios-architecture-deep-dive-amd-broadcom-hardware-combined/"
    title: "AMD Helios Architecture Deep Dive: The Power of AMD’s Hardware Combined"
    trust: 4
    type: primary
    published_at: "2026-08-03T19:00:32.000Z"
---
