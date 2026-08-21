---
title_en: "BrainChip adds Akida neuromorphic processors to IBM Symphony workload scheduler"
title_zh: "BrainChip將Akida神經形態處理器接入IBM Symphony排程器"
summary_en: "BrainChip has released a free, open-source bundle that integrates its Akida neuromorphic processors with IBM Spectrum Symphony Community Edition's workload scheduler, letting enterprises route lightweight AI inference tasks away from GPUs to lower-power neuromorphic hardware."
summary_zh: "BrainChip正式推出免費開源套件，將旗下Akida神經形態處理器與IBM Spectrum Symphony Community Edition工作負載排程器整合，讓企業能將輕量AI推論任務從繪圖處理器（GPU）導向耗電更低的神經形態硬體處理。"
body_en: |
  BrainChip has released the Symphony Community Akida Bundle, a free, open-source software package that integrates its Akida neuromorphic processors with IBM Spectrum Symphony Community Edition's workload scheduler, giving enterprises a way to direct lightweight artificial intelligence (AI) inference tasks away from graphics processing units (GPUs). Neuromorphic chips are designed around event-driven computation rather than the parallel processing architecture used in conventional GPUs and central processing units (CPUs).

  The bundle allows a single scheduler to allocate inference workloads across CPUs, GPUs, and Akida processors simultaneously, rather than routing all tasks to GPU hardware by default. IBM Spectrum Symphony Community Edition is an enterprise workload management and orchestration platform used for assigning tasks across different processor types in data center and on-premises server environments.

  According to BrainChip, the original technical work connecting Akida to Symphony was carried out by IBM Field CTO Kevin D. Johnson. IBM has not issued a separate statement on the launch.

  ## How hybrid scheduling works

  Under the new setup, a Symphony operator can configure the scheduler to send lighter inference jobs to Akida hardware while heavier workloads continue to run on GPUs or CPUs. BrainChip described the bundle as a way to unify CPU, GPU, and neuromorphic workloads within one managed environment, using an orchestration framework already familiar to enterprise users.

  Steve Brightfield, Chief Product Officer at BrainChip, framed the release as addressing a gap in how enterprises currently handle smaller inference jobs. "Enterprises burn GPU cycles on both large and small inference jobs because the compute systems have had little alternative," Brightfield said. "Now these small inference jobs can be scheduled on Akida, a first-class compute resource for reduced latency and power."

  ## BrainChip's push into enterprise data centers

  The launch marks a shift in BrainChip's commercial positioning. The company has been primarily associated with edge AI, meaning processing performed at the device level outside centralized data center environments. The Symphony integration gives it a more direct path into enterprise infrastructure used in private data centers and on-premises installations.

  That shift comes as enterprise AI spending has centred heavily on GPUs, while concerns about power consumption, cooling, and hardware utilization have grown more prominent. BrainChip's proposition is that not all inference tasks require the same class of processor, and that neuromorphic hardware can handle smaller, event-driven workloads that do not justify GPU resources.

  ## Market size and developer focus

  Interest in neuromorphic computing remains limited relative to the broader AI chip market. BrainChip cited estimates from Grand View Research valuing the neuromorphic computing market at USD $5.3 billion in 2023 and projecting it would reach USD $20.3 billion by 2030.

  The bundle targets developers rather than production deployments, indicating BrainChip is pursuing early technical adoption ahead of wider enterprise use. Connecting Akida to a scheduler already in use at many enterprises may lower the barrier for engineering teams that want to test alternative inference paths without redesigning existing infrastructure.

  The bundle is available through BrainChip's developer channel as open-source software.
body_zh: |
  BrainChip正式發布Symphony Community Akida Bundle，這是一款免費開源軟體套件，將旗下Akida神經形態處理器與IBM Spectrum Symphony Community Edition工作負載排程器整合，為企業提供一種將輕量型人工智慧（AI）推論任務從繪圖處理器（GPU）卸載的途徑。神經形態晶片的設計以事件驅動運算為核心，有別於傳統GPU與中央處理器（CPU）所採用的平行處理架構。

  這套套件讓單一排程器能夠同時將推論工作負載分配至CPU、GPU與Akida處理器，而非預設將所有任務導向GPU硬體。IBM Spectrum Symphony Community Edition是一套企業級工作負載管理與協調平台，用於在資料中心及本地端伺服器環境中，跨不同處理器類型分配任務。

  據BrainChip表示，最初將Akida與Symphony串接的技術工作，由IBM現場技術長（Field CTO）Kevin D. Johnson負責完成。IBM方面並未就此次發布另行發表聲明。

  ## 混合排程的運作方式

  在新架構下，Symphony的操作人員可設定排程器，將較輕量的推論任務傳送至Akida硬體，而較繁重的工作負載則繼續在GPU或CPU上執行。BrainChip將這套套件定位為在單一受管環境中統一CPU、GPU與神經形態工作負載的解決方案，且所採用的協調框架正是企業用戶早已熟悉的工具。

  BrainChip首席產品官Steve Brightfield表示，這次發布旨在填補企業目前處理小型推論任務時的缺口。「企業之所以在大型與小型推論任務上都大量消耗GPU運算資源，是因為運算系統過去幾乎別無選擇，」Brightfield說，「現在，這些小型推論任務可以排程到Akida上執行，作為降低延遲與功耗的一等運算資源。」

  ## BrainChip積極布局企業資料中心

  這次發布標誌著BrainChip在商業定位上的重要轉變。該公司過去主要與邊緣AI領域畫上等號，也就是在集中式資料中心環境以外、於裝置端執行的處理工作。Symphony整合讓BrainChip得以更直接地切入私有資料中心與本地端建置所使用的企業基礎設施。

  這一轉變恰好發生在企業AI支出大量集中於GPU之際，而功耗、散熱與硬體利用率等問題也日益受到關注。BrainChip的主張是：並非所有推論任務都需要同等級的處理器，神經形態硬體能夠承擔那些不值得動用GPU資源的小型、事件驅動型工作負載。

  ## 市場規模與開發者策略

  相較於整體AI晶片市場，神經形態運算目前的關注度仍相當有限。BrainChip引用Grand View Research的市調數據，指出神經形態運算市場在2023年的規模約為53億美元，預計到2030年將成長至203億美元。

  這套套件以開發者為主要目標受眾，而非直接瞄準正式生產部署，顯示BrainChip正在更廣泛的企業採用到來之前，優先爭取早期技術採用者。將Akida與許多企業早已在使用的排程器接軌，有助於降低工程團隊的試驗門檻，讓他們能夠在不重新設計現有基礎設施的前提下，測試替代推論路徑。

  這套套件已透過BrainChip的開發者管道，以開源軟體形式公開提供。
date: "2026-08-22"
source_published: "2026-08-20T18:15:00.000Z"
category: "compute"
secondary_categories: ["software-ops"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: BrainChip links Akida processors with IBM Symphony (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/brainchip-links-akida-processors-with-ibm-symphony"
    title: "BrainChip links Akida processors with IBM Symphony"
    trust: 3
    type: primary
    published_at: "2026-08-20T18:15:00.000Z"
---
