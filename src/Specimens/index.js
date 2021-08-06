import Editor from './editor/editor.marko'
import Viewer from './viewer/viewer.marko'
import SpecimensSchema from './schemata/specimens'

export default {
  name: 'Specimens',
  description: 'A collection of Hord specimens.',
  match: [
    {
      type: /hord-specimens/g, 
      version: '1.x',
    }
  ],
  editor: Editor,
  viewer: Viewer,
  schema: SpecimensSchema,
}
