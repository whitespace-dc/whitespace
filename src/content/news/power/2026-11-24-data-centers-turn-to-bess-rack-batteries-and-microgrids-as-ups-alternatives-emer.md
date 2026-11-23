---
title_en: "Data Centers Turn to BESS, Rack Batteries and Microgrids as UPS Alternatives Emerge"
title_zh: "資料中心轉向BESS、機架電池與微電網，UPS替代方案浮上檯面"
summary_en: "Rising power consumption and the spread of on-site generation are pushing data center operators to evaluate battery energy storage systems, rack-level batteries, buffer modules, and microgrids as alternatives or complements to conventional uninterruptible power supply infrastructure."
summary_zh: "隨著設施用電量持續攀升、自建發電資產日益普及，資料中心業者開始評估電池儲能系統、機架級電池、緩衝模組及微電網，作為傳統不斷電系統的替代方案或補充選項。"
body_en: |
  Data center operators are increasingly moving beyond conventional uninterruptible power supply (UPS) systems — which provide short-term backup power and voltage regulation to servers — as surging facility power loads and the proliferation of on-site generation assets make traditional backup architectures more costly and less flexible, according to Data Center Knowledge.

  The shift does not mark the end of UPS deployment, but it is broadening the range of technologies operators are evaluating, from large-scale battery energy storage systems capable of supplying power for hours to small rack-mounted batteries that eliminate the need for dedicated floor space.

  ## Why conventional UPS is under pressure

  Two structural forces are driving the reassessment. First, as data centers draw more power during normal operations, the UPS capacity required to cover critical loads during an outage grows proportionally, increasing both capital expenditure and the recurring cost of battery replacements, which are typically required every three to five years.

  Second, more facilities are adding on-site generation to supplement or reduce grid dependence. When an outage occurs in that environment, operators may prefer an immediate transfer to local generation rather than relying on a centralized UPS to bridge the gap — a preference that some newer power protection architectures are specifically designed to support.

  ## Battery energy storage systems offer extended runtime

  Battery energy storage systems, or BESS, use high-capacity batteries to store large volumes of electricity, most commonly to capture output from solar or wind generation for later use. In a data center backup context, the key distinction from a traditional UPS is scale: while a conventional UPS is typically sized to bridge 10 to 15 minutes of downtime, a BESS deployment can sustain loads for hours, depending on system size and configuration.

  The tradeoff is cost and integration complexity. BESS requires a higher upfront investment and more involved engineering than a standard UPS installation. For operators that face longer outage durations, want to store renewable energy on site, or are building broader flexible energy strategies, the technology can serve as either an alternative or a complement to existing UPS infrastructure.

  ## Rack-level batteries address density and floor space

  Most data center UPS systems are centralized installations that support dozens or hundreds of servers from a single unit, consuming dedicated floor space in facilities that are under growing pressure to increase rack density. Rack-level batteries address that constraint by placing backup power directly inside the rack, providing localized protection without the footprint of a large centralized system.

  Rack-level batteries also reduce the heat concentration associated with large battery rooms. The technology shares some limitations with traditional UPS, including periodic battery replacement and lifecycle management, but its space-saving characteristics make it relevant to operators trying to maximize capacity within existing buildings.

  ## Buffer modules target the generator-transfer window

  Buffer modules are designed for a narrower purpose: absorbing brief power interruptions or voltage fluctuations long enough for equipment to transfer to another power source. Early buffer module designs could cover only milliseconds of downtime. Newer systems can provide up to 20 seconds of coverage — sufficient, in many cases, to allow a diesel generator or other on-site generation source to start and reach operating voltage.

  That specific capability positions buffer modules as a lower-cost, lower-maintenance option than a full UPS system in environments where the only requirement is maintaining server operation through the generator-transfer window.

  ## On-site microgrids reduce dependence on centralized backup

  Some facilities are moving further, investing in on-site microgrids — integrated collections of generation and energy assets capable of supplying a substantial share of a facility's power needs continuously. In a sufficiently redundant microgrid configuration, dependence on large centralized UPS systems for extended backup coverage can be reduced, because local generation can be brought online more quickly and reliably.

  Microgrids do not eliminate the need for power conditioning or ride-through protection, however. Facilities still require protection against voltage fluctuations and short transfer gaps, whether through surge protection, localized energy storage, or other power quality solutions.

  ## Hybrid strategies gaining traction

  For many operators, the practical outcome is a hybrid architecture rather than a wholesale replacement of UPS infrastructure. A facility might deploy rack-level batteries to recover floor space, buffer modules to manage generator-transfer events, and BESS to handle longer-duration backup and renewable energy storage, while retaining conventional UPS for certain critical loads.

  As power demands rise and on-site energy strategies grow more sophisticated, the dominant model for data center backup power is shifting from a single centralized UPS toward more distributed, layered architectures that are more directly integrated with broader facility energy planning.
body_zh: |
  ## 資料中心轉向BESS、機架電池與微電網，UPS替代方案浮上檯面

  據《Data Center Knowledge》報導，隨著設施用電量急遽攀升、現場自建發電資產持續增加，傳統不斷電系統（UPS）架構的建置成本愈來愈高、靈活性卻愈來愈不足，促使資料中心業者開始積極尋求新的備援電力方案。所謂傳統UPS，主要功能是在伺服器斷電時提供短期備援電力並穩定電壓。

  這股轉變並不代表UPS即將走入歷史，而是大幅拓寬了業者評估的技術選項範圍——從能持續供電數小時的大型電池儲能系統（BESS），到毋須佔用專屬機房地板面積的小型機架式電池，皆在考量之列。

  ## 傳統UPS面臨結構性壓力

  推動這波重新評估的結構性因素有兩個。

  首先，資料中心日常運作的用電量不斷增加，停電時須涵蓋的關鍵負載相應擴大，所需的UPS容量也等比成長，導致資本支出與每三到五年一次的電池定期更換費用雙雙墊高。

  其次，愈來愈多設施開始建置現場發電設備，以補充或降低對電網的依賴。在這樣的環境下，一旦發生停電，業者可能更傾向立即切換至本地發電，而非依賴集中式UPS來橋接空窗期——部分新一代電力保護架構正是針對這項需求而設計的。

  ## 電池儲能系統提供延長版備援時間

  電池儲能系統（BESS）透過高容量電池儲存大量電能，最常見的用途是儲存太陽能或風力發電的輸出，以備後續使用。在資料中心備援的應用情境中，BESS與傳統UPS的關鍵差異在於規模：傳統UPS通常僅設計為橋接10至15分鐘的停電空窗，而BESS依系統規模與配置不同，可持續供電數小時。

  代價則是較高的初期投資與更複雜的整合工程，遠超過標準UPS的安裝難度。對於需要應對較長停電時間、希望在現場儲存再生能源，或正在建構更完整彈性能源策略的業者而言，BESS既可作為現有UPS基礎設施的替代方案，也可作為補充選項。

  ## 機架級電池解決高密度與地板面積問題

  資料中心大多數的UPS系統採集中式安裝，單一設備負責支援數十乃至數百台伺服器，佔用相當可觀的專屬地板面積。然而在機架密度持續提升的壓力下，這種模式已愈來愈難以為繼。機架級電池則將備援電力直接置入機架內，在不佔用大型集中式系統安裝空間的前提下，提供局部化的電力保護。

  機架級電池也有助於降低大型電池室常見的熱量集中問題。這項技術與傳統UPS共享部分限制，包括定期更換電池及生命週期管理，但其節省空間的特性，對於試圖在現有建築內最大化容量的業者而言極具吸引力。

  ## 緩衝模組專攻發電機切換空窗

  緩衝模組的設計目的較為單一：在設備切換至另一電源的過程中，吸收短暫的電力中斷或電壓波動。早期的緩衝模組設計僅能涵蓋毫秒級的停電時間；新一代系統則可提供長達20秒的保護——在多數情況下，這段時間已足夠讓柴油發電機或其他現場發電設備啟動並達到運作電壓。

  這項特定能力，使緩衝模組在唯一需求僅是維持伺服器撐過發電機切換空窗的環境中，成為比完整UPS系統更低成本、更低維護需求的選項。

  ## 現場微電網降低對集中式備援的依賴

  部分設施更進一步，投資建置現場微電網——由多種發電與儲能資產整合而成的系統，能夠持續供應設施相當比例的用電需求。在冗餘度足夠的微電網配置下，由於本地發電能夠更快速、更可靠地上線，對大型集中式UPS系統提供長時間備援的依賴程度可望大幅降低。

  然而，微電網並不能完全取代電力調節或ride-through保護的需求。無論是透過突波保護、局部儲能或其他電力品質解決方案，設施仍需防範電壓波動與短暫切換空窗的影響。

  ## 混合策略逐漸成為主流

  對許多業者而言，實際落地的結果往往是混合式架構，而非全面汰換現有UPS基礎設施。一座設施可能同時部署機架級電池以釋放地板空間、採用緩衝模組管理發電機切換事件、引入BESS處理較長時間的備援需求及再生能源儲存，同時針對特定關鍵負載保留傳統UPS。

  隨著用電需求持續攀升、現場能源策略日趨精密，資料中心備援電力的主流模式正逐步從單一集中式UPS，轉向更分散、更多層次的架構——與設施整體能源規劃的整合也將愈發緊密。
date: "2026-11-24"
source_published: "2026-11-23T10:00:00.000Z"
category: "power"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Emerging Alternatives to UPS in Data Centers (trust 3/5)."
sources:
  - url: "https://www.datacenterknowledge.com/uptime/emerging-alternatives-to-ups-in-data-centers"
    title: "Emerging Alternatives to UPS in Data Centers"
    trust: 3
    type: primary
    published_at: "2026-11-23T10:00:00.000Z"
---
