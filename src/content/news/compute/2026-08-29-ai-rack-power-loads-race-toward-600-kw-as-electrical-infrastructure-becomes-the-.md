---
title_en: "AI rack power loads race toward 600 kW as electrical infrastructure becomes the binding constraint"
title_zh: "AI機架用電急奔600千瓦，供電基礎設施成最大瓶頸"
summary_en: "AI training rack power requirements are rising from 142 kW today toward roughly 600 kW by 2027. Industry executives and survey data identify power delivery infrastructure, not cooling, as the primary constraint on how dense AI compute can become."
summary_zh: "AI訓練機架的用電需求正從當今的142千瓦，快速攀升至2027年的約600千瓦。業界高層與調查數據均指出，限制AI算力密度提升的主因是供電基礎設施，而非冷卻系統。"
body_en: |
  The power requirements for artificial intelligence server racks are on course from 142 kilowatts today to roughly 600 kilowatts by 2027, and power delivery infrastructure, not cooling, is now the primary limit on how dense AI compute can become, according to Nvidia hardware specifications, Uptime Institute survey data, and data center industry executives.

  ## The gap between standard enterprise racks and AI hardware

  The contrast between ordinary data center racks and AI training hardware is wide and growing. The "modal rack density," defined as the most frequently reported power draw per rack across data centers, reached 11 kilowatts (kW) in 2026, up from 9 kW in 2025, according to Uptime Institute's 16th Annual Global Data Center Survey. That figure describes a typical enterprise server room.

  AI training racks operate in a separate power category. Nvidia's GB300 NVL72, the dominant platform for AI training clusters through 2025 and early 2026, requires up to 142 kW per rack, according to Nvidia's NVL72 AI Factory reference architecture. Nvidia's newer Vera Rubin NVL72 entered full production in June 2026 and is scheduled to ship to cloud providers this fall. Nvidia has not published an official power figure for the Vera Rubin; trade-press supply chain reports place the draw between 190 kW and 230 kW. The company's next platform, the Rubin Ultra NVL576 "Kyber" rack, is already specified at roughly 600 kW for the second half of 2027.

  ## Air cooling reaches its effective limit

  For years, heat removal defined the practical limit on rack density. Air cooling becomes impractical above roughly 50 kW per rack, according to Uptime Institute, because fans cannot move enough air to offset the thermal load at higher power levels.

  Direct-to-chip liquid cooling, in which coolant circulates through cold plates mounted on processors, now handles 100 to 150 kW per rack. It has become the dominant liquid cooling method, holding 55 percent of the market as of 2026, according to Schneider Electric.

  Two-phase immersion cooling, in which servers are submerged in a fluid that boils on contact with hot surfaces and recondenses to carry away heat, was once considered the endpoint for extreme densities. Adoption slowed after restrictions on PFAS chemicals (per- and polyfluoroalkyl substances, a class of synthetic compounds used as coolants) reduced fluid supply. A replacement coolant was qualified in early 2026, though the regulatory outcome is not expected to be resolved until 2027.

  A more experimental technology is in-chip microfluidics. In September 2025, Microsoft and Swiss startup Corintis reported laboratory results showing that microchannels etched directly into a chip removed heat up to three times more effectively than a standard cold plate. "Microfluidics is the one I would still call 'roadmap talk.' The science is proven, but mainstream deployment is still a few years off," said Omkar Nimbalkar, vice president of multi-vendor support services at IBM.

  ## Power delivery as the binding limit

  With cooling addressed through liquid methods at current densities, power delivery has become the tighter constraint. "The biggest misconception about what's limiting density is that it's capped by the number of GPUs per chassis, or that it's a cooling issue that you solve with bigger fans," said Joseph Wolff, founder and CTO of eRacks Systems.

  The limits in practice are electrical. "People benchmark density against chip specs when, in practice, it's bounded by electrical engineering and failure planning," said Nimbalkar.

  Legacy 54-volt DC (direct current) power distribution, the standard in most existing facilities, reaches a physical ceiling above roughly 200 kW per rack, at which point the copper conductors required to carry the current become too thick and heavy to build practicably. A standard power distribution unit (PDU) handles about 20 kW in a double-redundant configuration, Nimbalkar noted, while individual servers draw up to 6 kW each. "The design question is never how many GPUs you can buy, but how many you can safely run if a power supply fails," he said.

  Chip vendors have adapted by offering the same processor at different power envelopes. "The real limit is the power and thermal budget per box, and it's set by the GPUs themselves," Wolff said. "Nvidia sells the same 96GB RTX PRO 6000 Blackwell as a 600 W part and as a 300 W Max-Q part — that second SKU exists because eight 600 W cards in one 4U is a 5 kW-class thermal problem most air-cooled rooms can't feed or exhaust."

  ## Higher voltages and disaggregated power

  Several responses to the power delivery problem are advancing from pilot to commercial deployment. Vera Rubin NVL72 already ships with 800-volt DC (VDC) power architecture, bypassing the copper limitations of legacy 54 VDC systems. Vertiv, Schneider Electric, Eaton, and Delta have commercial 800 VDC product lines planned for the second half of 2026. Foxconn's 40 megawatt (MW) Kaohsiung-1 data center in Taiwan is being built for 800 VDC operation.

  Commercial availability does not equal widespread adoption. "Ultimately, we're asking organizations to digest a generation's worth of change in 18 to 24 months," said Chris Butler, president of embedded and critical power at Flex.

  A parallel structural approach involves separating power delivery infrastructure from compute racks. The Open Compute Project's Mount Diablo initiative, an industry-led effort to define open specifications for disaggregated power delivery, reached a finalized 0.7.0 specification in March 2026. Microsoft and Meta demonstrated working hardware built to that specification in July 2026. The approach allows facilities to scale electrical capacity independently of the rack infrastructure it serves.

  ## Grid connections lag behind AI power demand

  Even where rack-level power architecture advances, access to utility grid power presents a broader constraint. As of the end of 2025, more than 2,060 gigawatts (GW) of generation and storage capacity were waiting in US utility interconnection queues, according to Lawrence Berkeley National Laboratory's Queued Up report.

  "In many markets, the constraint isn't demand or access to GPUs — it's how quickly you can actually get enough power from the grid," said Christopher Miglino, CEO of Axe Compute. More operators are building on-site and behind-the-meter generation as an alternative to utility timelines. "The number I pay more attention to isn't necessarily how many megawatts a campus has on paper. It's how much of that power you can actually deliver, cool, and operate reliably," Miglino said.

  ## Failure risk grows with rack density

  Higher density concentrates failure risk. A component fault in a 600 kW rack removes substantially more compute than the same fault in a lower-density rack. Firmware-level detection and automated throttling are one response. "The smarter approach is building in firmware-level failure detection that can throttle a rack down in seconds, which allows you to run denser than a conservative static number would normally allow," Nimbalkar said.

  Nvidia's Rubin Ultra NVL576 "Kyber" rack, specified at roughly 600 kW, is scheduled for the second half of 2027.
body_zh: |
  根據輝達硬體規格、Uptime Institute調查數據，以及資料中心業界高層的說法，人工智慧伺服器機架的用電需求，將從目前的142千瓦（kW）在2027年前攀升至約600千瓦。在液態冷卻技術解決了當前密度下的散熱問題後，供電基礎設施已取代冷卻，成為制約AI算力密度的核心瓶頸。

  ## 一般企業機架與AI硬體之間的鴻溝

  一般資料中心機架與AI訓練硬體之間的差距，既大且持續擴大。根據Uptime Institute第16屆年度全球資料中心調查，「眾數機架密度」——即各資料中心最常回報的每機架用電量——2026年已達11千瓦，較2025年的9千瓦上升。這個數字反映的是一般企業伺服器機房的現況。

  AI訓練機架則屬於截然不同的用電等級。根據輝達NVL72 AI工廠參考架構，輝達GB300 NVL72是2025年至2026年初AI訓練叢集的主流平台，每機架最高需要142千瓦。輝達較新的Vera Rubin NVL72已於2026年6月正式量產，並預計於今年秋季向雲端服務供應商出貨。輝達尚未正式公布Vera Rubin的用電數據，業界供應鏈報導指其耗電量介於190千瓦至230千瓦之間。該公司下一代平台Rubin Ultra NVL576「Kyber」機架，已規格化為2027年下半年約600千瓦的用電量。

  ## 氣冷散熱達到實際極限

  多年來，散熱能力一直是機架密度的實際上限。根據Uptime Institute，氣冷散熱在每機架約50千瓦以上便趨於不切實際，因為風扇無法在更高功率下輸送足夠的氣流來抵消熱負荷。

  直接對晶片液態冷卻（direct-to-chip liquid cooling）——即冷卻液透過安裝在處理器上的冷板循環散熱——目前可處理每機架100至150千瓦的熱負荷。根據施耐德電氣的資料，這種技術已成為液態冷卻的主流方式，截至2026年占有55%的市場份額。

  兩相浸沒式冷卻（two-phase immersion cooling）——即將伺服器浸入一種與熱表面接觸後會沸騰、再冷凝以帶走熱量的液體中——曾被視為極高密度應用的終極解決方案。然而，由於對PFAS化學物質（全氟及多氟烷基物質，一類用作冷卻劑的合成化合物）的限制減少了液體供應，其普及速度有所放緩。替代冷卻液已於2026年初完成認證，但法規層面的最終定案預計要到2027年才能確定。

  另一種更具實驗性的技術是晶片內微流體（in-chip microfluidics）。2025年9月，微軟與瑞士新創公司Corintis共同發表實驗室成果，顯示直接蝕刻在晶片內的微通道，其散熱效率比標準冷板高出三倍。IBM多供應商支援服務副總裁Omkar Nimbalkar表示：「微流體技術是我仍會稱之為『路線圖願景』的東西。科學已經得到驗證，但主流部署還需要幾年時間。」

  ## 供電基礎設施成為核心瓶頸

  隨著液態冷卻解決了當前密度下的散熱問題，供電基礎設施已成為更緊迫的制約。eRacks Systems創辦人暨技術長Joseph Wolff表示：「關於限制密度的最大誤解，在於認為上限是每機箱的GPU數量，或者以為問題出在冷卻上，只要換上更大的風扇就能解決。」

  實際上的限制是電氣工程層面的。Nimbalkar說：「人們習慣用晶片規格來衡量密度上限，但實際上，它受制於電氣工程與故障規劃。」

  現有設施普遍採用的54伏特直流（DC）配電標準，在每機架約200千瓦以上會碰到物理上的天花板——此時承載電流所需的銅導體，厚度與重量將大到難以實際施工。Nimbalkar指出，標準配電單元（PDU）在雙重冗餘配置下約可處理20千瓦的負載，而單台伺服器最高可消耗6千瓦的電力。他說：「設計上的核心問題從來不是你能買多少GPU，而是當某個電源供應器故障時，你能安全運行多少台。」

  晶片廠商已因應現實，提供相同處理器的不同功耗版本。Wolff表示：「真正的限制是每台機箱的電力與散熱預算，這由GPU本身決定。輝達將同樣的96GB RTX PRO 6000 Blackwell分為600瓦版本與300瓦Max-Q版本出售——第二種SKU的存在，是因為在一台4U機箱內放入八張600瓦顯示卡，會形成約5千瓦等級的散熱問題，而大多數氣冷機房既無法供電、也無法排熱。」

  ## 高壓配電與分散式供電架構

  針對供電問題的幾種解決方案，正從試驗階段邁向商業部署。Vera Rubin NVL72已搭載800伏特直流（VDC）電源架構出貨，繞過了傳統54 VDC系統的銅導體限制。Vertiv、施耐德電氣、伊頓（Eaton）與台達電子（Delta）均計畫於2026年下半年推出800 VDC商業產品線。鴻海位於台灣高雄、容量達40百萬瓦（MW）的Kaohsiung-1資料中心，正是按照800 VDC規格興建。

  然而，商業產品上市並不等同於廣泛普及。Flex嵌入式與關鍵電源事業部總裁Chris Butler表示：「說到底，我們是在要求各組織在18至24個月內消化一個世代的變革。」

  另一種結構性的平行方案，是將供電基礎設施與算力機架分離。開放計算計畫（Open Compute Project）的Mount Diablo計畫——一項旨在制定分散式供電開放規範的業界主導行動——已於2026年3月完成0.7.0最終版規範的制定。微軟與Meta於2026年7月展示了依據該規範打造的實際硬體。這種方案讓設施得以獨立於所服務的機架基礎設施，單獨擴充電力容量。

  ## 電網連線速度跟不上AI用電需求

  即便機架層級的電源架構持續進步，取得電力公用事業的電網供電仍是更大的制約。根據勞倫斯柏克萊國家實驗室（Lawrence Berkeley National Laboratory）的《Queued Up》報告，截至2025年底，超過2,060吉瓦（GW）的發電與儲能容量，正在等待美國公用事業電網互聯的排隊申請。

  Axe Compute執行長Christopher Miglino表示：「在許多市場，制約因素既非需求，也非GPU的取得管道，而是實際上能從電網獲取足夠電力的速度。」愈來愈多業者選擇自建場地端、電表後端（behind-the-meter）的發電設施，作為繞過電力公司建置時程的替代方案。Miglino說：「我更在意的數字，不一定是某個園區名義上有多少百萬瓦，而是那些電力實際上有多少能夠被穩定供應、有效冷卻，並可靠地持續運行。」

  ## 機架密度越高，故障風險越集中

  密度提升也使故障風險更加集中。一台600千瓦機架發生元件故障，所喪失的算力遠遠多於同樣故障發生在低密度機架上。韌體層級的偵測與自動降載（throttling）是因應方式之一。Nimbalkar表示：「更聰明的做法是在韌體層面建立故障偵測機制，能在數秒內將機架降載——這樣你就能以比保守靜態數值通常允許的更高密度來運行。」

  輝達的Rubin Ultra NVL576「Kyber」機架規格約為600千瓦，預計於2027年下半年推出。
date: "2026-08-29"
source_published: "2026-08-28T09:00:00.000Z"
category: "compute"
secondary_categories: ["cooling", "power"]
region: []
vendor: ["Eaton", "Foxconn", "Nvidia", "Schneider Electric", "Vertiv"]
trust:
  score: 3
  reasoning: "Single source: AI Rack Density’s Real Limits: Power, Cooling, Failure Risk (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/ai-data-centers/ai-rack-density-s-real-limits-power-cooling-failure-risk"
    title: "AI Rack Density’s Real Limits: Power, Cooling, Failure Risk"
    trust: 3
    type: primary
    published_at: "2026-08-28T09:00:00.000Z"
---
