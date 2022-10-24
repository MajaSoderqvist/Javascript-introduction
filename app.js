let age = 23;
let userName = "Maja";
let hobbies = ["Cycling", "Drawing", "Video games"];

let job = {
  title: "Developer",
  place: "Stockholm",
  salary: 1000000000000,
};

let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

adultYears = calculateAdultYears(age);
alert(adultYears);

age = 45;
adultYears = calculateAdultYears(age);

alert(adultYears);
