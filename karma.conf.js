// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', "karma-typescript"],

    files: [
        { pattern: "src/**/*.ts" },
        { pattern: "tests/**/*.ts" },
    ],

    preprocessors: {
        "src/**/!(*.d).ts": ["karma-typescript", "coverage"],
        "tests/**/!(*.d).ts": ["karma-typescript"],
    },

    plugins: [
      require('karma-typescript'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'clover' ],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'coverage-istanbul', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    karmaTypescriptConfig: {
        compilerOptions: {
            allowJs: true,
        },
        coverageOptions: {
            exclude: [/(\/test\/.*|\.d)\.ts/i]
        },
    },

  });
};
