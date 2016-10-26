'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/js/**/admin.js', $.gulp.series('admin.js'));
    $.gulp.watch('./source/style/**/*.css', $.gulp.series('postcss'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy.fonts'));
  });
};
