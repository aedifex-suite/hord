import schisma from 'schisma'
import SpecimenSchema from './specimen.js'

export default schisma({
  type: 'hord-specimens',
  version: '1.0.0',
  specimens: [SpecimenSchema],
  name: String,
})
