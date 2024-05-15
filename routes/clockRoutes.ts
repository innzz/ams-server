import express from "express";
import Clock from "../models/clockModel";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
      const data = await Clock.find({}).sort({$natural:-1});
      res.status(200).send({
        success: true,
        status_code: 200,
        data: data,
        message: "Successfully fetched clocks data",
      });
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        status_code: 500,
        message: error,
      });
    }
  });

router.post("/clock-in", async (req, res) => {
  try {
    const data = req.body;
    const clockedIn = new Clock(data);
    await clockedIn.save();
    res.status(200).send({
      success: true,
      status_code: 200,
      data: clockedIn,
      message: "Clocked-In successfully",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      status_code: 500,
      message: error,
    });
  }
});

router.put("/clock-out", async (req, res) => {
  try {
    const data = req.body;
    const clockedOut = await Clock.findByIdAndUpdate({ _id: data._id }, { $set: data});
    res.status(200).send({
      success: true,
      status_code: 200,
      data: clockedOut,
      message: "Clocked-Out successfully",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      status_code: 500,
      message: error,
    });
  }
});

export default router;
