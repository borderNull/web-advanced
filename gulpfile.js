'use strict';



global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        template: require('./gulp/paths/template.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        parallax: require('./gulp/paths/parallax.js'),
        app: require('./gulp/paths/app.js'),
        admin: require('./gulp/paths/admin.js')
    },
    gulp: require('gulp'),
    atImport: require('postcss-import'),
    rimraf: require('rimraf'),
    fs: require('fs'),    
    nested: require('postcss-nested'),   
    simpVars: require('postcss-simple-vars'),
    assets: require('postcss-assets'),
    short: require('postcss-short'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()

};


$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean','sprite:svg',
    $.gulp.parallel(        
        'postcss',
        'pug',
        'js.foundation',
        'js.process',
        'parallax.js',
        'admin.js',
        'copy.image',
        'css.foundation',       
        'copy.fonts'

        
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
