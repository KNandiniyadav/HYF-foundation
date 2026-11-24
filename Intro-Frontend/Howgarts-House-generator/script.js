const house = [
  {
    name: "Gryffindor",
    description:
      "Gryffindor is one of the four houses at Hogwarts School of Witchcraft and Wizardry, known for valuing courage, bravery, nerve, and chivalry. Founded by Godric Gryffindor, the house is represented by a lion and the colors scarlet and gold.",
  },
  {
    name: "Hufflepuff",
    description:
      "Hufflepuff is one of the four Hogwarts houses, known for valuing hard work, patience, loyalty, and fair play. Founded by Helga Hufflepuff, it is the most inclusive house, welcoming all students rather than selecting for a single specific talent.",
  },
  {
    name: "Ravenclaw",
    description:
      "Ravenclaw is one of the four houses at Hogwarts School of Witchcraft and Wizardry, celebrated for intelligence, wit, wisdom, and creativity. Founded by Rowena Ravenclaw, the house values curiosity, academic learning, and original, out-of-the-box thinking.",
  },
  {
    name: "Slytherin",
    description:
      "Slytherin is one of the four houses at Hogwarts School of Witchcraft and Wizardry, known for valuing ambition, cunning, resourcefulness, and determination",
  },
];

const input = document.getElementById("type-text");
const button = document.getElementById("btn");
const output = document.getElementById("para");
const shortDesc = document.getElementById("desc");
button.addEventListener("click", (e) => {
  if (input.value.length === 0) {
    return (output.textContent = "please provide a name");
  }
  let randomHouse = [Math.floor(Math.random() * house.length)];
  let randomHouseName = house[randomHouse].name;
  output.textContent = `${input.value} belongs in ${randomHouseName}`;
  shortDesc.textContent = house[randomHouse].description;
});
