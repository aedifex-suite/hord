import schisma from 'schisma'
import {
  RequiredStringSchema,
  OptionalStringSchema,
  IntegerSchema,
  OptionalIntegerSchema,
  OptionalFloatSchema,
  DamageTypeSchema,
  OptionalImageSchema,
  DefenseStringSchema,
  SpecialSchema,
  OptionalBooleanSchema,
  OptionalPropertiesSchema,
} from '../../schemata/common'

import {
  GearWeaponSchema
} from '../../Gear/schemata/gear'

export const AttackSchema = schisma({
  name: RequiredStringSchema,
  attack: IntegerSchema,
  attacktype: {
    $type: 'melee',
    $validate: v => ['melee', 'ranged', 'launched', 'combo', 'other'].includes(v),
    $required: false,
  },
  damage: IntegerSchema,
  damagetype: DamageTypeSchema,
  range: OptionalIntegerSchema,
  radius: OptionalIntegerSchema,
  opportunistic: OptionalBooleanSchema,
  properties: OptionalPropertiesSchema,
})

export const DefenseSchema = schisma({
  type: DefenseStringSchema,
  value: IntegerSchema,
  perfect: false,
})

const SpecimenSchema = schisma({
  name: RequiredStringSchema,
  description: OptionalStringSchema,
  health: IntegerSchema,
  move: IntegerSchema,
  attack: IntegerSchema,
  combatvalue: OptionalFloatSchema,
  defenses: {
    $type: [DefenseSchema],
    $required: false,
  },
  attacks: {
    $typeof: [[AttackSchema, GearWeaponSchema]],
    $required: false,
  },
  move: IntegerSchema,
  specials: {
    $type: [SpecialSchema],
    $required: false,
  }
})

export default SpecimenSchema