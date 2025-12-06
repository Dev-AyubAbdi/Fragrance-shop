import React from "react";
import { Product } from "./Product";
export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Chanel No. 5",
      urlImage:
        "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
      price: 300,
    },
    {
      id: 2,
      name: "Gucci Bloom",
      urlImage:
        "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
      price: 400,
    },
    {
      id: 3,
      name: "Dior Sauvage",
      urlImage:
        "https://images.unsplash.com/photo-1676951334972-2e65e67f4cbe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 900,
    },
    {
      id: 4,
      name: "Versace Eros",
      urlImage:
        "https://images.unsplash.com/photo-1658654482546-1b7daf94a663?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      price: 4000,
    },
    {
      id: 5,
      name: "Creed Aventus",
      urlImage:
        "https://images.unsplash.com/photo-1708167243118-59fae90f1f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
      price: 400,
    },
    {
      id: 6,
      name: "Lattafa Asad",
      urlImage:
        "https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
      price: 200,
    },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
