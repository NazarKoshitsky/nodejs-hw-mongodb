import { Schema, model } from 'mongoose';

<<<<<<< Updated upstream
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
=======
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
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
>>>>>>> Stashed changes
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
    required: true,
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
});

export const Contact = model('contact', contactSchema);
