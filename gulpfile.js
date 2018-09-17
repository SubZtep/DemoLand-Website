const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const pug = require('gulp-pug')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const cssnano = require('gulp-cssnano')

gulp.task('pug', () => {
	return gulp.src('pug/index.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(rename({extname: '.php'}))
		.pipe(gulp.dest('public_html'))
})

gulp.task('sass', () => {
	return gulp.src('scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(gulp.dest('public_html/css'))
})

gulp.task('js', () =>
	gulp.src('js/main.js')
		.pipe(plumber())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public_html/js'))
)

gulp.task('default', ['pug', 'sass', 'js'])

gulp.task('watch', ['default'], () => {
	gulp.watch('pug/**/*.pug', ['pug'])
	gulp.watch('scss/**/*.scss', ['sass'])
	gulp.watch('js/**/*.js', ['js'])
})
