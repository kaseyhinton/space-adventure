import { LitElement, html, css } from "lit-element";
import { RocketLogo } from "./rocket-logo.js";

import "../../space-game/space-game.js";

export class SpaceAdventure extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        --primary-color: #f4792b;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-size: calc(10px + 2vmin);
        background: url("/components/assets/images/Background.png");
        background-repeat: no-repeat;
        background-size: cover;
        color: #f5f5f5;
      }

      logo-container {
        display: flex;
        align-items: center;
        font-size: 22px;
        margin: 16px;
      }

      logo-container > span {
        color: var(--primary-color);
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  constructor() {
    super();
    this.page = "main";
  }

  render() {
    return html`
      <main>
        <logo-container>
          ${RocketLogo} space-<span>adventure</span>
        </logo-container>
        <space-game></space-game>
      </main>
    `;
  }
}
