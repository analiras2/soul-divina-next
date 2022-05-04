import dbConnect from '~utils/dbConnect';
import Therapy from '~models/Therapy';
import { NextApiRequest, NextApiResponse } from 'next';

dbConnect();

const OptionsById = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id, isDetails },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const { options } = await Therapy.findById(id, {
          'options.title': 1,
          'options.url': 1,
        });

        if (!options) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({
          success: true,
          data: options,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default OptionsById;
