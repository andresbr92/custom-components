export default class MyApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //template investigar 

    const shadowRoot = this.attachShadow({bubbles:true,mode:'open'})
    shadowRoot.innerHTML = `
    <style>
        .wrap {
            width: 100vw;
            height: 100vh;
        }
    </style>
    <div class='wrap'>
       <slot></slot>
    </div>
    `;
  }
}

window.customElements.define("my-app", MyApp);