let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/SilvaTechB/silva-md-bot@main/media/Alive.mp3'
  let url = 'https://github.com/SilvaTechB/silva-md-bot'
  let murl = 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v'
  let img = 'https://files.catbox.moe/8324jm.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '254700143167@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝐒𝐈𝐋𝐕𝐀 𝐌𝐃 𝐁𝐎𝐓 Alive',
        body: 'SILVA MD BOT OCTOBER 2024',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
