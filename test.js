$(document).ready(function() {
var sentences = [
"Ich hätte lieber den Namen... ",
"Ich bin... ",
"Ich mag an mir... ",
"Ich mag nicht an mir... ",
"Ich hasse... ",
"Ich liebe... ",
"Am liebsten... ",
"Ich trinke... ",
"Ich lache... ",
"Meine Mutter würde sagen... ",
"Mein Vater würde sagen... ",
"Meine Schuhe sind... ",
"Ich bin verrückt nach... ",
"Für mich ist das wichtigste... ",
"Ich würde gerne mal... ",
"Meine peinlichste Peinlichkeit war... ",
"Zum Dinner würde ich diese Person einladen... ",
"Ich ärgere mich am meisten... ",
"Meine außergewöhnlichste Körperstelle... ",
"Seltsamerweise mache ich nie... ",
"Gestern hab ich...",
"Das schlimmste, dass ich je getan habe... ",
"Wäre ich Gott, dann... ",
"Wenn ich fernsehe... ",
"Kinder sind manchmal... ",
"Wenn ich eine Sache ändern könnte... ",
"Mein Lieblingsbuch... ",
"Wenn ich etwas lernen will... ",
"Wenn ich meine Ruhe haben will... ",
"Ich habe Angst vor... ",
"Mein erster Computer... ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! ",
"Du darfst eine Frage stellen! "
];

var players = ["<img src='fynn-head.png'></img>", "<img src='Luke_Skywalker.png'></img>", "<img src='mo-head.png'></img>"];
var typeInterval;
var iterator = 0;
var playerIt = 0;
var isTyping = false;

  $("button").click(function main() {
//    sentences[Math.floor(Math.random()* sentences.length)]);
      if(sentences.length > 0) {
        if(!isTyping) {
          var random = Math.floor(Math.random()*sentences.length);
          var sentence = sentences[random];
          sentences.splice(random,1);
          console.log("Gespliced an Stelle: " + random);
          console.log("Länge: " + sentences.length);
          var chars = sentence.split("");

          var text = "";
          isTyping = true;

          function writeText() {
            var store;
            $("#question").html(text + "<span class='cursor'>]</span>");
            $(".cursor").blink(100);
            text = text + chars[iterator];
            iterator++;
            if(iterator == chars.length+1) {
              iterator = 0;
              console.log("Satz zuende");
              clearInterval(typeInterval);
              isTyping = false;
            }
          }
          typeInterval = setInterval(writeText, 20);
          writeText();
          $("#player").html(players[playerIt]);
          playerIt = (playerIt + 1) % 3;
        } else {
          console.log(beschäftigt);
        }
      } else {
        $("#question").html("Schade. Das wars mit dem Interview..." + "<span class='cursor'>[</span>");
      }
  });
  $(".cursor").blink(100);
});
