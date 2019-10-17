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
    path = require('path'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

const appRoot = path.resolve(__dirname);

const log = (o, level = 0) => {
    if (level > 2)
        return;
    for (var p in o) {
        console.log(`${colors.red('prop:')}${p}: ${o[p]}`);
        if (o[p] != null && typeof o[p] == 'object') {
            try {
                console.log("DETAILS");
                log(o[p], level + 1);
            } catch (err) {
                console.log('CANT GET INFO');
            }
        }
    }
};

let router = express.Router();
let jsonServer = require('json-server');
let server = null;

const config = {
    distribution: {
        js: ["./dist/js"],
        html: ["./dist"],
        css: ["./dist/css"],
        images: ["./dist/img"],
        fonts: ["./dist/fonts"]
    }
};

var jsonData = require('./src/data/generate.js');

var packageJSON = require('./package.json');
var dependencies = Object.keys(packageJSON && packageJSON.dependencies || {});

const json = (callback) => {
    console.log(colors.cyan('[JSON] Generating a new DB'));

    // Must delete cached object and re-require or else
    delete require.cache[require.resolve('./src/data/generate.js')];
    jsonData = require('./src/data/generate.js');

    try {
        fs.writeFile("./src/data/db.json", JSON.stringify(jsonData()), 'utf8', (err) => {
            if (err) {
                console.log('[JSON] ' + colors.red(err));
                if (callback)
                    callback();
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
    return gulp.src(['./src/markup/**/*.pug'])
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
        .pipe(multiDest(config.distribution.fonts));
};

const jsbundle = (input, output, destinations, callback) => {
    var b = browserify({
            entries: input,
            debug: true
        })
        .transform('babelify', {
            presets: ["@babel/preset-env", "@babel/preset-react"]
        });

    return bundleJS(b, output, destinations, callback);
}

const bundleJS = (browserify, output, destinations, callback) => {
    return browserify
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
        .pipe(source(output))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(multiDest(destinations));
}

const components = (callback) => {
    console.log(colors.cyan('[JS] Bundling and Babeling JS'));
    jsbundle('./src/js/server-components.js', 'components.min.js', config.distribution.js, callback);
};

const js = (callback) => {
    console.log(colors.cyan('[JS] Bundling and Babeling JS'));
    jsbundle('./src/js/app.js', 'app.min.js', config.distribution.js, callback);
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

    return bundleJS(b, 'vendor.min.js', config.distribution.js, callback);
};

const scss = (callback) => {
    console.log(colors.cyan('[SCSS] Transpiling Global Sass to Css'));
    return bundleCSS([
        './src/styles/global.scss'
    ], 'bundle.min.css', callback);

};

function bundleCSS(source, dest, callback) {
    return gulp.src(source)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(dest))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({
            compatibility: 'ie11'
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

const serve = (callback) => {
    console.log(colors.cyan('[SERVE] Says: standing up your server'));
    inject_middleware();
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
            },
            app
        ]
    }, function (err, bs) {
        console.log(colors.cyan('[SERVE] Says: hello'));
        callback();
    });
};

const inject_middleware = (cb) => {
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
            });
        });

    gulp.watch(['./src/**/*.scss'])
        .on('all', function (event, path, stats) {
            queue.queue({
                name: 'Scss'
            }, (task) => {
                bs.notify("Transpiling" + task.name, 1000);
                scss(() => {
                    bs.notify("Done Transpiling Global " + task.name, 1000);
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
                    reload();
                });
            });
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
                    });
                });
            });
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
            });
        });

    gulp.watch('./src/**/*')
        .on('all', function (event, path, stats) {
            console.log(colors.yellow('File ' + path + ' ' + event));
        });

    done();
};

gulp.task('watch', watch);
gulp.task('build', gulp.series(gulp.parallel(html, scss, js, jsv, components, img, font)));
gulp.task('default', gulp.series(json, gulp.parallel(html, scss, js, jsv, components, img, font), gulp.parallel(serve, watch)));
gulp.task('serve', serve);
gulp.task('js-test', shell.task(['npm run unit']));
gulp.task('react-test', shell.task(['npm run test']));
gulp.task('js-coverage', shell.task(['start "" "test\\coverage\\index.html"']));
gulp.task('react-coverage', shell.task(['start "" "test\\react\\index.html"']));