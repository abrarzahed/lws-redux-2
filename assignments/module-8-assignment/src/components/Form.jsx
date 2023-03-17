import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../features/api/apiSlice";

export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const [addBook, { isLoading, isSuccess }] = useAddBookMutation();

  // reset form
  const resetForm = () => {
    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  // handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      ...formData,
      rating: Number(formData.rating),
      price: Number(formData.price),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      resetForm();
    }
  }, [isSuccess, navigate]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
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
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={formData.featured}
          onChange={handleInputChange}
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          This is a featured book
        </label>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="submit"
        id="lws-submit"
      >
        Add Book
      </button>
    </form>
  );
}
