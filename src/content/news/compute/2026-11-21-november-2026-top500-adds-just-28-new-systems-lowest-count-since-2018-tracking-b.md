---
title_en: "November 2026 Top500 adds just 28 new systems, lowest count since 2018 tracking began"
title_zh: "2026年11月Top500榜單新增28套系統，創2018年來最低紀錄"
summary_en: "The November 2026 Top500 supercomputer list gained only 28 new systems, the lowest count in a tracking series extending to June 2018, as Chinese and commercial submissions have nearly halted and the average system age reached a series high of 3.2 years."
summary_zh: "2026年11月版Top500全球最強超級電腦排行榜僅新增28套系統，為自2018年6月開始追蹤以來的歷史最低；中國與商業部門系統送審近乎全面停滯，榜單平均機齡亦攀升至歷史新高的3.2年。"
body_en: |
  The November 2026 Top500 list of the world's most powerful supercomputers added just 28 new systems, the fewest in a tracking series that extends to June 2018, as China and the commercial Industry segment have largely stopped submitting and the roster ages to its oldest average on record, according to analysis by ServeTheHome.

  The official Top500 release cited 27 new entries; ServeTheHome's filter for first appearances on list edition 68 produced 28, and the analysis uses that figure. The count is down from 43 new systems on the June 2026 list and below the previous series low of 39 set in June 2022. It stands in sharp contrast to the opening years of the tracking window: the June 2018 list saw 133 new systems and November 2018 saw 153, editions when roughly a quarter or more of the list turned over with each biannual publication.

  ## Performance contribution at a series low

  The 28 newcomers represent 5.6% of the 500-system roster. Together they contribute roughly 1.0 exaflops per second (EF/s — one quintillion floating-point operations per second) of High Performance Linpack (HPL) performance, the benchmark used to rank systems, equal to about 5.1% of the list's total aggregate performance. That is the lowest share since at least November 2021, when new systems accounted for more than 12% of aggregate performance, and below the prior low of 5.48% set in June 2023.

  Total list Rmax — the sum of HPL scores across all 500 systems — grew from approximately 18.7 EF/s in June 2026 to roughly 19.7 EF/s, a gain of about 5%. The prior list had grown by nearly 25%, driven by the debut of LineShine. The minimum score required to reach the No. 500 position rose from approximately 2.66 petaflops per second (PF/s — one quadrillion floating-point operations per second) to roughly 2.87 PF/s, an increase of around 8%.

  ## LineShine holds No. 1; HANGANG leads newcomers

  LineShine retains the top position it claimed on the June 2026 list, where it debuted with 2.198 EF/s using custom Arm-based LX2 processors. No new system entered the Top 10. Only five newcomers reached the Top 100.

  The highest-ranked new entry is HANGANG, operated by the Korea Institute of Science and Technology Information (KISTI), which debuted at No. 12 with 342.6 PF/s. HANGANG runs on an HPE Cray EX254n platform using NVIDIA Grace CPUs — an Arm-based processor NVIDIA designed for use alongside its own GPU accelerators — and GH200 Superchips, connected via HPE's Slingshot 400 high-speed interconnect.

  The second-highest new system is ORNL's Lux at No. 14 with 220.79 PF/s, built on AMD EPYC 9575F processors paired with AMD Instinct MI355X graphics processing unit (GPU) accelerators. Those two systems alone account for the majority of HPE's approximately 615 PF/s in new Rmax across its eight new entries, by far the most of any integrator this edition.

  ## List aging reaches series high

  With 28 systems added and 28 removed, the average age of a system on the list reached approximately 3.2 years, the highest in ServeTheHome's tracking window, up from 2.2 years in November 2021 and roughly 3.0 years in June 2026. The systems that exited averaged about 5.4 years on the list before falling off.

  Of the 28 departing systems, 24 were CPU-only, most based on Intel Skylake or Cascade Lake processors dating from roughly 2017 to 2019. Seventeen were classified in the Industry segment, 17 were built by Lenovo, and 14 were located in China. Of the 28 new systems replacing them, 23 are GPU- or accelerator-accelerated, reflecting a slow turnover from older CPU-only commercial clusters toward newer GPU-accelerated research and academic installations.

  ## China and commercial submissions collapse

  China's presence on the list has fallen from 173 systems in November 2021 to 18 in the current edition. China holds the No. 1 ranking through LineShine but contributed only one new system this cycle: CTyun HPC – shanghai15, an eSurfing Cloud deployment using a MetaX C588 accelerator and China Telecom C86 CPUs.

  The Industry segment — commercial deployments including cloud and enterprise clusters — has contracted from 258 systems in November 2021 to 146. Only 2 of the 28 new systems carry an Industry classification. The remaining 26 break down as 12 Research, 12 Academic, and 2 Government. ServeTheHome noted that this continues a pattern it raised in its June 2023 analysis, with the Top500 no longer serving as a broad census of high-performance computing or AI deployments as commercial systems have largely stopped appearing.

  ## Europe and Asia lead new entrants geographically

  By geography, Europe accounts for 11 of the 28 new systems, Asia for 9, and North America for 8. Germany added 6 new systems and the United States added 7. South Korea contributed 3 — HANGANG, a companion CPU system also at KISTI, and a Dell PowerEdge XE9680L with NVIDIA B200 accelerators at Elice Inc. Japan also added 3 systems.

  Among integrators, Lenovo delivered 6 new systems, MEGWARE 4, and Dell and Fujitsu 3 each. All three of Fujitsu's new entries are Supermicro-based platforms, including the RIKYU system at RIKEN using NVIDIA GB200 Superchips and Flow 2.0 subsystems at Nagoya University.

  ## AMD leads new-system CPUs; Intel loses ground on full list

  Among the CPUs in the 28 new systems, AMD accounts for 13, NVIDIA Grace for 7, and Intel for 7, with one system using a China Telecom C86 processor. All seven new Intel-based systems serve as GPU host nodes; there are no new Intel CPU-only systems on this edition. By comparison, AMD's Turin has 11 systems among the new entries while Intel's Granite Rapids has 1.

  All five CPU-only new systems are AMD-based. Four use Turin Dense parts — AMD's Zen 5c-core, high-density variant — including HANGANG-CPU at KISTI, Manta CPU at the U.S. Navy's Defense Supercomputing Resource Center, Nagoya University's Flow 2.0 Type I subsystem, and Lichtenberg NHR-1 CPU at TU Darmstadt. The fifth, ERDC's Barfoot, uses an older AMD Genoa processor.

  NVIDIA Grace is the single most common CPU SKU among the 28 new systems with 7 appearances, all in GPU-host roles. The AMD EPYC 9655 appears in 3 new systems, followed by the EPYC 9965, EPYC 9654, Xeon Platinum 8568Y+, and Xeon Platinum 8570 at 2 each. The 28 new systems use 16 different CPU SKUs in total.

  Across the full 500-system list, Intel's share has fallen to 50.2%, down from 82% in November 2021. AMD now accounts for 39.8% of full-list systems, and NVIDIA Grace powers 6.4% with 32 entries. The most common single CPU SKU across the full list is the AMD EPYC 7763, a 2021 processor appearing in 34 systems; NVIDIA Grace follows at 32. The AMD EPYC 7742 appears in 26 systems and the Intel Xeon Platinum 8480+ in 20, illustrating how much older hardware still occupies the list as new submissions slow.

  ## What the slowdown means

  The November 2026 edition marks a measurable contraction in the pace at which the Top500 turns over. The list added 28 systems against a backdrop in which Chinese submissions and commercial Industry clusters — historically the two largest sources of new entrants — have retreated sharply, with China falling from 173 systems to 18 and the Industry segment from 258 to 146 since November 2021.

  The entry-threshold trend illustrates the gap between hardware capability and list dynamics. ServeTheHome's analysis notes that 256-core AMD EPYC 9006 Venice processors represent more than a fourfold increase in CPU performance over the 64-core AMD EPYC 7003 Milan that was current when the entry threshold stood at 1.65 PF/s in November 2021, yet the bar to reach No. 500 has risen only about 74% over the same period — suggesting that the systems capable of making the list are simply not being submitted at the rate that generational hardware improvements would otherwise support.

  Intel held 50.2% of full-list CPU slots in this edition, down from 82% in November 2021, while AMD's share reached 39.8% and NVIDIA Grace accounted for 6.4% with 32 systems — a distribution that continues to shift with each edition as older Intel-based clusters age off and are replaced, when they are replaced at all, by AMD or NVIDIA Grace systems.
body_zh: |
  根據ServeTheHome的分析，2026年11月版Top500全球最強超級電腦排行榜僅新增28套系統，為自2018年6月開始系統性追蹤以來的歷史最低點；中國與商業產業部門的系統送審幾乎全面停滯，榜單整體老化程度亦攀升至有紀錄以來的最高水準。

  Top500官方公告列出27項新進入榜單的系統；ServeTheHome以第68版榜單首次亮相為篩選條件，統計出28套，本分析採用此一數字。此次新增數量較2026年6月榜單的43套大幅下滑，也低於2022年6月所創的前一系列低點39套。對比追蹤視窗的起始年份，差異尤為懸殊：2018年6月榜單新增了133套系統，同年11月更達153套，當時每隔半年便有約四分之一或更多的榜單名額更迭。

  ## 新系統效能貢獻比率創系列新低

  28套新進系統占500套榜單總數的5.6%。這批系統合計貢獻約1.0 EF/s（艾FLOPS，即每秒百億億次浮點運算）的高效能Linpack（HPL）效能——這正是用於系統排名的基準測試指標——約占榜單總合計效能的5.1%。這是自至少2021年11月以來的最低占比，當時新進系統貢獻了逾12%的合計效能，本次亦低於2023年6月所創的前一低點5.48%。

  榜單整體Rmax總值（500套系統HPL分數的加總）由2026年6月的約18.7 EF/s成長至本次的約19.7 EF/s，增幅約5%。上一份榜單受LineShine首度登場帶動，增幅接近25%。進入第500名所需的最低分數則由約2.66 PF/s（拍FLOPS，即每秒千兆次浮點運算）上升至約2.87 PF/s，漲幅約8%。

  ## LineShine衛冕第一；HANGANG領跑新進系統

  LineShine維持其在2026年6月榜單首次亮相時奪得的第一名，當時成績為2.198 EF/s，採用自研Arm架構LX2處理器。本次無任何新系統進入前十名，僅有五套新進系統躋身前百大。

  排名最高的新進系統為HANGANG，由韓國科學技術資訊研究院（KISTI）運營，以342.6 PF/s的成績首次進榜，位列第12名。HANGANG採用HPE Cray EX254n平台，搭載輝達（NVIDIA）Grace CPU——這是輝達專為搭配自家GPU加速器而設計的Arm架構處理器——以及GH200 Superchip，並透過HPE Slingshot 400高速互連網路進行連接。

  排名第二的新進系統為橡樹嶺國家實驗室（ORNL）的Lux，以220.79 PF/s位列第14名，採用AMD EPYC 9575F處理器搭配AMD Instinct MI355X圖形處理器（GPU）加速器。上述兩套系統合計占HPE本次八套新進系統約615 PF/s新增Rmax的大部分，高居所有整合商之冠。

  ## 榜單平均機齡創系列新高

  此次新增與退出各28套系統，使榜單上的系統平均機齡達到約3.2年，為ServeTheHome追蹤視窗內的歷史最高，較2021年11月的2.2年及2026年6月的約3.0年持續攀升。退出榜單的系統在榜平均時間約為5.4年。

  28套退出系統中，24套為純CPU系統，大多採用約2017至2019年間推出的英特爾（Intel）Skylake或Cascade Lake處理器。其中17套歸屬產業部門，17套由聯想（Lenovo）製造，14套位於中國。取而代之的28套新進系統中，23套搭載GPU或其他加速器，反映出舊式純CPU商業叢集正緩慢讓位給更新型GPU加速的研究與學術用途系統。

  ## 中國與商業用途系統送審驟減

  中國在榜系統數量已由2021年11月的173套驟降至本次的18套。中國雖藉由LineShine保有第一名，但本次週期僅貢獻一套新進系統：天翼雲（CTyun）HPC – shanghai15，這是一套採用沐曦（MetaX）C588加速器與中國電信C86 CPU的天翼雲部署。

  產業部門——涵蓋雲端與企業叢集的商業部署——已由2021年11月的258套萎縮至146套。28套新進系統中僅有2套歸屬產業類別，其餘26套分別為研究類12套、學術類12套、政府類2套。ServeTheHome指出，此一走勢延續其在2023年6月分析中所指出的模式——隨著商業系統幾乎全面退出送審，Top500已不再能扮演高效能運算或AI部署的廣泛普查基準。

  ## 新進系統地理分布：歐洲與亞洲居前

  就地理分布而言，歐洲在28套新進系統中占11套，亞洲9套，北美8套。德國新增6套，美國新增7套。南韓貢獻3套，分別為HANGANG、同在KISTI的一套純CPU配套系統，以及Elice公司採用輝達B200加速器的Dell PowerEdge XE9680L。日本同樣新增3套系統。

  整合商方面，聯想（Lenovo）交付6套新系統，MEGWARE 4套，戴爾（Dell）與富士通（Fujitsu）各3套。富士通3套新進系統均採用Supermicro平台，包括理化學研究所（RIKEN）使用輝達GB200 Superchip的RIKYU系統，以及名古屋大學的Flow 2.0子系統。

  ## 新進系統CPU：AMD領跑，英特爾在全榜失地

  28套新進系統的CPU中，AMD占13套，輝達Grace占7套，英特爾占7套，另有一套採用中國電信C86處理器。7套英特爾架構系統均作為GPU主機節點使用，本次無任何純英特爾CPU系統進榜。相較之下，AMD Turin在新進系統中有11套，英特爾Granite Rapids僅1套。

  5套純CPU新進系統全數採用AMD架構。其中4套使用Turin Dense部件——即AMD Zen 5c核心高密度版本——包括KISTI的HANGANG-CPU、美國海軍國防超算資源中心的Manta CPU、名古屋大學的Flow 2.0 Type I子系統，以及達姆施塔特工業大學（TU Darmstadt）的Lichtenberg NHR-1 CPU。第五套為美國陸軍工兵研究發展中心（ERDC）的Barfoot，採用較舊的AMD Genoa處理器。

  輝達Grace是28套新進系統中出現次數最多的單一CPU型號，共7次，均作為GPU主機使用。AMD EPYC 9655出現於3套新進系統中，其次是EPYC 9965、EPYC 9654、Xeon Platinum 8568Y+及Xeon Platinum 8570，各出現2次。28套新進系統共採用16種不同的CPU型號。

  縱觀全榜500套系統，英特爾的CPU占比已降至50.2%，遠低於2021年11月的82%。AMD目前占全榜的39.8%，輝達Grace以32套系統占6.4%。全榜出現次數最多的單一CPU型號為AMD EPYC 7763——這款2021年的處理器出現在34套系統中；輝達Grace以32套緊隨其後。AMD EPYC 7742出現於26套系統，英特爾Xeon Platinum 8480+出現於20套，充分說明在新系統送審放緩的背景下，榜單中仍留存著大量老舊硬體。

  ## 此次放緩的意涵

  2026年11月版榜單標誌著Top500更迭速度的顯著收縮。歷史上新進系統的兩大主要來源——中國送審系統與商業產業叢集——均已大幅退縮：中國在榜系統自2021年11月以來由173套跌至18套，產業部門則由258套降至146套。

  入榜門檻分數的走勢揭示了硬體能力與榜單動態之間的落差。ServeTheHome分析指出，256核心的AMD EPYC 9006 Venice處理器的CPU效能，是64核心AMD EPYC 7003 Milan的四倍以上；2021年11月時，第500名的門檻尚在1.65 PF/s，而今僅上漲約74%至目前水準——這顯示有能力躋身榜單的系統，送審速度遠遠落後於世代硬體更迭本應帶動的水準。

  英特爾在本次榜單中占全榜CPU位置的50.2%，較2021年11月的82%大幅下滑；AMD份額升至39.8%，輝達Grace以32套系統占6.4%。隨著老舊英特爾叢集持續退出、且一旦更換即改採AMD或輝達Grace系統，這一分布格局仍在逐版持續位移。
date: "2026-11-21"
source_published: "2026-11-19T17:48:48.000Z"
category: "compute"
secondary_categories: []
region: ["China"]
vendor: ["AMD", "Intel", "Nvidia", "Supermicro"]
trust:
  score: 3
  reasoning: "Single source: November 2026 Top500 New Systems Are Few and Far Between (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/november-2026-top500-new-systems-analysis/"
    title: "November 2026 Top500 New Systems Are Few and Far Between"
    trust: 3
    type: primary
    published_at: "2026-11-19T17:48:48.000Z"
---
