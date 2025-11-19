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
  const { image, title, price, description, colors, company } = productDetails.attributes
  const currencyAmount = currencyFormat(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e)=>{
    setAmount(parseInt(e.target.value));
  }

  return <section>
    <div className="text-md breadcrumbs">
        <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/products'>Products</Link>
            </li>
        </ul>
    </div>

    <div className="mt-6 rid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* <img src={} alt="" /> */}
    </div>
  </section>
};

export default SingleProduct;
