import { IBath } from '@bath';
import { Schema, model, models } from 'mongoose';
import strings from '~res/strings';

const BathSchema = new Schema<IBath>({
  title: {
    type: 'string',
    required: [true, strings.api.error.title],
    unique: true,
    trim: true,
    maxlength: [40, strings.api.error.titleMaxLength],
  },
  description: {
    type: 'string',
    required: [true, strings.api.error.description],
    unique: true,
    trim: true,
    maxlength: [500, strings.api.error.descriptionMaxLength],
  },
  howToUse: {
    type: 'string',
    required: [true, strings.api.error.howToUse],
    unique: true,
    trim: true,
  },
});

export default models.Bath || model<IBath>('Bath', BathSchema);
