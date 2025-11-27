import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import ReviewsCard from "../ReviewsCard";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);

  const SingleProd = data?.product || {};

  const productReviews = data?.reviews || [];

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading the product details</p>;
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
          <span className="hover:text-primary">{SingleProd.name}</span>
        </div>
      </section>
      <section className="section__container mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 w-full">
            <img className="rounded-md w-full" src={SingleProd?.image} alt="" />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">{SingleProd?.name}</h3>
            <p className="text-xl text-primary mb-4">
              ${SingleProd?.price}
              {SingleProd?.oldPrice && (
                <s className="ml-2">${SingleProd?.oldPrice}</s>
              )}
            </p>
            <p className="text-gray-700 mb-4">{SingleProd?.description}</p>

            {/* Additional Product info */}
            <div className="flex flex-col space-y-2">
              <p>
                <strong>Category:</strong> {SingleProd?.category}
              </p>
              <p>
                <strong>Color:</strong> {SingleProd?.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStars rating={SingleProd?.rating} />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddtoCart(SingleProd);
              }}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* display reviews */}

      <section className="section__container mt-8">
        <ReviewsCard productReviews={productReviews} />
      </section>
    </>
  );
};

export default SingleProduct;
