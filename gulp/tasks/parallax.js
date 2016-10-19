'use strict';

module.exports = function() {
  $.gulp.task('parallax.js', function() {
    return $.gulp.src($.path.parallax)
      .pipe($.gp.concat('parallax.min.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
