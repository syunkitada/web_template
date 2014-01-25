# web_template

## コマンド
		# nodejsの利用を前提
		
		# 初期セットアップ
		$ npm install
		
		# 監視　& ビルド & livereload
		$ grunt
		
		# ビルド & ファイル圧縮
		$ grund dist

## gruntメモ
Gruntfile.js で監視項目や、タスクの設定を行う。

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
