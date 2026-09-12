// サイト全体で共通の旅行先
// 直前の遷移で渡された診断結果を最優先にし、なければ保存済みの値、最後にデフォルト値を使う。
const TRIP_DESTINATION = (() => {
  const query = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const fromQuery = query ? query.get("destination") : null;

  if (fromQuery) return fromQuery;

  const saved = typeof localStorage !== "undefined"
    ? localStorage.getItem("travelDestination")
    : null;

  return saved || "旅行先";
})();
