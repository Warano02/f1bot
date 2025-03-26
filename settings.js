const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || '' 


global.botname = process.env.BOT_NAME || 'CypherX' 


global.ownernumber = process.env.OWNER_NUMBER || '254754783972' 


global.ownername = process.env.OWNER_NAME || 'Tylor' 

global.packname = process.env.STICKER_PACK_NAME || "Cypher" 

global.author = process.env.STICKER_AUTHOR_NAME || "X" 

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 


global.dbToken = process.env.GITHUB_TOKEN || "";

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"

global.wm = process.env.GL_WM || "©CypherX"

global.assistant="Warano"

global.mess = { 
  done: '*Done*',
  saveAs:"Scan",// Prefix that you wanna put before name in vcf 
  success: '©CypherX', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*',
  warano:"Bonjour,comment tu vas ?"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
