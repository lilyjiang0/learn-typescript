let reviews: number[] = [5, 5, 2, 3, 1.4];

let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

console.log("Average: " + total / reviews.length);