$(document).ready(function() {

  var game = new Game();

  $('#setP1Name').submit(function(event) {
    event.preventDefault();
    var name = $('#p1Name').val();
    game.setP1Name(name);
    $('#Name').text(game.p1Name);
  });

});
