---
title_en: "NXP Introduces Neural Axis Architecture for Physical AI at Computex 2026"
title_zh: "NXP於Computex 2026推「神經軸」三層架構，為實體AI奠基"
summary_en: "NXP CEO Rafael Sotomayor used the company's Computex 2026 keynote to introduce a three-layer \"neural axis\" architecture for edge AI hardware, arguing that distributing intelligence across reasoning, coordination, and reflexive processing tiers is the prerequisite for reliable physical AI and robotics."
summary_zh: "荷蘭晶片設計商NXP半導體執行長Rafael Sotomayor於Computex 2026主題演講中發表「神經軸」三層邊緣AI硬體架構，主張將智慧分散於推理、協調與反射三個處理層，是讓實體AI與機器人在現實世界中可靠運作的先決條件。"
body_en: |
  NXP Semiconductors CEO Rafael Sotomayor used the company's Computex 2026 keynote — the fourth and final major keynote at the show — to introduce what the Dutch chip designer calls a "neural axis" architecture: a three-layer design framework the company argues is required to make physical AI and robotics function reliably in the real world.

  ## The neural axis architecture

  The framework maps directly onto the structure of the human nervous system. Sotomayor described three biological tiers with distinct response characteristics: the cerebrum, which handles reasoning and decision-making but carries an inherent 300-millisecond response latency; the cerebellum, which coordinates motion; and the spinal cord, which executes reflexive responses in under 40 milliseconds without waiting for higher brain processes. Sotomayor cited Moravec's Paradox — the observation that tasks easy for humans are hard for robots, and vice versa — as the central problem physical AI must solve, and said reflexes represent the hardest part of that challenge.

  NXP's neural axis translates those three biological tiers into three device-level processing layers: a reasoning layer, a coordination layer, and a reflexive layer. Distributing intelligence across those layers, the company contends, eliminates single points of failure, minimizes latency where it matters most, and reduces energy use. Sotomayor described the arrangement as drawing on what he called "a billion years of evolutionary optimization."

  ## Three form factors

  Sotomayor applied the neural axis to three hardware categories: drones, automobiles, and humanoid robots.

  For drones, NXP tracks what it calls glass-to-glass latency — the complete loop from sensor input to motor response. That figure is 20 milliseconds, and Sotomayor said missing the target can result in crashes. Within the neural axis, flight planning maps to the reasoning layer, flight balance to the coordination layer, and motor controls to the reflexive layer.

  In automotive, Sotomayor said NXP holds what he described as a leadership position built around its S32 processor family, which is fabricated at the 5-nanometer process node, alongside sonar products. He presented the automotive stack as an existing real-world deployment of the three-layer principle.

  Humanoid robots represent the most complex application. Sotomayor set a 40-millisecond ceiling for collision response and said processors embedded in a robot's limbs must manage their local functions independently to meet that threshold. "Intelligence is not about a bigger brain," he said. "Think about a neural axis."

  ## From perception to understanding

  Sotomayor drew a distinction between a robot's ability to perceive its environment and its ability to understand the physics governing it. As an example, he described a robot that can visually identify a bottle of liquid but may not model the inertia and friction involved in moving it. Bridging that gap currently requires human-led training, which he described as slow and expensive.

  NXP's proposed bridge is the Vision Language Action (VLA) model class — systems that link visual perception, language-based reasoning, and physical action execution — which Sotomayor called one of the most active research areas in academia. World models, which generate physical knowledge through simulation rather than physical testing, are a complementary mechanism the company pointed to for reducing reliance on human trainers.

  To deploy VLA and similar complex models on resource-constrained edge hardware, NXP offers what it calls the eIQ toolkit, which can import, prune, and quantize models for a specific target device and use case.

  ## Trust and security

  Sotomayor argued that a functional robot is not automatically a trustworthy one, and that edge AI devices cannot earn trust over time the way humans do — trust must instead be designed into the hardware from the start. NXP described a two-part framework for achieving this.

  The first element, which the company labels "Contain," is fault isolation: preventing a single component failure from propagating through the system. The second, labeled "Protect," addresses hardware-level security, covering both execution integrity and resistance to tampering. NXP said its hardware is ready for post-quantum cryptography — encryption algorithms designed to withstand attacks from quantum computers, which are expected to eventually break current encryption standards.

  ## Context

  NXP's focus on edge semiconductors, rather than data center chips, set its keynote apart from the other major presentations at Computex 2026, which largely centered on data center AI. Sotomayor acknowledged that edge devices are where NXP's expertise lies, describing the edge as demanding high efficiency and high security simultaneously.

  The keynote was Sotomayor's first as NXP's chief executive, though NXP has been a regular Computex keynote participant. The roughly 40-minute presentation was structured around the argument that the next phase of AI development shifts from cloud infrastructure to physical, real-world devices — and that edge chip design principles, not data center architectures, will define that transition.

  NXP's eIQ toolkit and post-quantum-ready hardware represent the company's current commercial answer to the edge AI deployment challenge it outlined across drones, automotive systems, and humanoid robotics.
body_zh: |
  荷蘭晶片設計商NXP半導體執行長Rafael Sotomayor，以本屆展會第四場、也是最後一場重量級主題演講為Computex 2026壓軸登場。他在演講中發表NXP所稱的「神經軸」架構——一套三層式設計框架，NXP主張，若要讓實體AI與機器人在現實世界中穩定可靠地運作，此框架不可或缺。

  ## 神經軸架構

  這套框架直接對應人類神經系統的結構。Sotomayor描述了三個生物層級，各具不同的反應特性：大腦皮層負責推理與決策，但天生存在300毫秒的反應延遲；小腦負責協調動作；脊髓則能在40毫秒以內完成反射反應，無須等候高層腦部的指令。Sotomayor引用「莫拉維克悖論」——即人類輕而易舉的任務對機器人而言往往極為困難，反之亦然——作為實體AI必須克服的核心難題，並指出反射能力正是其中最難突破的一關。

  NXP的神經軸將上述三個生物層級轉譯為三個裝置層級的處理層：推理層、協調層與反射層。NXP主張，將智慧分散於這三個層級，可消除系統單點故障、在最關鍵之處將延遲壓至最低，同時降低整體能耗。Sotomayor將這種設計形容為汲取了「十億年演化優化的精髓」。

  ## 三種應用形態

  Sotomayor將神經軸套用於三類硬體產品：無人機、汽車以及人形機器人。

  在無人機領域，NXP追蹤所謂的「端對端延遲」（glass-to-glass latency），即從感測器輸入到馬達反應的完整迴路時間。這個數字是20毫秒，Sotomayor表示一旦未能達標便可能導致墜機。在神經軸架構中，飛行規劃對應推理層，飛行平衡對應協調層，馬達控制則對應反射層。

  在車用領域，Sotomayor表示NXP已憑藉採用5奈米製程的S32處理器系列，以及聲納相關產品，在市場上建立起領先地位。他將車用技術堆疊呈現為三層架構原則已實際落地部署的現成案例。

  人形機器人則是最複雜的應用場景。Sotomayor將碰撞反應的時間上限設定為40毫秒，並表示嵌入機器人肢體的處理器必須能獨立管理各自的局部功能，才能達到這個門檻。「智慧不在於擁有更大的大腦，」他說，「要思考的是神經軸。」

  ## 從感知到理解

  Sotomayor區分了機器人感知環境的能力，以及理解支配環境的物理法則的能力。他以一個例子加以說明：機器人或許能透過視覺辨識出一瓶液體，卻未必能模擬移動該瓶時涉及的慣性與摩擦力。彌補這段差距目前仍有賴人工主導的訓練，他形容這是一個緩慢且昂貴的過程。

  NXP提出的解方是「視覺語言動作」（Vision Language Action，VLA）模型——這類系統整合了視覺感知、語言推理與實體動作執行——Sotomayor稱之為學術界目前最活躍的研究領域之一。世界模型則是另一項互補機制，透過模擬生成物理知識，而非仰賴實體測試，NXP指出這有助於降低對人工訓練師的依賴。

  為了在資源受限的邊緣硬體上部署VLA等複雜模型，NXP提供名為eIQ的工具套件，可針對特定目標裝置與應用場景匯入、剪枝並量化模型。

  ## 信任與安全

  Sotomayor主張，一台功能正常的機器人未必是值得信賴的機器人，而邊緣AI裝置無法像人類一樣隨時間累積信任感——信任必須從硬體設計階段就植入其中。NXP為此提出兩部分的框架。

  第一個要素稱為「隔離」（Contain），即故障隔離：防止單一元件的故障蔓延至整個系統。第二個要素稱為「防護」（Protect），針對硬體層級的安全性，同時涵蓋執行完整性與防篡改能力。NXP表示其硬體已準備好支援後量子密碼學——這類加密演算法專為抵禦量子電腦的攻擊而設計，因為量子電腦預期終將突破現行的加密標準。

  ## 背景脈絡

  NXP聚焦於邊緣半導體，而非資料中心晶片，使其主題演講有別於Computex 2026的其他幾場重要演講——後者大多以資料中心AI為核心。Sotomayor坦承邊緣裝置正是NXP的專業所在，並形容邊緣運算場景同時要求高效率與高安全性。

  這場演講是Sotomayor出任NXP執行長後的首次Computex主題演講，不過NXP長期以來均是Computex主題演講的固定參與者。這場約40分鐘的演講，圍繞一個核心論點展開：AI發展的下一個階段，將從雲端基礎設施轉向具有實體形態的現實世界裝置，而定義這場轉型的，將是邊緣晶片的設計原則，而非資料中心架構。

  NXP的eIQ工具套件與支援後量子加密的硬體，是該公司目前針對無人機、車用系統與人形機器人等邊緣AI部署挑戰，所提出的商業解答。
date: "2026-06-07T18:27:27.479Z"
source_published: "2026-06-07T15:00:20.000Z"
category: "compute"
secondary_categories: ["market"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: NXP Computex Keynote 2026 Coverage (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/nxp-computex-keynote-2026-coverage/"
    title: "NXP Computex Keynote 2026 Coverage"
    trust: 3
    type: primary
    published_at: "2026-06-07T15:00:20.000Z"
---
