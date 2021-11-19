
module.exports = {
    devServer: {
        proxy: {
            // 只要朝/api开头的请求，服务器全部拦截下来，由服务器去请求数据，并且服务器知道去http://10.3.136.197:2108/进行请求，请求完成把数据返回给你。
            '/api': {
                target: 'http://10.3.136.197:2108/', //需要代理的网址
                // ws: true,
                changeOrigin: true
            }
            // '/foo': {
            //   target: '<other_url>'
            // }
        }
    }
}