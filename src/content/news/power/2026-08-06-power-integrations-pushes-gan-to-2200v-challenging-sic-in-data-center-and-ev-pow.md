---
title_en: "Power Integrations pushes GaN to 2,200V, challenging SiC in data center and EV power"
title_zh: "Power Integrations 將 GaN 推至 2,200V 正面挑戰 SiC"
summary_en: "Power Integrations has rated its proprietary PowiGaN gallium nitride technology at 2,200 volts, a level the company says surpasses all current commercial GaN devices and brings the technology into direct competition with silicon carbide in high-voltage applications including AI data centers and electric vehicles."
summary_zh: "Power Integrations 宣布其自有 PowiGaN 氮化鎵技術達到 2,200 伏特額定電壓，超越市場上所有現有商用 GaN 元件，使 GaN 首度具備在 AI 資料中心、電動車及高壓輸電等領域與碳化矽半導體競爭的實力。該公司表示，PowiGaN 可在最高 1 MHz 下持續切換，較 SiC 快約四倍，有望將電源模組體積縮減 25% 至 50%。"
body_en: |
  Power Integrations has rated its proprietary PowiGaN gallium nitride (GaN) technology at 2,200 volts, the company announced, a threshold the company says exceeds every commercial GaN device on the market and positions the technology against silicon carbide (SiC) semiconductors in high-voltage power conversion applications including AI data centers, electric vehicles, renewable energy, and high-voltage direct current (HVDC) transmission.

  Until now, applications above roughly 2 kilovolts have been exclusively served by SiC, according to Power Integrations. The 2,200V rating is intended to change that by providing designers a GaN alternative capable of operating at much higher switching frequencies than SiC allows in mass production.

  ## Why voltage ratings matter for AI infrastructure

  Power Integrations president and chief executive Jennifer Lloyd said next-generation AI data centers are moving toward 1,500V power distribution architectures, and that EV battery systems and auxiliary power supplies are also operating at rising voltages. The 2,200V rating, the company said, provides a safety margin above those bus voltages while supporting the high switching frequencies needed for high power density designs.

  Switching frequency determines how quickly a power transistor cycles on and off. Higher frequencies allow engineers to use smaller passive components — inductors and transformers — and shrink the overall power module. Power Integrations said PowiGaN has been demonstrated operating continuously at up to 1 megahertz (MHz), compared with a limit of approximately 250 kilohertz (kHz) for SiC devices in current mass-production applications — a roughly fourfold difference. The company said that frequency advantage reduces magnetic component volume and can cut power module size by 25 to 50 percent.

  ## Technical structure and efficiency claims

  PowiGaN uses what the company describes as a cascode configuration: a high-voltage depletion-mode (D-mode) GaN high-electron-mobility transistor (HEMT) — a type of transistor that uses a two-dimensional electron gas for high-speed switching — packaged in series with a mature low-voltage silicon MOSFET. Because the silicon device controls the combined switch state, the design behaves like a conventional normally-off transistor, simplifying gate driver circuits and reducing design complexity, the company said.

  That structure also addresses a known efficiency penalty in half-bridge circuits, which are a fundamental building block of power converters. During what engineers call third-quadrant operation — the period when current flows in the reverse direction through the switch — conventional enhancement-mode (E-mode) GaN devices produce a forward voltage drop of approximately 5 volts. The PowiGaN cascode produces roughly 0.7 volts in the same condition, the company said, reducing energy lost during dead time, the brief interval when both switches in a half-bridge are held off simultaneously.

  Compared with SiC devices of equivalent on-resistance, the company said PowiGaN exhibits lower output capacitance (COSS) and lower gate charge (Qg), both of which reduce switching losses.

  ## Substrate technology and reliability data

  Power Integrations attributes much of the device's high-voltage capability to its GaN-on-sapphire substrate. Conventional GaN power devices are built on conductive silicon wafers; sapphire is non-conductive and, the company said, avoids process-induced cracking caused by mismatches in thermal expansion between GaN and silicon, while improving overvoltage tolerance.

  The company has shipped more than 200 million PowiGaN chips since its 750V product launched in 2018, and reported a verified field failure rate — measured in failures in time (FIT), a standard reliability metric representing failures per billion device-hours — of less than 1.

  Test data released by the company show the 2,200V device's actual breakdown voltage exceeds 4,000V, providing a 2,000V margin above the rated operating voltage. The company said that if a transient overvoltage remains below 4,000V, the device recovers normal operation once voltage returns to rated levels, unlike conventional silicon devices which sustain permanent damage. In a 20-hour continuous dynamic switching test in a flyback converter circuit — a common isolated power supply topology — operating at 1,760V peak and 1.5 amperes, the device showed no drift in on-resistance. The company described this as the first industry demonstration of continuous switching above 1,500V peak.

  ## Market context

  Market analysts cited in the source project the global GaN power device market will reach 3.5 billion dollars by 2031, driven in part by the shift to higher-voltage bus architectures in AI data centers. Power Integrations said the 2,200V rating eliminates the circuit complexity introduced when designers stack multiple lower-voltage devices in series to reach high-voltage rails.

  ## Manufacturing and next steps

  Power Integrations' supply chain for PowiGaN spans multiple regions: epitaxial growth and wafer fabrication are conducted in Japan and Germany, research and development is based in the United States, and back-end packaging and test operations are located in Malaysia and China. The company said this structure provides unconstrained production capacity.

  The first products incorporating 2,200V PowiGaN technology are currently in active development, the company said.
body_zh: |
  Power Integrations 宣布，其自有的 PowiGaN 氮化鎵（GaN）技術已通過 2,200 伏特的額定電壓認證。該公司表示，此數字超越了市場上所有現有商用 GaN 元件，使這項技術得以在高壓電力轉換應用領域直接與碳化矽（SiC）半導體正面競爭，涵蓋 AI 資料中心、電動車、再生能源及高壓直流（HVDC）輸電等應用場景。

  根據 Power Integrations 的說法，在此之前，2 千伏特以上的應用場景幾乎全由 SiC 獨占。2,200V 的額定規格正是為了扭轉這一局面——為設計工程師提供一款能在量產條件下以遠高於 SiC 之切換頻率運作的 GaN 選擇。

  ## 電壓額定對 AI 基礎設施的重要性

  Power Integrations 總裁兼執行長 Jennifer Lloyd 表示，新一代 AI 資料中心正朝 1,500V 配電架構邁進，電動車電池系統與輔助電源也持續在更高電壓下運行。該公司指出，2,200V 的額定規格在上述匯流排電壓之上保留了充裕的安全裕度，同時支援高功率密度設計所需的高切換頻率。

  切換頻率決定了功率電晶體每秒開關循環的速度。頻率越高，工程師便可採用更小的被動元件——包括電感與變壓器——進而縮小整體電源模組的體積。Power Integrations 表示，PowiGaN 已驗證可持續在最高 1 百萬赫茲（MHz）下運作；相較之下，SiC 元件在目前量產應用中的上限約為 250 千赫茲（kHz），兩者相差約四倍。該公司表示，這項頻率優勢能縮減磁性元件的體積，並使電源模組尺寸縮小 25% 至 50%。

  ## 技術架構與效率表現

  PowiGaN 採用該公司所稱的共源共柵（cascode）架構：一顆高壓耗盡型（D-mode）GaN 高電子遷移率電晶體（HEMT）——此為一種利用二維電子氣實現高速切換的電晶體——與一顆成熟的低壓矽 MOSFET 串聯封裝在一起。由於矽元件負責控制整個開關的導通狀態，此設計表現如同傳統的常閉型電晶體，可簡化閘極驅動電路並降低設計複雜度。

  這一架構同時解決了半橋電路中一項為人所知的效率缺陷——半橋電路是電力轉換器的基本組成單元。在工程師所稱的「第三象限操作」期間，即電流反向流過開關的時段，傳統增強型（E-mode）GaN 元件會產生約 5 伏特的順向電壓降。相較之下，PowiGaN 共源共柵架構在相同條件下僅產生約 0.7 伏特，進而減少了死區時間（dead time）期間的能量損耗——死區時間是指半橋中兩個開關同時關斷的短暫間隔。

  與同等導通電阻的 SiC 元件相比，該公司表示 PowiGaN 的輸出電容（COSS）與閘極電荷（Qg）均較低，兩者都有助於降低切換損耗。

  ## 基板技術與可靠度數據

  Power Integrations 將該元件的高壓能力主要歸功於其氮化鎵覆藍寶石（GaN-on-sapphire）基板。傳統 GaN 功率元件建構在導電性矽晶圓上；藍寶石為非導電材料，該公司表示，可避免 GaN 與矽之間因熱膨脹係數不匹配所導致的製程裂縫，同時提升過電壓耐受能力。

  自 2018 年推出 750V 產品以來，該公司已累計出貨超過 2 億顆 PowiGaN 晶片，並公布其驗證後的現場失效率——以「失效時間（FIT）」衡量，此為業界標準可靠度指標，代表每十億元件運作小時的失效次數——低於 1。

  該公司公布的測試數據顯示，2,200V 元件的實際崩潰電壓超過 4,000V，比額定工作電壓高出 2,000V 的裕度。該公司表示，若瞬態過電壓維持在 4,000V 以下，一旦電壓回復至額定範圍，元件便能恢復正常運作，有別於傳統矽元件遭受永久損壞的情況。在一項針對反激式轉換器（flyback converter，一種常見的隔離型電源拓撲）進行的 20 小時連續動態切換測試中，元件在 1,760V 峰值電壓、1.5 安培的條件下持續運作，導通電阻無任何偏移。該公司將此描述為業界首次在 1,500V 峰值以上進行持續切換的驗證示範。

  ## 市場背景

  報導所引述的市場分析師預測，在 AI 資料中心轉向更高電壓匯流排架構的趨勢帶動下，全球 GaN 功率元件市場規模將於 2031 年達到 35 億美元。Power Integrations 表示，2,200V 的額定規格消除了工程師為達到高壓電軌而將多顆低壓元件串聯時所引入的電路複雜性。

  ## 製造佈局與後續計畫

  Power Integrations 的 PowiGaN 供應鏈橫跨多個地區：磊晶成長與晶圓製造在日本與德國進行，研發中心設於美國，後段封裝與測試作業則分別位於馬來西亞與中國。該公司表示，此一佈局確保了不受限制的產能供應。

  首批採用 2,200V PowiGaN 技術的產品目前正積極開發中。
date: "2026-08-06"
source_published: "2026-08-05T13:15:17.000Z"
category: "power"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Power Integrations 發表首款 2200 V 氮化鎵技術，搶攻資料中心、電動車與再生能源市場 (trust 3/5)."
sources:
  - url: "https://finance.technews.tw/2026/08/05/power-integrations-unveils-its-first-2200-v-gallium-nitride-technology/"
    title: "Power Integrations 發表首款 2200 V 氮化鎵技術，搶攻資料中心、電動車與再生能源市場"
    trust: 3
    type: primary
    published_at: "2026-08-05T13:15:17.000Z"
---
