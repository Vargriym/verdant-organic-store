import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Services from "../../components/services/Services";
import Testimonials from "../../components/testimonials/Testimonials";
import DiscountSection from "../../components/discountSection/DiscountSection";
import TrendingProducts from "../../components/trendingProducts/TrendingProducts";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <Services />
            <HomePageProductCard/>
            <Category/>
            <DiscountSection/>
            <TrendingProducts />
            <Testimonials/>
        </Layout>
    );
}

export default HomePage;
