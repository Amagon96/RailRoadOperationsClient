import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ClassificationItem } from '../../components/classification-item';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Classification Item',
  component: ClassificationItem,
} as ComponentMeta<typeof ClassificationItem>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ClassificationItem> = (args) => <ClassificationItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  classification: {
    id: "string",
    name: "strinng",
    classification: 1,
    type: "DESTINATION"
  },
  removeItem: () => { },
  updateItem: async (classification) => {
    return {
      data: {
        id: "string",
        name: "strinng",
        classification: 1,
      }
    }
  }
};