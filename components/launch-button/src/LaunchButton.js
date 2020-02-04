import { html, css, LitElement } from "lit-element";
import "@material/mwc-ripple";

export class LaunchButton extends LitElement {
  static get styles() {
    return css`
      :host {
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

  render() {
    return html`
      <div button>
        <mwc-ripple></mwc-ripple>
        <span>
          LAUNCH
        </span>
      </div>
    `;
  }
}
