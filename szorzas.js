function logger(szoveg) {
  console.log(szoveg);
}
logger("Ez egy szorzás");

function multipleThreeNumbers(x, y, z) {
  let result = x * y * z;
  return result;
}
logger(multipleThreeNumbers(8, 4, 5));


function eletkor (param) {
  console.log(param)

}

eletkor("Te " + ageNumber(2023, 1991) + " éves vagy." );

function ageNumber(date, birth) {
  let age = date - birth;
  return (age);
}

logger(ageNumber(2023, 1991))
