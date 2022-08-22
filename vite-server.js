const Koa = require("koa");

const PORT = 5173

const app = new Koa()

app.listen(PORT, () => {
    console.log(`koa server running at localhost:${PORT}`)
})