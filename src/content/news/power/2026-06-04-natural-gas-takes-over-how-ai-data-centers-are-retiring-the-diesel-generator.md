---
title_en: "Natural Gas Takes Over: How AI Data Centers Are Retiring the Diesel Generator"
title_zh: "天然氣全面接管：AI資料中心如何讓柴油發電機走入歷史"
summary_en: "Facing tougher emissions permits and insatiable power demand, AI data center builders are replacing diesel backup with natural gas engines and turbines — deploying them not just for emergencies but as the primary power source itself."
summary_zh: "面對日趨嚴格的排放許可與難以餍足的電力需求，AI資料中心業者正以天然氣引擎與渦輪機全面取代柴油備用電源——且不只用於緊急應急，更直接做為園區的主要供電來源。"
body_en: |
  ## A 2,250-Acre Bet on Gas

  Somewhere on a 2,250-acre parcel in West Virginia, a company called American Intelligence & Power Corp. is planning to build the Monarch Compute Campus — and it will not have a single diesel generator running the show. Instead, the site will draw its power from Caterpillar's Cat G3516 Fast Response natural gas generator sets, enough of them to supply 2 gigawatts of electricity. To put that in context, a single gigawatt is roughly enough to power a mid-sized American city. Caterpillar has already secured the order. The site, according to plans, could eventually add another 6 gigawatts.

  That order — 2 GW from a single customer, with room to grow to 8 GW — is not an anomaly. It is a signal that the power infrastructure calculus for artificial intelligence data centers has changed fundamentally, and that the diesel generator, long the unquestioned workhorse of backup power, is being retired in favor of natural gas.

  The shift is being driven from two directions at once: regulators are squeezing diesel out, and AI developers are demanding so much power, so quickly, that natural gas has become not just a backup fuel but the primary one.

  ## Why Diesel Is Losing Ground

  The diesel generator earned its place in the data center decades ago through sheer reliability. When the grid fails, a diesel gen-set starts fast, runs hard, and keeps the servers alive. That reputation still holds. But the world around diesel has changed.

  The U.S. Environmental Protection Agency's Tier 4 standards for nonroad engines set strict limits on nitrogen oxides and particulate matter — the pollutants most directly linked to respiratory harm. New data centers specifying diesel backup now face a harder permitting road. Air quality regulators scrutinize the emissions profile of a proposed installation before they sign off, and natural gas units, which typically achieve lower levels of nitrogen oxides and particulate matter than comparable diesel engines, are increasingly the path of least regulatory resistance. Carbon dioxide intensity per kilowatt-hour can also be lower for natural gas, though that comparison needs to be read alongside how well methane is managed in the upstream gas supply chain.

  Beyond the regulatory environment, there is a practical argument for gas. A study by the National Lab of the Rockies found natural gas generators to be slightly less likely to fail during an outage than their diesel counterparts. And in many parts of the country, the natural gas pipeline network is considered more dependable than maintaining a large diesel fuel supply on-site. When a storm or grid emergency lasts days rather than hours, having pipeline gas flowing beats worrying about fuel trucks getting through.

  Natural gas is also cheaper to run per kilowatt-hour than diesel. That gap matters more than it once did, because the generators are no longer sitting idle. Grid operators and data center developers are increasingly using on-site gas engines to support the broader electricity network during emergencies or peak demand periods — a revenue-generating role that diesel's higher fuel cost made less attractive.

  ## Engines Step Up for Primary Power

  The most consequential shift is not diesel being replaced by gas for backup. It is gas engines being pressed into service as the primary power source.

  AI data centers — sometimes called AI factories — require power on a scale and timeline that the conventional grid connection process cannot always match. Utilities and grid operators face lengthy queues for new interconnections. A hyperscaler that wants to bring a campus online in two years cannot always wait for a transmission upgrade that may not arrive for five. Natural gas reciprocating engines, which can be ordered and installed faster than a new grid connection can be permitted and built, have become the bridge.

  An Ohio project illustrates the scale. It plans to deploy 15 Wärtsilä Energy 18V50SG gas engines — reciprocating engines built by the Finnish power company Wärtsilä — to deliver nearly 300 megawatts of on-site generation. Three hundred megawatts is a large power plant by conventional standards; this project will arrive without waiting for a transmission line.

  The Monarch Campus in West Virginia takes the concept further. The Cat G3516 units Caterpillar is supplying can ramp from zero to full load in approximately seven seconds — a critical capability given the extreme swings in electricity demand that AI workloads create as clusters of graphics processing units spin up and down. Paired with battery energy storage systems, which absorb the sharpest spikes and valleys, the gas engines provide a foundation that the grid alone cannot yet offer at that scale. The generators will run with selective catalytic reduction, a technology that uses a chemical reaction to convert nitrogen oxides into harmless nitrogen and water, to achieve ultra-low emissions and satisfy air permits.

  ## Turbines Fill the Gap — If You Can Get One

  Natural gas turbines occupy different territory in the same landscape. Jet-engine derivatives and industrial combustion turbines, they tend to produce even lower levels of nitrogen oxides, carbon monoxide, and volatile organic compounds than reciprocating engines, though engines use after-treatment systems like SCR and oxidation catalysts to close much of that gap. Turbines are not typically swapped in as one-for-one replacements for diesel backup; instead, they compete with gas engines as prime power sources for campuses that need generation measured in hundreds of megawatts.

  The problem is that everyone wants them at once. Demand from the major turbine manufacturers — GE Vernova, Siemens Energy, and Mitsubishi Power — has pushed lead times to the end of the decade and beyond for some large models. A data center developer who places an order today may be waiting until 2030 or later.

  That backlog has opened a lane for a different approach: smaller turbines mounted on trailers and trucked to the site. Dynamis Power Solutions, for example, offers trailer-mounted natural gas turbines ranging from 8 megawatts to 70 megawatts. Its DT24 Mobile Power Plant delivers 24 megawatts at 13.8 kilovolts — industrial-grade electricity, on wheels. The machines were originally built for remote oil and gas sites that ran on diesel; now they are showing up at data center construction projects. They can be driven in, connected, and used to power early construction and operations, then removed once the permanent grid connection is ready — or kept on-site as backup.

  The Oracle and OpenAI Stargate campus being built in Abilene, Texas, is the most prominent example of turbines at AI scale. The site uses a mix including GE Vernova LM2500XPRESS mobile gas turbines and Solar Turbines Titan 350 units. Abilene's Stargate could eventually span 4 million square feet across eight buildings and consume up to 1.2 gigawatts of power — roughly the output of a large nuclear reactor, committed to a single AI training complex.

  ## Trucking the Fuel When There Is No Pipeline

  Not every site sits next to a natural gas pipeline, but that constraint is increasingly solvable. Certarus, a Houston-based subsidiary of Superior Plus Corp., hauls compressed natural gas — natural gas pressurized and stored in cylinders for road transport — and handles the on-site decompression and pressure regulation that lets it flow into a turbine or engine. At least one major U.S. hyperscale operator is using compressed natural gas trucked in by Certarus while it waits for a permanent pipeline hookup.

  "We are currently supplying gas to over 120 MW of on-site power for data centers and just announced another 135 MW project slated to start in 2027," said Scott Williams, director of industrial sales at Certarus. That 255 megawatts of committed capacity, spread across projects now and near-term, represents a meaningful fraction of a large data center campus — kept alive by trucks rather than buried pipe.

  ## The Steam Turbine Revival

  As gas turbine backlogs lengthen and the clock ticks on power-hungry campuses, some operators are looking even further back in the industrial playbook: steam.

  The basic idea is straightforward. A packaged boiler — a factory-built, pre-engineered unit that arrives with burners, controls, and all supporting equipment ready to install — burns natural gas to generate steam, and that steam drives a turbine to produce electricity. It is older technology than a modern gas turbine, but it comes with a significant advantage in the current market: lead times of around one year, compared to the multi-year waits for large gas turbines.

  "With demand for power so high, a packaged boiler can be used to feed steam to a steam turbine to generate energy at about the same efficiency level as a gas turbine used during peak hours," said Gerardo Lara, vice president of boiler sales at Rentech Boiler Systems in Abilene, Texas. "Steam turbines, too, are likely to be much faster to deliver to a data center than gas turbines in the current market."

  Steam turbine manufacturers including Howden, Siemens Energy, Triveni, and Ebara Elliott have supplied these machines for decades, across nuclear power plants, geothermal fields, combined-cycle gas plants, and concentrated solar installations. Their supply chains are not facing the same strain as the market for large gas turbines. For a developer who needs power in 2026 and cannot wait until 2029, that distinction may determine whether a campus opens on schedule.

  ## Racing to 60 Gigawatts a Year

  The scale of what is coming sharpens the stakes of every choice in this story. "AI data centers will require another 60 GW of new power capacity per year by 2030," said Shen Wang, an analyst at research firm Omdia. Sixty gigawatts annually is an almost incomprehensible figure — roughly the total installed power generation capacity of a country like France, added every year, specifically for AI.

  No single technology fills that gap. Gas engines, gas turbines, mobile turbines on trailers, compressed natural gas on trucks, steam turbines fed by packaged boilers — all of them are being pulled into service simultaneously because the demand is too large and too urgent for any one approach to satisfy. The common thread is that diesel, once the default answer to every backup power question, no longer fits a world where the backup is also the primary and the scale is measured in gigawatts rather than megawatts.

  The next few years will see gas engines and turbines deployed in numbers that would have seemed implausible a decade ago. The data center industry is, in effect, becoming a significant gas infrastructure buildout in its own right — one measured not in miles of pipeline but in megatons of computing capacity, wherever the power can be found and the permits can be won.
body_zh: |
  ## 九百一十公頃土地上的天然氣豪賭

  在西維吉尼亞州一塊約2,250英畝（約910公頃）的土地上，一家名為「美國智能與電力公司」（American Intelligence & Power Corp.）的企業，正計畫興建「君王運算園區」（Monarch Compute Campus）——整座園區將看不到半台柴油發電機的蹤影。取而代之的，是卡特彼勒（Caterpillar）旗下Cat G3516快速響應天然氣發電機組，裝機容量達20億瓦（2 GW）。作為參考，1 GW的電力大約足以供應美國一座中型城市使用。卡特彼勒已確認取得這筆訂單。根據規劃，該園區未來還可能再擴增60億瓦（6 GW）。

  這筆訂單——單一客戶就採購2 GW，且保留擴充至8 GW的空間——絕非個案，而是一個訊號：人工智慧資料中心的電力基礎設施邏輯已從根本上改變，長期以來無可爭議的備用電力主力——柴油發電機——正被天然氣取而代之。

  這場轉變是從兩個方向同步推動的：法規正將柴油擠出市場，而AI開發業者對電力的龐大且迫切需求，已使天然氣不再只是備用燃料，而是成為主要燃料。

  ## 柴油為何節節敗退

  數十年來，柴油發電機憑藉可靠性在資料中心站穩腳跟。電網一旦中斷，柴油機組能快速啟動、全力運轉，護衛伺服器持續上線。這份信賴依然存在。但柴油所處的外部環境已今非昔比。

  美國環保署（EPA）針對非道路引擎訂定的Tier 4排放標準，對氮氧化物與懸浮微粒——與呼吸道危害最直接相關的污染物——設下嚴格上限。新建資料中心若規劃柴油備用電源，如今面臨更艱難的許可申請之路。空氣品質主管機關在核准前，會仔細審查擬建設施的排放狀況，而天然氣機組通常能達到比同等柴油引擎更低的氮氧化物與懸浮微粒排放量，因此愈來愈成為阻力最小的法規選項。天然氣的每千瓦時碳排放強度有時也低於柴油，但這項比較須搭配上游天然氣供應鏈的甲烷管控情況一併評估。

  除了法規環境，天然氣還有實際面的優勢。洛磯山國家實驗室（National Lab of the Rockies）的一項研究發現，天然氣發電機在停電期間的故障率略低於柴油機組。而在美國許多地區，天然氣管線網路的可靠度，也被認為優於在現場維持大量柴油庫存。當一場風暴或電網緊急事故持續數天而非數小時，有管線持續供氣，遠比擔心油罐車能否及時送達更為穩當。

  天然氣的每千瓦時燃料成本也低於柴油。這項差距如今比過去更為重要，因為這些發電機已不再閒置等候。電網業者與資料中心開發商，愈來愈多地運用現場天然氣引擎，在緊急情況或尖峰需求期間支援更廣大的電力網路——這是一個可創造收益的角色，而柴油較高的燃料成本，過去讓這種應用模式較不具吸引力。

  ## 引擎晉升為主要電源

  最關鍵的轉變，不是用天然氣取代柴油擔任備用電源，而是天然氣引擎被推上主力電源的位置。

  AI資料中心——有時稱為「AI工廠」——所需的電力規模與時程，並非傳統電網接入程序所能因應。公用事業與電網業者面臨漫長的新增併網排隊。一家超大規模業者若想在兩年內讓園區上線，往往無法等待一條可能五年後才能完工的輸電線路。天然氣往復式引擎的採購與安裝速度，遠快於電網連接的許可申請與興建工期，因而成為銜接兩者之間的橋樑。

  俄亥俄州的一個專案呈現了這種規模。該專案計畫部署15台由芬蘭電力企業瓦錫蘭（Wärtsilä）製造的Energy 18V50SG天然氣引擎——往復式引擎——提供近3億瓦（300 MW）的現場發電量。以傳統標準衡量，300 MW已是一座大型電廠的規模；而這個專案無需等待任何輸電線路即可竣工。

  西維吉尼亞州的君王園區更將這個概念推向極致。卡特彼勒供應的Cat G3516機組，能在約七秒內從零加速至滿載——考量到AI工作負載因大量圖形處理器（GPU）集群頻繁啟停所造成的極端用電波動，這項能力至關重要。搭配電池儲能系統吸收最尖銳的峰谷起伏，天然氣引擎提供的電力基礎，是目前單靠電網在這種規模下所無法企及的。這些發電機將配備選擇性觸媒還原（SCR）技術，利用化學反應將氮氧化物轉化為無害的氮氣與水，達到超低排放標準並取得空氣品質許可。

  ## 渦輪機填補缺口——如果搶得到的話

  天然氣渦輪機在同一格局中佔據不同的位置。這類機器衍生自噴射引擎或工業燃燒渦輪，通常能比往復式引擎達到更低的氮氧化物、一氧化碳與揮發性有機化合物排放量——不過引擎端也透過SCR與氧化觸媒等後處理系統大幅縮小了差距。渦輪機通常不是一對一取代柴油備用電源，而是和天然氣引擎同場競逐，爭奪需要數百兆瓦級別發電量的園區主電源地位。

  問題是，所有人都想同時取得這類設備。主要渦輪機製造商——奇異威諾瓦（GE Vernova）、西門子能源（Siemens Energy）與三菱動力（Mitsubishi Power）——的交貨期，已被龐大需求推遲至本十年末，部分大型機型甚至排到更晚。今天下訂單的資料中心開發商，可能要等到2030年甚至更後才能收到貨。

  這段漫長的等待期，為另一種截然不同的做法開闢了空間：將小型渦輪機安裝在拖車上，直接用卡車運抵現場。以Dynamis Power Solutions為例，該公司提供從8 MW到70 MW不等的拖車式天然氣渦輪機。其DT24移動式發電廠能以13.8千伏的工業級電壓輸出24 MW電力——名副其實裝在輪子上的工業級電源。這些機器最初是為仰賴柴油的偏遠油氣田而設計的，如今正出現在資料中心建設工地。它們可以直接開進現場、接線使用，在施工初期與早期營運階段提供電力，待永久電網連接就緒後撤除，或留在現場作為備用電源。

  甲骨文（Oracle）與OpenAI在德州阿比林（Abilene）共同興建的Stargate園區，是渦輪機應用於AI規模的最矚目案例。該園區採用包含奇異威諾瓦LM2500XPRESS移動式天然氣渦輪機，以及Solar Turbines Titan 350機組在內的多元混合配置。阿比林的Stargate最終可能橫跨八棟建築、達400萬平方英尺，用電量高達12億瓦（1.2 GW）——大約相當於一座大型核電廠的輸出，全數投入單一AI訓練中心。

  ## 沒有管線時，用卡車拉燃料

  並非每個場址都緊鄰天然氣管線，但這項限制愈來愈有辦法克服。總部位於休士頓的Certarus，是Superior Plus Corp.旗下的子公司，專門運輸壓縮天然氣（CNG）——將天然氣加壓後儲存於鋼瓶中以利公路運輸——並在現場負責減壓與調壓作業，使其順利送入渦輪機或引擎。美國至少一家超大規模業者，目前正使用Certarus以卡車運送的壓縮天然氣，等候永久管線接通。

  「我們目前正在為超過120 MW的資料中心現場電力供應天然氣，並剛宣布另一個預計於2027年啟動、規模達135 MW的專案，」Certarus工業銷售總監Scott Williams表示。這255 MW的已承諾容量，分布在現行與近期專案之間，代表一座大型資料中心園區相當可觀的一部分用電需求——靠的是卡車而非地下管線來維繫運作。

  ## 蒸汽渦輪機的復甦

  隨著天然氣渦輪機交貨期拉長、電力需求迫切的園區工期不斷倒數，部分業者開始把眼光投向更古老的工業手冊：蒸汽。

  基本概念其實很直接。一台套裝鍋爐——預先設計、出廠即附帶燃燒器、控制系統及所有輔助設備的模組化機組——燃燒天然氣產生蒸汽，再由蒸汽推動渦輪機發電。這是比現代天然氣渦輪機更早問世的技術，但在當前市場卻有一項顯著優勢：交貨期約為一年，相較於大型天然氣渦輪機動輒數年的等待，差距懸殊。

  「在電力需求如此旺盛的情況下，套裝鍋爐可以供應蒸汽給蒸汽渦輪機發電，其效率大約與尖峰時段使用的天然氣渦輪機相當，」德州阿比林Rentech Boiler Systems鍋爐銷售副總裁Gerardo Lara表示。「在目前的市場條件下，蒸汽渦輪機的交貨速度，也很可能遠比天然氣渦輪機快得多。」

  蒸汽渦輪機製造商包括Howden、西門子能源、Triveni與Ebara Elliott，這些業者數十年來持續供應核電廠、地熱田、複循環燃氣電廠與聚光太陽能設施所需的機組。其供應鏈並未面臨大型天然氣渦輪機市場所承受的同等壓力。對於需要在2026年就取得電力、等不到2029年的開發商而言，這項差異或許決定了一座園區能否如期開幕。

  ## 競逐每年600億瓦

  即將到來的需求規模，讓這故事中的每一個選擇都更加舉足輕重。「AI資料中心到2030年前，每年將需要另外新增600億瓦（60 GW）的電力裝機容量，」研究機構Omdia分析師Shen Wang表示。每年60 GW，是一個幾乎令人難以想像的數字——大約相當於法國等國家的全部電力裝機容量，每年新增，且全部只為了AI。

  沒有任何單一技術能填補這個缺口。天然氣引擎、天然氣渦輪機、拖車式移動渦輪機、卡車載運的壓縮天然氣、套裝鍋爐帶動的蒸汽渦輪機——所有方案都在同步上陣，因為需求規模太大、時程太緊迫，任何單一方案都無法獨力應對。共同的脈絡是：柴油，這個過去幾乎是所有備用電力問題的預設答案，已不再適應一個「備用電源同時也是主電源」、且規模以GW而非MW計算的世界。

  未來數年，天然氣引擎與渦輪機的部署規模，將達到十年前難以想像的數量。資料中心產業實際上正在自行推動一場規模龐大的天然氣基礎設施建設——衡量單位不是管線的英里數，而是無論在哪裡取得電力、拿到許可，就往哪裡堆疊的運算容量，以百萬噸計。
date: "2026-06-04T12:31:09.674Z"
category: "power"
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Replacing Diesel in AI-Scale Data Centers: Gas Engines, Turbines, and Steam (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/sustainability/replacing-diesel-in-ai-scale-data-centers-gas-engines-turbines-and-steam"
    title: "Replacing Diesel in AI-Scale Data Centers: Gas Engines, Turbines, and Steam"
    trust: 3
    type: primary
---
