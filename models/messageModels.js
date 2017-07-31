const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({ id: String, mComment: String, content: Array });

const Messages = mongoose.model('Messages', messageSchema);

module.exports = Messages;
