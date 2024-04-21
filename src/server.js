const app = require('./app');

//Configure Port
//Configure Port
const port = process.env.PORT || 3001;
//configure server to listen the port configure.
app.listen(port, () => console.log(`Listening on port ${port}...`));