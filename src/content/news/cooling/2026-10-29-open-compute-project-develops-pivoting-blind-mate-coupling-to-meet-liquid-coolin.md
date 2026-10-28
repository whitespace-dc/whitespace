---
title_en: "Open Compute Project Develops Pivoting Blind-Mate Coupling to Meet Liquid-Cooling Demands"
title_zh: "Open Compute Project 開發樞軸盲插接頭，因應液冷高流量挑戰"
summary_en: "A newer coupling design developed through the Open Compute Project addresses rising flow requirements, constrained server-tray space, and alignment tolerances in liquid-cooled rack systems. Parker Hannifin's BQC Series is one commercial implementation of the architecture."
summary_zh: "Open Compute Project 社群開發的「樞軸盲插接頭」（PBMC），專為解決高效能液冷伺服器系統中流量需求上升、托盤空間受限與對位容差等多重設計難題。派克漢尼汾（Parker Hannifin）的 BQC 系列是首批採用這項架構的商業產品之一。"
body_en: |
  The Open Compute Project community has developed a pivoting blind-mate coupling — known as a PBMC — to address a converging set of design constraints in high-performance liquid-cooled server systems, with Parker Hannifin's BQC Series among the first commercial products to apply the architecture, according to Data Center Knowledge.

  The PBMC is a modified form of the blind-mate coupling, a connector type that allows a liquid-cooling loop to be completed as a server tray is inserted from the front, or cold-aisle, side of a rack — without a technician manually aligning the two halves of the connection. The pivoting variant adds greater self-alignment capability, a larger internal flow path, and design features intended to prevent seal failure under high-flow conditions, all within a more compact overall envelope than earlier blind-mate designs.

  ## Why the existing connection design needed to change

  Conventional blind-mate couplings were developed for cooling loads that no longer represent the upper end of the market. Newer rack and server architectures now require greater coolant flow through the connection point while simultaneously demanding that the coupling occupy less space inside the server tray — the metal chassis that slides into the rack and houses compute hardware. At the same time, because a blind-mate connection is made during installation rather than by hand, the coupling must tolerate positional variation between the plug and socket when equipment is seated.

  Those three requirements — higher flow, smaller footprint, and greater self-alignment tolerance — pull against each other. Increasing flow tends to push designers toward physically larger flow paths, which consumes more tray space. Tighter tray constraints, in turn, can make it harder to build in the alignment features needed to compensate for real-world installation variation.

  The PBMC was developed within the Open Compute Project ecosystem specifically to address those requirements within a single connection design, according to the publication.

  ## Cold-aisle installation and alignment tolerance

  Blind-mate connections serve an operational purpose beyond convenience. The rear, or hot-aisle, side of a server rack can contain manifolds and other plumbing operating in a high-temperature environment. Allowing equipment to be installed and removed from the cold-aisle side reduces the need for personnel to reach into the hot aisle to handle connections at the back of the rack.

  The tradeoff is that no technician guides the two coupling halves together. Server trays, racks, and manifolds are not always positioned with exact precision, and small dimensional variations throughout the surrounding equipment can accumulate by the time the plug and socket meet.

  A pivoting design addresses that by allowing the connection to accommodate a greater degree of positional variation during mating rather than depending on near-perfect alignment between the two halves. For system designers, this reduces sensitivity to the dimensional variation inherent in real-world equipment assemblies. The design is described as particularly relevant in server-tray and blade-system applications where self-alignment capability, higher flow, and limited space must all be addressed together.

  ## Higher flow without expanding the tray footprint

  Flow performance was a central driver of the PBMC's development. As cooling requirements increase, the connection cannot introduce unnecessary restriction into the liquid loop; it must support the required coolant volume while keeping pressure losses through the coupling under control.

  Simply scaling up every component is not a viable solution because cooling hardware competes for space inside the tray with the computing equipment it supports. The length and overall footprint of the coupling are therefore design variables, not incidentals.

  PBMC designs address this by combining a larger internal flow path with a more compact external package — the goal being to support higher flow without requiring system designers to allocate more tray space to the connection itself.

  ## Seal retention under demanding conditions

  Higher flow introduces a mechanical risk that is less visible than dimensional constraints: seal washout. O-rings and other seals must remain seated in their grooves as fluid passes through the connection. Under high flow and pressure conditions, a poorly retained seal can be pulled from its groove and carried downstream, compromising the connection and potentially creating problems elsewhere in the cooling loop.

  Seal retention features — design elements that actively hold seals in position under demanding operating conditions — are described as an important consideration in PBMC design, not a secondary concern to be addressed after flow performance is established.

  ## Industry significance

  The PBMC's development reflects how tightly coupled the design variables within modern liquid-cooling systems have become. Flow rates affect component sizing; component sizing affects available tray space; blind mating introduces alignment requirements; and higher flow creates additional mechanical demands on seals and retention features. Addressing any one variable in isolation risks creating problems elsewhere in the system.

  For data center planners and equipment designers, the coupling selection is no longer a purely functional question of moving coolant from one side of a connection to the other. It has become part of the broader system-design conversation around rack architecture, serviceability, and reliability under increasingly demanding thermal loads.

  Parker Hannifin, which participated in the Open Compute Project work that produced the PBMC architecture, has applied the design in its BQC Series, representing one example of how coupling manufacturers are responding to the shift toward higher-performance liquid-cooled systems.
body_zh: |
  開放運算計畫（Open Compute Project，OCP）社群開發了一款「樞軸盲插接頭」（Pivoting Blind-Mate Coupling，PBMC），以解決高效能液冷伺服器系統中多項同時收緊的設計限制。據《Data Center Knowledge》報導，派克漢尼汾（Parker Hannifin）的 BQC 系列是首批採用這項架構的商業產品之一。

  PBMC 是傳統盲插接頭的改良版本。盲插接頭是一種當伺服器托盤從機架正面（即冷通道側）插入時，無需技術人員手動對準兩端即可自動完成液冷迴路連接的接頭類型。樞軸變體在此基礎上進一步強化了自動對位能力、擴大了內部流道截面，並加入了在高流量條件下防止密封件失效的設計，同時整體外形尺寸比早期盲插設計更為緊湊。

  ## 為何現有接頭設計需要改變

  傳統盲插接頭是針對當時的冷卻負載需求所開發的，而那樣的負載已不再代表市場的上限。新一代機架與伺服器架構如今要求通過連接點的冷卻液流量更大，同時要求接頭在伺服器托盤內佔用更少的空間——托盤是滑入機架並容納運算硬體的金屬底座。與此同時，由於盲插連接是在設備安裝過程中自動完成而非由人工導引，接頭必須能夠容忍設備就位時插頭與插座之間存在的位置偏差。

  這三項需求——更高流量、更小佔位、更大對位容差——彼此之間相互牽制。提升流量往往驅使設計師採用截面更大的流道，從而消耗更多托盤空間；而托盤空間愈趨緊縮，又使設計師更難加入足以補償實際安裝偏差的對位機構。

  據該報導，PBMC 正是在 Open Compute Project 生態系統內，為在單一接頭設計中同時滿足上述三項需求而開發的。

  ## 冷通道安裝與對位容差

  盲插連接除了帶來操作便利之外，還具有重要的實際意義。伺服器機架後方的熱通道側通常設有集液管及其他在高溫環境下運行的管路設施。允許設備從冷通道側安裝與拆卸，可以減少人員進入熱通道、在機架背面手動處理管路接頭的必要性。

  這樣做的取捨在於：不再有技術人員引導接頭兩端精確對合。伺服器托盤、機架與集液管並非始終處於精確的位置，周邊設備中各種微小的尺寸偏差，在插頭與插座接合時可能已累積成不可忽視的誤差。

  樞軸式設計的解決之道，是讓接頭在配對過程中能夠容納更大程度的位置偏差，而不必依賴兩端之間近乎完美的對位精度。對系統設計師而言，這降低了對實際設備組件中固有尺寸偏差的敏感程度。這項設計被認為在伺服器托盤及刀鋒系統應用中尤為重要——在這類場景中，自動對位能力、高流量需求與有限空間三者必須同時兼顧。

  ## 在不擴大托盤佔位的前提下提升流量

  流量性能是推動 PBMC 開發的核心因素。隨著冷卻需求不斷提升，接頭不能對液冷迴路造成不必要的阻力；在將接頭本身的壓降控制在合理範圍內的同時，必須能夠支援所需的冷卻液流量。

  單純將所有元件等比放大並非可行之道，因為冷卻硬體必須與其所支援的運算設備共同競逐托盤內有限的空間。接頭的長度與整體佔位面積，因此是必須審慎考量的設計變數，而非可以忽視的細節。

  PBMC 設計透過將更大的內部流道與更緊湊的外部封裝相結合來應對這一挑戰——目標是在無需系統設計師為接頭本身分配更多托盤空間的情況下，支援更高的冷卻液流量。

  ## 苛刻條件下的密封件固持

  更高的流量帶來了一項比尺寸限制更不顯眼的機械風險：密封件沖失（seal washout）。O 型環及其他密封件在冷卻液流過接頭時，必須穩固地保持在各自的密封槽內。在高流量、高壓力的條件下，固持不足的密封件可能被從密封槽中沖出並隨液流帶走，不僅破壞接頭的密封性，還可能在冷卻迴路的其他位置造成問題。

  密封件固持機構——即在苛刻操作條件下主動將密封件保持在位的設計元素——在 PBMC 設計中被定位為重要的考量，而非等流量性能確立之後才附帶處理的次要問題。

  ## 產業意義

  PBMC 的開發，印證了現代液冷系統內部各設計變數之間已趨於緊密耦合。流量大小影響元件尺寸；元件尺寸影響可用的托盤空間；盲插配合方式引入對位需求；而更高的流量又對密封件及固持機構提出額外的機械要求。若孤立地解決任何一個變數，都有可能在系統的其他環節引發新的問題。

  對於資料中心規劃人員與設備設計師而言，接頭的選型已不再是單純將冷卻液從連接點一端輸送至另一端的功能性問題，而已成為圍繞機架架構、可維護性，以及在日益嚴苛的熱負載條件下確保可靠性等議題，更廣泛的系統設計對話的一部分。

  派克漢尼汾曾參與 Open Compute Project 中催生 PBMC 架構的相關工作，並將這項設計應用於其 BQC 系列產品，為接頭製造商如何因應向更高效能液冷系統轉型的市場趨勢，提供了具體的示範。
date: "2026-10-29"
source_published: "2026-10-27T20:15:26.000Z"
category: "cooling"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Rethinking the Blind-Mate Connection (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/cooling/rethinking-the-blind-mate-connection"
    title: "Rethinking the Blind-Mate Connection"
    trust: 3
    type: primary
    published_at: "2026-10-27T20:15:26.000Z"
---
