const BIRTHDAY = "2026-09-22T00:00:00+09:00";

const BIRTHDAY_DATA = {
  name: "なるみ",
  message: `お誕生日おめでとう！<br>
素敵な1年になりますように。<br>
これからもよろしくね。`,
  password: "0763"
};

const target = new Date(BIRTHDAY);

function goToBirthday() {
  if (!location.pathname.endsWith("birthday.html")) {
    location.href = "birthday.html";
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    goToBirthday();
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, "0");
  };

  set("days", days);
  set("hours", hours);
  set("minutes", minutes);
  set("seconds", seconds);
}

function setupBirthdayPage() {
  const name = document.getElementById("name");
  if (!name) return;

  // 本番ではこの判定を有効にする。
  // 確認時だけコメントアウトするとbirthday.htmlを直接開けます。
  // if (new Date() < target) {
  //   location.href = "index.html";
  //   return;
  // }

  document.getElementById("birthdayMessage").innerHTML = BIRTHDAY_DATA.message;

  const giftButton = document.getElementById("giftButton");
  const passwordArea = document.getElementById("passwordArea");
  const passwordInput = document.getElementById("passwordInput");
  const passwordButton = document.getElementById("passwordButton");
  const passwordError = document.getElementById("passwordError");

  giftButton.addEventListener("click", () => {
    passwordArea.classList.remove("hidden");
    giftButton.classList.add("hidden");
    passwordInput.focus();
  });

  const checkPassword = () => {
    if (passwordInput.value === BIRTHDAY_DATA.password) {
      location.href = "roulette.html";
    } else {
      passwordError.textContent = "パスワードが違います。もう一度入力してね。";
      passwordInput.value = "";
      passwordInput.focus();
    }
  };

  passwordButton.addEventListener("click", checkPassword);
  passwordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") checkPassword();
  });
}

setupBirthdayPage();

if (document.getElementById("countdown")) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
