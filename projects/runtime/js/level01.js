(function (window) {
    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
           
        // this data will allow us to define all of the
        // behavior of our game
        
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'hat',x:900,y:200},
                {type: 'hat',x:1200,y:400},
                {type: 'sawblade',x:900,y:300},
                {type: 'sawblade',x:900,y:500},
                {type: 'sawblade',x:900,y:300},
                {type: 'sawblade',x:900,y:groundY},
            ]
        };
            
            
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
       
         var sawblade = game.createGameItem("sawblade" , 25);  
         var obstacleImage = draw.bitmap('img/hat.png');
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = 400;
            myObstacle.y = 300;
            game.addGameItem(myObstacle);
            sawblade.rotationalVelocity = 10;
  
        
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -55;
             
             
         // your code goes here
        function createEnemy(x,y) {
            
         
            var onProjectileCollision;
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50, 50, 'green');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = 500;
            enemy.y = groundY - 50;
            game.addGameItem(enemy);
         
            
            enemy.velocityX = -5;
            enemy.rotationalVelocity = 10;
         
            
         
               // be careful not to call a function Inside its own definition! 
            // createEnemy(400,groundY-10);
            // createEnemy(800,groundY-100);
            // createEnemy(1200,groundY-500); 
              
            var rewardSize = 25;
            var reward = game.createObstacle(rewardSize, 0);
            reward = draw.bitmap('img/10.png');
            reward.velocityX = -1; 
         
            
            enemy.onPlayerCollision = function() {
                // onProjectileCollision('Halle has hit an enemy');
                game.changeIntegrity(-10);
                console.log('The enemy has hit Halle');
                enemy.fadeOut();
            };
        
            // game.increaseScore = function() {
              game.increaseScore(100);  
            // };
         
         }
        
            createEnemy(400,groundY-10);
            createEnemy(800,groundY-100);
            createEnemy(1200,groundY-500);
        
        
        
    };        
})(window);
