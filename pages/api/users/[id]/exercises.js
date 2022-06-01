export default function getAllExercisesByUserId(req, res) {
  res.json({
    byId: req.query.id,
    message: "getAllExercisesByUserId",
  });
}
