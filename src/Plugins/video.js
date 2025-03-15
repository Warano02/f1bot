
const fs = require('fs');
const { exec } = require('child_process');
const { getRandom } = require('../../lib/myfunc');

module.exports = [
 {
  command: ['volvideo'],
  operate: async ({ Cypher, m, reply, args }) => {
  
  const quoted = m.quoted ? m.quoted : null;
  const mime = quoted?.mimetype || "";
      
    if (!args.join(" ")) return reply(`*Example: ${global.prefixz + command} 10*`);
   if (!quoted || !/video/.test(mime)) return reply(`Reply to an *video file* with *${prefix + command}* to adjust volume.`);

    try {
      const media = await Cypher.downloadAndSaveMediaMessage(quoted, "volume");
      const volvid = getRandom(".mp4");

      exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${volvid}`, (err, stderr, stdout) => {
        fs.unlinkSync(media);
        if (err) return reply("*Error!*");

        const files = fs.readFileSync(volvid);
        Cypher.sendMessage(
          m.chat,
          { video: files, mimetype: "video/mp4" },
          { quoted: m }
        );
        fs.unlinkSync(volvid);
      });
    } catch (error) {
      console.error('Error processing video:', error);
      reply('An error occurred while processing the video.');
    }
  }
},
];