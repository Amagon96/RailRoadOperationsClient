import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateClassification } from '../../components/create-classification';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Classification Create',
  component: CreateClassification,
} as ComponentMeta<typeof CreateClassification>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CreateClassification> = (args) => <CreateClassification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  addClassification: () => { },
  classificationType: ""
};

export const Destination = Template.bind({});
Destination.args = {
  addClassification: () => { },
  classificationType: "Destination"
};
export const Receiver = Template.bind({});
Receiver.args = {
  addClassification: () => { },
  classificationType: "Receiver"
};