---
title_en: "AIC Unveils 32-Bay PCIe Gen6 JBOF Server for NVIDIA Vera Rubin KV Cache"
title_zh: "AIC推出PCIe Gen6 32槽JBOF伺服器，專攻輝達Vera Rubin KV快取"
summary_en: "AIC showed the F2032-01-G6, a 2U just-a-bunch-of-flash server with 32 PCIe Gen6 E3-format drive bays and up to 8 petabytes of raw capacity, at Computex, targeting the appliance primarily at key-value cache storage for NVIDIA Vera Rubin AI inference racks."
summary_zh: "AIC在Computex展覽上展示F2032-01-G6，這款2U全快閃（JBOF）伺服器配備32個PCIe Gen6 E3規格硬碟槽，最大原始容量達8 PB，主要定位為輝達Vera Rubin AI推論機架的鍵值（KV）快取儲存解決方案。"
body_en: |
  AIC displayed the F2032-01-G6, a 2U just-a-bunch-of-flash (JBOF) server with 32 PCIe Gen6 E3-format solid-state drive bays and a maximum raw capacity of 8 petabytes (PB), at the Computex trade show, with the system designed primarily as key-value (KV) cache storage for AI inference clusters built on NVIDIA's Vera Rubin platform.

  ## Storage configuration

  The F2032-01-G6 accepts both E3.L (long) and E3.S (short) form-factor SSDs — both 7.5mm thick — in 32 hot-swappable trays. AIC said the system holds 8 PB of raw capacity when loaded with 256-terabyte quad-level cell (QLC) NAND flash drives. Triple-level cell (TLC) NAND, which offers greater endurance at lower density, brings that ceiling to roughly half.

  The internal storage fabric runs through a Broadcom PEX90144 switch with 144 PCIe Gen6 lanes. AIC has not published a detailed architectural diagram for the F2032-01-G6, but based on the prior-generation system the company is likely routing two PCIe lanes per drive — a configuration the upgrade to PCIe Gen6 helps compensate for in terms of bandwidth, ServeTheHome reported.

  ## DPU control plane and redundancy

  The appliance is controlled by NVIDIA BlueField-4 data processing units (DPUs), each combining a Grace central processing unit with a ConnectX-9 network interface card offering 800-gigabit Ethernet or InfiniBand connectivity over PCIe Gen6. The DPUs act as storage controllers, handling all host access to the drives.

  The chassis comprises two independent nodes, each with its own power supply and room for up to two network expansion slots — normally DPUs, though AIC said the slots can also house a GPU. With up to two DPUs per node, the dual-node configuration supports fully redundant operation: if one DPU or one node fails, the appliance remains available. AIC is marketing the F2032-01-G6 explicitly as a high-availability system.

  ## NVIDIA CMX integration

  AIC has aligned the F2032-01-G6 with NVIDIA's Context Memory Storage (CMX) platform standard, which NVIDIA describes as its KV caching solution for backing Vera Rubin inference systems, with the appliance designed to integrate into Vera Rubin racks. AI inference servers require substantial flash storage for caching key-value information, and storing that data close to the GPUs performing inference is increasingly critical to scaling cluster performance, ServeTheHome noted. KV caches are becoming a preferred — and in some deployments mandatory — component of large inference clusters, the publication said.

  AIC is also pitching the F2032-01-G6 for object storage, scale-out file systems, and flash storage tiering.

  ## Platform transition from Gen5

  The F2032-01-G6 succeeds AIC's F2026-01-G5, which used PCIe Gen5 interconnects and housed 26 2.5-inch U.2 drive bays. The new model adds six bays, shifts to the higher-density E3 form factor, and upgrades to BlueField-4 DPU support from the prior BlueField-3-era generation.

  ## Outlook

  JBOF appliances purpose-built for KV caching represent an emerging product category within AI data centers, as inference clusters increasingly require fast flash storage placed close to GPU servers, ServeTheHome reported. The publication assessed AIC as well-positioned in that market given the company's prior experience building PCIe Gen5 and BlueField-3-era systems.

  AIC said the F2032-01-G6 is designed for deployment in Vera Rubin racks.
body_zh: |
  AIC在Computex展覽上展示了F2032-01-G6，這是一款2U全快閃（JBOF）伺服器，配備32個PCIe Gen6 E3規格固態硬碟槽，最大原始容量達8 PB，系統主要定位為輝達Vera Rubin平台AI推論叢集的鍵值（KV）快取儲存。

  ## 儲存配置

  F2032-01-G6支援E3.L（長型）與E3.S（短型）兩種規格的固態硬碟——兩者厚度均為7.5mm——可安裝於32個熱插拔托盤中。AIC表示，搭載256 TB四層單元（QLC）NAND快閃硬碟時，系統原始容量可達8 PB；若改用耐久性更高但密度較低的三層單元（TLC）NAND，容量上限則約減半。

  內部儲存架構透過博通（Broadcom）PEX90144交換器運行，共具備144條PCIe Gen6通道。AIC尚未公布F2032-01-G6的詳細架構圖，但據ServeTheHome報導，對照前一代機種推估，該公司可能為每顆硬碟配置兩條PCIe通道，而升級至PCIe Gen6有助於在頻寬層面彌補此一設計的不足。

  ## DPU控制平面與備援機制

  此設備由輝達BlueField-4資料處理器（DPU）負責控制，每顆DPU整合了Grace中央處理器與ConnectX-9網路介面卡，可透過PCIe Gen6提供800 Gbps乙太網路或InfiniBand連接能力。DPU作為儲存控制器，全權負責主機對各硬碟的存取。

  機箱採雙獨立節點架構，每個節點各有獨立電源供應器，並提供最多兩個網路擴充槽——通常用於安裝DPU，但AIC表示這些槽位亦可改裝GPU。每個節點最多支援兩顆DPU，雙節點配置因此可提供完整備援運作：若其中一顆DPU或一個節點發生故障，設備仍可維持正常服務。AIC明確將F2032-01-G6定位為高可用性系統。

  ## 輝達CMX整合

  AIC已將F2032-01-G6對齊輝達的Context Memory Storage（CMX）平台標準。輝達將CMX定位為支援Vera Rubin推論系統的KV快取解決方案，而F2032-01-G6正是設計用於整合至Vera Rubin機架。如ServeTheHome所指出，AI推論伺服器需要大量快閃儲存空間來快取鍵值資訊，且隨著叢集規模不斷擴張，將這些資料存放於執行推論的GPU附近愈趨關鍵。該媒體亦指出，KV快取在大型推論叢集中正逐漸成為優先選用——乃至在部分部署中屬於必備——的元件。

  AIC同時也向外界推介F2032-01-G6在物件儲存、橫向擴展檔案系統及快閃儲存分層等方面的應用能力。

  ## 從Gen5的平台世代交替

  F2032-01-G6是AIC F2026-01-G5的後繼機種。F2026-01-G5採用PCIe Gen5互連介面，配備26個2.5吋U.2硬碟槽；新款機種在槽位數上新增六個，儲存規格轉換至密度更高的E3形態，DPU支援亦從前一代的BlueField-3世代升級至BlueField-4。

  ## 市場展望

  ServeTheHome報導指出，專為KV快取打造的JBOF設備，是AI資料中心中一個正在成形的新興產品類別——推論叢集對部署於GPU伺服器附近的高速快閃儲存需求持續升溫。該媒體評估，憑藉在PCIe Gen5與BlueField-3世代系統上的既有建置經驗，AIC在此一市場中具備相當有利的競爭位置。

  AIC表示，F2032-01-G6專為部署於Vera Rubin機架而設計。
date: "2026-07-12"
source_published: "2026-07-11T17:00:08.000Z"
category: "compute"
secondary_categories: ["networking"]
region: []
vendor: ["Broadcom", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: AIC Gets Flashy with 32 SSD Bay JBOF Server for Key Value Caching (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/aic-gets-flashy-with-32-ssd-bay-jbof-server-for-key-value-caching/"
    title: "AIC Gets Flashy with 32 SSD Bay JBOF Server for Key Value Caching"
    trust: 3
    type: primary
    published_at: "2026-07-11T17:00:08.000Z"
---
