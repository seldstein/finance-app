const incomeValues = [];
const incomeObjects = [];
let totalIncome;

// Add a parameter for source name
function addIncome(source, value) {
    incomeObjects.push({source, value});
    incomeValues.push(value);

    totalIncome = incomeValues.reduce((total, current) => {
        return (total += current);
      }, 0);
    
      console.log("TOTAL INCOME");
      return totalIncome;
}