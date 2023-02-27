import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/product/actions";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    url: "",
    price: 0,
    quantity: 0,
  });

  // handle inputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  // reset form
  const resetForm = () => {
    setFormData({
      productName: "",
      category: "",
      url: "",
      price: 0,
      quantity: 0,
    });
  };

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewProduct({
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        iniTialQuantity: Number(formData.quantity),
        slice: 1,
      })
    );
    resetForm();
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              name="url"
              value={formData.url}
              onChange={handleInputChange}
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
