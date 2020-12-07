const passport_fields = ["byr","iyr", "eyr", "hgt", "hcl", "ecl","pid"]

day_4_challenge_1 = () => {
    const input = document.getElementsByTagName('pre')[0].innerHTML;
    const passports = input.split("\n\n");

    valid_count = 0;
    valid_passports = [];

    passports.forEach(
        passport => {
            field_count = 0;
            for(i=0; i<passport_fields.length; i++) {
                if (passport.includes(passport_fields[i])) {
                    field_count++;
                }
            }
            if (field_count == 7) {
                valid_count++;
                valid_passports.push(passport);
            }
        }
    );
    return valid_count;
};

isInputValid = (key, value) => {
    switch (key) {
        case "byr":
            return value >= 1920 && value <= 2002;
       case "iyr":
           return value >= 2010 && value <= 2020;
        case "eyr":
            return value >= 2020 && value <= 2030;
        case "hgt":
            return isValidHeight(value);
        case "hcl":
            return value.match(/^#[0-9a-fA-F]{6}$/);
        case "ecl":
            return ['amb','blu','brn','gry','grn','hzl','oth'].includes(value);
        case "pid":
            return value.match(/^\d{9}$/);

    }
    
}

isValidHeight = (heightstr) => {
  let heightparts = heightstr.match(/^(\d+)(cm|in)$/);
  if(heightparts)
  {
    let height = parseInt(heightparts[1], 10);
    if(heightparts[2] == 'cm')
    {
      return Math.min(Math.max(height, 150), 193) == height;
    }
    else if(heightparts[2] == 'in')
    {
      return Math.min(Math.max(height, 59), 76) == height;
    }
  }
  return false;
}

day_4_challenge_2 = () => {
    const input = document.getElementsByTagName('pre')[0].innerHTML;
    const passports = input.split("\n\n");

    valid_passport_keys = [];
    passports.forEach(
        passport => {
            field_count = 0;
            for(i=0; i<passport_fields.length; i++) {
                if (passport.includes(passport_fields[i])) {
                    field_count++;
                }
            }
            if (field_count == 7) {
                valid_passport_keys.push(passport);
            }
        }
    );

    valid_count = 0;
    
    valid_passport_keys.forEach(passport => {
        inputValidCount = 0;
        passport.replace(/(\r\n|\n|\r)/gm, " ").split(' ')
            .map(kvp =>{
                let [key, value] = kvp.split(':');
                if (isInputValid(key, value)) {
                    inputValidCount++;
                }
            });
        if(inputValidCount == 7) {
           valid_count++;
        }
        }
    );
    console.log(valid_count);
}