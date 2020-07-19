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

// calculates week day
function calculateWeekDay(birthDate) {
  let [dayOfMonth, monthOfYear, yearOfBirth] = birthDate;
  let zeroBasedCentury, yearOfCentury;
  if (monthOfYear <= 2) {
    monthOfYear += 12;
    yearOfBirth -= 1;
    }  

// Split year to centuryCode & yearCode
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
// return dayOfWeek as a zero-based index
// dayOfWeek = (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
return dayOfWeek;
}