import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputLabel } from '../../components/input/input-label';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input Label',
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: <><h1>Hello</h1></>
};
