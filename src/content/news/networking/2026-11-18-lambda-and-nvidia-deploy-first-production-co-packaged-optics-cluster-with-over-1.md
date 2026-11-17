---
title_en: "Lambda and NVIDIA deploy first production co-packaged optics cluster with over 10,000 GPUs"
title_zh: "Lambda與輝達部署首座量產共封裝光學叢集，規模逾萬顆GPU"
summary_en: "Lambda and NVIDIA have deployed what they describe as the first production co-packaged optics cluster, a live system of more than 10,000 GPUs disclosed at the SC26 supercomputing conference. The deployment ends decades of industry speculation about whether co-packaged optics could move from the laboratory into production at scale."
summary_zh: "Lambda與輝達在SC26超級電腦研討會上揭露，雙方已共同部署全球首座量產共封裝光學叢集，系統搭載超過一萬顆GPU，正式宣告共封裝光學技術從實驗室跨入大規模量產環境。這項部署終結了業界數十年來對CPO能否走出實驗室的種種猜測。"
body_en: |
  Lambda and NVIDIA have deployed what the two companies describe as the first production co-packaged optics cluster, a live system comprising more than 10,000 GPUs, disclosed at the SC26 supercomputing conference. The deployment is the first publicly confirmed instance of co-packaged optics networking operating in a production environment at this scale.

  Co-packaged optics, or CPO, refers to a switch architecture in which optical components are integrated directly onto or adjacent to the switch chip's package, rather than housed in pluggable transceivers along the front panel of the chassis. In a conventional high-speed switch, each optical transceiver connects to the switch chip via copper traces that must carry signals over relatively long distances inside the chassis. CPO eliminates those copper runs, shortening the electrical path and reducing the power each signal requires.

  ## The NVIDIA Quantum-X implementation

  NVIDIA's first CPO product is the Quantum-X switch. Instead of front-panel optical transceivers, the Quantum-X uses an array of 18 pluggable light sources mounted on the front of the chassis; those light sources feed into the switch package's integrated optical modules. The switch provides 144 MPO/MTP ports — multi-fiber push-on connectors used for high-density fiber cabling — each running at 800 Gbps.

  The 18-source design requires fewer optical components than a conventional switch of equivalent port count, which would need 144 individual 800 Gbps modules or 72 dual-port modules. Fewer components means fewer failure points. Critically, NVIDIA made the light sources pluggable and therefore field-replaceable. Light sources have historically been the most failure-prone element in optical links, and earlier CPO designs that integrated the light source permanently into the package required replacing the entire switch when a laser failed. Making the light source a serviceable unit was, according to coverage of NVIDIA's Hot Chips 2025 presentation, a key design decision.

  NVIDIA has described Spectrum-X as a planned second-generation CPO switching product.

  ## Power and density advantages

  The operational case for CPO in GPU clusters centers on power consumption. By removing the long copper signal paths between the switch chip and the front-panel cages, CPO reduces the power drawn by the switching fabric. In a facility where total power is a fixed constraint, every watt saved on networking is a watt available for compute. NVIDIA has stated that this tradeoff allows more GPUs to operate within the same power envelope, with direct implications for the revenue a cluster can generate per watt of available power.

  ## An industry milestone deferred for decades

  CPO has been an active area of industry development for decades, consistently described as approaching but not yet achieved in production. As recently as the OCP Summit 2026, held weeks before SC26, at least one vendor keynote characterized CPO deployment as still years away. The Lambda cluster was already operational at that point.

  The Lambda and NVIDIA deployment, now confirmed live with more than 10,000 GPUs running on a Quantum-X CPO switching fabric, shifts the industry question from whether and when CPO will reach production to what its adoption rate will be across the broader market.
body_zh: |
  Lambda與輝達已部署兩家公司所稱的全球首座量產共封裝光學叢集，這套運行中的系統搭載超過一萬顆GPU，於SC26超級電腦研討會上正式對外披露。這是共封裝光學網路技術首度獲得公開確認、以此規模在量產環境中實際運行的案例。

  共封裝光學（Co-packaged Optics，CPO）是一種交換器架構，核心概念是將光學元件直接整合至交換晶片封裝上或緊鄰封裝處，而非如傳統設計般將光收發器安裝在機箱前面板的插槽中。在傳統高速交換器裡，每個光收發器須透過銅線走線連接至交換晶片，訊號必須在機箱內部走過相對較長的距離。CPO技術消除了這段銅線路徑，縮短電氣傳輸距離，同時降低每道訊號所需的功耗。

  ## 輝達Quantum-X的實作方式

  輝達首款CPO產品為Quantum-X交換器。有別於傳統前面板光收發器的設計，Quantum-X在機箱前方配置了18個插拔式光源陣列，這些光源再饋入交換器封裝內整合的光學模組。該交換器提供144個MPO/MTP埠——用於高密度光纖佈線的多芯推拉式連接器——每埠傳輸速率達800 Gbps。

  18光源的設計所需光學元件數量，遠少於同等埠數的傳統交換器；後者需要144個獨立的800 Gbps模組，或72個雙埠模組。元件愈少，潛在故障點也愈少。關鍵在於，輝達將光源設計成可插拔、因此能在現場直接更換的元件。光源歷來是光學鏈路中最容易發生故障的部分，而早期將光源永久整合至封裝內的CPO設計，一旦雷射故障就必須更換整台交換器。根據輝達在Hot Chips 2025所發表報告的相關報導，將光源設計為可維修單元，是一項關鍵的設計決策。

  輝達已表示，Spectrum-X為規劃中的第二代CPO交換產品。

  ## 功耗與密度優勢

  CPO技術應用於GPU叢集的運營優勢，核心在於功耗表現。藉由消除交換晶片與前面板插槽之間冗長的銅線訊號路徑，CPO可有效降低交換架構的整體功耗。在總可用電力固定的資料中心環境中，省下的每一瓦網路功耗，都能轉移給運算使用。輝達表示，這項取捨能讓更多GPU在相同功耗範圍內運行，直接影響叢集每瓦可用電力所能創造的營收。

  ## 延宕數十年的產業里程碑

  CPO技術的產業發展已歷經數十年，長期被形容為「即將實現卻始終未能量產」。就在SC26召開前數週舉辦的OCP Summit 2026上，仍有至少一家廠商在主題演講中指出，CPO部署距離真正落地還需要數年時間。然而Lambda的叢集彼時早已投入運行。

  Lambda與輝達的部署案現已確認上線，超過一萬顆GPU運行於Quantum-X CPO交換架構之上。這一進展將整個產業的核心問題，從「CPO能否以及何時進入量產」，轉移至「CPO在更廣泛市場中的採用速度究竟將有多快」。
date: "2026-11-18"
source_published: "2026-11-16T21:24:47.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: NVIDIA and Lambda Disclose First Production Co-Packaged Optics Cluster… It is FINALLY real (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/nvidia-and-lambda-disclose-first-production-co-packaged-optics-cluster-it-is-finally-real/"
    title: "NVIDIA and Lambda Disclose First Production Co-Packaged Optics Cluster… It is FINALLY real"
    trust: 3
    type: primary
    published_at: "2026-11-16T21:24:47.000Z"
---
