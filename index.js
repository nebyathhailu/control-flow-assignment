//1. simulate failed login attempt

const loginData=()=>{
    let loginAttempt=1;
    while(loginAttempt<=3){
        console.log(`Login attempt:${loginAttempt}`);
        loginAttempt++;
    }
    console.log("Account locked");
}
loginData();


//2. log user votes

function featureVoted(votesArray) {
    let i = 0;
        do{
            console.log(`${votesArray[i]}`);
            i++;
        }
        while(i < votesArray.length);
}
let feature=["feature1","feature2","feature3","feature2"];
featureVoted(feature);


//3. Corresponding day name

function days(numArray){
    numArray.forEach(num =>{
        switch (num){
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Invalid number");
                break;
            
        }
    })
}
days([1,2,3,4,5,6,7,9]);


//4. Password strength

const passwordString =(passwordArray)=>{
    passwordArray.forEach(password => {
        if(password.length>=8){
            console.log("Strong password");
        }
        else{
            console.log("Weak password");
        }
    })

}
passwordString(["123password","1234"]);


//5. Show greeting

const greeting=(languageCodes)=>{
languageCodes.forEach(languageCode =>{
    switch (languageCode){
        case "en":
            console.log("Hello");
            break;
        case "fr":
            console.log("Bonjour");
            break;
        case "sw":
            console.log("Habari");
            break;
        case "es":
            console.log("Holla");
        default:
            console.log("Hi");
            break;
    }
})
}
greeting(["en","fr","tg","es","sw"]);


//6.Temperature alert

const temperatureAlert=(temperature)=>{
    temperature.forEach(temp => {
        if (temp > 30){
            console.log(`Temperature is ${temp}°C - High heat alert!`);
        }
        else if (temp < 15){
            console.log(`Temperature is ${temp}°C - Cold alert!`);
        }
        else{
            console.log(`Temperature is ${temp}°C - Normal conditions`);
        }
    })
}
temperatureAlert([56,7,23,76]);


//7. User registration

function userRegistration(users){
    let i=0;
    while(users.length>0){
        let user=users.shift();
        console.log(`User${i+1} is ${user}.`);
        i++;
    }
}
userRegistration(["Mark","Tom","Alice","John"]);


//8. do...while to simulate test attempts
 
function studentAttempt(studentScores){
    studentScores.forEach(score => {
        let retake=[]; 
        do{
            let s=score+10;
            retake.push(s);          
            score+=10;
        }
        while(score<50);
        console.log(`Taste retake record:${retake}`);
        console.log(`Total attempts: ${retake.length}`);
    })
}
studentAttempt([34,15,5,6,10]);