const spinButton = document.getElementById("spinButton");
const slotItems = document.getElementById("slotItems");
const result = document.getElementById("rouletteResult");
const travelButton = document.getElementById("travelButton");

let spinning = false;

const gifts = [
  "ヘアアイロン",
  "スニーカー",
  "旅行",
  "お財布",
  "ネックレス",
  "ディズニーチケット"
];

// ヘアアイロンを当たりにするため、
// 最後はリスト先頭の「ヘアアイロン」で停止させる。
const itemHeight = 64;

spinButton.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  spinButton.disabled = true;
  spinButton.textContent = "🎰 ルーレット中…";
  result.classList.add("hidden");

  // 同じ候補を何周も表示して、最後にヘアアイロンへ停止
  const rounds = 8;
  const totalItems = rounds * gifts.length + 1;
  const finalY = -((totalItems - 1) * itemHeight);

  slotItems.innerHTML = "";
  for (let i = 0; i < totalItems; i++) {
    const item = document.createElement("div");
    item.textContent = gifts[i % gifts.length];
    slotItems.appendChild(item);
  }

  slotItems.style.transition = "none";
  slotItems.style.transform = "translateY(0)";
  void slotItems.offsetHeight;

  slotItems.style.transition = "transform 4.5s cubic-bezier(.12,.8,.18,1)";
  slotItems.style.transform = `translateY(${finalY}px)`;

  setTimeout(() => {
    result.classList.remove("hidden");
    spinButton.textContent = "✨ 結果が決まりました！";
    spinning = false;
  }, 4700);
});

travelButton.addEventListener("click", () => {
  location.href = "travel.html";
});
