import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteTransactionsAsync,
  fetchTransactionsAsync,
  itemToEditSelected,
} from "../features/transaction/transactionSlice";

export default function Transactions() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, transactions } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactionsAsync());
  }, [dispatch]);

  // handle edit
  const handleEdit = (transaction) => {
    dispatch(itemToEditSelected(transaction));
  };

  // handle delete
  const handleDelete = (id) => {
    dispatch(deleteTransactionsAsync(id));
  };

  return (
    <>
      {!isLoading && !isError && transactions.length > 0 ? (
        <>
          <p className="second_heading">Your Transactions:</p>
          <div className="conatiner_of_list_of_transactions">
            <ul>
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className={`transaction ${transaction.type}`}
                >
                  <p>{transaction.name}</p>
                  <div className="right">
                    <p>৳ {transaction.amount}</p>
                    <button
                      className="link"
                      onClick={() => handleEdit(transaction)}
                    >
                      <img className="icon" src={editIcon} alt="edit icon" />
                    </button>
                    <button
                      className="link"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      <img
                        className="icon"
                        src={deleteIcon}
                        alt="delete icon"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="error">{error}</p>
      )}
    </>
  );
}
