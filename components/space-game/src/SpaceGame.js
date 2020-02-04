import { html, css, LitElement } from "lit-element";
import "@material/mwc-ripple";

export class SpaceGame extends LitElement {
  static get styles() {
    return css`
      :host {
        --page-main-text-color: #000;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 48px;
        color: var(--page-main-text-color);
      }

      [main] {
        display: flex;
        flex: 1 1 auto;
      }

      [button] {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding: 24px;
        background: var(--primary-color);
        color: #f5f5f5;
        border: 4px solid #f5f5f5;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        overflow: hidden;
      }
      [button] > span {
        margin-bottom: 8px;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  constructor() {
    super();
    this.counter = 5;
  }

  _setUpSpeechRecognition() {
    var launchCommands = ["go", "blast", "lift", "off"];

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;
      console.log(transcript);
      console.log(confidence);
      if (launchCommands.some(com => transcript.includes(com))) {
        var synth = speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(
          "5, 4, 3, 2, 1. Blast off!"
        );
        synth.speak(utterance);

        console.log("Rocket blasting off");
      }
    };

    recognition.start();
  }

  firstUpdated() {
    this._setUpSpeechRecognition();
  }

  render() {
    return html`
      <div main>
        Hello
  </div>
      <div button>
        <mwc-ripple></mwc-ripple>
        <span>
          LAUNCH
        </span>
      </div>
    `;
  }
}
