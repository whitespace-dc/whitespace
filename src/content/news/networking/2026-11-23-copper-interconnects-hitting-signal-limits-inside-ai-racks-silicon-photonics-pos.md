---
title_en: "Copper interconnects hitting signal limits inside AI racks, silicon photonics posed to fill gap"
title_zh: "AI機架銅線互連逼近訊號極限，矽光子蓄勢填補缺口"
summary_en: "Copper cabling can no longer sustain reliable connections within a single server rack at 400Gbps per lane, a physical ceiling that is forcing data center operators toward silicon photonics and co-packaged optical interconnects as AI cluster densities climb. The shift has direct implications for how much compute a fixed power budget can deliver."
summary_zh: "銅纜在每通道400Gbps時已無法維持機架內的穩定連線，這道物理天花板正迫使資料中心業者轉向矽光子技術與共封裝光學互連；隨著AI叢集密度持續攀升，此一轉變將直接影響固定電力預算所能承載的運算量。"
body_en: |
  Copper cabling is reaching a hard physical signal limit inside AI data center racks, and the industry's shift toward optical interconnects is now being driven by arithmetic as much as ambition, according to René Jonker, executive vice president at Soitec, writing in Data Center Dynamics on November 22, 2026.

  The argument rests on figures cited by Marvell chief executive Matt Murphy at Computex 2026: copper carries a signal roughly five meters at 100 gigabits per second per lane, about 2.5 meters at 200Gbps, and at 400Gbps it can no longer make reliable connections even within a single rack. Each doubling of lane speed roughly halves the usable cable run, and each shortened run pushes another tier of links from electrical to optical, adding power consumption at every conversion point.

  The backdrop for that constraint is a construction cycle that has not slowed. Data center construction spending reached an annualized pace of more than $75 billion in July, with roughly 3,000 buildings under construction or in planning, Jonker wrote. Operators are signing power purchase agreements years before steel goes in the ground, and interconnection queue times now set project delivery schedules in most major markets. Some projects are phased across several years, meaning architectural choices for the first phase carry into capacity that will not come online until the end of the decade.

  ## Why copper's limits matter for power budgets

  AI clusters depend on a scale-up fabric — a high-speed internal network that makes dozens or hundreds of accelerators behave as a single machine. As long as that fabric runs on copper, signal reach limits cap how many chips can be linked coherently and how much of each watt reaches compute rather than the connections between chips.

  Silicon photonics — a technology that moves data as infrared light through microscopic channels, called waveguides, etched into silicon — removes the reach constraint by substituting light for electrical current. Light does not attenuate over distance the way a high-frequency electrical signal does, Jonker wrote. The engineering tradeoff shifts from managing signal loss to managing the power draw of the optical layer itself.

  Co-packaged optics, a further step, embeds the optical engine directly inside the same semiconductor package as the switch or accelerator chip. That placement eliminates most of the lossy electrical path between the chip and the external optical transceiver, along with the signal processing that path requires.

  ## Manufacturing readiness

  Jonker attributed silicon photonics' earlier confinement to laboratory settings to manufacturability, not performance. The technology became viable at data center scale, he wrote, when photonic integrated circuits — chips that route light rather than electrons — became compatible with CMOS fabrication, the standard process used to make conventional logic and memory chips. CMOS compatibility allows optical and electronic components to be built on the same production lines, without separate manufacturing flows or heavy reliance on scarce materials.

  The substrate — the engineered silicon wafer on which a photonic chip is built — determines optical loss, energy efficiency, thermal behavior, and integration density before circuit design begins, Jonker wrote. Soitec, which manufactures silicon-on-insulator wafers used in photonic and radio-frequency applications, offers distinct platforms — Photonics-SOI, PD-SOI, and RF-SOI — each optimized for different performance targets across data center, cloud AI, edge AI, and mobile applications. Jonker described substrate selection as foundational to silicon photonics performance, with choices made at the start of a design cycle determining whether a chip meets its efficiency targets in production.

  ## Implications for capacity planning

  For operators locking in grid connections years before servers arrive, optical interconnects change the answer to a fixed-budget question, Jonker argued. Once a campus power allocation is set, the remaining variable is how much of each watt reaches accelerators rather than the links between them. Optical interconnect affects that ratio in two directions: it removes cable reach as the ceiling on scale-up domain size, allowing a coherent cluster to span more racks, and it redirects a share of interconnect overhead back into compute.

  Jonker identified pace of adoption, not proof of concept, as the remaining gap. The technology is proven and the manufacturing pathway exists, he wrote, but substrate readiness is where deployment speed is determined. Operators planning capacity through the end of the decade will be making substrate and interconnect architecture decisions now that govern clusters not yet online.
body_zh: |
  Soitec執行副總裁René Jonker於2026年11月22日在《Data Center Dynamics》撰文指出，銅纜在AI資料中心機架內正逼近物理訊號極限，業界轉向光學互連的浪潮，如今與其說是出於雄心壯志，不如說是由冷酷的算術所驅動。

  這套論點的根據，來自Marvell執行長Matt Murphy在2026年台北國際電腦展（Computex 2026）上所援引的數據：銅纜在每通道100Gbps時，訊號傳輸距離約為五公尺；在200Gbps時縮短至約2.5公尺；到了400Gbps，甚至連單一機架內部都無法維持穩定連線。每當通道速率倍增，可用的纜線鋪設長度便大致減半，每一次縮短都迫使又一層連結從電氣轉為光學，並在每個轉換節點上增加額外的耗電量。

  這道物理限制浮現的背景，是一波絲毫未見放緩的建設熱潮。Jonker寫道，資料中心建設支出在7月時已達年化逾750億美元的規模，約有3,000棟建築正在施工或規劃之中。業者簽署購電協議（PPA）的時間，往往早於土地動工多年；在多數主要市場，電網互連的申請排隊時間，如今實際上已主導了專案的交付時程。部分專案分多個階段推進、橫跨數年，意味著第一階段的架構決策，將延伸影響到本十年末才會上線的機房容量。

  ## 銅線限制為何牽動電力預算

  AI叢集的核心，仰賴一套橫向擴展互連架構（scale-up fabric）——這是一種高速內部網路，讓數十乃至數百顆加速器得以像單一機器般協同運作。只要這套架構仍仰賴銅纜，訊號傳輸距離的限制便會同時框住可連貫串連的晶片數量，以及每一瓦電力中真正流向運算、而非消耗在晶片間連結上的比例。

  矽光子技術以截然不同的方式解決這個問題：它將資料以紅外光的形式，透過蝕刻在矽晶片上的微型光導（waveguide）傳輸，藉此以光取代電流，徹底消除傳輸距離的限制。Jonker指出，光不像高頻電氣訊號那樣會隨距離衰減，工程上的取捨因此從管理訊號損耗，轉移到管理光學層本身的耗電。

  共封裝光學（co-packaged optics）則更進一步，將光學引擎直接嵌入交換器或加速器晶片所在的同一半導體封裝內。這樣的配置消除了晶片與外部光學收發器之間大部分的耗損電氣路徑，以及維持該路徑所需的訊號處理開銷。

  ## 製造成熟度

  Jonker認為，矽光子技術過去長期侷限於實驗室環境，根本原因在於可製造性，而非性能表現。他寫道，當光子積體電路（photonic integrated circuit）——亦即以路由光而非電子為功能的晶片——與製造傳統邏輯及記憶體晶片所採用的CMOS標準製程相容後，這項技術才真正在資料中心規模上具備實用可行性。CMOS相容性讓光學與電子元件得以在同一條生產線上製造，無需獨立的製造流程，也不必高度依賴稀缺材料。

  Jonker寫道，光子晶片所建構其上的基板——亦即經過工程設計的矽晶圓——早在電路設計展開之前，便已決定了光學損耗、能源效率、熱行為與整合密度等關鍵特性。Soitec是一家生產絕緣體上矽（SOI）晶圓的廠商，其產品廣泛應用於光子與射頻領域，旗下提供多個差異化平台——Photonics-SOI、PD-SOI與RF-SOI——分別針對資料中心、雲端AI、邊緣AI及行動應用等不同場景的性能需求加以優化。Jonker將基板選擇形容為矽光子性能的根本基石：設計週期之初所做的選擇，將決定晶片能否在量產階段達到既定的效率目標。

  ## 容量規劃的意涵

  Jonker主張，對於那些在伺服器進場多年前便已鎖定電網連接的業者而言，光學互連改變了固定預算問題的答案。一旦廠區的電力配額確定，剩下的變數便是每一瓦電力中有多少真正到達加速器，而非耗散在加速器之間的連結上。光學互連從兩個方向影響這個比值：一方面，它消除了纜線傳輸距離對橫向擴展網域規模的限制上限，使連貫叢集得以跨越更多機架；另一方面，它將部分互連的額外電力開銷重新導回運算本身。

  Jonker指出，當前尚待跨越的差距不在於概念驗證，而在於採用速度。他寫道，這項技術已獲充分驗證，製造路徑也已明確存在，但決定部署速度的關鍵環節，在於基板的備料程度。正在為本十年末規劃容量的業者，如今正在做出的基板與互連架構決策，將主宰那些目前尚未上線的叢集。
date: "2026-11-23"
source_published: "2026-11-22T15:00:32.000Z"
category: "networking"
secondary_categories: []
region: []
vendor: ["Coherent", "Marvell"]
trust:
  score: 3
  reasoning: "Single source: Why the next phase of the data center buildout runs on light (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/opinions/why-the-next-phase-of-the-data-center-buildout-runs-on-light/"
    title: "Why the next phase of the data center buildout runs on light"
    trust: 3
    type: primary
    published_at: "2026-11-22T15:00:32.000Z"
---
