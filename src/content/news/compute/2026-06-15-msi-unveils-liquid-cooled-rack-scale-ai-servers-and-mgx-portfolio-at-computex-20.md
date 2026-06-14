---
title_en: "MSI unveils liquid-cooled rack-scale AI servers and MGX portfolio at Computex 2026"
title_zh: "微星科技於 Computex 2026 發表液冷機架 AI 伺服器與 MGX 產品組合"
summary_en: "MSI announced a broad AI infrastructure portfolio at Computex 2026, including liquid-cooled 100 kW ORv3 racks, NVIDIA MGX servers from 2U to 6U, and multi-node cloud platforms, positioning itself as a full-spectrum AI infrastructure supplier for hyperscale, enterprise, and edge deployments."
summary_zh: "微星科技於 Computex 2026 發表涵蓋液冷 100 kW ORv3 機架、2U 至 6U 輝達 MGX 伺服器及多節點雲端平台的完整 AI 基礎架構產品組合，正式從單一伺服器廠商轉型定位為全方位 AI 基礎架構供應商。此次陣容同時支援 ORv3 與 EIA 機架格式及 AMD、Intel 雙處理器平台，以服務超大規模雲端業者、企業資料中心與邊緣部署等不同客群。"
body_en: |
  MSI announced a broad AI infrastructure portfolio at Computex 2026 spanning liquid-cooled rack-scale systems, NVIDIA MGX-based servers in 2U, 4U, and 6U form factors, and multi-node cloud platforms, framing the range as a repositioning from discrete server vendor to full-spectrum AI infrastructure supplier.

  The company said its portfolio addresses three deployment zones: large-scale AI training and inference in dense data centers, enterprise AI development closer to teams, and inference pushed to edge environments in factories, vehicles, campuses, and agricultural settings. The lineup includes liquid-cooled Open Compute Project (OCP) ORv3 rack architectures, NVIDIA MGX AI servers, NVIDIA DGX Station-based deskside systems, and DC-MHS (Data Center Multi-Host System) multi-node platforms.

  ## Two rack formats for two buyer profiles

  MSI's rack portfolio covers two distinct customer segments. Its 21-inch, 44OU ORv3 liquid-cooled rack, where OU refers to the Open rack Unit measurement used in OCP standards, supports deployments up to 100 kilowatts (kW) per rack and integrates a liquid-to-liquid coolant distribution unit. In one configuration, the rack holds 28 1OU2N (one Open rack unit, two-node) multi-node systems and distributes power at 48 volts via busbar rather than the conventional 12 volts, a design that reduces electrical conversion losses at high current loads.

  For conventional data center environments, MSI offers a 19-inch, 48RU (rack unit) EIA air-cooled rack supporting 16 2U2N (two rack unit, two-node) multi-node systems, with AMD EPYC 9005 and Intel Xeon 6 processor options.

  The two formats reflect diverging tracks in AI infrastructure procurement. Hyperscalers, neoclouds, and purpose-built AI factories are shifting toward ORv3 liquid cooling and 48-volt busbar power distribution. Enterprise data centers, managed service providers, and colocation customers typically operate within 19-inch rack footprints and existing facility constraints, MSI said.

  ## CG681-S6093: MSI's flagship liquid-cooled AI server

  MSI's headline system is the CG681-S6093, a 6U liquid-cooled server built on NVIDIA's MGX architecture, a modular reference design that supports multi-generation GPU compatibility within a consistent server platform. The system supports dual AMD EPYC processors, up to eight NVIDIA RTX PRO 6000 Blackwell Server Edition Liquid Cooled GPUs, 32 DDR5 memory modules, and NVIDIA ConnectX-8 SuperNICs providing up to 8x400 Gigabit Ethernet (GbE) ports.

  MSI said up to four CG681-S6093 units can be installed within a single 48RU rack, networked via NVIDIA Spectrum-4 SN5600 Ethernet switches and SN2201 out-of-band management switches. That configuration combines compute, thermal management, network fabric, and management infrastructure within a single rack-scale design. The packaging aligns with what the industry calls the "AI factory" model, in which clusters are designed as integrated systems rather than aggregations of discrete servers.

  ## 4U and 2U platforms fill out the MGX lineup

  MSI's full MGX server range extends across four additional platforms supporting NVIDIA H200 NVL, RTX PRO 6000, and RTX PRO 4500 Blackwell Server Edition GPUs across systems designed for AI training, inference, HPC (high-performance computing), and data-intensive workloads.

  The 4U CG480-S5063 is a dual-socket Intel Xeon 6 system supporting up to eight double-wide GPUs, 32 DDR5 modules, 20 E1.S NVMe drives (the EDSFF, or Enterprise and Datacenter Standard Form Factor, "1U Short" solid-state storage format), and five additional PCIe 5.0 expansion slots. The 20-drive storage capacity targets data-intensive AI pipelines where storage throughput can become a limiting factor alongside GPU compute.

  MSI's AMD-based 4U systems, the CG481-S6053 and CG480-S6053, both support AMD EPYC 9005 processors, up to eight double-wide GPUs, 24 DDR5 modules, and eight U.2 NVMe drives. The CG481-S6053 adds up to 8x400G QSFP112 networking via NVIDIA ConnectX-8 SuperNICs; the CG480-S6053 offers additional PCIe 5.0 expansion slots.

  The 2U CG290-S3063, a single-socket Intel Xeon 6 platform, supports up to four double-wide GPUs, 16 DDR5 modules, and four rear U.2 NVMe drives. MSI positions the system for AI inference and space-constrained data center deployments.

  ## Where the portfolio fits in AI infrastructure

  The breadth of MSI's Computex 2026 portfolio reflects the fragmentation of AI infrastructure demand across deployment tiers, the company said. Training and dense inference remain centered in large data centers, enterprise AI development is moving closer to user teams, and certain inference workloads are migrating to edge operational environments. By supporting both ORv3 and EIA rack formats, AMD and Intel processor platforms, and server form factors from 2U to 6U, MSI said it aims to serve both hyperscale buyers moving toward high-density liquid-cooled designs and enterprise or colocation customers working within conventional facility constraints.

  MSI said it is extending its collaboration within the NVIDIA MGX ecosystem toward NVIDIA's next-generation Vera Rubin rack-scale platforms.
body_zh: |
  微星科技在 2026 年台北國際電腦展（Computex 2026）發表了涵蓋液冷機架規模系統、輝達 MGX 架構伺服器（涵蓋 2U、4U、6U 規格）以及多節點雲端平台的完整 AI 基礎架構產品組合，並將此次陣容定位為從單一伺服器廠商轉型為全方位 AI 基礎架構供應商的重要里程碑。

  微星科技表示，其產品組合針對三個部署場域：高密度資料中心的大規模 AI 訓練與推論、貼近團隊的企業 AI 開發環境，以及推送至工廠、車輛、校園與農業現場等邊緣環境的推論應用。此次陣容包括採用液冷設計的開放運算計畫（OCP）ORv3 機架架構、輝達 MGX AI 伺服器、以輝達 DGX Station 為基礎的桌側系統，以及 DC-MHS（資料中心多主機系統）多節點平台。

  ## 兩種機架格式對應兩類買家需求

  微星科技的機架產品線涵蓋兩種截然不同的客戶市場。其 21 英寸、44OU 的 ORv3 液冷機架（OU 為 OCP 標準所採用的開放機架單位）每架最高支援 100 千瓦（kW）的功耗，並整合液對液冷媒分配單元。在其中一種配置下，機架可容納 28 套 1OU2N（一個開放機架單位、雙節點）多節點系統，並透過匯流排以 48 伏特（V）分配電力，而非傳統的 12 伏特——此設計可在高電流負載下降低電力轉換損耗。

  針對傳統資料中心環境，微星科技提供 19 英寸、48RU（機架單位）EIA 氣冷機架，可支援 16 套 2U2N（兩個機架單位、雙節點）多節點系統，並提供 AMD EPYC 9005 及 Intel Xeon 6 兩種處理器選項。

  微星科技指出，這兩種格式反映出 AI 基礎架構採購的分歧趨勢。超大規模雲端業者、新興雲端服務商及專用 AI 工廠正逐步轉向 ORv3 液冷與 48 伏特匯流排供電架構；而企業資料中心、受管服務供應商及共置（colocation）客戶，則通常受限於 19 英寸機架規格與既有設施條件。

  ## CG681-S6093：微星科技旗艦液冷 AI 伺服器

  微星科技此次最受矚目的系統為 CG681-S6093，一款以輝達 MGX 架構為基礎的 6U 液冷伺服器。MGX 為輝達推出的模組化參考設計，可在一致的伺服器平台上支援多世代 GPU 相容性。該系統支援雙 AMD EPYC 處理器、最多八張輝達 RTX PRO 6000 Blackwell Server Edition 液冷顯示卡、32 條 DDR5 記憶體模組，以及輝達 ConnectX-8 SuperNIC，可提供最多 8 個 400 Gigabit 乙太網路（GbE）連接埠。

  微星科技表示，單一 48RU 機架最多可安裝四套 CG681-S6093，並透過輝達 Spectrum-4 SN5600 乙太網路交換器及 SN2201 頻外管理交換器進行網路串聯。此配置將運算、熱管理、網路架構與管理基礎設施整合於單一機架規模設計之中，符合業界所稱的「AI 工廠」模式——叢集以整合系統的形式設計，而非由分散伺服器堆疊而成。

  ## 4U 與 2U 平台補全 MGX 產品線

  微星科技完整的 MGX 伺服器產品線延伸至另外四款平台，支援輝達 H200 NVL、RTX PRO 6000 及 RTX PRO 4500 Blackwell Server Edition GPU，涵蓋 AI 訓練、推論、高效能運算（HPC）及資料密集型工作負載。

  4U 的 CG480-S5063 採雙插槽 Intel Xeon 6 架構，最多支援八張雙寬 GPU、32 條 DDR5 記憶體模組、20 個 E1.S NVMe 儲存裝置（即 EDSFF「1U Short」企業與資料中心標準規格固態硬碟），以及五個額外的 PCIe 5.0 擴充插槽。20 個儲存裝置的容量，針對儲存吞吐量可能與 GPU 運算同樣成為效能瓶頸的資料密集型 AI 流程而設計。

  微星科技以 AMD 處理器為基礎的兩款 4U 系統——CG481-S6053 與 CG480-S6053——均支援 AMD EPYC 9005 處理器、最多八張雙寬 GPU、24 條 DDR5 記憶體模組，以及八個 U.2 NVMe 儲存裝置。CG481-S6053 透過輝達 ConnectX-8 SuperNIC 額外支援最多 8 個 400G QSFP112 網路連接埠；CG480-S6053 則提供更多 PCIe 5.0 擴充插槽。

  2U 的 CG290-S3063 採單插槽 Intel Xeon 6 架構，最多支援四張雙寬 GPU、16 條 DDR5 記憶體模組及四個後置 U.2 NVMe 儲存裝置。微星科技將此系統定位於 AI 推論及空間受限的資料中心部署場景。

  ## 產品組合在 AI 基礎架構中的定位

  微星科技表示，此次 Computex 2026 產品組合的廣度，反映出 AI 基礎架構需求在不同部署層級間的高度分化。訓練與高密度推論仍集中於大型資料中心，企業 AI 開發正逐漸貼近用戶團隊端，部分推論工作負載則已遷移至邊緣作業環境。藉由同時支援 ORv3 與 EIA 機架格式、AMD 與 Intel 處理器平台，以及從 2U 到 6U 的各種伺服器規格，微星科技表示希望同時服務轉向高密度液冷設計的超大規模買家，以及仍在傳統設施條件下運作的企業或共置客戶。

  微星科技表示，將持續深化與輝達 MGX 生態系的合作，並朝向輝達下一代 Vera Rubin 機架規模平台延伸發展。
date: "2026-06-15"
source_published: "2026-06-10T16:18:56.267Z"
category: "compute"
secondary_categories: ["cooling"]
region: []
vendor: ["AMD", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: MSI's Strategic Shift: From Server Vendor to Full-Spectrum AI Infrastructure Provider (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/design/article/55382852/msis-strategic-shift-from-server-vendor-to-full-spectrum-ai-infrastructure-provider"
    title: "MSI's Strategic Shift: From Server Vendor to Full-Spectrum AI Infrastructure Provider"
    trust: 3
    type: primary
    published_at: "2026-06-10T16:18:56.267Z"
---
