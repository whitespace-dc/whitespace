---
title_en: "Studies find active-standby cooling and grid power-sharing can sharpen data center efficiency"
title_zh: "多項研究：主動待機冷卻與電網電力共享可提升資料中心效率"
summary_en: "Three peer-reviewed studies synthesized by a Digital Realty program manager find that changing how data centers operate redundant cooling, power, and server systems can cut cooling energy consumption by 15 percent and reduce backup server device requirements by 27 percent. The research argues that operational design choices deliver more efficiency than adding redundant hardware."
summary_zh: "Digital Realty 專案經理綜合三項同儕審查研究後發現，改變資料中心冗餘冷卻、電力與伺服器系統的運作方式，可將冷卻能耗降低最多 15%、減少備援伺服器設備需求達 27%。研究指出，運營設計選擇所帶來的效率提升，遠勝於一味增設冗餘硬體。"
body_en: |
  Three peer-reviewed studies, synthesized by Solomon Obadimu, a program manager at Digital Realty, find that changing how data centers design and operate redundant systems — rather than deploying more of them — can reduce cooling energy consumption by up to 15 percent, recover underutilized uninterruptible power supply capacity, and lower server backup device requirements by 27 percent.

  The analysis, published July 26, 2026 in Data Center Dynamics, covers three interdependent layers of data center redundancy: cooling, power, and servers. It argues that conventional practice — keeping standby systems offline in idle mode and spreading workloads thinly across underutilized server fleets — leaves significant efficiency gains unrealized.

  ## Cooling failures drive the case for change

  Cooling system failures are the single largest source of data center downtime, accounting for 51 percent of interruptions, according to a study cited by Cho et al. (2024). The standard industry response is cold standby sparing (CSP), in which redundant cooling units remain offline until a primary unit fails.

  Cho et al. proposed an alternative called hot standby sparing (HSP), in which all cooling units, including the redundant ones, run simultaneously but at reduced load. The authors demonstrated the approach using variable-speed drive (VSD) and variable-frequency drive (VFD) technologies, which allow cooling units to modulate their output continuously rather than operating in binary on-off states.

  In a case study involving a 30-megawatt data center with server racks consuming 8.8 kilowatts each, HSP reduced total cooling power consumption by 15 percent compared with CSP at the same design capacity. Power usage effectiveness (PUE) — a standard metric expressing how much of a facility's total energy goes to computing rather than to overhead such as cooling, where a score of 1.0 would represent a theoretically perfect facility — fell from 1.23 under CSP to 1.20 under HSP. Cho et al. concluded that HSP combined with VSD and VFD technologies should be prioritized over CSP when redundancy levels exceed N+1, meaning one backup unit per active unit.

  ## Idle UPS capacity points to a grid revenue path

  Uninterruptible power supplies, or UPS units — battery-backed systems that bridge the gap between a grid outage and generator startup — carry significant unused capacity. A survey cited by Takci et al. (2025) found that 10 to 50 percent of UPS capacity goes unused in data centers, even during power outages.

  Takci et al. argued this surplus, combined with backup generator capacity, constitutes an untapped energy resource that utility companies could draw on during peak demand. The authors described data centers as prosumers — facilities that both consume power from the grid and can supply it back. In a scenario where an IT load requires 3 megawatts, the authors noted that a basic N topology, providing no backup capacity beyond the live load, leaves the facility vulnerable to interruptions. Higher-redundancy configurations such as 2N or 2(N+1) provide the reliability typical of high-availability facilities while generating the surplus capacity that could flow to the grid.

  The authors noted that power grids face growing demand from electric vehicles, smart homes, and other technologies, which they said makes the potential commercial relationship between utility companies and data center operators financially attractive. A standardized governance framework to facilitate such arrangements does not yet exist, Obadimu noted, describing the existing research as a roadmap for operators and providers looking to formalize the relationship.

  ## Server underutilization inflates energy costs

  Low server utilization compounds the inefficiency across the facility. Takci et al. (2025) reported that server utilization typically ranges between 12 and 30 percent, while overall data center workload averages 30 percent. Shaukat et al. (2022) found that an idle server consumes up to 66 percent as much energy as one running at full load, making thin workload distribution costly at scale.

  Shaukat et al. proposed a scheduling approach called Energy-Aware Fault-Tolerant (EAFT), designed to concentrate workloads on fewer active servers while maintaining service-level agreements (SLAs) and performance targets. In simulations run at 75 percent server load, the authors compared EAFT against a competing approach called GreenCloud.

  EAFT consumed more power than GreenCloud in normal operation but significantly outperformed it when failures occurred: unfinished server processing tasks fell by 80 percent under failure conditions, and EAFT required 27 percent fewer backup devices than GreenCloud. The authors concluded that a single level of redundancy — N+1 — is sufficient for most data center workloads, and that adding further tiers increases cost and operational complexity without proportionate gains in reliability.

  ## Cross-layer dependencies and industry implications

  The three studies collectively identify a dependency chain across the layers: server workload distribution shapes the cooling load, which in turn affects UPS and broader power requirements. Improvements at one layer can therefore produce cascading efficiency gains elsewhere. Obadimu's analysis notes that all three strategies can be deployed within existing facilities without redesigning infrastructure or disrupting ongoing operations.

  The finding consistent across all three bodies of research is that how redundancy is implemented carries more weight than how much redundant hardware is present. Unnecessary redundancy levels inflate operational costs, and the authors across all three studies point to N+1 as a practical threshold, with the appropriate level varying by facility tier.

  Obadimu identified the absence of a standardized governance framework for utility-data center power-sharing arrangements as the most significant near-term gap the industry must close before data center operators can reliably realize revenue from idle backup capacity.
body_zh: |
  三項同儕審查研究由 Digital Realty 專案經理 Solomon Obadimu 綜合分析後指出，改變資料中心設計與運作冗餘系統的方式——而非部署更多冗餘設備——可將冷卻能耗最多降低 15%、回收閒置的不斷電系統容量，並將伺服器備援設備需求減少 27%。

  這份分析於 2026 年 7 月 26 日刊載於《Data Center Dynamics》，涵蓋資料中心冗餘的三個相互依存的層面：冷卻、電力與伺服器。分析指出，傳統做法——讓待機系統在閒置模式下保持離線，並將工作負載稀薄地分散到使用率偏低的伺服器叢集上——使大量效率提升空間付諸流失。

  ## 冷卻故障推動改革呼聲

  冷卻系統故障是資料中心停機的最大單一來源，佔中斷事件的 51%，此為 Cho 等人（2024）所引用的研究數據。業界的標準應對方式是「冷待機備援」（Cold Standby Sparing，CSP），即讓冗餘冷卻設備維持離線狀態，等主要設備發生故障後再行啟動。

  Cho 等人提出了一種名為「熱待機備援」（Hot Standby Sparing，HSP）的替代方案，讓包括冗餘設備在內的所有冷卻設備同時以較低負載運轉。作者們展示了採用變速驅動（VSD）與變頻驅動（VFD）技術的實作方式，這些技術可讓冷卻設備持續調節輸出功率，而非以非開即關的二元狀態運作。

  在一項涉及 30 百萬瓦（MW）資料中心的案例研究中，每個伺服器機架的用電量為 8.8 千瓦（kW）。在相同設計容量下，HSP 與 CSP 相比，將總冷卻電力消耗降低了 15%。電力使用效率（PUE）——衡量設施總能源中有多少流向運算用途（而非冷卻等輔助開銷）的標準指標，理論完美值為 1.0——從 CSP 下的 1.23 降至 HSP 下的 1.20。Cho 等人結論認為，當冗餘等級超過 N+1（即每個主動設備配備一個備援設備）時，應優先採用結合 VSD 與 VFD 技術的 HSP，而非 CSP。

  ## 閒置 UPS 容量指向電網收益路徑

  不斷電系統（UPS）——電池備援系統，負責銜接電網斷電至發電機啟動之間的時間差——擁有相當可觀的閒置容量。Takci 等人（2025）所引用的一項調查發現，即便在停電期間，資料中心仍有 10% 至 50% 的 UPS 容量處於閒置狀態。

  Takci 等人認為，這部分剩餘容量加上備用發電機容量，構成了電力公司在尖峰需求時段可調用的未開發能源資源。作者們將資料中心定位為「產消者」（prosumer）——一種既從電網消耗電力、也能反向向電網供電的設施。在 IT 負載需求為 3 百萬瓦（MW）的情境下，作者們指出，僅提供即時負載容量、不設任何備援的基本 N 拓撲，使設施容易受到中斷影響。較高冗餘配置如 2N 或 2(N+1) 則能提供高可用性設施慣常具備的可靠度，同時產生可回饋電網的剩餘容量。

  作者們指出，電網正面臨來自電動車、智慧家庭及其他技術持續增長的需求，這使得電力公司與資料中心營運商之間潛在的商業合作關係在財務上極具吸引力。Obadimu 指出，目前促成此類安排的標準化治理框架尚不存在，並將現有研究描述為有意將這種合作關係正式化的營運商與供應商的前進路線圖。

  ## 伺服器使用率低下推高能源成本

  伺服器低使用率進一步加劇了整體設施的效率問題。Takci 等人（2025）的報告指出，伺服器使用率通常介於 12% 至 30% 之間，而整體資料中心工作負載平均僅達 30%。Shaukat 等人（2022）發現，閒置伺服器的耗電量最高可達滿載運行時的 66%，使得稀薄的工作負載分配在大規模環境下代價高昂。

  Shaukat 等人提出了一種名為「能源感知容錯排程」（Energy-Aware Fault-Tolerant，EAFT）的排程方法，旨在將工作負載集中於較少數量的主動伺服器上，同時維持服務等級協議（SLA）與效能目標。在 75% 伺服器負載條件下進行的模擬中，作者們將 EAFT 與另一種名為 GreenCloud 的競爭方案進行了比較。

  EAFT 在正常運作時的耗電量高於 GreenCloud，但在發生故障時的表現則大幅優於後者：在故障條件下，未完成的伺服器處理任務減少了 80%，且 EAFT 所需的備援設備比 GreenCloud 少 27%。作者們結論認為，對大多數資料中心工作負載而言，單一冗餘等級——N+1——已然足夠，增加更多冗餘層次只會提高成本與運營複雜度，卻無法獲得相稱的可靠性提升。

  ## 跨層相依性與業界影響

  三項研究共同指出各層之間的相依關係鏈：伺服器工作負載分配影響冷卻負荷，冷卻負荷進而影響 UPS 及更廣泛的電力需求。因此，某一層的改善可在其他層引發連鎖性的效率提升。Obadimu 的分析指出，三種策略均可在現有設施內部署，無需重新設計基礎架構或中斷正在進行中的業務。

  三項研究一致的發現是：冗餘如何實施，比擁有多少冗餘硬體更為關鍵。不必要的冗餘等級會推升運營成本，三項研究的作者們均指向 N+1 作為實際的基準門檻，而適切的等級則因設施層級而異。

  Obadimu 指出，電力公司與資料中心之間的電力共享安排缺乏標準化治理框架，是在資料中心營運商能可靠地從閒置備援容量中獲取收益之前，業界目前最需要填補的重大近期缺口。
date: "2026-07-27"
source_published: "2026-07-26T13:00:28.000Z"
category: "software-ops"
secondary_categories: ["cooling", "power"]
region: []
vendor: ["Digital Realty"]
trust:
  score: 3
  reasoning: "Single source: Rethinking redundancy: smarter strategies for the AI-driven data center (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/opinions/rethinking-redundancy-smarter-strategies-for-the-ai-driven-data-center/"
    title: "Rethinking redundancy: smarter strategies for the AI-driven data center"
    trust: 3
    type: primary
    published_at: "2026-07-26T13:00:28.000Z"
---
