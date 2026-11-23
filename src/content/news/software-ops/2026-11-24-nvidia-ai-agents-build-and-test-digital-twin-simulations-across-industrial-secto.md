---
title_en: "Nvidia AI agents build and test digital twin simulations across industrial sectors"
title_zh: "輝達AI代理跨產業建構並測試數位孿生模擬"
summary_en: "Nvidia has published a series of developer demonstrations showing AI agents using natural-language instructions to construct, inspect, and revise simulation applications across industrial digital twins, robotics, virtual reality, and autonomous vehicle testing on its Omniverse platform. Projects span partners including KONGSBERG subsidiary Falkor as well as Nvidia's own engineering and marketing teams."
summary_zh: "輝達發布一系列開發者示範專案，展示AI代理如何透過自然語言指令，在Omniverse平台上跨工業數位孿生、機器人、虛擬實境及自動駕駛測試等領域建構、檢視並修訂模擬應用程式，合作夥伴涵蓋KONGSBERG子公司Falkor，以及輝達自家工程與行銷團隊。"
body_en: |
  Nvidia has released a collection of developer projects showing AI agents directing the assembly of simulation environments through natural-language prompts, using the company's Omniverse platform libraries alongside tools including Isaac Sim, Isaac Lab, OpenUSD, Blender, Houdini, and Newton physics. The demonstrations cover industrial digital twins, robotics validation, virtual reality content, and sensor testing, and are intended to show how developers can move from a simulation concept to a working, testable application without manually scripting every scene component.

  The projects rely on agents interpreting instructions to select and place assets, configure physics and rendering engines, and check whether a simulated scene behaves as intended. Developers then iterate — adjusting object positions, materials, motion paths, or physics settings — and rerun tests within the same environment.

  ## Industrial digital twins

  The most commercially advanced example in the collection came from Falkor, a subsidiary of Norwegian defense and maritime technology group KONGSBERG. Falkor built its Falkor Surface platform around the GPT-6 Astra model and Omniverse libraries, running on Nvidia RTX PRO 6000 Server Edition GPUs hosted on Microsoft Azure. The platform converts computer-aided design and engineering data into facility-scale digital twins, allowing engineers to test work plans and inspect equipment clearances in a shared simulated view before visiting a physical site.

  A second industrial example, developed by Pradeep Kaushik from Nvidia's Omniverse Developer Relations team, was a gas-turbine what-if analysis prototype. Users adjust variables — load, ambient temperature, fuel composition — and compare the effects on power output, efficiency, fuel consumption, and equipment response. The application used scientific computing libraries Cantera and SciPy alongside Omniverse components for scene updates, rendering, and browser streaming, and presented results through 3D turbine views, charts, and virtual instruments updated in response to simulated conditions.

  ## Robotics simulation and validation

  Several projects targeted robotics, where simulation reduces the cost and risk of testing on physical hardware. Nvidia developers Dillon Bailey and Rishabh Chadha used SimReady Central — a library of pre-configured assets — to build a pick-and-place scene in Isaac Sim, Nvidia's robot simulation environment. An AI agent assembled the scene and generated the control code, and the team tested joint movement, contact behaviour, and gripper performance before changing object positions and repeating the sequence.

  In a larger-scale robotics test, AI developer Maziyar Panahi used Claude Code paired with Claude Opus 5.5 to assemble a simulated intensive care unit from 13 SimReady hospital assets, then ran Microduck robots — small wheeled platforms — through preset routes across 256 simulated wards. Because the SimReady assets arrived with Newton physics settings pre-configured, manual scene preparation was reduced. Of 768 Microduck robots deployed, 766 remained upright after 14 simulated seconds.

  Jens Jebens, Senior Product Manager for OpenUSD (Universal Scene Description, a file format and interchange standard for 3D data) at Nvidia, used the Astra model to design a car suspension in PTC Onshape and configure it in Isaac Sim, then revised the tooling iteratively based on simulation feedback until a suspension component could be removed in simulation. Oyindamola Omotuyi, Robotics Technical Marketing Manager at Nvidia, directed Astra to build a simulation for flexible cable routing and USB-C connector insertion using Isaac Lab, Newton physics, and Omniverse rendering, intending the work as a precursor to physical robot experiments.

  ## Performance benchmarks

  Bhavik Sanganee, Principal Engineer at Nvidia, used Astra to build and stress-test a warehouse simulation as scene complexity increased. When the scene doubled in size, frame rate initially fell below target. Concurrent handling of physics calculations, image rendering, and video preparation restored performance. In a two-minute test involving 80 conveyor belts, 40 robotic arms, and 800 boxes, the simulation sustained 30 frames per second at full high-definition resolution and recorded 640 successful box placements.

  Ashley Reid, who works on RTX sensor validation at Nvidia, used Astra paired with Claude Fable 5 agents to compare simulated camera and LiDAR (light detection and ranging) outputs against recorded real-world data. Over approximately three days, the agents created two digital twins from scratch and improved two existing ones by identifying and addressing missing objects, geometry errors, and material mismatches.

  ## Virtual reality and content creation

  Outside industrial and robotics applications, community developer Michael Wagner used Omniverse components to build a voice-controlled virtual reality application that lets users search and retrieve SimReady assets by voice and interact with them inside an immersive scene. Wagner built a second version using a different physics library to compare behaviour; a shaking artifact that appeared when objects were grabbed was resolved by limiting grab control updates to once per frame.

  Nick Scarcella, Senior Technical Artist on Nvidia's BondLab team, used AI agents with Houdini, CUDA GPU computing libraries, and Isaac Sim to create editable animated 3D content. In one experiment, Scarcella directed Astra to reconstruct an OP-1 portable synthesiser from product images and manuals, refining geometry across Houdini and Blender before adjusting materials and textures for final rendering. The BondLab team also created an "Echos" visualisation of robot-hand motion in which translucent hand poses overlap and merge into a single animation.

  ## Scope of the release

  The full collection extends beyond the highlighted projects. Nvidia also cited a humanoid robot warehouse simulator, an autonomous-driving test workflow set on San Francisco's Market Street, an International Space Station model streamed to a browser with live telemetry, and a pipeline for reconstructing editable building models from site scans.

  ## What it means for the industry

  The demonstrations signal a shift in how simulation workflows can be staffed and iterated. Rather than requiring engineers to script physics configurations, asset hierarchies, and rendering parameters individually, the agent-based approach lets a practitioner describe a desired environment or test condition in plain language and delegate assembly to the model. The Falkor deployment illustrates a path to commercial adoption: a third-party software vendor has already embedded this workflow into a product running on cloud infrastructure for paying customers.

  The sensor-validation use case — in which agents built and corrected digital twins over three days to match real LiDAR and camera data — points to a potential application in autonomous vehicle development, where closing the gap between simulated and real sensor behaviour is an ongoing technical and regulatory challenge.

  Nvidia said the warehouse stress-test sustained 30 frames per second at full HD with 80 conveyors and 40 arms active simultaneously, a benchmark relevant to operators evaluating whether agent-built simulations can meet the real-time performance requirements of industrial deployment planning.
body_zh: |
  輝達（Nvidia）發布了一系列開發者專案，展示AI代理如何透過自然語言提示指揮模擬環境的組裝，所使用的工具包括公司旗下Omniverse平台函式庫，以及Isaac Sim、Isaac Lab、OpenUSD、Blender、Houdini和Newton物理引擎。示範內容涵蓋工業數位孿生、機器人驗證、虛擬實境內容，以及感測器測試，旨在展示開發者如何無須手動為每個場景元件編寫腳本，即可從模擬概念邁向可運作、可測試的應用程式。合作夥伴涵蓋KONGSBERG子公司Falkor，以及輝達自家工程與行銷團隊。

  這些專案依賴代理解析指令，自動選取並擺放資產、配置物理與渲染引擎，並驗證模擬場景是否如預期運作。開發者隨後進行迭代——調整物件位置、材質、運動路徑或物理設定——並在同一環境中重新執行測試。

  ## 工業數位孿生

  此系列中商業化程度最高的案例來自Falkor，挪威國防暨海事科技集團KONGSBERG旗下子公司。Falkor以GPT-6 Astra模型與Omniverse函式庫為核心，打造其Falkor Surface平台，運行於托管在Microsoft Azure的輝達RTX PRO 6000伺服器版GPU之上。該平台能將電腦輔助設計與工程資料轉換為廠區規模的數位孿生，讓工程師在親赴現場前，可在共享的模擬視圖中測試工作計畫並檢視設備間距。

  第二個工業案例由輝達Omniverse開發者關係團隊的Pradeep Kaushik開發，是一個燃氣渦輪假設情境分析原型。使用者可調整負載、環境溫度、燃料組成等變數，比較其對發電量、效率、燃料消耗與設備響應的影響。此應用程式結合科學運算函式庫Cantera與SciPy，以及Omniverse元件負責場景更新、渲染與瀏覽器串流，並透過3D渦輪視圖、圖表及虛擬儀表呈現結果，隨模擬條件即時更新。

  ## 機器人模擬與驗證

  多個專案聚焦於機器人領域，因為模擬可大幅降低在實體硬體上測試的成本與風險。輝達開發者Dillon Bailey與Rishabh Chadha運用SimReady Central——一個預配置資產函式庫——在輝達機器人模擬環境Isaac Sim中建構了一個取放場景。AI代理組裝場景並生成控制程式碼，團隊在更換物件位置並重複測試流程前，先行測試關節運動、接觸行為與夾爪效能。

  在更大規模的機器人測試中，AI開發者Maziyar Panahi以Claude Code搭配Claude Opus 5.5，從13個SimReady醫院資產組裝出一個模擬加護病房，接著讓Microduck機器人——小型輪式平台——在256個模擬病房中沿預設路線行駛。由於SimReady資產附帶預配置的Newton物理設定，人工場景準備工作得以大幅減少。在部署的768台Microduck機器人中，經過14秒模擬後，有766台保持直立。

  輝達OpenUSD（通用場景描述，一種用於3D資料的檔案格式與交換標準）資深產品經理Jens Jebens，使用Astra模型在PTC Onshape中設計汽車懸吊系統，並在Isaac Sim中進行配置，隨後根據模擬回饋反覆修訂工具，直到懸吊元件可在模擬中被順利拆除。輝達機器人技術行銷經理Oyindamola Omotuyi則指示Astra，使用Isaac Lab、Newton物理引擎與Omniverse渲染，建構彈性電纜佈線及USB-C連接器插入的模擬，以此作為實體機器人實驗的前置研究。

  ## 效能基準測試

  輝達首席工程師Bhavik Sanganee使用Astra建構倉儲模擬，並隨場景複雜度提升進行壓力測試。當場景規模倍增時，幀率一度跌破目標值。同步處理物理計算、影像渲染與影片準備後，效能獲得恢復。在一項涉及80條輸送帶、40支機械臂與800個箱子的兩分鐘測試中，模擬以全高清解析度維持每秒30幀，並記錄640次成功的箱子放置。

  輝達RTX感測器驗證工程師Ashley Reid，以Astra搭配Claude Fable 5代理，將模擬相機與LiDAR（光達，即光學雷達測距感測器）的輸出結果與實際錄製的真實世界資料進行比對。在約三天時間內，代理從零建立兩個數位孿生，並透過識別及修正遺漏物件、幾何誤差與材質不符等問題，改善了另外兩個現有的數位孿生。

  ## 虛擬實境與內容創作

  在工業與機器人應用之外，社群開發者Michael Wagner利用Omniverse元件打造了一款語音控制虛擬實境應用程式，讓使用者可透過語音搜尋並取回SimReady資產，並在沉浸式場景中與其互動。Wagner另行建立了第二個版本，採用不同的物理函式庫以比較行為差異；抓取物件時出現的震動瑕疵，透過將抓取控制更新限制為每幀一次而獲得解決。

  輝達BondLab團隊資深技術美術Nick Scarcella，結合AI代理、Houdini、CUDA GPU運算函式庫與Isaac Sim，創作可編輯的動畫3D內容。在一項實驗中，Scarcella指示Astra根據產品圖片與說明書重建OP-1可攜式合成器，在Houdini與Blender間反覆精修幾何形狀，再調整材質與貼圖以完成最終渲染。BondLab團隊也製作了一個名為「Echos」的機械手運動視覺化作品，將半透明的手部姿態相互疊加融合，形成單一動畫。

  ## 此次發布的完整範疇

  完整系列超出上述重點專案的範圍。輝達另外提及一個人形機器人倉儲模擬器、一個設定於舊金山Market Street的自動駕駛測試工作流程、一個即時串流至瀏覽器並附有即時遙測資料的國際太空站模型，以及一條從現場掃描重建可編輯建築模型的處理管線。

  ## 對產業的意義

  這些示範預示著模擬工作流程在人員配置與迭代方式上的重大轉變。代理驅動的作法無須工程師逐一撰寫物理配置、資產層級結構與渲染參數的腳本，而是讓從業人員以自然語言描述所需環境或測試條件，將組裝工作交由模型代勞。Falkor的部署案例呈現了一條商業化落地的路徑：一家第三方軟體廠商已將此工作流程嵌入產品，在雲端基礎架構上為付費客戶提供服務。

  感測器驗證的應用案例——代理在三天內建構並修正數位孿生以比對真實LiDAR與相機資料——指向自動駕駛開發領域的潛在應用。在該領域中，縮小模擬與真實感測器行為之間的差距，始終是持續性的技術與法規挑戰。

  輝達表示，倉儲壓力測試在80條輸送帶與40支機械臂同時運作的情況下，以全高清解析度維持每秒30幀，此一基準數據對評估代理建構之模擬能否符合工業部署規劃即時效能要求的業者而言，具有重要參考價值。
date: "2026-11-24"
source_published: "2026-11-23T17:50:00.000Z"
category: "software-ops"
secondary_categories: []
region: []
vendor: ["Azure", "Nvidia"]
trust:
  score: 3
  reasoning: "Single source: Nvidia shows AI agents building digital twin simulations (trust 3/5)."
sources:
  - url: "https://datacenter.news/story/nvidia-shows-ai-agents-building-digital-twin-simulations"
    title: "Nvidia shows AI agents building digital twin simulations"
    trust: 3
    type: primary
    published_at: "2026-11-23T17:50:00.000Z"
---
