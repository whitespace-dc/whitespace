---
title_en: "UCSD and Google convert discarded Pixel phones into low-cost Linux servers"
title_zh: "UCSD與Google將淘汰Pixel手機改造為低成本Linux伺服器"
summary_en: "Researchers at UC San Diego, working with Google, have stripped old Pixel smartphones to their motherboards, installed Linux, and clustered them as functional servers. The project targets campuses, research labs, and small organizations that cannot afford conventional hardware or commercial cloud services."
summary_zh: "加州大學聖地牙哥分校研究人員與Google合作，將舊款Pixel智慧型手機拆解至主機板、安裝Linux後組成功能完整的伺服器叢集。此計畫專為無力負擔傳統伺服器硬體或商業雲端服務的大學校園、研究實驗室及小型機構而設計。"
body_en: |
  Researchers at the University of California San Diego (UCSD), partnering with Google, have stripped old Pixel smartphones to their motherboards, loaded them with Linux, and clustered the results as functional low-cost servers, targeting campuses, research labs, and small organizations that lack the budget for conventional server hardware or commercial cloud services.

  In benchmark tests using the SPEC suite, an industry-standard processor performance test, Pixel phones around three years old recorded higher single-core performance than several data center server processors in certain workloads, the researchers found. The comparison included the Asus RS720A-E11 server platform, which supports Nvidia H200 and Nvidia RTX Pro 6000 GPUs, and two AMD EPYC processors. The researchers noted that overall server performance remains far superior to what a smartphone delivers; the finding indicates that older phones are capable enough to handle a range of computing tasks when the system is designed appropriately.

  Scaled up, 25 to 50 repurposed smartphones can deliver computing power equivalent to a server running two separate processors in dual-socket configuration, according to the team.

  ## How the conversion works

  The research team disassembles each phone and removes all components not required for computation: the screen, battery, camera, speakers, and outer frame. What remains is the motherboard containing the system-on-chip (SoC), the integrated processor that drives the device. Android is then replaced with Linux, the operating system standard in server and data center environments. Running Linux allows the repurposed devices to run orchestration software such as Kubernetes, which manages workloads across clusters of machines.

  ## Environmental and economic rationale

  Google Research frames the project partly as a carbon-reduction measure. Discarded smartphones retain the carbon footprint embedded in their manufacture, the company said, making extended use more efficient than disposal and replacement with new hardware. The team also described the approach as increasingly relevant amid rising prices for memory chips and storage components.

  ## Campus and education deployment

  UCSD said a cluster of 20 repurposed phones is sufficient to run a single teaching application serving more than 75 students simultaneously, without routing traffic through commercial cloud services. The team plans to scale that to a local data center of roughly 2,000 repurposed smartphones, which it says would be large enough to serve hundreds of classrooms at once.

  ## Fit and limitations

  The researchers acknowledge the approach is unlikely to appeal to large technology companies running AI data centers at scale. Hyperscale operators such as Google, Microsoft, and Nvidia require specialized hardware with high reliability and low component counts to simplify fleet management, the researchers said. The intended users are campuses, educational institutions, research laboratories, and small organizations with constrained budgets.

  The UCSD team is targeting full deployment of its 2,000-phone data center this year and is continuing to test how smartphone components perform under sustained, long-term server workloads.
body_zh: |
  加州大學聖地牙哥分校（UCSD）研究人員與Google攜手合作，將舊款Pixel智慧型手機拆解至主機板，安裝Linux作業系統後將多部手機組成具備完整功能的低成本伺服器叢集，目標客群鎖定在預算不足以購置傳統伺服器硬體或商業雲端服務的大學校園、研究實驗室及小型機構。

  在採用業界標準處理器效能測試——SPEC測試套件的基準測試中，研究人員發現，機齡約三年的Pixel手機在特定工作負載下，單核效能表現優於部分資料中心伺服器處理器。比較對象包括支援輝達H200及輝達RTX Pro 6000顯示卡的Asus RS720A-E11伺服器平台，以及兩款AMD EPYC處理器。研究人員指出，整體伺服器效能仍遠優於智慧型手機所能提供的水準；然而此一發現說明，當系統設計得宜，舊款手機已具備足夠能力，可處理相當範圍內的運算任務。

  研究團隊表示，若規模擴大，25至50部重新利用的智慧型手機，可提供相當於配備兩顆獨立處理器、採雙插槽架構之伺服器的運算能力。

  ## 改造流程

  研究團隊拆解每一部手機，移除所有非運算所必需的零組件，包括螢幕、電池、鏡頭、喇叭及外框。留下的是搭載系統單晶片（SoC）的主機板，也就是驅動裝置運作的整合式處理器。接著，Android系統被替換為Linux——伺服器與資料中心環境的標準作業系統。改用Linux後，這些重新利用的裝置便能執行Kubernetes等容器調度軟體，統一管理跨機器叢集的工作負載。

  ## 環境效益與經濟考量

  Google Research將此計畫部分定位為減碳措施。該公司表示，已遭淘汰的智慧型手機仍承載著製造過程中所產生的碳足跡，延長使用年限因此比報廢後再購置新硬體更具效率。研究團隊也指出，在記憶體晶片與儲存元件價格持續攀升的當下，這種做法的實用價值與日俱增。

  ## 校園與教育場域的部署

  UCSD表示，由20部二手手機組成的叢集，足以運行單一教學應用程式，同時服務逾75名學生，且無需將流量導向商業雲端服務。研究團隊計畫將其擴展為約2,000部重新利用智慧型手機所組成的本地資料中心，據稱規模已足以同時服務數百間教室。

  ## 適用情境與限制

  研究人員坦承，此方案不太可能吸引大規模運行AI資料中心的大型科技公司。研究人員表示，Google、微軟及輝達等超大規模業者需要具備高可靠度、低元件數量的專用硬體，以簡化機群管理作業。此方案的目標使用族群為大學校園、教育機構、研究實驗室，以及預算有限的小型機構。

  UCSD研究團隊的目標是在今年內完成這座2,000部手機規模資料中心的全面部署，並持續測試智慧型手機元件在長期持續性伺服器工作負載下的實際表現。
date: "2026-06-27"
source_published: "2026-06-25T00:44:22.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Google Sulap HP Lawas Bekas Jadi \"Server\" Murah (trust 3/5)."
sources:
  - url: "https://tekno.kompas.com/read/2026/06/23/19010067/google-sulap-hp-lawas-bekas-jadi-server-murah"
    title: "Google Sulap HP Lawas Bekas Jadi \"Server\" Murah"
    trust: 3
    type: primary
    published_at: "2026-06-25T00:44:22.000Z"
---
