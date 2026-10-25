---
title_en: "ADT R27A-BK3 U.2 PCIe Adapter Holds Near-Peak Throughput Without Thermal Throttling"
title_zh: "ADT R27A-BK3 U.2 PCIe 轉接卡實測：持續吞吐量幾乎無衰減，未見降速"
summary_en: "The ADT R27A-BK3, a low-cost adapter that seats a U.2 NVMe SSD into a standard PCIe slot, sustained throughput within 3.2% of peak across both PCIe Gen3 and Gen5 drives during 20-minute benchmark runs, with no thermal throttling observed, according to a review by ServeTheHome."
summary_zh: "根據 ServeTheHome 的評測，ADT R27A-BK3 這款低價 U.2 NVMe 固態硬碟轉 PCIe 插槽轉接卡，在 PCIe Gen3 與 Gen5 兩款硬碟的 20 分鐘壓力測試中，持續吞吐量均維持在峰值的 3.2% 以內，全程未出現任何降速節流現象。"
body_en: |
  The ADT R27A-BK3, a low-cost adapter that seats a U.2 NVMe solid-state drive into a standard PCIe slot, sustained throughput within 3.2% of peak across both PCIe Gen3 and Gen5 drives during 20-minute benchmark runs, according to a review published by ServeTheHome. Neither drive exhibited thermal throttling, a performance failure mode that reduced output in an earlier EDSFF variant of the same adapter family.

  ## Performance figures

  Testing used two 7.68TB U.2 drives with different interface generations. A Samsung MZQLB7T6HMLA-00007, which uses a PCIe Gen3 x4 interface, peaked at 2,252 megabytes per second and held a sustained rate of 2,179 MB/s over the full run, a drop of roughly 3.2% from peak. Drive temperature peaked at 78°C, below the drive's warning threshold of 86°C, ServeTheHome reported.

  A Solidigm D7-PS1010 running on PCIe Gen5 x4, the current highest-speed PCIe generation for NVMe drives, delivered a peak of 7,946 MB/s and a sustained rate of 7,838 MB/s over the same 20-minute duration, a drop of just 1.4% from peak. Its temperature leveled off at 70°C, below the drive's 77°C warning threshold. Both drives remained below their respective warning thresholds throughout the runs.

  ## Cooling design

  The adapter encloses the drive in a metal shell that also houses a blower fan connected via a standard 4-pin PWM connector. PWM, or pulse-width modulation, allows the host system to vary fan speed based on temperature signals. ServeTheHome noted that the U.2 version's cooling outperformed the EDSFF variant it reviewed previously, which did experience thermal throttling — a condition where a drive automatically reduces performance to limit heat buildup.

  ServeTheHome cautioned that drives with higher thermal output may behave differently, and recommended verifying thermal performance in the target environment before relying on the adapter in production.

  ## Connector and form factor

  The R27A-BK3 uses an SFF-8639 connector, the interface standard for U.2 drives. U.2 is a 2.5-inch enterprise drive form factor. This distinguishes the adapter from ADT's EDSFF version, which uses an SFF-TA-1002 connector designed for E1.S and E3.S drives — thinner EDSFF (Enterprise and Data Center Standard Form Factor) drives used in high-density server environments.

  The PCIe gold-finger connector on the bottom edge supports Gen5 x4. ADT also sells a Gen4 version of the adapter; ServeTheHome noted that purchasers must verify which PCIe generation their system and target drive support before ordering, and must also confirm they are selecting the correct model between the U.2 and EDSFF variants.

  ## Industry context

  Adapters of this type address a recurring gap in server and workstation deployments: systems with available PCIe slots but no native U.2 backplane or hot-swap cage. The R27A-BK3's ability to sustain close to peak throughput on a PCIe Gen5 x4 drive without thermal throttling indicates its cooling solution is adequate for at least the drive models ServeTheHome tested. The adapter is available through Amazon and AliExpress, according to ServeTheHome.
body_zh: |
  ## ADT R27A-BK3 U.2 PCIe 轉接卡實測：持續吞吐量幾乎無衰減，未見降速

  根據 ServeTheHome 發布的評測報告，ADT R27A-BK3 這款低價轉接卡可將 U.2 NVMe 固態硬碟安裝至標準 PCIe 插槽，在 PCIe Gen3 與 Gen5 兩款硬碟的 20 分鐘基準測試中，持續吞吐量均維持在峰值的 3.2% 以內。兩款硬碟均未出現降速節流（thermal throttling）現象——這種效能失常的情況，曾在同一轉接卡家族的 EDSFF 版本上發生過。

  ## 效能數據

  本次測試採用兩款容量均為 7.68TB 的 U.2 硬碟，介面世代各有不同。三星 MZQLB7T6HMLA-00007 採用 PCIe Gen3 x4 介面，峰值吞吐量達 2,252 MB/s，在完整測試期間的持續吞吐量為 2,179 MB/s，較峰值下降約 3.2%。ServeTheHome 指出，該硬碟的最高溫度達 78°C，低於其 86°C 的警告門檻。

  採用 PCIe Gen5 x4 介面的 Solidigm D7-PS1010——目前 NVMe 硬碟最高速度的 PCIe 世代——峰值吞吐量達 7,946 MB/s，在同樣 20 分鐘的測試期間，持續吞吐量為 7,838 MB/s，較峰值僅下降 1.4%。其溫度穩定在 70°C，低於該硬碟 77°C 的警告門檻。兩款硬碟在整個測試過程中，溫度均未超過各自的警告門檻。

  ## 散熱設計

  這款轉接卡以金屬外殼將硬碟完整包覆，殼內還配備一顆透過標準 4-pin PWM 接頭連接的離心風扇。PWM（脈衝寬度調變）技術可讓主機系統依據溫度訊號動態調整風扇轉速。ServeTheHome 指出，U.2 版本的散熱表現優於先前評測的 EDSFF 版本——後者確實出現過降速節流問題，也就是硬碟為了控制熱量累積而自動降低效能的狀況。

  ServeTheHome 也提醒，熱功耗較高的硬碟可能有不同的表現，建議在正式部署前，務必先在目標環境中確認散熱效果是否符合需求。

  ## 連接器與外形規格

  R27A-BK3 採用 SFF-8639 連接器，這是 U.2 硬碟的標準介面規格。U.2 是一種 2.5 吋的企業級硬碟外形規格。這使其有別於 ADT 的 EDSFF 版本——後者採用 SFF-TA-1002 連接器，專為 E1.S 與 E3.S 硬碟設計，此類硬碟屬於更薄的 EDSFF（企業與資料中心標準外形規格）規格，常見於高密度伺服器環境。

  轉接卡底部的 PCIe 金手指連接器支援 Gen5 x4。ADT 亦販售 Gen4 版本的轉接卡；ServeTheHome 特別提醒，購買前務必確認自身系統與目標硬碟所支援的 PCIe 世代，同時也要確認選購的是 U.2 版本還是 EDSFF 版本，兩者不得混淆。

  ## 產業背景

  此類轉接卡解決的是伺服器與工作站部署中反覆出現的一個缺口：這些系統雖有空閒的 PCIe 插槽，卻沒有原生的 U.2 背板或熱插拔托架。R27A-BK3 在 PCIe Gen5 x4 硬碟上幾乎不降速、且無節流的持續吞吐表現，顯示其散熱方案對 ServeTheHome 所測試的硬碟型號而言已綽綽有餘。根據 ServeTheHome 的說明，這款轉接卡可透過 Amazon 及 AliExpress 購得。
date: "2026-10-26"
source_published: "2026-10-24T18:55:55.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: []
trust:
  score: 3
  reasoning: "Single source: ADT R27A-BK3 U.2 to PCIe Adapter Review (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/adt-r27a-bk3-u-2-to-pcie-slot-review/"
    title: "ADT R27A-BK3 U.2 to PCIe Adapter Review"
    trust: 3
    type: primary
    published_at: "2026-10-24T18:55:55.000Z"
---
