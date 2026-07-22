---
title_en: "NVIDIA launches 102.4 Tbps Spectrum-6 Ethernet switch for gigascale AI factories"
title_zh: "輝達推出每秒102.4兆位元Spectrum-6交換器，瞄準超大規模AI工廠"
summary_en: "NVIDIA has launched the Spectrum-6, a 102.4-terabit-per-second Ethernet switch system built for gigascale AI infrastructure, with CoreWeave, Microsoft, Nebius, SpaceXAI and Tesla among the first adopters. The product doubles the capacity of its predecessor and forms part of NVIDIA's broader Vera Rubin AI platform."
summary_zh: "輝達正式發布Spectrum-6乙太網路交換器系統，傳輸速率達每秒102.4兆位元，專為超大規模AI基礎架構設計；CoreWeave、微軟、Nebius、SpaceXAI與特斯拉已列為首批採用業者，產品同時納入輝達Vera Rubin AI平台。"
body_en: |
  NVIDIA has launched the Spectrum-6 Ethernet switch system, a 102.4-terabit-per-second fabric designed for AI factories operating at gigascale, with CoreWeave, Microsoft, Nebius, SpaceXAI and Tesla identified as early adopters.

  The Spectrum-6 is the latest generation of NVIDIA's Spectrum-X Ethernet platform, which the company positions specifically for large AI deployments rather than conventional enterprise networking. At 102.4 terabits per second — a measure of how much data the switch can move each second — it offers twice the throughput of the previous generation. The switch is part of NVIDIA's Vera Rubin platform, a broader hardware stack that also includes the Vera central processing unit, the Rubin graphics processing unit, the NVLink 6 Switch and the BlueField-4 data processing unit.

  CoreWeave, Microsoft and Nebius are expected to be among the first infrastructure providers to make Vera Rubin-based systems incorporating Spectrum-6 available to developers, startups and enterprises, according to NVIDIA.

  ## Why networking has become a focal point for AI clusters

  The launch comes as AI operators assemble clusters containing hundreds of thousands of GPUs (graphics processing units used to run AI workloads) and CPUs for model training and inference. At that scale, network performance has become a constraint. During large collective computing tasks — operations where thousands of chips must synchronise their work continuously — processors exchange data in dense east-west patterns that differ from conventional enterprise traffic, which moves primarily between users, servers and storage.

  NVIDIA argues that raw processor performance is no longer the sole determinant of an AI factory's output. Slower links or network failures during collective operations can stall an entire training job, effectively idling thousands of chips simultaneously.

  Min Jun, Director of Product for Networking at CoreWeave, said in a statement that networking is central to delivering performance at scale. "Bringing NVIDIA Spectrum-6 and liquid-cooled Spectrum-X Ethernet infrastructure into our AI factories will help us deliver the bandwidth, resilience and efficiency customers need to train frontier models and deploy inference faster," Jun said.

  Laurelle Roseman, Vice President of Global Partnerships at Nebius, described the problem in operational terms. "At gigascale, performance comes down to coordination: keeping every GPU in lockstep so one slow link doesn't stall an entire job," Roseman said. "That's what NVIDIA Spectrum-6 goes after, and why we brought it in early — a fabric that stays fast and resilient as our customers' most demanding workloads scale."

  ## Performance claims and specifications

  NVIDIA says the Spectrum-X platform, which combines Spectrum-6 switches with ConnectX-9 SuperNICs (high-performance network interface cards) and dedicated networking software, delivers up to 1.6 times higher AI networking performance than standard Ethernet products. The company says it can sustain up to 95% network efficiency — meaning 95% of theoretical maximum throughput — in deployments exceeding 100,000 GPUs.

  NVIDIA also says hardware-accelerated multiplane topologies enabled by the platform can reduce the total number of switches required in a data centre by 1.7 times, a figure relevant to operators managing capital expenditure and physical space at large scale.

  On power and reliability, the company says its Spectrum-X Ethernet Photonics technology can improve power efficiency by up to five times compared to alternatives and can increase mean time between incidents — a measure of how long the network operates before a disruptive event — by ten times.

  The Spectrum-6 supports both pluggable and co-packaged optics, two methods of integrating the optical components that transmit data over fibre. The product line also includes liquid-cooled configurations, relevant as AI data centres face growing thermal loads from high-density compute and networking equipment.

  The platform supports open network operating systems and multiple RDMA (Remote Direct Memory Access) transport models. RDMA allows servers to exchange data without involving the main processor, reducing latency during collective operations. Support for open operating systems and multiple transport models may appeal to operators seeking architectural flexibility alongside NVIDIA hardware.

  ## Significance for AI infrastructure operators

  The Spectrum-6 launch signals that competition in AI infrastructure has moved well beyond processors. Networking, cooling and full-system design are now active fronts as cloud providers and AI operators seek to keep ever-larger clusters fully utilised. For a cloud operator, a faster and more tightly managed network can allow more compute resources to function as a single pool, improving the economics of large training runs and inference services.

  CoreWeave, Microsoft and Nebius are expected to extend access to Vera Rubin-based systems with Spectrum-6 to external customers, according to NVIDIA.
body_zh: |
  輝達（NVIDIA）正式推出Spectrum-6乙太網路交換器系統，傳輸速率達每秒102.4兆位元，專為超大規模AI工廠打造；CoreWeave、微軟（Microsoft）、Nebius、SpaceXAI與特斯拉（Tesla）已確認為首批採用業者。

  Spectrum-6是輝達Spectrum-X乙太網路平台的最新世代產品。輝達將這套平台定位於大型AI部署，而非一般企業網路。每秒102.4兆位元的傳輸速率——代表交換器每秒能移動的資料量——是前一世代的兩倍。Spectrum-6隸屬輝達Vera Rubin平台，這套更廣泛的硬體堆疊還涵蓋Vera中央處理器（CPU）、Rubin繪圖處理器（GPU）、NVLink 6交換器，以及BlueField-4資料處理器（DPU）。

  根據輝達表示，CoreWeave、微軟與Nebius預計將率先提供搭載Spectrum-6的Vera Rubin系統，讓開發者、新創企業與一般企業均可使用。

  ## 為何網路已成為AI叢集的核心焦點

  此次發布，正值AI業者積極組建包含數十萬顆GPU（用於執行AI工作負載的繪圖處理器）與CPU的叢集，以進行模型訓練與推論。在這樣的規模下，網路效能已成為制約瓶頸。在大型集體運算任務中——也就是數千顆晶片必須持續協調運作的操作——處理器之間以密集的東西向流量交換資料，這與傳統企業流量截然不同；後者主要在使用者、伺服器與儲存裝置之間流動。

  輝達主張，單純的處理器效能已不再是決定AI工廠產出的唯一因素。集體運算期間若發生連線速度過慢或網路中斷，便可能拖垮整個訓練任務，使數千顆晶片同時陷入閒置。

  CoreWeave網路產品總監閔俊（Min Jun）在聲明中指出，網路是大規模交付效能的核心所在。「將輝達Spectrum-6與液冷Spectrum-X乙太網路基礎架構導入我們的AI工廠，將協助我們提供客戶訓練前沿模型、加速推論所需的頻寬、韌性與效率，」閔俊表示。

  Nebius全球合作夥伴副總裁蘿瑟曼（Laurelle Roseman）則從營運角度闡述了這個問題。「在超大規模的環境下，效能取決於協調能力：讓每顆GPU保持同步，這樣一條慢速連線就不會拖垮整個任務，」蘿瑟曼說道。「這正是輝達Spectrum-6所鎖定的目標，也是我們提早引入的原因——一套在客戶最嚴苛工作負載持續擴展時，仍能維持高速與韌性的網路架構。」

  ## 效能宣稱與規格

  輝達表示，Spectrum-X平台——結合Spectrum-6交換器、ConnectX-9超級網路卡（高效能網路介面卡）及專屬網路軟體——所提供的AI網路效能，比標準乙太網路產品提升最多1.6倍。該公司表示，在超過10萬顆GPU的部署規模下，可維持最高達95%的網路效率，即理論最大吞吐量的95%。

  輝達亦表示，該平台支援的硬體加速多平面拓撲，可將資料中心所需的交換器總數降低1.7倍，對於在大規模環境下管理資本支出與實體空間的業者而言，這是相當關鍵的數字。

  在電力效率與可靠性方面，輝達表示其Spectrum-X乙太網路光子技術，相較於其他解決方案可提升最多五倍的電力效率，並可將平均事件間隔時間——即網路在發生中斷事件之前的持續運作時長——延長十倍。

  Spectrum-6同時支援可插拔光模組與共封裝光學（co-packaged optics）兩種整合光學元件的方式，以利資料透過光纖傳輸。產品線亦提供液冷配置，對於因高密度運算與網路設備而面臨散熱壓力日益沉重的AI資料中心而言，格外具有實用價值。

  此平台支援開放式網路作業系統，以及多種RDMA（遠端直接記憶體存取）傳輸模式。RDMA允許伺服器在不動用主處理器的情況下直接交換資料，可降低集體運算期間的延遲。對開放作業系統及多種傳輸模式的支援，可能吸引那些在採用輝達硬體之餘，仍希望保有架構彈性的業者。

  ## 對AI基礎架構業者的意義

  Spectrum-6的推出顯示，AI基礎架構的競爭早已超越處理器本身。網路、冷卻與完整的系統設計，如今已成為雲端業者與AI業者的重要戰場，雙方都在尋求讓規模日益龐大的叢集充分發揮效用。對雲端業者而言，更快速、管理更嚴密的網路，可讓更多運算資源整合為單一資源池運作，進而改善大型訓練任務與推論服務的經濟效益。

  根據輝達表示，CoreWeave、微軟與Nebius預計將向外部客戶開放搭載Spectrum-6的Vera Rubin系統使用權。
date: "2026-07-23"
source_published: "2026-07-22T15:45:00.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["CoreWeave", "Nebius", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA launches Spectrum-6 switch for AI factories (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-launches-spectrum-6-switch-for-ai-factories"
    title: "NVIDIA launches Spectrum-6 switch for AI factories"
    trust: 3
    type: primary
    published_at: "2026-07-22T15:45:00.000Z"
---
