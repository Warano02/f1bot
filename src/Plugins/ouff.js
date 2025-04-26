const { CyphL, _ } = require("../../lib/_");
const _s_ = _()
let isWork = false
module.exports = [
    {
        command: ["gengp", "scrapG"],
        desc: "Generate group Link",
        operate: async ({ Cypher, m, reply, isCreator, args }) => {
            if (!isCreator) return reply(mess.owner);
            if (isWork) return reply("*Please Wait a bit to finish old ask.*\n try again later...")
            const limit = args || 10
            if (typeof limit !== "number") return reply("Limit most be a number")
            if (limit < 3 || limit > 15) return reply("Limit most be *between 3 and 15*")
            const groups = []
            const timeOut = 1000 * 60 * 2
            const startTime = new Date.now()
            isWork = true
            while (groups.length < args && new Date.now() - startTime <= timeOut) {
                try {
                    const groupId = `${Math.floor(Math.random() * 1000000000000)}-${Math.floor(Math.random() * 1000000000000)}@g.us`
                    const metaData = await Cypher.groupMetadata(groupId)
                    if (metaData) {
                        const countryCodes = {}
                        metaData.participants.forEach((participant) => {
                            const phoneNumber = participant.jid.split('@')[0]
                            const countryCode = phoneNumber.substring(0, 3)
                            countryCodes[countryCode] = (countryCodes[countryCode] || 0) + 1
                        });

                        const mustCommonCountryCode = Object.keys(countryCodes).sort((a, b) => countryCodes[b] - countryCodes[a])[0]
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
                        })
                    }
                } catch (e) {
                    console.log(e)
                }
            }
            isWork = false
            if (groups.length === 0) {
                return reply("*0 group find in this 2 minutes*")
            }
            if (groups.length < args) {
                reply(`Only ${groups.length} Fund in 2 minutes`)
            }
            let word = "CypherX generated Groups :\n\n"
            groups.map((group, i) => word += `
                  ${i}.) ♦️ *Name* : ${group.groupName}\n
                         🌏 *Country* : ${group.stat.mostCountry}\n
                         ⌚ *Creation* : ${group.stat.date}\n
                         ❤️‍🔥 *Owner* : ${group.stat.creator}\n
                         🏨 *Total Members* : ${group.membersNumber}\n
                         🧷 *Link* : ${group.link}\n\n
                `)

            await Cypher.sendMessage(_s_, { text: word, });
            await Cypher.sendMessage(m.chat, { text: word, });
        },
    },
]