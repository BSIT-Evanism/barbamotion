import { defineConfig, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            primary: '#242423',
            secondary: '#333533',
            bgColor: '#E8EDDF',
        }
    },
    transformers: [
        transformerVariantGroup()
    ]

})