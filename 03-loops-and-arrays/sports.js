var sportsOne = ["Soccer", "Cricket", "Swimming", "Tennis", "Net Ball"];
// Traditional approach.
// for (let i = 0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }
// Simplified for loop.
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "Swimming") {
        console.log(sport + " << My Favorite!");
    }
    else {
        console.log(sport);
    }
}
