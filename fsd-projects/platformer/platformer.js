$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 600, 20, 290);
createPlatform(300, 700, 50, 50, "red");
createPlatform(600, 550, 50, 70, "purple");
createPlatform(860, 510, 100, 10, "yellow");
createPlatform(730, 310, 50, 50, "orange");
createPlatform(350, 210, 250, 10, "green");
createPlatform(1000, 400, 50, 50, "pink");
createPlatform(800, 130, 50, 50, "blue");
createPlatform(750, 630, 50, 50, "red");
createPlatform(1000, 200, 300, 10, "teal");


    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("max", 200, 170, 0.5, 0.7);
createCollectable("diamond", 1350, 700);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 900);
createCannon("right", 300, 2000);
createCannon("right", 500, 2000);
createCannon("right", 650, 2000);
createCannon("top", 1100, 2000);
createCannon("top", 1300, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
