---
title_en: "GL.iNet Comet Q GL-RMQ1 Offers Single-USB-C-Cable Remote KVM with Tailscale and Wi-Fi"
title_zh: "GL.iNet Comet Q：一線 USB-C 實現遠端 KVM，內建 Tailscale"
summary_en: "GL.iNet has released the Comet Q GL-RMQ1, a remote KVM device that uses a single USB Type-C cable to carry power, video, and keyboard-mouse input while relying on Wi-Fi rather than a wired network connection. The unit also supports Tailscale and can manage phones and tablets in addition to PCs."
summary_zh: "GL.iNet 推出 Comet Q GL-RMQ1 遠端 KVM 裝置，以單條 USB Type-C 線纜同時承載電源、影像與鍵盤滑鼠訊號，並透過 Wi-Fi 而非有線網路提供連線。這款裝置內建 Tailscale VPN 支援，除了伺服器與工作站外，亦可管理手機與平板等行動裝置。"
body_en: |
  GL.iNet has released the Comet Q GL-RMQ1, a remote keyboard-video-mouse (KVM) device that collapses what are normally multiple cable runs into a single integrated USB Type-C connection, according to a review by ServeTheHome.

  The device is built around the premise that one cable can do everything. The integrated Type-C cable — physically attached to the rear of the unit — simultaneously powers the GL-RMQ1, carries the video feed from the target machine, and transmits keyboard, mouse, and remote media signals back to it. Network connectivity is handled entirely over Wi-Fi, eliminating the Ethernet cable that most competing KVM devices require.

  ## What the single-cable design does and does not cover

  The tradeoff is explicit: because the cable is Type-C and fixed to the unit, there is no direct path to a machine that only exposes USB Type-A ports or requires HDMI for video. The target system must have a USB-C port that supports video output. GL.iNet says the solution also works with phones and tablets, extending the addressable device pool beyond servers and workstations.

  A second USB-C port on the body serves as a dedicated power input. ServeTheHome notes this is necessary because many devices have only a single Type-C port, which the integrated cable already occupies.

  ## Form factor and onboard interface

  The GL-RMQ1 uses a puck-style enclosure rather than the rectangular block form common among KVM switches. The front face carries a 1.8-inch touchscreen. ServeTheHome describes the unit as not small, despite its rounded profile. The rear surface has cooling vents and rubber feet alongside the integrated cable.

  The touchscreen displays the device's IP address and shows KVM and video connectivity status. During initial setup it also accepts Wi-Fi SSID and password input directly. Once configured, management moves to a browser interface.

  The package includes a bright orange rubber protector that fits over the unit. ServeTheHome noted that, having purchased two GL-RMQ1 units and receiving the same color on both, the protectors appear likely to be marked with a Sharpie to identify which unit corresponds to which host.

  ## Tailscale integration

  The device's headline-level feature, per ServeTheHome, is built-in Tailscale support. Tailscale is a VPN mesh-networking service that allows devices to reach one another across different networks without manual firewall or port-forwarding configuration. The GL-RMQ1's inclusion of Tailscale means remote access does not require the target machine and the KVM to share a local network segment.

  ## Noted limitation: boot timing

  ServeTheHome flagged one practical constraint during testing with a Bosgame M5 system: the GL-RMQ1 itself requires time to boot after being connected, and some host systems complete their own power-on sequence faster than the KVM device does. That timing gap can make it difficult or impossible to intercept the target machine's firmware (BIOS) screen, since the KVM may not yet be active when the relevant boot window opens.

  ## Industry context

  The single-cable, Wi-Fi-native approach distinguishes the GL-RMQ1 from the majority of IP KVM hardware, which typically requires separate HDMI and USB connections to the target and a wired Ethernet connection for network access. For environments where running multiple cables or maintaining wired network drops is impractical — remote offices, co-location cages with limited patch options, or management of consumer-grade devices — the consolidated design addresses a real deployment constraint. The boot-timing limitation, however, means the device's suitability for BIOS-level intervention will depend on the relative startup speed of each target system.
body_zh: |
  根據 ServeTheHome 的評測報導，GL.iNet 正式推出 Comet Q GL-RMQ1 遠端鍵盤－影像－滑鼠（KVM）裝置。這款產品將傳統上需要多條線纜才能完成的連線需求，整合進單一 USB Type-C 接頭，大幅化繁為簡。

  GL-RMQ1 的核心設計理念是「一線搞定」。機身後方固定整合一條 Type-C 線纜，同時肩負三項任務：為 GL-RMQ1 本體供電、從目標機器擷取影像訊號，以及將鍵盤、滑鼠與遠端媒體訊號回傳至目標機器。網路連線則完全透過 Wi-Fi 處理，省去了多數競爭產品所需的乙太網路線。

  ## 單線設計的適用範圍與限制

  這項設計的取捨相當直白：由於線纜為 Type-C 規格且固定於機身，無法直接連接只有 USB Type-A 連接埠、或僅以 HDMI 輸出影像的目標機器。目標系統必須具備支援影像輸出的 USB-C 連接埠。GL.iNet 表示，GL-RMQ1 同樣適用於手機與平板電腦，將可管理的裝置範圍從伺服器與工作站延伸至行動裝置。

  機身上另設有第二個 USB-C 連接埠，專門用於外接電源輸入。ServeTheHome 指出，這項設計有其必要性，因為許多裝置只有一個 Type-C 連接埠，而整合線纜已將其佔用。

  ## 外觀設計與機身介面

  GL-RMQ1 採圓盤造型外殼，有別於 KVM 切換器常見的長方塊型設計。機身正面配備一塊 1.8 吋觸控螢幕。ServeTheHome 形容，儘管外型圓潤，這款裝置的體積並不算小。機身背面除了整合線纜外，還設有散熱孔與防滑橡膠腳墊。

  觸控螢幕會顯示裝置的 IP 位址，以及 KVM 與影像連線的即時狀態。初次設定時，使用者也可直接在觸控螢幕上輸入 Wi-Fi SSID 與密碼。完成設定後，後續管理作業則移至瀏覽器介面進行。

  產品包裝內附一個鮮橘色橡膠保護套，可套在機身外部。ServeTheHome 提到，他們購入了兩台 GL-RMQ1，兩台均附上相同顏色的保護套，因此這些保護套很可能得以奇異筆加以標記，才能分辨哪台裝置對應哪台主機。

  ## Tailscale 整合

  依 ServeTheHome 評測所述，這款裝置最亮眼的功能是內建 Tailscale 支援。Tailscale 是一種 VPN 網狀網路服務，讓身處不同網路環境的裝置無需手動設定防火牆規則或連接埠轉發，即可互相存取。GL-RMQ1 內建 Tailscale，意味著進行遠端存取時，目標機器與 KVM 裝置無需位於同一區域網路。

  ## 已知限制：開機時序問題

  ServeTheHome 在以 Bosgame M5 系統進行測試時，發現一項實際使用上的限制：GL-RMQ1 本身在接上電源後需要一段時間才能完成開機，而部分主機系統的自身開機程序完成得比 KVM 裝置更快。這段時序落差可能導致使用者難以、甚至無法截取目標機器的韌體（BIOS）畫面，因為在相關開機時間窗口出現時，KVM 裝置可能尚未就緒。

  ## 產業背景

  GL-RMQ1 採用的單線纜、原生 Wi-Fi 設計，使其明顯有別於市面上多數 IP KVM 硬體——後者通常需要分別以 HDMI 與 USB 線纜連接目標機器，並以有線乙太網路提供網路存取。對於無法鋪設多條線纜或難以維護有線網路佈線的環境——例如遠端辦公室、佈線資源有限的共置機房，或需要管理消費級裝置的場合——這種整合式設計確實切中了實際部署痛點。然而，開機時序的限制意味著，GL-RMQ1 是否適合用於 BIOS 層級的干預操作，仍須視各目標系統的相對開機速度而定。
date: "2026-10-20"
source_published: "2026-10-18T22:16:42.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: GL.iNet Comet Q GL-RMQ1 Review A Single USB Type-C Cable Remote KVM Device with Tailscale (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/gl-inet-comet-q-gl-rmq1-review-a-single-usb-type-c-cable-remote-kvm-device-with-tailscale/"
    title: "GL.iNet Comet Q GL-RMQ1 Review A Single USB Type-C Cable Remote KVM Device with Tailscale"
    trust: 3
    type: primary
    published_at: "2026-10-18T22:16:42.000Z"
---
