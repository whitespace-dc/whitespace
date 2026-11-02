---
title_en: "Envision says it is running the world's first 800VDC data center in Ulanqab, China"
title_zh: "遠景能源宣稱在中國烏蘭察布運行全球首座800VDC資料中心"
summary_en: "Green technology firm Envision claims its Galaxy AI data center in Ulanqab, Inner Mongolia is running live compute workloads on an 800VDC power system, which the company describes as a world first. The system converts grid AC to 800-volt DC in a single step, bypassing multiple conversion stages used in conventional data center power architecture."
summary_zh: "綠能科技企業遠景能源宣稱，其位於中國內蒙古烏蘭察布的「星雲AI」資料中心，已在800伏特直流電（800VDC）電力系統下執行正式運算工作負載，並稱此為全球首例。該系統將電網交流電一步轉換為800伏特直流電，省去傳統資料中心電力架構中的多重轉換環節。"
body_en: |
  Green technology firm Envision claims to be operating the world's first 800-volt direct current (800VDC) power system at a commercial data center, running live compute workloads at its Galaxy AI facility in Ulanqab, Inner Mongolia, China. Data Center Dynamics, which reported the claim, said it is not aware of any other data center globally running an 800VDC setup.

  The Galaxy AI data center opened in August. Envision has not disclosed the scale of the 800VDC system currently operating within the facility.

  ## How 800VDC differs from conventional power architecture

  A conventional data center power path runs through multiple energy conversions: alternating current (AC) from the grid is first converted to direct current (DC) for the site's battery or uninterruptible power supply (UPS), then converted back to AC to reach the IT racks, and converted once more to DC to supply the server hardware and its components.

  An 800VDC architecture reduces that chain to a single conversion, from AC to DC, performed when power enters the data center, after which DC flows directly to the racks. The approach is seen as a way to get more power into the server hall to meet the needs of future generations of AI hardware, which are likely to require much larger amounts of power than are currently available in data centers.

  ## What Envision has built

  Envision's deployed system combines three components: solid-state transformers (SSTs), battery energy storage (BESS), and equipment that adjusts the DC voltage to levels required by the computing hardware. The SST converts 10 kilovolt (kV) medium-voltage AC from the grid to an 800VDC busbar (a common electrical distribution rail) that serves the server hardware directly.

  An Open Compute Project (OCP) white paper on 800VDC architecture, published earlier this year, proposed using a busbar, cables, or a mixture of the two to transmit power at that voltage to servers.

  A controller Envision calls Dubhe, backed by the company's own foundation AI model also named Dubhe Energy, coordinates the transformers and batteries in real time to match power supply with computing demand and to manage sudden load swings.

  Kevin Huang, senior vice president of Envision Energy and president of energy storage and AIDC Power Systems, said in a statement: "Our integrated 800VDC system is now powering live computing workloads, demonstrating an end-to-end architecture that connects renewable energy supply with computing demand. This is a critical step in turning power-compute coordination from a strategic vision into an operational reality."

  ## The Galaxy AI data center

  The Galaxy AI data center will span 120,000 square meters (1.2 million square feet) when complete. Its planned power capacity is 3 gigawatts (GW). The facility is designed to support up to one million AI accelerators, though the type of hardware currently installed has not been disclosed. According to Envision, the data center runs on 80 percent renewable energy.

  ## Industry context and competing approaches

  Many companies are working on SSTs that are likely to come to market in the next year, according to Data Center Dynamics. Microsoft and Meta have proposed through the OCP designs for the Mount Diablo rack, which includes a power sidecar enabling 400VDC to reach its servers.

  The significance for the industry is that 800VDC architecture has, to the extent Envision's claim holds, moved from white papers and laboratory work into production infrastructure. Whether it can operate reliably at scale, and how readily the supporting components reach the broader market, will determine how quickly other operators can follow.

  Envision aims to bring 5GW of green data center capacity online by 2030 through its Mission Gobi initiative.

  ## Envision's background

  Envision was founded in 2007 as a wind turbine manufacturer. The company says it has installed 100GW of wind turbines in total, with 20GW installed globally in 2025.
body_zh: |
  ## 遠景能源宣稱在中國烏蘭察布運行全球首座800VDC資料中心

  綠能科技企業遠景能源宣稱，正在其位於中國內蒙古烏蘭察布的「星雲AI」資料中心，以全球首套商業化800伏特直流電（800VDC）電力系統執行正式運算工作負載。報導此事的《Data Center Dynamics》表示，目前未知全球其他資料中心有採用800VDC架構的案例。

  星雲AI資料中心於今年8月正式開幕。遠景能源目前尚未揭露該設施內800VDC系統的實際規模。

  ## 800VDC與傳統電力架構的差異

  傳統資料中心的供電路徑須經歷多道能源轉換：來自電網的交流電（AC）先轉換為直流電（DC），供設施的電池或不斷電系統（UPS）使用，接著再轉回交流電以輸送至IT機架，最後再一次轉換為直流電，才能供應伺服器硬體及其元件所需的電力。

  800VDC架構則將這整條轉換鏈縮減為單一步驟：電力進入資料中心時，直接從交流電轉換為直流電，此後直流電便可直接輸送至機架。業界普遍認為，這種做法有助於為機房導入更大量的電力，以滿足未來世代AI硬體的需求——這些硬體所需的電力，很可能遠超目前資料中心所能提供的水準。

  ## 遠景能源建置的系統

  遠景能源部署的系統整合了三項核心元件：固態變壓器（SST）、電池儲能系統（BESS），以及將直流電壓調整至運算硬體所需電壓等級的設備。固態變壓器負責將電網輸入的10千伏（kV）中壓交流電，轉換為直接供應伺服器硬體的800VDC匯流排。

  開放運算專案（OCP）今年稍早發布的一份800VDC架構白皮書，建議採用匯流排、電纜或兩者混合的方式，以該電壓向伺服器傳輸電力。

  遠景能源研發的控制器「北斗」（Dubhe），搭配公司自家同名基礎AI模型「北斗能源」（Dubhe Energy），能夠即時協調固態變壓器與電池的運作，使電力供應與運算需求保持同步，並應對突如其來的負載波動。

  遠景能源高級副總裁、儲能暨AI資料中心電力系統事業部總裁黃克南在聲明中表示：「我們整合式的800VDC系統現已為正式運算工作負載供電，展示了一套端到端的架構，將再生能源供應與運算需求緊密串聯。這是將電力與運算協同調度從戰略願景化為實際運營的關鍵一步。」

  ## 星雲AI資料中心

  星雲AI資料中心建成後將占地12萬平方公尺（約120萬平方英尺），規劃電力容量達3吉瓦（GW）。該設施設計支援多達100萬顆AI加速器，但目前已安裝的硬體種類尚未對外公布。據遠景能源表示，該資料中心以80%的再生能源驅動運作。

  ## 產業背景與競爭方向

  據《Data Center Dynamics》指出，目前已有多家企業正在研發固態變壓器，預計將於未來一年內陸續推出商業化產品。微軟與Meta則透過OCP，共同提出了「Mount Diablo」機架的設計方案，該方案包含一個電力側車模組，可為伺服器提供400VDC電力。

  就產業意義而言，若遠景能源的主張屬實，800VDC架構已從白皮書與實驗室研究階段，正式進入生產基礎設施的實際運作。這套架構能否在大規模部署下穩定運行，以及相關支援元件能否順利進入廣大市場，將決定其他業者能以多快的速度跟進導入。

  遠景能源的「戈壁使命」（Mission Gobi）計畫，目標是在2030年前將旗下綠色資料中心容量擴大至5GW。

  ## 遠景能源的背景

  遠景能源成立於2007年，最初以風力發電機製造商起家。該公司表示，迄今累計安裝了100GW的風力發電機，其中2025年在全球的安裝量達20GW。
date: "2026-11-03"
source_published: "2026-11-02T17:18:00.000Z"
category: "power"
secondary_categories: ["compute"]
region: ["China"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: Envision claims to be running the world's first 800VDC data center in Ulanqab, China (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/news/envision-claims-to-be-running-the-worlds-first-800vdc-data-center-in-ulanqab-china/"
    title: "Envision claims to be running the world's first 800VDC data center in Ulanqab, China"
    trust: 3
    type: primary
    published_at: "2026-11-02T17:18:00.000Z"
---
