//const schisma = require('schisma')
import schisma from 'schisma'
// const { RequiredStringSchema } = require('schisma-schemata')
import { RequiredStringSchema } from '../../schemata/common.js'
import GearSchema from '../../Gear/schemata/gear.js'

export const LineageSchema = schisma({
  name: RequiredStringSchema,
})

export const ClassSchema = schisma({
  name: RequiredStringSchema,
})

export default schisma({
  type: 'hord-character',
  version: '1.0.0',
  lineage: LineageSchema,
  class: ClassSchema,
  gear: [GearSchema],
  name: String,
})
