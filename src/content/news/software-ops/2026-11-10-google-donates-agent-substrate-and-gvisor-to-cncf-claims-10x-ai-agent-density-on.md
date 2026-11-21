---
title_en: "Google donates Agent Substrate and gVisor to CNCF, claims 10x AI agent density on Kubernetes"
title_zh: "Google將Agent Substrate與gVisor捐贈CNCF，宣稱Kubernetes上AI代理密度提升十倍"
summary_en: "Google has contributed Agent Substrate and gVisor to the Cloud Native Computing Foundation, saying the open-source infrastructure layer enables Kubernetes clusters to run AI agents at ten times the density of conventional pod-per-agent deployments by snapshotting idle agents to fast tiered storage rather than holding compute resources."
summary_zh: "Google於2026年11月5日宣布，將Agent Substrate與gVisor兩項開源專案捐贈給雲端原生運算基金會（CNCF），並表示這套基礎架構能讓Kubernetes叢集以傳統部署方式十倍的密度運行AI代理，核心機制是將閒置代理快照至高速分層儲存，而非持續佔用運算資源。"
body_en: |
  Google has donated two open-source projects — Agent Substrate and gVisor — to the Cloud Native Computing Foundation (CNCF), the Linux Foundation body that stewards Kubernetes and related cloud-native infrastructure, the company announced on November 5, 2026. The company says the combination allows operators to run AI agents on Kubernetes at ten times the density of a conventional one-pod-per-agent architecture.

  ## The idle-time problem in AI agent infrastructure

  The donation addresses a structural inefficiency Google identified in running AI agents on Kubernetes. AI agents spend between 90 and 95 percent of their execution time idle — waiting on model inference results, responses from external APIs, or human review and approval, according to Google. Under a standard Kubernetes deployment, each agent occupies a Pod, and those Pods hold compute resources even while idle, which Google described as deeply inefficient at scale.

  The alternative — using serverless mechanisms to terminate idle Pods and release their resources — creates a different problem. When an agent needs to resume work, it must go through a full Pod cold start, which takes enough time to break the interactive experience expected of an AI agent session.

  The requirement Google identified is a system that neither holds compute resources during idle periods nor imposes cold-start latency on resumption.

  ## How Agent Substrate works

  Agent Substrate constructs an actor-based control plane and data plane on top of Kubernetes. In this model, an actor is a persistent unit that holds an AI agent's session state, working memory, and other context. The control plane is responsible for scheduling actors into execution slots within a worker pool, which forms the data plane.

  The worker pool is connected to fast tiered storage. When an agent goes idle, its actor is serialized as a snapshot and written to that storage tier. When work resumes, the snapshot is loaded back into a worker slot rapidly — avoiding cold start entirely. Google says this architecture is what enables the ten-fold improvement in agent density per cluster.

  gVisor, the second donated project, provides the sandboxed container runtime used when AI agents execute code within the Kubernetes environment. Google described it as more secure than a standard container, without elaborating on specific threat models in the available material.

  ## Simultaneous commercial launch on GKE

  Alongside the CNCF donation, Google Cloud launched Agent Substrate as an official managed service on Google Kubernetes Engine (GKE), its hosted Kubernetes offering. The company did not disclose pricing or availability regions in the announcement.

  ## Why Google donated rather than kept the projects proprietary

  Google offered a direct rationale for the CNCF contribution. Donating Agent Substrate and gVisor to the CNCF, the company said, gives the cloud-native community a neutral, vendor-independent foundation that works across any conformant Kubernetes cluster — the goal being to prevent each organization from building its own fragmented solution to the same infrastructure problem.

  The donation positions the projects for broad cross-vendor adoption while simultaneously making Google Cloud's GKE a natural deployment target for workloads built on the new standard. The company acknowledged as much, noting that if Agent Substrate becomes an industry baseline, its affinity with GKE could encourage adoption of Google Cloud services.

  ## Industry significance

  The move places Google at the center of an emerging standardization effort for AI agent infrastructure at the Kubernetes layer. By routing the projects through the CNCF — the same body that governs Kubernetes, Prometheus, and Envoy — Google is seeking the same kind of broad community stewardship that made those projects foundational across cloud providers and enterprise operators alike. Whether competing cloud providers adopt or fork the CNCF-hosted projects will determine how vendor-neutral the standard becomes in practice.

  Agent Substrate is currently available to run on any conformant Kubernetes cluster and as a managed service on GKE.
body_zh: |
  ## Google將Agent Substrate與gVisor捐贈CNCF，宣稱Kubernetes上AI代理密度提升十倍

  Google於2026年11月5日宣布，將旗下兩項開源專案——Agent Substrate與gVisor——正式捐贈給雲端原生運算基金會（CNCF）。CNCF隸屬於Linux基金會，負責管理Kubernetes及相關雲端原生基礎設施。Google表示，這兩個專案的組合能讓維運人員在Kubernetes上以傳統「一Pod對一代理」架構十倍的密度運行AI代理。

  ## AI代理基礎架構的閒置浪費問題

  此次捐贈的背後，是Google在實際運行Kubernetes上AI代理時發現的一項結構性效率缺陷。根據Google的說法，AI代理在整個執行週期中，有90%至95%的時間處於閒置狀態——等待模型推論結果、外部API回應，或人工審核與核准。在標準Kubernetes部署架構下，每個代理佔用一個Pod，而這些Pod即便閒置也會持續佔據運算資源，Google將這種情況形容為大規模部署時極為低效的做法。

  另一種替代方案——以無伺服器機制終止閒置Pod並釋放資源——同樣帶來不同的問題。當代理需要恢復工作時，必須完整執行一次Pod冷啟動，耗時足以破壞AI代理工作階段所應具備的即時互動體驗。

  Google因此確立了一個明確需求：系統既不能在閒置期間佔用運算資源，恢復時也不能承受冷啟動延遲。

  ## Agent Substrate的運作原理

  Agent Substrate在Kubernetes之上構建了一套以行為者（actor）模型為基礎的控制平面與資料平面。在此模型中，行為者是一個持久性單元，負責保存AI代理的工作階段狀態、工作記憶體及其他情境資訊。控制平面負責將行為者排程至工作者池（worker pool）的執行槽位，而工作者池則構成資料平面。

  工作者池連接至高速分層儲存。當代理進入閒置狀態時，其對應的行為者會被序列化為快照並寫入該儲存層；當工作需要恢復時，快照便迅速載回工作者槽位，完全避免冷啟動的問題。Google表示，正是這套架構造就了叢集代理密度提升十倍的成果。

  第二項捐贈專案gVisor，則提供AI代理在Kubernetes環境中執行程式碼時所使用的沙盒容器執行環境。Google將其描述為比標準容器更為安全，但在現有公開資料中並未進一步說明具體的威脅模型。

  ## 同步於GKE上市商業服務

  在捐贈CNCF的同時，Google Cloud也在旗下託管Kubernetes服務——Google Kubernetes Engine（GKE）——上，將Agent Substrate作為正式的托管服務推出。公司在此次公告中並未揭露定價或可用區域等細節。

  ## Google選擇捐贈而非自有的理由

  Google對於此次CNCF捐贈提出了明確的理由。公司表示，將Agent Substrate與gVisor捐贈給CNCF，能為雲端原生社群提供一套中立、不受特定廠商綁定的基礎，並可在任何符合規範的Kubernetes叢集上運作——其目標是避免各組織各自為同一套基礎架構問題打造出零散的解決方案。

  此次捐贈將兩個專案定位為跨廠商廣泛採用的基礎，同時也讓Google Cloud的GKE成為建構於新標準之上的工作負載的天然部署目標。Google對此直言不諱，指出若Agent Substrate成為業界基準，其與GKE的高度親和性將有助於推動Google Cloud服務的採用。

  ## 產業意義

  此舉將Google置於Kubernetes層AI代理基礎架構新興標準化工作的核心位置。透過將專案交由CNCF托管——這個同時管理Kubernetes、Prometheus與Envoy的機構——Google尋求的是同等級別的廣泛社群治理，正是這種治理方式讓上述專案成為跨雲端供應商與企業維運者的通用基礎。競爭對手的雲端廠商究竟是採用還是分叉這些CNCF托管專案，將決定這套標準在實務上能達到何種程度的廠商中立性。

  Agent Substrate目前已可在任何符合規範的Kubernetes叢集上運行，並以托管服務形式在GKE上正式提供。
date: "2026-11-10"
source_published: "2026-11-09T15:25:30.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Google Cloud"]
trust:
  score: 3
  reasoning: "Single source: Google、Kubernetesで10倍高密度にAIエージェントを実行可能にする「Agent Sustrate」と「gVisor」、オープンソースとしてCNCFに寄贈と発表 (trust 3/5)."
sources:
  - url: "https://www.publickey1.jp/blog/26/googlekubernetes10aiagent_sustrategvisorcncf.html"
    title: "Google、Kubernetesで10倍高密度にAIエージェントを実行可能にする「Agent Sustrate」と「gVisor」、オープンソースとしてCNCFに寄贈と発表"
    trust: 3
    type: primary
    published_at: "2026-11-09T15:25:30.000Z"
---
