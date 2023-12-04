

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://raw.githubusercontent.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD-/main/Assets/mp3/panda.mp3"
    let url = "https://github.com/Guru322/GURU-BOT"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://cdn.wallpapersafari.com/71/19/7ZfcpT.png"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "┏━━━━━━━━━━━━━━━━━━ •┃ 🐼 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🐼┗━━━━━━━━━━━━━━━━━━ • *_🧸Hey...I'm online now🧸_*┏━━━━━━━━━━━━━━━━━━ •┃ 🎭  *Owners:* SACHITH & SENESH┃  👽 *Gold:* 0┃  🎯 *Role:* Tadpole┃  💫 *Level:* 0 [ 69 Xp For Levelup]┃  🌀 *Xp:* 0 / 69┃  🛑 *Total Xp:* 0┗━━━━━━━━━━━━━━━━━━ •┏━━━━━━━━━━━━━━━━━━ •┃  🐼 *Bot Name:* 𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂┃  🔰 *Mode:* Public┃  🛐 *Platform:* linux┃  ✅ *Type:* NodeJs┃  ☎ *Baileys:* Multi Device┃  ☀ *Prefix:* [ *.* ]┃  ⬆️  *Uptime:* 00 H 01 M 40 S ┃  ♻️ *Database:*  8┗━━━━━━━━━━━━━━━━━━ •┍━━━━━━━━━━━━━━━━━━ •┃   *_Developed By Cyber Sachiya_*┗━━━━━━━━━━━━━━━━━━ •",
          body: "GURU BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/F3sB3pR3tClBvVmlIkqDJp',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;

https://github.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD-/blob/main/Assets/mp3/panda.mp3
