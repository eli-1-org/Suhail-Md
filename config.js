const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2349137920622";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348061413577";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_55_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhGU1BlZSsyWHltTGZoM1gycERjcWdXT3dOQTFkS0pxSlJjK0dwdzdjMGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNnb3g4bGZKUng2N2R4SzcwTVJwblFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDJjNDViMWEtNzU0MS00ZWI1LThlZGItYmUzMmQ1NzE1ZDM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDE4NixcbiAgICAgIDExOSxcbiAgICAgIDE0MixcbiAgICAgIDEyOCxcbiAgICAgIDIxLFxuICAgICAgMjMsXG4gICAgICAxODAsXG4gICAgICAxMzcsXG4gICAgICAzMCxcbiAgICAgIDY0LFxuICAgICAgMTM1LFxuICAgICAgOSxcbiAgICAgIDEyNSxcbiAgICAgIDIxOCxcbiAgICAgIDExOSxcbiAgICAgIDQ0LFxuICAgICAgMTU1LFxuICAgICAgMjI0LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTUsXG4gICAgICAzNyxcbiAgICAgIDEwLFxuICAgICAgNDAsXG4gICAgICAxNjgsXG4gICAgICAxNjQsXG4gICAgICA1MixcbiAgICAgIDIyNSxcbiAgICAgIDIzMyxcbiAgICAgIDEwMCxcbiAgICAgIDI1MCxcbiAgICAgIDQ1LFxuICAgICAgMCxcbiAgICAgIDk3LFxuICAgICAgOTksXG4gICAgICAxNzIsXG4gICAgICA1LFxuICAgICAgNixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTFRCRzEyTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2MTQxMzU3Nzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc5MTY5MDIzNDkyMTY5OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05IeWxEd1FoWkg1dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMi9ldkM2NDVpV0ZaMkV2NWcwemJUdmkzczZ0WC8wbzIyUFNPMHNZUmsxUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuamJ1K1Z5VDFSUDhBRk1pNTB1M3ArejJhRTBTTmpKNGpQUE1nd3BHckxiRmdORVV4dGFpdE1nbHB4Z0RHSjZXLzZ5Z0c2b1MwMi80UkZGYzJFWGRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2RUVob3hHYVBMaUpuMmRTVForMFhIellEN3FKYnhsNGt3TDliKzB1MzV2Q3pGZlBhbG1mSGNUMjZQUEhRSWxNN2FaOWJzL2I0OXBlbkRjTWlkdEhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDYxNDEzNTc3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjQ5MzAwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ayeni Josiah",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
