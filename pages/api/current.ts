import type { NextApiRequest, NextApiResponse } from "next";
import { PlanDetails } from "../../controller/data/plans";
const fs = require("fs");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const jsonDB = JSON.parse(fs.readFileSync("./pages/api/planDB.json"));
  let _storedSubscription = {
    plan: "good",
    name: "Good",
    seats: 5,
    cost: 50,
  };

  if (req.method === "PUT") {
    const responseText = {
      plan: PlanDetails[data.plan].plan,
      name: PlanDetails[data.plan].plan,
      seats: data.seats,
      cost: data.seats * PlanDetails[data.plan].price,
    };

    jsonDB.plan = responseText.plan;
    jsonDB.seats = responseText.seats;
    jsonDB.price = responseText.cost;
    fs.writeFileSync(
      "./pages/api/planDB.json",
      JSON.stringify(jsonDB, null, 4)
    );

    _storedSubscription = responseText;
    res.status(200).json(responseText);
  }
  if (req.method === "GET") {
    res.status(200).json(jsonDB);
  }
}
