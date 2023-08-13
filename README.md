# web-mock-vue
Android/iOSアプリを開発していると、たまに外部サービス連携するためWebサイトと接続することがあります。  
連携時にデータをPOSTすることが多く、その場合はWebViewでゴニョゴニョ実装することになります。
その際、モックサイトがないと不便なのでこのWebモックサイトを作成しました。  

モックサイトのため、FlutterやReactなど色々実装してみてその時々のタイミングで最適なものを選べるのが良いと考えました。  
このリポジトリはVueで作成したverとなります。

実際にはこれだけではなく、POSTデータを受け取るためのサーバーが必要になります。  
私はFirebaseを使うことが多いのでCloudFunctionsを使用するのが癖になっていますが、Cloudflare worksやAWSのLambdaなどが使えると幅が広がると思います。

- 以下のリポジトリは同じものをNext.jsで作成
https://github.com/hotdrop/web-mock

# コマンド

```sh
// 開発
npm run format
npm run dev

// lint
npm run lint

// ビルド
npm run build
```
