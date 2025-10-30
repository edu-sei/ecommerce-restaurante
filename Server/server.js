const app = require('./app')
const port = process.env.port;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});