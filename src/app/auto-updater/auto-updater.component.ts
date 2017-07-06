import { Component, OnInit, ViewChild } from '@angular/core';
import AutoUpdater from "app/auto-updater/auto-updater";
import { ModalDirective } from "ng2-bootstrap";

@Component({
  selector: 'app-auto-updater',
  templateUrl: './auto-updater.component.html',
  styleUrls: ['./auto-updater.component.scss']
})
export class AutoUpdaterComponent implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;

  autoUpdater: AutoUpdater;
  isDownloading = false;
  progress = {
    bytesPerSecond: 0,
    percent: 0
  };

  constructor() { }

  ngOnInit() {
    this.autoUpdater = new AutoUpdater();

    // binds
    this.autoUpdater.checkingForUpdates$.subscribe(() => console.log('checkingForUpdates'));
    this.autoUpdater.updateAvailable$.subscribe(message => {
      console.log('updateAvailable', message);
      this.modal.show();
    });
    this.autoUpdater.updateNotAvailable$.subscribe(message => console.log('updateNotAvailable', message));
    this.autoUpdater.downloadProgress$.subscribe(progress => {
      console.log('downloadProgress', progress);
      this.progress = progress;
    });
    this.autoUpdater.updateDownloaded$.subscribe(message => {
      console.log('updateDownloaded', message);
      this.autoUpdater.quitAndInstall();
    });
    this.autoUpdater.error$.subscribe(err => console.log('error', err));

    // init process
    this.autoUpdater.checkForUpdates();
  }

  downloadUpdate() {
    this.isDownloading = true;
    this.autoUpdater.downloadUpdate();
  }

  cancel() {
    this.modal.hide();
  }

  // private onCheckingForUpdates() {
  //   console.log('checkingForUpdates')
  // }

  // private onUpdateAvailable(message) {
  //   console.log('updateAvailable', message);
  //   this.modal.show();
  // }

  // private onUpdateNotAvailable(message) {
  //   console.log('updateNotAvailable', message)
  // }

  // private onDownloadProgress(progress) {
  //   console.log('downloadProgress', progress);
  //   this.progress = progress;
  // }

  // private onUpdateDownloaded(message) {
  //   console.log('updateDownloaded', message);
  //   this.isDownloading = false;
  //   this.autoUpdater.quitAndInstall();
  // }

  // private onError(err) {
  //   throw new Error(err)
  // }
}
