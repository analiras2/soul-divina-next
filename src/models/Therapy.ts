import { ITherapy } from '@therapy';
import { Schema, model, models } from 'mongoose';
import strings from '~res/strings';

const TherapySchema = new Schema<ITherapy>({
  title: {
    type: 'string',
    required: [true, strings.api.error.title],
    unique: true,
    trim: true,
    maxlength: [40, strings.api.error.titleMaxLength],
  },
  image: { type: 'string' },
  options: [
    {
      title: {
        type: 'string',
        required: [true, strings.api.error.title],
        unique: true,
        trim: true,
        maxlength: [40, strings.api.error.titleMaxLength],
      },
      url: {
        type: 'string',
        required: [true, strings.api.error.details],
        unique: true,
        trim: true,
      },
    },
  ],
});

export default models.Therapy || model<ITherapy>('Therapy', TherapySchema);
