import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");
  // console.log(product)

  const { id } = useParams();

  // console.log(product)

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      // console.log({...productTemp.data(), id : productTemp.id})
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Product removed.");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Layout>
      <section className="py-5 lg:py-16 font-montserrat dark:bg-gray-100">
        {loading ? (
          <>
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          </>
        ) : (
          <>
            <div className="max-w-3xl px-4 mx-auto">
              <div className="flex flex-wrap mb-24 -mx-4">
                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                  <div className="">
                    <div className="">
                      <img
                        className=" w-full lg:h-[20em] rounded-lg"
                        src={product?.productImageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="lg:pl-10">
                    <div className="mb-6 ">
                      <h2 className="max-w-xl mb-2 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                        {product?.title}
                      </h2>
                      <p></p>
                      <p className="inline-block text-sm font-semibold text-green-400 dark:text-gray-400 ">
                        <span>EGP {product?.price}</span>
                      </p>
                    </div>
                    <div className="mb-6">
                      <h2 className="mb-2 text-md font-bold text-gray-700 dark:text-gray-400">
                        Description:
                      </h2>
                      <p>{product?.description}</p>
                    </div>

                    <div className="mb-6 " />
                    <div className="flex flex-wrap items-center mb-6">
                      {cartItems.some((p) => p.id === product.id) ? (
                        <button
                          onClick={() => deleteCart(product)}
                          className="w-full px-4 py-3 text-center font-semibold text-white bg-green-500 border border--600  hover:bg-green-800 hover:text-gray-100  rounded-xl"
                        >
                          Delete from cart
                        </button>
                      ) : (
                        <button
                          onClick={() => addCart(product)}
                          className="w-full px-4 py-3 text-center font-semibold text-black bg-green-400 border hover:bg-green-600 hover:text-gray-100 rounded-xl"
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
