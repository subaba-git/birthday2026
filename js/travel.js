const questions = [
  {
    title: "旅行で一番楽しみたいのは？",
    answers: [["🍜 おいしいもの","food"],["🌿 自然・景色","nature"],["🏙️ 街歩き・観光","city"],["♨️ 温泉・のんびり","relax"]]
  },
  {
    title: "旅行中の朝はどうしたい？",
    answers: [["☀️ 朝から動きたい","active"],["☕ のんびり起きたい","relax"],["🥐 おしゃれな朝ごはん","food"],["📸 朝の景色を見たい","photo"]]
  },
  {
    title: "観光するとしたらどれが近い？",
    answers: [["🏛️ 歴史ある街並み","history"],["🌊 海・港","sea"],["🌲 森・山・高原","nature"],["🏙️ 都会のスポット","city"]]
  },
  {
    title: "食べ歩きは好き？",
    answers: [["😍 大好き！","food"],["😊 できればしたい","food"],["😌 ほどほどでOK","relax"],["🤔 観光を優先したい","active"]]
  },
  {
    title: "旅行のペースは？",
    answers: [["🏃 予定いっぱいで動く","active"],["🚶 程よく回る","balanced"],["🛋️ ゆったり過ごす","relax"],["📷 写真を撮りながら歩く","photo"]]
  },
  {
    title: "どんな景色に惹かれる？",
    answers: [["🌊 海を眺めたい","sea"],["⛰️ 山や高原がいい","nature"],["🌇 街の景色・夜景","city"],["🏘️ レトロな街並み","history"]]
  },
  {
    title: "旅行先までの移動は？",
    answers: [["🚃 近めがうれしい","near"],["🚄 多少遠くてもOK","far"],["🚅 電車旅そのものも楽しみたい","train"],["🗺️ 移動時間はあまり気にしない","far"]]
  },
  {
    title: "写真を撮るなら？",
    answers: [["📸 景色をたくさん撮る","photo"],["🍰 食べ物やカフェを撮る","food"],["🏛️ 建物や街並みを撮る","history"],["🫶 2人の思い出をたくさん残す","photo"]]
  },
  {
    title: "旅行で絶対に外せないのは？",
    answers: [["♨️ 癒やし・温泉","relax"],["🍴 ごはん","food"],["🛍️ 観光・ショッピング","city"],["🌳 自然の中で過ごすこと","nature"]]
  },
  {
    title: "少し特別な旅行にするなら？",
    answers: [["💎 おしゃれなホテル・街","city"],["♨️ 温泉旅館","relax"],["🌲 自然の中で非日常","nature"],["🍰 カフェやスイーツ巡り","food"]]
  },
  {
    title: "旅行中にしたいことを2つ選べるなら、より近いのは？",
    answers: [["🚶 観光＋食べ歩き","city"],["🌿 景色＋のんびり","nature"],["📸 街歩き＋写真","photo"],["♨️ 温泉＋ごはん","relax"]]
  },
  {
    title: "最後に、今の気分は？",
    answers: [["🌊 海を見に行きたい！","sea"],["🌲 自然に癒やされたい！","nature"],["🍴 おいしいものを楽しみたい！","food"],["✨ いつもと違う場所へ行きたい！","city"]]
  }
];

const destinations = {
  "伊豆高原": {
    "score": {
      "food": 5,
      "nature": 8,
      "city": 2,
      "relax": 8,
      "active": 3,
      "balanced": 4,
      "photo": 8,
      "history": 2,
      "sea": 7,
      "near": 2,
      "far": 5,
      "train": 2
    },
    "comment": "海と自然、そして温泉。景色を楽しみながらゆったり過ごす誕生日旅行にぴったり！",
    "tags": [
      "🌿 自然",
      "♨️ 温泉",
      "📸 写真"
    ],
    "details": "海沿いの景色や自然を楽しみながら、温泉でのんびり。ふたりでゆっくり過ごしたい旅におすすめ。"
  },
  "河口湖": {
    "score": {
      "food": 4,
      "nature": 9,
      "city": 1,
      "relax": 6,
      "active": 4,
      "balanced": 5,
      "photo": 10,
      "history": 2,
      "sea": 0,
      "near": 3,
      "far": 5,
      "train": 3
    },
    "comment": "富士山と湖の絶景を楽しむ、思い出に残る2日間！",
    "tags": [
      "🗻 富士山",
      "🌊 湖",
      "📸 絶景"
    ],
    "details": "湖畔から富士山を眺めたり、カフェを巡ったり。写真に残したくなる景色がいっぱい。"
  },
  "熱海": {
    "score": {
      "food": 7,
      "nature": 3,
      "city": 7,
      "relax": 9,
      "active": 3,
      "balanced": 5,
      "photo": 7,
      "history": 3,
      "sea": 9,
      "near": 6,
      "far": 2,
      "train": 7
    },
    "comment": "海、温泉、グルメを全部楽しめる、気軽だけど特別な旅へ！",
    "tags": [
      "🌊 海",
      "♨️ 温泉",
      "🍴 グルメ"
    ],
    "details": "アクセスしやすく、温泉街や海辺の散策も楽しめる。1泊2日にちょうどいい旅行先。"
  },
  "下田": {
    "score": {
      "food": 8,
      "nature": 8,
      "city": 2,
      "relax": 7,
      "active": 4,
      "balanced": 4,
      "photo": 9,
      "history": 2,
      "sea": 10,
      "near": 1,
      "far": 7,
      "train": 4
    },
    "comment": "きれいな海とリゾート気分。いつもより少し特別な時間を！",
    "tags": [
      "🏖️ 海",
      "🐟 海鮮",
      "📸 写真"
    ],
    "details": "海を見ながらのんびり過ごしたいならぴったり。海鮮や絶景も楽しめる。"
  },
  "館山・南房総": {
    "score": {
      "food": 8,
      "nature": 8,
      "city": 1,
      "relax": 7,
      "active": 5,
      "balanced": 4,
      "photo": 8,
      "history": 2,
      "sea": 10,
      "near": 4,
      "far": 4,
      "train": 2
    },
    "comment": "海鮮と海、ドライブ気分で楽しむのんびり旅！",
    "tags": [
      "🌊 海",
      "🐟 海鮮",
      "🚗 ドライブ"
    ],
    "details": "海沿いを巡りながら、おいしい海鮮を楽しむ。景色もグルメも欲張れる旅。"
  },
  "鴨川": {
    "score": {
      "food": 6,
      "nature": 9,
      "city": 1,
      "relax": 7,
      "active": 7,
      "balanced": 4,
      "photo": 7,
      "history": 1,
      "sea": 9,
      "near": 3,
      "far": 5,
      "train": 2
    },
    "comment": "海と自然、ちょっとアクティブな観光も楽しめる旅へ！",
    "tags": [
      "🌊 海",
      "🌿 自然",
      "🎡 観光"
    ],
    "details": "海辺を楽しみながら、自然や観光スポットも回れるバランスのいい旅行先。"
  },
  "箱根": {
    "score": {
      "food": 5,
      "nature": 8,
      "city": 2,
      "relax": 10,
      "active": 3,
      "balanced": 6,
      "photo": 8,
      "history": 5,
      "sea": 0,
      "near": 5,
      "far": 4,
      "train": 8
    },
    "comment": "温泉と自然で、誕生日らしい少し贅沢な2日間を。",
    "tags": [
      "♨️ 温泉",
      "🌲 自然",
      "🛌 のんびり"
    ],
    "details": "景色を楽しみながら移動して、温泉でゆっくり。特別感のある誕生日旅行にぴったり。"
  },
  "草津温泉": {
    "score": {
      "food": 7,
      "nature": 6,
      "city": 5,
      "relax": 10,
      "active": 2,
      "balanced": 5,
      "photo": 8,
      "history": 6,
      "sea": 0,
      "near": 1,
      "far": 8,
      "train": 5
    },
    "comment": "温泉をとことん楽しむならここ。湯畑の景色も思い出に残る！",
    "tags": [
      "♨️ 温泉",
      "♨️ 湯畑",
      "🍡 食べ歩き"
    ],
    "details": "温泉街を歩いて、おいしいものを食べて、ゆっくり温泉へ。王道の温泉旅行。"
  },
  "四万温泉": {
    "score": {
      "food": 4,
      "nature": 9,
      "city": 1,
      "relax": 10,
      "active": 1,
      "balanced": 4,
      "photo": 7,
      "history": 2,
      "sea": 0,
      "near": 1,
      "far": 8,
      "train": 2
    },
    "comment": "静かな温泉と自然の中で、ふたりだけの時間をゆっくり。",
    "tags": [
      "♨️ 温泉",
      "🌲 自然",
      "🫶 のんびり"
    ],
    "details": "にぎやかな観光より、静かに癒やされたい気分なら相性抜群。"
  },
  "鬼怒川温泉": {
    "score": {
      "food": 5,
      "nature": 8,
      "city": 3,
      "relax": 9,
      "active": 6,
      "balanced": 6,
      "photo": 8,
      "history": 4,
      "sea": 0,
      "near": 3,
      "far": 6,
      "train": 7
    },
    "comment": "温泉と渓谷の景色を楽しみながら、ほどよく観光も！",
    "tags": [
      "♨️ 温泉",
      "⛰️ 渓谷",
      "📸 景色"
    ],
    "details": "温泉だけでなく周辺観光も楽しめるので、のんびりと観光のバランスがいい旅。"
  },
  "伊香保温泉": {
    "score": {
      "food": 8,
      "nature": 5,
      "city": 6,
      "relax": 10,
      "active": 3,
      "balanced": 6,
      "photo": 8,
      "history": 8,
      "sea": 0,
      "near": 3,
      "far": 6,
      "train": 4
    },
    "comment": "石段の温泉街を歩いて、食べて、ゆっくり温泉へ！",
    "tags": [
      "♨️ 温泉",
      "🏘️ 石段",
      "🍡 食べ歩き"
    ],
    "details": "レトロな温泉街の雰囲気と食べ歩きが魅力。写真も思い出も残せる。"
  },
  "越後湯沢": {
    "score": {
      "food": 9,
      "nature": 8,
      "city": 2,
      "relax": 9,
      "active": 5,
      "balanced": 5,
      "photo": 7,
      "history": 2,
      "sea": 1,
      "near": 2,
      "far": 7,
      "train": 10
    },
    "comment": "新幹線で行く温泉と山の旅。ご当地グルメも楽しみ！",
    "tags": [
      "♨️ 温泉",
      "⛰️ 山",
      "🍴 グルメ"
    ],
    "details": "電車旅も楽しみたいならおすすめ。温泉と自然、地元のおいしいものを満喫。"
  },
  "軽井沢": {
    "score": {
      "food": 7,
      "nature": 10,
      "city": 4,
      "relax": 8,
      "active": 4,
      "balanced": 5,
      "photo": 10,
      "history": 2,
      "sea": 0,
      "near": 1,
      "far": 8,
      "train": 9
    },
    "comment": "高原の自然とカフェ。おしゃれで少し特別な2日間に！",
    "tags": [
      "🌲 高原",
      "☕ カフェ",
      "📸 絶景"
    ],
    "details": "緑の中をのんびり歩いたり、カフェに寄ったり。日常から少し離れて過ごせる旅。"
  },
  "那須高原": {
    "score": {
      "food": 7,
      "nature": 10,
      "city": 1,
      "relax": 8,
      "active": 8,
      "balanced": 5,
      "photo": 8,
      "history": 1,
      "sea": 0,
      "near": 2,
      "far": 7,
      "train": 5
    },
    "comment": "高原の自然を楽しみながら、レジャーもできる欲張り旅！",
    "tags": [
      "🌲 高原",
      "🎢 レジャー",
      "🍴 グルメ"
    ],
    "details": "自然の中で遊びたい、でものんびりもしたい。そんな気分に合う旅行先。"
  },
  "安曇野": {
    "score": {
      "food": 5,
      "nature": 10,
      "city": 1,
      "relax": 10,
      "active": 3,
      "balanced": 4,
      "photo": 10,
      "history": 3,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 4
    },
    "comment": "山と田園の景色に癒やされる、ゆったり大人な旅へ。",
    "tags": [
      "⛰️ 山",
      "🌾 自然",
      "🫶 ゆったり"
    ],
    "details": "絶景や自然を楽しみながら、時間を気にせずゆっくり過ごしたいふたり向け。"
  },
  "松本": {
    "score": {
      "food": 9,
      "nature": 4,
      "city": 8,
      "relax": 4,
      "active": 7,
      "balanced": 6,
      "photo": 8,
      "history": 10,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 7
    },
    "comment": "城下町を歩いて、ご当地グルメを楽しむ観光旅！",
    "tags": [
      "🏯 城下町",
      "🍴 グルメ",
      "🚶 街歩き"
    ],
    "details": "松本城や街並みを楽しみながら、食べ歩きやカフェも楽しめる。"
  },
  "諏訪湖": {
    "score": {
      "food": 5,
      "nature": 9,
      "city": 2,
      "relax": 9,
      "active": 3,
      "balanced": 5,
      "photo": 10,
      "history": 2,
      "sea": 0,
      "near": 1,
      "far": 9,
      "train": 5
    },
    "comment": "湖と山、温泉と景色。静かでロマンチックな旅行に。",
    "tags": [
      "🌊 湖",
      "♨️ 温泉",
      "📸 景色"
    ],
    "details": "湖畔の景色を楽しみながらゆっくり。写真にも思い出にも残る旅。"
  },
  "富士急ハイランド＋どこか": {
    "score": {
      "food": 7,
      "nature": 6,
      "city": 4,
      "relax": 2,
      "active": 10,
      "balanced": 4,
      "photo": 9,
      "history": 1,
      "sea": 0,
      "near": 3,
      "far": 6,
      "train": 6
    },
    "comment": "思いっきり遊んで、もう1か所も楽しむアクティブな2日間！",
    "tags": [
      "🎢 絶叫",
      "🔥 アクティブ",
      "📸 思い出"
    ],
    "details": "アトラクションを楽しみたい気分なら最有力。2日目の行き先を組み合わせる楽しさも。"
  },
  "山形＋蔵王": {
    "score": {
      "food": 10,
      "nature": 10,
      "city": 3,
      "relax": 9,
      "active": 7,
      "balanced": 5,
      "photo": 9,
      "history": 5,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 8
    },
    "comment": "山、温泉、ご当地グルメ。遠出するからこその特別な旅！",
    "tags": [
      "⛰️ 山",
      "♨️ 温泉",
      "🍴 グルメ"
    ],
    "details": "普段より少し遠くまで行って、自然と温泉と食をまとめて楽しむ。"
  },
  "長野＋善光寺": {
    "score": {
      "food": 8,
      "nature": 6,
      "city": 8,
      "relax": 5,
      "active": 6,
      "balanced": 7,
      "photo": 7,
      "history": 10,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 10
    },
    "comment": "歴史ある街を歩いて、おいしいものも楽しむ旅へ！",
    "tags": [
      "⛩️ 歴史",
      "🚶 街歩き",
      "🍴 食べ歩き"
    ],
    "details": "善光寺周辺を散策しながら、長野ならではのグルメを楽しめる。"
  },
  "小布施＋長野": {
    "score": {
      "food": 10,
      "nature": 4,
      "city": 8,
      "relax": 7,
      "active": 4,
      "balanced": 7,
      "photo": 8,
      "history": 9,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 9
    },
    "comment": "栗グルメと街歩き。ゆったりおしゃれな食の旅！",
    "tags": [
      "🌰 栗グルメ",
      "🏘️ 街歩き",
      "📸 写真"
    ],
    "details": "おいしいものを中心に、歴史ある街並みやカフェも楽しみたいならぴったり。"
  },
  "上田＋別所温泉": {
    "score": {
      "food": 7,
      "nature": 5,
      "city": 7,
      "relax": 9,
      "active": 4,
      "balanced": 7,
      "photo": 7,
      "history": 10,
      "sea": 0,
      "near": 1,
      "far": 9,
      "train": 9
    },
    "comment": "城下町と温泉を一度に。観光も癒やしも楽しめる旅！",
    "tags": [
      "🏯 歴史",
      "♨️ 温泉",
      "🚶 街歩き"
    ],
    "details": "上田の街を楽しんだあと、別所温泉でゆっくり。1泊2日にメリハリがある。"
  },
  "日光": {
    "score": {
      "food": 6,
      "nature": 10,
      "city": 4,
      "relax": 8,
      "active": 7,
      "balanced": 7,
      "photo": 10,
      "history": 10,
      "sea": 0,
      "near": 4,
      "far": 6,
      "train": 9
    },
    "comment": "世界遺産と自然、温泉まで。見どころたっぷりの2日間！",
    "tags": [
      "🏛️ 世界遺産",
      "🌲 自然",
      "♨️ 温泉"
    ],
    "details": "歴史ある建物も自然の景色も楽しめる。観光をしっかり楽しみたいときに。"
  },
  "会津若松": {
    "score": {
      "food": 9,
      "nature": 5,
      "city": 8,
      "relax": 5,
      "active": 7,
      "balanced": 6,
      "photo": 8,
      "history": 10,
      "sea": 0,
      "near": 0,
      "far": 10,
      "train": 8
    },
    "comment": "歴史ある街を歩いて、ご当地グルメを満喫する旅へ！",
    "tags": [
      "🏯 歴史",
      "🍴 グルメ",
      "🚶 街歩き"
    ],
    "details": "城や歴史ある街並みを見ながら、会津ならではの食も楽しめる。"
  },
  "福島＋飯坂温泉": {
    "score": {
      "food": 9,
      "nature": 6,
      "city": 7,
      "relax": 10,
      "active": 4,
      "balanced": 7,
      "photo": 7,
      "history": 5,
      "sea": 0,
      "near": 1,
      "far": 9,
      "train": 10
    },
    "comment": "温泉で癒やされながら、街歩きとおいしいものも楽しむ旅！",
    "tags": [
      "♨️ 温泉",
      "🍑 グルメ",
      "🚶 街歩き"
    ],
    "details": "温泉をメインにしつつ、福島ならではの食や観光も楽しめる。"
  },
  "新潟": {
    "score": {
      "food": 10,
      "nature": 4,
      "city": 9,
      "relax": 6,
      "active": 5,
      "balanced": 7,
      "photo": 7,
      "history": 4,
      "sea": 8,
      "near": 0,
      "far": 10,
      "train": 10
    },
    "comment": "海鮮やご当地グルメを満喫！街歩きも楽しめる遠出旅。",
    "tags": [
      "🐟 海鮮",
      "🍶 グルメ",
      "🏙️ 街歩き"
    ],
    "details": "新幹線で遠出して、おいしいものをたくさん楽しみたいならおすすめ。"
  },
  "秩父＋長瀞": {
    "score": {
      "food": 8,
      "nature": 10,
      "city": 3,
      "relax": 6,
      "active": 9,
      "balanced": 6,
      "photo": 9,
      "history": 4,
      "sea": 0,
      "near": 8,
      "far": 2,
      "train": 6
    },
    "comment": "自然の中で遊んで、食べ歩きも！気軽で楽しい1泊2日。",
    "tags": [
      "🌿 自然",
      "🏞️ 川",
      "🍡 食べ歩き"
    ],
    "details": "近めの旅行先で、自然とアクティビティをしっかり楽しみたいときにぴったり。"
  },
  "甲府＋石和温泉": {
    "score": {
      "food": 9,
      "nature": 8,
      "city": 5,
      "relax": 10,
      "active": 4,
      "balanced": 6,
      "photo": 9,
      "history": 4,
      "sea": 0,
      "near": 2,
      "far": 8,
      "train": 7
    },
    "comment": "温泉と山、ワインやグルメも楽しめる大人な旅へ！",
    "tags": [
      "♨️ 温泉",
      "🍷 ワイン",
      "⛰️ 山"
    ],
    "details": "温泉でゆっくりしながら、山梨らしいグルメや景色も楽しめる。"
  }
};

let current = 0;
let selected = [];
let historyValues = [];

const introCard = document.getElementById("introCard");
const quizArea = document.getElementById("quizArea");
const thinkingBox = document.getElementById("thinkingBox");
const resultBox = document.getElementById("travelResult");

function render() {
  const q = questions[current];
  document.getElementById("questionTitle").textContent = q.title;
  document.getElementById("questionNumber").textContent = `QUESTION ${String(current + 1).padStart(2, "0")}`;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.answers.forEach(([label, value]) => {
    const b = document.createElement("button");
    b.className = "answer-button";
    b.textContent = label;
    b.onclick = () => choose(value);
    answers.appendChild(b);
  });

  document.getElementById("progressText").textContent = `${current + 1} / ${questions.length}`;
  document.getElementById("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  document.getElementById("backButton").disabled = current === 0;
}

function startQuiz() {
  introCard.classList.add("is-hidden");
  quizArea.classList.remove("is-hidden");
  render();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function choose(value) {
  selected[current] = value;
  historyValues[current] = value;
  current++;

  if (current < questions.length) {
    render();
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    showThinking();
  }
}

function goBack() {
  if (current <= 0) return;
  current--;
  render();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function showThinking() {
  quizArea.classList.add("is-hidden");
  thinkingBox.classList.remove("is-hidden");
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(showResult, 1450);
}

function showResult() {
  const totals = {};
  Object.keys(destinations).forEach(name => {
    totals[name] = 0;
    Object.keys(destinations[name].score).forEach(key => {
      totals[name] += 0;
    });
  });

  selected.forEach(answer => {
    Object.entries(destinations).forEach(([name, data]) => {
      totals[name] += data.score[answer] || 0;
    });
  });

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const winner = sorted[0][0];
  const destination = destinations[winner];

  // 診断結果を保存。以降のアクセスでは診断ページをスキップする。\n  localStorage.setItem("travelDestination", winner);
  localStorage.setItem("travelDiagnosisCompleted", "true");

  thinkingBox.classList.add("is-hidden");
  resultBox.classList.remove("is-hidden");

  document.getElementById("destinationResult").textContent = winner;
  document.getElementById("destinationComment").textContent = destination.comment;

  const tags = document.getElementById("destinationTags");
  tags.innerHTML = "";
  destination.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tags.appendChild(span);
  });

  document.getElementById("destinationDetails").textContent = destination.details;

  const resultReveal = document.querySelector(".result-reveal");
  resultReveal.classList.add("result-pop");
  setTimeout(() => resultReveal.classList.remove("result-pop"), 650);

  window.scrollTo({top: 0, behavior: "smooth"});
}

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("backButton").addEventListener("click", goBack);
document.getElementById("countdownButton").addEventListener("click", () => {
  location.href = "countdown.html";
});

render();
