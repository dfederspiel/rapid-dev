module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'test/**/*.[sS]pec.js'
        ],
        exclude: [

        ],
        preprocessors: {
            'src/**/*.js': ['coverage'],
            'test/**/*.[sS]pec.js': ['browserify']
        },
        reporters: ['progress', 'coverage', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            reporters: [
                { type: 'html', dir: 'test', subdir: 'coverage' }
            ]
        },
        browserify: {
            debug: true,
            configure: function (bundle) {
                bundle.once('prebundle', function () {
                    bundle.transform('babelify',{
                        presets: ['@babel/preset-env']
                    });
                });
            }
        }
    });
}