---
title_en: "AI server OEMs demanding up to 45% above contracted prices as memory shortage bites"
title_zh: "記憶體荒衝擊AI伺服器市場，OEM廠商要求交貨時加價最高45%"
summary_en: "Major AI server makers including Dell, Lenovo, Supermicro, and HPE are revising prices upward by as much as 45 percent at delivery — after contracts are signed — as a worsening memory shortage pushes component costs onto buyers with no relief expected before 2030."
summary_zh: "戴爾、聯想、超微電腦、慧與科技等AI伺服器大廠，在合約簽訂後以記憶體短缺為由，要求買家在交貨時多付最高45%溢價；集邦科技預警伺服器DRAM價格恐在2026年底前累漲270%，SK海力士亦將供需緩解時間點延至2030年。"
body_en: |
  AI server original equipment manufacturers (OEMs) including Dell, Lenovo, Supermicro, and Hewlett Packard Enterprise are demanding prices as much as 45 percent above initially contracted figures when equipment arrives for delivery, the Financial Times reported, as a deepening shortage of memory components forces supply-chain cost increases onto customers.

  The revisions are reaching beyond the largest cloud operators to include financial trading firms and other enterprise buyers building out AI infrastructure, according to the FT. GPU server prices have risen by at least 20 to 30 percent, while CPU node prices have tripled, the newspaper's sources said.

  ## Memory shortage drives the increase

  The root cause is a shortage in memory components that has already pushed up costs across enterprise networking products, including fixed-wireless access equipment and campus Ethernet switches. Research firm TrendForce reports that contract prices for server dynamic random-access memory (DRAM) — the primary working memory in servers — jumped 64 percent in the second half of 2025 alone. TrendForce warns that figure could climb as high as 270 percent by the end of 2026.

  High-bandwidth memory (HBM) — a specialized, stacked form of DRAM essential for GPU-based AI accelerators — faces additional strain. TrendForce has flagged potential price increases of 70 to 140 percent for HBM in 2027.

  The shortage has no near-term resolution in sight. SK Hynix, a major memory producer, has pushed its projected relief timeline from 2028 out to 2030.

  ## Vendor price protections cover limited ground

  Some OEMs have moved to soften the impact. HPE has committed to guaranteeing price quotes on compute, storage, and infrastructure contracts valued below $1 million, and doubled its quote validity window from 15 days to 30 days. Cisco extended compute price protection and server quote validity to 14 days in August.

  Those measures apply to a narrow slice of the market. The FT report indicates that mid-contract price increases are becoming a pattern rather than an exception, with the financial burden falling on buyers who locked in figures before memory costs escalated.

  ## Workarounds emerge on the supply side

  With memory scarce and expensive, vendors are pursuing architectural and software approaches to reduce demand. Nvidia's scale-in networking concept offloads security and storage tasks from main server processors, freeing compute capacity without requiring additional memory hardware. Optimizing the key-value (KV) cache — a data structure used by AI inference systems to store intermediate calculations — can also shrink memory footprints and prevent wasted capacity.

  AMD is pursuing a software-defined path through its recent acquisition of Mext. Mext's technology causes operating systems to treat NVMe flash storage — a type of fast solid-state storage — as if it were high-speed DRAM. The system predicts memory demand and swaps less-used memory pages between DRAM and flash, maintaining performance on a medium that is 50 times cheaper per bit and consumes 30 times less power per bit than DRAM.

  ## Implications for buyers

  Post-contract price increases transfer significant financial risk to enterprise and institutional buyers operating on fixed capital budgets. If TrendForce's projections hold, server DRAM prices could be nearly four times their mid-2025 baseline by year-end, compounding cost pressure on deployments already underway. SK Hynix's revised 2030 relief timeline suggests the memory shortage will remain a structural feature of the AI server market for the remainder of the decade.
body_zh: |
  包括戴爾（Dell）、聯想（Lenovo）、超微電腦（Supermicro）及慧與科技（Hewlett Packard Enterprise，HPE）在內的AI伺服器原始設備製造商（OEM），正在交貨時向買家索取比原始合約高出最多45%的價格——英國《金融時報》報導指出，這波令人措手不及的補漲，根源在於記憶體零組件短缺日益惡化，供應鏈成本壓力已全面轉嫁至終端客戶身上，且在2030年前幾乎看不到緩解跡象。

  根據《金融時報》引述的消息人士說法，這波補漲已超出最大雲端業者的範疇，波及正大規模建置AI基礎設施的金融交易公司及其他企業用戶。GPU伺服器價格至少上漲了20至30%，CPU節點的價格更暴漲至原本的三倍。

  ## 記憶體短缺推高成本

  此輪漲價的根本原因，在於記憶體零組件的嚴重短缺。這波缺貨已先後衝擊企業網路產品的成本，包括固定無線寬頻接取設備及校園乙太網路交換器。市場研究機構集邦科技（TrendForce）指出，伺服器用動態隨機存取記憶體（DRAM）——也就是伺服器的主要工作記憶體——合約價格，僅在2025年下半年就暴漲了64%。集邦科技並警告，這個數字到2026年底可能進一步飆升至270%。

  高頻寬記憶體（HBM）所面臨的壓力更是雪上加霜。HBM是一種採用堆疊結構製造的特殊DRAM，是GPU型AI加速器不可或缺的核心零組件。集邦科技預估，HBM在2027年的漲幅可能高達70%至140%。

  此次短缺短期內看不到解決跡象。記憶體大廠SK海力士已將供需緩解的預估時間點，從原本的2028年延後至2030年。

  ## 廠商報價保護措施覆蓋範圍有限

  部分OEM廠商已採取措施，試圖減輕買家所承受的衝擊。HPE承諾，針對合約金額低於100萬美元的運算、儲存及基礎設施採購案提供報價保障，並將報價有效期限從15天延長為30天。思科（Cisco）則於8月宣布，將運算產品的價格保護期及伺服器報價有效期延長至14天。

  然而，上述措施僅適用於市場上相當有限的一小部分交易。《金融時報》的報導指出，合約中途補漲已逐漸成為常態而非偶發例外，財務負擔最終落到了那些在記憶體成本飆升前便鎖定採購價格的買家身上。

  ## 供應端出現因應之道

  面對記憶體稀缺且昂貴的困境，各廠商正積極從架構設計與軟體層面著手，設法壓低記憶體需求。輝達（NVIDIA）的「scale-in」網路概念，將資安防護與儲存任務從主要伺服器處理器上卸載，藉此在毋須增添記憶體硬體的前提下釋放更多運算能量。此外，針對AI推論系統中用於儲存中間運算結果的鍵值（KV）快取進行最佳化，同樣有助於縮減記憶體占用量，避免算力浪費。

  AMD則透過近期收購Mext公司，走上軟體定義的解決路線。Mext的技術能讓作業系統將NVMe快閃儲存——一種高速固態儲存媒介——視同高速DRAM使用。這套系統可預測記憶體需求，並在DRAM與快閃儲存之間動態交換較少使用的記憶體分頁；相較於DRAM，這種儲存媒介的每位元成本僅為其五十分之一，每位元耗電量更只有三十分之一，系統卻仍能維持一定的效能表現。

  ## 對買家的影響

  合約後補漲的做法，將龐大的財務風險轉嫁給了必須在固定資本預算下運作的企業及機構用戶。若集邦科技的預測成真，伺服器DRAM價格到今年底可能達到2025年中水準的近四倍，對已在進行中的部署案造成複合式的成本衝擊。SK海力士將供需緩解時間點修正至2030年，更意味著記憶體短缺將在本十年剩餘的時間裡，持續成為AI伺服器市場的結構性特徵。
date: "2026-11-24"
source_published: "2026-11-23T17:08:00.000Z"
category: "compute"
secondary_categories: ["market"]
updates: "compute/2026-11-09-sk-hynix-warns-memory-chip-shortage-will-persist-through-2030"
region: []
vendor: ["AMD", "Cisco", "Nvidia", "SK Hynix", "Supermicro"]
trust:
  score: 3
  reasoning: "Single source: AI server OEMs hiking prices by 45% as memory shortage bites - report (trust 3/5)."
sources:
  - url: "https://www.datacenterdynamics.com/en/news/ai-server-oems-hiking-prices-by-45-as-memory-shortage-bites-report/"
    title: "AI server OEMs hiking prices by 45% as memory shortage bites - report"
    trust: 3
    type: primary
    published_at: "2026-11-23T17:08:00.000Z"
---
