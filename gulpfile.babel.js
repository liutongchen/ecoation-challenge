const gulp = require('gulp');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfigDev = require('./webpack.config.dev');
const webpackConfigProd = require('./webpack.config.prod');
const path = require('path');

const PORT_NUMBER = process.env.PORT_NUMBER || 8000;

gulp.task('bundle', cb => {
    webpack(webpackConfigProd, (err, stats) => {
        if (err) {
            cb(err);
        } else {
            cb();
        }
    });
});

gulp.task('bundle-dev', cb => {
    webpack(webpackConfigDev, (err, stats) => {
        if (err) {
            cb(err);
        } else {
            cb();
        }
    });
});

gulp.task('run-dev-server', () => {
    const webpackConfig = { ...webpackConfigDev };

    webpackConfig.entry = [
        `webpack-dev-server/client?http://localhost:${PORT_NUMBER}`,
        ...webpackConfig.entry,
    ];

    webpackConfig.devServer = {
        inline: true,
    };

    const bundler = webpack(webpackConfig);

    const devServerConfig = {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        port: PORT_NUMBER,
        historyApiFallback: true,
    };

    new WebpackDevServer(bundler, devServerConfig).listen(PORT_NUMBER, 'localhost');
});