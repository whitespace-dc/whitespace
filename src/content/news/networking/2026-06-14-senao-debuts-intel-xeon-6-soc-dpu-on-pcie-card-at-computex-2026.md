---
title_en: "Senao Debuts Intel Xeon 6 SoC DPU on PCIe Card at Computex 2026"
title_zh: "神腦Computex 2026發表Xeon 6 SoC DPU擴充卡"
summary_en: "Senao unveiled the SX906 at Computex 2026, a dual-slot PCIe add-in card integrating Intel's Xeon 6 SoC processor to deliver up to 200Gbps of network throughput alongside x86 compute, hardware acceleration, and onboard server management in a single card."
summary_zh: "神腦於2026年Computex展上發表SX906雙槽PCIe擴充卡，整合Intel Xeon 6 SoC處理器與最高200Gbps網路吞吐量，將x86運算、硬體加速及板載伺服器管理功能濃縮於單一卡片之中。SX906共推出三款規格，效能核心數量從24至38個不等，功耗介於295W至355W，定位為DPU市場中的高階產品。"
body_en: |
  Senao showed the SX906 at Computex 2026, a dual-slot PCIe card that packages an Intel Xeon 6 system-on-chip (SoC) processor — Intel's Granite Rapids-D design — with up to 200Gbps of Ethernet throughput, hardware accelerators, and an onboard baseboard management controller (BMC), according to ServeTheHome, which photographed the card on the show floor.

  The SX906 is what ServeTheHome described as firmly a DPU — data processing unit, a category of card that offloads networking, security, and storage tasks from a host server's main CPU — rather than a conventional SmartNIC, noting that the compute density and feature set put it in a different class.

  ## Three SKUs, 24 to 38 P-cores

  The card ships in three configurations, all using Intel's latest-generation performance cores (P-cores):

  - **Xeon 6523P-B**: 24 cores, 2.5 GHz base clock, 100Gbps total network throughput, 295W
  - **Xeon 6553P-B**: 36 cores, 2.6 GHz base clock, 200Gbps, 355W
  - **Xeon 6563P-B**: 38 cores, 2.4 GHz base clock, 200Gbps, 355W

  The 24-core entry SKU is capped at 100Gbps total network throughput despite the card carrying two physical ports. All three SKUs include double QuickAssist Technology (QAT), Intel's on-chip hardware accelerator for cryptography and data compression workloads. The 36- and 38-core SKUs add a media transcode accelerator.

  Four DDR5 memory channels are supported across all SKUs.

  ## PCIe Gen5 connectivity

  The SX906 connects to a host server via PCIe Gen 5. The card's edge connector provides an x8 link, and two additional MCIO (Mini Cool Edge IO) rear connectors each carry a further x8 PCIe Gen 5 link, for 24 PCIe Gen 5 lanes in total exposed to the host. Power is drawn through the PCIe edge finger and a 16-pin PCIe auxiliary connector using the 12VHPWR standard, the same connector introduced for high-power graphics cards.

  The network interface is an Intel Ethernet Controller E830 supporting 200GbE, connected externally via two QSFP28 ports — each capable of 100G — on the card's faceplate.

  ## I/O and form factor

  Beyond the two 100G QSFP28 Ethernet ports, the faceplate carries a Mini DisplayPort, two USB 3.0 Type-C ports, and a 1GbE RJ45 management port. The card occupies two PCIe slots, measures 266 x 98.4 x 40.6 mm (FH10.5L+ form factor), and weighs approximately 1 kg. Cooling is handled by an active dual-slot cooler.

  ## Management and security

  An Aspeed AST2600 BMC is integrated on-board, running OpenBMC firmware and providing out-of-band management — the same controller class found in standalone server motherboards. A separate Aspeed AST1060 controller handles Intel Platform Firmware Resilience (Intel PFR), a feature designed to protect, detect, and recover platform firmware from tampering or corruption. TPM 2.0 (Trusted Platform Module) support for Secure Boot is also included.

  ## Industry significance

  DPUs have typically been built around lower-power, Arm-based or custom network-processor SoCs optimized for packet handling and offload at modest wattages. The SX906 represents a different design point: a full x86 P-core Xeon processor with the associated compute density, at power envelopes of 295W to 355W, packaged in a PCIe add-in card with integrated network I/O and out-of-band management. That positions the card at the higher end of the DPU market in both capability and power draw.

  ServeTheHome reported that the card on display appeared to be an early sample. Senao has not publicly disclosed pricing or availability timing for the SX906.
body_zh: |
  神腦（Senao）在2026年Computex展上展出SX906，這是一款雙槽PCIe擴充卡，搭載Intel Xeon 6系統晶片（SoC）處理器——即Intel的Granite Rapids-D設計架構——可提供最高200Gbps的乙太網路吞吐量，並整合硬體加速器與板載基板管理控制器（BMC）。根據在展場現場拍攝該卡片的ServeTheHome報導，上述所有功能均整合於一張擴充卡之中。

  ServeTheHome將SX906明確定義為DPU（資料處理單元）——這類擴充卡專門將網路、資安與儲存任務從主機伺服器的主CPU上卸載——而非傳統的SmartNIC。ServeTheHome指出，其運算密度與功能規格使其屬於截然不同的等級。

  ## 三款規格，24至38個效能核心

  此卡共推出三種配置，均採用Intel最新一代效能核心（P-core）：

  - **Xeon 6523P-B**：24核心，基礎時脈2.5 GHz，總網路吞吐量100Gbps，TDP 295W
  - **Xeon 6553P-B**：36核心，基礎時脈2.6 GHz，200Gbps，355W
  - **Xeon 6563P-B**：38核心，基礎時脈2.4 GHz，200Gbps，355W

  入門款的24核心版本，雖然卡片本身配備兩個實體網路連接埠，但總網路吞吐量上限仍僅為100Gbps。三款規格均內建雙份快速輔助技術（QuickAssist Technology，QAT），即Intel用於加密及資料壓縮工作負載的晶片內建硬體加速器。36核心與38核心規格則額外加入媒體轉碼加速器。

  三款規格均支援四通道DDR5記憶體。

  ## PCIe Gen 5連接介面

  SX906透過PCIe第五代（Gen 5）與主機伺服器相連。卡片邊緣連接器提供x8通道，卡片後方另有兩個MCIO（Mini Cool Edge IO）連接器，各提供x8 PCIe Gen 5通道，合計向主機提供24條PCIe Gen 5通道。電源由PCIe邊緣金手指及一個16針PCIe輔助電源接頭供給，採用12VHPWR標準——與高功耗顯示卡所引入的電源接頭規格相同。

  網路介面採用支援200GbE的Intel乙太網路控制器E830，透過卡片擋板上的兩個QSFP28連接埠對外連接，每個連接埠最高可達100G。

  ## 輸出入介面與外觀規格

  除了兩個100G QSFP28乙太網路連接埠外，擋板上還配有Mini DisplayPort、兩個USB 3.0 Type-C連接埠，以及一個用於管理的1GbE RJ45連接埠。此卡占用兩個PCIe插槽，尺寸為266×98.4×40.6公釐（FH10.5L+規格），重量約1公斤，散熱採用主動式雙槽散熱器。

  ## 管理與資安功能

  卡片板載整合Aspeed AST2600 BMC，運行OpenBMC韌體，提供頻外管理能力——此控制器等級與獨立伺服器主機板所採用的相同。另有一顆Aspeed AST1060控制器負責執行Intel平台韌體韌性技術（Intel Platform Firmware Resilience，Intel PFR），此功能專為保護、偵測及復原遭竄改或損毀的平台韌體而設計。此外亦支援TPM 2.0（可信賴平台模組）以實現安全開機（Secure Boot）。

  ## 業界意義

  DPU過去通常以功耗較低的Arm架構或客製化網路處理器SoC為核心，針對封包處理與卸載功能進行優化，整體功耗相對溫和。SX906代表了截然不同的設計思路：以完整的x86效能核心Xeon處理器為基礎，具備對應的高運算密度，功耗區間介於295W至355W之間，並以PCIe擴充卡的形式整合網路輸出入介面與頻外管理功能。此一定位使其在DPU市場中，無論效能或功耗均處於高階位置。

  ServeTheHome報導指出，展場上展示的卡片看似為早期樣品。神腦目前尚未公開SX906的定價或上市時程。
date: "2026-06-14"
source_published: "2026-06-13T00:33:58.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: This is an Intel Xeon 6 SoC DPU on a PCIe Card from Senao at Computex 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/this-is-an-intel-xeon-6-soc-dpu-on-a-pcie-card-from-senao-at-computex-2026/"
    title: "This is an Intel Xeon 6 SoC DPU on a PCIe Card from Senao at Computex 2026"
    trust: 3
    type: primary
    published_at: "2026-06-13T00:33:58.000Z"
---
