const {mongoose,SchemaTypes, Types}=require("mongoose")

const catogarySchema = new mongoose.Schema({
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

const Catogaries = mongoose.model('Catogaries',catogarySchema)

module.exports=Catogaries