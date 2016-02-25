$(document).ready(function() {

  var game = new Game();



  $('#setP1Name').submit(function(event) {
    event.preventDefault();
    var name = $('#p1Name').val();
    game.setP1Name(name);
    $('#Name').text(game.p1Name + " vs. THE COMPUTER");
  });

  $('#selectWeapon').submit(function(event){
    event.preventDefault();
    var weapon = $("#p1Weapon[name=weapon]:checked").val();
    game.p1SelectWeapon(weapon);
    $('#p1WeaponChoice').text("you chose: " + game.p1Weapon);
  });

  $('#play').click(function() {
    game.computerSelectWeapon();
    $('#computerChoice').text("the computuer chose: " + game.computerWeapon);
    game.playGame();
    $('#playGame').text(game.playGame());
  });


});
