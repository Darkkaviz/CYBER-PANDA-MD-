//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
──────────────────
🐼 │𝐂𝐘𝐁𝜩𝐑│𝐏𝜟𝐍𝐃𝐀│𝐌𝐃│𝐕➂ 🐼
──────────────────
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['cmd']
handler.command = ['listcmd']

export default handler
