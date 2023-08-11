# tsTestExpress

## 環境構築

### package.json 生成

```
docker exec -it tstestexpress npm install
```

### express インストール

```
docker exec -it tstestexpress npm install express
```

### tsconfig 作成

```
docker exec -it tstestexpress npx tsc --init
```

### パッケージ

#### ts-node

typescript をコンパイルして node.js で実行するやつ

```
docker exec -it tstestexpress npm install -D typescript ts-node @types/node
```

#### エクスプレス

```
docker exec -it tstestexpress npm install -D @types/express
```

#### パーサー

```
docker exec -it tstestexpress npm install --save express body-parser
```

#### nodemon

ファイル変更時に勝手に再起動してくれる

```
docker exec -it tstestexpress npm install --save nodemon
```

## ts ファイルコンパイル

```
docker exec -it tstestexpress tsc
```

## サーバースタート

```
docker exec -it tstestexpress npm run start
```

## tips

| No                                                         | title                               |
| ---------------------------------------------------------- | ----------------------------------- |
| [#1](https://github.com/cossack910/tsTestExpress/issues/1) | ts-node は実行時に使用しない        |
| [#2](https://github.com/cossack910/tsTestExpress/issues/2) | body-parser                         |
| [#3](https://github.com/cossack910/tsTestExpress/issues/3) | モジュ―ルのインポート・エクスポート |
