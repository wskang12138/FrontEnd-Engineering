//common写法
// const Router=require('koa-router')
// const router=new Router()

//写法2，引入的是function

import Router from 'koa-router'
const router=new Router()
import api from '../api'
import demoController from "../api/demoController";
//路由前缀

export const routes=()=>{
    router.prefix('/api')

    router.get('/api',  api.api)
    router.get('/test1',  api.test1)

    router.post('/post',  api.post)
    return router.routes()
}
