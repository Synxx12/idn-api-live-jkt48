const axios = require("axios");

async function getIDNLives() {
  try {
    const response = await axios.post(
      "https://api.idn.app/graphql",
      {
        query:
          'query SearchLivestream { searchLivestream(query: "", limit: 100) { next_cursor result { slug title image_url view_count playback_url room_identifier status live_at end_at scheduled_at gift_icon_url category { name slug } creator { uuid username name avatar bio_description following_count follower_count is_follow } } }}',
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data?.data.searchLivestream?.result;

    if (data?.length) {
      return data.map((i) => {
        return {
          user: {
            id: i.creator?.uuid,
            name: i.creator?.name,
            username: i.creator?.username,
            avatar: i.creator?.avatar,
          },
          image: i.image_url,
          stream_url: i.playback_url,
          title: i.title,
          slug: i.slug,
          view_count: i.view_count,
          live_at: new Date(i.live_at).toISOString(),
        };
      });
    }
  } catch (error) {
    console.error("Error fetching IDN lives:", error);
    throw error;
  }
}

module.exports = { getIDNLives };
