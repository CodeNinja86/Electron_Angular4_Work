// ATTENTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
// mediaDevices: This is an experimental technology

// Great Example
// https://webrtc.github.io/samples/src/content/devices/input-output/

// MP3 Mic Recorder
// http://stackoverflow.com/questions/16413063/html5-record-audio-to-file
// http://stackoverflow.com/questions/16881703/web-audio-api-record-to-mp3
// https://github.com/zhuker/lamejs


export interface IDeviceIO {
  type: string;
  label: string;
}

export class DevicesIO {

  static GetDevices(): Promise<IDeviceIO[]> {
    return navigator.mediaDevices.enumerateDevices().then(this.GotDevices);
  }

  static GotDevices(deviceInfos): Promise<IDeviceIO[]> {
    const promise = new Promise((resolve, reject) => {
      const devices = deviceInfos.map(
        deviceInfo => ({type: deviceInfo.kind, label: deviceInfo.label}) as IDeviceIO
      );

      resolve(devices);
    });

    return promise;
  }
}
