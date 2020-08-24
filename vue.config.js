module.exports = {
    devServer: {
        proxy: {
<<<<<<< HEAD
            '/api':{
                target:''
            }
=======
            '/api': {
                target: '',
                changeOrigin: true
            },
>>>>>>> 9aec5ebcdf728776cd8501d2f17971c0e633435e
        }
    }
}