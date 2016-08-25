// Business Logic

var rose = function () {
  this.dice = 0;
  this.img = "";
}

rose.prototype.roll = function () {
  this.dice = Math.floor((Math.random() * 6) + 1);
};

rose.prototype.total = function () {
  var total = 0;
  if (this.dice === 1) {
    total += 0;
  } else if (this.dice === 2) {
    total += 0;
  } else if (this.dice === 3) {
    total += 2;
  } else if (this.dice === 4) {
    total += 0;
  } else if (this.dice === 5) {
    total += 4;
  } else if (this.dice === 6) {
    total += 0;
  }

  return total;
};

rose.prototype.imgSet = function () {
  if (this.dice === 1) {
    return "1.png";
  } else if (this.dice === 2) {
    return "2.png";
  } else if (this.dice === 3) {
    return "3.png";
  } else if (this.dice === 4) {
    return  "4.png";
  } else if (this.dice === 5) {
    return "5.png";
  } else if (this.dice === 6) {
    return  "6.png";
  }

};

var roseDice = [];

function showImg() {
  $(".remove").remove();
  console.log("INININININININININININ");
  for (var i = 0; i < roseDice.length; i++) {
    $("#dice").html("<div class='col-md-1 remove'><img class='img-responsive' src='img/" + roseDice[i].imgSet() + "' alt='' /></div>");
  }
}

$(document).ready( function() {

  $("#start").click(function () {
    $("#start").hide();
    $("#games").show();
    $("#dice").show();

    var dice = new rose;
    dice.roll();
    roseDice.push(dice);

    showImg();
  });

  $("#guess").submit(function (event) {
    event.preventDefault();

    

  })
});













// User Interface Logic
