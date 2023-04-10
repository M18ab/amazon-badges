import { LitElement, html, css } from 'lit';

export class AmazonBadges extends LitElement {
  static get properties() {
    return {
      badgeHeader: { type: String},
      badgeImage: { type: String},
      badgeDesc: { type: String},
      creator: { type: String},
      creatorImage: {type: String},
      mediaImg: {type: String},
      timeToComplete: {type: String},
    };
  }

  static get styles() {
    return css`
      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      html {
        font-size: 10px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        background: #e9ecf3;
        color: #333333;
        font-family: "effra", sans-serif;
        padding: 0px !important;
        margin: 0px !important;
        font-size: 14px;
        direction: ltr;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 2;
        color: #333333;
        background-color: #fff;
        margin: 0;
      }

      .badge {
        position: relative;
        border: 1px solid blue;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        margin-bottom: 1px;
        max-width: 800px;
        overflow: hidden;
      }

      .badge::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 20px;
        background-color: #3e98d3;
      }
      .badge-header {
        padding: 0px 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #cfe6f4;
        cursor: pointer;
      }

      .badge-title {
        margin: 0;
        font-weight: 500;
      }

      .badge-arrow {
        border: solid #333;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
        transition: transform 0.3s ease;
      }

      .badge-content {
        display: none;
        padding: 1px 1px;
        align-items: centre
      }

      .badge.expanded .badge-arrow {
        transform: rotate(-135deg);
      }
      }
              /* Style for white box */
      .step-row {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 0;
                  border-bottom: 1px solid #ccc;
                  background-color: grey;
                  z-index: 0;
              }
      .search-container {
                  display: flex;
                  justify-content: center;
                  margin: 20px 0;
              }

              .search-input {
                  padding: 10px;
                  width: 50%;
                  font-size: 1rem;
              }

              /* Style for badges */
              .badge {
                  position: relative;
                  width: 80%;
                  background-color: #cfe6f4;
                  display: flex;
                  flex-direction: column;
                  z-index: 1;
                  transition: max-height 0.5s ease-in-out;
                  margin-left: 10%;
                
                  overflow: hidden;
                  margin-bottom: 10px;
                  padding: 10px;
                  max-height: 80px;
                  justify-content: center;
              }

              .badge::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0;
                  bottom: 0;
                  width: 10px;
                  background-color: #3e98d3;
              }

              /* Style for expanded badges */
              .badge.expanded {
                  max-height: 1000px;
                  z-index: 1;
              }
              /* Style for badge content */
              .badge-content {
                  padding: 0;
                  display: none;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 0px;
                  width: 110%;
              }
              /* Style for badge header */
              .badge-header {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  width: 100%;
                  justify-content: space-between;
              }
              /* Style for badge image */
              .badge-image {
                  margin-left: 10px;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
              }
              /* Style for badge arrow */
              .badge-arrow {
                  border: solid black;
                  border-width: 0 3px 3px 0;
                  display: inline-block;
                  padding: 3px;
                  transform: rotate(45deg);
                  margin-right: 5px;
              }
              /* Style for step-row */
              .step-row {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 0;
                  border-bottom: 1px solid #ccc;
                  background-color: #f0f0f0;
                  z-index: 2 ;
              }

              .activity-type img {
                  width: 30px;
                  height: 30px;
              }.search-container {
                  display: flex;
                  justify-content: center;
                  margin: 20px 0;
              }

              .search-input {
                  padding: 10px;
                  width: 50%;
                  font-size: 1rem;
              }

              /* Style for badges */
              .badge {
                  position: relative;
                  width: 80%;
                  background-color: #cfe6f4;
                  display: flex;
                  flex-direction: column;
                  z-index: 1;
                  transition: max-height 0.5s ease-in-out;
                  margin-left: 10%;
                
                  overflow: hidden;
                  margin-bottom: 10px;
                  padding: 10px;
                  max-height: 80px;
                  justify-content: center;
              }

              .badge::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0;
                  bottom: 0;
                  width: 10px;
                  background-color: #3e98d3;
              }

              /* Style for expanded badges */
              .badge.expanded {
                  max-height: 1000px;
                  z-index: 1;
              }
              /* Style for badge content */
              .badge-content {
                  padding: 0;
                  display: none;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 0px;
                  width: 110%;
              }
              /* Style for badge header */
              .badge-header {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  width: 100%;
                  justify-content: space-between;
              }
              /* Style for badge image */
              .badge-image {
                  margin-left: 10px;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
              }
              /* Style for badge arrow */
              .badge-arrow {
                  border: solid black;
                  border-width: 0 3px 3px 0;
                  display: inline-block;
                  padding: 3px;
                  transform: rotate(45deg);
                  margin-right: 5px;
              }
              /* Style for step-row */
              .step-row {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 0;
                  border-bottom: 1px solid #ccc;
                  background-color: #f0f0f0;
                  z-index: 2 ;
              }

              .activity-type img {
                  width: 30px;
                  height: 30px;
              }      
          `;
        }

  constructor() {
    super();
    this.badgeHeader = 'Amazon I AM McLaughlin';
    this.badgeImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png';
    this.badgeDesc = 'Create a I AM account with MFA enabled and Admin permissions';
    this.creator = 'Joshua Hantman';
    this.creatorImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU'
    this.mediaImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU'
    this.timeToComplete = '2.0 hours';
    this.secDesc = 'Create a User Pool in Amazon Cognito ';
  }

  render() {
    return html`
    <body>
        <div class="badge">
          <div class="badge-header">
              <img src="${this.badgeImage}" alt="Image for Badge 1" class="badge-image">
              <h1>${this.badgeHeader}</h1>
              <div class="badge-arrow" onclick="toggleBadgeContent(this)"></div>
          </div>
          <div class="badge-content">
              <div class="badge-details">
                  <div class="badge-description">
                      <h2 class="display-hide">Description</h2>
                      <p><p>${this.badgeDesc}</p></p>
                  </div>
                  <div class="badge-stats">
                      <div class="badge-creator">Badge Creator: <img alt="${this.creator}&#39;s user image" class="circular circular-small" aria-hidden="true" src= "${this.creatorImage}" /> ${this.creator}</div>
                      <div class="badge-completion-time">Approximate time to complete: ${this.timeToComplete}</div>
                  </div>
              </div>
              <table>
                  <tbody>
                      <tr class="step-row">
                          <td class="activity-type" aria-hidden="true">
                              <img src= "${this.mediaImg}" alt="Listicon mediatype video gray" width="30" height="30">
                          </td>
                          <td class="step-title">
                            ${this.secDesc}
                          <!-- </td>
                          <td class="time-to-complete">
                          ${this.timeToComplete}
                          </td> -->
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    `;
  }
}

customElements.define('amazon-badges', AmazonBadges);
