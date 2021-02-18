export default class Instructions extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
        <style>

            #container {
                background:blue;
                z-index:3;
                width: 100%;
                height: 80%;
                display: flex;
                flex-direction: column;
                align-items: center;
                position:relative;
            }

            #logo {
                width: 60%;
                height: 15%;
                display:flex;
                justify-content:center;
                align-items:center;
                margin:10px;

            }
            .image{
                width:100%;
              }
            #steps {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 80%;
                height: 65%;
                align-content: space-around;

            }
            #text {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 1.2rem;
                color: white;
                margin: 20px;
                text-align:center;

            }
            #number {
                background: #ce102d;
                width: 40px;

                border-radius: 50%;
                box-shadow: 3px 3px #a21715;
                color: white;
                font-weight: bold;
                font-size: 24px;
                text-align:center;
            }
            #hr {
                background-color: white;
                width: 20%;
                height: 0.1%;
                margin: auto;
            }
            #beefeaterbutton {
                width: 90%;
                height: 10%;
                background-color: #ce102d;
                border-radius: 50px;
                box-shadow: 5px 5px #a21715;
                border:none;
                color:white;
                text-transform:uppercase;
                font-weight:bold;

            }
            #warning {
                position:absolute;
                top:97%;
                margin:auto;
                height:10%;
                text-transform:uppercase;
                color:white;
                font-weight:bold;
                font-size:10px;
            }


        </style>

        <div id='container'>
            <div id='logo'>
                <img class='image' src='../images/beefeater_text_white.png' />
            </div>
            <div id='steps'>
                <div id='number'>1</div>
                <div id='text'>Pídete un Beefeater</div>

                <div id='number'>2</div>
                <div id='text'>elige el regalo que más te guste</div>

                <div id='number'>3</div>
                <div id='text'>disfruta del espíritu de londres allá donde vayas</div>
            </div>
            <button id='beefeaterbutton'>elige tu beefeater</button>
            <div id='warning'> disfruta de un consumo responsable. 40 </div>
        </div>
      
        `;
  }
}

customElements.define("fabs-instructions", Instructions);
