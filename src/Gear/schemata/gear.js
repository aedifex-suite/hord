import schisma from 'schisma'
import {
  RequiredStringSchema,
  OptionalStringSchema,
  IntegerSchema,
  OptionalIntegerSchema,
  StrikeTypeSchema,
  ComplexDamageTypeSchema,
  OptionalComplexDamageTypeSchema,
  OptionalImageSchema,
  OptionalPropertiesSchema,
} from '../../schemata/common'

export const GearArmorSchema = schisma({
  type: {
    $type: 'armor',
    $validate: v => v==='armor',
  },
  name: RequiredStringSchema,
  description: OptionalStringSchema,
  image: OptionalImageSchema,
  worth: IntegerSchema,
  defense: ComplexDamageTypeSchema,
})

export const GearConsumableSchema = schisma({
  type: {
    $type: 'consumable',
    $validate: v => v==='consumable',
  },
  name: RequiredStringSchema,
  description: OptionalStringSchema,
  image: OptionalImageSchema,
  worth: IntegerSchema,
  properties: OptionalPropertiesSchema,
  duration: OptionalIntegerSchema,
  radius: OptionalIntegerSchema,
  range: OptionalIntegerSchema,
  damage: OptionalComplexDamageTypeSchema,
  defense: OptionalComplexDamageTypeSchema,
})

export const GearMiscSchema = schisma({
  type: {
    $type: 'misc',
    $validate: v => v==='misc',
  },
  name: RequiredStringSchema,
  description: OptionalStringSchema,
  image: OptionalImageSchema,
  worth: IntegerSchema,
})

export const GearWealthSchema = schisma({
  type: {
    $type: 'wealth',
    $validate: v => v==='wealth',
  },
  name: RequiredStringSchema,
  description: OptionalStringSchema,
  image: OptionalImageSchema,
  worth: IntegerSchema,
})

export const GearWeaponSchema = schisma({
  type: {
    $type: 'weapon',
    $validate: v => v==='weapon',
  },
  weapontype: {
    $type: 'ranged',
    $validate: v => ['melee', 'ranged', 'launched', 'combo', 'other'].includes(v),
    $required: false,
  },
  name: RequiredStringSchema,
  description: OptionalStringSchema,
  image: OptionalImageSchema,
  attack: IntegerSchema,
  striketype: StrikeTypeSchema,
  damage: ComplexDamageTypeSchema,
  range: OptionalIntegerSchema,
  capacity: OptionalIntegerSchema,
  radius: OptionalIntegerSchema,
  worth: OptionalIntegerSchema,
  properties: [String]
})

const GearSchema = schisma({
  $typeof: [GearWeaponSchema, GearArmorSchema, GearConsumableSchema, GearWealthSchema, GearMiscSchema]
})

export default GearSchema