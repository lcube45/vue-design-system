// utils
import { faker } from '@faker-js/faker';

// components
import TextHeadingComponent from "./TextHeading.vue";

export default {
  title: "Design/Typography",
  component: TextHeadingComponent,
  parameters: {
    layout: "centered",
    actions: {disable: true}
  },
  argTypes: {
    level: {
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4'],
    },
  }
};

export const TextHeading = {
  args: {
    label: faker.lorem.words(5),
    level: 'h1'
  },
};