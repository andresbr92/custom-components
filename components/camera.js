

export default class Camera extends HTMLElement {
    connectedCallback() {
    function isMobile() {
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      return isAndroid || isiOS;
    }

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
        
        height: 80vh;
        z-index:-100;
        position:fixed;

        }
        
        </style>

        <div id="wrap">
         <video id="video"></video>
       </div>
    
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