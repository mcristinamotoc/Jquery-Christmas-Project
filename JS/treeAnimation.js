// Create two buttons:
// "Add ornament": drop a ornament ball and place it in the tree
// "Move the tree": animation is made that makes the balls fall and is counted as a deleted ball 
// You must keep track of both the balls on the tree and the balls that fall to the ground 

$(document).ready(function() {
    var id = "";
    var n = 1;
    var tree = "tree";

    // This function chooses a random number between a min and a max where the ornaments will be placed
    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    // This function is executed by pressing the "add ornament" button  
    $("#add").click(function() {

        for (n = 1; n <= countBalls; n++) {
            id = "ornament" + n;
        }
        // Identifies the id of the new ball and moves it inside the tree
        var elem = document.getElementById(id);
        $(elem).animate({
            marginLeft: getRandom(15, 120),
            marginTop: getRandom(210, 330),
        }, 500);

    });
    // This function moves the tree, throws the ornaments to the ground and removes them. 
    $("#clear").click(function() {

        id = document.getElementsByClassName("ornament"); // tira los ornaments al suelo
        $(id).animate({
            marginTop: getRandom(340, 360)
        }, 200);
        deleteOrnaments();

        function deleteOrnaments() {
            myVar = setTimeout(deleteBalls, 800);
        }

        function deleteBalls() {
            $(id).remove();
        }
        // Identifies the variable with the id of the tree and shakes it
        var elem = document.getElementById(tree);
        $(elem).animate({
            marginLeft: 50
        }, 150).animate({
            marginLeft: -40
        }, 150).animate({
            marginLeft: 0
        }, 150);

    });


    // These functions call for the increase of the counters

    $("button[id='add']").click(function() {
        countAppear();
    });
    $("button[id='clear']").click(function() {
        countDisappear();
    });

});

//Increase or decrease the counter variable by one. These functions will be called by clicking on the "add decoration" or "moving the tree" button
var countBalls = 1;

function countAppear() {
    countBalls += 1;
}

function countDisappear() {
    countBalls -= 1;
}


//This function adds a value to the "Balls added" section and prints a div in the HTML file with the ornament 

function appear() {

    var ballAdded = "Balls added: " + countBalls;
    var ornament = "<div class='ornament' id='ornament" + countBalls + "'></div>";
    document.getElementById('ballAdded').innerHTML = ballAdded;
    document.getElementById('ornaments').innerHTML += ornament;
}

/* This function adds a value to the "Balls Removed" div each time it is pressed, deletes the value of the added Balls and sets the countBalls variable to 1 for that the following div of ornaments appears */

function disappear() {

    var ballRemoved = "Balls removed: " + (countBalls - 1);
    document.getElementById('ballRemoved').innerHTML = ballRemoved;
    document.getElementsByClassName('ornament').innerHTML += "";
    this.countBalls = 0;
    this.ballAdded = "Balls added: " + this.countBalls;
    document.getElementById('ballAdded').innerHTML = this.ballAdded;
    this.countBalls = 1;
}