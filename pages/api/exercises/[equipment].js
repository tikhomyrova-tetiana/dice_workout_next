import { NextApiRequest, NextApiResponse } from "next"; //for Typescript

export default function getExercisesByEquipment(req, res) {
  res.json({
    byEquipment: req.query.equipment,
    message: "getExercisesByEquipment",
  });
}
