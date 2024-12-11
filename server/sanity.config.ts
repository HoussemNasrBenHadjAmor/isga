import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'
import {colorInput} from '@sanity/color-input'
import {resolve} from './resolve'

export default defineConfig({
  name: 'default',
  title: 'ISGA',

  projectId: 'rz2wuirp',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    colorInput(),

    presentationTool({
      resolve,
      previewUrl: {
        origin: process.env.SANITY_STUDIO_FRONTEND_BASE_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  // typescript: {
  //   generateTypeDefinitions: true,
  //   schemaTypeDefinitions: '../client/src/types/sanity-types.d.ts', // Path to shared folder
  // },
})
