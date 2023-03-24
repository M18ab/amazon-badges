import { html } from 'lit';
import '../src/amazon-badges.js';

export default {
  title: 'AmazonBadges',
  component: 'amazon-badges',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <amazon-badges
      style="--amazon-badges-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </amazon-badges>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
