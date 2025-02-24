import Vue from 'vue'

import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/mdi-v4.js'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  lang: lang,
  iconSet: iconSet
 })