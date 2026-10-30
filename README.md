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
