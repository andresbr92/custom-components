export default class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>
      #container {
        width: 100%;
        height: 20%;
      }
      #top-bar {
        width: 100%;
        height: 60%;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      #logo {
        width:50%;
        height:100%;
      }
      #spirit {
        width:50%;
        height:100%;
      }
      .image{
        width:75%;
      }
      #buttons-container {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ce102d;
        
      }
      .each-button {
        font-size:12px;
        display: flex;
        align-items: center;
        height: 70%;
        width: 90%;
        border-radius: 40px;
        border:none;
        text-transform: uppercase;
        background-color:#ce102d;
        color:white;
        font-weight:bold;
      }
      .circle {
        margin-right: 2vw;
        margin-left: 2vw;
        height: 30px;
        width: 30px;
        background-color: white;
        border-radius: 50%;
        color: #ce102d;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight:bold;
      }

      
    
    </style>

    <div id = 'container'>
      <div id = 'top-bar'>
        <div id='logo'>
          <img class='image' src='../images/Beefeater-Logo.png' />
        </div>
        <div id='spirit'>
          <img class='image' src='../images/spirit.png' />
        </div>
      </div>

      <div id='buttons-container'>
        <button class = 'each-button'><p class = 'circle'>1</p>instrucciones</button>
        <button class = 'each-button'><p class = 'circle'>2</p>carta</button>
        <button class = 'each-button'><p class = 'circle'>3</p>sorteo</button>
      </div>
    
    
    
    </div>
      `;
  }
}

customElements.define("fabs-navbar", Navbar);
