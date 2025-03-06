import mongoose from "mongoose";

const noteSchema= new mongoose.Schema({
    title:{type:String, required:true},
    content:{type: String, required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"users", required:true}
})

const Note = mongoose.model("notes", noteSchema)

export default Note