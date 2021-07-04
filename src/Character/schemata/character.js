//const schisma = require('schisma')
import schisma from 'schisma'
// const { RequiredStringSchema } = require('schisma-schemata')
import { RequiredStringSchema } from './common.js'
import GearSchema from './gear.js'

export const LineageSchema = schisma({
  name: RequiredStringSchema,
})

export const ClassSchema = schisma({
  name: RequiredStringSchema,
})

export default schisma({
  type: 'horde-character',
  version: '1.0',
  lineage: LineageSchema,
  class: ClassSchema,
  gear: [GearSchema],
  name: String,
})
