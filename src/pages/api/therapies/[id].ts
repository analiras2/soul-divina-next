import dbConnect from "~utils/dbConnect";
import Therapy from "~models/Therapy";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

const TherapyById = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const therapy = await Therapy.findById(id);

        if (!therapy) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: therapy });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const therapy = await Therapy.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!therapy) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: therapy });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteTherapy = await Therapy.deleteOne({ _id: id });

        if (!deleteTherapy) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default TherapyById;
