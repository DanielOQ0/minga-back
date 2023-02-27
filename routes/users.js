import express from "express";
import User from "./../models/User.js";
let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send("Mostrar los usuarios");
});
router.post("/", async (req, res) => {
  try {
    req.body.is_online = false
    req.body.is_admin = false
    req.body.is_author = false
    req.body.is_company = false
    req.body.is_verified = false
    req.body.verify_code = "acvnewi92emodsqisj129mxskal2121wsaz"
    let user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      user: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "No se pudo crear el usuario",
    });
  }
});

export default router;
