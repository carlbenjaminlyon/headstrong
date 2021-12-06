const chordDMajor = {
  'root': 'D4',
  'third': 'F#4',
  'fifth': 'A4',
  'sixth': 'B4',
  'seventh': 'C#5',
  'ninth': 'E5'
};

const chordBMinor = {
  'root': 'B4',
  'third': 'D4',
  'fifth': 'F#4',
  'sixth': 'G4',
  'seventh': 'A4',
  'ninth': 'C#5'
};

const chordEMinor = {
  'root': 'E4',
  'third': 'G4',
  'fifth': 'B4',
  'sixth': 'C#5',
  'seventh': 'D5',
  'ninth': 'F#5'
};

const chordAMajor = {
  'root': 'A4',
  'third': 'C#4',
  'fifth': 'E4',
  'sixth': 'F#4',
  'seventh': 'G4',
  'ninth': 'B4'
};

const chordArray = [chordDMajor, chordBMinor, chordEMinor, chordAMajor];

function findDegrees(digit) {
  if (digit === '0') return 'root';
  else if (digit === '1') return 'third';
  else if (digit === '2') return 'fifth';
  else if (digit === '3') return 'sixth';
  else if (digit === '4') return 'seventh';
  else if (digit === '5') return 'ninth';
  else if (digit === '6') return 'root';
  else if (digit === '7') return 'third';
  else if (digit === '8') return 'fifth';
  else if (digit === '9') return 'sixth';
  else if (digit === 'a') return 'seventh';
  else if (digit === 'b') return 'ninth';
  else if (digit === 'c') return 'root';
  else if (digit === 'd') return 'third';
  else if (digit === 'e') return 'fifth';
  else return 'seventh';
};

const generateSequenceFrom = (hash, chordNum, resultArray) => {

  //base if hash is 0 characters in length
  if (hash.length === 0 || chordNum > 3) {
    return resultArray;
  }

  //else
  const chord = chordArray[chordNum]

  const hashArray = hash.split('');

  const workingData = [];
  workingData.push(findDegrees(hashArray.shift()));
  workingData.push(findDegrees(hashArray.shift()));

  const notesArray = workingData.map(x => {
    return chord[x]
  });

  resultArray.push(notesArray);

  chordNum += 1;

  return generateSequenceFrom(hashArray.join(''), chordNum, resultArray);
};

export default generateSequenceFrom;
