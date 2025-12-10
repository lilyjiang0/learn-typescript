var reviews = [5, 5, 2, 3, 1.4];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average: " + total / reviews.length);
