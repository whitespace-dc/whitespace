---
title_en: "NVIDIA Adds NVHBM Memory Architecture to NVLink Fusion, Signs AWS as First Partner"
title_zh: "輝達將NVHBM記憶體架構納入NVLink Fusion，AWS率先簽署合作"
summary_en: "NVIDIA has extended its NVLink Fusion semi-custom AI infrastructure platform with a new high-bandwidth memory technology called NVHBM, which relocates the memory controller from the processor die into the HBM base die. Amazon's Annapurna Labs will be the first collaborator, with integration planned for the Trainium4 chip generation."
summary_zh: "輝達擴展半客製化AI基礎架構平台NVLink Fusion，推出名為NVHBM的新型高頻寬記憶體技術，將記憶體控制器從處理器晶粒移至HBM底層晶粒。亞馬遜旗下Annapurna Labs將成為首家合作夥伴，預計於Trainium4晶片世代導入此技術。"
body_en: |
  ## NVIDIA extends NVLink Fusion into memory architecture

  NVIDIA has expanded its NVLink Fusion platform with a new memory technology called NVHBM, moving beyond interconnect and system design to offer partners a standardised high-bandwidth memory architecture. Amazon Web Services, through its Annapurna Labs chip division, will be the first group to work with the technology, with adoption planned for the next generation of Amazon's Trainium AI training chips.

  NVHBM — NVIDIA's custom high-bandwidth memory — relocates the memory controller from the XPU (custom processor) die into the base die of the three-dimensional HBM (high-bandwidth memory) stack. In conventional HBM designs, the memory controller occupies space on the processor chip itself. NVIDIA says moving the controller into the memory stack frees up to 25% more silicon area on the XPU compute die, which can then be allocated to additional compute logic.

  ## Claimed performance and efficiency gains

  NVIDIA says NVHBM delivers the following compared with standard HBM4E, the current leading-edge HBM specification:

  - Up to 30% greater memory bandwidth
  - Up to 15% lower HBM power consumption
  - Up to 25% more freed compute area on the XPU die

  The company said the technology is based on the same memory architecture it plans to use in its own future GPUs. It will be validated and supplied by multiple memory partners, giving NVLink Fusion customers a standardised implementation that can be sourced from more than one vendor — a design choice NVIDIA said reduces the integration and qualification burden for chip designers working with different memory suppliers.

  ## AWS and Annapurna Labs

  Amazon's Annapurna Labs, the semiconductor arm behind AWS's custom silicon including the Trainium line of AI training chips, will be the first partner to develop NVHBM under a broader NVLink Fusion collaboration with NVIDIA. That work will also cover NVLink scale-up interconnect architecture for AI workloads.

  NVIDIA said support for NVLink Fusion is planned for the next generation of Trainium chips, starting with Trainium4. That integration would allow Amazon-designed chips and NVIDIA GPUs to operate together within a shared rack-scale architecture — meaning both types of processors could share the same high-speed interconnect fabric and system infrastructure.

  Nafea Bshara, Vice President of Annapurna Labs at Amazon, said in a statement: "NVHBM represents a new architectural approach to advancing high-bandwidth memory performance and efficiency. We look forward to this technology collaboration to benefit future AWS infrastructure designs."

  ## What NVLink Fusion provides

  NVLink Fusion is NVIDIA's framework for connecting custom XPUs and CPUs to its broader rack-scale platform. Partners gain access to NVLink chiplets, NVLink-C2C (chip-to-chip interconnect), NVLink switches, and MGX systems and racks, alongside an ecosystem of CPU partners, ASIC designers, system manufacturers, and other technology providers. NVIDIA positions the platform as a way for customers to concentrate engineering effort on their own processor design while relying on an existing stack for scale-up and scale-out networking, rack systems, and software.

  Adding memory architecture to that offering extends NVIDIA's role further into the surrounding design decisions of an AI system, beyond the GPU itself.

  ## Industry significance

  High-bandwidth memory has become a central constraint in AI system design as model sizes grow and data movement between processors and memory increasingly limits overall throughput. The conventional placement of the memory controller on the processor die consumes silicon that could otherwise be used for compute, a trade-off that becomes more costly as chip designers try to maximise the density of AI accelerators.

  NVIDIA's NVHBM approach addresses that constraint by shifting the controller into the memory stack, a structural change the company said standardises across multiple memory suppliers. For hyperscalers and AI infrastructure developers building semi-custom systems, that standardisation reduces the engineering work required to qualify memory from different vendors.

  The move also illustrates how NVIDIA is extending its influence into the broader architecture of AI data centres. Rather than supplying only finished GPUs, the company is offering interconnect, system design, and now memory architecture as a platform that outside partners can adopt alongside their own silicon. That positions NVIDIA centrally in AI infrastructure decisions even when customers are developing custom chips in-house.

  Amazon's early participation gives the effort a high-profile anchor customer with an established custom silicon programme. NVLink Fusion support is planned to begin with Trainium4, the next generation of Amazon's AI training chips.
body_zh: |
  ## 輝達將NVLink Fusion延伸至記憶體架構

  輝達將其NVLink Fusion平台擴展至全新記憶體技術，推出名為NVHBM的產品，觸角不再局限於互連與系統設計，更進一步為合作夥伴提供標準化的高頻寬記憶體架構。亞馬遜雲端服務（AWS）旗下晶片部門Annapurna Labs，將成為率先採用此技術的團隊，預計在下一世代亞馬遜Trainium AI訓練晶片中正式導入。

  NVHBM——即輝達的客製化高頻寬記憶體——將記憶體控制器從XPU（客製化處理器）晶粒，移至三維HBM（高頻寬記憶體）堆疊的底層晶粒。在傳統HBM設計中，記憶體控制器佔據的是處理器晶片本身的空間。輝達表示，將控制器移入記憶體堆疊後，可在XPU運算晶粒上釋放多達25%的矽晶面積，這些空間便可分配給額外的運算邏輯。

  ## 效能與效率提升幅度

  輝達表示，NVHBM相較於目前最先進的HBM規格HBM4E，可帶來以下優勢：

  - 記憶體頻寬提升最高達30%
  - HBM功耗降低最高達15%
  - XPU晶粒上可釋放的運算面積增加最高達25%

  該公司表示，此技術採用與自家未來GPU相同的記憶體架構。NVHBM將由多家記憶體合作夥伴進行驗證與供貨，為NVLink Fusion客戶提供可向多個供應商採購的標準化實作方案。輝達指出，此設計選擇有助於降低晶片設計者在對接不同記憶體供應商時的整合與認證負擔。

  ## AWS與Annapurna Labs

  亞馬遜旗下半導體部門Annapurna Labs，是AWS客製化晶片（包含Trainium系列AI訓練晶片）的幕後推手，將成為首家在更廣泛的NVLink Fusion合作框架下開發NVHBM的夥伴。此合作範疇亦涵蓋適用於AI工作負載的NVLink橫向擴展互連架構。

  輝達表示，NVLink Fusion的支援預計從下一世代Trainium晶片起導入，首發於Trainium4。此整合將使亞馬遜自研晶片與輝達GPU能在共用的機架規模架構下協同運作——意即兩種處理器可共享相同的高速互連架構與系統基礎設施。

  亞馬遜Annapurna Labs副總裁Nafea Bshara在聲明中表示：「NVHBM代表著提升高頻寬記憶體效能與效率的全新架構思路，我們期待透過此次技術合作，為未來AWS基礎設施設計帶來助益。」

  ## NVLink Fusion的定位與功能

  NVLink Fusion是輝達為連接客製化XPU與CPU至其更廣泛機架規模平台所建立的框架。合作夥伴可取用NVLink晶片組、NVLink-C2C（晶片對晶片互連）、NVLink交換器，以及MGX系統與機架，同時接觸涵蓋CPU夥伴、ASIC設計商、系統製造商及其他技術供應商的完整生態系。輝達將此平台定位為讓客戶專注於自身處理器設計的途徑，同時借助現有堆疊完成橫向擴展（scale-out）與縱向擴展（scale-up）網路、機架系統及軟體的部署。

  將記憶體架構納入此一平台，進一步延伸了輝達在AI系統周邊設計決策中的影響力，觸角已超越GPU本身。

  ## 產業意涵

  隨著模型規模持續擴大，處理器與記憶體之間的資料移動日益成為整體吞吐量的瓶頸，高頻寬記憶體已成為AI系統設計的核心限制所在。將記憶體控制器置於處理器晶粒上的傳統做法，耗用了本可用於運算的矽晶面積；當晶片設計者力圖最大化AI加速器密度時，此取捨的代價便愈發高昂。

  輝達的NVHBM方案透過將控制器移入記憶體堆疊來解決此一限制，這項結構性改變使輝達得以跨多家記憶體供應商推行標準化。對於建置半客製化系統的超大規模雲端業者及AI基礎設施開發商而言，此標準化大幅降低了對不同供應商記憶體進行認證所需的工程投入。

  此舉亦清楚揭示輝達如何將影響力延伸至AI資料中心的整體架構。輝達不再僅供應成品GPU，而是將互連、系統設計乃至記憶體架構整合為一套外部夥伴可在自研矽晶之外採用的平台，從而使輝達在客戶自主開發客製化晶片的同時，仍居於AI基礎設施決策的核心位置。

  亞馬遜的率先加入，為這項技術提供了一個擁有成熟客製化晶片計畫的高知名度領頭客戶。NVLink Fusion的支援預計從亞馬遜下一世代AI訓練晶片Trainium4開始導入。
date: "2026-08-29"
source_published: "2026-08-28T15:30:00.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-08-26-nvidia-launches-nvlink-fusion-to-connect-custom-accelerators-to-its-nvlink-netwo"
region: []
vendor: ["AWS", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA expands NVLink Fusion with new NVHBM memory (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/nvidia-expands-nvlink-fusion-with-new-nvhbm-memory"
    title: "NVIDIA expands NVLink Fusion with new NVHBM memory"
    trust: 3
    type: primary
    published_at: "2026-08-28T15:30:00.000Z"
---
