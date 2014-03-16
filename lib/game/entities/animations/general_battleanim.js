/**
 *  general_battleanim.js
 *  -----
 *  Unit animation for battle animation overlay.
 */

ig.module(
    'game.entities.animations.general_battleanim'
)
.requires(
    'impact.entity'
)
.defines(function() {
    "use strict";

    ig.global.EntityGeneral_battleanim = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/units/animations/general.png', 250, 125),
        size: {x: 250, y: 125},
        flip: false,
        offset: {x: -45, y: -11},

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0], true);
            this.addAnim('attack0', 0.07, [0, 1, 2, 3, 4, 5, 6, 6, 6, 6], true);
            this.addAnim('attack1', 0.10, [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], true);
            this.addAnim('dodge', 0.07, [0, 0, 0], true);
        },

        update: function() {
            this.parent();
            this.currentAnim.flip.x = this.flip;
        }
    })
});