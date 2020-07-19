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

