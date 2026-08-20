---
title_en: "Cisco, Broadcom, and Nvidia converge on 102.4 Tbps Ethernet switches for AI clusters"
title_zh: "思科、博通與輝達齊推102.4 Tbps交換晶片，搶攻AI叢集網路"
summary_en: "Cisco, Broadcom, and Nvidia are each shipping or readying 102.4 terabit-per-second Ethernet switching chips designed to sustain the bandwidth and latency demands of large GPU clusters, with the first products expected to reach broad availability before the end of 2026."
summary_zh: "思科、博通與輝達各自推出或積極備貨每秒102.4兆位元（Tbps）乙太網路交換晶片，目標鎖定大規模GPU叢集的頻寬與低延遲需求；思科首批產品預計2026年底前廣泛出貨。三家業界巨頭同步發力，揭示網路架構已成為AI資料中心效能的核心瓶頸。"
body_en: |
  Cisco, Broadcom, and Nvidia are each shipping or readying 102.4 terabit-per-second (Tbps) Ethernet switching chips aimed at the bandwidth and latency demands of large GPU clusters, with Cisco's first products expected to reach broad availability before the end of 2026.

  The simultaneous push reflects a growing consensus among infrastructure planners that the network fabric, not compute hardware alone, determines how productively a large GPU deployment operates. "A company can spend billions on GPUs, but if the fabric cannot deliver predictable bandwidth and low latency, they did not buy an AI supercomputer; they bought an expensive collection of stranded chips," said Sameh Boujelbene, Vice President of Research at Dell'Oro Group.

  ## Cisco Silicon One: two chips for two segments

  Cisco is addressing two distinct connectivity challenges with separate chips under its Silicon One product line, both announced in February 2026 and detailed further at Cisco Live in June.

  The Silicon One G300 targets scale-out networking — the connections between racks of GPUs inside a single data center. The chip delivers 102.4 Tbps of aggregate bandwidth across 512 lanes each running at 200 gigabits per second (Gbps). It integrates real-time telemetry, identity-aware forwarding, and traffic visibility. When congestion appears, the chip reroutes packets immediately rather than queuing them. "The networking enables GPUs to work as a supercomputer. No matter the AI traffic bursts, we can deal with it," said Nick Kucharewski, Senior Vice President and General Manager of Cisco Silicon One. The G300 is aimed at training, inference, and real-time agentic workloads in large-cluster environments and is expected to ship broadly before the end of 2026.

  The Silicon One P200 handles scale-across connectivity — links between separate data centers carried over optical fiber. It provides 51.2 Tbps across 512 lanes at 100 Gbps each, and is paired with external high-bandwidth memory (HBM, a type of high-speed stacked memory integrated with the chip) to create deep packet buffers that absorb traffic spikes over long-distance links. "The Cisco 9000 with the P200 inside allows optical fiber to operate close to capacity for long periods. Its deep buffer is effective in dealing with congestion," Kucharewski said. Select customers already have early access to P200 systems. Cisco has scheduled 28.8 Tbps switches based on the chip for Q3 2026, with 51.2 Tbps models due before year-end.

  ## Broadcom Tomahawk 6

  Broadcom's Tomahawk 6 (BCM78910 series) also reaches 102.4 Tbps and targets scale-out and scale-up AI networks used for training and inference. It is offered with 512 or 1,024 lanes and 64 ports, enabling 1.6 terabit Ethernet switching and routing. Its design emphasizes load balancing and congestion management to maximize network utilization and minimize job completion time. "By enhancing link stability and energy efficiency, we're enabling smoother, more cost-effective AI model training," said Near Margalit, Vice President and General Manager of the Optical Systems Division at Broadcom. "We designed this platform to scale large AI clusters by delivering on the three imperatives for optical interconnect: higher model FLOPs utilization, reduced job interruptions, and improved cluster reliability."

  ## Nvidia Spectrum-6

  Nvidia's Spectrum-6 is a 102.4 Tbps networking application-specific integrated circuit (ASIC) for Ethernet switches, part of the company's Spectrum-X Ethernet platform. The platform incorporates real-time predictive performance features intended to handle the bursty, synchronized communication patterns that AI training workloads generate — patterns that standard Ethernet, designed for user-to-server and server-to-storage traffic, was not built to manage. "Ethernet was designed primarily for enterprise applications and north-south traffic moving between users, servers and storage. It wasn't created for the synchronized, collective-heavy communication patterns of gigascale AI; Spectrum-X Ethernet changes that," said Scot Schulz, Senior Director of HPC and Technical Computing at Nvidia.

  ## Liquid cooling for high-density switches

  AI-class switching silicon generates enough heat that air cooling alone is insufficient for top-end configurations. Cisco mounts cold plates directly on its G300 and P200 chips, as well as other heat-intensive components inside Nexus 9000 and other Silicon One switches, connecting them to rack- or facility-level liquid cooling loops. The company offers configurations ranging from fully liquid-cooled to partially liquid-cooled to air-only depending on customer requirements. "There are differing needs from different customers, so we offer a range of different switches — some that are 100% liquid cooled, some partially liquid cooled, and some only air cooled," Kucharewski said.

  ## Who buys first

  Boujelbene expects hyperscalers, neocloud providers — companies operating large GPU-as-a-service platforms — and sovereign AI cloud operators to lead adoption. Enterprise data centers, most of which do not yet run AI workloads that justify the investment, will follow as the technology matures. "Enterprises do not need to refresh everything overnight, but they do need to stop treating AI networking as an incremental upgrade. For serious GPU deployments, the network has to be designed as part of the compute system — not bolted on afterward," Boujelbene said.

  ## Network silicon on the critical path

  The convergence of three major vendors on the same 102.4 Tbps class marks network silicon as a design-critical element in AI data centers, on par with the GPUs it connects. Rack power densities exceeding 100 kilowatts (kW) are increasingly common, and sustaining high GPU utilization at that density requires fabric bandwidth that keeps pace. Cisco's G300 and P200 are scheduled for broad customer availability before the end of 2026, with Broadcom and Nvidia pursuing parallel timelines at the same performance tier.
body_zh: |
  思科（Cisco）、博通（Broadcom）與輝達（NVIDIA）各自推出或積極備貨每秒102.4兆位元（Tbps）乙太網路交換晶片，專為大規模GPU叢集的頻寬與低延遲需求量身打造；其中思科首批產品預計在2026年底前正式廣泛出貨。

  三家廠商同步加速，反映出基礎架構規劃者日益形成的共識：決定大型GPU部署能否高效運作的關鍵，不只是運算硬體本身，更在於整體網路架構。「一家公司可以花數十億美元購置GPU，但如果網路架構無法提供可預期的頻寬與低延遲，他們買到的不是AI超級電腦，而是一堆昂貴的閒置晶片。」Dell'Oro Group研究副總裁薩梅赫·布傑爾伯內（Sameh Boujelbene）如此表示。

  ## 思科Silicon One：兩款晶片，兩大市場

  思科以旗下Silicon One產品線推出兩款獨立晶片，分別應對不同的連接挑戰。兩款晶片均於2026年2月發表，並在6月的Cisco Live大會上進一步揭露細節。

  Silicon One G300定位於規模橫向擴展網路（scale-out networking），負責單一資料中心內各GPU機架之間的互連。這款晶片提供102.4 Tbps的總頻寬，共512條通道，每條通道傳輸速率達200 Gbps。晶片內建即時遙測、具備身份識別能力的封包轉發，以及流量可視化功能；一旦偵測到壅塞，便立即重新路由封包，而非讓封包停留在佇列中等待。「網路讓GPU能夠像超級電腦一樣協同運作。無論AI流量如何暴增，我們都能應對。」思科Silicon One資深副總裁暨總經理尼克·庫察雷夫斯基（Nick Kucharewski）說道。G300適用於大型叢集環境中的訓練、推論與即時代理式（agentic）工作負載，預計在2026年底前正式廣泛出貨。

  Silicon One P200則負責規模跨域擴展連接（scale-across connectivity），處理不同資料中心之間透過光纖相連的遠距鏈路。P200提供51.2 Tbps的頻寬，共512條通道，每條通道100 Gbps；並搭配外部高頻寬記憶體（HBM，一種與晶片整合的高速堆疊記憶體），形成深度封包緩衝區，用以吸收長距離鏈路上的突發流量。「搭載P200的Cisco 9000讓光纖能夠長時間接近滿載運行，其深度緩衝區在處理壅塞方面相當有效。」庫察雷夫斯基說。部分客戶已取得P200系統的早期存取資格。思科預計於2026年第三季推出基於P200的28.8 Tbps交換器，51.2 Tbps型號則預計在年底前到位。

  ## 博通Tomahawk 6

  博通的Tomahawk 6（BCM78910系列）同樣達到102.4 Tbps，目標市場為用於訓練與推論的規模橫向及縱向擴展AI網路。該晶片提供512或1,024條通道及64個連接埠，支援1.6 Tbps乙太網路的交換與路由。其設計核心在於負載均衡與壅塞管理，以最大化網路使用率、縮短工作完成時間。「透過提升鏈路穩定性與能源效率，我們讓AI模型訓練更順暢、更具成本效益。」博通光學系統事業部副總裁暨總經理尼爾·瑪爾加利特（Near Margalit）表示。「我們設計這個平台，旨在透過光互連三大核心要求來擴展大型AI叢集：提高模型FLOPs使用率、減少工作中斷，以及提升叢集可靠性。」

  ## 輝達Spectrum-6

  輝達的Spectrum-6是一款用於乙太網路交換器的102.4 Tbps網路專用積體電路（ASIC），屬於該公司Spectrum-X乙太網路平台的一部分。該平台整合了即時預測性效能功能，專為應對AI訓練工作負載所產生的突發性、同步化通訊模式而設計——而這類模式，正是當初為使用者對伺服器、伺服器對儲存裝置之流量而設計的標準乙太網路所無法妥善處理的。「乙太網路最初主要針對企業應用與南北向流量而設計，也就是使用者、伺服器與儲存裝置之間的流量，並非為了巨量規模AI中那種同步、集體通訊密集的通訊模式而設計。Spectrum-X乙太網路正是要改變這一現狀。」輝達高效能運算與技術運算資深總監史考特·舒茲（Scot Schulz）說道。

  ## 高密度交換器的液態冷卻方案

  AI等級的交換晶片所產生的熱量，使得純氣冷方式在頂端配置中已不敷使用。思科在G300與P200晶片，以及Nexus 9000等Silicon One交換器內部其他高熱元件上直接安裝冷板，並連接至機架或設施層級的液態冷卻迴路。視客戶需求，思科提供從全液冷、部分液冷到純氣冷等多種配置選項。「不同客戶有不同需求，因此我們提供各種交換器選擇——有些是百分之百液冷、有些是部分液冷，也有些是純氣冷。」庫察雷夫斯基說。

  ## 誰會率先採購

  布傑爾伯內預期，超大規模雲端業者（hyperscaler）、新興雲端服務商（neocloud，即經營大型GPU即服務平台的業者），以及主權AI雲端運營商將率先採用。至於多數企業資料中心，目前尚未運行能夠合理化這項投資的AI工作負載，預計待技術更加成熟後才會跟進。「企業不需要一夜之間汰換所有設備，但確實需要停止把AI網路視為漸進式升級。對於認真部署GPU的場景，網路必須作為運算系統的一部分來規劃設計，而非事後才強行拼湊。」布傑爾伯內說。

  ## 網路晶片躍升關鍵路徑

  三大廠商同步聚焦於同一等級的102.4 Tbps，標誌著網路晶片已成為AI資料中心中與GPU同等重要的核心設計要素。機架功率密度超過100千瓦（kW）的情況日益普遍，要在這樣的高密度下維持高GPU使用率，需要同步跟上的架構頻寬。思科G300與P200預計在2026年底前正式廣泛提供給客戶，博通與輝達則以相同的效能等級，同步推進各自的出貨時程。
date: "2026-08-21"
source_published: "2026-08-20T09:00:00.000Z"
category: "networking"
secondary_categories: ["compute"]
updates: "networking/2026-07-23-nvidia-launches-1024-tbps-spectrum-6-ethernet-switch-for-gigascale-ai-factories"
region: []
vendor: ["Broadcom", "Cisco", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: AI Data Center Networking: Scaling Up, Out, and Across with 102.4T Ethernet (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/networking/ai-data-center-networking-scaling-up-out-and-across-with-102-4t-ethernet"
    title: "AI Data Center Networking: Scaling Up, Out, and Across with 102.4T Ethernet"
    trust: 3
    type: primary
    published_at: "2026-08-20T09:00:00.000Z"
---
