import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputItem } from '../../components/input/input-item';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input Item',
  component: InputItem,
} as ComponentMeta<typeof InputItem>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputItem> = (args) => <InputItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  values: {
    name: "string",
    destination: "string",
    receiver: "string",
  },
  onDelete: () => { },
  enableEdition: () => { },
};
