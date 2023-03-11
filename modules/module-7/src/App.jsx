import Balance from "./components/Balance";
import Layout from "./components/Layout";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

function App() {
  return (
    <Layout>
      <Balance />
      <TransactionForm />
      <Transactions />
    </Layout>
  );
}

export default App;
