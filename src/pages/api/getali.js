import getlist from "@/utils/getlist"
export default async function handler(req, res) {
  console.log('req', req.query);
  const data = await getlist(req.query.path,req.query.isDir)
  res.status(200).json(data)
}
