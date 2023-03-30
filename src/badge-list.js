import { LitElement, html, css } from 'lit';
import "./amazon-badges.js";

export class AmazonBadges extends LitElement {
    static get tag() {
        return 'badge-list';
    }
    static get properties() {
        return {
            badges: { type: Array },
            //org: { type: String }
        }
    }

    constructor() {
        super();
        this.badges = [];
        //this.org = 'Penn State';
        this.updateList();
    }

    updateList() {
        const address = '../api/list';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

    static get styles() {
        return css`
        .wrapper {
            border: 2px solid overscroll-behavior-block;
            /* display: flex; */
        }
    `;
    }

    render() {
        return html`
        <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <amazon-badges author="${badge.author}" professorName="${badge.professorName}" funFact="${badge.funFact}" topText="${badge.topText}" bottomText="${badge.bottomText}" imgURL="${badge.imgURL}"  description="${badge.description}"  shadowColor="${badge.shadowColor}"></amazon-badges>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(AmazonBadges.tag, AmazonBadges);