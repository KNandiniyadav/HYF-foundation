//-----------------Vowel count------------
function getCount(str) {
  const lowerCaseStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (
      lowerCaseStr[i] === "a" ||
      lowerCaseStr[i] === "e" ||
      lowerCaseStr[i] === "i" ||
      lowerCaseStr[i] === "o" ||
      lowerCaseStr[i] === "u"
    ) {
      count += 1;
    }
  }
  return count;
}
console.log(getCount("NAndinI"));

//----------Square Digigits---------------

function squareDigits(num) {
  let squareNum = "";
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    squareNum += (str[i] * str[i]).toString();
  }
  return squareNum;
}
console.log(squareDigits(949));

//---------finding min and max number---------

function highAndLow(numbers) {
  const numArray = numbers.split(" ");
  let min = Number(numArray[0]);
  let max = Number(numArray[0]);
  for (let i = 0; i < numArray.length; i++) {
    if (min > Number(numArray[i])) {
      min = Number(numArray[i]);
    }
    if (max < Number(numArray[i])) {
      max = Number(numArray[i]);
    }
  }
  return `min : ${min}, max : ${max}`;
}

console.log(highAndLow("11 2 3 4 5 10 12"));

//-------------Voice Assistant----------
let userName = "";
const todo = [];
function getReply(command) {
  const text = command.toLowerCase();
  const wordsCommand = text.split(" ");
  if (text.includes("hello my name")) {
    const personName = wordsCommand[wordsCommand.length - 1];
    const firstLetter = personName.charAt(0);
    const remianingLetters = personName.slice(1);
    const firstLetterCap = firstLetter.toUpperCase();
    userName = firstLetterCap + remianingLetters;
    return `Nice to meet you ${userName}`;
  }
  if (text.includes("what is my name")) {
    if (userName === "") {
      return `no name added`;
    }
    return userName;
  }
  if (text.includes("add") && text.includes("todo")) {
    let addTodo = text.replace("add", "");
    addTodo = addTodo.replace("to my todo", "");
    addTodo = addTodo.trim();
    todo.push(addTodo);
    return `${addTodo} added to your todo`;
  }
  if (text.includes("remove") && text.includes("todo")) {
    let removeTodo = text.replace("remove", "");
    removeTodo = removeTodo.replace("from my todo", "");
    removeTodo = removeTodo.trim();
    const indexOfRemoveTodo = todo.indexOf(removeTodo);
    if (indexOfRemoveTodo !== -1) {
      todo.splice(indexOfRemoveTodo, 1);
      return `Removed ${removeTodo} from your todo`;
    }
    if (indexOfRemoveTodo === -1) {
      return `item not found`;
    }
  }

  if (text.includes("what is my todo")) {
    return `You have ${todo.length} todos ${todo.join(" and ")}`;
  }
  if (text.includes("what day is it")) {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} of ${month} ${year}`;
  }
  if (
    text.includes("what is") &&
    (wordsCommand[3] === "+" ||
      wordsCommand[3] === "-" ||
      wordsCommand[3] === "*" ||
      wordsCommand[3] === "/")
  ) {
    const num1 = Number(wordsCommand[2]);
    const operator = wordsCommand[3];
    const num2 = Number(wordsCommand[4]);
    if (operator === "+") {
      return num1 + num2;
    }
    if (operator === "-") {
      return num1 - num2;
    }
    if (operator === "*") {
      return num1 * num2;
    }
    if (operator === "/") {
      return num1 / num2;
    }
  }
  if (text.includes("set timer")) {
    const time = Number(wordsCommand[3]);
    const timeInMilliSeconds = time * 60 * 1000;
    setTimeout(() => {
      console.log("Timer done!");
    }, timeInMilliSeconds);
    return `Timer started....`;
  }
  if (text.includes("what is the time")) {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    return `Time is ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
  }
  if (text.includes("odd or even")) {
    const digit = Number(wordsCommand[1]);
    if (Number.isNaN(digit)) {
      return `Not a Number`;
    } else if (!Number.isInteger(digit)) {
      return `Does not accept decimals`;
    } else if (digit % 2 === 0) {
      return `even`;
    } else if (digit % 2 !== 0) {
      return `odd`;
    }
  }
}

console.log(getReply("Hello my name is Nandini"));
console.log(getReply("What is my name"));
console.log(getReply("add fishing to my todo"));
console.log(getReply("add shopping to my todo"));
console.log(getReply("add singing in shower to my todo"));
console.log(getReply("remove fishing from my todo"));
console.log(getReply("what is my todo"));
console.log(getReply("what day is it"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("set timer for 1 minutes"));
console.log(getReply("what is the time"));
console.log(getReply("is 10 odd or even"));
