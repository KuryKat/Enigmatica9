ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:end_city_treasure`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.5);
            pool.addItem('minecraft:raw_copper', 2, [6, 10]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [6, 10]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.25);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:beholder_familiar"}'), 1, 1);
            pool.addItem('ars_nouveau:stable_warp_scroll', 1, [3, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.35);
            pool.addItem('mekanism:upgrade_speed', 2, [1, 3]);
            pool.addItem('mekanism:upgrade_energy', 2, [1, 3]);
            pool.addItem(Item.of('thermal:upgrade_augment_3', '{AugmentData:{BaseMod:8,Type:"Upgrade"}}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.3);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:strong_absorption"}'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem('apotheosis:vial_of_extraction', 1, 1);
            pool.addItem('apotheosis:vial_of_expulsion', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:apotheosis_gem_cache' });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:ars_nouveau_glyph_cache/tier_3' });
        });
    });
});
