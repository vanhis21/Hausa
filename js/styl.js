const maleNames = [
    "Kwame",
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi"
  ];
  const femaleNames = [
    "Ama",
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua"
  ];
  

  // collects the data from input fields
  function fetchFormData() {
    let form = document.forms[0];
    let day, month, year, gender;
  
    gender = form.gender.value;
  
    day = parseInt(form.day.value);
    month = parseInt(form.month.value);
    year = parseInt(form.year.value);
  
    return [gender, day, month, year];
  }
function calculateWeekDay(birthDate) {
  let [dayOfMonth, monthOfYear, yearOfBirth] = birthDate;
  let zeroBasedCentury, yearOfCentury;

  if (monthOfYear <= 2) {
    monthOfYear += 12;
    yearOfBirth -= 1;
  }

  zeroBasedCentury = parseInt(yearOfBirth / 100);
  yearOfCentury = yearOfBirth % 100;

  let dayOfWeek =
    (dayOfMonth +
      parseInt(
        2.6 * (monthOfYear + 1) +
          yearOfCentury +
          parseInt(yearOfCentury / 4) +
          parseInt(zeroBasedCentury / 4) +
          5 * zeroBasedCentury
      )) %
    7;
  return dayOfWeek;
}

function deriveName() {
  let formData = fetchFormData();
  let userBirthDate, userGender, dayOfWeek;

  [userGender, ...userBirthDate] = formData;
  dayOfWeek = calculateWeekDay(userBirthDate);

  if (userGender === "Male") {
    alert("Your Akan Name is: " + maleNames[dayOfWeek]);
  } else {
    alert("Your Akan Name is: " + femaleName[dayOfWeek]);
  }
  return false;
}
