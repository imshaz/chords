import React, { useState } from 'react';
import KeyboardVer1 from './KeyboardVer1';
import './App.css';
import Header from './Header';
import { ModalButton } from './ModalButton';

import { chord, clip, midi } from 'scribbletune';
import Midi from './Midi';
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
const chordsClip = clip({
  // Use chord names directly in the notes array
  // M stands for Major, m stands for minor
  notes: 'C',
  pattern: 'x---'.repeat(4)
});

console.log(chordsClip)

function App() {

  function handleSelect(e) {
    chordMap.filter((item, index) => {
      if (e.target.value === item.key) {

        setChords(chordMap[index])
        setpianoKey(chordMap[index].key)


      }
    })
  }

  const [instrument, setInstrument] = useState('acoustic_grand_piano');
  const [chordMap, setChorMap] = useState([
    { key: 'C', chords: [{ key: 'Am7', Scale: 'vi7' }, { key: 'Cmaj7', Scale: 'I7' }, { key: 'Am7', Scale: 'vi7' }, { key: 'Fmaj7', Scale: 'IV7' }] },
    { key: 'C#/Db', chords: [{ key: 'Bbm7', Scale: 'vi7' }, { key: 'Dbmaj7', Scale: 'I7' }, { key: 'Bbm7', Scale: 'vi7' }, { key: 'Gbmaj7', Scale: 'IV7' }] },
    { key: 'D', chords: [{ key: 'Bm7', Scale: 'vi7' }, { key: 'Dmaj7', Scale: 'I7' }, { key: 'Bm7', Scale: 'vi7' }, { key: 'Gmaj7', Scale: 'IV7' }] },
    { key: 'D#/Eb', chords: [{ key: 'Cm7', Scale: 'vi7' }, { key: 'Ebmaj7', Scale: 'I7' }, { key: 'Cm7', Scale: 'vi7' }, { key: 'Abmaj7', Scale: 'IV7' }] },
    { key: 'E', chords: [{ key: 'C#m7', Scale: 'vi7' }, { key: 'Emaj7', Scale: 'I7' }, { key: 'C#m7', Scale: 'vi7' }, { key: 'Amaj7', Scale: 'IV7' }] },
    { key: 'F', chords: [{ key: 'Dm7', Scale: 'vi7' }, { key: 'Fmaj7', Scale: 'I7' }, { key: 'Dm7', Scale: 'vi7' }, { key: 'Bbmaj7', Scale: 'IV7' }] },
    { key: 'F#/Gb', chords: [{ key: 'D#m7', Scale: 'vi7' }, { key: 'F#maj7', Scale: 'I7' }, { key: 'D#m7', Scale: 'vi7' }, { key: 'Bmaj7', Scale: 'IV7' }] },
    { key: 'G', chords: [{ key: 'Em7', Scale: 'vi7' }, { key: 'Gmaj7', Scale: 'I7' }, { key: 'Em7', Scale: 'vi7' }, { key: 'Cmaj7', Scale: 'IV7' }] },
    { key: 'G#/Ab', chords: [{ key: 'Fm7', Scale: 'vi7' }, { key: 'Abmaj7', Scale: 'I7' }, { key: 'Fm7', Scale: 'vi7' }, { key: 'Dbmaj7', Scale: 'IV7' }] },
    { key: 'A', chords: [{ key: 'F#m7', Scale: 'vi7' }, { key: 'Amaj7', Scale: 'I7' }, { key: 'F#m7', Scale: 'vi7' }, { key: 'Dmaj7', Scale: 'IV7' }] },
    { key: 'A#/Bb', chords: [{ key: 'Gm7', Scale: 'vi7' }, { key: 'Bbmaj7', Scale: 'I7' }, { key: 'Gm7', Scale: 'vi7' }, { key: 'Ebmaj7', Scale: 'IV7' }] },
    { key: 'B', chords: [{ key: 'G#m7', Scale: 'vi7' }, { key: 'Bmaj7', Scale: 'I7' }, { key: 'G#m7', Scale: 'vi7' }, { key: 'Emaj7', Scale: 'IV7' }] }
  ])
  const [keys, setKeys] = useState([{ key: 'C' }, { key: 'C#/Db' }, { key: 'D' }, { key: 'D#/Eb' }, { key: 'E' }, { key: 'F#/Gb' },
  { key: 'G' }, { key: 'G#/Ab' }, { key: 'A' }, { key: 'A#/Bb' }, { key: 'B' }
  ])
  const [currentChords, setChords] = useState(chordMap[0])
  const [pianoKey, setpianoKey] = useState('D')
  const genChords = () => {
    let index = Math.floor(Math.random() * chordMap.length)
    setChords(chordMap[index])
    setpianoKey(chordMap[index].key)
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="center text-center mt-5">
          <div
            className="sweet-round-button medium"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            <i className="icon-music icon medium"></i>
            <div className="name medium">Enstruman Ayarlari</div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalScrollable"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Enstruman Ayarlari
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 ml-auto">
                      <ModalButton
                        onClick={() => {
                          setInstrument('acoustic_grand_piano');
                        }}
                        instrument={'Piano'}
                      />
                    </div>
                    <div className="col-md-6 ml-auto">
                      <ModalButton
                        onClick={() => {
                          setInstrument('marimba');
                        }}
                        instrument={'Marimba'}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 ml-auto">
                      <ModalButton
                        onClick={() => {
                          setInstrument('acoustic_guitar_nylon');
                        }}
                        instrument={'Kasik Gitar'}
                      />
                    </div>
                    <div className="col-md-6 ml-auto">
                      <ModalButton
                        onClick={() => {
                          setInstrument('xylophone');
                        }}
                        instrument={'Xylophone'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <KeyboardVer1
              startNote='c3'
              endNote='f5'
              audioContext={audioContext}
              soundfontHostname={soundfontHostname}
              instrumentName={instrument}
            />
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <div className="generator-centered-block">

              {
                currentChords.chords.map(chord => {

                  return <div className="generator-chord-block-div">
                    <div className="chord">{chord.key}</div>
                    <div className="degree">{chord.Scale}</div>
                    <i className="fas fa-sliders-h icon-edit "></i>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row mt-5">
          <div className="col">
            <div style={{ textAlign: 'center', padding: '30px', lineHeight: '20px' }}> <select value={pianoKey} onChange={(e) => { handleSelect(e) }}>
              {
                keys.map(key => {
                  return <option value={key.key}>{key.key}</option>
                })
              }
            </select>
            </div>
            <div className="generator-centered-block top-24-12 bottom-24-12">
              <div
                className="sweet-round-button large"
              >
                <i className="icon-shuffle icon large"></i>
                <div onClick={() => { genChords() }} className="name large">Generate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
