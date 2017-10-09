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
  });
});
