import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { motion } from "framer-motion";
import titleImg from "../../../public/img/logo-leaf.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const TrendingProducts = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getallProductss } = context;

  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Product added successfully.");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart.");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-10">
      <div className="pt-16 pb-24 lg:pb-22 md:pb-14 sm:pb-14">
        <h1 className="text-center text-2xl lg:text-3xl font-bold">
          Trending Products
        </h1>
        <img className="m-auto mt-5" src={titleImg} alt="titleImg" />
      </div>

      <section className="flex flex-wrap text-gray-600 body-font pb-10">
        <div className="md:px-0 mx-auto">
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="md:flex md:flex-wrap md:w-full lg:px-0">
            {getallProductss.slice(0, 8).map((item) => {
              const { id, title, price, productImageUrl } = item;
              return (
                <div
                  key={item.id}
                  className="lg:px-3 lg:m-0 m-auto md:px-3 md:w-1/3 lg:flex lg:flex-wrap lg:w-1/4"
                >
                  <div className="h-full w-full lg:p-0 overflow-hidden cursor-pointer">
                    <motion.img
                      whileHover={{ scale: 0.9 }}
                      onClick={() => navigate(`/productinfo/${id}`)}
                      className="h-72 w-25 m-auto sm:h-[20rem] lg:p-0 sm:p-5 md:h-52 md:pb-2 lg:pb-3 lg:h-64 object-cover"
                      src={productImageUrl}
                      alt="img"
                    />
                    <div className="p-4 sm:pt-0 text-center">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Verdant
                      </h2>
                      <h1 className="title-font md:text-sm md:font-semibold lg:text-lg lg:font-semibold text-lg font-medium text-gray-900 mb-3">
                        {title.substring(0, 25)}
                      </h1>
                      <h1 className="title-font lg:text-medium text-sm font-bold text-gray-900 mb-4 md:mb-4 sm:mb-3 lg:mb-5">
                        EGP {price}
                      </h1>

                      <div className="flex justify-center px-20 mb-12 md:px-0">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className="px-8 py-3 text-sm text-center font-medium md:px-6 lg:px-7 md:py-[0.9rem] lg:font-semibold text-white bg-gray-800 border border--600  hover:bg-gray-900 hover:text-gray-100 rounded-full"
                          >
                            Remove from Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className="px-11 py-3 text-center sm:font-normal lg:font-semibold text-white bg-[#6a9739] hover:bg-green-600 hover:text-gray-100 rounded-full"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingProducts;
