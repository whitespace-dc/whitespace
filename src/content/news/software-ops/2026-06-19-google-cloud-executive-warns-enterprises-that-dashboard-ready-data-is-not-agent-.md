---
title_en: "Google Cloud executive warns enterprises that dashboard-ready data is not agent-ready"
title_zh: "Google Cloud高層示警：儀表板資料不等於AI代理人就緒"
summary_en: "Google Cloud's managing director for data and AI warned at the company's London summit that enterprises are repeating a common mistake: treating data clean enough for a human dashboard as clean enough for an autonomous AI agent. The gap, she argued, is now the central obstacle to scaling agent deployments beyond pilots."
summary_zh: "Google Cloud資料與AI部門董事總經理在倫敦峰會上指出，企業正重蹈一個系統性錯誤——將適合人工儀表板判讀的資料，誤當成自主AI代理人可直接使用的資料。她強調，這道落差如今已成為代理人部署規模化的核心障礙。"
body_en: |
  Google Cloud's managing director of product management for data and AI cloud, Yasmeen Ahmad, told attendees at Google Cloud Summit London on Wednesday that enterprises deploying AI agents are making a systematic data-readiness error she calls the "dashboard fallacy," and that closing it requires a different approach to how business context is captured and governed.

  Ahmad's remarks framed the fallacy precisely: a human reading a dashboard brings unstated context the data itself does not contain. An AI agent does not. As a simple example she offered the term "active user," which finance and marketing teams at the same company routinely define differently. An agent operating without that clarification will produce outputs based on whichever definition its data embeds, with no signal to the business that the mismatch exists.

  ## The shift from deterministic to probabilistic systems

  Ahmad connected her London remarks to a thesis she set out earlier this year in a Fortune commentary piece, where she described enterprise software as undergoing what she called the biggest collision in the history of software: a shift from deterministic systems, which always produce the same output from the same input, to generative AI, which reasons probabilistically and can return different answers from identical inputs. She said at the summit that this unpredictability is not a flaw to be engineered away but a property businesses must learn to manage.

  In practice, she said, agents are no longer confined to advisory roles. Enterprises are now deploying them autonomously to book orders in ERP (enterprise resource planning) systems, publish marketing campaigns and send emails without a human approving each step.

  ## Autonomy tied to decision risk

  Ahmad argued that autonomy should not be treated as a binary setting. The appropriate level depends on the risk attached to a specific decision. She gave a concrete illustration: an agent might be trusted to spend $5,000 on search-engine optimisation without oversight, but the same agent proposing a $1 million expenditure should trigger a human review. In high-stakes domains such as medical imaging analysis, she said, a human remains in the loop on every individual decision.

  ## Guardian agents as a design pattern

  Rather than relying solely on people to provide that oversight, Ahmad pointed to a growing pattern of what she called guardian or verifier agents: AI systems built specifically to police the decisions of other AI systems.

  She cited Deutsche Telekom as a live example. The company has deployed swarms of agents to analyse network data and propose configuration changes. A separate guardian agent applies business logic to approve or block those changes before they reach the live network. Ahmad described a similar arrangement at an unnamed financial services customer, where distributed trading agents operate under a verifier agent that can halt a trade at any point if market conditions shift. Guardian agents, she said, are now being designed into agent swarms from the outset rather than added as an afterthought.

  ## From metadata catalogues to knowledge catalogues

  The core data-readiness problem, Ahmad said, is that technical metadata catalogues, which record data lineage and schema, do not capture the business rules and definitions that give data meaning in a specific organisational context. Google Cloud has been pushing customers to evolve those catalogues into what it calls a knowledge catalogue: one that explicitly encodes the context a human would otherwise supply.

  The problem compounds at scale. Hand-coding business context into a single agent is manageable. Doing it across thousands of agents distributes that context across every individual system rather than managing it centrally, creating inconsistency and maintenance overhead.

  ## Dark data and the 80-to-90 percent problem

  Ahmad flagged unstructured data, which she described as the 80 to 90 percent of enterprise data that was never built for analysis, as a further obstacle. This "dark data" poses particular challenges for autonomous agents because it lacks the access controls and structure that would make it safe and useful as an input.

  On the positive side, she pointed to businesses using agents to handle the underlying data engineering itself, building pipelines and governance structures through AI rather than manually. She called this approach "intent-driven engineering."

  ## Implications for enterprise AI deployments

  The significance of Ahmad's remarks is that they reframe a persistent question about enterprise AI. Much discussion of agent deployment has centred on model capability and integration complexity. Ahmad's argument shifts the focus to data governance: even capable, well-integrated agents will produce unreliable outputs if the data and context they operate on have not been prepared for autonomous use rather than human interpretation.

  The pattern she described, in which guardian agents are incorporated into swarm architectures as a primary design element rather than a safeguard layer, signals that the engineering model for large-scale agent deployment is still being worked out in production at companies such as Deutsche Telekom rather than settled in advance by platform vendors.

  Google Cloud Summit London took place on Wednesday, 18 June 2026.
body_zh: |
  ## Google Cloud高層示警：儀表板資料不等於AI代理人就緒

  Google Cloud資料與AI雲端產品管理董事總經理亞斯敏．阿赫瑪德（Yasmeen Ahmad）週三在Google Cloud倫敦峰會上向與會者表示，正在部署AI代理人的企業普遍犯了一個她稱之為「儀表板謬誤」的系統性資料準備錯誤，而要彌補這道落差，必須從根本上改變企業捕捉與治理業務情境的方式。

  阿赫瑪德精確點出這個謬誤的核心：人類閱讀儀表板時，會自動帶入資料本身並未包含的隱性情境；AI代理人則不然。她舉了一個簡單的例子：「活躍用戶」這個詞，同一家公司的財務團隊與行銷團隊往往有截然不同的定義。代理人在缺乏明確說明的情況下運作，輸出結果將取決於資料本身所內嵌的是哪一種定義，而企業也不會收到任何訊號，提示這種定義落差的存在。

  ## 從確定性系統到機率性系統的典範轉移

  阿赫瑪德在倫敦的發言，呼應了她今年稍早在《財星》（Fortune）雜誌撰文時提出的核心論點。她在該文中將企業軟體當前所經歷的變革，形容為「軟體史上最劇烈的碰撞」——從確定性系統（相同輸入必然產生相同輸出）轉向生成式AI（以機率方式推理，相同輸入可能產生不同答案）。她在峰會上表示，這種不可預測性並非有待工程解決的缺陷，而是企業必須學會管理的系統特性。

  她指出，就現實狀況而言，代理人早已不再侷限於提供建議的輔助角色。企業如今已部署代理人自主在ERP（企業資源規劃）系統中下訂單、發布行銷活動，以及在無需人工逐一審核的情況下發送電子郵件。

  ## 自主程度應與決策風險掛鉤

  阿赫瑪德主張，自主性不應被視為非此即彼的二元開關，適當的自主程度取決於特定決策所附帶的風險。她舉了一個具體例子：一個代理人或許可以在無人監督的情況下自主花費5,000美元進行搜尋引擎最佳化，但同一個代理人若提議支出100萬美元，就應觸發人工審查機制。在醫學影像分析等高風險領域，她說，每一項個別決策都必須維持人工介入的環節。

  ## 守護代理人作為設計模式

  阿赫瑪德指出，除了倚賴人工提供監督之外，業界正出現一種日益普遍的設計模式——她稱之為「守護代理人」或「驗證代理人」：專門用於監管其他AI系統決策的AI系統。

  她引用德國電信（Deutsche Telekom）作為現行案例。該公司部署了大批代理人用於分析網路資料並提出組態變更建議，再由一個獨立的守護代理人套用業務邏輯，在變更正式套用至線上網路之前予以核准或封鎖。阿赫瑪德亦描述了一家未具名金融服務客戶的類似架構：分散式交易代理人在一個驗證代理人的管轄下運作，後者可在市場情況出現變化時，隨時叫停任何交易。她表示，守護代理人如今已被納入代理人叢集的初始設計之中，而非事後追加的安全層。

  ## 從元資料目錄到知識目錄

  阿赫瑪德表示，資料準備問題的核心在於：技術性的元資料目錄雖然記錄了資料血緣與綱要，卻無法捕捉賦予資料在特定組織情境中意義的業務規則與定義——而這正是人類原本會自行補充的部分。Google Cloud一直在推動客戶將這類目錄升級為「知識目錄」，明確編碼人工原本才會提供的情境脈絡。

  這個問題在規模化後會加倍複雜。針對單一代理人手動編寫業務情境尚屬可行，但若要橫跨數千個代理人進行相同作業，業務情境便會分散在每個獨立系統之中，而非集中管理，進而衍生出不一致性與維護負擔。

  ## 暗資料與八至九成的問題

  阿赫瑪德特別點出非結構化資料的挑戰——她描述這類資料佔企業資料總量的80%至90%，且當初設計時根本未考慮分析用途，因此稱之為「暗資料」。對自主代理人而言，暗資料尤其棘手，因為它缺乏使其成為安全且有用輸入的存取控制機制與資料結構。

  在較為樂觀的面向，她提到部分企業正運用代理人來處理底層資料工程工作本身，透過AI而非人工方式建構資料管線與治理架構。她將這種方式稱為「意圖驅動工程」。

  ## 對企業AI部署的啟示

  阿赫瑪德此番發言的重要性，在於它重新框定了一個長期存在的企業AI核心問題。過去關於代理人部署的討論，大多聚焦於模型能力與整合複雜度；而她的論述則將焦點轉移至資料治理：即便是能力強大、整合完善的代理人，若其所依賴的資料與情境脈絡未針對自主使用而非人工判讀進行準備，輸出結果仍將難以信賴。

  她所描述的模式——將守護代理人作為主要設計元素而非安全防護層納入叢集架構——也意味著大規模代理人部署的工程模型，仍在德國電信等企業的生產環境中持續摸索，尚未由平台廠商事先定案。

  Google Cloud倫敦峰會於2026年6月18日（週三）舉行。
date: "2026-06-19"
source_published: "2026-06-18T14:02:30.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Google Cloud"]
trust:
  score: 3
  reasoning: "Single source: Google Cloud’s Yasmeen Ahmad: The ‘dashboard fallacy’ is holding back enterprise AI agents (trust 3/5)."
sources:
  - url: "https://capacityglobal.com/news/google-cloud-yasmeen-ahmad/"
    title: "Google Cloud’s Yasmeen Ahmad: The ‘dashboard fallacy’ is holding back enterprise AI agents"
    trust: 3
    type: primary
    published_at: "2026-06-18T14:02:30.000Z"
---
