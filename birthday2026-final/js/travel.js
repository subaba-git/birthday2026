const questions = [
  {
    text: "旅行では何を一番楽しみたい？",
    answers: [
      ["おいしいものを食べたい", "food"],
      ["景色や自然を楽しみたい", "nature"],
      ["街を歩いたり買い物したい", "city"],
      ["ゆっくり温泉やホテルで過ごしたい", "relax"]
    ]
  },
  {
    text: "旅行の雰囲気はどれが好き？",
    answers: [
      ["のんびり・ゆったり", "relax"],
      ["おしゃれ・都会的", "city"],
      ["海・自然・開放感", "nature"],
      ["歴史・街並み・食べ歩き", "food"]
    ]
  },
  {
    text: "移動時間はどうしたい？",
    answers: [
      ["できるだけ短くしたい", "near"],
      ["少しくらいなら遠くてもOK", "far"],
      ["移動そのものも楽しみたい", "train"]
    ]
  },
  {
    text: "2日間ならどんな過ごし方が理想？",
    answers: [
      ["観光をたくさんしたい", "active"],
      ["1〜2か所をゆっくり回りたい", "relax"],
      ["写真をいっぱい撮りたい", "photo"],
      ["おいしいもの中心がいい", "food"]
    ]
  }
];

const destinations = {
  yokohama: {
    name: "横浜",
    emoji: "🌃",
    description: "おしゃれな街歩き、海、夜景、グルメをバランスよく楽しめる2日間。"
  },
  kamakura: {
    name: "鎌倉・江ノ島",
    emoji: "🌊",
    description: "海を見ながら街歩き。カフェや食べ歩きも楽しめる、のんびり旅。"
  },
  hakone: {
    name: "箱根",
    emoji: "♨️",
    description: "温泉と自然を満喫するゆったり旅。2日間で非日常を楽しむのにぴったり。"
  },
  kawagoe: {
    name: "川越",
    emoji: "🏮",
    description: "小江戸の街並みを歩きながら、食べ歩きやカフェを楽しむ旅。"
  },
  karuizawa: {
    name: "軽井沢",
    emoji: "🌲",
    description: "自然とおしゃれなスポットを楽しみながら、少し特別な休日を過ごせる旅。"
  }
};

let current = 0;
let scores = {
  yokohama: 0,
  kamakura: 0,
  hakone: 0,
  kawagoe: 0,
  karuizawa: 0
};

const questionEl = document.getElementById("question");
const questionNumberEl = document.getElementById("questionNumber");
const answersEl = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const thinking = document.getElementById("thinking");
const travelResult = document.getElementById("travelResult");

function showQuestion() {
  const q = questions[current];

  questionNumberEl.textContent = `QUESTION ${current + 1} / ${questions.length}`;
  questionEl.textContent = q.text;
  progressBar.style.width = `${(current / questions.length) * 100}%`;

  answersEl.innerHTML = "";

  q.answers.forEach(([label, type]) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = label;
    button.addEventListener("click", () => answer(type));
    answersEl.appendChild(button);
  });
}

function answer(type) {
  // 回答を旅行先の傾向に変換
  if (type === "food") {
    scores.kawagoe += 3;
    scores.kamakura += 2;
    scores.yokohama += 2;
  }
  if (type === "nature") {
    scores.karuizawa += 3;
    scores.hakone += 3;
    scores.kamakura += 2;
  }
  if (type === "city") {
    scores.yokohama += 4;
    scores.karuizawa += 1;
  }
  if (type === "relax") {
    scores.hakone += 4;
    scores.karuizawa += 2;
  }
  if (type === "near") {
    scores.kawagoe += 2;
    scores.yokohama += 2;
    scores.kamakura += 2;
  }
  if (type === "far") {
    scores.karuizawa += 3;
    scores.hakone += 2;
  }
  if (type === "train") {
    scores.karuizawa += 2;
    scores.kamakura += 2;
  }
  if (type === "active") {
    scores.yokohama += 2;
    scores.kamakura += 2;
    scores.kawagoe += 2;
  }
  if (type === "photo") {
    scores.kamakura += 3;
    scores.yokohama += 2;
    scores.karuizawa += 2;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    finish();
  }
}

function finish() {
  answersEl.classList.add("hidden");
  questionEl.classList.add("hidden");
  questionNumberEl.classList.add("hidden");
  thinking.classList.remove("hidden");
  progressBar.style.width = "100%";

  setTimeout(() => {
    thinking.classList.add("hidden");

    const destination = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])[0][0];

    const data = destinations[destination];

    document.getElementById("destinationEmoji").textContent = data.emoji;
    document.getElementById("destinationName").textContent = data.name;
    document.getElementById("destinationDescription").textContent = data.description;

    travelResult.classList.remove("hidden");
  }, 1400);
}

document.getElementById("restartButton").addEventListener("click", () => {
  current = 0;
  scores = {
    yokohama: 0,
    kamakura: 0,
    hakone: 0,
    kawagoe: 0,
    karuizawa: 0
  };

  answersEl.classList.remove("hidden");
  questionEl.classList.remove("hidden");
  questionNumberEl.classList.remove("hidden");
  travelResult.classList.add("hidden");
  showQuestion();
});

showQuestion();
