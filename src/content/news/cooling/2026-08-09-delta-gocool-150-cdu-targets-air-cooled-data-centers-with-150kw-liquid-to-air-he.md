---
title_en: "Delta GoCool-150 CDU targets air-cooled data centers with 150kW liquid-to-air heat rejection"
title_zh: "台達GoCool-150 CDU：單機架排熱150kW，專攻氣冷資料中心"
summary_en: "Delta has unveiled the GoCool-150, a 1,200kg liquid-to-air coolant distribution unit capable of rejecting 150kW of heat from a single rack, demonstrated at Computex 2026 paired with ASRock Rack's NVIDIA Rubin Vera NVL72 system."
summary_zh: "台達在Computex 2026發表GoCool-150液冷轉氣冷冷卻液分配單元，重達1,200公斤、單機架排熱能力150kW，與華擎機架輝達Vera Rubin NVL72系統同台亮相，專為無法導入建築規模液冷迴路的傳統氣冷資料中心而設計。"
body_en: |
  Delta has introduced a liquid-to-air coolant distribution unit (CDU) rated to reject 150 kilowatts of heat from a single server rack, targeting data centers built around conventional air cooling that cannot readily accommodate building-scale liquid-cooling loops. The GoCool-150, developed in partnership with ASRock Rack, was shown at Computex 2026 alongside a complete NVIDIA Rubin Vera NVL72 rack — a dense AI server configuration that requires direct liquid cooling.

  The unit stands 2.3 meters tall, weighs 1,200 kilograms without coolant, and draws 18 kilowatts of power to move and reject the 150kW of heat it is designed to handle. It circulates coolant at 225 liters per minute and is engineered to maintain a coolant supply temperature of 45 degrees Celsius, a figure Delta said aligns with NVIDIA's thermal specifications for the Vera Rubin generation of hardware.

  ## How the unit works

  The GoCool-150 bridges two otherwise incompatible cooling regimes: servers that require liquid cooling on the chip side, and facilities whose infrastructure was designed to reject heat via air. A CDU of this type takes warm coolant returning from server components, passes it through a heat exchanger, and dissipates the heat into the ambient air of the data center rather than into a chilled-water or facility-wide coolant loop.

  The heat exchanger at the core of the unit consists of two heatsinks that run nearly the full height of the cabinet, each threaded with five copper pipes. On the air side, a rear-mounted array of 32 fans moves 17,658 cubic feet per minute (CFM) of air across those heatsinks. Delta said the fans use its in-house PFD2048HT model — 200-millimeter high-speed units powered at 48 volts DC — with each fan rated to draw up to 336 watts, spin at up to 8,250 RPM, and produce up to 81 decibels of acoustic output.

  On the liquid side, five pump units at the base of the cabinet circulate the coolant. Delta said both the fans and the pumps are hot-swappable, meaning failed units can be replaced without shutting down the CDU or interrupting cooling to the attached server rack.

  Management, power supply, and a control card are housed at the top of the unit.

  ## The problem the GoCool-150 addresses

  Many existing data centers were designed around air-cooled servers and rely on precision air handlers and hot-aisle containment to remove heat. Retrofitting such facilities with the building-scale chilled-water or coolant-loop infrastructure that liquid-cooled racks normally require is often impractical. Delta positioned the GoCool-150 as a way to operate liquid-cooled racks inside those facilities without facility modification, by keeping the liquid-to-air heat exchange self-contained within a single cabinet.

  The pairing with ASRock Rack's NVL72 at Computex 2026 illustrated the use case: the NVL72 rack distributes liquid coolant from top to bottom across its compute hardware, and the GoCool-150 sits alongside it to close the cooling loop using facility air alone.

  ## Industry significance

  The GoCool-150 reflects how quickly per-rack power density has risen in AI computing infrastructure. A single Vera Rubin NVL72 rack generates enough heat to require a dedicated 1,200kg cooling appliance consuming 18kW of power just to reject that heat. For data center operators, the unit represents one path to deploying next-generation liquid-cooled AI racks without rebuilding facility cooling infrastructure — though at the cost of significant floor space, weight loading, and parasitic power consumption. Delta said NVIDIA's 45-degree-Celsius coolant supply target for the Vera Rubin generation was a deliberate design choice intended to reduce the energy intensity of cooling these systems.
body_zh: |
  台達推出一款液冷轉氣冷的冷卻液分配單元（CDU），額定單一伺服器機架排熱能力達150千瓦，目標客群為以傳統氣冷架構興建、難以導入建築規模液冷迴路的資料中心。這款GoCool-150由台達與華擎機架（ASRock Rack）共同開發，於2026年台北國際電腦展（Computex 2026）上與輝達（NVIDIA）Vera Rubin NVL72完整機架並排展出——後者是一款需要直接液冷的高密度AI伺服器配置。

  該設備高2.3公尺，空載重量1,200公斤，運作時需消耗18千瓦電力以驅動冷卻液循環並排放其設計負載的150kW熱量。冷卻液循環流量為每分鐘225公升，並設計維持冷卻液供應溫度於攝氏45度，台達表示此溫度符合輝達Vera Rubin世代硬體的散熱規格要求。

  ## 運作原理

  GoCool-150在兩種原本互不相容的冷卻體制之間扮演橋接角色：一邊是晶片側需要液冷的伺服器，另一邊則是設施基礎設施原本設計以氣冷排熱的機房。這類CDU的運作方式是接收從伺服器元件回流的熱冷卻液，通過熱交換器後，將熱量散逸至資料中心的環境空氣中，而非排入冷凍水系統或全廠冷卻液迴路。

  該設備核心的熱交換器由兩組散熱片組成，幾乎貫穿整個機櫃高度，每組穿插五條銅管。氣側方面，機背安裝32顆風扇的陣列，每分鐘可驅動17,658立方英尺（CFM）的氣流穿越散熱片。台達表示，風扇採用自家研發的PFD2048HT型號——這是以48伏特直流電驅動的200毫米高轉速機種，每顆風扇額定最大功耗336瓦，最高轉速8,250 RPM，最大噪音輸出81分貝。

  液側方面，機櫃底部設有五組泵浦單元負責循環冷卻液。台達表示，風扇與泵浦均支援熱插拔（hot-swappable），意即故障元件可在不關閉CDU、不中斷連接機架冷卻的情況下直接更換。

  管理模組、電源供應器及控制卡則配置於設備頂部。

  ## GoCool-150解決的問題

  現有許多資料中心是圍繞氣冷伺服器設計的，依靠精密空調設備與熱走道封閉系統來移除熱量。要在這類設施中加裝液冷機架通常所需的建築規模冷凍水或冷卻液迴路基礎設施，往往並不切實際。台達將GoCool-150定位為一種解決方案，讓運營商得以在不改造設施的前提下，於既有機房內部署液冷機架，因為液冷轉氣冷的熱交換過程完全自足於單一機櫃之內。

  在Computex 2026的展示中，GoCool-150與華擎機架NVL72的配對清楚呈現了其應用場景：NVL72機架將液態冷卻液由上至下分配至運算硬體，GoCool-150則在其旁側閉合整個冷卻迴路，僅借助機房空氣完成散熱。

  ## 產業意義

  GoCool-150反映出AI運算基礎設施的單機架功率密度上升速度有多快。一座Vera Rubin NVL72機架所產生的熱量，需要一台重達1,200公斤、本身就消耗18千瓦電力的專用冷卻設備才能排除。對資料中心運營商而言，這款設備代表一條毋需重建設施冷卻基礎設施、即可部署下世代液冷AI機架的可行路徑——但代價是相當可觀的佔地面積、地板承重負荷，以及寄生功耗。台達表示，輝達將Vera Rubin世代的冷卻液供應溫度目標設定在攝氏45度，是一項刻意的設計選擇，目的是降低這些系統冷卻作業的能源強度。
date: "2026-08-09"
source_published: "2026-08-08T15:05:01.000Z"
category: "cooling"
secondary_categories: ["compute"]
region: []
vendor: ["ASRock Rack", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Delta’s GoCool-150 Goes Big To Enable 150kW Liquid-To-Air Cooling for ASRock Rack’s NVIDIA VR NVL72 (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/deltas-gocool-150-goes-big-to-enable-150kw-liquid-to-air-cooling-for-asrock-racks-vr-nvl72/"
    title: "Delta’s GoCool-150 Goes Big To Enable 150kW Liquid-To-Air Cooling for ASRock Rack’s NVIDIA VR NVL72"
    trust: 3
    type: primary
    published_at: "2026-08-08T15:05:01.000Z"
---
