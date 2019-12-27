function plus(a,b) {
  return a+b;
}

plus(5,7);

function subtraction(a,b) {
  return a-b;
}

subtraction(9,6);

function multiplication(a,b) {
  return a*b;
}
multiplication(5,6);


function division(a,b) {
  return a/b;
}

division(9,5);

function power(a,b) {
  return a**b;
}

power(2,3);

function root(a,b) {
  return a**(1/b);
}

root(81,3);



function cos (a) {
  return Math.cos(a);
}

cos(5);

function sin (a) {
  return Math.sin(a);
}
sin(5);


function fac(a) {
  return a ? a * fac(a - 1) : 1;
}

fac (6);