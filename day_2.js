day_2_challenge_1 = () => { 
    count = 0; 
    input.forEach(element => {
        if (doesPasswordFitPolicy(element)) {
            count++;
        }
    });
    return count;
}

doesPasswordFitPolicy = (policy) => {
    minimum = policy.split(" ")[0].split("-")[0];
    maximum = policy.split(" ")[0].split("-")[1];
    valid_character = policy.split(" ")[1].replace(":", "");
    password = policy.split(" ")[2];
    password_array = password.split("");
    occurence_count = 0;
    for (i=0;i<password_array.length; i++) {
        if (password_array[i] == valid_character) {
            occurence_count++;
        }
    }
    return occurence_count >= minimum && occurence_count <= maximum;;
}

day_2_challenge_2 = () => {
    count = 0; 
    input.forEach(element => {
        if (doesPasswordFitSecondPolicy(element)) {
            count++;
        }
    });
    console.log(count);
    return count;
}

doesPasswordFitSecondPolicy = (policy) => {
    firstPositionNumber = policy.split(" ")[0].split("-")[0];
    secondPositionNumber = policy.split(" ")[0].split("-")[1];
    valid_character = policy.split(" ")[1].replace(":", "");
    
    password = policy.split(" ")[2].split("");
    return (password[firstPositionNumber-1] == valid_character && password[secondPositionNumber-1] != valid_character) || (password[firstPositionNumber-1] != valid_character && password[secondPositionNumber-1] == valid_character);

}

day_2_challenge_2();