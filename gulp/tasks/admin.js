'use strict';

module.exports = function() {
  $.gulp.task('admin.js', function() {
    return $.gulp.src($.path.admin)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('admin.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
