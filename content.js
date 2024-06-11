// Function to mute or unmute the video
function setMute(mute) {
  let video = document.querySelector('video');
  if (video) {
      console.log(`Setting mute to: ${mute}`);
      video.muted = mute;
  } else {
      console.log('No video element found');
  }
}

// Function to detect if an ad is playing
function isAdPlaying() {
  let adMarkers = document.querySelectorAll('._1GyF_i9b6_XmG3IxgNlj4H, ._3lBTY-_WfJ1b1MRdoASQNm');
  console.log(`Ad markers found: ${adMarkers.length}`);
  return adMarkers.length > 0;
}

// Check periodically if an ad is playing
function checkAds() {
  if (isAdPlaying()) {
      setMute(true);
      console.log('Ad is playing, muting video');
  } else {
      setMute(false);
      console.log('Ad is not playing, unmuting video');
  }
  requestAnimationFrame(checkAds);
}

requestAnimationFrame(checkAds);
