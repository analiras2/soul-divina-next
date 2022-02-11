import dbConnect from "~utils/dbConnect";
import Therapy from "~models/Therapy";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

const Therapies = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const therapies = await Therapy.find({});

        res.status(200).json({ success: true, data: therapies });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const therapy = await Therapy.create(req.body);

        res.status(201).json({ success: true, data: therapy });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default Therapies;
