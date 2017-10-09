function Card(link) {
  this.link = link;
  this.matched = false;
  this.locked = false;
}

Card.prototype.match = function(card) {
  if(this.link === card.link) {
    return true;
  }else{
    return false;
  }
}

Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}
exports.cardModule = Card;
exports.arrayModule = Array;
