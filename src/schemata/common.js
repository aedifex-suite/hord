import schisma from 'schisma'
import { DefenseTypes } from '../util/common'

export const RequiredStringSchema = schisma({
  $type: String,
  $validate: v => {
    if (v == '') return 'field must not be empty'
  },
  $required: true,
})

export const OptionalStringSchema = schisma({
  $type: String,
  $required: false,
})

export const IntegerSchema = schisma({
  $type: Number,
  $validate: v => {
    if (typeof v !== 'number') return 'field must be a number'
    if (v % 1 !== 0) return 'field must not be a floating point number'
  },
  $required: true,
})

export const OptionalFloatSchema = schisma({
  $type: Number,
  $required: false,
})

export const OptionalIntegerSchema = schisma({
  $type: Number,
  $validate: v => {
    if (typeof v !== 'number') return 'field must be a number'
    if (v % 1 !== 0) return 'field must not be a floating point number'
  },
  $required: false,
})

export const OptionalBooleanSchema = schisma({
  $type: Boolean,
  $required: false,
})

export const SimpleDamageTypeSchema = schisma({
  $type: String,
  $validate: v => {
    let t = ['generic', 'stab', 'slash', 'bludgeon']
    if (!t.includes(v)) return `field must be one of ${t.join(', ')}`
  },
})

export const ComplexDamageTypeSchema = schisma({
  $type: [[SimpleDamageTypeSchema]],
})

export const DamageTypeSchema = schisma({
  $typeof: [SimpleDamageTypeSchema, ComplexDamageTypeSchema],
  $required: true,
})

export const OptionalImageSchema = schisma({
  $type: String,
  $validate: v => {
    if (typeof v !== 'string') return 'field must be a string'
    if (!v.match(/^data:image\/[a-z]+;base64,/)) return 'field must be a base64-encoded value'
  },
  $required: false,
})

export const DefenseStringSchema = schisma({
  $type: String,
  $validate: v => {
    if (!DefenseTypes.includes(v)) return `field must be one of ${DefenseTypes.join(', ')}`
  },
})

export const SpecialSchema = schisma({
  name: RequiredStringSchema,
  description: OptionalStringSchema,
})

export const PropertySchema = SpecialSchema
export const OptionalPropertiesSchema = schisma({
  $type: [PropertySchema],
  $required: false,
})