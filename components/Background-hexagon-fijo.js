class Backgridfijo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
        <style>
        #grid {
            position: relative;
            width: 78%;
            margin: 0 auto;
            padding: 0; /* Clears unordered list default of 40px */
        }
        
        .clear:after {
            content: "";
            display: block;
            clear: both;
        }
        #grid li {
            list-style-type: none;
            position: relative;
            float: left;
            width: 27.85714285714286%;
            padding: 0 0 32.16760145166612% 0;
            -o-transform: rotate(-60deg) skewY(30deg);
            -moz-transform: rotate(-60deg) skewY(30deg);
            -webkit-transform: rotate(-60deg) skewY(30deg);
            -ms-transform: rotate(-60deg) skewY(30deg);
            transform: rotate(-60deg) skewY(30deg);
            background: fd005f;
            overflow: hidden;
        }
        #grid li .hexagon {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -o-transform: skewY(-30deg) rotate(60deg);
            -moz-transform: skewY(-30deg) rotate(60deg);
            -webkit-transform: skewY(-30deg) rotate(60deg);
            -ms-transform: skewY(-30deg) rotate(60deg);
            transform: skewY(-30deg) rotate(60deg);
            overflow: hidden;
            -webkit-transition: background-color 2s ease-out;
            -moz-transition: background-color 2s ease-out;
            -o-transition: background-color 2s ease-out;
            transition: background-color 2s ease-out;
            
        }
        .hexagon:hover {
            
            background-color:rgba(236, 182, 84, 0.5);
          }
        #grid li * {
            visibility: visible;
        }
        #grid li:nth-child(2) {
            margin: 0 1%;
          }
        #grid li:nth-child(3n+2) {
            margin: 0 1%;
          }
          #grid li:nth-child(6n+4), #grid li:nth-child(6n+5), #grid li:nth-child(6n+6) {
            margin-top: -6.9285714285%;
            margin-bottom: -6.9285714285%;
            -o-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -moz-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            transform: translateX(50%) rotate(-60deg) skewY(30deg);
        }
        #grid li:nth-child(6n+4) { 
            margin-left: 0.5%;
        }
       
            
        </style>
        
    <ul id="grid" class="clear">
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        <li>
            <div class="hexagon"></div>
        </li>
        
    </ul>
        `;
    }
  }
  
  window.customElements.define("back-fijo", Backgridfijo);
  