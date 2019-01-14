function getQuote (){
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  
    // API Calling for quotes
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
    $.getJSON(url, function(data){
      $("#quote").html('"' + data.quoteText + '"');
      $("#author").html('- ' + data.quoteAuthor);
          });
 var color = Math.floor(Math.random() * colors.length);   
    console.log(color);
  $( "#quote,#author,#titleColor,.btn" ).animate({
    color: colors[color]
  },1000);
  $( ".box" ).animate({
    borderColor: colors[color]
  },1000);
    $( "html,body" ).animate({
      backgroundColor: colors[color],
      color: colors[color]
    },1000);
  };


$(document).ready(function(){
  $("#newQuote").on("click", function(){
    getQuote();
  }); 
});