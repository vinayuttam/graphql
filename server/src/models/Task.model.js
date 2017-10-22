/**
 * Dependencies
 */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    required: true,
    trim: true,
    type: String,
  },
  description: {
    trim: true,
    type: String,
  },
  completed: {
    required: true,
    type: Boolean,
  },
  taskOwnerId: {
    required: true,
    trim: true,
    type: String,
  }
});

export default mongoose.model('Task', TaskSchema);
