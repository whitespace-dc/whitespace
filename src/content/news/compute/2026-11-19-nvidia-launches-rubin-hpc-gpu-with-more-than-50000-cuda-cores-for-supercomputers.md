---
title_en: "Nvidia Launches Rubin HPC GPU With More Than 50,000 CUDA Cores for Supercomputers"
title_zh: "輝達發布 Rubin HPC GPU，逾五萬顆 CUDA 核心專攻超級電腦"
summary_en: "Nvidia unveiled the Rubin HPC GPU at Supercomputing 2026 in Chicago on November 16, introducing a chip with more than 50,000 CUDA cores — the highest count in any Nvidia GPU to date — aimed at scientific simulation and high-performance computing workloads."
summary_zh: "輝達於 2026 年 11 月 16 日在芝加哥「超算 2026」大會上揭曉 Rubin HPC GPU，這款晶片搭載逾五萬顆 CUDA 核心，創下輝達單一 GPU 最高核心數紀錄，專為科學模擬與高效能運算工作負載而設計。"
body_en: |
  Nvidia unveiled the Rubin HPC, a graphics processing unit (GPU) built for high-performance computing (HPC) applications, at the Supercomputing 2026 (SC26) conference in Chicago on November 16, 2026. The chip carries more than 50,000 CUDA cores — the highest count Nvidia has placed in a single GPU — and is designed for scientific simulation, engineering calculation, and large-scale data processing.

  ## Core count in context

  CUDA cores are the small processing units inside a GPU that execute calculations in parallel; a higher count allows more computations to run simultaneously in principle, though Nvidia noted that memory speed and data-transfer rates also affect overall performance.

  The Rubin HPC's 50,000-plus core count is approximately 2.4 times that of the Nvidia B300, which is based on the Blackwell Ultra architecture and carries 20,480 CUDA cores. The figure is also approximately 1.7 times the 28,672 CUDA cores in the standard Rubin GPU.

  ## Workloads and built-in optimizations

  Rubin HPC is part of Nvidia's Vera Rubin platform. The company said the chip suits climate modeling, engineering design simulation, genome analysis, and financial risk calculation — scientific and technical workloads that require computation at very large scale.

  Nvidia said the chip includes a technology called sparse data acceleration, which improves efficiency when processing data distributed across different memory regions, reducing the time processing units spend waiting for data. The company said Rubin HPC is also optimized for computational patterns common in scientific simulation: operations on sparse matrices (arrays where most values are zero), stencil calculations (computations that reference the values of neighboring data points), data sorting, and reduction operations (the condensing of large datasets into smaller summary results).

  ## Interconnect

  The chip uses NVLink 7, the seventh generation of Nvidia's high-speed inter-GPU communication technology, which allows multiple GPUs within a supercomputer to exchange data rapidly. The previous NVLink generation on the Vera Rubin platform offered bidirectional bandwidth of up to 3.6 terabytes per second (TB/s) per GPU, according to Nvidia.

  ## Significance

  "For AI agents handling science and engineering problems, faster simulations mean faster discovery," Ian Buck, Nvidia's Vice President of Hyperscale and High-Performance Computing, said, as quoted by TechTimes. Rubin HPC carries the highest CUDA core count Nvidia has built into a single GPU to date. Nvidia has not yet disclosed bandwidth specifications for NVLink 7.
body_zh: |
  輝達（Nvidia）於 2026 年 11 月 16 日在芝加哥舉辦的「超算 2026」（SC26）大會上，正式發表專為高效能運算（HPC）應用打造的繪圖處理器（GPU）——Rubin HPC。這款晶片搭載逾五萬顆 CUDA 核心，是輝達迄今在單一 GPU 中植入核心數最多的產品，設計目標涵蓋科學模擬、工程計算與大規模資料處理。

  ## 核心數量的脈絡

  CUDA 核心是 GPU 內部負責平行運算的小型處理單元，原則上核心數愈多，可同時執行的運算就愈多；不過輝達也指出，記憶體速度與資料傳輸速率同樣是左右整體效能的關鍵因素。

  Rubin HPC 逾五萬顆的核心數，約為採用 Blackwell Ultra 架構、配備 20,480 顆 CUDA 核心之輝達 B300 的 2.4 倍，同時也約為標準版 Rubin GPU 所搭載 28,672 顆 CUDA 核心的 1.7 倍。

  ## 工作負載與內建最佳化

  Rubin HPC 隸屬輝達 Vera Rubin 平台。輝達表示，這款晶片適用於氣候建模、工程設計模擬、基因體分析及金融風險計算等工作負載——這些科學與技術應用均需要超大規模的運算能力。

  輝達表示，這款晶片內建名為「稀疏資料加速」（sparse data acceleration）的技術，可在處理分散於不同記憶體區域的資料時提升效率，縮短處理單元等待資料的時間。輝達並指出，Rubin HPC 亦針對科學模擬中常見的幾類運算模式進行專項最佳化，包括：稀疏矩陣運算（大多數數值為零的陣列運算）、模板計算（參照鄰近資料點數值進行的計算）、資料排序，以及歸約運算（將大型資料集壓縮為較小摘要結果的運算）。

  ## 互連技術

  這款晶片採用 NVLink 7，即輝達第七代高速 GPU 間通訊技術，可讓超級電腦內的多顆 GPU 快速交換資料。根據輝達資料，Vera Rubin 平台上一代 NVLink 每顆 GPU 的雙向頻寬最高可達每秒 3.6 TB（3.6 TB/s）。

  ## 重要意義

  輝達超大規模與高效能運算副總裁 Ian Buck 接受媒體 TechTimes 引述時表示：「對於處理科學與工程問題的 AI 代理而言，模擬速度愈快，發現的速度就愈快。」Rubin HPC 所搭載的 CUDA 核心數，是輝達迄今在單一 GPU 上所達到的最高紀錄。目前輝達尚未揭露 NVLink 7 的頻寬規格。
date: "2026-11-19"
source_published: "2026-11-18T00:02:00.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-11-02-nvidia-cuts-rubin-gpu-memory-bandwidth-and-nvlink-below-preliminary-specificatio"
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Nvidia Rilis GPU Rubin HPC dengan Lebih dari 50.000 CUDA Core, untuk Superkomputer (trust 3/5)."
sources:
  - url: "https://tekno.kompas.com/read/2026/11/18/07020057/nvidia-rilis-gpu-rubin-hpc-dengan-lebih-dari-50.000-cuda-core-untuk"
    title: "Nvidia Rilis GPU Rubin HPC dengan Lebih dari 50.000 CUDA Core, untuk Superkomputer"
    trust: 3
    type: primary
    published_at: "2026-11-18T00:02:00.000Z"
---
