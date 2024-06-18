const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema ({
    FullName: {type: String},
    Email: {type: String},
    Mobile: {type: String},
    Password: {type: String},
},{
    timestamp:true,
}
);
const User = mongoose.model("User", userSchema);

module.exports = User;