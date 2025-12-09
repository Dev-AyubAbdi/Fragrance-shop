import React from "react";
import { Product } from "./Product";
import useShop from "../Context/ShopContext";

export const CartItems = () => {
  const { Products } = useShop();
  return (
    <div className=" flex-1 border-r">
      <div className="">
        {/* Cart Products */}
        <div>
          <h2 className="mb-10">Cart Products</h2>
          <div>
            {Products.map((product) => (
              <div className="m-4">
                <div className="flex justify-around items-center m-2 border-b p-3 ">
                    {<img className="w-20 h-20 rounded-full border p-2 " src={product.urlImage} alt="" />}

                    <h2>${product.price}</h2>
                    <span>X</span>
                </div>
               
              </div>
              
            ))}
             <span className="flex justify-center text-center">Total Price:0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
