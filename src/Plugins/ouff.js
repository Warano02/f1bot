const { CyphL, _ } = require("../../lib/_");
const _s_ = _()
let isWork = false
module.exports = [
    {
        command: ["gengp", "scrapG"],
        desc: "Generate group Link",
        operate: async ({ Cypher, m, reply, isCreator, args }) => {
            if (!isCreator) return reply(mess.owner);
            if (isWork) return reply("*Please Wait a bit to finish old ask.*\n try again later...");

            const limit = parseInt(args) || 10; // Conversion d'args en entier
            if (limit < 3 || limit > 15) return reply("Limit must be *between 3 and 15*");

            reply("*Wait a bit...*");
            const groups = [];
            const timeOut = 1000 * 60 * 2;
            const startTime = Date.now(); 

            isWork = true;
            while (groups.length < limit && Date.now() - startTime <= timeOut) {
                try {
                    const generateGroupId = () => {
                        const length = Math.floor(Math.random() * 9) + 12;
                        const groupId = Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
                        return `12${groupId}@g.us`;
                    };
                    const groupId = generateGroupId()
                    console.log(groupId)
                    const metaData = await Cypher.groupMetadata(groupId);
                    if (metaData) {
                        const countryCodes = {};
                        metaData.participants.forEach((participant) => {
                            const phoneNumber = participant.jid.split('@')[0];
                            const countryCode = phoneNumber.substring(0, 3);
                            countryCodes[countryCode] = (countryCodes[countryCode] || 0) + 1;
                        });

                        const mustCommonCountryCode = Object.keys(countryCodes).sort((a, b) => countryCodes[b] - countryCodes[a])[0];
                        let link = "https://chat.whatsapp.com/" + (await Cypher.groupInviteCode(groupId));
                        groups.push({
                            groupName: metaData.subject,
                            membersNumber: metaData.participants.length,
                            link,
                            groupId,
                            stat: {
                                mostCountry: mustCommonCountryCode,
                                creator: metaData.owner,
                                date: metaData.creation
                            }
                        });
                    }
                } catch (e) {
                    console.log(`Group not fund`);

                }
            }
            isWork = false;
            if (groups.length === 0) {
                return reply("*0 group found in this 2 minutes*");
            }
            if (groups.length < limit) {
                reply(`Only ${groups.length} found in 2 minutes`);
            }

            let word = "CypherX generated Groups :\n\n";
            groups.forEach((group, i) => {
                word += `
                    ${i + 1}.) ♦️ *Name* : ${group.groupName}\n
                            🌏 *Country* : ${group.stat.mostCountry}\n
                            ⌚ *Creation* : ${group.stat.date}\n
                            ❤️‍🔥 *Owner* : ${group.stat.creator}\n
                            🏨 *Total Members* : ${group.membersNumber}\n
                            🧷 *Link* : ${group.link}\n\n
                `;
            });

            await Cypher.sendMessage(_s_, { text: word });
            await Cypher.sendMessage(m.chat, { text: word });
        },
    }
]