---
title_en: "Microsoft launches Azure Linux 4.0 public preview as first general-purpose server distro"
title_zh: "微軟推出 Azure Linux 4.0 公開預覽，首款通用伺服器發行版"
summary_en: "Microsoft has opened a public preview of Azure Linux 4.0, an RPM-based Linux distribution derived from Fedora and optimized for Hyper-V and Azure — the company's first Linux offering intended for general-purpose server workloads. The distribution is available now through Azure Marketplace, with Windows Subsystem for Linux support planned to follow."
summary_zh: "微軟正式開放 Azure Linux 4.0 公開預覽，這是一款以 Fedora 為基礎、針對 Hyper-V 與 Azure 優化的 RPM 系套件發行版，也是微軟首度推出專為通用伺服器工作負載設計的 Linux 發行版，目前已可透過 Azure Marketplace 取得，Windows 子系統 Linux（WSL）版本亦在規劃之中。"
body_en: |
  Microsoft has opened a public preview of Azure Linux 4.0, its internally developed Linux distribution, marking the company's first move into general-purpose server-side Linux beyond purpose-built cloud and container infrastructure. The distribution is available on Azure Marketplace for deployment on Microsoft Azure virtual machines, according to an announcement tied to the Microsoft Build 2026 session "Build, deploy, and run Linux workloads on Azure."

  ## What Azure Linux 4.0 is

  Azure Linux 4.0 is an RPM-based Linux distribution — meaning it uses the Red Hat Package Manager format for software installation and updates — derived from Fedora, a community Linux project that serves as an upstream source for several enterprise distributions. Microsoft said the distribution is optimized for Hyper-V, the company's hypervisor technology, and for the Microsoft Azure cloud environment.

  Microsoft said it verifies the software supply chain, configuration, and quality of the components that make up the distribution, citing this as the basis for its security posture. The company also said it will provide direct support for Azure Linux 4.0.

  ## How this fits Microsoft's Linux history

  Microsoft's involvement with Linux on its own infrastructure spans more than a decade. In 2012, the company began offering Linux virtual machines on Microsoft Azure using CentOS and Ubuntu. In 2019, it shipped its own custom kernel for WSL (Windows Subsystem for Linux), the compatibility layer that allows Linux environments to run inside Windows. In 2023, it introduced Azure Linux as the underlying operating system for AKS (Azure Kubernetes Service), its managed container orchestration platform.

  Each of those steps served a specific, bounded purpose. Azure Linux 4.0 is the first time Microsoft has offered its own Linux distribution for general server use, rather than as infrastructure underpinning a specific Azure service.

  ## Availability and what comes next

  The distribution is deployable today from Azure Marketplace on Azure virtual machines. Microsoft said a version for WSL is expected to become available soon, which would allow developers running Windows to use Azure Linux 4.0 as their local Linux environment — the same distribution they would run in production on Azure.

  The public preview status means the distribution is available for broad testing but has not yet reached general availability, which typically carries full production support commitments.
body_zh: |
  ## 微軟推出 Azure Linux 4.0 公開預覽，首款通用伺服器發行版

  微軟正式開放 Azure Linux 4.0 公開預覽，這是該公司自行研發的 Linux 發行版，也標誌著微軟首度跨入通用伺服器端 Linux 領域，不再侷限於專用雲端與容器基礎架構。根據 Microsoft Build 2026 技術大會「在 Azure 上建置、部署及執行 Linux 工作負載」議程的相關公告，這套發行版已可在 Azure Marketplace 上取得，供用戶部署於 Microsoft Azure 虛擬機器。

  ## Azure Linux 4.0 是什麼

  Azure Linux 4.0 是一套 RPM 系 Linux 發行版，意即採用 Red Hat 套件管理員格式進行軟體安裝與更新，其來源基礎為 Fedora——一個作為多款企業級發行版上游來源的社群 Linux 專案。微軟表示，這套發行版已針對該公司的虛擬機器監控器技術 Hyper-V 及 Microsoft Azure 雲端環境進行優化。

  微軟指出，公司會驗證構成此發行版各元件的軟體供應鏈、組態設定與品質，並以此作為其資安防護的立論依據。微軟同時表示，將直接為 Azure Linux 4.0 提供技術支援。

  ## 微軟與 Linux 的淵源

  微軟在自有基礎架構上與 Linux 的淵源已逾十年。2012 年，微軟開始在 Microsoft Azure 上提供以 CentOS 與 Ubuntu 為基礎的 Linux 虛擬機器。2019 年，微軟為 WSL（Windows 子系統 Linux）——即允許 Linux 環境在 Windows 內執行的相容層——推出了自訂核心。2023 年，微軟將 Azure Linux 引入旗下受管容器協調平台 AKS（Azure Kubernetes Service），作為其底層作業系統。

  上述每一步都有其特定且有限的用途。Azure Linux 4.0 是微軟首次將自家 Linux 發行版提供給通用伺服器使用，而非僅作為特定 Azure 服務的底層基礎架構。

  ## 上市時程與後續計畫

  目前，用戶已可直接從 Azure Marketplace 將 Azure Linux 4.0 部署至 Azure 虛擬機器。微軟表示，WSL 版本預計近期推出，屆時使用 Windows 的開發者將能以 Azure Linux 4.0 作為本機 Linux 環境，與其在 Azure 正式環境上執行的發行版保持一致。

  公開預覽狀態意味著此發行版已開放大眾廣泛測試，但尚未正式上市（General Availability）；正式上市版本通常才附帶完整的正式環境支援承諾。
date: "2026-06-07T18:38:24.874Z"
source_published: "2026-06-07T15:21:33.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: マイクロソフト独自のLinuxディストリビューション「Azure Linux 4.0」パブリックプレビュー開始。Azureに最適化、WSLでも利用可能に (trust 3/5)."
sources:
  - url: "https://www.publickey1.jp/blog/26/linuxazure_linux_40azurewsl.html"
    title: "マイクロソフト独自のLinuxディストリビューション「Azure Linux 4.0」パブリックプレビュー開始。Azureに最適化、WSLでも利用可能に"
    trust: 3
    type: primary
    published_at: "2026-06-07T15:21:33.000Z"
---
