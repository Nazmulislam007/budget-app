import React from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudget } from "../Context/BudgetContext";
import BudgetCart from "./BudgetCart";

const Uncategorized = (props) => {
  const { getBudgetExpenses } = useBudget();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  if (amount === 0) return null;

  return <BudgetCart gray name="Uncategorized" amount={amount} {...props} />;
};

export default Uncategorized;
