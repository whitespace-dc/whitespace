---
title_en: "AWS and Google Cloud open-source PyTorch backends for Trainium and TPU"
title_zh: "AWS與Google Cloud為Trainium及TPU開源PyTorch後端"
summary_en: "AWS and Google Cloud released open-source PyTorch backends for their own AI processors at PyTorch Conference 2026, giving any developer a path to run PyTorch workloads natively on Trainium and TPUs without the code rewrites previously required to leave NVIDIA's CUDA ecosystem."
summary_zh: "AWS與Google Cloud在PyTorch Conference 2026上，分別為各自的AI處理器開源了PyTorch後端，讓開發者無需大幅改寫程式碼，即可在Trainium和TPU上原生執行PyTorch工作負載，正式打破過去離開輝達CUDA生態系的高門檻。"
body_en: |
  AWS and Google Cloud each open-sourced a dedicated PyTorch backend for their respective AI processors at PyTorch Conference 2026, held October 20–21 in California, giving developers a lower-friction route to running AI workloads on hardware beyond NVIDIA GPUs.

  AWS released TorchNeuron, a PyTorch backend for its Trainium chip, as a public beta. Google Cloud released TorchTPU, a backend for its Tensor Processing Units (TPUs). Both projects had previously been available to a limited set of users under private beta or private preview programs. The open-source releases make them available to anyone.

  PyTorch is an open-source machine learning framework written in Python, used across AI research, model development, and large language model (LLM) training. A 2024 Linux Foundation survey cited in the source found that more than 70 percent of AI-related research and development uses PyTorch.

  ## Why CUDA dominance matters

  Although PyTorch can run on both CPUs and GPUs, running it on NVIDIA's CUDA platform — a software layer that lets developers use NVIDIA GPUs for general-purpose computation — has been the practical default. According to the source, much of the PyTorch ecosystem and its associated software libraries has been built to deliver peak performance specifically on CUDA, making non-NVIDIA processors a harder target.

  AWS and Google Cloud have each developed their own AI processors — Trainium and TPUs respectively — and have been working for some time to make CUDA-oriented software run on their hardware. One earlier approach involved XLA (Accelerated Linear Algebra), a compilation infrastructure designed to translate PyTorch operations into forms executable on alternative processors. The source notes that XLA-based approaches faced unresolved challenges in compatibility and performance.

  ## What each backend does

  AWS describes TorchNeuron as allowing developers to run existing PyTorch code on Trainium by changing a single line — switching the device target to `.to('neuron')` — with minimal or no further code changes. The company says the backend maintains full compatibility with PyTorch's eager execution mode, the `torch.compile` compilation path, and standard PyTorch APIs. TorchNeuron also integrates with the Neuron Kernel Interface (NKI), AWS's interface for writing custom operators and tuning performance at the hardware level on Trainium.

  Google Cloud describes TorchTPU as delivering "seamless out-of-the-box model execution and TPU migration" alongside what it calls "industry-competitive inference and training performance." The backend achieves this through eager execution optimizations, `torch.compile` integration, and native hardware acceleration, according to Google Cloud's announcement.

  The source characterizes both releases as a significant improvement over previous efforts in both compatibility and speed, describing them as enabling PyTorch to run natively on each company's processors — meaning the hardware's capabilities can be more fully utilized.

  ## What the open-source release changes

  By open-sourcing both backends, AWS and Google Cloud remove the access bottleneck that private beta programs create. Developers can now adopt either tool without applying for or waiting on program enrollment.

  The source notes that broader API compatibility and the ability to migrate existing PyTorch code with little rewriting could make Trainium and TPUs a more practical consideration for teams currently using NVIDIA hardware. Previously, the effort required to port code was itself a deterrent.

  At the same time, the source flags that AI processor selection depends on more than portability. Compatibility with existing libraries and tools, real-world training and inference performance at scale, cost, and end-to-end developer experience from experimentation through production deployment all affect the decision.

  ## What comes next

  The source frames the central open question as whether TorchNeuron and TorchTPU can produce measurable change in an AI development ecosystem that has consolidated around CUDA. That will depend on how broadly each backend's model and software support expands, and how both projects perform in production workloads rather than controlled conditions.
body_zh: |
  AWS與Google Cloud在2026年10月20至21日於加州舉行的PyTorch Conference 2026上，各自為旗下AI處理器開源了專屬的PyTorch後端，為開發者提供一條較為順暢的路徑，得以在輝達GPU以外的硬體上執行AI工作負載。

  AWS以公開測試版形式發布了TorchNeuron，這是其Trainium晶片的PyTorch後端；Google Cloud則發布了TorchTPU，專為其張量處理器（TPU）設計的後端。這兩個專案先前僅以私人測試版或私人預覽形式，開放給有限的使用者。此次開源發布，讓任何人都能自由取用。

  PyTorch是一套以Python撰寫的開源機器學習框架，廣泛應用於AI研究、模型開發以及大型語言模型（LLM）的訓練。根據原文引用的2024年Linux Foundation調查，超過70％的AI相關研發工作使用PyTorch。

  ## CUDA主導地位的影響

  PyTorch雖然可在CPU與GPU上執行，但在實務上，以輝達的CUDA平台作為執行環境幾乎已成業界預設——CUDA是一套軟體層，允許開發者以輝達GPU執行通用運算。根據原文，PyTorch生態系及其相關軟體函式庫，大多是針對CUDA進行最佳化以發揮最高效能，使得非輝達處理器成為更難支援的目標。

  AWS與Google Cloud各自開發了專屬的AI處理器——分別是Trainium和TPU——長期以來都在努力讓以CUDA為導向的軟體能在自家硬體上執行。早期曾採用的一種方法是XLA（加速線性代數，Accelerated Linear Algebra），這是一套編譯基礎架構，旨在將PyTorch運算轉譯成可在替代處理器上執行的形式。原文指出，基於XLA的方案在相容性與效能方面存在尚未解決的挑戰。

  ## 兩套後端各自的功能

  AWS描述TorchNeuron可讓開發者透過修改單一行程式碼——將裝置目標切換為`.to('neuron')`——在幾乎不需額外改動的情況下，直接在Trainium上執行現有的PyTorch程式碼。AWS表示，這套後端完整相容於PyTorch的即時執行模式（Eager Execution Mode）、`torch.compile`編譯路徑，以及標準的PyTorch API。TorchNeuron同時也整合了Neuron Kernel Interface（NKI）——這是AWS為Trainium提供的介面，供開發者撰寫自訂運算子並進行硬體層級的效能調校。

  Google Cloud描述TorchTPU能實現「開箱即用的無縫模型執行與TPU遷移」，並提供其所稱「業界競爭力水準的推論與訓練效能」。根據Google Cloud的公告，這套後端透過即時執行最佳化、`torch.compile`整合以及原生硬體加速來達成上述目標。

  原文將這兩個版本的發布定性為在相容性與速度上較先前成果有顯著進步，並指出兩者使PyTorch得以在各自公司的處理器上原生執行——意即能更充分地發揮硬體的效能潛力。

  ## 開源發布帶來的改變

  透過開源這兩套後端，AWS與Google Cloud消除了私人測試計畫所帶來的存取瓶頸。開發者現在可以直接採用這些工具，無需申請或等待計畫審核。

  原文指出，更廣泛的API相容性，以及幾乎不需重寫程式碼即可遷移現有PyTorch專案的能力，可能使Trainium和TPU對目前使用輝達硬體的團隊而言成為更具實際可行性的選項。過去，程式碼移植所需的工作量本身就是一大阻礙。

  與此同時，原文也點出，AI處理器的選擇不僅取決於可攜性。與現有函式庫及工具的相容性、大規模實際訓練與推論的效能表現、成本，以及從實驗到正式部署的完整開發者體驗，都是影響決策的關鍵因素。

  ## 後續發展

  原文將核心的未解問題框架為：TorchNeuron與TorchTPU是否能在已高度集中於CUDA的AI開發生態系中帶來可量測的實質改變。這將取決於兩套後端在模型支援與軟體相容性上能擴展的廣度，以及兩個專案在實際正式環境工作負載中的表現——而非受控條件下的測試結果。
date: "2026-10-27"
source_published: "2026-10-26T15:59:52.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AWS", "Google Cloud", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: AWSとGoogle Cloudが「PyTorch」のAWS Trainium、Google Cloud TPU対応版をオープンソースで公開。NVIDIAからの移行に挑む (trust 3/5)."
sources:
  - url: "https://www.publickey1.jp/blog/26/awsgoogle_cloudpytorchaws_trainiumgoogle_cloud_tpunvidia.html"
    title: "AWSとGoogle Cloudが「PyTorch」のAWS Trainium、Google Cloud TPU対応版をオープンソースで公開。NVIDIAからの移行に挑む"
    trust: 3
    type: primary
    published_at: "2026-10-26T15:59:52.000Z"
---
