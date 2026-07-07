---
title_en: "SemiAnalysis says Nvidia Kyber NVL144 faces 2028 delay, Rubin Ultra 4-die version cancelled"
title_zh: "SemiAnalysis：輝達Kyber NVL144延至2028年，Rubin Ultra四晶粒版本遭取消"
summary_en: "Semiconductor research firm SemiAnalysis claims Nvidia's next-generation Kyber NVL144 rack architecture is delayed more than a year to 2028 due to a manufacturing bottleneck in a complex PCB midplane, while the planned 4-compute-die Rubin Ultra flagship and a transitional back-to-back rack design have both reportedly been cancelled. Nvidia said its product roadmap is unchanged."
summary_zh: "半導體研究機構SemiAnalysis指出，輝達下一代AI伺服器機架架構Kyber NVL144因PCB中板製造瓶頸，發布時程延遲逾一年至2028年；同時，原訂四計算晶粒的Rubin Ultra旗艦GPU及過渡性背靠背機架設計NVL72×2均已遭到取消。輝達方面則表示產品藍圖並無任何變動。"
body_en: |
  Semiconductor research firm SemiAnalysis said in a series of posts on X that Nvidia's next-generation AI server rack architecture, Kyber NVL144 — the planned successor to the current Blackwell Ultra generation — faces a delay of more than one year, pushing its launch to 2028. The firm also reported that Nvidia has cancelled both its planned 4-compute-die Rubin Ultra flagship GPU and a transitional back-to-back rack configuration called NVL72×2. Nvidia disputed the characterization, with a company spokesperson saying its "product roadmap remains unchanged."

  ## PCB midplane manufacturing at the root of the Kyber delay

  SemiAnalysis identified the manufacturing of a single internal component — the PCB midplane, which Nvidia calls the Orthogonal Backplane — as the primary obstacle blocking Kyber NVL144's production schedule. In a high-end AI server rack, the midplane is the interconnect board that links compute trays to switch trays inside the cabinet. Nvidia's design orients this connection at a 90-degree angle, allowing compute and switch trays to plug directly into the midplane rather than relying on large numbers of copper cables, which improves signal integrity and allows more GPUs to be integrated into a single rack.

  According to SemiAnalysis, the Kyber midplane uses a 78-layer printed circuit board construction and incorporates high-specification materials including M9-grade copper-clad laminate (CCL) — a copper foil substrate that forms the base of the circuit board — along with quartz fiberglass cloth. These material choices push manufacturing precision requirements, material costs, and production yield control well beyond those of existing AI server products, making high-volume production the central obstacle to the product's schedule.

  ## Transitional NVL72×2 back-to-back plan also dropped

  SemiAnalysis said Nvidia had also been developing an interim architecture called NVL72×2, which would have connected two existing Oberon NVL72 racks back-to-back and linked them using copper NVLink interconnects. NVLink is Nvidia's high-speed chip-to-chip interconnect technology. The arrangement was intended to create a larger scale-up compute cluster — a tightly coupled pool of GPUs that work together on AI training — while sidestepping the Orthogonal Backplane manufacturing problem entirely.

  That plan has reportedly also been cancelled. SemiAnalysis cited feedback from cloud service providers (CSPs) and hyperscalers — the large-scale data center operators that represent Nvidia's primary AI infrastructure market — who concluded the back-to-back rack form factor was too unconventional. Buyers reportedly found that the configuration complicates data center floor planning, installation logistics, maintenance access, and thermal management, and the design did not receive sufficient market support to proceed.

  ## Rubin Ultra reduced from 4-die to 2-die configuration

  SemiAnalysis additionally reported that Nvidia has cancelled the 4-compute-die configuration of its planned Rubin Ultra GPU, retaining only a 2-compute-die version. A compute die is an individual silicon chip; Rubin Ultra was originally designed to package four of them together to maximize processing capacity. With die count halved, SemiAnalysis said the remaining version is expected to deliver roughly half the performance of the original 4-die design under real AI workloads.

  The firm also said Nvidia has not yet produced a mature, validated approach to expanding the Rubin Ultra's scale-up domain — the interconnect fabric that allows large numbers of GPUs to collaborate on AI training tasks at scale. If the Kyber delay holds and the NVL72×2 option is gone, SemiAnalysis said, Rubin Ultra's ability to scale within very large AI training clusters could be constrained.

  ## Competitive window for AMD and Google

  SemiAnalysis said the combined setbacks could allow rival AI accelerator platforms to close the gap with Nvidia specifically in large-scale GPU interconnect capability. The firm named AMD's next-generation MI500X platform and Google's TPU v8i — referred to by the codename Broadfly — as products positioned to benefit if Nvidia's scale-up architecture remains unresolved.

  All reported changes cited in this article originate from SemiAnalysis's supply-chain research and analysis, not from Nvidia disclosures. Nvidia has not confirmed any of the reported product or schedule changes, and a company spokesperson stated that its product roadmap remains unchanged.
body_zh: |
  ## SemiAnalysis指輝達Kyber NVL144延至2028年，Rubin Ultra四晶粒版本遭取消

  半導體研究機構SemiAnalysis在X平台上發布一系列貼文，指出輝達下一代AI伺服器機架架構Kyber NVL144——現行Blackwell Ultra世代的預定接班人——面臨逾一年的延遲，發布時程因此推遲至2028年。該機構同時報導，輝達已取消原訂四計算晶粒的Rubin Ultra旗艦GPU，以及一款代號NVL72×2的過渡性背靠背機架配置。輝達對此說法提出異議，公司發言人表示，「產品藍圖維持不變」。

  ## PCB中板製造問題是Kyber延遲的根本原因

  SemiAnalysis點名一個核心零件——PCB中板（輝達將其稱為「正交背板」，Orthogonal Backplane）——的製造難題，是阻礙Kyber NVL144量產進度的主要障礙。在高階AI伺服器機架中，中板是連接機架內計算托盤與交換器托盤的互連電路板。輝達的設計將這項連接以90度垂直方向排列，讓計算托盤與交換器托盤能直接插入中板，而無需大量銅纜連接，此設計有助於提升訊號完整性，並讓單一機架得以整合更多GPU。

  根據SemiAnalysis的說法，Kyber中板採用78層印刷電路板結構，並導入高規格材料，包括M9級覆銅積層板（CCL，一種作為電路板基底的銅箔基材）以及石英玻璃纖維布。這些材料的選用，使製造精度要求、材料成本及良率控制均遠超現有AI伺服器產品的水準，高良率量產因此成為這款產品時程上的核心難關。

  ## 過渡性NVL72×2背靠背方案亦遭放棄

  SemiAnalysis指出，輝達原本也在開發一套過渡架構，代號NVL72×2，構想是將兩個現有的Oberon NVL72機架背靠背串聯，並以銅質NVLink互連技術加以連接。NVLink是輝達的高速晶片間互連技術。這項配置原本旨在打造規模更大的Scale-up運算叢集——一種多顆GPU緊密協作以執行AI訓練的運算池——同時完全繞開正交背板的製造難題。

  然而，這項計畫據報也已遭到取消。SemiAnalysis援引雲端服務供應商（CSP）及超大規模資料中心業者——即輝達AI基礎設施市場的主要客群——的反饋指出，業者普遍認為背靠背機架的外型過於特殊。買家反映，這種配置將使資料中心樓層規劃、安裝後勤、維護通道及散熱管理更加複雜，最終未能獲得足夠的市場支持而告吹。

  ## Rubin Ultra從四晶粒縮減為雙晶粒配置

  SemiAnalysis另外報導，輝達已取消Rubin Ultra GPU的四計算晶粒版本，僅保留雙計算晶粒版本。計算晶粒是指單顆矽晶片；Rubin Ultra最初的設計是將四顆晶粒封裝在一起，以最大化運算效能。晶粒數量減半後，SemiAnalysis表示，現存版本在實際AI工作負載下的效能，預計僅有原四晶粒設計的約一半。

  該機構同時指出，輝達目前尚未建立一套成熟且經過驗證的方案，用以擴展Rubin Ultra的Scale-up互連架構——亦即允許大量GPU在大規模AI訓練任務中協同運作的互連網路。SemiAnalysis表示，若Kyber的延遲情況持續，且NVL72×2方案已無從實施，Rubin Ultra在超大型AI訓練叢集中的擴展能力恐將受到制約。

  ## AMD與Google獲得競爭窗口

  SemiAnalysis指出，上述諸多挫折的合力影響，或將使競爭對手的AI加速器平台有機會在大規模GPU互連能力上縮小與輝達之間的差距。該機構點名AMD下一代MI500X平台，以及Google代號「Broadfly」的TPU v8i，認為兩者有望在輝達Scale-up架構懸而未決之際，從中受益。

  本文所引述的所有異動資訊，均來自SemiAnalysis的供應鏈研究與分析，並非出自輝達的官方揭露。輝達尚未證實任何上述產品或時程變動，公司發言人重申，產品藍圖維持不變。
date: "2026-07-08"
source_published: "2026-07-06T04:00:54.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-06-27-nvidia-ceo-declares-vera-rubin-in-full-production-fy2026-revenue-up-65-to-2159b"
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: SemiAnalysis爆料：輝達Kyber傳延到2028年 關鍵卡在一塊PCB 高階Rubin Ultra也取消 (trust 3/5)."
sources:
  - url: "https://www.ctee.com.tw/news/20260706701008-430704"
    title: "SemiAnalysis爆料：輝達Kyber傳延到2028年 關鍵卡在一塊PCB 高階Rubin Ultra也取消"
    trust: 3
    type: primary
    published_at: "2026-07-06T04:00:54.000Z"
---
