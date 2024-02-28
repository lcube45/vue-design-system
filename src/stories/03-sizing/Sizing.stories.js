import Sizing from "./Sizing.vue";

export default {
  title: "Design/Sizing",
  component: Sizing,
  parameters: {
    layout: "fullscreen",
    actions: {disable: true},
    a11y: {disable: true},
  },
  argTypes: {
    height: {
      control: {
        type: 'select',
      },
      options: ['h-auto', 'h-screen', 'h-0', 'h-25', 'h-50', 'h-75', 'h-100'],
    },
    width: {
      control: {
        type: 'select',
      },
      options: ['w-auto', 'w-screen', 'w-0', 'w-25', 'w-50', 'w-75', 'w-100'],
    },
  }
};

export const Default = {
  args: {
    width: 'w-50',
    height: 'h-screen'
  },
};