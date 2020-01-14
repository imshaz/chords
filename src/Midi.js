import React, { useEffect } from 'react'

import { clip, chord, midi, scribble, scale } from 'scribbletune';
import * as Key from '@tonaljs/key';

export default function Midi(props) {

    let chords = []
    let notes = []
    useEffect(() => {
        var clip1 = clip({
            notes: 'CM FM GM CM',
            pattern: 'x'
        });
        // midi(clip1);

        chords = Key.majorKey('A').chords
        var myClip = chords.map(item => {
            return item
        })
        // scribble.midi(myClip, 'c.mid');
        console.log(Key.majorKey('A').chords)
    });
    return (
        <div>
            Midi
        </div>
    )
}
