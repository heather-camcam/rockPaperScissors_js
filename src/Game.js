function Game() {
  this.p1Weapon = null;
  this.computerWeapon = null;
  this.weaponChoices = ['rock', 'paper', 'scissors'];
}

  Game.prototype.p1SelectWeapon = function(weapon){
    if (this.weaponChoices.indexOf(weapon) > -1){
      this.p1Weapon = weapon;
    }
    else {
      throw 'not a valid weapon choice, please choose from either rock, paper or scissors'
    }
  };

  Game.prototype.computerSelectWeapon = function(){
    this.computerWeapon = this.weaponChoices[Math.floor(Math.random()*this.weaponChoices.length)];
  };
