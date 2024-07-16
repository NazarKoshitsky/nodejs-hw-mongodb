import { Schema, model } from 'mongoose';
import { setUpdateSettings, mongooseSaveError } from './hooks.js';

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
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post('save', mongooseSaveError);

contactSchema.pre('findOneAndUpdate', setUpdateSettings);

contactSchema.post('findOneAndUpdate', mongooseSaveError);

export const Contact = model('contact', contactSchema);
