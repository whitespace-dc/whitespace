---
title_en: "Google extends GKE Autopilot with GPU and TPU network resource support"
title_zh: "Google 擴充 GKE Autopilot，加入 GPU 與 TPU 網路資源支援"
summary_en: "Google has added GPU and TPU support to managed DRANET on GKE Autopilot clusters, letting users provision accelerator networking through declarative Kubernetes objects without managing the underlying nodes. The update targets AI inference and training workloads that require high-throughput interconnects such as RDMA."
summary_zh: "Google 已為 GKE Autopilot 叢集上的受管 DRANET 新增 GPU 與 TPU 支援，讓使用者無需直接管理底層節點，即可透過宣告式 Kubernetes 物件佈建加速器網路。此更新主要針對需要 RDMA 等高頻寬互連的 AI 推論與訓練工作負載。"
body_en: |
  ## Google extends GKE Autopilot with GPU and TPU network resource support

  Google has added GPU and TPU support to managed DRANET (Dynamic Resource Allocation NETworking) on Google Kubernetes Engine (GKE) Autopilot clusters, extending automated network resource allocation to accelerator-based workloads in its managed Kubernetes service.

  The change allows GKE Autopilot users to deploy Pods — the basic schedulable units in Kubernetes — that request dedicated network interfaces for GPUs and Tensor Processing Units (TPUs), including interfaces that use RDMA (Remote Direct Memory Access), a networking protocol that allows direct memory transfers between machines without involving the host CPU. Users do this without managing the underlying compute nodes directly, which is the defining characteristic of Autopilot mode.

  ## How the configuration works

  The feature relies on three Kubernetes constructs used together: Autopilot clusters, custom ComputeClass definitions, and ResourceClaimTemplate objects. A ComputeClass tells the cluster what type of hardware to provision; a ResourceClaimTemplate specifies the networking device that should be allocated alongside the workload.

  According to Google, setup begins with a Virtual Private Cloud (VPC) network and a regional cluster. Users then create a ComputeClass for the chosen accelerator type and pair it with a ResourceClaimTemplate that defines the required networking device class.

  For GPU workloads, the documented example uses an Nvidia B200 processor on an a4-highgpu-8g machine type — a configuration carrying eight GPUs — with an automatic accelerator network profile. That ComputeClass also includes a reservation setting that ties resource creation to a named reservation in the user's project.

  For TPU workloads, the example ComputeClass specifies a TPU v6e slice with a count of eight and a 2x4 topology in a designated zone.

  ## Different network device classes for GPUs and TPUs

  GPU and TPU workloads reference different device classes within their ResourceClaimTemplates. GPU workloads using RDMA reference the device class `mrdma.google.com`, while TPU workloads use the non-RDMA device class `netdev.google.com`. Google said that distinction reflects the differing networking requirements of the two hardware types.

  In both cases, the resource claim links the Pod to the network device allocated on the underlying infrastructure, giving users a common operational model across accelerator types rather than requiring separate networking procedures for each.

  ## Example workload: Gemma 4 31B inference on GPU

  Google's published GPU deployment example runs a two-replica application serving the Gemma 4 31B language model using vLLM, an inference server. Each container in that manifest requests:

  - 10 CPUs
  - 1,000 GiB of memory
  - 1 TiB of ephemeral storage
  - Eight Nvidia GPUs

  The manifest also references the RDMA resource claim and the ComputeClass created earlier, and includes startup, liveness, and readiness probes, a shared memory volume, and a Kubernetes Secret holding a Hugging Face token used to download the model weights. A node selector directs the deployment to nodes matching the managed DRANET ComputeClass.

  ## Autopilot handles node provisioning on deployment

  When a user submits that deployment, Google said, GKE Autopilot reads the ComputeClass, provisions the required node type, and applies the managed DRANET network configuration. The resource claim then binds the Pod to the accelerator resources on that node. The same trigger-and-provision sequence applies to TPU workloads.

  Node lifecycle management and most cluster configuration tasks remain under Google's control throughout, which is the operational trade-off Autopilot is designed around. Users still need to author the ComputeClass and ResourceClaimTemplate objects, meaning some infrastructure specification work remains on the user side.

  ## What the update means for accelerator workloads on Kubernetes

  The addition is directed at developers and infrastructure teams building AI inference or training services on Kubernetes who want Google-managed cluster operations while retaining access to low-level accelerator networking. High-throughput interconnects such as RDMA are increasingly significant in multi-accelerator deployments because network throughput and latency can constrain the efficiency of distributed model training and inference, according to the DataCenterNews Asia Pacific report on the feature.

  The update reflects a broader pattern in which cloud providers are packaging accelerator access inside Kubernetes-native abstractions. Rather than requiring users to attach and configure network resources through separate procedures, the model uses declarative specifications — YAML manifests describing desired state — that can be versioned and deployed alongside application code.

  By combining automated cluster operations with explicit resource claims for networking, Google is addressing a gap between the operational simplicity that Autopilot offers and the more specialised infrastructure requirements of accelerator-heavy workloads. The published GPU example shows a single deployment manifest referencing both the ResourceClaimTemplate and the ComputeClass, allowing the cluster to provision the correct machine type, attach the requested networking resources, and schedule the workload to the appropriate nodes in a single operation.
body_zh: |
  ## Google 擴充 GKE Autopilot，加入 GPU 與 TPU 網路資源支援

  Google 已為 Google Kubernetes Engine（GKE）Autopilot 叢集上的受管 DRANET（動態資源分配網路，Dynamic Resource Allocation NETworking）新增 GPU 與 TPU 支援，將自動化網路資源分配延伸至其受管 Kubernetes 服務中以加速器為基礎的工作負載。

  此變更讓 GKE Autopilot 使用者能夠部署 Pod——Kubernetes 中最基本的可排程單元——並為 GPU 與張量處理器（TPU）請求專用網路介面，包括採用 RDMA（遠端直接記憶體存取，Remote Direct Memory Access）的介面。RDMA 是一種網路通訊協定，可讓機器之間直接傳輸記憶體資料，無需主機 CPU 介入。使用者在完成上述操作時，無需直接管理底層運算節點，這正是 Autopilot 模式的核心特色。

  ## 組態設定方式

  此功能仰賴三種 Kubernetes 構件的搭配使用：Autopilot 叢集、自訂 ComputeClass 定義，以及 ResourceClaimTemplate 物件。ComputeClass 告知叢集應佈建何種硬體類型；ResourceClaimTemplate 則指定應與工作負載一同分配的網路裝置。

  根據 Google 的說明，設定流程從虛擬私有雲（VPC）網路與區域叢集開始。使用者接著為所選加速器類型建立 ComputeClass，並搭配一個定義所需網路裝置類別的 ResourceClaimTemplate。

  針對 GPU 工作負載，文件範例採用 a4-highgpu-8g 機器類型上的輝達 B200 處理器——此組態搭載八顆 GPU——並使用自動加速器網路設定檔。該 ComputeClass 還包含一項保留設定，將資源建立與使用者專案中指定的保留項目綁定。

  針對 TPU 工作負載，範例 ComputeClass 指定的是一個 TPU v6e 切片，數量為八，並採用指定區域內的 2x4 拓撲。

  ## GPU 與 TPU 採用不同的網路裝置類別

  GPU 與 TPU 工作負載在各自的 ResourceClaimTemplate 中引用不同的裝置類別。使用 RDMA 的 GPU 工作負載引用的裝置類別為 `mrdma.google.com`，而 TPU 工作負載則使用非 RDMA 裝置類別 `netdev.google.com`。Google 表示，這項差異反映了兩種硬體類型在網路需求上的不同。

  在這兩種情況下，資源宣告均將 Pod 連結至底層基礎設施上所分配的網路裝置，為使用者提供跨加速器類型的統一操作模型，而無需針對各種類型分別執行不同的網路設定程序。

  ## 工作負載範例：GPU 上的 Gemma 4 31B 推論

  Google 公布的 GPU 部署範例，使用 vLLM 推論伺服器以雙副本方式運行為 Gemma 4 31B 語言模型提供服務的應用程式。該配置清單中每個容器請求的資源如下：

  - 10 顆 CPU
  - 1,000 GiB 記憶體
  - 1 TiB 暫存儲存空間
  - 八顆輝達 GPU

  該配置清單同時引用了 RDMA 資源宣告及先前建立的 ComputeClass，並包含啟動探針、存活探針與就緒探針、共用記憶體磁碟區，以及一個存有 Hugging Face 金鑰的 Kubernetes Secret，用於下載模型權重。節點選擇器則將部署導向符合受管 DRANET ComputeClass 的節點。

  ## 部署時由 Autopilot 負責節點佈建

  Google 表示，當使用者提交上述部署後，GKE Autopilot 會讀取 ComputeClass、佈建所需的節點類型，並套用受管 DRANET 網路組態。資源宣告隨後將 Pod 綁定至該節點上的加速器資源。同樣的觸發與佈建流程也適用於 TPU 工作負載。

  節點生命週期管理與大多數叢集組態任務在整個過程中仍由 Google 負責控制，這正是 Autopilot 模式所設計的操作折衷方案。使用者仍需自行撰寫 ComputeClass 與 ResourceClaimTemplate 物件，意味著部分基礎設施規格工作仍落在使用者端。

  ## 此更新對 Kubernetes 加速器工作負載的意義

  此次新增功能主要針對在 Kubernetes 上建構 AI 推論或訓練服務的開發人員與基礎設施團隊，這些使用者希望享有 Google 受管叢集操作的便利性，同時保留對底層加速器網路的存取能力。據亞太資料中心新聞（DataCenterNews Asia Pacific）對此功能的報導，RDMA 等高頻寬互連在多加速器部署中的重要性與日俱增，原因在於網路吞吐量與延遲可能制約分散式模型訓練與推論的效率。

  此次更新反映了雲端供應商將加速器存取封裝於 Kubernetes 原生抽象層的更廣泛趨勢。此模型採用宣告式規格——以描述預期狀態的 YAML 配置清單——可與應用程式碼一同進行版本控制與部署，而無需要求使用者透過獨立程序附加並設定網路資源。

  透過結合自動化叢集操作與明確的網路資源宣告，Google 正在填補 Autopilot 所提供的操作簡便性，與加速器密集型工作負載更為專業的基礎設施需求之間的落差。所公布的 GPU 範例展示了一份單一部署配置清單，同時引用 ResourceClaimTemplate 與 ComputeClass，讓叢集能在單次操作中佈建正確的機器類型、附加所需的網路資源，並將工作負載排程至適當的節點。
date: "2026-07-11"
source_published: "2026-07-10T00:00:00.000Z"
category: "software-ops"
secondary_categories: ["compute"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Google adds GPU & TPU support to GKE Autopilot (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/google-adds-gpu-tpu-support-to-gke-autopilot"
    title: "Google adds GPU & TPU support to GKE Autopilot"
    trust: 3
    type: primary
    published_at: "2026-07-10T00:00:00.000Z"
---
