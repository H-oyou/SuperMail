module.exports = {
    //configureWebpack是vue-cli配置好的,这个文件中的会和已经存在webpack配置合并
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}