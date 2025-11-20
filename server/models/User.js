import mongoose from "mongoose"


const schema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password:{type: String}
})


const User = mongoose.model('User',schema)
export default User;