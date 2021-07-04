import Editor from './editor.marko'
import Viewer from './viewer.marko'
import CharacterSchema from './schemata/character.js'

export default {
  match: [
    {
      type: /horde-character/g, 
      version: '1.x',
    }
  ],
  editor: Editor,
  viewer: Viewer,
  schema: CharacterSchema,
}
