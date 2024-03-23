import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";

const AllProducts = () => {
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
    toast.success("Product removed.");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="py-8">
        <div className="">
          <h1 className=" text-center mb-5 text-3xl pb-10 font-semibold">
            All Products
          </h1>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex justify-center">{loading && <Loader />}</div>
            <div className="flex flex-wrap -m-10 lg:px-20">
              {getallProductss.map((item, index) => {
                const { id, title, price, productImageUrl } = item;
                return (
                  <div
                    key={index}
                    className="p-4 w-full md:w-1/3 lg:w-1/4 md:px-3 md:gap-3 items-center"
                  >
                    <div className="h-full overflow-hidden cursor-pointer">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-64 p-0 md:p-0 m-auto h-64 w-80 w-full"
                        src={productImageUrl}
                        alt="blog"
                      />
                      <div className="p-6 text-center">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          Verdant
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-sm mb-6 md:text-lg font-medium text-gray-900 mb-3">
                          EGP {price}
                        </h1>

                        <div className="flex justify-center ">
                          {cartItems.some((p) => p.id === item.id) ? (
                            <button
                              onClick={() => deleteCart(item)}
                              className=" bg-red-700 hover:bg-black w-56 duration-300 text-white py-[8px] rounded-full font-bold"
                            >
                              Delete From Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(item)}
                              className=" bg-[#6a9739] hover:bg-black duration-300 w-56 text-white py-[8px] rounded-full font-bold"
                            >
                              Add To Cart
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
    </Layout>
  );
};

export default AllProducts;
