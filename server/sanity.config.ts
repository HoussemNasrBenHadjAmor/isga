import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ISGA',

  projectId: 'rz2wuirp',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  typescript: {
    generateTypeDefinitions: true,
    schemaTypeDefinitions: '../client/src/types/sanity-types.d.ts', // Path to shared folder
  },
})