import { Button, Container, Stack } from "react-bootstrap";
import BudgetCart from "./components/BudgetCart";

function App() {
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div className="main">
          <BudgetCart gray name="entertaiment" amount={300} max={1000} />
        </div>
      </Container>
    </>
  );
}

export default App;
