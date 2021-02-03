let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;

if (runnerAge => 18 && registeredEarly == true){
   raceNumber += 1000   
}

if (runnerAge >= 18 && registeredEarly == true){
    console.log(`Hi! This is your race number: ${raceNumber}. Your race starts at 9:30.`)
}else if (runnerAge >= 18 && registeredEarly == false){
  console.log(`Hi! This is your race number: ${raceNumber}. Your race starts at 11:00.`)
}else{
  console.log(`Hi! This is your race number: ${raceNumber}. Your race starts at 12:30.`)
}
 

/* Race Day
Race number:
-Early adults receive a race number at or above 1000.
-All others receive a number below 1000.

Start time:
-Adult registrants run at 9:30 am or 11:00 am.
-Early adults run at 9:30 am.
-Late adults run at 11:00 am.
-Youth registrants run at 12:30 pm (regardless of registration). */