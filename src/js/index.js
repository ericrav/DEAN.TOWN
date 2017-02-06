import { Howl } from 'howler';

let playingRest = false;
const bpm = 111;
const sixteenth = (60 / bpm / 4) * 1000;
const notesCount = 381;
const bassElement = document.getElementById('bass');

// create sound sprites for each of initial sixteenth notes
const breaks = {};
for (let i = 0; i < notesCount; i++) {
  breaks['note' + i] = [i*sixteenth, sixteenth];
}
breaks['rest'] = [notesCount*sixteenth, 162000];

const sound = new Howl({
  src: ['/audio/deantown.mp3'],
  preload: true,
  sprite: breaks
});

// reset bass
const finished = () => {
  sound.stop();
  noteIndex = 0;
  playingRest = false;
  bassElement.style.width = '200px';
  bassElement.className = '';
};

// play rest of song after all sixteenth notes
const playRest = () => {
  sound.play('rest');
  playingRest = true;
  bassElement.style.width = '450px';
  bassElement.className = 'spin';
  setTimeout(finished, 162000);
};

let noteIndex = 0;
let timer;
const playNote = () => {
  // reset click delay timer
  clearTimeout(timer);
  if (noteIndex >= notesCount || playingRest) {
    if (!playingRest) {
      playRest();
    }
    return;
  }
  const bpmAvg = estimateBpm(noteIndex);
  if (noteIndex > 8) {
    if (bpmAvg < 107.5) {
      noteIndex = 0;
      bassElement.style.width = '200px';
      return;
    }
  }

  sound.play('note' + noteIndex);
  noteIndex++;
  bassElement.style.width = 200 * (1 + noteIndex/100) + 'px';
  // reset bass if not clicked again with a second
  timer = setTimeout(finished, 500);
};

bassElement.addEventListener('click', playNote);

let msecsFirst = 0;
let msecsPrevious = 0;
const estimateBpm = (count) => {

  const msecs = (new Date).getTime();

  // if (msecs - msecsPrevious > 1000) return 0;
  msecsPrevious = msecs;

  if (count === 0) {
    msecsFirst = msecs;
    return 111;
  } else {
    const bpmAvg = 60000 * count / (msecs - msecsFirst) / 4;
    return bpmAvg;
  }

}