import filters from './db/filters.json';
const getfilters = async (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      return res.status(200).json(filters);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};
export default getfilters;
