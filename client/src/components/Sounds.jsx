import React from 'react';
import * as Tone from 'tone';
import md5 from 'md5';
import axios from 'axios';

const Sounds = ({ data, onLoad }) => {
  const synth = new Tone.PolySynth().toDestination();
  Tone.Transport.set({
    bpm: 86
  });

  console.log('md5 test1: ', md5('test'));
  console.log('md5 test2: ', md5('test'));
  console.log('md5 test3: ', md5('test2'));
  console.log('test3 should be different');

  let hash = '';

  axios.get('/api/journals/public')
    .then(({ data }) => {
      console.log('hashing: ', data[data.length - 1].blog);
      return md5(data[data.length - 1].blog);
    })
    .then(data => {
      hash = data;
    })
    .then(() => console.log('mega sucksess'))
    .catch(err => { console.log('ERROR retrieving journal entry', err) } )

  // synth.triggerAttackRelease("C4", "8n");
	const lPanner = new Tone.Panner(-1).toDestination();
	const rPanner = new Tone.Panner(1).toDestination();
  const osc432 = new Tone.Oscillator(45.41, "sine").toDestination().connect(lPanner);
  const amSynth = new Tone.AMSynth().toDestination();
  const autoPanner = new Tone.AutoPanner("4n").toDestination().start();
  const osc528 = new  Tone.Oscillator(528, "sine").toDestination();

  // const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
  // const reverb = new Tone.Reverb(15).toDestination();
  const reverb = new Tone.JCReverb(0.4).toDestination();
  amSynth.connect(reverb);
  synth.connect(autoPanner);
  // synth.connect(autoPanner);


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
	amSynth.triggerAttackRelease(note, "1n", time);
	// subdivisions are given as subarrays
}, ["D3", "B3", "E3", "A3"], "1n").start(0);

const seq2 = new Tone.Sequence((time, note) => {
	synth.triggerAttackRelease(note, "2n", time);
	// subdivisions are given as subarrays
}, [["F#4", "A4"], ["B4", "A4"], ["G4", "B4"], ["E4", "G4"]], "1n").start(0);


  return (
    <div>
      This plays a sound
      <button onClick={() => {
        // synth.triggerAttackRelease("C4", "8n");
        // synth.triggerAttackRelease("E4", "8n");
        // synth.triggerAttackRelease("G4", "8n");
        // synth.toFrequency("4n");
        // synth.start;
        // amSynth.triggerAttackRelease(528, "8n").connect(autoPanner);
        console.log('this is hash now: ', hash);
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