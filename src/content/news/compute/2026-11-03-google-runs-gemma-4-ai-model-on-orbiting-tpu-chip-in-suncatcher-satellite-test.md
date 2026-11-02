---
title_en: "Google Runs Gemma 4 AI Model on Orbiting TPU Chip in Suncatcher Satellite Test"
title_zh: "「陽光捕手」衛星測試：Google 在軌道 TPU 晶片上執行 Gemma 4 AI 模型"
summary_en: "Google has completed the first in-orbit AI inference cycle using a data-center-class TPU chip aboard its Suncatcher prototype satellite, running Google DeepMind's Gemma 4 model and returning a response to Earth. Radiation durability and tight power constraints remain the central engineering challenges before the program advances."
summary_zh: "Google 完成史上首次在低地球軌道以資料中心等級 TPU 晶片執行 AI 推論的完整循環，在「陽光捕手」原型衛星上運行 Gemma 4 模型後成功回傳回應。輻射耐受性與嚴苛的電力限制，仍是計畫繼續推進前亟待突破的核心工程挑戰。"
body_en: |
  Google has run an AI model on a Tensor Processing Unit (TPU) chip in low Earth orbit for the first time using a data-center-class accelerator, the company said, marking an early milestone for its Suncatcher satellite computing program.

  The Suncatcher prototype satellite launched earlier this month aboard a SpaceX Falcon 9 rocket alongside more than 100 other spacecraft. After approximately three weeks of subsystem commissioning, Google's ground team sent its first prompt this week to Gemma 4 — an open AI model developed by Google DeepMind — running on one of the satellite's onboard TPU chips. The satellite transmitted a response as it passed over Svalbard, Norway, completing a full inference cycle in orbit.

  Travis Beals, Google's Senior Director, wrote in an official company blog post: "We sent our first prompt to the open Gemma 4 model on the satellite." The prompt asked the model to write a haiku about being in space. The ground team also tested a space-themed limerick and asked the satellite to report on its orbital environment, according to the source.

  Google described the exchange as the first AI response from a data-center-class TPU in orbit.

  ## What Suncatcher is designed to do

  Suncatcher is a long-term Google project targeting economical on-orbit computing infrastructure in the 2030s. The prototype is designed to pave the way for a network of satellites flying in close formation and handling large-scale AI inference workloads in orbit.

  A TPU — Tensor Processing Unit — is a custom chip Google designed specifically to accelerate machine learning and deep learning workloads. Unlike a CPU, which handles general-purpose computing, or a GPU, which was originally built for graphics processing, a TPU is optimized for the high-volume matrix math operations that neural network models require, with high processing speed and power efficiency.

  ## Power constraints limit operations

  The satellite carries four TPU chips and generates up to 1 kilowatt of electrical power — roughly enough to run a household microwave. That constraint means only one of the four TPUs can operate at a time, and each session lasts approximately 20 minutes. The same power restriction complicates communication between the satellite and ground stations, Google said.

  ## Radiation: the primary unresolved challenge

  Radiation is the central engineering problem still to be resolved. In space, high-energy particles can cause bit flips — spontaneous changes to values stored in chip memory — that do not trigger conventional monitoring systems, corrupting data silently without raising an alert.

  Google previously tested its TPUs under radiation conditions at a particle accelerator on Earth. Those tests showed minimal radiation effects for inference workloads but more significant problems for model training. The orbital test now allows Google's team to assess actual radiation behavior under real flight conditions rather than simulations, according to the source.

  Google said the haiku response demonstrates that a single inference cycle can complete in orbit. Sustained chip reliability under space radiation and thermal conditions still requires further testing, which is currently underway.

  ## Significance and next steps

  A successful long-duration demonstration would validate the core premise of on-orbit AI inference: that data-center-grade chips can operate reliably outside the controlled environment of a ground facility. The Suncatcher program targets a commercial-scale satellite computing network in the 2030s, and the prototype's results will directly shape the design of follow-on hardware.

  If the TPU chips prove reliable in orbit, Google plans to launch two additional satellites carrying more advanced chips in 2027.
body_zh: |
  Google 表示，該公司首次在低地球軌道以資料中心等級加速器晶片完成 AI 模型推論，標誌著其「陽光捕手」（Suncatcher）衛星運算計畫的一個早期里程碑。

  「陽光捕手」原型衛星本月稍早搭乘 SpaceX 獵鷹 9 號（Falcon 9）火箭升空，與逾百艘其他航天器同批部署入軌。歷經約三週的子系統調試後，Google 地面團隊本週首次向衛星上的其中一枚 TPU 晶片傳送提示詞，執行由 Google DeepMind 開發的開放 AI 模型 Gemma 4。衛星在飛越挪威斯瓦爾巴群島（Svalbard）上空時回傳了回應，完成了一次完整的在軌推論循環。

  Google 資深總監 Travis Beals 在官方部落格貼文中寫道：「我們向衛星上的開放 Gemma 4 模型傳送了第一道提示詞。」該提示詞要求模型寫一首關於身處太空的俳句。據報導，地面團隊還測試了一首太空主題的打油詩，並請衛星回報其軌道環境狀況。

  Google 將這次通訊交流描述為史上首次由軌道上的資料中心等級 TPU 傳回的 AI 回應。

  ## 陽光捕手的設計目標

  「陽光捕手」是 Google 的長期計畫，目標是在 2030 年代建立經濟實惠的在軌運算基礎設施。這枚原型衛星旨在為一個由多顆衛星密集編隊飛行、在軌承擔大規模 AI 推論工作負載的衛星網路鋪路。

  TPU（張量處理器，Tensor Processing Unit）是 Google 專為加速機器學習與深度學習工作負載而設計的客製晶片。與負責通用運算的 CPU，或最初為圖形處理而生的 GPU 不同，TPU 專門針對神經網路模型所需的大量矩陣數學運算而優化，在處理速度與電源效率上均有突出表現。

  ## 電力限制制約運作

  這枚衛星搭載了四枚 TPU 晶片，最大發電量為 1 千瓦，大致相當於一台家用微波爐的耗電量。此一限制意味著四枚 TPU 每次只能有一枚在運作，且每次工作時段約持續 20 分鐘。Google 表示，相同的電力限制也使衛星與地面站之間的通訊更加複雜。

  ## 輻射：尚待解決的核心挑戰

  輻射是目前仍待突破的核心工程難題。在太空中，高能粒子可能引發「位元翻轉」——即晶片記憶體中儲存的數值發生自發性變化——而這類錯誤不會觸發傳統監控系統的警報，會在毫無預警的情況下靜默地損毀資料。

  Google 先前已在地面的粒子加速器設施中對其 TPU 進行過輻射條件測試。測試結果顯示，推論工作負載受到的輻射影響極小，但模型訓練所受的影響則較為顯著。此次在軌測試讓 Google 團隊得以在真實飛行條件下評估實際的輻射行為，而非僅仰賴模擬結果。

  Google 表示，這首俳句回應證明了單次推論循環確實能夠在軌道上順利完成。然而，晶片在太空輻射與熱環境下的長期可靠性，仍需進一步測試，相關工作目前正在持續進行中。

  ## 意義與下一步

  若能成功完成長時間驗證，將確立在軌 AI 推論的核心前提：資料中心等級的晶片能夠在地面設施的受控環境之外穩定可靠地運作。「陽光捕手」計畫的目標是在 2030 年代建立商業規模的衛星運算網路，而原型衛星的測試結果將直接左右後續硬體的設計方向。

  若 TPU 晶片的在軌可靠性獲得驗證，Google 計畫於 2027 年再發射兩枚搭載更先進晶片的衛星。
date: "2026-11-03"
source_published: "2026-11-02T00:00:00.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Google Uji Cip TPU di Luar Angkasa, Radiasi dan Daya Terbatas jadi Ujian Utama (trust 3/5)."
sources:
  - url: "https://teknologi.bisnis.com/read/20261102/101/2017679/google-uji-cip-tpu-di-luar-angkasa-radiasi-dan-daya-terbatas-jadi-ujian-utama"
    title: "Google Uji Cip TPU di Luar Angkasa, Radiasi dan Daya Terbatas jadi Ujian Utama"
    trust: 3
    type: primary
    published_at: "2026-11-02T00:00:00.000Z"
---
