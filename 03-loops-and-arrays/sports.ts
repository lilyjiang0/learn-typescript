let sportsOne: string[] = ["Soccer", "Cricket", "Swimming", "Tennis", "Net Ball"]

// Traditional approach.
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// Simplified for loop.
for (let sport of sportsOne) {
    if (sport == "Swimming") {
        console.log(sport + " << My Favorite!");
    } else {
        console.log(sport);
    }
}