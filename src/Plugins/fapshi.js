const fs = require("fs");
const path = require("path");
const { sleep } = require("../../lib/myfunc");
const {
  generateProfilePicture,
  downloadContentFromMessage,
} = require("@whiskeysockets/baileys");
const FAPSHI = require("fapshi");
function generateFapshiId() {
  const timestamp = Date.now();
  const randomNum =
    "4S1" +
    Math.floor(Math.random() * 10000) +
    "1152C8" +
    Math.floor(Math.random() * 1000);
  return `ID${timestamp}${randomNum}`;
}
module.exports = [
  {
    command: ["paymeout", "pmo"],
    operate: async ({ Cypher, m, reply, isCreator, mess }) => {
      if (!isCreator) return reply(mess.owner);
      reply(
        "*To access all of my function, pay here:*\n https://checkout.fapshi.com/link/72243979"
      );
    },
  },
  {
    command: ["balance", "blc"],
    operate: async ({ Cypher, m, reply, isCreator, mess }) => {
      if (!isCreator) return reply(mess.owner);
      const user = global.FAPSHI_USER;
      const key = global.FAPSHI_API;

      if (!user || !key)
        return reply(
          `Hey ${global.ownername}, provide your business information to access this function`
        );
        try {
            const fapshi = new FAPSHI(user, key);
            const details=await fapshi.balance() 
            reply(`hey ${global.ownername},here is your account details now:\n\n- *Balance*: ${details.balance} XAF\n\n- Service: ${details.service}`)
        } catch (e) {
            reply(
                `Error when trying to generate the payment link.\n > Error ${e}. \n\n*237621092130 for more information*`
              );
        }
    },
  },
  {
    command: ["linktopay", "ltp"],
    operate: async ({ Cypher, m, reply, isCreator, text, mess, command }) => {
      if (!isCreator) return reply(mess.owner);
      const user = global.FAPSHI_USER;
      const key = global.FAPSHI_API;

      if (!user || !key)
        return reply(
          `Hey ${global.ownername}, provide your business information to access this function`
        );
      let [amount, message, email] = text.split("|");
      amount = parseInt(amount);
      if (!amount)
        return reply(
          `❌Invalid usage❌\n Exemple : *.${command} amount|message|email*`
        );

      if (amount < 100) reply("*Amount most be grater than 100 *");
      const transactionId = generateFapshiId();

      const data = {
        amount,
        email: email || "dontKnowUserEmail@gmail.com",
        userId: "usingBotPayement0",
        externalId: transactionId,
        redirectUrl: `https://wa.me/${
          global.ownernumber
        }?text=${encodeURIComponent(
          "Hello I just paid you " + amount + " XAF"
        )}`,
        message: message || "Simple payment using Cypher Add bot",
      };
      try {
        const fapshi = new FAPSHI(user, key);
        const response = await fapshi.initiatePay(data);
        if (response.statusCode !== 200)
          throw new Error(
            "Invalid status of Fapshi. Code :" + response.statusCode
          );
        const { transId, link, dateInitiated } = response;
        reply(`ID: ${transId}`);
        const k = `Payement init successfully. Details:\n\n- *Amount*: ${amount} XAF \n\n- *Transaction Id* : ${transId}\n- *Payment Link*: ${link}\n\n> This link will expired after 24h\n\n\n            *©CypherX*`;
        reply(k);
      } catch (e) {
        reply(
          `Error when trying to generate the payment link.\n > Error ${e}. \n\n*237621092130 for more information*`
        );
      }
    },
  },
  {
    command: ["howispay", "hip"],
    operate: async ({ Cypher, m, reply, isCreator, mess, text }) => {
      if (!isCreator) return reply(mess.owner);
      const user = global.FAPSHI_USER;
      const key = global.FAPSHI_API;
      if (!user || !key)
        return reply(
          `Hey,${global.ownername}, provide your business information to access this function`
        );
      const id = text.trim();
      if (!id) return reply("*provide the transaction id*");
      try {
        const fapshi = new FAPSHI(user, key);
        const level = await fapshi.paymentStatus(id);
        if (level.status === "SUCCESSFUL") {
          return reply(
            `Transaction completed successfully. Details:\n\n- Sender Name:${level.payerName}\n\n- Amount: ${level.amount} XAF\n\n- Payment method: ${level.medium}\n\n-Time Paid:${level.dateConfirmed}\n\n> So give her a service ${global.ownername}.\n\n\n            *©CypherX*`
          );
        } else {
          const status = level.status;
          const em =
            status === "CREATED" ? "⌚" : fs.status === "PENDING" ? "⌛" : "❌";
          const date=new Date(level.dateInitiated)
            reply(
            `This transaction isn't finished. Details:\n\n- *Amount*: ${level.amount} XAF\n\n- *Status*: ${em} ${status}\n\n- *Time*: ${date.toDateString()}.\n\n            *©CypherX*`
          );
        }
      } catch (e) {
        reply(
          `Error when trying to generate the payment link.\n > Error ${e}. \n\n*237621092130 for more information*`
        );
      }
    },
  },
];
