---
title_en: "Immersion Cooling Remains a Niche as High Capital Costs and Operational Disruption Deter Operators"
title_zh: "高建置成本與營運衝擊使浸沒式冷卻持續邊緣化"
summary_en: "Immersion cooling — which submerges IT equipment in dielectric liquid to dissipate heat — remains a marginal data center technology in 2026 despite energy efficiency and water-free operation advantages, blocked by installation costs roughly 54% higher than the leading alternative and demands for sweeping changes to data center design and operations."
summary_zh: "浸沒式冷卻（immersion cooling）儘管具備節能與零水耗優勢，時至2026年在資料中心業界仍屬邊緣技術；其建置成本較直接液冷高出約54%，加上對資料中心設計與營運模式的全面衝擊，共同阻礙了這項技術的普及。"
body_en: |
  Immersion cooling, a technique that keeps IT equipment cool by submerging it in liquid, remains a niche data center technology in 2026 despite demonstrated efficiency gains and zero water consumption, with most operators continuing to favor direct-to-chip cooling or conventional air-based systems over a method that has been technically viable for decades.

  ## The cost gap against direct-to-chip cooling

  The upfront capital required for immersion is the primary obstacle. Installing an immersion system costs approximately $1 million per megawatt (MW) of IT load — a MW being roughly the sustained power draw of a large server hall — compared with $650,000 per MW for direct-to-chip cooling, which routes coolant through pipes placed adjacent to processors rather than submerging entire servers, according to estimates cited by Data Center Knowledge. Air- and evaporative-based systems carry significantly lower capital costs still, widening the gap further for operators focused on near-term outlay.

  Immersion does generate savings over a longer horizon. According to figures from Adam Silva Consulting cited in the report, cooling a 64-rack AI computing cluster over 10 years costs $42 million using advanced air cooling, $31 million with direct-to-chip liquid cooling, and $28 million with single-phase immersion. That 10-year cost advantage of roughly $3 million over direct-to-chip, however, may not be large enough to justify immersion's materially higher upfront expense, particularly for operators under pressure to bring capacity online quickly.

  ## Operational disruption beyond the capital line

  Cost is not the only barrier. Immersion cooling requires fundamental changes to how data centers are designed and run, and the industry has operated under largely consistent norms for decades: servers in conventional racks, familiar floor layouts, and established workflows for maintenance and monitoring.

  Immersion systems eliminate airflow as a primary design constraint, which forces architectural changes at the building and white-space level. Servers submerged in liquid tanks are not accessed the same way as servers in traditional cabinets, so maintenance procedures change. Monitoring tools, service processes, and technician training all require adaptation.

  Direct-to-chip cooling also requires design changes, but those changes are more incremental. Operators can retain the conventional server-and-rack model, making adoption easier to absorb. Immersion, by contrast, demands a broader rethinking of what a data center looks like and how it functions — a cultural as much as a technical shift.

  ## AI workloads have not yet tipped the balance

  High-density AI training and inference workloads generate concentrated heat loads that make immersion a natural technical fit, and some large AI data centers under construction may be planning immersion deployments. As of 2026, however, few major operators have publicly committed to immersion at scale. Most recent coverage has focused on pilots, demonstrations, and proofs of concept, including a well-known experiment conducted by Microsoft earlier this decade.

  If power-intensive AI workloads continue to grow, the case for immersion may strengthen: the denser and hotter compute environments become, the more effective immersion's thermal handling becomes relative to alternatives. If the AI infrastructure buildout plateaus before immersion gains real commercial momentum, the technology may remain largely experimental.

  ## Regulatory and sustainability pressure provide partial, uneven incentive

  Public and regulatory concern about data center water consumption — an argument in immersion's favor, since immersion systems use no water — appears to have eased somewhat from a peak one or two years ago, reducing one potential source of urgency for the technology.

  Concerns about data centers' draw on electrical grids have led to development moratoriums and tighter scrutiny in some markets, an environment that could push more operators toward immersion to lower their power usage effectiveness (PUE), the ratio of total facility energy to the energy consumed by IT equipment itself. Cooling overhead is a contributor to PUE, and immersion can reduce it. That said, cooling represents only a secondary share of a data center's total electricity consumption; the IT equipment itself is the dominant load. Immersion cooling alone is therefore unlikely to resolve the industry's broader power challenges.

  ## What comes next

  As of 2026, no single market force has overcome the combined weight of immersion cooling's higher upfront costs, operational complexity, and an industry accustomed to incremental change. Direct-to-chip cooling is projected to grow rapidly in the near term; immersion is not. Whether that changes will depend on how much further AI-driven power densities climb and whether regulatory pressure on energy and water use intensifies enough to shift operators' financial calculus toward longer-payback investments.
body_zh: |
  浸沒式冷卻（immersion cooling）——一種將IT設備浸沒於介電液體（dielectric liquid）中以散熱的技術——儘管具備顯著的效能優勢與零水耗特性，時至2026年在資料中心業界仍屬利基技術。這項技術數十年來已具備技術可行性，多數業者卻持續偏好直接液冷（direct-to-chip cooling）或傳統氣冷系統，而非廣泛採用這套方案。

  ## 與直接液冷的成本差距

  前期資本支出是浸沒式冷卻面臨的首要障礙。根據Data Center Knowledge引用的估算，浸沒式系統的建置成本約為每百萬瓦（MW）IT負載100萬美元——1 MW大致相當於一座大型機房的持續用電規模——而直接液冷（將冷卻液透過管路導引至處理器旁，而非將整台伺服器浸入液體中）的建置成本僅需每MW約65萬美元。氣冷與蒸發式冷卻系統的資本成本更低，對於著眼短期支出的業者而言，差距更加懸殊。

  從較長的時間維度來看，浸沒式冷卻確能帶來成本節省。根據該報告引用的Adam Silva Consulting數據，以64機架AI運算叢集為例，10年冷卻總成本分別為：進階氣冷4,200萬美元、直接液冷3,100萬美元、單相浸沒式冷卻2,800萬美元。然而，浸沒式相較於直接液冷在10年間僅節省約300萬美元，對於正面臨快速擴容壓力的業者而言，這樣的差距恐怕難以支撐其顯著更高的前期支出。

  ## 資本支出之外的營運衝擊

  成本並非唯一障礙。浸沒式冷卻要求資料中心在設計與營運方式上進行根本性的改變，然而這個產業數十年來已形成相當一致的運作規範：伺服器置於傳統機架、熟悉的機房佈局，以及固定的維護與監控作業流程。

  浸沒式系統消除了氣流作為主要設計約束的角色，迫使建築與白色空間（white space）層級的架構進行調整。浸沒在液槽中的伺服器，存取方式與傳統機櫃截然不同，維護程序也因此改變。監控工具、服務流程及技術人員訓練均需全面調整。

  直接液冷雖然同樣需要設計變更，但幅度相對漸進。業者仍可保留傳統的伺服器與機架模式，使採用門檻較低、較易消化。相較之下，浸沒式冷卻要求對資料中心的面貌與運作方式進行更全面的重新思考——這不僅是技術上的轉型，更是文化上的轉變。

  ## AI工作負載尚未扭轉局勢

  高密度AI訓練與推論工作負載產生高度集中的熱負荷，使浸沒式冷卻在技術上具有天然的適配性，部分正在興建中的大型AI資料中心或許正在規劃導入浸沒式冷卻。然而截至2026年，尚無主要業者公開承諾大規模部署這項技術。近期相關報導多聚焦於試點計畫、示範案例與概念驗證，包括微軟（Microsoft）本世紀初進行的一項廣為人知的實驗。

  若高耗電AI工作負載持續增長，支持浸沒式冷卻的論據或將愈加充分：運算環境密度愈高、溫度愈高，浸沒式冷卻相較於其他方案的散熱優勢便愈為突出。反之，若AI基礎設施建置熱潮在浸沒式冷卻取得真正商業動能之前趨於平緩，這項技術恐將長期停留在實驗階段。

  ## 法規與永續壓力提供部分且不均衡的誘因

  外界與監管機構對資料中心耗水量的關注——此乃支持浸沒式冷卻的一大論點，因為浸沒式系統完全不耗水——似乎已較一兩年前的高峰略有降溫，削弱了推動這項技術普及的潛在緊迫感。

  然而，各界對資料中心大量消耗電網電力的疑慮，已在部分市場導致建設暫停令與更嚴格的審查。這樣的環境或許促使更多業者轉向浸沒式冷卻，以降低電力使用效率（PUE）——即設施總用電量與IT設備實際用電量之比值。冷卻是PUE的構成項目之一，浸沒式冷卻有助於壓低此比值。話雖如此，冷卻在資料中心總電力消耗中僅屬次要比重，IT設備本身才是最主要的耗電來源。因此，單靠浸沒式冷卻，恐怕難以解決業界在電力方面面臨的深層挑戰。

  ## 後市展望

  截至2026年，沒有任何單一市場力量足以克服浸沒式冷卻高前期成本、營運複雜性，以及整個產業習於漸進式變革的慣性所帶來的綜合阻力。直接液冷在近期預計將快速成長；浸沒式冷卻則不然。這一局面是否改變，將取決於兩大因素：AI驅動的功率密度究竟能攀升至何種程度，以及監管機構在能源與用水方面的壓力，是否足以強烈到促使業者的財務考量轉向接受更長回收期的投資。
date: "2026-11-18"
source_published: "2026-11-17T10:00:00.000Z"
category: "cooling"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Why Immersion Cooling Still Hasn't Gone Mainstream (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/cooling/why-immersion-cooling-still-hasn-t-gone-mainstream"
    title: "Why Immersion Cooling Still Hasn't Gone Mainstream"
    trust: 3
    type: primary
    published_at: "2026-11-17T10:00:00.000Z"
---
