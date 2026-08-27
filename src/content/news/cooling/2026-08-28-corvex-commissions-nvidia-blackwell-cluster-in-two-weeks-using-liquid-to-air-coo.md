---
title_en: "Corvex commissions NVIDIA Blackwell cluster in two weeks using liquid-to-air cooling"
title_zh: "Corvex兩週完成輝達Blackwell叢集建置，液冷轉氣冷破解七個月建設瓶頸"
summary_en: "Corvex, Inc. commissioned a high-density NVIDIA HGX B200 GPU cluster inside an existing air-cooled data center in approximately two weeks by using Lenovo Neptune liquid-to-air cooling, bypassing the facility-wide conversions that typically extend AI infrastructure timelines to seven months or more. The deployment underpins a fully delivered multi-year agreement with an undisclosed customer, with Corvex reporting approximately $22 million in contracted annualized recurring revenue."
summary_zh: "Corvex公司借助聯想Neptune液冷轉氣冷技術，在現有氣冷資料中心內以約兩週時間完成高密度輝達HGX B200 GPU叢集建置，繞過通常耗時七個月以上的全機房基礎設施改造工程。此次部署支撐了一份與未具名客戶簽訂的多年合約，Corvex公告年化合約經常性營收約達2,200萬美元。"
body_en: |
  Corvex, Inc. has commissioned a high-density NVIDIA HGX B200 GPU cluster inside an existing air-cooled data center in approximately two weeks by using Lenovo Neptune liquid-to-air cooling technology, a deployment model the company says allows it to bring current-generation AI accelerators online without first converting facility infrastructure to centralized liquid cooling.

  The deployment underpins a multi-year agreement Corvex announced August 4 with an undisclosed "leading AI company" to provide NVIDIA Blackwell GPU clusters connected through NVIDIA Quantum-2 InfiniBand, the high-speed interconnect used to link accelerators within a cluster. By its August 14 earnings update, Corvex said the agreement had been fully delivered. The company reported approximately $22 million in contracted annualized recurring revenue from compute that was live and accepted by customers. The expansion was financed through debt, customer prepayments, and cash on hand, not additional equity.

  ## How the deployment worked

  Corvex worked with Lenovo to install the cluster using Lenovo ThinkSystem servers equipped with NVIDIA HGX B200 GPUs. The cooling method — Lenovo Neptune liquid-to-air — removes heat from the servers using liquid and transfers it to the existing air-cooled facility infrastructure, allowing high-density systems to operate in a building not originally designed for centralized liquid cooling. The cluster also uses NVIDIA Quantum-2 QM9700 InfiniBand for GPU traffic, NVIDIA Spectrum SN5600 switches for storage networking, and SN2201 switches for management traffic.

  Lenovo, in a case study of the deployment, contrasts the approximately two-week commissioning period with what it describes as typical data center upgrade timelines of seven to twelve months or more. That gap has direct commercial significance. Power availability and suitable data center space are increasingly the binding constraints on GPU deployment. If the liquid-to-air approach proves repeatable, existing air-cooled facilities with sufficient power could accommodate higher-density AI systems without undergoing full infrastructure conversions, compressing the time between acquiring capacity and placing contracted workloads.

  ## Company background

  Corvex was founded in 2024 and commercially launched in 2025. In March 2026, the company completed an all-stock merger with Movano, giving the combined entity a Nasdaq listing under the ticker MOVE. Prior to the merger, Corvex and Movano raised $40.2 million to support expansion of the AI infrastructure business. Corvex also participates in the NVIDIA Cloud Partner program.

  Measured against larger neocloud providers — companies that build and operate large-scale GPU infrastructure for AI customers — Corvex remains small. CoreWeave reported $2.08 billion in first-quarter 2026 revenue, a $99.4 billion revenue backlog, more than 1 gigawatt of active power capacity, and more than 3.5 gigawatts of contracted power. In June, CoreWeave completed what it described as the industry's first operational bring-up and validation of Vera Rubin NVL72, NVIDIA's next-generation architecture. Lambda announced a $1 billion senior secured credit facility in May and a $926 million GPU infrastructure financing in August. Nebius reported more than 3.5 gigawatts of contracted capacity after the first quarter and is targeting more than 5 gigawatts of NVIDIA systems by 2030 under a partnership that includes a $2 billion NVIDIA investment.

  ## Infrastructure products and confidential computing

  Corvex describes its core products as AI Factories — integrated clusters combining accelerators, networking, storage, power, cooling, and systems software — along with GPU clusters, confidential computing, and Token Factory, an inference service that entered closed alpha in 2026. The company supports NVIDIA H200, B200, and B300 systems and can deliver infrastructure as bare metal or managed Kubernetes in single-tenant, multi-tenant, or on-premises configurations.

  The more differentiated part of the Corvex offering is confidential computing. Corvex has deployed confidential computing on NVIDIA HGX B200 systems using NVIDIA GPU Confidential Computing, Intel Trust Domain Extensions, and remote attestation — a process by which a system proves to an external party that its hardware and software meet defined security requirements. The company's Secure Model Weights technology is designed so that encryption keys are released only after the CPU and GPUs have passed hardware attestation. Model weights — the trained parameters that define an AI model's behavior — can then be decrypted inside protected GPU memory rather than being exposed to the cloud infrastructure operator.

  Co-Founder and Co-Chief Executive Officer Seth Demsey told Data Center Frontier that customers are coming to Corvex in part for a neocloud-style computing environment combined with greater emphasis on securing customer workloads. The security architecture addresses a specific concern for model developers using third-party GPU capacity: placing valuable model weights inside infrastructure controlled by another organization. Hardware-enforced confidential computing extends protection to data while it is being processed, not only while it is stored or in transit.

  ## What the deployment means for the market

  Corvex's nearer-term competitive position is in dedicated and customized deployments, security-sensitive workloads, and projects where quickly adapting existing powered data center capacity matters more than access to large new power blocks. The two-week commissioning result, if repeatable across other sites, provides a time-to-revenue argument for operators of existing air-cooled facilities who want to host current-generation AI hardware without the cost and schedule of a central liquid-cooling conversion.

  Token Factory, the company's inference service, entered closed alpha in 2026, representing an early step toward higher-margin software-layer services beyond infrastructure rental.
body_zh: |
  Corvex, Inc.透過聯想Neptune液冷轉氣冷技術，在一座現有氣冷資料中心內，以約兩週時間完成高密度輝達HGX B200 GPU叢集的建置與驗收。公司表示，這套部署模式讓企業無需事先將機房基礎設施全面改造為集中式液態冷卻系統，便能讓現行世代AI加速器迅速上線運作。

  此次部署支撐了Corvex於8月4日宣布的一份多年合約——合作對象為一家未具名的「領先AI企業」，提供透過輝達Quantum-2 InfiniBand高速互連技術串聯的輝達Blackwell GPU叢集；InfiniBand是用於連結叢集內各加速器的高速互連技術。至8月14日的財報更新，Corvex表示合約已全數履行完畢，並公告來自客戶已驗收上線運算資源的年化合約經常性營收約為2,200萬美元。此次擴張資金來源為債務融資、客戶預付款及既有現金，並未發行新股。

  ## 部署方式詳解

  Corvex與聯想合作，採用搭載輝達HGX B200 GPU的聯想ThinkSystem伺服器完成叢集建置。聯想Neptune液冷轉氣冷的冷卻方式，藉由液體介質將伺服器熱量導出，再移轉至現有氣冷機房的基礎設施，使高密度系統得以在原本並未針對集中式液冷設計的建築內正常運作。叢集另採用輝達Quantum-2 QM9700 InfiniBand處理GPU流量、輝達Spectrum SN5600交換器負責儲存網路，以及SN2201交換器處理管理流量。

  聯想在一份針對此次部署的案例研究中，將約兩週的建置工期與業界一般資料中心升級所需的七至十二個月以上時程相互對比。這段差距具有直接的商業意義。電力供應與合適的資料中心空間已日益成為GPU部署的關鍵制約因素。若液冷轉氣冷方案在其他場地同樣行得通，那麼電力充足的現有氣冷機房，便有機會在無需全面改造基礎設施的情況下，容納更高密度的AI系統，大幅壓縮從取得容量到承接合約工作負載之間的時間。

  ## 公司背景

  Corvex成立於2024年，2025年正式商業化。2026年3月，公司完成與Movano的全股票合併，使合併後的實體以代號「MOVE」在那斯達克掛牌上市。合併前，Corvex與Movano合計募集4,020萬美元，用以支持AI基礎設施業務的擴張。Corvex同時也是輝達雲端合作夥伴計畫的成員。

  對照規模較大的新雲端業者（neocloud，即為AI客戶建置及營運大規模GPU基礎設施的公司），Corvex目前規模仍屬偏小。CoreWeave公告2026年第一季營收達20.8億美元，營收積壓訂單高達994億美元，現行主動電力容量逾1吉瓦，合約電力逾3.5吉瓦；同年6月，CoreWeave完成業界首次Vera Rubin NVL72——輝達下一代架構——的投入運作與驗收。Lambda則於5月宣布取得10億美元優先有擔保信貸額度，並於8月完成9.26億美元的GPU基礎設施融資。Nebius在首季後宣告合約容量逾3.5吉瓦，並依據一項包含輝達20億美元投資在內的合作協議，目標於2030年前部署逾5吉瓦的輝達系統。

  ## 基礎設施產品與機密運算

  Corvex將核心產品定位為「AI工廠」——整合加速器、網路、儲存、電力、冷卻及系統軟體的一體化叢集——以及GPU叢集、機密運算，與2026年進入封閉測試的推論服務Token Factory。公司支援輝達H200、B200及B300系統，可以裸機或受管Kubernetes形式，於單租戶、多租戶或地端配置下交付基礎設施。

  Corvex服務中差異化程度較高的部分在於機密運算。Corvex已在輝達HGX B200系統上部署機密運算，採用輝達GPU機密運算技術、英特爾信任網域延伸（Intel Trust Domain Extensions）及遠端認證機制——即系統向外部方證明其硬體與軟體符合既定安全要求的程序。公司的安全模型權重（Secure Model Weights）技術在設計上，加密金鑰僅在CPU與GPU通過硬體認證後才予釋出。模型權重——定義AI模型行為的訓練參數——隨後在受保護的GPU記憶體內完成解密，而非暴露於雲端基礎設施營運商的環境中。

  共同創辦人暨共同執行長Seth Demsey向Data Center Frontier表示，客戶選擇Corvex，部分原因在於希望兼得新雲端風格的運算環境，同時對客戶工作負載的安全保護有更高要求。這套安全架構針對的是模型開發者使用第三方GPU容量時的特定疑慮：將寶貴的模型權重置於他方掌控的基礎設施之中。硬體強制執行的機密運算將防護範圍延伸至資料處於運算處理狀態時，而非僅止於儲存或傳輸階段。

  ## 部署對市場的意義

  Corvex近期的競爭優勢在於專屬化與客製化部署、安全敏感型工作負載，以及那些迅速盤活現有通電資料中心容量的急迫性，凌駕於取得大型全新電力區塊之上的專案情境。若兩週完成建置的成果能在其他場地重複實現，將為現有氣冷機房的營運商提供一項縮短收益時間的有力論據——毋需承擔集中式液冷改造的費用與工期，即可承接現行世代AI硬體。

  公司的推論服務Token Factory於2026年進入封閉測試，標誌著Corvex朝純基礎設施租賃以外、利潤率更高的軟體層服務邁出初步的一步。
date: "2026-08-28"
source_published: "2026-08-27T14:58:03.704Z"
category: "cooling"
secondary_categories: ["compute"]
region: []
vendor: ["CoreWeave", "Intel", "Nebius", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Corvex Tests a Faster Path to Liquid-Cooled AI Infrastructure (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/colocation/article/55400673/corvex-tests-a-faster-path-to-liquid-cooled-ai-infrastructure"
    title: "Corvex Tests a Faster Path to Liquid-Cooled AI Infrastructure"
    trust: 3
    type: primary
    published_at: "2026-08-27T14:58:03.704Z"
---
