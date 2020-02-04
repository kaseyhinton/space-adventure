import { html, css, LitElement } from "lit-element";
import "@material/mwc-ripple";
import { PLANETS } from "../../utility/planets";

export class PlanetSelect extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      planet-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      planet-item {
        display: flex;
        justify-content: center;
        width: 200px;
        border-radius: 50%;
        overflow: hidden;
      }

      img {
        width: 200px;
        height: 200px;
      }
    `;
  }

  render() {
    return html`
      <planet-container>
        ${PLANETS.map(planet => {
          return html`
            <planet-item
              @click=${() => {
                this.dispatchEvent(
                  new CustomEvent("planet-selected", {
                    bubbles: true,
                    composed: true,
                    detail: planet
                  })
                );
              }}
            >
              <mwc-ripple></mwc-ripple>
              <img src="/assets/images/${planet}.png" />
            </planet-item>
          `;
        })}
      </planet-container>
    `;
  }
}
