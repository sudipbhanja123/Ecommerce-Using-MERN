import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json";
const TrendingProducts = () => {
  const [visibleProducts, setVisibleproducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleproducts((prevCount) => prevCount + 4);
  };
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader !mb-12">
        Discover the Hottest Picks: Elevate Your Style with Our Curated
        Collection of Trending Women's Fashion Products.
      </p>

      <ProductCards products={products.slice(0, visibleProducts)} />
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
