(function(window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

  /**
   * init: Initialize all cannons.
   *
   * Add as many cannons as necessary to make your level challenging.
   */

  cannon.init = function(game) {
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    cannon.create.onTop(350);
    cannon.create.onTop(600);
    cannon.create.onTop(100);
    cannon.create.onLeft(450);
    cannon.create.onLeft(550);
    cannon.create.onRight(350);
    cannon.create.onRight(550);
    cannon.create.onBottom(0);
    cannon.create.onBottom(500);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  };
})(window);
