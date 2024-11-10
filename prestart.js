const { exec } = require('child_process');
const os = require('os');

// Kiểm tra hệ điều hành
const isWindows = os.platform() === 'win32';
const isLinux = os.platform() === 'linux';

if (isWindows) {
  // Lệnh cho Windows (PowerShell)
  exec('powershell -Command "if (Get-NetTCPConnection -LocalPort 3000) { Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force }"', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
} else if (isLinux) {
  // Lệnh cho Linux (Ubuntu)
  exec('lsof -t -i:3000 | xargs kill -9', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
} else {
  console.log('Unsupported OS');
}
