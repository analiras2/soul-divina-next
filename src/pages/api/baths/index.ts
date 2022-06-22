import { dbConnect, paginationPipeLine } from '~utils/index';
import Bath, { IBath } from '~models/Bath';
import { NextApiRequest, NextApiResponse } from 'next';

dbConnect();

const Baths = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search, pageIndex, pageSize },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const paginationBaths = await Bath.aggregate([
          ...paginationPipeLine<IBath>(
            pageIndex as string,
            pageSize as string,
            { title: new RegExp(search as string, 'gi') }
          ),
        ]);

        res.status(200).json({ success: true, data: paginationBaths });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const therapy = await Bath.create(req.body);

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

export default Baths;
