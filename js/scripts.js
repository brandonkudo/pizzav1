function Pizza(meat, cheese, size) {
  this.pizzaMeat = meat,
  this.pizzaCheese = cheese;
  this.pizzaSize = size;
}

Pizza.prototype.pizzaPrice = function () {
  if (this.pizzaSize === "Small") {
    return 8;
  } else if (this.pizzaSize === "Medium") {
    return 10;
  } else {
    return 12;
  }
}

Pizza.prototype.meatPrice = function () {
  if (this.pizzaMeat === "Anchovies") {
    return 1;
  } else if (this.pizzaMeat === "Pepperoni" || this.pizzaMeat === "Sausage") {
    return 2;
  } else {
    return 0;
  }
}

Pizza.prototype.cheesePrice = function () {
  if (this.pizzaCheese === "Cheddar") {
    return 1;
  } else if (this.pizzaCheese === "Parmesan" || this.pizzaCheese === "Swiss") {
    return 2;
  } else {
    return 0;
  }
}




$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var meat = $("#meatInput").val();
    var cheese = $("#cheeseInput").val();
    var size = $("#sizeInput").val();

    var customPizza = new Pizza(meat, cheese, size);

    $(".output").text("Your pizza costs $" + (customPizza.pizzaPrice() + customPizza.meatPrice() + customPizza.cheesePrice()));
    $("#well-output").show();
  });
});
