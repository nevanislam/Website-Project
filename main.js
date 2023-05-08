//Nevan's Website Project

// Counting Variables
let numCorrect = 0;
// let final = ((4 - rez1 - rez2 - rez3 - rez4) / 4) * 100;
// let fraction = 4 - rez1 - rez2 - rez3 - rez4;
// Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let question1 = document.getElementById("question-in").value.toLowerCase();
  let question2 = document.getElementById("question-in2").value.toLowerCase();
  let question3 = document.getElementById("question-in3").value.toLowerCase();
  let question4 = +document.getElementById("question-in4").value.toLowerCase();

  let rez1 = 0;
  let rez2 = 0;
  let rez3 = 0;
  let rez4 = 0;
  // If statements
  if (question1 === "2011") {
    document.getElementById("feedback1").innerHTML = "Correct!";
    numCorrect++;
  } else {
    // console.log("first wrong");
    rez1 = 1;
    document.getElementById("feedback1").innerHTML = "It was released in 2011";
  }

  if (question2 === "bugs bunny") {
    document.getElementById("feedback2").innerHTML = "Correct!";
    numCorrect++;
  } else {
    rez2 = 1;
    document.getElementById("feedback2").innerHTML =
      "The main character is bugs bunny";
  }

  if (question3 === "comedy" || question3 === "sitcom") {
    document.getElementById("feedback3").innerHTML = "Correct!";
    numCorrect++;
  } else {
    rez3 = 1;
    document.getElementById("feedback3").innerHTML = "The genre is comedy";
  }

  if ((question4 = "warner bros")) {
    document.getElementById("feedback4").innerHTML = "Correct!";
    numCorrect++;
  } else {
    rez4 = 1;
    document.getElementById("feedback4").innerHTML =
      "Looney Tunes has always been produced by warner bros.";
  }
  // Feedback code
  let final = ((4 - rez1 - rez2 - rez3 - rez4) / 4) * 100;
  let fraction = 4 - rez1 - rez2 - rez3 - rez4;
  if (final > 99) {
    let msg = `wowww ${final}% aka ${fraction}/4 You did great !`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 70) {
    let msg = `NICEEEE you scored ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 50) {
    let msg = `Not bad ${final}% aka ${fraction}/4, you are pretty knowledgeable`;
    document.getElementById("output").innerHTML = msg;
  } else if (final > 25) {
    let msg = `nice, one right is bad but better than nothing I guess ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  } else {
    let msg = `you know nothing good try ${final}% aka ${fraction}/4`;
    document.getElementById("output").innerHTML = msg;
  }
}
