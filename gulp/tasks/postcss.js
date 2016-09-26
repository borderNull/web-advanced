'use strict';

module.exports = function() {

    $.gulp.task('postcss', function() {

        var processors = [
            $.nested,
            $.short,
            $.assets
        ];

        return $.gulp.src('./source/style/*.css')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.postcss(processors))
            .pipe($.gp.postcss()).on('error', $.gp.notify.onError({ title: 'Style' }))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream());
    })
};
