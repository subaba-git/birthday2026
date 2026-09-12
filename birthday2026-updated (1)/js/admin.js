const toggle = document.getElementById("toggleDiagnosis");
const desc = document.getElementById("settingDescription");
const current = document.getElementById("currentDestination");
const reset = document.getElementById("resetDiagnosis");

function refresh() {
  const enabled = isDiagnosisEnabled();
  toggle.textContent = enabled ? "ON" : "OFF";
  toggle.classList.toggle("is-on", enabled);
  desc.textContent = enabled ? "トップアクセス時に診断画面を表示します。" : "トップアクセス時に診断をスキップします。";
  current.textContent = getTravelDestination();
}
toggle.addEventListener("click", () => {
  localStorage.setItem("showTravelDiagnosis", String(!isDiagnosisEnabled()));
  refresh();
});
reset.addEventListener("click", () => {
  localStorage.removeItem("travelDestination");
  localStorage.removeItem("travelDiagnosisCompleted");
  localStorage.removeItem("travelDiagnosisAt");
  refresh();
});
refresh();
