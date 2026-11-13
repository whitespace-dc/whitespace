---
title_en: "Google Cloud London outage tied to power design flaw raises UK resilience concerns"
title_zh: "Google Cloud倫敦停機源於電源設計缺陷　引發英國雲端韌性疑慮"
summary_en: "Google's europe-west2-b availability zone in London suffered roughly six hours of disruption on 20 October after a voltage-sensing design flaw and a controller misconfiguration prevented automatic generator startup, knocking out 38 products and renewing industry debate over whether multi-zone cloud deployments provide genuine redundancy."
summary_zh: "Google旗下倫敦europe-west2-b可用區於10月20日發生長達約六小時的中斷事故，肇因於電壓感測設計缺陷與可程式邏輯控制器配置錯誤導致備用發電機無法自動啟動，共波及38項產品，並再度引發業界對多可用區部署是否真能提供有效冗餘保護的質疑。"
body_en: |
  Google's europe-west2-b availability zone in London went dark for roughly six hours on 20 October after a voltage-sensing design flaw and a programmable logic controller (PLC) misconfiguration prevented the facility's generator plant from starting automatically, Google said in an incident report published 4 November.

  With the generators offline, static uninterruptible power supply (UPS) battery banks — systems designed to bridge short gaps between mains power loss and generator startup — assumed the full load until their reserves ran out and the data halls lost power entirely.

  ## Scale of the disruption

  The outage, confined initially to one of Google's three London-region zones, affected 38 products across the broader London region. The practical consequences extended well beyond error-rate alerts: retailers could not process card payments, parcel deliveries failed, and court hearings were adjourned when video conferencing links went down, according to Samuel Carvalho, CEO of TelCables Europe.

  "One fault in one facility, and a good part of the UK's digital morning stopped," Carvalho said.

  The incident also exposed the limits of standard multi-zone deployment strategies. Carvalho argued that zones within a single cloud region share a control plane and, in some cases, a grid connection. "A lot of what we call redundancy in Europe is really concentration with three zone labels on it," he said, noting that companies which followed multi-zone, in-country guidance still went offline.

  The human cost persisted after power was restored. Transaction reconciliation — sorting failed and duplicated payments — can take days, Carvalho said, and small merchants and freelancers dependent on digital banking for cash flow can lose a full day of trading with no compensation.

  ## Financial exposure

  A July 2026 report by the Cyber Monitoring Centre and Parametrix, titled *The Cost of Downtime: UK Exposure to Cloud Infrastructure Failure*, found that 60% of UK companies rely on cloud services for critical functions. The report estimated that a 24-hour outage of a single major cloud region could cost UK firms between £650 million and £1 billion (approximately $863 million to $1.3 billion) in direct revenue losses. Those figures were derived from two hypothetical Amazon Web Services (AWS) outage scenarios: one centred on AWS's Northern Virginia hub, estimated at £650 million in impact on UK-facing operations, and one on AWS's Dublin region, estimated at around £1 billion.

  ## Sovereignty and concentration risk

  The incident sharpened debate over the intersection of data sovereignty and infrastructure resilience. If a national policy requires data to remain within a country and that country has only one hyperscale cloud region, Carvalho argued, the compliance requirement has become a single point of failure. "Sovereignty can't mean one region, one provider, and one grid connection," he said.

  TelCables Europe is seeing customers shift toward wanting a second, independently controlled location — another cloud region, another provider, or a carrier-neutral data centre — alongside data residency guarantees.

  "Sovereignty is not only about where the data sits, but about how many independent routes you have to reach it," Carvalho said.

  Carvalho added that the layers beneath the visible cloud stack — power supply, fibre routes, cable landing stations, and interconnection points — are treated as though they are robust, rather than as infrastructure dependent on a small number of operators.

  ## Recommended responses

  Carvalho outlined five measures he said would reduce the impact of similar events:

  - Map hidden dependencies: many companies affected by the October outage were not Google customers directly, but their suppliers were.
  - Maintain a second region with pre-built capacity, rather than a plan to build capacity during a crisis.
  - Allow offline processing for low-value payments so commerce can continue during outages.
  - Test resilience plans during business hours under real traffic conditions, and report results to the board.
  - Build network diversity across routes, carriers, and cable landing stations as the foundation for all other resilience measures.

  ## Industry pattern

  Carvalho noted that the October 2026 Google outage occurred almost exactly one year after a roughly 15-hour AWS outage, characterising it as a pattern the industry should examine rather than attribute to bad luck.

  The primary lesson Carvalho drew: power and connectivity for data centres should be treated as critical infrastructure in both planning and grid prioritisation. "Connectivity comes before computing," he said. "Get that layer right, and every other failure becomes a recoverable situation."
body_zh: |
  Google在11月4日發布的事故報告中說明，其位於倫敦的europe-west2-b可用區於10月20日發生長達約六小時的斷電事故，肇因於電壓感測設計缺陷以及可程式邏輯控制器（PLC）配置錯誤，導致該設施的備用發電機組無法自動啟動。

  在發電機無法運作的情況下，靜態不斷電系統（UPS）電池組——這類系統設計上是用於填補市電中斷至發電機啟動之間的短暫空窗——被迫承擔全部負載，直至備用電力耗盡，機房才全面斷電。

  ## 停機規模

  此次事故最初僅波及Google在倫敦三個區域可用區之一，但最終影響了整個倫敦區域內的38項產品。實際衝擊遠不止錯誤率告警。據TelCables Europe執行長Samuel Carvalho表示，零售商無法處理刷卡付款、包裹配送中斷，法院庭審也因視訊連線中斷而被迫延期。

  「一個設施出現一個故障，英國相當大一部分的數位化早晨就此停擺，」Carvalho說。

  這起事故也暴露了標準多可用區部署策略的侷限。Carvalho指出，同一雲端區域內的各可用區共享同一控制平面，在某些情況下甚至共用同一條電網連線。「我們在歐洲所謂的冗餘，很多其實只是集中化，不過是貼上三個可用區標籤罷了，」他說，並指出即使遵循多可用區、在地部署建議的企業，仍然在此次事故中被迫下線。

  斷電恢復後，衝擊仍未結束。Carvalho表示，交易核帳——釐清失敗與重複付款的問題——可能耗時數天，而依賴數位銀行維持現金流的小型商家與自由工作者，可能損失整整一天的營業收入，且無從獲得任何補償。

  ## 財務損失估算

  Cyber Monitoring Centre與Parametrix於2026年7月聯合發布的報告《停機代價：英國雲端基礎設施故障的曝險》指出，英國有60%的企業仰賴雲端服務執行關鍵業務。報告估計，若單一主要雲端區域發生長達24小時的中斷，英國企業將承受6億5,000萬英鎊至10億英鎊（約合8億6,300萬至13億美元）的直接營收損失。上述數字來自兩個假設性的Amazon Web Services（AWS）中斷情境：一是以AWS北維吉尼亞樞紐為核心的場景，估計對英國業務的衝擊約為6億5,000萬英鎊；另一是以AWS都柏林區域為核心的場景，估計衝擊約達10億英鎊。

  ## 資料主權與集中化風險

  此次事故進一步激化了資料主權與基礎設施韌性交會點的論辯。Carvalho指出，若國家政策要求資料必須留存於境內，而該國只有單一超大規模雲端區域，這項合規要求本身就已成為單點故障。「主權不能只代表一個區域、一個供應商、一條電網連線，」他說。

  TelCables Europe觀察到，客戶開始傾向在資料在地化保證之外，同時建立第二個獨立受控的位置——無論是另一個雲端區域、另一家供應商，或是電信中立資料中心。

  「主權不只關乎資料存放在哪裡，更關乎你有多少條獨立路徑可以抵達那份資料，」Carvalho說。

  他補充指出，雲端堆疊可見層之下的基礎——電力供應、光纖路由、海纜登陸站與互連節點——往往被視為理所當然的穩健存在，而非依賴少數業者維運的脆弱基礎設施。

  ## 建議因應措施

  Carvalho提出五項措施，他認為這些措施有助於降低類似事故的衝擊：

  - **盤點隱性依賴**：許多在此次10月事故中受波及的企業，本身並非Google的直接客戶，而是其供應商使用了Google的服務。
  - **預先在第二區域建立備援容量**，而非等到危機爆發後才臨時規劃建置。
  - **允許低金額付款採用離線處理**，確保停機期間商業活動仍能持續運作。
  - **在正常上班時間、真實流量條件下測試韌性計畫**，並將測試結果向董事會報告。
  - **建立跨路由、跨電信業者、跨海纜登陸站的網路多元化**，以此作為所有其他韌性措施的根基。

  ## 產業趨勢

  Carvalho指出，2026年10月的Google中斷事故，發生時間距離一年前那次長達約15小時的AWS停機事故幾乎恰好一年，他認為這是產業應當正視的規律，而非單純的不幸巧合。

  Carvalho從中得出的核心教訓是：資料中心的電力與網路連線，無論在規劃層面還是電網優先序上，都應被視為關鍵基礎設施對待。「連線能力先於運算能力，」他說，「把那一層做對，其他任何故障都將成為可以復原的情況。」
date: "2026-11-14"
source_published: "2026-11-13T15:17:50.000Z"
category: "software-ops"
secondary_categories: []
region: ["United Kingdom"]
vendor: ["AWS", "Google Cloud"]
trust:
  score: 3
  reasoning: "Single source: “Failures are inevitable, outages of this scale are not”: lessons from Google Cloud’s London outage (trust 3/5)."
sources:
  - url: "https://capacityglobal.com/news/failures-are-inevitable-outages-of-this-scale-are-not-lessons-from-google-clouds-london-outage/"
    title: "“Failures are inevitable, outages of this scale are not”: lessons from Google Cloud’s London outage"
    trust: 3
    type: primary
    published_at: "2026-11-13T15:17:50.000Z"
---
