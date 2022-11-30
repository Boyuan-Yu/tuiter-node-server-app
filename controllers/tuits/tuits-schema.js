import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic:String,
    image:String,
    userName:String,
    handle:String,
    time:String,
    tuit: String,
    likes: Number,
    dislikes: Number,
    replies: Number,
    retuits: Number,
    liked: Boolean,
    disliked: Boolean,
}, {collection: 'tuits'});
export default schema;