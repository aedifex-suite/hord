import schisma from 'schisma'

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

export const OptionalIntegerSchema = schisma({
  $type: Number,
  $validate: v => {
    if (typeof v !== 'number') return 'field must be a number'
    if (v % 1 !== 0) return 'field must not be a floating point number'
  },
  $required: false,
})

export const DamageTypeSchema = schisma({
  $type: String,
  $validate: v => {
    let t = ['generic', 'stab', 'slash', 'bludgeon']
    if (!t.includes(v)) return `field must be one of ${t.join(', ')}`
  },
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