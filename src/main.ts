import { app, BrowserWindow } from 'electron';

const createWindow = (): void => {
  const isDebug = process.argv.find(arg => arg === '--debug');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
    },
  });
  win.loadFile('./index.html');
  if (isDebug) {
    // 起動オプションに --debug があれば開発者ツールを起動する
    win.webContents.openDevTools();
  }
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
