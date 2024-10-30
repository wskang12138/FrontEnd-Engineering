//写法1，引入的是class


import Router from 'koa-router'
const router=new Router()
import api from "../api";
import demoController from "../api/demoController";
//路由前缀
export const routes=()=>{
    router.prefix('/api')
    router.get('/demo',demoController.demo)
    return router.routes()
}
