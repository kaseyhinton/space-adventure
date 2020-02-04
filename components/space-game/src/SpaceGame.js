import { html, css, LitElement } from "lit-element";
import "@material/mwc-ripple";
import "../../launch-button/launch-button";
import "../../launch-console/launch-console";
import "../../planet-select/planet-select";

const GAME_STATE = {
  planetSelect: "planet-select",
  launch: "launch-screen",
  victory: "victory-screen"
};

export class SpaceGame extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 48px;
      }

      [main] {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: calc(100vh - 165px);
        align-items: center;
        justify-content: space-between;
      }

      launch-screen {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        align-items: center;
      }

      flex-spacer {
        display: flex;
        flex: 1 1 auto;
      }

      [hidden] {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      state: { type: String },
      selectedPlanet: { type: String }
    };
  }

  constructor() {
    super();
    this.state = GAME_STATE.planetSelect;
    this.selectedPlanet = null;
  }

  _reset() {
    this.state = GAME_STATE.planetSelect;
    this.selectedPlanet = null;
  }

  render() {
    return html`
      <div main>
        ${this.state === GAME_STATE.planetSelect
          ? html`
              <planet-select
                @planet-selected=${event => {
                  this.selectedPlanet = event.detail;
                  this.state = GAME_STATE.launch;
                }}
                ?hidden=${this.state !== GAME_STATE.planetSelect}
              ></planet-select>
            `
          : this.state === GAME_STATE.launch
          ? html`
              <launch-screen ?hidden=${this.state !== GAME_STATE.launch}>
                <launch-console></launch-console>
                <flex-spacer></flex-spacer>
                <launch-button
                  text="Launch"
                  @click=${() => {
                    this.state = GAME_STATE.victory;
                  }}
                ></launch-button>
              </launch-screen>
            `
          : html`
              Victory
              <launch-button
                text="Reset"
                @click=${() => {
                  this._reset();
                }}
              ></launch-button>
            `}
      </div>
    `;
  }
}
