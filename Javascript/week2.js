//----Flight Booking fullname function------
function getFullName(firstName, surName, useFormalName) {
  firstName = firstName.trim();
  surName = surName.trim();
  if (firstName === "" || surName === "") {
    return `Please enter both the names`;
  } else if (useFormalName) {
    return `Lord ${firstName} ${surName}`;
  } else {
    return `${firstName} ${surName}`;
  }
}
const fullName1 = getFullName("Benjamin", "Hues", true);
const fullName2 = getFullName("  Benjamin", "Hues", false);
console.log(fullName1);
console.log(fullName2);

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
function getEventWeekday(num) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const futureDay = (currentDay + num) % 7;
  return days[futureDay];
}

console.log(getEventWeekday(3));

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
  if (studentName == "") {
    return `Enter valid student name`;
  } else if (class07Students.includes(studentName)) {
    return ` Student ${studentName} is already in the class`;
  } else if (class07Students.length < 6 || studentName === "Queen") {
    class07Students.push(studentName);
    return class07Students;
  } else {
    return "Cannot add more students to class 07";
  }
}
console.log(addStudentToClass(""));
console.log(addStudentToClass("Nandini"));
console.log(addStudentToClass("Bena"));
console.log(addStudentToClass("Arjun"));
console.log(addStudentToClass("Nish"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Nandini"));
console.log(addStudentToClass("Dorte"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass());

function getNumberOfStudents() {
  return class07Students.length;
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

function canBuyMoreCandy() {
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = totalPrice + boughtCandyPrices[i];
  }
  if (totalPrice < amountToSpend) {
    return `true`;
  } else {
    return `false`;
  }
}
console.log(boughtCandyPrices);
console.log(amountToSpend);
console.log(canBuyMoreCandy());

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
