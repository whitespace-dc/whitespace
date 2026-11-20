---
title_en: "Nvidia launches four-node DGX Spark desktop cluster for researchers and developers"
title_zh: "輝達推出四節點DGX Spark桌面叢集，專為研究人員與開發者設計"
summary_en: "Nvidia has introduced the DGX Spark HPC Developer Kit, a four-node desktop cluster using ConnectX-7 networking that delivers 512 GB of combined memory and 16 TB of NVMe storage for local high-performance computing. The system, available through nine OEM partners, targets researchers who need local GPU compute to avoid shared cluster queue times."
summary_zh: "輝達（Nvidia）發表DGX Spark HPC開發者套件，這是一款採用ConnectX-7網路技術的四節點桌面叢集，合計提供512 GB記憶體與16 TB NVMe儲存空間，可透過九家OEM合作夥伴購得，專為需要本地GPU運算資源、希望擺脫共用叢集排隊之苦的研究人員而設計。"
body_en: |
  Nvidia has introduced the DGX Spark HPC (high-performance computing) Developer Kit, a four-node desktop cluster aimed at researchers, academics and developers who need local computing power without relying on shared data-center infrastructure.

  The kit connects four DGX Spark nodes in a ring using ConnectX-7 networking — Nvidia's high-speed interconnect technology — without requiring a separate network switch. At full scale, the configuration delivers 512 gigabytes of combined memory and 16 terabytes of NVMe (non-volatile memory express) solid-state storage. Each node is built around Nvidia's GB10 Grace Blackwell Superchip, extending the DGX Spark line from a single-machine product to a small clustered system.

  Using NVFP4 — a 4-bit floating-point quantization format that reduces model size to fit more parameters in available memory — Nvidia said users can run models with up to 700 billion parameters locally across the four nodes, including DeepSeek V4.1.

  The system is available through original equipment manufacturer partners including Acer, Asus, Dell Technologies, Gigabyte, H3C, HP, Lenovo, MSI and xFusion, Nvidia said.

  ## Software and development tools

  Nvidia said a playbook for installing its HPC SDK — a suite of GPU-accelerated compilers, libraries and MPI (message passing interface) tools for C, C++ and Fortran — is forthcoming for the platform.

  Software already demonstrated or validated on DGX Spark systems includes LAMMPS with Kokkos for materials simulation, NAMD and GROMACS for molecular dynamics, OpenFOAM for fluid dynamics, WRF for weather modeling, and Nvidia NIM microservices including OpenFold3 and Boltz-2 for biomolecular structure prediction.

  Nvidia positioned the developer kit as a tool for building and testing multi-node applications, examining how data and compute are distributed across nodes, and identifying communication bottlenecks before moving work to larger infrastructure.

  ## Research use cases

  Nvidia outlined several examples of researchers using DGX Spark systems across scientific disciplines.

  Kvantify, using Nvidia's cuQuantum library, reported running tensor-network simulations of quantum-chemistry circuits with up to 70 qubits and 975 gates on a single DGX Spark. Nvidia said those benchmarks were based on circuits generated for penicillin ground-state energy calculations.

  CYRAN AI, a spin-out from the Indian Institute of Technology Delhi, is using DGX Spark and its PixelFlux library to accelerate JPEG 2000 decoding for large satellite images in support of local geospatial analysis, according to Nvidia.

  The Rubin Lab at the Innovative Genomics Institute at the University of California, Berkeley, is using a DGX Spark with Nvidia's Evo 2 model to predict bacterial traits from genome sequences. Nvidia said the lab compared embeddings from genomic and protein language models against classical baselines and produced results 15 times faster by avoiding an 11-hour cluster queue.

  The Hartwig Group, also at UC Berkeley, used DGX Spark for LoRA (low-rank adaptation) fine-tuning on the Nemotron 3 Super 120B-A12B model — a 120-billion-parameter chemistry machine learning model — using NVFP4 quantization to fit it on a single device. Nvidia said the group avoided multi-day waits for shared cluster access and ran back-to-back training sessions lasting eight to 24 hours each on the local machine.

  OpenFold has demonstrated fine-tuning of OpenFold3 on DGX Spark to improve protein-ligand structure predictions for drug discovery applications, Nvidia said.

  ## Positioning and significance

  Nvidia framed the desk-side cluster as complementary to large shared supercomputers rather than a replacement for them. The company said the hardware is intended for development, debugging and smaller-scale runs before work is moved to larger data-center infrastructure — directly addressing the queue times and data-access constraints that research teams face when competing for shared computing allocations.

  The design also has potential appeal for teams managing unpublished results or proprietary datasets that cannot be sent to external computing environments, Nvidia said.

  Nvidia said the forthcoming HPC SDK playbook will give scientists a local platform for developing multi-node GPU applications and running simulation workloads, including LAMMPS with Kokkos, before scaling to larger systems.
body_zh: |
  輝達（Nvidia）正式發表DGX Spark HPC（高效能運算）開發者套件，這是一款四節點桌面叢集，專為需要本地運算能力、又不想依賴共用資料中心基礎設施的研究人員、學術界人士及開發者所設計。

  該套件以環狀拓撲將四個DGX Spark節點相互連接，採用ConnectX-7網路技術——輝達自家的高速互連方案——無須外接獨立網路交換器。全規模配置下，整套系統可提供合計512 GB記憶體，以及16 TB的NVMe（非揮發性記憶體快閃）固態儲存空間。每個節點均搭載輝達GB10 Grace Blackwell超級晶片，讓DGX Spark產品線從單機延伸至小型叢集系統。

  透過NVFP4——一種4位元浮點數量化格式，可縮減模型體積、在有限記憶體中容納更多參數——輝達表示，使用者可在四個節點上於本地執行最高達7,000億參數的模型，包括DeepSeek V4.1。

  輝達指出，本系統透過原始設備製造商（OEM）合作夥伴銷售，包括宏碁（Acer）、華碩（Asus）、戴爾科技（Dell Technologies）、技嘉（Gigabyte）、H3C、HP、聯想（Lenovo）、微星（MSI）及xFusion。

  ## 軟體與開發工具

  輝達表示，針對本平台安裝其HPC SDK的操作手冊即將發布。HPC SDK是一套GPU加速的編譯器、函式庫及MPI（訊息傳遞介面）工具集，支援C、C++與Fortran語言。

  目前已在DGX Spark系統上完成展示或驗證的軟體包括：用於材料模擬的LAMMPS搭配Kokkos、用於分子動力學的NAMD與GROMACS、用於流體動力學的OpenFOAM、用於天氣模擬的WRF，以及輝達NIM微服務，含用於生物分子結構預測的OpenFold3與Boltz-2。

  輝達將這套開發者套件定位為建構與測試多節點應用程式的工具，可用於檢視資料與運算如何在各節點間分散配置，並在將工作移至更大規模基礎設施之前，事先找出通訊瓶頸所在。

  ## 研究應用案例

  輝達列舉了多個跨科學領域的DGX Spark使用案例。

  Kvantify利用輝達的cuQuantum函式庫，在單台DGX Spark上完成了多達70個量子位元、975個閘極的量子化學電路張量網路模擬。輝達表示，上述基準測試是以青黴素基態能量計算所生成的電路為基礎進行的。

  CYRAN AI是印度理工學院德里校區（IIT Delhi）的衍生新創公司，根據輝達的說法，該公司正使用DGX Spark及自家PixelFlux函式庫，加速大型衛星影像的JPEG 2000解碼，以支援本地地理空間分析作業。

  加州大學柏克萊分校（UC Berkeley）創新基因組研究所的魯賓實驗室（Rubin Lab），正使用DGX Spark搭配輝達的Evo 2模型，從基因體序列預測細菌特性。輝達表示，該實驗室將基因體與蛋白質語言模型的嵌入向量與傳統基準方法進行比較，透過省去長達11小時的叢集排隊時間，運算速度提升了15倍。

  同樣來自加州大學柏克萊分校的哈特威格研究團隊（Hartwig Group），使用DGX Spark對Nemotron 3 Super 120B-A12B模型進行LoRA（低秩適應）微調——這是一個擁有1,200億參數的化學機器學習模型——並透過NVFP4量化技術使其得以在單台裝置上運行。輝達指出，該團隊因此避免了等待共用叢集存取所需的數日排隊，並在本地機器上連續執行每次歷時8至24小時的訓練任務。

  OpenFold已展示在DGX Spark上對OpenFold3進行微調，以改善藥物研發應用中蛋白質-配體結構的預測精準度，輝達表示。

  ## 定位與重要意義

  輝達將這款桌側叢集定位為大型共用超級電腦的互補工具，而非取代品。該公司表示，此硬體設計的用途在於開發、除錯及小規模運算，待完成後再遷移至更大規模的資料中心基礎設施——直接回應了研究團隊在競爭共用運算配額時所面臨的排隊等待與資料存取限制。

  輝達也表示，對於需要管理未發表研究成果或專有資料集、無法將資料送往外部運算環境的團隊而言，這款設計同樣具有潛在吸引力。

  輝達指出，即將推出的HPC SDK操作手冊將為科學家提供一個本地平台，用於開發多節點GPU應用程式並執行模擬工作負載，包括LAMMPS搭配Kokkos，然後再擴展至更大規模的系統。
date: "2026-11-21"
source_published: "2026-11-20T16:00:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Gigabyte", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Nvidia launches desk-side DGX Spark cluster for researchers (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-launches-desk-side-dgx-spark-cluster-for-researchers"
    title: "Nvidia launches desk-side DGX Spark cluster for researchers"
    trust: 3
    type: primary
    published_at: "2026-11-20T16:00:00.000Z"
---
