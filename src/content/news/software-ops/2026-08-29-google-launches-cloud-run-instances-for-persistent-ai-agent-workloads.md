---
title_en: "Google launches Cloud Run instances for persistent AI agent workloads"
title_zh: "Google 推出 Cloud Run 執行個體，專攻 AI 代理持續性工作負載"
summary_en: "Google has introduced Cloud Run instances, now in preview, giving developers a single dedicated runtime for long-lived, stateful applications such as AI agents that run continuously rather than scaling in response to web traffic. The service is priced at $5.70 per month for a 1 vCPU, 1 GiB configuration running around the clock."
summary_zh: "Google 宣布推出 Cloud Run 執行個體，目前進入預覽階段，為開發者提供單一專屬執行環境，適用於 AI 代理等需要長時間持續運行的有狀態應用程式，1 vCPU、1 GiB 記憶體的配置每月定價約 5.70 美元。"
body_en: |
  Google has introduced Cloud Run instances, a new product now in preview that gives developers a single, dedicated runtime for workloads requiring continuous uptime, the company announced. The service targets long-lived, stateful applications — in particular AI agents that run persistently for one user at a time — a profile that falls outside the normal Cloud Run model, which is designed for stateless workloads and can scale to zero between requests.

  Each Cloud Run instance runs as a singleton with no autoscaling. Runtimes can stay active for up to seven days before restarting automatically under a default policy. Each instance is assigned a stable HTTPS address that persists across updates and restarts, and users can stop and resume an instance as needed.

  ## Pricing and resource model

  Google priced the service well below a dedicated virtual machine for certain use cases. A Cloud Run instance configured with 1 vCPU and 1 GiB of memory running continuously for 30 days would cost $5.70, according to the company.

  The service runs on shared vCPU with burst budgets — meaning the underlying processor is shared among tenants, but individual instances can temporarily draw more compute when needed. Google described that model as suited to workloads that stay online for extended periods but require significant compute only intermittently, a profile it said is common among AI agents that sit idle between prompts.

  ## Target workloads

  Google contrasted Cloud Run instances with a dedicated virtual machine, which the company said typically requires continuous payment for compute resources and hands-on management of operating system updates, firewall rules, and HTTPS endpoints.

  Google highlighted OpenClaw, an open-source personal AI agent, as an example of the target workload. The company said many users begin running such tools on personal laptops before seeking a hosted environment that does not go offline when the local device sleeps. Google also cited Hermes and other single-user personal agents as software that may run continuously while serving one user — cases where the economics and operating model differ from conventional cloud-native services built around high request volumes and elastic scaling.

  ## Early adoption

  Google cited OffDeal as an early user of the service. Luis Ruiz Morel, Member of Technical Staff at OffDeal, said the company is using Cloud Run instances as its primary infrastructure for a long-running agent. "It reduced cold starts by 88%. Everything was very straightforward to implement, and it has been very reliable," Morel said.

  Cold starts — the latency that occurs when an application must initialise after being spun up on demand — are a recurring issue for software expected to remain continuously available. A fixed singleton instance eliminates the need to spin up fresh containers between requests, which is the mechanism behind that reduction.

  ## Industry significance

  Cloud Run instances represent a structural extension of an established serverless product into a segment where developers have traditionally had to choose between the convenience of managed services and the continuity of a persistent server. By adding a singleton runtime option alongside the existing autoscaled model, Google is creating a middle tier between fully managed serverless infrastructure and conventional virtual machines.

  The launch reflects growing developer demand for hosted environments that can support AI agents and other persistent applications migrating from personal machines to cloud infrastructure, Google said. Individual developers and small teams building always-on agents typically need a predictable endpoint, steady uptime, and a low monthly cost more than the scale-out request handling that Cloud Run was originally designed to provide.

  Cloud Run instances are currently available in preview.
body_zh: |
  ## Google 推出 Cloud Run 執行個體，專攻 AI 代理持續性工作負載

  Google 宣布推出 Cloud Run 執行個體，這項目前進入預覽階段的新產品，為開發者提供單一、專屬的執行環境，適用於需要持續不間斷運行的工作負載。該服務主要針對長時間運行的有狀態應用程式，尤其是那些以「單一使用者、持續運行」模式運作的 AI 代理——這類特性超出了原有 Cloud Run 的設計範疇。原本的 Cloud Run 是為無狀態工作負載設計，可在請求之間自動縮減至零實例。

  每個 Cloud Run 執行個體以單例（singleton）方式運行，不支援自動擴展。執行環境在預設政策下最長可持續運行七天，屆時將自動重新啟動。每個執行個體會獲得一個穩定的 HTTPS 位址，該位址在更新與重啟之間均保持不變，使用者也可視需要自行暫停或恢復執行個體。

  ## 定價與資源模型

  Google 將這項服務的定價設定在遠低於專屬虛擬機器的水準，以特定使用情境而言具備相當競爭力。根據 Google 公布的資訊，一個配置 1 vCPU 與 1 GiB 記憶體的 Cloud Run 執行個體，若全天候持續運行 30 天，費用為 5.70 美元。

  該服務採用共享 vCPU 搭配突發額度的架構——底層處理器由多個租戶共用，但各執行個體在有需要時可暫時調用更多運算資源。Google 表示，這種模型適合那些長時間保持連線、但僅在特定時刻需要大量運算的工作負載，並指出在提示詞之間大多處於閒置狀態的 AI 代理正是這類情境的典型代表。

  ## 目標工作負載

  Google 將 Cloud Run 執行個體與專屬虛擬機器進行比較，指出後者通常需要持續支付運算資源費用，並由使用者自行管理作業系統更新、防火牆規則及 HTTPS 端點等事項。

  Google 以開源個人 AI 代理 OpenClaw 為例，說明此類服務的目標應用場景。Google 表示，許多使用者起初在個人筆記型電腦上運行此類工具，之後便希望轉移至托管環境，以避免在本機設備進入睡眠時服務中斷。Google 同時列舉了 Hermes 及其他單一使用者個人代理，指出這類軟體往往在服務單一使用者的同時持續運行——這種情境在經濟效益與運作模式上，與以高流量請求和彈性擴展為核心的傳統雲端原生服務截然不同。

  ## 早期採用案例

  Google 援引 OffDeal 作為該服務的早期使用者。OffDeal 技術人員 Luis Ruiz Morel 表示，該公司正將 Cloud Run 執行個體作為長時間運行代理的主要基礎架構。「它將冷啟動次數減少了 88%。整個實作過程非常順暢，運行也相當穩定，」Morel 說。

  所謂冷啟動，是指應用程式在按需啟動時需要初始化所產生的延遲，對於預期持續可用的軟體而言是個反覆出現的痛點。固定的單例執行個體免除了在請求之間重新啟動容器的需求，這正是冷啟動大幅減少背後的關鍵機制。

  ## 產業意義

  Cloud Run 執行個體代表 Google 將一項成熟的無伺服器產品延伸至新領域——在此之前，開發者往往必須在托管服務的便利性與持續伺服器的連續性之間二擇一。透過在現有自動擴展模型之外新增單例執行環境選項，Google 在全托管無伺服器基礎架構與傳統虛擬機器之間，建立了一個中間層級。

  Google 表示，此次推出反映了開發者對托管環境日益增長的需求——隨著 AI 代理及其他持續性應用程式從個人設備遷移至雲端基礎架構，這股趨勢愈發明顯。個人開發者與小型團隊在打造全天候運行的代理時，通常更需要的是可預期的端點、穩定的上線時間以及低廉的月費，而非 Cloud Run 原本設計所提供的大規模請求處理能力。

  Cloud Run 執行個體目前已開放預覽。
date: "2026-08-29"
source_published: "2026-08-28T16:30:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Synthesized from 2 sources; lead Google unveils Cloud Run instances for always-on AI agents (trust 3/5) plus 1 corroborating."
sources:
  - url: "https://datacenter.news/story/google-unveils-cloud-run-instances-for-always-on-ai-agents"
    title: "Google unveils Cloud Run instances for always-on AI agents"
    trust: 3
    type: primary
    published_at: "2026-08-28T16:30:00.000Z"
  - url: "https://datacenternews.asia/story/google-unveils-cloud-run-instances-for-always-on-ai-agents"
    title: "Google unveils Cloud Run instances for always-on AI agents"
    trust: 3
    type: corroborating
    published_at: "2026-08-28T16:30:00.000Z"
---
