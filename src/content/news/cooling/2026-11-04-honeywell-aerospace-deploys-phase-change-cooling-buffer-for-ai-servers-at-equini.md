---
title_en: "Honeywell Aerospace deploys phase-change cooling buffer for AI servers at Equinix Ashburn"
title_zh: "霍尼韋爾航太於Equinix阿什本部署AI伺服器相變冷卻緩衝模組"
summary_en: "Honeywell Aerospace has completed a trial of its Thermal Response Module at Equinix's Co-Innovation Facility in Ashburn, Virginia, applying phase-change thermal buffering technology drawn from aerospace and defense programs to liquid-cooled AI data center infrastructure."
summary_zh: "霍尼韋爾航太已完成其「熱響應模組」在維吉尼亞州阿什本Equinix共同創新設施的試驗安裝，將源自航太與國防計畫的相變熱緩衝技術引入液冷AI資料中心基礎設施。這是該公司繼航空器與國防平台之後，首度跨足AI資料中心液冷領域。"
body_en: |
  Honeywell Aerospace has completed a trial installation of its Thermal Response Module at Equinix's Co-Innovation Facility in Ashburn, Virginia, marking the aerospace and defense supplier's entry into liquid-cooled AI data center infrastructure with technology originally developed for aircraft and defense platforms.

  The module is designed to sit within an existing liquid cooling loop, positioned between the coolant distribution unit (CDU) — the hardware that circulates and conditions liquid coolant to servers — and the servers themselves. Its role is to act as a thermal buffer, absorbing and releasing heat during brief disturbances such as power fluctuations, sudden changes in compute load, or instability elsewhere in the cooling circuit, Honeywell said.

  ## How the system works

  The module uses phase-change materials (PCMs), substances that absorb large amounts of thermal energy as they transition between solid and liquid states. That stored energy can be released back into the cooling loop when temperatures drop, smoothing out short-term thermal spikes without waiting for upstream cooling equipment to respond, according to the company.

  Honeywell said the unit includes onboard state-of-charge sensing alongside its heat exchanger design — allowing operators to monitor how much thermal capacity remains in the buffer at any given time. The company said the system stabilizes the cooling loop within seconds and can be configured to sustain several minutes of thermal buffering if needed.

  The company said the module delivers 7.6 times more cooling power than chilled water, a widely used baseline for data center cooling systems, and that it can be integrated into existing cooling loops without requiring a full redesign. It also said the system is compatible with any CDU supplier and can scale from edge deployments to larger AI compute clusters.

  ## Trial at Equinix Ashburn

  Testing took place at Equinix's Ashburn facility, which the colocation provider uses specifically for development and evaluation work. Equinix said the trial focused on how the module handled rapid changes in GPU — graphics processing unit, the processors widely used for AI training and inference — cooling demand.

  "Testing at our Ashburn Co-Innovation Facility demonstrated the technology's capability to manage rapid GPU cooling load fluctuations while requiring a smaller footprint compared with buffer tanks," said Pawel Wlodarczak, Design Innovation Director for Global Design at Equinix.

  Buffer tanks are the conventional approach to storing thermal capacity in a cooling loop; Wlodarczak's reference to footprint suggests the PCM-based module occupies less physical space for a comparable thermal reserve, though neither party provided a direct size comparison in their statements.

  ## Aerospace origins

  Honeywell Aerospace said the product reflects a deliberate effort to move thermal management work from aircraft and defense programs into adjacent commercial markets. The company argued that while the operating environments differ, both domains require precise, continuous temperature control to protect expensive hardware and maintain uptime.

  "We have taken phase-change material technology developed to protect mission-critical aerospace and defence systems and applied it to a similar challenge in AI infrastructure," said Rich DeGraff, President and Chief Executive Officer of Control Systems at Honeywell Aerospace.

  The company said the parallel is driven by the demands AI workloads place on cooling systems — higher power densities packed into the same physical footprint, with less tolerance for temperature excursions that could affect GPU performance or damage hardware.

  ## Market context

  The trial comes as liquid cooling transitions from niche to mainstream in AI-oriented data centers. According to research firm Omdia, some form of liquid cooling is currently deployed in fewer than half of data centers globally. Omdia expects the liquid cooling market to grow at an annual rate of 20 percent over the next five years, driven by adoption of direct-to-chip liquid cooling — a method that routes liquid coolant directly to processors rather than relying solely on air — to support more powerful AI processors.

  The growing density of AI infrastructure has increased the consequences of short cooling interruptions. Honeywell said brief thermal disturbances can affect GPU performance and expose hardware to damage, creating service-level agreement risk for operators who guarantee uptime to customers.

  Honeywell said its module is intended to reduce that risk by providing an immediate thermal response while the wider cooling system — chillers, CDUs, and other upstream assets — adjusts to changing conditions. The company added that more stable coolant temperatures could also support more consistent operation of those upstream components.
body_zh: |
  霍尼韋爾航太（Honeywell Aerospace）已完成其「熱響應模組」（Thermal Response Module）在維吉尼亞州阿什本Equinix共同創新設施的試驗安裝，標誌著這家航太暨國防供應商以原為航空器和國防平台所研發的技術，正式跨足液冷AI資料中心基礎設施領域。

  該模組設計用於嵌入現有液冷迴路，位置介於冷卻液分配單元（CDU，負責循環並調節輸送至伺服器之液態冷卻劑的硬體）與伺服器之間。霍尼韋爾表示，其功能是作為熱緩衝器，在電力波動、運算負載驟變或冷卻迴路其他部分出現不穩定等短暫干擾期間，吸收並釋放熱能。

  ## 系統運作原理

  該模組採用相變材料（PCM）——一種在固態與液態之間轉換時能吸收大量熱能的物質。據該公司說明，儲存的能量可在溫度下降時釋回冷卻迴路，無需等待上游冷卻設備響應，即可平抑短期熱峰值。

  霍尼韋爾表示，裝置內建荷電狀態感測器，搭配其熱交換器設計，讓操作人員能隨時監控緩衝器剩餘的熱容量。該公司指出，系統可在數秒內穩定冷卻迴路，並可依需求配置為提供數分鐘的熱緩衝。

  該公司表示，此模組的冷卻能力是冰水（資料中心冷卻系統廣泛採用的基準）的7.6倍，可整合至現有冷卻迴路而無需完全重新設計。該公司還指出，系統與任何CDU供應商相容，並可從邊緣部署擴展至較大型的AI運算叢集。

  ## 在Equinix阿什本的試驗

  測試在Equinix阿什本設施進行，該共置供應商專門將此設施用於開發與評估工作。Equinix表示，試驗重點在於模組如何應對GPU（繪圖處理器，廣泛用於AI訓練與推論的處理器）冷卻需求的急遽變化。

  Equinix全球設計創新總監帕維爾‧弗沃達爾扎克（Pawel Wlodarczak）表示：「在我們阿什本共同創新設施進行的測試，展示了這項技術管理GPU冷卻負載快速波動的能力，同時與緩衝槽相比，所需的佔地面積更小。」

  緩衝槽是冷卻迴路中儲存熱容量的傳統方式；弗沃達爾扎克提及佔地面積，暗示基於PCM的模組在相當的熱儲備容量下，佔用的實體空間更小——但雙方均未在聲明中提供直接的尺寸比較數據。

  ## 航太技術起源

  霍尼韋爾航太表示，此產品體現了該公司有意將熱管理工作從航空器和國防計畫延伸至相鄰商業市場的策略。該公司認為，雖然兩種應用環境有所不同，但兩者均需對昂貴硬體進行精確、持續的溫度控制，以維持正常運作時間。

  霍尼韋爾航太控制系統總裁暨執行長里奇‧德格拉夫（Rich DeGraff）表示：「我們將為保護航太與國防關鍵任務系統所研發的相變材料技術，應用於AI基礎設施中的類似挑戰。」

  該公司表示，這種對應關係源於AI工作負載對冷卻系統的需求——在相同實體佔地面積內封裝更高的功率密度，且對可能影響GPU效能或損害硬體的溫度偏差容忍度更低。

  ## 市場背景

  此次試驗適逢液冷技術在AI導向資料中心中從小眾走向主流的轉型時期。根據研究機構Omdia的資料，目前全球不到半數的資料中心部署了某種形式的液冷系統。Omdia預計，受直接對晶片液冷——一種將液態冷卻劑直接導向處理器而非單純依賴空氣冷卻的方法——普及帶動，以支援更強大的AI處理器，液冷市場未來五年將以每年20%的速度成長。

  AI基礎設施密度持續提升，使短暫冷卻中斷的後果愈發嚴重。霍尼韋爾表示，短暫的熱干擾可能影響GPU效能並使硬體暴露於損壞風險，為須向客戶保證正常運作時間的業者帶來服務等級協議（SLA）風險。

  霍尼韋爾表示，其模組旨在提供即時熱響應以降低上述風險，同時讓更廣泛的冷卻系統——包括冷卻機、CDU及其他上游設備——得以調整以因應不斷變化的條件。該公司補充指出，更穩定的冷卻液溫度也有助於這些上游元件更一致地運作。
date: "2026-11-04"
source_published: "2026-11-03T04:02:00.000Z"
category: "cooling"
secondary_categories: []
region: ["United States"]
vendor: ["Equinix"]
trust:
  score: 3
  reasoning: "Single source: Honeywell tests aerospace cooling module for AI data centres (trust 3/5)."
sources:
  - url: "https://datacenter.news/story/honeywell-tests-aerospace-cooling-module-for-ai-data-centres"
    title: "Honeywell tests aerospace cooling module for AI data centres"
    trust: 3
    type: primary
    published_at: "2026-11-03T04:02:00.000Z"
---
