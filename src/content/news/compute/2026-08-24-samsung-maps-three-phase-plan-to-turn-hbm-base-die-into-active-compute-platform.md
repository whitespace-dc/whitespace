---
title_en: "Samsung maps three-phase plan to turn HBM base die into active compute platform"
title_zh: "三星發布三階段藍圖，力將HBM基底晶片升格為主動運算平台"
summary_en: "Samsung presented a three-phase roadmap at Hot Chips 2026 to transform the passive base die in high-bandwidth memory into an active logic platform capable of hosting memory controllers, processing elements, and sensors, culminating in a fully 3D-integrated design called zHBM that eliminates the interposer entirely."
summary_zh: "三星於Hot Chips 2026發表三階段技術藍圖，計畫將高頻寬記憶體（HBM）中被動的基底晶片轉型為可承載記憶體控制器、處理元件與感測器的主動邏輯平台；最終階段的zHBM設計將採用完全三維垂直整合，徹底省去中介層。"
body_en: |
  ## Samsung charts HBM base die evolution at Hot Chips 2026

  Samsung presented a three-phase roadmap at Hot Chips 2026 to transform the base die of high-bandwidth memory (HBM) from a passive routing layer into an active platform carrying memory controllers, processing elements, reliability sensors, and ultimately the compute die itself. The company framed the shift as a response to hard physical limits on conventional HBM scaling and to the rapidly growing memory demands of AI inference workloads.

  HBM stacks multiple DRAM core dies, which Samsung calls C-dies, on top of a base die, or B-die, that houses the PHY (the physical-layer interface circuitry that moves data on and off the stack) and through-silicon vias (TSVs, the vertical copper connections that carry signals between layers). Four, eight, twelve, or sixteen C-dies can sit on a single B-die. Samsung's historical figures show maximum HBM capacity rising from roughly 1 GB and 1 TB/s in the original generation to more than 60 GB and 6 TB/s in HBM5.

  ## Why conventional scaling is running out of room

  Samsung identified four compounding constraints that limit how fast HBM bandwidth can continue to grow: TSV count and pitch on the C-die stack, TSV count and pitch on the B-die, and the I/O count and speed of the PHY embedded in the base die. Shrinking TSV pitch to squeeze in more connections and pushing PHY I/O speeds higher both increase power density, which in turn creates thermal bottlenecks.

  Process technology has historically been a further constraint. C-dies must stay on DRAM-class fabrication nodes, but the base die has begun migrating to advanced logic processes. Samsung's trend data shows the B-die moving to 4 nm logic starting with HBM4, narrowing the manufacturing gap between the memory stack and the accelerator, or XPU (accelerator processing unit), it connects to. The company applied its D1c DRAM process to the C-dies and 4 nm logic to the B-die in HBM4, citing power reduction as the primary goal alongside minimizing active silicon area.

  Samsung draws a distinction between two product lines that share the same C-die stack but differ in what the B-die does. Standard HBM, which it calls sHBM, confines the base die to basic data and test-path functions. Custom HBM, or cHBM, uses the advanced logic process to build a more SoC-like (system-on-chip-like) base die while retaining standard C-dies.

  ## Phase one: shrinking the PHY to free silicon

  In standard HBM, the PHY is the largest block on the base die. Samsung's phase-one response replaces the traditional HBM PHY with a die-to-die (D2D) interface built on advanced logic, reducing the PHY footprint and shortening the signal path to improve energy efficiency. The freed silicon can be reabsorbed into the XPU's floorplan, effectively expanding the accelerator die without growing the package.

  Across HBM2 through standard HBM4, PHY footprint and channel depth had grown steadily to support higher bandwidth. Advanced logic reverses that trend, packing more capability into a smaller PHY area from HBM4 into HBM5. Shorter channels cut energy per bit transferred, but concentrating more power into a smaller PHY raises thermal density.

  Samsung addresses that thermal pressure with what it calls a Heat Path Block, or HPB, developed from cHBM4 design experience. With PHY coverage above 50 percent, the company said peak temperature drops by more than 35 percent. That headroom matters because I/O speed roughly doubles from standard HBM4E to HBM5 and power density climbs from 0.5 W/mm² to over 2.0 W/mm².

  Once space is available, Samsung moves the memory controller off the XPU and onto the B-die. The memory controller manages how data flows between the accelerator and the DRAM stack; relocating it to the base die reclaims XPU silicon and, the company said, carries manageable thermal impact. Samsung described conventional HBM memory controllers as already being actively ported into the cHBM design.

  Phase one also introduces an SRAM-based cell repair scheme on the B-die. Traditional cell repair relies on limited spare rows and columns built into the C-die. By placing a larger SRAM-based repair resource on the base die, Samsung said the scheme can decode and redirect failed-cell addresses at finer granularity and share repair capacity across channels, improving reliability and yield.

  ## Phase two: sensors, external memory, and processing elements

  Phase two targets the remaining unutilized silicon on the base die after the memory controller has moved. Because the overall HBM footprint is governed by the area of the C-die stack, and most of the standard HBM base die is passive routing, Samsung said substantial area remains available even after phase-one additions.

  Custom HBM in phase two integrates reliability, availability, and serviceability (RAS) functions the standard HBM specification does not include. Samsung describes embedding thermal, voltage, process, and aging sensors for real-time telemetry, along with on-chip self-test hardware such as on-die automated test equipment and pattern generators to improve test coverage and yield.

  Capacity pressure provides the business case for phase two's memory extension capability. Samsung pointed to AI context windows expanding approximately 30 times per year, which drives what the company calls massive KV cache memory requirements. KV cache refers to the intermediate data that large language models must store during inference; as context windows lengthen, this working set grows rapidly. Samsung described long-term memory storage and retrieval as a critical bottleneck for next-generation AI models.

  To add capacity without a full architectural change, Samsung connects external memory directly to the B-die's outer shoreline using dedicated PHYs and controllers integrated on the base die. The company said this arrangement delivers higher bandwidth and lower latency than conventional PCIe-based memory expansion.

  Phase two also places processing elements (PEs) directly on the base die. These PEs can absorb a portion of the XPU's workload, reducing the volume of data that must travel across the interposer between the accelerator and memory, and lowering overall power and thermal overhead at the system level. Samsung acknowledged limited silicon area and the rising thermal density created by the PEs as the key challenges. The company's advanced HBM variant, called aHBM, combines PE integration with 2.5D packaging and describes the resulting power efficiency gains as a system-level breakthrough.

  ## Phase three: eliminating the interposer with zHBM

  Phase three abandons the 2.5D interposer model entirely. Samsung's zHBM architecture stacks the XPU and the C-die layers in true 3D vertical integration, removing the conventional horizontal interconnect plane between them. Distributed I/Os in the 3D structure shorten the distance data travels within the stack, and the arrangement eliminates both the HBM PHY and the D2D interface that phase one introduced.

  Samsung frames zHBM as a response to the inference market's defining constraint: maximizing tokens per second within strict power limits. Removing SERDES (serializer/deserializer circuitry used to convert parallel data to serial and back) and the data-alignment overhead that accompanies it cuts I/O power sharply. Samsung described the company's system-level power consumption estimates as a headline advantage for the architecture, though the source text was truncated before the specific figures were given.

  ## Implications for the accelerator supply chain

  Samsung's roadmap signals a structural shift in how the boundary between memory and compute is drawn. By migrating memory controllers, processing elements, thermal management, and eventually the compute die itself into or onto the HBM stack, the company is positioning the base die as a platform layer rather than a passive substrate. That shift has direct consequences for XPU vendors, who currently design and integrate those functions on their own silicon, and for the broader ecosystem of 2.5D packaging infrastructure.

  The company noted that traditional scaling paths, including node shrinks, monolithic die growth, and multi-chiplet interposers, are each approaching their respective physical limits, and described advanced logic integration in the B-die as essential from HBM4 onward. Samsung's cHBM4 design, which uses the 4 nm B-die, is the first generation where this integration is in production use.
body_zh: |
  ## 三星在Hot Chips 2026揭示HBM基底晶片演進路徑

  三星在Hot Chips 2026發表一份三階段技術藍圖，計畫將高頻寬記憶體（HBM）的基底晶片（B-die）從被動的訊號走線層，升級為可承載記憶體控制器、處理元件、可靠度感測器，乃至運算晶片本身的主動平台。三星將此轉型定位為應對傳統HBM擴展所面臨的物理極限，以及AI推論工作負載對記憶體需求急速攀升的必然回應。

  HBM將多顆DRAM核心晶片（三星稱之為C-die）堆疊於一顆基底晶片（B-die）之上，B-die內建PHY（實體層介面電路，負責在晶片堆疊之間傳輸資料）與矽穿孔（TSV，即穿透矽晶圓、在各層之間垂直傳導訊號的銅質導孔）。單一B-die上可堆疊四、八、十二或十六顆C-die。三星公布的歷代數據顯示，HBM最大容量從初代約1 GB、頻寬1 TB/s，一路成長至HBM5的逾60 GB與6 TB/s。

  ## 傳統擴展之路為何走到盡頭

  三星點出四項相互疊加的制約因素，限制了HBM頻寬的繼續成長：C-die堆疊上的TSV數量與間距、B-die上的TSV數量與間距，以及嵌入基底晶片的PHY其I/O數量與速度。縮小TSV間距以塞入更多連線，以及拉高PHY I/O速度，兩者都會提升功率密度，進而形成散熱瓶頸。

  製程技術歷來也是一大制約。C-die必須留在DRAM等級的製造節點，但基底晶片已開始向先進邏輯製程遷移。三星的趨勢數據顯示，B-die從HBM4起採用4奈米邏輯製程，縮小了記憶體堆疊與其所連接的加速器——即XPU（加速器處理器）——之間的製程落差。在HBM4中，三星將自家D1c DRAM製程用於C-die，4奈米邏輯製程用於B-die，主要目標是降低功耗，同時盡量縮減主動矽面積。

  三星區分出兩條共用同一組C-die堆疊、但B-die功能截然不同的產品線：標準HBM（三星稱為sHBM）的基底晶片僅執行基本的資料與測試路徑功能；客製HBM（cHBM）則利用先進邏輯製程，打造更接近系統單晶片（SoC）架構的B-die，同時沿用標準C-die。

  ## 第一階段：縮減PHY面積，釋出矽晶圓空間

  在標準HBM中，PHY是基底晶片上面積最大的功能區塊。三星第一階段的對策，是以先進邏輯製程打造的晶片對晶片（D2D）介面取代傳統HBM PHY，不僅縮小了PHY佔用面積，也縮短訊號路徑、改善能源效率。釋出的矽晶圓空間可重新納入XPU的布局規劃，讓加速器晶片在不擴大封裝尺寸的前提下，實質增加可用面積。

  從HBM2到標準HBM4，PHY面積與通道深度因支援更高頻寬而持續成長。先進邏輯製程逆轉了這一趨勢，從HBM4至HBM5，在更小的PHY面積內封裝了更強大的功能。較短的通道降低了每位元的傳輸能耗，但將更多功率集中於更小的PHY，也使熱密度隨之上升。

  三星以客製HBM4設計經驗為基礎，開發出名為「熱路徑區塊」（HPB，Heat Path Block）的散熱解決方案，以應對上述熱壓力。當PHY覆蓋率超過50%，三星表示最高溫度可下降逾35%。此散熱餘裕至關重要，因為從標準HBM4E到HBM5，I/O速度大約翻倍，功率密度也從0.5 W/mm²攀升至逾2.0 W/mm²。

  一旦空間獲得釋放，三星便將記憶體控制器從XPU移至B-die。記憶體控制器負責管理加速器與DRAM堆疊之間的資料流；將其遷移至基底晶片，可回收XPU的矽晶圓面積，三星表示此舉帶來的熱效應在可接受範圍之內。三星描述傳統HBM記憶體控制器目前已在積極移植進cHBM設計。

  第一階段另引入了以SRAM為基礎的B-die晶胞修復方案。傳統晶胞修復依賴C-die內建的有限備用列與備用行；透過在基底晶片上配置更大規模的SRAM修復資源，三星表示此方案可以更細的粒度解碼並重導失效晶胞位址，並跨通道共享修復容量，從而提升可靠度與良率。

  ## 第二階段：感測器、外部記憶體與處理元件

  第二階段鎖定記憶體控制器移入後，基底晶片上仍未被利用的矽晶圓面積。由於整體HBM的佔用面積受C-die堆疊面積所決定，而標準HBM基底晶片的大部分為被動走線，三星表示即使完成第一階段的擴充，仍有相當可觀的面積留存。

  第二階段的客製HBM整合了標準HBM規格所未涵蓋的可靠性、可用性與可維護性（RAS）功能。三星描述將嵌入溫度、電壓、製程與老化感測器，提供即時遙測資料；同時配置晶片自測硬體，例如晶圓上自動測試設備與圖樣產生器，以提升測試覆蓋率與良率。

  容量壓力為第二階段的記憶體擴充功能提供了商業理由。三星指出，AI情境視窗每年約擴大三十倍，催生出該公司所稱的「大規模KV快取記憶體需求」。KV快取係指大型語言模型在推論過程中必須儲存的中間資料；隨著情境視窗不斷拉長，此工作資料集也急速膨脹。三星將長期記憶儲存與擷取描述為下一代AI模型的關鍵瓶頸。

  為在不全面改動架構的前提下增加容量，三星利用整合於基底晶片的專用PHY與控制器，將外部記憶體直接連接至B-die的外緣接線區。三星表示，此配置比傳統以PCIe為基礎的記憶體擴充方案，可提供更高頻寬與更低延遲。

  第二階段也在基底晶片上直接配置處理元件（PE）。這些處理元件可承接XPU的部分工作負載，減少必須穿越加速器與記憶體之間中介層的資料量，並在系統層面降低整體功耗與熱負荷。三星承認有限的矽晶圓面積以及處理元件所帶來的日益升高的熱密度，是主要挑戰。三星的進階HBM變體——稱為aHBM——結合了處理元件整合與2.5D封裝，並將由此帶來的功率效率提升描述為系統層面的重大突破。

  ## 第三階段：以zHBM徹底省去中介層

  第三階段完全捨棄2.5D中介層模式。三星的zHBM架構將XPU與C-die層以真正的三維垂直整合方式堆疊，移除兩者之間傳統的水平互連平面。三維結構中的分散式I/O縮短了資料在堆疊內的傳輸距離，並同時省去了第一階段引入的HBM PHY與D2D介面。

  三星將zHBM定位為應對推論市場核心制約的解方：在嚴格功耗限制內最大化每秒生成的符記（token）數量。移除SERDES（序列器／解序器電路，用於在平行資料與串列資料之間相互轉換）及其附帶的資料對齊開銷，可大幅削減I/O功耗。三星將系統層面的功耗估算描述為這一架構的重要優勢，惟原文在揭露具體數字前已遭截斷。

  ## 對加速器供應鏈的影響

  三星的技術藍圖預示著記憶體與運算邊界的結構性重塑。隨著記憶體控制器、處理元件、熱管理，乃至運算晶片本身，逐步移入或整合至HBM堆疊，三星正將基底晶片定位為一個平台層，而非被動基板。這一轉變對XPU廠商具有直接影響——這些廠商目前在自家矽晶圓上設計並整合上述功能——同時也將衝擊更廣泛的2.5D封裝基礎設施生態系統。

  三星指出，傳統擴展路徑——包括製程節點縮小、單一晶片面積成長，以及多晶片中介層——各自都已逼近各自的物理極限，並表示在B-die上導入先進邏輯整合，從HBM4起已是不可或缺之舉。採用4奈米B-die的三星cHBM4設計，是這一整合方式首次投入量產應用的世代。
date: "2026-08-24"
source_published: "2026-08-23T18:00:34.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Samsung Evolving HBM Base Die at Hot Chips 2026 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/samsung-evolving-hbm-base-die-at-hot-chips-2026/"
    title: "Samsung Evolving HBM Base Die at Hot Chips 2026"
    trust: 3
    type: primary
    published_at: "2026-08-23T18:00:34.000Z"
---
