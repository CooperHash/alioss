import getfile from "@/utils/getfile";
export default async function handler(req, res) {
  console.log('req', req.query.path);
  const data = await getfile(req.query.path)
  res.status(200).json(data)
}
