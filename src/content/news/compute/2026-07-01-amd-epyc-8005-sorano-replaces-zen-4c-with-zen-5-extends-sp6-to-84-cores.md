---
title_en: "AMD EPYC 8005 Sorano replaces Zen 4c with Zen 5, extends SP6 to 84 cores"
title_zh: "AMD EPYC 8005 Sorano以Zen 5取代Zen 4c，SP6最高擴至84核心"
summary_en: "AMD's EPYC 8005 'Sorano' series replaces the Zen 4c cores of its SP6 predecessor with full Zen 5 cores and raises the maximum core count to 84, while retaining socket compatibility with existing EPYC 8004 platforms via a BIOS update."
summary_zh: "AMD推出EPYC 8005「Sorano」系列處理器，以完整Zen 5核心取代前代EPYC 8004 Siena的Zen 4c架構，最高核心數提升至84顆，並支援DDR5-6400記憶體與CXL 2.0，且透過BIOS更新即可相容現有SP6平台。"
body_en: |
  AMD's EPYC 8005 "Sorano" processor series replaces the Zen 4c core architecture used in the prior EPYC 8004 "Siena" generation with full Zen 5 cores, raises the maximum core count to 84, and adds DDR5-6400 memory support and CXL 2.0 connectivity, all within the same SP6 socket as its predecessor, according to a sponsored review published by ServeTheHome.

  The core architecture change is the central departure from the EPYC 8004. The prior generation used Zen 4c, a compact variant of AMD's Zen 4 microarchitecture designed for density but carrying smaller per-core cache allocations. The EPYC 8005 moves to the same full-cache Zen 5 cores found in the EPYC 4005 series and the EPYC 9005 "Turin" family — excluding Turin Dense parts — bringing larger L3 caches alongside the generation-over-generation improvements in the Zen 5 design, ServeTheHome reported.

  ## Specifications and pricing

  The EPYC 8005 occupies the same SP6 socket as the EPYC 8004. AMD positioned the new chips as a drop-in replacement for existing SP6 platforms, requiring only a BIOS update on compatible boards. The SP6 package is physically comparable in size to older EPYC 7000-series processors and AMD Threadripper chips, ServeTheHome noted.

  Key specifications across the EPYC 8005 line:

  - Core counts: 8 to 84 cores (168 threads at the maximum)
  - L3 cache: up to 384MB
  - Memory: DDR5-6400
  - Interconnect: CXL 2.0 (Compute Express Link, a high-speed interface for attaching memory expanders and accelerators to processors)
  - Default TDP (thermal design power, the rated maximum sustained heat output): 225W

  The product stack spans $529 to $5,799. ServeTheHome noted that the 84-core model is priced only slightly above the 64-core part, and said AMD is emphasizing cost per core as the relevant metric at the top of the lineup.

  ## Power consumption

  The 225W default TDP is 25 watts, or 12.5%, higher than the EPYC 8004 ceiling. At the full system level, however, ServeTheHome reported an actual increase of approximately 30 to 34 watts at 100% processor utilization — less than 10% more total platform power than the prior generation. The publication attributed the modest real-world delta to the combination of additional cores, the newer Zen 5 architecture, and faster memory operating within the same socket.

  ## Architecture parity across SP6

  By moving SP6 to Zen 5, AMD eliminates the core architecture gap that existed within its prior server portfolio. The EPYC 8004's Zen 4c cores offered lower per-core cache than the full Zen 4 cores used in other AMD server lines. With the 8005 generation, SP6 platform customers run the same full-cache Zen 5 cores available in the EPYC 4005 and EPYC 9005 families.

  ServeTheHome described the launch as potentially the most significant change to an AMD server product line and socket since the EPYC 7002 "Rome" generation. AMD provided the review chips; ServeTheHome disclosed that the review is sponsored content.

  The EPYC 8005 SKU range runs from $529 at the entry level to $5,799 at the top of the stack.
body_zh: |
  AMD的EPYC 8005「Sorano」處理器系列，以完整的Zen 5核心取代前代EPYC 8004「Siena」所採用的Zen 4c架構，最高核心數提升至84顆，同時新增DDR5-6400記憶體支援與CXL 2.0連接能力，且全部保留在與前代相同的SP6腳位之內。上述資訊來自ServeTheHome所發表的一篇業配評測。

  核心架構的轉換是本代與EPYC 8004最根本的差異。前代產品採用Zen 4c——這是AMD Zen 4微架構的精簡變體，以高密度為設計目標，但每顆核心的快取配置較小。EPYC 8005改採與EPYC 4005系列及EPYC 9005「Turin」家族（不含Turin Dense型號）相同的完整快取Zen 5核心，帶來更大的L3快取，以及Zen 5架構在世代間的整體效能提升，ServeTheHome如此報導。

  ## 規格與定價

  EPYC 8005與EPYC 8004使用相同的SP6腳位。AMD將這批新晶片定位為現有SP6平台的直接替換方案，僅需對相容主機板進行BIOS更新即可。ServeTheHome指出，SP6封裝在尺寸上與舊款EPYC 7000系列處理器及AMD Threadripper晶片相當。

  EPYC 8005產品線的主要規格如下：

  - 核心數：8至84顆（最高可達168執行緒）
  - L3快取：最高384MB
  - 記憶體：DDR5-6400
  - 互連介面：CXL 2.0（Compute Express Link，一種用於將記憶體擴充模組與加速器連接至處理器的高速介面）
  - 預設TDP（熱設計功耗，即額定最大持續散熱量）：225W

  整個產品陣列的售價從529美元至5,799美元不等。ServeTheHome指出，84核心型號的售價僅略高於64核心版本，並表示AMD在旗艦陣容中主打「每核心成本」作為核心訴求指標。

  ## 功耗表現

  225W的預設TDP比EPYC 8004上限高出25瓦，增幅約12.5%。然而，ServeTheHome在整機系統層面測得的實際增幅，約為在處理器100%滿載時多消耗30至34瓦——比前代平台的總功耗增加不到10%。該媒體將這相對有限的實際功耗差距，歸因於核心數增加、更新的Zen 5架構，以及在相同腳位中運作的更快速記憶體三者共同作用的結果。

  ## SP6平台的架構一致性

  透過將SP6升級至Zen 5，AMD消弭了其前代伺服器產品組合內部的核心架構落差。EPYC 8004的Zen 4c核心在每核心快取方面，不及AMD其他伺服器產品線所採用的完整Zen 4核心。進入8005世代後，SP6平台的用戶得以使用與EPYC 4005及EPYC 9005家族相同的完整快取Zen 5核心。

  ServeTheHome將本次發布形容為自EPYC 7002「Rome」世代以來，AMD伺服器產品線與腳位平台最具重大意義的一次變革。AMD提供了送測晶片；ServeTheHome亦揭露，本篇評測為贊助內容。

  EPYC 8005的SKU售價區間，從入門款的529美元起跳，最高達旗艦款的5,799美元。
date: "2026-07-01"
source_published: "2026-06-29T18:24:15.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD"]
trust:
  score: 4
  reasoning: "Single source: AMD EPYC 8005 Sorano Completely Changes AMD SP6 (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/amd-epyc-8005-sorano-completely-changes-amd-sp6/"
    title: "AMD EPYC 8005 Sorano Completely Changes AMD SP6"
    trust: 4
    type: primary
    published_at: "2026-06-29T18:24:15.000Z"
---
