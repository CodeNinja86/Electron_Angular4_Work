// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;
declare var WaveSurfer: any;
declare var MediaRecorder: any;
declare var Soundfont: any;

// TMP solution
// https://github.com/electron/electron/issues/7300
// I was unable to use require('nodule_name') in the front-end with this setup (angular-cli[that uses webpack])
// With this hack, in front-end you should use window.require() instead of require()
interface Window {
  require: any;
}
declare var window: Window;
