(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Card = require('./../js/card.js').cardModule;
var Array = require('./../js/card.js').arrayModule;
var selected_card = 0;
var last_card = 0;
var tries = 0;
$(document).ready(function() {
  links = []
  for (var i = 0; i < 12; i++) {
    if(i < 6) {
      links.push(new Card(`I${i + 1}.png`));
    } else {
      links.push(new Card(`I${(i % 6) +1}.png`));
    }
  };
  link = links.shuffle()
  var x = 0;
  var result = "";
  for(let i = 0; i < 3; i++) {
    result += "<div class='row'>";
    for(let j = 0; j < 4; j++) {
    result += `<div class='col-lg-3 col-sm-12'><div class='card bg-success text-white'><img class='hidden' id='${x}' src='${links[x].link}'></div></div>`;
      x += 1;
    };
    result += "</div>";
  };
  $("#cards").append(result);


  $('.card').click(function(e) {
    // if (links[$(e.currentTarget).children().attr('id')].locked === false && links[$(e.currentTarget).children().attr('id')].matched === false) {
    //   if (tries === 2){
    //     if (second_card.matched === false) {
    //       $(`#${links.indexOf(first_card)}`).hide();
    //       $(`#${links.indexOf(second_card)}`).hide();
    //     }
    //     tries = 0;
    //   }
    //
    //   if (tries === 0) {
    //     first_card = links[$(e.currentTarget).children().attr('id')];
    //     first_card.locked = true;
    //     $(`#${links.indexOf(first_card)}`).show();
    //     tries += 1; // Ensures a match check next click
    //   } else if (tries === 1) {
    //     second_card = links[$(e.currentTarget).children().attr('id')];
    //     $(`#${links.indexOf(second_card)}`).show();
    //     second_card.locked = true;
    //     if (first_card.link === second_card.link) {
    //       first_card.matched = true;
    //       second_card.matched = true;
    //     } else {
    //       first_card.locked = false;
    //       second_card.locked = false;
    //     }
    //     tries += 1; // Ensures a card "hide" next check if not true
    //   }
    // }
    console.log(tries);
  if (tries === 2){
    if (second_card.matched === false) {
      $(`#${links.indexOf(first_card)}`).hide();
      $(`#${links.indexOf(second_card)}`).hide();
    }
    tries = 0;
  }
  if (links[$(e.currentTarget).children().attr('id')].locked === false && links[$(e.currentTarget).children().attr('id')].matched === false) {
    if (tries === 0) {
      first_card = links[$(e.currentTarget).children().attr('id')];
      first_card.locked = true;
      $(`#${links.indexOf(first_card)}`).show();
    } else {
      second_card = links[$(e.currentTarget).children().attr('id')];
      $(`#${links.indexOf(second_card)}`).show();
      second_card.locked = true;
      if (first_card.link === second_card.link) {
        first_card.matched = true;
        second_card.matched = true;
      } else {
        first_card.locked = false;
        second_card.locked = false;
      }
    }
    tries += 1;
  }






    // if(tries === 0){
    //   if (selected_card.locked === false || selected_card.matched === false) {
    //     $(`#${links.indexOf(selected_card)}`).hide();
    //     $(`#${links.indexOf(last_card)}`).hide();
    //   }
    //   selected_card = links[$(e.currentTarget).children().attr('id')];
    //   if (selected_card.matched === false && selected_card.locked === false){
    //     $(`#${links.indexOf(selected_card)}`).show();
    //     selected_card.locked = true
    //
    //   }
    // }
    // else if (selected_card.link === last_card.link) {
    //   console.log("a match. good work.");
    //   selected_card.matched = true;
    //   last_card.matched = true;
    //   $(`#${links.indexOf(selected_card)}`).show();
    //
    // }else {
    //   $(`#${links.indexOf(selected_card)}`).show();
    //
    // }
    //







    //
    // y = $(e.currentTarget).children().attr('id');
    // // console.log(y);
    // if (last_card.locked === false && last_card.matched === false) {
    //   $(`#${links.indexOf(selected_card)}`).hide();
    //   $(`#${links.indexOf(last_card)}`).hide();
    // }
    // last_card = selected_card;
    // selected_card = links[y];
    // $(`#${links.indexOf(selected_card)}`).show();
    // selected_card.locked = true;
    // console.log(selected_card.locked);
    //
    // // console.log(selected_card.link);
    //
    // if (tries === 1 && selected_card.matched === false) {
    //   if (selected_card.link === last_card.link) {
    //     console.log("a match. good work.");
    //     selected_card.matched = true;
    //     last_card.matched = true;
    //   } else {
    //     selected_card.locked = false;
    //     last_card.locked = false;
    //   }
    //   tries = 0;
    // } else if(selected_card.matched === false) {
    //   last_card.locked = "anything but false";
    //   tries += 1;
    // } else {
    //   alert("Already matched");
    // }


  //   if(!selected_card.locked) {
  //
  //     $(e.currentTarget).children().toggle();
  //     selected_card.locked = true;
  //
  //   };
  //
  //   if(tries === 1) {
  //     if(selected_card.link === last_card.link) {
  //     }else{
  //       alert("merp")
  //       selected_card.locked = false;
  //       last_card.locked = false;
  //     };
  //     tries = 0;
  //   } else {
  //     tries += 1;
  //   }
  //
  //   if(!selected_card.locked && !last_card.locked) {
  //     $(`#${links.indexOf(selected_card)}`).toggle();
  //
  //   }
  //   last_card = selected_card;
  });
});

},{"./../js/card.js":1}]},{},[2]);
