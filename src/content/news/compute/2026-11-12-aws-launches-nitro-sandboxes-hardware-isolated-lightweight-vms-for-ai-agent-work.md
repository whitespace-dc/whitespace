---
title_en: "AWS Launches Nitro Sandboxes, Hardware-Isolated Lightweight VMs for AI Agent Workloads"
title_zh: "AWS 推出 Nitro Sandboxes：專為 AI 代理工作負載打造的硬體隔離輕量虛擬機器"
summary_en: "Amazon Web Services has launched AWS Nitro Sandboxes, lightweight virtual machines that deliver hardware-level isolation through the AWS Nitro System while running at near-native EC2 performance, designed to safely execute untrusted code produced by AI coding agents."
summary_zh: "亞馬遜雲端服務（AWS）正式推出 AWS Nitro Sandboxes，這款輕量虛擬機器透過 AWS Nitro System 提供硬體層級的隔離保護，同時維持接近原生 EC2 的執行效能，專為安全執行 AI 程式碼代理所產生的不受信任程式碼而設計。"
body_en: |
  Amazon Web Services has launched AWS Nitro Sandboxes, lightweight virtual machines that run at near-native Amazon EC2 speeds while providing the hardware-level isolation of the AWS Nitro System — the company's answer to a security gap created by the growing use of AI agents that generate and execute untrusted code.

  The product targets a problem that has sharpened as AI-assisted coding has become widespread: containers and other lightweight virtualization environments typically share a host kernel, meaning a piece of malicious or malfunctioning code running inside one container could potentially affect other containers or services on the same physical machine. AWS Nitro Sandboxes are designed to close that gap without the overhead traditionally associated with full virtual machines.

  ## What the product does

  Each AWS Nitro Sandbox runs a fully independent operating system, isolated from the host and from any other sandboxes or containers on the same instance, AWS said. System calls issued from within a sandbox cannot reach beyond that sandbox's own guest kernel, the company said — a boundary enforced at the hardware level by the Nitro System rather than by software alone.

  The AWS Nitro System is the hardware and firmware layer that underpins Amazon EC2 and AWS networking. By building sandbox isolation directly on that substrate, AWS said the product achieves near-native EC2 execution speeds alongside the security properties.

  ## Deployment options

  AWS Nitro Sandboxes can be used as standalone sandboxes on Amazon EC2 instances, as pods within Amazon ECS (Elastic Container Service), or as pods within Amazon EKS (Elastic Kubernetes Service). ECS and EKS are AWS's managed container orchestration services.

  For teams already running on Amazon EKS Auto Mode, AWS said enabling Nitro Sandboxes allows pods to be converted to lightweight VMs without modifying existing container images, deployment pipelines, or Helm charts — the templating system used to package and deploy Kubernetes applications.

  ## Why it matters

  The announcement reflects a broader industry recognition that the container isolation model, designed for multi-tenant workloads where tenants are trusted, is under pressure as AI agents routinely produce and execute code of uncertain provenance. Hardware-enforced VM-level boundaries have traditionally required accepting a performance penalty; AWS is positioning Nitro Sandboxes as a path to both properties simultaneously.

  The ability to adopt the product without changing existing Kubernetes tooling lowers the barrier for engineering teams that want stronger isolation guarantees on AI workloads already running in containerized environments.
body_zh: |
  亞馬遜雲端服務（AWS）正式推出 AWS Nitro Sandboxes——一款能以接近原生 Amazon EC2 速度運行、同時具備 AWS Nitro System 硬體層級隔離能力的輕量虛擬機器。這項產品的問世，正是為了填補 AI 代理大量生成並執行不受信任程式碼所帶來的資安漏洞。

  此產品鎖定一個隨 AI 輔助編程日益普及而愈發棘手的問題：容器與其他輕量虛擬化環境通常共用同一個主機核心（host kernel），這意味著在某個容器內運行的惡意或異常程式碼，可能波及同一台實體機器上的其他容器或服務。AWS Nitro Sandboxes 的設計目標，正是在不引入傳統完整虛擬機器額外負擔的前提下，徹底堵上這個缺口。

  ## 產品功能說明

  AWS 表示，每個 AWS Nitro Sandbox 都運行一套完全獨立的作業系統，與主機以及同一執行個體上的其他沙盒或容器完全隔離。來自沙盒內部的系統呼叫（system call）無法穿越該沙盒自身的客端核心（guest kernel）邊界，而這道邊界是由 Nitro System 在硬體層級強制執行，而非單純仰賴軟體機制。

  AWS Nitro System 是支撐 Amazon EC2 與 AWS 網路的硬體與韌體基礎架構。AWS 表示，透過將沙盒隔離直接建構於這套底層基礎之上，產品得以在具備完整資安特性的同時，達到接近原生 EC2 的執行速度。

  ## 部署方式

  AWS Nitro Sandboxes 支援多種部署情境：可作為獨立沙盒運行於 Amazon EC2 執行個體上，也可作為 Pod 部署於 Amazon ECS（彈性容器服務）或 Amazon EKS（彈性 Kubernetes 服務）之中。ECS 與 EKS 均為 AWS 旗下的託管容器編排服務。

  對於已在 Amazon EKS Auto Mode 環境中運行的團隊，AWS 表示，啟用 Nitro Sandboxes 後，Pod 即可轉換為輕量虛擬機器，無需修改現有的容器映像檔、部署流水線，或 Helm Chart——亦即用於封裝與部署 Kubernetes 應用程式的範本系統。

  ## 為何值得關注

  這項發表反映出業界對一個更廣泛問題的集體認知：原本為多租戶工作負載設計、且預設租戶為可信任方的容器隔離模型，正面臨日益升高的壓力——因為 AI 代理如今已能例行性地產生並執行來源不明的程式碼。傳統上，要達到硬體強制執行的虛擬機器層級隔離，往往必須接受一定的效能損耗；AWS 將 Nitro Sandboxes 定位為能同時兼顧兩者的解決方案。

  此外，採用這項產品無需更動現有的 Kubernetes 工具鏈，對於希望在已容器化的 AI 工作負載上獲得更強隔離保障的工程團隊而言，大幅降低了導入門檻。
date: "2026-11-12"
source_published: "2026-11-11T15:04:47.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AWS"]
trust:
  score: 3
  reasoning: "Single source: AWS、AIエージェント向けに強力な隔離環境とネイティブなEC2性能を備えた軽量VM「AWS Nitro Sandboxes」提供開始 (trust 3/5)."
sources:
  - url: "https://www.publickey1.jp/blog/26/awsaiec2vmaws_nitro_sandboxes.html"
    title: "AWS、AIエージェント向けに強力な隔離環境とネイティブなEC2性能を備えた軽量VM「AWS Nitro Sandboxes」提供開始"
    trust: 3
    type: primary
    published_at: "2026-11-11T15:04:47.000Z"
---
