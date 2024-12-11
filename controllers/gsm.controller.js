const express = require("express");
const router = express.Router();
const gsmService = require("../services/gsm.service");

router.get("/", async (req, res) => {
  try {
    var data = await gsmService.getAll();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.post("/registration/data", async (req, res) => {
  try {
    var createdData = await gsmService.createGsmData(req.body);
    res.status(201).json(createdData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    var data = await gsmService.findGsmDataById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ statusCode: 404, error: "GSM ID you referenced Does not exist" });
    }
    return res.json(data);
  } catch (error) {
    return res
      .statusCode(500)
      .json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    var exisitingGSM = await gsmService.findGsmDataById(req.params.id);
    console.log(exisitingGSM);
    if (!exisitingGSM) {
      return res
        .status(404)
        .json({ statusCode: 404, error: "GSM ID you referenced Does not exist" });
    }
    var updatedData = await gsmService.updateGsmData(req.body);
    return res.json(updatedData);
  } catch (error) {
    return res
      .statusCode(500)
      .json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    var exisitingData = await gsmService.findGsmDataById(req.params.id);
    if (!exisitingData) {
      return res
        .status(404)
        .json({ statusCode: 404, error: "Person Does not exist" });
    }

    await gsmService.deleteGsmData(req.params.id);
    return res.json({
      statusCode: 200,
      message: `GSM with id: ${req.params.id} is deleted successfully`,
    });
  } catch (error) {
    return res
      .statusCode(500)
      .json({ statusCode: 500, error: "Something went wrong" });
  }
});

module.exports = router;

