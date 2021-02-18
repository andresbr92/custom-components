

export default class Camera extends HTMLElement {
    connectedCallback() {
  
    async function setupCamera() {
      const isPortrait = true; // do logic here

      //let video = document.getElementById('video');
      

      console.log("Calling getUserMedia");

      return new Promise((resolve) => {
        (async () => {
          await navigator.mediaDevices
            .getUserMedia({
              audio: false,
              video: {
                facingMode: "environment",
              },
            })
            .then((stream) => {
              console.log("Got getUserMedia stream");
              video.srcObject = stream;
              video.play();
              resolve(true);
            })
            .catch((err) => {
              console.log("Encountered getUserMedia error", err);
              resolve(false);
            });
        })();
      });
    }

    (async () => {
      const ret = await setupCamera();
      console.log(`Initialised camera: ${ret}`);
    })();

    this.innerHTML = `
        <style>
        #video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        </style>

         <video id="video"></video>
    
    `
    let video = document.getElementById("video");
      //corregir lo de la camara  movimiento bug de varios frames 
      //cambiar tamañao del señor
      console.log("Getting video");

      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
  }
}

customElements.define("fabs-camera", Camera);