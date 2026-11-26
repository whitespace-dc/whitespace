---
title_en: "AI Data Centers Face Power Management Gap as Demand Rises 50 Percent, IEA Says"
title_zh: "國際能源總署：AI資料中心用電暴增五成，電力管理缺口浮上檯面"
summary_en: "AI-focused data centre electricity consumption grew 50 percent in 2025 and server power density rose elevenfold since 2020, according to the International Energy Agency, but analysts warn that managing volatile AI workloads within facility electrical infrastructure is as pressing a challenge as securing supply."
summary_zh: "根據國際能源總署資料，AI導向資料中心的用電量在2025年成長了50%，AI伺服器功率密度自2020年以來更暴增11倍；分析師警告，在既有設施電力基礎設施中管理AI工作負載的高度波動性，是與確保電力供應同樣迫切的結構性挑戰。"
body_en: |
  Electricity consumption at AI-focused data centres grew 50 percent in 2025, while AI server power density increased elevenfold between 2020 and 2025, according to the International Energy Agency. Industry analysis now argues that the sector's predominant focus on power generation and grid expansion is obscuring a second structural problem: existing facility electrical infrastructure was not designed to handle the volatile demand patterns that AI workloads impose.

  ## Why generation alone does not resolve the problem

  Data centre power architecture was historically designed around predictable, relatively stable workloads. AI computing reverses that assumption. Demand can fluctuate sharply, producing sudden spikes and drops that place sustained pressure on electrical systems engineered before such variability was anticipated.

  The consequence, analysts argue, is that a facility can hold a grid interconnection agreement for all the capacity it needs and still fail to use that electricity efficiently if its internal electrical architecture cannot accommodate AI-driven load swings. Access to megawatts is a necessary condition, not a sufficient one.

  ## Microgrids as a coordination layer

  One proposed response to this design mismatch is the microgrid — an arrangement that brings together electricity from the main grid, on-site generation, and battery storage and operates them as a single coordinated system.

  Two main configurations exist. In an alternating current (AC) microgrid, all three sources are integrated within an AC distribution network, using power converters to reconcile their different electrical characteristics. In a direct current (DC) microgrid, sources and loads share a common DC network; a central converter connects to the main AC grid, while additional converters allow batteries, local generation, and compatible equipment to exchange power internally.

  For data centres specifically, the DC configuration can reduce the number of power conversion stages required, which in turn reduces energy lost at each conversion step.

  ## Power electronics as the enabling technology

  Coordinating multiple electricity sources requires more than physical interconnection. Each source operates under different electrical conditions, and computing equipment draws power that varies across the operational day.

  Power converters sit at the centre of this management problem. They regulate how electricity moves between the grid, local generation, batteries, and connected load, maintaining stable voltage and other conditions throughout the system.

  Battery storage illustrates the operational opportunity. Through controlled conversion, batteries can absorb electricity when grid capacity or local generation is surplus, then release it when demand rises. Combined with appropriately designed uninterruptible power supplies (UPS) and backup generation, storage provides short-term support during supply disturbances as well as day-to-day demand buffering.

  Where commercial arrangements allow, storage can also shift consumption from high-price to low-price periods. Power management systems can then coordinate all available resources according to demand levels, supply conditions, and operator priorities.

  ## Lessons from rail and EV charging

  Experience in rail transport and electric vehicle (EV) charging — both sectors that have long required power systems capable of managing variable loads in demanding electrical environments — offers reference points for data centre design. Analysts cite these sectors as evidence that reliable power conversion and control under changing conditions is achievable at operational scale, though the specific demands of mission-critical computing differ.

  ## Modular design and higher-voltage DC distribution

  For new facilities, electrical flexibility is best introduced at the design stage rather than retrofitted later. Modular architectures allow generation, storage, or conversion capacity to be added incrementally as facilities expand their AI workloads.

  Emerging higher-voltage DC distribution systems, still at an early stage of relevance to the sector, could become more applicable as future computing equipment evolves, potentially changing how electricity is delivered within buildings rather than just at the facility boundary.

  ## Implications for capital allocation

  The argument that power management is as important as power access carries direct consequences for how operators allocate capital and structure project designs. Grid investment will remain necessary to meet aggregate demand growth. But infrastructure that cannot handle AI load variability will underperform regardless of how much generation capacity it can draw on. The electrical architecture decisions operators make now will determine whether their facilities can adapt as AI workloads continue to scale.
body_zh: |
  根據國際能源總署（IEA）數據，AI導向資料中心的用電量在2025年成長了50%，AI伺服器的功率密度則在2020年至2025年間增長了11倍。業界分析人士現在認為，業界目前過度聚焦於發電擴建與電網擴張，反而遮蔽了另一個結構性問題：現有設施的電力基礎設施在設計之初，根本未曾考量AI工作負載所帶來的劇烈需求波動。

  ## 僅靠發電無法解決問題

  資料中心的電力架構，歷來是針對可預測、相對穩定的工作負載所設計的。AI運算卻徹底顛覆了這個前提。需求可能急遽起伏，產生突如其來的尖峰與驟降，對電氣系統造成持續壓力——而這些系統的設計年代，根本未預料到如此高的變動性。

  分析師指出，這導致一種兩難困境：一座設施即便已取得足夠容量的電網互聯協議，若其內部電力架構無法因應AI驅動的負載波動，依然無法有效利用這些電力。取得百萬瓦級的電力接取權是必要條件，卻不是充分條件。

  ## 微電網作為協調層

  針對這種設計錯位所提出的一種回應方案，是微電網——一種將主電網電力、場地自有發電設備與電池儲能整合在一起，並作為單一協調系統運作的架構。

  微電網主要有兩種配置形式。在交流電（AC）微電網中，三種電源均整合於交流配電網路中，利用電力轉換器調和各自不同的電氣特性。在直流電（DC）微電網中，電源與負載共享一個共同的直流網路；一台中央轉換器連接至主交流電網，另有額外的轉換器讓電池、本地發電設備及相容設備在內部相互交換電力。

  就資料中心而言，直流電配置可減少所需的電力轉換級數，進而降低每個轉換環節的能源損耗。

  ## 電力電子設備：關鍵的使能技術

  協調多個電力來源，不僅需要實體互聯。每個電源在不同的電氣條件下運作，而運算設備全天的用電需求也持續變化。

  電力轉換器正是這個管理問題的核心所在。它們調控電力在電網、本地發電設備、電池與連接負載之間的流動，全程維持穩定的電壓與其他電氣條件。

  電池儲能充分說明了這種運作機會。透過受控的轉換，電池可在電網容量或本地發電有餘裕時吸收電力，待需求攀升時再釋放出來。搭配設計適當的不斷電電源系統（UPS）與備用發電設備，儲能不僅能在供電中斷時提供短期支援，也能在日常運作中發揮需求緩衝的功能。

  在商業條件允許的情況下，儲能還可將用電從高電價時段移轉至低電價時段。電力管理系統便能根據需求水準、供電狀況及營運業者的優先順序，統籌調度所有可用資源。

  ## 借鑑軌道運輸與電動車充電的經驗

  軌道運輸與電動車（EV）充電領域的經驗——這兩個長期需要電力系統應對苛刻電氣環境中可變負載的產業——為資料中心設計提供了可供參考的案例。分析師援引這些產業，作為在多變條件下實現可靠電力轉換與控制的可行性佐證，儘管關鍵任務運算的具體需求有所不同。

  ## 模組化設計與高壓直流配電

  對於新建設施而言，電力彈性最好在設計階段就納入考量，而非事後加以改造。模組化架構讓發電、儲能或轉換容量得以隨著設施AI工作負載的擴展而逐步增加。

  新興的高壓直流配電系統目前對業界而言尚處於早期應用階段，但隨著未來運算設備的演進，可能變得更具適用性，進而改變電力在建築物內部（而不僅是在設施邊界）的輸送方式。

  ## 對資本配置的影響

  電力管理與電力取用同等重要的論點，對營運業者的資本配置方式與專案設計結構具有直接影響。電網投資仍然是滿足整體需求成長的必要之舉。但若基礎設施無法應對AI負載的高度波動性，無論能調用多少發電容量，整體表現都將大打折扣。營運業者現在所做的電力架構決策，將決定其設施能否隨著AI工作負載的持續擴展而靈活應變。
date: "2026-11-27"
source_published: "2026-11-26T08:09:00.000Z"
category: "power"
secondary_categories: ["compute"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Why More Megawatts Won't Save AI Data Centres (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/why-more-megawatts-won-t-save-ai-data-centres"
    title: "Why More Megawatts Won't Save AI Data Centres"
    trust: 3
    type: primary
    published_at: "2026-11-26T08:09:00.000Z"
---
