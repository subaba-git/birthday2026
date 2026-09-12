# birthday2026

すばるからなるみへの誕生日サプライズサイト。

## 今回の変更
- 旅行先アキネーターを12問→20問に拡張。自然・海・温泉・グルメ・歴史・街歩き・写真・移動・距離など複数の傾向を組み合わせて判定します。
- `admin.html` を追加。アキネーターを表示する/スキップする設定と、保存済み診断結果のリセットができます。
- `countdown.html` は、アキネーターで最後に決まった旅行先を `localStorage` から表示します。
- `js/config.js` に初期表示設定を追加。

## 管理画面
`admin.html` を開いて設定します。
この設定はブラウザ単位です。GitHub Pagesを見ている全端末に同じ初期設定を配信したい場合は、`js/config.js` の `DEFAULT_SHOW_DIAGNOSIS` を変更してください。

## サイト構成
- `index.html`：設定に応じて `travel.html` または `countdown.html` へ移動
- `travel.html`：20問の旅行先アキネーター
- `countdown.html`：カウントダウン＋最後の診断結果
- `birthday.html`：誕生日ページ
- `schedule.html`：旅行の日程
- `admin.html`：管理画面
- `js/config.js`：初期設定・共通設定
- `js/travel.js`：診断ロジック
