import { useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/books/thunks/addBook";

export default function AddBook() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: "",
    });
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    resetForm();
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={formData.featured}
            onChange={handleInputChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}