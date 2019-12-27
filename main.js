function myPlus(a,b) {
  return a+b;
}

myPlus(5,7);

function mySubtraction(a,b) {
  return a-b;
}

mySubtraction(9,6);

function myMultiplication(a,b) {
  return a*b;
}
myMultiplication(5,6);


function myDivision(a,b) {
  return a/b;
}

myDivision(9,5);

function myPower(a,b) {
  return a**b;
}

myPower(2,3);

function myRoot(a,b) {
  return a**(1/b);
}

myRoot(81,3);



function myCos (a) {
  return Math.cos(a);
}

myCos(5);

function mySin (a) {
  return Math.sin(a);
}
mySin(5);


function myFac(a) {
  let b = a;
  for (let i = b-1; i > 0; i--) {
    b = b * i
  }
  return b;
}

myFac (6);