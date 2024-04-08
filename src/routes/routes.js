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
  "jkt48-official",
  "jkt48_nala",
  "jkt48_aralie",
  "jkt48_delynn",
  "jkt48_shasa",
  "jkt48_lana",
  "jkt48_erine",
  "jkt48_fritzy",
  "jkt48_lily",
  "jkt48_trisha",
  "jkt48_moreen",
  "jkt48_levi",
  "jkt48_nayla",
  "jkt48_nachia",
  "jkt48_oline",
  "jkt48_regie",
  "jkt48_ribka",
  "jkt48_kimmy",
];

router.get("/jkt48", async (req, res) => {
  try {
    const filteredData = await filterIDNLivesByUsernames(jkt48Usernames);

    if (filteredData.length === 0) {
      res.json([]);
    } else {
      res.json(filteredData);
    }
  } catch (error) {
    console.error("Error fetching IDN lives:", error);
    res.status(500).json({ error: "Failed to fetch IDN lives" });
  }
});

module.exports = router;
