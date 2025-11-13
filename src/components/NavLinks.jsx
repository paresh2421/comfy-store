const links = [
  { id: 1, url: "/", text: "home" },
  { id: 1, url: "about", text: "about" },
  { id: 1, url: "products", text: "products" },
  { id: 1, url: "cart", text: "cart" },
  { id: 1, url: "product", text: "product" },
  { id: 1, url: "orders", text: "orders" },
];

import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        <li key={id}>
          <NavLink to={url} className="capitalize">
            {text}
          </NavLink>
        </li>;
      })}
    </>
  );
};

export default NavLinks;
