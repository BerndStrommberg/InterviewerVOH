// var $sentences = [
// "Ich hätte lieber den Namen...",
// "Ich bin...",
// "Ich mag an mir...",
// "Ich mag nicht an mir...",
// "Ich hasse...",
// "Ich liebe...",
// "Am liebsten...",
// "Ich trinke...",
// "Ich lache...",
// "Meine Mutter würde sagen...",
// "Mein Vater würde sagen...",
// "Meine Schuhe sind...",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!",
// "Du darfst eine Frage stellen!"
// ];
//
// var iterator = 0;
// var players = ["<img src='fynn-head.png'></img>", "<img src='mo-head.png'></img>", "<img src='Luke_Skywalker.png'</img>"];
$("button").click(function() {
  var $questiontext =  "Hallllllooooooooo";
  $("#question").typedText($questiontext, "slow");
});
//
// function findAction() {
//   	console.log('Hallo')
//



  // if (sentences.length > 0)
  // {
  //   console.log("Länge: " + sentences.length);
  //   var random = Math.floor(Math.random()* sentences.length);
  //   console.log("Zufallswert: " + random);
  //   console.log("Typ: " + typeof sentences[random]);
  //   //document.getElementById("question").innerHTML = sentences[random];
  //   $('#question').typedtext(sentences[random], "fast");
  //
  //
  //   sentences.splice(random, 1);
  //
  // }
  // else
  // {
  //   document.getElementById("question").innerHTML = "Uuups. Da sind uns wohl die Fragen ausgegangen!";
  // }
// }

function changePlayer() {
  document.getElementById('player').innerHTML = players[iterator];
  iterator = (iterator + 1) % 3;
}
