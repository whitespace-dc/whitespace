---
title_en: "Cisco Catalyst C1300-24XTS Reviewed: 24-Port Switch Splits 10GbE Copper and Fiber Evenly"
title_zh: "Cisco Catalyst C1300-24XTS 評測：24 埠交換器銅纜光纖各半"
summary_en: "ServeTheHome has published a review of the Cisco Catalyst C1300-24XTS, a 1U rackmount switch that pairs 12 copper 10GBase-T ports with 12 SFP+ fiber cages, targeting environments that mix copper-connected servers with fiber-connected storage or uplinks."
summary_zh: "ServeTheHome 完成 Cisco Catalyst C1300-24XTS 長期評測，這款 1U 機架式交換器搭載 12 個銅纜 10GBase-T 連接埠與 12 個 SFP+ 光纖籠架，專為銅纜伺服器與光纖儲存設備混合部署的環境而設計。評測期間機器運作穩定，未出現任何問題。"
body_en: |
  Cisco's Catalyst C1300-24XTS, a 24-port 10 Gigabit Ethernet switch that divides its port count evenly between copper and fiber interfaces, has completed a multi-month evaluation at ServeTheHome, with the publication reporting the unit ran without issue throughout the test period.

  The switch provides 12 ports of 10GBase-T — the standard that delivers 10 Gbps over copper cabling — and 12 SFP+ cages, which accept small form-factor pluggable transceivers for fiber or direct-attach copper (DAC) connections. ServeTheHome described the split as relevant for administrators managing a blend of 10GBase-T-capable servers or workstations alongside fiber-connected storage or uplinks. The publication confirmed the two port types are not combo jacks, meaning each of the 24 ports operates independently.

  ## Hardware layout

  The C1300-24XTS is a full 1U rackmount unit with a metal chassis, measuring 444.3 mm by 273 mm by 43.94 mm and weighing 4.2 kg. ServeTheHome noted this form factor is wider than the lower-port-count C1300 models it has previously tested.

  On the front panel, the 12 copper ports — numbered 1 through 12 — are arranged in two rows of six. The 12 SFP+ cages — numbered 13 through 24 — are arranged in three banks of four. ServeTheHome said the spread-out arrangement for the SFP+ section makes inserting optics and DACs easier and also aids cooling.

  Management interfaces are clustered on the left side of the front panel and include multiple console access options, among them a USB-C console port. On the far right of the front panel sits a dedicated RJ45 connector operating at 1 Gigabit Ethernet (1GE). ServeTheHome described this port as physically separate from both the console interfaces and the 24 data ports, providing out-of-band management access that allows administrators to reach the switch independently of the main data plane.

  Both sides of the chassis feature large perforated vent banks. The rear panel carries a product label, lock points for securing the unit, and a single AC power input. There is no redundant power input; ServeTheHome noted that achieving A+B power delivery — a configuration that feeds a device from two independent power sources for redundancy — would require an external automatic transfer switching power distribution unit.

  ## Product line context

  The C1300-24XTS is part of a broader Catalyst C1300 family that ServeTheHome has reviewed across multiple configurations, including the C1300-16XTS, C1300-12XS, C1300-12XT-2X, and C1300-8FP-2G. The rack ears shipped with the 24-port model differ in design from those supplied with the 12- and 16-port units, according to the review.

  The combination of copper and fiber 10 Gigabit ports in a single 1U chassis positions the C1300-24XTS for data center edge and enterprise wiring-closet deployments where port-type flexibility matters. The absence of a second power input is a constraint for operators whose infrastructure standards require fully redundant power paths at the switch level.
body_zh: |
  Cisco Catalyst C1300-24XTS 是一款 24 埠 10 Gigabit 乙太網路交換器，銅纜與光纖介面各佔一半。ServeTheHome 在完成長達數月的評測後表示，該機器在整個測試期間均運作穩定，未發生任何故障。

  這款交換器提供 12 個 10GBase-T 連接埠——即透過銅纜傳輸 10 Gbps 的業界標準——以及 12 個 SFP+ 籠架，可插入小型可插拔光收發器，支援光纖或直連銅纜（DAC）連線。ServeTheHome 指出，銅纜與光纖各半的設計，對於同時管理支援 10GBase-T 的伺服器或工作站、以及光纖連接之儲存設備或上行鏈路的系統管理員來說相當實用。該媒體亦確認，兩種連接埠類型並非共用複合插槽（combo jacks），亦即這 24 個連接埠各自獨立運作。

  ## 硬體配置

  C1300-24XTS 採全 1U 機架式設計，金屬底盤尺寸為 444.3 mm × 273 mm × 43.94 mm，重量 4.2 公斤。ServeTheHome 指出，這款機型的寬度比其先前評測的低埠數 C1300 型號更寬。

  前面板上，12 個銅纜連接埠（編號 1 至 12）以兩排各六個的方式排列；12 個 SFP+ 籠架（編號 13 至 24）則分成三組、每組四個。ServeTheHome 表示，SFP+ 區段的分散式排列不僅方便插拔光模組與 DAC 線材，也有助於散熱。

  管理介面集中於前面板左側，提供多種主控台存取選項，其中包含一個 USB-C 主控台連接埠。前面板最右側則設有一個獨立的 RJ45 連接埠，以 1 Gigabit 乙太網路（1GE）速率運作。ServeTheHome 指出，這個連接埠與主控台介面及 24 個資料連接埠實體分離，提供帶外管理（out-of-band management）存取功能，讓管理員得以不依賴主要資料平面而獨立存取交換器。

  底盤兩側均設有大面積打孔通風區塊。後面板配備產品標籤、固定機器用的鎖點，以及單一交流電源輸入。機器不具備備援電源輸入；ServeTheHome 指出，若要實現 A+B 供電配置——即從兩個獨立電源為設備供電以提供冗餘——則需外接自動切換式電源分配單元（ATS PDU）。

  ## 產品線背景

  C1300-24XTS 隸屬於較廣泛的 Catalyst C1300 產品系列，ServeTheHome 已先後評測過多款不同配置，包括 C1300-16XTS、C1300-12XS、C1300-12XT-2X 與 C1300-8FP-2G。根據評測報告，24 埠機型隨附的機架耳片設計與 12 埠及 16 埠機型有所差異。

  在單一 1U 底盤中同時整合銅纜與光纖 10 Gigabit 連接埠，使 C1300-24XTS 適用於需要靈活切換連接埠類型的資料中心邊緣與企業配線間部署場景。對於基礎設施標準要求在交換器層級實現全備援電源路徑的維運人員而言，缺乏第二個電源輸入是一項不可忽視的限制。
date: "2026-11-08"
source_published: "2026-11-06T20:30:45.000Z"
category: "networking"
secondary_categories: []
region: []
vendor: ["Cisco"]
trust:
  score: 4
  reasoning: "Single source: Cisco Catalyst C1300-24XTS Review A Neat 24-port 10GbE Switch (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/cisco-catalyst-c1300-24xts-review-a-neat-24-port-10gbe-switch-marvell/"
    title: "Cisco Catalyst C1300-24XTS Review A Neat 24-port 10GbE Switch"
    trust: 4
    type: primary
    published_at: "2026-11-06T20:30:45.000Z"
---
