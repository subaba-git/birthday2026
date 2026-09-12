const target = new Date("2026-09-22T00:00:00+09:00").getTime();

const destinationName = document.getElementById("destinationName");
const diagnosisStatus = document.getElementById("diagnosisStatus");
const destination = getTravelDestination();

destinationName.textContent = destination;

if (localStorage.getItem("travelDestination")) {
  const at = localStorage.getItem("travelDiagnosisAt");
  diagnosisStatus.textContent = at ? `最後の診断結果を表示中 · ${new Date(at).toLocaleDateString("ja-JP")}` : "最後の診断結果を表示中";
} else {
  diagnosisStatus.textContent = "まだ診断結果がありません";
}

const countdownEl = document.getElementById("countdown");
const birthdayNotice = document.getElementById("birthdayNotice");
const celebration = document.getElementById("celebration");
let celebrated = false;

function pad(n) { return String(Math.max(0, n)).padStart(2, "0"); }

function updateCountdown() {
  const diff = target - Date.now();
  if (diff <= 0) {
    countdownEl.textContent = "00:00:00:00";
    birthdayNotice.classList.remove("is-hidden");
    if (!celebrated) { celebrated = true; startCelebration(); }
    return;
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  countdownEl.textContent = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startCelebration() {
  ["🎈","🎈","🎈","🎈","🎈"].forEach((emoji, i) => {
    const item = document.createElement("div");
    item.className = "balloon"; item.textContent = emoji;
    item.style.left = `${8 + i * 19 + Math.random() * 6}%`;
    item.style.animationDelay = `${Math.random() * 1.2}s`;
    item.style.animationDuration = `${6 + Math.random() * 3}s`;
    celebration.appendChild(item);
  });
  const confettiEmojis = ["🎉","✨","💗","🎊","⭐"];
  for (let i=0; i<45; i++) {
    const item = document.createElement("div");
    item.className = "confetti"; item.textContent = confettiEmojis[i % confettiEmojis.length];
    item.style.left = `${Math.random() * 100}%`;
    item.style.animationDelay = `${Math.random() * 2}s`;
    item.style.animationDuration = `${3.8 + Math.random() * 2.5}s`;
    celebration.appendChild(item);
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);
