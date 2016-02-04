var isEven = function(number) {
  if (number % 2 === 0) {
      return true;
  }
  else if (isNaN(number)) {
      return "This is not a number!";
  }
  else {
      return false;
  }

};
