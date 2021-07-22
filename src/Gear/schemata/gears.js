import schisma from 'schisma'
import GearSchema from './gear.js'

export default schisma({
  type: 'hord-gear',
  version: '1.0.0',
  gear: [GearSchema],
  name: String,
})
