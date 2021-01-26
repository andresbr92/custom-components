export default class MyApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode:'open'})
    shadowRoot.innerHTML = `
    <style>
        .wrap {
            width: 100vw;
            height: 100vh;
            background-color: white;
        }
    </style>
    <div class='wrap'>
       <slot></slot>
    </div>
    `;
  }
}

window.customElements.define("my-app", MyApp);