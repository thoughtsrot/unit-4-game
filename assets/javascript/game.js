
const chakraArr = ["Muladhara", "Svadhishthana", "Manipura", "Anahata", "Vishuddha", "Ajna", "Sahasrara"];

let crystalValues = [];

let targetNumber = getRandInt(50, 100);

let crystalCount = 0;

let randChakra = chakraArr[getRandInt(0, 6)];


function getRandInt(min, max) {

  return Math.floor(Math.random() * (max - min) + min)

}

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

$("#target-number").text(targetNumber);

$(".crystal-image").on("click", function () {

  let currentValue = ($(this).data("crystalval"));

  currentValue = parseInt(currentValue);

  console.log(currentValue);

  crystalCount += currentValue;

  console.log(crystalCount)

  if (crystalCount == targetNumber) {

    alert(`Boom Chakra Laka! You've just healed your ${randChakra} chakra. Way to stay positive!`)
  }
  else if (crystalCount < targetNumber) {

    alert(`Crystal total is now ${crystalCount}. Keep focusing your positive energy!`)

  } else if (crystalCount > targetNumber) {

    alert(`Sorry! Your chakra is still blocked. Try again!`);

    location.reload();

  }




})


