import { useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DiscountSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#6a9739] p-10">
      <div className="flex justify-around flex-col lg:flex-row items-center ">
        <h1 className="font-semibold text-3xl font-poppins mt-1">
          Get 25% Off On Your First Purchase!
        </h1>
        <div
          onClick={() => navigate("/allProducts")}
          className="relative mt-6 lg:mt-0"
        >
          <ShoppingCartIcon className="absolute top-3 left-6 cursor-pointer" />
          <button className="font-bold rounded hover:bg-white duration-300 bg-[#e2f2b2] px-6 pl-14 py-3">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
