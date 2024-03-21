# Mandalearn テスト用リポジトリ
## mandalearn環境ファイル
プロジェクトの稼働テストを以下のフローに沿ってご確認お願いいたします。
1. プロジェクトのクローン
```bash
git clone https://github.com/team-mandalearn/Mandalearn.git
```

2. Dockerコンテナ作成
```bash
cd Mandalearn
docker compose build
```

3. バックエンド(Laravel環境設定)
   
  a.  依存関係インストール
  ```bash
   cd backend/src
   composer install
  ```
  b. .envファイルの作成
  backend/srcのルートディレクトリに.envファイルを作成してください
  ※.env.exampleをコピーしてファイル名を.envにしてください
  .envファイル内の以下の項目を修正してください
  ```
   APP_NAME=mandalearn
   DB_HOST=mysql
   DB_DATABASE=mandalearn
   DB_PASSWORD=password
  ```

4. フロントエンド(Next.js環境構築)
  a. 依存関係インストール
  ```bash
  cd frontend/src
  npm init.  (色々と聞かれるけど、全てOKでいいはず)
  npm i next
  ```

5. 稼働テスト
  a. コンテナの起動
  ```bash
  docker compose up -d
  ```
  b. バックエンド起動確認
  http://localhost:8080
  c. フロントエンド起動確認
  http://localhost:3000
  d. phpMyAdmin起動確認
  http://localhost:8081
  e. フロントエンド、バックエンド通信確認
  http://localhost:3000/test
  Mandalearn!!!!
  と出力されたらOKです。
  もし出力されなかった場合、backend/app/config/app.phpの中身が通信許可されているか確認してください。
