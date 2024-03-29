const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // mode: "development",
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        clean: true
    },
    devServer: {
        hot: false,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9004,
        devMiddleware: {
            writeToDisk: true,
        }
    },

    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    // minimize: true,
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /bootstrap\.min\.css$/i,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'css-loader',
                ]
            },

            {
                test:  /bootstrap\.min\.css$/,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'rtlcss-loader',
                ]
            },
            
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./images/[name][ext]",
                },
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]",
                },
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html",
        }),

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),

        new HtmlWebpackPlugin({
            filename: "checkout.html",
            template: "./src/checkout.html",
        }),

        new HtmlWebpackPlugin({
            filename: "payment.html",
            template: "./src/payment.html",
        }),

        new HtmlWebpackPlugin({
            filename: "search.html",
            template: "./src/search.html",
        }),

        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",
        }),
        
        new CssMinimizerWebpackPlugin({}),
    ],

}