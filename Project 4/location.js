// Dave Barnes 
// Location.js
// Project 4 




        // // Global Variables // //

        var score = 0;

        var hasVisitedBefore = false;
        var hasVisitedMillHouseBrewing = false;
        var hasVisitedThePoughkeepsieGrind = false;
        var hasVisitedRossisRosticceria = false;
        var hasVisitedBlueCollarBrewery = false;
        var hasVisitedFiveGuys = false;
        var hasVisitedRiteAid = false;
        var hasVisitedBillyBobsBBQ = false;
        var hasVisitedMobil = false;
        var hasVisitedHydeParkBrewing = false;
        var hasVisitedMizuSushi = false;
        var hasVisitedUndergroundCoffeeAles = false;
        var hasVisitedAromaOsteria = false;

        currentLocation = 0;

        var items = [];
        var inventory = [];

        
       // // Display Message // //

        function updateDisplay(message) {
          document.getElementById("display").value = message;

        }


       // // Initialization // //

        function init(initMessage) {
          var initMessage = "You're in the car with some friends about to go on a food bender!";
          document.getElementById("North_button").disabled = true;
        }


        // Switch Case
        function whereAmI() {
          var desc = "";
          switch (currentLocation) {

              case 0:
                  highStreet();
                  break;
              case 1:
                  millHouse();
                  break;
              case 2:
                  poughkeepsieGrind();
                  break;
              case 3:
                  rossis();
                  break;
              case 4:
                  blueCollar();
                  break;
              case 5:
                  fiveGuys();
                  break;
              case 6:
                  riteAid();
                  break;
              case 7:
                  billyBobs();
                  break;
              case 8:
                  mobil();
                  break;
              case 9:
                  hydePark();
                  break;
              case 10:
                  mizu();
                  break;
              case 11:
                  underground();
                  break;
              case 12:
                  aromaOsteria();
                  break;
              //default: desc = "You cannot go this way"

          }

        }


       // // Score Keeper // //

        function updateScore() {

          if (!hasVisitedBefore) {
              if (currentLocation == 1 && !hasVisitedMillHouseBrewing) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedMillHouseBrewing = true;
              
              } else if (currentLocation == 2 && !hasVisitedThePoughkeepsieGrind) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedThePoughkeepsieGrind = true;

              } else if (currentLocation == 3 && !hasVisitedRossisRosticceria) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedRossisRosticceria = true;

              } else if (currentLocation == 4 && !hasVisitedBlueCollarBrewery) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedBlueCollarBrewery = true;

              } else if (currentLocation == 5 && !hasVisitedFiveGuys) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedFiveGuys = true;

              } else if (currentLocation == 6 && !hasVisitedRiteAid) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedRiteAid = true;

              } else if (currentLocation == 7 && !hasVisitedBillyBobsBBQ) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedBillyBobsBBQ = true;

              } else if (currentLocation == 8 && !hasVisitedMobil) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedMobil = true;

              } else if (currentLocation == 9 && !hasVisitedHydeParkBrewing) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedHydeParkBrewing = true;

              } else if (currentLocation == 10 && !hasVisitedMizuSushi) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedMizuSushi = true;

              } else if (currentLocation == 11 && !hasVisitedUndergroundCoffeeAles) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedUndergroundCoffeeAles = true;

              } else if (currentLocation == 12 && !hasVisitedAromaOsteria) {
                  score += 5;
                  document.getElementById("Score").value = "Score: " + score;
                  hasVisitedAromaOsteria = true;

              }
          }

        }


        
       // // Locations // //


        // High Street
        function highStreet() {

            var message = "You're back at High Street. Where to next?";
            updateDisplay(message);   

        }


        // Mill House Brewing
        function millHouse() {

            var message = "Sink your teeth into a French cheesteak au jus.";
            updateDisplay(message);   

            updateScore();
                  
        }


        // The Poughkeepsie Grind
        function poughkeepsieGrind() {

            var message = "Congratulations! Eat some chicken and waffles at The Poughkeepsie Grind.";
            updateDisplay(message);   

            updateScore();
                  
        }


        // Rossi's Rosticceria
        function rossis() {

            var message = "Prosciutto, mozz, chicken cutlet, and balsamic reduction at Rossi's. Not bad!";
            updateDisplay(message);

            updateScore();

        }


        // Blue Collar Brewery
        function blueCollar() {

            var message = "Order handmade chips with crumbled bleu cheese and a balsamic glaze.";
            updateDisplay(message);   

            updateScore();

        }


        // Five Guys
        function fiveGuys() {

            var message = "Chow down on a BLT and cheese dog at Five Guys.";
            updateDisplay(message);

            updateScore();
                  
        }


        // Rite Aid
        function riteAid() {

            var message = "Don't forget to buy Tums for later on!!!";
            updateDisplay(message);   

            updateScore();

        }


        // Billy Bob's BBQ
        function billyBobs() {

            var message = "Welcome to Billy Bob's BBQ!";
            updateDisplay(message);   

            updateScore();

        }


        // Mobil
        function mobil() {

            var message = "Fuel up if you need to.";
            updateDisplay(message);   

            updateScore();

        }       


        // Hyde Park Brewing Company
        function hydePark() {

            var message = "You can't go wrong with kielbasa, knockwurst, bratwurst and a brew.";
            updateDisplay(message);   

            updateScore();

        }


        // Mizu Sushi
        function mizu() {

            var message = "Dig your chopsticks into some sushi at Mizu.";
            updateDisplay(message);

            updateScore();

        }


        // Underground Coffee & Ales
        function underground() {

            var message = "Welcome to Underground Coffee & Ales!";
            updateDisplay(message);   

            updateScore();

        }


        // Aroma Osteria
        function aromaOsteria() {

            var message = "Welcome to Aroma Osteria.";
            updateDisplay(message);   

            updateScore();

        }



       // // Directional and Input Buttons // //



        // North
        function btnNorth_click() {

          if (currentLocation == 1) {          
              currentLocation = 0;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = false;
                       

          } else if (currentLocation == 2) {
              currentLocation = 6;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;
              

          } else if (currentLocation == 3) {
              currentLocation = 2;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 5) {
              currentLocation = 3;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = false;

          } else if (currentLocation == 6) {
              currentLocation = 8;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 8) {
              currentLocation = 9;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 9) {
              currentLocation = 10;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 12) {
              currentLocation = 5;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          }

        }



        // East 
        function btnEast_click() {

          if (currentLocation == 0) {            
              currentLocation = 4;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = false;
                       

          } else if (currentLocation == 1) {
              currentLocation = 7;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = false;
              

          } else if (currentLocation == 2) {
              currentLocation = 1;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = false;

          } else if (currentLocation == 6) {
              currentLocation = 0;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = false;

          } else if (currentLocation == 11) {
              currentLocation = 3;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = false;

          }

        }



        // South 
        function btnSouth_click() {

          if (currentLocation == 0) {
              currentLocation = 1;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = false;
                       

          } else if (currentLocation == 2) {
              currentLocation = 3;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = false;
              

          } else if (currentLocation == 3) {
              currentLocation = 5;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 5) {
              currentLocation = 12;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 6) {
              currentLocation = 2;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 8) {
              currentLocation = 6;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 9) {
              currentLocation = 8;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 10) {
              currentLocation = 9;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = true;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;

          }

        }



        // West 
        function btnWest_click() {
          

          if (currentLocation == 0) {
              currentLocation = 6;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;
                       

          } else if (currentLocation == 1) {
              currentLocation = 2;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = true;
              
          } else if (currentLocation == 3) {
              currentLocation = 11;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = true;

          } else if (currentLocation == 4) {
              currentLocation = 0;
              whereAmI();
              document.getElementById("North_button").disabled = true;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = false;
              document.getElementById("West_button").disabled = false;

          } else if (currentLocation == 7) {
              currentLocation = 1;
              whereAmI();
              document.getElementById("North_button").disabled = false;
              document.getElementById("East_button").disabled = false;
              document.getElementById("South_button").disabled = true;
              document.getElementById("West_button").disabled = false;

          }

        }



        // Go
        function btnGo_click() {

          var command = document.getElementById("Command").value;
          command = command.toLowerCase();
          var helpMessage = "Click the directional buttons or enter commands to move about the map and discover the eclectic tastes of the Hudson Valley... Valid commands are: N, n, E, e, S, s, W, w.";
          var errorMessage = "Invalid command... Valid commands are: N, n, E, e, S, s, W, w.";

                if (command === "n") {
                    btnNorth_click();

                } else if (command === "e") {
                    btnEast_click();

                } else if (command === "s") {
                    btnSouth_click();

                } else if (command === "w") {
                    btnWest_click();

                } else if (command === "help") {
                        updateDisplay(helpMessage).str;

                } else {
                        updateDisplay(errorMessage).str;

                }

            whereAmI();

          }






