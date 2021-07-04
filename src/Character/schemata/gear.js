import schisma from 'schisma'

export const GearWeaponSchema = schisma({
  type: 'weapon',
})
export const GearArmorSchema = schisma({
  type: 'armor',
})
export const GearConsumableSchema = schisma({
  type: 'consumable',
})
export const GearWealthSchema = schisma({
  type: 'wealth',
})
export const GearMiscSchema = schisma({
  type: 'misc',
})

const GearSchema = schisma({
  $typeof: [GearWeaponSchema, GearArmorSchema, GearConsumableSchema, GearWealthSchema, GearMiscSchema]
})

export default GearSchema