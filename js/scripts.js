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
  for (var i = 0; i < roseDice.length; i++) {
    $("#dice").append("<div class='col-md-1 remove'><img class='img-responsive' src='img/" + roseDice[i].imgSet() + "' alt='' /></div>");
  }
}

// User Interface Logic

$(document).ready( function() {

  $("#start").click(function () {
    $("#startPoint").hide();
    $("#games").show();
    $("#dice").show();

    var howMany = $("#diceMany").val();

    for (var i = 0; i < howMany; i++) {
      var dice = new rose;
      dice.roll();
      roseDice.push(dice);
    }

    showImg();
  });


  $("#guess").click(function () {
    var input = parseInt($("#userInput").val());

    var total = 0;

    for (var i = 0; i < roseDice.length; i++) {
      total += roseDice[i].total();
    }

    if (input === total) {
      alert("you are right");
      $("#games").hide();
      $("#dice").hide();
      $("#reset").show();
    } else {
      alert("NO");
    }
  });

  $("#resetButton").click(function () {
    $("#startPoint").show();
    $("#reset").hide();
  });
});
