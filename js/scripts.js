/*This file is for your custom js.  All yours*/
$(function() {
  $("form#text-block").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#usr").val();
    var inputArray = userInput.split(' ');
     $("ul#output").empty();
    inputArray.forEach(function(word,index) {
      var newArray = inputArray.filter(function(a) {
        return(a === word);
      });
      var  count = newArray.length;

      if (count >= 1 && inputArray.indexOf(word) ===  index){
        $("ul#output").append("<li>" + word + ": " + count + "</li>");
      }
    });
  });
});
