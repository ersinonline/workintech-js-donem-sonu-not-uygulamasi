let vize = 50;
let final = 100;
let donemNotu = vize * 0.3 + final * 0.7;

if (donemNotu >= 90 && 100 >= donemNotu) {
  harfNotu = 'A';
} else if (donemNotu >= 80 && 89 >= donemNotu) {
  harfNotu = 'B';
} else if (donemNotu >= 70 && 79 >= donemNotu) {
  harfNotu = 'C';
} else if (donemNotu >= 60 && 69 >= donemNotu) {
  harfNotu = 'D';
} else if (donemNotu >= 50 && 59 >= donemNotu) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}

console.log('Dönem sonu notu: ' + donemNotu);
console.log('Harf notu: ' + harfNotu);
