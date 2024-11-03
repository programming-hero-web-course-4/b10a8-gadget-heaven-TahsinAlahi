import { useState } from "react";
import { NavLink } from "react-router-dom";
import categoriesData from "../data/categories.json";

function CategoryNav() {
  const [categories, setCategories] = useState([]);

  useState(() => {
    setCategories(categoriesData);
  }, []);

  function activeCategoryClass({ isActive }) {
    return `px-5 py-3 w-full text-center rounded-lg hover:bg-purple-600 hover:text-white hover:font-semibold ${
      isActive
        ? "bg-purple-600 text-white font-semibold"
        : "bg-gray-800/10 text-gray-800"
    }`;
  }

  return (
    <div className="flex items-center justify-center flex-col gap-2 p-6 w-full border border-gray-600 shadow-lg rounded-lg">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`}
          className={activeCategoryClass}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}

export default CategoryNav;
