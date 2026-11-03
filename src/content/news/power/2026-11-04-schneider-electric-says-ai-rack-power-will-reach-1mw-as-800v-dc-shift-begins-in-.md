---
title_en: "Schneider Electric says AI rack power will reach 1MW as 800V DC shift begins in 2027"
title_zh: "施耐德電氣：AI機架用電將達1MW，2027年啟動800V直流架構"
summary_en: "AI rack power densities will more than double — from roughly 400 kilowatts to at least one megawatt per rack — as data centres adopt 800-volt direct current architectures beginning in 2027, Schneider Electric's chief AI advocate said. Hyperscalers will receive the first allocations alongside NVIDIA's Rubin Ultra platform, with colocation providers and neoclouds expected to follow."
summary_zh: "施耐德電氣首席AI倡導者史帝夫·卡利尼（Steve Carlini）表示，隨著資料中心自2027年起導入800伏特直流電力架構，AI機架功率密度將從約400千瓦倍增至至少1百萬瓦；超大規模業者將率先隨輝達Rubin Ultra平台取得首批配額，主機代管業者與新興雲端業者預計隨後跟進。"
body_en: |
  AI rack power densities are set to more than double — from roughly 400 kilowatts (kW) to at least one megawatt (MW) per rack — as data centres adopt 800-volt (V) direct current (DC) power architectures beginning in 2027, according to Steve Carlini, chief AI advocate at Schneider Electric.

  Carlini made the remarks in an interview with Capacity, saying the transition will arrive alongside NVIDIA's Rubin Ultra GPU platform. Hyperscalers, who will hold initial allocations of Rubin Ultra systems, will be first to adopt the architecture. Colocation providers and neoclouds are expected to follow, though Carlini said probably not within the first year.

  ## Why power architecture has to change

  The shift to 800V DC is a response to the physical limits of conventional alternating current (AC) distribution systems. "We were running out of room for the size of the copper to be able to power each server," Carlini told Capacity.

  The proposed fix removes power supplies from individual servers and consolidates them in a dedicated sidecar unit — which Schneider brands its NetShelter power rack — that also holds batteries and capacitors to absorb the sharp fluctuations in power draw produced by GPU clusters. With power conversion moved out of the compute racks, those racks can be packed more densely with server boards and GPUs. "The way AI operates, you want to put the GPUs physically as close together as possible," Carlini said. "That's what's driving the densification."

  There will not be a single 800V DC standard, he said. NVIDIA's architecture operates from 0V to 800V, while the Mt Diablo specification — a project Schneider is developing with Google through the Open Compute Project (OCP), an industry consortium for open hardware standards — uses plus and minus 400V. Battery and capacitor configurations also differ between designs. "There's not one 800V DC solution that's going to fit everybody," Carlini said.

  Schneider publishes reference designs for each new NVIDIA cluster approximately six months before launch, giving operators lead time to plan facility-level power and cooling infrastructure.

  ## Behind-the-meter power at gigascale campuses

  On the largest US data centre developments, grid connections are increasingly insufficient to meet demand. Carlini said gigascale campuses are sourcing between 50% and 100% of their electricity from on-site or adjacent generation. "They just can't get the power from the grid," he said.

  Schneider is meeting that demand through what it calls energy parks, built primarily around natural gas turbines. Because 50MW turbines — each capable of powering a substantial portion of a large campus — are more readily available than larger units, developers are combining them in parallel to create 200MW generation blocks. Schneider supplies the switchgear and control software for these installations but does not manufacture the turbines themselves.

  Carlini said demand shows little sign of slowing. Schneider has secured supply chain agreements with hyperscalers, neoclouds and large colocation providers covering switchgear, uninterruptible power supply (UPS) systems, busways and power distribution equipment. "Their next two to three years, they've secured capacity," he said.

  He described the current period as a year of transition for AI, with training and scientific research workloads still consuming significant capacity while inference — the process of running trained models to generate outputs, and the stage at which AI companies begin to earn revenue — expands. Enterprises are also moving models from pilot into production. Carlini expects compute demand to keep growing as fast as supply allows for the next two to three years.

  ## Community opposition and the end of covert development

  Community opposition has become one of the most-cited constraints on new data centre construction, particularly in Texas, where residents have pushed back over water use and siting decisions. Carlini said both operators and the local authorities that granted permits share responsibility for past mistakes. "There's definitely been some mistakes made," he said, noting that some sites were approved very close to residential areas.

  Many projects were developed under code names and through shell companies, which Carlini attributed mainly to competitive secrecy rather than deliberate concealment from residents — but the effect was the same. Communities frequently learned of incoming facilities only once construction had begun.

  Carlini said that approach is no longer viable. Operators will need to disclose noise levels, power consumption and sourcing, and water use and sourcing before permits are granted, and win local approval in advance. "It's not acceptable to tap into the town's water supplies," he said. "It's not acceptable for the data centres to drive up utility prices for local residents."

  Traffic and noise are the two most common complaints, he said. Rising US electricity prices add to public pressure, though Carlini said data centres are not the primary driver of those increases and are an easy target for residents struggling with bills.

  Operators are increasingly planning to generate surplus power that could eventually be shared with local grids and communities, Carlini said, a step he suggested could help shift the public narrative around large campuses.

  ## Liquid cooling and a shift away from water-intensive systems

  Carlini pointed to a major reduction in data centre water consumption enabled by liquid cooling advances. NVIDIA's Rubin systems are designed to operate with liquid cooling fluid at 45 degrees Celsius (113 degrees Fahrenheit), higher than earlier GPU generations.

  At that temperature, many new liquid-cooled facilities can rely on dry coolers — which reject heat directly to the air without consuming water — for most or all of the year depending on climate, rather than chillers. Evaporative cooling systems and water-spray assists can be removed, and mechanical compression minimised. "You're going to see a dramatic shift in water use in data centres going forward with liquid cooling," Carlini said.

  Operators are also moving away from municipal drinking water supplies, instead recycling wastewater and treating it to the standard required for use in cooling loops. "It's a whole changing paradigm in the cooling architecture for data centres," he said.

  ## UK grid queue and the European picture

  The UK is frequently cited as lagging in AI infrastructure. Carlini said the more significant issue is the size of its grid connection backlog, but argued that much of the queued capacity may be speculative rather than representing genuine committed projects. He pointed to proposed measures that would require developers to pay to hold their place in the connection queue, which he said would remove projects that are not real.

  Combined with designated areas of the country that have available power, Carlini said the UK is better positioned than the rest of Europe to accelerate deployment. "The UK is in a position that they can move faster," he said. Across wider Europe, he said intent to develop AI infrastructure is clear, but regulation remains a constraint.

  ## Prefabrication as the underrated technology

  Asked which technology will be mainstream by the end of 2027, Carlini named prefabrication — factory-built power and cooling modules shipped to sites and installed while facility construction runs in parallel. Schneider has offered prefabricated data centre systems for 20 years, he said, and attributed wider industry attention to a recent keynote by NVIDIA CEO Jensen Huang.

  The case for prefabrication, Carlini said, is speed, predictability and quality. Rack densities are changing quickly enough that on-site construction struggles to keep pace, while factory production allows facility-level work to proceed simultaneously.

  Schneider also offers prefabricated IT pods designed and tested for specific NVIDIA and AMD Helios GPU cluster configurations. The pods ship flat-packed and can be assembled two storeys high. "We've seen an exponential increase in our business with prefabrication," Carlini said.

  Carlini said faster utility grid connection queues could become a tipping point for deployment rates toward the end of 2027.
body_zh: |
  AI機架功率密度預計將大幅躍升——從目前約400千瓦（kW）倍增至至少1百萬瓦（MW）——隨著資料中心自2027年起導入800伏特（V）直流電（DC）電力架構。以上預測來自施耐德電氣（Schneider Electric）首席AI倡導者史帝夫·卡利尼（Steve Carlini）。

  卡利尼在接受《Capacity》專訪時表示，這波轉型將伴隨輝達（NVIDIA）Rubin Ultra GPU平台的推出而來。持有Rubin Ultra系統初期配額的超大規模業者（hyperscaler）將率先採用這套架構。主機代管業者（colocation provider）與新興雲端業者（neocloud）預計跟進，但卡利尼表示，可能不會在第一年內到位。

  ## 為何電力架構必須轉變

  轉向800V直流電，是為了回應傳統交流電（AC）配電系統的物理極限。「我們已經沒有空間再加粗銅線來為每台伺服器供電，」卡利尼告訴《Capacity》。

  解決方案是將電源供應器從個別伺服器中移除，集中至一個專用側邊機櫃單元——施耐德稱之為NetShelter電力機架（power rack）——該單元同時配備電池與電容，用以吸收GPU叢集運作時產生的劇烈功率波動。將電力轉換移出運算機架後，這些機架便能更密集地容納伺服器主板與GPU。「AI的運作方式，就是要讓GPU在實體上盡可能靠在一起，」卡利尼說，「這正是推動高密度化的原動力。」

  他表示，800V直流電並不會有單一標準。輝達的架構運作電壓為0V至800V，而施耐德與Google透過開放計算計畫（OCP，一個推動開放硬體標準的產業聯盟）共同開發的「Mt Diablo」規格，則採正負400V設計。電池與電容的配置在不同方案之間也各有差異。「不會有一套800V直流解決方案能適合所有人，」卡利尼說。

  施耐德會在每款新輝達叢集上市前約六個月發布參考設計，讓業者有充裕的前置時間，規劃設施層級的電力與冷卻基礎設施。

  ## 大型園區的表後電力

  在美國規模最大的資料中心開發案中，電網連線容量愈來愈難以滿足需求。卡利尼表示，超大型園區有50%至100%的電力來自場址內或鄰近的自建發電設施。「他們就是從電網拿不到足夠的電，」他說。

  施耐德透過所謂的「能源園區」（energy park）來滿足這項需求，主要以天然氣渦輪機為核心。由於50MW渦輪機的取得管道比大型機組更為暢通——每台能為大型園區提供相當可觀的電力——開發業者便將多台並聯，組成200MW的發電區塊。施耐德負責提供這些設施所需的開關設備與控制軟體，本身不生產渦輪機。

  卡利尼表示，需求仍看不到緩和跡象。施耐德已與超大規模業者、新興雲端業者及大型主機代管業者簽訂供應鏈協議，涵蓋開關設備、不斷電系統（UPS）、母線槽（busway）及電力分配設備。「他們未來兩到三年的容量都已確保，」他說。

  他將當前階段描述為AI的過渡之年——訓練與科學研究工作負載仍佔用相當大的容量，同時推論（inference，即執行訓練完成的模型以產生輸出的過程，也是AI公司開始創造營收的階段）正快速擴張。企業也正將模型從試驗階段推進至正式生產環境。卡利尼預期，未來兩到三年內，運算需求的成長速度將持續與供給能力相當。

  ## 社區反彈與隱密開發的終結

  社區反對聲浪已成為新建資料中心最常被提及的制約因素之一，尤其在德州，居民因用水問題及選址決策而強烈抗議。卡利尼表示，業者與當初核發許可的地方主管機關，對過去的失誤都負有責任。「確實犯了一些錯，」他說，並指出部分選址距離住宅區過近，仍獲得核准。

  許多開發案以代號進行、透過空殼公司推動，卡利尼將此主要歸因於商業競爭的保密需求，而非刻意向居民隱瞞——但實際效果並無二致。社區往往在施工動工後才得知設施即將進駐。

  卡利尼表示，這種做法已不再可行。業者在申請許可前，必須揭露噪音水準、電力消耗與來源，以及用水量與來源，並事先取得地方認可。「接入城鎮供水系統是不被接受的，」他說，「資料中心拉高當地居民電費，同樣是不被接受的。」

  交通與噪音是最常見的兩大民怨。美國電費持續上漲更加劇了公眾壓力，不過卡利尼表示，資料中心並非電費漲價的主要驅動因素，只是讓荷包吃緊的居民容易遷怒的對象。

  卡利尼表示，業者正逐漸規劃生產剩餘電力，未來有望分享給當地電網與社區，他認為這一步可能有助於扭轉外界對大型園區的觀感。

  ## 液冷技術與減少耗水

  卡利尼指出，液冷技術的進步已大幅降低資料中心的耗水量。輝達Rubin系統設計能在攝氏45度（華氏113度）的液冷流體溫度下正常運作，高於前一世代GPU的規格。

  在這個溫度下，許多新建液冷設施大部分甚至全年時間，都能依賴乾式冷卻器（dry cooler）——直接將熱量散逸至空氣中、無需消耗水資源——而無須仰賴冷水機，視氣候條件而定。蒸發冷卻系統與噴水輔助設備可以移除，機械壓縮也可降至最低。「液冷將帶來資料中心用水方式的根本性轉變，」卡利尼說。

  業者也正逐步捨棄市政自來水，改為回收廢水並處理至符合冷卻迴路使用標準的水質。「這是資料中心冷卻架構的全面典範轉移，」他說。

  ## 英國電網排隊問題與歐洲現況

  英國常被認為在AI基礎設施方面落後。卡利尼表示，更關鍵的問題在於其電網連線申請的積壓規模，但他認為，排隊等候的容量中，有相當一部分可能只是投機性申請，未必代表真正已確定的計畫。他提及擬議中的措施——要求開發業者繳費才能保住排隊名次——並表示此舉將淘汰那些不具實質性的申請案。

  結合國內已有可用電力的特定區域，卡利尼認為英國比其他歐洲國家更有能力加速部署。「英國有條件走得更快，」他說。至於更廣泛的歐洲地區，他表示，開發AI基礎設施的意願明確，但法規仍是制約因素。

  ## 預製化：被低估的關鍵技術

  被問及2027年底前哪項技術將成為主流時，卡利尼點名了預製化（prefabrication）——即在工廠預先製造電力與冷卻模組，運至現場安裝，同時讓設施建設工程並行推進。施耐德提供預製資料中心系統已有20年歷史，卡利尼將近期產業廣泛關注此議題，歸因於輝達執行長黃仁勳（Jensen Huang）在一場主題演講中的倡議。

  卡利尼表示，預製化的優勢在於速度、可預期性與品質。機架密度的變化之快，使現場施工難以跟上腳步，而工廠生產模式則允許設施層級的工程同步進行。

  施耐德也提供預製IT機房模組（IT pod），針對特定輝達與AMD Helios GPU叢集配置進行設計與測試。這些模組以平放方式出貨，可組裝成兩層樓高的結構。「我們在預製化業務上看到了指數級的成長，」卡利尼說。

  卡利尼表示，公用電網連線排隊若能加速，可能在2027年底前成為推動部署速度的轉捩點。
date: "2026-11-04"
source_published: "2026-11-03T15:32:10.000Z"
category: "power"
secondary_categories: ["cooling"]
region: ["United Kingdom"]
vendor: ["AMD", "Nvidia", "Schneider Electric"]
trust:
  score: 3
  reasoning: "Single source: From 400kW to 1MW per rack: Schneider Electric’s Steve Carlini on the next phase of AI infrastructure (trust 3/5)."
sources:
  - url: "https://capacityglobal.com/news/schneider-electric-steve-carlini-interview/"
    title: "From 400kW to 1MW per rack: Schneider Electric’s Steve Carlini on the next phase of AI infrastructure"
    trust: 3
    type: primary
    published_at: "2026-11-03T15:32:10.000Z"
---
