---
title_en: "HPE Spaceborne Computer-4 to Run AI and HPC Workloads on Moon's South Pole in 2026"
title_zh: "HPE第四代太空電腦2026年登月南極執行AI與HPC工作負載"
summary_en: "Hewlett Packard Enterprise will fly its fourth-generation Spaceborne Computer to the lunar surface aboard Astrolab's FLIP rover, targeting late 2026 under NASA's Commercial Lunar Payload Services program. The mission will run large language model inference, LiDAR processing, and a federated learning experiment coordinating AI models on Earth, the Moon, and the International Space Station."
summary_zh: "惠普企業（HPE）宣布將於2026年底，將第四代太空電腦搭載Astrolab公司FLIP月球車送上月球南極，這是該公司太空硬體首次在國際太空站以外運作，也是月球表面首次進行的高效能運算基準測試；任務將執行大型語言模型推論、LiDAR資料處理，以及同步協調地球、月球與太空站三端AI模型的聯邦學習實驗。"
body_en: |
  ## HPE to land AI compute on the Moon in late 2026

  Hewlett Packard Enterprise will deploy its Spaceborne Computer-4 aboard Astrolab's FLIP rover for a mission to the Moon's South Pole, the company announced, marking the first time HPE's spaceborne hardware will operate outside the International Space Station and the first high-performance computing benchmark attempted on the lunar surface, according to HPE.

  The mission is scheduled to launch in late 2026 on a Griffin-1 lander built by Voyager Technologies. It falls under NASA's Commercial Lunar Payload Services, or CLPS, initiative, which contracts private companies to deliver scientific and technology payloads to the Moon.

  ## Planned workloads

  Once on the surface, Spaceborne Computer-4 is expected to run four categories of workloads:

  - Large language model retrieval-augmented generation (RAG), a technique that supplements a language model's responses with data retrieved from a local document store
  - Vision inference
  - LiDAR data processing for mapping and autonomous rover navigation
  - An AI services container intended to demonstrate scalable AI application deployment at what HPE describes as the lunar edge

  ## Hardware design driven by mass and environment constraints

  The fourth-generation system is substantially smaller and lighter than the original Spaceborne Computer-1, a change driven by the cost sensitivity of lunar payload mass budgets, according to ServeTheHome, which examined the hardware at HPE Discover 2026. The unit is light enough to be lifted by one person.

  The module is fanless. Because the Moon has no atmosphere to move air across a heatsink, the system uses a space radiator for thermal management. The housing incorporates a lattice structure. HPE describes it as self-contained and equipped with both a low-power CPU and a GPU.

  For storage, the system uses a Kioxia BG-series M.2 SSD, a DRAM-less drive format common in consumer and entry-level commercial PCs. Kioxia has been running commercial NAND flash on the ISS for several years; this mission extends that validation to the Moon's harsher radiation environment, where there is no magnetic field or atmosphere to reduce particle flux.

  HPE also developed software to manage interaction with Earth-based resources and to securely return results from the Moon. The company will support Astrolab's mission control in Hawthorne, California using HPE Private Cloud and HPE CloudOps Software.

  ## NASA and Deloitte joining the payload

  NASA will use the platform to run its FLUID experiment — Federated Learning for Unbounded and Intelligent Decentralization — which coordinates three separate AI models trained on data from Earth, the Moon, and the ISS simultaneously. NASA will also run a tuned large language model with semantic processing capabilities to search and interpret documents stored onboard the rover.

  Deloitte will deploy a system called Silent Shield, described as providing near real-time predictive cyber-analytics and anomaly detection.

  ## What the mission tests

  The central question the mission is designed to address is whether commercial off-the-shelf-class components — the kind used in standard data center and consumer hardware — can operate reliably in the lunar radiation environment, or whether the emerging lunar economy will require expensive custom space-rated silicon. A successful outcome would suggest that commercial supply chains, rather than specialized aerospace procurement, could underpin future lunar computing infrastructure.

  The mission's planned launch window is late 2026.
body_zh: |
  ## HPE 將於 2026 年底在月球部署 AI 運算設備

  惠普企業（Hewlett Packard Enterprise，HPE）宣布，將把旗下第四代太空電腦（Spaceborne Computer-4）部署於Astrolab公司的FLIP月球車上，執行月球南極任務。HPE表示，這是該公司太空硬體首次在國際太空站（ISS）以外運作，也是月球表面有史以來首次進行的高效能運算（HPC）基準測試。

  此次任務預計於2026年底搭乘Voyager Technologies打造的Griffin-1著陸器升空，隸屬於美國太空總署（NASA）的「商業月球載荷服務（Commercial Lunar Payload Services，CLPS）」計畫——該計畫以合約方式委託私人企業，將科學與技術載荷送上月球。

  ## 規劃執行的工作負載

  Spaceborne Computer-4抵達月球表面後，預計將執行四大類工作負載：

  - 大型語言模型**檢索增強生成（Retrieval-Augmented Generation，RAG）**：這項技術能讓語言模型從本機文件儲存庫擷取資料，用以補強模型的回覆內容。
  - 視覺推論
  - LiDAR資料處理，用於地圖繪製與月球車自主導航
  - AI服務容器，旨在展示HPE所稱「月球邊緣（lunar edge）」的可擴展AI應用部署能力

  ## 硬體設計受質量與環境條件驅動

  根據ServeTheHome在HPE Discover 2026展會上對硬體的實地檢視，第四代系統的體積與重量均大幅縮減，遠比初代Spaceborne Computer-1精簡——主要原因在於月球載荷的質量成本極為敏感。整個模組輕到一個人便能提起。

  此模組採無風扇設計。由於月球沒有大氣層可驅動散熱片上的氣流，系統改以太空散熱板（space radiator）進行熱管理，機殼則採用點陣式結構。HPE將這套系統描述為自給自足的獨立裝置，同時配備低功耗CPU與GPU。

  儲存方面，系統採用鎧俠（Kioxia）BG系列M.2固態硬碟（SSD）——這是一種無DRAM快取的硬碟規格，廣泛見於消費級與入門商業PC。鎧俠在ISS上運行商業NAND快閃記憶體已有數年；此次任務將把這項驗證延伸至月球更為嚴苛的輻射環境——月球既無磁場，也無大氣層可削減粒子通量。

  HPE另外開發了軟體，用於管理與地球端資源的互動，並安全地將月球端的運算結果傳回地球。該公司將透過HPE Private Cloud及HPE CloudOps Software，支援Astrolab位於加州霍桑（Hawthorne）的任務控制中心。

  ## NASA與德勤加入載荷陣容

  NASA將利用這個平台執行其**FLUID**實驗——全名為「無界智慧去中心化聯邦學習（Federated Learning for Unbounded and Intelligent Decentralization）」——同步協調分別在地球、月球與ISS上訓練的三個獨立AI模型。NASA同時也將運行一個經過調校的大型語言模型，具備語意處理能力，可搜尋並詮釋儲存於月球車上的文件。

  德勤（Deloitte）則將部署一套名為**Silent Shield**的系統，據描述能提供接近即時的預測性網路分析與異常偵測功能。

  ## 此次任務旨在驗證什麼

  此次任務旨在回答一個核心問題：商業現成（COTS）等級的元件——也就是標準資料中心與消費性硬體所採用的那類零件——是否能在月球輻射環境中穩定運作？抑或新興的月球經濟體系，將不得不仰賴造價昂貴的客製化太空認證晶片？若任務成功，將意味著商業供應鏈而非航太專業採購，有望成為未來月球運算基礎設施的主要支柱。

  此次任務的預計發射窗口為2026年底。
date: "2026-10-21"
source_published: "2026-10-20T14:13:22.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: HPE Spaceborne Computer-4 Will Bring AI and HPC to the Moon on Astrolab FLIP (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/hpe-spaceborne-computer-4-will-bring-ai-and-hpc-to-the-moon-on-astrolab-flip/"
    title: "HPE Spaceborne Computer-4 Will Bring AI and HPC to the Moon on Astrolab FLIP"
    trust: 3
    type: primary
    published_at: "2026-10-20T14:13:22.000Z"
---
