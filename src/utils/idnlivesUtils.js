const { getIDNLives } = require("../controllers/idnlivesController");

async function filterIDNLivesByUsernames(allowedUsernames) {
  try {
    const idnLivesData = await getIDNLives();
    const filteredData = idnLivesData.filter((item) => allowedUsernames.includes(item.user.username));
    return filteredData;
  } catch (error) {
    console.error("Error filtering IDN lives by usernames:", error);
    throw error;
  }
}

module.exports = { filterIDNLivesByUsernames };
