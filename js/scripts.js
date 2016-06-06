/*This file is for your custom js.  All yours*/
$(function() {
  $("form#text-block").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#usr").val();
    var inputArray = userInput.split(' ');
    // alert (inputArray);
    inputArray.forEach(function(word) {
      var newArray = inputArray.filter(function(a) {
        return(a === word);
      });
      console.log(newArray);
      $("ul#output").append("<li>" + word + ": " + newArray.length + "</li>")
    });
  });
});
