import React from "react";
import { Product } from "./Product";
import useShop from "../Context/ShopContext";

export const CartItems = () => {
  const { Products,  RemoveProduct, total } = useShop();

  console.log(total);
  return (
    <div className=" flex-1 border-r">
      <div className="">
        {/* Cart Products */}
        <div>
          <h2 className="mb-10 text-3xl text-center">Cart Products</h2>
          <div>
            {Products.map((product) => (
              <div className="m-4">
                <div className="flex justify-around items-center m-2 border-b p-3 ">
                    {<img className="w-20 h-20 rounded-full border p-2 " src={product.urlImage} alt="" />}

                    <h2>${product.price}</h2>
                    <span className="cursor-pointer" onClick={()=>  RemoveProduct(product)}>X</span>
                </div>
               
              </div>
              
            ))}
             <span className="  flex justify-center text-center ">Total Price: ${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
