import { html, css, LitElement } from "lit-element";

export class LaunchConsole extends LitElement {
  static get styles() {
    return css`
      console-window {
        display: block;
        background: #000;
        border-radius: 8px;
        overflow: hidden;
        margin: 16px;
        width: 300px;
        font-size: 16px;
        font-weight: 300;
      }

      console-menu {
        width: 300px;
        height: 25px;
        position: relative;
        color: #212121;
        background-color: #eee;
        border-color: #333;
        display: inline-block;
      }

      console-content {
        display: block;
        padding: 16px 16px 32px 16px;
        height: 100px;
      }

      console-window-title {
        position: relative;
        top: 2px;
        left: 80px;
        font-size: 14px;
      }

      minimize-button,
      zoom-button,
      close-button {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        border: 1px solid #fff;
        position: relative;
        top: 3px;
        left: 8px;
        background-color: #ff3b47;
        display: inline-block;
      }

      minimize-button {
        left: 12px;
        background-color: #ffc100;
      }

      zoom-button {
        left: 16px;
        background-color: #00d742;
      }

      typed-js {
        font-size: 14px;
      }

      typed-js[second] {
        color: var(--primary-color);
      }

      [primary] {
        color: var(--primary-color);
      }
    `;
  }

  render() {
    return html`
      <console-window>
        <console-menu>
          <close-button></close-button>
          <minimize-button></minimize-button>
          <zoom-button></zoom-button>
          <console-window-title>Shell</console-window-title>
        </console-menu>
        <console-content>
          <typed-js
            first
            typeSpeed="50"
            cursorChar="|"
            strings="sudo initiate_launch, cd launch, sudo sys_launch, ..running launch sequence"
          >
            <main-message
              ><span primary>$</span> <span class="typing"></span
            ></main-message>
          </typed-js>
          <br />
          <typed-js
            second
            typeSpeed="10"
            startDelay="8000"
            cursorChar=" "
            strings="ESTABLISHING CONNECTION, AUTHORIZATION IN PROGRESS, PREPARING LAUNCH SYSTEMS, READY FOR LAUNCH"
          >
            <main-message><span class="typing"></span></main-message>
          </typed-js>
        </console-content>
      </console-window>
    `;
  }
}

export class TypedJS extends LitElement {
  static get properties() {
    return {
      strings: { type: String },
      stringsElement: { type: String },
      typeSpeed: { type: Number },
      startDelay: { type: Number },
      backSpeed: { type: Number },
      smartBackspace: { type: Boolean },
      shuffle: { type: Boolean },
      backDelay: { type: Number },
      fadeOut: { type: Boolean },
      fadeOutClass: { type: String },
      fadeOutDelay: { type: Boolean },
      loop: { type: Boolean },
      loopCount: { type: Number },
      showCursor: { type: Boolean },
      cursorChar: { type: String },
      autoInsertCss: { type: Boolean },
      attr: { type: String },
      bindInputFocusEvents: { type: Boolean },
      contentType: { type: String }
    };
  }

  constructor() {
    super();
  }

  render() {
    try {
      new Typed(this.querySelector(".typing"), {
        strings: this.strings.split(",") || "",
        stringsElement: this.stristringsElementngs || null,
        typeSpeed: this.typeSpeed || 50,
        startDelay: this.startDelay || 0,
        backSpeed: this.backSpeed || 0,
        smartBackspace: this.smartBackspace || true,
        shuffle: this.shuffle || false,
        backDelay: this.backDelay || 700,
        fadeOut: this.fadeOut || false,
        fadeOutClass: this.fadeOutClass || false,
        fadeOutDelay: this.fadeOutDelay || false,
        loop: this.loop || false,
        loopCount: this.loopCount || Infinity,
        showCursor: this.showCursor || true,
        cursorChar: this.cursorChar || "|",
        autoInsertCss: this.autoInsertCss || true,
        attr: this.attr || null,
        bindInputFocusEvents: this.bindInputFocusEvents || false,
        contentType: this.contentType || "html"
      });
    } finally {
      return html`
        <slot></slot>
      `;
    }
  }
}

window.customElements.define("typed-js", TypedJS);
