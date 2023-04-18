import getBudgetObject from './7-getBudgetObject';

const getFullBudgetObject = (income, gdp, capita) => {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: () => `$${income}`,
    getIncomeInEuros: () => `${income} euros`,
  };

  return fullBudget;
};

export default getFullBudgetObject;
