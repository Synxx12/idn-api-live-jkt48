const express = require("express");
const router = express.Router();
const { filterIDNLivesByUsernames } = require("../utils/idnlivesUtils");

const jkt48Usernames = [
  "jkt48_freya",
  "jkt48_ashel",
  "jkt48_amanda",
  "jkt48_gita",
  "jkt48_lulu",
  "jkt48_jessi",
  "jkt48_shani",
  "jkt48_raisha",
  "jkt48_muthe",
  "jkt48_chika",
  "jkt48_christy",
  "jkt48_lia",
  "jkt48_cathy",
  "jkt48_cynthia",
  "jkt48_daisy",
  "jkt48_indira",
  "jkt48_eli",
  "jkt48_michie",
  "jkt48_gracia",
  "jkt48_ella",
  "jkt48_adel",
  "jkt48_feni",
  "jkt48_marsha",
  "jkt48_zee",
  "jkt48_lyn",
  "jkt48_indah",
  "jkt48_elin",
  "jkt48_chelsea",
  "jkt48_danella",
  "jkt48_gendis",
  "jkt48_gracie",
  "jkt48_greesel",
  "jkt48_flora",
  "jkt48_olla",
  "jkt48_kathrina",
  "jkt48_oniel",
  "jkt48_fiony",
  "jkt48_callie",
  "jkt48_alya",
  "jkt48_anindya",
  "jkt48_jeane",
];

router.get("/jkt48", async (req, res) => {
  try {
    const filteredData = await filterIDNLivesByUsernames(jkt48Usernames);
    res.json(filteredData);
  } catch (error) {
    console.error("Error handling JKT48 request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
