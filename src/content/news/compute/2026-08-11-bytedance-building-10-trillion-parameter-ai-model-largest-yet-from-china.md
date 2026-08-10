---
title_en: "ByteDance building 10-trillion-parameter AI model, largest yet from China"
title_zh: "字節跳動開發10兆參數AI模型，將成中國企業規模之最"
summary_en: "ByteDance is developing an AI model targeting up to 10 trillion parameters — a scale that would make it the largest built by a Chinese company — according to a Financial Times report. The model is in pre-training and is not expected to be available before early 2027."
summary_zh: "據《金融時報》報導，字節跳動（ByteDance）正在開發一款規模高達10兆個參數的人工智慧模型，若計畫成真，這將是中國企業迄今打造的最大AI模型。該模型目前處於預訓練階段，最快要到2027年初才會對外開放。"
body_en: |
  ByteDance, the parent company of TikTok, is developing an artificial intelligence model targeting up to 10 trillion parameters, a scale that would make it the largest AI model built by a Chinese company, according to a report by the Financial Times. The model is currently in pre-training, the initial and most compute-intensive phase of large-scale AI development.

  ByeDance has not disclosed the model's architecture or how many parameters would be active during inference — the process of generating responses to user queries — leaving the model's practical performance characteristics uncertain.

  ## How it compares to other Chinese models

  At 10 trillion parameters, ByteDance's model would substantially exceed the current largest Chinese AI models. Moonshot AI's Kimi K3 has 2.8 trillion parameters; DeepSeek V4-Pro has 1.6 trillion. The Financial Times report places ByteDance's target well above both.

  Anthropics is also reportedly developing a model of similar magnitude. Its most advanced model under development, referred to as Mythos 5, is estimated at approximately 8 trillion parameters, though Anthropic has not confirmed that figure.

  ## Active parameters and what they mean for performance

  Total parameter counts at this scale are not directly equivalent to model capability. Models with trillions of parameters typically rely on a Mixture of Experts (MoE) architecture — a design in which the full set of parameters is divided into specialized sub-networks, and only a fraction of those sub-networks activate to process any given request.

  DeepSeek V4-Pro illustrates the gap between total and active scale: while it carries 1.6 trillion total parameters, only approximately 49 billion — around 3 percent — are active during inference. ByteDance has not disclosed what share of the 10-trillion-parameter model would be active at inference time. That number will govern the model's actual compute demands and determine how its performance compares against rivals in practice.

  ## Development team and timeline

  The model is being built by Seed, ByteDance's internal AI research division. Seed is led by Wu Yonghui, a former Google executive who joined ByteDance in February 2025. The division employs approximately 2,000 researchers working across foundation model development, reinforcement learning, and multimodal systems.

  Pre-training alone is estimated to take three to six months. The model would then require fine-tuning, safety evaluation, and deployment preparation. Assuming development proceeds without major setbacks, the earliest the model could be publicly available is early 2027.

  ## Potential deployment through Doubao

  If the new model is used to power ByteDance's Doubao AI assistant, it would have immediate access to a large installed user base. Doubao reported approximately 336 million monthly active users as of April 2026. ByteDance introduced Doubao Seed 2.0, the prior generation of the assistant offered in multiple variants, in February 2026.

  ## What it signals for the industry

  The reported development places ByteDance among the companies pursuing frontier-scale model training — a domain that requires substantial and sustained compute investment. Training a 10-trillion-parameter model is projected to take three to six months of pre-training alone, reflecting the resource intensity involved. Whether ByteDance's model can compete with leading Western frontier models will depend significantly on architectural decisions, particularly active parameter counts at inference time, that the company has not yet disclosed.

  ByeDance's earliest projected availability for the model is early 2027, contingent on uninterrupted development progress.
body_zh: |
  字節跳動是TikTok的母公司，目前正在開發一款規模高達10兆個參數的人工智慧模型，若計畫成真，這將是迄今由中國企業打造的最大AI模型。據《金融時報》報導，該模型目前正處於預訓練階段——這是大規模AI開發流程中最初、也是運算資源需求最為密集的一個環節。

  字節跳動尚未公開該模型的架構，也未透露在推論（即針對使用者查詢生成回應的過程）時，實際有多少參數處於啟用狀態，因此模型的實際效能特性目前仍不明朗。

  ## 與其他中國模型的比較

  若以10兆個參數計算，字節跳動的模型將大幅超越目前中國規模最大的AI模型。Moonshot AI 旗下的 Kimi K3 擁有2.8兆個參數；DeepSeek V4-Pro 則有1.6兆個參數。《金融時報》的報導顯示，字節跳動的目標規模遠超這兩款模型。

  Anthropic 據報也正在開發規模相近的模型。其目前研發中最先進的模型被稱為「Mythos 5」，估計約有8兆個參數，但Anthropic尚未對外確認這一數字。

  ## 啟用參數數量及其對效能的意義

  在如此龐大的規模下，參數總量並不直接等同於模型的實際能力。擁有數兆個參數的模型，通常採用「專家混合」（Mixture of Experts，MoE）架構——這種設計將全部參數劃分為多個專門的子網路，處理任一請求時，只有其中一部分子網路會被啟動。

  DeepSeek V4-Pro 清楚說明了參數總量與啟用規模之間的落差：儘管它擁有1.6兆個參數，但在推論時實際啟用的參數僅約490億個，大約佔總量的3%。字節跳動尚未透露其10兆參數模型在推論時的啟用比例。這個數字將直接左右模型實際的運算需求，也將決定它在實際競爭中的效能表現究竟能與對手抗衡到什麼程度。

  ## 研發團隊與時程規劃

  這款模型由字節跳動內部AI研究部門 Seed 負責開發。Seed 由前Google高管吳永輝帶領，他於2025年2月加入字節跳動。該部門目前約有2,000名研究人員，研究領域涵蓋基礎模型開發、強化學習及多模態系統。

  光是預訓練階段，預計就需要三至六個月。完成後，模型還需依序經歷微調、安全評估及部署前準備等環節。假設開發進程一切順利、未遭遇重大挫折，這款模型最快也要到2027年初才可能正式對外開放。

  ## 透過豆包平台部署的潛力

  若這款新模型被用於驅動字節跳動旗下的豆包（Doubao）AI助理，它將立即觸及龐大的既有用戶群。截至2026年4月，豆包的月活躍用戶數約達3.36億。字節跳動曾於2026年2月推出豆包Seed 2.0——即這款助理的前一代，並提供多種不同變體版本。

  ## 對產業的意義

  此次曝光的開發計畫，顯示字節跳動已躋身追求前沿規模模型訓練的企業之列——這一領域需要龐大且持續不斷的運算投資。訓練一個10兆參數的模型，光是預訓練階段預計就需耗費三至六個月，充分反映了其中所涉及的資源強度。字節跳動的模型能否與西方頂尖前沿模型一較高下，將在很大程度上取決於架構層面的決策——尤其是推論時的啟用參數數量——而這些關鍵資訊，目前公司尚未對外揭露。

  字節跳動對這款模型最早的公開時間預估為2027年初，前提是開發進程不受重大干擾。
date: "2026-08-11"
source_published: "2026-08-10T00:00:00.000Z"
category: "compute"
secondary_categories: []
region: ["China"]
vendor: ["ByteDance"]
trust:
  score: 3
  reasoning: "Single source: Induk TikTok Siapkan Model AI Terbesar dari China (trust 3/5)."
sources:
  - url: "https://tekno.kompas.com/read/2026/08/10/07000087/induk-tiktok-siapkan-model-ai-terbesar-dari-china"
    title: "Induk TikTok Siapkan Model AI Terbesar dari China"
    trust: 3
    type: primary
    published_at: "2026-08-10T00:00:00.000Z"
---
