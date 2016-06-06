
//user interface logic
$(function() {
  $("form#text-block").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#usr").val();

    $("ul#output").empty();
    $("ul#output").append(countWords(userInput));
  });
});

//Business logic
var countWords = function (userInput) {
  var inputArray = userInput.split(' ');
  var res ="";
  inputArray.forEach(function(word,index) {
    var newArray = inputArray.filter(function(a) {
      return(a === word);
    });
    var  count = newArray.length;

    if (count >= 1 && inputArray.indexOf(word) ===  index){
      res = res + ("<li>" + word + ": " + count + "</li>");
    }
  });
  return res;
}
