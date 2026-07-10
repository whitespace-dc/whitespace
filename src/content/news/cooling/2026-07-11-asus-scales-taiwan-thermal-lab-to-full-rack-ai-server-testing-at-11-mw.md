---
title_en: "ASUS Scales Taiwan Thermal Lab to Full-Rack AI Server Testing at 1.1 MW"
title_zh: "華碩台灣熱測試實驗室擴建，支援1.1 MW完整機架AI伺服器驗測"
summary_en: "ASUS has restructured its thermal testing facility in Taiwan to validate complete liquid-cooled AI server racks at power densities reaching 1.1 megawatts, according to a June 2026 sponsored visit by ServeTheHome. The lab includes a walk-in environmental chamber, an extreme environmental chamber running NVIDIA GB200 NVL72 racks, and an R&D lab currently integrating NVIDIA GB300 NVL72 systems."
summary_zh: "華碩已重新整備其位於台灣的熱測試設施，可驗證功率密度達1.1 MW的完整液冷AI伺服器機架；根據ServeTheHome於2026年6月受華碩贊助進行的參訪報導，實驗室涵蓋步入式環境腔體、極端環境腔體，以及正整合輝達（NVIDIA）GB300 NVL72系統的研發實驗室三大區域。"
body_en: |
  ASUS has restructured its thermal testing facility in Taiwan to validate complete liquid-cooled AI server racks, with an R&D lab capable of handling up to 1.1 megawatts of power across its rack positions. ServeTheHome visited the facility in June 2026 in a trip sponsored by ASUS, with an earlier access visit in April 2026.

  The lab comprises three distinct areas: a walk-in environmental chamber for standard operating-range testing, an extreme environmental chamber for shipping and sustained-stress validation, and an R&D lab focused on rack-scale liquid-cooling integration.

  ## Walk-in environmental chamber

  The walk-in chamber runs temperature sweeps from 25 to 45 degrees Celsius, covering the ambient range most enterprise data centers operate within, according to ASUS. An NVIDIA HGX B200 eight-GPU "Blackwell" generation server occupied the chamber at the time of the June visit. The chamber is sized for full rack configurations, not just individual compute nodes.

  ASUS said it designed the chamber for full-rack testing because liquid cooling creates thermal dependencies between nodes that single-server validation cannot capture. Coolant temperature, flow rate, and pressure drop across a 72-GPU rack behave differently from those of a single compute tray. A single modern eight-GPU server node draws the equivalent power of two older-generation 208-volt/30-ampere racks, the company said.

  ## Extreme environmental chamber

  The extreme chamber runs from minus 40 to 85 degrees Celsius and handles humidity from 10 percent to 98 percent relative humidity, covering edge deployments from cold outdoor installations to tropical environments with minimal climate control. The facility accepts entire racks.

  During the visits, ASUS was testing an NVIDIA GB200 NVL72 rack, a 72-GPU liquid-cooled system, with its liquid-cooling circuit running at 20 degrees Celsius while also testing higher coolant temperatures. Running warmer coolant reduces chiller energy consumption but can reduce component reliability and performance headroom, ASUS said, adding that it measures failure rates across thousands of hours of accelerated aging tests to find the correct balance.

  ASUS said the extreme chamber serves two validation purposes: confirming that rack components survive shipping and storage in unconditioned spaces, and identifying failure modes that emerge only under sustained thermal stress. The company said the industry has shifted to shipping complete NVIDIA GB200 NVL72 and newer racks in climate-controlled trucks because temperature during transit became a concern for assembled systems. Sustained operation at 85 degrees Celsius accelerates component aging and surfaces weaknesses that would take years to appear in normal operation, ASUS said.

  Remote monitoring is used during long test runs, ASUS said, because the chamber environment is too harsh for extended technician occupancy. Automating tests keeps the chamber door shut and preserves its intended duty cycle.

  ## AI System R&D Lab

  The R&D lab holds rows of racks with power distribution running overhead and liquid-cooling infrastructure beneath a raised floor, mirroring production data center deployments so ASUS can validate installation procedures and maintenance workflows before systems ship. The facility handles up to 1.1 megawatts across its rack positions. ASUS said air-cooled testing facilities cannot replicate the coolant distribution challenges that emerge at these power levels.

  ASUS is using the lab to validate NVIDIA GB300 NVL72 rack integration. The company said that work differs fundamentally from testing individual compute nodes: at rack scale, the focus shifts to coordinating cooling across 72 GPUs, managing coolant flow through multiple cold plates, and verifying that leak detection and monitoring systems function correctly. ASUS said pipe diameter, valve placement, and leak detection all require coordination across the entire installation, and sensor outputs must surface reliably in the company's management software.

  The company said the industry has moved beyond simple leak detection toward ensuring that a leak has minimal impact on both a rack and a broader cluster's operation. Electrical-level validation is also underway in this lab: ASUS is testing GB300 NVL72 compute trays connected to Tektronix oscilloscopes, work that is not visible when viewing a completed rack.

  ## Industry implications

  The scale of ASUS's testing infrastructure reflects a broader shift in validation requirements for AI server hardware. Environmental chambers previously sized for servers up to 4U in height are no longer sufficient, ASUS said, because systems such as the NVIDIA GB200 NVL72 and GB300 NVL72 introduce cooling dependencies that require system-level validation at rack scale rather than component-level checks. The company said AI infrastructure demands system-level validation, and air-cooled testing facilities cannot replicate the coolant distribution challenges that emerge at power densities like those in current liquid-cooled AI racks.

  ASUS's R&D lab is currently working on NVIDIA GB300 NVL72 rack integration, the most recent generation of liquid-cooled AI rack systems the company is preparing to ship to customers.
body_zh: |
  華碩已重新整備其位於台灣的熱測試設施，專門驗證完整的液冷AI伺服器機架，其研發實驗室在各機架位置的總處理功率最高可達1.1 MW。科技媒體ServeTheHome於2026年6月受華碩贊助參訪該設施，並曾於同年4月進行過一次提前探訪。

  該實驗室由三個不同區域組成：一座供標準作業範圍測試使用的步入式環境腔體、一座用於運輸與持續壓力驗證的極端環境腔體，以及一間專注於機架規模液冷整合的研發實驗室。

  ## 步入式環境腔體

  步入式腔體可進行攝氏25度至45度的溫度掃描測試，涵蓋大多數企業資料中心的環境溫度範圍，據華碩表示。2026年6月參訪時，腔體內正在測試一台搭載輝達（NVIDIA）HGX B200八GPU「Blackwell」世代伺服器。該腔體尺寸可容納完整機架配置，而非僅針對單一運算節點。

  華碩表示，之所以將腔體設計為可進行完整機架測試，原因在於液冷系統在各節點之間會形成熱相依關係，而這是單一伺服器驗證所無法捕捉的。72 GPU機架上的冷卻液溫度、流量與壓降，與單一運算托盤的表現截然不同。該公司指出，現代單一八GPU伺服器節點所耗費的電力，相當於兩台舊世代208伏特／30安培機架的總用電量。

  ## 極端環境腔體

  極端環境腔體的測試溫度範圍為攝氏負40度至85度，相對濕度介於10%至98%之間，可模擬從寒冷戶外裝置到幾乎無空調控制的熱帶環境等各種邊緣部署場景。該設施可容納整個機架進行測試。

  在兩次參訪期間，華碩正在測試一台輝達 GB200 NVL72機架——這是一款搭載72顆GPU的液冷系統——其液冷迴路的冷卻液溫度設定在攝氏20度，同時也進行了較高冷卻液溫度的測試。華碩表示，使用較高溫度的冷卻液可降低冷水機的能耗，但可能縮減元件可靠性與效能餘裕。該公司補充說明，透過數千小時的加速老化測試來量測故障率，從中找出最佳平衡點。

  華碩表示，極端環境腔體主要服務於兩個驗證目的：確認機架元件能在未受溫控的空間中承受運輸與儲存的考驗，以及找出唯有在持續熱壓力下才會出現的故障模式。該公司指出，由於組裝完成的系統在運輸過程中的溫度管控已成為一大隱憂，業界現已轉向以具有溫控設備的卡車來運送完整的輝達 GB200 NVL72及更新世代機架。在攝氏85度下持續運作可加速元件老化，並暴露出在正常使用情況下需要數年才能顯現的缺陷，華碩說。

  由於腔體環境過於惡劣，不適合技術人員長時間進駐，長時間測試期間須透過遠端監控來執行，華碩表示。自動化測試不僅讓腔體門得以保持關閉，也維護了其預期的工作週期。

  ## AI系統研發實驗室

  研發實驗室內排列著數排機架，配電系統架設於頭頂上方，液冷基礎設施則鋪設於架高地板之下，完全模擬正式資料中心的部署環境，以便華碩在系統出貨前能夠驗證安裝程序與維護工作流程。該設施各機架位置合計可處理高達1.1 MW的功率。華碩表示，氣冷式測試設施無法重現在如此高功率密度下所衍生的冷卻液分配挑戰。

  華碩正利用此實驗室驗證輝達 GB300 NVL72機架的整合作業。該公司表示，這項工作與測試單一運算節點有著根本上的差異：在機架規模下，重點轉移至協調72顆GPU的散熱、管理流經多個冷板的冷卻液流量，以及驗證洩漏偵測與監控系統是否正常運作。華碩指出，管徑大小、閥門位置與洩漏偵測都需要在整個安裝架構中統籌協調，且感測器輸出的數據必須能可靠地呈現於該公司的管理軟體中。

  華碩表示，業界已從單純的洩漏偵測，進一步發展至確保一旦發生洩漏，對單一機架及更大範圍叢集運作的影響都能降至最低。電氣層面的驗證工作也在此實驗室中進行：華碩正在測試連接Tektronix示波器的GB300 NVL72運算托盤，而這類工作在觀察完成組裝的機架時是看不見的。

  ## 產業意涵

  華碩測試基礎設施的規模，反映了AI伺服器硬體在驗證需求上更廣泛的轉變。華碩表示，過去以4U高度伺服器為規格設計的環境腔體已不再足夠，原因在於輝達 GB200 NVL72和GB300 NVL72等系統引入了冷卻相依性，需要在機架規模下進行系統層級驗證，而非僅憑元件層級的個別檢測。該公司表示，AI基礎設施需要系統層級的驗證，而氣冷式測試設施無法重現當前液冷AI機架在高功率密度下所產生的冷卻液分配挑戰。

  華碩的研發實驗室目前正進行輝達 GB300 NVL72機架的整合工作，這是該公司準備向客戶出貨的最新世代液冷AI機架系統。
date: "2026-07-11"
source_published: "2026-07-10T17:00:46.000Z"
category: "cooling"
secondary_categories: ["compute"]
region: ["Taiwan"]
vendor: ["Nvidia"]
trust:
  score: 4
  reasoning: "Single source: ASUS Thermal Lab Tour 2026 Testing AI Servers (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/asus-thermal-lab-tour-2026-testing-ai-servers/"
    title: "ASUS Thermal Lab Tour 2026 Testing AI Servers"
    trust: 4
    type: primary
    published_at: "2026-07-10T17:00:46.000Z"
---
