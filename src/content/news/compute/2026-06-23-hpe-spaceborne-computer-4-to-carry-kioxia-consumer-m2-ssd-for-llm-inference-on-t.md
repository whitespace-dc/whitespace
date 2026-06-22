---
title_en: "HPE Spaceborne Computer 4 to Carry Kioxia Consumer M.2 SSD for LLM Inference on the Moon"
title_zh: "HPE 太空電腦 4 號搭 Kioxia M.2 SSD 登月執行 LLM 推論"
summary_en: "HPE's Spaceborne Computer 4, revealed at HPE Discover 2026, will run large language model inference on the lunar surface using a Kioxia BG-series consumer M.2 solid-state drive, chosen for its proven space heritage and minimal weight as part of the Astrolab FLEX moon lander mission."
summary_zh: "HPE 在 HPE Discover 2026 大會上發表第四代太空電腦（Spaceborne Computer 4），該系統將搭載 Kioxia BG 系列消費級 M.2 固態硬碟，作為 Astrolab FLEX 月球登陸器任務的一部分，在月球表面執行大型語言模型推論，以應對地月通訊延遲過高、無法即時遙控的挑戰。"
body_en: |
  HPE has disclosed that its fourth-generation Spaceborne Computer, destined for the lunar surface, will rely on a Kioxia BG-series M.2 solid-state drive — a DRAM-less consumer storage device common in budget laptops and small-form-factor PCs — to support GPU-based large language model (LLM) inference on the moon, according to ServeTheHome's coverage of HPE Discover 2026.

  ## Hardware configured for the lunar surface

  The Spaceborne Computer 4 is built as the compute module for the Astrolab FLEX Lunar Innovation Platform (FLIP), a moon lander. Earlier generations of the program — Spaceborne 1 through 3 — were designed for the International Space Station (ISS); the fourth generation targets the lunar surface, a significantly more distant and demanding environment, ServeTheHome reported.

  Weight is the dominant design constraint for lunar payloads, and Spaceborne Computer 4 is substantially smaller than its predecessors. The unit houses a low-power CPU and GPU intended to run LLMs locally on the rover.

  ## Why onboard inference is required

  Communication latency between Earth and the moon is too high to allow real-time ground control of time-sensitive decisions, ServeTheHome noted. Local processing lets the rover act on sensor data and run AI inference without waiting for a signal round-trip.

  ## Storage: commercial NAND over custom hardware

  The storage subsystem is a Kioxia BG-series M.2 NVMe SSD — a DRAM-less device, meaning it carries no onboard cache memory, which reduces both cost and mass. The form factor, roughly the size of a stick of gum, is the same hardware found in consumer PCs. Kioxia has been qualifying its standard NAND flash in space through earlier Spaceborne missions; the BG-series drives passed the testing and integration requirements for this mission, ServeTheHome reported. The selection reflects the competing demands of radiation tolerance, flight-heritage from prior deployments, and minimum weight.

  ## Cooling without an atmosphere

  Standard fan-and-heatsink cooling does not function in the lunar vacuum. Spaceborne Computer 4 uses a space radiator to dissipate heat instead, ServeTheHome reported. The radiator was not installed on the unit displayed at HPE Discover 2026, but was visible in imagery from Kioxia's booth at the same event.

  ## Program background and launch timeline

  The Spaceborne Computer program entered HPE through its acquisition of SGI. The first iteration used SGI server hardware built by Supermicro; the program has iterated through three ISS-focused generations since. Spaceborne Computer 4 is planned to launch aboard a SpaceX vehicle, ServeTheHome reported, with liftoff targeted for later in 2026, pending integration milestones.

  ## What the mission means for space AI infrastructure

  The deployment would mark the first time GPU-based LLM inference has operated on the lunar surface using commercial NAND storage. Kioxia supplied multiple BG-series drives to integration teams for qualification testing before the series was selected for the final configuration, ServeTheHome reported. A successful mission would validate the use of consumer-grade solid-state storage for AI workloads beyond low Earth orbit, potentially informing storage choices for future lunar and deep-space compute platforms.

  The Spaceborne Computer 4 is planned to launch aboard a SpaceX rocket as part of the Astrolab FLEX mission, with the target date set for later in 2026.
body_zh: |
  根據 ServeTheHome 對 HPE Discover 2026 大會的報導，HPE 透露其第四代太空電腦（Spaceborne Computer 4）將搭載 Kioxia BG 系列 M.2 固態硬碟——這是一款常見於平價筆記型電腦與小型電腦的無 DRAM 消費級儲存裝置——以支援在月球上執行基於 GPU 的大型語言模型（LLM）推論。

  ## 為月球表面量身打造的硬體配置

  Spaceborne Computer 4 是 Astrolab FLEX 月球創新平台（FLIP，Lunar Innovation Platform）登陸器的運算模組。此前幾代產品——Spaceborne 1 至 3——均是為國際太空站（ISS）所設計；第四代則以月球表面為目標，任務環境的距離更遠、條件更為嚴苛，ServeTheHome 如此報導。

  重量是月球酬載最關鍵的設計限制，Spaceborne Computer 4 因此比前幾代產品小上許多。這部裝置內建低功耗 CPU 與 GPU，設計用途是在月球車上本地執行大型語言模型。

  ## 為何需要在地端執行推論

  ServeTheHome 指出，地球與月球之間的通訊延遲過高，無法對時間敏感的決策進行即時地面控制。本地處理能力讓月球車得以就地分析感測器資料、執行 AI 推論，而無需等待訊號往返傳輸。

  ## 儲存方案：以商用 NAND 取代客製化硬體

  儲存子系統採用 Kioxia BG 系列 M.2 NVMe 固態硬碟——這是一款無 DRAM 設計的裝置，意即不配置板載快取記憶體，藉此同時降低成本與重量。其外型大小與一條口香糖相當，與一般消費性電腦所採用的硬體相同。Kioxia 早在前幾代 Spaceborne 任務中，便已持續驗證其標準 NAND 快閃記憶體在太空環境的可靠性；BG 系列固態硬碟通過了本次任務的測試與整合要求，ServeTheHome 報導。此次選用，反映了對抗輻射能力、先前部署所建立的飛行驗證紀錄，以及最輕重量等多重需求之間的競爭權衡。

  ## 在無大氣環境下的散熱方案

  標準的風扇與散熱片在月球真空環境中無法運作。ServeTheHome 報導，Spaceborne Computer 4 改採太空輻射散熱板來散逸熱能。在 HPE Discover 2026 大會上公開展示的樣機尚未安裝輻射散熱板，但在同一展覽中 Kioxia 攤位的圖片裡可見其蹤影。

  ## 計畫背景與發射時程

  Spaceborne Computer 計畫源自 HPE 收購 SGI 後的技術傳承。第一代採用由超微電腦（Supermicro）製造的 SGI 伺服器硬體；此後歷經三代以國際太空站為目標的迭代演進。ServeTheHome 報導，Spaceborne Computer 4 計畫搭乘 SpaceX 火箭升空，待各項整合里程碑完成後，目標於 2026 年底前執行發射。

  ## 對太空 AI 基礎設施的意義

  這次部署將是史上首次以商用 NAND 儲存裝置在月球表面執行基於 GPU 的 LLM 推論。ServeTheHome 報導，在 BG 系列被確定為最終配置之前，Kioxia 已向整合團隊提供多個 BG 系列固態硬碟，進行資格認證測試。若任務成功，將驗證消費級固態儲存裝置應用於近地軌道以外 AI 工作負載的可行性，並可能為未來月球及深太空運算平台的儲存方案選擇提供重要參考依據。

  Spaceborne Computer 4 計畫作為 Astrolab FLEX 任務的一部分，搭乘 SpaceX 火箭升空，目標發射日期定於 2026 年底。
date: "2026-06-23"
source_published: "2026-06-22T17:00:45.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["Supermicro"]
trust:
  score: 3
  reasoning: "Single source: This is the Storage of Spaceborne Computer 4 Bringing AI Compute to the Moon (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/this-is-the-storage-kioxia-hpe-spaceborne-computer-4-bringing-ai-compute-to-the-moon/"
    title: "This is the Storage of Spaceborne Computer 4 Bringing AI Compute to the Moon"
    trust: 3
    type: primary
    published_at: "2026-06-22T17:00:45.000Z"
---
