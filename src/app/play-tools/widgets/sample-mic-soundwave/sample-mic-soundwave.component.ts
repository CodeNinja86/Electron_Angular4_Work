import {Component, OnInit, OnDestroy} from '@angular/core';
import {IMicWave, SoundWave} from './soundwave/soundwave';

@Component({
  selector: 'app-sample-mic-soundwave',
  templateUrl: './sample-mic-soundwave.component.html',
  styleUrls: ['./sample-mic-soundwave.component.scss']
})
export class SoundWaveWidgetComponent implements OnInit, OnDestroy {
  private soundwave: IMicWave;

  constructor() {
  }

  ngOnInit() {
    this.soundwave = SoundWave.CreateMicWave(
      {container: '#wave'}
    );
    this.soundwave.mic.start();
  }

  ngOnDestroy(): void {
    this.soundwave.mic.stopDevice();
    this.soundwave.wave.destroy();
  }
}
