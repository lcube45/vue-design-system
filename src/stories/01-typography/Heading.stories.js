// utils
import { faker } from '@faker-js/faker';

// components
import HeadingComponent from "./Heading.vue";

export default {
  title: "Design/Typography",
  component: HeadingComponent,
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

export const Heading = {
  args: {
    label: faker.lorem.words(5),
    level: 'h1'
  },
};