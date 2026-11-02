---
title_en: "ASRock Rack shows liquid-cooled NVIDIA Rubin rack and 2U servers at OCP 2026"
title_zh: "ASRock Rack 於 OCP 2026 展出輝達 Rubin 液冷機架與 2U 伺服器"
summary_en: "ASRock Rack displayed a full NVIDIA Vera Rubin NVL72 rack and a fanless, fully liquid-cooled 2U HGX Rubin NVL8 server at OCP Global Summit 2026 in San Jose, with direct-to-chip cooling applied across its entire NVIDIA GPU lineup at the show."
summary_zh: "ASRock Rack 在聖荷西 OCP Global Summit 2026 展出完整的輝達 Vera Rubin NVL72 機架，以及一款無風扇、全液冷的 2U HGX Rubin NVL8 伺服器；展場所有輝達 GPU 產品線均採直觸晶片液冷設計。"
body_en: |
  ASRock Rack displayed a lineup of liquid-cooled NVIDIA GPU servers at OCP Global Summit 2026 in San Jose, headlined by a 48RU NVIDIA Vera Rubin NVL72 rack and a fanless 2U server carrying eight Rubin GPUs — both using direct-to-chip liquid cooling throughout.

  The exhibits covered a wide range of NVIDIA platforms: the full Vera Rubin NVL72 rack, HGX Rubin NVL8 servers in 2U and 5U form factors, two NVIDIA MGX RTX PRO servers, a dual NVIDIA Vera CPU server, a liquid-cooled NVIDIA Spectrum-X SN6600-LD switch, a passively cooled NVIDIA RTX PRO 4500 Blackwell Server Edition GPU, and an eight-GPU RTX PRO 6000 PCIe server with direct-to-chip cooling, according to ServeTheHome.

  ## XGMRACK-VR/NVL72: the full Vera Rubin NVL72 rack

  ASRock Rack's XGMRACK-VR/NVL72 is a 48RU NVIDIA MGX rack built around the Vera Rubin NVL72 architecture. The rack holds 18 Vera Rubin compute trays and nine NVLink 6 switch trays, for a total of 36 NVIDIA Vera CPUs and 72 NVIDIA Rubin GPUs. NVIDIA rates the full configuration at 3,600 PFLOPS (petaflops per second) of NVFP4 inference in sparse mode and 2,520 PFLOPS of NVFP4 training in dense mode — figures that reflect the extremely low numerical precision formats used for modern AI workloads.

  Memory totals 20.7TB of HBM4 (High Bandwidth Memory, generation 4), with each Rubin GPU allocated 288GB. Power is supplied by four 3RU 19-inch power shelves, each rated at 110 kilowatts and equipped with six 18.3kW power supply units plus bulk capacitors — giving the rack a combined power shelf capacity of 440kW. ASRock Rack said it offers four thermal management options: in-rack cooling, in-row cooling, a rear-door heat exchanger (RDHx), or a liquid-to-air sidecar CDU (coolant distribution unit).

  Each compute tray is a 1U NVIDIA MGX design containing two Vera Rubin Superchips. Each Superchip pairs two Rubin GPUs with one Vera CPU over NVLink-C2C, NVIDIA's chip-to-chip interconnect. Networking per tray includes eight 800Gbps OSFP ports from NVIDIA ConnectX-9 SuperNICs and two 400Gbps QSFP112 ports from an NVIDIA BlueField-4 DPU (data processing unit, an offload processor for networking and storage tasks). The rack also includes management switches for lower-speed networking. The trays are fully liquid-cooled.

  ## 2U16X-GNR2/DLC RUBIN: eight Rubin GPUs in a fanless 2U

  The 2U16X-GNR2/DLC RUBIN places an NVIDIA HGX Rubin NVL8 board — carrying eight Rubin GPUs — into a 2U chassis with no fans. Liquid cooling covers the E1.S NVMe drives, CPUs, and GPUs. Networking is provided by NVIDIA ConnectX-9 SuperNICs and BlueField-4 DPUs, with eight 800Gbps OSFP ports. The system draws power over a 54V DC busbar. NVIDIA quotes 400 PFLOPS of NVFP4 compute in sparse mode for the HGX Rubin NVL8 platform.

  The host processor platform is dual-socket Intel Xeon 6 on LGA 4710 sockets, supporting the Xeon 6700P, 6500P, and 6700E series, with 16+16 DIMM slots at two DIMMs per channel. Eight hot-swap E1.S NVMe bays are included.

  ASRock Rack noted that the HGX 8-GPU platform changed GPU orientation in this generation, a modification that enables it to function in high-density, liquid-cooled racks — a departure from the airflow-optimized layouts of prior generations.

  ## Liquid cooling as the connecting theme

  Direct-to-chip liquid cooling was a consistent design choice across ASRock Rack's OCP booth, applied to the rack-scale NVL72 system, the 2U and 5U HGX Rubin servers, and the RTX PRO 6000 PCIe server. The approach eliminates fans in the densest configurations, which the company said reduces total power consumption at the rack level.

  For the data center industry, the shift to direct-to-chip cooling at this scale reflects the requirements imposed by GPU power densities that conventional air cooling cannot address. The NVL72 rack's 440kW of power shelf capacity and its multiple CDU options illustrate the infrastructure changes required to deploy these systems, and ASRock Rack's presence at OCP with both rack-scale and discrete server options signals that liquid-cooled GPU infrastructure is moving from specialized deployments toward broader commercial availability.

  ASRock Rack also showed hybrid-cooled servers at the booth, though detailed specifications for those systems were not disclosed in the report.
body_zh: |
  ASRock Rack 在聖荷西 OCP Global Summit 2026 上展出一系列輝達 GPU 液冷伺服器，壓軸展品為 48RU 的輝達 Vera Rubin NVL72 機架，以及搭載八顆 Rubin GPU 的無風扇 2U 伺服器——兩款產品均採全面直觸晶片液冷設計。

  展示陣容涵蓋輝達多款平台：完整的 Vera Rubin NVL72 機架、2U 與 5U 機型的 HGX Rubin NVL8 伺服器、兩款輝達 MGX RTX PRO 伺服器、一款雙路輝達 Vera CPU 伺服器、一款液冷輝達 Spectrum-X SN6600-LD 交換器、一款被動散熱的輝達 RTX PRO 4500 Blackwell Server Edition GPU，以及一款採直觸晶片液冷的八 GPU RTX PRO 6000 PCIe 伺服器。以上資訊來源為 ServeTheHome。

  ## XGMRACK-VR/NVL72：完整的 Vera Rubin NVL72 機架

  ASRock Rack 的 XGMRACK-VR/NVL72 是一款 48RU 的輝達 MGX 機架，以 Vera Rubin NVL72 架構為核心。機架內建 18 個 Vera Rubin 運算托盤與九個 NVLink 6 交換托盤，合計搭載 36 顆輝達 Vera CPU 及 72 顆輝達 Rubin GPU。輝達標示完整配置在稀疏模式下可達 3,600 PFLOPS（每秒千兆次浮點運算）NVFP4 推論效能，稠密模式下則有 2,520 PFLOPS NVFP4 訓練效能——這些數字反映了當代 AI 工作負載所採用的極低精度數值格式。

  記憶體總容量為 20.7TB 的 HBM4（第四代高頻寬記憶體），每顆 Rubin GPU 分配 288GB。電源由四個 3RU 19 吋電源架供應，每個電源架額定 110 千瓦，配備六個 18.3kW 電源供應器及大容量電容——使機架電源架總容量達 440kW。ASRock Rack 表示提供四種散熱管理方案：機架內冷卻、列間冷卻、後門熱交換器（RDHx），或液對氣側掛式冷卻液分配單元（CDU）。

  每個運算托盤均為 1U 輝達 MGX 設計，內含兩個 Vera Rubin Superchip。每個 Superchip 透過輝達 NVLink-C2C 晶片對晶片互連，將兩顆 Rubin GPU 與一顆 Vera CPU 整合在一起。每個托盤的網路配置包含來自輝達 ConnectX-9 SuperNIC 的八個 800Gbps OSFP 連接埠，以及來自輝達 BlueField-4 DPU（資料處理單元，即負責卸載網路與儲存任務的加速處理器）的兩個 400Gbps QSFP112 連接埠。機架另設有管理交換器供低速網路使用。所有托盤均採全液冷設計。

  ## 2U16X-GNR2/DLC RUBIN：無風扇 2U 機箱搭載八顆 Rubin GPU

  2U16X-GNR2/DLC RUBIN 將搭載八顆 Rubin GPU 的輝達 HGX Rubin NVL8 板卡裝入無風扇 2U 機箱。液冷覆蓋範圍包含 E1.S NVMe 固態硬碟、CPU 及 GPU。網路連接由輝達 ConnectX-9 SuperNIC 與 BlueField-4 DPU 負責，提供八個 800Gbps OSFP 連接埠。系統透過 54V DC 匯流排供電。輝達標示 HGX Rubin NVL8 平台在稀疏模式下可提供 400 PFLOPS NVFP4 運算效能。

  主機處理器平台採用雙路 Intel Xeon 6，搭配 LGA 4710 插槽，支援 Xeon 6700P、6500P 及 6700E 系列，具備 16+16 個 DIMM 插槽，每通道支援兩條記憶體。另內建八個熱插拔 E1.S NVMe 硬碟槽。

  ASRock Rack 指出，HGX 8-GPU 平台在這一代變更了 GPU 的安裝方向，此設計調整使其能夠在高密度液冷機架中正常運作——有別於前代以氣流最佳化為考量的佈局方式。

  ## 液冷作為貫穿全場的設計主軸

  直觸晶片液冷是 ASRock Rack 在 OCP 展位上始終如一的設計選擇，應用於機架規模的 NVL72 系統、2U 與 5U HGX Rubin 伺服器，以及 RTX PRO 6000 PCIe 伺服器。此設計在最高密度配置中徹底取消了風扇，ASRock Rack 表示此舉可降低機架層級的整體功耗。

  對資料中心產業而言，在這個規模導入直觸晶片液冷，反映了傳統風冷技術無力應對的 GPU 功率密度所帶來的需求。NVL72 機架 440kW 的電源架總容量與多元 CDU 選項，清楚說明了部署此類系統所需的基礎建設變革；而 ASRock Rack 同時在 OCP 展出機架規模系統與獨立伺服器產品，也顯示液冷 GPU 基礎建設正從專用部署邁向更廣泛的商業普及。

  ASRock Rack 亦在展位展出混合冷卻伺服器，惟相關報告並未揭露這些系統的詳細規格。
date: "2026-11-03"
source_published: "2026-11-02T04:00:03.000Z"
category: "compute"
secondary_categories: ["cooling"]
region: []
vendor: ["ASRock Rack", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Liquid-Cooled NVIDIA Servers at the ASRock Rack OCP 2026 Booth (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/liquid-cooled-nvidia-servers-at-the-asrock-rack-ocp-2026-booth/"
    title: "Liquid-Cooled NVIDIA Servers at the ASRock Rack OCP 2026 Booth"
    trust: 3
    type: primary
    published_at: "2026-11-02T04:00:03.000Z"
---
