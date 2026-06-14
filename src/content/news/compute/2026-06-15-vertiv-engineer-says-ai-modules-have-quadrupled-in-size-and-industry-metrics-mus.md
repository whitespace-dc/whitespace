---
title_en: "Vertiv Engineer Says AI Modules Have Quadrupled in Size and Industry Metrics Must Follow"
title_zh: "Vertiv工程師：AI運算模組功率一年翻四倍，業界效率指標須同步革新"
summary_en: "Vertiv's Peter Panfil told the 2026 7x24 Exchange Spring Conference that integrated AI compute modules have grown from 1.5 MW to 6 MW in roughly a year, with 12 MW configurations already in discussion, and argued that Power Usage Effectiveness should give way to a tokens-per-watt-per-dollar efficiency standard."
summary_zh: "Vertiv傑出工程師彼得·潘菲爾（Peter Panfil）在2026年7x24 Exchange春季研討會上指出，整合式AI運算模組的電力容量在不到一年內已從1.5 MW暴增至6 MW，12 MW規格的討論也已展開；他並主張業界應以「每瓦每元token產出量」取代沿用多年的PUE效率指標。"
body_en: |
  Vertiv Distinguished Engineer and Vice President of Technical Business Development Peter Panfil told attendees at the 2026 7x24 Exchange Spring Conference in Orlando on Wednesday that integrated AI compute modules have grown fourfold in power capacity over roughly one year and are heading toward configurations twice as large again, while calling for the data center industry to abandon its primary efficiency benchmark in favor of a metric tied directly to AI output.

  Panfil delivered the morning keynote under the title "Scale at Speed: How Massively Parallel Compute GPUs Are Revolutionizing Data Center Design." The conference's overarching theme was future-proofing AI infrastructure.

  ## Module capacity has grown from 1.5 MW to 6 MW in one year

  The clearest measure of the pace Panfil described is the trajectory of factory-assembled compute modules. About a year ago, he said, Vertiv was designing integrated units at approximately 1.5 megawatts (MW) each. Following an updated GPU roadmap from NVIDIA, those designs have expanded to roughly 6 MW per module. Discussions are already underway around 12 MW configurations.

  "We're putting into a hack what we used to put into an entire room," Panfil said, using the industry shorthand for hot aisle containment (HAC) modules — enclosed, self-contained units that house racks, power distribution, and cooling in a single pre-integrated assembly.

  Those modules are increasingly assembled and tested in factories, including full fluid charging and capacity validation, before being transported to a site, craned into position, and connected to power and liquid supplies for rapid commissioning. Panfil described the underlying philosophy as "normalization rather than standardization" — performing the same operations repeatedly to improve speed, quality, and scale, rather than simply mandating uniform specifications.

  ## Deployment speed now carries direct economic weight

  Panfil argued that time-to-capacity has become an economic variable in its own right, not merely an operational preference. Hyperscalers and AI providers, he said, view delays in construction or commissioning as directly destroying business value.

  "The cost of speeding up has real benefits right now," he told the audience.

  That urgency is pushing operators away from on-site coordination among multiple independent contractors and subsystem vendors. Panfil said the site-assembly model creates risk at the points where equipment, organizations, and project phases meet — what he called "the seams." Failures, he said, occur not within products themselves but at those intersections.

  "These days of disconnected pieces are over," he said. "The systems now have to be tightly woven together because they are all dependent on each other."

  Factory-assembled modules reduce the number of those seams by delivering large, pre-integrated building blocks that require connection rather than construction once on site.

  ## Infrastructure now constitutes 80 percent of facility focus at high rack densities

  Panfil argued that one of the least-appreciated consequences of AI workloads is a fundamental reversal in how the physical composition of a data center breaks down. In cloud-era facilities built around 10-kilowatt (kW) racks — a standard measure of per-rack power draw — he said infrastructure such as power distribution, cooling, and mechanical systems represented about 20 percent of the facility's engineering focus, with compute equipment accounting for 80 percent.

  At the 100-plus-kilowatt rack densities driven by current AI accelerators, he said, those proportions have inverted: compute now accounts for roughly 20 percent of the facility, while physical infrastructure — electrical distribution, liquid cooling systems, coolant distribution units, pumping, heat rejection, and power conversion — accounts for 80 percent.

  "In the cloud world, we were 20% infrastructure and 80% compute because we were dealing with 10-kilowatt racks," Panfil told attendees. "Now that we're dealing with 100-plus-kilowatt racks, it's completely flipped."

  The implication, he argued, is that thermal management and power delivery can no longer be treated as supporting systems. At current and projected rack densities, they define the primary engineering problem around which next-generation AI facilities must be designed.

  ## PUE faces replacement by a token-output efficiency measure

  Power Usage Effectiveness, or PUE, has served for decades as the data center industry's primary efficiency benchmark. The metric compares a facility's total power consumption against the power consumed by its IT equipment; a PUE of 1.0 would mean no overhead at all, while most modern hyperscale facilities operate between roughly 1.1 and 1.5.

  Panfil argued that AI economics will shift industry attention toward a more outcome-oriented measure. "It's my opinion that tokens per dollar per watt is going to replace PUE," he said, describing a future in which facilities are judged not on minimizing overhead but on maximizing economically useful AI output — measured in tokens, the discrete units of text or data an AI model processes and generates — per unit of power consumed.

  The precise framing of the metric was refined during the Q&A session by James Coe, Critical Facilities Director and Senior Principal at engineering firm Syska Hennessy Group. Coe agreed that token production would become the defining economic lens but argued the ordering of the variables should be reversed. Rather than tokens per dollar per watt, he proposed tokens per watt per dollar, on the grounds that data center operators directly control power and cooling efficiency, while computational efficiency per watt is determined by GPU vendors.

  "My opinion is we are going to start measuring tokens per watt per dollar," Coe said, noting that AI service providers already price their services in tokens while infrastructure teams optimize the physical environment supporting those workloads.

  Panfil accepted the refinement directly. "You're spot on," he replied, adding that the industry needs a kind of "decoder ring" capable of translating familiar metrics like PUE into measures that reflect AI productivity and business value.

  ## Behavioral modeling and digital twins for dynamic thermal management

  Panfil also described behavioral modeling and digital twins — software representations of physical systems that can be updated in real time — as emerging core engineering disciplines for managing the thermal and electrical demands of AI workloads, which fluctuate significantly during training and inference cycles. The approach enables dynamic optimization of cooling and electrical systems in response to changing load conditions, rather than engineering for static worst-case scenarios.

  ## Significance for the industry

  The trajectory Panfil described at the 7x24 Exchange conference points toward a data center industry in which the unit of deployment is no longer an individual rack or room build-out but a factory-validated, multi-megawatt computing module, and in which the dominant engineering discipline shifts from IT systems integration to high-density power and thermal management. The shift in efficiency metrics, if the tokens-per-watt-per-dollar framing gains traction, would reorient how infrastructure teams, equipment vendors, and hyperscale customers define and measure the value of physical infrastructure investments.

  With 12 MW module configurations already under discussion and rack densities continuing to climb, Panfil indicated that the current 6 MW benchmark is not a stopping point.
body_zh: |
  Vertiv傑出工程師暨技術業務發展副總裁彼得·潘菲爾（Peter Panfil）週三在佛羅里達州奧蘭多舉行的2026年7x24 Exchange春季研討會上向與會者表示，整合式AI運算模組的電力容量在短短約一年內已成長四倍，且仍持續朝更大規格邁進；他同時呼籲資料中心產業拋棄現行主要效率基準，改採與AI實際產出直接掛鉤的新指標。

  潘菲爾以「規模與速度：大規模平行運算GPU如何革新資料中心設計」為題發表上午主題演講。本屆研討會的整體主軸為強化AI基礎設施的未來應變能力。

  ## 模組容量一年內從1.5 MW躍升至6 MW

  潘菲爾所描述的發展速度，從工廠組裝運算模組的成長軌跡可見一斑。他表示，大約一年前，Vertiv設計的整合式機組每套約為1.5百萬瓦（MW）；隨著輝達（NVIDIA）更新GPU產品藍圖，這些設計已擴展至每套約6 MW，12 MW規格的相關討論也已展開。

  「我們正把過去一整個機房才裝得下的設備，全塞進一個HAC（熱走道圍封）模組裡，」潘菲爾說。他口中的「hack」是業界對熱走道圍封（HAC）模組的口語簡稱——這是一種封閉式獨立機組，將機架、配電系統與冷卻設備整合於單一預組裝體中。

  這類模組越來越多在工廠完成組裝與測試，包括完整的液體充注與容量驗證，再運往現場、以吊車定位就緒，接上電源與液冷管路即可快速投入運作。潘菲爾將這套核心理念定義為「常態化而非標準化」（normalization rather than standardization）——透過反覆執行相同作業來提升速度、品質與規模，而非單純強制統一規格。

  ## 部署速度已成攸關損益的經濟變數

  潘菲爾主張，從建置決策到容量上線所需的時間，已不再只是運營上的偏好，而是具有直接財務意義的經濟變數。他指出，超大規模業者與AI服務提供商將工程建置或設備試運轉的任何延誤，都視為直接摧毀商業價值的根源。

  「加速部署所需的投入，在當下就有真實的效益回報，」他告訴與會者。

  這股迫切性正驅使業者遠離傳統由多家獨立承包商與子系統供應商現場協作的模式。潘菲爾表示，現場組裝模式在設備、組織與專案階段相互交接之處——他稱之為「接縫」（seams）——製造了額外風險。他說，故障往往不是發生在產品本身，而是在這些交接點上。

  「各自為政、環節分散的時代已經結束，」他說，「現在所有系統必須緊密交織，因為彼此之間高度相依。」

  工廠組裝模組能減少接縫數量，在現場交付的是大型、預先整合的建構單元，到位後只需接線連管，無需從頭組裝。

  ## 高機架密度下基礎設施占比已達八成

  潘菲爾指出，AI工作負載帶來的諸多後果中，有一項最容易遭到忽視——那就是資料中心實體組成比例出現了根本性翻轉。在雲端時代以10千瓦（kW）機架為主流的設施中，配電、冷卻、機電等基礎設施大約只佔設施工程重心的兩成，計算設備則佔了八成。

  然而，在當前AI加速器所驅動、每架超過100千瓦的高密度環境下，這個比例已完全對調：計算設備僅佔設施的約兩成，實體基礎設施——涵蓋電力配送、液冷系統、冷卻液分配單元、泵組、熱排除設備與電源轉換——則佔了八成。

  「在雲端時代，我們面對的是10千瓦機架，所以基礎設施佔兩成、計算設備佔八成，」潘菲爾對與會者說，「現在我們面對的是超過100千瓦的機架，比例已完全翻轉。」

  他認為，這意味著散熱管理與電力輸送不再能被視為配套的支援系統。在當前及預期的機架密度下，它們才是次世代AI設施設計必須圍繞其打造的核心工程課題。

  ## PUE面臨被token產出效率指標取代的命運

  電源使用效率（Power Usage Effectiveness，PUE）數十年來一直是資料中心產業的主要效率基準。這項指標以設施總用電量除以IT設備用電量；PUE為1.0代表沒有任何額外開銷，而現代超大規模設施大多介於1.1至1.5之間。

  潘菲爾主張，AI經濟學將促使業界注意力轉向更以成果為導向的衡量方式。「我認為，每元每瓦token數將取代PUE，」他說，並描繪出一個未來：設施的評判標準不再是最小化額外開銷，而是最大化每單位電力消耗所能產生的具有經濟價值的AI產出——以token計算，即AI模型所處理與生成的文字或資料的最小離散單位。

  這項指標的精確表述，在問答環節中獲得進一步修正。工程顧問公司Syska Hennessy Group的關鍵設施總監暨資深首席工程師詹姆斯·柯伊（James Coe）同意token產出量將成為定義經濟價值的核心視角，但主張變數的排列順序應予調整。他提議改用「每瓦每元token數」，而非「每元每瓦token數」，理由是資料中心營運商直接掌控電力與冷卻效率，而每瓦的運算效率則取決於GPU供應商。

  「我認為我們將開始以每瓦每元token數來衡量，」柯伊說，並指出AI服務供應商已以token為單位對服務定價，而基礎設施團隊則負責優化支撐這些工作負載的實體環境。

  潘菲爾當場接受了這項修正。「你說得完全正確，」他回應道，並補充表示業界需要一種「解碼環」，能將PUE等大家熟悉的指標轉譯為能反映AI生產力與商業價值的衡量方式。

  ## 行為建模與數位孿生助力動態散熱管理

  潘菲爾也談及行為建模與數位孿生——能即時更新的實體系統軟體模擬模型——正逐步成為管理AI工作負載熱能與電力需求的核心工程技術。AI工作負載在訓練與推論週期中負載波動顯著，這套方法能讓冷卻與電力系統根據變動的負載條件動態優化，而非針對靜態的最壞情況進行設計。

  ## 產業意涵

  潘菲爾在7x24 Exchange研討會上所描繪的發展軌跡，指向一個資料中心產業的全新樣貌：部署單元不再是個別機架或機房擴建，而是工廠驗證的多百萬瓦運算模組；主導的工程技術也將從IT系統整合，轉移至高密度電力與散熱管理。若「每瓦每元token數」這套效率指標框架能獲得廣泛採納，將重新定義基礎設施團隊、設備供應商與超大規模客戶評估及衡量實體基礎設施投資價值的方式。

  隨著12 MW模組規格的討論已然展開，機架密度也持續攀升，潘菲爾表示，現行的6 MW基準並非終點。
date: "2026-06-15"
source_published: "2026-06-12T17:59:25.082Z"
category: "compute"
secondary_categories: ["power"]
region: []
vendor: ["Nvidia", "Vertiv"]
trust:
  score: 3
  reasoning: "Single source: From Components to AI Factories: Peter Panfil Says the Future of Data Centers Is All About Integration at Scale (trust 3/5)."
sources:
  - url: "https://www.datacenterfrontier.com/design/article/55383956/from-components-to-ai-factories-peter-panfil-says-the-future-of-data-centers-is-all-about-integration-at-scale"
    title: "From Components to AI Factories: Peter Panfil Says the Future of Data Centers Is All About Integration at Scale"
    trust: 3
    type: primary
    published_at: "2026-06-12T17:59:25.082Z"
---
