import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Single Product Page</h2>
        <div className="section__subheader space-x-2">
          <span>
            <Link to="/">home</Link>
          </span>
          <i class="ri-arrow-right-s-line"></i>
          <span>
            <Link to="/shop">shop</Link>
          </span>
          <i class="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">Product Name</span>
        </div>
      </section>
      <section className="section__container mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 w-full">
            <img
              className="rounded-md w-full"
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
            <p className="text-xl text-primary mb-4">
              $100<s>$130</s>
            </p>
            <p className="text-gray-700 mb-4">This is product desc</p>

            {/* Additional Product info */}
            <div>
              <p>
                <strong>Category:</strong> accessories
              </p>
              <p>
                <strong>Color:</strong> baige
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStars rating={"4"} />
              </div>
            </div>

            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* display reviews */}
      {/* TODO: Work with review when will have api */}
      <section className="section__container mt-8">Reviews Here</section>
    </>
  );
};

export default SingleProduct;
