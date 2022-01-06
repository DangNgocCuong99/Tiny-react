const { getTiny, createTiny , updateTiny ,deleteTiny,img} = require('../controller')
const routes = (app) =>{
    app.get('/',getTiny),
    app.post('/',createTiny),
    app.put('/',updateTiny),
    app.delete('/',deleteTiny),
    app.post('/img',img)
}
module.exports = routes