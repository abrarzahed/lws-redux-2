import frameImg from "../assets/img/icons/Frame.svg";
import classImg from "../assets/img/icons/class.svg";
import guestsImg from "../assets/img/icons/guests.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/booking/actions";

export default function TopForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    class: "",
  });

  // handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const resetForm = () => {
    setFormData({
      from: "",
      to: "",
      date: "",
      guests: "",
      class: "",
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooking(formData));
    resetForm();
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frameImg} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                id="lws-from"
                required
                value={formData.from}
                onChange={handleInputChange}
                name="from"
              >
                <option value="Please Select" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frameImg} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                id="lws-to"
                required
                value={formData.to}
                onChange={handleInputChange}
                name="to"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onChange={handleInputChange}
              value={formData.date}
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={guestsImg} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onChange={handleInputChange}
                value={formData.guests}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1 Persons">1 Person</option>
                <option value="2 Persons">2 Persons</option>
                <option value="3 Persons">3 Persons</option>
                <option value="4 Persons">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>class</p>
            <div className="flex flex-row">
              <img src={classImg} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="class"
                id="lws-ticketClass"
                required
                onChange={handleInputChange}
                value={formData.class}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}
