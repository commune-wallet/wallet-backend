import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 60
  }
});


userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  console.log('thispassword', this.password);
  next();
});


const User = mongoose.model('User', userSchema);

export default User;
