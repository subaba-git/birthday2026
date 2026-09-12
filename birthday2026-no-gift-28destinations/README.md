# birthday2026

すばるからなるみへの誕生日サプライズサイト。

## 通常のアクセス
1. `index.html`（GitHub Pagesのトップ）→ 全員共通で `countdown.html`
2. カウントダウンページで、全員が同じ旅行先・同じ残り時間を見る
3. 2026/9/22になると、全員同じタイミングで風船・紙吹雪が始まる
4. お祝いページ → 旅行の日程

## 旅行先の決め方
- `travel.html` はアキネーター専用ページです。
- 診断した結果をサイト全体に反映するため、診断結果を確認したあと `js/config.js` の
  `TRIP_DESTINATION` を1か所だけ変更してください。
- 例：`const TRIP_DESTINATION = "箱根";`
- 変更後はGitHubへpushすれば、誰がどの端末からアクセスしても同じ旅行先が表示されます。

## サイト構成
- `index.html`：トップ。カウントダウンへ自動移動
- `travel.html`：旅行先アキネーター（12問）
- `countdown.html`：共通カウントダウン
- `birthday.html`：誕生日ページ
- `schedule.html`：旅行の日程
- `js/config.js`：サイト全体の旅行先設定
