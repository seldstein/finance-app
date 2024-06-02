const incomeValues = [];
let totalIncome;

function calcIncome(value) {
  incomeValues.push(value);

  totalIncome = incomeValues.reduce((total, current) => {
    return (total += current);
  }, 0);

  console.log("TOTAL INCOME");
  return totalIncome;
}
