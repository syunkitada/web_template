# web_template

## 使い方
		# nodejsの利用を前提

		# 作業フォルダに設定ファイルを移動します
		$ cp Gruntfile.js [project folder]
		$ cp package.json [project folder]
		$ mv [project folder]
		
		# nodeモジュールをインストールします
		$ npm install
		
		# gruntの設定を行います
		$ vim Gruntfile.js
		ガリガリ...
		
		# 監視　& ビルド & livereload
		$ grunt
		
		# ビルド & ファイル圧縮
		$ grund dist

## publicフォルダ、srcフォルダについて
これらは、サンプルです。  
publicフォルダは、ドキュメントルートを想定にしています。  

開発環境では、srcフォルダ内でjsやsassファイルを作成して編集し、
gruntでこれらを監視して変更があった場合に、jsを結合したり、sassからcssにコンパイルして
作成されたファイルをpublicフォルダ内に置くようにしています。

## gruntメモ
Gruntfile.js で監視項目や、タスクの設定を行う。

livereloadを利用する場合は、以下のjsを読み込ませます。

        <script src="http://localhost:35729/livereload.js"></script>

## nodeメモ
プロジェクトフォルダの初期化

		$ npm init
		> package.json が作られる

パッケージインストール

		# ワーキングディレクトリで、
		$ npm install grunt --save-dir

インストールすると、package.jsonに以下のような記述が追加される(--save-devオプションが必要)

		"devDependencies": {
			"grunt": "~0.4.1",
		}

また、node_moduleディレクトリが作成され、ここにパッケージがインストールされる。  
node_moduleディレクトリは、削除してもpackage.json があれば、  

		$ npm install
		
で、すぐにパッケージをインストールできる。  
