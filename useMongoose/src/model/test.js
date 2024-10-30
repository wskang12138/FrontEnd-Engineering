import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const testSchema = new Schema({
   name:{type:String},
    age:{type:Number}
})

const TestModel = mongoose.model('test', testSchema,'test')

export default TestModel
