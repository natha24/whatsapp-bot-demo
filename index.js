const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--single-process',
      '--no-zygote',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  }
});

// Tampilkan QR Code di log
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Scan QR code di atas!');
});

// Bot siap
client.on('ready', () => {
  console.log('✅ Bot WhatsApp aktif!');
});

// Handle pesan masuk
client.on('message', async msg => {
  console.log(`Pesan dari ${msg.from}: ${msg.body}`);
  
  // Balas otomatis
  if (msg.body.toLowerCase() === 'halo') {
    await msg.reply('Halo! Ada yang bisa saya bantu?');
  } else if (msg.body.toLowerCase() === 'info') {
    await msg.reply('Ini adalah bot demo untuk kompetisi');
  }
});

client.initialize();
