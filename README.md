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

### ライブラリ

```
docker exec -it tstestexpress npm install -D typescript ts-node @types/node
docker exec -it tstestexpress npm install -D @types/express
```

### サーバースタート

```
docker exec -it tstestexpress npm run start
```
