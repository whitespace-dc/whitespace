---
title_en: "NVIDIA Shows Single-Vera BlueField-4 STX Server for Context Memory at OCP 2026"
title_zh: "輝達OCP 2026展示BlueField-4 STX單Vera情境記憶體伺服器"
summary_en: "NVIDIA presented its BlueField-4 STX server for Context Memory (CMX) at OCP 2026, offering a single-Vera CPU design that cuts cost compared to the dual-Vera variant shown previously, with multiple partners exhibiting the platform across the show floor."
summary_zh: "輝達於OCP 2026發表BlueField-4 STX情境記憶體（CMX）伺服器，採用單顆Vera CPU設計，成本低於先前展示的雙Vera版本，多家合作夥伴在展場上展出此一平台。"
body_en: |
  NVIDIA presented its BlueField-4 STX server for Context Memory (CMX) at OCP 2026, a single-Vera CPU platform designed as a lower-cost alternative to the dual-Vera BlueField-4 Data Processing Unit (DPU) the company had shown before. Multiple partners exhibited the board at the conference, according to ServeTheHome, which reported that ecosystem partners had been requesting the design.

  ## How the STX differs from the earlier BlueField-4 DPU

  The previously shown BlueField-4 DPU uses a dual-Vera CPU configuration, each processor paired with SOCAMM memory, plus four ConnectX-9 SuperNICs. A DPU is a purpose-built offload processor used in data center servers to handle networking, storage, and security functions independently of the host CPU; historically, DPUs have been compact, low-power devices. ServeTheHome described the dual-Vera design as more closely resembling a dual-CPU server than a conventional DPU, putting it in a higher cost tier than earlier BlueField generations.

  The BlueField-4 STX reduces that configuration to a single Vera processor. The board retains high-density connectors for PCIe and system connectivity and is physically compact: with a soldered CPU and LPDDR5X memory in place of traditional DDR5 DIMM slots, the board footprint is roughly comparable to an Intel DMR 16-channel socket or a 16-channel AMD EPYC Venice platform, ServeTheHome reported.

  ## Processor and memory architecture

  NVIDIA's BlueField-4 DPU family spans both Grace and Vera CPU architectures. The STX board shown at OCP 2026 appears to use a Vera package, according to ServeTheHome, which noted that the Vera processor is not an embedded-class CPU of the kind historically found in DPUs. The publication characterized it as equivalent to a high-end single-socket server platform.

  Memory is SOCAMM form factor — a compact, surface-mounted module standard — which ServeTheHome said makes it straightforward to fit either an air-cooling heatsink or a liquid cooling block directly on top of the assembly.

  ## M.2 slot and assembly design

  The board includes an M.2 slot, a connector format most commonly used for operating system storage drives. ServeTheHome noted that in AWS networking infrastructure, M.2 SSDs serve as log devices rather than boot media, suggesting a potential role for the slot beyond standard OS storage in the CMX context.

  ServeTheHome also observed that the board appears designed for automated assembly rather than as a traditional motherboard replacement, a characteristic it described as meaningful for partners building context memory platforms at volume.

  ## ConnectX-9 absent from OCP 2026 boards

  No NVIDIA ConnectX-9 SuperNIC was visible on any of the BlueField-4 STX boards shown at OCP 2026, according to ServeTheHome, which said it had expected to see the SuperNIC present. ConnectX-9 is NVIDIA's high-speed networking silicon and was included in the earlier dual-Vera BlueField-4 DPU design. ServeTheHome said the component was absent across photographs taken at multiple partner booths.

  ## Cost and positioning

  The shift from dual to single Vera directly reduces bill-of-materials cost. ServeTheHome identified this as significant given that NAND flash memory prices have been rising meaningfully over the past year — a relevant pressure point for context memory platforms, which rely heavily on flash storage.

  ServeTheHome noted that the BlueField-4 STX occupies an intermediate position in NVIDIA's lineup, sitting between the higher-end Vera server product line and the traditional, lower-power BlueField DPU family, and suggested NVIDIA may need a distinct brand to clearly position the STX-class products within that gap.

  The appearance of the BlueField-4 STX across multiple partner booths at OCP 2026 indicates the platform has reached a stage of active ecosystem development, with partners having specifically requested the single-Vera, lower-cost design.
body_zh: |
  輝達（NVIDIA）在OCP 2026上展出了BlueField-4 STX情境記憶體（CMX）伺服器，這是一款搭載單顆Vera CPU的平台，定位為先前發布的雙Vera BlueField-4資料處理器（DPU）的低成本替代方案。據ServeTheHome報導，多家合作夥伴在會場上展出了這款板卡，而推出此設計的契機，正是來自生態系夥伴的積極要求。

  ## STX與早期BlueField-4 DPU的差異

  先前展示的BlueField-4 DPU採用雙Vera CPU配置，每顆處理器搭配SOCAMM記憶體，並配備四顆ConnectX-9 SuperNIC。DPU是一種專用卸載處理器，部署於資料中心伺服器，獨立於主機CPU之外，負責處理網路、儲存與資安功能；歷史上，DPU一向是體積小、功耗低的元件。ServeTheHome指出，雙Vera設計更像一台雙路伺服器，而非傳統DPU，使其成本遠高於早期BlueField世代。

  BlueField-4 STX將上述配置縮減為單顆Vera處理器。這款板卡保留了PCIe與系統連接所需的高密度連接器，外形相當緊湊：由於CPU直接焊接於板上，記憶體也改用LPDDR5X取代傳統DDR5 DIMM插槽，板卡尺寸與英特爾DMR 16通道插座或16通道AMD EPYC Venice平台大致相當，ServeTheHome如此報導。

  ## 處理器與記憶體架構

  輝達BlueField-4 DPU系列橫跨Grace與Vera兩種CPU架構。據ServeTheHome報導，OCP 2026展出的STX板卡採用Vera封裝，並特別指出Vera處理器並非歷來DPU所慣用的嵌入式等級CPU，其規格等同於高階單路伺服器平台。

  記憶體採用SOCAMM形式——一種緊湊的表面貼裝模組標準——ServeTheHome表示，這種設計讓氣冷散熱片或液冷水冷頭均可直接安裝於模組上方，組裝相當便利。

  ## M.2插槽與板卡設計

  板卡配備一個M.2插槽，此連接器規格最常見的用途為作業系統儲存裝置。ServeTheHome指出，在AWS的網路基礎設施中，M.2固態硬碟是作為日誌裝置而非開機媒體使用，這暗示在CMX應用情境中，此插槽可能肩負超出標準作業系統儲存的其他功能。

  ServeTheHome也觀察到，這款板卡的設計似乎是為了自動化組裝而生，而非作為傳統主機板的替換品；對於大量生產情境記憶體平台的合作夥伴而言，此一特性具有重要意義。

  ## ConnectX-9未出現在OCP 2026展出的板卡上

  據ServeTheHome報導，在OCP 2026展出的所有BlueField-4 STX板卡上，均未見到輝達ConnectX-9 SuperNIC——而這正是ServeTheHome原本預期會看到的元件。ConnectX-9是輝達的高速網路晶片，先前展示的雙Vera BlueField-4 DPU即搭載此元件。ServeTheHome表示，在多個合作夥伴展位的拍攝照片中，均未見到這顆元件的身影。

  ## 成本定位

  從雙Vera改為單Vera，直接降低了物料成本（BOM成本）。ServeTheHome認為此舉意義重大，因為過去一年NAND快閃記憶體價格持續顯著上漲，而情境記憶體平台高度仰賴快閃儲存，這對相關業者構成相當直接的成本壓力。

  ServeTheHome指出，BlueField-4 STX在輝達產品線中占據中間位置，介於高階Vera伺服器產品線與傳統低功耗BlueField DPU系列之間，並建議輝達或許需要建立獨立品牌，以清晰界定STX等級產品在這段空白地帶的市場定位。

  BlueField-4 STX出現在OCP 2026多個合作夥伴展位上，顯示這款平台已進入積極的生態系發展階段；正是合作夥伴主動提出需求，促成了這款單Vera、低成本設計的誕生。
date: "2026-10-21"
source_published: "2026-10-20T03:53:34.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["AMD", "AWS", "Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA BlueField-4 STX Server for CMX at OCP 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/nvidia-bluefield-4-stx-server-for-cmx-at-ocp-2026/"
    title: "NVIDIA BlueField-4 STX Server for CMX at OCP 2026"
    trust: 3
    type: primary
    published_at: "2026-10-20T03:53:34.000Z"
---
