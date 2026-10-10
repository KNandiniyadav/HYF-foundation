// --------Age-ify-----------
const yearOfBirth = 1980;
const futureYear = 2047;
const age = futureYear - yearOfBirth;
console.log(`You will be ${age} years old in ${futureYear}`);

//-------Goodboy-Oldboy----------
const dogYearOfBirth = 2000;
const dogYearFuture = 2027;
const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
const dogYears = dogAgeInHumanYears * 7;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(`your dog will be ${dogYears} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `your dog will be ${dogAgeInHumanYears} human years old in ${dogYearFuture}`,
  );
}

//------Housey-Pricey-----------
let houseWidth = 8;
let houseHeight = 10;
let houseDepth = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = houseWidth * houseHeight * houseDepth;
let housePrice = 2500000;
let estimatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (estimatedPrice > housePrice) {
  console.log("Peter is paying more");
} else if (estimatedPrice === housePrice) {
  console.log("Peter is paying right price");
} else {
  console.log("Peter is paying less");
}
houseWidth = 5;
houseHeight = 8;
houseDepth = 11;
gardenSizeInM2 = 70;
volumeInMeters = houseWidth * houseHeight * houseDepth;
housePrice = 1000000;
estimatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (estimatedPrice > housePrice) {
  console.log("Julia is paying more");
} else if (estimatedPrice === housePrice) {
  console.log("Julia is paying right price");
} else {
  console.log("Julia is paying less");
}

//-------Ez-Namey-----------
const firstWords = [
  "High",
  "One",
  "Legal",
  "Firm",
  "Quantum",
  "hexa",
  "Global",
  "IT",
  "Next",
  "Easy",
];
const secondWords = [
  "Venue",
  "Solutions",
  "Limited",
  "Corporation",
  "Technologies",
  "Bank",
  "Ltd",
  "private",
  "wonders",
  "latest",
];
let randomNumber = Math.floor(Math.random() * 10);

startUpName = firstWords[randomNumber] + " " + secondWords[randomNumber];

startupLen = startUpName.length;

console.log(
  `The startup : ${startUpName}
    It contains ${startupLen} characters`,
);
