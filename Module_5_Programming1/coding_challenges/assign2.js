//https://codepen.io/miguelacruz/pen/mdmzgBO

const grade = prompt("Enter the numerical grade (0-100):");

switch (true) {
  case grade > 95:
      console.log("Your letter grade is: A+");
    break;
  //Changed 90 to 94 since any input between 90 and 95 would yield a grade of F.
  case grade > 88 && grade <= 94:
      console.log("Your letter grade is: A");
    break;
  case grade > 84 && grade <= 88:
      console.log("Your letter grade is: B+");
    break;
  case grade > 76 && grade <= 84:
      console.log("Your letter grade is: C+");
    break;
  case grade > 70 && grade <= 76:
      console.log("Your letter grade is: C");
    break;
  case grade > 67 && grade <= 70:
      console.log("Your letter grade is: D+");
    break;
  case grade > 64 && grade <= 67:
      console.log("Your letter grade is: D");
    break;
  default:
      console.log("Your letter grade is: F");
}
