import React from 'react';
import * as Tone from 'tone';
import md5 from 'md5';
import axios from 'axios';
import generateSequenceFrom from './utils/soundUtils';
import { Button } from '@material-ui/core';

const Sounds = ({ data, onLoad }) => {
  Tone.Transport.set({
    bpm: 86
  });

  const status = false;

  let hash = '';

  axios.get('/api/journals/public')
  .then(({ data }) => {
    return md5(data[data.length - 1].blog); //retrieving most recent blog entry text
  })
  .then(data => {
    hash = data;
  })
  .then(() => console.log('hash data received successfully'))
  .catch(err => { console.log('ERROR retrieving journal entry', err) } )

  const synth = new Tone.PolySynth({
    'volume': -10,
    'envelope' : {
      'attack' : 1,
      'decay' : 0.3,
      'release' : 0,
    },
  }).toDestination();

  const pad = new Tone.PolySynth({
    'volume': -25,
    'envelope': {
      'attack': 10,
      'decay': 0.1,
      'release': 2
    },
    'activeVoices': 3,
  }).toDestination();

  const amSynth = new Tone.AMSynth({
    options: {
      harmonicity: 0.5
    }
  }).toDestination();

  // const feedbackDelay = new Tone.FeedbackDelay("8d", 0.5).toDestination();
  const pingPong = new Tone.PingPongDelay("8d", 0.3).toDestination();
  const autoPanner = new Tone.AutoPanner("8n").toDestination().start();
  const reverb = new Tone.Reverb(10).toDestination();
  const stereoWidener = new Tone.StereoWidener(1);
  const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
  synth.connect(pingPong);
  synth.connect(autoPanner);
  synth.connect(reverb);
  pad.connect(reverb);
  pad.connect(stereoWidener);
  pad.connect(chorus);

  const bass = new Tone.MonoSynth({
    'volume' : -15,
    'envelope' : {
      'attack' : 0.1,
      'decay' : 0.3,
      'release' : 2,
    },
    'filterEnvelope' : {
      'attack' : 0.001,
      'decay' : 0.01,
      'sustain' : 0.5,
      'baseFrequency' : 200,
      'octaves' : 2.6
    }
  }).toDestination();

const seq = new Tone.Sequence((time, note) => {
	bass.triggerAttackRelease(note, "1n", time);
	// subdivisions are given as subarrays
}, ["B1", "A1", "G1", "F#1", "D1", "B1", "E1", "A1"], "1n").start(0);

const padPart = new Tone.Loop(function(time){
  pad.triggerAttackRelease(['B5', 'D5', 'F#5'], '1n', time);
  pad.triggerAttackRelease(['A5', 'C#5', 'E5'], '1n', time + 2.792);
  pad.triggerAttackRelease(['G5', 'B5', 'D5'], '1n', time + 5.584);
  pad.triggerAttackRelease(['F#5', 'A5', 'C#5'], '1n', time + 8.376);
  pad.triggerAttackRelease(['D5', 'F#5', 'A5'], '1n', time + 11.168);
  pad.triggerAttackRelease(['B5', 'D5', 'F#5'], '1n', time + 13.960);
  pad.triggerAttackRelease(['E5', 'G5', 'B5'], '1n', time + 16.752);
  pad.triggerAttackRelease(['A5', 'C#5', 'E5'], '1n', time + 19.544);
}, 22.336);

const hihat = new Tone.MetalSynth();

const snare = new Tone.NoiseSynth({
	'volume' : -20,
	'envelope' : {
		'attack' : 0.001,
		'decay' : 0.2,
		'sustain' : 0
	},
	'filterEnvelope' : {
		'attack' : 0.001,
		'decay' : 0.1,
		'sustain' : 0
	}
}).toDestination();

const kick = new Tone.MembraneSynth({
	'envelope' : {
		'sustain' : 0,
		'attack' : 0.02,
		'decay' : 0.8
	},
	'octaves' : 10
}).toDestination();

const hihatPart = new Tone.Loop(function(time){
  hihat.triggerAttackRelease('D5', '16n', time);
}, '16n');

const kickPart = new Tone.Loop(function(time){
  kick.triggerAttackRelease('D1', '8n', time);
  kick.triggerAttackRelease('D1', '16n', time + 0.174);
  kick.triggerAttackRelease('D1', '16n', time + 0.870);
}, '2n');

const snarePart = new Tone.Loop(function(time){
  snare.triggerAttack(time);
}, '4n');

return (
  <div>
      This plays a binaural beat generated from your most recent public journal posts!
      <Button variant="contained" onClick={() => {

        const generatedSequence = generateSequenceFrom(hash, 0, []);

        const seq2 = new Tone.Sequence((time, note) => {
          synth.triggerAttackRelease(note, "16n", time);
          // subdivisions are given as subarrays
        }, generatedSequence, "1n").start(0);

        console.log('this is hash now: ', hash);
        console.log(generateSequenceFrom(hash, 0, []));
        Tone.Transport.start();

      }
    }>Play</Button>
    <Button variant='contained' onClick={() => {
        Tone.Transport.stop();

      }
    }>Stop</Button>
    <Button variant='contained' onClick={() => {
      kickPart.start(0);
      snarePart.start('8n');
      padPart.start(0);
      hihatPart.start(0);
    }
  }>Sick</Button>
  <Button variant='contained' onClick={() => {
      kickPart.stop();
      snarePart.stop();
      padPart.stop();
      hihatPart.stop();
    }
  }>Chill</Button>
  </div>
  );
}

export default Sounds;