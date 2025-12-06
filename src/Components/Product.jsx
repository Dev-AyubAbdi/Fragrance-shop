export const Product = ({ product }) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <img
          className="w-full h-120 lg:w-90 rounded-lg" 
          src={product.urlImage}
          alt={Product.name}
        />
        <span className="absolute top-3 right-3 p-2 w-10 h-10 justify-center items-center text-center rounded-full bg-blue-500 text-white">
          +
        </span>

        <h2 className="absolute bottom-0 bg-gray-100 rounded-bl-lg rounded-br-xl w-full p-3">
          {product.name}
        </h2>
         <span className="absolute bottom-3 right-3">{product.price}</span>
      </div>
      
    </div>
  );
};
