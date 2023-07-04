import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <div className="flex">
        <Link to="/" className="flex items-center text-4xl text-brand">
          <RiShoppingBag3Fill className="" color="red" />
          <h2>Shoppy</h2>
        </Link>
      </div>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">
          <AiOutlineShoppingCart />
        </Link>
        <Link to="/products/new" className="text-2xl">
          <FaPencilAlt />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
