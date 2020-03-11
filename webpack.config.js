const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        // '.ts' と '.vue' を追加
        extensions: ['.js', '.ts', '.vue', '.json'],
    },
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        './dist/assets/js/bundle': './src/sites/assets/js/main.ts',
        './dist/assets/js/workSortable': './src/sites/assets/js/workSortable.ts'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // 'ts-loader' で TypeScript をコンパイル
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                // '*.vue' ファイルも TS として認識させるためのオプション
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                // 単一ファイルコンポーネントは vue-loader が処理
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            }
        ],
    },
    // プラグイン起動
    plugins: [new VueLoaderPlugin()],
};