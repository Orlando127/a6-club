$(function() {
  //All JS goes within these brackets

  $("#age-submit").click(function(){

    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 21
    if ( age >= 21 ) {
      //if age is greater than 21 show the next question
      $("#neil-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }

  });

  // when you click on the thing with an id of neil-submit do some stuff
  $("#neil-submit").click(function(){
    
    // get the value of the thing with an id of neil-albums
    var neilAlbumsString = $("#neil-albums").val();

    //take the value of neilAlbumsString and convert it to a number so we can evaluate it
    var neilAlbums = parseInt(neilAlbumsString);

    // if the number of neil albums is greater than 5, 
    if ( neilAlbums > 5 ) {
      // do this, show the thing with an id of secret form
      $("#secret-form").show();

      // hid ethe thing with an id of neil form
      $("#neil-form").hide();

    } else {

      // if the number of neil albums isn't greater than 5

      // update the text in the thing with an id of answer to 
      $("#answer").text("scram. clerb is closed");

      //update the src attribute of the thing with id of club-img to this img
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }

  });

  $("#secret-submit").click(function(){
    var secretString = $("#secret").val();
   
    if ( secretString == "drank" ) {
      $("#clerb-form").show();
      $("#secret-form").hide();
    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

  $("#clerb-submit").click(function(){
    var clerbString = $("#clerb").val();
    var clerb = parseInt(clerbString);

    if ( clerb > 6 ) {
      $("#clerb-form").hide();
      $("#answer").text("You're in!");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");

    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

});
