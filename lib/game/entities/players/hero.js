/**
 *  hero.js
 *  -----
 *  Main character/unit.
 */

ig.module(
    'game.entities.players.hero'
)
.requires(
    'game.entities.abstractities.base_player'
)
.defines(function() {
    "use strict";

    ig.global.EntityHero = ig.global.EntityBase_player.extend({
        name: 'player',

        animSheet: new ig.AnimationSheet('media/tilesets/players/assassin.png', 32, 32),

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 0.28, [0, 1, 2]);
            this.addAnim('left', 0.28, [15, 16, 17]);
            this.addAnim('down', 0.28, [5, 6, 7, 8]);
            this.addAnim('up', 0.28, [10, 11, 12, 13]);
        }
    })
});