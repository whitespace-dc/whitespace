---
title_en: "MiTAC Shows 52U AMD MI355X Liquid-Cooled Rack and Diamond GPU Cooling at Computex 2026"
title_zh: "神達Computex 2026展示52U AMD MI355X液冷機架與GPU鑽石散熱方案"
summary_en: "MiTAC displayed a turnkey 52U rack housing 96 AMD Instinct MI355X AI accelerators, a 48U OCP-compliant HPC liquid-cooled rack, and diamond cooling for individual GPU servers at Computex 2026 in Taipei."
summary_zh: "神達在台北Computex 2026展出搭載96顆AMD Instinct MI355X AI加速器的52U交鑰匙液冷機架，並同場亮相符合OCP規範的48U HPC液冷機架與採用鑽石散熱技術的獨立GPU伺服器。"
body_en: |
  MiTAC brought a 52U liquid-cooled rack holding 96 AMD Instinct MI355X AI accelerators to Computex 2026 in Taipei, positioning the system as a turnkey, high-density alternative to air-cooled AI configurations and claiming a 50 percent density advantage over standard setups.

  The company, which ranks among Taiwan's largest server vendors after absorbing the Tyan brand and Intel's server business, also showed a 48U Open Compute Project-compliant HPC rack and individual servers featuring diamond cooling for GPUs.

  ## 52U AMD Instinct MI355X rack

  The centerpiece of MiTAC's booth was a complete, shipping-ready rack built around 12 of its G4826Z5 servers. Each 4U server holds two AMD EPYC 9xx5 processors and eight AMD Instinct MI355X accelerators — AMD's current high-end data-center GPU — along with eight U.2 drive bays for local solid-state storage. The server is divided into two physical halves: the upper section houses the GPUs; the lower section holds the CPUs and supporting components, with high-speed networking ports at the rear.

  Stacked 12 deep in a 52U enclosure, the rack totals 96 MI355X accelerators. MiTAC describes it as a turnkey product, meaning customers receive it pre-integrated and ready to bring online with minimal setup work.

  Networking inside the rack is supplied by Broadcom's Tomahawk 5 switches, which run at 800 gigabits per second over Ethernet. Liquid cooling is handled by a coolant distribution unit (CDU) from Nidec rated to move 200 kilowatts of heat — roughly the continuous draw of 65 to 70 average American homes — out of the rack.

  MiTAC says the taller-than-standard 52U form factor, combined with liquid cooling, is what makes the density claim possible. Conventional data-center racks are typically 42U; the extra 10U gives the system room for additional compute and infrastructure hardware that would otherwise require a second rack.

  ## 48U HPC liquid-cooled rack

  For workloads that are more CPU-bound than GPU-bound, MiTAC showed a 48U rack built to the Open Compute Project's ORv3 specification, an open hardware standard widely used in hyperscale and high-performance computing (HPC) environments.

  The compute layer uses MiTAC's C2811Z5 servers: 2U nodes each running AMD EPYC 9555 processors and supporting up to 3 terabytes of memory per node — a figure relevant for memory-intensive HPC applications such as in-memory databases or large simulations.

  Storage comes from MiTAC's LE2S01 "Lake Erie" units, each a 2U SAS4 expander shelf with 36 3.5-inch drive bays in a 2OU (open-unit) form factor, accommodating either hard drives or solid-state drives. The external SFF-8674 connectors on the front of those units link the shelf to compute nodes.

  Power is provided by a Murata power shelf. Cooling again comes from Nidec, this time a 250kW CDU — 25 percent larger than the unit in the AI rack, reflecting the broader thermal load of a fully populated CPU-centric system.

  ## Diamond cooling for GPUs

  Beyond the two complete rack systems, MiTAC also displayed individual servers featuring diamond cooling for AI GPUs. The source did not provide additional technical detail on those units at the time of publication.

  ## What it means

  MiTAC's Computex display illustrates the direction high-density AI infrastructure is moving: away from air cooling and toward liquid cooling as a prerequisite, with rack form factors growing taller to fit more hardware per floor tile. The 52U rack's 200kW thermal envelope and the HPC rack's 250kW CDU both reflect power densities that conventional air-cooled data-center rows cannot support without significant facility upgrades.

  The turnkey positioning of the MI355X rack also signals that server vendors are increasingly competing not just on component performance but on reducing integration work for the buyer — delivering a fully networked, cooled, and tested system rather than individual servers.

  MiTAC said diamond cooling for individual GPU servers was also part of its Computex lineup, suggesting the company is exploring thermal materials beyond conventional liquid cooling for its next generation of products.
body_zh: |
  神達此次攜帶搭載96顆AMD Instinct MI355X AI加速器的52U液冷機架亮相台北Computex 2026，將該系統定位為取代氣冷AI配置的交鑰匙高密度解決方案，並宣稱密度較標準配置高出50%。

  神達在收購泰安（Tyan）品牌及英特爾（Intel）伺服器業務後，已躋身台灣最大伺服器廠商之列。此次展出除52U液冷機架外，另有符合開放運算計畫（OCP）規範的48U HPC機架，以及採用鑽石散熱的獨立GPU伺服器。

  ## 52U AMD Instinct MI355X機架

  神達展台的核心展品，是一套以12台G4826Z5伺服器為基礎、可直接出貨部署的完整機架。每台4U伺服器搭載兩顆AMD EPYC 9xx5處理器與八顆AMD Instinct MI355X加速器——即AMD目前旗艦級資料中心GPU——以及八個U.2硬碟槽供本地固態儲存使用。伺服器在物理上分為上下兩半：上半部安置GPU，下半部容納CPU及相關元件，高速網路埠則位於機背。

  12台伺服器疊入52U機箱後，整機架共搭載96顆MI355X加速器。神達將其定位為交鑰匙產品，意即客戶收到時已完成整合，僅需最少的設定工作即可上線運作。

  機架內部網路由博通（Broadcom）Tomahawk 5交換器提供，透過乙太網路運行於每秒800 Gbps的速率。液冷部分由日本電產（Nidec）的冷卻液分配單元（CDU）負責，額定散熱能力為200千瓦——大約相當於65至70戶美國普通家庭的持續用電功耗。

  神達表示，高於標準規格的52U機型加上液冷技術，正是實現高密度主張的關鍵。傳統資料中心機架通常為42U；多出的10U空間讓系統得以容納更多運算與基礎架構硬體，否則便需要額外一個機架才能安置。

  ## 48U HPC液冷機架

  針對以CPU為主而非以GPU為主的工作負載，神達展出了一款依循OCP ORv3規範建造的48U機架，ORv3是廣泛應用於超大規模運算與高效能運算（HPC）環境的開放硬體標準。

  運算層採用神達的C2811Z5伺服器，每台2U節點搭載AMD EPYC 9555處理器，每節點最高支援3 TB記憶體——這對記憶體密集型HPC應用（如記憶體內資料庫或大型模擬運算）尤為關鍵。

  儲存方面採用神達LE2S01「Lake Erie」儲存單元，每台為2U SAS4擴充槽架，以2OU（開放規格單元）外型提供36個3.5吋硬碟槽，可混用傳統硬碟或固態硬碟。槽架正面的SFF-8674外接連接器負責將儲存節點與運算節點相連。

  電源由村田（Murata）電源架供應。散熱同樣採用日本電產（Nidec）解決方案，此次配置的CDU額定功率為250千瓦——較AI機架所用的CDU大25%，反映出全配置CPU導向系統更龐大的散熱需求。

  ## GPU鑽石散熱

  除上述兩套完整機架系統外，神達亦展出採用鑽石散熱技術的獨立AI GPU伺服器。報導截稿時，原始資料尚未提供這些機型的進一步技術細節。

  ## 市場意義

  神達此次的Computex展示，清楚揭示高密度AI基礎設施的發展走向：從氣冷轉向液冷已成前提條件，機架規格也持續往高度增長，以便在每個機位腳印內容納更多硬體。52U機架200千瓦的熱設計功耗，以及HPC機架250千瓦的CDU，均反映出傳統氣冷資料中心機列在不進行大規模設施升級的情況下根本無法承受的功率密度。

  MI355X機架的交鑰匙定位，同樣透露出伺服器廠商的競爭重心正在轉移——不再僅僅比拼元件效能，而是致力於降低買方的整合工作量，提供已完成網路配置、散熱設計與測試驗證的完整系統，而非僅出售單台伺服器。

  神達表示，針對獨立GPU伺服器的鑽石散熱方案同屬此次Computex展出陣容，顯示該公司正積極探索超越傳統液冷的散熱材料，為下一代產品布局。
date: "2026-06-23"
source_published: "2026-06-22T00:59:59.000Z"
category: "compute"
secondary_categories: ["cooling"]
region: ["Taiwan"]
vendor: ["AMD", "Broadcom", "Intel"]
trust:
  score: 3
  reasoning: "Single source: MiTAC Computex 2026 Booth Tour: Diamond Cooling, 52U Racks, and More (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/mitac-computex-2026-booth-tour/"
    title: "MiTAC Computex 2026 Booth Tour: Diamond Cooling, 52U Racks, and More"
    trust: 3
    type: primary
    published_at: "2026-06-22T00:59:59.000Z"
---
