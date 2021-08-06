
export function calculateCV(t) {
  if (!t) return 0
  if (t.combatvalue) return t.combatvalue
  let v = 0
  if (t.health) {
    v += t.health
  }
  if(t.move) {
    v += t.move
  }
  if (t.attack) {
    v += t.attack
  }
  if (Array.isArray(t.attacks) && t.attacks.length > 0) {
    let avgDmg = 0
    let avgAtk = 0
    let hasOpportunity = 0
    for (let a of t.attacks) {
      avgDmg += a.damage
      avgAtk += a.attack
      if (a.opportunistic) {
        hasOpportunity = 1
      }
    }
    avgDmg /= t.attacks.length
    avgAtk /= t.attacks.length
    v += avgDmg / avgAtk + hasOpportunity
  }
  if (Array.isArray(t.defenses)) {
    let maxDef = 0
    let defs = t.defenses.length
    let perfects = 0
    for (let d of t.defenses) {
      if (d.perfect) {
        perfects++
      }
      maxDef = Math.max(maxDef, d.value)
    }
    v += maxDef + defs + perfects
  }
  if (Array.isArray(t.specials)) {
    v += t.specials.length
  }

  return Math.round(v)
}

export function calculateHealthAverage(tokens) {
  let h = 1
  h += tokens/2
  return h
}
