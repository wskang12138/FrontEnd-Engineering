### mongoose是什么？
Mongoose是Node.js中一个非常流行的MongoDB对象模型工具，可以让你以面向对象的方式来操作MongoDB数据库。它提供了很多有用的功能，比如数据验证、查询构建、中间件、populate等，使得在Node.js中使用MongoDB变得更加简单和方便。除了基本的CRUD操作，Mongoose还支持更高级的查询和聚合功能。

### docker-compose初始化带有账号密码的mongodb
```
version: '3'

services:
  mongo-dev:
    image: mongo:latest
    container_name: mongo-dev
    ports:
      - 10050:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: 123456
    volumes:
      - ./mongod-dev.conf:/etc/mongo/mongod.conf
      - ./data/db:/data/db
    restart: unless-stopped
```


### node链接mongoDB保存数据

```
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
```

### 逐渐面向工程化使用mongoose

```
--config    
    --DBHelper.js
    --index.js
--model
    --demo.js
    --test.js
```
#### DBHelper.js

```
import mongoose from 'mongoose'
import config from './index'

// 创建连接
mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 连接成功
mongoose.connection.on('connected', () => {
    console.log(`连接成功`)
})

// 连接异常
mongoose.connection.on('error', (err) => {
    console.log('连接异常')
})

// 断开连接
mongoose.connection.on('disconnected', () => {
    console.log('断开连接')
})

export default mongoose
```


#### index.js
```
const DB_URL='mongodb://用户名:密码@ip:port/collections'

export default {
    DB_URL
}
```

#### demo.js
```
import Test from "./test";

//增
const test1={
    name:'赵六',
    age:20
}
const add = async ()=>{
    const data=new Test(test1)
    const result =await data.save()
    console.log(result);
}

//改
const update = async ()=>{
    const result =await Test.updateOne({name:'李四'},{
        age:80
    })
    console.log(result);
}
// update()


//查
const search = async ()=>{
    const result =await Test.find()
    console.log(result);
}
search()
```

#### test.js
```
import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const testSchema = new Schema({
   name:{type:String},
    age:{type:Number}
})

const TestModel = mongoose.model('test', testSchema,'test')

export default TestModel

```

