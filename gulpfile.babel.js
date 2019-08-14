const gulp = require('gulp'),
    pug = require('gulp-pug'), //https://www.npmjs.com/package/gulp-pug
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    fs = require("fs"),
    colors = require('colors'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    express = require('express'),
    bs = require('browser-sync').create(),
    reload = bs.reload,
    exec = require("child_process").exec,
    multiDest = require("gulp-multi-dest"),
    cleanCSS = require('gulp-clean-css'),
    shell = require('gulp-shell'),
    path = require('path');

const appRoot = path.resolve(__dirname);

const log = (o, level = 0) => {
    if (level > 2)
        return;
    for (var p in o) {
        console.log(`${colors.red('prop:')}${p}: ${o[p]}`);
        if (o[p] != null && typeof o[p] == 'object') {
            try {
                console.log("DETAILS")
                log(o[p], level + 1);
            } catch (err) {
                console.log('CANT GET INFO')
            }
        }
    }
}

let router = express.Router();
let jsonServer = require('json-server');
let server = null;

const config = {
    distribution: {
        js: ["./dist/js", "../Orion.Web/TemplatedAssets/js"],
        html: ["./dist", "../Orion.Web/TemplatedAssets"],
        css: ["./dist/css", "../Orion.Web/TemplatedAssets/css"],
        images: ["./dist/img", "../Orion.Web/TemplatedAssets/img"],
        fonts: ["./dist/fonts", "../Orion.Web/TemplatedAssets/fonts"]
    }
};

var jsonData = require('./src/data/generate.js');

var packageJSON = require('./package.json');
var dependencies = Object.keys(packageJSON && packageJSON.dependencies || {});

const json = (callback) => {
    console.log(colors.cyan('[JSON] Generating a new DB'));

    delete require.cache[require.resolve('./src/data/generate.js')];
    jsonData = require('./src/data/generate.js');
    try {
        fs.writeFile("./src/data/db.json", JSON.stringify(jsonData()), 'utf8', (err) => {
            if (err) {
                console.log('[JSON] ' + colors.red(err));
                if (callback)
                    callback()
            } else {
                console.log(colors.green('[JSON] DB.json Saved'.bold));
                if (callback)
                    callback();
            }
        });
    } catch (err) {
        console.log('[JSON] ' + colors.red(err.toString()));
        if (callback)
            callback();
    }
};

const html = (callback) => {
    console.log(colors.cyan('[HTML] Transpiling PUG'));
    return gulp.src(['./src/markup/**/*.pug', '!src/markup/content/**/*.pug', '!src/markup/grids/**/*.pug', '!src/markup/mixins/**/*.pug'])
        .pipe(
            pug({
                pretty: true,
                debug: false,
                compileDebug: false,
                data: jsonData()
            }).on('error', function (err) {
                console.log('[HTML] ' + colors.bgWhite.red(err.toString()));
                console.log('[HTML] ' + colors.red(err.message));
                callback();
            })
            .on('end', function () {
                console.log(colors.green('[HTML] Transpilation complete'));
                callback();
            })
        )
        .pipe(multiDest(config.distribution.html))
        .pipe(bs.stream({
            once: true
        }));
};

const img = (callback) => {
    console.log(colors.cyan('[IMAGE] Copying Images'));
    return gulp.src('./src/img/**/*.*')
        .pipe(multiDest(config.distribution.images))
        .on('error', function (err) {
            console.log('[IMAGE] ' + colors.red(err.toString()));
            callback();
        }).on('end', function () {
            callback();
        });
};

const font = () => {
    console.log('[FONT] ' + colors.cyan('Copying Fonts'));
    return gulp.src('./src/fonts/**/*.*')
        .pipe(multiDest(config.distribution.fonts))
};

const components = (callback) => {
    console.log(colors.cyan('[JS] Bundling and Babeling JS'));
    var b = browserify({
        entries: './src/js/server-components.js',
        debug: true
    })
        .external(dependencies)
        .transform('babelify', {
            presets: ['@babel/preset-env']
        });

    return b
        .bundle((err) => {
            if (err)
                console.log('[JS] ' + colors.red(err.toString()));

            if (callback)
                callback();
        })
        .on('error', function (err) {
            console.log('[JS] ' + colors.red(err.toString()));
            callback();
        })
        .on('end', function () {
            callback();
        })
        .pipe(source('components.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(multiDest(config.distribution.js))
};

const js = (callback) => {
    console.log(colors.cyan('[JS] Bundling and Babeling JS'));
    var b = browserify({
            entries: './src/js/app.js',
            debug: true
        })
        .external(dependencies)
        .transform('babelify', {
            presets: ['@babel/preset-env']
        });

    return b
        .bundle((err) => {
            if (err)
                console.log('[JS] ' + colors.red(err.toString()));

            if (callback)
                callback();
        })
        .on('error', function (err) {
            console.log('[JS] ' + colors.red(err.toString()));
            callback();
        })
        .on('end', function () {
            callback();
        })
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(multiDest(config.distribution.js))
};
const react = (callback) => {
    console.log(colors.cyan('[JS V] Bundling and Babeling Vendor JS'));
    var b = browserify({
        debug: true
    }).transform("babelify", { presets: ["@babel/preset-env", "@babel/preset-react"] });

    b.require('react');
    b.require('react-dom');
    b.require('react-fontawesome');
    

    return b
        .bundle((err) => {
            if (err)
                console.log('[JS V] ' + colors.red(err.toString()));

            if (callback)
                callback();
        })
        .on('error', function (err) {
            console.log('[JS V] ' + colors.red(err.toString()));
            callback();
        })
        .on('end', function () {
            callback();
        })
        .pipe(source('react-vendor.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(multiDest(config.distribution.js));
};
const jsv = (callback) => {
    console.log(colors.cyan('[JS V] Bundling and Babeling Vendor JS'));
    var b = browserify({
        debug: true
    }).transform('babelify', {
        presets: ['@babel/preset-env']
    });

    dependencies.forEach(lib => {
        b.require(lib);
    });

    return b
        .bundle((err) => {
            if (err)
                console.log('[JS V] ' + colors.red(err.toString()));

            if (callback)
                callback();
        })
        .on('error', function (err) {
            console.log('[JS V] ' + colors.red(err.toString()));
            callback();
        })
        .on('end', function () {
            callback();
        })
        .pipe(source('vendor.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(multiDest(config.distribution.js))
};

const scss = (callback) => {
    console.log(colors.cyan('[SCSS] Transpiling Sass to Css'));
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return bundle([
        './src/styles/global.scss'
    ], 'bundle.min.css');

    function bundle(source, dest) {
        return gulp.src(source)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(concat(dest))
            .pipe(postcss([autoprefixer()]))
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe(sourcemaps.write('.'))
            .on('end', callback)
            .on('error', function (err) {
                console.log(colors.red('[SCSS] ' + err.toString()));
                callback();
            })
            .pipe(multiDest(config.distribution.css))
            .pipe(bs.stream());

    }
};

const serve = (callback) => {
    console.log(colors.cyan('[SERVE] Says: standing up your server'));
    build_routes();
    var app = express();
    app.use(['/discover*'], function (req, res) {
        res.sendFile(appRoot + '/dist/index.html');
    });
    bs.init({
        open: false,
        notify: true,
        logPrefix: 'Server Says:',
        server: {
            baseDir: "./dist/",
            index: "index.html"
        },
        middleware: [
            function (req, res, next) {
                router(req, res, next);
            }, app
            ]
    }, function (err, bs) {
        console.log(colors.cyan('[SERVE] Says: hello'));
        callback();
    });
};

const build_routes = (cb) => {
    console.log(colors.cyan('[ROUTE] Rebuilding routes'));
    router = express.Router();
    server = jsonServer.create({
        verbosity: {
            level: "info",
            urlTracing: false
        }
    });
    server.use(jsonServer.defaults());
    server.use(jsonServer.router(jsonData()));
    router.use('/api', server);
    if (cb) cb();
};

let WatchQueue = require('./lib/watch-queue');
let queue = new WatchQueue();
const watch = (done) => {

    console.log(colors.cyan('[WATCH] Watching...'));

    gulp.watch(['./src/markup/**/*.pug'])
        .on('all', function (event, path, stats) {
            queue.queue({
                name: 'Pug'
            }, (task, cb) => {
                bs.notify("Transpiling" + task.name, 1000);
                html(() => {
                    bs.notify("Done Transpiling" + task.name, 1000);
                    cb();
                });
            })
        });

    gulp.watch(['./src/**/*.scss'])
        .on('all', function (event, path, stats) {
            queue.queue({
                name: 'Scss'
            }, (task) => {
                bs.notify("Transpiling" + task.name, 1000);
                scss(() => {
                    bs.notify("Done Transpiling" + task.name, 1000);
                });
            })
        });

    gulp.watch(['./src/*.js', './src/js/**/*.js', './src/components/**/*.js', './src/pages/**/*.js'])
        .on('all', function (event, path, stats) {
            queue.queue({
                name: 'Js'
            }, (task) => {
                bs.notify("Transpiling" + task.name, 1000);
                js(() => {
                    bs.notify("Done Transpiling" + task.name, 1000);
                    reload()
                });
            })
        });
        
    gulp.watch(['./src/data/generate.js'])
        .on('all', function (event, path, stats) {
            queue.queue({
                name: 'Generate'
            }, (task) => {
                bs.notify("Regenerating Data", 1000);
                json(() => {
                    build_routes(() => {
                        reload();
                        done();
                    })
                });
            })
        });

    gulp.watch(['./src/img/**/*'])
        .on('all', function (event, path, stats) {
            queue.queue({
                name: 'Generate'
            }, (task) => {
                bs.notify("Transferring Images", 1000);
                img(() => {
                    reload();
                    done();
                });
            })
        });

    gulp.watch('./src/**/*')
        .on('all', function (event, path, stats) {
            console.log(colors.yellow('File ' + path + ' ' + event));
        });

    done();
};

gulp.task('watch', watch);
gulp.task('build', gulp.series(gulp.parallel(html, scss, js, jsv, components, react, img, font)));
gulp.task('default', gulp.series(json, gulp.parallel(html, scss, js, jsv, components, react, img, font), gulp.parallel(serve, watch)));
gulp.task('serve', serve);
gulp.task('js-test', shell.task(['npm run unit']));
gulp.task('react-test', shell.task(['npm run test']));
gulp.task('js-coverage', shell.task(['start "" "test\\coverage\\index.html"']));
gulp.task('react-coverage', shell.task(['start "" "test\\react\\index.html"']));