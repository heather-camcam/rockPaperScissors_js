describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Player 1', function(){

    it("sets p1 username", function(){
      game.setP1Name('Heather');
      expect(game.p1Name).toEqual('Heather');
    });

    it("allows p1 to select a weapon of choice", function(){
      game.p1SelectWeapon('rock');
      expect(game.p1Weapon).toEqual('rock');
    });

    it("throws an error if p1 selects a weapon other than R, P or S", function(){
      expect(function(){game.p1SelectWeapon('lizard');}).toThrow ('not a valid weapon choice, please choose from either rock, paper or scissors')
    });

  });

  describe('Computer', function(){

    it("selects a random weapon from the weaponChoices array", function(){
      spyOn(game, 'computerSelectWeapon').and.returnValue(game.computerWeapon = 'scissors');
      expect(game.computerWeapon).toEqual('scissors');
    });

  });

  describe('Play game', function(){

    it("returns 'p1 wins!' if p1 beats computer", function(){
      game.p1SelectWeapon('rock');
      spyOn(game, 'computerSelectWeapon').and.returnValue(game.computerWeapon = 'scissors');
      expect(game.playGame()).toEqual('p1 wins!')
    });

    it("returns 'computer wins!' if computer beats p1", function(){
      game.p1SelectWeapon('rock');
      spyOn(game, 'computerSelectWeapon').and.returnValue(game.computerWeapon = 'paper');
      expect(game.playGame()).toEqual('computer wins!')
    });

    it("returns 'it's a draw!' if computer and p1 select the same weapon", function(){
      game.p1SelectWeapon('paper');
      spyOn(game, 'computerSelectWeapon').and.returnValue(game.computerWeapon = 'paper');
      expect(game.playGame()).toEqual('it\'s a draw!')
    });

  });

});
