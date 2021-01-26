export default class Logo extends HTMLElement {
    constructor() {
      super()
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.innerHTML = `
        <style>
        .logoContainer {
         
          width:20%;
          height:20%;
          margin-left:1.1em;
          padding-top:1.1em;
          font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:white;
        }
        .logo {

        }
        .texto {
            width:100%;
            height:30%;

        }
        .hexagon {
            
            width:65%;
            height:32%;
            position:absolute;
            top:0;
            left:0;
        }

        </style>
        <div class='logoContainer'>
          <div class='logo'>
             <?xml version="1.0" encoding="UTF-8"?>
             <svg enable-background="new 0 0 595.28 841.89" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="50" cy="50" r="50" fill="#edb755"/>
                 <path d="m12.11 65.21v-25l21.65-12.5 21.65 12.5v25l-21.65 12.5-21.65-12.5 21.65-12.5" fill="none" stroke="#000">
                     <animateTransform additive="sum" attributeName="transform" attributeType="xml" dur="5.0s" from="360 33.76 52.71" repeatCount="indefinite" to="0 33.76 52.71" type="rotate"/>
                 </path>
                 <circle cx="33.76" cy="52.71" r="2.5" fill="#fff" stroke="#000"/>
                 <path d="m66.24 22.29 21.65 12.5v25l-21.65 12.5-21.65-12.5v-25l21.65-12.5v25" fill="none" stroke="#000">
                     <animateTransform additive="sum" attributeName="transform" attributeType="xml" dur="5.0s" from="0 66.24 47.29" repeatCount="indefinite" to="360 66.24 47.29" type="rotate"/>
                 </path>
                 <circle cx="66.24" cy="47.29" r="2.5" fill="#fff" stroke="#000"/>
             </svg>
          </div>
          <div class='texto'>
            <p>Fabs Robotics</p>
          </div>
          <div class='hexagon'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:se="http://svg-edit.googlecode.com" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="777" height="480">
               <title>my vector image</title>
               <!-- Created with Vector Paint - http://www.vectorpaint.yaks.com/ https://chrome.google.com/webstore/detail/hnbpdiengicdefcjecjbnjnoifekhgdo -->
              
           <g style="" class="currentLayer"><title>Layer 1</title><path fill="#000000" fill-opacity="1" stroke="#222222" stroke-opacity="1" stroke-width="2" stroke-dasharray="none" stroke-linejoin="round" stroke-linecap="butt" stroke-dashoffset="" fill-rule="nonzero" opacity="1" marker-start="" marker-mid="" marker-end="" id="svg_1" d="M -0.3061741949417893 441.95061070845264 L 263.58024691358025 258.641975308642 L 259.25925925925924 -0.6172839506172839 L 278.39506172839504 -1.2345679012345678 L 282.71604938271605 267.28395061728395 L 0.6172839506172839 456.79012345679007 L -0.3061741949417893 441.95061070845264 z" style="color: rgb(0, 0, 0);"/></g></svg>
          </div>
        </div>
        `;
    }
  }
  
  customElements.define("fabs-logo", Logo);
  