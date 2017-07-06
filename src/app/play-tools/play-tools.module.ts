import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PlayToolsRoutingModule } from './play-tools-routing.module';
import { PlayToolsComponent } from './play-tools.component';
import { NouisliderModule } from 'ng2-nouislider';
import { SoundWaveWidgetComponent } from './widgets/sample-mic-soundwave/sample-mic-soundwave.component';
import { TooltipModule } from 'ng2-bootstrap';
import { WidgetDirective } from "app/shared/widget.directive";
import { SampleAudioPlaybackComponent } from './widgets/sample-audio-playback/sample-audio-playback.component';
import { SampleVideoPlaybackComponent } from './widgets/sample-video-playback/sample-video-playback.component';
import { AudioAnnotatorComponent } from './widgets/audio-annotator/audio-annotator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlayToolsRoutingModule,
    ModalModule,
    NouisliderModule,
    TooltipModule.forRoot(),

  ],
  declarations: [
    PlayToolsComponent,
    SoundWaveWidgetComponent,
    WidgetDirective,
    SampleAudioPlaybackComponent,
    SampleVideoPlaybackComponent,
    AudioAnnotatorComponent,
  ],
  providers: [ ]
})
export class PlayToolsModule {
}
