---
title_en: "HPE brings supercomputing software stack to ProLiant servers, adds multi-tenant HPC features"
title_zh: "HPE將超算軟體堆疊延伸至ProLiant伺服器　新增多租戶HPC功能"
summary_en: "HPE is extending its Supercomputing Programming Software to ProLiant DL and XD servers for the first time, broadening a stack previously limited to its Cray line, and introducing multi-tenant networking and storage capabilities aimed at national laboratories and sovereign AI research organisations."
summary_zh: "HPE 宣布將旗下超級電腦程式設計軟體首度延伸至 ProLiant DL 與 XD 伺服器，並在 HPC 網路與儲存產品組合中引入多租戶功能，鎖定國家實驗室與主權 AI 研究機構等客群。"
body_en: |
  HPE has expanded its Supercomputing Programming Software to ProLiant Compute servers and introduced multi-tenant functions across its high-performance computing (HPC) networking and storage portfolio, the company announced, targeting organisations that run AI and simulation workloads on mixed hardware estates.

  The move extends a software stack previously associated with HPE's Cray supercomputing line to the ProLiant DL and XD server families, which are widely used for AI training, fine-tuning and inference. The company is also adding multi-tenancy features to its Slingshot 400 network switches and Cray Supercomputing Storage Systems E2000, and expanding end-of-life services for air-cooled HPC and AI infrastructure through HPE Financial Services.

  ## Software consistency across server classes

  The core of the announcement is the extension of HPE Supercomputing Programming Software to ProLiant servers. The software addresses a persistent operational problem: organisations assembling toolchains from multiple vendors and open-source projects face ongoing integration and maintenance burdens. HPE offers pre-validated programming environments that bundle vendor, open-source and HPE tools into a single stack, reducing the need to rebuild software configurations on each system.

  The environments are delivered as containers — self-contained software packages that can be updated in isolation without rebuilding the entire stack underneath them. HPE said it will act as the primary support contact for customers using the multi-vendor environment, handling technical triage across suppliers rather than requiring customers to coordinate between them.

  By applying the same software approach to both Cray supercomputers and ProLiant servers, HPE is aiming to give large organisations with heterogeneous infrastructure a consistent development and operations environment as HPC and AI workloads increasingly share the same physical systems.

  ## Multi-tenancy for shared research infrastructure

  Alongside the software extension, HPE introduced multi-tenant capabilities in two areas relevant to national laboratories and research institutions that run shared infrastructure housing multiple user groups.

  On the networking side, a new version of HPE Slingshot 400 software adds multi-tenancy based on media access control (MAC) learning — a method for identifying and separating traffic by device address. The software enforces separation between user groups and restricts unauthorised routing, including from open-source and third-party environments. HPE said the new networking features can be applied to Slingshot 400 switches already in the field, meaning existing customers can add workload separation without replacing hardware.

  For storage, HPE has added a graphical user interface (GUI) and an application programming interface (API) to the Cray Supercomputing Storage Systems E2000. The GUI is intended to simplify the setup and administration of fine-grained multi-tenancy in the file system; the API targets customers who need to automate management at scale. The focus on data-level boundaries reflects demand from sovereign AI programmes, where governments and research agencies require strict controls over who can access what data.

  ## Retirement services for sensitive deployments

  HPE used the announcement to expand the scope of end-of-life services it offers for air-cooled HPC and AI infrastructure through HPE Financial Services. The service covers security and configuration resets, testing, workload validation, diagnostics, scale-out validation and trade compliance assurance, with the goal of returning systems to factory settings before they are decommissioned.

  HPE cited figures from its Technology Renewal Centres to illustrate the scale of the activity: the company said 85 percent of servers handled through those centres in 2025 were upcycled and returned to active use, and that 1.7 exabytes — roughly equivalent to 1.7 billion gigabytes — of data were securely sanitised. The retirement service is positioned around the sensitivity of HPC and AI deployments, where systems may have processed research data subject to national or institutional controls.

  ## Sovereign AI and HPC convergence

  HPE framed the announcements around the convergence of traditional simulation-based HPC and AI workloads onto shared infrastructure, a trend it said is accelerating particularly in the Asia Pacific region. Fumiki Negishi, Vice President and General Manager of HPE's HPC and AI Asia Pacific, Japan and Greater China go-to-market division, said governments and enterprises in the region are seeking to build and control their own AI capabilities, increasing demand for systems that can handle both workload types securely.

  "In this era of convergence, the advantage will belong to organisations that can transform complexity into AI ecosystems that are simple, secure and sovereign," Negishi said, adding that the combined announcements are intended to give customers "a consistent, secure foundation from deployment through retirement."

  The additions reflect a broader shift in HPC supplier strategy as vendors adapt product lines for environments where AI training and inference sit alongside scientific simulation, and where data sovereignty and workload isolation have moved from niche requirements to mainstream purchasing criteria. HPE's extension of its supercomputing software to ProLiant servers represents the most direct expression of that shift, applying tooling built for purpose-built supercomputers to the general-purpose server fleets where much AI infrastructure now runs.
body_zh: |
  HPE 日前宣布，將旗下超級電腦程式設計軟體（Supercomputing Programming Software）擴展至 ProLiant Compute 伺服器，同時在其高效能運算（HPC）網路與儲存產品組合中推出多租戶功能，目標鎖定在混合硬體環境中執行 AI 與模擬工作負載的企業與機構。

  此舉將原本專屬於 HPE Cray 超級電腦產品線的軟體堆疊，延伸至廣泛應用於 AI 訓練、微調與推論的 ProLiant DL 與 XD 伺服器系列。HPE 同時為 Slingshot 400 網路交換器及 Cray 超級電腦儲存系統 E2000 新增多租戶功能，並透過 HPE 金融服務擴大氣冷式 HPC 與 AI 基礎架構的設備退役服務範疇。

  ## 跨伺服器等級的軟體一致性

  此次公告的核心，在於將 HPE 超級電腦程式設計軟體延伸至 ProLiant 伺服器。這套軟體解決了一個長期存在的營運難題：企業在整合多家供應商與開放原始碼專案的工具鏈時，往往面臨持續不斷的整合與維護負擔。HPE 提供預先驗證的程式設計環境，將供應商工具、開放原始碼工具及 HPE 自家工具整合成單一堆疊，大幅降低每次部署時重新建立軟體組態的需求。

  這些環境以容器形式交付——即自成一體的軟體套件，可單獨更新而無需重建底層的整個堆疊。HPE 表示，針對使用多供應商環境的客戶，公司將擔任主要技術支援窗口，跨供應商處理技術問題分流，不需客戶自行在各廠商之間穿梭協調。

  透過對 Cray 超級電腦與 ProLiant 伺服器採用一致的軟體策略，HPE 的目標是讓擁有異質基礎架構的大型機構，在 HPC 與 AI 工作負載日益共用相同實體系統的趨勢下，建立一致的開發與營運環境。

  ## 共享研究基礎架構的多租戶功能

  除了軟體延伸之外，HPE 在兩個面向推出多租戶功能，切中國家實驗室與研究機構在共享基礎架構中支援多個使用者群組的需求。

  在網路方面，全新版本的 HPE Slingshot 400 軟體新增了以媒體存取控制（MAC）學習為基礎的多租戶機制——這是一種透過裝置位址識別並區隔流量的方法。該軟體強制執行使用者群組之間的隔離，並限制未經授權的路由，涵蓋來自開放原始碼與第三方環境的流量。HPE 表示，新的網路功能可套用至已在使用中的 Slingshot 400 交換器，意即現有客戶無需更換硬體，即可新增工作負載隔離能力。

  在儲存方面，HPE 為 Cray 超級電腦儲存系統 E2000 新增了圖形使用者介面（GUI）與應用程式介面（API）。GUI 的設計目的是簡化檔案系統中細粒度多租戶的設定與管理；API 則鎖定需要大規模自動化管理的客戶。對資料層級邊界的重視，反映了主權 AI 計畫的需求——各國政府與研究機構要求嚴格管控誰能存取哪些資料。

  ## 敏感部署環境的設備退役服務

  HPE 藉此次公告，透過 HPE 金融服務擴大了氣冷式 HPC 與 AI 基礎架構設備退役服務的範疇。服務內容涵蓋資安與組態重置、測試、工作負載驗證、診斷、擴充驗證及貿易合規保證，目標是在設備除役前將系統恢復至出廠設定。

  HPE 引用其技術更新中心的數據說明業務規模：公司表示，2025 年透過這些中心處理的伺服器中，有 85% 經翻新後重新投入使用；另有 1.7 EB（艾位元組，約相當於 17 億 GB）的資料完成安全清除。退役服務以 HPC 與 AI 部署環境的高敏感性為核心訴求，因為這些系統可能處理過受國家或機構管控的研究資料。

  ## 主權 AI 與 HPC 的融合趨勢

  HPE 以傳統模擬型 HPC 與 AI 工作負載加速匯聚至共享基礎架構的趨勢為框架，詮釋此次各項公告，並指出這股趨勢在亞太地區尤為明顯。HPE HPC 與 AI 亞太、日本暨大中華區市場拓展部門副總裁暨總經理根岸史樹（Fumiki Negishi）表示，區域內的政府與企業都在積極尋求建立並掌控自身的 AI 能力，推動能夠同時安全處理兩類工作負載的系統需求持續升溫。

  「在這個融合的時代，能夠將複雜性轉化為簡單、安全且具主權性 AI 生態系的機構，將掌握競爭優勢，」根岸史樹說，並補充此次各項公告旨在讓客戶從部署到退役，始終擁有「一致、安全的基礎」。

  這些新功能反映了 HPC 供應商的整體策略轉型——各家廠商正調整產品線，以因應 AI 訓練與推論和科學模擬並行的環境，以及資料主權與工作負載隔離從小眾需求躍升為主流採購標準的趨勢。HPE 將超算軟體延伸至 ProLiant 伺服器，是此一轉型最直接的體現，將原本為專用超級電腦打造的工具，移植至如今承載大量 AI 基礎架構的通用伺服器機群。
date: "2026-07-01"
source_published: "2026-06-30T02:16:00.000Z"
category: "compute"
secondary_categories: ["software-ops"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: HPE extends supercomputing software to ProLiant servers (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/hpe-extends-supercomputing-software-to-proliant-servers"
    title: "HPE extends supercomputing software to ProLiant servers"
    trust: 3
    type: primary
    published_at: "2026-06-30T02:16:00.000Z"
---
