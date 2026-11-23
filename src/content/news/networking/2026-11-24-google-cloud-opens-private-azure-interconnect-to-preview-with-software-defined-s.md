---
title_en: "Google Cloud opens private Azure interconnect to preview with software-defined setup"
title_zh: "Google Cloud開放Azure私有雲互連預覽，軟體定義分鐘完成建置"
summary_en: "Google Cloud has extended its Partner Cross-Cloud Interconnect service to Microsoft Azure in public preview, offering a jointly managed private network path between the two clouds that can be provisioned through software in minutes rather than weeks. The service, available in three regions, encrypts traffic between Google Cloud and Azure edge routers and keeps it off the public internet."
summary_zh: "Google Cloud已將其「合作夥伴跨雲互連」服務延伸至Microsoft Azure，以公開預覽形式推出，讓企業客戶能透過軟體定義方式，在兩大雲端平台之間建立一條由雙方共同管理的私有網路通道，建置時間從數週縮短至數分鐘。"
body_en: |
  Google Cloud has extended its Partner Cross-Cloud Interconnect service to Microsoft Azure in public preview, giving enterprise customers a jointly managed private network path between the two cloud platforms that can be configured through software without physical infrastructure orders, the two companies announced.

  Google said the service is designed to reduce the time needed to establish a cross-cloud connection from weeks or months to minutes. Traffic travels off the public internet and is automatically encrypted between Google Cloud and Azure edge routers. The connection includes redundancy across physically separate locations, with both companies jointly monitoring the link and managing maintenance and recovery.

  ## How provisioning works

  Customers create the connection through the Google Cloud console or an application programming interface (API) and select bandwidth on demand. Google said pricing is fixed per bandwidth tier, intended to make network costs predictable. Because the entire setup is software-defined, customers are not required to coordinate physical network orders or manage separate infrastructure across providers.

  ## Regional availability

  The Azure preview is live in three Google Cloud regions: us-east4 in Northern Virginia, us-west2 in Los Angeles, and europe-west3 in Frankfurt. Google said additional regions will be added as the service moves toward general availability.

  ## Customer and partner statements

  Nestlé and Walmart were cited as early adopters of Google Cloud's broader cross-cloud interconnect approach. Ralf Huebenthal, Global Head of IT and Digital Platforms at Nestlé, said the service "simplifies multi-cloud networking with a direct cloud-native approach" and "provides a reliable, scalable foundation for connecting workloads across different cloud environments" by removing what he called traditional infrastructure complexity.

  Gerald Bothello, Group Director of Software Engineering at Walmart, said the company used Cross-Cloud Interconnect to "simplify connectivity between cloud providers, shorten time to production and reduce overall costs" as part of a platform it runs across multiple cloud providers.

  Microsoft described the product as a direct response to customer demand. "Customers are building applications, data platforms and AI across more than one cloud, and they want the network between those clouds to just work," said Sudha Mahajan, Partner, Product Management, Azure Networking, Microsoft. "Azure Multicloud Interconnect with Google Cloud gives customers a private, managed path between Azure and Google Cloud."

  ## Where it fits in Google Cloud's portfolio

  The Azure preview extends a cross-cloud networking portfolio that already includes generally available connections to Amazon Web Services (AWS) and Oracle Cloud Infrastructure. Google also operates a separate preview service with telecommunications provider Lumen aimed at connecting private clouds, on-premises sites, and neocloud environments — smaller, specialized cloud operators — to Google Cloud.

  Partner Cross-Cloud Interconnect is built on an open network interoperability specification that Google developed together with AWS and published last year. Google said the specification can be adopted by any provider.

  ## Industry backdrop

  Enterprises have increasingly distributed applications, data, and artificial intelligence workloads across more than one cloud provider, raising demand for private inter-cloud links that avoid public internet exposure. Private connectivity is widely considered important for data transfer performance, security controls, and predictable network costs, particularly when workloads move frequently between platforms. Historically, establishing physical cross-cloud connections has required lengthy coordination across providers, a constraint that software-defined services are designed to address.

  For Google Cloud, the Azure integration adds another managed route to customers operating mixed cloud environments. For Microsoft, it gives Azure customers a supported option for reaching Google Cloud without relying on public internet links or arranging connectivity through third parties.

  Google said more regions will be added to the Azure service before it reaches general availability.
body_zh: |
  ## Google Cloud開放Azure私有雲互連預覽，軟體定義分鐘完成建置

  Google Cloud已將其「合作夥伴跨雲互連」（Partner Cross-Cloud Interconnect）服務延伸至Microsoft Azure，以公開預覽形式正式上線。兩家公司聯合宣布，企業客戶現可透過純軟體方式完成設定，在兩大雲端平台之間建立一條由雙方共同管理的私有網路通道，無需申請任何實體基礎設施。

  Google表示，這項服務的設計目標，是將建立跨雲連線所需的時間從原本的數週乃至數個月，大幅縮短至數分鐘。流量全程不經過公共網際網路，並在Google Cloud與Azure邊緣路由器之間自動完成加密。連線本身具備跨實體獨立地點的備援機制，兩家公司將共同監控線路狀態，並負責維護與故障復原的管理工作。

  ## 建置流程說明

  客戶可透過Google Cloud主控台或應用程式介面（API）建立連線，並依需求選擇頻寬。Google表示，定價採固定費率按頻寬級距計算，旨在讓網路成本更易於預估。由於整套建置流程均以軟體定義方式實現，客戶無需協調實體網路訂單，也無需跨供應商管理各自獨立的基礎設施。

  ## 上線區域

  Azure預覽版目前已在三個Google Cloud區域上線：北維吉尼亞州的us-east4、洛杉磯的us-west2，以及法蘭克福的europe-west3。Google表示，隨著服務邁向正式上線（GA），將陸續新增更多區域。

  ## 客戶與合作夥伴聲明

  雀巢（Nestlé）與沃爾瑪（Walmart）被列為Google Cloud跨雲互連方案的早期採用者。雀巢全球IT暨數位平台負責人Ralf Huebenthal表示，這項服務「以直接的雲端原生方式簡化多雲網路建置」，並藉由消除他所稱的傳統基礎設施複雜性，「為跨不同雲端環境的工作負載連線提供可靠且可擴展的基礎」。

  沃爾瑪軟體工程集團總監Gerald Bothello則表示，公司在其橫跨多個雲端供應商的平台中，運用跨雲互連服務「簡化雲端供應商之間的連線、縮短上線時程並降低整體成本」。

  Microsoft將這項產品定位為直接回應客戶需求的解決方案。微軟Azure網路產品管理合夥人Sudha Mahajan表示：「客戶正在超過一個雲端上建置應用程式、資料平台與AI，他們希望雲端之間的網路能夠直接運作。Azure與Google Cloud的多雲互連，為客戶提供了一條Azure與Google Cloud之間私有、受管理的通道。」

  ## 在Google Cloud產品組合中的定位

  Azure預覽版是Google Cloud跨雲網路產品組合的最新延伸——該組合已包含與Amazon Web Services（AWS）及Oracle Cloud Infrastructure的正式上線連線服務。Google另外也與電信業者Lumen共同推出一項獨立預覽服務，目標是將私有雲、地端環境，以及新興雲端（neocloud）環境——即規模較小的專業雲端業者——連接至Google Cloud。

  合作夥伴跨雲互連建構於一套開放的網路互通規範之上，該規範由Google與AWS共同研發，並於去年公開發布。Google表示，任何供應商均可採用這套規範。

  ## 產業背景

  企業將應用程式、資料與人工智慧（AI）工作負載分散部署於多個雲端供應商的趨勢日益普遍，帶動了對私有雲際連線的需求——這類連線能夠避免流量暴露於公共網際網路。私有連線在業界普遍被認為對資料傳輸效能、資安管控與可預期的網路成本至關重要，尤其在工作負載頻繁於不同平台間移轉時更是如此。長期以來，建立實體跨雲連線需要跨供應商進行冗長的協調作業，而軟體定義服務的出現，正是為了解決這項限制。

  對Google Cloud而言，Azure整合為在混合雲環境中運作的客戶新增了一條受管理的路由選項；對微軟而言，則讓Azure客戶有了一個官方支援的途徑，可在不依賴公共網際網路連線、也無需透過第三方安排連線的情況下，直接連接至Google Cloud。

  Google表示，在Azure服務正式上線之前，將持續新增更多區域。
date: "2026-11-24"
source_published: "2026-11-23T17:30:00.000Z"
category: "networking"
secondary_categories: []
region: []
vendor: ["AWS", "Azure", "Google Cloud", "Oracle Cloud"]
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google Cloud extends private Azure interconnect in preview (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenternews.asia/story/google-cloud-extends-private-azure-interconnect-in-preview"
    title: "Google Cloud extends private Azure interconnect in preview"
    trust: 3
    type: primary
    published_at: "2026-11-23T17:30:00.000Z"
  - url: "https://datacenter.news/story/google-cloud-extends-private-azure-interconnect-in-preview"
    title: "Google Cloud extends private Azure interconnect in preview"
    trust: 3
    type: corroborating
    published_at: "2026-11-23T17:30:00.000Z"
---
