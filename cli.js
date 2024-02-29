#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi I am Sargam 👋', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'CS student',
  web: 'https://sargam.xyz',
  gh: 'https://github.com/devsargam',
  desc: 'A full stack dev getting hands dirty in open source',
  skills: {
    langs: ['.js', '.ts', '.py', '.sh'],
    skils: ['vim', 'git', 'docker', 'networking', 'oss'],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));
