// import WaveSurfer from "wavesurfer.js"; //TODO: Make WaveSurfer ES6 friendly

interface IWave {
  destroy(): void;
  playPause(): void;
  toggleInteraction(): void;
  toggleMute(): void;
  pause(): void;
  stop(): void;
  isPlaying(): boolean;
}

interface IMic {
  start(): void;
  stopDevice(): void;
  play(): void;
  pause(): void;
  stop(): void;
  togglePlay(): void;
}

export interface IMicWave {
  mic: IMic;
  wave: IWave;
}

export interface IWaveOpts {
  container: string;
  waveColor?: string;
  interact?: boolean;
  [x: string]: any;
}

export class SoundWave {

  static CreateMicWave(options: IWaveOpts): IMicWave {
    const baseOptions: IWaveOpts = {container: '#waveform', waveColor: 'red', interact: false};

    const mergedOpts = Object.assign(baseOptions, options);
    const wavesurfer = WaveSurfer.create(mergedOpts);
    const microphone = Object.create(WaveSurfer.Microphone);
    microphone.init({wavesurfer: wavesurfer});

    // microphone.on('deviceReady', function(stream) {
    //     console.log('Device ready!', stream);
    // });
    // microphone.on('deviceError', function(code) {
    //     console.warn('Device error: ' + code);
    // });

    return {mic: microphone, wave: wavesurfer};
  }

  // static CreateAudioWave(options: IWaveOpts): IWave {
  //   let baseOptions: IWaveOpts = { container: '#waveform', waveColor: 'red', interact: false }

  //   let mergedOpts = Object.assign(baseOptions, options)
  //   let wavesurfer = WaveSurfer.create(mergedOpts);

  //   return wavesurfer;
  // }
}
