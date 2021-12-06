import React from 'react';
import * as Tone from 'tone';
import md5 from 'md5';
import axios from 'axios';
import generateSequenceFrom from './utils/soundUtils';

const Sounds = ({ data, onLoad }) => {
  Tone.Transport.set({
    bpm: 86
  });

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
      'release' : 2,
    },
  }).toDestination();
  const amSynth = new Tone.AMSynth({
    options: {
      harmonicity: 0.5
    }
  }).toDestination();

  const feedbackDelay = new Tone.FeedbackDelay("8d", 0.45).toDestination();
  const autoPanner = new Tone.AutoPanner("4n").toDestination().start();
  const reverb = new Tone.Reverb(10).toDestination();
  synth.connect(feedbackDelay);
  synth.connect(autoPanner);
  synth.connect(reverb);

  const bass = new Tone.MonoSynth({
    'volume' : -10,
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


//   // repeated event every 8th note
// Tone.Transport.scheduleRepeat((time) => {
// 	// use the callback time to schedule events
// 	osc528.start(time).stop(time + 0.1);
// }, "8n");
// // transport must be started before it starts invoking events

// Tone.Transport.scheduleRepeat((time) => {
//   console.log(amSynth.get());
// }, "4n");

const seq = new Tone.Sequence((time, note) => {
	bass.triggerAttackRelease(note, "1n", time);
	// subdivisions are given as subarrays
}, ["D1", "B1", "E1", "A1"], "1n").start(0);

// const seq2 = new Tone.Sequence((time, note) => {
// 	synth.triggerAttackRelease(note, "16n", time);
// 	// subdivisions are given as subarrays
// }, [["F#4", "A4"], ["B4", "A4"], ["G4", "B4"], ["E4", "G4"]], "1n").start(0);



return (
  <div>
      This plays a sound
      <button onClick={() => {

        const generatedSequence = generateSequenceFrom(hash, 0, []);

        const seq2 = new Tone.Sequence((time, note) => {
          synth.triggerAttackRelease(note, "16n", time);
          // subdivisions are given as subarrays
        }, generatedSequence, "1n").start(0);

        // synth.triggerAttackRelease("C4", "8n");
        // synth.triggerAttackRelease("E4", "8n");
        // synth.triggerAttackRelease("G4", "8n");
        // synth.toFrequency("4n");
        // synth.start;
        // amSynth.triggerAttackRelease(528, "8n").connect(autoPanner);
        console.log('this is hash now: ', hash);
        console.log(generateSequenceFrom(hash, 0, []));
        Tone.Transport.start();

        // osc432.start();
        // osc528.start();
        // console.log(osc432.get());
        // osc432.stop();
        // console.log(osc432.get());
      }
    }>Play</button>
    <button onClick={() => {
        Tone.Transport.stop();

      }
    }>Stop</button>
    </div>
  );
}

export default Sounds;