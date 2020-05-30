const Koa = require('koa');
const Static = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(Static('../'));
app.listen(9001, function() {
    console.log("server is running at http://localhost:90001/");
})