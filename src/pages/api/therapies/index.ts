import { dbConnect, paginationPipeLine } from "~utils/index";
import Therapy, { ITherapy } from "~models/Therapy";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

const Therapies = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search, pageIndex, pageSize },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const paginationTherapies = await Therapy.aggregate([
          ...paginationPipeLine<ITherapy>(
            pageIndex as string,
            pageSize as string,
            { title: new RegExp(search as string, "gi") }
          ),
          {
            $unset: "items.options",
          },
        ]);

        res.status(200).json({ success: true, data: paginationTherapies });
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
