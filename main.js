




const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };
  
  const btn = document.querySelector("#button-share");
  const resultPara = document.querySelector("#result");
  
  // Share must be triggered by "user activation"
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "MDN shared successfully";
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
      console.log(err)
    }
  });







//   // Put variables in global scope to make them available to the browser console.
// const video = document.querySelector("#video");
// const constraints = {
//   audio: false,
//   video: true,
// };

// navigator.mediaDevices
//   .getUserMedia(constraints)
//   .then((stream) => {
//     const videoTracks = stream.getVideoTracks();
//     console.log("Got stream with constraints:", constraints);
//     console.log(`Using video device: ${videoTracks[0].label}`);
//     stream.onremovetrack = () => {
//       console.log("Stream ended");
//     };
//     video.srcObject = stream;
//   })
//   .catch((error) => {
//     if (error.name === "ConstraintNotSatisfiedError") {
//       console.error(
//         `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`
//       );
//     } else if (error.name === "PermissionDeniedError") {
//       console.error(
//         "You need to grant this page permission to access your camera and microphone."
//       );
//     } else {
//       console.error(`getUserMedia error: ${error.name}`, error);
//     }
//   });






const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
  
function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
  
  
  








let vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// Stops vibration
function stopVibrate() {
  // Clear interval and stop persistent vibrating
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// Start persistent vibration at given duration and interval
// Assumes a number value is given
function startPersistentVibrate(duration, interval) {
  vibrateInterval = setInterval(() => {
    startVibrate(duration);
  }, interval);
}
