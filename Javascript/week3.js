//---------- Item removal--------
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
console.log(names);

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
//-----------When will be there??------

function timeCalculator(travelInformation) {
  let time = travelInformation.destinationDistance / travelInformation.speed;
  let hours = Math.floor(time);
  let minutes = Math.floor((time - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = timeCalculator(travelInformation);
console.log(travelTime);

//---------series duration of my life-----
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },

  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
seriesDurations.push({
  title: "Emily in Paris",
  days: 1,
  hours: 30,
  minutes: 0,
});

console.log(seriesDurations);

function logOutSeriesText(seriesDurations) {
  let totalPercent = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let daysToMins = seriesDurations[i].days * 24 * 60;
    let hoursToMins = seriesDurations[i].hours * 60;
    let minutes = seriesDurations[i].minutes;
    let percentage =
      ((daysToMins + hoursToMins + minutes) / (80 * 365 * 24 * 60)) * 100;
    let roundedDecimal = percentage.toFixed(3);
    let msg = `${seriesDurations[i].title} took ${roundedDecimal}% of my life`;
    console.log(msg);
    totalPercent = totalPercent + percentage;
  }
  return `In total that is ${totalPercent.toFixed(2)}% of my life`;
}

console.log(logOutSeriesText(seriesDurations));

//----Note taking App---------
let notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
  return notes;
}
console.log(saveNote("Dentist Appointment", 1));
console.log(saveNote("Hit Gym", 2));
console.log(saveNote("Shopping", 3));
console.log(saveNote("Cooking", 4));

function getNote(id) {
  if (id === "" || typeof id !== "number" || Number.isNaN(id)) {
    return `error`;
  }
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }

  return `Not found`;
}
console.log(getNote(2));
console.log(getNote(""));
console.log(getNote("abc"));
console.log(getNote(5));

//-------Logout Notes-------

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      ` The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} `,
    );
  }
}
logOutNotesFormatted();

//------delete Note-------(Added my own feature)
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      notes.splice(i, 1);
      break;
    }
  }
  return notes;
}
console.log(deleteNote(2));

//-----------CactusIO-interactive--------

const activities = [];
let totalDuration = 0;
const limit = 40;

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
  totalDuration = totalDuration + duration;
  return activities;
}

console.log(addActivity("15/10-26", "Youtube", 45));
console.log(addActivity("15/10-26", "Instagram", 30));

function showStatus(activities) {
  if (activities.length === 0) {
    console.log(`Add some activities before calling showStatus`);
  } else {
    console.log(
      `you have added ${activities.length} activities. They amount to ${totalDuration} mins of usage.`,
    );
  }
  if (totalDuration > limit) {
    return `You have reached your limit, no more smartphoning for you!`;
  }
}
console.log(showStatus(activities));

function mostSpentActivity(activities) {
  let activityName;
  let duration = 0;
  if (activities.length === 0) {
    return `There are no activities`;
  }
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].duration > duration) {
      duration = activities[i].duration;
      activityName = activities[i].activity;
    }
  }
  return `Most time spent on ${activityName} - ${duration} mins`;
}
console.log(mostSpentActivity(activities));
