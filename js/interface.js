$(document).ready(function() {

  var game = new Game();
  $('#vsText').hide();
  $('#selectWeapon').hide();
  $('#play').hide();
  $('#playAgain').hide();

  $('#setP1Name').submit(function(event) {
    event.preventDefault();
    name = $('#p1Name').val();
    game.setP1Name(name);
    $('#Name').text(game.p1Name + " vs. THE COMPUTER");
    $('#setP1Name').hide();
    $('#vsText').show();
    $('#selectWeapon').show();
  });

  $('#selectWeapon').submit(function(event){
    event.preventDefault();
    var weapon = $("#p1Weapon[name=weapon]:checked").val();
    game.p1SelectWeapon(weapon);
    $('#p1WeaponChoice').text("You chose: " + game.p1Weapon);
    $('#play').show();
    $('#selectWeapon').hide();

  });

  $('#play').click(function() {
    game.computerSelectWeapon();
    $('#computerChoice').text("The computer chose: " + game.computerWeapon);
    game.playGame();
    $('#playGame').text(game.playGame());
    $('#playAgain').show();
  });

  $('#playAgain').click(function() {
    location.reload();
  });



});


});
