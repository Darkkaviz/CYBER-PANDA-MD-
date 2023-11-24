import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `✳️ Please send the link of a Facebook video\n\n🐼 EXAMPLE :\n*${usedPrefix + command}* https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '❓*කරුණාකර ඔබට අවෂ්ය ලින්ක් එක බලා දෙන්න.*';
  }

  m.react(rwait);

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
✰─── {*𝘊𝘠𝘉𝘌𝘌𝘙-𝘗𝘈𝘕𝘋𝘈 𝘍𝘉-𝘝𝘐𝘋𝘌𝘖*} ───✰
✰ *ඔබ ඉල්ලු විඩියොව:* ${result.title}
✰────── {⋆✰⋆} ──────✰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('⚠️ An error occurred while processing the request. Please try again later.');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['downloader'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;

