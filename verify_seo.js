const https = require('http');

const pages = [
  '/',
  '/about/',
  '/services/',
  '/services/ac-repair/',
  '/cities/dubai/',
  '/ac-repair-dubai/',
];

async function checkPage(path) {
  return new Promise((resolve) => {
    https.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>([^<]+)<\/title>/);
        const h1Count = (data.match(/<h1/g) || []).length;
        const canonicalMatch = data.match(/<link rel="canonical" href="([^"]+)"/);
        
        console.log(`\n--- Path: ${path} ---`);
        console.log(`Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}`);
        console.log(`H1 Count: ${h1Count}`);
        console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}`);
        resolve();
      });
    }).on('error', (err) => {
      console.log(`Error fetching ${path}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log('Verifying SEO Fixes locally...');
  for (const page of pages) {
    await checkPage(page);
  }
}

run();
