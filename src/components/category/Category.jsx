import { useNavigate } from "react-router";
import categoryImg from "../../../public/img/basil-leaf.png";
import groceriesImg from "../../../public/img/ggroceries.png"
import glutenImg from "../../../public/img/glutenfree.png"
import snacksImg from "../../../public/img/snacks.png"

const category = [
  {
    image: groceriesImg,
    name: "Groceries",
    id: "5554",
  },
  {
    image: glutenImg,
    name: "Gluten-Free",
    id: "999",
  },
  {
    image: snacksImg,
    name: "Snacks",
    id: "5433",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5 bg-[#f8f6f3] relative w-full pb-10">
        <img
          className="absolute right-[41%] sm:right-[43%] md:right-[45%] bottom-[98%] lg:bottom-[97%] lg:right-[47%] w-[100px]"
          src={categoryImg}
          alt="categoryImg"
        />
        <h1 className="flex justify-center lg:text-3xl text-2xl mb-12 sm:mb-3 font-bold mt-20">
          Shop by Category
        </h1>
        <div className="lg:justify-cente sm:pt-0 md:pt-12 lg:p-10 p-1 sm:p-5 md:px-3">
          <div className="block md:justify-around lg:justify-center md:py-0 md:flex lg:p-5 lg:w-full lg:text-center md:flex-wrap lg:flex-nowrap sm:w-full sm:pt-12 sm:m-auto h-full ">
            {category.map((item) => {
              return (
                <div
                  key={item.id}
                  className="text-center sm:text-start md:text-center px-3 sm:h-[18rem] md:w-[18rem] md:h-[19rem] lg:w-[20rem] lg:h-[20rem] lg:px-1 h-[20rem] md:h-[22rem] bg-white p-5 border-black border-2 my-5 mx-5"
                >
                  <div className="sm:mt-3 px-2 md:px-0 md:mt-0">
                    <h1 className="text-xl lg:text-2xl font-bold title-font first-letter:uppercase ">
                      {item.name}
                    </h1>
                    <h4>
                      Aliquam porta justo nibh, id laoreet sapien sodales vitae
                      justo.
                    </h4>
                  </div>
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className="m-auto sm:mt-5 sm:items-center sm:flex sm:justify-between cursor-pointer"
                  >
                    <div className="block sm:flex sm:justify-between sm:m-auto sm:w-full md:block">
                      <div className="sm:m-auto text-center">
                        <button className="bg-[#6a9739] sm:px-6 md:px-4 md:mt-1 lg:mt-0 sm:py-3 px-6 py-3 mt-5 rounded-md hover:bg-black duration-300 text-white font-montserrat font-semibold text-sm">
                          SHOP NOW
                        </button>
                      </div>
                      <img
                        className="w-48 md:w-48 lg:w-36 lg:mt-5 m-auto md:mb-5"
                        src={item.image}
                        alt="categoryImg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
