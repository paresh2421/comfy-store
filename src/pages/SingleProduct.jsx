import { Link, useLoaderData } from "react-router-dom";
import { currencyFormat, customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`products/${params.id}`);
  // console.log(response.data.data);
  const productDetails = response.data.data;

  return { productDetails };
};

const SingleProduct = () => {
  const { productDetails } = useLoaderData();
  const { image, title, price, description, colors, company } =
    productDetails.attributes;
  const currencyAmount = currencyFormat(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{currencyAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
