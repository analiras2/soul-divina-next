import { Schema, model, models } from "mongoose";
import strings from "~res/strings";

interface Option {
  title: string;
  details: string;
}

interface Therapy {
  title: string;
  image?: string;
  options: Array<Option>;
}

const TherapySchema = new Schema<Therapy>({
  title: {
    type: "string",
    required: [true, strings.api.error.title],
    unique: true,
    trim: true,
    maxlength: [40, strings.api.error.titleMaxLength],
  },
  image: { type: "string" },
  options: [
    {
      title: {
        type: "string",
        required: [true, strings.api.error.title],
        unique: true,
        trim: true,
        maxlength: [40, strings.api.error.titleMaxLength],
      },
      details: {
        type: "string",
        required: [true, strings.api.error.details],
        unique: true,
        trim: true,
      },
    },
  ],
});

export default models.Therapy || model<Therapy>("Therapy", TherapySchema);
