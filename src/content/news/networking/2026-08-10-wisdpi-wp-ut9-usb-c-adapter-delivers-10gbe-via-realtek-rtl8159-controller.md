---
title_en: "WisdPi WP-UT9 USB-C Adapter Delivers 10GbE via Realtek RTL8159 Controller"
title_zh: "WisdPi WP-UT9 透過 Realtek RTL8159 控制器實現 USB-C 轉 10GbE 連線"
summary_en: "WisdPi's WP-UT9 adapter brings 10 Gigabit Ethernet connectivity to laptops and small form factor systems over USB Type-C, using the Realtek RTL8159 controller — the same chipset found in the Xikestor SKN-U310GT. Linux kernel 7.2 is expected to include native RTL8159 driver support through the r8152 driver module."
summary_zh: "WisdPi 推出 WP-UT9 轉接器，透過單一 USB Type-C 連接埠為筆記型電腦與小型系統提供 10 Gigabit 乙太網路連線，採用與 Xikestor SKN-U310GT 相同的 Realtek RTL8159 控制器晶片，Linux 核心 7.2 版預計將透過 r8152 驅動程式模組納入原生支援。"
body_en: |
  WisdPi's WP-UT9 adapter delivers 10 Gigabit Ethernet (10GbE) connectivity over a single USB Type-C connection, using the Realtek RTL8159 controller — the same chipset found in the Xikestor SKN-U310GT adapter reviewed previously by ServeTheHome.

  The WP-UT9 targets laptops and small form factor systems that lack a built-in 10GbE port. It draws all power from the USB connection, requiring no external power supply.

  ## Hardware design

  The adapter consists of a compact aluminum enclosure with a 10GBase-T RJ45 Ethernet port on one end and a USB Type-C connector on the other. The aluminum shell functions as passive cooling for the RTL8159 controller and the 10GBase-T physical layer chip — referred to as a PHY — which handles the high-speed analog signaling the interface requires.

  The RJ45 port supports the full range of standard Ethernet speeds: 100 Megabits per second (Mbps), 1 Gigabit per second (Gbps), 2.5 Gbps, 5 Gbps, and 10 Gbps. That range makes the adapter compatible with multi-gigabit switches that operate at intermediate rates below the 10 Gbps ceiling.

  The box includes a USB Type-C to USB Type-C cable. ServeTheHome described the cable as more visually distinctive than the round black cables typically bundled with competing adapters, while noting it is not particularly long; users needing more reach would need to source their own cable.

  ## Driver support

  On Windows 11, the adapter is recognized through Realtek's RTL8159 driver, which Device Manager identifies once drivers are installed.

  Linux support is advancing. The RTL8159 controller driver has been merged into the net-next development tree — the staging area where changes are collected ahead of mainline Linux kernel releases — as part of the existing r8152 driver module, with inclusion targeted for Linux kernel version 7.2. Systems running earlier kernel versions require either Realtek's out-of-tree driver or a backport provided by the Linux distribution. ServeTheHome noted that driver support has improved since its earlier review of the Xikestor adapter, which uses the same controller.

  ## Relationship to the Xikestor SKN-U310GT

  The WP-UT9 shares its RTL8159 controller with the Xikestor SKN-U310GT. The enclosures and bundled cables differ between the two products, but the fundamental design — an Ethernet port on one side and a USB Type-C port on the other — and the expected performance characteristics are closely aligned, according to ServeTheHome.

  ## Significance

  The arrival of multiple RTL8159-based USB 10GbE adapters from different vendors reflects growing availability of 10 Gigabit Ethernet for edge devices, giving users of laptops and compact systems a path to high-speed network switching without relying on built-in interfaces. Native Linux kernel inclusion, targeted for version 7.2, would remove the requirement for manual driver installation on Linux-based hosts running that release or later.
body_zh: |
  WisdPi 推出的 WP-UT9 轉接器，透過單一 USB Type-C 連接埠提供 10 Gigabit 乙太網路（10GbE）連線能力，採用 Realtek RTL8159 控制器——與 ServeTheHome 先前評測的 Xikestor SKN-U310GT 轉接器所搭載的晶片組相同。

  WP-UT9 主要針對缺乏內建 10GbE 連接埠的筆記型電腦及小型電腦系統。裝置所需電力完全由 USB 連線供給，無需外接電源。

  ## 硬體設計

  這款轉接器採用緊湊型鋁製外殼，一端為 10GBase-T RJ45 乙太網路連接埠，另一端為 USB Type-C 連接器。鋁製外殼兼具被動散熱功能，為 RTL8159 控制器及負責高速類比訊號處理的 10GBase-T 實體層晶片（PHY）提供散熱。

  RJ45 連接埠支援完整的標準乙太網路速率範圍：100 Mbps、1 Gbps、2.5 Gbps、5 Gbps 及 10 Gbps，因此可與支援中間速率的多速乙太網路交換器相容，不受限於 10 Gbps 上限。

  包裝內附一條 USB Type-C 對 USB Type-C 連接線。ServeTheHome 指出，此連接線在外觀上比競品轉接器通常附贈的黑色圓形線材更具特色，但長度並不算長，有較長連線需求的使用者需自行另購。

  ## 驅動程式支援

  在 Windows 11 環境下，安裝驅動程式後，裝置管理員即可透過 Realtek 的 RTL8159 驅動程式識別此轉接器。

  Linux 方面的支援正持續進展。RTL8159 控制器驅動程式已合併進入 net-next 開發分支——即主線 Linux 核心發布前的變更整合區——作為現有 r8152 驅動程式模組的一部分，目標是納入 Linux 核心 7.2 版。在此之前使用舊版核心的系統，需安裝 Realtek 的樹外驅動程式，或使用 Linux 發行版提供的反向移植版本。ServeTheHome 亦指出，與先前評測採用相同控制器的 Xikestor 轉接器時相比，驅動程式支援情況已有所改善。

  ## 與 Xikestor SKN-U310GT 的關聯

  WP-UT9 與 Xikestor SKN-U310GT 共用同款 RTL8159 控制器。兩款產品的外殼設計與附贈連接線有所差異，但基本架構——一側為乙太網路連接埠、另一側為 USB Type-C 連接埠——以及預期效能表現，根據 ServeTheHome 的說法，兩者高度相近。

  ## 市場意義

  多家廠商相繼推出以 RTL8159 為核心的 USB 10GbE 轉接器，反映出邊緣裝置的 10 Gigabit 乙太網路連線能力日趨普及，讓筆記型電腦與小型系統的使用者無需仰賴內建介面，即可接入高速網路交換環境。原生 Linux 核心支援預計於 7.2 版實現，屆時執行該版本或更新版本的 Linux 主機將無需手動安裝驅動程式。
date: "2026-08-10"
source_published: "2026-08-09T17:00:56.000Z"
category: "networking"
secondary_categories: []
region: []
vendor: []
trust:
  score: 4
  reasoning: "Single source: WisdPi WP-UT9 USB 10GbE Adapter Review (trust 4/5)."
sources:
  - url: "https://www.servethehome.com/wisdpi-wp-ut9-usb-10gbe-adapter-realtek-rtl8159-review/"
    title: "WisdPi WP-UT9 USB 10GbE Adapter Review"
    trust: 4
    type: primary
    published_at: "2026-08-09T17:00:56.000Z"
---
