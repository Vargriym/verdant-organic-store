import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import notFoundIcon from "../../../public/img/notfound.jpg";
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { getallProductss, loading } = context;

  const navigate = useNavigate();

  const filterProduct = getallProductss.filter((obj) =>
    obj.category.includes(categoryname)
  );

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="mt-10">
        <div className="">
          <h1 className=" text-center mb-12 text-3xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>
        {loading ? (
          <>
            <div className="flex justify-center">
              <Loader />
            </div>
          </>
        ) : (
          <>
            <section className="text-gray-600 body-font">
              <div className="w-full px-5 py-5 mx-auto ">
                <div className="flex flex-wrap -m-4 justify-center">
                  {filterProduct.length > 0 ? (
                    <>
                      {filterProduct.map((item, index) => {
                        const { id, title, price, productImageUrl } = item;
                        return (
                          <div key={index} className="p-20 py-0 sm:px-10 sm:mb-20 w-full">
                            <div className="h-full overflow-hidden cursor-pointer">
                              <img
                                onClick={() => navigate(`/productinfo/${id}`)}
                                className="sm:h-64 sm:w-72 m-auto lg:h-72 w-full"
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
                                <h1 className="title-font text-sm md:text-lg font-medium text-gray-900 mb-3">
                                  EGP {price}
                                </h1>

                                <div className="flex justify-center ">
                                  {cartItems.some((p) => p.id === item.id) ? (
                                    <button
                                      onClick={() => deleteCart(item)}
                                      className=" bg-red-400 hover:bg-gray-600 w-full sm:w-56 text-white py-[8px] duration-300 rounded-full font-bold"
                                    >
                                      Remove from Cart
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => addCart(item)}
                                      className="bg-[#8bc34a] hover:bg-black w-full sm:w-56 text-white duration-300 py-[8px] px-[1px] rounded-full font-bold"
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
                    </>
                  ) : (
                    <div>
                      <div className="flex justify-center">
                        <img
                          className="w-96 mb-2"
                          src={notFoundIcon}
                          alt="categoryImg"
                        />
                      </div>
                      <h1 className=" text-black text-xl text-center">
                        No {categoryname} products found.
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
