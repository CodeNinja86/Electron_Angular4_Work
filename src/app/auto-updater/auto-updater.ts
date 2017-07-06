import { ipcRenderer } from 'electron';
import { Subject } from "rxjs/Subject";

export default class AutoUpdater {
  checkingForUpdates$: Subject<any> = new Subject();
  updateAvailable$: Subject<any> = new Subject();
  updateNotAvailable$: Subject<any> = new Subject();
  downloadProgress$: Subject<any> = new Subject();
  updateDownloaded$: Subject<any> = new Subject();
  error$: Subject<any> = new Subject();

  constructor() {
    // console.log('constructor init');

    this.initElectronEventHandlers();
  }

  checkForUpdates() {
    ipcRenderer.send('check-for-updates');
  }

  quitAndInstall() {
    ipcRenderer.send('quit-and-install');
  }

  downloadUpdate() {
    ipcRenderer.send('download-update');
  }

  private initElectronEventHandlers() {
    // binds between 'electron/electron-update.js' events and these class's rxjs observables
    ipcRenderer.on('checking-for-update', (event) => this.checkingForUpdates$.next());
    ipcRenderer.on('update-available', (event, message) => this.updateAvailable$.next(message));
    ipcRenderer.on('update-not-available', (event, message) => this.updateNotAvailable$.next(message));
    ipcRenderer.on('download-progress', (event, progress) => this.downloadProgress$.next(progress));
    ipcRenderer.on('update-downloaded', (event, message) => this.updateDownloaded$.next(message));
    ipcRenderer.on('error', (event, err) => this.error$.next(err));
  }
}
