const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    //佈署 到github 需要加的(tea-web為專案名)
    // 記得去 setting 設定 gitHub page!!!!
    publicPath: process.env.NODE_ENV === 'production'
    ? '/tea-web/'
    : '/'
    // 正常需要加. 他才會知道靜態目錄在當前 (給一些000webhost用)
    // publicPath: process.env.NODE_ENV === 'production'
    // ? './'
    // : './'
    // 有後端時需要加的
    // devServer:{
    //     proxy: {

    //     }
    // }
}