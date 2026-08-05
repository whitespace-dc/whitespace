---
title_en: "Nvidia open-sources cuFile storage APIs, forms 40-company Storage-Next initiative"
title_zh: "輝達開源cuFile儲存API，逾40家企業共組Storage-Next計畫"
summary_en: "Nvidia has open-sourced its cuFile GPU storage APIs and named Google, Intel, and Meta as inaugural project maintainers. The company simultaneously launched Storage-Next, a more-than-40-member industry initiative to set standards for how storage systems serve GPU-driven AI workloads."
summary_zh: "輝達已將cuFile GPU儲存API及其底層軟體堆疊開源，指定Google、Intel及Meta擔任首批專案維護者。公司同步宣布啟動Storage-Next產業計畫，吸引逾40家成員加入，致力為GPU驅動的AI工作負載制定儲存系統新標準。"
body_en: |
  Nvidia has open-sourced its cuFile application programming interfaces (APIs) and the software stack beneath them, naming Google, Intel, Meta, and Nvidia as inaugural project maintainers, as the company simultaneously launched Storage-Next, a more-than-40-member industry initiative aimed at redefining how storage systems serve GPU-based AI workloads.

  ## cuFile and GPUDirect Storage

  cuFile is an open-source component of Nvidia's GPUDirect Storage technology, which allows data to move directly between storage hardware and GPU memory, bypassing the CPU and reducing latency. Nvidia said cuFile uses GPU threads and high-bandwidth memory to access data stored outside system memory, and the company claimed that approach can reduce storage access times to microseconds.

  By releasing cuFile and the software stack beneath it, Nvidia said it aims to broaden interoperability across hardware and software platforms. The project is open to external contributions and is designed to align GPU storage access with Linux-based security practices.

  ## Storage-Next and SCADA

  Storage-Next brings together more than 40 storage and flash suppliers, including DDN, Kioxia, and Micron, alongside controller vendors, cooling groups, orchestration operators, and standards bodies. Nvidia said the initiative is intended to define how GPU-driven storage should operate and translate those approaches into open industry standards, with a focus on moving large AI datasets and reducing bottlenecks between compute and storage layers.

  Central to Storage-Next is a framework Nvidia calls SCADA, short for scaled, accelerated data access. It is designed so that parallel GPUs pull only the data an application needs directly from storage into GPU memory, rather than moving entire datasets through conventional memory hierarchies.

  Nvidia said SCADA divides direct data access into two parts to address security risks that arise when applications communicate closely with storage devices. Under that design, user-level application components remain outside the trusted computing base, while a privileged component establishes protected access between the application and approved storage using standard Linux security protocols.

  ## Why AI storage demands are shifting

  Nvidia attributed the effort to a change in how AI systems generate storage traffic. AI agents, the company said, are producing large volumes of storage requests, and GPUs can now initiate storage operations directly, creating thousands of concurrent operations. Those operations require storage systems to encrypt, compress, verify, and reconstruct data simultaneously.

  That load is intensifying as AI models use larger datasets and longer context windows that exceed system memory, Nvidia said. The company described the change as moving storage from a passive repository to an active element of the data path for AI workloads.

  Nvidia also linked fast and secure storage access to cyber defense, noting that AI systems used for security purposes require rapid access to security context and data, and it connected the open-source move to broader industry efforts around secure AI infrastructure.

  ## Hardware integration

  Nvidia connected the software initiative to its Vera BlueField-4 STX hardware, which the company described as combining Vera Rubin processors, Vera BlueField-4 storage processors, and Spectrum-X Ethernet networking. Nvidia said STX uses its DOCA security stack for continuous policy enforcement in the AI data path, while CMX Context Memory Storage provides a context tier for long-context and multi-turn AI inference.

  Nvidia cited benchmark data for the Vera CPU, which forms part of the BlueField-4 STX platform. The company said the processor delivered up to 3.21 times higher throughput than an x86 CPU in a two-stage compression and encryption pipeline. Nvidia said the figures demonstrate that storage functions, including encryption, compression, integrity checking, and data recovery, can be handled with less strain on conventional host compute, a concern the company identified as a potential bottleneck when many AI agents access storage concurrently.

  ## Early implementations

  DDN, one of the Storage-Next participants, said it is integrating SCADA with its Infinia software-defined data platform. "AI success will be defined not by how much infrastructure organizations own, but by how productively they use it," said Sven Oehme, chief technology officer at DDN. "Our collaboration with NVIDIA is helping create a more direct, efficient connection between GPUs and data - keeping accelerated computing resources productive, speeding time to insight and enabling customers to achieve stronger business and financial returns from their AI investments."

  ## Industry implications

  For storage vendors, the open-sourcing of cuFile, the SCADA framework, and the Storage-Next consortium represent a structural shift in what storage products must deliver. Nvidia framed the challenge as increasingly about moving, securing, and processing data at a rate that matches modern GPU systems, as the historical gap between memory access times and drive access times narrows to microseconds.

  DDN's integration of SCADA with Infinia is identified as one of the first concrete implementations under the Storage-Next framework.
body_zh: |
  輝達（Nvidia）已將cuFile應用程式介面（API）及其底層軟體堆疊開源，指定Google、Intel、Meta及輝達本身擔任首批專案維護者，並同步宣布啟動Storage-Next產業計畫，集結逾40家成員，目標是重新定義儲存系統服務GPU型AI工作負載的方式。

  ## cuFile與GPUDirect Storage

  cuFile是輝達GPUDirect Storage技術的開源元件，可讓資料直接在儲存硬體與GPU記憶體之間傳輸，繞過CPU並降低延遲。輝達表示，cuFile利用GPU執行緒與高頻寬記憶體，存取系統記憶體以外的資料，並宣稱此方式可將儲存存取時間縮短至微秒等級。

  透過將cuFile及其底層軟體堆疊開源，輝達表示希望擴大跨硬體與軟體平台的互通性。此專案開放外部貢獻，並設計為與Linux安全實踐原則對齊，以符合GPU儲存存取的安全要求。

  ## Storage-Next與SCADA

  Storage-Next匯聚了逾40家儲存與快閃記憶體供應商，包括DDN、Kioxia及美光（Micron），以及控制器廠商、散熱業者、編排營運商與標準化組織。輝達表示，此計畫旨在定義GPU驅動儲存的運作方式，並將相關做法轉化為開放產業標準，重點在於移動大型AI資料集，並消除運算層與儲存層之間的瓶頸。

  Storage-Next的核心是輝達所稱的SCADA框架，全名為「擴展加速資料存取」（Scaled, Accelerated Data Access）。其設計目標是讓並行GPU能夠直接從儲存裝置，僅將應用程式所需的資料拉入GPU記憶體，而非透過傳統記憶體層級搬移整個資料集。

  輝達表示，SCADA將直接資料存取分為兩個部分，以解決應用程式與儲存裝置密切通訊時衍生的安全風險。在此設計下，使用者層級的應用程式元件保留在可信計算基礎（trusted computing base）之外，而特權元件則透過標準Linux安全協定，在應用程式與已授權儲存裝置之間建立受保護的存取管道。

  ## AI儲存需求為何正在轉變

  輝達將此項行動歸因於AI系統產生儲存流量方式的根本改變。輝達指出，AI代理人正在產生大量儲存請求，GPU如今可直接發起儲存操作，形成數以千計的並行請求，而這些操作要求儲存系統同時執行加密、壓縮、驗證與資料重建。

  輝達表示，隨著AI模型採用更龐大的資料集，以及超越系統記憶體容量的長脈絡視窗（context window），上述負擔正持續加重。輝達將此變化描述為：儲存系統正從被動的資料儲存庫，蛻變為AI工作負載資料路徑中的主動元素。

  輝達亦將快速且安全的儲存存取與網路防禦相連結，指出用於資安目的的AI系統需要迅速取得安全脈絡與相關資料，並將此次開源行動連結至產業在安全AI基礎架構方面的整體努力。

  ## 硬體整合

  輝達將此軟體計畫與Vera BlueField-4 STX硬體相連結，並將其描述為整合了Vera Rubin處理器、Vera BlueField-4儲存處理器與Spectrum-X乙太網路的平台。輝達表示，STX採用其DOCA安全堆疊，在AI資料路徑中持續執行安全政策，而CMX脈絡記憶體儲存（CMX Context Memory Storage）則為長脈絡及多輪AI推論提供專屬的脈絡層。

  輝達引用了Vera CPU的基準測試數據，該處理器為BlueField-4 STX平台的組成部分之一。輝達表示，在兩階段壓縮與加密管線中，該處理器的吞吐量最高可達x86 CPU的3.21倍。輝達指出，這些數字證明加密、壓縮、完整性檢查及資料復原等儲存功能，可在對傳統主機運算資源造成較少負擔的情況下完成處理——而當大量AI代理人並行存取儲存時，主機運算資源正是輝達所識別的潛在瓶頸所在。

  ## 初期實作

  Storage-Next成員之一DDN表示，該公司正將SCADA整合至其Infinia軟體定義資料平台。DDN技術長Sven Oehme表示：「AI的成功將不取決於組織擁有多少基礎架構，而是取決於其使用效率。我們與輝達的合作正協助打造GPU與資料之間更直接、高效的連結——讓加速運算資源維持高效運作、加快洞察速度，並使客戶能從AI投資中獲得更強的商業與財務回報。」

  ## 產業影響

  對儲存廠商而言，cuFile開源、SCADA框架及Storage-Next聯盟，代表儲存產品所必須交付內容的結構性轉變。輝達將此挑戰定位為：隨著記憶體存取時間與磁碟存取時間之間的歷史差距逐漸縮小至微秒等級，重點愈來愈在於以匹配現代GPU系統的速率，對資料進行移動、保護與處理。

  DDN將SCADA整合至Infinia的舉措，被認定為Storage-Next框架下最早的具體實作之一。
date: "2026-08-06"
source_published: "2026-08-05T15:15:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Intel", "Micron", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Nvidia opens cuFile APIs to speed AI storage access (trust 3/5)."
sources:
  - url: "https://datacenter.news/story/nvidia-opens-cufile-apis-to-speed-ai-storage-access"
    title: "Nvidia opens cuFile APIs to speed AI storage access"
    trust: 3
    type: primary
    published_at: "2026-08-05T15:15:00.000Z"
---
