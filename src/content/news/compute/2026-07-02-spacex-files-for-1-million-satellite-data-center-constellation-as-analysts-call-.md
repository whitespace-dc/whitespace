---
title_en: "SpaceX Files for 1 Million-Satellite Data Center Constellation as Analysts Call Timeline Unrealistic"
title_zh: "SpaceX申請百萬衛星軌道資料中心　分析師直批時程不切實際"
summary_en: "SpaceX filed an FCC application in January for a constellation of up to 1 million orbital data center satellites, but engineers and analysts at IEEE Spectrum say cooling physics, manufacturing capacity, and launch cadence make Elon Musk's two-to-three-year timeline unworkable. A startup called Starcloud, which has filed separately for 88,000 such satellites, has placed one Nvidia H100 GPU in orbit and found its radiator too small to run the chip at full power."
summary_zh: "SpaceX於今年一月向美國聯邦通訊委員會申請部署多達百萬顆軌道資料中心衛星，但IEEE Spectrum的工程師與分析師指出，散熱物理、製造產能與發射節奏等根本障礙，使馬斯克宣稱的兩到三年時程完全不可行；新創公司Starcloud已將一顆搭載輝達H100 GPU的衛星送入軌道，卻發現散熱板面積過小，無法讓晶片以滿載功率運作。"
body_en: |
  SpaceX filed an application with the U.S. Federal Communications Commission (FCC) in January to deploy an orbital data center constellation of up to 1 million satellites in low Earth orbit, a plan that engineers and analysts say faces fundamental barriers in launch capacity, satellite manufacturing, and thermal management that make founder Elon Musk's two-to-three-year timeline unworkable.

  ## Musk's Claims and the FCC Filing

  Musk made the case for orbital computing at the World Economic Forum in Davos in January, telling attendees that space would be "the lowest-cost place to put AI" within "two years, maybe three at the latest." SpaceX was preparing its initial public offering at the time. The company filed the FCC application that same month, seeking regulatory approval for a constellation positioned between 500 and 2,000 kilometers above Earth — the region known as low Earth orbit (LEO). Three days before the IPO, Musk discussed initial design specifications for a proposed satellite data center system called AI-1 in a video interview.

  IEEE Spectrum noted that Musk has a record of ambitious timelines that have not held: he predicted full self-driving cars by 2017, a human mission to Mars by 2024, and 10,000 Optimus humanoid robots by the end of 2025.

  ## The Launch Arithmetic

  Roughly 14,500 active satellites are currently in orbit, with Starlink — SpaceX's existing broadband constellation — accounting for approximately two-thirds of them. Across all of human history, there have been about 7,000 orbital launches in total. Deploying 1 million satellites aboard Starship, SpaceX's heavy-lift rocket designed to carry up to 60 satellites per vehicle, would require 16,666 launches dedicated solely to satellite deployment. SpaceX set a record in 2025 with 165 orbital missions across all payload types. At 10 times that pace, deploying the full constellation would still take roughly a decade, according to IEEE Spectrum.

  ## Manufacturing Constraints

  The satellite production challenge is equally steep. Starlink's current manufacturing rate runs at approximately 4,000 satellites per year. Even with a tenfold increase in factory capacity — which IEEE Spectrum described as requiring a manufacturing revolution — building 1 million satellites would take approximately 25 years.

  ## Cooling Physics

  Even if the launch and manufacturing barriers were resolved, keeping computing hardware operational in space presents a severe physical constraint. Cooling in orbit depends entirely on radiative heat rejection — expelling heat as infrared radiation — because there is no atmosphere to conduct or convect heat away.

  A single Nvidia H100 graphics processing unit (GPU), a chip central to artificial intelligence workloads, draws 700 watts of power and requires a radiator panel of 1.4 square meters operating at 60 degrees Celsius to shed that heat, according to Dina Genkina, IEEE Spectrum's computing and hardware editor. The requirement scales sharply with density:

  - A 40-kilowatt server rack requires an 80-square-meter radiator
  - A 100-megawatt data center — roughly the scale of a medium-sized hyperscale facility — would require 2,500 such 80-square-meter radiators

  A startup called Starcloud, which has separately applied to the FCC for a constellation of 88,000 orbital data center satellites, has placed one H100 GPU in orbit to date. Its radiator proved too small to allow the chip to operate at full power, Genkina noted.

  ## Broader Risks

  Astronomers have raised concerns that a million satellites equipped with large radiative panels would obscure the night sky. The density of objects at that scale also heightens the risk of Kessler syndrome — a cascading scenario in which debris from orbital collisions generates additional debris, potentially rendering LEO unusable for future missions.

  ## Financial Structure

  The orbital data center concept reflects vertical integration across Musk's companies. xAI, his artificial intelligence venture, develops the data centers; SpaceX would launch them; and Tesla, his electric vehicle company, manufactures solar panels that could power them. "It's almost like he's paying himself," Genkina told IEEE Spectrum.

  ## What the Analysis Shows

  The engineering assessment by Andrew Cavalier of ABI Research, published as an IEEE Spectrum cover story titled "Why Orbital Data Centers Are So Hard," concludes that the vision of large-scale orbital data center constellations is far from realization. Starcloud's experience demonstrates that the cooling problem remains unsolved even at the scale of a single GPU. At Starlink's current satellite manufacturing rate scaled tenfold, IEEE Spectrum's analysis puts completion of a million-satellite constellation at approximately 25 years away.
body_zh: |
  SpaceX於今年一月向美國聯邦通訊委員會（FCC）提出申請，計劃在低地球軌道部署多達百萬顆衛星，建立軌道資料中心星座網路。工程師與分析師表示，這項計畫在發射能力、衛星製造與熱管理方面面臨根本性障礙，使得創辦人伊隆·馬斯克所宣稱的兩到三年時程完全不可行。

  ## 馬斯克的主張與FCC申請

  馬斯克在一月份達沃斯世界經濟論壇上力推軌道運算概念，向與會者表示，太空將在「兩年內，最晚三年」成為「部署AI成本最低的地方」。SpaceX當時正準備首次公開發行（IPO）。該公司同月向FCC提交申請，尋求在距地面500至2,000公里的低地球軌道（LEO）部署星座網路的監管核准。在IPO前三天，馬斯克接受一場視訊訪問，討論了一項名為AI-1的衛星資料中心系統初步設計規格。

  IEEE Spectrum指出，馬斯克有著雄心勃勃卻未能兌現的時程記錄：他曾預測完全自動駕駛將於2017年實現、人類登陸火星於2024年達成，以及Optimus人形機器人於2025年底前生產1萬台。

  ## 發射數量的算術

  目前在軌的活躍衛星約有1萬4,500顆，其中Starlink——SpaceX旗下的既有寬頻星座——約佔三分之二。縱觀整個人類歷史，軌道發射總次數約為7,000次。若以SpaceX重型火箭星艦（Starship）為載具——每次最多可搭載60顆衛星——部署百萬顆衛星，光是衛星部署就需要發射1萬6,666次。SpaceX在2025年以165次軌道任務（涵蓋各類酬載）創下歷史紀錄。據IEEE Spectrum分析，即使在此基礎上提升十倍，完整部署整個星座仍需約十年時間。

  ## 製造產能的限制

  衛星製造方面的挑戰同樣嚴峻。Starlink目前的衛星生產速度約為每年4,000顆。即使工廠產能提升十倍——IEEE Spectrum形容這需要掀起一場製造業革命——建造百萬顆衛星仍需約25年。

  ## 散熱物理的難題

  即便發射與製造的障礙都能克服，在太空中維持運算硬體正常運作仍面臨嚴峻的物理瓶頸。軌道上的冷卻完全仰賴輻射散熱——將熱能以紅外線輻射的形式排出——因為太空中沒有大氣可供熱傳導或對流散熱。

  根據IEEE Spectrum運算與硬體編輯蒂娜·根基納（Dina Genkina）的說明，一張輝達H100繪圖處理器（GPU）——AI工作負載的核心晶片——耗電700瓦，需要一片面積1.4平方公尺、工作溫度攝氏60度的散熱板，才能有效排散廢熱。這一需求隨密度急遽攀升：

  - 一個40千瓦的伺服器機架需要80平方公尺的散熱板
  - 一座100百萬瓦的資料中心——大約是中型超大規模設施的規模——則需要2,500片80平方公尺的散熱板

  一家名為Starcloud的新創公司已另行向FCC申請部署8萬8,000顆軌道資料中心衛星，目前已將一顆搭載H100 GPU的衛星送入軌道。根基納指出，該衛星的散熱板面積過小，無法讓晶片以滿載功率運作。

  ## 更廣泛的風險

  天文學家對此表達疑慮，認為百萬顆配備大型散熱板的衛星將嚴重遮蔽夜空。如此密集的軌道物體也大幅提高「凱斯勒症候群」（Kessler syndrome）的風險——這是一種連鎖碰撞情境：軌道碎片碰撞產生更多碎片，最終可能導致低地球軌道對未來任務完全無法使用。

  ## 財務結構

  軌道資料中心的概念體現了馬斯克旗下各公司的垂直整合模式：他的人工智慧公司xAI負責開發資料中心；SpaceX負責發射；而他的電動車公司特斯拉則製造可為其提供電力的太陽能板。根基納對IEEE Spectrum表示：「這幾乎像是他在付錢給自己。」

  ## 分析結論

  ABI Research分析師安德魯·卡瓦利耶（Andrew Cavalier）完成了上述工程評估，以封面故事形式發表於IEEE Spectrum，標題為〈為何軌道資料中心如此困難〉（"Why Orbital Data Centers Are So Hard"），結論是大規模軌道資料中心星座的願景距離實現仍遙遙無期。Starcloud的實際經驗表明，即便只是單顆GPU的規模，散熱問題至今仍懸而未解。以Starlink目前衛星生產速率放大十倍估算，IEEE Spectrum分析指出，百萬衛星星座的完工時程約需25年。
date: "2026-07-02"
source_published: "2026-07-01T12:00:01.000Z"
category: "compute"
secondary_categories: ["market"]
region: []
vendor: ["Nvidia"]
trust:
  score: 4
  reasoning: "Single source: Orbital Data Centers: Why the Hype Outpaces Reality (trust 4/5)."
sources:
  - url: "https://spectrum.ieee.org/orbital-data-center-hype"
    title: "Orbital Data Centers: Why the Hype Outpaces Reality"
    trust: 4
    type: primary
    published_at: "2026-07-01T12:00:01.000Z"
---
