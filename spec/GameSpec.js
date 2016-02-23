describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Player 1', function(){

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

});
