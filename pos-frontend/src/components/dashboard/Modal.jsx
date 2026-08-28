import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable, addCategory, addDish, getCategories } from "../../https";
import { enqueueSnackbar } from "notistack";

const Modal = ({ action, setIsModalOpen }) => {
  // unified form state to support table, category, and dishes
  const [formData, setFormData] = useState({
    // table
    tableNo: "",
    seats: "",
    // category
    name: "",
    description: "",
    // dish
    price: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mutation = useMutation({
    mutationFn: (reqData) => {
      if (action === "table") return addTable(reqData);
      if (action === "category") return addCategory(reqData);
      // action === 'dishes'
      return addDish(reqData);
    },
    onSuccess: (res) => {
      setIsModalOpen(false);
      const { data } = res;
      enqueueSnackbar(data?.message || "Added successfully", { variant: "success" });
    },
    onError: (error) => {
      const message = error?.response?.data?.message || "Something went wrong";
      enqueueSnackbar(message, { variant: "error" });
      console.error(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {};
    if (action === "table") {
      payload = { tableNo: Number(formData.tableNo), seats: Number(formData.seats) };
    } else if (action === "category") {
      payload = { name: formData.name, description: formData.description };
    } else if (action === "dishes") {
      payload = {
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image,
      };
    }

    mutation.mutate(payload);
  };

  const titleMap = {
    table: "Add Table",
    category: "Add Category",
    dishes: "Add Dish",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        <div className="flex justify-between item-center mb-4">
          <h2 className="text-[#f5f5f5] text-xl font-semibold">{titleMap[action] || "Modal"}</h2>
          <button onClick={handleCloseModal} className="text-[#f5f5f5] hover:text-red-500">
            <IoMdClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {action === "table" && (
            <>
              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Table Number</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="number"
                    name="tableNo"
                    value={formData.tableNo}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Number of Seats</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {action === "category" && (
            <>
              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Category Name</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Description</label>
                <div className="flex item-center rounded-lg p-2 px-3 bg-[#1f1f1f]">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="bg-transparent w-full text-white focus:outline-none resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </>
          )}

          {action === "dishes" && (
            <>
              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Dish Name</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Price</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Category</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                    placeholder="Category name or id"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Image URL (optional)</label>
                <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="bg-transparent flex-1 text-white focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}

          <button type="submit" className="w-full rounded-lg mt-6 mb-2 py-3 text-lg bg-yellow-400 text-gray-900 font-bold">
            {action === "table" ? "Add Table" : action === "category" ? "Add Category" : "Add Dish"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
