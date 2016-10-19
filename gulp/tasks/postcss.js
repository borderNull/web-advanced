'use strict';
module.exports = function() {

    $.gulp.task('postcss', function() {

        var processors = [
            $.atImport,
            $.nested,
            $.short,
            $.assets,
            $.simpVars
        ];

        return $.gulp.src('./source/style/app.css')

        .pipe($.gp.sourcemaps.init())
            .pipe($.gp.postcss(processors)).on('error', $.gp.notify.onError({ title: 'Style' }))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream());
    })
};
