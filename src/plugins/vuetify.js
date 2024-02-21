// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import { md3 } from 'vuetify/blueprints'

export default createVuetify({
  blueprint: md3,
  defaults: {
    global: {
      elevation: 0,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#E65180",
          secondary: "#FBC27C",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#2B2C28",
          surface: "#2B2C28",
          primary: "#CC3363",
          secondary: "#F7B05B",
        },
      },
    },
  },
});