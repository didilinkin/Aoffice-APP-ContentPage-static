var gulp = require('gulp'),
    util = require('gulp-util'),
    // 压缩任务
    imagemin = require('gulp-imagemin'),					// 图片压缩
	pngquant = require('imagemin-pngquant');			    // PNG图片压缩
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