const {mongoose,SchemaTypes, Types}=require("mongoose")

const citySchema = new mongoose.Schema({
    City:{
        type:SchemaTypes.String,
        required:true
    },
    Address:{
        type:SchemaTypes.String,
        required:true
    },
    Postalcode:{
        type:SchemaTypes.String,
        required :true
    },
})

const City = mongoose.model('City',citySchema)

module.exports=City