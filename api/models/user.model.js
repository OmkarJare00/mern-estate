import  Mongoose  from "mongoose";

const userSchema = new Mongoose.Schema({
    username: {
        type : 'string',
        required: true,
        unique: true,
    },
    email: {
        type : 'string',
        required: true,
        unique: true,
    },
    password: {
        type : 'string',
        required: true,
    }
}, { Timestamp: true });

const User = Mongoose.model('User', userSchema);

export default User;