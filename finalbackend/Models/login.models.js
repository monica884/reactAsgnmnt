const {mongoose,SchemaTypes, Types}=require("mongoose")

const loginSchema = new mongoose.Schema({
    Email:{
        type:SchemaTypes.String,
        required:true
    },
    Password:{
        type:SchemaTypes.String,
        required :true
    }
})

const Login = mongoose.model('Login',loginSchema)

module.exports=Login