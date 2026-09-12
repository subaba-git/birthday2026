# birthday2026

スマホ向けの誕生日サプライズサイトです。

## ページの流れ

1. `index.html`
   - 2026/09/22 0:00までカウントダウン
2. `birthday.html`
   - 誕生日メッセージ
   - 「プレゼントをオープン」
   - 4桁パスワード `0763`
3. `roulette.html`
   - 6種類のプレゼントからルーレット演出
   - 結果は「ヘアアイロン」に固定
4. `travel.html`
   - アキネーター風の4問
   - 回答から旅行先を診断
   - 2026/09/22〜09/23の旅行先を提案

## GitHub Pages

Repository:
https://github.com/subaba-git/birthday2026

Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save

公開URL:
https://subaba-git.github.io/birthday2026/

## 誕生日ページを現在確認する

`js/script.js` の以下を一時的にコメントアウトします。

```js
if (new Date() < target) {
  location.href = "index.html";
  return;
}
```

確認が終わったら必ず元に戻してください。

## 変更しやすい場所

`js/script.js`
- 名前
- 誕生日メッセージ
- パスワード

`js/roulette.js`
- ルーレットの演出

`js/travel.js`
- 旅行先
- 質問
- 回答
- 診断ロジック


## 今回の設定

- 誕生日の名前：なるみ
- 制作者：すばる
- パスワード：0763
- ルーレット候補：
  - ヘアアイロン
  - スニーカー
  - 旅行
  - お財布
  - ネックレス
  - ディズニーチケット
- ルーレット結果：ヘアアイロン（固定）
