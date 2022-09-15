import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Classification } from '../../pages';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Classification Page',
  component: Classification,
} as ComponentMeta<typeof Classification>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Classification> = (args) => <Classification {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "DESTINATION"
};
