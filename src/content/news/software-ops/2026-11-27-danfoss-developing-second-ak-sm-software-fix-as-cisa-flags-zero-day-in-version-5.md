---
title_en: "Danfoss developing second AK-SM software fix as CISA flags zero-day in version 5.4.0"
title_zh: "Danfoss 修補不完整，CISA 示警 AK-SM 5.4.0 版含零時差漏洞"
summary_en: "Danfoss is working on a second software update for its AK-SM 8xxA refrigeration controllers after CISA disclosed that version 5.4.0 — issued in early November 2026 — contains a zero-day vulnerability allowing remote attackers to trigger memory corruption and potentially execute arbitrary code."
summary_zh: "美國網路安全暨基礎設施安全局（CISA）揭露，Danfoss 於 2026 年 11 月初發布的 AK-SM 8xxA 冷凍控制器韌體 5.4.0 版含有零時差漏洞，允許遠端攻擊者觸發記憶體毀損並可能執行任意程式碼；Danfoss 已確認正在開發第二次軟體更新以修補此問題。"
body_en: |
  Danfoss is developing a second software update for its AK-SM 8xxA series refrigeration controllers after the US Cybersecurity and Infrastructure Security Agency (CISA) flagged a zero-day vulnerability in version 5.4.0 that could allow remote attackers to execute arbitrary code on affected devices.

  CISA's alert describes a flaw in which attackers can send specially crafted HTTP/S POST requests to an exposed controller, causing memory corruption and a web server restart, with the potential for arbitrary code execution. The agency did not disclose whether the vulnerability has been actively exploited.

  ## What 5.4.0 was meant to fix — and did not

  Danfoss rolled out version 5.4.0 in early November 2026, with stricter password rules as the principal security improvement. The company subsequently issued a follow-up advisory acknowledging that the update does not fix the newly discovered zero-day vulnerabilities, making the patch incomplete against the current threat landscape.

  The AK-SM 8xxA controllers are used to monitor and manage commercial refrigeration systems, primarily in food retail environments. The series has been a focus of sustained attacker interest: Danfoss controllers were compromised in a wave of incidents across European supermarkets and food retailers in which hackers remotely shut down cooling systems or raised their temperatures, spoiling perishable goods.

  ## Interim mitigations while patch is developed

  While the next software release is in development, Danfoss has advised operators to take several steps to reduce exposure. The company recommends that users not expose devices directly to the internet and not assign them public IP addresses. Remote access, where required, should be restricted to connections made through a secure VPN or equivalent protected network architecture.

  Danfoss also advises configuring all affected devices to operate in Strict Mode, a setting that provides enhanced security protections. The upcoming software release will remove the option for users to disable Strict Mode, making the protection mandatory. The company additionally recommends using strong, unique passwords for all user accounts and administrative access, and points operators to its AK-SM 800 security guidance page for further recommendations.

  ## Industry significance

  The disclosure underscores the ongoing exposure of operational technology — equipment that directly controls physical processes — to network-based attacks. Refrigeration controllers sit at the intersection of industrial control systems and internet-connected infrastructure, a combination that security researchers have repeatedly identified as a risk for food retailers that may not apply the same patching discipline to operational systems as to IT networks.

  Danfoss has not disclosed a release date for the updated software that will address the zero-day and enforce Strict Mode by default.
body_zh: |
  ## Danfoss 開發第二波修補，CISA 示警冷凍控制器零時差漏洞

  Danfoss 正在為其 AK-SM 8xxA 系列冷凍控制器開發第二次軟體更新。此前，美國網路安全暨基礎設施安全局（CISA）對外披露，該系列控制器的 5.4.0 版韌體存在零時差漏洞，可能使遠端攻擊者在受影響裝置上執行任意程式碼。

  CISA 的資安通報指出，攻擊者可向對外暴露的控制器發送特製的 HTTP/S POST 請求，進而觸發記憶體毀損並導致網頁伺服器重新啟動，最終可能達到任意程式碼執行的效果。該機構並未透露此漏洞是否已遭實際利用。

  ## 5.4.0 版原本要修什麼——以及它沒修好的部分

  Danfoss 於 2026 年 11 月初推出 5.4.0 版，主要的資安改進在於強化密碼規則。然而，該公司隨後發布了一份後續資安公告，承認此次更新並未修復新發現的零時差漏洞，意味著這個修補程式對現有威脅而言仍不完整。

  AK-SM 8xxA 系列控制器主要用於監控與管理商業冷凍系統，使用場域以食品零售業為大宗。這個系列長期以來都是攻擊者鎖定的目標：Danfoss 的控制器曾在歐洲超市與食品零售商爆發的一波資安事件中遭到入侵，駭客遠端關閉冷藏系統或拉高設定溫度，導致生鮮食品大量損壞。

  ## 修補程式開發期間的臨時防護措施

  在新版軟體推出之前，Danfoss 已建議業者採取多項措施以降低暴露風險。該公司建議使用者不要將裝置直接暴露於網際網路，也不應為這些裝置指派公開 IP 位址。如有遠端存取需求，應限制僅能透過安全的 VPN 或同等級的受保護網路架構進行連線。

  Danfoss 同時建議，所有受影響的裝置應設定為「嚴格模式（Strict Mode）」運作，以獲得更強化的資安防護。在即將推出的軟體版本中，使用者將無法自行關閉嚴格模式，該保護機制將成為強制性設定。此外，該公司建議業者為所有使用者帳號及管理員存取設定強度高且不重複的密碼，並指引業者參閱其 AK-SM 800 資安指引頁面，以取得進一步的建議措施。

  ## 產業層面的重要意涵

  此次資安揭露再次凸顯，直接控制實體流程的作業技術（OT）裝置，仍持續面臨網路攻擊的威脅。冷凍控制器橫跨工業控制系統與網際網路連線基礎設施兩大領域，資安研究人員已多次指出，食品零售業者在面對這類作業系統時，往往未能落實與 IT 網路同等嚴格的修補紀律，這正是潛在風險所在。

  Danfoss 目前尚未公布用以修補零時差漏洞、並將嚴格模式設為預設值的新版軟體發布時程。
date: "2026-11-27"
source_published: "2026-11-26T11:46:20.000Z"
category: "software-ops"
secondary_categories: ["regulatory"]
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: Danfoss working on further software update (trust 3/5)."
sources:
  - url: "https://www.coolingpost.com/world-news/danfoss-working-on-further-software-update/"
    title: "Danfoss working on further software update"
    trust: 3
    type: primary
    published_at: "2026-11-26T11:46:20.000Z"
---
