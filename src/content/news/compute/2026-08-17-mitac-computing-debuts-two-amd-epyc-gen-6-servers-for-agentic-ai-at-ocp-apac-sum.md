---
title_en: "MiTAC Computing debuts two AMD EPYC Gen 6 servers for agentic AI at OCP APAC Summit"
title_zh: "神達電腦OCP亞太峰會全球首發兩款AMD EPYC第六代伺服器"
summary_en: "MiTAC Computing Technology Corp. unveiled its C2810Z6 and C2610Z6 servers — both world premieres built on sixth-generation AMD EPYC processors — at the OCP APAC Summit, alongside a 52U liquid-cooled rack capable of housing 96 AMD Instinct MI355X GPUs for sustained multi-agent AI workloads."
summary_zh: "神達控股旗下神達電腦科技於OCP亞太峰會全球首發C2810Z6與C2610Z6兩款採用AMD EPYC第六代處理器的伺服器，同步展示可容納96顆AMD Instinct MI355X GPU的52U液冷機架，以完整機架級基礎架構全力進攻代理式AI市場。"
body_en: |
  MiTAC Computing Technology Corp., a subsidiary of MiTAC Holdings, on August 12 used the OCP APAC Summit — an annual gathering organized around the Open Compute Project's open hardware standards — to make the global debut of two OCP-compliant high-performance computing servers and a rack-scale infrastructure stack aimed at agentic AI, a class of AI workload where autonomous software agents run continuous, multi-step reasoning loops rather than responding to single prompts.

  The two new servers, the C2810Z6 and C2610Z6, were developed in partnership with AMD and are the first products MiTAC has announced based on sixth-generation AMD EPYC processors. Both platforms conform to the Open Rack v3 (ORv3) standard — the Open Compute Project's specification for rack power, mechanical, and management interfaces — and feature PCIe Gen 6 connectivity, which doubles the per-lane bandwidth of the previous generation, and CXL 3.1 support. CXL, or Compute Express Link, is a high-speed interconnect standard that allows processors to share memory coherently with accelerators and other devices.

  ## The two new compute nodes

  The C2810Z6 targets high-density cloud and HPC workloads. It uses AMD's SP7 socket and supports up to 256 cores and 512 threads, with a configurable CPU thermal design power (TDP) of up to 600 W. Each node supports up to 4 TB of DDR5-8000 memory — DDR5 running at 8,000 megatransfers per second, a speed tier enabled by the new processor generation. Storage options include 12 E3.S-1T or six U.2 NVMe drives; MiTAC cited Micron's 9650 NVMe Gen 6 SSD as a reference configuration. The platform uses a 48 V direct-current power bus, which reduces resistive losses compared with conventional 12 V server power distribution, and integrates a DC-SCM 2.0 module for security and management.

  The C2610Z6 addresses scalable cloud, enterprise IT, and edge deployments. It uses the smaller SP8 socket and supports up to 128 cores and 256 threads at a 400 W configurable TDP. Per-node memory capacity matches the C2810Z6 at up to 4 TB of DDR5-8000. It shares the PCIe Gen 6 connectivity, Micron 9650 NVMe Gen 6 storage options, 48 V DC bus, and DC-SCM 2.0 management module of its larger sibling.

  ## Rack-scale design for multi-agent workloads

  MiTAC framed the broader exhibit around what it described as the architectural demands of agentic AI: continuous reasoning loops, dynamic tool invocation, real-time memory retrieval, and multi-agent orchestration — all of which place sustained rather than burst demands on compute, memory bandwidth, and storage throughput.

  The company's flagship rack offering is a 52U liquid-cooled AI cabinet that MiTAC said can house 96 AMD Instinct MI355X GPUs in a single enclosure. That density is intended to supply the low-latency, unthrottled compute that sustained agent execution requires. Alongside it, MiTAC displayed liquid-cooled and air-cooled OCP HPC racks built to ORv3 specifications with 48 V DC power distribution, positioned as modular expansion units as agent deployments grow.

  Three ecosystem partners filled out the rack-scale stack. DDN provides high-throughput vector and session storage for agent memory. Rafay handles automated multi-agent cluster governance. Canonical's Ubuntu Linux underpins the software environment. MiTAC said the combination is designed to eliminate thermal, storage, and orchestration bottlenecks in agentic execution pipelines.

  ## Full-stack AI factory positioning

  MiTAC organized its exhibit around a five-layer architecture it called an AI Factory — a term it used to describe infrastructure deployable directly for enterprise AI production.

  At the chip level, the company's platforms support AMD Instinct MI355X, MI350X, and MI350P PCIe accelerators, as well as NVIDIA RTX PRO 4500 Blackwell Server Edition and RTX PRO 6000 Blackwell Server Edition GPUs.

  At the infrastructure layer, MiTAC highlighted the G4826Z5 server housed in the 52U liquid-cooled cabinet, plus the TN85-B8261 and G4520G6 compute nodes — the latter carrying dual Intel Xeon 6 processors and supporting up to 8,192 GB of DDR5 memory. Platform management runs on MiTAC's MiOBMC and MiOPF open firmware.

  Orchestration and data pipeline functions are handled by DDN, Rafay, and Kubernetes, integrated with MiTAC's proprietary MiCoreView POD management suite for cluster administration and data movement across the stack.

  The model layer is designed to run large language models (LLMs), vision language models (VLMs), multimodal large language models (MMLLMs), and mixture-of-experts (MoE) models — an architecture in which different specialized sub-networks handle different inputs — without creating data bottlenecks or leaving hardware idle. Application-layer use cases cited include multi-step agentic AI, retrieval-augmented generation (RAG), generative AI, and large-scale HPC simulation.

  ## Industry significance

  The OCP APAC Summit debut positions MiTAC as an early mover in the transition from conventional inference infrastructure toward hardware explicitly designed for agentic AI, where workloads are persistent and stateful rather than discrete and stateless. The simultaneous support for AMD and Intel CPUs and for both AMD and NVIDIA GPU accelerators in a common rack architecture reflects an industry pattern of avoiding single-vendor lock-in as AI hardware competition intensifies.

  The world-premiere status of both the C2810Z6 and C2610Z6 at an APAC venue, rather than a North American event, signals continued investment in the Asia-Pacific market for open-standard server infrastructure. MiTAC said the platforms' PCIe Gen 6 and CXL 3.1 capabilities are intended to handle large-scale parallel agent requests while optimizing data center footprint and power density — specifications that will face scrutiny as enterprise customers begin evaluating agentic AI deployments at production scale.
body_zh: |
  神達控股旗下神達電腦科技（MiTAC Computing Technology Corp.）於8月12日藉OCP亞太峰會（OCP APAC Summit）——這個以開放運算計畫（Open Compute Project）開放硬體標準為核心的年度盛會——全球首發兩款符合OCP規範的高效能運算伺服器，以及一套針對代理式AI設計的機架級基礎架構。所謂代理式AI，是指自主軟體代理持續執行多步驟推理迴圈、而非單純回應單一提示的AI工作負載類別。

  兩款新伺服器C2810Z6與C2610Z6均與AMD合作開發，是神達首批採用AMD EPYC第六代處理器的產品。兩款平台皆符合開放機架v3（ORv3）規格——即開放運算計畫針對機架供電、機械結構與管理介面所制定的標準——並配備PCIe第六代連接介面（每通道頻寬較上一代提升一倍），以及CXL 3.1支援。CXL（Compute Express Link）是一種高速互連標準，可讓處理器與加速器及其他裝置之間實現快取一致的記憶體共享。

  ## 兩款全新運算節點

  C2810Z6定位於高密度雲端與HPC工作負載，採用AMD SP7插槽，最高支援256核心、512執行緒，CPU熱設計功耗（TDP）可配置至600W。每個節點最高支援4TB的DDR5-8000記憶體——DDR5以每秒8,000百萬次傳輸（MT/s）速度運行，這一速度等級由全新處理器世代所支援。儲存選項包含12顆E3.S-1T或6顆U.2 NVMe固態硬碟；神達以Micron 9650 NVMe第六代固態硬碟作為參考配置。該平台採用48V直流電力匯流排，相較傳統12V伺服器電力分配可降低電阻損耗，並整合DC-SCM 2.0模組以提供安全與管理功能。

  C2610Z6則針對可擴展雲端、企業IT及邊緣部署而設計，採用較小的SP8插槽，最高支援128核心、256執行緒，可配置TDP為400W。每節點記憶體容量與C2810Z6相同，最高支援4TB的DDR5-8000。在PCIe第六代連接介面、Micron 9650 NVMe第六代儲存選項、48V直流匯流排及DC-SCM 2.0管理模組等規格上，亦與其較大兄弟機型一致。

  ## 面向多代理工作負載的機架級設計

  神達以代理式AI的架構需求為主軸詮釋此次展示，涵蓋持續推理迴圈、動態工具呼叫、即時記憶擷取，以及多代理協作——這些需求對運算、記憶體頻寬與儲存吞吐量帶來的是持續性而非爆發性的壓力。

  神達旗艦機架產品為一款52U液冷AI機櫃，神達表示可在單一機殼中容納96顆AMD Instinct MI355X GPU，以此密度提供代理持續執行所需的低延遲、不節流運算能力。此外，展場同步展示符合ORv3規格、採用48V直流供電的液冷與氣冷OCP HPC機架，定位為隨代理部署規模擴展的模組化擴充單元。

  三家生態系夥伴共同完善此機架級技術棧：DDN提供代理記憶體所需的高吞吐量向量與工作階段儲存；Rafay負責多代理叢集的自動化治理；Canonical的Ubuntu Linux則作為軟體環境基礎。神達表示，上述組合旨在消除代理執行管線中的散熱、儲存與協作瓶頸。

  ## 全堆疊AI工廠定位

  神達以其自稱「AI工廠」的五層架構組織本次展示，並將其定義為可直接部署於企業AI生產環境的基礎架構。

  在晶片層，神達的平台支援AMD Instinct MI355X、MI350X及MI350P PCIe加速器，以及輝達RTX PRO 4500 Blackwell Server Edition與RTX PRO 6000 Blackwell Server Edition顯示卡。

  在基礎架構層，神達重點介紹搭載於52U液冷機櫃的G4826Z5伺服器，以及TN85-B8261與G4520G6運算節點——後者搭載雙顆Intel Xeon 6處理器，最高支援8,192GB的DDR5記憶體。平台管理由神達自研的MiOBMC與MiOPF開放韌體負責。

  協作與資料管線功能由DDN、Rafay及Kubernetes共同承擔，並與神達自有的MiCoreView POD管理套件整合，提供跨堆疊的叢集管理與資料移動能力。

  模型層的設計可運行大型語言模型（LLM）、視覺語言模型（VLM）、多模態大型語言模型（MMLLM），以及混合專家（MoE）架構——即由不同專門子網路處理不同輸入的模型架構——而不產生資料瓶頸或造成硬體閒置。應用層列舉的使用情境包括多步驟代理式AI、檢索增強生成（RAG）、生成式AI，以及大規模HPC模擬。

  ## 產業意義

  神達選擇在OCP亞太峰會上首發，將自身定位為從傳統推論基礎架構轉型至代理式AI專用硬體的早期領跑者；在代理式AI領域，工作負載是持續性且有狀態的，而非離散且無狀態的。在同一機架架構中同時支援AMD與Intel CPU、以及AMD與輝達GPU加速器，反映出業界在AI硬體競爭日趨激烈之際，普遍傾向規避單一廠商鎖定的趨勢。

  C2810Z6與C2610Z6均選擇在亞太場合而非北美活動進行全球首發，顯示神達對亞太市場開放標準伺服器基礎架構持續深耕的決心。神達表示，兩款平台的PCIe第六代與CXL 3.1規格旨在處理大規模並行代理請求，同時優化資料中心的空間佔用與功率密度——這些規格將在企業客戶開始評估生產規模代理式AI部署時，面臨嚴格的實戰檢驗。
date: "2026-08-17"
source_published: "2026-08-16T06:00:29.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Intel", "Micron", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: 神雲科技於 OCP APAC 高峰會展出多元化架構，打造代理型 AI 運作系統 (trust 3/5)."
sources:
  - url: "https://technews.tw/2026/08/16/mitac-computing-technology-ocp-apac-summit-diverse-architectures-agentic-ai-operating-systems/"
    title: "神雲科技於 OCP APAC 高峰會展出多元化架構，打造代理型 AI 運作系統"
    trust: 3
    type: primary
    published_at: "2026-08-16T06:00:29.000Z"
---
