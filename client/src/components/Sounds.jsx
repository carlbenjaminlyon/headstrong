import React from 'react';
import * as Tone from 'tone';

const Sounds = () => {
  const synth = new Tone.PolySynth().toDestination();
  // synth.triggerAttackRelease("C4", "8n");
	const lPanner = new Tone.Panner(-1).toDestination();
	const rPanner = new Tone.Panner(1).toDestination();
  const osc432 = new Tone.Oscillator(432, "sine").toDestination().connect(lPanner);
  const autoPanner = new Tone.AutoPanner("4n").toDestination().start();
  const osc528 = new Tone.Oscillator(528, "sine").toDestination().connect(autoPanner);
  // synth.connect(autoPanner);

  return (
    <div>
      This plays a sound
      <button onClick={() => {
        // synth.triggerAttackRelease("C4", "8n");
        // synth.triggerAttackRelease("E4", "8n");
        // synth.triggerAttackRelease("G4", "8n");
        // synth.toFrequency("4n");
        // synth.start;
        osc432.start();
        osc528.start();
      }
    }>Play</button>
    <button onClick={() => {
        osc432.stop();
        osc528.stop();
      }
    }>Stop</button>
    </div>
  );
}

export default Sounds;