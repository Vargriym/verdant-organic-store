import { useNavigate } from "react-router";
import heroImg from "../../../public/img/verdant-hero.png";
import introImg from "../../../public/img/logo-leaf.png";
import headerBG from "../../../public/img/bamboo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
        <div className="flex md:flex-row md:m-auto items-center lg:m-auto lg:justify-center lg:px-64 bg-gray-50 sm:w-1/1 pb-12 relative overflow-hidden">
           <img className=" sm:m-auto sm:w-[30rem] md:m-0 md:w-[42rem] md:h-[28rem] md:pt-28 lg:ml-20 xl:ml-0 lg:pl-20 lg:mx-auto lg:h-full md:p-5 p-20" src={heroImg} alt="heroImg" />
           <div className="text-center p-5 md:px-0 md:py-20 md:text-start md:pl-8 lg:mt-4">
            <img className="m-auto md:m-0" src={introImg} alt="IntroImg" />
            <p className="py-5 font-montserrat text-lg font-semibold">Best Quality Products</p>
            <p className=" font-montserrat text-4xl font-bold">Join The Organic Movement!</p>
            <p className="py-4 flex lg:w-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ut aliquam aspernatur quas laboriosam id sit molestias.</p>
               <button onClick={() => navigate("/allProducts")} className="bg-[#6a9739] px-9 py-3 mt-5 rounded-md hover:bg-black duration-300 text-white font-montserrat font-semibold text-sm">SHOP NOW</button>
           </div>
           <img src={headerBG} className="lg:absolute right-1 bottom-1 w-[15rem] lg:block lg:opacity-20 hidden" alt="header-bg-img" />
        </div>
    );
}

export default HeroSection;
