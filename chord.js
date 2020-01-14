const scribble = require('scribbletune');
const { Note, Interval, Distance, Scale } = require('tonal');
const Key = require('@tonaljs/key');


const KeyTonel = require('tonal-key')

const clip = scribble.clip({
    notes: scribble.scale('C4 major'),
    pattern: 'xxxxxxx'
});


const chord = KeyTonel.chords("Bb minor")
const testClip = scribble.clip({ notes: chord, pattern: 'x' });

chords = Key.majorKey('A').chords
var myClip = chords.map(item => {
    console.log(item)
    return item
})

scribble.midi(clip, 'c.mid');
console.log('testClip', testClip)
console.log('testClip', clip)
console.log('Chord', myClip)
console.log('A major"', KeyTonel.chords("A major").slice(0, 4))
// scribble.midi([].concat(...clips), 'chords.mid');