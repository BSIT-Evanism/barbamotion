import { defineConfig, presetUno } from 'unocss'
import {presetForms} from '@julr/unocss-preset-forms'

export default defineConfig({
    theme: {
        colors: {
            primary: '#242423',
            secondary: '#333533',
            bgColor: '#E8EDDF',
            platinum: '#CFDBD5',
            accent: '#F5CB5C'

        }
    },
    presets: [
        presetUno(),
        presetForms(),
    ],
    
})