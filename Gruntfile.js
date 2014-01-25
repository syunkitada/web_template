module.exports = function(grunt) {
	// タスクの定義
	grunt.initConfig({
		// css
		cssmin: {
			compress: {
				files: {
					'sample/css/sample.css': 'sample/css/sample.css',
				}
			}
		},
		compass: {
			build: {
				options: {
					'sass-dir': 'src/sass',
					'css-dir': 'sample/css',
				}
			},
		},
		
		// js
		coffee: {
			build: {
				files: {
					'sample/js/sample.js': ['src/coffee/*.coffee']
				}
			}
		},
		concat: {
			combine: {
				src: [ 'src/js/sample_module.js', 'src/js/sample.js' ],
				dest: 'sample/js/sample.js',
			}
		},
		uglify: {
			compress: {
				files: {
					'sample/js/sample.js' : ['src/js/sample_module.js', 'src/js/sample.js']
				}
			}
		},
		
		// ファイル監視とブラウザの自動リロードの設定
		watch: {
			options: {
				interval: 1000
			},
			sass: {
				files: ['src/sass/*.sass'],
				tasks: ['compass'],
				options: {
					livereload: true,
				}
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['concat'],
				options: {
					livereload: true,
				}
			},
			coffee: {
				files: ['src/coffee/*.coffee'],
				tasks: ['coffee'],
				options: {
					livereload: true,
				}
			},
			page: {
				files: [
					'sample/*.html',
				],
				options: {
					livereload: true,
				}
			}
		}
	});

	// パッケージの自動読み込み
	var pkg = grunt.file.readJSON('package.json');
	var taskName;
	for (taskName in pkg.devDependencies) {
		if (taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}
	
	// タスクの登録
	// default で登録したタスクは、grunt コマンドで実行される
	// dist で登録したタスクは、grunt dist　コマンドで実行される (デプロイ用)
	grunt.registerTask('default', ['compass', 'concat', 'connect', 'watch'])
	grunt.registerTask('dist', ['compass', 'cssmin', 'concat', 'uglify'])
};
