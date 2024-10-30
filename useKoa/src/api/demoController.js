class DemoController{
    constructor() {
    }
    async demo(ctx){
        ctx.body={
            msg:"meesage"
        }
    }
}

export default new DemoController()