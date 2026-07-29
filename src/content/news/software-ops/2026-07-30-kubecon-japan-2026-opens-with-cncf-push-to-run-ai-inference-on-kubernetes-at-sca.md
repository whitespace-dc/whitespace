---
title_en: "KubeCon Japan 2026 Opens With CNCF Push to Run AI Inference on Kubernetes at Scale"
title_zh: "KubeCon Japan 2026：CNCF宣示Kubernetes主導AI推論工作負載"
summary_en: "KubeCon+CloudNativeCon Japan 2026 opened July 29 in Yokohama with CNCF leadership declaring Kubernetes the primary platform for AI workloads, citing surveys showing 66% of enterprises already run generative AI on the orchestration system. CNCF announced plans for a Certified AI Conformance Platform program and highlighted an active project to distribute large language model inference horizontally across Kubernetes clusters."
summary_zh: "KubeCon+CloudNativeCon Japan 2026於7月29日在橫濱盛大開幕，CNCF宣稱Kubernetes已成為企業部署AI工作負載的核心平台，調查顯示66%的企業已在Kubernetes上執行生成式AI；大會同步宣布將推出「AI合規認證平台」計畫，並重點介紹跨叢集水平分散大型語言模型推論能力的開源專案。"
body_en: |
  ## KubeCon Japan 2026 Opens With CNCF Push to Run AI Inference on Kubernetes at Scale

  KubeCon+CloudNativeCon Japan 2026 opened July 29 at Pacifico Yokohama, with the Cloud Native Computing Foundation (CNCF) — the Linux Foundation-hosted body that stewards Kubernetes and more than 230 other open-source projects — framing Kubernetes as the natural infrastructure layer for AI inference at industrial scale. It is the second consecutive year Japan has hosted the event.

  CNCF Executive Director Jonathan Bryce and CTO Chris Aniszczyk delivered the opening keynote. Aniszczyk reported that the foundation's projects now draw more than 300,000 contributors across 191 countries, with the global cloud-native developer population approaching 20 million. CNCF estimates Japan alone accounts for 950,000 of those developers.

  ## The inference demand problem

  Bryce framed AI inference — the process of running a trained model to generate outputs — as the central infrastructure challenge of the coming decade. He cited projections that by 2030 inference workloads alone will require 93.3 gigawatts of compute capacity, a figure he said exceeds the total of all current computational workloads combined. A gigawatt is one billion watts; for scale, a large hyperscale data center campus today typically operates in the range of hundreds of megawatts.

  Bryce identified three properties that inference workloads demand at that scale: always-on availability, horizontal scalability, and elastic resource allocation. He argued these are precisely the properties that the cloud-native community has spent ten years solving for general workloads, positioning Kubernetes as an already-proven answer.

  ## Adoption figures and the llm-d project

  CNCF survey data cited during the keynote shows that more than 80% of enterprises have deployed Kubernetes in production environments. Of those, 66% report running generative AI workloads on Kubernetes today, a figure Bryce characterized as a strong foundation for what comes next.

  Aniszczyk called out a project named llm-d as one of the most consequential currently under development. The project is designed to enable horizontal distribution of large language model (LLM) inference processing across Kubernetes clusters, allowing inference capacity to scale out across many nodes rather than being constrained to a single server or fixed hardware configuration.

  ## AI sovereignty and the case for open infrastructure

  Bryce introduced a second theme he called AI sovereignty — the principle that organizations should own and control the systems that perform their AI processing, including the inputs fed into those systems and the outputs they produce. He noted that the current trajectory of AI infrastructure development risks concentrating that control among a small number of large technology companies in closed, centralized systems.

  He argued that open-source development offers a viable alternative path, and that the values underlying AI sovereignty align with the founding principles of the open-source community.

  ## Certified AI Conformance Platform program

  Aniszczyk announced that CNCF intends to establish a Certified AI Conformance Platform program, modeled on the foundation's existing Certified Kubernetes Conformance Program. The existing Kubernetes program allows vendors and cloud providers to certify that their Kubernetes distributions meet a common specification, ensuring workloads are portable across environments. The planned AI program would apply the same logic to AI workloads, aiming to guarantee that AI applications run consistently regardless of the underlying platform or provider.

  The announcement signals CNCF's intent to govern the AI infrastructure layer with the same vendor-neutral standards it has applied to container orchestration since Kubernetes reached maturity. CNCF did not specify a timeline for the program's launch during the keynote.
body_zh: |
  ## KubeCon Japan 2026開幕：CNCF力推Kubernetes大規模承載AI推論

  KubeCon+CloudNativeCon Japan 2026於7月29日在橫濱國際會議中心（Pacifico Yokohama）正式開幕。主辦單位雲端原生運算基金會（CNCF）——隸屬於Linux基金會旗下、負責管理Kubernetes及逾230個開源專案的機構——將Kubernetes定位為工業規模AI推論的天然基礎設施層。這也是日本連續第二年主辦這項年度盛事。

  本屆大會開幕主題演講由CNCF執行長Jonathan Bryce與技術長Chris Aniszczyk聯袂登台。Aniszczyk表示，CNCF旗下專案目前已吸引來自191個國家、超過30萬名貢獻者，全球雲端原生開發者社群規模更逼近2,000萬人；其中，僅日本一地便貢獻了約95萬名開發者。

  ## 推論需求的挑戰

  Bryce將AI推論——即執行已訓練模型以產生輸出結果的過程——定調為未來十年最核心的基礎設施挑戰。他引述預測數據指出，到2030年，光是推論工作負載所需的運算容量就將達到93.3吉瓦（GW），這個數字甚至超越當今所有運算工作負載的總和。一吉瓦等於十億瓦；對照來看，目前大型超大規模資料中心園區的用電規模通常僅在數百百萬瓦（MW）範圍內。

  Bryce歸納出在此規模下，推論工作負載所必須具備的三項特性：永遠在線的可用性、水平擴展能力，以及彈性的資源配置。他主張，這三項特性正是雲端原生社群過去十年來為一般工作負載所解決的核心問題，因此Kubernetes已是一套經過實戰驗證的解方。

  ## 採用數據與llm-d專案

  CNCF在主題演講中援引的調查數據顯示，逾80%的企業已在正式生產環境中部署Kubernetes。在這些企業當中，66%表示目前已在Kubernetes上執行生成式AI工作負載；Bryce將這個數字形容為奠定下一步發展的堅實基礎。

  Aniszczyk特別點名一個名為「llm-d」的專案，稱其為目前最具關鍵意義的開發項目之一。這個專案旨在讓大型語言模型（LLM）的推論處理能夠水平分散至多個Kubernetes叢集，使推論容量得以跨節點橫向擴展，不再受限於單一伺服器或固定硬體配置。

  ## AI主權與開放基礎設施的價值

  Bryce提出第二個核心議題，他稱之為「AI主權」——亦即組織應擁有並掌控執行AI運算的系統，包括輸入資料與輸出結果。他指出，當前AI基礎設施的發展軌跡，正面臨將控制權集中於少數大型科技企業手中、形成封閉集中式系統的風險。

  他主張，開源開發提供了一條可行的替代路徑，而AI主權所蘊含的核心價值，與開源社群的創立精神一脈相承。

  ## AI合規認證平台計畫

  Aniszczyk宣布，CNCF計畫仿照現行「Kubernetes合規認證計畫」的模式，建立一套「AI合規認證平台」計畫。現行的Kubernetes計畫允許廠商與雲端服務供應商認證其Kubernetes發行版符合共同規格，確保工作負載可在不同環境間移植。此次規劃中的AI計畫，將把同樣的邏輯延伸至AI工作負載，目標是保證AI應用程式無論在何種底層平台或供應商環境下都能一致運行。

  這項宣示意味著CNCF有意以其在容器調度領域長期維護的廠商中立標準，同步治理AI基礎設施層。CNCF在開幕主題演講中並未說明該計畫的具體上線時程。
date: "2026-07-30"
source_published: "2026-07-29T15:02:00.000Z"
category: "software-ops"
secondary_categories: []
region: ["Japan"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: KubernetesはAIを動かすプラットフォームに。横浜でKubeCon＋CloudNativeCon Japan 2026が開幕 (trust 3/5)."
sources:
  - url: "https://www.publickey1.jp/blog/26/kubernetesaikubeconcloudnativecon_japan_2026.html"
    title: "KubernetesはAIを動かすプラットフォームに。横浜でKubeCon＋CloudNativeCon Japan 2026が開幕"
    trust: 3
    type: primary
    published_at: "2026-07-29T15:02:00.000Z"
---
