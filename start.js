import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

exec('node index.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error saat menjalankan index.js: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
