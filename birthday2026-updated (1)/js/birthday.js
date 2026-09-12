const area = document.getElementById("birthdayConfetti");
for (let i=0; i<45; i++) {
  const c = document.createElement("div");
  c.className = "confetti";
  c.textContent = ["🎉","✨","🎊"][i%3];
  c.style.left = `${Math.random()*100}%`;
  c.style.animationDelay = `${Math.random()*2}s`;
  c.style.animationDuration = `${3 + Math.random()*3}s`;
  area.appendChild(c);
}
for (let i=0; i<10; i++) {
  const b = document.createElement("div");
  b.className = "balloon";
  b.textContent = "🎈";
  b.style.left = `${Math.random()*92}%`;
  b.style.animationDelay = `${Math.random()*2}s`;
  b.style.animationDuration = `${5 + Math.random()*3}s`;
  area.appendChild(b);
}
