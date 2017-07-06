const autoUpdater = require("electron-updater").autoUpdater;
const isDev = require('electron-is-dev');
const { ipcMain } = require('electron');

// const log = require('electron-log')
// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = "info";

let win;

autoUpdater.autoDownload = false;

autoUpdater.on('checking-for-update', () => emit('checking-for-update'));
autoUpdater.on('update-available', (ev, info) => emit('update-available', info));
autoUpdater.on('update-not-available', (ev, info) => emit('update-not-available', info));
autoUpdater.on('error', (ev, err) => emit('error', err));
autoUpdater.on('download-progress', (progressObj) => emit('download-progress', progressObj));
autoUpdater.on('update-downloaded', (ev, info) => emit('update-downloaded', info));

ipcMain.on('download-update', event => autoUpdater.downloadUpdate());
ipcMain.on('quit-and-install', event => autoUpdater.quitAndInstall());
ipcMain.on('check-for-updates', event => {
  if (isDev) // https://github.com/electron-userland/electron-builder/issues/1254
    autoUpdater.updateConfigPath = require('path').join('./dist/win-unpacked/resources', 'app-update.yml');

  autoUpdater.checkForUpdates()
})

function emit(eventName, args) {
  console.log('emiting to ' + eventName + ' event')
  win.webContents.send(eventName, args)
}

module.exports = w => win = w;
