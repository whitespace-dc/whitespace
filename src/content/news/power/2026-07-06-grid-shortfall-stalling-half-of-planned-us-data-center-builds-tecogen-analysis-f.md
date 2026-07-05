---
title_en: "Grid shortfall stalling half of planned US data center builds, Tecogen analysis finds"
title_zh: "電網容量不足拖垮半數美國資料中心建設計畫，Tecogen分析示警"
summary_en: "About half of planned US data center projects face delays or cancellation because the electrical grid cannot deliver sufficient power on developers' timelines, with demand projected to outpace available grid supply by roughly 19 gigawatts by 2028, according to analysis published by a Tecogen executive."
summary_zh: "Tecogen業務開發副總裁最新分析指出，美國約有半數資料中心建設計畫因電網無法在開發商要求的時程內供應足夠電力而遭延誤或取消，預估至2028年需求將比電網可供應量超出約19吉瓦。"
body_en: |
  About half of planned US data center projects are being delayed or canceled because of insufficient electrical grid capacity — not land or capital shortfalls — with a structural gap between power supply and demand set to widen sharply by 2028, according to analysis published July 5 by Stephen Lafaille, vice president of business development at Tecogen.

  US data centers currently represent approximately 51 gigawatts (GW) of combined installed capacity. New facilities in development will require an additional 44 GW by 2028, but the grid is projected to supply only 25 GW of that demand in the same window, leaving a shortfall of roughly 19 GW, Lafaille wrote in a column published by Data Center Dynamics.

  ## Where the bottleneck is worst

  In major development markets including Northern Virginia, Phoenix, Chicago, and Silicon Valley, interconnection timelines — the process by which a new large electrical load is formally connected to the transmission grid — already extend three to five years or longer, Lafaille said. The result is a growing inventory of sites that have been acquired, zoned, and fully permitted but cannot proceed because no sufficient grid allocation is available within the developers' required timelines.

  The demand driving the shortfall comes from artificial intelligence training and inference workloads, hyperscale cloud expansion, enterprise digital transformation, and latency-sensitive edge applications, according to Lafaille.

  ## Cooling as a grid-capacity variable

  Lafaille's analysis turns on a specific structural characteristic of data center power consumption: cooling systems account for roughly 30 percent of a typical facility's total energy draw, making cooling the largest non-IT electrical load and, by extension, a primary factor in how much grid capacity a given project requires.

  The industry has traditionally treated cooling performance through the lens of power usage effectiveness, or PUE — the ratio of total facility power consumed to the power delivered to IT equipment, where a PUE of 1.0 would represent a theoretically perfect facility with no overhead. Lafaille argued that when grid capacity is the binding constraint, PUE is the wrong frame: what matters is not how efficiently electricity drives cooling, but how much grid electricity cooling consumes at all.

  If total facility power demand can be reduced by 20 to 30 percent — by shifting cooling loads off the grid and onto alternative fuel sources such as natural gas — a site that previously lacked sufficient grid capacity can become viable without waiting years for interconnection queue timelines to clear, Lafaille contended.

  ## The arithmetic of off-grid cooling

  Lafaille provided a worked example to illustrate the potential reallocation. A facility serving a 1 megawatt (MW) IT load at a peak PUE of 1.4 draws 1.4 MW in total, of which approximately 0.4 MW flows to cooling and auxiliary systems. Shifting the cooling portion off the grid and onto an alternative fuel source, he estimated, reclaims roughly 0.3 MW — equivalent to a 30 percent increase in the power available for revenue-generating compute within the same interconnection allocation.

  The implication, Lafaille argued, is that cooling has shifted from an operational efficiency metric to a site-viability determinant: the same project that fails a grid-capacity test at conventional design assumptions may pass once cooling is redesigned around a different energy source.

  ## On-site generation addresses symptoms, not the constraint

  A growing portion of the industry is already pursuing on-site generation to reduce grid dependency. Lafaille cited projections that 38 percent of data centers will incorporate on-site generation by 2030. He noted, however, that on-site generation alone does not resolve the underlying interconnection bottleneck. Microgrids and other distributed energy systems can address power scarcity at the site level, he said, but do not eliminate the queue position risk or multi-year interconnection timelines that render sites non-viable in the first place.

  ## What it means for development strategy

  For the broader industry, Lafaille's argument points to a competitive reordering in data center development. Historically, the differentiating factors in site selection have been land availability and access to capital. Under current grid constraints, the ability to design a facility whose power profile fits within an available interconnection allocation — without sacrificing compute density — is becoming the primary variable separating viable projects from stalled ones.

  Developers who can activate constrained sites ahead of grid expansion will gain first-mover access to the most supply-limited markets, Lafaille contended, while those dependent on waiting for utility supply additions face multi-year delays.

  By 2030, 27 percent of US data centers are projected to operate entirely on on-site power generation, according to figures cited in Lafaille's analysis.
body_zh: |
  ## 電網容量不足拖垮半數美國資料中心建設計畫，Tecogen分析示警

  根據Tecogen業務開發副總裁史蒂芬．拉費爾（Stephen Lafaille）於7月5日在《Data Center Dynamics》發表的分析專欄，美國約有半數資料中心建設計畫正因電網容量不足而遭到延誤或取消——問題的根源並非土地或資金短缺，而是電力供需之間的結構性缺口將在2028年前急遽擴大。

  目前美國資料中心的裝機總容量約為51吉瓦（GW）。預計至2028年，新建設施將額外需要44吉瓦，然而電網在同一時間窗口內預計僅能供應其中25吉瓦，形成約19吉瓦的供電缺口，拉費爾在文中如此寫道。

  ## 瓶頸最嚴峻的市場

  拉費爾指出，在北維吉尼亞、鳳凰城、芝加哥及矽谷等主要開發市場，新增大型電力負載正式併入輸電網路的「併網時程」已延伸至三至五年甚至更長。結果是市場上愈來愈多土地已完成取得、分區核准與全數許可，建設計畫卻因在開發商要求的時程內無法取得足夠的電網配額而陷入停擺。

  拉費爾表示，推動這波需求缺口的來源包括：人工智慧訓練與推論工作負載、超大規模雲端擴張、企業數位轉型，以及對延遲敏感的邊緣應用。

  ## 冷卻系統：影響電網容量的關鍵變數

  拉費爾分析的核心在於資料中心用電消耗的一項結構性特徵：冷卻系統約佔典型設施總用電量的30%，是最大的非IT類電力負載，也因此成為決定某一建設計畫實際需要多少電網容量的主要因素。

  業界傳統上以電源使用效率（PUE）衡量冷卻表現——即設施總用電量與輸送至IT設備電量之間的比值，PUE若達1.0則代表理論上的完美設施，沒有任何額外開銷。拉費爾主張，當電網容量成為限制條件時，PUE並非正確的衡量框架：真正重要的不是電力驅動冷卻的效率有多高，而是冷卻系統究竟消耗了多少電網電力。

  他認為，若能透過將冷卻負載從電網轉移至天然氣等替代燃料來源，使設施總用電需求降低20%至30%，則原本因電網容量不足而無法推進的建設地點，便可在無需等待多年的併網排隊時程下成為可行方案。

  ## 離網冷卻的數字試算

  拉費爾以具體算例說明潛在的電力重新分配效益。一座服務1百萬瓦（MW）IT負載、尖峰PUE為1.4的設施，總用電量為1.4兆瓦，其中約0.4兆瓦流向冷卻與輔助系統。他估算，若將冷卻部分從電網移至替代燃料來源，可釋出約0.3兆瓦的電力——相當於在相同的電網併網配額下，用於產生營收的運算用電提升約30%。

  拉費爾由此主張，冷卻系統的定位已從營運效率指標轉變為決定建設地點是否可行的關鍵因素：同一個建設計畫在傳統設計假設下可能無法通過電網容量審核，一旦冷卻系統改以不同能源重新設計，便有機會順利過關。

  ## 現地發電治標不治本

  業界已有愈來愈多業者採用現地發電來降低對電網的依賴。拉費爾引用數據指出，預計至2030年，38%的資料中心將納入現地發電設備。然而他強調，現地發電本身並不能解決根本的電網併網瓶頸。他表示，微電網與其他分散式能源系統可在場地層級應對電力短缺問題，卻無法消除導致建設地點喪失可行性的排隊位置風險及多年期的電網併網時程。

  ## 對開發策略的影響

  就整體產業而言，拉費爾的論點指向資料中心開發版圖的競爭格局重組。過去，選址的關鍵差異化因素在於土地取得能力與資金取得管道；在當前的電網限制之下，能否設計出一座電力需求特性符合現有電網併網配額——且不犧牲運算密度——的設施，正逐漸成為區隔可行計畫與停滯計畫的首要變數。

  拉費爾主張，能夠在電網擴充到位之前率先啟動受限建設地點的開發商，將搶先進入供給最為緊俏的市場；而那些仰賴等待電力公司增加供電的業者，則將面臨長達數年的延誤。

  根據拉費爾分析中引用的數據，預計至2030年，美國將有27%的資料中心完全依靠現地發電運作。
date: "2026-07-06"
source_published: "2026-07-05T10:00:30.000Z"
category: "power"
secondary_categories: ["market"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: The 20 percent problem: why data center sites fail before they’re built (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/opinions/the-20-percent-problem-why-data-center-sites-fail-before-theyre-built/"
    title: "The 20 percent problem: why data center sites fail before they’re built"
    trust: 3
    type: primary
    published_at: "2026-07-05T10:00:30.000Z"
---
