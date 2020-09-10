const mockdata = require('./mock/test.json')
module.exports = {
    devServer: {
        // proxy: {
        //     '/api':{
        //         target:''
        //     }
        // }
        before(app){
            app.get('/test',(req,res,next)=>{
              res.json(mockdata);
            })
        }
    }
}