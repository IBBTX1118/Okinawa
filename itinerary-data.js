/**
 * 沖繩動態行程表 4天3夜完整資料集
 * 包含經緯度、MapCode、電話導航、停車建議與深度遊玩指南
 */

const OKINAWA_TRIP_DATA = {
  meta: {
    title: "煥然一新 • 沖繩4天3夜動態行程",
    version: "20261117-v2.0",
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
      waypoints: [
        {
          id: "d1-1",
          name: "那霸機場 (OKA) 國際線航廈",
          category: "交通",
          time: "17:50 降落 ~ 18:45 出關",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Naha+Airport",
          color: "#0284c7",
          icon: "✈️",
          parkingInfo: "機場立體停車場 P1-P3（計程收費）",
          tags: ["入境審查", "領行李", "VJW申報"],
          desc: "班機於 17:50 觸地。下機後備妥 Visit Japan Web (VJW) QR Code，依指標前往入國審查、海關檢驗並提領行李。",
          tips: "國際線大廳一樓有 Lawson 便利商店與外幣提款機，出大門即為計程車站牌。"
        },
        {
          id: "d1-2",
          name: "沖繩 ASHIBINAA Outlet",
          category: "購物",
          image: "thumb-ashibinaa.jpg",
          time: "19:05 ~ 20:00 (閉店)",
          coords: [26.1593, 127.6582],
          mapCode: "232 544 452*22",
          phone: "098-891-6000",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Okinawa+Outlet+Mall+Ashibinaa",
          color: "#f59e0b",
          icon: "🛍️",
          parkingInfo: "園區免費大型停車場 (約1000台)",
          tags: ["Vivienne", "Montbell", "免稅退稅"],
          desc: "沖繩唯一大型名牌暢貨中心。大件行李可寄放於 1F 諮詢中心投幣櫃。直奔 2100 區 Vivienne Westwood、Montbell 戶外裝備。",
          tips: "各櫃位 20:00 準時結帳打烊，免稅櫃台常在 19:40 湧現排隊人潮，請務必於 19:35 前完成挑選並出示護照。"
        },
        {
          id: "d1-3",
          name: "THE NEST 那霸 (飯店 Check-in)",
          category: "住宿",
          time: "20:25 ~ 20:45",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nest+Hotel+Naha",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "飯店附設立體車位（約 ¥1,200/晚）或鄰近 Times 停車場",
          tags: ["飯店入住", "卸行李", "更換輕便休閒服"],
          desc: "ASHIBINAA 閉店後搭乘計程車/Uber（約 20 分鐘，車資約 ¥2,800）直奔市區飯店辦理入住，放下戰利品後徒步前往晚餐。",
          tips: "可先向前台預約隔天早上的叫車服務或確認退房寄存行李規範。"
        },
        {
          id: "d1-4",
          name: "傑克牛排館 (Jack's Steak House)",
          category: "美食",
          image: "thumb-jacksteak.jpg",
          time: "20:50 ~ 22:00",
          coords: [26.2163, 127.6710],
          mapCode: "33 155 087*50",
          phone: "098-868-2408",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jack%27s+Steak+House+Okinawa",
          color: "#f43f5e",
          icon: "🥩",
          parkingInfo: "專用停車場（約12台，用餐免費用）",
          tags: ["昭和排隊名店", "特選沙朗牛排", "招牌濃湯"],
          desc: "創業於 1953 年的沖繩美軍時期懷舊牛排館。特選菲力（Tenderloin）鮮嫩多汁，紅綠黃燈號看板充滿昭和復古氣息。",
          tips: "週一晚間人潮雖較週末平緩，抵達時仍請先至門口登記抽號碼牌，通常需候位 15~30 分鐘。"
        },
        {
          id: "d1-5",
          name: "首夜待定漫步 (國際通唐吉訶德 / 居酒屋)",
          category: "放鬆",
          time: "22:00 ~ 23:30",
          coords: [26.2155, 127.6853],
          mapCode: "33 157 382*41",
          phone: "098-951-2311",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Kokusai+Dori",
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
      subtitle: "波上宮 • 古宇利大橋 • 水族館 • 萬座毛夕陽 • A&W • PARCO CITY",
      themeColor: "#059669",
      highlightNotice: {
        type: "info",
        title: "自駕長途日：許田IC高速公路、15:00鯨鯊餵食秀與萬座毛夕陽",
        content: "本日自駕里程約 180 公里，已依據實時速限與路況優化時間軸：11:25抵達古宇利大橋與蝦蝦飯、14:45直擊水族館 15:00 鯨鯊垂直餵食秀、17:40 捕捉萬座毛黃金夕陽、晚間暢逛營業至 22:00 的 PARCO CITY UNIQLO！"
      },
      waypoints: [
        {
          id: "d2-1",
          name: "波上宮 (琉球八社之首) ＆ 波上海灘",
          category: "景點",
          image: "thumb-naminoue.jpg",
          time: "08:00 ~ 08:40",
          coords: [26.2207, 127.6713],
          mapCode: "33 185 022*41",
          phone: "098-868-3697",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Naminoue+Shrine",
          color: "#8b5cf6",
          icon: "⛩️",
          parkingInfo: "波上宮境內免費小型停車場 / 若狹海濱付費停車場",
          tags: ["清晨參拜", "懸崖神社", "小書包御守", "波上海灘"],
          desc: "早晨 08:00 人潮稀少寧靜，坐落於珊瑚礁峭壁上的琉球總鎮守。參拜祈求自駕行車平安，並求取超人氣小書包交通御守，順道漫步至海灘吹拂晨風。",
          tips: "早晨空氣清新且參道無人，是拍攝紅色鳥居與無人懸崖的黃金時刻。"
        },
        {
          id: "d2-2",
          name: "TURNER COFFEE (若狹晨光外帶咖啡)",
          category: "美食",
          time: "08:40 ~ 09:05",
          coords: [26.2198, 127.6725],
          mapCode: "33 185 053*44",
          phone: "098-861-5511",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TURNER+COFFEE+Naha",
          color: "#f59e0b",
          icon: "☕",
          parkingInfo: "步行即達（自波上宮步行僅 2 分鐘）",
          tags: ["精品手沖", "冰滴咖啡", "晨光提神"],
          desc: "緊鄰波上宮步行 2 分鐘的精緻質感外帶咖啡館。出發長途自駕前，外帶一杯香醇冰滴咖啡或手沖拿鐵，喚醒整天精神！",
          tips: "步行至此點咖啡外帶，隨後前往租車站點（計程車約 12 分鐘至赤嶺）。"
        },
        {
          id: "d2-3",
          name: "Heat Sports Car Rental (赤嶺取車點檢)",
          category: "交通",
          time: "09:15 ~ 09:45",
          coords: [26.1928, 127.6603],
          mapCode: "33 064 748*88",
          phone: "098-857-0819",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Heat+Sports+Car+Rental+Naha",
          color: "#dc2626",
          icon: "🏎️",
          parkingInfo: "租車站出發（赤嶺站旁步行 5 分鐘）",
          tags: ["跑車租賃", "外觀檢查", "ETC插卡", "敞篷操作"],
          desc: "沖繩專業特色跑車與敞篷車租賃。辦理交車手續、檢查全車刮痕、確認油種（Regular紅色油槍）與敞篷開關操作，準備向北狂飆！",
          tips: "務必出示：台灣駕照正本 + 監理所日文譯本 + 護照！09:45 準時出發上快速道路接沖繩高速公路。"
        },
        {
          id: "d2-4",
          name: "古宇利大橋 (海上馳騁 ＆ 翡翠藍海)",
          category: "景點",
          image: "thumb-kouri.jpg",
          time: "09:45 ~ 11:25",
          coords: [26.6967, 128.0242],
          mapCode: "485 693 485*03",
          phone: "098-056-1242",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kouri+Bridge",
          color: "#0284c7",
          icon: "🌉",
          parkingInfo: "橋南端南詰觀景停車場 (免費) / 古宇利島側海灘停車場",
          tags: ["跨海長橋", "古宇利藍", "海上馳騁", "跑車打卡"],
          desc: "由那霸走沖繩高速公路直奔終點許田IC，經 Route 58 接屋我地島來到全長 1,960 公尺的古宇利跨海大橋。開敞篷車奔馳在透明漸層古宇利藍海面上，無比震撼！",
          tips: "車程約 85-95 分鐘。過橋前可在南詰停車場短暫停車，以跨海長橋與跑車為背景拍下經典紀念照。"
        },
        {
          id: "d2-5",
          name: "古宇利蝦蝦飯 (KOURI SHRIMP)",
          category: "美食",
          image: "thumb-kouri.jpg",
          time: "11:25 ~ 12:10",
          coords: [26.7022, 128.0233],
          mapCode: "485 692 126*55",
          phone: "098-056-1242",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KOURI+SHRIMP",
          color: "#ea580c",
          icon: "🍤",
          parkingInfo: "店內專屬停車場 (約 30 台)",
          tags: ["大蒜檸檬蝦", "海景露台", "夏威夷風", "人氣必吃"],
          desc: "過橋後山坡上的名物蝦蝦飯。飽滿 Q 彈大蝦裹上濃郁大蒜奶油與新鮮檸檬汁，搭配白飯與薯角，在頂樓露台吹海風俯瞰古宇利大橋用餐。",
          tips: "支援觸控螢幕自助點餐機（可刷卡/現金）。份量剛好不會過飽，為下一站阿古豬料理保留完美食慾！"
        },
        {
          id: "d2-6",
          name: "古宇利島ハート岩 (心形岩 ＆ 恋守寺社)",
          category: "景點",
          image: "thumb-heartrock.jpg",
          time: "12:15 ~ 12:55",
          coords: [26.7126, 128.0287],
          mapCode: "485 751 179*22",
          phone: "098-056-2256",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Heart+Rock+Kouri+Island",
          color: "#ec4899",
          icon: "💖",
          parkingInfo: "心形岩入口處民營停車場 (計次約 ¥100~¥300)",
          tags: ["嵐廣告聖地", "天然心形礁石", "Tinu海灘", "戀愛守護寺社"],
          desc: "位於古宇利島北端 Tinu Beach 的天然雙心奇岩，日本天團「嵐」在此拍攝 JAL 廣告而爆紅。沿著小徑走向海灘，並造訪恋守寺社打卡祈求幸福美滿。",
          tips: "前往沙灘的小石坡路稍微傾斜，建議換穿好走的平底鞋或涼鞋；停留約 40 分鐘後驅車啟程。"
        },
        {
          id: "d2-7",
          name: "百年古家 大家 阿古豬 (百年琉球古民家)",
          category: "美食",
          image: "thumb-ufuya.jpg",
          time: "13:25 ~ 14:20",
          coords: [26.6234, 127.9715],
          mapCode: "206 745 056*66",
          phone: "098-053-0280",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ufuya+Okinawa",
          color: "#b45309",
          icon: "🥢",
          parkingInfo: "專用超大型免費停車場 (含電動高爾夫球接駁車)",
          tags: ["阿古豬肉麵", "百年古民家", "森林流水庭園", "人氣泡芙"],
          desc: "名護山林間由百年安里家古民宅修復而成的名店。伴著庭院潺潺流水聲，品嚐極致鮮美的阿古豬（Agu）沖繩蕎麥麵與特製泡芙，意境悠遠迷人。",
          tips: "從古宇利開車約 28 分鐘。平日下午 13:25 已過最巔峰午餐人潮，候位較快。午餐供應至 15:00。"
        },
        {
          id: "d2-8",
          name: "沖繩美麗海水族館 (直擊 15:00 鯨鯊餵食秀)",
          category: "景點",
          image: "thumb-churaumi.jpg",
          time: "14:45 ~ 16:15",
          coords: [26.6943, 127.8779],
          mapCode: "553 075 797*77",
          phone: "098-048-3748",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Okinawa+Churaumi+Aquarium",
          color: "#0284c7",
          icon: "🐋",
          parkingInfo: "導航至「P7北停車場 (立體停車場)」(離水族館最近且遮陽防曬)",
          tags: ["15:00鯨鯊餵食", "黑潮之海", "鬼蝠魟", "海洋博公園"],
          desc: "從大家驅車 25 分鐘抵達。世界級水族館，正好完美趕上 15:00 最震撼的「鯨鯊垂直站立進食秀」！看長達 8 米的巨型鯨鯊仰頭吸入海水，極具魄力。",
          tips: "入館直奔「黑潮之海」大水槽卡位看 15:00 餵食解說，隨後漫步深海區與紀念品專賣店。"
        },
        {
          id: "d2-9",
          name: "星巴克 沖繩本部町店 (Hanasaki Marche 海景門市)",
          category: "美食",
          image: "thumb-starbucks.jpg",
          time: "16:20 ~ 16:50",
          coords: [26.6853, 127.8847],
          mapCode: "553 046 422*00",
          phone: "098-043-9865",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Coffee+Okinawa+Motobu",
          color: "#059669",
          icon: "☕",
          parkingInfo: "Ala Mahaina / Hanasaki Marche 商場大型免費停車場",
          tags: ["沖繩最美星巴克", "海景露台", "木質琉球建材", "瀨底島遠眺"],
          desc: "距離水族館僅 3 分鐘車程！座落於 Hanasaki Marche 複合園區，採用沖繩在地琉球石灰岩與杉木建造。戶外露台遠眺瀨底島海峽，喝杯咖啡放鬆小憩。",
          tips: "點杯沖繩限定飲品或抹茶星冰樂，在二樓戶外木平台吹風打卡，身心徹底充飽電。"
        },
        {
          id: "d2-10",
          name: "萬座毛海岸絕景 (落日象鼻岩黃金海岸)",
          category: "景點",
          image: "thumb-manzamo.jpg",
          time: "17:40 ~ 18:25",
          coords: [26.5049, 127.8502],
          mapCode: "206 312 038*55",
          phone: "098-966-8086",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cape+Manzamo",
          color: "#e11d48",
          icon: "🌅",
          parkingInfo: "萬座毛遊客中心專用大型免費停車場 (約 300 台)",
          tags: ["落日象鼻岩", "金色黃昏", "琉球石灰岩", "海蝕懸崖"],
          desc: "從本部南下車程約 50 分鐘，抵達時間正好是 17:40 沖繩日落黃金時刻！夕陽餘暉灑在壯麗的象鼻海蝕洞與碧海之上，金色霞光令人嘆為觀止。",
          tips: "參觀步道門票每人 ¥100。日落後可在全新遊客中心購買特色伴手禮或上洗手間，準備返程往南。"
        },
        {
          id: "d2-11",
          name: "A&W 牧港旗艦店 (Makiminato 復古美式漢堡)",
          category: "美食",
          image: "thumb-aw.jpg",
          time: "19:10 ~ 20:00",
          coords: [26.2625, 127.7144],
          mapCode: "33 342 546*22",
          phone: "098-876-6081",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=A%26W+Makiminato",
          color: "#b45309",
          icon: "🍔",
          parkingInfo: "店前專用 Drive-in 美式停車場 (約 50 台，免費)",
          tags: ["50年代復古", "麥根沙士", "莫札瑞拉漢堡", "霓虹燈草坪"],
          desc: "從恩納村走高速公路南下西原IC至牧港，約 45 分鐘。沖繩歷史最悠久的 A&W 旗艦店，夜晚巨大的霓虹招牌、美式得來速雨棚與草坪小噴泉宛如置身 60 年代加州。",
          tips: "必點 The A&W 漢堡配炸洋蔥圈、金黃捲捲薯條（Curly Fries），以及裝在冰鎮厚玻璃杯中的麥根沙士（Root Beer，內用可免費續杯）！"
        },
        {
          id: "d2-12",
          name: "UNIQLO 沖繩浦添 PARCO CITY 店 (夜間免稅血拚)",
          category: "購物",
          image: "thumb-parcocity.jpg",
          time: "20:10 ~ 21:35",
          coords: [26.2618, 127.6975],
          mapCode: "33 339 054*88",
          phone: "098-871-1120",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SAN-A+Urasoe+West+Coast+PARCO+CITY",
          color: "#dc2626",
          icon: "🛍️",
          parkingInfo: "PARCO CITY 超大型室內立體免費停車場 (約 4000 台)",
          tags: ["超大型UNIQLO", "沖繩限定UT", "全館營業至22:00", "即時退稅"],
          desc: "自 A&W 牧港店開車僅 8 分鐘即達西海岸 PARCO CITY。此處擁有全沖繩面積最大、商品最齊全的 UNIQLO 旗艦型門市，還有沖繩限定風獅爺刺繡與 UT，營業至 22:00 免急促採買！",
          tips: "全館空調舒適好逛，UNIQLO 櫃位可直接出示護照辦理免稅結帳；同層還有 GU、無印良品與多家海景雜貨店。"
        },
        {
          id: "d2-13",
          name: "返抵那霸飯店休息 ＆ 戰利品整理",
          category: "住宿",
          time: "21:35 ~ 22:00",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nest+Hotel+Naha",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "飯店附設立體車位 / 飯店周邊收費停車場",
          tags: ["夜間返程", "西海岸快速道路", "戰利品清點", "洗熱水澡放鬆"],
          desc: "從 PARCO CITY 沿著美麗的西海岸臨海快速道路南下，直通那霸市區僅需 15~18 分鐘，路況暢通無比。跑車安全停入停車場，完美結束充實熱血的 Day 2 中北部自駕之日！",
          tips: "今晚長途自駕約 180 公里，回房後泡熱水澡舒緩開車疲勞，好好充電準備迎接 Day 3 南部療癒之旅。"
        }
      ]
    },
    {
      day: 3,
      date: "2026/11/18",
      weekday: "週三",
      title: "南部海景療癒 ＆ 琉球文化巡禮",
      subtitle: "知念岬 • 瀨長島飛機海景 • 國際通屋台村",
      themeColor: "#8b5cf6",
      highlightNotice: {
        type: "tip",
        title: "悠閒愜意日：瀨長島夕陽拍攝 ＆ 國際通採買免稅技巧",
        content: "本日以沖繩南部與那霸周邊為主，車程短且舒適。瀨長島推薦於午後 14:00~16:30 造訪，近距離觀賞飛機由海面降落那霸機場的震撼畫面！"
      },
      waypoints: [
        {
          id: "d3-1",
          name: "知念岬公園 (太平洋 270 度海天一色)",
          category: "景點",
          time: "10:00 ~ 11:30",
          coords: [26.1683, 127.8286],
          mapCode: "232 594 503*30",
          phone: "098-947-1100",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chinen+Cape+Park",
          color: "#0284c7",
          icon: "🌊",
          parkingInfo: "南城市體育館旁大型免費停車場",
          tags: ["無敵海景", "久高島遠眺", "綠茵海岬"],
          desc: "凸出於太平洋海面上的翠綠海岬，擁有近乎 270 度的寬闊無遮蔽海景視野。海水在陽光映照下呈現由深藍至蒂芬妮綠的多層次漸層。",
          tips: "此處風力通常較大，建議攜帶防風外套或帽子繫好防風繩；草坪步道平緩好走極度療癒。"
        },
        {
          id: "d3-2",
          name: "瀨長島 Umikaji Terrace (白色地中海露台)",
          category: "美食",
          image: "thumb-senagajima.jpg",
          time: "12:30 ~ 15:30",
          coords: [26.1755, 127.6433],
          mapCode: "33 002 602*06",
          phone: "098-851-7446",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umikaji+Terrace+Senagajima",
          color: "#06b6d4",
          icon: "🥞",
          parkingInfo: "瀨長島環島沿線免費停車格與大型公共停車場",
          tags: ["幸福鬆餅", "看飛機起降", "純白階梯商場"],
          desc: "依山傍海而建的純白希臘地中海風格階梯市集。著名的「幸福鬆餅 (A Happy Pancake)」即位於此，戶外露台每隔幾分鐘就有大型客機自頭頂海面滑行降落！",
          tips: "幸福鬆餅現場需於門口平板抽號候位（亦可提早兩週官網預約）。等待時間可在階梯旁各式選品小店散步拍照。"
        },
        {
          id: "d3-3",
          name: "國際通大街 ＆ 屋台村熱鬧晚餐",
          category: "美食",
          time: "17:00 ~ 21:30",
          coords: [26.2166, 127.6908],
          mapCode: "33 158 558*60",
          phone: "098-866-6163",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kokusai-dori+Yataimura",
          color: "#f43f5e",
          icon: "🏮",
          parkingInfo: "若本日自駕需先還車或停放於飯店/國際通收費停車場（建議搭電車徒步）",
          tags: ["屋台村", "沖繩麵", "阿古豬餃子", "伴手禮掃街"],
          desc: "沖繩最繁華的一英里！國際通兩側林立著石垣牛燒肉、特產店與風獅爺工藝品。走入屋台村，20 餘家特色攤位齊聚，伴隨三線琴樂聲與熱絡人情味。",
          tips: "國際通上的御菓子御殿（紅芋塔）、塩屋（雪鹽霜淇淋）皆提供免稅服務，記得帶護照一併採買。"
        }
      ]
    },
    {
      day: 4,
      date: "2026/11/19",
      weekday: "週四",
      title: "那霸最後採買 ＆ 滿載返程",
      subtitle: "牧志公設市場 • 豬肉蛋飯糰 • 那霸機場國內線 • 賦歸",
      themeColor: "#ea580c",
      highlightNotice: {
        type: "warning",
        title: "返程提醒：起飛前 2.5 小時抵達機場 ＆ 國內線航廈最後挖寶",
        content: "那霸機場國內線航廈（2F伴手禮大街）比國際線豐富數倍！辦理完報到託運後，請務必保留時間前往國內線選購沖繩限定甜點與銘酒。"
      },
      waypoints: [
        {
          id: "d4-1",
          name: "第一牧志公設市場 ＆ 豬肉蛋飯糰 (本店)",
          category: "美食",
          time: "08:30 ~ 10:30",
          coords: [26.2144, 127.6883],
          mapCode: "33 157 264*82",
          phone: "098-867-6560",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Makishi+Public+Market",
          color: "#ea580c",
          icon: "🍙",
          parkingInfo: "徒步前往 / 周邊投幣停車場",
          tags: ["沖繩人的廚房", "波士頓龍蝦二樓代煮", "炸蝦明太子飯糰"],
          desc: "改建完成的全新現代化公設市場。一樓挑選生猛石斑、夜光貝或龍蝦，直接送二樓食堂代客料理；對街即是超人氣 Potama 豬肉蛋飯糰牧志本店。",
          tips: "Potama 飯糰早晨常大排長龍，推薦使用官方 App (FastPick) 提早線上下單免排隊外帶。"
        },
        {
          id: "d4-2",
          name: "那霸市區飯店退房 ＆ 整理行李",
          category: "住宿",
          time: "10:45 ~ 11:30",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nest+Hotel+Naha",
          color: "#6366f1",
          icon: "🧳",
          parkingInfo: "飯店大廳裝箱",
          tags: ["秤重打包", "戰利品封箱", "搭車前往機場"],
          desc: "返回飯店將所有免稅液體、藥妝與重物分裝妥當，完成退房。搭乘計程車（約 12 分鐘，¥1,500）或單軌電車直達那霸機場。",
          tips: "注意免稅品密封袋不可拆封，液體類（如泡盛、雪鹽凝膠、化妝水）必須放入托運行李！"
        },
        {
          id: "d4-3",
          name: "那霸機場國內線 2F 伴手禮名店街",
          category: "購物",
          time: "12:00 ~ 13:30",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Naha+Airport+Domestic+Terminal",
          color: "#f59e0b",
          icon: "🛍️",
          parkingInfo: "機場立體停車場",
          tags: ["Fukugiya年輪蛋糕", "Royce石垣黑糖生巧", "紅芋蛋撻"],
          desc: "沖繩伴手禮的終極寶庫！國內線二樓名店街齊聚所有沖繩知名伴手禮品牌（Fukugiya現烤蜂蜜年輪、Royce石垣島黑糖生巧克力、oHacorté 水果塔）。",
          tips: "國內線與國際線二樓有聯通走廊相通，推著推車可自由穿梭，買齊後再步行 3 分鐘回國際線辦理報到。"
        },
        {
          id: "d4-4",
          name: "國際線出發登機 ＆ 賦歸",
          category: "交通",
          time: "13:30 ~ 班機起飛",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Naha+Airport+International+Terminal",
          color: "#0284c7",
          icon: "🛫",
          parkingInfo: "出境管制區",
          tags: ["安檢通關", "免稅菸酒", "平安返台"],
          desc: "提早 2 小時完成航空櫃台 Check-in 與安檢手續，進入出境免稅店最後巡禮，滿載美好回憶返台。",
          tips: "管制區內有飲水機與免稅煙酒化妝品專櫃，放鬆心情登機。"
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
