var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'), 				// sass编译
    // 压缩任务
    imagemin = require('gulp-imagemin'),		// 图片压缩
	pngquant = require('imagemin-pngquant');    // PNG图片压缩
    // Sass编译任务
	gulp.task('sass', function () {
		return gulp.src('./src/sass/*.sass')
			// 输出格式 + 错误输出
			.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
			// 输出位置
			.pipe(gulp.dest('./src/css'))
	});

    // 图片压缩
    gulp.task('imagemin',function(){
		gulp.src('./src/images/*.{png,jpg,gif,ico}')
			.pipe(imagemin({
				progressive: true,
				svgPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest('./build/img'));
	});
    gulp.task('default', ['imagemin'])
