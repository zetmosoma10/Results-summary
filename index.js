const scoreArr = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    background: "hsl(0, 100%, 67%, 0.05)",
    categoryColor: "hsl(0, 100%, 67%)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    background: "hsl(39, 100%, 56%, 0.05)",
    categoryColor: "hsl(39, 100%, 56%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    background: "hsl(166, 100%, 37%, 0.05)",
    categoryColor: "hsl(166, 100%, 37%)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    background: "hsl(234, 85%, 45%, 0.05)",
    categoryColor: "hsl(234, 85%, 45%)",
  },
];

const newScoreArr = scoreArr
  .map((item) => {
    return `<div class="score" style="background-color:${item.background} ;">
  <div class="score__name">
    <img class="score__icon" src=${item.icon} alt="" />
    <h3 class="score__category" style="color:${item.categoryColor} ">${item.category}</h3>
  </div>
  <div class="score__mark">
    <span class="score__value">${item.score}</span>
    <span>/100</span>
  </div>
</div>
`;
  })
  .join("");

const container = document.querySelector(".card__content-score");
container.innerHTML = newScoreArr;
