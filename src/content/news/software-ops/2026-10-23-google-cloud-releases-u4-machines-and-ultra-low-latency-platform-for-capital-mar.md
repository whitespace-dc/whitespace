---
title_en: "Google Cloud releases U4 machines and ultra-low latency platform for capital markets"
title_zh: "Google Cloud 推出 U4 機型與超低延遲平台，鎖定資本市場"
summary_en: "Google Cloud has made its Ultra Low Latency Solution and U4 machine family generally available for capital markets users in select private cloud regions. The offering targets exchanges, trading firms, and service providers running workloads that require the timing predictability of physical exchange co-location."
summary_zh: "Google Cloud 正式推出「超低延遲解決方案」與 U4 機型系列，面向特定私有雲區域的資本市場客戶全面開放，目標鎖定交易所、交易公司及服務商，提供媲美實體交易所共置機房的時間可預測性。"
body_en: |
  Google Cloud has made its Ultra Low Latency Solution and U4 machine family generally available for capital markets customers, offering dedicated hardware designed to match the timing predictability of physical co-location in exchange data centres.

  The launch targets exchanges, trading firms, and service providers running latency-sensitive workloads in select private cloud regions. Cloud providers have been seeking a larger role in financial market infrastructure, an area long dominated by on-premises hardware in exchange data centres, where low latency and stable packet timing are central to trading performance.

  ## The U4 machine family

  The release centres on three new machine series. U4P and U4C are dual-socket bare metal instances (dedicated physical servers not shared with other customers) for exchange operators and market participants respectively; U4S is a virtual machine series for operators, participants, and service providers.

  The bare metal systems use Intel 5th Generation Xeon processors with 120 physical cores and a choice of 512 GB or 768 GB of memory, and include three physical network interface cards. The U4S virtual machine series uses Intel 6th Generation Xeon processors and scales from 2 to 288 virtual CPUs, with up to 2,232 GB of memory.

  ## System architecture

  The Ultra Low Latency Solution is built on three technical elements, according to Google Cloud: hardware-level multicast distribution for market-data feeds, hardware-timed network observability, and predictable processing for execution workloads. Separate network adapters handle market feeds and telemetry or management traffic independently.

  Storage options include direct-attached Titanium SSD storage for real-time logging and Hyperdisk storage for archives and analytics. The system supports OpenOnload and DPDK for packet processing in Linux user space. Clock synchronisation is provided by Google Cloud's Firefly technology, which the company said delivers sub-10 nanosecond network-level timestamping and UTC synchronisation, well within the sub-100 microsecond threshold cited for regulatory compliance at exchanges.

  ## CME Group deployment

  Google Cloud pointed to CME Group as a live example of the platform's use. The two companies have been working on migrating CME Group's listed derivatives markets to Google Cloud, with the new bare metal instances intended to support exchange and participant workloads that have traditionally operated in physical co-location facilities.

  Pearce Peck-Walden, Managing Director of Markets Engineering at CME Group, said the combination of deterministic networking and dedicated bare metal compute means "market participants can execute and ingest market data with the speed of traditional co-location and the agility of the cloud."

  ## Third-party testing

  Two firms cited by Google Cloud said they tested the systems for trading use cases.

  Prime Trading said having both bare metal and virtual machine options allowed it to compare performance and cost across different trading strategies. Corbin Kidd, EVP and CTO at Prime Trading, said testing "validated that Google Cloud delivers the low latency and determinism required for our demanding exchange trading workloads."

  28Stone focused its tests on tick-to-trade performance, the elapsed time from a market data event to order submission, and consistency under stress. Determinism, the ability to maintain flat performance under load, is a core requirement for institutional trading systems. Christopher Wilson, Global Head of Experience Modernization at 28Stone, said the U4C bare metal instance showed "exceptional speed" and that when the bare metal family was stress-tested, "the performance curve remained virtually flat, confirming that these cloud compute layouts can now offer the strict determinism institutional market participants require."

  ## Deployment and availability

  The Ultra Low Latency Solution is available in select private regions and can be managed through standard cloud application programming interfaces (APIs), infrastructure-as-code tools, and security policies. Customers can apply compact placement policies to keep related machines close together within a data centre, or spread placement policies to distribute systems across separate racks for resilience.

  ## Industry significance

  Cloud providers have been seeking a larger role in financial market infrastructure, an area long dominated by on-premises hardware in exchange data centres. Low latency and stable packet timing are central to trading performance, especially in listed derivatives and other markets where queue position can affect execution, making timing consistency a prerequisite for exchange-grade workloads.

  CME Group's migration of listed derivatives markets to Google Cloud is ongoing, with the new bare metal instances intended to support the exchange and participant workloads at the centre of that programme.
body_zh: |
  Google Cloud 已正式將「超低延遲解決方案」（Ultra Low Latency Solution）與 U4 機型系列向資本市場客戶全面開放，提供專屬硬體，設計目標是在交易所資料中心內達到與實體共置（co-location）相當的時間可預測性。

  此次發布鎖定在特定私有雲區域中執行延遲敏感型工作負載的交易所、交易公司及服務商。雲端服務業者近年來持續積極爭取在金融市場基礎設施中扮演更重要的角色——這個領域長久以來由交易所資料中心的地端硬體所主導，低延遲與穩定的封包時序是交易效能的核心要素。

  ## U4 機型系列

  此次發布以三個新機型系列為核心。U4P 與 U4C 是雙插槽裸機執行個體（bare metal，即不與其他客戶共用的專屬實體伺服器），分別供交易所營運商與市場參與者使用；U4S 則是面向營運商、參與者及服務商的虛擬機器系列。

  裸機系統搭載英特爾第五代 Xeon 處理器，配備 120 個實體核心，記憶體可選 512 GB 或 768 GB，並內建三張實體網路介面卡。U4S 虛擬機器系列則採用英特爾第六代 Xeon 處理器，虛擬 CPU 數量從 2 個延伸至 288 個，記憶體最高可達 2,232 GB。

  ## 系統架構

  根據 Google Cloud 說明，「超低延遲解決方案」建構於三項技術要素之上：硬體層級的群播（multicast）市場資料分發、硬體計時的網路可觀測性，以及執行工作負載的可預測處理。市場資料饋送與遙測或管理流量由獨立的網路介面卡分別處理。

  儲存選項方面，即時日誌記錄採用直連式 Titanium SSD 儲存，封存與分析則採用 Hyperdisk 儲存。系統支援 OpenOnload 與 DPDK，可在 Linux 使用者空間進行封包處理。時鐘同步由 Google Cloud 的 Firefly 技術提供，該公司表示此技術可實現低於 10 奈秒的網路層級時間戳記，以及 UTC 同步，遠優於交易所法規合規要求的低於 100 微秒門檻。

  ## CME 集團部署案例

  Google Cloud 以 CME 集團為此平台的實際應用範例。兩家公司正合作將 CME 集團的掛牌衍生性商品市場遷移至 Google Cloud，新的裸機執行個體預計用於支援傳統上在實體共置機房中運作的交易所及參與者工作負載。

  CME 集團市場工程部門董事總經理 Pearce Peck-Walden 表示，確定性網路與專屬裸機運算的結合，意味著「市場參與者得以用傳統共置的速度與雲端的靈活性來執行並接收市場資料。」

  ## 第三方測試

  Google Cloud 引述了兩家公司針對此系統的交易使用情境測試結果。

  Prime Trading 表示，同時提供裸機與虛擬機器兩種選項，讓該公司得以比較不同交易策略下的效能與成本表現。Prime Trading 執行副總裁兼技術長 Corbin Kidd 表示，測試「驗證了 Google Cloud 確實達到我們嚴苛的交易所交易工作負載所要求的低延遲與確定性。」

  28Stone 則將測試重點放在 tick-to-trade 效能——即從市場資料事件到訂單送出的耗用時間——以及在壓力下的一致性表現。確定性，也就是在高負載下維持穩定效能的能力，是機構交易系統的核心需求。28Stone 全球體驗現代化負責人 Christopher Wilson 表示，U4C 裸機執行個體展現出「卓越的速度」，而當整個裸機系列接受壓力測試時，「效能曲線幾乎維持平坦，確認這些雲端運算配置現已能提供機構市場參與者所要求的嚴格確定性。」

  ## 部署與可用性

  「超低延遲解決方案」目前已在特定私有區域上線，可透過標準雲端應用程式介面（API）、基礎設施即程式碼工具及安全政策進行管理。客戶可套用緊湊布置政策，將相關機器集中於資料中心內的鄰近位置；亦可套用分散布置政策，將系統分布於不同機架以提升韌性。

  ## 產業意義

  雲端服務業者一直積極爭取在金融市場基礎設施中扮演更重要的角色，而這個領域長久以來由交易所資料中心內的地端硬體所主導。低延遲與穩定的封包時序是交易效能的核心，在掛牌衍生性商品及其他隊列位置可能影響成交結果的市場中尤為關鍵，時序一致性因此成為交易所等級工作負載的必要前提。

  CME 集團將掛牌衍生性商品市場遷移至 Google Cloud 的工作仍在持續推進，新的裸機執行個體預計支援此計畫核心的交易所與參與者工作負載。
date: "2026-10-23"
source_published: "2026-10-22T16:00:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Google Cloud", "Intel"]
trust:
  score: 3
  reasoning: "Single source: Google Cloud unveils ultra-low latency tools for markets (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/google-cloud-unveils-ultra-low-latency-tools-for-markets"
    title: "Google Cloud unveils ultra-low latency tools for markets"
    trust: 3
    type: primary
    published_at: "2026-10-22T16:00:00.000Z"
---
