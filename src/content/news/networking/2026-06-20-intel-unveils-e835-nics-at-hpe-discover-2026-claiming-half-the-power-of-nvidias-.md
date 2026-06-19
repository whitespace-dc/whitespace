---
title_en: "Intel Unveils E835 NICs at HPE Discover 2026, Claiming Half the Power of NVIDIA's ConnectX-6 Dx"
title_zh: "英特爾E835網路卡亮相HPE Discover　耗電量僅輝達ConnectX-6 Dx一半"
summary_en: "Intel showed six E835 network interface card models at HPE Discover 2026, covering 25GbE and 100GbE speeds at prices starting below $216, with Intel claiming the series draws roughly half the power of NVIDIA's ConnectX-6 Dx, a product Intel notes was released in 2019."
summary_zh: "英特爾於HPE Discover 2026展出六款E835網路卡，涵蓋25GbE與100GbE兩種速度規格，建議售價最低不超過216美元；英特爾並宣稱，E835系列耗電量約僅輝達ConnectX-6 Dx的一半，而後者正是英特爾特別點名、於2019年推出的舊款產品。"
body_en: |
  Intel unveiled six E835 network interface card (NIC) models at HPE Discover 2026, covering 25-Gigabit Ethernet (GbE) and 100GbE speeds at prices starting below $216, with Intel claiming the line draws roughly half the power of NVIDIA's ConnectX-6 Dx.

  ## Intel's power-efficiency claim against NVIDIA's ConnectX-6 Dx

  Intel's product overview displayed at the event benchmarks the E835 against NVIDIA's ConnectX-6 Dx, which Intel notes was released in the second half of 2019. Intel claims the E835 draws approximately half the power of that adapter.

  The E835 controller supports RoCEv2 (Remote Direct Memory Access over Converged Ethernet version 2), iWARP (Internet Wide Area RDMA Protocol), and DCB (Data Center Bridging), per a capabilities slide displayed at the show.

  ## E835 models and recommended prices

  Six E835 configurations were on display at HPE Discover 2026:

  - **E835-CQDA1**: Single-port 200GbE using a QSFP28 (Quad Small Form-factor Pluggable; four lanes at up to 28 Gbps each) connector
  - **E835-CQDA2**: Dual-port 2x 100GbE using QSFP28 connectors; low-profile form factor; recommended price below $600
  - **E835-XXVDA2**: Dual-port 25GbE; recommended price at or below $216
  - **E835-XXVDA4**: Quad-port 25GbE; low-profile; SFP28 (Small Form-factor Pluggable, 28 Gbps capable) connectors; mid-$500 range; Intel uses a specialized bracket to fit four SFP cages within the low-profile mechanical envelope
  - **E835-XXVDA4F**: Full-height quad-port 25GbE; no recommended price available at the time of the show
  - **E835-XXVDA4 OCP NIC 3.0**: Quad-port 25GbE in OCP (Open Compute Project) NIC 3.0 small form-factor with pull-tab design; low-to-mid $500 range

  The dual-port 100GbE model is recommended at below $600 and the dual-port 25GbE model at or below $216, positioning the lineup at a lower cost-per-Gbps than higher-speed alternatives.

  ## Single-port 200GbE via QSFP28 left unexplained

  Intel's spec page lists QSFP28 connectors for both the single-port CQDA1 and the dual-port CQDA2. The CQDA2 is a straightforward 2x 100GbE design. The single-port CQDA1, however, carries a 200GbE rating despite using the same connector type. A standard QSFP28 interface supports a maximum of 100GbE per port; achieving 200GbE from a single port would ordinarily require a higher-density connector such as QSFP28-DD or QSFP56. No explanation for the discrepancy appeared in materials on display at the show.

  ## Target market: lower-speed and edge infrastructure

  The E835 lineup is aimed at servers connecting to existing or lower-speed networks, rather than at the high-bandwidth infrastructure supporting AI (artificial intelligence) clusters. AI clusters are currently moving from 400GbE to 800GbE and even 1.6 Terabit Ethernet (TbE) link speeds; at those rates, 25GbE serves mainly as a management-plane interface rather than a primary data path.

  For general-purpose data centers and edge deployments, 25GbE connectivity remains common. Power constraints are typical at the edge, and a per-NIC saving of around 10 watts carries practical significance across large server fleets.

  Intel's product overview benchmarks the E835 against the ConnectX-6 Dx, now approximately seven years old, rather than against newer high-speed adapters. The positioning reflects a segment where NVIDIA's Mellanox networking unit has concentrated development on higher-speed products, according to Intel's overview materials displayed at HPE Discover 2026.
body_zh: |
  英特爾在HPE Discover 2026發表六款E835網路介面卡（NIC）新品，產品線涵蓋25 Gigabit乙太網路（GbE）與100GbE兩種速度規格，建議售價最低不超過216美元，並宣稱整個系列的耗電量約為輝達（NVIDIA）ConnectX-6 Dx的一半。

  ## 英特爾對輝達ConnectX-6 Dx的功耗效率主張

  英特爾在展場展示的產品概覽中，將E835與輝達ConnectX-6 Dx進行直接比較——英特爾特別指出，後者係於2019年下半年推出。英特爾宣稱，E835的耗電量約為該款網路卡的一半。

  就功能規格而言，展場展示的規格投影片顯示，E835控制器支援RoCEv2（融合式乙太網路遠端直接記憶體存取第二版）、iWARP（網際網路廣域RDMA協定）以及DCB（資料中心橋接）。

  ## E835各型號與建議售價

  HPE Discover 2026展場共展出六款E835配置：

  - **E835-CQDA1**：單埠200GbE，採用QSFP28（Quad Small Form-factor Pluggable，四通道、每通道最高28 Gbps）連接器
  - **E835-CQDA2**：雙埠2×100GbE，採用QSFP28連接器；低矮型外形；建議售價低於600美元
  - **E835-XXVDA2**：雙埠25GbE；建議售價不超過216美元
  - **E835-XXVDA4**：四埠25GbE；低矮型；採SFP28（Small Form-factor Pluggable，28 Gbps規格）連接器；售價約在500美元中段；英特爾採用特製支架，在低矮型機械外殼內安裝四個SFP插槽
  - **E835-XXVDA4F**：全高四埠25GbE；展覽期間無建議售價資訊
  - **E835-XXVDA4 OCP NIC 3.0**：四埠25GbE，採OCP（開放運算專案）NIC 3.0小型外形設計，配備拉片式結構；售價約在500美元中低段

  雙埠100GbE型號建議售價低於600美元，雙埠25GbE型號則不超過216美元，使整個產品線在單位頻寬成本上較高速替代方案更具競爭力。

  ## 單埠200GbE搭配QSFP28的疑點未獲說明

  英特爾規格頁面顯示，單埠CQDA1與雙埠CQDA2均採用QSFP28連接器。CQDA2為標準的2×100GbE設計，無爭議。然而，單埠CQDA1雖使用相同的連接器類型，卻標榜200GbE規格。標準QSFP28介面每埠最高僅支援100GbE；若要以單埠達到200GbE，通常需要使用密度更高的連接器，例如QSFP28-DD或QSFP56。展場展示的資料中，對此規格差異並未提供任何說明。

  ## 目標市場：低速網路與邊緣基礎設施

  E835系列的定位在於連接既有或低速網路的伺服器，而非針對支援人工智慧（AI）叢集的高頻寬基礎設施。目前AI叢集正從400GbE邁向800GbE，乃至1.6 Terabit乙太網路（TbE）的傳輸速度；在這些速率下，25GbE主要作為管理平面介面，而非主要資料傳輸通道。

  對於一般用途的資料中心與邊緣部署而言，25GbE連線仍相當普遍。邊緣環境中的功耗限制通常較為嚴苛，每張網路卡節省約10瓦的耗電量，對大規模伺服器機隊而言具有實際意義。

  英特爾的產品概覽選擇將E835與距今已約七年的ConnectX-6 Dx相比，而非與較新的高速網路卡競爭。根據英特爾在HPE Discover 2026展場展示的概覽資料，這樣的定位反映出一個特定的市場區隔：輝達旗下的Mellanox網路部門已將研發重心集中於更高速的產品。
date: "2026-06-20"
source_published: "2026-06-18T19:55:39.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["Intel", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: This is the New Intel E835 NIC Lineup from HPE Discover 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/this-is-the-new-intel-e835-nic-lineup-from-hpe-discover-2026/"
    title: "This is the New Intel E835 NIC Lineup from HPE Discover 2026"
    trust: 3
    type: primary
    published_at: "2026-06-18T19:55:39.000Z"
---
