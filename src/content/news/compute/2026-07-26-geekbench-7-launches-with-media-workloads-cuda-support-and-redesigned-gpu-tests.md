---
title_en: "Geekbench 7 launches with media workloads, CUDA support, and redesigned GPU tests"
title_zh: "Geekbench 7 正式上線：新增媒體工作負載、CUDA 原生支援，GPU 測試全面重設計"
summary_en: "Geekbench 7 has launched with an overhauled CPU suite that adds media-processing workloads, a GPU benchmark redesigned around machine learning and creative tasks, and native NVIDIA CUDA support; scores are not compatible with Geekbench 6."
summary_zh: "Geekbench 7 正式推出，CPU 測試套件大幅翻新並加入媒體處理工作負載，GPU 基準測試圍繞機器學習與創意任務重新設計，並首度導入輝達 CUDA 原生支援；新版分數與 Geekbench 6 不相容。"
body_en: |
  Geekbench 7 has launched with an overhauled benchmark suite that adds media-processing workloads to the CPU tests, rewrites the GPU suite around machine learning and creative tasks, and introduces native NVIDIA CUDA support for the first time.

  The new version is not score-compatible with Geekbench 6. The CPU baseline is anchored at 2,500 points using a Lenovo Legion laptop equipped with an AMD Ryzen 7 7700 processor; the GPU baseline is set at 100,000 points using the same laptop's GeForce RTX 4060 graphics card.

  ## New media group in the CPU suite

  The most visible change to the CPU tests is a new media group, built on the premise that calls, streaming, and playback now dominate how most machines are used, according to ServeTheHome, which tested the benchmark for several days ahead of publication.

  The Video Encoder test pushes desktop captures with synthetic cursor motion through the AOM AV1 encoder — the open-source video codec developed by the Alliance for Open Media — simulating the encoding load of a screen share on a video call application such as Zoom or Teams. The Audio Encoder encodes two minutes of mixed music and speech using the Opus codec. The Video Decoder test chains four operations into a single score: unpacking an AV1 video stream, decoding the accompanying Opus audio track, resampling that audio, and feeding the result to Whisper — an open-source speech-recognition model — for caption generation.

  ## Updates to existing CPU workloads

  Several tests carried over from Geekbench 6 have been expanded in scope. File Compression now runs three archives holding source code, compiled object code, and text through three algorithms — LZ4, zlib, and Zstandard — and verifies each result with SHA1. The PDF Viewer test renders six documents using PDFium, the rendering library embedded in the Chrome browser. Photo Library adds support for JPEG-XL and DNG image formats alongside JPEG, applies object-detection tagging using MobileNetV1 SSD (a lightweight neural network designed for identifying objects in images), and stores results in a SQLite database. Photo Editor now processes ten images across a wider spread of adjustments.

  Other workloads appear largely unchanged from the prior version: OpenStreetMap routing, a headless browser test across eight web pages, the Clang compiler building the Lua scripting language, Python 3.13 converting 190 Markdown files to HTML, Blender Cycles ray tracing, and Jolt physics simulation.

  ## GPU suite redesigned around machine learning and creative tasks

  The GPU benchmark has been substantially rewritten. New tests include DeepLabV3+ semantic segmentation — a neural network used for isolating subjects in video call backgrounds — RetinaFace for facial detection used in filters, and RFDN super-resolution scaling that upscales a 256-by-256-pixel image tile to 1,024-by-1,024 pixels. Photo editing workloads cover horizon straightening, photo filters, LUT (look-up table) color grading using tetrahedral interpolation, and a RAW image pipeline handling noise reduction, color processing, and demosaicing, the process of recovering full-color image data from a camera sensor's raw output. The synthesis group adds feature matching and a path tracer running the Blender BMW scene, along with two physics simulations.

  The practical addition on the GPU side is native NVIDIA CUDA support. CUDA, or Compute Unified Device Architecture, is NVIDIA's parallel computing platform; its absence in earlier Geekbench versions meant NVIDIA graphics cards executed GPU compute workloads through a translation layer rather than their native interface. Native CUDA support widens the range of hardware configurations that can be directly compared within the benchmark.

  ## Scope and platform availability

  ServeTheHome noted that Geekbench 7 is not a strict throughput benchmark, which means multi-core scores do not scale with core count the way a dedicated parallel-workload benchmark such as SPEC CPU2026 would. The suite is designed for phones, laptops, and modest workstations — where a small number of fast cores handle interactive tasks — not for high-core-count workstations or servers running multi-tenant or parallel throughput workloads.

  The tool is available for Windows, Linux, macOS, and Android, with Linux preview builds also available for Arm and RISC-V architectures. One issue is present at launch: uploading a result to the Geekbench results browser and linking it to an account does not yet display the result on the account page, according to ServeTheHome, which recommended saving result URLs manually until the issue is resolved.

  ServeTheHome said it plans to integrate Geekbench 7 results into its hardware reviews over the coming weeks.
body_zh: |
  Geekbench 7 正式推出，帶來全面翻新的基準測試套件，在 CPU 測試中新增媒體處理工作負載，將 GPU 測試套件圍繞機器學習與創意任務重新撰寫，並首度導入輝達 CUDA 原生支援。

  新版本的分數與 Geekbench 6 不相容。CPU 基準點設定為 2,500 分，以搭載 AMD Ryzen 7 7700 處理器的聯想 Legion 筆記型電腦為錨點；GPU 基準點則設定為 100,000 分，使用同一台筆電上的 GeForce RTX 4060 顯示卡作為標準。

  ## CPU 套件新增媒體群組

  根據 ServeTheHome 的報導（該媒體在正式發布前花了數天時間實際測試此基準工具），CPU 測試中最顯著的變化是新增了媒體群組，其設計前提是：通話、串流與播放如今已主導大多數裝置的使用情境。

  「影片編碼器」測試會將帶有合成游標動作的桌面錄影，透過 AOM AV1 編碼器進行處理——AV1 是由開放媒體聯盟（Alliance for Open Media）開發的開源影片編解碼器——以此模擬在 Zoom 或 Teams 等視訊會議應用程式中進行螢幕分享時的編碼負載。「音訊編碼器」則使用 Opus 編解碼器對兩分鐘的混合音樂與語音進行編碼。「影片解碼器」測試將四項操作串連成單一分數：解包 AV1 影片串流、解碼隨附的 Opus 音軌、對音訊進行重新取樣，並將結果輸入 Whisper——一款開源語音辨識模型——以自動產生字幕。

  ## 現有 CPU 工作負載的更新

  從 Geekbench 6 延續下來的數項測試，在新版中擴展了測試範疇。「檔案壓縮」現在會對三個分別存放原始碼、編譯目的碼與純文字的壓縮檔，依序套用 LZ4、zlib 與 Zstandard 三種演算法，並以 SHA1 驗證每項結果。「PDF 檢視器」測試使用 PDFium（Chrome 瀏覽器內建的渲染函式庫）渲染六份文件。「照片資料庫」除原有的 JPEG 格式外，新增支援 JPEG-XL 與 DNG 影像格式，並透過 MobileNetV1 SSD（一種專為影像物件辨識設計的輕量級神經網路）進行物件偵測標記，最後將結果儲存至 SQLite 資料庫。「照片編輯器」則擴大處理範圍，現可對十張影像套用更多樣的調整項目。

  其他工作負載與上一版本相比大致維持不變，包括：OpenStreetMap 路由、對八個網頁進行的無頭瀏覽器測試、以 Clang 編譯器建置 Lua 腳本語言、Python 3.13 將 190 個 Markdown 檔案轉換為 HTML、Blender Cycles 光線追蹤，以及 Jolt 物理模擬。

  ## GPU 測試套件圍繞機器學習與創意任務重新設計

  GPU 基準測試已大幅重寫。新增測試項目包括：DeepLabV3+ 語意分割（一種用於視訊通話中分離畫面主體與背景的神經網路）、用於濾鏡中人臉偵測的 RetinaFace，以及 RFDN 超解析度縮放（可將 256×256 像素的影像區塊放大至 1,024×1,024 像素）。照片編輯工作負載涵蓋水平校正、照片濾鏡、使用四面體插值法的 LUT（查找表）色彩分級，以及處理降噪、色彩處理與解馬賽克的 RAW 影像處理流程——解馬賽克是指從相機感光元件的原始輸出中還原完整彩色影像資料的過程。合成群組新增特徵比對，以及執行 Blender BMW 場景的路徑追蹤器，另外還有兩項物理模擬。

  GPU 方面最具實用意義的新增功能，是輝達 CUDA 的原生支援。CUDA（Compute Unified Device Architecture，計算統一裝置架構）是輝達的平行運算平台；在早期版本的 Geekbench 中，由於缺乏 CUDA 原生支援，輝達顯示卡在執行 GPU 運算工作負載時，必須透過轉譯層而非其原生介面來運作。CUDA 原生支援的導入，擴大了可在基準測試中直接比較的硬體配置範圍。

  ## 適用範疇與平台支援

  ServeTheHome 指出，Geekbench 7 並非嚴格意義上的吞吐量基準測試工具，這意味著多核心分數不會像 SPEC CPU2026 等專為平行工作負載設計的基準工具那樣，隨核心數增加而等比例提升。此套件的設計目標是手機、筆記型電腦與一般工作站——在這些裝置上，少量高效能核心負責處理互動式任務——而非用於執行多租戶或平行吞吐量工作負載的高核心數工作站或伺服器。

  此工具支援 Windows、Linux、macOS 及 Android 平台，並另有 Linux 預覽版本提供 Arm 與 RISC-V 架構下載。ServeTheHome 指出，上線時存在一項已知問題：將測試結果上傳至 Geekbench 結果瀏覽器並連結至帳號後，該結果目前尚無法顯示於帳號頁面；在問題解決之前，建議手動儲存結果網址。

  ServeTheHome 表示，計劃在未來數週內將 Geekbench 7 的測試結果整合至旗下的硬體評測報導中。
date: "2026-07-26"
source_published: "2026-07-25T15:06:47.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Geekbench 7 is Out with a Major Overhaul (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/geekbench-7-is-out-with-a-major-overhaul/"
    title: "Geekbench 7 is Out with a Major Overhaul"
    trust: 3
    type: primary
    published_at: "2026-07-25T15:06:47.000Z"
---
