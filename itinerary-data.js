/**
 * 沖繩動態行程表 4天3夜完整資料集
 * 包含經緯度、MapCode、電話導航、停車建議與深度遊玩指南
 */

const OKINAWA_TRIP_DATA = {
  meta: {
    title: "煥然一新 • 沖繩4天3夜動態行程",
    version: "20261117-v3.0",
    dateRange: "2026/11/16 (一) ~ 2026/11/19 (四)",
    defaultRate: 0.215, // JPY to TWD 參考匯率
    emergencyContacts: [
      { label: "日本警察", tel: "110" },
      { label: "日本消防 / 急救", tel: "119" },
      { label: "台北駐日經濟文化代表處那霸分處", tel: "+81-98-862-7788", emergency: "+81-80-1798-5000" },
      { label: "Japan Visitor Hotline (中文觀光專線)", tel: "050-3816-2720" }
    ]
  },
  days: [
    {
      day: 1,
      date: "2026/11/16",
      weekday: "週一",
      title: "抵達沖繩 ＆ 奧特萊斯快攻",
      subtitle: "落地出關 • ASHIBINAA • 那霸飯店 • 傑克牛排",
      themeColor: "#0284c7",
      highlightNotice: {
        type: "warning",
        title: "17:50 班機落地出境推算 ＆ ASHIBINAA 20:00 打烊應變",
        content: "國際線出關約需 45-55 分，出境預估 18:35~18:45。強烈建議出航廈直接搭乘 Uber 或排班計程車（約 ¥2,000，車程 15 分），爭取在 19:05 前抵達 Outlet 鎖定 Vivienne 等目標快攻！"
      },
      transitSummary: {
        totalDrivingTime: "約 45 分",
        totalDistance: "約 16 km",
        mode: "計程車 ＆ 步行",
        tips: "那霸機場 ➔ Outlet ➔ 飯店短程移動，建議出航廈搭計程車爭取 Outlet 採買時間"
      },,
      waypoints: [
        {
          id: "d1-1",
          name: "那霸機場 (OKA) 國際線航廈",
          category: "交通",
          image: "thumb-airport.jpg",
          time: "17:50 降落 ~ 18:45 出關",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2064,127.6465&travelmode=driving",
          color: "#0284c7",
          icon: "✈️",
          parkingInfo: "機場立體停車場 P1-P3（計程收費）",
          tags: ["入境審查", "領行李", "VJW申報"],
          desc: "班機於 17:50 觸地。下機後備妥 Visit Japan Web (VJW) QR Code，依指標前往入國審查、海關檢驗並提領行李。",
          tips: "國際線大廳一樓有 Lawson 便利商店與外幣提款機，出大門即為計程車站牌。"
        },
        {
          id: "d1-2",
          transitFromPrev: {
            mode: "taxi",
            duration: "約 18 分",
            distance: "約 7.2 km",
            route: "經國道 331 號豐見城道路直達",
            toll: "無料",
            tips: "航廈外搭乘排班計程車或叫車，車資約 ¥2,000~2,300，最快抵達 Outlet"
          },
          name: "沖繩 ASHIBINAA Outlet",
          category: "購物",
          image: "thumb-ashibinaa.jpg",
          time: "19:05 ~ 20:00 (閉店)",
          coords: [26.1593, 127.6582],
          mapCode: "232 544 452*22",
          phone: "098-891-6000",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.1593,127.6582&travelmode=driving",
          color: "#f59e0b",
          icon: "🛍️",
          parkingInfo: "園區免費大型停車場 (約1000台)",
          tags: ["Vivienne", "Montbell", "免稅退稅"],
          desc: "沖繩唯一大型名牌暢貨中心。大件行李可寄放於 1F 諮詢中心投幣櫃。直奔 2100 區 Vivienne Westwood、Montbell 戶外裝備。",
          tips: "各櫃位 20:00 準時結帳打烊，免稅櫃台常在 19:40 湧現排隊人潮，請務必於 19:35 前完成挑選並出示護照。"
        },
        {
          id: "d1-3",
          transitFromPrev: {
            mode: "taxi",
            duration: "約 22 分",
            distance: "約 8.5 km",
            route: "沿國道 331 號往那霸市區久茂地",
            toll: "無料",
            tips: "提行李搭計程車直接進飯店辦理 Check-in（約 ¥2,500）"
          },
          name: "THE NEST 那霸 (飯店 Check-in)",
          category: "住宿",
          image: "thumb-nesthotel.jpg",
          time: "20:25 ~ 20:45",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=driving",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "高CP推薦：步行2分「ザ・パーク西町第3 (夜間最大¥400)」或「タイムズ西1丁目 (夜間最大¥500)」",
          tags: ["飯店入住", "卸行李", "周邊高CP停車", "平價過夜車位"],
          desc: "ASHIBINAA 閉店後抵達飯店辦理入住。飯店自營立體車位每晚約 ¥1,500 且有高度限制；自駕強烈推薦停放周邊走路 2 分鐘的平面收費停車場，夜間僅需 ¥400~¥500！",
          tips: "【飯店周邊超值停車攻略】：①「ザ・パーク西町第3」(西1-4-14，步2分，20:00-08:00夜間最大僅¥400，全平地超便宜首選)；②「タイムズ西1丁目/第2」(西1-14，步2分，18:00-08:00夜間最大¥500，24H上限¥1,000，支援刷卡)；③「西パーキング」(西1-3-9，步1分過馬路即達，20:00-09:00過夜¥600)。"
        },
        {
          id: "d1-4",
          transitFromPrev: {
            mode: "walk",
            duration: "約 5 分",
            distance: "約 350 m",
            route: "步行穿過久茂地西側街區",
            toll: "無料",
            tips: "距離飯店僅 350 公尺，步行即可抵達，先至門口抽號碼牌"
          },
          name: "傑克牛排館 (Jack's Steak House)",
          category: "美食",
          image: "thumb-jacksteak.jpg",
          time: "20:50 ~ 22:00",
          bookingTime: "現場排隊 (預估21:10抵達)",
          coords: [26.2163, 127.6710],
          mapCode: "33 155 087*50",
          phone: "098-868-2408",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2163,127.6710&travelmode=driving",
          color: "#f43f5e",
          icon: "🥩",
          parkingInfo: "專用停車場（約12台，用餐免費用）",
          tags: ["昭和排隊名店", "特選菲力牛排", "昭和紅綠燈", "自駕老字號"],
          desc: "創業於 1953 年的沖繩美軍統治時期懷舊牛排館。特選菲力（Tenderloin Steak）軟嫩無比、鮮嫩多汁，搭配經典白醬濃湯與昭和紅綠燈候位燈號，極具年代儀式感。",
          tips: "週一晚間 21:00 以後抵達人潮已過首輪高峰。抵達後請先至門口自動發券機抽號碼牌，依燈號叫號入座（候位約 15~25 分鐘）。",
          reservationInfo: "不可預約。全店一律採現場抽號排隊制度，無官網或電話訂位。",
          branchTip: "傑克牛排為那霸獨家歷史老字號，全沖繩【僅此一家，無任何分店】！避開 18:30~20:00 第一輪尖峰，21:00 後抵達排隊時間最短（約 15~25 分鐘）。",
          backupOptions: [
            {
              name: "Agu Pork Shabu-shabu Miruku Naha (みるく 阿古豬涮涮鍋)",
              tag: "可訂位 / 步行6分",
              desc: "Google My Maps 清單名店！主打極品阿古豬涮涮鍋，營業至 23:00。離 Nest Hotel 僅步行 6 分鐘，可提早電話/官網訂位！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Agu+Pork+Shabu-shabu+Miruku+Naha&travelmode=driving"
            },
            {
              name: "Buchi 久茂地店 (沖繩炭火燒肉居酒屋)",
              tag: "清單名店 / 步行10分",
              desc: "Google My Maps 清單名店！深夜微醺首選，提供厚切牛舌與炭火直烤和牛內臟，營業至深夜，氣氛放鬆。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Buchi+Kumoji+Naha&travelmode=driving"
            }
          ]
        },
        {
          id: "d1-5",
          transitFromPrev: {
            mode: "walk",
            duration: "約 8 分",
            distance: "約 600 m",
            route: "步行沿久茂地方向進入國際通商圈",
            toll: "無料",
            tips: "晚餐後消食散策，唐吉訶德24小時營業"
          },
          name: "首夜待定漫步 (國際通唐吉訶德 / 居酒屋)",
          category: "放鬆",
          image: "thumb-kokusaidori-night.jpg",
          time: "22:00 ~ 23:30",
          coords: [26.2155, 127.6853],
          mapCode: "33 157 382*41",
          phone: "098-951-2311",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2155,127.6853&travelmode=driving",
          color: "#a855f7",
          icon: "🌙",
          parkingInfo: "周邊收費停車場（夜間最高收費約 ¥600~¥800）",
          tags: ["24小時採買", "Orion生啤", "波上海灘海風"],
          desc: "吃完牛排後自由放鬆：可至國際通唐吉訶德 24H 補齊零食藥妝，或至久茂地居酒屋來杯 Orion 生啤配島豆腐。",
          tips: "夜間微風涼爽，步行回飯店僅需 10 分鐘，輕鬆無壓力。"
        }
      ]
    },
    {
      day: 2,
      date: "2026/11/17",
      weekday: "週二",
      title: "中北部奔馳 ＆ 跑車海岸極致巡禮",
      subtitle: "波上宮 • 道の駅許田 • 古宇利大橋 • 水族館 • 萬座毛夕陽 • A&W • BLUE SEAL • PARCO CITY UTme!",
      themeColor: "#059669",
      highlightNotice: {
        type: "info",
        title: "自駕長途日：09:30取車、許田休息站、鯨鯊餵食秀、萬座毛夕陽、BLUE SEAL ＆ PARCO UTme!",
        content: "租車時程自 11/17 09:30 至 11/18 19:30（整整 34 小時！）。10:55 於第一名「許田休息站」品嚐現炸三矢沙翁、11:40 馳騁古宇利藍大橋、14:45 直擊水族館 15:00 鯨鯊餵食秀、17:40 捕捉萬座毛夕陽。晚間接連造訪 A&W 與 BLUE SEAL 牧港旗艦雙名店，並於 PARCO CITY 預留 75 分鐘現場客製 UTme! 專屬紀念 T 恤！"
      },
      transitSummary: {
        totalDrivingTime: "約 3.5 小時",
        totalDistance: "約 170 km",
        mode: "自駕 (ETC 高速＋國道58)",
        tips: "全日自駕核心！西原 IC ➔ 許田 IC 高速路段 (ETC ¥1,040)，北上名護、古宇利、美ら海與萬座毛"
      },,
      waypoints: [
        {
          id: "d2-1",
          name: "波上宮 (琉球八社之首) ＆ 波上海灘",
          category: "景點",
          period: "晨間出發",
          image: "thumb-naminoue.jpg",
          time: "08:00 ~ 08:40",
          coords: [26.2207, 127.6713],
          mapCode: "33 185 022*41",
          phone: "098-868-3697",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2207,127.6713&travelmode=driving",
          color: "#8b5cf6",
          icon: "⛩️",
          parkingInfo: "波上宮境內免費小型停車場 / 若狹海濱付費停車場",
          tags: ["清晨參拜", "懸崖神社", "小書包御守", "波上海灘"],
          desc: "早晨 08:00 人潮稀少寧靜，坐落於珊瑚礁峭壁上的琉球總鎮守。參拜祈求自駕行車平安，並求取超人氣小書包交通御守，順道漫步至海灘吹拂晨風。",
          tips: "早晨空氣清新且參道無人，是拍攝紅色鳥居與無人懸崖的黃金時刻。"
        },
        {
          id: "d2-2",
          transitFromPrev: {
            mode: "walk",
            duration: "約 4 分",
            distance: "約 280 m",
            route: "沿若狹大通向南步行",
            toll: "無料",
            tips: "若狹靜巷步行外帶晨光手沖咖啡"
          },
          name: "TURNER COFFEE (若狹晨光外帶咖啡)",
          category: "美食",
          period: "晨間出發",
          image: "thumb-turner.jpg",
          time: "08:40 ~ 09:05",
          coords: [26.2198, 127.6725],
          mapCode: "33 185 053*44",
          phone: "098-861-5511",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2198,127.6725&travelmode=driving",
          color: "#f59e0b",
          icon: "☕",
          parkingInfo: "步行即達（自波上宮步行僅 2 分鐘）",
          tags: ["精品手沖", "冰滴咖啡", "晨光提神"],
          desc: "緊鄰波上宮步行 2 分鐘的精緻質感外帶咖啡館。出發長途自駕前，外帶一杯香醇冰滴咖啡或手沖拿鐵，喚醒整天精神！",
          tips: "步行至此點咖啡外帶，隨後前往租車站點（計程車約 12 分鐘至赤嶺）。"
        },
        {
          id: "d2-3",
          transitFromPrev: {
            mode: "monorail",
            duration: "約 20 分",
            distance: "約 5.2 km",
            route: "單軌旭橋站 → 赤嶺站步行 2 分",
            toll: "單軌車票 ¥270",
            tips: "準時 09:30 前往赤嶺取車，出示台灣駕照日文譯本與正本"
          },
          name: "Heat Sports Car Rental (赤嶺取車點檢)",
          category: "交通",
          period: "晨間出發",
          image: "thumb-heatsports.jpg",
          time: "09:30 ~ 09:55",
          coords: [26.1928, 127.6603],
          mapCode: "33 064 748*88",
          phone: "098-857-0819",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.1928,127.6603&travelmode=driving",
          color: "#dc2626",
          icon: "🏎️",
          parkingInfo: "租車站出發（赤嶺站旁步行 5 分鐘）",
          tags: ["跑車租賃", "租期至11/18 19:30", "外觀檢查", "ETC插卡", "敞篷操作"],
          desc: "沖繩專業特色跑車與敞篷車租賃。租車時程自 11/17 09:30 至 11/18 19:30（租滿 34 小時！）。辦理交車手續、檢查全車刮痕拍照錄影、確認油種（Regular紅色油槍）與敞篷開關操作，準備向北狂飆！",
          tips: "務必出示：台灣駕照正本 + 監理所日文譯本 + 護照！09:55 準時出發上快速道路接沖繩高速公路。"
        },
        {
          id: "d2-4",
          transitFromPrev: {
            mode: "car",
            duration: "約 55 分",
            distance: "約 68 km",
            route: "沖繩自動車道：西原 IC → 許田 IC",
            toll: "ETC ¥1,040",
            tips: "自駕正式啟程！走高速公路直奔名護，進休息站買三矢沙翁"
          },
          name: "道の駅 許田 (名護海景休息站 ＆ 三矢本舖沙翁)",
          category: "美食",
          period: "古宇利跳島",
          image: "thumb-kyoda.jpg",
          time: "10:55 ~ 11:20",
          coords: [26.5414, 127.9682],
          mapCode: "206 476 706*66",
          phone: "098-054-0880",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.5414,127.9682&travelmode=driving",
          color: "#10b981",
          icon: "🏪",
          parkingInfo: "休息站專屬超大型免費停車場 (約 150 台)",
          tags: ["日本第一休息站", "三矢本舖開口笑", "三矢球", "水族館優惠票", "海景天橋"],
          desc: "全日本公路休息站冠軍！沖繩高速公路終點許田交流道必經地標。必吃「三矢本舖」現炸黑糖開口笑沙翁與每日限量 QQ 三矢球，走上海景天橋眺望名護灣，並可在服務台購入最划算的水族館特惠門票！",
          tips: "停留約 25 分鐘。下車上洗手間、伸展筋骨，買熱騰騰開口笑當自駕點心，若需水族館實體折扣票可在此順手購入。",
          reservationInfo: "休息站開放式美食街與伴手禮專櫃，無須訂位。",
          branchTip: "三矢本舖在恩納村另有總店，但許田店位於高速公路出口必經路線，最順路免繞道。",
          backupOptions: [
            {
              name: "伊芸服務區 (Igei Service Area 下行)",
              tag: "高速公路中途",
              desc: "若許田休息站車位客滿，高速公路中途的伊芸 SA 亦有海景展望台、沖繩蕎麥麵與藍海霜淇淋。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Igei+Service+Area+Down&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-5",
          transitFromPrev: {
            mode: "car",
            duration: "約 35 分",
            distance: "約 25 km",
            route: "國道 58 號 → 屋我地島 → 縣道 110 號",
            toll: "無料",
            tips: "兩側碧藍海天一線，過橋前南端有觀景展望台"
          },
          name: "古宇利大橋 (海上馳騁 ＆ 翡翠藍海)",
          category: "景點",
          period: "古宇利跳島",
          image: "thumb-kouri.jpg",
          time: "11:40 ~ 11:55",
          coords: [26.6967, 128.0242],
          mapCode: "485 693 485*03",
          phone: "098-056-1242",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6967,128.0242&travelmode=driving",
          color: "#0284c7",
          icon: "🌉",
          parkingInfo: "橋南端南詰觀景停車場 (免費) / 古宇利島側海灘停車場",
          tags: ["跨海長橋", "古宇利藍", "海上馳騁", "跑車打卡"],
          desc: "從許田沿 Route 58 接屋我地島來到全長 1,960 公尺的古宇利跨海大橋。開敞篷跑車奔馳在透明漸層古宇利藍海面上，無比震撼！",
          tips: "過橋前可在南詰停車場短暫停車，以跨海長橋與跑車為背景拍下經典紀念照。"
        },
        {
          id: "d2-6",
          transitFromPrev: {
            mode: "car",
            duration: "約 3 分",
            distance: "約 1.2 km",
            route: "古宇利大橋北端上山坡",
            toll: "無料",
            tips: "島上人氣最高排隊美食，店附免費停車場"
          },
          name: "古宇利蝦蝦飯 (KOURI SHRIMP)",
          category: "美食",
          period: "古宇利跳島",
          image: "thumb-kourishrimp.jpg",
          time: "11:55 ~ 12:35",
          bookingTime: "現場排隊 (11:55抵達搶頭香)",
          coords: [26.7022, 128.0233],
          mapCode: "485 692 126*55",
          phone: "098-056-1242",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.7022,128.0233&travelmode=driving",
          color: "#ea580c",
          icon: "🍤",
          parkingInfo: "店內專屬停車場 (約 30 台)",
          tags: ["大蒜檸檬蝦", "海景露台", "夏威夷風", "人氣必吃"],
          desc: "過橋後山坡上的名物蝦蝦飯。飽滿 Q 彈大蝦裹上濃郁大蒜奶油與新鮮檸檬汁，搭配白飯與薯角，在頂樓露台吹海風俯瞰古宇利大橋用餐。",
          tips: "支援觸控螢幕自助點餐機（可刷卡/現金）。份量剛好不會過飽，為下一站阿古豬料理保留完美食慾！",
          reservationInfo: "不可預約。全店採現場觸控螢幕自助點餐機，取得號碼單後於露台等候叫號取餐。",
          branchTip: "全沖繩【僅此古宇利島一家總店，無其他分店】！排隊避雷指南：11:55 前抵達點餐最順暢，能完全避開 12:30~13:30 大排長龍的人潮。",
          backupOptions: [
            {
              name: "5910 sa-ta-cafe (古宇利沙翁咖啡)",
              tag: "清單名店 / 開車2分",
              desc: "Google My Maps 清單名店！心形岩旁人氣小店，提供現烤沙翁、塔可飯與冷萃咖啡，環境清幽免排隊。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=5910+sa-ta-cafe+Kouri&travelmode=driving"
            },
            {
              name: "錦屋 (にしきや 古宇利海鮮食堂)",
              tag: "跨海大橋旁",
              desc: "大橋南詰老牌海鮮定食，提供鮮甜海膽丼、海葡萄蓋飯與沖繩麵，翻桌速度快。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Nishikiya+Kouri&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-7",
          transitFromPrev: {
            mode: "car",
            duration: "約 6 分",
            distance: "約 2.8 km",
            route: "古宇利環島公路至北側 Tinu 浜",
            toll: "停車 ¥100~300",
            tips: "退潮時心形岩石最清晰，步道多珊瑚礁石建議穿好走便鞋"
          },
          name: "古宇利島ハート岩 (心形岩 ＆ 恋守寺社)",
          category: "景點",
          period: "古宇利跳島",
          image: "thumb-heartrock.jpg",
          time: "12:40 ~ 13:15",
          coords: [26.7126, 128.0287],
          mapCode: "485 751 179*22",
          phone: "098-056-2256",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.7126,128.0287&travelmode=driving",
          color: "#ec4899",
          icon: "💖",
          parkingInfo: "心形岩入口處民營停車場 (計次約 ¥100~¥300)",
          tags: ["嵐廣告聖地", "天然心形礁石", "Tinu海灘", "戀愛守護寺社"],
          desc: "位於古宇利島北端 Tinu Beach 的天然雙心奇岩，日本天團「嵐」在此拍攝 JAL 廣告而爆紅。沿著小徑走向海灘，並造訪恋守寺社打卡祈求幸福美滿。",
          tips: "前往沙灘的小石坡路稍微傾斜，建議換穿好走的平底鞋或涼鞋；停留約 35 分鐘後驅車啟程。"
        },
        {
          id: "d2-8",
          transitFromPrev: {
            mode: "car",
            duration: "約 25 分",
            distance: "約 17 km",
            route: "縣道 72 號 → 名護山間聚落",
            toll: "無料",
            tips: "百年古民家森林庭園，享用阿古豬火鍋午餐"
          },
          name: "百年古家 大家 阿古豬 (百年琉球古民家)",
          category: "美食",
          period: "美麗海水族館",
          image: "thumb-ufuya.jpg",
          time: "13:30 ~ 14:20",
          bookingTime: "現場抽號 (13:35已過用餐高峰)",
          coords: [26.6234, 127.9715],
          mapCode: "206 745 056*66",
          phone: "098-053-0280",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6234,127.9715&travelmode=driving",
          color: "#b45309",
          icon: "🥢",
          parkingInfo: "專用超大型免費停車場 (含電動高爾夫球接駁車)",
          tags: ["阿古豬肉麵", "百年古民家", "森林流水庭園", "人氣泡芙"],
          desc: "名護山林間由百年安里家古民宅修復而成的名店。伴著庭院潺潺流水聲，品嚐極致鮮美的阿古豬（Agu）沖繩蕎麥麵與特製泡芙，意境悠遠迷人。",
          tips: "從古宇利開車約 25 分鐘。平日下午 13:30 已過最巔峰午餐人潮，入座較快。午餐供應至 15:00。",
          reservationInfo: "午餐時段（11:00~16:00）僅限現場門口抽號碼牌候位（午餐不開放預約）；晚餐時段（18:00起）可提早透過官方網站 TableCheck 系統線上訂位。",
          branchTip: "大家全沖繩【僅此名護山林總店，無任何市區分店】！全店座位超過 200 席，13:35 抵達人潮已疏解，等候時間通常在 10~15 分鐘以內。",
          backupOptions: [
            {
              name: "幸ちゃんそば (Satchan Soba)",
              tag: "清單名店 / 開車12分",
              desc: "Google My Maps 清單名店！名護在地排隊老店，特製伊平屋島水雲沖繩麵與軟嫩軟骨肉，湯頭甘醇清爽。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Satchan+Soba+Nago&travelmode=driving"
            },
            {
              name: "元祖海葡萄總店 (萬座毛旁)",
              tag: "清單名店 / 順路往南",
              desc: "Google My Maps 清單名店！若在名護節省時間直接往南，可在萬座毛旁品嚐元祖海葡萄阿古豬蓋飯。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ganso+Umibudo+Honten&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-9",
          transitFromPrev: {
            mode: "car",
            duration: "約 28 分",
            distance: "約 18 km",
            route: "國道 449 號 → 海洋博公園 P7 立體停車場",
            toll: "公園停車無料",
            tips: "導航 P7 北停車場，離水族館入口最近，直奔 15:00 鯨鯊餵食秀"
          },
          name: "沖繩美麗海水族館 (直擊 15:00 鯨鯊餵食秀)",
          category: "景點",
          period: "美麗海水族館",
          image: "thumb-churaumi.jpg",
          time: "14:45 ~ 16:15",
          coords: [26.6943, 127.8779],
          mapCode: "553 075 797*77",
          phone: "098-048-3748",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6943,127.8779&travelmode=driving",
          color: "#0284c7",
          icon: "🐋",
          parkingInfo: "導航至「P7北停車場 (立體停車場)」(離水族館最近且遮陽防曬)",
          tags: ["15:00鯨鯊餵食", "黑潮之海", "鬼蝠魟", "海洋博公園"],
          desc: "從大家驅車 25 分鐘抵達。世界級水族館，正好完美趕上 15:00 最震撼的「鯨鯊垂直站立進食秀」！看長達 8 米的巨型鯨鯊仰頭吸入海水，極具魄力。",
          tips: "入館直奔「黑潮之海」大水槽卡位看 15:00 餵食解說，隨後漫步深海區與紀念品專賣店。"
        },
        {
          id: "d2-10",
          transitFromPrev: {
            mode: "car",
            duration: "約 8 分",
            distance: "約 3.5 km",
            route: "海洋博公園往本部港方向 Hanasaki Marche",
            toll: "園區免費停車",
            tips: "2樓戶外木平台遠眺瀨底島，稍作休憩喝咖啡"
          },
          name: "星巴克 沖繩本部町店 (Hanasaki Marche 海景門市)",
          category: "美食",
          period: "西岸夕陽",
          image: "thumb-starbucks.jpg",
          time: "16:20 ~ 16:50",
          coords: [26.6853, 127.8847],
          mapCode: "553 046 422*00",
          phone: "098-043-9865",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6853,127.8847&travelmode=driving",
          color: "#059669",
          icon: "☕",
          parkingInfo: "Ala Mahaina / Hanasaki Marche 商場大型免費停車場",
          tags: ["沖繩最美星巴克", "海景露台", "木質琉球建材", "瀨底島遠眺"],
          desc: "距離水族館僅 3 分鐘車程！座落於 Hanasaki Marche 複合園區，採用沖繩在地琉球石灰岩與杉木建造。戶外露台遠眺瀨底島海峽，喝杯咖啡放鬆小憩。",
          tips: "點杯沖繩限定飲品或抹茶星冰樂，在二樓戶外木平台吹風打卡，身心徹底充飽電。"
        },
        {
          id: "d2-11",
          transitFromPrev: {
            mode: "car",
            duration: "約 60 分",
            distance: "約 46 km",
            route: "沿國道 58 號南下恩納村海岬",
            toll: "門票 ¥100 / 停車無料",
            tips: "傍晚日落時段象鼻岩與東海夕照最美"
          },
          name: "萬座毛海岸絕景 (落日象鼻岩黃金海岸)",
          category: "景點",
          period: "西岸夕陽",
          image: "thumb-manzamo.jpg",
          time: "17:40 ~ 18:25",
          coords: [26.5049, 127.8502],
          mapCode: "206 312 038*55",
          phone: "098-966-8086",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.5049,127.8502&travelmode=driving",
          color: "#e11d48",
          icon: "🌅",
          parkingInfo: "萬座毛遊客中心專用大型免費停車場 (約 300 台)",
          tags: ["落日象鼻岩", "金色黃昏", "琉球石灰岩", "海蝕懸崖"],
          desc: "從本部南下車程約 50 分鐘，抵達時間正好是 17:40 沖繩日落黃金時刻！夕陽餘暉灑在壯麗的象鼻海蝕洞與碧海之上，金色霞光令人嘆為觀止。",
          tips: "參觀步道門票每人 ¥100。日落後可在全新遊客中心購買特色伴手禮或上洗手間，準備返程往南。"
        },
        {
          id: "d2-12",
          transitFromPrev: {
            mode: "car",
            duration: "約 45 分",
            distance: "約 36 km",
            route: "國道 58 號南下至浦添牧港",
            toll: "無料",
            tips: "沖繩歷史最悠久復古美式 Drive-in 漢堡名店"
          },
          name: "A&W 牧港旗艦店 (Makiminato 復古美式漢堡)",
          category: "美食",
          period: "晚間返程",
          image: "thumb-aw.jpg",
          time: "19:10 ~ 19:45",
          bookingTime: "現場點餐 (19:10抵達免排隊)",
          coords: [26.2625, 127.7144],
          mapCode: "33 342 546*22",
          phone: "098-876-6081",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2625,127.7144&travelmode=driving",
          color: "#b45309",
          icon: "🍔",
          parkingInfo: "店前專用 Drive-in 美式停車場 (約 50 台，免費)",
          tags: ["50年代復古", "麥根沙士", "莫札瑞拉漢堡", "霓虹燈草坪"],
          desc: "從恩納村走高速公路南下西原IC至牧港，約 45 分鐘。沖繩歷史最悠久的 A&W 旗艦店，夜晚巨大的霓虹招牌、美式得來速雨棚與草坪小噴泉宛如置身 60 年代加州。",
          tips: "必點 The A&W 漢堡配炸洋蔥圈、金黃捲捲薯條（Curly Fries），以及裝在冰鎮厚玻璃杯中的麥根沙士（Root Beer，內用可免費續杯）！",
          reservationInfo: "速食餐廳無預約制度。採店內櫃台排隊或戶外美式 Drive-in 車道點餐。",
          branchTip: "【首選牧港店，避開國際通店】：國際通分店室內狹小、排隊長達 30 人以上且無停車位；牧港店是全沖繩唯一擁有『50年代復古霓虹燈草坪＋得來速大雨棚』的旗艦總店，座位極多且附設 50 台免費車位，出餐超快完全不塞車！",
          backupOptions: [
            {
              name: "暖暮拉麵 牧港店",
              tag: "國道58號旁 / 開車2分",
              desc: "九州拉麵冠軍，牧港店附專屬停車場，比起國際通排隊 1 小時的分店，牧港店等候時間短得多。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Danbo+Ramen+Makiminato&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-13",
          transitFromPrev: {
            mode: "car",
            duration: "約 2 分",
            distance: "約 650 m",
            route: "國道 58 號對向 (浦添牧港)",
            toll: "無料",
            tips: "牧港本店霓虹燈招牌夜景超好拍，品嚐鹽金楚糕冰淇淋"
          },
          name: "BLUE SEAL 牧港本店 (Ice Park 美式冰淇淋旗艦)",
          category: "美食",
          period: "晚間返程",
          image: "thumb-blueseal.jpg",
          time: "19:50 ~ 20:25",
          bookingTime: "現場排隊 (多櫃台流動極快)",
          coords: [26.2673, 127.7214],
          mapCode: "33 342 635*44",
          phone: "098-877-5241",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2673,127.7214&travelmode=driving",
          color: "#06b6d4",
          icon: "🍨",
          parkingInfo: "門市前專用免費停車場 (約 40 台)",
          tags: ["美式復古霓虹燈", "順路僅2分鐘", "鹽金楚糕冰淇淋", "紅芋甜筒", "打卡地標"],
          desc: "自 A&W 出發沿 58 號公路北向僅 2 分鐘車程（約 650 公尺）即達！創立於 1963 年的 BLUE SEAL 全沖繩發祥旗艦本店。夜間巨型美式復古霓虹招牌與繽紛燈海耀眼奪目，是沖繩自駕夜間必拍地標！",
          tips: "必吃推薦：「沖繩鹽金楚糕（塩ちんすこう）」與「紅芋」雙球甜筒，還有香檸雪酪。店旁附設 Ice Park 歷史展示，門口霓虹燈下拿著冰淇淋與跑車合照極具氛圍。",
          reservationInfo: "一般外帶/內用無須訂位。若欲參加 Ice Park 冰淇淋 DIY 體驗工作坊，需提前 1 個月於官網預約。",
          branchTip: "【首選牧港本店】：國際通與各大商場分店人潮擁擠，牧港本店設有多個獨立結帳櫃台與專用大型停車場，出餐速度極快。",
          backupOptions: [
            {
              name: "BLUE SEAL 浦添 PARCO CITY 店",
              tag: "商場2F順路",
              desc: "若牧港外帶人潮稍多，可直接在下一站 PARCO CITY 館內 2F 門市購買邊逛邊吃。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Blue+Seal+PARCO+CITY&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-14",
          transitFromPrev: {
            mode: "car",
            duration: "約 10 分",
            distance: "約 4.8 km",
            route: "西海岸道路向西至 PARCO CITY",
            toll: "商場免費停車 (4000台)",
            tips: "全沖繩最大店！營業至 22:00，UTme! 印製約需 40~60 分"
          },
          name: "UNIQLO 沖繩浦添 PARCO CITY 店 (UTme! 客製化 T 恤 ＆ 夜間免稅)",
          category: "購物",
          period: "晚間返程",
          image: "thumb-parcocity.jpg",
          time: "20:35 ~ 21:50",
          coords: [26.2618, 127.6975],
          mapCode: "33 339 054*88",
          phone: "098-871-1120",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2618,127.6975&travelmode=driving",
          color: "#dc2626",
          icon: "🛍️",
          parkingInfo: "PARCO CITY 超大型室內立體免費停車場 (約 4000 台)",
          tags: ["預留75分鐘", "UTme現場客製T恤", "Orion啤酒聯名", "全沖繩最大旗艦", "22點打烊前免稅"],
          desc: "自 BLUE SEAL 沿臨海道路開車僅 8 分鐘即達西海岸 PARCO CITY。此處擁有全沖繩唯二且設備最齊全的【UTme! 客製化工坊】，足足預留 1 小時 15 分鐘，讓您親自設計印製獨一無二的沖繩專屬紀念 T 恤！",
          tips: "【UTme! 客製化 T 恤極速攻略】：① 一進店直奔 2F UTme! 機台平板設計排版（因現場印製約需 20 分鐘，且店方通常於 21:15 截止當日收單！）；② 圖庫內建沖繩限定素材：風獅爺、Orion 啤酒授權標誌、沖繩苦瓜等，可自由加入字樣；③ 送印拿號碼牌後，利用空檔採買沖繩限定 UT 與免稅商品；④ 21:40 取件並出示護照統一辦理免稅結帳！"
        },
        {
          id: "d2-15",
          transitFromPrev: {
            mode: "car",
            duration: "約 18 分",
            distance: "約 8.5 km",
            route: "經西海岸道路南下進入那霸市區",
            toll: "無料",
            tips: "車停周邊收費停車場（夜間最大 ¥400~¥500）"
          },
          name: "返抵那霸飯店休息 ＆ 戰利品整理",
          category: "住宿",
          period: "晚間返程",
          image: "thumb-nesthotel.jpg",
          time: "22:05 ~ 22:30",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=driving",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "高CP首選：步行2分「ザ・パーク西町第3 (夜間最大¥400)」或「タイムズ西1丁目 (夜間¥500)」",
          tags: ["夜間返程", "西海岸快速道路", "戰利品清點", "周邊平價停車", "明日19:30前還車"],
          desc: "從 PARCO CITY 沿西海岸快速道路直通飯店（夜間無車僅需 15 分鐘）。跑車直接停放飯店旁步行 2 分鐘的露天平價停車場，全平地免卡底盤，安全又省錢。明天可一路自駕至 19:30 還車！",
          tips: "【今晚跑車停車推薦】：首推「ザ・パーク西町第3」(那霸市西1-4-14，夜間20:00-08:00僅¥400，全平地免卡底盤)；若客滿可停「タイムズ西1丁目」(西1-14，夜間18:00-08:00僅¥500，支援悠遊信用卡)。比飯店 ¥1,500 省下一大半！"
        }
      ]
    },
    {
      day: 3,
      date: "2026/11/18",
      weekday: "週三",
      title: "琉球首里古韻 ＆ 海中道路跨海奔馳 • 美國村日落夜景",
      subtitle: "壺屋麥當勞早餐 • 首里城 • 達摩寺 • 海中道路跨海 • 濱比嘉島午餐 • 美國村Hanon鬆餅 • 日落海灘點燈 • 赤嶺還車 • 琉球的牛和牛燒肉",
      themeColor: "#8b5cf6",
      highlightNotice: {
        type: "warning",
        title: "還車提醒：19:30 前赤嶺門市還車 ＆ 18:15 前自美國村啟程南下",
        content: "本日為自駕最後一日（租期至 19:30）。上午探索首里城與達摩寺祈願，中午駛上海天一色的海中道路；下午漫步北谷美國村、品嚐 Hanon 舒芙蕾海景鬆餅並欣賞日落海灘金色霞光與異國點燈！請務必於 18:15 啟程南下，加滿油後於 19:30 前在赤嶺門市交車，隨後搭單軌前往久茂地享用頂級「琉球的牛」黑毛和牛慶功宴！"
      },
      transitSummary: {
        totalDrivingTime: "約 2.5 小時",
        totalDistance: "約 85 km",
        mode: "自駕 (19:30前還車) ＋ 單軌",
        tips: "橫跨東岸海中道路與西岸北谷美國村落日煙火，19:30 赤嶺門市還車後轉單軌至久茂地燒肉"
      },,
      waypoints: [
        {
          id: "d3-1",
          name: "麥當勞 姬百合通壺屋店 (早晨元氣滿福堡)",
          category: "美食",
          period: "晨間出發",
          time: "08:30 ~ 09:20",
          bookingTime: "現場點餐 / App手機預訂",
          coords: [26.2109, 127.6934],
          mapCode: "33 158 202*44",
          phone: "098-833-2882",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2109,127.6934&travelmode=driving",
          color: "#f59e0b",
          icon: "🍔",
          parkingInfo: "門市專用免費停車場 (約 25 台，附設得來速)",
          tags: ["日本限定早餐", "鬆餅滿福堡", "得來速專用", "出發首里城前哨"],
          desc: "自 Nest Hotel 出發開車僅 8 分鐘。寬敞明亮的美式速食門市，附設免卡底盤的平地專用停車場。出發前在此享用熱騰騰早餐與香濃咖啡，充滿元氣！",
          tips: "推薦品嚐日本麥當勞早餐招牌「厚鬆餅豬肉蛋滿福堡 (McGriddles)」，鹹甜交織楓糖鬆餅皮極具特色；亦可走得來速車道快速取餐。",
          reservationInfo: "不可訂位。但可使用日本 McDonald's App 手機點餐 (Mobile Order) 預先線上付款，到店直接取餐或外帶！",
          branchTip: "【首選壺屋店，避開國際通店】：國際通麥當勞無附設停車場且觀光客繁雜；壺屋店離 Nest Hotel 開車僅 8 分鐘，附設 25 台全平面免費停車場與雙線得來速，自駕最順暢。",
          backupOptions: [
            {
              name: "Pork Tamago Onigiri (Potama 豬肉蛋飯糰 牧志市場本店)",
              tag: "清單名店 / 開車6分",
              desc: "Google My Maps 清單名店！沖繩最知名早餐飯糰，提供炸蝦塔塔與明太子厚蛋，推薦使用官方 FastPick App 提早線上下單外帶免排隊。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Pork+Tamago+Onigiri+Makishi+Market&travelmode=driving"
            },
            {
              name: "鳥與卵專門店 鳥玉 泉崎店",
              tag: "清單名店 / 開車4分",
              desc: "Google My Maps 清單名店！主打超嫩厚玉子燒、黃金親子丼與炸雞定食，早午餐營養滿分。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Toritama+Izumizaki+Naha&travelmode=driving"
            }
          ]
        },
        {
          id: "d3-2",
          transitFromPrev: {
            mode: "car",
            duration: "約 15 分",
            distance: "約 3.8 km",
            route: "經縣道 29 號上山至首里杜館地下停車場",
            toll: "停車 ¥320",
            tips: "首里杜館地下停車場直通遊客中心與守禮門"
          },
          name: "首里城公園 (守禮門 ＆ 2026正殿木造復興見學)",
          category: "景點",
          period: "晨間出發",
          image: "thumb-shuri.jpg",
          time: "09:35 ~ 10:45",
          coords: [26.2170, 127.7195],
          mapCode: "33 161 526*71",
          phone: "098-886-2020",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2170,127.7195&travelmode=driving",
          color: "#dc2626",
          icon: "🏯",
          parkingInfo: "首里城公園地下收費停車場 (2小時以內 ¥320，平整好停)",
          tags: ["守禮之邦", "歡會門", "正殿復興見學", "琉球王國世界遺產"],
          desc: "自壺屋開車約 12 分鐘。代表琉球王朝輝煌歷史的世界遺產。穿過經典紅瓦「守禮門」與「歡會門」，2026 年底正殿木造重建工程已進入最後階段，可登上透明見學通道，親眼見證日本頂尖匠師復原金箔琉球龍柱的歷史現場！",
          tips: "外圍免費參觀守禮門、歡會門與園比屋武御嶽石門；正殿施工見學區門票每人 ¥400，極具歷史紀念價值。"
        },
        {
          id: "d3-3",
          transitFromPrev: {
            mode: "car",
            duration: "約 4 分",
            distance: "約 850 m",
            route: "首里城北側赤田町巷道",
            toll: "境內免費停車",
            tips: "路程極近，境內附設參拜車位，體驗達摩不倒翁開運祈願"
          },
          name: "西來院 達磨寺 (祈願開運不倒翁 ＆ 交通安產祈福)",
          category: "景點",
          period: "晨間出發",
          image: "thumb-daruma.jpg",
          time: "10:50 ~ 11:25",
          coords: [26.2177, 127.7226],
          mapCode: "33 162 478*22",
          phone: "098-884-1077",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2177,127.7226&travelmode=driving",
          color: "#8b5cf6",
          icon: "⛩️",
          parkingInfo: "寺廟山門旁小型免費停車場 (約 6 台)",
          tags: ["達摩不倒翁", "合格祈願", "健康長壽", "首里靜謐古剎"],
          desc: "緊鄰首里城北側，開車僅 3 分鐘。沖繩極富盛名的臨濟宗古剎，境內整齊陳列著數以百計身披紅袍、寫滿願望的開運達摩不倒翁（Daruma），古木參天清幽寧靜。",
          tips: "可求取經典紅色迷你達摩（¥500~¥1,000），點上左眼許下願望，待願望成真再畫上右眼；寺內御守亦非常精緻。"
        },
        {
          id: "d3-4",
          transitFromPrev: {
            mode: "car",
            duration: "約 50 分",
            distance: "約 32 km",
            route: "沖繩自動車道：西原 IC → 沖繩北 IC 轉縣道 10 號",
            toll: "ETC ¥360",
            tips: "4.7 公里海上公路，兩側碧藍太平洋絕景"
          },
          name: "宇流麻市海中道路 (海上長虹 ＆ 太平洋跨海兜風)",
          category: "景點",
          period: "海中跳島",
          image: "thumb-kaichu.jpg",
          time: "12:05 ~ 12:25",
          coords: [26.3320, 127.9254],
          mapCode: "499 576 380*44",
          phone: "098-978-0077",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3320,127.9254&travelmode=driving",
          color: "#0284c7",
          icon: "🌊",
          parkingInfo: "道路中段「海の駅 あやはし館」大型免費停車場",
          tags: ["全長4.75公里", "淺灘海中公路", "跑車兜風打卡", "翡翠漸層綠海"],
          desc: "自首里走那霸IC接沖繩高速公路北上至沖繩北IC，約 40 分鐘抵達。全長 4.75 公里、銜接與勝半島與平安座島的東海岸奇蹟跨海公路！行駛其上兩側海水清澈見底，開敞篷宛如在海面上滑翔。",
          tips: "過大橋時開慢車速，欣賞兩側金黃淺灘與深藍漸層。中央天橋與海堤是拍攝跑車與大橋的經典機位。"
        },
        {
          id: "d3-5",
          transitFromPrev: {
            mode: "car",
            duration: "約 8 分",
            distance: "約 4.5 km",
            route: "經濱比嘉大橋進入神之島比嘉聚落",
            toll: "無料",
            tips: "神之島百年古民家食堂，享用沖繩傳統定食"
          },
          name: "濱比嘉島 てぃーらぶい (Tirabui 百年古民家食堂)",
          category: "美食",
          period: "海中跳島",
          time: "12:30 ~ 13:25",
          bookingTime: "建議電話預約 12:30",
          coords: [26.3195, 127.9575],
          mapCode: "499 519 559*55",
          phone: "098-977-7688",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3195,127.9575&travelmode=driving",
          color: "#10b981",
          icon: "🍱",
          parkingInfo: "勝連濱集落共同利用免費停車場（步行 2 分鐘穿過石牆巷弄）",
          tags: ["神明之島", "百年古民家", "島野菜定食", "鹽炊豚肉", "沖繩在地媽媽味"],
          desc: "開車跨過濱比嘉大橋進入神仙之島。隱身於咕咾石矮牆間的傳統琉球赤瓦古民家，入內脫鞋坐在榻榻米上，品嚐島野菜天婦羅、水雲酢、慢火鹽炊阿古豬肉與雜穀飯定食。",
          tips: "【自駕攻略】：開敞篷車進濱比嘉島聚落時巷弄較窄，請直接停在勝連濱集落共同利用免費停車場，步行 2 分鐘穿過珊瑚石矮牆抵達。",
          reservationInfo: "【可電話提早預約】：建議出發前 1~2 天或當天上午致電預約（TEL: 098-977-7688），保留榻榻米古民家席位。",
          branchTip: "神之島濱比嘉島獨一無二的百年紅瓦古民家食堂，全沖繩無其他分店。若客滿可直接前往跨海大橋正中間的海之驛。",
          backupOptions: [
            {
              name: "海の駅 あやはし館 2F 海景餐廳",
              tag: "海中道路正中央 / 免排隊",
              desc: "海中道路跨海大橋正中間，座位多免排隊，坐擁 360 度海景，提供宇流麻阿古豬排丼、海鮮拉麵與沖繩麵定食。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ayahashikan+Kaichu-dori&travelmode=driving"
            },
            {
              name: "丸吉食品 (濱比嘉漁港旁)",
              tag: "在地排隊天婦羅 / 開車2分",
              desc: "濱比嘉島老字號漁港炸物，招牌現炸帶殼小螃蟹（香酥多汁）、炸白身魚塊與海蘊天婦羅，銅板價外帶在海堤吃超享受！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Maruyoshi+Foods+Hamahiga&travelmode=driving"
            },
            {
              name: "King Tacos 与勝店 (キングタコス)",
              tag: "清單名店 / 跨海大橋入口前",
              desc: "沖繩塔可飯創始元祖老店！起司肉醬如小山般爆棚，份量巨大極度過癮。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=King+Tacos+Yokatsu&travelmode=driving"
            }
          ]
        },
        {
          id: "d3-6",
          transitFromPrev: {
            mode: "car",
            duration: "約 6 分",
            distance: "約 3.8 km",
            route: "海中道路中央堤防道路",
            toll: "休息站免費停車",
            tips: "海之驛二樓有跨海觀景台與特產館，下樓即是細白沙灘"
          },
          name: "海中道路沙灘 ＆ 海之驛 Ayahashi 館 (踏浪漫步)",
          category: "景點",
          period: "海中跳島",
          image: "thumb-kaichu.jpg",
          time: "13:30 ~ 14:15",
          coords: [26.3315, 127.9262],
          mapCode: "499 576 380*44",
          phone: "098-978-0077",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3315,127.9262&travelmode=driving",
          color: "#06b6d4",
          icon: "🏖️",
          parkingInfo: "Ayahashi 館專屬免費大型停車場 (約 200 台)",
          tags: ["跨海沙灘", "海天一色", "踏浪踩沙", "特產海葡萄", "跑車海景打卡"],
          desc: "海中道路中央隆起的人工島嶼。走下平緩白沙灘踩著溫暖海水，海天一色開闊無邊。館內亦有宇流麻特產黃金芋烘焙點心與新鮮海葡萄冰淇淋可外帶。",
          tips: "沙灘旁有沖洗洗腳區與洗手間，踩沙踏浪後穿好鞋襪，準備橫跨沖繩中部前往西海岸美國村！"
        },
        {
          id: "d3-7",
          transitFromPrev: {
            mode: "car",
            duration: "約 45 分",
            distance: "約 26 km",
            route: "橫跨沖繩中部幹道至西海岸北谷町",
            toll: "北谷町公共停車場無料",
            tips: "建議停放美國村中央免費大停車場或 Sunset Beach 停車場"
          },
          name: "北谷美濱美國村 Depot Island (異國街區 ＆ 濱海木棧步道)",
          category: "景點",
          period: "西岸美式",
          image: "thumb-american.jpg",
          time: "15:00 ~ 16:30",
          coords: [26.3158, 127.7540],
          mapCode: "33 526 450*55",
          phone: "098-926-5678",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3158,127.7540&travelmode=driving",
          color: "#ea580c",
          icon: "🎡",
          parkingInfo: "Depot Island 海岸專用免費大型停車場 / 美國村公共停車場 (約 1500 台)",
          tags: ["美式海濱市集", "Depot Island", "海邊木棧道", "特色選品", "潮流服飾"],
          desc: "自海中道路橫跨中部縣道，約 40 分鐘抵達充滿南加州海濱風情的美國村。Depot Island 彩色斑斕的歐美建築、塗鴉牆、巨型風獅爺公仔與海邊木棧道步道，漫步其間處處是拍照背景！",
          tips: "推薦沿著 Boardwalk 濱海木棧道散步吹海風，店鋪林立沖繩特色古著店、限定海灘拖鞋與夏威夷飾品。"
        },
        {
          id: "d3-8",
          transitFromPrev: {
            mode: "walk",
            duration: "約 4 分",
            distance: "約 260 m",
            route: "沿 Depot Island 濱海木棧步道漫步前往",
            toll: "無料",
            tips: "濱海二樓海景第一排，享受微風與現烤舒芙蕾鬆餅"
          },
          name: "Seaside Cafe Hanon (波浪海景舒芙蕾鬆餅午茶)",
          category: "美食",
          period: "西岸美式",
          image: "thumb-hanon.jpg",
          time: "16:35 ~ 17:15",
          bookingTime: "現場平板登記候位 (16:35抵達)",
          coords: [26.3168, 127.7543],
          mapCode: "33 525 892*11",
          phone: "098-989-5788",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3168,127.7543&travelmode=driving",
          color: "#f59e0b",
          icon: "🥞",
          parkingInfo: "停放於美國村 Depot Island 免費停車場，步行 3 分鐘",
          tags: ["現做舒芙蕾", "無敵海景露台", "紅豆抹茶", "波浪奶蓋咖啡", "人氣甜點"],
          desc: "美國村濱海建築 2 樓的頂級手作鬆餅名店。坐在面海戶外露台，眼下是湛藍東海潮汐，品嚐現點現烤、如雲朵般蓬鬆綿密的日式舒芙蕾鬆餅與微鹹奶蓋黑咖啡。",
          tips: "招牌推薦「法式焦糖香蕉舒芙蕾」與「紅芋限定鬆餅」。傍晚氣溫舒適微風徐徐，是日落前最享受的午後時光。",
          reservationInfo: "不可提早訂位。現場於門口平板電腦登記取號（支援 QR Code 查看即時叫號進度），等候時可在 Depot Island 商店街漫步拍照。",
          branchTip: "美國村僅此一家海景露台總店。下午 16:30 抵達正好銜接下午茶至日落時段。",
          backupOptions: [
            {
              name: "Taco Rice Cafe Kijimuna (美國村店)",
              tag: "清單名店 / Depot Island 2F",
              desc: "Google My Maps 清單名店！若不想吃甜點鬆餅想吃鹹食，首推這家滑嫩歐姆蛋塔可飯（Omutaco），可自選中辣或照燒醬汁。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Taco+Rice+Cafe+Kijimuna+Depot+Island&travelmode=driving"
            },
            {
              name: "Gourmet 迴轉壽司市場 美濱店",
              tag: "清單名店 / 開車2分",
              desc: "Google My Maps 清單名店！排隊人氣名店，傍晚 16:30 剛開門入內免排隊，品嚐新鮮生魚片、炙燒鮭魚與海膽壽司。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gourmet+Conveyor+Belt+Sushi+Ichiba+Mihama&travelmode=driving"
            },
            {
              name: "ZHYVAGO COFFEE WORKS OKINAWA",
              tag: "濱海步道旁",
              desc: "美式西海岸工業風海景咖啡館，外帶一杯冰滴拿鐵坐在防波堤邊吹風等日落極度愜意。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=ZHYVAGO+COFFEE+WORKS+OKINAWA&travelmode=driving"
            }
          ]
        },
        {
          id: "d3-9",
          transitFromPrev: {
            mode: "walk",
            duration: "約 5 分",
            distance: "約 320 m",
            route: "沿海灘防波堤步道前往 Sunset Beach",
            toll: "無料",
            tips: "每週六 20:00 準時施放 3 分鐘海上煙火，海灘視野震撼"
          },
          name: "日落海灘 (Sunset Beach 夕陽霞光 ＆ 美國村璀璨霓虹夜景)",
          category: "景點",
          period: "西岸美式",
          image: "thumb-american.jpg",
          time: "17:20 ~ 18:15",
          coords: [26.3159, 127.7532],
          mapCode: "33 525 803*77",
          phone: "098-936-8273",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3159,127.7532&travelmode=driving",
          color: "#e11d48",
          icon: "🌅",
          parkingInfo: "美國村 Sunset Beach 專用停車場 (免費)",
          tags: ["西海岸落日", "日落海灘", "璀璨童話霓虹", "18:15務必啟程", "夜景勝過煙火"],
          desc: "傍晚 17:25 漫步至 Sunset Beach 階梯防波堤，全沖繩最負盛名的落日美景就在眼前！金色餘暉灑落海面，天色由紫紅轉為寶藍。天黑瞬間（約 17:50），整個美國村數萬顆異國霓虹燈與歐式燈飾同時點亮，如夢似幻！",
          tips: "【關鍵倒數提醒】：欣賞完璀璨點燈夜景後，**務必於 18:15 前準時回到跑車發動出發南下**！預留 55 分鐘車程避開國道 58 號下班車潮，確保 19:30 前順利還車！"
        },
        {
          id: "d3-10",
          transitFromPrev: {
            mode: "car",
            duration: "約 35 分",
            distance: "約 21 km",
            route: "國道 58 號南下至赤嶺門市，還車前先至斜對面加油站加滿油",
            toll: "無料",
            tips: "租車預約至 19:30 還車！請出示加油收據並點檢外觀交車"
          },
          name: "Heat Sports Car Rental (赤嶺加滿油 ＆ 完美還車交車)",
          category: "交通",
          period: "傍晚還車",
          image: "thumb-heatsports.jpg",
          time: "19:15 ~ 19:30",
          coords: [26.1928, 127.6603],
          mapCode: "33 064 748*88",
          phone: "098-857-0819",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.1928,127.6603&travelmode=driving",
          color: "#dc2626",
          icon: "🏎️",
          parkingInfo: "門市專用還車點檢車位",
          tags: ["19:30準時還車", "加滿油出示收據", "全車外觀點檢", "赤嶺站旁接駁"],
          desc: "自北谷南下國道 58 號約 50 分鐘抵達赤嶺。還車前於門市旁加油站將油箱加滿（Regular 紅色油槍，保留發票）。工作人員檢查外觀無損後，34 小時的熱血敞篷跑車自駕之旅完美收官！",
          tips: "交車後步行 3 分鐘至「單軌電車赤嶺站」，搭乘單軌往首里方向（車程僅 8 分鐘 / ¥270）直達「美榮橋站 / 縣廳前站」，無拘無束迎接慶功和牛晚宴！"
        },
        {
          id: "d3-11",
          transitFromPrev: {
            mode: "monorail",
            duration: "約 12 分",
            distance: "約 3.6 km",
            route: "赤嶺站搭乘單軌電車至縣廳前站，步行 3 分抵達",
            toll: "單軌車票 ¥270",
            tips: "全自駕順利完成！慶功享用頂級和牛炭火燒肉"
          },
          name: "燒肉 琉球的牛 那霸久茂地 (極上炙燒黑毛和牛慶功宴)",
          category: "美食",
          period: "晚間慶功",
          image: "thumb-ryukyu-beef.jpg",
          time: "19:50 ~ 21:30",
          bookingTime: "建議官網預約 19:50",
          coords: [26.2154, 127.6820],
          mapCode: "33 156 673*88",
          phone: "098-988-3409",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2154,127.6820&travelmode=driving",
          color: "#b91c1c",
          icon: "🥩",
          parkingInfo: "單軌電車縣廳前站步行 5 分鐘 / 美榮橋站步行 6 分鐘（已還車，可暢飲啤酒！）",
          tags: ["頂級黑毛和牛", "特選上等牛五花", "入口即化", "久茂地旗艦", "Orion生啤乾杯"],
          desc: "全沖繩公認頂級燒肉名店！還車後無需開車，終於可以盡情暢飲冰鎮 Orion 生啤酒！招牌「頂級特選上等牛五花」油花如大理石般細緻，炭火輕炙 5 秒即化為濃郁肉香與甘甜肉汁，無與倫比的美味！",
          tips: "【老饕點餐攻略】：推薦雙人點一份「頂級特選和牛盛合套餐」，搭配炙燒和牛握壽司與石鍋拌飯。建議提早透過官網或 Google 訂位，若無預約可於 19:50 現場登記候補。",
          reservationInfo: "【強烈建議提早 1~2 週線上預約】！可透過官方網站（支援中文介面，使用 TableCheck 預約系統）完成訂位。若未預約，需於 19:30~19:50 現場登記候補，等候時間約 30~50 分鐘。",
          branchTip: "【分店比較與首選久茂地店理由】：琉球的牛在沖繩有三家店（恩納本館、恩納別館、那霸久茂地店）。恩納兩家店自駕前往無法喝酒；而【久茂地店】位於那霸單軌『縣廳前站 / 美榮橋站』步行 5 分鐘，剛好在 19:30 赤嶺還車後搭電車直達，【全員可盡情暢飲 Orion 生啤與泡盛梅酒】，完全無酒駕顧慮，是自駕完工慶功最完美的安排！",
          backupOptions: [
            {
              name: "WAGYU SUKIYAKI 極~GOKU~ 那霸國際通店",
              tag: "清單名店 / 支援線上預約",
              desc: "Google My Maps 清單名店！國際通頂級黑毛和牛壽喜燒，支援 Google / 官網線上訂位，霜降和牛沾蛋液入口即化，氣氛奢華。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=WAGYU+SUKIYAKI+GOKU+Naha&travelmode=driving"
            },
            {
              name: "沖繩麵 EIBUN",
              tag: "清單名店 / 文青排隊首選",
              desc: "Google My Maps 清單名店！那霸最具話題性的文青沖繩麵，營業至 21:00。招牌特製軟骨三枚肉麵與柚子胡椒冷麵風味絕佳。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Okinawa+Soba+EIBUN&travelmode=driving"
            },
            {
              name: "Buchi 久茂地店 (炭火內臟燒肉)",
              tag: "清單名店 / 步行3分",
              desc: "Google My Maps 清單名店！就在琉球的牛隔壁街角，高人氣沖繩炭火直烤燒肉居酒屋，氣氛熱鬧，若沒訂到琉球的牛可無縫轉場。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Buchi+Kumoji+Naha&travelmode=driving"
            }
          ]
        },
        {
          id: "d3-12",
          transitFromPrev: {
            mode: "walk",
            duration: "約 6 分",
            distance: "約 450 m",
            route: "久茂地街道慢行返回飯店",
            toll: "無料",
            tips: "步行回飯店，整理 3 天所有戰利品裝箱打包"
          },
          name: "返回 THE NEST 那霸 ＆ 戰利品裝箱打包",
          category: "住宿",
          period: "晚間慶功",
          image: "thumb-nesthotel.jpg",
          time: "21:40 ~ 22:30",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=driving",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "飯店客房（自燒肉店散步回飯店僅 10 分鐘）",
          tags: ["微醺漫步", "戰利品裝箱", "秤重打包", "明日收官返台"],
          desc: "飽足微醺後吹著初冬涼爽海風，步行 10 分鐘回到 Nest Hotel。洗個熱水澡舒緩兩日自駕疲憊，開始整理 PARCO CITY 客製 T 恤、名產伴手禮，將液體化妝品與泡盛裝入大行李箱秤重封箱！",
          tips: "明天為沖繩行程最後一日，今晚先行完成行李配重，準備迎接明日第一牧志市場與那霸機場國內線挖寶！"
        }
      ]
    },
    {
      day: 4,
      date: "2026/11/19",
      weekday: "週四",
      title: "那霸最後採買 ＆ 16:50 滿載返程",
      subtitle: "牧志公設市場 • 豬肉蛋飯糰 • 國際通Calbee+ • 新都心Main Place & DFS • 機場國內線",
      themeColor: "#ea580c",
      highlightNotice: {
        type: "warning",
        title: "16:50 返程航班死線提醒：14:10 抵達機場 ＆ 14:40 前完成行李託運",
        content: "班機於 16:50 起飛、16:20 開始登機。已無租車，今日搭乘單軌電車（Yui Rail）精準避開塞車！14:10 抵達機場後，先逛國內線 2F 伴手禮街，14:40 前抵達國際線 3F 櫃台完成託運報到。"
      },
      transitSummary: {
        totalDrivingTime: "無自駕 (市區無車日)",
        totalDistance: "步行約 3.5 km ｜ 單軌 3 趟",
        mode: "單軌電車 ＆ 悠閒徒步",
        tips: "全日單軌＋徒步漫遊！牧志市場 ➔ 國際通 ➔ 新都心 Main Place ➔ 旭橋取行李 ➔ 機場"
      },,
      waypoints: [
        {
          id: "d4-1",
          name: "THE NEST 那霸 辦理退房 ＆ 行李免費寄放",
          category: "住宿",
          period: "早晨整裝",
          image: "thumb-nesthotel.jpg",
          time: "08:30 ~ 09:00",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=walking",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "飯店櫃台免費寄物 / 旭橋站投幣置物櫃",
          tags: ["退房手續", "行李寄放", "輕裝出發", "單軌一日券"],
          desc: "早晨於 Nest Hotel 辦理退房手續，將大件行李箱免費寄放於飯店櫃台。隨後前往旭橋單軌電車站購買『單軌電車一日券 (¥800)』，今日搭乘 3 趟以上即回本，進出站刷 QR Code 輕鬆暢遊！",
          tips: "隨身僅攜帶護照、錢包與手機小包，讓市區徒步與搭車毫無負擔。"
        },
        {
          id: "d4-2",
          transitFromPrev: {
            mode: "walk",
            duration: "約 14 分",
            distance: "約 1.1 km",
            route: "飯店出門沿久茂地方向穿過國際通中央巷道",
            toll: "無料",
            tips: "晨間漫步至市場，先至 Potama 抽號碼牌點餐"
          },
          name: "第一牧志公設市場 ＆ Pork Tamago Onigiri (Potama 牧志本店)",
          category: "美食",
          period: "早晨美食",
          image: "thumb-makishi.jpg",
          time: "09:15 ~ 10:30",
          coords: [26.2146, 127.6883],
          mapCode: "33 157 264*82",
          phone: "098-867-9550",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2146,127.6883&travelmode=walking",
          color: "#ea580c",
          icon: "🍙",
          parkingInfo: "單軌美榮橋站步行 8 分鐘 / 牧志站步行 9 分鐘",
          tags: ["沖繩人的廚房", "元祖豬肉蛋飯糰", "炸蝦明太子", "清單必吃", "在地市場巡禮"],
          desc: "走進全新現代化改建的「第一牧志公設市場」，一樓活海鮮水族箱林立，五彩斑斕的夜光貝與石斑魚令人目不暇給。市場對面即是全沖繩最強人氣早點「Potama 豬肉蛋飯糰牧志本店」，厚切午餐肉搭配軟嫩玉子燒與現炸酥脆海老，香氣撲鼻！",
          tips: "【排隊避雷密技】：Potama 早晨現場人潮眾多，強烈建議出發前使用官方 FastPick App 線上點餐付款，指定 09:30 取餐即可免排隊直接提領！",
          reservationInfo: "無桌位預約，但支援官方 FastPick App 提前 30~60 分鐘線上下單，到店直接取餐外帶免排隊。",
          branchTip: "【分店比較】：除了牧志市場本店外，那霸機場國內線 1F 也有分店，但機場店排隊人龍極長（常需等 40~60 分鐘），因此在牧志本店提早取餐最為從容！",
          backupOptions: [
            {
              name: "JEF Sunrise Naha (JEF サンライズ那覇店)",
              tag: "清單名店 / 沖繩限定苦瓜漢堡",
              desc: "Google My Maps 清單名店！全日本僅沖繩才有的連鎖速食店，距離牧志市場步行 3 分鐘。招牌現點現煎『苦瓜歐姆蛋漢堡』與苦瓜香檬汁，風味獨特清爽！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=JEF+Sunrise+Naha&travelmode=driving"
            },
            {
              name: "第一牧志公設市場 2F 燕鄉亭食堂",
              tag: "市場現炒 / 鮮魚刺身",
              desc: "位於公設市場 2 樓，可在 1 樓挑選鮮魚直接上樓代客料理，或直接單點海葡萄、沖繩炒苦瓜與生魚片丼飯。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Makishi+Public+Market+2F&travelmode=driving"
            }
          ]
        },
        {
          id: "d4-3",
          transitFromPrev: {
            mode: "walk",
            duration: "約 5 分",
            distance: "約 320 m",
            route: "市場街步道直通國際通大道",
            toll: "無料",
            tips: "採買紅芋塔、伴手禮，在 Calbee+ 享受現炸紅芋薯條"
          },
          name: "那霸國際通商店街散策 ＆ Calbee+ 現炸沖繩紅芋條",
          category: "購物",
          period: "上午散策",
          image: "thumb-calbee.jpg",
          time: "10:30 ~ 11:20",
          coords: [26.2164, 127.6891],
          mapCode: "33 157 414*55",
          phone: "098-867-6254",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2164,127.6891&travelmode=walking",
          color: "#f59e0b",
          icon: "🍟",
          parkingInfo: "單軌牧志站步行 5 分鐘 / 美榮橋站步行 6 分鐘",
          tags: ["奇蹟的一哩", "現炸紅芋波浪薯條", "ポテりこ", "黑糖洋芋片", "散步美食"],
          desc: "漫步在沖繩最繁華的「奇蹟的一哩」國際通。不可錯過 Calbee+ 專賣店限定現炸熱點心——招牌「ポテりこ 紅芋薯條」，剛起鍋外皮酥脆滾燙、內餡如泥般綿密香甜，搭配沖繩黑糖洋芋片，邊走邊吃極度過癮！",
          tips: "Calbee+ 店內亦有販售限定包裝的石垣島辣油洋芋片與紅芋薯條伴手禮盒，適合隨手送禮。",
          reservationInfo: "現場點單現炸，製作約需 3~5 分鐘，免預約。",
          backupOptions: [
            {
              name: "Ice Oasis (雪花冰專門店)",
              tag: "清單名店 / 消暑冰品",
              desc: "Google My Maps 清單名店！平和通商店街內，主打濃郁芒果雪花冰與黑糖豆花，逛累了可進店吹冷氣歇腳。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ice+Oasis+Naha&travelmode=driving"
            },
            {
              name: "唐吉訶德 國際通店",
              tag: "免稅地標 / 24小時營業",
              desc: "國際通正中心地標，B1 至 4F 囊括沖繩限定零食、面膜藥妝與紀念品，可迅速補齊清單漏買的小物。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Don+Quijote+Kokusai+Dori&travelmode=driving"
            }
          ]
        },
        {
          id: "d4-4",
          transitFromPrev: {
            mode: "monorail",
            duration: "約 18 分",
            distance: "約 1.8 km",
            route: "單軌牧志站 → おもろまち站徒步 5 分",
            toll: "單軌車票 ¥270",
            tips: "新都心核心百貨，超市伴手禮與免稅店一網打盡"
          },
          name: "單軌歌町站：San-A Naha Main Place 採買 ＆ 美食午餐 ＆ 迪斐世 DFS 免稅店",
          category: "購物",
          period: "中午採買",
          image: "thumb-mainplace.jpg",
          time: "11:30 ~ 13:30",
          coords: [26.2253, 127.6949],
          mapCode: "33 188 559*22",
          phone: "098-951-3300",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2253,127.6949&travelmode=walking",
          color: "#10b981",
          icon: "🛍️",
          parkingInfo: "單軌電車『おもろまち站（歌町站）』步行 5 分鐘（空橋直通 DFS）",
          tags: ["在地人最愛商場", "生鮮食品超市", "Loft生活雜貨", "免稅精品", "美食午餐"],
          desc: "搭乘單軌直達新都心歌町站！【San-A Naha Main Place】是沖繩在地人最推崇的旗艦級商場，一樓大型超級市場售價比觀光區更親民，沖繩泡盛、黑糖、伴手禮盒品項齊全；同棟還有 Loft、無印良品與日系服飾。旁邊空橋直連【迪斐世 DFS 沖繩那霸店 (T Galleria)】，全日本唯一市區免稅店，採購精品後直接於那霸機場管制區輕鬆提貨！商場內亦設有和風洋食、壽司與美食街，可在此從容享用登機前的豐盛午餐。",
          tips: "【退稅提醒】：Main Place 設有專屬退稅櫃台，滿 ¥5,000 即可直接退消費稅；DFS 精品購買後請妥善保留提貨單，於機場出境管制區憑護照提領。",
          reservationInfo: "商場美食街及 1F/2F 餐廳現場候位（和風亭、大阪王將、星乃咖啡等），午間 11:30~12:15 人潮較少無需排隊。",
          backupOptions: [
            {
              name: "和風亭 那霸 Main Place 店",
              tag: "商場內人氣日式定食",
              desc: "位於 Main Place 1 樓，提供頂級天婦羅、鰻魚飯、蕎麥麵與花籃握壽司套餐，環境舒適寬敞，長輩喜愛。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Wafutei+Naha+Main+Place&travelmode=driving"
            },
            {
              name: "沖繩麵 EIBUN",
              tag: "清單名店 / 若提早至市區用餐",
              desc: "Google My Maps 清單名店！那霸頂級文青沖繩麵，特製炙燒軟骨與清爽高湯無懈可擊，若喜愛文青小店可於離開國際通時順道朝聖。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Okinawa+Soba+EIBUN&travelmode=driving"
            }
          ]
        },
        {
          id: "d4-5",
          transitFromPrev: {
            mode: "monorail",
            duration: "約 20 分",
            distance: "約 2.5 km",
            route: "單軌おもろまち站 → 旭橋站徒步 4 分",
            toll: "單軌車票 ¥270",
            tips: "返回飯店大廳領取寄放行李並稍作休整"
          },
          name: "返回飯店提領行李 ➔ 單軌電車直奔那霸機場",
          category: "交通",
          period: "午後移動",
          image: "thumb-nesthotel.jpg",
          time: "13:30 ~ 14:10",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=walking",
          color: "#0284c7",
          icon: "🚝",
          parkingInfo: "單軌旭橋站 ➔ 那霸機場站（車程約 12 分鐘）",
          tags: ["領取行李", "單軌直達", "準時不塞車", "安全抵達機場"],
          desc: "自歌町站搭乘單軌回到旭橋站，於 Nest Hotel 提領寄存的大行李箱。推行李進入旭橋站，搭乘單軌電車直達終點「那霸機場站」（車程僅 12 分鐘，單軌高架月台設有室內無障礙電梯與空橋，無風無雨直通航廈 2 樓）。",
          tips: "單軌電車準點率 100%，完全避開午後進入機場路段的地面公車塞車風險！"
        },
        {
          id: "d4-6",
          transitFromPrev: {
            mode: "monorail",
            duration: "約 12 分",
            distance: "約 4.5 km",
            route: "單軌旭橋站 → 那霸機場站直達航廈 2 樓",
            toll: "單軌車票 ¥270",
            tips: "班機 16:50 起飛，14:55 前抵達機場，預留近 2 小時完成託運安檢"
          },
          name: "那霸機場國內線 2F 伴手禮名店街最後狂掃",
          category: "購物",
          period: "最後掃貨",
          image: "thumb-airport.jpg",
          time: "14:10 ~ 14:50",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2064,127.6465&travelmode=walking",
          color: "#f59e0b",
          icon: "🛍️",
          parkingInfo: "航廈 2 樓室內空橋連通",
          tags: ["Fukugiya蜂蜜年輪", "Royce黑糖生巧克力", "oHacorté水果塔", "伴手禮終極寶庫"],
          desc: "沖繩伴手禮最精彩的終極寶庫！國內線 2F 名店街規模為國際線數倍，齊聚各大知名甜品名店：【Fukugiya 現烤蜂蜜年輪蛋糕 (Fukugi)】香氣四溢、【Royce' 石垣島黑糖生巧克力】入口即化、【oHacorté 珠寶水果塔】酥脆精緻。推著手推車一口氣買齊所有限定伴手禮！",
          tips: "【動線小提醒】：國內線 2F 與國際線 2F 設有寬敞明亮的室內連通道，全程推行李車僅需步行 3 分鐘即可抵達國際線出發大廳！"
        },
        {
          id: "d4-7",
          transitFromPrev: {
            mode: "walk",
            duration: "約 15 分",
            distance: "航廈內",
            route: "國際線出發大廳 → 安檢門 → 免稅候機室",
            toll: "無料",
            tips: "16:15 開放登機，滿載回憶與戰利品平安賦歸！"
          },
          name: "國際線出發大廳報到 ＆ 託運 ＆ 安檢通關 ＆ 16:50 班機賦歸",
          category: "交通",
          period: "出境登機",
          image: "thumb-airport.jpg",
          time: "14:50 ~ 16:50 (16:20 登機 / 16:50 起飛)",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2064,127.6465&travelmode=walking",
          color: "#0284c7",
          icon: "🛫",
          parkingInfo: "國際線出境管制區",
          tags: ["起飛前2小時報到", "行李託運", "DFS免稅提貨", "16:20登機", "平安返台"],
          desc: "14:50 前抵達國際線 3 樓航空公司櫃台辦理 Check-in 報到手續與大件行李託運（起飛前 60 分鐘關櫃截止）。完成安檢查驗通關後，進入管制區：若在 DFS 購買精品，可至專屬免稅提貨處出示提貨單領取；管制區內亦有最後的免稅煙酒專櫃。16:20 抵達登機門登機，滿載 4 天 3 夜美好回憶與戰利品平安返台！",
          tips: "【提醒事項】：保溫袋裝生巧克力或布丁等凝膠類食品若未放入託運行李，單件容量超過 100ml 者會於隨身安檢時被海關攔查沒收，請務必在 14:50 托運前將其妥善收納於托運行李箱內！"
        }
      ]
    }
  ],

  // 出國行前與戰利品 Checklist 預設清單
  defaultChecklists: {
    essentials: [
      { id: "chk-1", text: "護照（有效期限 6 個月以上）", checked: true },
      { id: "chk-2", text: "Visit Japan Web (VJW) 截圖填寫完成", checked: true },
      { id: "chk-3", text: "台灣駕照正本 ＋ 監理所日文譯本（自駕必備）", checked: true },
      { id: "chk-4", text: "日幣現金（建議備 3~5 萬日圓雜支）", checked: false },
      { id: "chk-5", text: "雙幣信用卡 / 海外高回饋信用卡（開通海外交易）", checked: false },
      { id: "chk-6", text: "日本上網 eSIM / SIM 卡（已安裝確認）", checked: false },
      { id: "chk-7", text: "行動電源（需隨身攜帶，不可託運）", checked: false },
      { id: "chk-8", text: "個人常用藥物（腸胃、止痛、防暈車藥）", checked: false }
    ],
    shopping: [
      { id: "shp-1", text: "Vivienne Westwood (Outlet 飾品/開襟衫)", checked: false },
      { id: "shp-2", text: "Montbell (超輕防風雨外套/排汗衣)", checked: false },
      { id: "shp-3", text: "御菓子御殿 元祖紅芋塔", checked: false },
      { id: "shp-4", text: "宮古島雪鹽 ＆ 雪鹽金楚糕", checked: false },
      { id: "shp-5", text: "Royce' 石垣島黑糖生巧克力", checked: false },
      { id: "shp-6", text: "日本藥妝（EVE止痛、合利他命、眼藥水）", checked: false },
      { id: "shp-7", text: "沖繩琉球泡盛古酒 / Orion 生啤", checked: false }
    ]
  },

  // 沖繩自駕備忘手冊
  drivingGuide: {
    rules: [
      { title: "靠左行駛（右駕關鍵）", detail: "右轉大彎、左轉小彎。雨刷與方向燈位置相反（方向燈在右側，打錯會開雨刷）。" },
      { title: "行人與直行車絕對優先", detail: "轉彎時即使是綠燈，也必須完全停等斑馬線上的行人通過後再轉彎。" },
      { title: "速限嚴格遵守", detail: "沖繩高速公路多為限速 80 km/h；一般國道/市區約 40~50 km/h。切勿任意超速。" },
      { title: "停車與收費", detail: "路邊嚴禁隨意違規臨停。進收費停車場請看清是「前結算」還是「後付代幣/精算機」。" },
      { title: "高速公路通行收費", detail: "租車未租借 ETC 卡者請務必走「一般（綠色）」車道抽取通行券，出站人工現金/刷卡繳費。" },
      { title: "加油日文速查", detail: "進入加油站請說：「Regular（紅槍常規汽油）、滿杯（満タン / Man-tan）、刷卡（Credit card）」。" }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = OKINAWA_TRIP_DATA;
}
