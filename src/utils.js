const fs = require('fs');
const readline = require('readline');
const inquirer = require('inquirer');

async function readLines(filename) {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const lines = [];
  for await (const line of rl) lines.push(line.trim());
  return lines;
}

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=         NODEPAY NETWORK BOT          ='.cyan);
  console.log('=         WELCOME & ENJOY SIR          ='.cyan);
  console.log('=        AUTHOR : NOFAN RAMBE          ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

async function askAccountType() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'accountType',
      message: 'How many accounts would you like to use?',
      choices: ['Single Account', 'Multiple Accounts'],
    },
  ]);

  console.log('');

  return answers.accountType;
}

async function askProxyMode() {
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'useProxy',
      message: 'Would you like to use proxies?',
      default: true,
    },
  ]);

  console.log('');

  return answers.useProxy;
}

module.exports = { readLines, displayHeader, askAccountType, askProxyMode };
