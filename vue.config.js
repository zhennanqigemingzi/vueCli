module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target:''
            }
        }
    }
}