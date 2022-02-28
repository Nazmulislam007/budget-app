import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hook/useLocalStorage";

const BudgetCreateContext = React.createContext();

export const useBudget = () => {
  return useContext(BudgetCreateContext);
};

const BudgetContext = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  //   {
  //       id:
  //       name:
  //       max:
  //   }
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
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

  const deleteBudget = ({ id }) => {
    setBudgets((prevBudget) => {
      return prevBudget.filter((budge) => budge.id !== id);
    });
  };

  const deleteExpense = ({ id }) => {
    setExpenses((prevExpense) => {
      return prevExpense.filter((expense) => expense.id !== id);
    });
  };

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
