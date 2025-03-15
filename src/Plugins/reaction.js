const axios = require('axios');

const fetchReactionImage = async ({ Cypher, m, reply, command }) => {
  try {
    const { data } = await axios.get(`https://api.waifu.pics/sfw/${command}`);
    await Cypher.sendImageAsSticker(m.chat, data.url, m, {
      packname: global.packname,
      author: global.author,
    });
  } catch (error) {
    reply(`❌ Error fetching image: ${error.message}`);
  }
};

module.exports = [
  { command: ["8ball"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "8ball" }) },
  { command: ["avatar"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "avatar" }) },
  { command: ["awoo"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "awoo" }) },
  { command: ["bite"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "bite" }) },
  { command: ["blush"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "blush" }) },
  { command: ["bonk"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "bonk" }) },
  { command: ["bully"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "bully" }) },
  { command: ["cringe"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "cringe" }) },
  { command: ["cry"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "cry" }) },
  { command: ["cuddle"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "cuddle" }) },
  { command: ["dance"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "dance" }) },
  { command: ["feed"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "feed" }) },
  { command: ["foxgirl"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "foxgirl" }) },
  { command: ["gecg"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "gecg" }) },
  { command: ["glomp"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "glomp" }) },
  { command: ["goose"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "goose" }) },
  { command: ["handhold"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "handhold" }) },
  { command: ["happy"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "happy" }) },
  { command: ["highfive"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "highfive" }) },
  { command: ["hug"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "hug" }) },
  { command: ["kill"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "kill" }) },
  { command: ["kiss"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "kiss" }) },
  { command: ["lick"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "lick" }) },
  { command: ["lizard"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "lizard" }) },
  { command: ["meow"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "meow" }) },
  { command: ["nom"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "nom" }) },
  { command: ["pat"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "pat" }) },
  { command: ["poke"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "poke" }) },
  { command: ["shinobu"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "shinobu" }) },
  { command: ["slap"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "slap" }) },
  { command: ["smile"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "smile" }) },
  { command: ["smug"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "smug" }) },
  { command: ["spank"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "spank" }) },
  { command: ["tickle"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "tickle" }) },
  { command: ["wave"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "wave" }) },
  { command: ["wink"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "wink" }) },
  { command: ["woof"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "woof" }) },
  { command: ["yeet"], operate: async (cypherx) => fetchReactionImage({ ...cypherx, command: "yeet" }) },
];