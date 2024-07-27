import { Schema, model } from 'mongoose';
import { setUpdateSettings, mongooseSaveError } from './hooks.js';

<<<<<<< HEAD
<<<<<<< Updated upstream
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
=======
=======
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requried: false,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
<<<<<<< HEAD
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
=======
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    createdAt: {
      type: Date,
      timestamps: true,
    },
    updatedAt: {
      type: Date,
      timestamps: true,
    },
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post('save', mongooseSaveError);

contactSchema.pre('findOneAndUpdate', setUpdateSettings);

contactSchema.post('findOneAndUpdate', mongooseSaveError);

export const Contact = model('contact', contactSchema);
