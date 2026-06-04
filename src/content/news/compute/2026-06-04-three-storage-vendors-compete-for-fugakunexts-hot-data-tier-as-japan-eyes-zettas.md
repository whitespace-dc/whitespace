---
title_en: "Three storage vendors compete for FugakuNEXT's hot-data tier as Japan eyes zettascale AI"
title_zh: "三大儲存廠商競逐FugakuNEXT熱資料層，日本瞄準澤級AI"
summary_en: "RIKEN's 266-page basic design report for FugakuNEXT names Scality, VAST Data, and WEKA IO as candidates to supply the hot-data storage tier for Japan's next flagship supercomputer, which targets 50 exaflops and zettascale AI performance by 2030."
summary_zh: "RIKEN發布的FugakuNEXT基礎設計報告點名Scality、VAST Data與WEKA IO三家業者，競逐日本下一代旗艦超級電腦的熱資料儲存層合約；這台機器目標於2030年達到50 exaflops運算效能，AI處理峰值更要邁入澤級（zettascale）境界。"
body_en: |
  Somewhere in the product marketing teams of three storage software companies, someone is circling a year: 2030. That is when RIKEN, the Japanese National Research and Development Agency, plans to switch on FugakuNEXT, the successor to its existing Fugaku supercomputer. The machine is designed to push computation into territory that has no precedent in civilian science. Whichever vendor wins the storage contract will, as RIKEN's own design document notes, have a flagship win to place on the walls of their headquarters.

  RIKEN has published version 1.1 of a Basic Design Technical Report running to 266 pages. Buried in section 3.4.2.3.3, under the heading "Examination of System Performance Requirements," the agency names Scality, VAST Data, and WEKA IO as candidates to supply the tier-1 storage software for FugakuNEXT. Tier-1 storage is the hot layer that sits closest to the processors: the fastest, most demanding part of the storage hierarchy, involving a filesystem and solid-state drives within the compute nodes themselves. Getting it right determines whether a machine reaches its theoretical ceiling or spends its time starved for data.

  The performance targets for FugakuNEXT are extreme by any measure. RIKEN describes a system delivering execution performance of 50 exaflops (one exaflop equals one quintillion floating-point operations per second) or more, with peak AI processing reaching the zettascale. One zettaflop equals a thousand exaflops. The machine is intended to be a flagship for what RIKEN calls "AI for Science," combining world-leading simulation capability with AI workloads at a scale current infrastructure cannot comfortably support. Fujitsu and Nvidia are the joint development partners, and RIKEN has been conducting basic design work with both companies.

  ## Three candidates, three architectures

  Each of the three shortlisted vendors represents a distinct answer to the same fundamental problem: how do you feed a machine of this scale without the storage system becoming the bottleneck?

  RIKEN gives the most detailed treatment to VAST Data's DASE architecture. DASE stands for Distributed Anything Storage Engine, and its defining characteristic is the physical separation of compute and storage resources. The design report states that RIKEN is "closely monitoring" DASE as "a key technology for large-scale AI environments." The agency highlights two specific capabilities: DASE's ability to physically eliminate metadata contention while scaling performance and capacity independently, and the feasibility of exabyte-scale expansion within a single namespace. A single namespace means the entire storage pool, however enormous, presents itself to applications as one coherent filing system rather than a collection of separately managed volumes.

  WEKA IO brings a different approach. Its "Augmented Memory Grid" technology integrates distributed memory across thousands of nodes to create a very large, very fast shared buffer. The goal, as described in RIKEN's report, is TB/s-class data feeding: the ability to push terabytes of data per second into the compute fabric. For AI workloads that consume enormous datasets in tight loops, sustained throughput matters as much as raw compute speed.

  Scality rounds out the shortlist with its RING XP product, and its inclusion is the most notable aspect of the competition. Unlike VAST Data and WEKA IO, Scality has no established track record supplying high-speed storage software to supercomputers. What RING XP offers is microsecond-level response performance, which RIKEN describes as "extremely useful as a hot data path for AI inference workloads." That latency characteristic was evidently enough to earn Scality a place alongside two vendors with proven supercomputing credentials. RIKEN says it will scrutinize Scality's configuration proposals during the detailed design phase.

  ## The weight of a flagship win

  The practical significance of this competition extends well beyond the contract itself. RIKEN's decision to name three vendors publicly in a design document, and to quote specific technical capabilities from their product portfolios, functions as a form of independent technical endorsement. Any of the three can point to the report and show that one of the world's most demanding computing environments considered their technology seriously enough to examine it across 266 pages of engineering analysis.

  For Scality in particular, appearing on this shortlist represents a meaningful shift. RING XP's microsecond latency was compelling enough to offset the company's absence of a prior supercomputing reference. Whether that argument survives the detailed design phase is the next open question.

  FugakuNEXT is scheduled to begin operations in 2030. The basic design process is already narrowing the field, and the vendors that survive into detailed design will have demonstrated something rare: that their technology can be taken seriously at the absolute frontier of computational science. Whichever company ultimately provides the hot-data tier for FugakuNEXT will be able to say, accurately, that it helped power the machine Japan built to think at zettascale. That is worth more than a line on a specification sheet.
body_zh: |
  在三家儲存軟體公司的產品行銷部門裡，某位員工正在日曆上圈起一個年份：2030年。那一年，日本國家研究開發機構理化學研究所（RIKEN）計畫啟動FugakuNEXT——現有「富岳」超級電腦的繼任機種。這台機器的設計目標，是將運算能力推入民間科學前所未有的境界。RIKEN自家的設計文件指出，無論哪家廠商最終拿下儲存合約，都將擁有一座足以掛在總部大廳牆上的旗艦勝利。

  RIKEN已公開發布第1.1版《基礎設計技術報告》，全文洋洋灑灑長達266頁。在第3.4.2.3.3節「系統效能需求檢討」標題之下，這份報告點名Scality、VAST Data與WEKA IO三家業者，列為FugakuNEXT第一層（Tier-1）儲存軟體的候選供應商。Tier-1儲存是最貼近處理器的熱資料層，也是整個儲存階層中速度最快、要求最嚴苛的環節，涵蓋運算節點內部的檔案系統與固態硬碟（SSD）。這一層做得好不好，決定了這台機器究竟能觸及理論效能的天花板，還是一直在等待資料而空轉。

  FugakuNEXT的效能目標，以任何標準衡量都極為驚人。RIKEN描述的系統，執行效能達到50 exaflops（1 exaflop相當於每秒執行一百京次浮點運算）以上，AI處理峰值則達到澤級（zettascale）。1 zettaflop等於一千個exaflops。這台機器的定位，是RIKEN所稱「AI for Science」（科學用AI）的旗艦，將世界頂尖的模擬能力與AI工作負載結合在一起，規模之大，現有基礎設施難以輕鬆支撐。富士通與輝達是聯合開發夥伴，RIKEN已與兩家公司共同推進基礎設計工作。

  ## 三家候選業者，三種架構

  三家入圍廠商，各自代表對同一個根本問題的不同解答：面對這種規模的機器，如何讓儲存系統不成為瓶頸？

  RIKEN對VAST Data的DASE架構著墨最深。DASE是「Distributed Anything Storage Engine」（分散式萬用儲存引擎）的縮寫，其核心特色是將運算資源與儲存資源進行實體分離。設計報告指出，RIKEN「密切關注」DASE，視其為「大規模AI環境的關鍵技術」。報告特別強調兩項能力：一是DASE能在實體層面消除元資料（metadata）競爭，同時獨立擴展效能與容量；二是在單一命名空間（namespace）內實現艾位元組（exabyte）級擴充的可行性。所謂單一命名空間，意指無論儲存池有多龐大，整個儲存資源都以一個統一的檔案系統呈現給應用程式，而非一堆各自獨立管理的卷冊（volume）。

  WEKA IO的做法截然不同。它的「Augmented Memory Grid」（增強記憶體網格）技術，將數千個節點的分散式記憶體整合起來，構建出一個容量極大、速度極快的共用緩衝區。報告描述其目標是達到TB/s等級的資料饋送能力——亦即每秒向運算架構推送數TB的資料。對於在緊湊迴圈中大量消耗資料集的AI工作負載而言，持續吞吐量的重要性絲毫不亞於原始運算速度。

  Scality以其RING XP產品躋身入圍名單，是這場競爭中最引人注目的一環。與VAST Data和WEKA IO不同，Scality並無為超級電腦供應高速儲存軟體的既有紀錄。RING XP的賣點在於微秒（microsecond）級的回應效能，RIKEN形容這「對AI推論工作負載的熱資料路徑而言極為實用」。這項延遲特性顯然已足夠有力，讓Scality得以與兩家擁有超級電腦實績的廠商並列入圍。RIKEN表示，將在詳細設計階段仔細審查Scality的配置提案。

  ## 旗艦勝利的份量

  這場競爭的實際意義，遠超過合約本身。RIKEN在設計文件中公開點名三家廠商，並引述各家產品組合的具體技術能力，實際上形同一種獨立的技術背書。三家業者中的任何一家，都可以拿出這份報告，向外界說明：全球要求最嚴苛的運算環境之一，曾在長達266頁的工程分析中認真審視過他們的技術。

  對Scality而言，出現在這份入圍名單上，代表著一次意義重大的突破。RING XP的微秒級延遲說服力，足以彌補該公司缺乏超級電腦參考案例的先天不足。這個論據能否在詳細設計階段繼續成立，是接下來仍待解答的問題。

  FugakuNEXT預計於2030年正式啟用。基礎設計流程已逐步縮小競爭範圍，能夠挺進詳細設計階段的廠商，將已證明了一件難得的事：他們的技術在運算科學的絕對前沿同樣值得認真對待。無論最終由哪家公司為FugakuNEXT提供熱資料層，都可以如實地說，它協助驅動了日本為實現澤級思考能力而打造的這台機器。這份意義，遠遠超過規格書上的一行文字。
date: "2026-06-04T12:21:15.968Z"
category: "compute"
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: FugakuNEXT, Scality, VAST Data and WEKA (trust 3/5)."
sources:
  - url: "https://www.blocksandfiles.com/flash/2026/06/02/fugakunext-scality-vast-data-and-weka/5250265"
    title: "FugakuNEXT, Scality, VAST Data and WEKA"
    trust: 3
    type: primary
---
