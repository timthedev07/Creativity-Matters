const COUNT = 10;
const API_KEY: string = "AIzaSyCVNxhhhPOyU1UZM-TSOSJIbvEoktmPQrE";
const BASE_SEARCHING_URL: string = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&maxResults=${COUNT}&part=snippet&type=video&q=`;

export const fetchVideo = async () => {
  const query = "creative%20hack";
  const res = await fetch(BASE_SEARCHING_URL + query);
  if (!res.ok) {
    return "0";
  }
  const obj = await res.json();
  return obj.items[0].id.videoId;
};
