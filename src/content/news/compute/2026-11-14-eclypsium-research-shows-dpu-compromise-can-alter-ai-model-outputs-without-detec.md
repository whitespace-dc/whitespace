---
title_en: "Eclypsium research shows DPU compromise can alter AI model outputs without detection"
title_zh: "Eclypsium研究揭示：DPU遭入侵可在不被偵測下竄改AI模型輸出"
summary_en: "Eclypsium has demonstrated that attackers with privileged hardware access can alter an AI model's live outputs by exploiting a compromised data processing unit, without modifying stored model files or triggering standard integrity checks. The research was conducted with support from NVIDIA."
summary_zh: "資安業者Eclypsium發布研究報告，證明具備特權硬體存取權限的攻擊者，可在不更動已儲存模型檔案、也不觸發標準完整性檢查的情況下，藉由入侵資料處理器（DPU）在即時推論過程中竄改AI模型的輸出結果。此研究獲輝達（NVIDIA）協助進行。"
body_en: |
  Eclypsium has published research demonstrating that attackers with privileged access to AI infrastructure can alter a model's outputs during live inference by targeting the data processing unit (DPU) the model runs on, without changing stored model files or triggering standard integrity checks. NVIDIA supported the research.

  The findings focus on risks in AI data center infrastructure rather than in model files or application layers.

  ## How the attack was demonstrated

  In a controlled demonstration, attackers with privileged access to underlying systems exploited a compromised DPU combined with permissive memory isolation to modify model weights directly in memory while the model was running. The stored model files remained unchanged throughout, and the technique left no visible indicators of compromise, Eclypsium said.

  The manipulated model produced changed analytical output in response to a real-world geopolitical query. Eclypsium said this exposes a gap between checks that confirm whether a saved model has been altered and how that model actually behaves once executed on complex hardware.

  Existing security controls are designed to verify software artifacts, configurations, and access permissions rather than the integrity of every hardware and firmware layer involved in execution, the company said. As a result, a model could appear unchanged to standard checks while producing manipulated responses.

  Eclypsium calls this the "AI Infrastructure Assurance Gap": an organization may trust a model because the file passes integrity checks, even though the underlying infrastructure has been tampered with.

  ## Industry context

  Much of the current discussion around AI safety has centered on training data, model behavior, guardrails, and governance, while the servers, firmware, networking components, and supply chains behind those systems have received less attention, Eclypsium said. The company argues this dynamic is what creates the gap the research describes.

  "AI security starts with trusting the infrastructure that it runs on. Our research demonstrates how hardware-level compromises can undermine AI execution without being detected by the stored-model integrity checks used in the demonstration. Through Eclypsium's independent verification and continuous monitoring, we're helping organizations establish and maintain trust in the infrastructure powering AI," said Yuriy Bulygin, Chief Executive Officer and Co-Founder of Eclypsium.

  NVIDIA framed the collaboration as part of a broader effort to improve protections around AI systems. "NVIDIA builds security into its platforms to help customers protect their AI infrastructure. Working with researchers and cybersecurity companies, like Eclypsium, we're continuously strengthening protections across the AI ecosystem," said Gilad Shainer, Senior Vice President of Networking at NVIDIA.

  ## Independent validation and transparency

  Outside experts quoted alongside the research said the findings point to a need for stronger independent validation of AI infrastructure, particularly as AI outputs are used to inform operational or policy decisions.

  "Some of the most consequential and complex decision systems ever are being developed now. The new architectures that AI systems are running on, because of their complexity and speed, benefit from independent verification. AI infrastructure should be treated as critical infrastructure, with verifiable evidence that it is in a known-good state. Securing critical infrastructure is a team sport, and this is a successful example of how to do it: researchers demonstrated an attack scenario and worked with the manufacturer to help clarify practical protections that the whole industry can use," said Jon Rolf, Cybersecurity Consultant at Rolf Cyber.

  Dr Allan Friedman, Former Senior Advisor and Strategist at the Cybersecurity and Infrastructure Security Agency (CISA), said transparency practices used in software security need to extend more fully into firmware and hardware layers. "This research reinforces the need for full-stack transparency and monitoring across AI infrastructure. Organisations can't secure what they can't see, and the same transparency standards applied to software must extend to firmware and hardware. A Bill of Materials is just the beginning. AI infrastructure needs to turn this transparency into continuous evidence so that we can discover and address security problems," Friedman said.

  ## Commercial stakes

  The research comes as spending on AI infrastructure is rising sharply. Goldman Sachs has forecast that global investment in AI infrastructure will exceed $1 trillion annually in 2026. The World Economic Forum has cited estimates that AI could contribute $15.7 trillion to global GDP.

  Eclypsium said NVIDIA's centrality to the AI hardware market means the question of infrastructure trust extends beyond any single supplier to the wider ecosystem of accelerators, networking equipment, firmware, and supporting components used in AI data centers.

  Eclypsium said it is working with NVIDIA on infrastructure assurance through integration with NVIDIA's Open Agent Safety Platform, aimed at supporting independent verification and continuous monitoring of the systems used to train and run AI models and agents.
body_zh: |
  Eclypsium已發布研究報告，證明具備AI基礎架構特權存取權限的攻擊者，可在不更動已儲存模型檔案、也不觸發標準完整性檢查的情況下，藉由鎖定模型運行所在的資料處理器（DPU），在即時推論過程中竄改模型的輸出結果。輝達對此研究提供了協助與支持。

  研究結果的焦點在於AI資料中心基礎架構本身的風險，而非模型檔案或應用層。

  ## 攻擊手法示範

  在受控的示範環境中，具備底層系統特權存取權限的攻擊者，利用遭入侵的DPU結合寬鬆的記憶體隔離機制，在模型運行當下直接竄改記憶體中的模型權重。Eclypsium指出，儲存於磁碟的模型檔案全程未有任何更動，且此技術未留下任何可見的入侵跡象。

  遭竄改的模型在面對一個真實的地緣政治查詢時，產出了經過變造的分析結果。Eclypsium表示，這暴露了一道明顯的落差——用於確認已儲存模型是否遭到篡改的檢查機制，與該模型在複雜硬體上實際執行後的行為之間，存在根本性的缺口。

  現有的安全控制措施旨在驗證軟體產出物、組態設定以及存取權限，而非對執行過程中所涉及的每一層硬體與韌體進行完整性驗證，該公司表示。因此，即便一個模型通過了標準安全檢查，看似未遭改動，仍可能在暗中輸出遭操控的回應。

  Eclypsium將此稱為「AI基礎架構保證落差」（AI Infrastructure Assurance Gap）：組織可能因為模型檔案通過了完整性檢查而信任該模型，卻渾然不知底層基礎架構早已遭到竄改。

  ## 產業背景

  目前有關AI安全的討論，大多聚焦於訓練資料、模型行為、護欄機制與治理框架，而支撐這些系統的伺服器、韌體、網路元件與供應鏈，所受到的關注相對有限，Eclypsium指出。該公司認為，正是這種不均衡的態勢，造就了研究所描述的落差。

  「AI安全的根基在於信任其所運行的基礎架構。我們的研究展示了硬體層級的入侵，如何在不被示範中所採用的儲存模型完整性檢查偵測到的情況下，破壞AI的執行結果。透過Eclypsium的獨立驗證與持續監控，我們正協助各組織建立並維護對AI基礎架構的信任，」Eclypsium執行長暨共同創辦人Yuriy Bulygin表示。

  輝達將此次合作定位為提升AI系統整體防護的廣泛努力之一。「輝達在其平台中內建安全機制，協助客戶保護其AI基礎架構。透過與Eclypsium等研究人員及資安業者的合作，我們持續強化整個AI生態系統的防護能力，」輝達網路事業部資深副總裁Gilad Shainer表示。

  ## 獨立驗證與透明度

  與研究報告一同受訪的外部專家指出，這些發現揭示了強化AI基礎架構獨立驗證的迫切需要，尤其是在AI輸出結果被用於支援營運或政策決策之際。

  「目前正在開發的，是有史以來最具重大影響力、也最為複雜的決策系統。AI系統所運行的新架構，因其複雜性與運算速度，格外有賴獨立驗證機制。AI基礎架構應被視為關鍵基礎設施，需要可驗證的證據來確認其處於已知的良好狀態。保護關鍵基礎設施是一項需要全體協作的工作，而這正是一個成功的典範：研究人員示範了攻擊情境，並與製造商攜手合作，協助釐清整個產業皆可採用的實際防護措施，」資安顧問公司Rolf Cyber顧問Jon Rolf表示。

  前美國網路安全暨基礎設施安全局（CISA）資深顧問暨策略師Allan Friedman博士則表示，軟體安全領域所奉行的透明度實務，必須更全面地延伸至韌體與硬體層。「這項研究再次強調了AI基礎架構全堆疊透明度與監控的必要性。各組織無法保護其看不見的事物，適用於軟體的相同透明度標準，也必須延伸至韌體與硬體。軟體物料清單（Bill of Materials）只是起點。AI基礎架構必須將這種透明度轉化為持續累積的證據，讓我們得以發現並解決安全問題，」Friedman說道。

  ## 商業層面的意義

  此研究發布之際，AI基礎架構的支出正急遽攀升。高盛預測，全球AI基礎架構投資將在2026年突破每年1兆美元。世界經濟論壇引述估計指出，AI可能為全球GDP貢獻高達15.7兆美元。

  Eclypsium表示，輝達在AI硬體市場的核心地位，意味著基礎架構信任的議題已超越單一供應商的範疇，延伸至AI資料中心所採用的更廣泛生態系統，涵蓋加速器、網路設備、韌體及各類支援元件。

  Eclypsium表示，目前正透過與輝達開放代理安全平台（NVIDIA Open Agent Safety Platform）的整合，與輝達共同推進基礎架構保證工作，旨在支援用於訓練及運行AI模型與代理程式之系統的獨立驗證與持續監控。
date: "2026-11-14"
source_published: "2026-11-13T16:30:00.000Z"
category: "compute"
secondary_categories: ["networking"]
region: []
vendor: ["Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Eclypsium spotlights AI hardware attack blind spot (trust 3/5)."
sources:
  - url: "https://datacenternews.asia/story/eclypsium-spotlights-ai-hardware-attack-blind-spot"
    title: "Eclypsium spotlights AI hardware attack blind spot"
    trust: 3
    type: primary
    published_at: "2026-11-13T16:30:00.000Z"
---
