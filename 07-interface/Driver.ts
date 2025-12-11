import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// Declare an array for coaches.
let coaches: Coach[] = [];

// Add coaches to array.
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}