---
title_en: "China's LineShine ARM supercomputer tops Top500, first to exceed 2 exaflops"
title_zh: "中國LineShine超級電腦奪Top500榜首，全球首破2 Exaflops"
summary_en: "China's LineShine, a CPU-only Arm supercomputer at the National Supercomputing Centre in Shenzhen, topped the June 2026 Top500 list with a Linpack score of 2.2 exaflops — the first system to publicly cross that threshold — marking China's first No. 1 ranking since 2017."
summary_zh: "中國深圳國家超算中心的LineShine超級電腦以2.2 exaflops的Linpack成績奪得2026年6月Top500榜首，成為全球首套公開突破2 exaflops門檻的系統，也是中國自2017年以來首度重返排行榜頂端。"
body_en: |
  China's LineShine supercomputer, a CPU-only system built around Arm-architecture processors at the National Supercomputing Centre in Shenzhen (NSCS), claimed the top position on the June 2026 Top500 list with a Linpack score of 2,198 petaflops — 2.2 exaflops, where one exaflop equals one quintillion floating-point operations per second. The result is the first publicly measured Linpack score above 2 exaflops and marks China's first No. 1 ranking on the list since 2017.

  LineShine's score is roughly 22 percent above that of El Capitan, the previous leader located at Lawrence Livermore National Laboratory (LLNL) in California, which scored 1,809 petaflops. El Capitan and Frontier — the world's first exascale system, now ranked No. 3 — are both built around graphics processing unit (GPU) accelerators. LineShine achieves its ranking using central processing units (CPUs) alone, with no GPU accelerators in the system.

  ## The LX2 processor

  The system's compute element is the LX2 CPU, thought to be designed by Huawei, according to ServeTheHome. Each chip comprises two compute dies and integrates High Bandwidth Memory (HBM — high-speed memory packaged directly on the processor). Each die carries 152 cores implementing the Armv9 instruction set architecture and includes Scalable Vector Extension (SVE) and Scalable Matrix Extension (SME), instruction-set features that accelerate the vector and matrix arithmetic used in scientific and AI workloads. A complete two-die LX2 chip contains 304 CPU cores.

  Memory is arranged across eight Non-Uniform Memory Access (NUMA) domains — four per die — each grouping 38 cores with 4 GB of HBM and 32 GB of DDR5. Across the full chip: 32 GB of HBM and 256 GB of DDR5. The chip supports two memory configurations: a flat topology, in which HBM and DDR5 appear to applications as one combined pool, and a cache topology, in which HBM serves as a fast-access layer in front of DDR5.

  Each LX2 processor is rated at 690 watts, according to a presentation delivered at the International Forum for HPC & AI Co-driven Innovation (HACI) earlier this year. The chip also integrates 800 gigabit-per-second (Gbps) network interfaces on-die; ServeTheHome noted that on-chip networking at that bandwidth is uncommon in mainstream server processors.

  ## System structure

  Each compute node holds two LX2 CPUs. Eight nodes form a blade (16 CPUs); 16 blades compose a compute frame (256 CPUs); two frames make a cabinet (512 CPUs). LineShine spans approximately 89 to 90 such cabinets, yielding roughly 13.79 million total cores — more than 155,000 per cabinet.

  Nodes connect via the LingQi fabric at 1.6 terabits per second (Tbps) per node, arranged in a four-layer fat-tree topology with one optical layer. The system is liquid-cooled.

  ## Performance and power

  LineShine's 2.2 exaflop Linpack result represents 80 percent of its 2.74 exaflop theoretical peak. The three US exascale systems — El Capitan, Frontier, and Aurora — each sustain between 50 and 65 percent of their respective theoretical peaks under Linpack, according to ServeTheHome.

  The official Top500 submission lists the full system as drawing 42 megawatts (MW) of power, for an efficiency of approximately 52 gigaflops per watt. El Capitan achieves around 60 gigaflops per watt; ServeTheHome attributed the gap to the lower compute density of a CPU-centric design relative to GPU-based systems.

  LineShine also ranked first on the High Performance Conjugate Gradient (HPCG) benchmark, which tests computation patterns found in real-world scientific simulations and is considered a closer proxy for application performance than Linpack. HPCG scores from the June 2026 list:

  - LineShine: 22.00 HPCG-petaflops/s
  - El Capitan (US): 17.41 HPCG-petaflops/s
  - Fugaku (Japan): 16.00 HPCG-petaflops/s
  - Frontier (US): 14.05 HPCG-petaflops/s

  ## Top 10 reshuffled

  El Capitan and Frontier, both AMD-powered, now hold positions No. 2 and No. 3. Aurora, powered by Intel GPU accelerators, is at No. 4. Germany's JUPITER Booster — Europe's only exascale-class system — holds No. 5 with just over 1 exaflop. For the first time, all five top systems on the list exceed 1 exaflop.

  For the first time in four years, no AMD-powered system holds the No. 1 spot. AMD graphics processors now back four of the top ten systems. NVIDIA holds three positions with Hopper-architecture GPU systems at No. 5, No. 7, and No. 10. Aurora at No. 4 remains the sole Intel GPU-powered system on the list; Intel CPUs also support the NVIDIA-based Eagle system at No. 7.

  A new entrant, Italy's Eni S.p.A. HPC7, takes No. 6 at 571 petaflops. The system uses AMD MI300A processors in the HPE Cray EX255a platform — the same hardware used in El Capitan, at a smaller scale — and draws 8.7 MW.

  Japan's Fujitsu-built Fugaku, an Armv8-based CPU-only system and previously the highest-ranked CPU-only supercomputer on the list, now sits at No. 9.

  ## Industry significance

  LineShine is the first system to claim the Top500's No. 1 position using CPUs without GPU acceleration. The NSCS submission is also the first from a non-Lenovo Chinese organization in some time, according to ServeTheHome. With Fugaku at No. 9, two Arm-based CPU systems now appear simultaneously in the top ten.

  Vendors of AI-focused hardware are beginning to remove support for 64-bit double-precision floating point (FP64) — the numerical standard required by Linpack and most scientific simulation codes — to improve throughput for the mixed-precision calculations used in AI training, according to ServeTheHome. That architectural shift could affect how future AI-optimized systems rank on the Top500.
body_zh: |
  ## 中國LineShine超級電腦登頂Top500，全球首破2 Exaflops大關

  中國深圳國家超算中心（NSCS）的LineShine超級電腦，以純CPU架構搭載Arm處理器的設計，在2026年6月Top500排行榜上以2,198 petaflops（即2.2 exaflops，1 exaflop等於每秒執行百京次浮點運算）的Linpack成績奪得榜首。這是史上首個公開測得Linpack成績突破2 exaflops的系統，也是中國繼2017年後首度重返Top500冠軍寶座。

  LineShine的成績比前任榜首、位於美國加州勞倫斯利佛摩國家實驗室（LLNL）的El Capitan高出約22%。El Capitan的Linpack成績為1,809 petaflops。El Capitan與目前排名第三的Frontier——全球首套exascale（百京級）系統——均採用圖形處理器（GPU）加速架構；而LineShine則全程使用中央處理器（CPU），系統中完全未配置任何GPU加速器。

  ## LX2處理器

  LineShine的核心運算元件為LX2 CPU，據ServeTheHome推測該晶片由華為設計。每顆LX2晶片由兩個運算晶粒（die）組成，並整合了高頻寬記憶體（HBM，一種直接封裝於處理器上的高速記憶體）。每個晶粒內建152個實作Armv9指令集架構的核心，並支援可擴展向量擴充（SVE）與可擴展矩陣擴充（SME）指令集功能，可加速科學運算與AI工作負載中常見的向量及矩陣運算。一顆完整的雙晶粒LX2晶片共含304個CPU核心。

  記憶體採非均勻記憶體存取（NUMA）架構，分為八個NUMA域，每個晶粒各四個。每個NUMA域包含38個核心，搭配4 GB HBM與32 GB DDR5記憶體。整顆晶片合計擁有32 GB HBM與256 GB DDR5。LX2支援兩種記憶體配置模式：一是「平坦拓撲」，HBM與DDR5對應用程式呈現為單一合併記憶體池；二是「快取拓撲」，HBM作為DDR5前端的高速存取層。

  根據今年稍早在「高性能計算與AI協同創新國際論壇」（HACI）上發表的簡報，每顆LX2處理器額定功耗為690瓦。此外，該晶片還整合了每秒800 gigabit（Gbps）的網路介面；ServeTheHome指出，主流伺服器處理器中內建如此高頻寬的晶片內建網路功能實屬罕見。

  ## 系統架構

  每個運算節點配置兩顆LX2 CPU；八個節點組成一個刀鋒（blade，合計16顆CPU）；16個刀鋒構成一個運算框架（frame，合計256顆CPU）；兩個框架組成一個機櫃（cabinet，合計512顆CPU）。LineShine整體橫跨約89至90個機櫃，總核心數約達1,379萬個，每個機櫃超過15.5萬個核心。

  各節點之間透過「靈棲」（LingQi）高速互連網路連接，每節點頻寬達每秒1.6 terabit（Tbps），採用四層胖樹（fat-tree）拓撲，其中含一層光纖層。全系統採液冷散熱設計。

  ## 效能與耗電

  LineShine的2.2 exaflops Linpack成績相當於其2.74 exaflops理論峰值效能的80%。相比之下，美國三套exascale系統——El Capitan、Frontier與Aurora——在Linpack測試中各自僅能維持理論峰值的50%至65%，據ServeTheHome報導。

  Top500官方提交資料顯示，LineShine整套系統的總功耗為42百萬瓦（MW），能效約為每瓦52 gigaflops。El Capitan的能效約為每瓦60 gigaflops；ServeTheHome將這項差距歸因於純CPU設計相較GPU系統在運算密度上的先天劣勢。

  在高性能共軛梯度（HPCG）基準測試方面，LineShine同樣奪得第一。HPCG測試的運算模式更貼近真實科學模擬應用，被認為比Linpack更能反映實際應用效能。2026年6月榜單的HPCG成績如下：

  - LineShine（中國）：22.00 HPCG-petaflops/s
  - El Capitan（美國）：17.41 HPCG-petaflops/s
  - Fugaku（日本）：16.00 HPCG-petaflops/s
  - Frontier（美國）：14.05 HPCG-petaflops/s

  ## 前十名大洗牌

  El Capitan與Frontier均採AMD處理器，分別位居第二與第三。由英特爾GPU加速器驅動的Aurora排名第四。德國的JUPITER Booster是歐洲目前唯一達到exascale等級的系統，以略超1 exaflops的成績位居第五。此次是Top500排行榜史上首度前五名系統全數突破1 exaflops。

  時隔四年，AMD處理器驅動的系統再度讓出榜首。AMD繪圖處理器目前支撐前十名中的四套系統。輝達（NVIDIA）則以Hopper架構GPU系統分別占據第五、第七與第十名共三個席位。排名第四的Aurora是榜單上唯一採用英特爾GPU的系統；英特爾CPU亦為第七名、採用輝達硬體的Eagle系統提供支援。

  本次新入榜的義大利Eni S.p.A. HPC7以571 petaflops奪得第六名。該系統採用AMD MI300A處理器，搭載HPE Cray EX255a平台——與El Capitan使用相同硬體，但規模較小——總功耗為8.7 MW。

  由富士通打造的日本Fugaku，為採用Armv8純CPU架構的系統，此前一直是Top500榜單中排名最高的純CPU超級電腦，此次位居第九。

  ## 產業意義

  LineShine是Top500史上首套以純CPU架構（不含GPU加速器）奪得榜首的系統。據ServeTheHome指出，NSCS此次提交的系統也是中國非聯想（Lenovo）機構相隔一段時日後再度闖入榜首的案例。隨著Fugaku位居第九，本次榜單前十名中同時出現兩套基於Arm架構的純CPU系統。

  ServeTheHome亦指出，部分以AI為重心的硬體廠商正逐漸移除對64位元雙精度浮點運算（FP64）的支援——這是Linpack及多數科學模擬程式碼所依賴的數值標準——轉而優化AI訓練所用的混合精度運算吞吐量。這一架構趨勢未來可能影響AI最佳化系統在Top500上的排名表現。
date: "2026-06-25"
source_published: "2026-06-24T03:46:35.000Z"
category: "compute"
secondary_categories: []
region: ["China"]
vendor: ["AMD", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Arm CPUs Take Number 1 in Latest Top500 List with Chinese LineShine (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://www.servethehome.com/arm-cpus-take-number-1-in-latest-top500-list-with-chinese-lineshine/"
    title: "Arm CPUs Take Number 1 in Latest Top500 List with Chinese LineShine"
    trust: 3
    type: primary
    published_at: "2026-06-24T03:46:35.000Z"
  - url: "https://tekno.kompas.com/read/2026/06/24/13030017/tanpa-gpu-nvidia-superkomputer-china-jadi-yang-tercepat-di-dunia"
    title: "Tanpa GPU Nvidia, Superkomputer China Jadi yang Tercepat di Dunia"
    trust: 3
    type: corroborating
    published_at: "2026-06-24T06:03:00.000Z"
---
