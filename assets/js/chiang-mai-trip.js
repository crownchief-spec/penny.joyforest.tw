/**
 * 清邁行程單一資料來源（未來可由 LINE / JSON 匯入）
 * @typedef {'flight'|'hotel'|'transport'|'attraction'|'food'|'activity'|'reminder'|'shopping'|'note'|'expense'} ItemType
 */
(function () {
  'use strict';

  var LINE_PLACEHOLDER = '#line-quick';

  var trip = {
    title: '清邁 8 天 7 夜行程',
    subtitle: '水燈天燈・古城・清萊・親子旅行規劃',
    tagline: 'Penny 旅遊不是傳統行程表，而是可以用 LINE 對話快速生成的個人旅行 App 頁面。',
    taglineDetail: '傳航班、住宿訂單、景點、Klook 行程或照片，就能整理成每天可查看、可下載、可分享的 App 型旅遊頁。',
    startDate: '2025-11-24',
    endDate: '2025-12-01',
    city: 'Chiang Mai',
    duration: '8 天 7 夜',
    status: 'planning',
    travelers: [],
    mainHotels: '莫客房 Mo Rooms Hotel / MAYA・寧曼帶（第二段）',
    flightRoute: '台灣 ↔ 清邁 CNX',
    mdBase: 'content/chiang-mai/days/',
    days: [],
    lodgingOverview: [
      {
        range: '11/24–11/28',
        name: '莫客房 Mo Rooms Hotel',
        area: '塔佩／古城一帶',
        booking: 'Agoda 訂單 1721798330',
      },
      {
        range: '11/28–12/1',
        name: 'MAYA／寧曼一帶住宿',
        area: '寧曼商圈周邊',
        booking: '飯店名稱與訂位資料待補',
      },
    ],
    flightsOverview: {
      outbound: {
        title: '台灣 → 清邁 CNX',
        flight_no: '',
        departure_time: '',
        arrival_time: '',
        terminal: '',
        booking_code: '',
        note: '實際時間以訂位信與航空公司公告為準。',
      },
      inbound: {
        title: '清邁 CNX → 桃園 TPE',
        flight_no: 'BR258',
        departure_time: '11:50',
        arrival_time: '16:30',
        terminal: '',
        booking_code: 'FEH6IY',
        note: '長榮航空，行李 2PC。實際以航空公司 App、機場櫃台為準。',
      },
    },
    vouchers: [
      { name: '天燈節預約／接駁', platform: '', orderId: '', meet: '', time: '', contact: '', voucher: '', note: '' },
      { name: '夜間動物園', platform: 'Klook / KKday', orderId: '', meet: '', time: '', contact: '', voucher: '', note: '' },
      { name: '清萊一日遊', platform: '', orderId: '', meet: '', time: '', contact: '', voucher: '', note: '' },
      { name: '廚藝教室', platform: '', orderId: '', meet: '', time: '', contact: '', voucher: '', note: '' },
      { name: '大象保育行程', platform: 'Elephant Jungle Sanctuary', orderId: '', meet: '', time: '', contact: '', voucher: '', note: '' },
      { name: '高空繩索', platform: '', orderId: '', meet: '', time: '', contact: '', voucher: '', note: '' },
    ],
    participants: {
      rows: [
        { name: '', role: '', diet: '', passport: '', contact: '', emergency: '' },
      ],
    },
    budget: {
      flight: '',
      hotel: '',
      transport: '',
      tickets: '',
      food: '',
      shopping: '',
      other: '',
    },
    shoppingGlobal: [
      { item: '', place: '', budget: '', bought: false, note: '' },
    ],
    caveats: [
      { title: '天氣', detail: '' },
      { title: '交通', detail: '' },
      { title: '換宿', detail: 'Day 5 有大件行李移動。' },
      { title: '接送時間', detail: '天燈、夜動、大象等以訂單／主辦通知為準。' },
      { title: '長輩小孩體力', detail: '' },
      { title: '節慶人潮', detail: '水燈／天燈期間市區人潮多。' },
      { title: '備用方案', detail: '' },
    ],
    mapGroups: [
      {
        title: '交通與住宿',
        places: [
          { name: '清邁國際機場 CNX', type: '機場', area: '清邁', map: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+International+Airport', note: '' },
          { name: '塔佩門', type: '地標', area: '古城', map: 'https://www.google.com/maps/search/?api=1&query=Tha+Phae+Gate', note: '' },
          { name: '莫客房 Mo Rooms', type: '飯店', area: '古城', map: 'https://www.google.com/maps/search/?api=1&query=Mo+Rooms+Hotel+Chiang+Mai', note: 'Day1–4' },
          { name: 'MAYA Lifestyle', type: '商圈', area: '寧曼', map: 'https://www.google.com/maps/search/?api=1&query=MAYA+Chiang+Mai', note: '' },
          { name: '寧曼路商圈', type: '商圈', area: '寧曼', map: 'https://www.google.com/maps/search/?api=1&query=Nimmanhaemin+Road+Chiang+Mai', note: '' },
        ],
      },
      {
        title: '市區',
        places: [
          { name: '平河（塔佩一帶）', type: '河岸', area: '古城', map: 'https://www.google.com/maps/search/?api=1&query=Ping+River+Tha+Phae+Chiang+Mai', note: '水燈參考' },
          { name: '清邁古城', type: '區域', area: '市區', map: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+Old+City', note: '' },
          { name: '清邁夜間動物園', type: '景點', area: '近郊', map: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+Night+Safari', note: '' },
        ],
      },
      {
        title: '一日遊與清萊',
        places: [
          { name: 'Elephant Jungle Sanctuary', type: '體驗', area: '近郊', map: 'https://www.google.com/maps/search/?api=1&query=Elephant+Jungle+Sanctuary+Chiang+Mai', note: '' },
          { name: '清萊白廟 Wat Rong Khun', type: '景點', area: '清萊', map: 'https://www.google.com/maps/search/?api=1&query=Wat+Rong+Khun', note: 'Day4' },
          { name: '清萊藍廟', type: '景點', area: '清萊', map: 'https://www.google.com/maps/search/?api=1&query=Wat+Rong+Suea+Ten', note: 'Day4' },
          { name: '清萊黑屋 Baan Dam', type: '景點', area: '清萊', map: 'https://www.google.com/maps/search/?api=1&query=Baan+Dam+Museum', note: 'Day4' },
        ],
      },
    ],
  };

  var mdFiles = {
    1: 'day-01-11-24-loy-krathong.md',
    2: 'day-02-11-25-yi-peng.md',
    3: 'day-03-11-26-parade-night-safari.md',
    4: 'day-04-11-27-chiang-rai.md',
    5: 'day-05-11-28-maya-cooking.md',
    6: 'day-06-11-29-elephant-jungle.md',
    7: 'day-07-11-30-zipline-market.md',
    8: 'day-08-12-01-return.md',
  };

  var dayImages = {
    1: ['assets/images/chiang-mai/S__104144907_0-134a5df8-9de3-4d92-96e9-3c8d222864e5.png'],
    2: ['assets/images/chiang-mai/S__104144908_0-23185aaa-9a3a-471e-8a86-4867e5177276.png'],
    3: ['assets/images/chiang-mai/S__104144909_0-fa374c15-2ec9-4b8d-8108-dde55f34269f.png'],
    4: ['assets/images/chiang-mai/S__104144910_0-476d8f2b-e5ab-469b-84f7-dd583c731d98.png'],
    5: ['assets/images/chiang-mai/S__104144913_0-f37c4b7d-f4ae-4427-a812-24d8638e98bd.png'],
    6: ['assets/images/chiang-mai/elephant-jungle-sanctuary-full-day-promo.png'],
    7: ['assets/images/chiang-mai/S__104144912_0-c8c37c7b-804c-4266-b8eb-7a4f888958e9.png'],
    8: ['assets/images/chiang-mai/S__104144913_0-f37c4b7d-f4ae-4427-a812-24d8638e98bd.png'],
  };

  function itemFlight(o) {
    return {
      type: 'flight',
      fields: o,
    };
  }
  function itemHotel(o) {
    return { type: 'hotel', fields: o };
  }
  function itemTransport(o) {
    return { type: 'transport', fields: o };
  }
  function itemAttraction(o) {
    return { type: 'attraction', fields: o };
  }
  function itemFood(o) {
    return { type: 'food', fields: o };
  }
  function itemActivity(o) {
    return { type: 'activity', fields: o };
  }
  function itemReminder(o) {
    return { type: 'reminder', fields: o };
  }
  function itemNote(o) {
    return { type: 'note', fields: o };
  }
  function itemShopping(o) {
    return { type: 'shopping', fields: o };
  }
  function itemExpense(o) {
    return { type: 'expense', fields: o };
  }

  trip.days = [
    {
      day: 1,
      date: '11/24',
      weekday: 'Mon',
      area: '清邁古城 / 塔佩門 / Ping River',
      title: '抵達清邁・水燈節',
      hotelSummary: '莫客房 Mo Rooms Hotel',
      transportSummary: '台灣 → 清邁 CNX',
      weather: '',
      tags: ['輕鬆抵達日', '水燈節'],
      doneHint: '',
      items: [
        itemFlight({ time: '', title: '台灣 → 清邁 CNX', airport_from: '台灣', airport_to: 'CNX', flight_no: '', booking_code: '', note: '抵達清邁，入境後前往古城塔佩一帶。', map_link: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+International+Airport', status: '待補' }),
        itemHotel({ time: '入住', check_in_date: '11/24', check_out_date: '11/25', hotel_name: '莫客房 Mo Rooms Hotel', area: '塔佩／古城一帶', booking_platform: 'Agoda', booking_number: '1721798330', address: '', map_link: 'https://www.google.com/maps/search/?api=1&query=Mo+Rooms+Hotel+Chiang+Mai', check_in_time: '', check_out_time: '', note: '同城續住至 Day4 晚。' }),
        itemAttraction({ time: '晚上', name: '水燈節・抵達與放水燈', area: 'Ping River、Tha Phae Gate', opening_hours: '', ticket: '', map_link: 'https://www.google.com/maps/search/?api=1&query=Tha+Phae+Gate', note: '抵達後以古城塔佩一帶為主要活動範圍。' }),
        itemReminder({ title: '節奏提醒', detail: '抵達日不要排太滿。', priority: '中', deadline: '' }),
      ],
    },
    {
      day: 2,
      date: '11/25',
      weekday: 'Tue',
      area: '古城 / MAYA / 天燈會場',
      title: '天燈節・泰服與 MAYA 接駁',
      hotelSummary: '續住 莫客房',
      transportSummary: 'MAYA 集合・接駁往會場',
      weather: '',
      tags: ['節慶重點日', '天燈節'],
      doneHint: '',
      items: [
        itemHotel({ time: '住宿', check_in_date: '', check_out_date: '', hotel_name: '續住莫客房 Mo Rooms', area: '塔佩門／古城一帶', booking_platform: '', booking_number: '', note: '同 Day1 飯店。' }),
        itemActivity({ time: '上午', activity_name: '古城泰服拍照', platform: '', meeting_point: '古城一帶', pickup_time: '', contact: '', note: '上午安排泰服拍照，不要排太緊。' }),
        itemTransport({ time: '下午', from: '古城一帶', to: 'MAYA 集合點', method: '自費／步行或雙條', duration: '', cost: '', map_link: 'https://www.google.com/maps/search/?api=1&query=MAYA+Chiang+Mai', note: '前往 MAYA 集合' }),
        itemActivity({ time: '下午', activity_name: '搭乘接駁前往天燈會場', platform: '主辦單位', meeting_point: 'MAYA 集合', pickup_time: '', contact: '', note: '實際以主辦通知為準。' }),
        itemActivity({ time: '晚上', activity_name: '天燈節活動', platform: '', meeting_point: '會場', pickup_time: '', contact: '', note: '以活動接駁時間為主，回程依主辦單位安排。' }),
        itemReminder({ title: '接駁', detail: '以活動接駁時間為主。', priority: '高', deadline: '' }),
      ],
    },
    {
      day: 3,
      date: '11/26',
      weekday: 'Wed',
      area: '古城 / 咖啡 / 夜間動物園',
      title: '古城市區・夜間動物園',
      hotelSummary: '續住 莫客房',
      transportSummary: '晚間接駁往夜動',
      weather: '',
      tags: ['彈性市區日'],
      doneHint: '',
      items: [
        itemHotel({ time: '住宿', hotel_name: '續住莫客房', area: '古城塔佩一帶', note: '同前兩天飯店。' }),
        itemNote({ time: '上午', title: '慢一點開始', content: '前兩天節慶較滿，上午保留休息。', mood: '放鬆' }),
        itemAttraction({ time: '下午', name: '古城與咖啡', area: '古城散步', map_link: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+Old+City', note: '彈性拍照。' }),
        itemActivity({ time: '晚上', activity_name: '夜間動物園', platform: 'Klook / KKday', meeting_point: '依訂單', note: '依平台接送時間調整。' }),
        itemReminder({ title: '夜動接送', detail: '依 Klook / KKday 接送時間。', priority: '中', deadline: '' }),
      ],
    },
    {
      day: 4,
      date: '11/27',
      weekday: 'Thu',
      area: '清萊 / 白廟 / 藍廟 / 黑屋',
      title: '清萊一日遊',
      hotelSummary: '續住 莫客房（最後一晚）',
      transportSummary: '清萊包車一日',
      weather: '',
      tags: ['長途移動日', '清萊'],
      doneHint: '',
      items: [
        itemHotel({ time: '住宿', hotel_name: '續住莫客房', area: '古城', note: '第一段古城住宿最後一晚。' }),
        itemTransport({ time: '整天', from: '清邁市區', to: '清萊', method: '一日遊車程', duration: '長', cost: '', note: '出發通常較早。' }),
        itemAttraction({ time: '白天', name: '白廟 Wat Rong Khun', area: '清萊', map_link: 'https://www.google.com/maps/search/?api=1&query=Wat+Rong+Khun', note: '一日遊其中一站。' }),
        itemAttraction({ time: '白天', name: '藍廟', area: '清萊', map_link: 'https://www.google.com/maps/search/?api=1&query=Wat+Rong+Suea+Ten', note: '' }),
        itemAttraction({ time: '白天', name: '黑屋 Baan Dam', area: '清萊', map_link: 'https://www.google.com/maps/search/?api=1&query=Baan+Dam+Museum', note: '' }),
        itemTransport({ time: '晚間', from: '清萊', to: '清邁市區', method: '回程車程', note: '回到清邁。' }),
        itemReminder({ title: '隔天換宿', detail: '不要排太晚，明天要退房換宿。', priority: '中', deadline: '' }),
      ],
    },
    {
      day: 5,
      date: '11/28',
      weekday: 'Fri',
      area: '古城 → MAYA / 寧曼',
      title: '退房換宿・廚藝教室',
      hotelSummary: '莫客房退房 → MAYA／寧曼（待補飯店名）',
      transportSummary: '搬宿至寧曼一帶',
      weather: '',
      tags: ['換宿日'],
      doneHint: '',
      items: [
        itemHotel({ time: '上午', hotel_name: '莫客房退房', area: '塔佩一帶', check_out_time: '依飯店規定', note: '從古城退房。' }),
        itemTransport({ time: '中午', from: '古城', to: 'MAYA／寧曼一帶', method: '計程／叫車', note: '主要換宿日，有大件行李。' }),
        itemHotel({ time: '入住', hotel_name: 'MAYA／寧曼一帶住宿', area: '寧曼', booking_platform: '', booking_number: '待補', map_link: 'https://www.google.com/maps/search/?api=1&query=Nimman+Chiang+Mai', note: '飯店名稱與訂位待補。' }),
        itemActivity({ time: '下午', activity_name: '廚藝教室', platform: '', meeting_point: '依課程', note: '換宿後排課，行程勿太緊。' }),
        itemReminder({ title: '換宿日', detail: '行李多，排鬆一點。', priority: '高', deadline: '' }),
      ],
    },
    {
      day: 6,
      date: '11/29',
      weekday: 'Sat',
      area: 'MAYA / 寧曼 / Elephant Jungle Sanctuary',
      title: '大象保育全日體驗',
      hotelSummary: '住 MAYA／寧曼一帶',
      transportSummary: '營區接送',
      weather: '',
      tags: ['戶外體驗日'],
      doneHint: '',
      items: [
        itemHotel({ time: '住宿', hotel_name: '住 MAYA／寧曼一帶', area: '寧曼', note: '方便接駁與回市區。' }),
        itemActivity({ time: '早上', activity_name: '大象行程接送', platform: 'EJS', meeting_point: '依訂單市區接駁', pickup_time: '依訂單', note: '依實際接送時間為主。' }),
        itemActivity({ time: '白天', activity_name: '大象保育全日體驗', platform: 'Elephant Jungle Sanctuary', meeting_point: '營區', note: '餵食、互動、自然環境。' }),
        itemNote({ time: '備註', title: '體力', content: '餵食、互動、自然活動。', mood: '充實' }),
        itemReminder({ title: '晚間', detail: '體力消耗大，建議簡單吃飯休息。', priority: '低', deadline: '' }),
      ],
    },
    {
      day: 7,
      date: '11/30',
      weekday: 'Sun',
      area: '寧曼 / 戶外 / 市集',
      title: '高空繩索・週末市集',
      hotelSummary: '住 MAYA／寧曼一帶（最後一晚）',
      transportSummary: '依活動接駁',
      weather: '',
      tags: ['戶外＋市集'],
      doneHint: '',
      items: [
        itemHotel({ time: '住宿', hotel_name: '住 MAYA／寧曼一帶', area: '寧曼', note: '最後一晚。' }),
        itemActivity({ time: '上午', activity_name: '高空繩索半日行程', platform: '', note: '戶外活動。' }),
        itemNote({ time: '下午', title: '彈性休息', content: '保留彈性，不要排太滿。' }),
        itemShopping({ time: '晚上', item: '週末市集、伴手禮', place: '市區／市集', budget: '', note: '散步、採買' }),
        itemReminder({ title: '採買', detail: '回程前可補貨。', priority: '低', deadline: '' }),
      ],
    },
    {
      day: 8,
      date: '12/1',
      weekday: 'Mon',
      area: '清邁 CNX → 桃園 TPE',
      title: '最後採買・回台',
      hotelSummary: '上午退房',
      transportSummary: '飯店 → 機場',
      weather: '',
      tags: ['回程日'],
      doneHint: '',
      items: [
        itemHotel({ time: '上午', hotel_name: '退房', area: '寧曼一帶', note: '整理行李。' }),
        itemFood({ time: '上午', restaurant_name: '早餐與最後採買', meal_type: '早午餐', area: '飯店附近', budget: '', map_link: '', note: '視航班時間安排。' }),
        itemTransport({ time: '依航班', from: '飯店', to: '清邁機場 CNX', method: '叫車／Grab', map_link: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+International+Airport', note: '預留交通與報到時間。' }),
        itemFlight({ time: '11:50 起飛', title: '清邁 CNX → 桃園 TPE', airport_from: 'CNX', airport_to: 'TPE', flight_no: 'BR258', booking_code: 'FEH6IY', note: 'TPE 16:30 抵達。PNR 已登錄。', map_link: 'https://www.google.com/maps/search/?api=1&query=Chiang+Mai+International+Airport', status: '已訂' }),
        itemReminder({ title: '出國報到', detail: '預留交通、報到與安檢。', priority: '高', deadline: '出發前' }),
      ],
    },
  ];

  var TYPE_ICONS = {
    flight: '✈',
    hotel: '🛏',
    transport: '🚐',
    attraction: '📷',
    food: '🍽',
    activity: '⭐',
    reminder: '⚠',
    shopping: '🛍',
    note: '📝',
    expense: '💰',
  };

  var TYPE_LABELS = {
    flight: '航班',
    hotel: '住宿',
    transport: '交通',
    attraction: '景點',
    food: '餐飲',
    activity: '體驗活動',
    reminder: '提醒',
    shopping: '購物',
    note: '筆記',
    expense: '花費',
  };

  function esc(s) {
    if (s == null || s === '') return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function fieldRows(fields, schema) {
    var rows = [];
    Object.keys(schema).forEach(function (k) {
      if (fields[k] != null && fields[k] !== '') {
        rows.push('<div class="tl-field"><span class="tl-field__k">' + esc(schema[k]) + '</span><span class="tl-field__v">' + esc(String(fields[k])) + '</span></div>');
      }
    });
    return rows.length ? '<div class="tl-fields">' + rows.join('') + '</div>' : '';
  }

  var SCHEMAS = {
    flight: { time: '時間', title: '摘要', airport_from: '出發', airport_to: '抵達', flight_no: '航班', booking_code: '訂位代碼', note: '備註', status: '狀態' },
    hotel: { time: '時段', hotel_name: '飯店', area: '區域', check_in_date: '入住日', check_out_date: '退房日', booking_platform: '平台', booking_number: '訂單編號', check_in_time: '入住時間', check_out_time: '退房時間', note: '備註' },
    transport: { time: '時段', from: '從', to: '到', method: '方式', duration: '時長', cost: '費用', note: '備註' },
    attraction: { time: '時段', name: '名稱', area: '區域', opening_hours: '營業', ticket: '票價', note: '備註' },
    food: { time: '時段', restaurant_name: '餐廳', meal_type: '餐別', area: '區域', budget: '預算', note: '備註' },
    activity: { time: '時段', activity_name: '活動', platform: '平台', meeting_point: '集合點', pickup_time: '接人時間', contact: '聯絡', note: '備註' },
    reminder: { title: '提醒', detail: '內容', priority: '優先度', deadline: '期限' },
    shopping: { time: '時段', item: '項目', place: '地點', budget: '預算', note: '備註' },
    note: { time: '時段', title: '標題', content: '內容', mood: '心情' },
    expense: { item: '項目', amount: '金額', currency: '幣別', note: '備註' },
  };

  function renderItemBody(type, fields) {
    var sch = SCHEMAS[type] || {};
    var f = Object.assign({}, fields);
    delete f.map_link;
    return fieldRows(f, sch);
  }

  function itemActions(d, it, hasMap) {
    var dd = String(d.day).padStart(2, '0');
    return (
      '<div class="tl-item-actions">' +
      (hasMap
        ? '<a class="tl-mini-btn" href="' + esc(it.fields.map_link || it.fields.mapLink || '#') + '" target="_blank" rel="noopener">地圖</a>'
        : '<span class="tl-mini-btn tl-mini-btn--ghost" title="地圖網址待補">地圖</span>') +
      '<a class="tl-mini-btn" href="chiang-mai-day.html?day=' + dd + '">筆記</a>' +
      '<a class="tl-mini-btn" href="' + trip.mdBase + mdFiles[d.day] + '" download>下載</a>' +
      '<a class="tl-mini-btn tl-mini-btn--line" href="' + LINE_PLACEHOLDER + '">LINE</a>' +
      '</div>'
    );
  }

  function hasMapLink(f) {
    return !!(f && f.map_link && f.map_link.indexOf('http') === 0);
  }

  function renderItem(it, d, itemIndex) {
    var typ = it.type;
    var f = it.fields;
    var icon = TYPE_ICONS[typ] || '•';
    var label = TYPE_LABELS[typ] || typ;
    var body = renderItemBody(typ, f);
    var imgs = dayImages[d.day] || [];
    var thumb =
      itemIndex === 0 && imgs.length
        ? '<div class="tl-thumbs" role="group" aria-label="當日縮圖">' + imgs.map(function (u) { return '<img src="' + esc(u) + '" width="64" height="48" alt="" loading="lazy" />'; }).join('') + '</div>'
        : '';
    return (
      '<div class="timeline-item-app tl-type-' + typ + '" data-type="' + typ + '">' +
      '<div class="timeline-dot-app" aria-hidden="true"><span class="tld-ico">' + icon + '</span></div>' +
      '<div class="timeline-card-app">' +
      '<div class="tl-card-head"><span class="tl-type-pill">' + esc(label) + '</span></div>' +
      body +
      thumb +
      itemActions(d, it, hasMapLink(f)) +
      '</div></div>'
    );
  }

  function renderDay(d) {
    var dd = String(d.day).padStart(2, '0');
    var tags = (d.tags || []).map(function (t) { return '<span class="day-chip-s">' + esc(t) + '</span>'; }).join('');
    var itemsHtml = d.items
      .map(function (it, idx) {
        return renderItem(it, d, idx);
      })
      .join('');
    return (
      '<section class="day-card-app" id="day-' + dd + '" data-day="' + d.day + '">' +
      '<div class="day-card-app__head">' +
      '<div class="dch-row1"><span class="dch-day">Day ' + d.day + '</span><span class="dch-date">' + esc(d.date) + ' ' + esc(d.weekday) + '</span>' + (d.weather ? '<span class="dch-weather" title="天氣">' + esc(d.weather) + '</span>' : '<span class="dch-weather dch-weather--empty">天氣 —</span>') + '</div>' +
      '<h3 class="dch-title">' + esc(d.title) + '</h3>' +
      '<p class="dch-area">' + esc(d.area) + '</p>' +
      '<div class="dch-tags">' + tags + '</div>' +
      '<dl class="dch-sum">' +
      '<div><dt>今日住宿</dt><dd>' + esc(d.hotelSummary) + '</dd></div>' +
      '<div><dt>今日交通</dt><dd>' + esc(d.transportSummary) + '</dd></div>' +
      (d.doneHint ? '<div><dt>完成度</dt><dd>' + esc(d.doneHint) + '</dd></div>' : '<div><dt>提醒筆數</dt><dd>—</dd></div>') +
      '</dl>' +
      '</div>' +
      '<details class="day-details">' +
      '<summary class="day-details__summary">展開完整時間軸（' + d.items.length + ' 項）</summary>' +
      '<div class="timeline-rail"><div class="timeline-list-app" role="list">' + itemsHtml + '</div></div>' +
      '</details>' +
      '<div class="day-toolbar"><a class="day-toolbar__a" href="chiang-mai-day.html?day=' + dd + '">閱讀筆記</a>' +
      '<a class="day-toolbar__a" href="' + trip.mdBase + mdFiles[d.day] + '" download>下載 .md</a>' +
      '<a class="day-toolbar__a day-toolbar__a--line" href="' + LINE_PLACEHOLDER + '">LINE 新增</a></div>' +
      '</section>'
    );
  }

  function mount() {
    var el = document.getElementById('trip-days-mount');
    if (!el) return;
    el.innerHTML = trip.days.map(renderDay).join('');

    var rail = document.getElementById('day-rail-list');
    if (rail) {
      rail.innerHTML = trip.days
        .map(function (d) {
          return '<a class="day-rail__a" href="#day-' + String(d.day).padStart(2, '0') + '">Day ' + d.day + '</a>';
        })
        .join('');
    }

    // Filter chips
    var filterRoot = document.getElementById('filter-chips');
    if (filterRoot) {
      filterRoot.querySelectorAll('button[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-filter');
          document.querySelectorAll('.timeline-item-app').forEach(function (node) {
            if (v === 'all' || node.getAttribute('data-type') === v) {
              node.classList.remove('is-filtered');
            } else {
              node.classList.add('is-filtered');
            }
          });
          filterRoot.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
        });
      });
    }

    document.querySelectorAll('.app-canvas a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

  window.chiangMaiTrip = trip;
})();
