function checkDriverAge(driverAge) {
  var age = Number(driverAge);
  if (age < 18) {
    return "Too young";
  }
  if (age === 18) {
    return "have a nice first go";
  }
  if (age > 18) {
    return " go hard or go home";
  }
}

checkDriverAge();

var checkDriverAge2 = function() {
  var age = Number(prompt("How old are you?"));

  if (age < 18) {
    return "Too young";
  }
  if (age === 18) {
    return "have a nice first go";
  }
  if (age > 18) {
    return " go hard or go home";
  }
};

