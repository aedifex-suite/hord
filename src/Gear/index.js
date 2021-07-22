import Editor from './editor/editor.marko'
import Viewer from './viewer.marko'
import GearsSchema from './schemata/gears'

export default {
  name: 'Gear',
  description: 'A collection of gear.',
  match: [
    {
      type: /hord-gear/g, 
      version: '1.x',
    }
  ],
  editor: Editor,
  viewer: Viewer,
  schema: GearsSchema,
}
