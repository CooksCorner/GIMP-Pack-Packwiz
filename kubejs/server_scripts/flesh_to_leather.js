ServerEvents.recipes(event => {
  // Smelting rotten flesh into leather
  event.smelting('minecraft:leather', 'minecraft:rotten_flesh')
       .xp(0.35)
       .id('kubejs:smelt_rotten_flesh');
});