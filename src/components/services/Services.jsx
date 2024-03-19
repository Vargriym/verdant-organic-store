import { motion } from "framer-motion";
import "../../index.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const Services = () => {
  return (
    <section className="services lg:flex lg:flex-row justify-center gap-10 w-full p-5 lg:p-5 sm:block md:flex md:gap-y-4 sm:flex-wrap md:flex-wrap sm:pb-1 sm:pt-6">
      <motion.div whileHover={{ scale: 1.1 }} className="service-item">
        <div className="service-icon">
          <span>
            <LocalShippingOutlinedIcon color="success" />
          </span>
        </div>
        <div>
          <h3>Free Shipping</h3>
          <p>Purchases above EGP 5</p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="service-item">
        <div className="service-icon">
          <span>
            <VerifiedUserOutlinedIcon color="success" />
          </span>
        </div>
        <div>
          <h3>Certified Organic</h3>
          <p>100% Guarantee</p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="service-item">
        <div className="service-icon">
          <span>
            <CurrencyExchangeOutlinedIcon color="success" />
          </span>
        </div>
        <div>
          <h3>Huge Savings</h3>
          <p>At Lowest Price</p>
        </div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="service-item">
        <div className="service-icon">
          <span>
            <RecyclingOutlinedIcon color="success" />
          </span>
        </div>
        <div>
          <h3>Easy Returns</h3>
          <p>No Questions Asked</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
