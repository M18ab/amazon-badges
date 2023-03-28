import { LitElement, html, css } from 'lit';

export class AmazonBadges extends LitElement {
  static get properties() {
    return {
      author: { type: String},
      professorName: { type: String, reflect: true},
      funFact: { type: String},
      imgURL: { type: String},
      description: {type: String},
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      .card {
        text-align: center;
        transition: 0.3s;
        height: auto;
        width: 300px;
        background-color: #d3d3d3;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 25px;
      }
      
      @media screen and (max-width: 500px) {
        .card {
          text-transform: var;
          width: var;
          font-size: 4vw;
          background-color: #a71c19;
          color: white
        }
      }

      img {
        margin: 25px;
      }
    `;
  }

  constructor() {
    super();
    this.author = 'Spenser McLaughlin';
    this.professorName = 'Professor Bryan Ollendyke';
    this.funFact = 'This is a picture of a Bing user';
    this.imgURL = 'https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj';
    this.description = 'Details';
  }

  toggleDetails() {
    this.shadowRoot.querySelector('.details').toggleAttribute('open');
  }

  render() {
    return html`
      <div>
        <div class="card" id="card1">
          <h2 id="header">${this.professorName}</h2>
          <h3>By ${this.author}</h3>             
            <img src="imgURL">
          <details class="details" id="details">
          <summary>${this.description}</summary>
            <div>
              <slot name="bing"></slot>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('amazon-badges', AmazonBadges);
