---
title_en: "Intel upgrades Xeon 6 memory, adds DDR5-8000 RDIMM and Gen 2 MRDIMM support"
title_zh: "英特爾升級 Xeon 6 記憶體規格，新增 DDR5-8000 RDIMM 與第二代 MRDIMM 支援"
summary_en: "Intel announced DDR5-8000 RDIMM support for select Xeon 6 6700P processors starting as soon as August 2026 and Gen 2 MRDIMM compatibility for Xeon 6900P chips in Q1 2027, citing memory bandwidth as a bottleneck for AI workloads on current server platforms."
summary_zh: "英特爾宣布最快將於 2026 年 8 月為部分 Xeon 6 6700P 處理器導入 DDR5-8000 RDIMM 支援，並計劃於 2027 年第一季為 Xeon 6900P 晶片加入第二代 MRDIMM 相容性，原因是記憶體頻寬已成為現行伺服器平台處理 AI 工作負載的瓶頸。"
body_en: |
  Intel is adding DDR5-8000 RDIMM (registered dual inline memory module) support to select Xeon 6 6700P server processors starting as soon as August 2026, and plans to bring second-generation MRDIMM (multiplexed registered DIMM) compatibility to Xeon 6900P chips in Q1 2027, the company announced.

  The changes, outlined in a blog post by Intel's Srini Krishna, frame both upgrades as responses to CPU memory bandwidth becoming a bottleneck for modern AI workloads.

  ## DDR5-8000 RDIMM support for select Xeon 6700P chips

  The near-term upgrade raises the maximum qualified memory speed on select Xeon 6 6700P processors — code-named Granite Rapids-SP — from DDR5-6400 to DDR5-8000, expressed in megatransfers per second (MT/s). DDR5-8000 carries roughly 25 percent more peak bandwidth than DDR5-6400 on paper, according to Intel. The company said it measured a 20 percent increase in memory bandwidth in its testing, but projects only a 3 to 6 percent performance improvement across a broad range of workloads — a gap Intel's own blog post attributes to the fact that additional memory bandwidth only helps when bandwidth is the limiting factor for a given workload.

  Intel also claims a 6 percent reduction in memory latency. Based on JEDEC standard timings, DDR5-8000 carries an absolute latency of 14 nanoseconds, compared to 14.38 nanoseconds for DDR5-6400.

  The upgrade applies only to 1DPC (one DIMM per channel) configurations. Intel's blog post made no mention of 2DPC (two DIMMs per channel) operation at the higher speed. ServeTheHome reported that 2DPC is expected to remain at the platform's existing DDR5-5200 ceiling, which would widen the bandwidth gap between single- and dual-DIMM-per-channel configurations — a meaningful trade-off for operators who need to maximize total memory capacity per server.

  Intel has not yet disclosed which specific Xeon 6 6700P SKUs (stock-keeping units) will receive the DDR5-8000 qualification. The company previously validated only select Granite Rapids chips for MRDIMM operation at DDR5-8000 speeds, and ServeTheHome reported the RDIMM qualification is expected to track a similar chip selection.

  ## Why Granite Rapids can run faster memory without new silicon

  The upgrade is made possible by the design of the Granite Rapids memory controller. MRDIMMs work by multiplexing additional DDR5 memory chips on the module itself, enabling a memory bus that can sustain speeds up to 8800 MT/s — a mode that requires the CPU-side memory controller to operate reliably at DDR5-8000 clock rates. Intel built that capability into Granite Rapids from the outset, even though the processors were designed before JEDEC had published a DDR5-8000 specification. Now that standard RDIMMs have reached comparable data rates, Intel said it is reusing those same controller capabilities to qualify conventional DIMMs at higher speeds.

  ## Gen 2 MRDIMM compatibility for Xeon 6900P, without higher speeds

  The second announcement adds support for Gen 2 MRDIMMs on Xeon 6900P (Granite Rapids-AP) processors in Q1 2027, but without access to the newer format's faster data rates. Gen 2 MRDIMMs are rated to reach up to 12800 MT/s, approximately 60 percent faster than the Gen 1 ceiling of 8800 MT/s. Intel said the Granite Rapids memory controllers are already operating near their limits to sustain Gen 1 MRDIMM speeds, leaving no headroom to reach Gen 2 frequencies.

  Xeon 6900P systems will be able to accept Gen 2 MRDIMM modules, but those modules will operate at Gen 1 speeds. Intel told ServeTheHome the purpose is ecosystem continuity rather than a bandwidth gain: "Providing Gen2 MRDIMM support is primarily about ecosystem evolution: ensuring continued availability of high-bandwidth memory options, broadening vendor and module choices, and providing a forward-compatible path as the industry transitions to newer MRDIMM generations. The benefit is platform continuity and flexibility rather than additional bandwidth."

  ## Bridging the gap until Diamond Rapids in 2027

  Granite Rapids Xeon 6 processors launched in 2024 and are not scheduled to be replaced by Intel's next-generation Diamond Rapids architecture until 2027. Intel's newer Xeon 6+ "Clearwater Forest" chips already support DDR5-8000 RDIMMs and Gen 2 MRDIMMs at full speed. The mid-generation memory upgrades narrow the performance and compatibility gap between the two platforms without requiring customers to replace existing processors.

  Memory vendors had already completed DDR5-8000 RDIMM and Gen 2 MRDIMM products before Intel's announcement, according to ServeTheHome. Those modules were previously expected to ship primarily into Xeon 6+ and AMD's forthcoming EPYC "Venice" platforms; the announcement opens qualifying Xeon 6 systems as an additional destination for those products.

  DDR5-8000 RDIMM support for qualifying Xeon 6 6700P chips is scheduled to arrive in August 2026. Gen 2 MRDIMM compatibility for Xeon 6900P processors is targeted for Q1 2027.
body_zh: |
  ## 英特爾升級 Xeon 6 記憶體規格，新增 DDR5-8000 RDIMM 與第二代 MRDIMM 支援

  英特爾宣布，最快將於 2026 年 8 月為部分 Xeon 6 6700P 伺服器處理器導入 DDR5-8000 RDIMM（登錄式雙列直插記憶體模組）支援，並計劃於 2027 年第一季為 Xeon 6900P 晶片帶來第二代 MRDIMM（多工登錄式 DIMM）相容性。

  上述兩項升級均呈現於英特爾 Srini Krishna 所撰寫的一篇部落格文章中，文中將這兩項改進定調為回應 CPU 記憶體頻寬已成為現代 AI 工作負載瓶頸的舉措。

  ## 部分 Xeon 6700P 晶片支援 DDR5-8000 RDIMM

  近期這項升級將部分 Xeon 6 6700P 處理器——開發代號為 Granite Rapids-SP——的最高認證記憶體速度從 DDR5-6400 提升至 DDR5-8000，速度以百萬次傳輸每秒（MT/s）計算。根據英特爾的說法，DDR5-8000 在理論上的峰值頻寬比 DDR5-6400 高出約 25%。該公司表示在自家測試中量測到記憶體頻寬提升了 20%，但預估在廣泛工作負載中整體效能僅提升 3% 至 6%——英特爾自己的部落格文章對這個落差的解釋是：唯有當頻寬本身是特定工作負載的限制因素時，更高的記憶體頻寬才能發揮實質效益。

  英特爾同時宣稱記憶體延遲降低了 6%。依據 JEDEC 標準時序，DDR5-8000 的絕對延遲為 14 奈秒，相較之下 DDR5-6400 為 14.38 奈秒。

  此項升級僅適用於 1DPC（每通道一條 DIMM）配置。英特爾的部落格文章並未提及在更高速度下的 2DPC（每通道兩條 DIMM）運作模式。ServeTheHome 報導指出，2DPC 預計仍將維持在現行平台 DDR5-5200 的上限，這將進一步拉大單條與雙條 DIMM 每通道配置之間的頻寬差距——對於需要最大化每台伺服器總記憶體容量的業者而言，這是一項值得審慎評估的取捨。

  英特爾目前尚未透露哪些特定 Xeon 6 6700P SKU（庫存單位）將獲得 DDR5-8000 認證。該公司此前僅對部分 Granite Rapids 晶片進行過 MRDIMM 在 DDR5-8000 速度下的認證，而 ServeTheHome 報導指出，RDIMM 認證預計將採取類似的晶片篩選標準。

  ## Granite Rapids 為何無需更換矽晶片即可支援更快的記憶體

  此項升級之所以得以實現，關鍵在於 Granite Rapids 記憶體控制器的設計。MRDIMM 透過在模組本身上多工更多 DDR5 記憶體晶片，讓記憶體匯流排能夠維持最高達 8800 MT/s 的速度——而這種模式需要 CPU 端的記憶體控制器能夠在 DDR5-8000 時脈速率下穩定運作。英特爾從一開始便將這項能力內建於 Granite Rapids 之中，即便當時 JEDEC 尚未發布 DDR5-8000 規範。如今標準 RDIMM 已達到相近的資料傳輸速率，英特爾表示將重新運用相同的控制器能力，對傳統 DIMM 進行更高速度的認證。

  ## Xeon 6900P 支援第二代 MRDIMM，但速度不提升

  第二項公告為 Xeon 6900P（Granite Rapids-AP）處理器於 2027 年第一季加入第二代 MRDIMM 支援，但無法使用新世代格式更快的資料傳輸速率。第二代 MRDIMM 的額定速度最高可達 12800 MT/s，比第一代上限 8800 MT/s 快約 60%。英特爾表示，Granite Rapids 記憶體控制器為了維持第一代 MRDIMM 速度已接近極限，沒有餘裕再進一步達到第二代的頻率。

  Xeon 6900P 系統將能夠安裝第二代 MRDIMM 模組，但這些模組將以第一代速度運作。英特爾向 ServeTheHome 表示，此舉的目的是生態系統的延續性，而非提升頻寬：「提供第二代 MRDIMM 支援，主要是為了推動生態系演進：確保高頻寬記憶體選項的持續供應、拓展廠商與模組的選擇空間，並在產業逐步轉向新一代 MRDIMM 的過程中提供前向相容路徑。其效益在於平台的延續性與彈性，而非額外的頻寬提升。」

  ## 銜接至 2027 年 Diamond Rapids 的過渡方案

  Granite Rapids Xeon 6 處理器於 2024 年推出，預計要到 2027 年才會由英特爾新一代 Diamond Rapids 架構取代。英特爾較新的 Xeon 6+「Clearwater Forest」晶片已全速支援 DDR5-8000 RDIMM 與第二代 MRDIMM。這次的中期記憶體升級縮小了兩個平台之間的效能與相容性落差，同時無需客戶更換現有處理器。

  根據 ServeTheHome 的報導，記憶體廠商早在英特爾宣布之前便已完成 DDR5-8000 RDIMM 與第二代 MRDIMM 產品的開發。這些模組原本預計主要銷往 Xeon 6+ 以及超微（AMD）即將推出的 EPYC「Venice」平台；此次公告則為這些產品開闢了通過認證的 Xeon 6 系統作為額外的出貨目標。

  符合資格的 Xeon 6 6700P 晶片的 DDR5-8000 RDIMM 支援預計於 2026 年 8 月正式到來；Xeon 6900P 處理器的第二代 MRDIMM 相容性則鎖定於 2027 年第一季推出。
date: "2026-07-21"
source_published: "2026-07-20T17:00:52.000Z"
category: "compute"
secondary_categories: []
updates: "compute/2026-07-19-micron-samsung-show-next-gen-server-memory-up-to-12800-mts-at-computex-2026"
region: []
vendor: ["AMD", "Intel"]
trust:
  score: 3
  reasoning: "Single source: Intel To Add Support for Gen 2 MRDIMMs and Faster DDR5 RDIMMs to Xeon 6 Platform (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/intel-to-add-support-for-gen-2-mrdimms-and-faster-ddr5-rdimms-to-xeon-6-platform/"
    title: "Intel To Add Support for Gen 2 MRDIMMs and Faster DDR5 RDIMMs to Xeon 6 Platform"
    trust: 3
    type: primary
    published_at: "2026-07-20T17:00:52.000Z"
---
