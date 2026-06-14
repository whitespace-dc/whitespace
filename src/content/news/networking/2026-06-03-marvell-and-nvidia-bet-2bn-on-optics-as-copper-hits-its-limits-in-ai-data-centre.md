---
title_en: "Marvell and NVIDIA bet $2bn on optics as copper hits its limits in AI data centres"
title_zh: "輝達斥資20億美元入股馬維爾，押注光學連接革命"
summary_en: "NVIDIA's $2 billion investment in Marvell reflects a shared conviction that copper cable can no longer keep pace with AI's scaling demands, pushing optical connectivity to the centre of data centre design."
summary_zh: "輝達承諾向馬維爾投資20億美元，雙方攜手押注光學連接技術，共同因應銅纜在AI工作負載高速擴張下所遭遇的物理極限，並宣示資料中心連接架構即將迎來根本性的變革。"
body_en: |
  The wire at the heart of almost every data centre rack has a physics problem, and the industry is running into it now.

  Copper cable, the reliable medium that has carried digital traffic for decades, grows shorter as it grows faster. At 100 gigabits per second per lane, a copper link can stretch roughly five metres, enough to reach across the inside of a standard server rack. Double the data rate to 200 gigabits per second, and the usable length drops to about 2.5 metres. Push to 400 gigabits per second, and copper can no longer fully connect the equipment inside a single rack at all.

  "The wall is moving, and it's moving now," said Matt Murphy, chairman and chief executive of Marvell Technology. "When we move to 400 gig, we can no longer fully connect the rack with copper."

  For the data centre industry, that wall has arrived at a fraught moment. Artificial intelligence workloads now demand not thousands but tens of thousands of processors working in tight coordination, and the number is still rising. The response from Marvell and its most prominent new partner, NVIDIA, is to replace copper with light.

  NVIDIA has committed $2 billion to Marvell as part of an expanded strategic relationship covering optics, photonics and NVLink Fusion. The investment signals where both companies believe the next bottleneck in AI infrastructure lies: not in the processors themselves, but in the networks that stitch them together.

  ## A decade of repositioning

  Murphy has spent ten years remaking Marvell around exactly this bet. When he joined the company in 2016, data centre products accounted for less than 10 percent of revenue. In the most recent quarter, that share exceeded 75 percent. The transformation involved roughly $22.5 billion in acquisitions, $18 billion in organic investment, and the divestiture of approximately $4.5 billion of older assets, a net commitment of around $36 billion to what Murphy calls Marvell's data infrastructure platform.

  The most consequential deal was the $10 billion acquisition of Inphi in 2021, which strengthened Marvell's data centre connectivity portfolio. Subsequent acquisitions including Avera, Aquantia, Innovium, Celestial AI and XConn extended the platform across optical interconnect, switching, custom silicon and advanced packaging.

  "The vision we had at that time was pretty simple, and this is still the same vision that we have today, 10 years later," Murphy said. "To build a best-in-class pure-play company focused on semiconductor solutions for data infrastructure."

  That focus looks prescient now. True scale, in Murphy's view, requires tens of thousands, and eventually millions, of processors coordinating as a single computing engine. And as AI systems grow, it is the architecture of their connections that increasingly defines performance.

  "One processor, no matter how fast it is, no matter how much memory it has attached to it, is simply not enough for today's AI workloads," Murphy said. "Computing at this scale is fundamentally a connectivity challenge, and increasingly it is the architecture and characteristics of connectivity that defines the performance of the system."

  ## Light where copper fails

  The solution Marvell is pushing is optical connectivity, which transmits data as pulses of light rather than electrical signals. Light does not suffer the distance penalty that copper faces at high data rates, making it the natural medium for connections between racks, rows, and buildings in a large AI cluster.

  The more immediate battleground, though, is inside the rack itself, where copper is about to lose its footing. Marvell is developing co-packaged optics, or CPO, a design in which the optical components that convert electrical signals to light are placed directly inside the same package as the switch or processor chip they serve, rather than in a pluggable module at the front panel of the system. Moving the optics closer to the silicon reduces the distance electrical signals must travel before becoming light, and that distance is precisely what copper's physics can no longer afford.

  Murphy displayed a CPO-based switch design alongside a conventional Ethernet switch at a recent industry event. Marvell has also announced a 100-terabit-per-second Ethernet switch designed for AI data centres, began ramping 1.6-terabit, 3-nanometre PAM4 solutions last year, and plans to sample what it describes as the world's first 1.6-terabit, 2-nanometre coherent optical solution later this year.

  "The fundamental challenge we're solving with CPO is density and power," Murphy said.

  Jensen Huang, NVIDIA's chief executive, framed the copper-to-optics transition as a matter of strategic pacing rather than a sharp cutover. "We should use copper as much as we can for as long as we can, but copper has its limits," he said. "Ultimately, the right strategy is to scale up with copper as much and as long as you can. After that, you scale up further with optics, and you scale out with optics, and you scale across with optics."

  ## Why tokens explain everything

  Huang offered a striking economic frame for why connectivity investment is surging. AI inference, the act of generating responses from a trained model, has become profitable. When producing tokens generates revenue, operators want to produce more of them faster, and that requires more processors tightly linked together.

  "AI is profitable, and tokens are profitable," Huang said. "When token production is profitable, everybody wants to make more tokens, which is the reason why Marvell's demand is so high."

  He connected the surge to the rise of agentic AI. These workloads, Huang explained, require a distributed computing pattern in which tasks are broken into many parts and run across large clusters. That distributed pattern makes the connections between processors the critical variable.

  "When you take a computing problem and you disaggregate it into a lot of parts and you distribute it across the entire data centre, what's necessary is connectivity," he said.

  "Useful AI has arrived," Huang added. "It's the reason why your demand is going through the roof."

  ## Taiwan's irreplaceable role

  A shift of this scale in semiconductor architecture does not happen without manufacturing capacity prepared years in advance. Murphy pointed to Taiwan's semiconductor ecosystem, and specifically to Advanced Semiconductor Engineering, or ASE, as one of Marvell's key partners, noting that optical connectivity will require manufacturing capacity, advanced packaging and long-term ecosystem investment.

  Dr Tian Wu, ASE's chief executive, said the decision to align closely with Marvell reflected confidence in the company's transformation and in the long-term trajectory of data infrastructure.

  "Marvell, a fabulous company, has a very good reputation and has gone through a lot of transition," Wu said. "The track record from Marvell has already been there."

  Wu's broader point was about the difficulty of replicating what Taiwan has accumulated. Semiconductor manufacturing requires capacity decisions made years before demand fully materialises. The workforce expertise, cluster efficiency, and economies of scale that Taiwan has built across successive technology shifts, from personal computers to wireless devices, mobile computing, data centres and high-performance computing, cannot be conjured quickly elsewhere.

  "When you think about the workforce with years of experience behind it, when you think about the cluster efficiency, when you think about the capacity, economy of scale, we already have this," Wu said. "I think this ecosystem is very, very difficult to replicate. It is not impossible, but will take years."

  ## A different kind of data centre

  Murphy offered a longer-range vision of where all this leads. Today's data centre architecture is shaped largely by the constraints of copper: compute processors are packaged tightly with memory because signals cannot travel far; racks are configured around fixed board layouts; processing and storage are kept close together because electrical links demand it.

  Optical connectivity, Murphy argues, begins to dissolve those constraints. If light can carry data efficiently across longer distances, architects gain the freedom to separate compute, memory, and networking resources into distinct pools that can be connected and recombined dynamically, rather than fixed around current board-level and rack-level limits.

  The industry is not there yet. But the $2 billion that NVIDIA is placing behind Marvell's optical and photonics work, alongside the packaging commitments from ASE and the product roadmap running from 1.6-terabit, 3-nanometre to 2-nanometre coherent optics, suggests that both companies believe the architecture of the data centre is genuinely up for renegotiation.

  The wall, as Murphy put it, is moving. What replaces it is now the biggest engineering question in the industry.
body_zh: |
  ## 銅纜的物理高牆

  幾乎每一座資料中心機架的核心，都插著一根銅線；而這根銅線，正面臨一道難以逾越的物理高牆，且這道牆已迫在眉睫。

  銅纜是幾十年來承載數位訊號的可靠媒介，但速度越快，可用距離就越短。在每通道100 Gbps的傳輸速率下，銅纜連接長度約可達五公尺，足以橫跨一個標準伺服器機架的內部。若傳輸速率翻倍至200 Gbps，可用長度便縮短至約2.5公尺；一旦推進至400 Gbps，銅纜甚至無法在單一機架內完整連接所有設備。

  馬維爾科技（Marvell Technology）董事長兼執行長Matt Murphy表示：「這道牆正在移動，而且就在當下移動。當我們跨入400 Gbps，銅纜已無法在機架內完整連接所有設備。」

  對資料中心產業而言，這道牆偏偏在最敏感的時刻到來。AI工作負載的需求，已從數千個處理器飆升至數以萬計，且數字仍在持續攀升。馬維爾與其最重要的新夥伴輝達（NVIDIA）的因應之道，是以光取代銅。

  輝達已承諾向馬維爾投資20億美元，作為雙方擴大策略合作的一部分，涵蓋光學、光子技術及NVLink Fusion。這筆投資傳遞出明確訊號：兩家公司都相信，AI基礎架構的下一個瓶頸，不在於處理器本身，而在於將它們串聯起來的網路。

  ## 十年的戰略轉型

  Murphy花了整整十年，將馬維爾重塑為押注這一方向的公司。他於2016年加入時，資料中心產品在營收中的佔比不到10%；最近一季，這個比例已超過75%。這場轉型涉及約225億美元的併購、180億美元的有機投入，以及約45億美元的舊資產出售，淨投入合計約360億美元，全數用以打造Murphy口中的馬維爾「資料基礎設施平台」。

  其中最關鍵的一筆交易，是2021年以100億美元收購Inphi，大幅強化了馬維爾在資料中心連接領域的產品組合。此後陸續完成的Avera、Aquantia、Innovium、Celestial AI和XConn等收購案，則將這個平台延伸至光學互連、交換、客製晶片及先進封裝等領域。

  Murphy說：「我們當時的願景其實很簡單，和今天的願景一模一樣，十年如一日——建立一家以資料基礎設施半導體解決方案為核心的頂尖純粹專注型公司。」

  這樣的專注，如今看來頗具遠見。在Murphy看來，真正的規模需要數以萬計、乃至最終數以百萬計的處理器協同運作，如同一台巨大的運算引擎。而隨著AI系統持續壯大，連接的架構正日益決定整體效能表現。

  Murphy說：「無論一個處理器有多快、附掛多少記憶體，對於今日的AI工作負載而言都遠遠不夠。在這種規模下，運算本質上是一道連接挑戰，而連接的架構與特性，正越來越決定著整個系統的效能。」

  ## 以光克服銅的失效

  馬維爾力推的解決方案是光學連接——以光脈衝而非電訊號傳輸資料。光不像銅那樣在高傳輸速率下受制於距離衰減，因此成為連接大型AI叢集內機架間、列間乃至建築間的天然媒介。

  然而，更迫切的戰場其實就在機架內部——銅纜正在那裡逐漸失去立足之地。馬維爾正在開發共封裝光學（Co-Packaged Optics，CPO）技術，其設計理念是將原本負責電光轉換的光學元件，從系統前面板的可插拔模組，直接整合進與之配套的交換器或處理器晶片的封裝之內。將光學元件移至更靠近矽晶片的位置，可縮短電訊號在轉換成光之前必須行進的距離——而正是這段距離，如今已讓銅纜的物理特性力不從心。

  Murphy近期在業界活動中，展示了一款基於CPO設計的交換器，並與傳統乙太網路交換器並排比較。馬維爾也已宣布一款專為AI資料中心設計、傳輸速率達每秒100 Tb的乙太網路交換器；去年更已開始量產採用3奈米製程的1.6 Tb PAM4解決方案；並計畫於今年稍晚試產其所稱全球首款1.6 Tb、2奈米製程的相干光學解決方案。

  Murphy說：「CPO所解決的根本挑戰，是密度與功耗。」

  輝達執行長黃仁勳則將銅轉光的過渡，定調為策略性的節奏調配，而非驟然切換。他表示：「只要銅纜還能用，我們就應該盡量使用；但銅纜終究有其極限。最終的正確策略，是盡可能、盡量久地以銅纜向上擴展規模；到了那之後，再以光學繼續往上延伸、往外拓展，以及向各處蔓延。」

  ## Token生產解釋了一切

  黃仁勳提出了一個極具說服力的經濟框架，闡釋為何連接投資正急遽攀升。AI推論——即從訓練好的模型生成回應的過程——已具備獲利能力。當產出token能帶來收益，業者就想更快速地產出更多token，而這需要更多緊密相連的處理器。

  黃仁勳說：「AI已能獲利，token也能獲利。當token的產出有利可圖，每個人都想生產更多token，這正是馬維爾需求如此旺盛的原因。」

  他將這股需求浪潮與代理式AI（agentic AI）的崛起相連結。黃仁勳解釋，這類工作負載需要一種分散式運算模式——將任務拆解成許多部分，分散到大型叢集上同步執行。正是這種分散模式，使得處理器之間的連接成為決定性的關鍵變數。

  他說：「當你把一個運算問題拆解成許多部分，並分散到整座資料中心執行時，不可或缺的就是連接。」

  「實用AI已經到來，」黃仁勳補充道，「這正是你們需求爆增的原因。」

  ## 台灣不可替代的角色

  這樣規模的半導體架構轉型，少不了提前數年就部署到位的製造產能作為後盾。Murphy特別點名台灣的半導體生態系，以及日月光半導體（ASE）作為馬維爾的重要合作夥伴，並指出光學連接的發展，需要製造產能、先進封裝能力及長期的生態系投資共同支撐。

  日月光執行長吳田玉表示，決定與馬維爾深度合作，是基於對這家公司轉型歷程的信心，以及對資料基礎設施長期走勢的判斷。

  他說：「馬維爾是一家非常傑出的公司，聲譽卓著，也歷經了許多蛻變。馬維爾的成績單早就擺在那裡了。」

  吳田玉進一步指出，台灣所積累的優勢有多難複製。半導體製造需要在需求完全浮現之前數年，就預先做出產能決策。台灣在歷次技術浪潮中——從個人電腦、無線裝置、行動運算、資料中心到高效能運算——所累積的人才技術、聚落效率與規模經濟，絕非一夕之間可以另起爐灶。

  他說：「想想背後有多年經驗積累的人才庫、想想聚落效率、想想產能與規模經濟——這些我們早已具備。我認為這個生態系極難複製，並非不可能，但需要數年時間。」

  ## 截然不同的資料中心

  Murphy描繪了一幅更為長遠的未來圖景。當今的資料中心架構，在很大程度上是由銅纜的物理限制所塑造：運算處理器與記憶體緊密封裝在一起，因為訊號無法傳遠；機架的配置依循固定的電路板佈局；儲存設備緊貼處理器，因為電氣連線的需求如此要求。

  Murphy主張，光學連接將開始瓦解這些限制。如果光能夠在更長的距離上高效傳輸資料，架構師便能獲得前所未有的自由，將運算、記憶體和網路資源分拆成各自獨立的資源池，依需求動態連接與重組，而不再受制於現有電路板層級與機架層級的固定配置。

  業界尚未達到這個境界。但輝達以20億美元押注在馬維爾的光學與光子技術之上，加上日月光的封裝承諾，以及從1.6 Tb、3奈米延伸至2奈米相干光學的產品藍圖，顯示兩家公司都確信：資料中心的架構，正迎來一場真正意義上的重新談判。

  如Murphy所言，那道牆正在移動。取而代之的是什麼，如今已成為整個產業最大的工程命題。
date: "2026-06-03T15:29:56.764Z"
category: "networking"
region: ["Taiwan"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: Marvell targets AI connectivity bottleneck with NVIDIA boost (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/marvell-targets-ai-connectivity-bottleneck-with-nvidia-boost"
    title: "Marvell targets AI connectivity bottleneck with NVIDIA boost"
    trust: 3
    type: primary
---
