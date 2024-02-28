// utils
import { faker } from '@faker-js/faker';

// components
import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    actions: {disable: true},
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['elevated', 'flat', 'outlined', 'tonal', 'text', 'plain'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    density: {
      control: {
        type: 'select',
      },
      options: ['compact', 'comfortable', 'default'],
    },
    icon: {
      control: {
        type: 'boolean'
      },
    }
  }
};

export const Default = {
  args: {
    label: faker.lorem.words(5),
    variant: 'flat',
    size: 'default',
    density: 'default',
    icon: false,
  },
};