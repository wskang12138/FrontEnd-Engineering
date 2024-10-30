//可以直接用用这个index文件，或者执行 npx babel-node src/model/demo.js

// 引入mongoose
const mongoose=require('mongoose')
// 链接mongo数据库，以mongodb://开头，后面接上账号和密码，@链接地址，/链接具体库
mongoose.connect('mongodb://用户名:密码@ip:port/collections',{
    useNewUrlParser:true, // 使用新的URL解析器，用于解析MongoDB连接字符串中的主机名和端口号，默认为false
    useUnifiedTopology: true // 使用新的服务器发现和监视引擎，用于在Node.js中使用MongoDB驱动程序默认的拓扑监视引擎。默认为false
})
// 创建模型，选择test表，后面接上骨架，第三个参数是映射为数据库中的哪个库
// 注意：如果不设置第三个参数，指定映射到哪个表，那会映射到第一个字段的复数的表中，即tests表中
const test= mongoose.model('test',{name:String,age:Number},'test')
const imooc =new test({
    name:'李四',
    age:23
})
// 保存
imooc.save().then(res=>{
    console.log(res);
})
