// src/plugins/vuetify.js

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css' // ✅ FA CSS
import { aliases, fa } from 'vuetify/iconsets/fa'  // ✅ FA icon set object
// (Optional) Keep mdi as fallback
import { mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'fa',         // ✅ Set FA as default
    aliases,
    sets: {
      fa,
      mdi,                    // Optional fallback
    },
  },
})
