/**##############################################################################*
 *######################### Global variable #####################################*
 *###############################################################################*/
fis.set('namespace', 'askdog')
fis.set('project.charset', 'utf8');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '.');
fis.set('project.files', ['*.html', '*.css', '*.scss', '*.js', '*.coffee', '*.hbs', '*.hbst']);
fis.set('project.ignore', ['ignore/**', 'output/**', '.git/**', 'fis-conf.js', 'README']);
/*
 * fileType.text default list
 *
 * [ 'css', 'tpl', 'js', 'php', 'txt', 'json', 'xml', 'htm', 'text', 'xhtml', 'html', 'md', 'conf', 'po', 'config', 'tmpl', 'coffee', 'less', 'sass', 'jsp', 'scss', 'manifest', 'bak', 'asp', 'tmp' ]
 */
fis.set('project.fileType.text', ['hbs', 'hbst']);
/*
 * fileType.image default list
 *
 * [ 'svg', 'tif', 'tiff', 'wbmp', 'png', 'bmp', 'fax', 'gif','ico', 'jfif', 'jpe', 'jpeg', 'jpg', 'woff', 'cur' ]
 */
fis.set('project.fileType.image', ['eot', 'ttf', 'woff2', 'swf']);

/**###############################################################################*
 *######################### Settings ############################################*
 *###############################################################################*/
/* CommonJs specification**/
fis.hook('commonjs');                                       // fis3-hook-commonjs(集成)

/* 页面引用资源文件打包,更改引用路径 **/
fis.match('::package', {
    postpackager: fis.plugin('loader', {allInOne: true})    // fis3-postpackager-loader(集成)
});

/**##############################################################################*
 *######################### Library #############################################*
 *###############################################################################*/
/* library css package **/
fis.match('/lib/bootstrap/css/bootstrap.css', {
    packTo: '/assets/styles/askdog.css',
    packOrder: 1
});
fis.match('/lib/bootstrap/css/bootstrap-theme.css', {
    packTo: '/assets/styles/askdog.css',
    packOrder: 2
});
fis.match('/lib/askdog.css', {
    packTo: '/assets/styles/askdog.css',
    packOrder: 3
});
/* library js package **/
fis.match('/lib/jquery/{*,**/*}.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 1
});
fis.match('/lib/json2/{*,**/*}.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 2
});
fis.match('/lib/mod/{*,**/*}.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 3
});
fis.match('/lib/bootstrap/{*,**/*}.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 4
});
fis.match('/lib/handlebars/{*,**/*}.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 5
});
fis.match('/lib/angular/{*,**/*}.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 6
});
fis.match('/lib/askdog.{js,coffee}', {
    packTo: '/assets/scripts/askdog.js',
    packOrder: 7
});

/**##############################################################################*
 *######################### Source ##############################################*
 *###############################################################################*/
/* application scss compile **/
fis.match('/source/(**).scss', {
    useSprite: true,
    rExt: '.css',
    parser: fis.plugin('node-sass'),                         // fis-parser-node-sass(集成)
    packTo: '/assets/styles/application.css'
});

/* application coffee compile **/
fis.match('/source/(**).coffee', {
    id: '/$1',
    isMod: true,
    rExt: '.js',
    parser: fis.plugin('coffee-script'),                     // fis-parser-coffee-script(集成)
    packTo: '/assets/scripts/application.js'
});

/*  application template >> handlebars-4.x > js **/
fis.match('/source/(**).hbst', {
    rExt: '.js',
    parser: fis.plugin('handlebars-4.x')                    // fis-parser-handlebars-4.x(集成)
});

/**##############################################################################*
 *######################### Release #############################################*
 *###############################################################################*/

/* bootstrap fonts */
fis.match('/lib/(**.{eot,svg,ttf,woff,woff2})', {
    release: '/assets/styles/$1'
});

/* images */
fis.match('/source/(**.{png,gif,ico})', {
    release: '/assets/styles/$1'
});

/* views */
fis.match('/source/(**.{html,hbs})', {
    release: '/$1'
});

/* library ignore*/
fis.match('/lib/(**.{css,scss,js,coffee})', {
    release: '../ignore/lib/$1'
});

/* source ignore */
fis.match('/source/(**.{css,scss,js,coffee,hbst})', {
    release: '../ignore/source/$1'
});

/**###############################################################################*
 *######################### Media ###############################################*
 *###############################################################################*/
/* resource files MD5 hash code **/
fis.media('prod').match('*.{js,coffee,css,scss,png,ico}', {
    useHash: true
});
/* javascript files optimizer **/
fis.media('prod').match('*.{js,coffee}', {
    optimizer: fis.plugin('uglify-js')  //fis-optimizer-uglify-js(内置)
});
/* css files optimizer **/
fis.media('prod').match('*.{css,scss}', {
    optimizer: fis.plugin('clean-css')  //fis-optimizer-clean-css(内置)
});