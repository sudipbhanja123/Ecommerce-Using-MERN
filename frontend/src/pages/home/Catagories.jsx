import React from "react";
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";
import { Link } from "react-router-dom";
const Catagories = () => {
  const catagories = [
    { name: "Accessories", path: "accessories", image: category1 },
    { name: "Dress Collections", path: "dress", image: category2 },
    { name: "Jewellery", path: "jewellery", image: category3 },
    { name: "Cosmetics", path: "cosmetics", image: category4 },
  ];
  return (
    <>
      <div className="product__grid">
        {catagories.map((catagory) => (
          <Link
            key={catagory.name}
            to={`/categories/${catagory.path}`}
            className="categories__card"
          >
            <img src={catagory.image} alt={catagory.name} />
            <h4>{catagory.name}</h4>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Catagories;
