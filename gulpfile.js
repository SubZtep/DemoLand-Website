const
	prod = process.env.NODE_ENV === 'production',
	path = require('path'),
	destDir = path.join(__dirname, './public_html'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	babel = require('gulp-babel'),
	//rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	cssnano = require('gulp-cssnano'),
	minify = require('gulp-babel-minify'),
	preprocess = require('gulp-preprocess'),
	gulpif = require('gulp-if')

gulp.task('html', () => {
	return gulp.src('pug/index.pug')
		.pipe(plumber())
		.pipe(pug({
			verbose: true,
			pretty: !prod,
			globals: [prod]
		}))
		.pipe(preprocess())
		//.pipe(rename({extname: '.php'}))
		.pipe(gulp.dest(destDir))
})

gulp.task('css', () => {
	return gulp.src('scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulpif(prod, cssnano()))
		.pipe(gulp.dest(destDir))
})

gulp.task('js', () =>
	gulp.src([
		//'node_modules/babel-polyfill/dist/polyfill.js',
		'js/main.js'
	])
		.pipe(plumber())
		.pipe(gulpif(prod, babel({
			presets: [[
				'@babel/env',
				{
					targets: {
						browsers: [
							'last 2 versions',
							'IE >= 11'
						]
					},
					useBuiltIns: 'entry'
				}
			]]
		})))
		.pipe(gulpif(prod, minify({
			removeConsole: true
		})))
		.pipe(gulp.dest(destDir))
)

gulp.task('watch', gulp.parallel('html', 'css', 'js', () => {
	gulp.watch(
		'pug/**/*.pug',
		gulp.parallel('html')
	)
	gulp.watch(
		'scss/**/*.scss',
		gulp.parallel('css')
	)
	gulp.watch(
		'js/**/*.js',
		gulp.parallel('js')
	)
}))

gulp.task('default', gulp.parallel('html', 'css', 'js', done => {
	done()
}))
