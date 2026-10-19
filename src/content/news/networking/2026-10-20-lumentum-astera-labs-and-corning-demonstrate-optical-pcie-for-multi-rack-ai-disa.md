---
title_en: "Lumentum, Astera Labs, and Corning Demonstrate Optical PCIe for Multi-Rack AI Disaggregation"
title_zh: "Lumentum等三廠展示光學PCIe，驗證多機架AI分離部署"
summary_en: "Lumentum, Astera Labs, and Corning demonstrated a rack-level optical PCIe system at the 2026 OCP Global Summit in San Jose, showing how fiber-based interconnects could allow AI data center operators to separate accelerators, switches, and memory across multiple racks beyond the distance limits of copper. The companies described the exercise as a proof of concept, not a product announcement."
summary_zh: "Lumentum、Astera Labs與Corning於2026年OCP全球峰會展示機架級光學PCIe系統，說明光纖互連如何讓AI資料中心業者突破銅纜距離限制，將加速器、交換器與記憶體分散部署於多個機架。三家公司強調，此次屬概念驗證，並非產品發表。"
body_en: |
  Lumentum, Astera Labs, and Corning demonstrated a rack-level optical PCIe system at the 2026 OCP Global Summit in San Jose, showing how light-based interconnects could allow AI data center operators to separate accelerators, switches, and memory across multiple racks rather than confining them to a single enclosure or short copper run.

  The demonstration used Astera Labs' Scorpio Smart Fabric Switch, Lumentum's optical interconnect, and Corning multimode fiber. The links relied on VCSELs — vertical-cavity surface-emitting lasers, semiconductor devices that emit light from a chip's surface. Lumentum said the setup showed fully operational optical links running multiple 32-gigabit-per-second channels and an error-free PCIe 5 connection in a rack-representative system. The company characterized the exercise as a proof of concept, not a product announcement.

  PCIe, or Peripheral Component Interconnect Express, is the dominant bus architecture linking accelerators, switches, memory, storage, and other devices inside servers and AI systems. Optical PCIe preserves that architecture but carries signals as light over fiber instead of as electrical signals over copper.

  ## The reach constraints copper imposes

  The core limitation optical PCIe is designed to address is distance. Joshua Fennimore, commercial technology manager at Corning Optical Communications, said optical connections can span tens to hundreds of meters within a data center, while passive copper connections are generally limited to a few meters and active copper extends only somewhat farther.

  That gap becomes more consequential as PCIe data rates rise. Christian Urricariet, senior director of product and strategic marketing at Lumentum, said higher PCIe speeds make electrical links more sensitive to signal loss, crosstalk, and equalization requirements across the distances operators want to support. Designers may need to add retimers — chips that regenerate degraded signals — or place connected devices physically closer together. High-speed copper cables also become bulky and difficult to route as link speeds climb, Urricariet said.

  ## How greater reach reshapes rack and row architecture

  The practical effect of optical PCIe is not simply a medium swap. It is the ability to change where hardware can be placed within a rack or across several racks.

  Fennimore said copper's limited reach tends to keep switches and compute hardware in close physical proximity. Fiber relaxes that constraint, allowing those systems to be separated while maintaining high-speed connectivity. "Fiber allows those systems to be separated across racks or rows inside a data center, giving operators greater flexibility to optimize rack layouts around compute density, power, cooling, serviceability, and cable management," Fennimore said.

  Jignesh Shah, senior director of product marketing for the Signal Connectivity Group at Astera Labs, said optical PCIe could support scale-up architectures that span multiple racks rather than being confined to a single enclosure. "With optical PCIe, reach can be tens of meters, which allows for large scale-up architectures across multiple racks and disaggregated scale-up architectures, with dedicated racks for GPUs, switches, and memory," Shah said. He added that optical PCIe also enables the high-density configurations needed for high-radix switches and GPU applications.

  Urricariet said easing the electrical channel budget could make it easier to build more modular and composable rack-scale designs, particularly in AI environments where power delivery, thermal limits, and serviceability are becoming as important as raw performance.

  ## Where copper holds its ground

  Even as the three companies advance optical PCIe, copper remains the standard choice at short distances. Shah said that beyond approximately 3 meters, it becomes worth evaluating both copper and optical options. Inside that range, copper retains the best total cost of ownership given its maturity. "Optical can support higher density and lower latency, but given copper's maturity, copper currently offers the best TCO for anything within a few meters," Shah said.

  Urricariet framed the technology's scope accordingly. "The goal is not to suggest that every PCIe connection will become optical, but to expand the set of practical system architectures as AI racks grow in scale and complexity," he said.

  ## What comes next

  For operators and planners, the OCP demonstration marks an early technical milestone rather than an imminent deployment option. Urricariet said moving from a controlled show-floor proof of concept to broad deployment will require further work across system integration, reliability, manufacturing, and customer qualification.
body_zh: |
  Lumentum、Astera Labs與Corning於2026年OCP全球峰會（地點：美國聖荷西）展示機架級光學PCIe系統，示範光纖互連如何讓AI資料中心業者將加速器、交換器與記憶體分散部署於多個機架，而不必侷限於單一機箱或短距銅纜的範圍以內。

  此次展示採用Astera Labs的Scorpio智慧型Fabric交換器、Lumentum的光學互連，以及Corning的多模光纖。傳輸鏈路採用VCSEL（垂直共振腔面射型雷射），這是一種從晶片表面發射光線的半導體元件。Lumentum表示，此次展示的光學鏈路可運行多條每秒32吉位元的通道，並在具機架代表性的系統中實現無誤碼的PCIe 5連接。該公司將此次演示定位為概念驗證，而非產品發表。

  PCIe（PCI Express）是連結伺服器與AI系統內部加速器、交換器、記憶體、儲存裝置及其他元件的主流匯流排架構。光學PCIe保留原有架構，但改以光在光纖中傳遞信號，取代銅纜傳遞電氣信號的方式。

  ## 銅纜所帶來的距離限制

  光學PCIe設計上欲解決的核心問題，正是距離限制。Corning光通訊商業技術經理Joshua Fennimore表示，光學連接在資料中心內可達數十乃至數百公尺，而被動銅纜連接通常僅限幾公尺，主動銅纜的距離也只比被動銅纜略有延伸。

  這個差距隨著PCIe資料速率的提升而愈加顯著。Lumentum產品與策略行銷資深總監Christian Urricariet指出，PCIe速度越高，電氣鏈路在業者希望支援的距離內，就對信號損耗、串擾及等化需求越敏感。設計人員可能需要加入重定時器（retimer）——用於重建衰退信號的晶片——或是讓相互連接的設備在實體上更靠近。Urricariet也表示，隨著鏈路速度攀升，高速銅纜亦會變得粗笨且難以佈線。

  ## 更大的距離如何重塑機架與機列架構

  光學PCIe帶來的實際效益，不只是換一種傳輸介質，而是改變硬體在機架內部或跨機架之間的配置彈性。

  Fennimore表示，銅纜距離有限，往往迫使交換器與運算硬體保持緊密的實體距離。光纖則放寬了這個限制，讓這些系統可以在維持高速連接的同時分開部署。「光纖讓這些系統能夠跨機架或在資料中心的機列間分離，賦予業者更大的彈性，得以依據運算密度、電力、散熱、維護性與纜線管理等需求來優化機架配置，」Fennimore說。

  Astera Labs信號連接群組產品行銷資深總監Jignesh Shah表示，光學PCIe可支援跨越多個機架的大型規模擴展架構，而不必侷限於單一機箱。「有了光學PCIe，連接距離可達數十公尺，得以建構跨越多個機架的大型規模擴展架構，以及分離式規模擴展架構——為GPU、交換器和記憶體分別設置專用機架，」Shah說。他補充，光學PCIe也能實現高基數交換器與GPU應用所需的高密度配置。

  Urricariet表示，降低電氣通道預算的壓力，有助於打造更具模組化與可組合性的機架規模設計，尤其在AI環境中，電力供應、熱管理與維護性的重要性已不亞於原始效能。

  ## 銅纜仍有其一席之地

  即便三家公司積極推進光學PCIe，銅纜在短距離應用上仍是業界的標準選擇。Shah表示，超過約3公尺後，才值得同時評估銅纜與光學兩種方案。在這個距離以內，考量銅纜的成熟度，其總持有成本（TCO）依然最優。「光學方案可支援更高密度與更低延遲，但考量銅纜的成熟度，在距離僅數公尺的應用場合，銅纜目前仍具備最佳總持有成本，」Shah說。

  Urricariet也為這項技術的定位下了詮釋。「我們的目標不是主張每一條PCIe連接都要改用光學，而是在AI機架的規模與複雜度持續增加之際，擴大可行的系統架構選項，」他說。

  ## 後續發展

  對資料中心業者與規劃人員而言，OCP此次展示標誌著一個早期技術里程碑，而非即將落地的部署選項。Urricariet表示，要從受控的展示場地概念驗證走向廣泛部署，仍需在系統整合、可靠性、製造及客戶認證等方面投入更多工作。
date: "2026-10-20"
source_published: "2026-10-19T09:00:00.000Z"
category: "networking"
secondary_categories: ["compute"]
region: []
vendor: ["Corning", "Lumentum"]
trust:
  score: 3
  reasoning: "Single source: Optical PCIe Extends the Reach of AI Rack Design (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/ai-data-centers/optical-pcie-extends-the-reach-of-ai-rack-design"
    title: "Optical PCIe Extends the Reach of AI Rack Design"
    trust: 3
    type: primary
    published_at: "2026-10-19T09:00:00.000Z"
---
