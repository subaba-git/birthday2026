# birthday2026

## アキネーター設定
- `travel.html` は管理者設定が `SHOW_DIAGNOSIS = true` の場合、アクセスのたびに必ず診断を表示します。
- `false` の場合は診断を表示せず `countdown.html` へ移動します。
- ユーザー側のCookie / localStorageには診断結果を保存しません。
- 管理者が決定した旅行先は `TRIP_DESTINATION` で管理し、カウントダウンページにも表示します。

## 管理画面
`admin.html` で設定を作成できます。静的サイトではブラウザからサーバー上のファイルを直接変更できないため、生成された `config.js` を `js/config.js` に置き換えて公開してください。

本当に管理画面の「保存」だけで全ユーザーへ即時反映したい場合は、Firebase / Supabase / 自前APIなどのサーバー側保存先が必要です。
