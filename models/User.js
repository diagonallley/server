const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: String

});

mongoose.model("users", UserSchema); // create if does not exist

