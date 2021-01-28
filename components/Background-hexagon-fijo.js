class Backgridfijo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
      <style>
        #Capa_1 {
          height:100%;
          width: 100%;

        }
        div {
          display:inline-block;
          background-color:red;
          width: 10vw;
          height:5vh;
        }
      </style>
      

     <div>
      <?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      	<g>
      		<path d="M510.432,249.597L388.297,38.537c-2.096-3.631-5.967-5.378-10.159-5.378H133.861c-4.192,0-8.063,1.747-10.159,5.378
      			L1.567,249.841c-2.09,3.631-2.09,7.976,0,11.607l122.135,211.535c2.096,3.632,5.967,5.858,10.159,5.858h244.276
      			c4.192,0,8.063-2.288,10.159-5.919l122.135-211.569C512.523,257.722,512.523,253.228,510.432,249.597z M371.369,455.384H140.63
      			L25.27,256.003L140.63,56.616h230.738l115.36,199.387L371.369,455.384z"/>
      	</g>
      </svg>
    </div>

        `;
    }
  }
  
  window.customElements.define("back-fijo", Backgridfijo);
  