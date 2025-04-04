const fetch = require('node-fetch'); 
const googleTTS = require("google-tts-api"); 
const fs = require("fs");
const axios = require('axios');
const { exec } = require('child_process');
const { getRandom } = require('../../lib/myfunc');
const path = require('path');
const { addExif } = require('../../lib/exif'); 
const { styletext } = require('../../lib/scraper'); 
const { handleMediaUpload } = require('../../lib/catbox');
const { getDevice } = require('@whiskeysockets/baileys'); 


module.exports = [
 {
  command: ['browse'],
  operate: async ({ m, text, Cypher, reply }) => {
    if (!text) return reply("Enter URL");

    try {
      let res = await fetch(text);

      if (res.headers.get('Content-Type').includes('application/json')) {
        let json = await res.json();
        await Cypher.sendMessage(m.chat, { text: JSON.stringify(json, null, 2) }, { quoted: m });
      } else {
        let resText = await res.text();
        await Cypher.sendMessage(m.chat, { text: resText }, { quoted: m });
      }

      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
    } catch (error) {
      reply(`Error fetching URL: ${error.message}`);
    }
  }
},
 {
  command: ['emojimix', 'emix'],
  operate: async ({ m, text, prefix, command, Cypher, fetchJson, reply }) => {
    let [emoji1, emoji2] = text.split`+`;
    
    if (!emoji1)
      return reply(`*Example : ${prefix + command} 😅+🤔*`);
    
    if (!emoji2)
      return reply(`*Example : ${prefix + command} 😅+🤔*`);
    
    try {
      let anu = await fetchJson(
        `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
          emoji1
        )}_${encodeURIComponent(emoji2)}`
      );
      
      for (let res of anu.results) {
        await Cypher.sendImageAsSticker(
          m.chat,
          res.url,
          m,
          {
            packname: global.packname,
            author: global.author,
            categories: res.tags,
          }
        );
      }
    } catch (error) {
      console.error(error);
      reply('*An error occurred while fetching emoji mix.*');
    }
  }
},
 {
  command: ['fliptext'],
  operate: async ({ m, args, prefix, command, reply }) => {
    if (args.length < 1) return reply(`*Example:\n${prefix}fliptext Tylor*`);
    
    let flips = args.join(" ");
    let flipx = flips.split("").reverse().join("");
    
    reply(`Normal:\n${flips}\n\nFlip:\n${flipx}`);
  }
},
{
  command: ['gsmarena'],
  operate: async ({ m, reply, text }) => {
    if (!text) return reply("*Please provide a query to search for smartphones.*");

    try {
      const apiUrl = `https://api.siputzx.my.id/api/s/gsmarena?query=${encodeURIComponent(text)}`;
      const response = await fetch(apiUrl);
      const result = await response.json();

      if (!result.status || !result.data || result.data.length === 0) {
        return reply("*No results found. Please try another query.*");
      }

      const limitedResults = result.data.slice(0, 10);
      let responseMessage = `*Top 10 Results for "${text}":*\n\n`;

      for (let item of limitedResults) {
        responseMessage += `📱 *Name:* ${item.name}\n`;
        responseMessage += `📝 *Description:* ${item.description}\n`;
        responseMessage += `🌐 [View Image](${item.thumbnail})\n\n`;
      }

      reply(responseMessage);
    } catch (error) {
      console.error('Error fetching results from GSMArena API:', error);
      reply("❌ An error occurred while fetching results from GSMArena.");
    }
  }
},
 {
  command: ['genpass', 'genpassword'],
  operate: async ({ Cypher, m, reply, text }) => {
    let length = text ? parseInt(text) : 12;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    try {
      Cypher.sendMessage(m.chat, { text: pass }, { quoted: m });
    } catch (error) {
      console.error('Error generating password:', error);
      reply('An error occurred while generating the password.');
    }
  }
},
 {
  command: ['device', 'getdevice'],
  operate: async ({ Cypher, m, reply }) => {
    if (!m.quoted) {
      return reply('*Please quote a message to use this command!*');
    }
    
    console.log('Quoted Message:', m.quoted);
console.log('Quoted Key:', m.quoted?.key);

    try {
      const quotedMsg = await m.getQuotedMessage();

      if (!quotedMsg) {
        return reply('*Could not detect, please try with newly sent message!*');
      }

      const messageId = quotedMsg.key.id;

      const device = getDevice(messageId) || 'Unknown';

      reply(`The message is sent from *${device}* device.`);
    } catch (err) {
      console.error('Error determining device:', err);
      reply('Error determining device: ' + err.message);
    }
  }
},
 {
  command: ['obfuscate'],
  operate: async ({ m, text, prefix, command, obfus, reply }) => {
    if (!text) return reply(`*Example: ${prefix + command} const bot = require('cypher');*`);
    
    try {
      let meg = await obfus(text);
      reply(`${meg.result}`);
    } catch (error) {
      console.error(error);
      reply('*An error occurred while obfuscating the text.*');
    }
  }
},
 {
  command: ['qrcode'],
  operate: async ({ Cypher, m, reply, text }) => {
    if (!text) return reply("Enter text or URL");

    try {
      let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200`);
      let qrCodeUrl = res.url;

      await Cypher.sendMessage(m.chat, { image: { url: qrCodeUrl } }, { quoted: m });
    } catch (error) {
      console.error('Error generating QR code:', error);
      reply('An error occurred while generating the QR code.');
    }
  }
},
 {
  command: ['clear'],
  operate: async ({ Cypher, m, reply, text,isCreator }) => {
    if (!isCreator) return reply(`Humm, ${m.pushName}, take your own access`);

    try {
      
      await Cypher.sendMessage(m.chat, { image: { url: qrCodeUrl } }, { quoted: m });
    } catch (error) {
      console.error('Error generating QR code:', error);
      reply('An error occurred while generating the QR code.');
    }
  }
},
 {
  command: ['say'],
  operate: async ({ m, args, reply, Cypher }) => {
    let text =m.quoted || args.join(" ");
    if (!text || typeof text!=="string") return reply("*Text needed!*");
    
    try {
      const ttsData = await googleTTS.getAllAudioBase64(text, {
        lang: "fr",
        slow: false,
        host: "https://translate.google.com",
        splitPunct: ".?",
      });

      if (!ttsData.length) return reply("*Failed to generate TTS audio.*");

      const tempFiles = [];
      const tempDir = path.join(__dirname, '../../tmp'); // Générer le chemin absolu vers le répertoire tmp

      // Vérifiez si le dossier existe, sinon créez-le
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }

      for (let i = 0; i < ttsData.length; i++) {
        let filePath = path.join(tempDir, `tts_part${i}.mp3`); 
        fs.writeFileSync(filePath, Buffer.from(ttsData[i].base64, "base64"));
        tempFiles.push(filePath);
      }

      for (const file of tempFiles) {
        await Cypher.sendMessage(
          m.chat,
          {
            audio: fs.readFileSync(file),
            mimetype: "audio/mp4",
            ptt: true,
            fileName: "tts_audio.mp3",
          },
          { quoted: m}
        );
        fs.unlinkSync(file)
      }
      
    } catch (error) {
      console.error("Error in TTS Command:", error);
      await Cypher.sendMessage(
        m.chat,
        {
          audio: fs.readFileSync("../../Media/audio/error.mp3"),
          mimetype: "audio/mp4",
          ptt: true,
          fileName: "tts_audio.mp3",
        },
        { quoted: m}
      );
    }
  }
},
 {
  command: ['ssweb', 'screenshot', 'ss'],
  operate: async ({ Cypher, m, reply, args }) => {
    const q = args.join(" ");
    if (!q) return reply(`Please provide a URL to screenshot!`);
    
    const apiURL = `https://api.siputzx.my.id/api/tools/ssweb?url=${q}&theme=light&device=mobile`;
    
    try {
      await Cypher.sendMessage(m.chat, { image: { url: apiURL } }, { quoted: m });
    } catch (error) {
      console.error('Error generating screenshot:', error);
      reply("An error occurred while generating the image.");
    }
  }
},
 {
  command: ['sswebpc'],
  operate: async ({ Cypher, m, reply, args }) => {
    const q = args.join(" ");
    if (!q) return reply(`Please provide a URL to screenshot!`);
    
    const apiURL = `https://api.siputzx.my.id/api/tools/ssweb?url=${q}&theme=light&device=desktop`;
    
    try {
      await Cypher.sendMessage(m.chat, { image: { url: apiURL } }, { quoted: m });
    } catch (error) {
      console.error('Error generating screenshot:', error);
      reply("An error occurred.");
    }
  }
},
 {
  command: ['sswebtab'],
  operate: async ({ Cypher, m, reply, args }) => {
    const q = args.join(" ");
    if (!q) return reply(`Please provide a URL to screenshot!`);
    
    const apiURL = `https://api.siputzx.my.id/api/tools/ssweb?url=${q}&theme=light&device=tablet`;
    
    try {
      await Cypher.sendMessage(m.chat, { image: { url: apiURL } }, { quoted: m });
    } catch (error) {
      console.error('Error generating screenshot:', error);
      reply("An error occurred.");
    }
  }
},
 {
  command: ['sticker', 's'],
  operate: async ({ Cypher, m, reply, args, prefix, command }) => {
 
    const quoted = m.quoted || m.msg?.quoted;
    if (!quoted) {
      return reply(`Send or reply to images, videos, or gifs with captions ${prefix + command}`);
    }

    const mime = quoted.mimetype || quoted.msg?.mimetype;
    if (!mime) {
      return reply(`The quoted message does not contain media. Please send or reply to an image, video, or gif.`);
    }

    const swns = args.join(" ");
    const pcknms = swns.split("|")[0];
    const atnms = swns.split("|")[1];

    try {
      if (/image/.test(mime)) {
        const media = await quoted.download();
        await Cypher.sendImageAsSticker(m.chat, media, m, {
          packname: pcknms ? pcknms : global.packname,
          author: atnms ? atnms : global.author,
        });
      }
      else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 10) {
          return reply("The video length must be 10 seconds or less. Please try again.");
        }
        const media = await quoted.download();
        await Cypher.sendVideoAsSticker(m.chat, media, m, {
          packname: pcknms ? pcknms : global.packname,
          author: atnms ? atnms : global.author,
        });
      }
    
      else {
        return reply(`Send or reply to images, videos, or gifs with captions ${prefix + command}`);
      }
    } catch (error) {
      console.error('Error processing sticker:', error);
      reply('An error occurred while processing the sticker.');
    }
  }
},
 {
  command: ['fancy', 'styletext'],
  operate: async ({ m, text, Cypher, reply }) => {
    
    if (!text) return reply('*Enter a text!*');
    
    try {
      let anu = await styletext(text);
      let teks = `Styles for ${text}\n\n`;
      
      for (let i of anu) {
        teks += `□ *${i.name}* : ${i.result}\n\n`;
      }
      
      reply(teks);
    } catch (error) {
      console.error(error);
      reply('*An error occurred while fetching fancy text styles.*');
    }
  }
},
 {
  command: ['take', 'wm', 'steal'],
  operate: async ({ Cypher, m, reply, args, pushname }) => {
    if (!m.quoted) return reply('Please reply to a sticker to add watermark or metadata.');

    try {
      let stick = args.join(" ").split("|");
      let packName = stick[0] && stick[0].trim() !== "" ? stick[0] : pushname || global.packname;
      let authorName = stick[1] ? stick[1].trim() : "";
      let mime = m.quoted.mimetype || '';
      if (!/webp/.test(mime)) return reply('Please reply to a sticker.');

      let stickerBuffer = await m.quoted.download();
      if (!stickerBuffer) return reply('Failed to download the sticker. Please try again.');

      let stickerWithExif = await addExif(stickerBuffer, packName, authorName);

      if (stickerWithExif) {
        await Cypher.sendFile(
          m.chat,
          stickerWithExif,
          'sticker.webp',
          '',
          m,
          null,
          { mentions: [m.sender] }
        );
      } else {
        throw new Error('Failed to process the sticker with metadata.');
      }
    } catch (error) {
      console.error('Error in watermark/sticker metadata plugin:', error);
      reply('An error occurred while processing the sticker.');
    }
  }
},
 {
  command: ['tinyurl', 'shortlink'],
  operate: async ({ m, text, prefix, command, reply }) => {
    if (!text) return reply(`*Example: ${prefix + command} https://instagram.com/heyits_tylor*`);
    
    try {
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
      reply(response.data);
    } catch (error) {
      console.error(error);
      reply('*An error occurred while shortening the URL.*');
    }
  }
},
 {
  command: ['toimage', 'toimg'],
  operate: async ({ Cypher, m, reply, args, prefix, command }) => {
    const quoted = m.quoted || m.msg?.quoted;
    const mime = quoted?.mimetype || quoted?.msg?.mimetype;
    if (!quoted || !/webp/.test(mime)) {
      return reply(`*Send or reply to a sticker with the caption ${prefix + command}*`);
    }

    try {
      const media = await quoted.download();
      const inputPath = path.join(__dirname, getRandom('.webp'));
      fs.writeFileSync(inputPath, media);
      const outputPath = path.join(__dirname, getRandom('.png'));
      exec(`ffmpeg -i ${inputPath} ${outputPath}`, (err) => {
        fs.unlinkSync(inputPath); 

        if (err) {
          console.error('Error converting to image:', err);
          return reply('An error occurred while converting the sticker to an image.');
        }
        const buffer = fs.readFileSync(outputPath);
        Cypher.sendMessage(m.chat, { image: buffer }, { quoted: m });    
        fs.unlinkSync(outputPath);
      });
    } catch (error) {
      console.error('Error converting to image:', error);
      reply('An error occurred while converting the sticker to an image.');
    }
  }
},
 {
  command: ['tourl', 'url'],
  operate: async ({ m, Cypher, reply }) => {
    const quoted = m.quoted || m.msg?.quoted;
    const mime = quoted?.mimetype || quoted?.msg?.mimetype;

    if (!quoted || !mime) {
      return reply('*Please reply to a media message!*');
    }

    try {
      const mediaUrl = await handleMediaUpload(quoted, Cypher, mime);
      reply(`*Uploaded successfully:*\n${mediaUrl}`);
    } catch (error) {
      console.error(error);
      reply('*An error occurred while uploading the media.*');
    }
  }
},
{
  command: ['translate', 'trt'],
  operate: async ({ m, args, prefix, command, reply }) => {
    const defaultLang = 'en'; // Default language for translation

    const supportedLangs = [
      'af', 'ar', 'az', 'be', 'bg', 'bn', 'bs', 'ca', 'ceb', 'co', 'cs', 'cy', 'da', 'de',
      'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'fy', 'ga', 'gd', 'gl', 'gu',
      'ha', 'haw', 'hi', 'hmn', 'hr', 'ht', 'hu', 'hy', 'id', 'ig', 'is', 'it', 'ja', 'jv',
      'ka', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 'mi',
      'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'or', 'pa', 'pl',
      'ps', 'pt', 'ro', 'ru', 'sd', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'st',
      'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi',
      'yo', 'zh', 'zu'
    ];

    const usageGuide = `
🚀 *How to Use the Translate Command:*

📌 *Example 1:* Translate text from any language to English
   - Command: ${prefix}${command} en [Your Text Here]
   - Usage: ${prefix}${command} en Hello World

📌 *Example 2:* Translate text to a specific language
   - Command: ${prefix}${command} <language_code> [Your Text Here]
   - Usage: ${prefix}${command} fr Bonjour tout le monde

🌐 *Supported Languages:*
${supportedLangs.join(', ')}

🛠 *Note:*
Ensure you use the correct language code for accurate translation.
`.trim();

    let lang = args[0]; 
    let text = args.slice(1).join(' ');

    if (!supportedLangs.includes(lang)) {
      lang = defaultLang;
      text = args.join(' ');
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
    if (!text) return reply(usageGuide);

    try {
      const apiUrl = `https://xploader-api.vercel.app/translate?text=${encodeURIComponent(text)}&lang=${lang}`;

      const response = await fetch(apiUrl);
      const result = await response.json();

      if (!result.translated) throw new Error('Translation failed.');

      reply(result.translated);

    } catch (error) {
      console.error('Translation Error:', error);
      reply('An error occurred while translating the text.');
    }
  }
},
{
  command: ['vcc'],
  operate: async ({ m, reply, args }) => {

    const apiUrl = `https://api.siputzx.my.id/api/tools/vcc-generator?type=MasterCard&count=5`;

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();

      if (!result.status || !result.data || result.data.length === 0) {
        return reply("❌ Unable to generate VCCs. Please try again later.");
      }

      let responseMessage = `🎴 *Generated VCCs* (Type: Mastercard and Count: 5):\n\n`;

      result.data.forEach((card, index) => {
        responseMessage += `#️⃣ *Card ${index + 1}:*\n`;
        responseMessage += `🔢 *Card Number:* ${card.cardNumber}\n`;
        responseMessage += `📅 *Expiration Date:* ${card.expirationDate}\n`;
        responseMessage += `🧾 *Cardholder Name:* ${card.cardholderName}\n`;
        responseMessage += `🔒 *CVV:* ${card.cvv}\n\n`;
      });

      reply(responseMessage);
    } catch (error) {
      console.error("Error fetching VCC data:", error);
      reply("An error occurred while generating VCCs. Please try again later.");
    }
  }
}
];