# デザイン

- XD デザインスペックを参照してください

https://xd.adobe.com/view/531bbdf1-d69d-4776-907c-18e818397f38-0648/grid

# バックエンドAPI

- 以下のファイルをOpenAPIとしてプレビューしてください

```
/doc/api.yaml
```

# ローカル開発環境
## 構築と実行

- 開発にはこのGitHubのコードと、SubModuleで取得するバックエンドAPIを動作させる必要があります

```
docker-compose up
cd api/
make up
```

## ローカルでの動作確認

- Webブラウザからそれぞれ以下にアクセスしてください

### アプリケーション
http://localhost:3000/

### Dynamo DB Local
http://localhost:8000/shell/
