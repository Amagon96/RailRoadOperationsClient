import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpdateClassifications } from '../../components/update-classifications';
import { ClassificationItem } from '../../components';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Classification Update',
  component: UpdateClassifications,
} as ComponentMeta<typeof UpdateClassifications>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof UpdateClassifications> = (args) => <UpdateClassifications {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: <ClassificationItem
    classification={{
    id: "string",
    name: "strinng",
    classification: 1,
    type: "DESTINATION"
  }}
    removeItem={() => { }}
    updateItem={async (classification) => {
      return {
        data: {
          id: "string",
          name: "strinng",
          classification: 1,
        },
        status: 0,
        statusText: "",
        headers: {},
        config: {}
      }
    }}
  />
};
