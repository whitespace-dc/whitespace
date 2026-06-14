---
title_en: "Google Cloud Disruptions Persist Across India After Delhi Data Center Fire"
title_zh: "德里資料中心火災，Google Cloud印度服務持續中斷"
summary_en: "Google Cloud customers across India continue to face intermittent latency and packet loss days after a fire at a third-party Delhi data center forced an emergency shutdown of networking equipment. Google has rerouted traffic and is expanding capacity, but expects elevated latency until the facility is fully restored."
summary_zh: "德里一處第三方資料中心於6月9日發生火災，迫使網路設備緊急停機，導致印度各地Google Cloud用戶持續遭遇間歇性延遲及封包遺失問題。Google雖已進行流量改道並擴充容量，但預計在設施完全恢復之前，延遲情況將持續存在。"
body_en: |
  Google Cloud customers in India continued to experience intermittent latency and packet loss as of June 11 following a fire at a third-party data center in Delhi that forced an emergency shutdown of networking equipment on June 9, reducing available network capacity across the region.

  ## What happened

  The incident began on June 9 when a fire at the Delhi facility prompted an emergency shutdown that knocked out a local Point of Presence (POP) — a network node where Google interconnects with regional internet service providers and partners. Google isolated the affected POP, which reduced overall network capacity serving the Delhi metro area and triggered a rerouting of traffic away from the site.

  As of the company's June 11 update, network traffic originating from Delhi, Chennai, Mumbai, and surrounding areas remains affected. Google said that because rerouted demand now exceeds available capacity across Indian metros and regional ISPs, some Hybrid Connectivity and Virtual Private Cloud (VPC) customers may still experience latency spikes. Hybrid Connectivity refers to services that link corporate networks to Google's cloud infrastructure; VPC is Google's private networking layer within its cloud platform.

  ## Mitigation and recovery steps

  Google said initial mitigation efforts have produced positive results for some customers. The company said it is now optimizing backbone network capacity, expanding its Delhi POP, and migrating selected peering partners — the ISPs and networks with which it directly exchanges traffic — to increase regional resilience.

  Customers may continue to experience what Google described as "slightly elevated latency" and non-optimal routing until the affected third-party facility is fully restored. The company said it expected to provide its next status update on June 12.

  ## What it means

  The disruption illustrates the supply-chain risk embedded in cloud infrastructure: a fire at a third-party facility, not a Google-owned data center, was sufficient to degrade service across multiple major Indian cities for multiple days. The incident also highlights the capacity constraints that can emerge when a single network node is removed from a metro-area network and traffic must be absorbed by remaining routes. Google's response — expanding the Delhi POP and moving peering partners — points to longer-term capacity investments the company is making to reduce the impact of similar events in the future.

  Google said it expects to issue its next update on June 12 as work to fully restore the affected Delhi facility continues.
body_zh: |
  截至6月11日，印度各地的Google Cloud用戶仍持續遭遇間歇性延遲及封包遺失問題。事件起因於6月9日德里一處第三方資料中心發生火災，迫使網路設備緊急停機，導致整個區域的可用網路容量大幅縮減。

  ## 事件經過

  這起事件始於6月9日，德里該設施的火災促使相關單位啟動緊急停機，癱瘓了當地的接入點（POP）——即Google與區域網路服務供應商及合作夥伴進行互連的網路節點。Google隔離了受影響的POP節點，此舉降低了服務德里都會區的整體網路容量，並觸發流量改道，繞開該站點。

  截至公司6月11日的最新更新，源自德里、欽奈、孟買及周邊地區的網路流量仍受波及。Google表示，由於改道後的需求量目前已超出印度各大都會及區域網路服務供應商的可用容量，部分混合連線（Hybrid Connectivity）及虛擬私有雲（VPC）用戶可能仍會出現延遲飆升的情況。混合連線指的是將企業內部網路連接至Google雲端基礎設施的服務；VPC則是Google雲端平台內部的私有網路層。

  ## 緩解與復原措施

  Google表示，初步緩解措施已對部分用戶帶來正面成效。公司目前正在優化骨幹網路容量、擴充德里POP節點，並將部分對等互連夥伴——即與Google直接交換流量的網路服務供應商及網路業者——進行遷移，以強化區域韌性。

  在受影響的第三方設施完全恢復之前，用戶可能持續遭遇Google所描述的「略微偏高的延遲」及非最佳路由問題。公司表示預計於6月12日提供下一次狀態更新。

  ## 事件意涵

  這次中斷事件揭示了雲端基礎設施中潛藏的供應鏈風險：一處第三方設施（而非Google自有資料中心）發生火災，便足以讓印度多個主要城市的服務品質持續下降數天之久。此事件也凸顯了當都會區網路中的單一節點遭到移除、流量必須由其餘路由吸收消化時，可能出現的容量瓶頸問題。Google的應對方式——擴充德里POP節點並遷移對等互連夥伴——顯示出該公司正進行長期容量投資，以降低未來類似事件所帶來的衝擊。

  Google表示，預計在德里受影響設施的完全恢復工作持續推進之際，將於6月12日發布下一次更新。
date: "2026-06-13"
source_published: "2026-06-12T07:05:00.000Z"
category: "networking"
secondary_categories: ["software-ops"]
region: ["India"]
vendor: []
trust:
  score: 3
  reasoning: "Single source: Google Cloud Disruptions Continue After India Data Center Fire (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/outages/google-cloud-disruptions-continue-after-india-data-center-fire"
    title: "Google Cloud Disruptions Continue After India Data Center Fire"
    trust: 3
    type: primary
    published_at: "2026-06-12T07:05:00.000Z"
---
