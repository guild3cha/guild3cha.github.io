# サブカル研究会GUILD 公式サイト（GitHub Pages版）

作成：2026-10-30
土台：一般向けモックアップ `guild-top-mockup-public.html`（Shun提供の完成版）を、そのままの文案・デザインで GitHub Pages に載せられる形に分解したもの。

## モックアップからの変更点（公開用に最低限だけ）
- base64埋め込み画像10点（うち重複2点）を `assets/images/` の8ファイルに分離、CSSを `assets/style.css` に分離
- タイトルを「サブカル研究会GUILD 公式サイト」に変更、meta description / OGP / favicon を追加
- 末尾の「モックアップです」という注記を削除
- ダミーリンク `href="#"` を全て実リンク化：ヘッダーナビとボタンはページ内アンカー（#about / #activities / #news / #reports / #works / #join / #links）
- 公式noteボタンはURL未確定のため削除（URLが決まれば SNS セクションに1行足すだけ）
- 活動実績カードは記事ページがまだ無いため #reports へのアンカーに変更（記事ページを作ったら各カードのリンク先を差し替える）

## 公開手順（GitHub Pages）
1. GitHubで **Public** リポジトリを作成（推奨名：`guild-official-site`。Organization `guild3cha` が作ってあればその下に）
2. このフォルダの中身を push（`git push -u origin main`）
3. リポジトリ Settings > Pages > Build and deployment > Source = **GitHub Actions** を選択
4. push をきっかけに Actions の `Deploy static site to GitHub Pages` が走り、数分で公開される
5. 公開URL：
   - Organization／個人リポジトリの場合：`https://<アカウント名>.github.io/guild-official-site/`
   - アカウント名と同名のリポジトリ（`<アカウント名>.github.io`）にした場合はルートURLで公開される

注意：GitHub Pages の Free プランは Public リポジトリのみ。公開したくない下書きは置かないこと。

## 更新のやり方
- 文案・デザインの修正：`index.html`（本文）と `assets/style.css`（見た目）を編集して push すれば自動で再公開される
- 写真の差し替え：`assets/images/` の同名ファイルを差し替える
- お知らせの追加：現状は `index.html` の「お知らせ」リスト（`.news-list`）に1行足す形

## 本番運用についてのメモ
- 本命の構成（Astro＋Pages CMS＋Cloudflare Pages、記事をフォームから編集できる形）は `guild-astro-site/` に別途用意済み。このPages版は「とりあえず公開する」ための先行公開用で、後から同じGitHubリポジトリ／アカウントのまま移行できる
- 独自ドメインを使う場合は Settings > Pages > Custom domain から追加する

## v2（2026-11-01）完成版への改修
- メニュー再編：デスクトップは「GUILDについて／活動紹介／お知らせ・活動実績／作品・頒布物／よくある質問／入会案内」の6項目に整理。「お問い合わせ」はSNSセクション（#links）へ統合
- モバイルメニューを実装：ハンバーガーボタンで開閉するパネル（従来は装飾のみで動作しなかった）。動作は `assets/site.js`
- お知らせ・活動実績を独立ページ化：一覧 `news/index.html` と記事6本（c109／emotional／sancha-2026／comiket108／setacon／game-event）。トップのお知らせ行と活動実績カード、作品画像から各記事へリンク
- 記事の追加方法：`news/` の既存記事を複製して日付・タイトル・本文・写真を差し替え、`news/index.html` の一覧とトップの該当行／カードのリンクを更新する
- FAQをアコーディオン（details要素）化、フッターにメニュー追加、ページ上部へ戻るボタン追加
- OGP／canonical を公開URL（https://guild3cha.github.io/guild-official-site/）の絶対URLに変更、`robots.txt` と `sitemap.xml` を追加、404は絶対パス化（深い階層でも崩れないように）

## v3（2026-11-01）メイン画像差し替え／スマホ・ダークモード対応
- メイン画像を飛行船キービジュアルから、Shun提供のイベント写真（ブースとメンバー、キャッチコピー入り）に変更。提供画像はロゴ帯＋写真の縦長合成だったため、写真部分だけを切り出して `assets/images/hero-event.jpg` とした（原版はサイト外のデザイン素材フォルダに保管）。写真内のキャッチと二重にならないよう、ヒーローのライブテキスト重ねは廃止
- ヒーロー表示方式を変更：縦長写真を切り抜かず全体表示し、余白は同じ写真のぼかし拡大で埋める（PC／スマホとも文字が切れない）
- スマホ調整：ヘッダーとCTAのサイズ、ヒーロー下ボタンの幅、お知らせ行の余白などを最適化
- ダークモード対応：`prefers-color-scheme` に自動追従。全ページ共通CSSで背景・文字・枠線・ボタンを暗色用に切替え、白地ロゴ画像にはダーク時だけ白いプレート＋角丸を付けて浮かないようにした。端末側の設定変更だけで切替わり、サイト側トグルはなし
- 旧メイン画像 `keyvisual-airship.jpg` は未使用としてリポジトリに残置（戻したくなったら index.html の hero と og:image の差し替えのみで復帰可能）
