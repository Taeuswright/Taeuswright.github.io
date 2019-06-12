(function(window) {
  "use strict";

  window.opspark = window.opspark || {};
  var draw = window.opspark.draw;
  var createjs = window.createjs;

  /*
   * Create a background view for our game application
   */
  window.opspark.makeBackground = function(app, ground) {
    if (!app) {
      throw new Error("Invaid app argument");
    }
    if (!ground || typeof ground.y == "undefined") {
      throw new Error("Invalid ground argument");
    }

    // container which will be returned
    var buildings = [];
    var background;
    var backgroundBox;

    // add objects for display in background
    // called at the start of game and whenever the page is resized
    function render() {
      // useful variables

      //background.removeAllChildren();

      // TODO: 3 - YOUR DRAW CODE GOES HERE
      var backgroundFill = draw.rect(1230, ground.y, "img/Castlevania.png");
      // this fills the background with a obnoxious yellow
      // you should modify this to suit your game
      // var backgroundFill = draw.rect(canvasWidth,canvasHeight,'yellow');
      var backgroundFill = draw.bitmap("img/Castlevania.png");
      background.addChild(backgroundFill);
      var canvasWidth = app.canvas.width;
      var canvasHeight = app.canvas.height;
      var groundY = ground.y;

      var buildingHeight = 300;
      var building;
      for (var i = 0; i < 7; ++i) {
        building = draw.rect(75, buildingHeight, "red", "Black", 1);
        building.x = 200 * i;
        building.y = ground.y - buildingHeight;
        background.addChild(building);
        buildings.push(building);
      }
    }

    // Perform background animation
    // called on each timer "tick" - 60 times per second
    function update() {
      // useful variables

      var canvasWidth = app.canvas.width;
      var canvasHeight = app.canvas.height;
      var groundY = ground.y;

      for (var i = 0; i <= buildings.length - 1; i++) {
        var building = buildings[i];
        building.x = building.x - 1;
        if (building.x <= -75) {
          building.x = canvasWidth;
        }
      }
    }

    background = new createjs.Container();
    background.resize = render;
    background.update = update;

    app.addResizeable(background);
    app.addUpdateable(background);

    render();

    return background;
  };
})(window);
