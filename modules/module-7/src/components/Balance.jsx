import { useSelector } from "react-redux";

export default function Balance() {
  const { transactions } = useSelector((state) => state.transactions);
  const totalBalance = transactions.reduce(
    (accumulator, currentTransaction) => {
      if (currentTransaction.type === "income") {
        return accumulator + currentTransaction.amount;
      } else {
        return accumulator - currentTransaction.amount;
      }
    },
    0
  );
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span> {totalBalance}</span>
      </h3>
    </div>
  );
}
