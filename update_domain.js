const fs = require('fs');

const filesToUpdate = [
  'public/sitemap.xml',
  'public/robots.txt',
  'public/llms.txt',
  'index.html'
];

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/https:\/\/edusonex\.com/g, 'https://edusonex.com.tr');
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Domain updated to edusonex.com.tr in all SEO files.');
