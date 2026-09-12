// サイト全体の初期設定
// 管理画面から変更した設定は、このブラウザでは localStorage が優先されます。
const TRIP_DESTINATION = "旅行先";
const DEFAULT_SHOW_DIAGNOSIS = true;

function isDiagnosisEnabled() {
  const saved = localStorage.getItem("showTravelDiagnosis");
  if (saved === null) return DEFAULT_SHOW_DIAGNOSIS;
  return saved === "true";
}

function getTravelDestination() {
  return localStorage.getItem("travelDestination") || TRIP_DESTINATION;
}
