---
title_en: "Orbital data centers cost at least 10x more than ground-based, ABI Research finds"
title_zh: "ABI Research：太空資料中心成本至少是地面設施十倍"
summary_en: "A cost analysis by ABI Research finds that running a GPU in orbit costs at least an order of magnitude more than on the ground, as the physics of radiative cooling and ionizing radiation impose penalties that space-based data center proponents routinely understate."
summary_zh: "ABI Research 成本分析指出，在軌道上運行 GPU 的費用至少比地面設施高出一個數量級；散熱的物理限制與電離輻射帶來的額外代價，遠遠超過太空資料中心倡議者的估算。"
body_en: |
  Major technology companies including SpaceX, Google, and startup Starcloud are advancing plans to place data centers in low Earth orbit, but a cost analysis by ABI Research concludes that operating a GPU in space costs at least an order of magnitude more than an equivalent terrestrial deployment, a gap driven by the physics of heat rejection and radiation exposure that analysts say current proposals do not adequately account for.

  ## Companies racing to orbit

  Nvidia CEO Jensen Huang framed the commercial momentum in broad terms at the company's GTC conference in March, declaring "Space computing, the final frontier, has arrived." Elon Musk's SpaceX, which has acquired Musk's AI company xAI, is planning a constellation of space-based data centers. Google announced Project Suncatcher in partnership with satellite imagery company Planet, with plans to launch two satellites equipped with Google Tensor Processing Unit (TPU) AI chips by early 2027. Startup Starcloud has filed a proposal with the Federal Communications Commission (FCC) for an 88,000-satellite constellation dedicated to orbital data centers.

  The architecture common to these proposals calls for fleets of satellites numbering in the thousands, each housing one or more racks of AI-grade graphics processing units (GPUs), interconnected via free-space optical links, and communicating with Earth via microwave.

  ## The cooling physics

  Proponents of orbital data centers often cite free cooling as a central advantage of space. That framing does not survive scrutiny, according to an IEEE Spectrum analysis by an ABI Research aerospace analyst. Space has no atmosphere, which eliminates conduction and convection as heat-removal mechanisms. The only method available in a vacuum is thermal radiation.

  The governing equation is the Stefan-Boltzmann Law, which states that the power a surface can radiate is proportional to the radiator's area multiplied by its temperature raised to the fourth power. For a spacecraft designer, the practical implication is that the only controllable variable is area. The analysis describes this as a "physics tax": the more power a system must reject, the more radiator surface area must be launched from Earth.

  For a single Nvidia H100 GPU drawing 700 watts of power — a widely deployed AI accelerator — maintaining an operating temperature of 60 degrees Celsius, considered the optimal point for chip longevity and stability, requires approximately 1.4 square meters of radiator surface, assuming the panel faces deep space at a background temperature of 3 kelvins (minus 270 degrees Celsius).

  At the rack level, the numbers scale steeply. A standard AI server rack holding approximately 32 H100 GPUs, together with CPUs, memory, and networking equipment, draws around 40 kilowatts of power and holds 2.5 terabytes of memory — enough to serve more than 20,000 concurrent users or run 16 simultaneous instances of the open-source AI model Llama 3. Cooling that thermal load in a vacuum requires roughly 80 square meters of radiator surface, approximately the area of a pickleball court. A 100-megawatt (MW) data center — a mid-sized facility by current terrestrial standards — would require at least 2,500 such radiators.

  ## Degradation compounds the problem

  Low Earth orbit (LEO) exposes radiator surfaces to ultraviolet light and atomic oxygen, a chemically hostile combination that degrades emissive coatings over time. Over a typical five-year LEO satellite lifespan, this degradation forces the required radiator area up by approximately 40 percent — from about 1.4 square meters per H100 chip to nearly 2.0 square meters — just to maintain the same 60-degree operating temperature. That additional margin must be launched at the outset, adding mass, atmospheric drag, and launch cost.

  Ionizing radiation from cosmic rays also degrades solar panels and the radiative coolers themselves. Because in-orbit maintenance is not feasible, redundancy must be engineered in at launch, and cost projections must account for efficiency losses across the satellite's operational life.

  ## Commercial chips as radiation targets

  Heat rejection is only one of two major physical constraints. Ionizing radiation in LEO poses a distinct threat to the compute hardware itself. Conventional radiation-hardened (rad-hard) chips, standard on operational satellites, are more expensive than commercial equivalents and lack the processing power required to run a modern large language model (LLM). Orbital data center operators are therefore compelled to use commercial chips — the same H100s or Google TPUs found in ground-based server farms. Those chips were not designed for the space environment and are vulnerable to high-energy particles that can flip bits in memory or trigger logic failures known as latch-ups in processor logic.

  ## The cost model

  ABI Research modeled the total cost of ownership for a GPU operated in orbit versus on the ground. The model assumed an H100 server rack with its required solar panels and radiator, launched on a spacecraft similar to Starcloud's pilot configuration via SpaceX's Starship at $44 per kilogram — a figure the analysis describes as highly optimistic — and a terrestrial electricity cost of $0.20 per kilowatt-hour. The result: running a GPU in space for one year costs at least ten times more than the same operation on Earth.

  ## Where orbital compute may be warranted

  Despite the unfavorable general economics, the analysis identifies three categories of application where the cost premium may be justified: preprocessing data generated by Earth-observation satellites, real-time detection and tracking of hypersonic missiles, and active collision avoidance in an increasingly congested low Earth orbit. Even for these niche uses, the author notes, the fundamental physical constraints remain demanding.

  The analysis concludes that general-purpose space-based data centers are difficult to justify economically at present, even as terrestrial data center builders in many regions face acute shortages of electric power. Google's Project Suncatcher, targeting a launch of two TPU-equipped satellites by early 2027, will serve as one of the near-term tests of whether the sector's technical and economic assumptions hold.
body_zh: |
  SpaceX、Google 及新創公司 Starcloud 等大型科技企業正積極推進在低地球軌道設置資料中心的計畫，但 ABI Research 的成本分析顯示，在太空中運行一顆 GPU 的費用，至少比同等地面部署高出一個數量級。這項差距根源於熱能排除與輻射暴露的物理限制——分析師指出，現行提案對此嚴重低估。

  ## 企業競相進軍軌道

  輝達執行長黃仁勳在今年三月的 GTC 大會上，以宏觀視野描繪這股商業動能，宣稱「太空運算——最後的疆界——已然到來。」伊隆·馬斯克旗下的 SpaceX 在收購馬斯克的 AI 公司 xAI 之後，正計畫建立一個由太空資料中心組成的衛星星系。Google 則宣布與衛星影像公司 Planet 合作，推出「Project Suncatcher」計畫，預計在 2027 年初發射兩顆搭載 Google 張量處理器（TPU）AI 晶片的衛星。新創公司 Starcloud 已向美國聯邦通訊委員會（FCC）提交申請，擬建立一個由 88,000 顆衛星組成、專門用於軌道資料中心的星系。

  這些提案有一套共同架構：由數千顆衛星組成的艦隊，每顆衛星搭載一個或多個 AI 等級圖形處理器（GPU）機架，透過自由空間光學連結互相串連，並以微波與地球通訊。

  ## 散熱的物理限制

  軌道資料中心的支持者通常將「免費冷卻」列為太空環境的核心優勢，但根據 ABI Research 一位航太分析師在《IEEE Spectrum》發表的分析，這種說法並不站得住腳。太空中沒有大氣層，傳導與對流這兩種散熱機制因此完全失效；在真空環境中，唯一可行的散熱方式只有熱輻射。

  支配這一現象的是史蒂芬-波茲曼定律：一個表面所能輻射的功率，與散熱板面積乘以其絕對溫度的四次方成正比。對太空船設計師而言，唯一實際上可以調控的變數就是面積。這篇分析將此現象稱為「物理稅」：系統需要排除的功率愈大，就必須從地球發射愈多的散熱板面積。

  以一顆功耗 700 瓦的輝達 H100 GPU——目前廣泛部署的 AI 加速器——為例，在散熱板面向深太空、背景溫度為 3 克耳文（零下 270 攝氏度）的條件下，若要將其維持在攝氏 60 度的工作溫度（被視為晶片壽命與穩定性的最佳點），大約需要 1.4 平方公尺的散熱板面積。

  在機架層級，數字更是急劇攀升。一個標準 AI 伺服器機架搭載約 32 顆 H100 GPU，加上 CPU、記憶體與網路設備，功耗約為 40 千瓦，記憶體容量達 2.5 TB——足以同時服務逾 2 萬名並發使用者，或同步執行 16 個開源 AI 模型 Llama 3 的實例。在真空中冷卻如此高的熱負載，需要約 80 平方公尺的散熱板面積，大致相當於一座匹克球（pickleball）球場的大小。若以 100 MW 的資料中心為例——以現行地面標準而言僅屬中型設施——則至少需要 2,500 組這樣的散熱板。

  ## 劣化問題雪上加霜

  低地球軌道（LEO）的散熱板表面長期暴露在紫外線與原子氧之下，這兩者的組合具有強烈的化學腐蝕性，會隨時間逐漸侵蝕散熱塗層。在低地球軌道衛星典型的五年壽命期間，劣化程度將導致所需散熱板面積增加約 40%——每顆 H100 晶片從約 1.4 平方公尺增至近 2.0 平方公尺——只是為了維持相同的攝氏 60 度工作溫度。這部分額外裕度必須在發射之初就一併考量，進而增加質量、大氣阻力與發射成本。

  來自宇宙射線的電離輻射也同樣侵蝕太陽能板與輻射冷卻器本身。由於在軌道上進行維修並不可行，冗餘設計必須在發射時就預先內建，而成本預測也必須將衛星整個運作週期的效能損耗一併納入計算。

  ## 商用晶片面對輻射威脅

  熱能排除只是兩大物理限制之一。低地球軌道的電離輻射對運算硬體本身構成另一項獨立威脅。傳統的抗輻射強化（rad-hard）晶片是現役作業衛星的標準配備，但其成本高於商用同級品，且缺乏執行現代大型語言模型（LLM）所需的運算效能。因此，軌道資料中心的業者不得不採用商用晶片——與地面伺服器農場所用相同的 H100 或 Google TPU。這些晶片並非為太空環境所設計，容易受到高能粒子影響，可能導致記憶體位元翻轉，或在處理器邏輯中引發稱為「閂鎖（latch-up）」的邏輯故障。

  ## 成本模型

  ABI Research 針對 GPU 在軌道與地面環境下的總持有成本進行建模。模型假設以 SpaceX 星艦（Starship）以每公斤 44 美元的單價——分析指出這已是相當樂觀的假設——發射一套 H100 伺服器機架及其所需太陽能板與散熱板，並以地面電費每千瓦時 0.20 美元計算。結果顯示：在太空中運行一顆 GPU 一年的成本，至少是地面同等作業的十倍。

  ## 軌道運算的潛在應用場景

  儘管整體經濟效益欠佳，分析仍指出三類應用場景可能值得承擔這樣的成本溢價：對地球觀測衛星所產生的資料進行預處理、即時偵測與追蹤高超音速飛彈，以及在日益擁擠的低地球軌道中進行主動碰撞規避。作者指出，即便是針對這些利基用途，基本的物理限制依然嚴苛。

  分析的結論是：以目前的條件來看，通用型太空資料中心在經濟上難以自圓其說——即便許多地區的地面資料中心業者正面臨電力嚴重短缺的困境。Google 的 Project Suncatcher 計畫預計在 2027 年初發射兩顆搭載 TPU 的衛星，將成為近期內最重要的試金石之一，用以檢驗這一領域的技術與經濟假設是否能夠站得住腳。
date: "2026-06-12"
source_published: "2026-06-11T13:00:02.000Z"
category: "compute"
secondary_categories: ["cooling"]
region: []
vendor: []
trust:
  score: 4
  reasoning: "Single source: Why Thermodynamics Rules Future Orbital Data Centers (trust 4/5)."
sources:
  - url: "https://spectrum.ieee.org/orbital-data-centers-heat"
    title: "Why Thermodynamics Rules Future Orbital Data Centers"
    trust: 4
    type: primary
    published_at: "2026-06-11T13:00:02.000Z"
---
