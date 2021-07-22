import Editor from './editor.marko'
import Viewer from './viewer.marko'
import CharacterSchema from './schemata/character.js'

export default {
  name: 'Character',
  description: 'A default character sheet.',
  match: [
    {
      type: /hord-character/g, 
      version: '1.x',
    }
  ],
  editor: Editor,
  viewer: Viewer,
  schema: CharacterSchema,
}
