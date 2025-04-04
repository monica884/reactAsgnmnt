const {mongoose,SchemaTypes, Types}=require("mongoose")

const addSchema = new mongoose.Schema({
    Name:{
        type:SchemaTypes.String,
        required:true
    },
    Price:{
        type:SchemaTypes.String,
        required:true
    },
    Features:{
        type:SchemaTypes.String,
        required :true
    },
    Image:{
        type:SchemaTypes.String,
        required:true
    },
})

const Addvertisment = mongoose.model('Addvertisment',addSchema)

module.exports=Addvertisment