const COUNT = 4;

const API_KEYS = [
  "AIzaSyCVNxhhhPOyU1UZM-TSOSJIbvEoktmPQrE",
  "AIzaSyDULCMvpdgt4dsgzSgkJ5Zdc5CxYaqD8bI",
  "AIzaSyAHNkGKkRDhPfssGKfQg-nj8h8nTkp1jr0",
  "AIzaSyBGkHC6ec_X8gtE-NaOCZKUGDPkvYppobs",
];

const POSSIBLE_KEYWORDS = [
  "DIY",
  'poem writing "tutorial"',
  'piano "tutorial"',
  "life hack",
  "lego tricks",
  "football tricks",
  "basketball tricks",
  "badminton tricks",
  "english language tricks",
  "skateboard tricks",
  "merch design",
  "how to compose a piece of music",
  "rearrange your room | redesign your room",
  "how to paint a room",
  "DIY Galaxy Night Lamp tutorial",
  "school life hacks",
  "yoga tutorial",
  "calligraphy tutorial",
  "swimming with sharks",
  `deep sea fishing "tutorial"`,
  `how to decorate a christmas tree`,
  "how to make summery drinks",
];

export const generateVideo = async () => {
  const today = new Date();
  if (localStorage.getItem("id")) {
    const lastDate = new Date(
      localStorage.getItem("lastDate") ||
        `${today.getMonth() + 1} ${today.getDate()} ${today.getFullYear()}`
    );
    if (Math.abs(lastDate.valueOf() - today.valueOf()) < 86400000) {
      return localStorage.getItem("id");
    }
  }
  const query = generateQuery();
  const res = await tryGetVideo(query, 0);
  return res ? res : null;
};

/**
 * Recursively trying to get a video using multiple api keys, returns null if all of them failed.
 * @param query
 * @param n
 * @returns
 */
const tryGetVideo: (query: string, n: number) => Promise<string> = async (
  query: string,
  n: number
) => {
  if (n >= API_KEYS.length) return null;
  const res = await fetch(getBaseUrl(API_KEYS[n]) + query);
  if (!res.ok) {
    return tryGetVideo(query, n + 1);
  }
  const today = new Date();
  const obj = await res.json();
  const id = obj.items[Math.ceil(Math.random() * (COUNT - 1))].id.videoId;
  localStorage.setItem("id", id);
  localStorage.setItem(
    "lastDate",
    `${today.getMonth() + 1} ${today.getDate()} ${today.getFullYear()}`
  );
  return id;
};

const generateQuery = () => {
  const ind = Math.ceil(Math.random() * (POSSIBLE_KEYWORDS.length - 1));
  const choice = POSSIBLE_KEYWORDS[ind];
  return choice;
};

/**
 * Generates a random boolean
 * The larger the parameter `num` is, the more possible it is to return true;
 * @param num a number between 1 - 10
 */
export const weightedBool = (num: number) => {
  return Math.random() * 10 < num;
};

const getBaseUrl = (key: string) => {
  return `https://www.googleapis.com/youtube/v3/search?key=${key}&maxResults=${COUNT}&part=snippet&type=video&q=`;
};
