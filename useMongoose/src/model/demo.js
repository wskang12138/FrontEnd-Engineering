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
