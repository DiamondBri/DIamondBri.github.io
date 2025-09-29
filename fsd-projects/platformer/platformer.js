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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(120,700,150,20,"pink");
createPlatform(250,640,130,20,"black");
createPlatform(350,520,100,20,"pink");
createPlatform(420,400,100,20,"black");
createPlatform(500,570,150,20,"pink");
createPlatform(400,200,120,20,"black");
createPlatform(550, 150, 100, 20, "gray");
createPlatform(550,340,130,20,"black");
createPlatform(720,220,100,20,"pink");
createPlatform(750,600,100,20,"black");
createPlatform(820,450,150,20,"pink");
createPlatform(980,540,120,20,"black");
createPlatform(1000,700, 100, 20, "gray");


    // TODO 3 - Create Collectables
createCollectable("steve", 450, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("grace", 300, 100,0.2);


    
    // TODO 4 - Create Cannons
createCannon("right",450,900);
createCannon("right",150,900);
createCannon("top",250,750);
createCannon("top",900,900);
 
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
