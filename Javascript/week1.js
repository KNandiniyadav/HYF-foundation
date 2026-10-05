let yearOfBirth = 1980;
let futureYear = 2047;
let age = futureYear - yearOfBirth;
console.log("You will be " + age + " years old in " + futureYear);

let dogYearOfBirth = 2000;
let dogYearFuture = 2027;
let dogYears = dogYearFuture - dogYearOfBirth;
let humanYears = dogYears / 7;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(
    "your dog will be " + dogYears + " dog years old in " + dogYearFuture,
  );
} else {
  console.log(
    "your dog will be " + humanYears + " human years old in " + dogYearFuture,
  );
}

let width = 8;
let height = 10;
let depth = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = width * height * depth;
let housePrice = 2500000;
let estimatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (estimatedPrice > housePrice) {
  console.log("Peter is paying more");
} else if (estimatedPrice === housePrice) {
  console.log("Peter is paying right price");
} else {
  console.log("Peter is paying less");
}
width = 5;
height = 8;
depth = 11;
gardenSizeInM2 = 70;
volumeInMeters = width * height * depth;
housePrice = 1000000;
estimatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (estimatedPrice > housePrice) {
  console.log("Julia is paying more");
} else if (estimatedPrice === housePrice) {
  console.log("Julia is paying right price");
} else {
  console.log("Julia is paying less");
}

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
let startUpName = firstWords[2] + secondWords[3];
let startupLen = startUpName.length;
console.log(
  "The startup : " +
    startUpName +
    "," +
    " It contains " +
    startupLen +
    " characters",
);
let randomNumber = Math.floor(Math.random() * 10);
startUpName = firstWords[randomNumber] + secondWords[randomNumber];
startupLen = startUpName.length;
console.log(
  "The startup : " +
    startUpName +
    "," +
    " It contains " +
    startupLen +
    " characters",
);
