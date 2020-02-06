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
      selectedPlanet: { type: String },
      showLaunchButton: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.state = GAME_STATE.planetSelect;
    this.selectedPlanet = null;

    // Launch Screen
    this.showLaunchButton = false;
  }

  _setLaunchPhase() {
    this.state = GAME_STATE.launch;
    setTimeout(() => {
      this.showLaunchButton = true;
    }, 12000);
    console.log("test");
  }

  _reset() {
    this.state = GAME_STATE.planetSelect;
    this.selectedPlanet = null;

    // Launch Screen
    this.showLaunchButton = false;
  }

  render() {
    return html`
      <div main>
        ${this.state === GAME_STATE.planetSelect
          ? html`
              <planet-select
                @planet-selected=${event => {
                  this.selectedPlanet = event.detail;
                  this._setLaunchPhase();
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
                  ?hidden=${!this.showLaunchButton}
                  text="Launch"
                  @click=${() => {
                    setTimeout(() => {
                      this.state = GAME_STATE.victory;
                    }, 300);
                  }}
                ></launch-button>
              </launch-screen>
            `
          : html`
              Victory
              <launch-button
                text="Reset"
                @click=${() => {
                  setTimeout(() => {
                    this._reset();
                  }, 300);
                }}
              ></launch-button>
            `}
      </div>
    `;
  }
}
