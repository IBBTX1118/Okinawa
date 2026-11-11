/**
 * 沖繩動態行程表 4天3夜完整資料集
 * 包含經緯度、MapCode、電話導航、停車建議與深度遊玩指南
 */

const OKINAWA_TRIP_DATA = {
  meta: {
    title: "煥然一新 • 沖繩4天3夜動態行程",
    version: "20261117-v3.14",
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
      title: "抵達沖繩 ＆ 奧特萊斯快攻 ＆ 國際通夜遊",
      subtitle: "無託運快速出關 • ASHIBINAA鎖定5大專櫃 • 全程連住NEST免搬行李 • 菲力牛排 • 雪塩伴手禮大採購 • 24H唐吉訶德",
      themeColor: "#0284c7",
      highlightNotice: {
        type: "tip",
        title: "✈️ 去程無託運行李！直奔計程車 18:40 抵達 Outlet 快攻 80 分鐘 ＆ 全程連住那霸 NEST 伴手禮安心買！",
        content: "去程無託運行李免等轉盤，手提通關預估 18:15~18:25 出境直上排班計程車，爭取 18:40 抵達 ASHIBINAA！鎖定 ABC-MART (#800)、ASICS (#260)、New Balance (#940/#270)、Vivienne (#540)、COACH (#330/#340) 五大櫃位高效率快攻。更棒的是，全行程 3 晚連住 THE NEST 那霸無須中途換房，今晚買齊的雪塩與伴手禮直接放回飯店房間，完全不佔車廂空間、安心大採購！"
      },
      transitSummary: {
        totalDrivingTime: "約 40 分",
        totalDistance: "約 16 km",
        mode: "計程車 ＆ 步行",
        tips: "免等行李直奔 Outlet (18:40~20:00) ➔ 飯店 Check-in ➔ 菲力牛排 ➔ 雪塩霜淇淋 ➔ 國際通唐吉訶德"
      },
      waypoints: [
        {
          id: "d1-1",
          name: "那霸機場 (OKA) 國際線航廈 (無託運快速通關)",
          category: "交通",
          image: "thumb-airport.jpg",
          time: "17:50 降落 ~ 18:25 快速出關",
          coords: [26.2064, 127.6465],
          mapCode: "33 123 279*00",
          phone: "098-840-1179",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2064,127.6465&travelmode=driving",
          color: "#0284c7",
          icon: "✈️",
          parkingInfo: "機場計程車排班區直達 Outlet",
          tags: ["【無託運行李】", "免等行李轉盤", "VJW快速通關", "直奔計程車站"],
          desc: "班機於 17:50 觸地。因無托運行李，下機後備妥 Visit Japan Web (VJW) QR Code，直接進行入國審查與海關電子申報，省去行李轉盤枯等 30~40 分鐘的寶貴時間！預估 18:15~18:25 即可步出航廈大廳直奔計程車站牌。",
          tips: "國際線大廳一樓出門即為計程車站牌，直接搭車走國道 331 號豐見城道路，約 15 分鐘（車資約 ¥2,000）直達 ASHIBINAA！"
        },
        {
          id: "d1-2",
          transitFromPrev: {
            mode: "taxi",
            duration: "約 15 分",
            distance: "約 7.2 km",
            route: "經國道 331 號豐見城道路直達",
            toll: "無料",
            tips: "無託運行李出關極速！搭計程車爭取 18:40 抵達 Outlet，足足有 80 分鐘快攻時間"
          },
          name: "沖繩 ASHIBINAA Outlet (鎖定5大專櫃快攻)",
          category: "購物",
          image: "thumb-ashibinaa.jpg",
          time: "18:40 ~ 20:00 (閉店)",
          coords: [26.1593, 127.6582],
          mapCode: "232 544 452*22",
          phone: "098-891-6000",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.1593,127.6582&travelmode=driving",
          color: "#f59e0b",
          icon: "🛍️",
          parkingInfo: "園區免費大型停車場 (約1000台)",
          tags: ["【鎖定5大專櫃】", "ABC-MART #800", "ASICS #260", "New Balance #940", "Vivienne #540", "COACH #330", "1F平面地圖導覽"],
          desc: "沖繩唯一大型暢貨中心！今晚鎖定 5 大目標專櫃進行高效率精準採購：①【ABC-MART】(1F 區塊 800)；②【ASICS Factory Outlet】(1F 區塊 260)；③【New Balance】(1F 區塊 940 VANS/NB 複合店 ＆ 270 NB Golf)；④【Vivienne Westwood】(1F 區塊 540 中央大道)；⑤【COACH / COACH MENS】(1F 區塊 330/340)。全專櫃皆集中於 1F，可點擊下方按鈕直接彈出高解析平面地圖定位各櫃位！",
          tips: "【5大專櫃位置導覽 ＆ 2026退稅攻略】：\n• 👟 ABC-MART：1F 800 號（近西側入口／大面積球鞋展示）\n• 🏃‍♂️ ASICS：1F 260 號（東側運動專區，緊鄰 270 NB Golf 與 250 TaylorMade）\n• 👟 New Balance：1F 940 號（VANS / NB 複合專賣）與 1F 270 號（NB Golf 高爾夫服飾配件）\n• 🪐 Vivienne Westwood：1F 540 號（中央精品大道，近 550 新秀麗）\n• 👜 COACH：1F 330 號（女裝精品包款）＆ 340 號（男士專門店）\n• 🎁 抵達先至 1F 綜合諮詢台出示護照/JCB卡換領【外國人專屬 Coupon Book】享額外 5%~10% 折扣！20:00 閉店，建議於 19:40 前完成結帳。",
          reservationInfo: "全區自由入園。點擊下方「🗺️ 查看專櫃平面圖」可即時縮放切換 1F / 2F 平面位置圖。",
          branchTip: "5 個目標櫃位全部分布在 1F，不必上下樓梯，動線沿著中央大道與東側走廊即可一氣呵成！"
        },
        {
          id: "d1-3",
          transitFromPrev: {
            mode: "taxi",
            duration: "約 22 分",
            distance: "約 8.5 km",
            route: "沿國道 331 號往那霸市區久茂地",
            toll: "無料",
            tips: "搭計程車直接進飯店辦理 Check-in，戰利品直接放房間"
          },
          name: "THE NEST 那霸 (飯店 Check-in ＆ 全程連住免搬行李)",
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
          tags: ["飯店入住", "全程3晚連住", "無需中途換房", "戰利品放房間", "平價過夜車位"],
          desc: "ASHIBINAA 閉店後抵達飯店辦理入住。特別提醒：【本行程全程 3 晚皆連住 THE NEST 那霸，中途完全不換飯店】！今晚在 Outlet、雪塩本店與唐吉訶德採購的伴手禮、免稅商品直接放回客房，後續兩天輕裝自駕北上，完全不用每天收拾打包或塞滿跑車後車廂，極度輕鬆！",
          tips: "【飯店周邊超值停車攻略】：①「ザ・パーク西町第3」(西1-4-14，步2分，20:00-08:00夜間最大僅¥400，全平地超便宜首選)；②「タイムズ西1丁目/第2」(西1-14，步2分，18:00-08:00夜間最大¥500，24H上限¥1,000，支援刷卡)；③「西パーキング」(西1-3-9，步1分過馬路即達，20:00-09:00過夜¥600)。"
        },
        {
          id: "d1-4",
          transitFromPrev: {
            mode: "walk",
            duration: "約 3 分",
            distance: "約 220 m",
            route: "飯店出門往東町方向步行直達",
            toll: "無料",
            tips: "距離飯店僅 220 公尺，步行 3 分鐘即達，支援線上訂位免排隊！"
          },
          name: "テンダーロインステーキハウス 那覇東町店 (厚切多汁菲力牛排)",
          category: "美食",
          image: "thumb-tenderloin.jpg",
          time: "20:50 ~ 21:50",
          bookingTime: "【可線上網路預約免排隊】(建議預約21:00)",
          coords: [26.2132, 127.6740],
          mapCode: "33 156 211*55",
          phone: "098-971-4528",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2132,127.6740&travelmode=walking",
          color: "#f43f5e",
          icon: "🥩",
          parkingInfo: "周邊收費停車場 / 步行 3 分鐘即達 Nest Hotel",
          tags: ["【可線上網路預約】", "厚切菲力牛排", "步行3分鐘", "免排隊首選", "2026新開幕高評價"],
          desc: "2026年盛大開幕的頂級菲力牛排專門店！距 Nest Hotel 步行僅 3 分鐘。主打極致軟嫩且少油花負擔的招牌 Tenderloin 菲力牛排，鐵板滋滋作響香氣四溢。第一晚下機直奔免受排隊之苦，提前線上預訂即可從容入座享受高質感牛排！",
          tips: "【營業與訂位指引】：營業時間 11:00-23:00（週四公休）。強烈建議透過 Hotpepper / Tabelog 或致電 098-971-4528 提早預約 21:00 席位；若想體驗 1953 年美軍時代復古情懷，亦可前往步行 5 分鐘的傑克牛排抽號！",
          reservationInfo: "【可線上網路預約免排隊】：支援 Hotpepper / Tabelog 提早線上訂位，亦可致電 098-971-4528 保留席位。離 Nest Hotel 步行僅 3 分鐘！",
          branchTip: "【那霸牛排評估對策】：相較於傑克牛排動輒排隊 30~50 分鐘且無法預約，テンダーロインステーキハウス離飯店更近、肉質極度軟嫩且支援線上預約，是第一晚抵達那霸最省時省力的美味首選！",
          backupOptions: [
            {
              name: "傑克牛排館 (Jack's Steak House)",
              tag: "昭和1953名店 / 現場抽號",
              desc: "1953 年創業的美軍懷舊牛排館，步行約 5 分鐘。特選菲力牛排配昭和紅綠燈候位燈號，21:00 後現場抽號排隊約 15~25 分鐘。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2163,127.6710&travelmode=walking"
            },
            {
              name: "HANGERBAR CLAMP (美式街頭手工漢堡)",
              tag: "那霸辻町深夜美式 / 步行8分",
              desc: "位於那霸辻町的美式街頭風手工漢堡酒吧，厚切多汁牛肉漢堡排搭配特調醬汁與生啤酒，營業至深夜，氣氛放鬆。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=HANGERBAR+CLAMP+Naha&travelmode=walking"
            },
            {
              name: "Agu Pork Shabu-shabu Miruku Naha (阿古豬涮涮鍋)",
              tag: "可訂位 / 步行6分",
              desc: "Google My Maps 清單名店！主打極品阿古豬涮涮鍋，營業至 23:00。離 Nest Hotel 僅步行 6 分鐘，可提早電話/官網訂位！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Agu+Pork+Shabu-shabu+Miruku+Naha&travelmode=walking"
            }
          ]
        },
        {
          id: "d1-5",
          transitFromPrev: {
            mode: "walk",
            duration: "約 6 分",
            distance: "約 450 m",
            route: "牛排晚餐後沿久茂地大街直通國際通入口日本生命大樓",
            toll: "無料",
            tips: "牛排晚餐後步行消食，直達全沖繩最大雪塩旗艦總店"
          },
          name: "宮古島の雪塩 国際通り本店 ＆ 雪塩さんど本店 (【必去土產旗艦店】)",
          category: "購物",
          image: "thumb-kokusaidori-night.jpg",
          time: "21:40 ~ 22:15",
          coords: [26.2144, 127.6811],
          mapCode: "33 156 204*11",
          phone: "098-860-8670",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2144,127.6811&travelmode=walking",
          color: "#0284c7",
          icon: "🧂",
          parkingInfo: "國際通商圈步行街（近單軌縣廳前站，自飯店或牛排館散步即達）",
          tags: ["【必去土產旗艦店】", "雪塩さんど夾心餅乾", "雪塩霜淇淋", "自選調味鹽吧", "雪塩金楚糕", "雪塩費南雪"],
          desc: "沖繩最具代表性的天然海鹽總旗艦店！因全程連住 THE NEST 那霸無須中途換房，首夜即可安心大買特買！全店專門店首推狂銷人氣王【雪塩さんど（雪鹽夾心餅乾）】，濃醇白巧克力融入宮古島天然雪鹽，內餡揉入卡滋玉米脆片，外層酥脆無比、鹹甜交織極度誘人！現場必吃招牌『雪塩霜淇淋』，可自由撒上香檬鹽、抹茶鹽、可可鹽、辣椒鹽等特製風味鹽試吃體驗。雪鹽費南雪、法蘭酥與黑糖金楚糕亦一應俱全，是整趟行程不可錯過的伴手禮第一指名！",
          tips: "【必買清單 ＆ 營業攻略】：營業至 21:00/22:00。首推『雪塩さんど』盒裝（常溫保存極佳、送禮自用皆絕品）與現擠『雪塩霜淇淋』；單筆消費滿 ¥5,500 支援免稅結帳，買齊旅程所需特色伴手禮！",
          reservationInfo: "外帶內用皆免預約，伴手禮選購流暢快速。",
          branchTip: "【國際通總本店】：坐落於久茂地3-1-1（縣廳前站旁國際通起點），為全沖繩品項最齊全之雪塩さんど專門本店！若後續逛到唐吉訶德正對面亦有松尾分店可補貨。",
          backupOptions: [
            {
              name: "宮古島の雪塩 國際通松尾店",
              tag: "松尾段 / 唐吉訶德對面",
              desc: "若本店人潮眾多，唐吉訶德正對面亦有松尾分店，同樣提供招牌霜淇淋與雪鹽伴手禮。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2158,127.6865&travelmode=walking"
            }
          ]
        },
        {
          id: "d1-6",
          transitFromPrev: {
            mode: "walk",
            duration: "約 1 分",
            distance: "約 90 m",
            route: "出雪塩店向西過馬路即達",
            toll: "無料",
            tips: "距離雪塩僅 90 公尺，步行 1 分鐘無縫接軌"
          },
          name: "唐吉訶德 那霸國際通店 (24H 免稅旗艦採購 ＆ 宵夜零食狂掃)",
          category: "購物",
          image: "thumb-kokusaidori-night.jpg",
          time: "22:30 ~ 23:30",
          coords: [26.2155, 127.6853],
          mapCode: "33 157 382*41",
          phone: "098-951-2311",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2155,127.6853&travelmode=walking",
          color: "#a855f7",
          icon: "🐧",
          parkingInfo: "周邊收費停車場（夜間最高收費約 ¥600~¥800）/ 徒步返程",
          tags: ["【電子折價券最高折7%】", "【24H不打烊】", "2026退稅新制", "取消防拆密封袋", "深夜狂掃"],
          desc: "國際通正中心地標旗艦店！全棟 B1 至 4F 全天候 24 小時營業不打烊。第一晚直接在此補齊整個旅程所需的隨身藥妝、防曬乳、休足時間、泡盛古酒、Orion 生啤酒與沖繩限定零食。單日未稅滿 ¥5,000 出示護照／VJW 免稅條碼辦理「先付含稅價＋數位退稅登錄」！",
          tips: "【外國人折價券 ＆ 2026退稅關鍵攻略】：① 結帳出示唐吉訶德電子折價券（滿 ¥11,000 折 5%、滿 ¥33,000 折 7%，需手機連線開啟不可截圖），可與 10% 免稅重疊使用（折上折約 83 折）；② 新制已取消消耗品紅色防拆透明塑膠袋，回飯店可直接拆袋裝箱；③ 當晚要在飯店喝掉的生啤酒與零食請務必分開結帳（境內消耗不可申報退稅）；④ 採買後步行回飯店約 10~12 分鐘，亦可於門口搭計程車約 ¥600 直達大廳！",
          reservationInfo: "全天候 24 小時自由入場免預約。",
          branchTip: "沖繩最大唐吉訶德旗艦店，品項最齊全、陳列密度最高，深夜逛人潮較白天舒適。"
        }
      ]
    },
    {
      day: 2,
      date: "2026/11/17",
      weekday: "週二",
      title: "中北部奔馳 ＆ 跑車海岸極致巡禮 ＆ 深夜丸幸拉麵",
      subtitle: "波上宮 • TURNER COFFEE • hana hana取花 • 赤嶺取跑車 • .uki 世界冠軍咖啡 • 道の駅許田 • 古宇利大橋 • 水族館 • 萬座毛夕陽 • A&W • BLUE SEAL • PARCO CITY UTme! • 丸幸拉麵宵夜",
      themeColor: "#059669",
      highlightNotice: {
        type: "info",
        title: "自駕長途日：波上宮晨間參拜、TURNER COFFEE、hana hana取花、赤嶺取跑車、.uki咖啡、水族館、萬座毛、PARCO UTme! ＆ 深夜丸幸拉麵",
        content: "早晨取消飯店早餐，08:35 自飯店漫步或搭車前往「波上宮」參拜求御守，隨後步行 3 分鐘至若狹「TURNER COFFEE」買咖啡（⚠️提醒：TURNER 表定 10:30 營業、不定休，出發前可確認 IG @turner._2020，若尚未開門則直行取花，北上另有 07:00 即營業的 .uki 冠軍咖啡！）；09:20 至「花の店 はなはな」取花後於 09:50 赤嶺取敞篷跑車，沿國道58號展開中北部海岸巡禮，夜間造訪 A&W、BLUE SEAL 與 PARCO CITY UTme!，深夜返那霸享用 4.9 星「丸幸拉麵」宵夜！"
      },
      transitSummary: {
        totalDrivingTime: "約 3.5 小時",
        totalDistance: "約 175 km",
        mode: "自駕 (ETC 高速＋國道58) ＆ 晨間若狹散策買咖啡取花 ＆ 步行宵夜",
        tips: "全日自駕核心！晨間波上宮 ➔ TURNER 買咖啡 ➔ hana hana 取花 ➔ 赤嶺取敞篷跑車 ➔ 國道58號北上經宜野灣 .uki ➔ 許田 IC 串連名護古宇利、美ら海與萬座毛，夜間返抵那霸卸戰利品後品嚐丸幸拉麵宵夜"
      },
      waypoints: [
        {
          id: "d2-1",
          name: "波上宮 (琉球八社之首) ＆ 波上海灘",
          category: "景點",
          period: "晨間出發",
          image: "thumb-naminoue.jpg",
          time: "08:35 ~ 09:05",
          coords: [26.2207, 127.6713],
          mapCode: "33 185 022*41",
          phone: "098-868-3697",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2207,127.6713&travelmode=walking",
          color: "#8b5cf6",
          icon: "⛩️",
          parkingInfo: "自 THE NEST 飯店步行約 10~12 分鐘（或搭計程車 4 分鐘約 ¥600）",
          tags: ["清晨參拜", "懸崖神社", "小書包御守", "波上海灘"],
          desc: "今日無安排早午餐，晨間從飯店輕裝出發直奔珊瑚礁峭壁上的琉球總鎮守！參拜祈求即將展開的 34 小時自駕行車平安，並求取超人氣小書包交通御守，順道漫步至波上海灘吹拂晨風。",
          tips: "早晨空氣清新且參道人潮適中，是拍攝紅色鳥居與無人懸崖的黃金時刻。"
        },
        {
          id: "d2-2",
          transitFromPrev: {
            mode: "walk",
            duration: "約 3 分",
            distance: "約 230 m",
            route: "自波上宮鳥居沿若狹大通步行至若狹 1-20-12",
            toll: "無料",
            tips: "波上宮步行僅 3 分鐘即達！外帶咖啡立飲吧（⚠️注意確認營業時段）"
          },
          name: "TURNER COFFEE (la cafe&bar TURNER • 若狹咖啡外帶吧)",
          category: "美食",
          period: "晨間出發",
          image: "thumb-turner.jpg",
          time: "09:05 ~ 09:20",
          coords: [26.2208, 127.6735],
          mapCode: "33 186 000*23",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.220835,127.673462&travelmode=walking",
          color: "#f59e0b",
          icon: "☕",
          parkingInfo: "若狹1丁目巷弄外帶專門店（MaxValu 若狹店後方，步行即達）",
          tags: ["波上宮步行3分", "外帶咖啡專門", "黑糖拿鐵", "冰滴咖啡", "⚠️表定10:30營業/查IG"],
          desc: "藏身波上宮與波上海灘旁若狹 1 丁目（若狭1-20-12）的人氣外帶專門咖啡吧！招牌「沖繩黑糖拿鐵」、海鹽咖啡摩卡與香醇水出し冰滴咖啡深受在地客喜愛，純白簡約的外帶窗台十分好拍，買一杯隨行展開取花與取車旅程剛剛好。",
          tips: "【⚠️ 導遊重要營業提醒】：la cafe&bar TURNER 表定營業時間通常為 **10:30 ~ 17:00（不定休）**，晨間時段營業狀況依官方 Instagram（@turner._2020）公告為主。若 09:05 抵達時尚未開門，可直接步行 3 分鐘前往下一站「hana hana 花店」取花，後續取車北上還有 07:00 即開門的 2024 世界盃冠軍「.uki coffee」能喝到極品手沖！",
          reservationInfo: "外帶專門咖啡吧免訂位；出發前請先確認官方 IG：@turner._2020 當日營業動態。",
          branchTip: "位置就在波上宮與 hana hana 花店正中間，兩邊步行皆僅需 3 分鐘、零繞路！",
          backupOptions: [
            {
              name: ".uki coffee (2024 WCTC世界盃冠軍咖啡 • 07:00 營業)",
              tag: "行程下一站 / 07:00 即開門",
              desc: "若 TURNER 早上尚未開始營業，無須擔心！取完花與跑車後沿國道 58 號北上宜野灣即會經過 07:00 就營業的 .uki 冠軍咖啡。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2764,127.7478&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-3",
          transitFromPrev: {
            mode: "walk",
            duration: "約 3 分",
            distance: "約 250 m",
            route: "自 TURNER COFFEE 沿若狹大通向東南漫步至若狹 2-2-16",
            toll: "無料",
            tips: "從咖啡吧步行約 3 分鐘即達花店，早晨 09:00 已開門營業"
          },
          name: "花の店 はなはな (hana hana 浪漫取花 • 鮮花花束)",
          category: "購物",
          period: "晨間散策",
          image: "thumb-hanahana.jpg",
          time: "09:20 ~ 09:35",
          coords: [26.2199, 127.6757],
          mapCode: "33 186 075*00",
          phone: "098-995-8987",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.219883,127.675728&travelmode=walking",
          color: "#ec4899",
          icon: "💐",
          parkingInfo: "步行前往 / 若狹周邊臨停或收費停車場",
          tags: ["【取花專用站】", "步行3分鐘", "浪漫花束", "跑車自駕儀式感", "09:00營業", "預約取件"],
          desc: "位於那霸市若狹 2 丁目的在地質感花店「花の店 はなはな」。自波上宮與 TURNER COFFEE 散步約 3 分鐘即可輕鬆抵達。早晨 09:00 即開始營業，提前預約之精緻鮮花花束、浪漫捧花於此提領，為接下來的敞篷跑車海岸巡禮注入滿滿儀式感與浪漫氛圍！",
          tips: "【取花與自駕銜接指引】：① 地址：那霸市若狹2丁目2-16（電話：098-995-8987，營業時間 09:00~21:30）；② 從 TURNER COFFEE 沿若狹大通向東南散步僅約 3 分鐘即達；③ 提領花束後，可直接於花店門口使用 Uber / GO App 叫車或路邊攔計程車（車程約 12 分鐘、車資約 ¥1,500）直奔赤嶺 Heat Sports 租車行取敞篷跑車；④ 將花束小心安放在跑車副駕駛座，沿國道 58 號奔馳向北，拍照氛圍感直接拉滿！"
        },
        {
          id: "d2-4",
          transitFromPrev: {
            mode: "taxi",
            duration: "約 12 分",
            distance: "約 5.2 km",
            route: "自花店門口搭計程車經若狹／久茂地直上國道 331 號直達赤嶺門市",
            toll: "車資約 ¥1,500 或 單軌 ¥270",
            tips: "取花後自門口搭計程車直達赤嶺取跑車，出示台灣駕照日文譯本與正本"
          },
          name: "Heat Sports Car Rental (赤嶺取車點檢)",
          category: "交通",
          period: "晨間出發",
          image: "thumb-heatsports.jpg",
          time: "09:50 ~ 10:15",
          coords: [26.1928, 127.6603],
          mapCode: "33 064 748*88",
          phone: "098-857-0819",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.1928,127.6603&travelmode=driving",
          color: "#dc2626",
          icon: "🏎️",
          parkingInfo: "租車站出發（赤嶺站旁步行 5 分鐘）",
          tags: ["跑車租賃", "租期至11/18 19:30", "外觀檢查", "ETC插卡", "敞篷操作"],
          desc: "沖繩專業特色跑車與敞篷車租賃。租車時程自 11/17 09:50 至 11/18 19:30（租滿 34 小時！）。辦理交車手續、檢查全車刮痕拍照錄影、確認油種（Regular紅色油槍）與敞篷開關操作，準備向北狂飆！",
          tips: "務必出示：台灣駕照正本 + 監理所日文譯本 + 護照！10:15 準時出發，將鮮花安放副駕，沿國道 58 號北上前往宜野灣 .uki 冠軍咖啡。"
        },
        {
          id: "d2-5",
          transitFromPrev: {
            mode: "car",
            duration: "約 25 分",
            distance: "約 16 km",
            route: "沿國道 58 號北上經浦添至宜野灣市大山",
            toll: "無料",
            tips: "開敞篷跑車沿國道 58 號北上，直達世界級咖啡冠軍名店"
          },
          name: ".uki coffee (2024 WCTC世界盃杯測冠軍精品咖啡)",
          category: "美食",
          period: "晨光咖啡",
          image: "thumb-uki.jpg",
          time: "10:40 ~ 11:10",
          coords: [26.2764, 127.7478],
          mapCode: "33 374 745*55",
          phone: "098-943-0974",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2764,127.7478&travelmode=driving",
          color: "#059669",
          icon: "☕",
          parkingInfo: "店前專用免費停車位 (約 4 台，自駕便利)",
          tags: ["【務必加入行程】", "2024世界盃冠軍", "營業07:00-17:00", "極簡文青", "國道58號順路"],
          desc: "由 2024 年世界盃杯測大賽 (WCTC) 日本冠軍兼世界第 4 名新田大悟 (Hiro Nitta) 創立的極品咖啡專門店！坐落於宜野灣大山國道 58 號旁，採光通透的極簡空間瀰漫著迷人焙香。早晨 07:00 即開門營業，提供層次極其澄澈的頂級手沖單品咖啡與特調拿鐵，是跑車北上自駕途中的靈魂中繼站！",
          tips: "【營業時間與停車須知】：營業時間為 07:00 ~ 17:00（不定休，公休日可見官方 IG: @uki.coffee）。門口備有 4 個專屬免費停車位。點一杯冠軍手沖或外帶冰美式，啟程接續沖繩高速公路直奔名護！",
          reservationInfo: "無須預約，現場點單手沖製作。內用設有高質感原木吧台與採光座位，亦支援快速外帶。",
          branchTip: "【宜野灣大山旗艦總店】：新田冠軍親自主理之代表作，店內亦有陳列限量烘焙咖啡豆與掛耳包，是極具質感的伴手禮首選！",
          backupOptions: [
            {
              name: "Bloom Coffee Okinawa Ginowan",
              tag: "宜野灣咖啡備案 / 車程3分",
              desc: "位於宜野灣的質感人氣咖啡館，提供精湛義式手沖、海景露台氛圍與招牌厚切法式吐司，環境悠閒。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bloom+Coffee+Okinawa+Ginowan&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-6",
          transitFromPrev: {
            mode: "car",
            duration: "約 40 分",
            distance: "約 48 km",
            route: "宜野灣 IC / 西原 IC → 沖繩自動車道 → 許田 IC",
            toll: "ETC ¥1,040",
            tips: "【🚨 測速重點路段】：經沖繩自動車道下行（往許田方向），於「金武 IC ～ 宜野座 IC（約 KP46）」設有最新半固定式測速照相（白色鐵籠金屬罩）！長直路開闊極易超速，請務必嚴格保持 80 km/h 速限以內！喝完咖啡上高速公路直奔名護，進許田休息站買三矢沙翁。"
          },
          name: "道の駅 許田 (名護海景休息站 ＆ 三矢本舖沙翁)",
          category: "美食",
          period: "古宇利跳島",
          image: "thumb-kyoda.jpg",
          time: "11:50 ~ 12:15",
          coords: [26.5414, 127.9682],
          mapCode: "206 476 706*66",
          phone: "098-054-0880",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.5414,127.9682&travelmode=driving",
          color: "#10b981",
          icon: "🏪",
          parkingInfo: "休息站專屬超大型免費停車場 (約 150 台)",
          tags: ["【🚨KP46測速相機】", "【水族館特惠門票現省¥330】", "日本第一休息站", "三矢本舖開口笑", "三矢球", "海景天橋"],
          desc: "全日本公路休息站冠軍！沖繩高速公路終點許田交流道必經地標。必吃「三矢本舖」現炸黑糖開口笑沙翁與每日限量 QQ 三矢球，走上海景天橋眺望名護灣，並可在服務台購入最划算的水族館特惠門票！",
          tips: "【省錢購票密技 ＆ 停留攻略】：停留約 25 分鐘。物產館售票處販售「美麗海水族館特惠門票」，成人僅約 ¥1,850~¥2,000（現場原價 ¥2,180，每張現省約 ¥180~¥330）！售票處【僅收日圓現金 (Cash Only)】，營業時間 08:30~19:00。下車伸展筋骨買熱騰騰三矢開口笑當點心時，順手購入最超值。",
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
          id: "d2-7",
          transitFromPrev: {
            mode: "car",
            duration: "約 15 分",
            distance: "約 13 km",
            route: "國道 58 號 → 屋我地島 → 縣道 110 號",
            toll: "無料",
            tips: "兩側碧藍海天一線，過橋前南端有觀景展望台"
          },
          name: "古宇利大橋 (海上馳騁 ＆ 翡翠藍海)",
          category: "景點",
          period: "古宇利跳島",
          image: "thumb-kouri.jpg",
          time: "12:15 ~ 12:30",
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
          id: "d2-8",
          transitFromPrev: {
            mode: "car",
            duration: "約 2 分",
            distance: "約 1.2 km",
            route: "古宇利大橋北端上山坡",
            toll: "無料",
            tips: "島上人氣最高排隊美食，店附免費停車場"
          },
          name: "古宇利蝦蝦飯 (KOURI SHRIMP)",
          category: "美食",
          period: "古宇利跳島",
          image: "thumb-kourishrimp.jpg",
          time: "12:30 ~ 13:10",
          bookingTime: "現場排隊 (12:30抵達搶先點餐)",
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
          branchTip: "全沖繩【僅此古宇利島一家總店，無其他分店】！12:30 抵達點餐最順暢，能避開最壅塞人潮。",
          backupOptions: [
            {
              name: "古宇利島 パリッティ (Cafe Paritti • 絕景庭園烤布蕾咖啡)",
              tag: "古宇利島高台 / 營業11:00-18:00",
              desc: "2024新開幕！佔地1,100坪的南國造園海景咖啡館，坐擁無敵古宇利藍海高台視野。招牌「古宇利島冰淇淋烤布蕾（ブリュレ）」外脆內滑，搭配手沖咖啡或熱壓三明治，是島上絕美甜品備案！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Cafe+Paritti+Kouri&travelmode=driving"
            },
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
          id: "d2-9",
          transitFromPrev: {
            mode: "car",
            duration: "約 5 分",
            distance: "約 2.8 km",
            route: "古宇利環島公路至北側 Tinu 浜",
            toll: "停車 ¥100~300",
            tips: "退潮時心形岩石最清晰，步道多珊瑚礁石建議穿好走便鞋"
          },
          name: "古宇利島ハート岩 (心形岩 ＆ 恋守寺社)",
          category: "景點",
          period: "古宇利跳島",
          image: "thumb-heartrock.jpg",
          time: "13:15 ~ 13:45",
          coords: [26.7126, 128.0287],
          mapCode: "485 751 179*22",
          phone: "098-056-2256",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.7126,128.0287&travelmode=driving",
          color: "#ec4899",
          icon: "💖",
          parkingInfo: "心形岩入口處民營停車場 (計次約 ¥100~¥300)",
          tags: ["嵐廣告聖地", "天然心形礁石", "Tinu海灘", "戀愛守護寺社"],
          desc: "位於古宇利島北端 Tinu Beach 的天然雙心奇岩，日本天團「嵐」在此拍攝 JAL 廣告而爆紅。沿著小徑走向海灘，並造訪恋守寺社打卡祈求幸福美滿。",
          tips: "前往沙灘的小石坡路稍微傾斜，建議換穿好走的平底鞋或涼鞋；停留約 30 分鐘後驅車啟程。"
        },
        {
          id: "d2-10",
          transitFromPrev: {
            mode: "car",
            duration: "約 20 分",
            distance: "約 17 km",
            route: "縣道 72 號 → 名護山間聚落",
            toll: "無料",
            tips: "百年古民家森林庭園，享用阿古豬火鍋午餐"
          },
          name: "百年古家 大家 阿古豬 (百年琉球古民家)",
          category: "美食",
          period: "美麗海水族館",
          image: "thumb-ufuya.jpg",
          time: "14:05 ~ 14:45",
          bookingTime: "現場抽號 (14:05已過用餐高峰)",
          coords: [26.6234, 127.9715],
          mapCode: "206 745 056*66",
          phone: "098-053-0280",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6234,127.9715&travelmode=driving",
          color: "#b45309",
          icon: "🥢",
          parkingInfo: "專用超大型免費停車場 (含電動高爾夫球接駁車)",
          tags: ["阿古豬肉麵", "百年古民家", "森林流水庭園", "人氣泡芙"],
          desc: "名護山林間由百年安里家古民宅修復而成的名店。伴著庭院潺潺流水聲，品嚐極致鮮美的阿古豬（Agu）沖繩蕎麥麵與特製泡芙，意境悠遠迷人。",
          tips: "從古宇利開車約 20 分鐘。平日下午 14:00 已過最巔峰午餐人潮，入座極快。午餐供應至 15:00。",
          reservationInfo: "午餐時段（11:00~16:00）僅限現場門口抽號碼牌候位（午餐不開放預約）；晚餐時段（18:00起）可提早透過官方網站 TableCheck 系統線上訂位。",
          branchTip: "大家全沖繩【僅此名護山林總店，無任何市區分店】！全店座位超過 200 席，14:05 抵達人潮已疏解，等候時間極短。",
          backupOptions: [
            {
              name: "CAMEL SANDWICH & SMOOTHIE (本部町超狂手撕豬三明治)",
              tag: "水族館旁 / 營業07:00-15:00",
              desc: "距美麗海水族館僅 8 分鐘車程！美軍風格爆汁煙燻手撕豬肉大三明治與新鮮水果昔，份量十足且出餐快，外帶前往水族館或海邊享用極佳。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=CAMEL+SANDWICH+%26+SMOOTHIE+Motobu&travelmode=driving"
            },
            {
              name: "幸ちゃんそば (Satchan Soba)",
              tag: "清單名店 / 開車12分",
              desc: "Google My Maps 清單名店！名護在地排隊老店，特製伊平屋島水雲沖繩麵與軟嫩軟骨肉，湯頭甘醇清爽。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Satchan+Soba+Nago&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-11",
          transitFromPrev: {
            mode: "car",
            duration: "約 10 分",
            distance: "約 8 km",
            route: "國道 449 號 → 海洋博公園 P7 立體停車場",
            toll: "公園停車無料",
            tips: "導航 P7 北停車場，離水族館入口最近，直奔 15:00 鯨鯊餵食秀"
          },
          name: "沖繩美麗海水族館 (直擊 15:00 鯨鯊餵食秀)",
          category: "景點",
          period: "美麗海水族館",
          image: "thumb-churaumi.jpg",
          time: "14:55 ~ 16:30",
          coords: [26.6943, 127.8779],
          mapCode: "553 075 797*77",
          phone: "098-048-3748",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6943,127.8779&travelmode=driving",
          color: "#0284c7",
          icon: "🐋",
          parkingInfo: "導航至「P7北停車場 (立體停車場)」(離水族館最近且遮陽防曬)",
          tags: ["【避開中午/下午3點入場最佳】", "【門票原價¥2180/許田約¥1850】", "15:00鯨鯊餵食", "黑潮之海", "鬼蝠魟"],
          desc: "從大家驅車抵達。世界級水族館，正好完美趕上 15:00 最震撼的「鯨鯊垂直站立進食秀」！看長達 8 米的巨型鯨鯊仰頭吸入海水，極具魄力。",
          tips: "【避坑時段 ＆ 拍照出片祕技】：① **千萬別中午去！** 中午時段觀光團客與親子家庭爆滿，拍照全擠滿人頭且室內悶熱；② **最佳黃金時間：下午 3 點後入場！** 此時團客大巴紛紛散去，光線轉為柔和，15:00 正好趕上黑潮之海「鯨鯊垂直站立進食秀」，大水槽前拍照極易拍出唯美大片！③ 現場原價成人 ¥2,180（若在許田休息站買特惠票約 ¥1,850~2,000，直接刷條碼入場免排隊購票）。"
        },
        {
          id: "d2-12",
          transitFromPrev: {
            mode: "car",
            duration: "約 5 分",
            distance: "約 3.5 km",
            route: "海洋博公園往本部港方向 Hanasaki Marche",
            toll: "園區免費停車",
            tips: "2樓戶外木平台遠眺瀨底島，稍作休憩喝咖啡"
          },
          name: "星巴克 沖繩本部町店 (Hanasaki Marche 海景門市)",
          category: "美食",
          period: "西岸夕陽",
          image: "thumb-starbucks.jpg",
          time: "16:35 ~ 17:05",
          coords: [26.6853, 127.8847],
          mapCode: "553 046 422*00",
          phone: "098-043-9865",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.6853,127.8847&travelmode=driving",
          color: "#059669",
          icon: "☕",
          parkingInfo: "Ala Mahaina / Hanasaki Marche 商場大型免費停車場",
          tags: ["沖繩最美星巴克", "海景露台", "木質琉球建材", "瀨底島遠眺"],
          desc: "距離水族館僅 5 分鐘車程！座落於 Hanasaki Marche 複合園區，採用沖繩在地琉球石灰岩與杉木建造。戶外露台遠眺瀨底島海峽，喝杯咖啡放鬆小憩。",
          tips: "點杯沖繩限定飲品或抹茶星冰樂，在二樓戶外木平台吹風打卡，身心徹底充飽電。"
        },
        {
          id: "d2-13",
          transitFromPrev: {
            mode: "car",
            duration: "約 45 分",
            distance: "約 46 km",
            route: "沿國道 58 號南下恩納村海岬",
            toll: "門票 ¥100 / 停車無料",
            tips: "傍晚日落時段象鼻岩與東海夕照最美"
          },
          name: "萬座毛海岸絕景 (落日象鼻岩黃金海岸)",
          category: "景點",
          period: "西岸夕陽",
          image: "thumb-manzamo.jpg",
          time: "17:50 ~ 18:30",
          coords: [26.5049, 127.8502],
          mapCode: "206 312 038*55",
          phone: "098-966-8086",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.5049,127.8502&travelmode=driving",
          color: "#e11d48",
          icon: "🌅",
          parkingInfo: "萬座毛遊客中心專用大型免費停車場 (約 300 台)",
          tags: ["【別卡主觀景台/往前走側邊步道】", "【步道門票¥100/停車免費】", "落日象鼻岩", "金色黃昏", "海蝕懸崖"],
          desc: "從本部南下車程約 45 分鐘，抵達時間正好是沖繩日落黃金時刻！夕陽餘暉灑在壯麗的象鼻海蝕洞與碧海之上，金色霞光令人嘆為觀止。",
          tips: "【私房拍照角 ＆ 避開人潮攻略】：① **不要傻傻停留在大觀景台！** 入口正前方的主觀景台永遠擠滿拍照人潮與自拍棒遮擋；② **往前走側邊小步道：** 順著單向步道稍微往前走一小段的側邊視野，人潮大幅減少，角度更能拍出「完整象鼻岩 🏖️ ＋ 無邊海景 🌊 ＋ 絕美夕陽金光」的經典神照！③ 步道門票每人 ¥100（遊客中心自動售票機購票，支援現金或交通 IC 卡，大型停車場免費）。"
        },
        {
          id: "d2-14",
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
          time: "19:15 ~ 19:50",
          bookingTime: "現場點餐 (19:15抵達免排隊)",
          coords: [26.2625, 127.7144],
          mapCode: "33 342 546*22",
          phone: "098-876-6081",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2625,127.7144&travelmode=driving",
          color: "#b45309",
          icon: "🍔",
          parkingInfo: "店前專用 Drive-in 美式停車場 (約 50 台，免費)",
          tags: ["50年代復古", "麥根沙士", "莫札瑞拉漢堡", "霓虹燈草坪"],
          desc: "從恩納村南下西原IC至牧港。沖繩歷史最悠久的 A&W 旗艦店，夜晚巨大的霓虹招牌、美式得來速雨棚與草坪小噴泉宛如置身 60 年代加州。",
          tips: "必點 The A&W 漢堡配炸洋蔥圈、金黃捲捲薯條（Curly Fries），以及裝在冰鎮厚玻璃杯中的麥根沙士（Root Beer，內用可免費續杯）！",
          reservationInfo: "速食餐廳無預約制度。採店內櫃台排隊或戶外美式 Drive-in 車道點餐。",
          branchTip: "【首選牧港店，避開國際通店】：國際通分店室內狹小排隊長；牧港店是全沖繩唯一擁有『50年代復古霓虹燈草坪＋得來速大雨棚』的旗艦總店，座位極多且附設 50 台免費車位！",
          backupOptions: [
            {
              name: "George Restaurant (喬治美式餐廳 辻町總店)",
              tag: "昭和A-Sign老字號 / 營業至22:00",
              desc: "1954年創業的美軍A-Sign名店！手工脆皮墨西哥塔可（Tacos）與薄脆起司披薩極具特色。週一公休，週二晚間正常營業（11:30-22:00）。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=George+Restaurant+Naha&travelmode=driving"
            },
            {
              name: "暖暮拉麵 牧港店",
              tag: "國道58號旁 / 開車2分",
              desc: "九州拉麵冠軍，牧港店附專屬停車場，比起國際通排隊 1 小時的分店，牧港店等候時間短得多。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Danbo+Ramen+Makiminato&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-15",
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
          time: "19:55 ~ 20:30",
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
          id: "d2-16",
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
          time: "20:40 ~ 21:50",
          coords: [26.2618, 127.6975],
          mapCode: "33 339 054*88",
          phone: "098-871-1120",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2618,127.6975&travelmode=driving",
          color: "#dc2626",
          icon: "🛍️",
          parkingInfo: "PARCO CITY 超大型室內立體免費停車場 (約 4000 台)",
          tags: ["【1F全館統一退稅】", "【愛電王最高折7%】", "UTme現場客製T恤", "全沖繩最大旗艦", "22點打烊前免稅"],
          desc: "自 BLUE SEAL 沿臨海道路開車僅 8 分鐘即達西海岸 PARCO CITY。此處擁有全沖繩唯二且設備最齊全的【UTme! 客製化工坊】，足足預留 1 小時 10 分鐘，讓您親自設計印製獨一無二的沖繩專屬紀念 T 恤！",
          tips: "【UTme! 客製 ＆ 商場優惠退稅攻略】：① 一進店直奔 2F UTme! 機台平板設計排版（現場印製需 20 分，21:15 截止收單）；② 採買後於 21:40 取件並辦理退稅（UNIQLO 為專櫃獨立免稅）；③ 全館其他專櫃當日累計滿 ¥5,500 可至 1F 免稅服務台統一辦理；若有逛 1F「EDION 愛電王」買家電，可出示外國人電子優惠券享 10% 免稅 + 最高 7% 折扣！"
        },
        {
          id: "d2-17",
          transitFromPrev: {
            mode: "car",
            duration: "約 15 分",
            distance: "約 8.5 km",
            route: "經西海岸道路南下進入那霸市區",
            toll: "無料",
            tips: "車停周邊收費停車場（夜間最大 ¥400~¥500）"
          },
          name: "返抵那霸飯店卸戰利品 ＆ 跑車停妥",
          category: "住宿",
          period: "晚間返程",
          image: "thumb-nesthotel.jpg",
          time: "22:05 ~ 22:25",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=driving",
          color: "#6366f1",
          icon: "🏨",
          parkingInfo: "高CP首選：步行2分「ザ・パーク西町第3 (夜間最大¥400)」或「タイムズ西1丁目 (夜間¥500)」",
          tags: ["夜間返程", "西海岸快速道路", "卸下戰利品", "周邊平價停車", "準備深夜拉麵"],
          desc: "從 PARCO CITY 沿西海岸快速道路直通飯店（夜間無車僅需 15 分鐘）。跑車停妥於飯店旁步行 2 分鐘的平價露天停車場（夜間僅 ¥400~¥500），將 UTme! 客製衣物與戰利品放回房間稍作梳洗，準備出發享用國際通 4.9 星深夜拉麵宵夜！",
          tips: "【今晚跑車停車推薦】：首推「ザ・パーク西町第3」(那霸市西1-4-14，夜間20:00-08:00僅¥400，全平地免卡底盤)；停妥後搭計程車或散步前往松尾丸幸拉麵。"
        },
        {
          id: "d2-18",
          transitFromPrev: {
            mode: "taxi",
            duration: "約 5 分",
            distance: "約 1.6 km",
            route: "那霸市西町 ➔ 久茂地方向 ➔ 松尾2丁目巷弄",
            toll: "計程車跳表約 ¥600~¥700 / 步行約 12 分",
            tips: "飯店門口搭排班計程車跳表約 5 分鐘直達松尾巷口，亦可悠閒散步前往"
          },
          name: "Ramen Paradise Maruko (ラーメンパラダイス丸幸 • 深夜4.9星濃厚豚骨拉麵)",
          category: "美食",
          period: "深夜宵夜",
          image: "thumb-maruko.jpg",
          time: "22:30 ~ 23:25",
          bookingTime: "現場排隊入座 (營業至深夜 24:00/01:00)",
          coords: [26.2142, 127.6881],
          mapCode: "33 157 325*14",
          phone: "無 (現場直接入座)",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2142,127.6881&travelmode=walking",
          color: "#f43f5e",
          icon: "🍜",
          parkingInfo: "國際通周邊收費停車場 / 徒步漫遊",
          tags: ["【深夜4.9星神級好評】", "濃厚豚骨醬油", "細麵可替玉", "深夜限定", "松尾隱藏版名店"],
          desc: "Google 評價高達 4.9 星的國際通隱藏版拉麵傳奇！隱身在松尾2丁目巷弄內，全店專注單一品項「丸幸拉麵（豚骨醬油）」。湯頭濃郁醇厚、膠質滿滿卻毫無豬肉腥臊味，搭配厚切炙燒叉燒與新鮮青蔥。自駕長途奔波一天後，來上一碗熱騰騰的現煮拉麵，是極致療癒的深夜享受！",
          tips: "【點餐老饕攻略】：營業時間 18:00 至 24:00 (有時營業至深夜 01:00，不定休)。進店後可自選「粗麵」或「細麵」；強烈推薦選細麵，吃完後可追加「替玉（加麵）」！建議出發前可查看官方 Instagram (@ramen_paradise_marukou) 確認當晚營業動態。",
          reservationInfo: "免預約，現場直接入座（夜間翻桌率快）。",
          branchTip: "僅此一家松尾本店，坐落於第一牧志公設市場旁巷弄，夜間氣氛放鬆，是在地夜貓老饕的私藏名單。",
          backupOptions: [
            {
              name: "暖暮拉麵 那霸牧志店",
              tag: "九州拉麵大賞冠軍 / 步行4分",
              desc: "國際通經典豚骨拉麵名店，營業至深夜，濃郁豚骨湯頭配細麵，若遇丸幸臨時休業可作為首選替代方案。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=暖暮拉麵+那霸牧志店&travelmode=walking"
            },
            {
              name: "琉球新麵 通堂 (小祿本店)",
              tag: "深夜拉麵傳奇 / 男人麵女人麵",
              desc: "沖繩最具代表性的拉麵傳奇！招牌焦香黑麻油豚骨湯頭，營業至深夜，宵夜首選！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ryukyu+Shinmen+Tondo+Oroku&travelmode=driving"
            }
          ]
        },
        {
          id: "d2-19",
          transitFromPrev: {
            mode: "walk",
            duration: "約 12 分",
            distance: "約 1.2 km",
            route: "自松尾漫步經久茂地返回西町飯店",
            toll: "無料 (計程車跳表約 ¥600)",
            tips: "拉麵暖胃後漫步散步消食，或隨手招計程車起跳價送返飯店大廳"
          },
          name: "返抵 THE NEST 那霸 ＆ 養精蓄銳好眠",
          category: "住宿",
          period: "深夜返程",
          image: "thumb-nesthotel.jpg",
          time: "23:35 ~ 24:00",
          coords: [26.2127, 127.6745],
          mapCode: "33 156 363*88",
          phone: "098-868-1118",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.2127,127.6745&travelmode=walking",
          color: "#6366f1",
          icon: "🛌",
          parkingInfo: "車輛已妥善停放於周邊平價停車場",
          tags: ["暖心宵夜收尾", "散步消食", "養精蓄銳", "明日首里城與海中道路"],
          desc: "享用完深夜暖心拉麵後，漫步散步消食返回飯店休息，準備明日精采的琉球首里古韻、海中道路兜風與寶可夢中心旗艦巡禮！",
          tips: "明天上午 08:30 出發首里城，今晚好好休息，洗去自駕疲勞！"
        }
      ]
    },
    {
      day: 3,
      date: "2026/11/18",
      weekday: "週三",
      title: "琉球首里古韻 ＆ 海中道路跨海 • 寶可夢旗艦店 • 美國村夕陽夜景",
      subtitle: "壺屋麥當勞早餐 • 首里城 • 達摩寺 • 海中道路跨海 • 濱比嘉島午餐 • 來客夢寶可夢中心 • 美國村Hanon鬆餅 • 日落海灘夕陽 • 赤嶺還車 • 琉球的牛和牛燒肉",
      themeColor: "#8b5cf6",
      highlightNotice: {
        type: "warning",
        title: "還車提醒：19:30 前赤嶺門市還車 ＆ 最晚 17:50 自美國村啟程南下避塞車",
        content: "本日為自駕最後一日（租期至 19:30）。上午探索首里城與達摩寺祈願，中午駛上海天一色的海中道路與濱比嘉島；下午順路橫跨沖繩中部，直奔永旺來客夢朝聖全沖繩唯一「沖繩寶可夢中心」搶購限定花襯衫皮卡丘；隨後漫步北谷美國村、品嚐 Hanon 舒芙蕾海景鬆餅並於日落海灘賞夕陽！為避開國道 58 號下班嚴重車潮，請務必於 17:50 前準時啟程南下，預留 75 分鐘以上車程與加油緩衝，於 19:30 前在赤嶺門市完成交車，搭單軌至久茂地享受頂級「琉球的牛」黑毛和牛慶功宴！"
      },
      transitSummary: {
        totalDrivingTime: "約 2.5 小時",
        totalDistance: "約 85 km",
        mode: "自駕 (19:30前還車) ＋ 單軌",
        tips: "橫跨東岸海中道路、中部來客夢寶可夢旗艦與西岸北谷美國村落日，19:30 赤嶺門市還車後轉單軌至久茂地和牛燒肉"
      },
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
          tags: ["【外圍免費/見學區¥400】", "【單軌票根享8折】", "守禮之邦", "歡會門", "正殿復興見學"],
          desc: "自壺屋開車約 12 分鐘。代表琉球王朝輝煌歷史的世界遺產。穿過經典紅瓦「守禮門」與「歡會門」，2026 年底正殿木造重建工程已進入最後階段，可登上透明見學通道，親眼見證日本頂尖匠師復原金箔琉球龍柱的歷史現場！",
          tips: "【門票與票根折扣密技】：守禮門、歡會門、木曳門等外圍城郭【完全免費參觀】；正殿施工見學區門票成人 ¥400 / 高中生 ¥300 / 中小學生 ¥160 / 未滿6歲免費。出示「單軌電車 1 日券／2 日券」門票享 8 折特惠價（折後成人僅 ¥320）！首里杜館地下停車場 2 小時以內 ¥320。"
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
          tips: "沙灘旁有沖洗洗腳區與洗手間，踩沙踏浪後穿好鞋襪，開車 25 分鐘橫跨中部直達永旺來客夢寶可夢中心！"
        },
        {
          id: "d3-7",
          transitFromPrev: {
            mode: "car",
            duration: "約 25 分",
            distance: "約 17 km",
            route: "縣道 10 號接縣道 85 號線橫跨沖繩中部至北中城",
            toll: "無料 (商場免費停車約4000台)",
            tips: "由東岸海中道路橫跨中部直達北中城來客夢，直奔 1F 官方寶可夢中心"
          },
          name: "沖繩寶可夢中心 (Pokémon Center OKINAWA • 永旺夢樂城來客夢 1F)",
          category: "購物",
          period: "中部旗艦",
          image: "thumb-pokemon.jpg",
          time: "14:40 ~ 15:45",
          coords: [26.3145, 127.7955],
          mapCode: "33 530 406*45",
          phone: "098-923-0720",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3145,127.7955&travelmode=driving",
          color: "#eab308",
          icon: "⚡",
          parkingInfo: "永旺夢樂城來客夢超大型室內外免費停車場 (約 4000 台，自駕無壓力)",
          tags: ["【AEON 95折券/專賣街¥500】", "【沖繩唯一寶可夢旗艦】", "花襯衫皮卡丘", "阿羅拉椰蛋樹", "限定周邊免稅"],
          desc: "全沖繩唯一的官方 Pokémon Center 旗艦店！坐落於永旺夢樂城沖繩來客夢 1 樓。店門口迎賓的是極具視覺震撼的等身大「風速狗與衝浪皮卡丘」造景，以及超巨型阿羅拉椰蛋樹拍照區。店內以南國蔚藍海洋為主題，陳列各世代豐富寶可夢周邊！",
          tips: "【商場優惠券 ＆ 寶可夢限定攻略】：① **AEON 超市/AEON STYLE**：結帳前出示手機「Happy Coupon」享 95 折；② **AEON MALL 專賣店**：可先至 1F 觀光服務台出示護照兌換滿 ¥5,500 折 ¥500 折價券；③ **寶可夢中心**：必買穿著「Kariyushi 花襯衫」的度假皮卡丘、琉舞花笠皮卡丘與風獅爺造型周邊，單筆未稅滿 ¥5,000 出示護照／VJW 條碼可直接辦理免稅！",
          branchTip: "【沖繩獨家旗艦】：全沖繩僅此一家官方旗艦店，來客夢店規模最大、造景最完整、限定品項最齊全！",
          backupOptions: [
            {
              name: "San-A 浦添 PARCO CITY Sanrio / 玩具專區",
              tag: "大型動漫周邊選品",
              desc: "若時間有限，PARCO CITY 亦有大型動漫與卡通角色主題專區可選購伴手禮。",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=PARCO+CITY+Urasoe&travelmode=driving"
            }
          ]
        },
        {
          id: "d3-8",
          transitFromPrev: {
            mode: "car",
            duration: "約 15 分",
            distance: "約 5.5 km",
            route: "沿縣道 85 號向西直達北谷美濱",
            toll: "無料",
            tips: "車程僅 15 分鐘，直達西海岸美國村 Depot Island 免費停車場"
          },
          name: "北谷美濱美國村 Depot Island (異國街區 ＆ 濱海木棧步道)",
          category: "景點",
          period: "西岸美式",
          image: "thumb-american.jpg",
          time: "16:00 ~ 16:35",
          coords: [26.3158, 127.7540],
          mapCode: "33 526 450*55",
          phone: "098-926-5678",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3158,127.7540&travelmode=driving",
          color: "#ea580c",
          icon: "🎡",
          parkingInfo: "Depot Island 海岸專用免費大型停車場 / 美國村公共停車場 (約 1500 台)",
          tags: ["美式海濱市集", "Depot Island", "海邊木棧道", "特色選品", "潮流服飾"],
          desc: "自來客夢開車僅 15 分鐘抵達充滿南加州海濱風情的美國村。Depot Island 彩色斑斕的歐美建築、塗鴉牆、巨型風獅爺公仔與海邊木棧道步道，漫步其間處處是拍照背景！",
          tips: "推薦沿著 Boardwalk 濱海木棧道散步吹海風，店鋪林立沖繩特色古著店、限定海灘拖鞋與夏威夷飾品。"
        },
        {
          id: "d3-9",
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
          branchTip: "美國村僅此一家海景露台總店。下午抵達正好銜接下午茶至日落時段。",
          backupOptions: [
            {
              name: "CC's Chicken & Waffles (美式靈魂炸雞格子鬆餅)",
              tag: "北谷砂邊海岸 / 開車5分",
              desc: "距美國村僅 5 分鐘！若 Hanon 鬆餅等候過久或想吃美式大份量鹹甜美食，首推這家美軍與在地人狂推的經典 Soul Food！金黃爆汁炸雞配現烤格子鬆餅淋楓糖奶油糖漿，極度過癮！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=CC%27s+Chicken+%26+Waffles+Chatan&travelmode=driving"
            },
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
          id: "d3-10",
          transitFromPrev: {
            mode: "walk",
            duration: "約 5 分",
            distance: "約 320 m",
            route: "沿海灘防波堤步道前往 Sunset Beach",
            toll: "無料",
            tips: "11 月中旬沖繩日落約 17:40~17:48，17:15 抵達可完整欣賞金黃晚霞"
          },
          name: "日落海灘 (Sunset Beach 夕陽霞光 ＆ 美國村暮色點燈)",
          category: "景點",
          period: "西岸美式",
          image: "thumb-american.jpg",
          time: "17:15 ~ 17:50",
          coords: [26.3159, 127.7532],
          mapCode: "33 525 803*77",
          phone: "098-936-8273",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.3159,127.7532&travelmode=driving",
          color: "#e11d48",
          icon: "🌅",
          parkingInfo: "美國村 Sunset Beach 專用停車場 (免費)",
          tags: ["西海岸落日", "日落海灘", "17:50務必啟程", "避開58號晚高峰", "保留加油還車緩衝"],
          desc: "傍晚 17:15 漫步至 Sunset Beach 階梯防波堤，搶佔最佳日落視角！11 月沖繩落日約在 17:40~17:48，金色餘暉灑落海面、天色由紫紅轉為寶藍，同時也能捕捉美國村歐式建築初點燈的夢幻暮色！",
          tips: "【關鍵倒數提醒】：國道 58 號與 330 號傍晚 17:30~19:00 為下班嚴重壅塞時段（南下常達 65~80 分鐘）！賞完夕陽餘暉後，**請最晚於 17:50 準時回到跑車發動南下**，先於沿途（北谷/浦添）或赤嶺周邊加滿 Regular 汽油，確保 19:30 前從容完成還車不逾時！"
        },
        {
          id: "d3-11",
          transitFromPrev: {
            mode: "car",
            duration: "約 65~75 分 (含晚高峰)",
            distance: "約 22 km",
            route: "17:50 提早自美國村出發沿國道 58 號南下至赤嶺門市（途中或門市旁加滿油）",
            toll: "無料",
            tips: "【🚨 避塞車 ＆ 測速提示】：17:50 準時啟程走國道 58 號南下，預留晚高峰車潮與加油時間；若改走沖繩自動車道高速南下（上行往那霸），會經過「沖繩北~沖繩南 (KP19.4)」與「中城PA~西原IC (KP8)」兩大半固定式測速照相，切記速限 80 km/h。19:30 前加滿油準時抵達赤嶺門市！"
          },
          name: "Heat Sports Car Rental (赤嶺加滿油 ＆ 完美還車交車)",
          category: "交通",
          period: "傍晚還車",
          image: "thumb-heatsports.jpg",
          time: "19:00 ~ 19:30",
          coords: [26.1928, 127.6603],
          mapCode: "33 064 748*88",
          phone: "098-857-0819",
          googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.1928,127.6603&travelmode=driving",
          color: "#dc2626",
          icon: "🏎️",
          parkingInfo: "門市專用還車點檢車位",
          tags: ["【🚨南下測速提醒】", "19:30準時還車", "預留尖峰緩衝", "加滿油出示收據", "全車外觀點檢"],
          desc: "17:50 自北谷提早啟程南下，預留充裕時間應對國道 58 號下班車潮。還車前於北谷或門市旁加油站將油箱加滿（Regular 紅色油槍，保留發票）。工作人員檢查外觀無損後，34 小時的熱血敞篷跑車自駕之旅完美收官！",
          tips: "交車後步行 3 分鐘至「單軌電車赤嶺站」，搭乘單軌往首里方向（車程僅 8 分鐘 / ¥270）直達「美榮橋站 / 縣廳前站」，從容銜接 19:50 慶功和牛晚宴！"
        },
        {
          id: "d3-12",
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
            },
            {
              name: "琉球新麵 通堂 (小祿本店 / 儀保店)",
              tag: "深夜拉麵傳奇 / 男人麵・女人麵",
              desc: "沖繩最具代表性的拉麵傳奇！招牌「男人麵」（焦香濃郁黑麻油豚骨湯頭）與「女人麵」（甘醇金黃鹽味久米島土雞高湯），佐特製辣豆芽無限享用。營業至深夜，宵夜首選！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ryukyu+Shinmen+Tondo+Oroku&travelmode=driving"
            }
          ]
        },
        {
          id: "d3-13",
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
          tags: ["微醺漫步", "取消密封袋好裝箱", "高單價放上層備查", "明日收官返台"],
          desc: "飽足微醺後吹著初冬涼爽海風，步行 10 分鐘回到 Nest Hotel。洗個熱水澡舒緩兩日自駕疲憊，開始整理 PARCO CITY 客製 T 恤、寶可夢戰利品、名產伴手禮。受惠於 2026/11 退稅新制取消消耗品防拆透明膠袋與 50 萬日圓上限，戰利品可直接拆袋妥善配重裝入大行李箱！",
          tips: "【2026 退稅新制裝箱秘訣】：明日在機場託運行李前，須先刷海關免稅自助機 (KIOSK)；**建議將高單價免稅品（如精品、服飾、大量藥妝）放在行李箱最上層好拿取處**，萬一海關機台亮紅燈抽檢實體商品，開箱 10 秒即可完成查驗！"
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
        title: "16:50 返程航班 ＆ 2026退稅新制死線：14:40 前「先刷海關 KIOSK 再託運行李」！",
        content: "班機於 16:50 起飛、16:20 開始登機。今日搭乘單軌電車（Yui Rail）精準避開塞車！14:10 抵達機場逛完國內線 2F 伴手禮後，【務必先至國際線出發大廳「海關免稅自助機 (KIOSK)」刷護照完成退稅驗證（綠燈放行／紅燈抽檢）】，確認通過後再前往航空公司櫃台託運行李！"
      },
      transitSummary: {
        totalDrivingTime: "無自駕 (市區無車日)",
        totalDistance: "步行約 3.5 km ｜ 單軌 3 趟",
        mode: "單軌電車 ＆ 悠閒徒步",
        tips: "全日單軌＋徒步漫遊！牧志市場 ➔ 國際通 ➔ 新都心 Main Place ➔ 旭橋取行李 ➔ 機場"
      },
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
          tags: ["奇蹟的一哩", "Cat Café MOFF萌貓", "現炸紅芋波浪薯條", "ポテりこ", "黑糖洋芋片", "散步美食"],
          desc: "漫步在沖繩最繁華的「奇蹟的一哩」國際通。不可錯過 Calbee+ 專賣店限定現炸熱點心——招牌「ポテりこ 紅芋薯條」，剛起鍋外皮酥脆滾燙、內餡如泥般綿密香甜，搭配沖繩黑糖洋芋片，邊走邊吃極度過癮！",
          tips: "Calbee+ 店內亦有販售限定包裝的石垣島辣油洋芋片與紅芋薯條伴手禮盒，適合隨手送禮。",
          reservationInfo: "現場點單現炸，製作約需 3~5 分鐘，免預約。",
          backupOptions: [
            {
              name: "Cat Café MOFF 沖縄国際通り店 (久茂地萌貓療癒咖啡館)",
              tag: "國際通起點 / 營業10:00-20:00 / 療癒吸貓",
              desc: "自 Day 1 移至今日上午的專屬療癒站點！位於久茂地 3 丁目（近單軌縣廳前站，JMFビル 3F）。店內約 20 隻超親人品種貓咪與特製彩色拉花拿鐵，早晨在國際通逛街若想歇腳放鬆吸貓，此處是絕佳室內享受！",
              googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Cat+Cafe+MOFF+Okinawa+Kokusai+Dori&travelmode=walking"
            },
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
          tips: "【2026 退稅新制 vs. DFS 差異提醒】：① Main Place 為一般免稅商場（Tax-Free），未稅滿 ¥5,000 採 2026/11 新制「先付含稅價＋服務台數位登錄，於那霸機場海關機台查驗後退回信用卡」；② 隔壁 DFS 為全日本唯一市區關稅免稅店（Duty-Free），結帳當下直接免稅價付款，請妥善保留提貨單，於機場出境安檢後的管制區專屬櫃台憑護照提領！",
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
          name: "國際線出發大廳：海關 KIOSK 退稅查驗 ➔ 託運報到 ➔ 安檢通關 ＆ 16:50 班機賦歸",
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
          parkingInfo: "國際線 3F 出發大廳（先刷海關 KIOSK ➔ 再辦航空公司託運）",
          tags: ["【步驟1】先刷海關KIOSK", "【步驟2】航空公司託運", "DFS管制區提貨", "16:20登機", "平安返台"],
          desc: "14:50 前抵達國際線 3 樓出發大廳！【2026/11 退稅新制最關鍵步驟】：在去航空公司櫃台把大行李箱託運之前，**務必先推著行李至「海關免稅自助機 (KIOSK)」掃描護照完成出境退稅確認**（螢幕亮綠燈即完成雲端核銷放行；若亮紅燈則由海關人員現場抽看行李箱內商品）。確認完畢後，再前往航空公司櫃台辦理 Check-in 與大件行李託運！過安檢進入管制區後，憑單領取 DFS 精品，16:20 登機平安返台！",
          tips: "【2大死線提醒】：① **嚴禁先託運行李才去刷退稅機台**，若行李已進輸送帶卻被抽中紅燈查驗，將導致整筆退稅失敗！② 保溫袋裝 Royce 生巧克力或布丁等凝膠類食品，單件逾 100ml 不可隨身過安檢，請在刷完海關 KIOSK 後、送交航空公司託運前塞入大行李箱內！"
        }
      ]
    }
  ],

  // 出國行前與戰利品 Checklist 預設清單
  defaultChecklists: {
    essentials: [
      { id: "chk-1", text: "護照（有效期限 6 個月以上）", checked: true },
      { id: "chk-2", text: "Visit Japan Web (VJW) 入境 ＋ 免稅 QR Code 開通", checked: true },
      { id: "chk-3", text: "台灣駕照正本 ＋ 監理所日文譯本（自駕必備）", checked: true },
      { id: "chk-4", text: "日幣現金（建議備 3~5 萬日圓雜支）", checked: false },
      { id: "chk-5", text: "雙幣信用卡 / 海外高回饋信用卡（綁定 2026 退稅新制以日圓刷退免匯費）", checked: false },
      { id: "chk-6", text: "日本上網 eSIM / SIM 卡（已安裝確認）", checked: false },
      { id: "chk-7", text: "行動電源（需隨身攜帶，不可託運）", checked: false },
      { id: "chk-8", text: "個人常用藥物（腸胃、止痛、防暈車藥）", checked: false },
      { id: "chk-9", text: "下載日本退稅 App (PIE VAT / Global Blue) 並完成註冊綁卡", checked: false }
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
