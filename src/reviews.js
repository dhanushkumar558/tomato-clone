// reviews.js

export const reviews = [
  ...Array.from({ length: 140 - 101 + 1 }, (_, i) => {
    const foodId = i + 101;
    return [
      { foodId, user: "Amit", rating: 5, comment: "Amazing taste!" },
      { foodId, user: "Priya", rating: 4, comment: "Delicious and spicy." },
      { foodId, user: "Raj", rating: 5, comment: "Perfectly cooked." },
      { foodId, user: "Simran", rating: 4, comment: "Loved it." },
      { foodId, user: "Vikram", rating: 5, comment: "Would order again." },
    ];
  }).flat(),
];
