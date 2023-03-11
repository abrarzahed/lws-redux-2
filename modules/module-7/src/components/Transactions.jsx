import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

export default function Transactions() {
  return (
    <>
      <p class="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
              <p>৳ 100</p>
              <button className="link">
                <img className="icon" src={editIcon} alt="edit icon" />
              </button>
              <button className="link">
                <img className="icon" src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
