const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : ""237025306968




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_37_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTRW9DM1p3dWo5bm5BeWF1OWtKUHpnUVBtYjVSYW1wN3JTbkZ4S0hvV0pRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMjUzMDY5NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFCNUQ4NTIyNjg1RDJCQjRBRDEwQjlBQTFGQzZBRTAzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzAzMTQ1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6aDZRbHdDM1RRdUF3XzVvcHVCUmdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5YWM4ODgyLTJjZDYtNGJhYy1hMzdkLTgwYzc5NTk0Y2RhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAzMSxcbiAgICAgIDUwLFxuICAgICAgNjcsXG4gICAgICAyMDksXG4gICAgICA3NyxcbiAgICAgIDkxLFxuICAgICAgMTc1LFxuICAgICAgNTMsXG4gICAgICAyNDEsXG4gICAgICA1NyxcbiAgICAgIDI0LFxuICAgICAgMTA4LFxuICAgICAgNjUsXG4gICAgICAxNTUsXG4gICAgICAyMjIsXG4gICAgICAxODksXG4gICAgICAyMjIsXG4gICAgICAxNTQsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDIyMSxcbiAgICAgIDIwNyxcbiAgICAgIDEwMSxcbiAgICAgIDIzMyxcbiAgICAgIDU2LFxuICAgICAgNzgsXG4gICAgICAyMzksXG4gICAgICA0OCxcbiAgICAgIDE5NSxcbiAgICAgIDU1LFxuICAgICAgMTYsXG4gICAgICAxMjgsXG4gICAgICAxMjUsXG4gICAgICAxOTYsXG4gICAgICAxODYsXG4gICAgICA2MSxcbiAgICAgIDI1MixcbiAgICAgIDQ1LFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldXQUxSQ1k2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1MzA2OTY4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNZWVuYWggRW1waXJlXCIsXG4gICAgXCJsaWRcIjogXCI2NzMyODM3NzExMDYxMDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3TndsQVFsdXl2dWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWHBFRXVoZ0NScDhvMzVYNm5TNzQrMzAraFFJREdNTFh3NE9QdjBFNmdIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzVklEN2J4K3NuWktuS1IvbXQzRTA1QzNPeW5NYTBlc0M1V1BuZnAzRzc1WEV0YXZVak5peEpRRXlmUTFwWWJ3cDl6U0h4RjhGL3hncXIzeExXZ25CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWa0x3Q0svd1p4dXRRUEtrRU81bHczeWJrODJWRlpoaTRnam9mRVQ3UVl6UWR5OEdVWlk0cmlTNEdITDIrbGxWenVwenNPQVdEZm9icmNONXBUNUlBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI1MzA2OTY4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMDMxNDUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2hNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPaE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiaXBVUFdpZ2U3eTRIYThrQ3M4Um5uOHBuMGFHZlYvMlJPS2p6TGY5SDM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODg2MzQyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMDMxNDU1ODQyXCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
