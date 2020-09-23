const gulp = require("gulp")
const { scripts } = require('./tasks/scripts')

gulp.task('default', gulp.parallel('scripts'));

exports.scripts = scripts

