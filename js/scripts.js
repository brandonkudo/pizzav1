function Pizza(topping, size) {
  this.pizzaTopping = topping;
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

Pizza.prototype.toppingPrice = function () {
  if (this.pizzaTopping === "Pepperoni") {
    return 1;
  } else if (this.pizzaTopping === "Combo") {
    return 2;
  } else {
    return 0;
  }
}





$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var topping = $("#toppingInput").val();
    var size = $("#sizeInput").val();

    var customPizza = new Pizza(topping, size);

    $(".output").text("Your pizza costs $" + (customPizza.pizzaPrice() + customPizza.toppingPrice()));
    $("#well-output").show();
  });
});
