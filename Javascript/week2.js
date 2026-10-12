//----Flight Booking fullname function------
function getFullName(firstName, surName, useFormalName) {
  if (useFormalName) {
    return `Lord ${firstName} ${surName}`;
  } else {
    return `${firstName} ${surName}`;
  }
}

console.log(getFullName("Robin", "Hood", true));

//-----------Event Application-----
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekDay(num) {
  const currentdate = new Date();
  const currentday = currentdate.getDay();
  const futureday = (currentday + num) % 7;
  return days[futureday];
}

console.log(getEventWeekDay(3));

//----------Weather wear------

function knowWhatToWear(temp) {
  if (temp >= 25) {
    return `light cotton clothes`;
  } else if (temp >= 18) {
    return `T-shirt and shorts`;
  } else if (temp >= 10) {
    return `Sweater and trousers`;
  } else {
    return `warm jacket`;
  }
}
console.log(knowWhatToWear(10.5));

//---------Student manager----
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "Queen") {
    class07Students.push(studentName);
    return class07Students;
  } else if (studentName == "") {
    return `Enter valid student name`;
  } else if (class07Students.includes(studentName)) {
    return ` student ${studentName} is already in class`;
  } else if (class07Students.length < 6) {
    class07Students.push(studentName);
    return class07Students;
  } else {
    return "Cannot add more students to the class";
  }
}
console.log(addStudentToClass(""));
console.log(addStudentToClass("Nandini"));
console.log(addStudentToClass("Bena"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Arjun"));
console.log(addStudentToClass("Nish"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Nandini"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass());

function getNumberOfStudents() {
  const num = class07Students.length;
  return num;
}

console.log(getNumberOfStudents());

//-----------Candy helper---
const candyTable = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  Chewinggum: 0.03,
};
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
  const value = candyTable[candyType];
  const price = value * weight;
  boughtCandyPrices.push(price);
  return boughtCandyPrices;
}
console.log(addCandy("Toffee", 3));
console.log(addCandy("Sweet", 30));

const amountToSpend = Math.random() * 100;

let totalPrice = 0;
function canBuyMoreCandy() {
  for (i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = totalPrice + boughtCandyPrices[i];
  }
  console.log(totalPrice);

  if (totalPrice >= amountToSpend) {
    return `Enough candy for you`;
  } else {
    return `You can buy more, please do!`;
  }
}
console.log(canBuyMoreCandy());
