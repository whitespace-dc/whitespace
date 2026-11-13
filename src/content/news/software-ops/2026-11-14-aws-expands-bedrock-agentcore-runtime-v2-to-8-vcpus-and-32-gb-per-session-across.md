---
title_en: "AWS Expands Bedrock AgentCore Runtime V2 to 8 vCPUs and 32 GB per Session Across 19 Regions"
title_zh: "AWS 將 Bedrock AgentCore Runtime V2 擴展至每節點 8 vCPU 與 32 GB 記憶體，覆蓋 19 個區域"
summary_en: "Amazon Web Services has expanded its Bedrock AgentCore Runtime to a second-generation version offering up to 8 virtual CPUs and 32 GB of memory per session, four times the previous limits, with the container image ceiling raised to 10 GB. Runtime V2 is now the default for new environments in 19 AWS regions and reduces session cold-start times from a median of nearly 30 seconds to under 2 seconds for 75 percent of launches."
summary_zh: "Amazon Web Services 將 Bedrock AgentCore Runtime 升級至第二代版本，每個工作階段可使用最多 8 顆虛擬 CPU 與 32 GB 記憶體，是前一代的四倍，容器映像大小上限亦提升至 10 GB。Runtime V2 現已在全球 19 個 AWS 區域成為新環境的預設版本，並將工作階段冷啟動時間從中位數近 30 秒大幅縮短至 75％ 的啟動均在 2 秒以內完成。"
body_en: |
  AWS has upgraded Amazon Bedrock AgentCore Runtime to a second-generation version, called Runtime V2, that provides each session with up to 8 virtual CPUs and 32 GB of memory, four times the resource limits of the prior generation, and raises the container image size ceiling from an earlier limit to 10 GB. The new version is now the default for new environments created across 19 AWS regions.

  ## Why the compute limits were raised

  AgentCore Runtime is AWS's managed execution environment for AI agents, software that takes actions such as running code, processing files, and operating applications rather than only generating text. AWS said that as agents have expanded beyond simple model calls into heavier tasks, their compute requirements have grown with them. The higher per-session limits allow agents to compile large software projects, operate browsers, and load local AI models within a single environment, the company said.

  Each session continues to run in an isolated Firecracker microVM, a lightweight virtual machine format that provides hardware-level separation between sessions. CPU and memory allocations scale with workload and can drop to zero when an agent is idle, AWS said.

  ## Cold-start time

  V2 uses a snapshot-based startup mechanism that AWS introduced when it launched AgentCore Runtime in September. The system completes agent initialization in advance and saves a snapshot; new session launches restore from that snapshot rather than repeating the full initialization sequence.

  AWS measured the improvement using a 2 GB container image running a simple agent that does not call an AI model. Under that configuration, 75 percent of V2 sessions started in under 2 seconds. The equivalent figure for the previous generation was 29.7 seconds.

  ## Memory reclamation within sessions

  V2 also changes when memory is returned to the pool. The runtime reclaims memory within minutes of the agent releasing it, rather than holding the allocation until the session ends. AWS said this can reduce billed memory usage within a single session by up to 68 percent for agents that handle multiple interaction rounds, though the company noted that the overall cost reduction will not necessarily match that percentage.

  ## Availability and migration

  Runtime V2 is now the default for new environments in 19 AWS regions, including Tokyo, Seoul, Singapore, Malaysia, and Thailand. Existing environments are not automatically migrated. Developers can switch by setting the `platformVersion` parameter to `V2`, or they can explicitly specify `V1` to remain on the prior version.
body_zh: |
  ## AWS 將 Bedrock AgentCore Runtime V2 擴展至每節點 8 vCPU 與 32 GB 記憶體，覆蓋 19 個區域

  Amazon Web Services（AWS）已將 Amazon Bedrock AgentCore Runtime 升級至第二代版本，稱為 Runtime V2。新版本為每個工作階段提供最多 8 顆虛擬 CPU 與 32 GB 記憶體，資源上限為前一代的四倍，同時將容器映像大小的上限提升至 10 GB。Runtime V2 現已在全球 19 個 AWS 區域成為新建環境的預設版本。

  ## 為何提升運算資源上限

  AgentCore Runtime 是 AWS 專為 AI 代理程式（agent）所打造的託管執行環境。這類代理程式不僅能生成文字，還能執行程式碼、處理檔案、操作應用程式等實際動作。AWS 表示，隨著代理程式的應用情境逐步從單純的模型呼叫擴展至更繁重的運算任務，其所需的運算資源也隨之增加。更高的每工作階段資源上限，使代理程式得以在單一環境中編譯大型軟體專案、操作瀏覽器，以及載入本地端 AI 模型，AWS 如此說明。

  每個工作階段仍在獨立的 Firecracker 微型虛擬機器（microVM）中執行。Firecracker 是一種輕量化虛擬機器格式，可在各工作階段之間提供硬體層級的隔離。AWS 表示，CPU 與記憶體的配置會依工作負載動態調整，當代理程式閒置時亦可降至零。

  ## 冷啟動時間

  V2 採用 AWS 在今年九月推出 AgentCore Runtime 時所引入的快照式啟動機制。系統會預先完成代理程式的初始化流程並儲存快照；新工作階段啟動時直接從快照還原，無需重複完整的初始化程序。

  AWS 以一個大小為 2 GB 的容器映像進行測試，該映像執行一個不呼叫 AI 模型的簡單代理程式。在此配置下，75％ 的 V2 工作階段可在 2 秒以內完成啟動。前一代在相同測試條件下的對應數值為 29.7 秒。

  ## 工作階段內的記憶體回收

  V2 也調整了記憶體歸還資源池的時機。執行環境現在會在代理程式釋放記憶體後數分鐘內即完成回收，而非等到工作階段結束才釋出配置。AWS 表示，對於需要處理多輪互動的代理程式，此機制可將單一工作階段內的計費記憶體用量降低最多 68％，但 AWS 也說明，整體費用節省幅度不一定會與此百分比相符。

  ## 供應範圍與遷移方式

  Runtime V2 現已在全球 19 個 AWS 區域成為新環境的預設版本，涵蓋東京、首爾、新加坡、馬來西亞及泰國等地。現有環境不會自動遷移。開發者可透過將 `platformVersion` 參數設定為 `V2` 來切換至新版本，亦可明確指定 `V1` 以繼續沿用前一代版本。
date: "2026-11-14"
source_published: "2026-11-13T09:11:24.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["AWS"]
trust:
  score: 3
  reasoning: "Single source: AWS擴充AgentCore執行環境，支援大型程式編譯與本地模型載入 (trust 3/5)."
sources:
  - url: "https://www.ithome.com.tw/news/180503"
    title: "AWS擴充AgentCore執行環境，支援大型程式編譯與本地模型載入"
    trust: 3
    type: primary
    published_at: "2026-11-13T09:11:24.000Z"
---
