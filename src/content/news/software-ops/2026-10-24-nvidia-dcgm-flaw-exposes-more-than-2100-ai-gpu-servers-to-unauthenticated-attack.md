---
title_en: "NVIDIA DCGM flaw exposes more than 2,100 AI GPU servers to unauthenticated attack"
title_zh: "輝達DCGM漏洞波及逾2,100台AI GPU伺服器，攻擊者無需驗證即可入侵"
summary_en: "Lava disclosed CVE-2026-47483, a severity-8.2 vulnerability in NVIDIA's DCGM Exporter, and found roughly 2,100 publicly reachable instances exposing more than 12,000 unique GPUs across nearly 300 organisations without authentication. NVIDIA patched the flaw in DCGM Exporter version 4.8.2."
summary_zh: "資安公司Lava揭露CVE-2026-47483，這是輝達DCGM Exporter中一個CVSS評分8.2的高危漏洞，並發現約2,100個可公開存取的執行實例在毫無身分驗證防護的情況下，使近300個組織逾1萬2,000顆獨立GPU暴露於外。輝達已在DCGM Exporter 4.8.2版本中釋出修補程式。"
body_en: |
  Lava has disclosed a high-severity vulnerability in NVIDIA's Data Center GPU Manager (DCGM) Exporter — a tool widely used to monitor GPU health and performance in AI servers and clusters — and found approximately 2,100 instances of the software publicly reachable on the internet without any authentication, exposing more than 12,000 unique GPUs belonging to nearly 300 organisations.

  NVIDIA assigned the flaw the identifier CVE-2026-47483, rated it 8.2 out of 10 on the Common Vulnerability Scoring System (CVSS), and released a patch in DCGM Exporter version 4.8.2. According to Lava, unauthenticated attackers able to reach an exposed instance could trigger uncontrolled resource consumption, denial of service, and information disclosure.

  ## Scale and composition of exposed systems

  Lava conducted four internet-wide scans between March and May 2026. The sweeps identified approximately 2,100 publicly accessible DCGM Exporter hosts exposing more than 12,000 unique GPUs. Based on approximate market values for the GPU models observed, the company estimated the exposed hardware was worth more than USD $100 million. The inventory included NVIDIA's Blackwell Ultra B300 GPUs, H200s and H100s, as well as consumer RTX 5090 and 4090 cards.

  The nearly 300 organisations linked to the exposure spanned neoclouds (cloud providers specialising in GPU compute), traditional hosting and colocation providers, universities, telecommunications groups, and public cloud environments. Consumer GPU and mining farms accounted for 35% of the observed GPUs; neoclouds accounted for 25%; and traditional hosting and colocation providers for 19%.

  ## What the vulnerability allows

  When DCGM Exporter instances are accessible from the public internet, Lava said, an internal monitoring component becomes an external attack surface. Every identified host exposed GPU telemetry without any authentication requirement, meaning any internet user could view details of deployed hardware, utilisation levels, and elements of AI environment configuration.

  Lava said it validated a resource exhaustion attack in a controlled environment rather than against publicly exposed systems. An unauthenticated attacker could remotely exhaust system resources and crash the monitoring service. The resulting CPU and memory pressure could also affect AI training or inference workloads running on the same host.

  About one quarter of the public DCGM Exporter instances also exposed internal Go profiling endpoints, a debugging interface built into applications written in the Go programming language. Lava initially attributed this to operator misconfiguration but later reproduced the behaviour using NVIDIA's official DCGM Exporter container, indicating the exposure is a product default rather than solely an operator error.

  ## Broader infrastructure intelligence from exposed telemetry

  The exposure extended beyond GPU metrics. Lava also found 12,096 publicly accessible servers exposing data through node_exporter, a system-level metrics collector. That data included server models, operating systems, firmware versions, hostnames, storage paths, and networking hardware used in GPU clusters.

  In some cases, researchers said they could correlate GPU activity with the underlying server hardware, software stacks, and high-speed networking infrastructure, building a detailed picture of how AI environments were constructed without any credentials. Public telemetry also made it possible to identify individual GPUs across multiple scan observations and track changes in workload activity even when endpoints or hostnames changed between sweeps.

  Approximately 60% of the exposed GPUs reported zero utilisation at the time of observation.

  ## Named providers and customer responsibility

  Lava identified publicly exposed monitoring services on customer infrastructure across several neocloud and GPU cloud providers, including Nebius, Voltage Park, Lambda, Northern Data, and DigitalOcean. Those providers indicated that most of the exposed services had been deployed by customers rather than by the providers themselves. Lava reported its findings to the affected providers, which then worked with customers to address the exposures.

  Lava recommended that operators prevent NVIDIA DCGM Exporter, Node Exporter, and Prometheus services from being directly reachable from the public internet and restrict them to authorised monitoring infrastructure.

  ## Industry implications

  Yakir Kadkoda, Chief Technology Officer and Co-Founder at Lava, said the pace of AI infrastructure expansion was outstripping security controls. "Neoclouds are racing to add GPU capacity, and customers are racing to use it," Kadkoda said. "That speed is creating security gaps on both sides - providers are moving faster than they can harden the environment, while customers often don't know exactly what they're inheriting or exposing."

  The vulnerability and the broader misconfiguration pattern it exposed point to a structural risk in rapid GPU cloud build-outs: monitoring tooling designed for internal networks is being deployed into internet-reachable environments, where default configurations that assume network isolation create exploitable attack surfaces. NVIDIA's fix in DCGM Exporter version 4.8.2 addresses CVE-2026-47483; resolving the wider exposure requires operators and tenants to restrict public access to monitoring endpoints.
body_zh: |
  Lava揭露了輝達（NVIDIA）資料中心GPU管理器（Data Center GPU Manager，DCGM）Exporter中一個高危漏洞。DCGM Exporter是一款廣泛應用於AI伺服器與叢集、用於監控GPU健康狀態與效能的工具。調查發現，約有2,100個該軟體執行實例在毫無身分驗證防護的情況下可由網際網路直接存取，使近300個組織逾1萬2,000顆獨立GPU暴露於外。

  輝達將此漏洞編號為CVE-2026-47483，在通用漏洞評分系統（CVSS）中評定為10分滿分中的8.2分，並已在DCGM Exporter 4.8.2版本中釋出修補程式。Lava指出，能夠存取暴露實例的未授權攻擊者，可觸發無節制的資源消耗、阻斷服務（DoS），以及資訊洩露等問題。

  ## 暴露系統的規模與組成

  Lava於2026年3月至5月間進行了四次全網掃描。掃描結果顯示，約有2,100個可公開存取的DCGM Exporter主機，共暴露逾1萬2,000顆獨立GPU。根據所觀察GPU型號的大約市場價值，該公司估計遭暴露硬體的總價值超過1億美元。清單中涵蓋輝達的Blackwell Ultra B300、H200及H100 GPU，以及消費級的RTX 5090和RTX 4090顯示卡。

  與此次暴露事件相關的近300個組織，橫跨新興雲端業者（專注於GPU運算的雲端服務供應商）、傳統主機代管與共置服務商、大學、電信集團，以及公有雲環境。消費級GPU與挖礦農場佔所觀察GPU的35%，新興雲端業者佔25%，傳統主機代管與共置服務商佔19%。

  ## 漏洞可造成的危害

  Lava表示，當DCGM Exporter實例可從公開網際網路存取時，原本屬於內部的監控元件便成為對外的攻擊面。所有被識別的主機均在毫無驗證要求的情況下暴露GPU遙測數據，意即任何網際網路用戶皆可查看已部署硬體的詳細資訊、資源使用率，以及AI環境配置的相關內容。

  Lava表示，資源耗盡攻擊是在受控環境中加以驗證，而非針對公開暴露的系統進行測試。未授權攻擊者可遠端耗盡系統資源，進而導致監控服務崩潰。由此產生的CPU與記憶體壓力，也可能影響到同一主機上執行的AI訓練或推論工作負載。

  約有四分之一的公開DCGM Exporter實例還暴露了Go語言內部效能分析端點（profiling endpoint）——這是以Go語言撰寫的應用程式所內建的除錯介面。Lava起初將此情形歸因於操作人員的配置錯誤，但後來使用輝達官方DCGM Exporter容器重現了相同行為，顯示這項暴露問題出自產品預設行為，而非單純的操作失誤。

  ## 從暴露遙測數據中獲取更廣泛的基礎設施情報

  此次暴露不僅止於GPU指標。Lava還發現1萬2,096台可公開存取的伺服器，透過node_exporter（一款系統層級的指標收集工具）對外揭露數據。這些數據涵蓋伺服器型號、作業系統、韌體版本、主機名稱、儲存路徑，以及GPU叢集所使用的網路硬體。

  研究人員表示，在某些情況下，他們能夠將GPU活動與底層伺服器硬體、軟體堆疊及高速網路基礎設施相互對照，在無需任何憑證的情況下，構建出AI環境的完整樣貌。公開的遙測數據也使研究人員得以在多次掃描中識別個別GPU，並在端點或主機名稱於兩次掃描間發生變更的情況下，仍能追蹤工作負載活動的變化。

  觀察時，約60%的暴露GPU回報的使用率為零。

  ## 點名業者與客戶責任

  Lava在數家新興雲端與GPU雲端服務供應商的客戶基礎設施上，識別出公開暴露的監控服務，相關業者包括Nebius、Voltage Park、Lambda、Northern Data及DigitalOcean。這些供應商表示，大多數暴露的服務是由客戶自行部署，而非由供應商本身所建置。Lava已將調查結果通報給受影響的供應商，供應商隨後與客戶合作，共同處理相關暴露問題。

  Lava建議操作人員避免讓輝達DCGM Exporter、Node Exporter及Prometheus服務可直接從公開網際網路存取，並將其限制在經授權的監控基礎設施範圍內。

  ## 對產業的影響

  Lava技術長暨共同創辦人Yakir Kadkoda表示，AI基礎設施的擴張速度已超越了安全控制措施的跟進能力。「新興雲端業者正在搶速度擴增GPU容量，客戶也在搶速度使用，」Kadkoda說，「這種速度在雙方都製造了資安缺口——供應商的擴建速度超過了他們強化環境安全的能力，而客戶往往不清楚自己究竟繼承或暴露了哪些東西。」

  此次漏洞及其所揭示的更廣泛配置錯誤問題，指向GPU雲端快速建置過程中的一個結構性風險：原本為內部網路設計的監控工具，正被部署至可被網際網路直接存取的環境中，而預設網路隔離的配置預設值，在此情境下反而製造出可被利用的攻擊面。輝達已在DCGM Exporter 4.8.2版本中修補CVE-2026-47483；若要解決更廣泛的暴露問題，則需要操作人員與租戶主動限制監控端點的公開存取。
date: "2026-10-24"
source_published: "2026-10-22T20:22:59.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Nebius", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Lava flags NVIDIA DCGM flaw exposing AI GPU servers (trust 3/5)."
sources:
  - url: "https://datacenter.news/story/lava-flags-nvidia-dcgm-flaw-exposing-ai-gpu-servers"
    title: "Lava flags NVIDIA DCGM flaw exposing AI GPU servers"
    trust: 3
    type: primary
    published_at: "2026-10-22T20:22:59.000Z"
---
