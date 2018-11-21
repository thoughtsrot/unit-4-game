
let chakraArr = ["Muladhara", "Svadhishthana", "Manipura", "Anahata", "Vishuddha", "Ajna", "Sahasrara"];

let unblockedArr = [];

let crystalValues = [];

let targetNumber = getRandInt(50, 100);

let crystalCount = 0;

// let randChakra = chakraArr[getRandInt(0, 6)];

let $unblocked = 0;
let $blocked = 0;


function getRandInt(min, max) {

  return Math.floor(Math.random() * (max - min) + min)

}

function newGame() {

  targetNumber = getRandInt(50, 100);

  $("#target-number").text(targetNumber);

  crystalCount = 0;

  crystalValues = [];

  $("#crystals").empty();

  for (i = 0; i < 4; i++) {

    let randValue = getRandInt(5, 20);

    crystalValues.push(randValue);

  }

  for (i = 0; i < crystalValues.length; i++) {

    let crystalImage = $("<img>");

    crystalImage.addClass("crystal-image m-1");

    crystalImage.attr("src", "assets/images/rock-crystal-1603480_1920.jpg");

    crystalImage.attr("data-crystalval", crystalValues[i]);

    $("#crystals").append(crystalImage);

  }

  $(".crystal-image").on("click", crystalClick);

}

function crystalClick() {

  let currentValue = ($(this).data("crystalval"));

  currentValue = parseInt(currentValue);

  crystalCount += currentValue;

  if ($unblocked === 7) {

    alert("Congratulations! You have unblocked all 7 chakras! Go forth and be peaceful.")

  }

  else if ($blocked === 7) {

    alert("Oh no! All of your chakras are blocked! Take a deep breath and start again.");

    location.reload();

  }

  else if (crystalCount == targetNumber) {

    currentChakra = chakraArr[0];

    alert(`Boom Chakra Laka! You've just healed your ${currentChakra} chakra. Way to stay centered!`)

    $unblocked++;

    document.getElementById("unblocked-chakra").innerHTML = $unblocked;

    if ($blocked > 0) {

      $blocked--;
      document.getElementById("blocked-chakra").innerHTML = $blocked;

    }

    unblockedArr.push(currentChakra);

    console.log(unblockedArr);

    chakraArr.splice(0, 1);

    newGame()

  }

  else if (crystalCount < targetNumber) {

    alert(`Crystal total is now ${crystalCount}. Keep focusing your positive energy!`)

  } else if (crystalCount > targetNumber) {

    alert(`Sorry! Your chakra is still blocked. Try again!`);

    $blocked++;
    document.getElementById("blocked-chakra").innerHTML = $blocked;




    if ($unblocked > 0) {

      $unblocked--;
      document.getElementById("unblocked-chakra").innerHTML = $unblocked;

      prevChakra = unblockedArr[0];

      chakraArr.push(prevChakra);

      unblockedArr.splice(0, 1);

    }

    console.log(chakraArr);

    newGame()

  }

}

newGame();




