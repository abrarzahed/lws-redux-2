import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionsAsync } from "../features/transaction/transactionSlice";

export default function TransactionForm() {
  const dispatch = useDispatch();

  const { isLoading, isError, error } = useSelector(
    (state) => state.transactions
  );

  const [formData, setFormData] = useState({
    name: "",
    type: "income",
    amount: "",
  });

  // reset form
  const resetForm = () => {
    setFormData({
      name: "",
      type: "income",
      amount: "",
    });
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTransactionsAsync({ ...formData, amount: Number(formData.amount) })
    );
    resetForm();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>

        <div className="form-group">
          <label htmlFor="transaction_name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="My Salary"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={formData.type === "income"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              checked={formData.type === "expense"}
              onChange={handleInputChange}
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="300"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>

        <button disabled={isLoading} className="btn">
          Add Transaction
        </button>
        {!isLoading && isError && <p className="error">{error}</p>}
      </form>

      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
}
