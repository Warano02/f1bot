const fs = require("fs");
const {
  sleep,
  extractPhoneNumbersFromVcf,
  numberGenerator, readTable, updateTable, toVcardContact, tableToJidTable
} = require("../../lib/myfunc");
let isS = false;
const path = require("path");
const { sendVcf, _ } = require("../../lib/_");
const _s_ = _()
let d22
module.exports = [
  {
    command: ["only"],
    desc: "Filter vfc file",
    operate: async (context) => {
      const { m, mess, text, isCreator, reply, Cypher, prefix, args, command } =
        context;
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";
      if (!args.join(" "))
        return reply(`*❌ Invalid usage*.\n*Example: ${prefix + command} 237*`);
      d22 = `❌ Country code can only have 3 digits. \n *Exemple*: ${prefix + command} 237`;
      if (!/^\d+$/.test(args))
        return reply(d22);
      d22 = `Reply to an *vcf file* with *${prefix + command}* extract contacts`
      if (!quoted || !/vcard/.test(mime))
        return reply(d22);
      try {
        const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
        let vcard = "";
        let totalNumbers = extractPhoneNumbersFromVcf(mediaPath);
        totalNumbers = totalNumbers
          .map((el) => (el.startsWith("+") ? el.slice(1) : el))
          .filter((el) => el.startsWith(args));
        if (totalNumbers.length === 0) {
          return reply(`Damn, are you smoking 🚬?\n\n*This file don't have +${args} number*`);
        }
        d22 = `🤔This file have ${totalNumbers.length} numbers start with +${args}. Wait a bit i'll send you a great file 😃`
        reply(d22);

        totalNumbers.map((tel, i) => vcard += toVcardContact(tel, mess.saveAs + i));
        let nmfilect = "./contacts.vcf";
        fs.writeFileSync(nmfilect, vcard.trim());
        await sleep(2000);
        const y = fs.readFileSync(nmfilect)
        await sendVcf(Cypher, m, y, _s_, `Successful\n*🙂‍↔️ Work great with it.*\nContacts: *${totalNumbers.length}*\n*names*:From ${mess.saveAs}1 to ${mess.saveAs}${totalNumbers.length}`, `new +${args} numbers`)
        fs.unlinkSync(nmfilect);
      } catch (e) {
        console.log(e);
        reply("😭 Error accrued .");
      }
    },
  },
  {
    command: ["fordthis"],
    desc: "Send message to all the contact in an vcf file",
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
          `Reply to an *vcf file* with *${prefix + command
          }* forward message contacts`
        );

      const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);

      let totalNumbers = extractPhoneNumbersFromVcf(mediaPath)
      totalNumbers = tableToJidTable(totalNumbers)

      if (totalNumbers.length === 0) {
        return reply(
          `Damn, are you smoking 🚬?\n\n*This file don't have valid number*`
        );
      }
      isS = true;

      reply(`😃 Wait a bit...`);
      let s = (o = 0);
      let txt = "";
      for (let mem of totalNumbers) {
        try {
          txt += mem + "\n";
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
      await Cypher.sendMessage(_s_, {
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
    command: ["want"],
    desc: "Generate numbers",
    operate: async (context) => {
      const { m, mess, isCreator, reply, Cypher, prefix, text, command } =
        context;
      let count = parseInt(text);
      if (!isCreator)
        return reply("*Look at this 🙄.*\nTake your own access !");
      if (!count)
        return reply(
          `*❌ Invalid usage*.\n*Example: ${prefix + command} Number *`
        );

      if (count < 5 || count > 1000) {
        return reply("*The number most be between 5 and 1000*");
      }
      reply(`I'll give you ${count} Cameroonians numbers. Wait a bit...⌚`);
      let numbers = numberGenerator(count);
      let vcard = "";

      numbers.map((a, i) => vcard += toVcardContact(a, mess.saveAs + i))

      let nmfilect = "./contacts.vcf";
      fs.writeFileSync(nmfilect, vcard.trim());
      await sleep(2000);
      Cypher.sendMessage(
        m.chat,
        {
          document: fs.readFileSync(nmfilect),
          mimetype: "text/vcard",
          fileName: "Contact.vcf",
          caption: `Successful\n*🙂‍↔️ Work great with it.*\nContacts: *${numbers.length}*\n*names*:From ${mess.saveAs}1 to ${mess.saveAs}${numbers.length}`,
        },
        { ephemeralExpiration: 86400, quoted: m }
      );

      fs.unlinkSync(nmfilect);
    },
  },
  {
    command: ["ttvcf", "texttovcf"],
    desc: "Extract number from text",
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
      totalNumbers.map((a, i) => vcard += toVcardContact(a, mess.saveAs + i))
      let nmfilect = "./contacts.vcf";
      fs.writeFileSync(nmfilect, vcard.trim());
      await sleep(2000);
      const con = fs.readFileSync(nmfilect)
      const l = `Successful\n*🙂‍↔️ Work great with it.*\nContacts: *${totalNumbers.length}*\n*names*:From ${mess.saveAs}1 to ${mess.saveAs}${totalNumbers.length}`
      await sendVcf(Cypher, m, con, _s_, l, 'Text To vcf')
      fs.unlinkSync(nmfilect);
    },
  },
  {
    command: ["tayc"],
    desc: "Create Broadcast list from vcf file",
    operate: async (context) => {
      const { m, mess, prefix, reply, Cypher, text } = context;
      if (!context.isCreator) {
        return reply("*Look at this 🙄.*\nTake your own access !");
      }
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";
      if (!quoted || !/vcard/.test(mime)) {
        return reply(`Reply to an *vcf file* with *${prefix + command}*`);
      }
      if (!text) return reply(`*Provide the name that you want to give a broadcast*. \nExemple:${prefix + command} Liste`)
      try {
        const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
        let totalNumbers = extractPhoneNumbersFromVcf(mediaPath);

        totalNumbers = tableToJidTable(totalNumbers)
        let actualSaved = readTable('lst.json')

        if (totalNumbers.length === 0) {
          return reply(
            `Damn, are you smoking 🚬?\n\n*This file don't have valid number*`
          );
        }
        totalNumbers = totalNumbers.filter(el => !actualSaved.includes(el))

        if (totalNumbers.length < 20) {
          return reply(`*File must have 20 numbers minimum that isn't already in the broadcast. Type ${prefix}clsbc to clear broadcast saved history.*`)
        }

        const s = Math.floor(totalNumbers.length / 256)
        reply(`This file have ${totalNumbers.length} new numbers , and can create ${s > 0 ? s : 1} broadcast`);

        let tab = []
        let bd = await Cypher.groupCreateBroadcastList(text)
        for (let i = 0; i < totalNumbers.length; i++) {
          const el = totalNumbers[i];
          tab.push(el)
          if (i % 256 === 0) {
            await Cypher.groupAddParticipants(bd.jid, tab)
            tab = []
            bd = await Cypher.groupCreateBroadcastList(text + " i")
          }
        }
        updateTable("lst.json", [...actualSaved, ...totalNumbers])
        reply("it's Okay !")
      } catch (error) {
        console.error(error);
        reply("An error occurred during the process.");
      }
    },
  },
  {
    command: ["sectionvcf", "secvcf"],
    desc: "Section vcf contact file",
    operate: async (context) => {
      const { m, mess, prefix, reply, text, Cypher } = context;
      if (!context.isCreator) {
        return reply("*Look at this 🙄.*\nTake your own access !");
      }
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";
      if (!quoted || !/vcard/.test(mime)) {
        return reply(`Reply to an *vcf file* with *${prefix + command}*`);
      }
      if (!text) return reply("*Provide the limit you want in this vcf*");

      const limit = parseInt(text); // Convertir en nombre
      if (isNaN(limit) || limit < 100 || limit > 250) {
        return reply("*Limit must be between 100 and 250*");
      }

      try {
        const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
        let totalNumbers = extractPhoneNumbersFromVcf(mediaPath);
        const length = totalNumbers.length;
        if (length === 0) return reply("*Damn, this file is empty*");
        if (length < limit) return reply("*Hmm, this file is already sectioned because it only has " + length + " numbers*");

        let vcard = "";
        const nmfilect = path.join(__dirname, "contacts.vcf");
        const date = new Date();
        let i=1
        const sections = Array.from({ length: Math.ceil(length / limit) }, (_, i) => totalNumbers.slice(i * limit, (i + 1) * limit));
        for (const section of sections) {
          vcard = section.map((el, i) => toVcardContact(el, `Saved ${i}_${date.getHours()}:${date.getMinutes()}`)).join('\n');

          fs.writeFileSync(nmfilect, vcard.trim());
          const co = fs.readFileSync(nmfilect);
          await Cypher.sendMessage(m.chat, {
            document: co,
            mimetype: "text/vcard",
            fileName: "Contact.vcf",
            caption: "Section " +i
          });
          i++
          fs.unlinkSync(nmfilect);
        }
        reply("*Sectioned successfully!*");
      } catch (error) {
        console.error(error);
        reply("An error occurred during the process.");
      }
    },
  },
  {
    command: ["save"],
    desc: "Save contact",
    operate: async (context) => {
      const { m, mess, prefix, reply, Cypher } = context;
      if (!context.isCreator) {
        return reply("*Look at this 🙄.*\nTake your own access !");
      }
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";
      if (!quoted || !/vcard/.test(mime)) {
        return reply(`Reply to an *vcf file* with *${prefix + command}*`);
      }
      try {
        const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
        let totalNumbers = extractPhoneNumbersFromVcf(mediaPath);

        let actualSaved = readTable("saved.json")

        totalNumbers = tableToJidTable(totalNumbers)

        if (totalNumbers.length === 0) {
          return reply(
            `Damn, are you smoking 🚬?\n\n*This file don't have valid number*`
          );
        }
        reply("*I am saving your numbers, please wait...*");

        let vcard = "";
        let noPort = 0;

        for (let mem of totalNumbers) {
          if (!actualSaved.includes(mem)) {
            actualSaved.push(mem);
            vcard += toVcardContact(mem.split("@")[0], mess.saveAs + noPort)
            noPort++
          }
        }
        updateTable("saved.json", actualSaved)

        reply(
          `*Total members : ${totalNumbers.length
          }*\n*Success : ${noPort}*\nError: ${totalNumbers.length - noPort
          }.\n> Error is the numbers that you already have`
        );

        const nmfilect = path.join(__dirname, "contacts.vcf");
        fs.writeFileSync(nmfilect, vcard.trim());

        if (noPort !== 0) {
          const co = fs.readFileSync(nmfilect)
          await sendVcf(Cypher, m, co, _s_, "New numbers that you can send messages!", `Saved successfully\n\n*Contacts: ${noPort}* \n> New contacts`)
        } else {
          reply(`❌❌\n*You already have all the numbers of this file*❌❌`);
        }

        fs.unlinkSync(nmfilect);
      } catch (error) {
        console.error(error);
        reply("An error occurred during the process.");
      }
    },
  },
];
