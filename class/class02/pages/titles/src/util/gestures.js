const { GestureDescription, Finger, FingerCurl } = window.fp;
  
const ScrollDown = new GestureDescription('scroll-down'); // ✊️
const ScrollUp = new GestureDescription('scroll-up'); // 🖐


  
// SCROLL DOWN
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDown.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    ScrollDown.addCurl(finger, FingerCurl.FullCurl, 1.0);
    ScrollDown.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    ScrollUp.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------
  

const knowGestures = [
    ScrollDown, ScrollUp
]


const gesturesStrings = {
    'scroll-up': '✋',
    'scroll-down': '✊️'
}

export {
    knowGestures,
    gesturesStrings
}