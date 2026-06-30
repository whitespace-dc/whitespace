---
title_en: "AMD replaces HBM with LPDDR5X in Versal Premium Gen 2 on-package memory chips"
title_zh: "AMD放棄HBM、改用LPDDR5X整合封裝記憶體推出Versal Premium Gen 2"
summary_en: "AMD announced the Versal Premium Gen 2 Memory on Package lineup, swapping HBM2e for LPDDR5X after AI-driven demand exhausted available HBM2e supplies and forced the discontinuation of its predecessor Versal HBM series. The announcement coincides with the final day to place orders for the outgoing Versal HBM chips."
summary_zh: "AMD宣布推出Versal Premium Gen 2 Memory on Package系列產品，以LPDDR5X取代原先的HBM2e封裝記憶體，主因是AI需求爆發導致HBM2e供應耗盡，前代Versal HBM系列因此停產。新品發布當天，恰好也是Versal HBM晶片最後下單截止日。"
body_en: |
  AMD has announced the Versal Premium Gen 2 Memory on Package lineup, a family of adaptive system-on-chip (SoC) products that integrates LPDDR5X memory directly onto the chip package — abandoning the high-bandwidth memory (HBM) technology used in its predecessor and marking what ServeTheHome described as a hard pivot in AMD's on-package memory strategy for its programmable logic division.

  The announcement came on the same day that AMD closed its order window for Versal HBM chips, the line the new family replaces.

  ## What the new chips are

  The Versal Premium Gen 2 Memory on Package parts are an extension of AMD's existing Versal Premium Gen 2 silicon, with LPDDR5X — a low-power, high-speed double-data-rate memory standard — integrated directly onto the chip package rather than placed on a separate board. AMD is targeting field-programmable gate array (FPGA) and adaptive SoC customers that want a more compact, self-contained solution, according to ServeTheHome, reducing the design burden associated with routing off-package memory.

  ## Why AMD abandoned HBM

  AMD's programmable logic division, inherited from its 2022 acquisition of Xilinx, has offered on-package memory in its FPGAs since Xilinx launched the Virtex UltraScale+ HBM FPGA family in 2018. Those chips carried up to 16 GB of first-generation HBM — high-bandwidth memory, a stacked memory standard designed to sit directly alongside a processor die and deliver far more data throughput than conventional DDR memory. The successor Versal HBM series of adaptive SoCs expanded that to up to 32 GB of HBM2e.

  Supplying those chips, however, depended on a narrow memory supply chain. SK Hynix was the sole manufacturer of first-generation HBM; Samsung and Micron entered with HBM2. Unlike DDR memory, which has a long demand tail driven by consumer and enterprise applications, HBM has been closely tied to leading-edge, high-performance processors — and memory manufacturers have cycled through generations quickly. HBM has passed through three major specifications in roughly nine years, ServeTheHome noted, and manufacturers have been faster to wind down older HBM variants than older DDR variants.

  That dynamic became acute when the AI computing boom drove a surge in demand for HBM across the industry. AMD's own Instinct GPU accelerators — direct competitors for the same HBM supply — consume the memory in volume. The three major memory manufacturers began shifting their HBM2e production lines to HBM3 to serve that high-margin AI market. AMD's programmable logic division, which needed HBM2e for the Versal HBM family, lost access to supply. In September 2025, AMD began the process to discontinue the Versal HBM series.

  ## A supply chain constraint AMD did not anticipate

  The longevity of AMD's programmable logic products makes the supply disruption particularly consequential. ServeTheHome noted that AMD announced earlier this year it would continue offering the standard UltraScale+ FPGA family until 2045 — a span typical of the division's product commitments. Integrating HBM onto those chips introduced a dependency on memory manufacturers' roadmaps and production decisions, compressing the viable product lifespan in a way that off-package DDR memory does not.

  AMD had expected the trade-off — accepting a shorter supply window in exchange for the integration and bandwidth advantages HBM provided — to work in the company's favor. The pace at which AI demand absorbed available HBM2e supply proved faster than that calculation assumed.

  ## Significance

  The switch to LPDDR5X means AMD's adaptive SoC customers will receive less raw memory bandwidth than HBM provided, but a more predictable supply chain and a part better suited to the division's long-product-lifecycle model. For FPGA customers building embedded or edge systems, the trade-off favors integration and availability over peak bandwidth. For AMD, it removes the division's dependence on a memory technology now dominated by AI accelerator demand.

  The announcement marks the end of HBM-equipped products in AMD's programmable logic portfolio, at least for the current generation, with the final Versal HBM orders closing on the same day the replacement family was disclosed.
body_zh: |
  ## AMD放棄HBM、改用LPDDR5X整合封裝記憶體推出Versal Premium Gen 2

  AMD正式宣布推出Versal Premium Gen 2 Memory on Package系列，這是一系列將LPDDR5X記憶體直接整合於晶片封裝之內的自適應系統單晶片（SoC）產品。此舉意味著AMD放棄了前代產品所採用的高頻寬記憶體（HBM）技術。科技媒體ServeTheHome將此形容為AMD可程式邏輯部門在封裝記憶體策略上的一次重大轉向。

  值得注意的是，AMD宣布此新系列的同一天，也正是Versal HBM晶片的最後接單截止日。

  ## 新晶片是什麼

  Versal Premium Gen 2 Memory on Package系列是AMD現有Versal Premium Gen 2晶片的延伸產品線，特色是將LPDDR5X——一種低功耗、高速度的雙倍資料傳輸率記憶體規格——直接整合於晶片封裝之上，而非配置在獨立的電路板上。根據ServeTheHome的報導，AMD的目標客群是希望取得更緊湊、更自足解決方案的現場可程式閘陣列（FPGA）與自適應SoC客戶，以減少外接封裝記憶體在電路佈線設計上的負擔。

  ## AMD為何放棄HBM

  AMD的可程式邏輯部門源自2022年收購賽靈思（Xilinx）。自賽靈思於2018年推出Virtex UltraScale+ HBM FPGA系列以來，AMD便持續在FPGA產品中提供封裝記憶體選項。那一代晶片搭載了多達16 GB的第一代HBM——亦即高頻寬記憶體，這是一種堆疊式記憶體規格，設計上緊鄰處理器晶粒放置，可提供遠優於傳統DDR記憶體的資料傳輸頻寬。後繼的Versal HBM系列自適應SoC則進一步擴充至最多32 GB的HBM2e。

  然而，供應這些晶片所需的記憶體供應鏈極為狹窄。第一代HBM的製造商僅有SK海力士一家；三星與美光直至HBM2才相繼加入。HBM與擁有龐大消費及企業需求尾巴的DDR記憶體不同，它長期與最頂端的高效能處理器緊密綁定，而記憶體製造商換代的速度也相當快。ServeTheHome指出，HBM在短短九年間已歷經三大規格世代，製造商淘汰舊款HBM的速度，遠比淘汰舊款DDR來得更快。

  當AI運算浪潮帶動全產業對HBM的需求急劇攀升後，這一動態就變得格外嚴峻。AMD自家的Instinct GPU加速器——與可程式邏輯部門競搶同一批HBM供應——就消耗了大量的HBM。三家主要記憶體製造商開始將HBM2e的產能轉移至HBM3，以服務利潤更高的AI市場。AMD可程式邏輯部門所需的HBM2e供應因此告急。2025年9月，AMD啟動了Versal HBM系列的停產程序。

  ## AMD始料未及的供應鏈困境

  AMD可程式邏輯產品的長生命週期，使得此次供應中斷的影響格外深遠。ServeTheHome指出，AMD今年早些時候曾宣布，標準UltraScale+ FPGA系列將持續供貨至2045年——這樣的產品承諾年限，在這個部門並不罕見。然而，將HBM整合至晶片封裝，等於引入了對記憶體製造商產品藍圖與產能決策的依賴，以一種外接DDR記憶體所不會有的方式，壓縮了產品的實際可用壽命。

  AMD原本預期這項取捨——以較短的供應窗口，換取HBM所帶來的整合度與頻寬優勢——對公司是划算的。然而，AI需求吸納可用HBM2e供應的速度，遠比這項計算所假設的要快得多。

  ## 這次轉變的意義

  改採LPDDR5X，意味著AMD自適應SoC的客戶將獲得低於HBM的原始記憶體頻寬，但換來的是更可預期的供應鏈，以及更符合本部門長產品生命週期模式的零件。對於打造嵌入式或邊緣系統的FPGA客戶而言，這項取捨更傾向於整合性與供貨穩定性，而非追求峰值頻寬。對AMD來說，此舉也讓本部門不再依賴一項如今被AI加速器需求所主導的記憶體技術。

  此次發布宣告了HBM搭載產品在AMD可程式邏輯產品組合中的終結——至少就現有世代而言如此。Versal HBM的最後接單截止日，與替代產品系列的發布公告，恰好落在同一天。
date: "2026-07-01"
source_published: "2026-06-30T14:00:10.000Z"
category: "compute"
secondary_categories: []
region: []
vendor: ["AMD", "Micron", "SK Hynix"]
trust:
  score: 3
  reasoning: "Single source: AMD Pivots From HBM to LPDDR5X For New Versal Premium Gen 2 Memory on Package Chips (trust 3/5)."
sources:
  - url: "https://www.servethehome.com/amd-pivots-from-hbm-to-lpddr5x-for-new-versal-premium-gen-2-memory-on-package-chips/"
    title: "AMD Pivots From HBM to LPDDR5X For New Versal Premium Gen 2 Memory on Package Chips"
    trust: 3
    type: primary
    published_at: "2026-06-30T14:00:10.000Z"
---
