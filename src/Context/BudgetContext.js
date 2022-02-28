import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const BudgetCreateContext = React.createContext();

export const useBudget = () => {
  return useContext(BudgetCreateContext);
};

const BudgetContext = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  //   {
  //       id:
  //       name:
  //       max:
  //   }
  const [expenses, setExpenses] = useState([]);
  //   {
  //     id:
  //     budgetId:
  //     amount:
  //     description:
  //   }

  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  };

  const addExpense = ({ budgetId, amount, description }) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, { id: uuidV4(), amount, budgetId, description }];
    });
  };

  const addBudget = ({ max, name }) => {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  };

  const deleteBudget = () => {};

  const deleteExpense = () => {};

  return (
    <BudgetCreateContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetCreateContext.Provider>
  );
};

export default BudgetContext;
