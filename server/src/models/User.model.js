/**
 * Dependencies
 */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    required: true,
    trim: true,
    type: String,
  },
  middleName: {
    trim: true,
    type: String,
  },
  lastName: {
    required: true,
    trim: true,
    type: String,
  },
  username: {
    required: true,
    trim: true,
    type: String,
  },
  password: {
    required: true,
    trim: true,
    type: String,
  },
});

export default mongoose.model('User', UserSchema);
