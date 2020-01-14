import React from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import SizeProvider from './SizeProvider';
import SoundfontProvider from './SoundfontProvider';
// church_organ
// acoustic_grand_piano
// agogo
// alto_sax
// overdriven_guitar
class KeyboardVer1 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      config: {
        noteRange: {
          first: MidiNumbers.fromNote(this.props.startNote),
          last: MidiNumbers.fromNote(this.props.endNote),
        },
        keyboardShortcutOffset: 0,
      },
    };

  }

  componentDidMount() {

  }


  render() {

    return (
      <SoundfontProvider
        audioContext={this.props.audioContext}
        instrumentName={this.props.instrumentName}
        hostname={this.props.soundfontHostname}
        render={({ isLoading, playNote, stopNote, stopAllNotes }) => (
          <div>
            <div className="mt-4">
              <SizeProvider>
                {({ containerWidth }) => (
                  <Piano
                    noteRange={this.state.config.noteRange}
                    playNote={playNote}
                    stopNote={stopNote}
                    disabled={isLoading}
                    width={containerWidth}
                  />
                )}
              </SizeProvider>
            </div>
          </div>
        )}
      />
    );
  }
}

export default KeyboardVer1;
