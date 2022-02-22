 import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    reason: String,
    type: String,
    division: String,
    category: String,
    priority: String,
    department: String,
    
    location: String
});

//autoIncrement.initialize(mongoose.connection);
//userSchema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userSchema);
export default user;