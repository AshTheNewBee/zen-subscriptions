import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const _data = JSON.parse(fs.readFileSync("./pages/api/planDB.json"));

    res.status(200).json(_data);
  }
}
