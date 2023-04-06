import { LitElement, html, css } from 'lit';
import "./amazon-badges.js";
import "./search-widget.js";

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
        this.getSearchResults().then((results) => {
            this.badges = results;
        });
    }

    // updateList() {
    //     const address = '../api/list';
    //     fetch(address).then((response) => {
    //         if (response.ok) {
    //             return response.json()
    //         }
    //         return [];
    //     })
    //     .then((data) => {
    //         this.badges = data;
    //     });
    // }

    static get styles() {
        return css`
        .wrapper {
            border: 2px solid overscroll-behavior-block;
            /* display: flex; */
        }
    `;
    }

    async getSearchResults(value = '') {
        const address = `/api/list?search=${value}`;
        const results = await fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            return data;
        });

        return results;
    }

    async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.badges = await this.getSearchResults(term);
    }

    render() {
        return html`
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <amazon-badges badgeHeader="${badge.badgeHeader}" badgeImage="${badge.badgeImage}" badgeDesc="${badge.badgeDesc}" creator="${badge.creator}" creatorImage="${badge.creatorImage}" mediaImg="${badge.mediaImg}"  timeToComplete="${badge.timeToComplete}"></amazon-badges>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(AmazonBadges.tag, AmazonBadges);