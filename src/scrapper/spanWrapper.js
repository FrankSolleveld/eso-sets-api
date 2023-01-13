function spanWrapper(string) {
  if(!string) return
  return string
    .replace(/Maximum\sHealth/g, "Maximum Health")
    .replace(/Healing\sTaken/g, "Healing Taken")
    .replace(/Health\sRecovery/g, "Health Recovery")
    .replace(
      /Maximum\sStamina/g,
      "Maximum Stamina"
    )
    .replace(
      /Stamina\sRecovery/g,
      "Stamina Recovery"
    )
    .replace(
      /Maximum\sMagicka/g,
      "Maximum Magicka"
    )
    .replace(
      /Magicka\sRecovery/g,
      "Magicka Recovery"
    )
    .replace(
      /Physical\sResistance/g,
      "Physical Resistance"
    )
    .replace(
      /Spell\sResistance/g,
      "Spell Resistance"
    )
    .replace(/Weapon\sDamage/g, "Weapon Damage")
    .replace(/Weapon\sCritical/g, "Weapon Critical")
    .replace(/Spell\sDamage/g, "Spell Damage")
    .replace(/Spell\sCritical/g, "Spell Critical")
    .replace(/Major\sAegis/g, "Major Aegis")
    .replace(/Minor\sAegis/g, "Minor Aegis")
    .replace(/Major\sBerserk/g, "Major Berserk")
    .replace(/Minor\sBerserk/g, "Minor Berserk")
    .replace(/Major\sBrutality/g, "Major Brutality")
    .replace(/Minor\sBrutality/g, "Minor Brutality")
    .replace(/Major\sCourage/g, "Major Courage")
    .replace(/Minor\sCourage/g, "Minor Courage")
    .replace(/Major\sEndurance/g, "Major Endurance")
    .replace(/Minor\sEndurance/g, "Minor Endurance")
    .replace(/Major\sEvasion/g, "Major Evasion")
    .replace(/Minor\sEvasion/g, "Minor Evasion")
    .replace(/Major\sExpedition/g, "Major Expedition")
    .replace(/Minor\sExpedition/g, "Minor Expedition")
    .replace(/Major\sForce/g, "Major Force")
    .replace(/Minor\sForce/g, "Minor Force")
    .replace(/Major\sFortitude/g, "Major Fortitude")
    .replace(/Minor\sFortitude/g, "Minor Fortitude")
    .replace(/Major\sGallop/g, "Major Gallop")
    .replace(/Minor\sGallop/g, "Minor Gallop")
    .replace(/Major\sHeroism/g, "Major Heroism")
    .replace(/Minor\sHeroism/g, "Minor Heroism")
    .replace(/Major\sIntellect/g, "Major Intellect")
    .replace(/Minor\sIntellect/g, "Minor Intellect")
    .replace(/Major\sMending/g, "Major Mending")
    .replace(/Minor\sMending/g, "Minor Mending")
    .replace(/Major\sProphecy/g, "Major Prophecy")
    .replace(/Minor\sProphecy/g, "Minor Prophecy")
    .replace(/Major\sProtection/g, "Major Protection")
    .replace(/Minor\sProtection/g, "Minor Protection")
    .replace(/Major\sResolve/g, "Major Resolve")
    .replace(/Minor\sResolve/g, "Minor Resolve")
    .replace(/Major\sSavagery/g, "Major Savagery")
    .replace(/Minor\sSavagery/g, "Minor Savagery")
    .replace(/Major\sSlayer/g, "Major Slayer")
    .replace(/Minor\sSlayer/g, "Minor Slayer")
    .replace(/Major\sSorcery/g, "Major Sorcery")
    .replace(/Minor\sSorcery/g, "Minor Sorcery")
    .replace(/Major\sToughness/g, "Major Toughness")
    .replace(/Minor\sToughness/g, "Minor Toughness")
    .replace(/Major\sVitality/g, "Major Vitality")
    .replace(/Minor\sVitality/g, "Minor Vitality")
    .replace(/Major\sBreach/g, "Major Breach")
    .replace(/Minor\sBreach/g, "Minor Breach")
    .replace(/Major\sCowardice/g, "Major Cowardice")
    .replace(/Minor\sCowardice/g, "Minor Cowardice")
    .replace(/Major\sDefile/g, "Major Defile")
    .replace(/Minor\sDefile/g, "Minor Defile")
    .replace(
      /Major\sEnervation/g,
      "Major Enervation"
    )
    .replace(
      /Minor\sEnervation/g,
      "Minor Enervation"
    )
    .replace(/Major\sFracture/g, "Major Fracture")
    .replace(/Minor\sFracture/g, "Minor Fracture")
    .replace(
      /Major\sHinderance/g,
      "Major Hinderance"
    )
    .replace(
      /Minor\sHinderance/g,
      "Minor Hinderance"
    )
    .replace(/Major\sLifesteal/g, "Major Lifesteal")
    .replace(/Minor\sLifesteal/g, "Minor Lifesteal")
    .replace(
      /Major\sMagickasteal/g,
      "Major Magickasteal"
    )
    .replace(
      /Minor\sMagickasteal/g,
      "Minor Magickasteal"
    )
    .replace(/Major\sMaim/g, "Major Maim")
    .replace(/Minor\sMaim/g, "Minor Maim")
    .replace(/Major\sMangle/g, "Major Mangle")
    .replace(/Minor\sMangle/g, "Minor Mangle")
    .replace(
      /Major\sUncertainty/g,
      "Major Uncertainty"
    )
    .replace(
      /Minor\sUncertainty/g,
      "Minor Uncertainty"
    )
    .replace(
      /Major\sVulnerability/g,
      "Major Vulnerability"
    )
    .replace(
      /Minor\sVulnerability/g,
      "Minor Vulnerability"
    )
}

module.exports = { spanWrapper };
