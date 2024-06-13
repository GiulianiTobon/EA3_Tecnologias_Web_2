const app = require('./app')

//declaracion del puerto
app.set('port',process.env.PORT || '4000')



app.listen(app.get('port'), () => {
    console.log(`conexion realizada por el port ${app.get('port')}`);
});