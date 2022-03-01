import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddBudgetModel from "./components/AddBudgetModel";
import BudgetCart from "./components/BudgetCart";
import { useBudget } from "./Context/BudgetContext";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudget();

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div className="main">
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCart
                key={budget.id}
                gray
                name={budget.name}
                amount={amount}
                max={budget.max}
              />
            );
          })}
        </div>
      </Container>
      <AddBudgetModel
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}

export default App;
