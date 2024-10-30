import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import {routes} from './routes/routes'
import Cors from '@koa/cors'
import koaJson from 'koa-json'
import koaBody from "koa-body"
import koaCompose from 'koa-compose'
import koaCompress from 'koa-compress'

const isDev = process.env.NODE_ENV === 'production' ? false : true

const app = new koa()

// app.use(koaBody())
// app.use(Cors())
// app.use(koaJson())
// app.use(helmet())
// app.use(statics(path.join(__dirname,'../public')))

const middleware = koaCompose([
    koaBody(),
    Cors(),
    koaJson(),
    helmet(),
    statics(path.join(__dirname, '../public'))
])

// 压缩中间件
if (!isDev) {
    app.use(koaCompress())
}
app.use(middleware)
app.use(routes())


app.listen(3001)