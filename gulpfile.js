'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        template: require('./gulp/paths/template.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    rimraf: require('rimraf'),

    nested: require('postcss-nested'),
    short: require('postcss-short'),
    assets: require('postcss-assets'),
    
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()

};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'postcss',
        'pug',
        'js.foundation',
        'js.process',
        'copy.image',
        'css.foundation',
        'copy.fonts',
        'sprite:svg'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
